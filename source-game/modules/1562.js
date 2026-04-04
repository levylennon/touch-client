function(e, t, i) {
    function n(e) {
        this.progressEgg = new m({
            scene: e,
            position: 5,
            alpha: 1,
            x: e.w / 2,
            y: e.h / 2,
            isHudElement: !0,
            id: "loadingProgressEgg"
        }), this.progressEgg.setAnimManager(new M(this.progressEgg, new g(""), 1.7, 0)), this.progressEggFrameTween = new h(this.progressEgg.animManager, ["frame"]), this.hide()
    }

    function o(e, t) {
        var i = {};
        for (var n in e) e.hasOwnProperty(n) && (i[n] = e[n]);
        for (var o in t)
            if (t.hasOwnProperty(o)) {
                i[o] || (i[o] = []);
                for (var a = t[o], r = 0; r < a.length; r += 1) i[o].push(a[r])
            } return i
    }

    function a(e, t) {
        var i = e.width,
            n = e.height,
            o = t.width,
            a = t.height,
            r = {};
        for (var s in e.graphicsPositions) e.graphicsPositions.hasOwnProperty(s) && (r[s] = e.graphicsPositions[s]);
        for (var c in t.graphicsPositions)
            if (t.graphicsPositions.hasOwnProperty(c)) {
                if (r[c]) continue;
                var l = t.graphicsPositions[c];
                l.sx += i, r[c] = l
            } return {
            width: i + o,
            height: Math.max(n, a),
            graphicsPositions: r
        }
    }
    var r = i(13),
        s = i(1489),
        c = i(1498),
        l = i(18),
        d = i(12),
        u = i(698),
        p = i(130),
        h = i(430).Tween,
        f = i(430).easing,
        b = i(1174),
        m = i(1502),
        M = i(708),
        g = i(706),
        _ = i(105),
        A = i(103),
        O = 1200,
        v = 100,
        y = 20;
    n.prototype.loadAssets = function(e) {
        var t = this.progressEgg.animManager,
            i = this.progressEgg.renderer;
        u.loadTemplate("loader", "loadingLogo", "", function(i) {
            t.template = i, t.assignSymbol({
                base: "loadeur",
                direction: -1
            }, !1), t.tween.stop(), t.frame = 0, e()
        }, i, "archivable")
    },
    n.prototype.hide = function() {
        this.progressEgg.hide(), this.progressEgg.animManager.clear()
    },
    n.prototype.show = function() {
        this.progressEgg.show()
    },
    s.prototype._initLoadingProgress = function() {
        this._loadingProgress = new n(this.mapScene), this._resetTransition()
    },
    s.prototype._resetTransition = function() {
        this._loadingFadeInTransitionRunning = !1, this._loadingProgressVisible = !1, this._waitingForMessage = !1, this._mapLoadingMessage = null, this._isMapLoading = !1, this._mapSceneTransitionGraphic = null
    },
    s.prototype.showLoadingProgress = function(e) {
        var t = this._loadingProgress.progressEgg,
            i = t.animManager.nbFrames;
        this._loadingProgressVisible === !1 ? (this._loadingProgressVisible = !0, t.x = this.mapScene.w / 2, t.y = this.mapScene.h / 2, this._loadingProgress.show(), this._loadingProgress.progressEggFrameTween.reset()
                .from({
                    frame: 0
                })
                .to({
                    frame: .4 * i
                }, 30, f.polyIn, 2)
                .start()) : this._loadingProgress.progressEggFrameTween.reset()
            .from({
                frame: t.animManager.frame
            })
            .to({
                frame: (.7 * e + .4) * i
            }, 5)
            .start()
    },
    s.prototype._hideLoadingProgress = function() {
        this._loadingProgressVisible = !1, this._loadingProgress.hide()
    },
    s.prototype.mapTransitionDisconnect = function() {
        this._mapSceneTransitionGraphic && (this._mapSceneTransitionGraphic.remove(), this._resetTransition())
    },
    s.prototype._makeUserActorWalkInDirection = function(e, t) {
        this.makeActorWalkInDirection(this.actorManager.userActor, e, t)
    },
    s.prototype.makeActorWalkInDirection = function(e, t, i, n) {
        if (e) {
            var o;
            switch (t) {
                case "top":
                    o = 6;
                    break;
                case "bottom":
                    o = 2;
                    break;
                case "left":
                    o = 4;
                    break;
                case "right":
                    o = 0;
                    break;
                default:
                    o = 0
            }
            var a = r.ANGLE_PER_DIRECTION[o];
            i && (a += Math.PI);
            var s = Math.cos(a) * v,
                c = Math.sin(a) * v;
            e.walkToSceneCoordinate(e.x + s, e.y + c, o, y, n)
        } else if (console.error(new Error("makeActorWalkInDirection: actor is " + e)), n) return n()
    },
    s.prototype.launchMapTransition = function(e) {
        var t = this;
        this._loadingProgress.loadAssets(function() {
            t.mapScene.setShader("mapTransition"), t.emit("launchMapTransition", e), t._activateMapScene() ? (t._loadingProgress.progressEgg.alpha = 1, t.mapScene.renderingParams.ratio = 1, t._saveImageForTransition("black"), t._startLoading()) : t._loadingFadeInTransitionRunning === !1 && (t._isMapLoading ? t._startLoading() : (e && t._makeUserActorWalkInDirection(e, !1), t._runLoadingFadeInTransition()))
        })
    },
    s.prototype.cancelMapTransition = function(e) {
        this.emit("cancelMapTransition", e), this.actorManager.userActor.setOnScreenPosition(this.actorManager.userActor.position), this._makeUserActorWalkInDirection(e, !0), this._waitingForMessage && this._runLoadingFadeOutTransition(), this._mapLoadingMessage = null, this._waitingForMessage = !1
    },
    s.prototype._saveImageForTransition = function(e) {
        var t = O,
            i = t * this.mapScene.h / this.mapScene.w,
            n = this.mapScene.renderer,
            o = n.startTextureUsage(t, i, 1, null, "linear");
        if (n.startTextureRendering(o, 0, t, 0, i, !1), "black" === e) this.mapScene.clear(0, 0, 0, 1);
        else {
            var a = t / this.mapScene.w;
            n.save(), n.scale(a, a), this.mapScene.render(), n.restore()
        }
        var r = !0;
        n.stopTextureRendering(r), null === this._mapSceneTransitionGraphic ? this._mapSceneTransitionGraphic = new b({
            w: this.mapScene.w,
            h: this.mapScene.h,
            scene: this.mapScene,
            position: 0,
            isHudElement: !0,
            alpha: 1
        }, o.texture) : (this._mapSceneTransitionGraphic.clear(), this._mapSceneTransitionGraphic.texture = o.texture, this._mapSceneTransitionGraphic.show())
    },
    s.prototype._runLoadingFadeInTransition = function() {
        this._loadingFadeInTransitionRunning = !0, this._waitingForMessage = !0, this.showLoadingProgress(0), new h(this._loadingProgress.progressEgg, ["alpha", "scaleX", "scaleY"])
            .from({
                alpha: 0,
                scaleX: .8,
                scaleY: .8
            })
            .to({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            }, 15, f.backOut, 1.5)
            .start(), this.mapScene.renderingParams.ratio = 0;
        var e = this;
        new h(this.mapScene.renderingParams, ["ratio"])
            .from({
                ratio: 0
            })
            .to({
                ratio: 1
            }, 15, f.polyInOut, 3)
            .start()
            .onFinish(function() {
                e._saveImageForTransition("current"), e._loadingFadeInTransitionRunning = !1, e._startLoading()
            })
    },
    s.prototype._runLoadingFadeOutTransition = function() {
        var e = this,
            t = this.mapScene;
        new h(this._loadingProgress.progressEgg, ["alpha", "scaleX", "scaleY"])
            .from({
                alpha: 1,
                scaleX: 1,
                scaleY: 1
            })
            .to({
                alpha: 0,
                scaleX: .8,
                scaleY: .8
            }, 10, f.backIn, 1.5)
            .start(), new h(this._mapSceneTransitionGraphic, ["alpha"])
            .from({
                alpha: 1
            })
            .to({
                alpha: 0
            }, 10)
            .onFinish(function() {
                null !== e._mapSceneTransitionGraphic && (e._mapSceneTransitionGraphic.remove(), e._mapSceneTransitionGraphic = null)
            })
            .start(), new h(t.renderingParams, ["ratio"])
            .from({
                ratio: 1
            })
            .to({
                ratio: 0
            }, 25, f.polyInOut, 2)
            .onFinish(function() {
                t.setShader("unfiltering"), t.renderingParams.ratio = .15, e._hideLoadingProgress()
            })
            .start(), A.isRoleplayMode && this.makeActorWalkIn(this.actorManager.userActor)
    }, 
    s.prototype.makeActorWalkIn = function(e, t, i) {
        t = t || 100;
        var n, o = this.mapScene,
            a = e.x,
            s = e.y,
            c = Math.abs(o.l - a),
            l = Math.abs(o.l + o.w - a),
            d = Math.abs(o.t - s),
            u = Math.abs(o.t + o.h - s),
            p = c < t,
            h = l < t,
            f = d < t,
            b = u < t;
        if (p) n = f ? 1 : b ? 7 : 0;
        else if (h) n = f ? 3 : b ? 5 : 4;
        else if (f) n = 2;
        else {
            if (!b) return;
            n = 6
        }
        var m = r.ANGLE_PER_DIRECTION[n];
        e.x -= Math.cos(m) * v, e.y -= Math.sin(m) * v, e.walkToSceneCoordinate(a, s, n, y, i)
    },
    s.prototype.loadMap = function(e) {
        this.changeMapTimeout ? (window.clearTimeout(this.changeMapTimeout),
                                this.changeMapTimeout = null )
                              : window.foreground.lock("loadMap"),
                                this._mapLoadingMessage = e,
                                this._loadingFadeInTransitionRunning === !1 && (this._waitingForMessage ? this._startLoading() : this.launchMapTransition())
    },
    s.prototype.reloadMap = function(e) {
        var t = this;
        return this.mapRenderer.isReady ? (
            this._updateMapInfoData(e, { noMovementWaitReset: !0 }),
            window.foreground.show(),
            window.foreground.unlock("loadMap"),
            this.actorManager.updateMapInfoData(e),
            this.emit("mapLoaded", { isReload: !0 }),
            void(this.interactiveBlink && this.highlightInteractivesWithDifferentType()))
            : void this.mapRenderer.once("ready", function() { t.reloadMap(e) })
    };
    var z = null,
        w = null;
    s.prototype._startLoading = function() {
        var e = this._mapLoadingMessage;
        if (null !== e) {
            this._mapLoadingMessage = null,
            this._waitingForMessage = !1,
            this.emit("mapChange", e),
            this.actorManager.userActor.staticAnim(),
            this.actorManager.pause();
            var t = e.mapId,
                i = e.obstacleMapId;
            if (t !== w) {
                this.releaseMap(w), w = t, this._isMapLoading = !0;
                var n = this,
                    s = r.MAP_PATH + i + ".json",
                    c = r.MAP_PATH + t + ".json",
                    u = null,
                    h = null,
                    f = r.DEFAULT_TACTICAL_THEME_MAP;
                l.series([function(e) {
                    return i ? void d.loadJson(s, function(t) {
                        return u = t, e()
                    }) : e()
                }, function(e) {
                    d.loadJson(c, function(t) {
                        return h = t, u && (
                            h.obstacleMapId = i,
                            h.cells = u.cells,
                            h.midgroundLayer = o(h.midgroundLayer, u.midgroundLayer),
                            h.atlasLayout = a(h.atlasLayout, u.atlasLayout)), e()
                    })
                }, function(t) {
                    p.getDataMap("TacticalThemes", [e.tacticalModeId], null, function(i, n) {
                        if (i) return console.error("Unable to get tacticalThemeData information for", e.tacticalModeId, i), t();
                        if (!n) return t();
                        var o = n[e.tacticalModeId];
                        return o && (f = o.mapId), t()
                    })
                }, function(e) {
                    n.tacticalMode.loadThemeMapForMap(f, i || t, h.cells, e)
                }], function(t) {
                    return t ? window.dofus.disconnect("LOADING_MAP_ERROR " + t) : h === r.EMPTY_JSON ? window.dofus.disconnect("ASSET_MISSING") : void(h.id === w && (null === z ? (z = {
                        msg: e,
                        mapData: h
                    }, n._loadMapAssets()) : z = {
                        msg: e,
                        mapData: h
                    }))
                })
            }
        }
    }, 
    s.prototype._loadMapAssets = function() {
        var e = z.msg,
            t = z.mapData,
            i = this;
        this.mapRenderer.setMap(z, function() {
            return null !== z && w !== t.id ? void i._loadMapAssets() : (
            window.foreground.show(),
            window.foreground.unlock("loadMap"),
            c.fillPathGrid(t), 
            i._updateMapInfoData(e),
            i.actorManager.updateMapInfoData(e),
            i.actorManager.unpause(),
            i.actorManager.userActor.moving = !1,
            _.unlockMessages(),
            i.emit("mapLoaded"),
            i._runLoadingFadeOutTransition(),
            i.interactiveBlink && i.highlightInteractivesWithDifferentType(),
            w = null,
            z = null,
            void(i._isMapLoading = !1))
        })
    }
}
