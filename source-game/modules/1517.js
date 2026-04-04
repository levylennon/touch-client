function(e, t, i) {
    var n = i(1518);
    n.prototype.updatePosition = function(e, t) {
        this.x = e - this.w / 2, this.y = t - this.h
    }, n.prototype.setTexture = function(e) {
        this.hide(), this.clearTexture(), this.w = e.width, this.h = e.height, "none" === this._textureId ? this.texture = window.isoEngine.mapScene.createTexture(e, this.id, "nearest", "throwable") : this.texture = window.isoEngine.mapScene.createTexture(e, this._textureId, "nearest", "archivable")
    }, n.prototype.clearTexture = function() {
        this.texture && (this.texture.release(), this.texture = null)
    }, n.prototype.clear = function() {
        this.clearTexture()
    }
}
