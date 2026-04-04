function(e, t, i) {
    function n(e) {
        this.id = e, this.name = "t" + a++, this.exposedSymbols = {}, this.texture = null, this.animationHandle = null, this.symbols = {}, this.parentTemplates = {}, this.isEmpty = !0
    }
    var o = i(13),
        a = 0;
    e.exports = n, n.prototype.getFullId = function() {
        return this.id
    }, n.prototype.clear = function() {
        this.texture && this.texture.release(), this.animationHandle && this.animationHandle.release()
    }, n.prototype.merge = function() {}, n.prototype.unmerge = function() {}, n.prototype.generateTemplate = function() {}, n.prototype.getSymbol = function(e) {
        var t = this.exposedSymbols[e];
        return t ? t : null
    }, n.prototype.hasAnimation = function(e) {
        return Boolean(this.getSymbol(e))
    }, n.prototype.getAnimationNbFrames = function(e) {
        var t = this.getSymbol(e);
        return t ? t.nbFrames : (console.warn("Symbol " + e + " not registered in the template of the character"), 0)
    }, n.prototype.getAnimationFrameRate = function(e) {
        var t = this.getSymbol(e);
        return t ? t.frameRate || o.TIME_UNITS_PER_SECOND : (console.warn("Symbol " + e + " not registered in the template of the character"), o.TIME_UNITS_PER_SECOND)
    }, n.prototype.getAnimationDuration = function(e) {
        var t = this.getSymbol(e);
        return t ? t.duration : (console.warn("Symbol " + e + " not registered in the template of the character"), 0)
    }
}
