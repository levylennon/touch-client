function(e, t, i) {
    function n(e, t) {
        a.call(this, e), this.w = e.w || 0, this.h = e.h || 0, this.texture = t
    }
    var o = i(56)
        .inherits,
        a = i(693);
    o(n, a), e.exports = n, n.prototype.render = function() {
        this.renderer.save(), this.renderer.multiplyColor(this.tint[0], this.tint[1], this.tint[2], this.tint[3]), this.renderer.drawImage(this.texture, this._x, this._y, this.w * this._scaleX, this.h), this.renderer.restore()
    }, n.prototype.generateCurrentFrameData = function() {
        return [0, this.w, 0, this.h]
    }, n.prototype.clear = function() {
        this.texture && this.texture.release()
    }
}
