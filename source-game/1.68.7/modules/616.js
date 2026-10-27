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
        return a("ui.tooltip.AlignmentLevel") + " " + this.getOperatorText() + " " + this.value
    }, n.prototype.getCriterion = function() {
        var e = window.gui.playerData;
        return e.characters.mainCharacter.characteristics.alignmentInfos.alignmentValue
    }, e.exports = n
}
