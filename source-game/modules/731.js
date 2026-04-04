function(e, t) {
    function i() {
        this._type = null, this.alive = !0, this.teamId = 0, this.isCarryied = !1, this.disposition = {
            cellId: -1,
            direction: 0,
            carryingCharacterId: 0
        }, this.look = null, this.stats = {
            actionPoints: 0,
            airElementReduction: 0,
            airElementResistPercent: 0,
            baseMaxLifePoints: 0,
            criticalDamageReduction: 0,
            dodgePALostProbability: 0,
            dodgePMLostProbability: 0,
            earthElementReduction: 0,
            earthElementResistPercent: 0,
            fireElementReduction: 0,
            fireElementResistPercent: 0,
            invisibilityState: 0,
            initiative: 0,
            lifePoints: 0,
            maxActionPoints: 0,
            maxLifePoints: 0,
            maxMovementPoints: 0,
            movementPoints: 0,
            neutralElementReduction: 0,
            neutralElementResistPercent: 0,
            permanentDamagePercent: 0,
            pushDamageReduction: 0,
            shieldPoints: 0,
            summoned: !1,
            summoner: 0,
            tackleBlock: 0,
            tackleEvade: 0,
            waterElementReduction: 0,
            waterElementResistPercent: 0,
            displacementBoostBonus: 0,
            displacementWeaknessBonus: 0,
            receivedDamageMultiplierDistance: 0,
            receivedDamageMultiplierMelee: 0,
            receivedDamageMultiplierSpells: 0,
            receivedDamageMultiplierWeapon: 0
        }
    }

    function n(e, t) {
        for (var i in e) void 0 !== t[i] && (e[i] = t[i])
    }
    e.exports = i, i.prototype.updateData = function(e) {
        void 0 !== e._type && (this._type = e._type), void 0 !== e.alive && (this.alive = e.alive), void 0 !== e.teamId && (this.teamId = e.teamId), e.disposition && n(this.disposition, e.disposition), e.look && (this.look = e.look), e.stats && n(this.stats, e.stats)
    }, i.prototype.pointVariation = function(e, t) {
        this.stats[e] += t, this.stats[e] < 0 && (this.stats[e] = 0)
    }
}
