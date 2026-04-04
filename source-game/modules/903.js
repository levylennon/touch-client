function(e, t, i) {
    function n(e, t, i, n, o, a, r) {
        this._initVariables(), this._retrieveData(e, t, i, n, o, a, r)
    }

    function o(e) {
        for (var t = [], i = 0; i < e.length; i++) {
            var n = e[i],
                o = n.castingSpell ? n.castingSpell.spell.id : -1;
            t[o] || (t[o] = []), t[o].push(n)
        }
        return t
    }

    function a(e, t, i) {
        var n = -1;
        if (!i || 0 === i.length) return 0;
        for (var o = 0; o < i.length; o++) {
            var a = i[o];
            if ((a.isDamageEffect() || r.isHealingEffect(a) || 5 === a.effectId) && a.order && a.isDirectEffect() && r.verifySpellEffectMask(a, e, t)) {
                if (n === -1) {
                    n = a.order;
                    continue
                }
                n = Math.min(a.order, n)
            }
        }
        return n === -1 ? Number.MAX_SAFE_INTEGER : n
    }
    var r = i(736),
        s = i(740),
        c = i(739),
        l = i(904),
        d = i(476),
        u = i(743),
        p = i(14),
        h = p();
    e.exports = n, n.prototype._initVariables = function() {
        this.caster = null, this.target = null, this.effectMaskOptions = {}, this.specificTarget = 0, this.triggeredBy = 0, this.currentDepth = 0, this.isCriticalEffect = !1, this.isGlyph = !1, this.isTrap = !1, this.spellLevel = 1, this.spellCenterCellId = 0, this.spellWeaponCriticalBonus = 0, this.spellTargetEffectsChangeReduction = 0, this.maximizeEffect = !1, this.minimizeEffect = !1, this.limitStackBuffs = {}, this.baseDamages = [], this.pushedEntities = [], this.splashDamages = [], this.lifeStealingDamagesGiven = [], this.lifeStealingDamagesReceived = [], this.sharedDamages = [], this.sharedFighters = [], this.damagesOutputTo = 0, this.damagesOutput = [], this.damagesInput = [], this.counteredDamagesGiven = [], this.counteredDamagesReceived = [], this.isAccurate = !0, this.finalSpellDamage = null, this.finalSpellDamageWithoutBuff = null
    }, n.prototype._retrieveData = function(e, t, i, n, o, a, r) {
        var s = h.gui,
            c = h.actorManager;
        if (!s.playerData.isFighting) return console.warn("We are not in a fight");
        var d = c.getActor(a);
        if (!d) return console.warn("Actor " + a + " does not exist");
        var u = c.getActor(o);
        if (!u) return console.warn("Actor " + o + " does not exist");
        var p = d.getFighter();
        if (!p) return console.warn("Fighter " + a + " does not exist");
        var f = u.getFighter();
        if (!f) return console.warn("Fighter " + o + " does not exist");
        if (this.spellId = e.id, this.spellLevel = e.level, this.spellMaxStack = e.spellLevel ? e.spellLevel.maxStack : 0, this.isCriticalEffect = r.isCriticalEffect, this.spellCenterCellId = n, this.triggeredBy = r.triggeredBy, this.currentDepth = r.currentDepth, this.isGlyph = r.isGlyph, this.isTrap = r.isTrap, this.isWeapon = e.isItem, this.effectMaskOptions = {
                triggeredBy: r.triggeredBy
            }, this.specificTarget = r.specificTarget, this.effectInstances = t, this.caster = new l(o, r.statsBonus), this.target = new l(a, {}), this.caster.retrieveStats(), this.target.retrieveStats(), this.isAccurate = this.caster.isAccurate, this.caster.comboBonus = r.comboBonus || 0, this.caster.cellId = i, r.casterLifeLost && (this.caster.lifeLost = r.casterLifeLost), r.targetLifeLost && (this.target.lifeLost = r.targetLifeLost), this.isWeapon && this.isCriticalEffect) {
            var b = s.playerData.inventory.getCurrentWeapon();
            this.spellWeaponCriticalBonus = b.item.criticalHitBonus
        }
        for (var m = 0; m < this.caster.buffs.length; m++) {
            var M = this.caster.buffs[m],
                g = M.castingSpell && M.castingSpell.spell && M.castingSpell.spell.id;
            M.statName && M.source === this.caster.id && g === e.id && (this.limitStackBuffs[M.actionId] = (this.limitStackBuffs[M.actionId] || 0) + M.stack.length)
        }
        this._manageCasterBuffs(), this._manageTargetBuffs()
    }, n.prototype.isMaxStackReached = function(e) {
        return ~~this.limitStackBuffs[c.BUFF_EFFECT_TO_STAT_EFFECT[e]] >= this.spellMaxStack && this.spellMaxStack !== -1
    }, n.prototype.computeBaseDamageForEffect = function(e, t) {
        (!this.specificTarget || this.specificTarget === this.target.id || h.actorManager.getActorsOnCell(this.target.realCellId)
            .length <= 1) && this._computeBaseDamage(e, t)
    }, n.prototype.lastStepInit = function() {
        for (var e in this.baseDamages)
            if (this.baseDamages.hasOwnProperty(e)) {
                var t = this.baseDamages[e];
                this.caster.id === h.gui.playerData.characters.controlledCharacterId && r.applySpellModificationsOnEffect(t, this.spellId), this.maximizeEffect ? (t.damage.min = t.damage.max, t.erosionPercent.min = t.erosionPercent.max, t.lifePointsAdded.min = t.lifePointsAdded.max) : this.minimizeEffect && (t.damage.max = t.damage.min, t.erosionPercent.max = t.erosionPercent.min, t.lifePointsAdded.max = t.lifePointsAdded.min)
            }
    }, n.prototype._computeBaseDamage = function(e, t) {
        var i = this,
            n = h.gui,
            o = n.damagePreview.damagePreviewManager,
            l = n.fightManager.getFighter(this.caster.id);
        if (!l) return console.warn("Fighter " + this.caster.id + " does not exist"), !1;
        var u = n.fightManager.getFighter(this.target.id);
        if (!u) return console.warn("Fighter " + this.target.id + " does not exist"), !1;
        var p, f, b, m = a(this.caster.id, this.target.id, this.effectInstances),
            M = r.isInZoneEffect(e, i.target.cellId);
        "P" === e.rawZone && i.target.cellId !== i.target.realCellId && (M |= r.isInZoneEffect(e, i.target.realCellId));
        var g = r.getElementEffect(i.caster, e.effect);
        if (f = i.caster.id + "-" + i.spellId + "-" + e.order + "-" + e.targetMask + "-" + e.effectId, e.effectId === d.ACTION_FIGHT_SET_STATE && M && 0 === e.delay && e.order < m && r.verifySpellEffectMask(e, i.caster.id, i.target.id, i.effectMaskOptions) && (i.verifyAllEffectsTrigger(i.effectInstances, e.triggers, i.effectMaskOptions) || "TP" === e.triggers && o.tpTriggerEffect.indexOf(e) !== -1)) return o.triggeredStates[i.target.id] = o.triggeredStates[i.target.id] || [], o.triggeredStates[i.target.id].push(e.value), t();
        var _ = c.EFFECTS_IDS.TRIGGERING_SPELL[e.effectId];
        if (void 0 !== _ && e.order < m && e.isDirectEffect() && M && r.verifySpellEffectMask(e, i.caster.id, i.target.id, i.effectMaskOptions)) {
            var A = e.getParams();
            return i.checkTriggeredSpellGiveState({
                spellId: A[0],
                spellType: _,
                level: A[1]
            }, t)
        }
        if (e.effectId === d.ACTION_BOOST_SPELL_BASE_DMG && e.isDirectEffect() && M && e.order < m && r.verifySpellEffectMask(e, i.caster.id, i.target.id, i.effectMaskOptions)) return r.addBoostSpell(e, i.caster.id, i.target.id), t();
        if (!e.isDirectEffect() || !M || i.isWeapon && i.caster.id === i.target.id || 0 !== i.spellId && !r.verifySpellEffectMask(e, i.caster.id, i.target.id, i.effectMaskOptions)) return t();
        var O = r.getShapeEfficiency(i.isWeapon ? n.playerData.inventory.getCurrentWeapon()
            .item.type.rawZone : e.rawZone, i.spellCenterCellId, i.target.cellId);
        if (e.isDamageEffect() && !r.isHealingEffect(e) && g !== -1) {
            i.baseDamages[f] = new s(f, e.effectId, g, e.random || -1), p = i.baseDamages[f], p.efficiencyMultiplier = O, i.caster.id === i.target.id && "C" === e.targetMask && "I" === e.triggers && (p.efficiencyMultiplier = 1);
            var v = c.EFFECTS_IDS.TARGET_EROSION_DAMAGE[e.effectId],
                y = c.EFFECTS_IDS.CASTER_EROSION_DAMAGE[e.effectId];
            if (v || y) p.type = c.TYPE.EROSION, p.erosionPercent.normal = e.diceNum;
            else {
                b = r.getMinMaxDamageFromRawEffect(e), i.isGlyph ? p.origin = c.ORIGIN.GLYPH : i.isTrap && (p.origin = c.ORIGIN.TRAP), p.damage.min = b.min + i.spellWeaponCriticalBonus, p.damage.max = b.max + i.spellWeaponCriticalBonus;
                var z = r.getTotalBoostSpell(this.spellId);
                p.damage.min += z, p.damage.max += z
            }
        } else if (r.isHealingEffect(e)) {
            i.baseDamages[f] = new s(f, e.effectId, (-1), e.random), p = i.baseDamages[f], p.efficiencyMultiplier = O, p.type = c.TYPE.HEAL;
            var w = l.data.stats.lifePoints,
                T = u.data.stats.maxLifePoints;
            e.effectId === d.ACTION_CHARACTER_DISPATCH_LIFE_POINTS_PERCENT ? i.target.id !== i.caster.id ? p.lifePointsAddedBasedOnLifePercent.normal = e.diceNum * w / 100 : (p.type = c.TYPE.FIXED, p.damage.normal = e.diceNum * w / 100) : e.effectId === d.ACTION_FIGHT_LIFE_POINTS_WIN_PERCENT ? p.lifePointsAddedBasedOnLifePercent.normal = e.diceNum * T / 100 : (b = r.getMinMaxDamageFromRawEffect(e), p.lifePointsAdded.min = b.min + i.spellWeaponCriticalBonus, p.lifePointsAdded.max = b.max + i.spellWeaponCriticalBonus)
        } else if (c.EFFECT_ADD_STATS_PROPERTY[e.effectId] && e.order < m && !i.isMaxStackReached(e.effectId)) {
            var C;
            C = i.isCriticalEffect ? c.EFFECT_ADD_STATS_PROPERTY_CRITICAL[e.effectId] : c.EFFECT_ADD_STATS_PROPERTY[e.effectId], i.caster.newStatsBonus[C] = i.caster.newStatsBonus[C] || 0, i.caster.newStatsBonus[C] += e.diceNum
        }
        return e.effectId === d.ACTION_CHARACTER_MODIFY_ACTIVE_EFFECTS_DURATION && (m === -1 || e.order < m) && (i.spellTargetEffectsChangeReduction = e.diceNum), t()
    }, n.prototype._manageCasterBuffs = function() {
        var e = o(this.caster.buffs);
        for (var t in e)
            if (e.hasOwnProperty(t))
                for (var i = e[t], n = 0; n < i.length; n++) {
                    var a = i[n];
                    if (a.effect.effect.category === c.DAMAGE_EFFECT_CATEGORY) {
                        var l = a.effect;
                        if (a.castingSpell.spell.id === this.spellId)
                            for (var u = 0; u < this.effectInstances.length; u++)
                                if (this.effectInstances[u].effectId === a.effect.effectId) {
                                    l = this.effectInstances[u];
                                    break
                                } if (!r.verifySpellEffectMask(l, this.caster.id, this.target.id, this.effectMaskOptions) || !this.verifyBuffTrigger(a) || this.caster.id === this.target.id) continue;
                        var p = r.getElementEffect(this.caster, l.effect),
                            h = "buff-" + this.caster.id + "-" + a.castingSpell.spell.id + "-" + l.targetMask + "-" + l.effectId;
                        this.baseDamages[h] = new s(h, l.effectId, p, l.random), this.baseDamages[h].type = c.TYPE.BUFF;
                        var f = r.getMinMaxDamageFromRawEffect(l);
                        this.baseDamages[h].damage.min = f.min, this.baseDamages[h].damage.max = f.max, this.baseDamages[h].efficiencyMultiplier = r.getShapeEfficiency(l.rawZone, this.target.cellId, this.target.cellId)
                    } else c.BUFF_ADD_DAMAGES[a.actionId] ? this.caster[c.BUFF_ADD_DAMAGES[a.actionId]] += a.getParam1() : a.actionId === d.ACTION_CHARACTER_UNLUCKY ? this.minimizeEffect = !0 : a.actionId === d.ACTION_CHARACTER_BOOST_PERMANENT_DAMAGE_PERCENT ? this.caster.erosionPercentBonus += a.getParam1() : a.actionId === d.ACTION_CHARACTER_BOOST_VITALITY && this.caster.recomputeVitality(a.getParam1())
                }
    }, n.prototype._manageTargetBuffs = function() {
        for (var e = 0; e < this.target.buffs.length; e++) {
            var t = this.target.buffs[e];
            if (!t.trigger && t.effect.effectId === d.ACTION_FIGHT_DISABLE_STATE) switch (t.effect.getParams()[0]) {
                case u.STATE_INVULNERABLE:
                case u.STATE_INVULNERABLE_COPY:
                    this.target.isInvulnerable = !1;
                    break;
                case u.STATE_INCURABLE:
                    this.target.isUnhealable = !1
            }
            t.actionId === d.ACTION_CHARACTER_MAXIMIZE_ROLL && (this.maximizeEffect = !0);
            var i = t.getParam1();
            i && t.actionId === d.ACTION_CHARACTER_BOOST_PERMANENT_DAMAGE_PERCENT && (this.target.erosionPercentBonus += i), i && t.actionId === d.ACTION_CHARACTER_BOOST_VITALITY && this.target.recomputeVitality(i)
        }
    }, n.prototype.computeSpellDamage = function() {
        this.finalSpellDamageWithoutBuff = this.getSpellDamage(), this.finalSpellDamage = this.getSpellDamage({
            withTargetBuffs: !0
        })
    }
}
