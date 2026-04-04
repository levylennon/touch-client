function(e, t, i) {
    function n(e) {
        o.call(this, e), this._monsterName = "", this._quantityMonster = 0
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(130),
        c = [7010, 10417, 10418];
    r(n, o), n.prototype._isRespected = function(e, t) {
        function i() {
            for (var e = window.gui.playerData.inventory, i = 0; i < c.length; i += 1)
                if (e.getQuantityOfAnItem([c])) return t(!0);
            return t(!1)
        }
        var n, o = this;
        return this.params.length > 1 ? (n = this.params[0], this._quantityMonster = this.params[1]) : (n = this.params[0], this._quantityMonster = 1), s.getDataMap("Monsters", [n], null, function(e, t) {
            if (e) return console.error(e), i();
            var a = t[n];
            o._monsterName = a.nameId, i()
        })
    }, n.prototype._getText = function() {
        return a("ui.tooltip.possessSoulStone", this._quantityMonster, this._monsterName)
    }, e.exports = n
}
