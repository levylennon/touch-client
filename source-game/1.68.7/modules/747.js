function(e, t, i) {
    function n() {}

    function o() {
        a.call(this);
        var e = this;
        this.spells = {},
        this.characterId = null,
        this.isLoaded = !1,
        this._requestsPendingCount = 0,
        this._spellsStatus = {},
        this.onLevelUp = function() {
            e._updateSpells(function(e) {
                if (e) return console.error(e)
            })
        }
    }
    var a = i(59)
        .EventEmitter,
        r = i(56)
        .inherits,
        s = i(732),
        c = i(116),
        l = i(13),
        d = i(14),
        u = i(18),
        p = {
            UNAVAILABLE: 0,
            VISIBLE: 1,
            USABLE: 2
        },
        h = l.WEAPON_SPELL_ID;
    r(o, a), e.exports = o,
    o.prototype.disconnect = function() {
        var e = d();
        this.spells = {},
        this.characterId = null,
        this.isLoaded = !1,
        this._requestsPendingCount = 0,
        this._spellsStatus = {},
        e.gui.removeListener("CharacterLevelUpMessage", this.onLevelUp)
    },
    o.prototype.connect = function() {
        var e = d();
        e.gui.on("CharacterLevelUpMessage", this.onLevelUp)
    },
    o.prototype.weaponChanged = function(e) {
        this.spells[h] && this.spells[h].update(e)
    },
    o.prototype.getSpells = function(e) {
        e = e || 0;
        var t = {};
        for (var i in this.spells) {
            var n = this._spellsStatus[i] || 0;
            n >= e && (t[i] = this.spells[i])
        }
        return t
    }, o.prototype.getSpellStatus = function(e) {
        return this._spellsStatus[e] || p.UNAVAILABLE
    }, o.prototype._updateSpells = function(e) {
        u.each(this.spells, function(e, t) {
            e.forceDescriptionRefresh(t)
        }, function(t) {
            return t ? e(t) : void e()
        })
    }, o.prototype._createSpells = function(e, t, i) {
        var n = this;
        t = t || {}, this._requestsPendingCount++, this.isLoaded = !1, this.spells[h] || e.indexOf(h) !== -1 || e.indexOf(h.toString()) !== -1 || e.push(h.toString()), s.createSpells(e, function(e, o) {
            if (e) return console.error(e);
            for (var a in o) {
                o[a].ownerId = n.characterId, n.spells[a] = o[a];
                var r = t[a];
                r && (void 0 !== r.level && o[a].setLevel(r.level), void 0 !== r.position && o[a].setPosition(r.position), void 0 !== r.isDisabled && o[a].setIsDisabled(r.isDisabled))
            }
            return n._requestsPendingCount--, 0 === n._requestsPendingCount && (n.isLoaded = !0, n.emit("loaded")), i ? i() : void 0
        })
    }, o.prototype.addSpells = function(e, t) {
        var i = [],
            n = {};
        for (var o in e) {
            var a = e[o];
            this._spellsStatus[o] = a.spellStatus, this.spells[o] ? (void 0 !== a.spellLevel && void 0 !== a.position && (this.spells[o].setLevel(a.spellLevel), this.spells[o].setPosition(a.position)), void 0 !== a.isDisabled && this.spells[o].setIsDisabled(a.isDisabled)) : (n[o] = {
                level: a.spellLevel,
                position: a.position,
                isDisabled: a.isDisabled
            }, i.push(o))
        }
        return 0 === i.length ? t && t() : void this._createSpells(i, n, t);
    }, o.prototype.resetSpellsStatus = function() {
        this._spellsStatus = {}
    }, o.prototype.upgradeSpell = function(e, t, i, o, a) {
        var r = -1,
            s = this._spellsStatus[e] || p.UNAVAILABLE,
            l = this.spells[e];
        if (a = a || n, l && s === p.USABLE && (r = l.level), c.log("character_progression.spell_level_change", {
                spell_level_before: r,
                spell_level_after: t,
                spell_id: e
            }), this._spellsStatus[e] = o, l) return l.setLevel(t), l.setIsDisabled(i), a();
        var d = {};
        return d[e] = {}, d[e].level = t, d[e].isDisabled = i, this._createSpells([e], d, a)
    }, o.prototype.getSpellBySpellLevelId = function(e) {
        for (var t in this.spells) {
            var i = this.spells[t];
            if (!i.isItem && i.spellLevel.id === e) return i
        }
        return null
    }, o.prototype.getUsedSpellPoints = function(e) {
        var t = e && e.wanted || {},
            i = 0;
        for (var n in this.spells)
            if (this.spells.hasOwnProperty(n)) {
                var o = this.spells[n];
                if (o.level <= 1 && void 0 === t[o.id]) continue;
                i += void 0 === t[o.id] ? o.getUpgradeCost(1, o.level) : o.getUpgradeCost(1, t[o.id])
            } return i
    }, o.SPELL_STATUS = p
}
