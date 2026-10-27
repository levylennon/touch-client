function(e, t, i) {
    function n(e, t, i, n) {
        var o = new g;
        return o.min = e.min * t.min / 100, o.max = e.max * t.max / 100, o.truncate(), o.applyMultiplier(i / 100 * n), o.truncate(), o
    }

    function o(e, t, i, n) {
        var o = e.pushDamageBonus + (e.newStatsBonus.pushDamageBonus || 0);
        return Math.max(0, (e.level / 2 + o - t.pushDamageReduction + 32) * i / Math.pow(2, 2 + n))
    }

    function a(e, t) {
        return e * (100 + 5 * t) / 100
    }

    function r(e, t, i) {
        return e * t / 100 * i / 100
    }

    function s(e) {
        return Math.pow(Math.cos(2 * Math.PI * (.01 * ~~e - .5)) + 1, 2) / 4
    }

    function c(e, t, i) {
        return e * t.baseMaxLifePoints * s(Math.min(100, Math.max(0, 100 * t.lifePoints / t.maxLifePoints))) / 100 * i / 100
    }

    function l(e, t) {
        if (!t || !t.length || !e) return 0;
        for (var i = 0, n = 0; n < t.length; n++) {
            var o = w.gui.fightManager.getFighter(t[n]);
            if (o) {
                var a = o.data.stats[e];
                o.data._type === A.FIGHT_CHARACTER_TYPE && e.indexOf(A.RESISTANCE_NAME) !== -1 && (a = Math.min(A.MAX_RESISTANCE, a)), i += a
            }
        }
        return i / t.length
    }

    function d(e, t) {
        t.stat = t.ignoreStats || !t.stat ? 0 : t.stat, t.statBonus = t.ignoreStats || !t.statBonus ? 0 : t.statBonus, t.comboBonus = t.ignoreStats || !t.comboBonus ? 0 : t.comboBonus, t.damageSharingMultiplicator = t.damageSharingMultiplicator || 1, t.baseDamageBonus = t.baseDamageBonus || 0, t.damageBonus = t.damageBonus || 0, t.dealtDamageMultiplierBonus = t.dealtDamageMultiplierBonus || 0, t.allDamagesBonus = t.allDamagesBonus || 0, t.spellModifBonus = t.spellModifBonus || 0, t.damageReduction = t.damageReduction || 0, t.resistPercent = void 0 !== t.resistPercent ? t.resistPercent : 100, t.efficiencyPercent = void 0 !== t.efficiencyPercent ? t.efficiencyPercent : 100, e += t.baseDamageBonus;
        var i = t.stat + t.statBonus,
            n = t.damageBonus + t.allDamagesBonus,
            o = e > 0 ? Math.floor(e * (100 + i) / 100) + n : 0,
            a = o > 0 ? (o + t.spellModifBonus) * t.efficiencyPercent / 100 : 0,
            r = ~~a * (t.comboBonus / 100 + 1),
            s = r * (t.dealtDamageMultiplierBonus / 100 + 1),
            c = Math.max(0, s - t.damageReduction);
        return c * t.resistPercent / 100 * t.damageSharingMultiplicator
    }

    function u(e, t) {
        var i = M.getElementEffect(e, t.effect.effect);
        if (i === -1) {
            var n = t.effect.triggers || "";
            n.indexOf("DA") !== -1 ? i = v.AIR : n.indexOf("DE") !== -1 ? i = v.EARTH : n.indexOf("DF") !== -1 ? i = v.FIRE : n.indexOf("DN") !== -1 ? i = v.NEUTRAL : n.indexOf("DW") !== -1 && (i = v.WATER)
        }
        return i
    }
    var p = i(903),
        h = i(738),
        f = i(476),
        b = i(743),
        m = i(735),
        M = i(736),
        g = i(741),
        _ = i(740),
        A = i(739),
        O = i(904),
        v = i(686),
        y = i(681),
        z = i(14),
        w = z();
    p.prototype.getBuffElementReduction = function(e, t) {
        var i = w.gui.fightManager.getFighter(t);
        if (!i) return 0;
        for (var n = 0, o = 0; o < i.buffs.length; o++) {
            var a = i.buffs[o],
                r = a.canBeDispell() && a.duration + this.spellTargetEffectsChangeReduction <= 0,
                s = u(this.caster, a);
            if (!r && (e.element === s || s === -1) && (a.actionId === f.ACTION_CHARACTER_LIFE_LOST_CASTER_MODERATOR || a.actionId === f.ACTION_CHARACTER_LIFE_LOST_MODERATOR) && this.verifyEffectDamageTrigger(e, a.effect.triggers, {
                    isWeapon: this.isWeapon,
                    targetId: t
                })) {
                var c = w.gui.fightManager.getFighter(a.source),
                    l = c ? c.level : 1;
                n += (l / 20 + 1) * a.effect.value
            }
        }
        return n
    }, p.prototype.getAverageBuffElementReduction = function(e, t) {
        for (var i = 0, n = 0; n < t.length; n++) {
            var o = t[n];
            i += this.getBuffElementReduction(e, o)
        }
        return i / t.length
    }, p.prototype.applyResistanceAndReduction = function(e) {
        var t = this.getResistancePercent(e.element),
            i = this.getReduction(e.element) + this.getBuffElementReduction(e, this.target.id),
            n = new _(e.nameId, e.effectId, e.element, e.random);
        return n.damage.addFromDamage(e.damage), n.damage.addFrom(-i), n.damage.truncate(), n.damage.applyMultiplier(t / 100), n.damage.truncate(), n
    }, p.prototype.getResistancePercent = function(e) {
        var t = 0;
        return A.NAME_RESISTANCE_ELEMENT[e] && (t = this.target[A.NAME_RESISTANCE_ELEMENT[e]]), 100 - t
    }, p.prototype.getReduction = function(e) {
        var t = 0;
        return A.NAME_REDUCTION_ELEMENT[e] && (t = this.target[A.NAME_REDUCTION_ELEMENT[e]]), t
    }, p.prototype.resetReusableValues = function() {
        var e = w.gui.fightManager;
        this.target.spellErosionLifePoints.reset();
        var t = e.getFighter(this.target.id),
            i = t && t.data.stats.lifePoints;
        this.target.lifePointsAfterDamages.min = i - this.target.lifeLost.min, this.target.lifePointsAfterDamages.max = i - this.target.lifeLost.max;
        var n = e.getFighter(this.caster.id),
            o = n && n.data.stats.lifePoints;
        this.caster.lifePointsAfterDamages.min = o - this.caster.lifeLost.min, this.caster.lifePointsAfterDamages.max = o - this.caster.lifeLost.max
    }, p.prototype._computeAllSharedDamages = function(e, t, i) {
        for (var n = 0; n < this.sharedDamages.length; n++)
            for (var o = this.sharedDamages[n], a = 0; a < o.effectDamages.length; a++) {
                var r = o.effectDamages[a];
                if (r.doesDamage() || r.type === A.TYPE.EROSION) {
                    var s;
                    if (M.isLifeStealingEffect(r)) {
                        var c = this._computeSharedDamages(r, .5);
                        c.convertDamageToHeal(), s = "sharedsteal" + r.element + "-" + r.effectId, t[s] ? t[s].lifePointsAdded.addFromDamage(c.lifePointsAdded) : t[s] = c
                    }
                    if (!i.onlyShareableEffects) {
                        var l = this._computeSharedDamages(r, 1);
                        l.type = A.TYPE.SHARED, s = "shared" + r.element + "-" + r.effectId, e[s] ? e[s].damage.addFromDamage(l.damage) : e[s] = l
                    }
                }
            }
    }, p.prototype._computeAllElementaryDamages = function(e, t) {
        var i;
        for (var n in this.baseDamages)
            if (this.baseDamages.hasOwnProperty(n)) {
                switch (i = this.baseDamages[n], i.type) {
                    case A.TYPE.NORMAL:
                    case A.TYPE.EROSION:
                        e[n] = this._computeDamage(i);
                        break;
                    case A.TYPE.FIXED:
                        e[n] = i.clone()
                }
                M.isLifeStealingEffect(i) && (t[n] = this._computeDamage(i, {
                    extraMultiplier: .5
                }))
            } for (var o = 0; o < this.splashDamages.length; o++) i = this.splashDamages[o], i = this._computeDamage(i, {
            ignoreCasterStats: !0
        }), e["splash" + i.element + "-" + i.effectId] = i, i.type = A.TYPE.SPLASH
    }, p.prototype._getComputedHealDamages = function() {
        var e = Math.max(1, this.caster.intelligence + this.caster.intelligenceBonus),
            t = new _((-1), (-1), (-1), (-1));
        t.type = A.TYPE.HEAL;
        var i;
        for (var n in this.baseDamages) this.baseDamages.hasOwnProperty(n) && this.baseDamages[n].type === A.TYPE.HEAL && (i = this.baseDamages[n], t.lifePointsAdded.min += (Math.floor(i.lifePointsAdded.min * (100 + e) / 100) + (i.lifePointsAdded.min > 0 ? this.caster.healBonus : 0)) * i.efficiencyMultiplier, t.lifePointsAdded.max += (Math.floor(i.lifePointsAdded.max * (100 + e) / 100) + (i.lifePointsAdded.max > 0 ? this.caster.healBonus : 0)) * i.efficiencyMultiplier, t.lifePointsAdded.min += i.lifePointsAddedBasedOnLifePercent.normal, t.lifePointsAdded.max += i.lifePointsAddedBasedOnLifePercent.normal);
        for (var o = 0; o < this.splashDamages.length; o++) i = this.splashDamages[o], t.lifePointsAdded.addFromDamage(i.lifePointsAdded);
        return t.lifePointsAdded.truncate(), t
    }, p.prototype._computeTargetBuffs = function(e, t, i, o, r) {
        function s(e, t) {
            if (e.doesDamage()) {
                var i = new _((-1), e.effectId, e.element, e.random),
                    n = u.getResistancePercent(e.element),
                    o = u.getReduction(e.element),
                    a = (t - o) * n / 100;
                i.damage.max = Math.min(a, e.damage.max), i.damage.min = Math.min(a, e.damage.min), i.type = e.type, i.origin = e.origin, u.counteredDamagesGiven.push(i)
            }
        }

        function c(e, t, i, n) {
            e.random > 0 ? (e.lifePointsAdded.min = Math.min(i, e.damage.min * n / 2), e.lifePointsAdded.max = Math.min(i, e.damage.max * n / 2)) : (t.lifePointsAdded.min = Math.min(i, t.lifePointsAdded.min + e.damage.min * n / 2), t.lifePointsAdded.max = Math.min(i, t.lifePointsAdded.max + e.damage.max * n / 2))
        }

        function l(e, t) {
            if (e.doesDamage() || 0 !== e.erosionPercent.min) {
                var i = new _(e.nameId, e.effectId, e.element, e.random);
                if (i.damage.min = e.damage.min, i.damage.max = e.damage.max, i.origin = e.origin, e.type === A.TYPE.EROSION) {
                    var o = (10 + u.target.erosionPercentBonus) / 100,
                        a = u.target.lifeLost.clone();
                    a.applyMultiplier(o), a.addFrom(t.data.stats.baseMaxLifePoints - t.data.stats.maxLifePoints), a.addFromDamage(u.target.spellErosionLifePoints), i.damage = n(a, e.erosionPercent, 100, 1), i.damageWithoutResist = i.damage.clone(), i = u.applyResistanceAndReduction(i)
                }
                u.damagesOutput.push(i)
            }
        }
        for (var d, u = this, p = w.gui.fightManager, h = w.gui.damagePreview.damagePreviewManager, b = [], m = 0; m < this.target.buffs.length; m++) {
            var g, O = this.target.buffs[m],
                v = O.canBeDispell() && O.duration + this.spellTargetEffectsChangeReduction <= 0 && O.duration !== -1e3,
                z = !(O instanceof y && O.statName);
            if (!O.delay && z && this.verifyBuffTrigger(O) && !v) {
                switch (b[O.actionId] = b[O.actionId] || 0, b[O.actionId]++, O.actionId) {
                    case f.ACTION_FIGHT_SET_STATE:
                        O.effect.trigger && (h.triggeredStates[this.target.id] = h.triggeredStates[this.target.id] || [], h.triggeredStates[this.target.id].push(O.effect.getParams()[0]));
                        break;
                    case f.ACTION_CHARACTER_MULTIPLY_RECEIVED_HEAL:
                        i.applyHealMultiplier(O.getParam1() / 100);
                        break;
                    case f.ACTION_CHARACTER_MULTIPLY_RECEIVED_DAMAGE:
                        var T = O.getParam1() / 100;
                        for (d in e) e.hasOwnProperty(d) && (e[d].type !== A.TYPE.NORMAL && e[d].type !== A.TYPE.EROSION && e[d].type !== A.TYPE.SPLASH || e[d].applyDamageMultiplier(T));
                        for (d in t) t.hasOwnProperty(d) && t[d].applyDamageMultiplier(T);
                        break;
                    case f.ACTION_CHARACTER_LIFE_LOST_REFLECTOR:
                        if (g = p.getFighter(O.source), !g) break;
                        var C = g.isSummon() && p.getFighter(g.data.stats.summoner),
                            I = C ? C.level : g.level,
                            S = a(O.effect.value, I);
                        this.counteredDamagesGiven = [];
                        for (d in e) e.hasOwnProperty(d) && (e[d].type !== A.TYPE.NORMAL && e[d].type !== A.TYPE.EROSION && e[d].type !== A.TYPE.SHARED && e[d].type !== A.TYPE.SPLASH || s(e[d], S));
                        break;
                    case f.ACTION_CHARACTER_PUNISHMENT:
                        if (O.effect.diceNum !== f.ACTION_CHARACTER_LIFE_POINTS_WIN_NO_BOOST) break;
                        var E = new _((-1), (-1), (-1), (-1));
                        for (d in e) e.hasOwnProperty(d) && (e[d].type === A.TYPE.NORMAL || e[d].type === A.TYPE.EROSION ? c(e[d], E, O.effect.diceSide, 1) : e[d].type === A.TYPE.SPLASH && c(e[d], E, O.effect.diceSide, 2));
                        o.addEffectDamage(E);
                        break;
                    case f.ACTION_CHARACTER_SACRIFY:
                        if (g = p.getFighter(O.source), O.source === this.caster.id && (this.counteredDamagesGiven = []), this.sharedDamages.length > 0 || b[O.actionId] > 1 || !g) break;
                        for (d in t) delete t[d];
                        this.damagesOutputTo = O.source, this.damagesOutput = [];
                        for (d in e) e.hasOwnProperty(d) && (e[d].type !== A.TYPE.NORMAL && e[d].type !== A.TYPE.EROSION && e[d].type !== A.TYPE.COUNTERED && e[d].type !== A.TYPE.SPLASH || l(e[d], g))
                }
                if (O.effect.effect.category === A.DAMAGE_EFFECT_CATEGORY && !M.isHealingEffect(O.effect)) {
                    var L = M.getElementEffect(this.caster, O.effect.effect),
                        N = M.getBuffMinMaxDamageFromRawEffect(O.effect),
                        R = O.effect.duration,
                        q = new _((-1), O.effect.effectId, L, (-1));
                    q.damage.min = R + this.spellTargetEffectsChangeReduction > 0 ? N.min : 0, q.damage.max = R + this.spellTargetEffectsChangeReduction > 0 ? N.max : 0, q.type = A.TYPE.BUFF;
                    var x, B = 0,
                        D = [];
                    for (x = 0; x < this.damagesInput.length; x++)(A.EFFECTS_IDS.TARGET_EROSION_DAMAGE[this.damagesInput[x].effectId] || A.EFFECTS_IDS.CASTER_EROSION_DAMAGE[this.damagesInput[x].effectId] || this.verifyEffectDamageTrigger(this.damagesInput[x], O.effect.triggers, {
                        isWeapon: this.isWeapon
                    })) && (this.damagesInput[x].nameId !== -1 && (D[this.damagesInput[x].nameId] = !0), B++);
                    for (d in e)
                        if (e.hasOwnProperty(d) && !D[d]) {
                            var W = e[d].type,
                                P = this.verifyEffectDamageTrigger(e[d], O.effect.triggers, {
                                    isWeapon: this.isWeapon
                                });
                            (W === A.TYPE.EROSION || P && W === A.TYPE.NORMAL) && B++
                        } for (x = 0; x < o.effectDamages.length; x++) {
                        var k = o.effectDamages[x];
                        k.effectId !== f.ACTION_CHARACTER_PUSH && k.effectId !== f.ACTION_CHARACTER_PUSH_FORCE || !this.verifyEffectDamageTrigger(k, O.effect.triggers) || B++
                    }
                    for (B += this.splashDamages.length, x = 0; x < B; x++)
                        if (A.EFFECTS_IDS.TARGET_HP_BASED_DAMAGE[O.actionId] || A.EFFECTS_IDS.HP_BASED_DAMAGE[O.actionId]) r.push(q);
                        else {
                            var F = this._computeDamage(q, {
                                efficiencyMultiplier: 1,
                                isBuffDamage: !0
                            });
                            o.addEffectDamage(F)
                        }
                }
            }
        }
    }, p.prototype.getSpellDamage = function(e) {
        e = e || {};
        var t, i, n, a = new h;
        this.resetReusableValues();
        var r = [],
            s = [];
        this.sharedDamages.length > 0 ? this._computeAllSharedDamages(r, s, e) : this._computeAllElementaryDamages(r, s);
        var c = this._getComputedHealDamages();
        for (t = 0; t < this.lifeStealingDamagesReceived.length; t++) n = this.lifeStealingDamagesReceived[t], n.convertDamageToHeal(), a.addEffectDamage(n);
        if (!e.onlyShareableEffects)
            for (t = 0; t < this.pushedEntities.length; t++) {
                var l = this.pushedEntities[t],
                    d = o(this.caster, this.target, l.force, l.pushedIndexes[0]);
                if (d && !l.mark && l.doesDamage) {
                    var u = new _((-1), f.ACTION_CHARACTER_PUSH, (-1), (-1));
                    u.damage.addFrom(~~d), a.addEffectDamage(u)
                }
            }
        var p = this.caster.damageBoostPercent > 0 ? (100 + this.caster.damageBoostPercent) / 100 : 1,
            m = this.caster.damageDeboostPercent > 0 ? Math.max(0, (100 - this.caster.damageDeboostPercent) / 100) : 1,
            M = p * m;
        for (i in r) r.hasOwnProperty(i) && r[i].type === A.TYPE.NORMAL && r[i].applyDamageMultiplier(M);
        for (i in s) s.hasOwnProperty(i) && s[i].applyDamageMultiplier(M);
        for (t = 0; t < this.counteredDamagesReceived.length; t++) n = this.counteredDamagesReceived[t], n = n.type !== A.TYPE.SHARED ? this.applyResistanceAndReduction(n) : n.clone(), n.type = A.TYPE.COUNTERED, r["countered-" + t + "-" + n.effectId] = n;
        var g = [];
        e.withTargetBuffs && !e.onlyShareableEffects && this._computeTargetBuffs(r, s, c, a, g), c.doesHeal() && a.addEffectDamage(c);
        for (i in r) r.hasOwnProperty(i) && a.addEffectDamage(r[i]);
        if (0 !== this.damagesOutputTo)
            for (t = 0; t < a.effectDamages.length; t++) n = a.effectDamages[t], n.effectId !== f.ACTION_CHARACTER_PUSH && n.effectId !== f.ACTION_CHARACTER_PUSH_FORCE && (n.damage.reset(), n.damageWithoutResist.reset(), n.erosionPercent.reset());
        for (t = 0; t < this.damagesInput.length; t++) a.addEffectDamage(this.damagesInput[t]);
        if (!e.onlyShareableEffects) {
            a.updateDamage(), this.caster.lifePointsAfterDamages.substractFromDamage(a.damage);
            for (i in this.baseDamages)
                if (this.baseDamages.hasOwnProperty(i) && this.baseDamages[i].type === A.TYPE.BUFF) {
                    var O = this._computeDamage(this.baseDamages[i], {
                        efficiencyMultiplier: 1,
                        ignoreCasterStats: !1
                    });
                    a.addEffectDamage(O), this.caster.lifePointsAfterDamages.substractFromDamage(O.damage)
                }
        }
        if (g.length > 0 && !e.onlyShareableEffects && 0 === this.damagesOutputTo)
            for (a.updateDamage(), this.target.lifePointsAfterDamages.substractFromDamage(a.damage), t = 0; t < g.length; t++) {
                var v = this._computeDamage(g[t], {
                    efficiencyMultiplier: 1,
                    ignoreCasterStats: !1,
                    isBuffDamage: !0
                });
                a.addEffectDamage(v), this.target.lifePointsAfterDamages.substractFromDamage(v.damage)
            }
        if (a.updateDamage(), this.caster.states.indexOf(b.STATE_PACIFIST) !== -1)
            for (t = 0; t < a.effectDamages.length; t++) a.effectDamages[t].damage.reset(), a.effectDamages[t].damageWithoutResist.reset();
        return this.lifeStealingDamagesGiven = s, a
    }, p.prototype._computeSharedDamages = function(e, t) {
        if (!this.sharedFighters.length) return e;
        var i = new _((-1), e.effectId, e.element, e.random),
            n = 100 - l(A.NAME_RESISTANCE_ELEMENT[e.element], this.sharedFighters),
            o = l(A.NAME_REDUCTION_ELEMENT[e.element], this.sharedFighters);
        o += this.getAverageBuffElementReduction(e, this.sharedFighters), this.isCriticalEffect && (o += l("criticalDamageReduction", this.sharedFighters));
        var a = 1 / this.sharedFighters.length * t,
            r = d(e.damageWithoutResist.min, {
                ignoreStats: !0,
                damageReduction: o,
                resistPercent: n,
                damageSharingMultiplicator: a
            }),
            s = d(e.damageWithoutResist.max, {
                ignoreStats: !0,
                damageReduction: o,
                resistPercent: n,
                damageSharingMultiplicator: a
            });
        return i.damage.min = ~~r, i.damage.max = ~~s, i.type = e.type, i.origin = e.origin, i
    }, p.prototype._computeDamage = function(e, t) {
        var i = w.gui;
        t = t || {};
        var o = 0,
            a = 0,
            s = 0,
            l = 0,
            u = 0,
            p = 0,
            h = 0 !== this.spellId || this.isWeapon ? this.caster.criticalDamageBonus : 0,
            b = t.ignoreCriticalResist ? 0 : this.target.criticalDamageReduction,
            M = this.caster.allDamagesBonus,
            O = this.caster.baseDamageBonus,
            y = 0,
            z = 0,
            T = this.sharedFighters.length ? 1 / this.sharedFighters.length : 1,
            C = 0,
            I = 0,
            S = i.fightManager.getFighter(this.caster.id);
        if (!S) return console.warn("Fighter " + this.caster.id + " does not exist"), e.clone();
        var E = S.data,
            L = E.stats.movementPoints / E.stats.maxMovementPoints,
            N = Math.max(0, this.caster.lifePointsAfterDamages.min),
            R = Math.max(0, this.caster.lifePointsAfterDamages.max),
            q = Math.max(0, this.target.lifePointsAfterDamages.min),
            x = Math.max(0, this.target.lifePointsAfterDamages.max),
            B = e.effectId,
            D = m.getDistance(this.caster.cellId, this.target.cellId);
        switch (D <= 1 ? (C += this.caster.dealtDamageMultiplierMelee, I += this.target.receivedDamageMultiplierMelee) : (C += this.caster.dealtDamageMultiplierDistance, I += this.target.receivedDamageMultiplierDistance), this.isWeapon ? (C += this.caster.dealtDamageMultiplierWeapon, I += this.target.receivedDamageMultiplierWeapon) : (C += this.caster.dealtDamageMultiplierSpells, I += this.target.receivedDamageMultiplierSpells), A.EFFECTS_IDS.NO_BOOST[B] && (t.ignoreCasterStats = !0), e.element) {
            case v.NEUTRAL:
                u = Math.max(0, this.caster.strength), a = this.caster.strengthBonus + (this.caster.newStatsBonus.strengthBonus || 0), s = this.caster.criticalStrengthBonus + (this.caster.newStatsBonus.criticalStrengthBonus || 0), l = this.target.neutralElementResistPercent, p = this.target.neutralElementReduction, y = this.caster.neutralDamageBonus;
                break;
            case v.EARTH:
                u = Math.max(0, this.caster.strength), a = this.caster.strengthBonus + (this.caster.newStatsBonus.strengthBonus || 0), s = this.caster.criticalStrengthBonus + (this.caster.newStatsBonus.criticalStrengthBonus || 0), l = this.target.earthElementResistPercent, p = this.target.earthElementReduction, y = this.caster.earthDamageBonus;
                break;
            case v.FIRE:
                u = Math.max(0, this.caster.intelligence), a = this.caster.intelligenceBonus + (this.caster.newStatsBonus.intelligenceBonus || 0), s = this.caster.criticalIntelligenceBonus + (this.caster.newStatsBonus.criticalIntelligenceBonus || 0), l = this.target.fireElementResistPercent, p = this.target.fireElementReduction, y = this.caster.fireDamageBonus;
                break;
            case v.WATER:
                u = Math.max(0, this.caster.chance), a = this.caster.chanceBonus + (this.caster.newStatsBonus.chanceBonus || 0), s = this.caster.criticalChanceBonus + (this.caster.newStatsBonus.criticalChanceBonus || 0), l = this.target.waterElementResistPercent, p = this.target.waterElementReduction, y = this.caster.waterDamageBonus;
                break;
            case v.AIR:
                u = Math.max(0, this.caster.agility), a = this.caster.agilityBonus + (this.caster.newStatsBonus.agilityBonus || 0), s = this.caster.criticalAgilityBonus + (this.caster.newStatsBonus.criticalAgilityBonus || 0), l = this.target.airElementResistPercent, p = this.target.airElementReduction, y = this.caster.airDamageBonus
        }
        if (t.ignoreCasterStats && (u = 0, a = 0, s = 0, y = 0, M = 0, h = 0), !t.ignoreCasterStats && e.element !== -1) {
            var W = this.caster.damagesBonusPercent + (this.caster.newStatsBonus.damagesBonusPercent || 0);
            o = u + W + z, o += this.isWeapon || !this.spellId ? this.caster.weaponDamagesBonus : this.caster.spellDamagesBonus
        }
        p += this.getBuffElementReduction(e, this.target.id), l = 100 - l, this.target.type === A.FIGHT_CHARACTER_TYPE && (l = Math.max(A.MAX_RESISTANCE, l)), I = 100 - I;
        var P = t.efficiencyMultiplier || e.efficiencyMultiplier,
            k = (t.extraMultiplier || 1) * P * 100;
        this.isCriticalEffect && (a = s, y += h, p += b);
        var F = new g;
        if (A.EFFECTS_IDS.HP_BASED_DAMAGE[B] || A.EFFECTS_IDS.TARGET_HP_BASED_DAMAGE[B]) switch (B) {
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_MIDLIFE:
                F.normal = c(e.damage.max, E.stats, k);
                break;
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_MISSING_FROM_WATER:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_MISSING_FROM_EARTH:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_MISSING_FROM_AIR:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_MISSING_FROM_FIRE:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_MISSING_FROM_BEST_ELEMENT:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_MISSING:
                F.min = r(e.damage.min, E.stats.maxLifePoints - N, k), F.max = r(e.damage.max, E.stats.maxLifePoints - R, k);
                break;
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_FROM_WATER:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_FROM_EARTH:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_FROM_AIR:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_FROM_FIRE:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE_FROM_BEST_ELEMENT:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_CASTER_LIFE:
                if (!t.isBuffDamage) {
                    F.min = r(e.damage.min, N, k), F.max = r(e.damage.max, R, k);
                    break
                }
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_TARGET_LIFE_FROM_AIR:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_TARGET_LIFE_FROM_WATER:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_TARGET_LIFE_FROM_FIRE:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_TARGET_LIFE_FROM_EARTH:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_TARGET_LIFE_FROM_BEST_ELEMENT:
            case f.ACTION_CHARACTER_LIFE_POINTS_LOST_BASED_ON_TARGET_LIFE:
                F.min = r(e.damage.min, q, k), F.max = r(e.damage.max, x, k)
        } else {
            var H = this.caster.comboBonus;
            F.min = d(e.damage.min, {
                ignoreStats: t.ignoreCasterStats,
                stat: o,
                statBonus: a,
                baseDamageBonus: O,
                damageBonus: y,
                dealtDamageMultiplierBonus: C,
                allDamagesBonus: M,
                efficiencyPercent: k,
                comboBonus: H
            }), F.max = d(e.damage.max, {
                ignoreStats: t.ignoreCasterStats,
                stat: o,
                statBonus: a,
                baseDamageBonus: O,
                damageBonus: y,
                dealtDamageMultiplierBonus: C,
                allDamagesBonus: M,
                efficiencyPercent: k,
                comboBonus: H
            })
        }
        var U = F.clone();
        U.min -= p, U.max -= p, U.applyMultiplier(l / 100), U.applyMultiplier(I / 100), U.unsignedNumber(), A.EFFECTS_IDS.MP_BASED_DAMAGE[B] && U.applyMultiplier(L);
        var G, j = (10 + this.target.erosionPercentBonus) / 100,
            Y = (10 + this.caster.erosionPercentBonus) / 100;
        A.EFFECTS_IDS.TARGET_EROSION_DAMAGE[B] ? (G = this.target.lifeLost.clone(), G.applyMultiplier(j), e.erosionLifePoints = this.target.erosionLifePoints, G.addFrom(e.erosionLifePoints), G.addFromDamage(this.target.spellErosionLifePoints), U = n(G, e.erosionPercent, l, T)) : A.EFFECTS_IDS.CASTER_EROSION_DAMAGE[B] ? (G = this.caster.lifeLost.clone(), G.applyMultiplier(Y), e.erosionLifePoints = this.caster.erosionLifePoints, G.addFrom(e.erosionLifePoints), this.target.id === this.caster.id && G.addFromDamage(this.target.spellErosionLifePoints), U = n(G, e.erosionPercent, l, T)) : (this.target.spellErosionLifePoints.min += U.min * j, this.target.spellErosionLifePoints.max += U.max * j), F.truncate(), U.truncate();
        var X = new _(e.nameId, B, e.element, e.random);
        return X.damage.addFromDamage(U), X.damageWithoutResist.addFromDamage(F), X.erosionPercent = e.erosionPercent.clone(), X.erosionLifePoints = e.erosionLifePoints, X.type = e.type, X.origin = e.origin, X
    }, p.prototype.verifyBuffTrigger = function(e) {
        var t = e.effect.triggers;
        return e.castingSpell && (t = t || A.MISSING_TRIGGERS[e.castingSpell.spell.id]), !!t && !(!this.verifyExternalDamagesTrigger(t) && !this.verifyAllEffectsTrigger(this.effectInstances, t, this.effectMaskOptions))
    }, p.prototype.verifyAllEffectsTrigger = function(e, t, i) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            if (this.verifyEffectTrigger(o, t, i)) return !0
        }
        return !1
    }, p.prototype.verifyExternalDamagesTrigger = function(e, t) {
        t = t || {}, t.isWeapon = t.isWeapon || this.isWeapon;
        var i, n;
        for (i = 0; i < this.damagesInput.length; i++)
            if (n = this.damagesInput[i], this.verifyEffectDamageTrigger(n, e, t)) return !0;
        for (i = 0; i < this.counteredDamagesReceived.length; i++)
            if (n = this.counteredDamagesReceived[i], this.verifyEffectDamageTrigger(n, e, {
                    isWeapon: t.isWeapon,
                    isCountered: !0
                })) return !0;
        for (i = 0; i < this.sharedDamages.length; i++)
            for (var o = this.sharedDamages[i], a = 0; a < o.effectDamages.length; a++)
                if (n = o.effectDamages[a], this.verifyEffectDamageTrigger(n, e, t)) return !0;
        return !1
    }, p.prototype.verifyEffectDamageTrigger = function(e, t, i) {
        if (i = i || {}, t = t || "", !e) return !1;
        var n = this.target;
        i.targetId && (n = new O(i.targetId, {}), n.retrieveStats());
        var o = w.gui.fightManager.getFighter(this.caster.id);
        if (!o) return console.warn("Fighter " + this.caster.id + " does not exist"), !1;
        var a = w.gui.fightManager.getFighter(n.id);
        if (!a) return console.warn("Fighter " + n.id + " does not exist"), !1;
        for (var r, s = o.data, c = a.data, l = c.teamId === s.teamId, d = m.getDistance(this.caster.cellId, n.cellId), u = e.element, p = e.doesDamage(), h = !1, b = t.split("|"), M = 0; M < b.length; M++) {
            var g = b[M];
            switch (g.substr(0, 3)) {
                case "D":
                    h = p;
                    break;
                case "DA":
                    h = p && u === v.AIR;
                    break;
                case "DBA":
                    h = l && p, r = parseInt(g.substr(3, 1), 10), r && (h = h && u === r);
                    break;
                case "DBE":
                    h = !l && p, r = parseInt(g.substr(3, 1), 10), r && (h = h && u === r);
                    break;
                case "DC":
                    h = i.isWeapon && p;
                    break;
                case "DE":
                    h = p && u === v.EARTH;
                    break;
                case "DF":
                    h = p && u === v.FIRE;
                    break;
                case "DG":
                    h = p && e.origin === A.ORIGIN.GLYPH;
                    break;
                case "DI":
                    h = p && s.stats.summoned;
                    break;
                case "DM":
                    h = p && d <= 1;
                    break;
                case "DN":
                    h = p && u === v.NEUTRAL;
                    break;
                case "DP":
                    h = p && e.origin === A.ORIGIN.TRAP;
                    break;
                case "DR":
                    h = p && d > 1;
                    break;
                case "Dr":
                    h = i.isCountered;
                    break;
                case "DS":
                    h = p && !i.isWeapon;
                    break;
                case "DW":
                    h = p && u === v.WATER;
                    break;
                case "DT":
                    h = !0;
                    break;
                case "H":
                    h = e.doesHeal();
                    break;
                case "HA":
                    h = l && e.doesHeal();
                    break;
                case "HE":
                    h = !l && e.doesHeal();
                    break;
                case "MD":
                case "MDM":
                    h = p && (e.effectId === f.ACTION_CHARACTER_PUSH || e.effectId === f.ACTION_CHARACTER_PUSH_FORCE);
                    break;
                case "MDP":
                    h = !p && (e.effectId === f.ACTION_CHARACTER_PUSH || e.effectId === f.ACTION_CHARACTER_PUSH_FORCE || e.effectId === f.ACTION_FIGHT_PUSH_NO_DAMAGE);
                    break;
                case "MP":
                    h = 0 === this.currentDepth && this.isFighterPushed(this.target.id);
                    break;
                case "TP":
                    h = w.gui.damagePreview.damagePreviewManager.isFighterTeleported(n.id)
            }
            if (h) return !0
        }
        return !1
    }, p.prototype.isFighterPushed = function(e) {
        var t = w.gui.fightManager.getFighter(e);
        if (!t) return !1;
        for (var i = 0; i < this.pushedEntities.length; i++) {
            var n = this.pushedEntities[i];
            if (n.id === e && n.newCellId !== t.data.disposition.cellId) return !0
        }
        return !1
    }, p.prototype.verifyEffectTrigger = function(e, t, i) {
        if (i = i || {}, t = t || "", !e) return !1;
        var n = w.gui.fightManager.getFighter(this.caster.id);
        if (!n) return console.warn("Fighter " + this.caster.id + " does not exist"), !1;
        var a = w.gui.fightManager.getFighter(this.target.id);
        if (!a) return console.warn("Fighter " + this.target.id + " does not exist"), !1;
        var r = n.data,
            s = a.data,
            c = s.teamId === r.teamId,
            l = m.getDistance(this.caster.cellId, this.target.cellId),
            d = M.getElementEffect(this.caster, e.effect),
            u = 0 === this.spellId || M.verifySpellEffectMask(e, this.caster.id, this.target.id, i),
            p = M.isInZoneEffect(e, this.target.cellId),
            h = e.isDamageEffect() && p && u,
            b = M.isHealingEffect(e) && p && u,
            g = this.pushedEntities[0],
            _ = 0;
        g && (_ = o(this.caster, this.target, g.force, g.pushedIndexes[0]));
        for (var A, O = !1, y = t.split("|"), z = 0; z < y.length; z++) {
            var T = y[z];
            switch (T.substr(0, 3)) {
                case "I":
                    O = !0;
                    break;
                case "D":
                    O = h;
                    break;
                case "DA":
                    O = h && d === v.AIR;
                    break;
                case "DBA":
                    O = c && h, A = parseInt(T.substr(3, 1), 10), A && (O = O && d === A);
                    break;
                case "DBE":
                    O = !c && h, A = parseInt(T.substr(3, 1), 10), A && (O = O && d === A);
                    break;
                case "DC":
                    O = this.isWeapon && h;
                    break;
                case "DE":
                    O = h && d === v.EARTH;
                    break;
                case "DF":
                    O = h && d === v.FIRE;
                    break;
                case "DG":
                    O = h && this.isGlyph;
                    break;
                case "DI":
                    O = h && r.stats.summoned;
                    break;
                case "DM":
                    O = h && l <= 1;
                    break;
                case "DN":
                    O = h && d === v.NEUTRAL;
                    break;
                case "DP":
                    O = h && this.isTrap;
                    break;
                case "DR":
                    O = h && l > 1;
                    break;
                case "DS":
                    O = h && !this.isWeapon;
                    break;
                case "DW":
                    O = h && d === v.WATER;
                    break;
                case "DT":
                    O = !0;
                    break;
                case "H":
                    O = b;
                    break;
                case "HA":
                    O = c && b;
                    break;
                case "HE":
                    O = !c && b;
                    break;
                case "MD":
                case "MDM":
                    O = _ && (e.effectId === f.ACTION_CHARACTER_PUSH || e.effectId === f.ACTION_CHARACTER_PUSH_FORCE);
                    break;
                case "MDP":
                    O = !_ && (e.effectId === f.ACTION_CHARACTER_PUSH || e.effectId === f.ACTION_CHARACTER_PUSH_FORCE) || e.effectId === f.ACTION_FIGHT_PUSH_NO_DAMAGE;
                    break;
                case "MP":
                    O = 0 === this.currentDepth && this.isFighterPushed(this.target.id);
                    break;
                case "X":
                    O = p && e.effectId === f.ACTION_CHARACTER_KILL;
                    break;
                case "A":
                    O = p && e.effectId === f.ACTION_CHARACTER_ACTION_POINTS_LOST;
                    break;
                case "m":
                    O = p && e.effectId === f.ACTION_CHARACTER_MOVEMENT_POINTS_LOST;
                    break;
                case "TP":
                    O = w.gui.damagePreview.damagePreviewManager.isFighterTeleported(this.target.id)
            }
            if (O) return !0
        }
        return !1
    }
}
