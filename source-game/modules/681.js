function(e, t, i) {
    function n(e, t, i, n) {
        var a = this,
            s = e && e.delta;
        o.call(this, e, t, i, s, null, null, function(e, t) {
            return e ? n && n(e) : (a.statName = r.getActionStatName(i), a.isABoost = r.getIsABoost(i), n && n(null, t))
        })
    }
    var o = i(676),
        a = i(56)
        .inherits,
        r = i(476),
        s = i(14);
    a(n, o), e.exports = n, n.prototype.getDelta = function() {
        return "EffectInstanceDice" === this.effect._type ? this.isABoost ? this.effect.diceNum : -this.effect.diceNum : 0;
    }, n.prototype.apply = function() {
        var e = this.getDelta();
        this.incrementStats(e), o.prototype.apply.call(this)
    }, n.prototype.remove = function() {
        if (!this._removed && !this.effect.effect.active) {
            var e = this.getDelta();
            this.decrementStats(e)
        }
        o.prototype.remove.call(this)
    }, n.prototype.unstack = function(e) {
        if (!this._removed) {
            var t = this.getDelta();
            this.decrementStats(t)
        }
        o.prototype.unstack.call(this, e)
    }, n.prototype.disable = function() {
        if (!this._disabled && this.effect.effect.active) {
            var e = this.getDelta();
            this.decrementStats(e)
        }
        o.prototype.disable.call(this)
    }, n.prototype.incrementStats = function(e) {
        if (e) {
            var t = s(),
                i = t.gui,
                n = i.fightManager.getFighter(this.targetId);
            if (!n) return void console.error(new Error("Trying to apply a stats buff on non-existing fighter " + this.targetId));
            var o = n.data.stats;
            switch (this.statName) {
                case "vitality":
                    o.lifePoints += e, o.maxLifePoints += e;
                    break;
                case "lifePointsMalus":
                    o.lifePoints = Math.min(o.lifePoints + e, o.maxLifePoints);
                    break;
                case "lifePoints":
                case "shieldPoints":
                case "dodgePALostProbability":
                case "dodgePMLostProbability":
                    o[this.statName] = Math.max(o[this.statName] + e, 0);
                    break;
                case "agility":
                    o.tackleEvade += ~~(e / 10), o.tackleBlock += ~~(e / 10);
                    break;
                case "globalResistPercentMalus":
                case "globalResistPercentBonus":
                    var a = "globalResistPercentBonus" === this.statName ? 1 : -1;
                    o.neutralElementResistPercent += e * a, o.airElementResistPercent += e * a, o.waterElementResistPercent += e * a, o.earthElementResistPercent += e * a, o.fireElementResistPercent += e * a;
                    break;
                case "actionPoints":
                    o.actionPoints += e, o.maxActionPoints += e;
                    break;
                case "movementPoints":
                    o.movementPoints += e, o.maxMovementPoints += e;
                    break;
                default:
                    o.hasOwnProperty(this.statName) && (o[this.statName] += e)
            }
            var r = i.playerData.characters;
            if (r.mainCharacterId === this.targetId || r.controlledCharacterId === this.targetId) {
                var c = r.getCharacterById(this.targetId);
                if (!c) return void console.error(new Error("Cannot find the character for target " + this.targetId));
                "range" === this.statName && t.foreground.refreshSpellRange();
                var l = c.characteristics;
                if (l && l.hasOwnProperty(this.statName) && l[this.statName])
                    if ("CharacterBaseCharacteristic" === l[this.statName]._type) {
                        var d = l[this.statName],
                            u = d.getContextModif();
                        d.setPts({
                            contextModif: u + e
                        })
                    } else {
                        var p = "StatBuff: Try to update an unknown type " + l[this.statName]._type;
                        p += " for " + this.statName, console.error(new Error(p))
                    } switch (this.statName) {
                    case "vitality":
                        r.setCharacteristic(c, "maxLifePoints", Math.max(0, l.maxLifePoints + e)), r.setCharacteristic(c, "lifePoints", Math.max(0, l.lifePoints + e));
                        break;
                    case "lifePoints":
                    case "lifePointsMalus":
                        r.setCharacteristic(c, "lifePoints", Math.max(0, l.lifePoints + e));
                        break;
                    case "movementPoints":
                        r.setCharacteristic(c, "movementPointsCurrent", l.movementPointsCurrent + e);
                        break;
                    case "actionPoints":
                        r.setCharacteristic(c, "actionPointsCurrent", l.actionPointsCurrent + e);
                        break;
                    case "range":
                        t.foreground.refreshSpellRange()
                }
            }
        }
    }, n.prototype.decrementStats = function(e) {
        this.incrementStats(-e)
    }, n.prototype.clone = function() {
        var e = new n;
        return this._copyTo(e), e
    }
}
