function(e, t, i) {
    function n(e, t) {
        this.id = e, this.level = 0, this.cellId = -1, this.realCellId = -1, this.type = null, this.isAccurate = !0, this.isInvulnerable = !1, this.isUnhealable = !1, this.isBomb = !1, this.states = [], this.lifePointsAfterDamages = new o, this.lifeLost = new o, this.buffs = [], this.strength = 0, this.chance = 0, this.agility = 0, this.intelligence = 0, this.strengthBonus = 0, this.chanceBonus = 0, this.agilityBonus = 0, this.intelligenceBonus = 0, this.criticalStrengthBonus = 0, this.criticalChanceBonus = 0, this.criticalAgilityBonus = 0, this.criticalIntelligenceBonus = 0, this.newStatsBonus = t || {}, this.criticalHit = 0, this.criticalHitWeapon = 0, this.baseDamageBonus = 0, this.healBonus = 0, this.allDamagesBonus = 0, this.damagesBonusPercent = 0, this.spellDamagesBonus = 0, this.weaponDamagesBonus = 0, this.comboBonus = 0, this.trapBonus = 0, this.trapBonusPercent = 0, this.permanentDamagePercent = 0, this.pushDamageBonus = 0, this.criticalPushDamageBonus = 0, this.criticalDamageBonus = 0, this.neutralDamageBonus = 0, this.earthDamageBonus = 0, this.waterDamageBonus = 0, this.airDamageBonus = 0, this.fireDamageBonus = 0, this.damageBoostPercent = 0, this.damageDeboostPercent = 0, this.dealtDamageMultiplierDistance = 0, this.dealtDamageMultiplierMelee = 0, this.dealtDamageMultiplierSpells = 0, this.dealtDamageMultiplierWeapon = 0, this.neutralElementResistPercent = 0, this.earthElementResistPercent = 0, this.waterElementResistPercent = 0, this.airElementResistPercent = 0, this.fireElementResistPercent = 0, this.neutralElementReduction = 0, this.earthElementReduction = 0, this.waterElementReduction = 0, this.airElementReduction = 0, this.fireElementReduction = 0, this.criticalDamageReduction = 0, this.pushDamageReduction = 0, this.receivedDamageMultiplierDistance = 0, this.receivedDamageMultiplierMelee = 0, this.receivedDamageMultiplierSpells = 0, this.receivedDamageMultiplierWeapon = 0, this.erosionLifePoints = 0, this.spellErosionLifePoints = new o, this.erosionPercentBonus = 0, this.displacementBoostBonus = 0, this.displacementWeaknessBonus = 0, this.baseMaxLifePoints = 0, this.maxLifePoints = 0
    }
    var o = i(741),
        a = i(739),
        r = i(743),
        s = i(14),
        c = s();
    e.exports = n, n.prototype.recomputeVitality = function(e) {
        this.baseMaxLifePoints += e, this.erosionLifePoints = Math.max(0, this.baseMaxLifePoints - this.maxLifePoints)
    }, n.prototype.retrieveStats = function() {
        var e = c.gui,
            t = e.damagePreview.damagePreviewManager,
            i = e.playerData.characters.controlledCharacterId,
            n = c.actorManager.getActor(this.id);
        if (!n) return console.warn("Actor " + this.id + " does not exist");
        var o = n.getFighter();
        if (!o) return console.warn("Fighter " + this.id + " does not exist");
        var s = o.data,
            l = s.stats,
            d = o.data.stats.summoner === e.playerData.characters.mainCharacterId,
            u = i === this.id && Boolean(o.data.stats.summoner),
            p = d || o.data.stats.summoner === i;
        this.type = s._type, this.level = o.level, this.isBomb = o.isBomb, this.realCellId = n.cellId, this.cellId = t.getVirtualCellFromRealCell(n.cellId), this.states = o.states.concat(t.triggeredStates[this.id]), this.isInvulnerable = this.states.indexOf(r.STATE_INVULNERABLE) !== -1 || this.states.indexOf(r.STATE_INVULNERABLE_COPY) !== -1, this.isUnhealable = this.states.indexOf(r.STATE_INCURABLE) !== -1, this.buffs = o.buffs.sort(function(e, t) {
            var i = a.BUFF_EFFECT_ORDER[e.actionId] || 0,
                n = a.BUFF_EFFECT_ORDER[t.actionId] || 0;
            return i - n
        });
        var h;
        for (h in l) 0 === this[h] && (this[h] = l[h]);
        if (this.erosionLifePoints = Math.max(0, this.baseMaxLifePoints - this.maxLifePoints), this.id === i || (this.isAccurate = !1, p)) {
            var f = d && !u ? e.playerData.characters.mainCharacter.characteristics : e.playerData.characters.getControlledCharacter()
                .characteristics;
            this.isBomb && (this.isAccurate = !0);
            for (h in f)
                if (0 === this[h]) {
                    var b = f[h];
                    this[h] = p && !this.isAccurate ? b.getBasePts() + b.getEquipmentPts() : b.getTotalStat()
                }
        }
    }
}
