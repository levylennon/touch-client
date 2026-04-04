function(e, t, i) {
    function n(e) {
        o.call(this, e);
        var t = this.rawValue.split(",");
        t.length > 1 ? console.error(new Error("SpellItemCriterion: too much parameters: " + t)) : this._spellId = this.value, this._spellName = ""
    }
    var o = i(610),
        a = i(130),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(611),
        l = {
            UNAVAILABLE: 0,
            VISIBLE: 1,
            USABLE: 2
        };
    s(n, o), n.prototype._getText = function() {
        if (!this._spellName) return "";
        var e = "";
        switch (this.operatorToken) {
            case c.equal:
                e = r("ui.criterion.gotSpell", [this._spellName]);
                break;
            case c.different:
                e = r("ui.criterion.doesntGotSpell", [this._spellName])
        }
        return e
    }, n.prototype._isRespected = function(e, t) {
        function i() {
            var e = window.gui.playerData.characters.mainCharacter.spellData,
                i = e.spells.hasOwnProperty(n._spellId) && e._spellsStatus[n._spellId] === l.USABLE;
            return t(i && n.operatorToken === c.equal || !i && n.operatorToken === c.different)
        }
        var n = this,
            o = this._spellId;
        return o || 0 === o ? a.getDataMap("Spells", [o], null, function(e, t) {
            if (e) return console.error(e), i();
            var a = t[o];
            return a ? (n._spellName = a.nameId, i()) : (console.error(new Error("SpellItemCriterion: unable to find spell id " + o)), i())
        }) : i()
    }, e.exports = n
}
