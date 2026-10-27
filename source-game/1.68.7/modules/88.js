function(e, t, i) {
    function n(e) {
        e = e || {};
        var t = {
            className: ["TooltipBox", e.className],
            hidden: !0
        };
        e.name && (t.name = e.name), b.call(this, "div", t), this.content = this.createChild("div", {
            className: "content"
        }), this.computedPosition = {
            TL: {
                x: 0,
                y: 0
            },
            BR: {
                x: 0,
                y: 0
            }
        }, this.openState = !1, this.setStyle("opacity", 0), e.content && this._setContent(e.content)
    }

    function o() {
        this.delClassNames("transition")
    }

    function a() {
        this.delClassNames("transition"), this.hide()
    }

    function r() {
        l && (l.emit("tooltipOut"), l = null), clearTimeout(u), u = null, c._closeTooltip(!1)
    }

    function s() {
        l && (l.emit("tooltipOut"), l = null), clearTimeout(u), u = setTimeout(r, 500)
    }
    i(89);
    var c, l, d, u, p = i(67),
        h = i(16),
        f = i(56)
        .inherits,
        b = i(72),
        m = i(22),
        M = i(63),
        g = i(90),
        _ = i(65),
        A = i(91)
        .playUiSound,
        O = i(17)
        .getText,
        v = 16,
        y = 1,
        z = 350,
        w = 50,
        T = 5;
    f(n, b);
    var t = e.exports = n;
    n.prototype.updateAndAppearAt = function(e, t, i) {
        i = i || {
            margin: T
        }, this._updateAndAppear(e, p.getTargetRect(t), i)
    }, n.prototype._setContent = function(e) {
        for (var t = this.content.getChildren(), i = 0; i < t.length; i++) this.content.removeChild(t[i]);
        e && this.content.appendChild(e)
    }, n.prototype._prepareForNewContent = function() {
        var e = this.content.rootElement.clientWidth + v,
            t = this.content.rootElement.clientHeight + v;
        return m.cancelTween(this), this.delClassNames("transition"), this.setStyles({
            width: z + "px",
            overflow: "hidden"
        }), this.content.setStyles({
            width: null,
            height: null
        }), [e, t]
    }, n.prototype.getComputedPosition = function() {
        return this.computedPosition
    }, n.prototype._updateAndAppear = function(e, t, i) {
        i = i || {};
        var n = this._prepareForNewContent();
        e && this._setContent(e), this.show();
        var a, r = this.content.rootElement.clientWidth + y,
            s = this.content.rootElement.clientHeight,
            c = r + v,
            l = s + v,
            d = i.margin || 0;
        if (i.centerOnTarget) {
            var u = t.left + t.width / 2,
                f = t.top + t.height / 2;
            a = p.getCenteredTooltipPosition(c, l, u, f)
        } else a = p.getBestTooltipPosition(c, l, t, d);
        var b = window.gui.isPortraitMode() ? window.gui.getScaleForPortrait() : 1;
        a.x /= b, a.y /= b, this.computedPosition = {
            TL: {
                x: a.x,
                y: a.y
            },
            BR: {
                x: a.x + c,
                y: a.y + l
            }
        };
        var M = "translate3d(" + a.x + "px," + a.y + "px,0)";
        this.content.setStyles({
            width: r + "px",
            height: s + "px"
        }), this.openState ? (this.setStyles({
            width: n[0] + "px",
            height: n[1] + "px",
            overflow: null
        }), h.forceReflow(this), this.addClassNames("transition"), m.tween(this, {
            width: c + "px",
            height: l + "px",
            webkitTransform: M
        }, {
            time: 150,
            easing: "ease-out"
        }, o)) : (this.openState = !0, this.setStyles({
            width: c + "px",
            height: l + "px",
            overflow: null,
            webkitTransform: M,
            opacity: 1
        }), A("ROLLOVER"))
    }, n.prototype.closeForRecomputing = function() {
        c._closeTooltip(!0)
    }, n.prototype.closeTooltip = function() {
        this._closeTooltip(!1)
    }, n.prototype._closeTooltip = function(e) {
        this.openState && (this.openState = !1, e ? (this.setStyle("opacity", 0), a.call(this)) : m.tween(this, {
            opacity: 0
        }, {
            time: 150,
            easing: "ease-out"
        }, a))
    }, t.initialiseTooltipBehavior = function(e) {
        return c = new n, e.on("dom.touchend", function() {
            d && g.stop(), d = !1, r()
        }), c
    }, t.addTooltip = function(e, t, i) {
        function n(i) {
            var n = t;
            return "function" == typeof t ? 1 === t.length ? t.call(e, function(e) {
                return n = "string" == typeof e ? new b("div", {
                    text: e
                }) : e, i(n)
            }) : (n = t.call(e), n = "string" == typeof n ? new b("div", {
                text: n
            }) : n, i(n)) : i(n)
        }

        function o() {
            var t = window.gui.pingSystem && window.gui.pingSystem.isActive();
            if (e._tooltipEnabled && !t && _.requestInteractionHandle("TOOLTIP", c) && (clearTimeout(u), u = null, !l || l !== e)) return n(function(t) {
                var i = t instanceof b;
                return l && l.emit("tooltipOut"), i ? (c._updateAndAppear(t, p.getTargetRect(e), {
                    margin: w / 2
                }), c.delClassNames("noBackground"), l = e, e.emit("tooltipOn"), void window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.TOOLTIP_DISPLAYED)) : (c._closeTooltip(!0), void c._setContent(!1))
            })
        }

        function a() {
            r._showNotification(O("tablet.common.longTapForTooltip"), this)
        }
        if (!e.hasOwnProperty("_tooltipEnabled")) {
            e._tooltipEnabled = !0, i = i || {}, t = "string" == typeof t ? new b("div", {
                text: t
            }) : t, M(e), g(e), e.on("longtap", function() {
                g.start(), o(), d = !0
            }), e.on("touchenter", function() {
                d && o()
            });
            var r = this;
            i.openOnTap ? e.on("tap", o) : i.longTapExplanation && e.on("tap", a), e.on("touchleave", s)
        }
    }, n.prototype.hideBackgroundOnce = function() {
        this.addClassNames("noBackground")
    }, n.prototype.resetBackground = function() {
        this.delClassNames("noBackground")
    }, n.prototype.openTooltipAt = function(e, t, i, n, o) {
        var a = p.newTargetRect(e, t, i || w, n || w);
        this._updateAndAppear(o || null, a)
    }, t.enableTooltip = function(e, t) {
        e.hasOwnProperty("_tooltipEnabled") && e._tooltipEnabled !== t && (e._tooltipEnabled = t)
    };
    var C = 3e3;
    t.computeNotificationDisplayTime = function(e) {
        return Math.max(C, e / 25 * 1e3)
    }, t._showNotification = function(e, i, n) {
        "string" == typeof e ? (n = n || t.computeNotificationDisplayTime(e.length), e = c.createChild("div", {
            text: e
        })) : n = n || C, c._updateAndAppear(e, p.getTargetRect(i)), clearTimeout(u), u = setTimeout(r, n)
    }
}
