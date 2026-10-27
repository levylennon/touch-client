function(e, t, i) {
    function n(e) {
        o.call(this, e), this._spellId = null
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(130),
        c = i(34)
        .logger,
        l = i(611),
        d = {
            UNAVAILABLE: 0,
            VISIBLE: 1,
            USABLE: 2
        };
    r(n, o), n.prototype._getText = function() {
        if (!this._spellId) return "";
        var e = "";
        switch (this.operatorToken) {
            case l.equal:
                e = a("ui.criterion.gotSpellLevel", this._spellId);
                break;
            case l.different:
                e = a("ui.criterion.doesntGotSpellLevel", this._spellId)
        }
        return e
    }, n.prototype._isRespected = function(e, t) {
        function i() {
            var e = window.gui.playerData.characters.mainCharacter.spellData,
                i = e.spells.hasOwnProperty(n._spellId) && e._spellsStatus[n._spellId] === d.USABLE;
            if (!i) return t(!1);
            var o = e.spells[n._spellId].spellLevel.id === n.value;
            return t(o && n.operatorToken === l.equal || !o && n.operatorToken === l.different)
        }
        var n = this;
        return s.getDataMap("SpellLevels", [this.value], null, function(e, t) {
            return e ? (c.error("SpellLevelItemCriterion#initialize", e), i) : (t[n.value] ? n._spellId = t[n.value].spellId : c.error("SpellLevelItemCriterion#initialize: cannot get SpellLevelId", n.value), i())
        })
    }, e.exports = n
}
