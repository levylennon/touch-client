function(e, t) {
    function i() {
        this.sourceX = 0, this.sourceY = 0, this.targetX = 0, this.targetY = 0, this.x = 0, this.y = 0, this.incX = 0, this.incY = 0, this.error = 0, this.deltaError = 0, this._stop = !1, this.cb = null
    }
    e.exports = i, i.prototype.set = function(e, t, i, n) {
        this.sourceX = ~~e || 0, this.sourceY = ~~t || 0, this.targetX = ~~i || 0, this.targetY = ~~n || 0
    }, i.prototype.exec = function(e) {
        var t = [];
        e && "function" == typeof e || (e = function(e, i) {
            t.push([e, i])
        }), this.cb = e, this._stop = !1, this.error = 0, this.deltaError = 0, this.x = this.sourceX, this.y = this.sourceY;
        var i = this.targetX - this.sourceX,
            n = this.targetY - this.sourceY,
            o = Math.abs(i),
            a = Math.abs(n);
        this.incX = i > 0 ? 1 : -1, this.incY = n > 0 ? 1 : -1;
        var r;
        for (0 === i && 0 === n ? (this._stop = !0, r = null) : 0 === i ? r = this._vertical : 0 === n ? r = this._horizontal : o === a ? r = this._equalSlope : o > a ? (r = this._xSlope, this.deltaError = a / o) : (r = this._ySlope, this.deltaError = o / a); !this._stop;) r.apply(this), this.x === this.targetX && this.y === this.targetY && (this._stop = !0), this.cb(this.x, this.y, !0);
        return t
    }, i.prototype.stop = function() {
        this._stop = !0
    }, i.prototype._horizontal = function() {
        this.x += this.incX
    }, i.prototype._vertical = function() {
        this.y += this.incY
    }, i.prototype._equalSlope = function() {
        this.x += this.incX, this.y += this.incY
    }, i.prototype._xSlope = function() {
        this.error += this.deltaError, this.error >= .5 && (this.y += this.incY, this.error -= 1), this.x += this.incX
    }, i.prototype._ySlope = function() {
        this.error += this.deltaError, this.error >= .5 && (this.x += this.incX, this.error -= 1), this.y += this.incY
    }
}
