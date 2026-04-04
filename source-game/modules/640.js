function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(611);
    r(n, o), n.prototype._getText = function() {
        return a(this.operatorToken === s.equal && 1 === this.value || this.operatorToken === s.different && 2 === this.value ? "ui.tooltip.beMaried" : "ui.tooltip.beSingle")
    }, n.prototype.getCriterion = function() {
        return null !== window.gui.playerData.socialData.spouse ? 1 : 2
    }, e.exports = n
}
