function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits;
    r(n, o), n.prototype.getKeyText = function() {
        return a("ui.criterion.MK", [this.params[0]])
    }, n.prototype.getValueText = function() {
        return this.params[1]
    }, n.prototype.getCriterion = function() {
        return this.params[0] === window.gui.playerData.position.mapId ? window.actorManager.getPlayers(!0)
            .length : Number.MAX_SAFE_INTEGER
    }, e.exports = n
}
