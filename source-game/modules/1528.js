function(e, t, i) {
    function n(e) {
        var t = {
            id: c++,
            scene: window.isoEngine.mapScene,
            layer: r.MAP_LAYER_FOREGROUND,
            position: 1
        };
        this._text = e, this.canvas = document.createElement("canvas"), this.canvas.height = t.h = s + l + 2, this.canvasContext = this.canvas.getContext("2d"), this.canvasContext.font = s + "px " + d, this.canvas.width = t.w = Math.ceil(this.canvasContext.measureText(e.toString())
            .width) + l, this.canvasContext.font = s + "px " + d, this.canvasContext.shadowBlur = 2, this.canvasContext.shadowColor = "rgba(0, 0, 0, 1)", this.canvasContext.shadowOffsetX = 1, this.canvasContext.shadowOffsetY = 1, a.call(this, t), this.setForegroundColor("rgb(255, 255, 255)"), this.show()
    }
    var o = i(56)
        .inherits,
        a = i(1174),
        r = i(13),
        s = 20,
        c = 0,
        l = 2,
        d = "Verdana";
    o(n, a), e.exports = n, n.prototype.resetTexture = function() {
        this._setTexture()
    }, n.prototype.setForegroundColor = function(e) {
        this._foregroundColor = e, this.canvasContext.fillStyle = e, this.canvasContext.textAlign = "left", this.canvasContext.fillText(this._text, 1, s - l), this._setTexture()
    }, n.prototype.setBackgroundColor = function(e) {
        this._backgroundColor = e, this.canvasContext.fillStyle = e, this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height), this.canvasContext.fillRect(0, 0, this.canvas.width, this.canvas.height), this.setForegroundColor(this._foregroundColor)
    }, n.prototype.getForegroundColor = function() {
        return this._foregroundColor
    }, n.prototype.getBackgroundColor = function() {
        return this._backgroundColor
    }, n.prototype.clear = function() {
        this.texture ? (this.texture.release(), this.texture = null) : console.warn("[CanvasText.clear] Clearing CanvasText, but it was already clear"), this.hide()
    }, n.prototype._setTexture = function() {
        this.texture && this.texture.release(), this.texture = window.isoEngine.mapScene.createTexture(this.canvas)
    }
}
