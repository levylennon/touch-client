function(e, t, i) {
    function n(e, t, i) {
        this._type = "CharacterCharacteristicsInformations", s = e, this.alignmentInfos = t.alignmentInfos, this.agility = new o(t.agility), this.chance = new o(t.chance), this.intelligence = new o(t.intelligence), this.strength = new o(t.strength), this.wisdom = new o(t.wisdom), this.experienceBoost = new o(t.experienceBoost), this.actionPoints = new o(t.actionPoints), this.airDamageBonus = new o(t.airDamageBonus), this.airElementReduction = new o(t.airElementReduction), this.airElementResistPercent = new o(t.airElementResistPercent), this.allDamagesBonus = new o(t.allDamagesBonus), this.criticalDamageBonus = new o(t.criticalDamageBonus), this.criticalDamageReduction = new o(t.criticalDamageReduction), this.criticalHit = new o(t.criticalHit), this.criticalHitWeapon = new o(t.criticalHitWeapon), this.criticalMiss = new o(t.criticalMiss), this.damagesBonusPercent = new o(t.damagesBonusPercent), this.dodgePALostProbability = new o(t.dodgePALostProbability), this.dodgePMLostProbability = new o(t.dodgePMLostProbability), this.earthDamageBonus = new o(t.earthDamageBonus), this.earthElementReduction = new o(t.earthElementReduction), this.earthElementResistPercent = new o(t.earthElementResistPercent), this.fireDamageBonus = new o(t.fireDamageBonus), this.fireElementReduction = new o(t.fireElementReduction), this.fireElementResistPercent = new o(t.fireElementResistPercent), this.healBonus = new o(t.healBonus), this.initiative = new o(t.initiative), this.movementPoints = new o(t.movementPoints), this.neutralDamageBonus = new o(t.neutralDamageBonus), this.neutralElementReduction = new o(t.neutralElementReduction), this.neutralElementResistPercent = new o(t.neutralElementResistPercent), this.PAAttack = new o(t.PAAttack), this.permanentDamagePercent = new o(t.permanentDamagePercent), this.PMAttack = new o(t.PMAttack), this.probationTime = new o(t.probationTime), this.prospecting = new o(t.prospecting), this.pushDamageBonus = new o(t.pushDamageBonus), this.pushDamageReduction = new o(t.pushDamageReduction), this.pvpAirElementReduction = new o(t.pvpAirElementReduction), this.pvpAirElementResistPercent = new o(t.pvpAirElementResistPercent), this.pvpEarthElementReduction = new o(t.pvpEarthElementReduction), this.pvpEarthElementResistPercent = new o(t.pvpEarthElementResistPercent), this.pvpFireElementReduction = new o(t.pvpFireElementReduction), this.pvpFireElementResistPercent = new o(t.pvpFireElementResistPercent), this.pvpNeutralElementReduction = new o(t.pvpNeutralElementReduction), this.pvpNeutralElementResistPercent = new o(t.pvpNeutralElementResistPercent), this.pvpWaterElementReduction = new o(t.pvpWaterElementReduction), this.pvpWaterElementResistPercent = new o(t.pvpWaterElementResistPercent), this.range = new o(t.range), this.reflect = new o(t.reflect), this.summonableCreaturesBoost = new o(t.summonableCreaturesBoost), this.summonableMaximumBombs = new o(t.summonableMaximumBombs), this.tackleBlock = new o(t.tackleBlock), this.tackleEvade = new o(t.tackleEvade), this.trapBonus = new o(t.trapBonus),
            this.trapBonusPercent = new o(t.trapBonusPercent), this.vitality = new o(t.vitality), this.waterDamageBonus = new o(t.waterDamageBonus), this.waterElementReduction = new o(t.waterElementReduction), this.waterElementResistPercent = new o(t.waterElementResistPercent), this.weaponDamagesBonusPercent = new o(t.weaponDamagesBonusPercent), this.dealtDamageMultiplierMelee = new o(t.dealtDamageMultiplierMelee), this.receivedDamageMultiplierMelee = new o(t.receivedDamageMultiplierMelee), this.dealtDamageMultiplierDistance = new o(t.dealtDamageMultiplierDistance), this.receivedDamageMultiplierDistance = new o(t.receivedDamageMultiplierDistance), this.dealtDamageMultiplierWeapon = new o(t.dealtDamageMultiplierWeapon), this.receivedDamageMultiplierWeapon = new o(t.receivedDamageMultiplierWeapon), this.dealtDamageMultiplierSpells = new o(t.dealtDamageMultiplierSpells), this.receivedDamageMultiplierSpells = new o(t.receivedDamageMultiplierSpells), this.displacementBoostBonus = new o(t.displacementBoostBonus), this.displacementWeaknessBonus = new o(t.displacementWeaknessBonus), this.spellModifications = [];
        for (var n = 0; n < t.spellModifications.length; n += 1) {
            var r = t.spellModifications[n];
            this.spellModifications.push(new a(r))
        }
        if (this.actionPointsCurrent = t.actionPointsCurrent, this.additionnalPoints = t.additionnalPoints, this.energyPoints = t.energyPoints, this.experience = t.experience, this.experienceLevelFloor = t.experienceLevelFloor, this.experienceNextLevelFloor = t.experienceNextLevelFloor, this.kamas = t.kamas, this.lifePoints = t.lifePoints, this.maxEnergyPoints = t.maxEnergyPoints, this.maxLifePoints = t.maxLifePoints, this.movementPointsCurrent = t.movementPointsCurrent, this.remoteBankTaxKamas = t.remoteBankTaxKamas, this.spellsPoints = t.spellsPoints, this.accountSpellsPoints = t.accountSpellsPoints, this.statsPoints = t.statsPoints, i)
            for (var c = Object.keys(t), l = Object.keys(this), d = 0; d < c.length; d += 1) {
                var u = c[d];
                l.indexOf(u) === -1 && console.error(new Error("CharacterCharacteristicsInformations: key: " + u + " is missing"))
            }
    }
    var o = i(110),
        a = i(111),
        r = i(112),
        s = null,
        c = ["vitality", "wisdom", "strength", "intelligence", "chance", "agility"];
    e.exports = n, n.prototype.getRemainingAdditionalPts = function() {
        if (this.additionnalPoints <= 0) return 0;
        for (var e = !1, t = 0; t < c.length; t += 1) {
            var i = c[t],
                n = this[i];
            if (n) {
                if (n.getAdditionalPts() < r.MAX_ADDITIONNAL_PER_CARAC) {
                    e = !0;
                    break
                }
            } else s.error("stat missing for", i)
        }
        return e ? this.additionnalPoints : 0
    }
}
