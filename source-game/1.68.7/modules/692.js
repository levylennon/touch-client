function(e, t, i) {
    function n(e, t) {
        a.call(this, e), this.animManager = t || new r(this)
    }
    var o = i(56)
        .inherits,
        a = i(693),
        r = i(695);
    o(n, a), e.exports = n, n.prototype.setAnimManager = function(e) {
        this.animManager.cleanupAnimations(), this.animManager.switchAnimationManager(e), this.animManager = e
    }, n.prototype.render = function() {
        this.renderer.save(), this.renderer.multiplyColor(this.tint[0], this.tint[1], this.tint[2], this.tint[3]), this.renderer.translate(this._x, this._y), 0 !== this._rotation && this.renderer.rotate(this._rotation), this.renderer.scale(this._scaleX, this._scaleY), this.animManager.draw(this.renderer), this.renderer.restore()
    }, n.prototype.remove = function() {
        return this.hide(), this.isWhiteListed === !0 ? this.animManager.stop() : void(this._cleared !== !0 && (this._cleared = !0, this.animManager.clear()))
    }, n.prototype.refreshAnimation = function(e) {
        if (this.isOutdated = !1, this.isDisplayed === !1) return void 0 !== e && e.push(this.bbox), void(this.bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)]);
        var t = this.bbox,
            i = this.animManager.generateCurrentFrameData();
        if (0 === this._rotation) this.bbox = [this._x + this._scaleX * (this._scaleX > 0 ? i[0] : i[1]), this._x + this._scaleX * (this._scaleX > 0 ? i[1] : i[0]), this._y + this._scaleY * i[2], this._y + this._scaleY * i[3]];
        else {
            var n = Math.cos(this._rotation),
                o = Math.sin(this._rotation),
                a = this._scaleX * i[0],
                r = this._scaleX * i[1],
                s = this._scaleY * i[2],
                c = this._scaleY * i[3],
                l = n * a - o * s,
                d = o * a + n * s,
                u = n * r - o * s,
                p = o * r + n * s,
                h = n * a - o * c,
                f = o * a + n * c,
                b = n * r - o * c,
                m = o * r + n * c;
            this.bbox = [this._x + Math.min(l, u, h, b), this._x + Math.max(l, u, h, b), this._y + Math.min(d, p, f, m), this._y + Math.max(d, p, f, m)]
        }
        t[0] = Math.floor(Math.min(t[0], this.bbox[0])), t[1] = Math.ceil(Math.max(t[1], this.bbox[1])), t[2] = Math.floor(Math.min(t[2], this.bbox[2])), t[3] = Math.ceil(Math.max(t[3], this.bbox[3])), void 0 !== e && e.push(t)
    }, n.prototype._refreshAnimation = n.prototype.refreshAnimation
}
