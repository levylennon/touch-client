function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(508),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(611);
    s(n, o), n.prototype.getKeyText = function() {
        return r("ui.common.pvpRank3v3")
    }, n.prototype.getOperatorText = function() {
        return this.operatorToken === c.different ? r("ui.common.differentFrom") + " >" : ">"
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.partyData.arenaStats[a.PVP_3VS3].score
    }, e.exports = n
}
