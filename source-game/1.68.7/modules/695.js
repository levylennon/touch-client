function(e, t) {
    function i() {}

    function n(e) {
        this.sprite = e, this.hasSubentities = !1, this.subentities = [], this.animationModifiers = {}
    }

    function o(e) {
        var t = document.createElement("canvas");
        t.width = r, t.height = r;
        var i = t.getContext("2d");
        return i.fillStyle = "#FF0000", i.fillRect(0, 0, r, r), a = e.createTexture(t, null, "nearest", "permanent")
    }
    e.exports = n, n.prototype.isTemporary = !0, n.prototype.switchAnimationManager = function(e) {
        e.hasSubentities = this.hasSubentities, e.subentities = this.subentities, e.animationModifiers = this.animationModifiers
    }, n.prototype.addSubentity = function(e) {
        this.subentities.push(e), this.hasSubentities = !0
    }, n.prototype.removeSubentity = function(e) {
        var t = this.subentities.indexOf(e);
        return t === -1 ? void console.error(new Error("Subentity does not exist.")) : (e.animManager.cleanupAnimations(), this.subentities.splice(t, 1), void(this.hasSubentities = this.subentities.length > 0))
    }, n.prototype.addAnimationModifier = function(e, t) {
        this.animationModifiers[e] = t
    }, n.prototype.removeAnimationModifier = function(e) {
        delete this.animationModifiers[e]
    }, n.prototype.cleanupAnimations = function() {
        for (var e = 0; e < this.subentities.length; e++) this.subentities[e].animManager.cleanupAnimations()
    }, n.prototype.cleanupAnimationsAndRemoveSubentities = function() {
        for (var e = 0; e < this.subentities.length; e++) this.subentities[e].animManager.cleanupAnimations();
        this.subentities = [], this.hasSubentities = !1
    };
    var a = null,
        r = 32;
    n.prototype.draw = function() {
        window.isoEngine.debug && this.sprite.renderer.drawImage(a || o(this.sprite.renderer), -r / 2, -r / 2, r, r)
    }, n.prototype.generateCurrentFrameData = function() {
        return [-r / 2, r / 2, -r / 2, r / 2]
    }, n.prototype.assignSymbol = function(e, t, i) {
        return console.warn("Attempt to call abstract method TemporaryAnimationManager.assignSymbol", e), i && i()
    }, n.prototype.getSymbolDuration = function() {
        return 0
    }, n.prototype.clear = i, n.prototype.stop = i, n.prototype.releaseBuffer = i, n.prototype.addAnimation = i, n.prototype.applyAnimationModifier = i, n.prototype.applyCarryAnimationModifier = i, n.prototype.applyBones1AnimationModifier = i, n.prototype.applyCreatureAnimationModifier = i, n.prototype.setTints = i, n.prototype.prepareCurrentAnimationFrame = i
}
