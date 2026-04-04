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
        return a("ui.common.level")
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.characterBaseInformations.level
    }, e.exports = n
}
