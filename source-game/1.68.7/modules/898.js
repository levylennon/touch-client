function(e, t, i) {
    function n() {
        p.call(this, "div", {
            className: "DamagePreview"
        }), this.damagePreviewManager = new m, this.movementPreviewManager = new g, this.tooltips = [], this.currentParams = null, this._listeners(), this.hide()
    }

    function o(e, t) {
        return function(i, n) {
            return d(e, t[i]) - d(e, t[n])
        }
    }

    function a(e) {
        return function(t, i) {
            return d(e, t) - d(e, i)
        }
    }

    function r(e) {
        var t = window.foreground.confirmBox,
            i = [],
            n = [];
        if (t.isVisible()) {
            var r = t.rootElement.getBoundingClientRect();
            r.height > 0 && r.width > 0 && i.push({
                left: r.left,
                top: r.top - A,
                height: r.height,
                width: r.width,
                dom: null
            })
        }
        for (var l in e)
            if (e.hasOwnProperty(l)) {
                var d = e[l],
                    u = d.rootElement.getBoundingClientRect();
                u.height > 0 && u.width > 0 && i.push({
                    left: u.left,
                    top: u.top,
                    height: u.height,
                    width: u.width,
                    dom: d
                })
            } i.sort(a(i[0]));
        var p, h;
        for (p = 0; p < i.length; p++) {
            var f = i[p],
                b = !1;
            for (h = 0; h < n.length; h++) {
                var m = i[n[h]];
                if (c(f, m)) {
                    b = !0;
                    break
                }
            }
            if (b) {
                for (n.sort(o(f, i)), h = 0; h < n.length; h++) {
                    var M = n[h],
                        g = s(i, n, p, M);
                    if (g) {
                        f.left = g.left, f.top = g.top;
                        break
                    }
                }
                n.push(p)
            } else n.push(p)
        }
        for (p = 0; p < i.length; p++) i[p].dom && i[p].dom.setStyles({
            webkitTransform: "translate3d(" + i[p].left + "px," + i[p].top + "px,0)"
        })
    }

    function s(e, t, i, n) {
        for (var o = e[i], a = e[n], r = l({
                left: o.left,
                top: a.top - o.height,
                height: o.height,
                width: o.width
            }), s = l({
                left: o.left,
                top: a.top + a.height,
                height: o.height,
                width: o.width
            }), d = l({
                left: a.left - o.width,
                top: o.top,
                height: o.height,
                width: o.width
            }), u = l({
                left: a.left + a.width,
                top: o.top,
                height: o.height,
                width: o.width
            }), p = !0, h = !0, f = !0, b = !0, m = 0; m < O; m++) {
            for (var M = 0; M < t.length; M++) {
                var g = e[t[M]];
                c(r, g) && (p = !1), c(s, g) && (h = !1), c(d, g) && (f = !1), c(u, g) && (b = !1)
            }
            if (p || h || f || b) break;
            r.top -= o.height, s.top += o.height, d.top -= o.width, u.top += o.width
        }
        var _ = Math.abs(o.top + o.height - a.top),
            A = Math.abs(o.top - a.top - a.height),
            v = Math.abs(o.left + o.width - a.left),
            y = Math.abs(o.left - a.left - a.width),
            z = null,
            w = Number.MAX_VALUE;
        return p && (z = r, w = _), h && A < w && (z = s, w = A), f && v < w && (z = d, w = v), b && y < w && (z = u, w = y), z
    }

    function c(e, t) {
        return e.left < t.left + t.width && t.left < e.left + e.width && e.top < t.top + t.height && t.top < e.top + e.height
    }

    function l(e) {
        return e.top = Math.max(f.mapTop, e.top), e.left = Math.max(f.mapLeft, e.left), e.top + e.height > f.mapHeight + f.mapTop && (e.top -= e.top + e.height - f.mapHeight - f.mapTop), e.left + e.width > f.mapWidth + f.mapLeft && (e.left -= e.left + e.width - f.mapWidth - f.mapLeft), e
    }

    function d(e, t) {
        var i = e.left + e.width / 2 - (t.left + t.width / 2),
            n = e.top + e.height / 2 - (t.top + t.height / 2);
        return i * i + n * n
    }

    function u(e) {
        var t = window.actorManager,
            i = t.getActor(e),
            n = i ? i.bbox : null;
        if (n) {
            var o = window.foreground.convertSceneToScreenCoordinate(n[0], n[2]),
                a = window.foreground.convertSceneToScreenCoordinate(n[1], n[3]),
                r = (o.x + a.x) / 2,
                s = (o.y + a.y) / 2;
            return {
                x: r,
                y: s
            }
        }
        return {
            x: -1,
            y: -1
        }
    }
    i(899);
    var p = i(72),
        h = i(56)
        .inherits,
        f = i(54)
        .dimensions,
        b = i(55),
        m = i(900),
        M = i(910),
        g = i(912),
        _ = i(129),
        A = 10,
        O = 2;
    h(n, p), e.exports = n, n.prototype._listeners = function() {
        var e = window.gui,
            t = this;
        b.on("allowDamagePreview", function() {
            t._hideTooltips(), t._clearTooltips()
        }), window.foreground.on("confirmBoxClosed", function() {
            t._hideTooltips()
        }), e.fightManager.on("fightEnd", function() {
            t._hideTooltips(), t._clearTooltips()
        }), e.fightManager.on("GameFightTurnStart", function(e) {
            e === window.gui.playerData.id && t.damagePreviewManager.resetMark()
        })
    }, n.prototype.cancel = function() {
        this._clearTooltips()
    }, n.prototype.checkSpellAndShow = function() {
        this._clearTooltips(), this.currentParams && this.preview(this.currentParams.currentSpellId, this.currentParams.targetCellId, this.currentParams.options)
    }, n.prototype.confirm = function() {
        this._hideTooltips(), this.damagePreviewManager.confirmAffectedMark()
    }, n.prototype._hideTooltips = function() {
        for (var e in this.tooltips)
            if (this.tooltips.hasOwnProperty(e)) {
                var t = this.tooltips[e];
                t && t.isVisible() && t.hide()
            } this.hide(), this.movementPreviewManager.cleanMovementPreview()
    }, n.prototype._clearTooltips = function() {
        for (var e in this.tooltips)
            if (this.tooltips.hasOwnProperty(e)) {
                var t = this.tooltips[e];
                t && t.destroy()
            } this.currentParams = null, this.tooltips = []
    }, n.prototype.preview = function(e, t, i) {
        i = i || {};
        var n = this,
            o = window.actorManager,
            a = window.gui.fightManager;
        this._clearTooltips(), !b.allowDamagePreview && !b.showMovementPreview || window.gui.scenarioManager.isBehaviourEnabled(_.DISABLE_DAMAGE_PREVIEW) || (this.currentParams = {
            currentSpellId: e,
            targetCellId: t,
            options: i
        }, this.show(), this.damagePreviewManager.resetTemporaryMark(), this.movementPreviewManager.cleanMovementPreview(), this.damagePreviewManager.getPreview(e, t, function(s, c) {
            if (s) return console.error("The spell could not be previewed ", s);
            if (b.showMovementPreview && n.movementPreviewManager.displayPreview(e), b.allowDamagePreview) {
                for (var l in c)
                    if (c.hasOwnProperty(l)) {
                        l = parseInt(l, 10);
                        var d = o.getActor(l),
                            p = c[l],
                            h = a.getFighter(l),
                            f = n.tooltips[l];
                        if (0 !== p.resultEffects.length) {
                            f || (n.tooltips[l] = new M(l), f = n.tooltips[l], n.appendChild(f));
                            var m = !1;
                            i.hasConfirmBox && h && h.data.disposition.cellId === t && (m = !0);
                            var g = d && d.parentActor && d.parentActor.actorId || l,
                                _ = u(g);
                            f.show(), f.update(_.x, _.y, p, {
                                insideConfirmBox: m
                            })
                        } else f && f.isVisible() && f.hide()
                    } r(n.tooltips)
            }
        }))
    }
}
