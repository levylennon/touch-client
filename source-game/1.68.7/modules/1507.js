function(e, t, i) {
    function n(e, t, i, n, a) {
        this._cellId = e;
        var s = r.empty;
        this.r = s.r, this.g = s.g, this.b = s.b, this.a = s.a, this.sx = s.sx, this.sy = s.sy, this.rotation = 0, this.gridOverlay = a, this._translateX = t.x0, this._translateY = t.y1, this._box = t, this._vertexBuffer = i, this._colorBuffer = n, this._restore(), this._translate(), this._fillVertexBuffer(), this.tween = new o(this, ["sx", "sy", "r", "g", "b", "a"]);
        var c = this;
        this.tween.onUpdate(function() {
            c.setBuffer()
        }), this._transformState = r.empty
    }
    var o = i(430)
        .Tween,
        a = i(430)
        .easing,
        r = i(343);
    e.exports = n, Object.defineProperty(n.prototype, "cellId", {
        get: function() {
            return this._cellId
        }
    }), n.prototype.animate = function(e, t) {
        this._transformState = e;
        var i = 11;
        return this.tween.reset()
            .wait(t)
            .to(e, i, a.backOut, 2.3)
            .start(), t + i
    }, n.prototype._restore = function() {
        this._x0 = 0, this._y0 = -21.5, this._x1 = -43, this._y1 = 0, this._x2 = 0, this._y2 = 21.5, this._x3 = 43, this._y3 = 0
    }, n.prototype._translate = function() {
        this._x0 += this._translateX, this._x1 += this._translateX, this._x2 += this._translateX, this._x3 += this._translateX, this._y0 += this._translateY, this._y1 += this._translateY, this._y2 += this._translateY, this._y3 += this._translateY
    }, n.prototype._rotate = function() {
        if (0 !== this.rotation) {
            var e = Math.cos(this.rotation),
                t = Math.sin(this.rotation),
                i = this._x0,
                n = this._x1,
                o = this._x2,
                a = this._x3;
            this._x0 = e * i - t * this._y0, this._y0 = t * i + e * this._y0, this._x1 = e * n - t * this._y1, this._y1 = t * n + e * this._y1, this._x2 = e * o - t * this._y2, this._y2 = t * o + e * this._y2, this._x3 = e * a - t * this._y3, this._y3 = t * a + e * this._y3
        }
    }, n.prototype._scale = function() {
        this._x0 *= this.sx, this._x1 *= this.sx, this._x2 *= this.sx, this._x3 *= this.sx, this._y0 *= this.sy, this._y1 *= this.sy, this._y2 *= this.sy, this._y3 *= this.sy
    }, n.prototype.setBuffer = function() {
        this._restore(), this._scale(), this._rotate(), this._translate(), this._fillVertexBuffer(), this.gridOverlay._updated = !0, this.gridOverlay.forceRefresh()
    }, n.prototype._fillVertexBuffer = function() {
        var e = Math.max(-128, Math.min(127, 64 * this.r)),
            t = Math.max(-128, Math.min(127, 64 * this.g)),
            i = Math.max(-128, Math.min(127, 64 * this.b)),
            n = Math.max(-128, Math.min(127, 64 * this.a)),
            o = (n << 24 & 4278190080) + (i << 16 & 16711680) + (t << 8 & 65280) + (255 & e);
        this._vertexBuffer[0] = this._x0, this._vertexBuffer[1] = this._y0, this._colorBuffer[3] = o, this._vertexBuffer[5] = this._x1, this._vertexBuffer[6] = this._y1, this._colorBuffer[8] = o, this._vertexBuffer[10] = this._x2, this._vertexBuffer[11] = this._y2, this._colorBuffer[13] = o, this._vertexBuffer[15] = this._x2, this._vertexBuffer[16] = this._y2, this._colorBuffer[18] = o, this._vertexBuffer[20] = this._x3, this._vertexBuffer[21] = this._y3, this._colorBuffer[23] = o, this._vertexBuffer[25] = this._x0, this._vertexBuffer[26] = this._y0, this._colorBuffer[28] = o
    }
}
