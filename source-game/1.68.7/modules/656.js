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
        return a(1 === this.value ? "ui.tooltip.beFemale" : "ui.tooltip.beMale")
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.characterBaseInformations.sex ? 1 : 0
    }, e.exports = n
}
