function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(611),
        s = i(56)
        .inherits;
    s(n, o), n.prototype.getKeyText = function() {
        return a("ui.common.alignment")
    }, n.prototype.getOperatorText = function() {
        return this.operatorToken === r.different ? " " + a("ui.common.differentFrom") + a("ui.common.colon") : o.prototype.getOperatorText.call(this)
    }, n.prototype.getValueText = function() {
        return window.gui.databases.AlignmentSides[this.value].nameId
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.characters.mainCharacter.characteristics && window.gui.playerData.characters.mainCharacter.characteristics.alignmentInfos.alignmentSide
    }, e.exports = n
}
