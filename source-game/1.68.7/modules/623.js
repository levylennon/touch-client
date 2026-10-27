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
        var e = window.gui.databases.Areas[this.value],
            t = e ? e.nameId : "";
        return this.operatorToken === r.equal ? a("ui.tooltip.beInArea", [t]) : a("ui.tooltip.dontBeInArea", [t])
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.position.area.id
    }, e.exports = n
}
