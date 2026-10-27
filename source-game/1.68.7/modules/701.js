function(e, t) {
    function i(e, t, i) {
        this.vertexPos = [e.x, e.y, e.x + e.w, e.y + e.h],
        this.textureCoord = [e.sx / i.element.width,e.sy / i.element.height,(e.sx + e.sw) / i.element.width,(e.sy + e.sh) / i.element.height],
        this.id = e.id,
        this.tint = e.tint,
        this.texture = i,
        this.className = e.className,
        this.nbFrames = 1,
        this.animationData = t
    }
    i.prototype.isGraphic = !0,
    e.exports = i
}
