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
        return this.operatorToken === s.equal && 1 === this.value || this.operatorToken === s.different && 0 === this.value ? a("ui.tooltip.mountEquiped") : this.operatorToken === s.equal && 0 === this.value || this.operatorToken === s.different && 1 === this.value ? a("ui.tooltip.mountNonEquiped") : ""
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.isRiding ? 1 : 0
    }, e.exports = n
}
