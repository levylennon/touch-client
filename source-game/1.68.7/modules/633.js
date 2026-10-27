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
        return a(0 === this.value ? "ui.criterion.noguild" : 1 === this.value ? "ui.criterion.hasGuild" : "ui.criterion.hasValidGuild")
    }, n.prototype.getCriterion = function() {
        var e = window.gui.playerData.guild;
        return e.hasGuild() ? e.current.enabled ? 2 : 1 : 0
    }, e.exports = n
}
