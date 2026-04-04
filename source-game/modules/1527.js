function(e, t, i) {
    function n(e, t, i) {
        this._text = i, this._textImage = new o(i), this._x = e, this._y = t, this._textImage.x = e, this._textImage.y = t, this._isCentered = !1
    }
    var o = i(1528);
    e.exports = n, n.prototype.updatePosition = function(e, t) {
        this._textImage.x = e, this._textImage.y = t
    }, n.prototype.clearTexture = function() {
        this._textImage.clear()
    }, n.prototype.resetPosition = function() {
        this._textImage.x = this._x, this._textImage.y = this._y, this._isCentered = !1
    }, n.prototype.updateText = function(e) {
        if (e !== this._text) {
            var t = this.getForegroundColor(),
                i = this.getBackgroundColor();
            this.clearTexture(), this._textImage = new o(e), this.resetPosition(), this._text = e, this._centerText(), this.setForegroundColor(t), this.setBackgroundColor(i)
        }
    }, n.prototype.remove = function() {
        this._textImage.clear(), this._textImage = null
    }, n.prototype._centerText = function() {
        this._textImage.x = this._textImage.x - this._textImage.canvas.width / 2, this._isCentered = !0
    }, n.prototype.setForegroundColor = function(e) {
        this._textImage.setForegroundColor(e)
    }, n.prototype.setBackgroundColor = function(e) {
        this._textImage.setBackgroundColor(e)
    }, n.prototype.getForegroundColor = function() {
        return this._textImage.getForegroundColor()
    }, n.prototype.getBackgroundColor = function() {
        return this._textImage.getBackgroundColor()
    }
}
