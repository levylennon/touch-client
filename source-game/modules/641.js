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
    r(n, o), n.prototype.getCriterion = function() {
        return window.gui.playerData.partyData.arenaStats.bestDailyRank
    }, n.prototype._getText = function() {
        var e;
        return e = this.operatorToken === s.different ? a("ui.common.differentFrom") + " >" : ">", a("ui.common.pvpMaxRank") + " " + e + " " + this.value
    }, e.exports = n
}
