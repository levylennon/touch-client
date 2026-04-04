function(e, t, i) {
    function n(e, t, i) {
        u.call(this, e, t), this._centerX = e.w / 2, this._centerY = e.h, this.orientation = e.orientation, this.tween = null, this._startAnimation(i)
    }

    function o() {
        0 !== g.length && (g.forEach(function(e) {
            t.addArrow.apply(null, e)
        }), g = [])
    }

    function a(e, t, i, a, r) {
        if (!_) return g.push(arguments), void(A || (A = !0, m.loadTexture("ui/hintArrow/arrow.png", function(e) {
            _ = e, o()
        }, a.renderer, "linear", "permanent")));
        var s = {
            x: e.x,
            y: e.y,
            w: O,
            h: v,
            position: t,
            layer: d.MAP_LAYER_POINT_LABELS,
            orientation: i,
            scene: a
        };
        M.push(new n(s, _, r))
    }

    function r() {
        g = [];
        for (var e = 0; e < M.length; e++) M[e].remove();
        M = [], (S.playing || S.starting) && (S.reset(0, null), S.stop()), (E.playing || E.starting) && E.stop()
    }

    function s(e, t, i, n, o) {
        r(), a(e[o], t[o], i, n), S.reset(w, function() {
            ++o >= e.length && (o = 0), s(e, t, i, n, o)
        }), S.start()
    }

    function c(e, t, i, n) {
        s(e, t, i, n, 0)
    }

    function l(e, t, i, n) {
        if (!E.playing && !E.starting) {
            r();
            for (var o = 0; o < e.length; o++) a(e[o], t[o], i, n);
            E.reset(w, function() {
                r()
            }), E.start()
        }
    }
    var d = i(13),
        u = i(1174),
        p = i(56)
        .inherits,
        h = i(430)
        .easing,
        f = i(430)
        .Tween,
        b = i(430)
        .Delay,
        m = i(700),
        M = [],
        g = [],
        _ = null,
        A = !1,
        O = 60,
        v = 60,
        y = 24,
        z = 2,
        w = 2 * (y + z),
        T = {
            up: 0,
            down: 180,
            left: -90,
            right: 90,
            upLeft: -45,
            upRight: 45,
            downLeft: -135,
            downRight: 135
        },
        C = 3,
        I = 3;
    p(n, u), Object.defineProperty(n.prototype, "centerX", {
        get: function() {
            return this._centerX
        },
        set: function(e) {
            this._centerX = e, this.forceRefresh()
        }
    }), Object.defineProperty(n.prototype, "centerY", {
        get: function() {
            return this._centerY
        },
        set: function(e) {
            this._centerY = e, this.forceRefresh()
        }
    }), n.prototype._startAnimation = function(e) {
        var t = T[this.orientation] || 0;
        this.rotation = t * Math.PI / 180, this.tween && (this.tween.stop(), this.tween = null);
        var i = this.centerY - C,
            n = this.centerY + C;
        return this.tween = new f(this, ["alpha", "centerY"])
            .from({
                alpha: 0,
                centerY: i
            })
            .to({
                alpha: 1,
                centerY: i
            }, z)
            .to({
                alpha: 1,
                centerY: n
            }, y, h.trigo, I)
            .to({
                alpha: 0,
                centerY: n
            }, z)
            .to({
                alpha: 0,
                centerY: n
            }, y)
            .start(e || !0), this
    }, n.prototype.stop = function() {
        this.tween.stop()
    }, n.prototype.render = function() {
        var e = this.renderer;
        e.save(), e.translate(this._x, this._y), e.rotate(this._rotation), e.translate(-this._centerX, -this._centerY), e.multiplyColor(this.tint[0], this.tint[1], this.tint[2], this.tint[3]), e.drawImage(this.texture, 0, 0, this.w, this.h), e.restore()
    }, n.prototype.generateCurrentFrameData = function() {
        return [-this._centerX, this.w - this._centerX, -this._centerY, this.h - this._centerY]
    }, t.addArrow = a;
    var S = new b,
        E = new b;
    t.removeArrows = r, t.addArrowsSequence = c, t.addArrowsOneShot = l
}
