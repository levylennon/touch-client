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
        return a("ui.item.bonusset")
    }, n.prototype.getCriterion = function() {
        if (!window.gui.playerData || !window.gui.playerData.inventory) return 0;
        var e = 0,
            t = window.gui.playerData.inventory.itemSets;
        return Object.keys(t)
            .forEach(function(i) {
                e += Math.max(0, t[i].setObjects.length - 1)
            }), e
    }, e.exports = n
}
