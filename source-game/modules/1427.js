function(e, t, i) {
    function n(e, t) {
        var i = window.foreground,
            n = i.convertSceneToScreenCoordinate(e, t);
        return z.getCoordinatesRelativeToBody(n.x, n.y)
    }

    function o() {}

    function a(e) {
        return e && e instanceof _ ? void(this.element = e) : console.warn("UIElement - The element does not exist or is not a WuiDom")
    }

    function r(e) {
        this.actorId = e
    }

    function s(e) {
        this.npcId = e
    }

    function c(e) {
        this.monsterId = e
    }

    function l(e) {
        var t = window.isoEngine.mapRenderer.interactiveElements[e],
            i = window.isoEngine.mapRenderer.identifiedElements[e];
        return i && t ? void(this.element = i) : console.warn("InteractiveElement - Element not found")
    }

    function d(e) {
        this.cellId = e
    }

    function u(e, t) {
        this.positionReference = e, this.params = t
    }

    function p(e, t) {
        this.elementReference = e, this.params = t
    }

    function h() {
        _.call(this, "div", {
            className: "pointerHint"
        }), this.reset()
    }

    function f() {
        _.call(this, "div", {
            className: "HintAnimationManager"
        }), this.targetedElement = null, this._tween = null, this.pointerHint = null, this.fxCircles = null, this.ANIMATION_PATH = S, this._init = !1, this._setupDOM(), this._setupListeners()
    }

    function b(e, t) {
        var i = t.x - e.x,
            n = t.y - e.y,
            o = Math.atan2(n, i),
            a = o * (180 / Math.PI);
        return a
    }

    function m(e, t) {
        var i = t.x - e.x,
            n = t.y - e.y,
            o = Math.sqrt(i * i + n * n);
        return o
    }

    function M() {
        _.call(this, "div", {
            className: "pipe"
        }), this.reset()
    }
    i(1428);
    var g = i(56)
        .inherits,
        _ = i(72),
        A = i(430),
        O = A.Tween,
        v = A.easing,
        y = i(66),
        z = i(67),
        w = i(91)
        .playUiSound,
        T = {
            w: 100,
            h: 126
        },
        C = 25,
        I = {
            x: -10,
            y: -60
        },
        S = {
            POINT_TO_BOTTOM: 0,
            LEFT_TOP_POINT_TO_RIGHT: 1,
            LEFT_BOTTOM_POINT_TO_RIGHT: 2,
            RIGHT_BOTTOM_POINT_TO_RIGHT: 3,
            RIGHT_BOTTOM_POINT_TO_CENTER: 4,
            LEFT_TOP_POINT_TO_CENTER: 5
        };
    o.prototype.getPosition = function() {
        return {}
    }, g(a, o), a.prototype.getPosition = function() {
        return this.element && this.element.rootElement ? y(this.element.rootElement) : (console.warn("UIElement.getPosition - The element does not exist or does not have rootElement"), {})
    }, g(r, o), r.prototype.getActor = function() {
        var e = window.actorManager.getActor(this.actorId);
        return e ? e : (console.warn("ActorElement.getActor - Actor not found"), null)
    }, r.prototype.getPosition = function() {
        var e = this.getActor();
        if (!e) return console.warn("ActorElement.getPosition - Actor not found"), {};
        var t = n(e.x + I.x, e.y + I.y);
        return {
            top: t.y,
            left: t.x,
            right: t.x,
            bottom: t.y,
            width: 0,
            height: 0
        }
    }, g(s, r), s.prototype.getActor = function() {
        var e = window.actorManager.getActorFromNpcId(this.npcId);
        return e ? e : (console.warn("NPCElement.getActor - NPC not found"), null)
    }, g(c, r), c.prototype.getActor = function() {
        var e = window.actorManager.getActorFromMonsterId(this.monsterId);
        return e ? e : (console.warn("MonsterElement.getActor - Monster not found"), null)
    }, g(l, o), l.prototype.getPosition = function() {
        if (!this.element) return console.warn("InteractiveElement.getPosition - Element does not exist"), {};
        var e = this.element.bbox,
            t = n(e[0] + (e[1] - e[0]) / 2, e[2] + (e[3] - e[2]) / 2);
        return {
            top: t.y,
            left: t.x,
            right: t.x,
            bottom: t.y,
            width: 0,
            height: 0
        }
    }, g(d, o), d.prototype.getPosition = function() {
        if (!this.cellId) return console.warn("CellElement.getPosition - No cellId"), {};
        var e = window.isoEngine.mapRenderer.getCellSceneCoordinate(this.cellId),
            t = n(e.x, e.y);
        return {
            top: t.y,
            left: t.x,
            right: t.x,
            bottom: t.y,
            width: 0,
            height: 0
        }
    }, u.prototype._getPositionReference = function() {
        return {
            x: this.positionReference.x,
            y: this.positionReference.y
        }
    }, u.prototype.getPosition = function() {
        return {
            x: this.x,
            y: this.y,
            alpha: this.alpha,
            rotation: this.rotation
        }
    }, Object.defineProperty(u.prototype, "x", {
        get: function() {
            return this._getPositionReference()
                .x + this.params.x
        }
    }), Object.defineProperty(u.prototype, "y", {
        get: function() {
            return this._getPositionReference()
                .y + this.params.y
        }
    }), Object.defineProperty(u.prototype, "alpha", {
        get: function() {
            return this.params.alpha
        }
    }), Object.defineProperty(u.prototype, "rotation", {
        get: function() {
            return this.params.rotation
        }
    }), g(p, u), p.prototype._getPositionReference = function() {
        return {
            x: this.elementReference.getPosition()
                .left,
            y: this.elementReference.getPosition()
                .top
        }
    }, g(h, _), h.prototype.reset = function() {
        this._x = 0, this._y = 0, this._scaleX = 1, this._scaleY = 1, this._rotation = 0, this._alpha = 0, this.refresh()
    }, h.prototype.refresh = function() {
        this.setStyles({
            transform: "translate(" + this._x + "px," + this._y + "px) scale(" + this._scaleX + "," + this._scaleY + ") rotate(" + this._rotation + "deg) ",
            opacity: this._alpha
        })
    }, Object.defineProperty(h.prototype, "x", {
        get: function() {
            return this._x
        },
        set: function(e) {
            this._x = e, this.refresh()
        }
    }), Object.defineProperty(h.prototype, "y", {
        get: function() {
            return this._y
        },
        set: function(e) {
            this._y = e, this.refresh()
        }
    }), Object.defineProperty(h.prototype, "scaleX", {
        get: function() {
            return this._scaleX
        },
        set: function(e) {
            this._scaleX = e, this.refresh()
        }
    }), Object.defineProperty(h.prototype, "scaleY", {
        get: function() {
            return this._scaleY
        },
        set: function(e) {
            this._scaleY = e, this.refresh()
        }
    }), Object.defineProperty(h.prototype, "rotation", {
        get: function() {
            return this._rotation
        },
        set: function(e) {
            this._rotation = e, this.refresh()
        }
    }), Object.defineProperty(h.prototype, "alpha", {
        get: function() {
            return this._alpha
        },
        set: function(e) {
            this._alpha = e, this.refresh()
        }
    }), g(f, _), e.exports = f, f.prototype._setupListeners = function() {
        var e = this;
        this._init || (window.gui.on("disconnect", function() {
            e.stopHint()
        }), window.isoEngine.on("mapChange", function() {
            e.stopHint()
        }), window.addEventListener("orientationchange", function() {
            e._onOrientationChange()
        }), window.gui.on("iOSWebviewRescaled", function() {
            e._onOrientationChange()
        }), window.isoEngine.mapRenderer.on("ready", function() {
            e.currentElement && e.playTap(e.currentElement, e.currentParams)
        }), this._init = !0)
    }, f.prototype._onOrientationChange = function() {
        this.toggleDisplay(window.gui.isPortraitMode())
    }, g(M, _), M.prototype.reset = function() {
        this._origin = {
            x: 0,
            y: 0
        }, this._final = {
            x: 0,
            y: 0
        }, this._rotation = 0, this._alpha = 0, this._tween && (this._tween.playing || this._tween.starting) && this._tween.stop(), this._tween = null, this.refresh()
    }, M.prototype.playAnimation = function(e, t) {
        this.reset();
        var i = this;
        this._rotation = b(e, t), this._origin = e, this._tween = new O(this, ["x", "y", "alpha"]), this._tween.from({
                x: e.x,
                y: e.y,
                alpha: 0
            })
            .to({
                x: e.x,
                y: e.y,
                alpha: 1
            }, 10, v.linear)
            .to({
                x: t.x,
                y: t.y,
                alpha: 1
            }, 15, v.linear)
            .wait(14)
            .to({
                x: t.x,
                y: t.y,
                alpha: 0
            }, 20, v.quadOut)
            .onFinish(function() {
                i.reset()
            })
            .start()
    }, M.prototype.refresh = function() {
        var e = m(this._origin, this._final);
        this.setStyles({
            transform: "translate(" + this._origin.x + "px," + this._origin.y + "px) translateZ(1px)rotate(" + this._rotation + "deg) ",
            width: e + "px",
            opacity: this._alpha
        })
    }, Object.defineProperty(M.prototype, "x", {
        get: function() {
            return this._final.x
        },
        set: function(e) {
            this._final.x = e, this.refresh()
        }
    }), Object.defineProperty(M.prototype, "y", {
        get: function() {
            return this._final.y
        },
        set: function(e) {
            this._final.y = e, this.refresh()
        }
    }), Object.defineProperty(M.prototype, "alpha", {
        get: function() {
            return this._alpha
        },
        set: function(e) {
            this._alpha = e, this.refresh()
        }
    }), f.prototype._setupDOM = function() {
        this._init || (this.pointerHint = this.appendChild(new h), this.fxCircles = this.createChild("div", {
            className: "fxCircles"
        }), this.fxCircles.createChild("div", {
            className: "circle1"
        }), this.circle2 = this.fxCircles.createChild("div", {
            className: "circle2"
        }), this.fxCircles.createChild("div", {
            className: "blurryCircle"
        }), this.pipe = this.appendChild(new M))
    }, f.prototype.playCircles = function(e, t, i) {
        this.fxCircles.setStyle("transform", "translate(" + e + "px," + t + "px)"), this.fxCircles.toggleClassName("activeAnimation", !0), this.circle2.toggleDisplay(i)
    }, f.prototype.stopCircles = function() {
        this.fxCircles.toggleClassName("activeAnimation", !1), this.circle2.toggleDisplay(!0)
    }, f.prototype.stopHint = function() {
        this._tween && (this._tween.playing || this._tween.starting) && this._tween.stop(), window.isoEngine.mapRenderer.cellHintManager.stopAnimation(), this.stopCircles(), this.pointerHint.reset(), this.delClassNames(["inMap"])
    }, f.prototype.playHintOnCell = function(e, t) {
        this.playCellTap(e, {
            nbCells: t.nbCells,
            animationPath: S.POINT_TO_BOTTOM
        })
    }, f.prototype.playInteractiveElementTap = function(e, t) {
        this.playTap(new l(e), t)
    }, f.prototype.playMonsterTap = function(e, t) {
        this.playTap(new c(e), t)
    }, f.prototype.playNPCTap = function(e, t) {
        this.playTap(new s(e), t)
    }, f.prototype.playUITap = function(e, t) {
        this.playTap(new a(e), t)
    }, f.prototype.playUIDragDrop = function(e, t, i) {
        i.endDom = new a(t), this.playTap(new a(e), i)
    }, f.prototype.playCellTap = function(e, t) {
        this.playTap(new d(e), t)
    }, f.prototype.playTap = function(e, t) {
        var i = this;
        if (this.stopHint(), window.foreground.lockMap.loadMap) return this.currentElement = e, void(this.currentParams = t);
        if (this.currentElement = null, this.currentParams = null, !(e && e instanceof o)) return console.error("HintAnimationManager - The element does not exist or is not a Element");
        if (t.hideOnTap && e instanceof a) {
            var n = function() {
                i.stopHint(), e.element.removeListener("tap", n)
            };
            e.element.on("tap", n)
        }
        var r, s, c = e.getPosition(),
            l = new p(e, {
                x: c.width / 2,
                y: c.height / 2,
                rotation: 0,
                alpha: 0
            }),
            h = t.endDom;
        if (h) {
            var f = h.getPosition();
            s = new p(h, {
                x: f.width / 2,
                y: f.height / 2,
                rotation: 0,
                alpha: 0
            })
        }
        switch (this._tween = new O(this.pointerHint, ["x", "y", "alpha", "rotation"]), e instanceof d && t.nbCells && window.isoEngine.mapRenderer.cellHintManager.playAnimation("cases_" + t.nbCells, e.cellId), t.animationPath) {
            case S.POINT_TO_BOTTOM:
                r = new p(e, {
                        x: -(T.w + C) / 2,
                        y: -(T.h + C)
                    }), l = new p(e, {
                        x: 0,
                        y: 0,
                        rotation: 0,
                        alpha: 0
                    }), this.addClassNames("inMap"), this._tween.from(new u(r, {
                        x: 0,
                        y: -50,
                        alpha: 0,
                        rotation: 90
                    }))
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 180
                    }), 10, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 180
                    }), 20)
                    .to(new u(r, {
                        x: 0,
                        y: 30,
                        alpha: 1,
                        rotation: 180
                    }), 20, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 180
                    }), 20, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 30,
                        alpha: 1,
                        rotation: 180
                    }), 20, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 180
                    }), 20, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 30,
                        alpha: 1,
                        rotation: 180
                    }), 20, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 180
                    }), 20, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 3, v.quadOut, null, function() {
                        i.playCircles(l.x - 60, l.y - 60, !1), w("FINGER_TAP")
                    })
                    .to(new u(r, {
                        x: 0,
                        y: 30,
                        alpha: 1,
                        rotation: 180
                    }), 2, v.quadOut)
                    .wait(10)
                    .to(new u(r, {
                        x: 0,
                        y: -150,
                        alpha: 0,
                        rotation: 180
                    }), 20, v.quadOut);
                break;
            case S.LEFT_TOP_POINT_TO_RIGHT:
                r = new p(e, {
                        x: -T.w,
                        y: -T.h + C
                    }), this._tween.from(new u(r, {
                        x: -50,
                        y: -50,
                        alpha: 0,
                        rotation: 90
                    }))
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 140
                    }), 10, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 140
                    }), 20)
                    .to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 110
                    }), 2, v.quadOut, null, function() {
                        i.playCircles(l.x - 60, l.y - 60, t.doubleTap), w("FINGER_TAP")
                    })
                    .to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 2, v.quadOut), t.longTap && this._tween.to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 10, v.quadOut), t.doubleTap && this._tween.to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 110
                    }), 2, v.quadOut)
                    .to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 2, v.quadOut), this._tween.wait(10)
                    .to(new u(r, {
                        x: -150,
                        y: -150,
                        alpha: 0,
                        rotation: 140
                    }), 20, v.quadOut);
                break;
            case S.RIGHT_BOTTOM_POINT_TO_RIGHT:
                this.pointerHint.scaleY = -1, r = new p(e, {
                        x: c.width,
                        y: c.height - C
                    }), this._tween.from(new u(r, {
                        x: 50,
                        y: 50,
                        alpha: 0,
                        rotation: 225
                    }))
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 245
                    }), 10, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 245
                    }), 20)
                    .to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 265
                    }), 2, v.quadOut, null, function() {
                        i.playCircles(l.x - 60, l.y - 60, t.doubleTap), w("FINGER_TAP")
                    })
                    .to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 245
                    }), 2, v.quadOut), t.longTap && this._tween.to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 245
                    }), 10, v.quadOut), t.doubleTap && this._tween.to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 265
                    }), 2, v.quadOut)
                    .to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 245
                    }), 2, v.quadOut), this._tween.wait(10)
                    .to(new u(r, {
                        x: 150,
                        y: 150,
                        alpha: 0,
                        rotation: 245
                    }), 20, v.quadOut);
                break;
            case S.RIGHT_BOTTOM_POINT_TO_CENTER:
                this.pointerHint.scaleY = -1, r = new p(e, {
                        x: c.width / 2 + 20,
                        y: c.height / 2
                    }), this._tween.from(new u(r, {
                        x: 50,
                        y: 50,
                        alpha: 0,
                        rotation: 225
                    }))
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 245
                    }), 10, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 245
                    }), 20)
                    .to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 265
                    }), 2, v.quadOut, null, function() {
                        i.playCircles(l.x - 60, l.y - 60, t.doubleTap), w("FINGER_TAP")
                    })
                    .to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 245
                    }), 2, v.quadOut), t.longTap && this._tween.to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 245
                    }), 10, v.quadOut), t.doubleTap && this._tween.to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 265
                    }), 2, v.quadOut)
                    .to(new u(r, {
                        x: -30,
                        y: -30,
                        alpha: 1,
                        rotation: 245
                    }), 2, v.quadOut), this._tween.wait(10)
                    .to(new u(r, {
                        x: 150,
                        y: 150,
                        alpha: 0,
                        rotation: 245
                    }), 20, v.quadOut);
                break;
            case S.LEFT_TOP_POINT_TO_CENTER:
                r = new p(e, {
                        x: c.width / 2 - 1.5 * T.w,
                        y: c.height / 2 - T.h
                    }), this._tween.from(new u(r, {
                        x: -50,
                        y: -50,
                        alpha: 0,
                        rotation: 90
                    }))
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 140
                    }), 10, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 140
                    }), 20)
                    .to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 110
                    }), 2, v.quadOut, null, function() {
                        i.playCircles(l.x - 60, l.y - 60, t.doubleTap), w("FINGER_TAP")
                    })
                    .to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 2, v.quadOut), t.longTap && this._tween.to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 10, v.quadOut), t.doubleTap && this._tween.to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 110
                    }), 2, v.quadOut)
                    .to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 2, v.quadOut), h ? this._tween.to(new u(r, {
                        x: 30,
                        y: 30,
                        alpha: 1,
                        rotation: 140
                    }), 1, v.quadOut, null, function() {
                        i.pipe.playAnimation({
                            x: l.x,
                            y: l.y - 60
                        }, {
                            x: s.x,
                            y: s.y - 60
                        })
                    })
                    .wait(10)
                    .to(new u(s, {
                        x: -100,
                        y: -100,
                        alpha: 1,
                        rotation: 140
                    }), 15, v.linear)
                    .to(new u(s, {
                        x: -100,
                        y: -100,
                        alpha: 1,
                        rotation: 140
                    }), 1, v.linear, null, function() {
                        i.playCircles(s.x - 60, s.y - 60, t.doubleTap)
                    })
                    .wait(10)
                    .to(new u(s, {
                        x: -150,
                        y: -150,
                        alpha: 0,
                        rotation: 90
                    }), 20, v.quadOut) : this._tween.wait(10)
                    .to(new u(r, {
                        x: -150,
                        y: -150,
                        alpha: 0,
                        rotation: 140
                    }), 20, v.quadOut);
                break;
            default:
                r = new p(e, {
                        x: -T.w,
                        y: c.height - C
                    }), this._tween.from(new u(r, {
                        x: -50,
                        y: 50,
                        alpha: 0,
                        rotation: 10
                    }))
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 55
                    }), 10, v.quadOut)
                    .to(new u(r, {
                        x: 0,
                        y: 0,
                        alpha: 1,
                        rotation: 55
                    }), 20)
                    .to(new u(r, {
                        x: 30,
                        y: -30,
                        alpha: 1,
                        rotation: 35
                    }), 2, v.quadOut, null, function() {
                        i.playCircles(l.x - 60, l.y - 60, t.doubleTap), w("FINGER_TAP")
                    })
                    .to(new u(r, {
                        x: 30,
                        y: -30,
                        alpha: 1,
                        rotation: 55
                    }), 2, v.quadOut), t.longTap && this._tween.to(new u(r, {
                        x: 30,
                        y: -30,
                        alpha: 1,
                        rotation: 55
                    }), 10, v.quadOut), t.doubleTap && this._tween.to(new u(r, {
                        x: 30,
                        y: -30,
                        alpha: 1,
                        rotation: 35
                    }), 2, v.quadOut)
                    .to(new u(r, {
                        x: 30,
                        y: -30,
                        alpha: 1,
                        rotation: 55
                    }), 2, v.quadOut), this._tween.wait(10)
                    .to(new u(r, {
                        x: -150,
                        y: 150,
                        alpha: 0,
                        rotation: 35
                    }), 20, v.quadOut)
        }
        this._tween.wait(50, function() {
                i.stopCircles()
            })
            .onFinish(function() {
                i.stopHint()
            })
            .start(!0)
    }
}
