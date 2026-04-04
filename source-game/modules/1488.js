function(e, t, i) {
    var n = i(1489),
        o = i(1498),
        a = o.compressPath,
        r = i(52),
        s = i(105),
        c = i(103),
        l = 3e3,
        d = 1e3,
        u = [23, 24, 25];
    n.prototype._confirmMovement = function(e) {
        window.dofus.sendMessage("GameMapMovementConfirmMessagе", null), this.emit("movementConfirm", e)
    }, n.prototype.onArrived = function(e) {
        if (this._confirmMovement(e), this.mapRenderer.removeMovementFeedback(), this.endMovementCallback) {
            var t = this.endMovementCallback;
            this.endMovementCallback = null, t(null, e)
        }
    }, n.prototype.cancelUserActorMovement = function(e) {
        if (this.isMovementWaitingForConfirmation) return this.lastMoveRequestTime && !r.isDialogActive() && Date.now() - this.lastMoveRequestTime > d && window.gui.connectionSplashScreen.onStateChange("UNSTABLE"), this.endMovementCallback = e, void(this.isMovementCanceled = !0);
        this.isMovementCanceled = !1;
        var t = this.actorManager.userActor;
        return t.moving ? (this.mapRenderer.removeMovementFeedback(), this.endMovementCallback = null, void t.cancelMovement(e)) : (this.endMovementCallback = e, this.onArrived())
    }, n.prototype.cancelMoveAndDo = function(e) {
        return this.actorManager.userActor.moving || this.isMovementWaitingForConfirmation ? this.cancelUserActorMovement(e) : e()
    }, n.prototype.roleplayUserActorMovement = function(e, t) {
        var i = this,
            n = e[e.length - 1],
            o = this.actorManager.userActor;
        if (this.isMovementWaitingForConfirmation = !1, window.gui.connectionSplashScreen.onStateChange("CONNECTED"), window.gui.emit("checkServerLag", "roleplayUserActorMovement", "stop"), this.isMovementCanceled) return this.cancelUserActorMovement(this.endMovementCallback);
        if (!o.moving) {
            for (var a = null, r = 0; r < e.length; r++)
                if (e[r] === o.cellId) {
                    a = r;
                    break
                } if (null === a) return o.cellId !== n && o.setDisposition(n), this.onArrived(n);
            if (o.cellId === n) return o.setDisposition(n), this.onArrived(n);
            var s = e.slice(a);
            o.setPath(s, {
                cb: function() {
                    i.emit("arrived", n)
                },
                forceWalk: t.forceWalk
            }), o.setCellPosition(s[s.length - 1])
        }
        if (this.removeAllListeners("arrived"), this.once("arrived", this.onArrived), t.forceWalk) return o.noMovement(function() {
            o.setPath(e, {
                cb: function() {
                    i.emit("arrived", n)
                },
                forceWalk: t.forceWalk
            })
        });
        var c = [];
        return o.isPathMatchingServerPath(e, c) ? void 0 : 0 !== c.length ? (this.endMovementCallback = null, o.switchPath(c, function() {
            i.emit("arrived", n)
        })) : (o.noMovement(), o.setDisposition(n), this.endMovementCallback = null, this.onArrived(n))
    }, n.prototype._movePlayerOnMap = function(e, t, i) {
        i && "function" == typeof i || (i = function() {});
        var n = !1;
        window.gui.playerData.inventory.isOverloaded() && !window.gui.playerData.isMutant() && (n = !0), t = t || !1;
        var r = this.actorManager.userActor,
            s = r.cellId;
        if (s === e) return i(null, e), e;
        for (var c = 0; c < u.length; c++)
            if (r.look.bonesId === u[c]) return null;
        var l = this.mapRenderer.map;
        if (!l) return console.error(new Error("map is null")), null;
        var d = r.canMoveDiagonally,
            p = this.actorManager.getOccupiedCells(),
            h = o.getPath(s, e, p, d, t);
        if (h.length <= 1) return i(new Error("_movePlayerOnMap noPath:" + s + ":" + e)), null;
        this.isMovementWaitingForConfirmation = !0, this.lastMoveRequestTime = Date.now(), window.gui.emit("checkServerLag", "roleplayUserActorMovement", "start"), window.dofus.sendMessage("GameMapMovementRequestMessage", {
            keyMovements: a(h),
            mapId: l.id
        });
        var f = h[h.length - 1],
            b = this;
        this.mapRenderer.addMovementFeedback(f), this.endMovementCallback = i, r.setPath(h, {
            cb: function() {
                l.id !== b.mapRenderer.map.id || b.isMapChanging || b.emit("arrived", f)
            },
            forceWalk: n
        });
        var m = this.mapScene.camera;
        return m.setAcceleration(1), r.pathTween.removeOnUpdate(), r.onMovementUpdate = function() {
            m.moveTo(r.x, r.y)
        }, r.pathTween.onUpdate(r.onMovementUpdate), this.userPreviousPosition = r.cellId, r.setCellPosition(f), f
    }, n.prototype.cancelCameraMovement = function() {
        var e = this.actorManager.userActor;
        e.pathTween.removeOnUpdate(e.onMovementUpdate)
    }, n.prototype.noMovement = function() {
        c.isFightMode || (console.warn("[ISO ENGINE] previous movement request has been refused, canceling movement"), this.onQuickReconnection())
    }, n.prototype.getChangeMapCellAt = function(e, t, i) {
        var n = this.mapScene.convertCanvasToSceneCoordinate(e, t);
        if (!this.mapRenderer.isReady) return -1;
        var o = this.mapRenderer.getCellId(n.x, n.y);
        return this.mapRenderer.getChangeMapFlags(o.cell)[i] ? o.cell : -1
    }, n.prototype._requestMapChange = function(e, t) {
        window.foreground.lock("loadMap"), window.dofus.sendMessage("ChangeMapMessage", {
            mapId: e
        }), this.emit("requestMapChange"), this.launchMapTransition(t);
        var i = this;
        this.changeMapTimeout = window.setTimeout(function() {
            s.unlockMessages(), i.changeMapTimeout = null;
            var e = window.foreground;
            e.unlock("loadMap"), e.hideBorderArrow(), i.cancelMapTransition(t)
        }, l)
    }, n.prototype.gotoNeighbourMap = function(e, t, i, n) {
        function o(i, n) {
            i || n !== t || a._requestMapChange(a.mapRenderer.map[e + "NeighbourId"], e)
        }
        var a = this;
        if (this.actorManager.userActor.moving) return this.cancelUserActorMovement(function() {
            a.gotoNeighbourMap(e, t, i, n)
        });
        var r = this._movePlayerOnMap(t, !1, o);
        r === t && window.foreground.showBorderArrow(e, i, n, a.mapRenderer.map[e + "NeighbourId"])
    }, n.prototype.clearPendingMovement = function() {
        this.isMovementWaitingForConfirmation = !1, this.endMovementCallback = null, this.isMovementCanceled = !1
    }
}
