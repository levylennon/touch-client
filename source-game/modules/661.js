function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(509),
        c = i(611);
    r(n, o), n.prototype._getText = function() {
        return a(this.operatorToken === c.equal && 1 === this.value || this.operatorToken === c.different && 0 === this.value ? "ui.tooltip.beSubscirber" : "ui.tooltip.dontBeSubscriber")
    }, n.prototype.getCriterion = function() {
        var e = window.gui.playerData;
        return e.isSubscriberAtMinLevel(s.NORMAL) || e.identification.hasRights ? 1 : 0
    }, e.exports = n
}
