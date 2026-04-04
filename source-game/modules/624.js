function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits;
    r(n, o), n.prototype._getText = function() {
        return "B" === this.stringValue ? a("ui.criterion.initialBones") : a("ui.criterion.bones") + " " + this.getOperatorText() + " " + this.stringValue
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.characterBaseInformations.entityLook.bonesId
    }, e.exports = n
}
