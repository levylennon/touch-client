function(e, t, i) {
    var n = i(903),
        o = i(739),
        a = i(736),
        r = i(740),
        s = i(476);
    n.prototype.addSharedDamages = function(e, t) {
        for (var i = this.getSpellDamage({
                onlyShareableEffects: !0
            }), n = 0; n < this.target.buffs.length; n++) {
            var o = this.target.buffs[n],
                a = o.source;
            o.actionId === s.ACTION_CHARACTER_SHARE_DAMAGES && (t[a] || (t[a] = [], e[a] = []), t[a].indexOf(this.target.id) === -1 && t[a].push(this.target.id), this.verifyBuffTrigger(o) && i && e[a].push(i), this.sharedDamages = e[a], this.sharedFighters = t[a])
        }
    }, n.prototype.addSplashDamages = function(e) {
        for (var t = 0; t < this.effectInstances.length; t++) {
            var i = this.effectInstances[t],
                n = o.EFFECTS_IDS.SPLASH[i.effectId],
                s = o.EFFECTS_IDS.SPLASH_HEAL[i.effectId],
                c = o.EFFECTS_IDS.SPLASH_FINAL[i.effectId];
            if (i.isDirectEffect() && (n || s || c) && a.isInZoneEffect(i, this.target.cellId) && a.verifySpellEffectMask(i, this.caster.id, this.target.id, this.effectMaskOptions)) {
                for (var l = a.getShapeEfficiency(i.rawZone, this.spellCenterCellId, this.target.cellId), d = 0; d < e.length; d++) {
                    var u = e[d];
                    if (!(!u.finalSpellDamageWithoutBuff || d > 0 && !u.isGlyph))
                        for (var p = u.caster.damageBoostPercent > 0 ? (100 + u.caster.damageBoostPercent) / 100 : 1, h = u.caster.damageDeboostPercent > 0 ? Math.max(0, (100 - u.caster.damageDeboostPercent) / 100) : 1, f = 1 / (p * h), b = u.finalSpellDamageWithoutBuff, m = 0; m < b.effectDamages.length; m++) {
                            var M = b.effectDamages[m],
                                g = n ? M.damageWithoutResist.clone() : M.damage.clone();
                            if (g.applyMultiplier(f), (g.min || g.max) && 5 !== M.effectId) {
                                g.applyMultiplier(i.diceNum / 100);
                                var _ = "splash-" + u.caster.id + "-" + u.spellId + "-" + i.targetMask + "-" + i.effectId;
                                M = new r(_, M.effectId, M.element, M.random), M.damage = g, M.efficiencyMultiplier = l, s && M.convertDamageToHeal(), this.splashDamages.push(M)
                            }
                        }
                }
                this.isAccurate = !0
            }
        }
    }, n.prototype.addLifeStealingDamagesReceived = function(e) {
        for (var t in e) this.lifeStealingDamagesReceived.push(e[t])
    }, n.prototype.addCounteredDamagesReceived = function(e) {
        for (var t = 0; t < e.length; t++) this.counteredDamagesReceived.push(e[t])
    }, n.prototype.addInterceptionDamages = function(e) {
        for (var t = 0; t < e.length; t++) {
            for (var i = e[t], n = !1, o = 0; o < this.damagesInput.length; o++) {
                var a = this.damagesInput[o];
                if (a.nameId === i.nameId) {
                    a.damage.addFromDamage(i.damage), n = !0;
                    break
                }
            }
            n || this.damagesInput.push(i)
        }
    }
}
