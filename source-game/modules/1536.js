function(e, t, i) {
    function n(e) {
        a.call(this, e, e.animManager), this.actorId = void 0 !== e.actorId ? e.actorId : null, this.path = [], this.step = 0, this.moving = !1
    }
    var o = i(56)
        .inherits,
        a = i(692),
        r = i(430)
        .Tween,
        s = i(1537)
        .prepare(3),
        c = i(1535),
        l = i(913),
        d = i(735),
        u = new c,
        p = {
            base: "FX",
            direction: 0
        };
    o(n, a), e.exports = n, n.prototype.isFx = !0, n.prototype.isTapped = function() {
        return !1
    }, n.prototype.tap = function() {}, n.prototype.refreshAnimation = function(e) {
        if (this.moving === !0) {
            var t = this.path,
                i = this.step,
                n = ~~i,
                o = this.prevCoords,
                a = {
                    x: s([this.source[0], this.bezier[0], this.target[0]], i / this.pathLength),
                    y: s([this.source[1], this.bezier[1], this.target[1]], i / this.pathLength)
                };
            this.x = a.x, this.y = a.y;
            var r = a.x - o.x,
                c = a.y - o.y;
            this.rotation = Math.atan2(c, r);
            var l = t[n];
            l !== this.prevPos && (this.position = l), this.prevPos = l, this.prevCoords = a
        }
        this._refreshAnimation(e)
    }, n.prototype._startPath = function(e) {
        this.animManager.assignSymbol(p, !0), this.moving = !0;
        var t = this;
        new r(this, ["step"])
            .from({
                step: 0
            })
            .to({
                step: this.pathLength
            }, this.duration)
            .start()
            .onFinish(function() {
                return t.remove(), e()
            })
    }, n.prototype.launch = function(e, t, i, n, o) {
        var a = window.isoEngine.mapRenderer.map;
        if (!a) return o(new Error("map is null, isReady is " + window.isoEngine.mapRenderer.isReady));
        var r = a.cells,
            s = this.position,
            c = [s],
            p = d.getMapPointFromCellId(s),
            h = d.getMapPointFromCellId(e);
        u.set(p.x, p.y, h.x, h.y), u.exec(function(e, t) {
            c.push(d.getCellIdFromMapPoint(e, t))
        }), this.path = c, this.pathLength = c.length, this.mirrored = p.x > h.x, this.scaleY = this.mirrored ? -1 : 1;
        var f = l.getCellCoord(s),
            b = l.getCellCoord(e),
            m = Math.abs(b.x - f.x),
            M = Math.abs(b.y - f.y),
            g = Math.sqrt(m * m + M * M);
        this.duration = g / 10 * t / 1e3 * 24, f.y -= (r[s].f || 0) + n, b.y -= (r[e].f || 0) + n, f = [f.x, f.y], b = [b.x, b.y], this.source = f, this.target = b, this.bezier = [(f[0] + b[0]) / 2, (f[1] + b[1]) / 2 - g * i], this.prevPos = s, this.prevCoords = {
            x: 2 * f[0] - this.bezier[0],
            y: 2 * f[1] - this.bezier[1]
        }, this._startPath(o)
    }
}
