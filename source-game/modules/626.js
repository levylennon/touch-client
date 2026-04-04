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
    s(n, o), n.prototype._getText = function() {
        var e = window.gui.databases.Breeds[this.value].shortNameId;
        return this.operatorToken === r.equal ? a("ui.tooltip.beABreed", [e]) : a("ui.tooltip.dontBeABreed", [e])
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.characterBaseInformations.breed
    }, e.exports = n
}
