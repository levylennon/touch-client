function(e, t, i) {
    function n(e, t, i, n) {
        var a = this,
            r = e && e.boostedSpellId,
            s = e && e.delta;
        o.call(this, e, t, i, r, null, s, function(e, t) {
            return e ? n && n(e) : (a.modifType = 0, a.spellId = r, a._delta = s, n && n(null, t))
        })
    }
    var o = i(676),
        a = i(476),
        r = i(679),
        s = i(56)
        .inherits,
        c = i(111);
    s(n, o), e.exports = n, n.prototype.getDelta = function() {
        return this._delta
    }, n.prototype.apply = function() {
        if (this.targetId === window.gui.playerData.characters.controlledCharacterId) {
            this.modifType = r(this.actionId), this.actionId === a.ACTION_DEBOOST_SPELL_RANGE && (this._delta *= -1);
            for (var e = !1, t = window.gui.playerData.characters.mainCharacter.characteristics.spellModifications, i = 0; i < t.length; i++) {
                var n = t[i];
                if (this.spellId === n.spellId && n.modificationType === this.modifType) {
                    e = !0;
                    var s = n.value.getContextModif();
                    n.value.setPts({
                        contextModif: s + this._delta
                    })
                }
            }
            if (!e) {
                var l = new c({
                    spellId: this.spellId,
                    modificationType: this.modifType,
                    value: {
                        contextModif: this._delta
                    }
                });
                t.push(l)
            }
            this.actionId === a.ACTION_BOOST_SPELL_AP_COST && window.gui.fightManager.correctActionPoint(this.spellId, this._delta)
        }
        o.prototype.apply.call(this)
    }, n.prototype.remove = function() {
        if (!this._removed && this.targetId === window.gui.playerData.characters.controlledCharacterId)
            for (var e = window.gui.playerData.characters.mainCharacter.characteristics.spellModifications, t = 0; t < e.length; t++) {
                var i = e[t];
                if (this.spellId === i.spellId && i.modificationType === this.modifType) {
                    var n = i.value.getContextModif();
                    i.value.setPts({
                        contextModif: n - this._delta
                    })
                }
            }
        o.prototype.remove.call(this)
    }, n.prototype.clone = function() {
        var e = new n;
        return this._copyTo(e), e
    }
}
