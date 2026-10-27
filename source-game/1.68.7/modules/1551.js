function(e, t, i) {
    function n(e, t) {
        e ? (w = !0, window.foreground.showInfobox(e, t)) : w && (w = !1, window.foreground.hideInfobox())
    }

    function o() {
        y = null, T = null, n(!1)
    }

    function a() {
        z = null, o()
    }

    function r(e, t, i, n, o, a) {
        a.push(t);
        for (var s = e[t], c = s.pathNodes, l = null, d = 0; d < c.length; d += 1) {
            var u = c[d];
            if (u.from === i) {
                l = new A;
                break
            }
            var p = o - n;
            if (!(0 === p || p + 1 < u.distance - 1) && a.indexOf(u.from) === -1 && (l = r(e, u.from, i, n + 1, o, O(a)))) break
        }
        return l && l.addNode(t, s, n), l
    }

    function s(e, t, i, n) {
        var o = i[t];
        return o ? (o.path || (o.path = r(i, t, e, 0, n - 1, [])), o.path) : null
    }
    var c = i(1489),
        l = i(1552),
        d = i(1498)
        .compressPath,
        u = i(1535),
        p = i(735),
        h = i(91)
        .playUiSound,
        f = i(342),
        b = i(343),
        m = i(1554),
        M = i(55),
        g = i(1550)
        .trueName,
        _ = i(62),
        A = i(1555),
        O = i(32)
        .shallowCopyArray,
        v = i(1556),
        y = null,
        z = null,
        w = !1,
        T = null,
        C = new u,
        I = {
            DEFAULT: 1,
            QUEUE: 2
        };
    c.prototype.fightTurnStart = function(e) {
        this._previousTurn = this._isUserTurn, this._isUserTurn = e, window.background.hideTargetHighlights(), this._resetFightPositionLayer(), this._previousTurn !== this._isUserTurn && (e ? this._enemyToUserTurn() : this._userToEnemyTurn()), this._resetWalkLayer(), a()
    }, c.prototype._switchTurn = function(e, t, i, n, o) {
        if (this._spellRangeLayer) {
            for (var a = {}, r = this._spellRangeLayer.cellInfos, s = Object.keys(r), c = 0; c < s.length; c++) {
                var l = r[s[c]];
                l.transformState === e ? a[l.cellId] = new f(l.cellId, l.distanceToPlayer, t) : l.transformState === i && (a[l.cellId] = new f(l.cellId, l.distanceToPlayer, n))
            }
            0 !== Object.keys(a)
                .length && this._resetSpellRangeLayer(a)
        }
        if (this._spellEffectLayer) {
            for (a = {}, r = this._spellEffectLayer.cellInfos, s = Object.keys(r), c = 0; c < s.length; c++) l = r[s[c]], a[l.cellId] = new f(l.cellId, l.distanceToPlayer, o);
            this._resetSpellEffectLayer(a)
        }
    }, c.prototype._enemyToUserTurn = function() {
        window.background.showTargetHighlights(), window.foreground.confirmBox.show(), window.gui.damagePreview.checkSpellAndShow(), this._switchTurn(b.inSightEnemyTurn, b.inSight, b.outSightEnemyTurn, b.outSight, b.areaOfEffect)
    }, c.prototype._userToEnemyTurn = function() {
        this._switchTurn(b.inSight, b.inSightEnemyTurn, b.outSight, b.outSightEnemyTurn, b.areaOfEffectEnemyTurn)
    }, c.prototype.touchCancel = function() {
        this.clearHighlights(null, I.DEFAULT), a()
    }, c.prototype.touchMove = function(e, t, i) {
        var n = this.mapScene.convertCanvasToSceneCoordinate(e, t),
            o = this.mapRenderer.getCellId(n.x, n.y)
            .cell;
        if (y !== o) {
            if (window.gui.pingSystem.isActive()) return y && this.mapRenderer.deletePingHighlight(y), y = o, this.mapRenderer.addPingHighlight(o, this.getContext(o));
            y = o, "fight" === i.mode && void 0 !== i.spellId ? this.displayEffectZone(o) : "fight" === i.mode && this._isUserTurn && (this.actorManager.getActorsOnCell(o)
                .length > 0 ? this._resetWalkLayer() : (window.foreground.confirmBox.close(), T = this._displayPathInFight(o)))
        }
    }, c.prototype._displayPathInFight = function(e) {
        var t = this.actorManager.userActor,
            i = t.cellId;
        z = z || l.getReachableZone(t, i);
        var a = e;
        if (!z[e]) {
            var r = p.getMapPointFromCellId(i),
                c = p.getMapPointFromCellId(a);
            C.set(r.x, r.y, c.x, c.y), C.exec(function(e, t) {
                var i = p.getCellIdFromMapPoint(e, t);
                z[i] ? a = i : C.stop()
            })
        }
        var d = t.getFighterData(),
            u = d.stats,
            h = s(i, a, z, u.movementPoints);
        if (!h) return o();
        for (var m = h.reachable[h.reachable.length - 1], M = {}, g = 0; g < h.reachable.length; g++) M[h.reachable[g]] = new f(h.reachable[g], h.reachableMap[h.reachable[g]], b.walkable);
        for (var _ = 0; _ < h.unreachable.length; _++) M[h.unreachable[_]] = new f(h.unreachable[_], h.unreachableMap[h.unreachable[_]], b.unwalkable);
        return h.reachable.length > 0 && (M[m] = new f(m, 0, b.walkableLast)), window.background.removeTargetHighlights(), this._resetWalkLayer(M), h.costMP > 0 || h.costAP > 0 ? n("tackle", {
            ap: h.costAP,
            mp: h.costMP
        }) : n(!1), h
    }, c.prototype.touchEnd = function(e, t, i) {
        i = i || {}, i.canvasX = e, i.canvasY = t;
        var n = this.mapScene.convertCanvasToSceneCoordinate(e, t),
            o = this.mapRenderer,
            a = o.getCellId(n.x, n.y),
            r = o.getCellSceneCoordinate(a.cell);
        (!this.unblockedCells || this.unblockedCells[a.cell] || this._tapInteractive(n.x, n.y)) && (window.gui.pingSystem.isActive() || o.addTapFeedback(r.x, r.y), this._touchEnd(n.x, n.y, a, i))
    };
    var S = null;
    c.prototype.setUnblockedCells = function(e) {
        this.unblockedCells = e
    }, c.prototype.resetUnblockedCells = function() {
        this.unblockedCells = null
    }, c.prototype.cellHover = function(e) {
        window.gui.playerData.isFighting && S !== e && (S = e, this.displayEffectZone(e, {
            showDamagePreview: !0
        }))
    }, c.prototype.cellHoverRelease = function(e) {
        var t = this._shouldSkipConfirmBox(M.confirmBoxWhenDragCasting, e);
        this._spellRangeLayer && this._spellRangeLayer.cellInfos.hasOwnProperty(e) ? t ? (this._castSpellImmediately(e), this.clearSpellDisplay()) : this._castSpellImmediatelyConfirm(e) : this.clearSpellDisplay(), this._isUserTurn && t && this.displayUserMovementZone()
    }, c.prototype._touchEnd = function(e, t, i, n) {
        n.hasOwnProperty("mode") && (window.gui.pingSystem.isActive() ? this._tapPing(i) : "fightPlacement" === n.mode ? this._tapFightPlacement(e, t, i, n) : "fight" === n.mode && void 0 !== n.spellId ? this._tapFightWithSpell(e, t, i, n) : "fight" === n.mode && this._isUserTurn ? this._tapFight(e, t, i, n) : "roleplay" === n.mode && this._tapRoleplay(e, t, i, n), a())
    }, c.prototype.isCellEmpty = function(e) {
        var t = this.actorManager.getActorsOnCell(e);
        return !(t.length > 0)
    }, c.prototype.getContext = function(e) {
        var t = this.actorManager.getActorsOnCell(e);
        if (!this.isCellEmpty(e)) {
            var i = window.gui.fightManager,
                n = t[0].getFighter();
            if (!n || !n.id) return v.PING_TARGET_NOTHING;
            var o = i.isFighterOnUsersTeam(n.id),
                a = t[0].getFighter()
                .isSummon() && o;
            if (a) return v.PING_TARGET_SUMMON_ALLY;
            if (this.actorManager.userActor.actorId === t[0].actorId) return v.PING_TARGET_YOURSELF;
            if (o) return v.PING_TARGET_ALLY;
            if (!o) return v.PING_TARGET_ENNEMY
        }
        return v.PING_TARGET_NOTHING
    }, c.prototype._tapPing = function(e) {
        var t = window.gui.pingSystem;
        if (!t.isPingBoxOpen()) {
            y && this.mapRenderer.deletePingHighlight(y);
            var i = e.cell;
            this.mapRenderer.addPingHighlight(i, this.getContext(i), !0)
        }
    }, c.prototype._tapRoleplay = function(e, t, i, n) {
        var o = this,
            a = n.canvasX,
            r = n.canvasY,
            s = n.changeMapRequest,
            c = this.mapRenderer,
            l = this.actorManager.userActor,
            d = this.actionQueue.isActive();
        if (d) {
            var u = this._tapInteractive(e, t);
            if (!u && !l.moving && (s = s || c.getFirstMapFlag(i.cell))) {
                var p = !0,
                    h = this.actionQueue.enqueue("changeMap", p, function() {
                        o.gotoNeighbourMap(s, i.cell, a, r)
                    });
                return void(h && window.foreground.showBorderArrow(s, a, r))
            }
        } else this.lastContextualMenuSkillId = null;
        if (!l.isLocked) {
            if (l.moving || this.isMovementWaitingForConfirmation) {
                if (window.foreground.hideBorderArrow(), d && !s && this._tapInteractive(e, t)) return;
                return this.clearHighlights(), this.actionQueue.clear(), void this.cancelUserActorMovement(function() {
                    o._touchEnd(e, t, i, n)
                })
            }
            if (!s) {
                if (this._tapInteractive(e, t)) return;
                var f = this.actorManager.getActorsOnCell(i.cell);
                if (f[0] && f[0].position === i) return void(0 === i.dist && f[0].tap(e, t, c.camera))
            }
            this.clearHighlights();
            var b = i.cell;
            return (s = s || c.getFirstMapFlag(i.cell)) ? this.gotoNeighbourMap(s, i.cell, a, r) : void this._movePlayerOnMap(b)
        }
    }, c.prototype._tapFightWithSpell = function(e, t, i, n) {
        var o = i.cell;
        if (!this.unblockedCells || this.unblockedCells[o]) {
            window.foreground.fightIsUserTurn ? n.hideConfirmWindow = !1 : n.hideConfirmWindow = !0;
            var a = this._shouldSkipConfirmBox(M.confirmBoxWhenClickCasting, o);
            a ? this._castSpell(o, e, t, n) : this._castSpellConfirm(o, e, t, n)
        }
    }, c.prototype._shouldSkipConfirmBox = function(e, t) {
        var i = !1;
        return e === _.NEVER ? i = !0 : e === _.EMPTY_ONLY ? i = !this.isCellEmpty(t) : e === _.ALWAYS && (i = !1), i
    }, c.prototype.displayUserMovementZone = function() {
        if (this.mapRenderer.isReady && !window.gui.playerData.isSpectator) {
            this.clearSpellDisplay();
            var e = this.actorManager.userActor,
                t = e.cellId,
                i = z || l.getReachableZone(e, t);
            this.clearUserMovementZone();
            var n, o = {},
                a = window.isoEngine.actorManager.userActor.cellId;
            for (var r in i)
                if (i.hasOwnProperty(r)) {
                    var s, c = m.getDistance(a, r);
                    s = i[r].reachable ? i[r].isTackled ? b.walkAreaRequiresAP : b.walkArea : b.walkAreaRestricted, o[r] = new f((~~r), c, s), n = !0
                } n && this._resetWalkAreaLayer(o)
        }
    }, c.prototype.tryDisplayUserMovementZone = function() {
        return this._spellRangeLayer ? void this.displaySpellRange() : void this.displayUserMovementZone()
    }, c.prototype.displayEnemyMovementZone = function(e) {
        if (this.mapRenderer.isReady) {
            this.clearSpellDisplay();
            var t = this.actorManager.getActor(e.id);
            if (t) {
                var i = t.cellId,
                    n = l.getReachableZone(t, i);
                this._resetWalkAreaLayer();
                for (var o, a = {}, r = Object.keys(n), s = 0; s < r.length; s++) {
                    var c, d = r[s],
                        u = m.getDistance(i, d);
                    c = n[d].reachable ? n[d].isTackled ? b.enemyWalkAreaRequiresAP : b.enemyWalkArea : b.enemyWalkAreaRestricted, a[d] = new f((~~d), u, c), o = !0
                }
                o && this._resetEnemyWalkAreaLayer(a)
            }
        }
    }, c.prototype.removeEnemyMovementZone = function() {
        this._resetEnemyWalkAreaLayer(), this._isUserTurn && window.gui.fightManager.isInBattle() && (window.foreground.isSpellSelected() ? window.foreground._displaySpellRange() : this.displayUserMovementZone())
    }, c.prototype._tapFight = function(e, t, i) {
        function n(e) {
            return e ? (w.unshift(c), window.gui.emit("checkServerLag", "fightAction", "start"), h.emit("fightTap", s), window.dofus.sendMessage("GameMapMovementRequestMessage", {
                keyMovements: d(w),
                mapId: r
            }), h._resetWalkLayer(), void a()) : void h._resetWalkLayer()
        }
        var r = this.mapRenderer.map.id,
            s = i.cell,
            c = this.actorManager.userActor.cellId,
            u = window.foreground.confirmBox,
            h = this;
        if (!this.unblockedCells || this.unblockedCells[s]) {
            if (this.actorManager.getActorsOnCell(s)
                .length > 0 || !this._isUserTurn) {
                var f = this.actorManager.userActor,
                    b = b || l.getReachableZone(f, c),
                    m = p.getNeighbourCells(s, !0),
                    _ = Number.MAX_VALUE,
                    A = 0,
                    O = {};
                if (!(m.length > 0 && M.confirmBoxWhenWalking)) return o(), this._resetWalkLayer(), void u.close();
                for (var v = 0; v < m.length; v++)
                    if (T = this._displayPathInFight(m[v]), void 0 !== m[v] && m[v] !== c && b[m[v]] && T && 0 !== T.reachable.length && T.reachable.indexOf(m[v]) !== -1) {
                        O = this.mapRenderer.grid.getCoordinateSceneFromGrid(this.mapRenderer.grid.getCoordinateGridFromCellId(m[v]));
                        var z = Math.sqrt(Math.pow(O.x - e, 2) + Math.pow(O.y - t, 2));
                        z < _ && (_ = z, A = m[v])
                    } s = A, T = this._displayPathInFight(s)
            }
            if (T || (T = this._displayPathInFight(s)), !T || 0 === T.reachable.length || !y && T.reachable.indexOf(s) === -1 && T.unreachable.indexOf(s) === -1) return o(), this._resetWalkLayer(), void u.close();
            var w = T && T.reachable;
            if (w && w.indexOf(s) > -1) {
                var C = {
                        mp: T.costMP,
                        ap: T.costAP
                    },
                    I = g(["move", C, w, s, r]);
                M.confirmBoxWhenWalking ? u.open("move", C, I, {
                    startHidden: !1,
                    allowDoubleTap: !0
                }, n) : n(!0)
            } else h._resetWalkLayer()
        }
    }, c.prototype._tapFightPlacement = function(e, t, i, n) {
        var o = this.actorManager.getActorsOnCell(i.cell);
        if (o.length) {
            var a = o[0];
            return void((window.gui.fightManager.isFighterOnUsersTeam(a.actorId) || a.isPlayer()) && a.tap(e, t, this.mapRenderer.camera))
        }
        var r = i.cell,
            s = n.possiblePlacements || [],
            c = s.indexOf(r);
        c !== -1 && (this.emit("placementTap", r), window.dofus.sendMessage("GameFightPlacementPositionRequestMessage", {
            cellId: r
        }), h("FIGHT_POSITION"))
    };
    var E, L;
    c.prototype.holdStart = function() {
        this.highlightAllInteractives(5), E = this._getAllInteractives(), L = null
    }, c.prototype.holdEnd = function() {
        this.clearHighlights(null, I.DEFAULT), this.removeEnemyMovementZone(), window.gui.damagePreview.cancel(), window.gui.fightManager.isInFightPreparation() && this.clearUserMovementZone()
    }, c.prototype.holdAndMove = function(e, t) {
        for (var i = this.mapScene.convertCanvasToSceneCoordinate(e, t), n = null, o = 0; o < E.length; o++) {
            var a = E[o];
            if (this._isElementClicked(a, i.x, i.y)) {
                n = a;
                break
            }
        }
        return n ? L === n ? n : (L = n, this.clearHighlights(null, I.DEFAULT), this._addHighlight(n), n) : (L = null, void this.clearHighlights(null, I.DEFAULT))
    }
}
