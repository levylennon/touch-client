function(e, t, i) {
    var n = i(903),
        o = i(739),
        a = i(736),
        r = i(476),
        s = i(735),
        c = i(14),
        l = c();
    n.prototype.getTrapSpells = function(e) {
        for (var t = l.gui.damagePreview.damagePreviewManager, i = l.gui.playerData.characters, n = [], a = !1, s = 0; s < this.pushedEntities.length; s++) {
            var c = this.pushedEntities[s],
                d = l.actorManager.getActor(c.id);
            if (d)
                for (var u = 0; u < c.marks.length; u++) {
                    var p = c.marks[u],
                        h = p.sourceId;
                    if (p.type === o.MARK.TRAP) {
                        n[p.spellId] = n[p.spellId] || [];
                        var f = i.mainCharacter.spellData.spells[p.spellId],
                            b = d.getFighter()
                            .spells[p.spellId],
                            m = b ? b.level : 1;
                        f && i.mainCharacterId === h && (m = f.level), n[p.spellId].push({
                            caster: h,
                            target: c.id,
                            casterCellId: p.markCell,
                            targetCellId: p.markCell,
                            level: m
                        }), t.affectedByMark(d.actorId, p), a = !0
                    }
                }
        }
        return a ? void t.createSpells(Object.keys(n), function(i, o) {
            if (i) return e(i);
            var a = [];
            for (var s in o)
                if (o.hasOwnProperty(s)) {
                    var c = o[s].spellLevel.effects[0];
                    if (c && c.effectId === r.ACTION_FIGHT_ADD_TRAP_CASTING_SPELL) {
                        var l = c.diceNum;
                        a[l] = n[s]
                    }
                } t.createSpells(Object.keys(a), function(t, i) {
                if (t) return e(t);
                var n = [];
                for (var o in i)
                    if (i.hasOwnProperty(o))
                        for (var r = 0; r < a[o].length; r++) {
                            var s = a[o][r],
                                c = i[o].clone();
                            c.setLevel(s.level), c.ownerId = s.caster, n.push({
                                spell: c,
                                casterCellId: s.casterCellId,
                                targetCellId: s.targetCellId,
                                target: s.target
                            })
                        }
                return e(null, n)
            })
        }) : e()
    }, n.prototype.getBombSpells = function(e) {
        var t = l.actorManager,
            i = l.gui.fightManager,
            n = l.gui.damagePreview.damagePreviewManager,
            s = l.gui.databases.SpellBombs,
            c = [],
            d = !1;
        if (this.caster.isBomb) return e();
        var u, p, h, f, b, m;
        for (u = 0; u < this.pushedEntities.length; u++) {
            var M = this.pushedEntities[u],
                g = t.getActor(M.id);
            if (g)
                for (p = 0; p < M.marks.length; p++) {
                    var _ = M.marks[p];
                    if (_.type === o.MARK.BOMB) {
                        var A = o.MARK_TO_BOMB[_.spellId],
                            O = a.getBombFromWall(_.sourceId, _.markCell, A),
                            v = i.getFighter(O);
                        if (v && !a.isBombOf(g, A, _.sourceId)) {
                            f = a.getChainReactionBomb(_.sourceId, O), b = a.getComboCoeffBomb(f, A);
                            var y = n.getVirtualCellFromRealCell(g.cellId);
                            c[_.spellId] = c[_.spellId] || [], c[_.spellId].push({
                                caster: v.data.stats.summoner,
                                target: M.id,
                                casterCellId: y,
                                targetCellId: y,
                                level: v.level,
                                comboBonus: b
                            }), n.affectedByMark(g.actorId, _), d = !0
                        }
                    }
                }
        }
        for (u = 0; u < this.effectInstances.length; u++) {
            var z = this.effectInstances[u];
            if (z.isDirectEffect() && this.spellCenterCellId === this.target.cellId && a.isInZoneEffect(z, this.target.cellId) && a.verifySpellEffectMask(z, this.caster.id, this.target.id, this.effectMaskOptions) && (this.verifyAllEffectsTrigger(this.effectInstances, z.triggers, this.effectMaskOptions) || this.verifyExternalDamagesTrigger(z.triggers, {
                    isWeapon: !1
                }))) {
                if (z.effectId === r.ACTION_SUMMON_BOMB) {
                    if (m = z.diceNum, h = s[m], !h) continue;
                    c[h.instantSpellId] = c[h.instantSpellId] || [], c[h.instantSpellId].push({
                        caster: this.caster.id,
                        casterCellId: this.caster.cellId,
                        targetCellId: this.target.cellId,
                        level: this.spellLevel,
                        comboBonus: 0
                    }), d = !0;
                    break
                }
                if (this.target.isBomb && z.effectId === r.ACTION_CHARACTER_ACTIVATE_BOMB) {
                    var w = t.getActor(this.target.id),
                        T = i.getFighter(this.caster.id);
                    if (h = s[w ? w.data.creatureGenericId : 0], !h) continue;
                    var C = T.isSummon() ? T.data.stats.summoner : this.caster.id;
                    for (f = a.getChainReactionBomb(C, this.target.id), b = a.getComboCoeffBomb(f), p = 0; p < f.length; p++) {
                        m = f[p];
                        var I = t.getActor(m);
                        if (I && s[I.data.creatureGenericId]) {
                            var S = s[I.data.creatureGenericId];
                            c[S.explodSpellId] = c[S.explodSpellId] || [], c[S.explodSpellId].push({
                                caster: m,
                                casterCellId: I.cellId,
                                targetCellId: I.cellId,
                                level: I.getFighter()
                                    .level,
                                comboBonus: b
                            })
                        }
                    }
                    d = !0;
                    break
                }
            }
        }
        return d ? void n.createSpells(Object.keys(c), function(t, i) {
            if (t) return e(t);
            var n = [];
            for (var o in i)
                if (i.hasOwnProperty(o))
                    for (u = 0; u < c[o].length; u++) {
                        var a = c[o][u],
                            r = i[o].clone();
                        r.setLevel(a.level), r.ownerId = a.caster, n.push({
                            spell: r,
                            casterCellId: a.casterCellId,
                            targetCellId: a.targetCellId,
                            comboBonus: a.comboBonus,
                            target: a.target
                        })
                    }
            return e(null, n)
        }) : e()
    }, n.prototype.getGlyphSpellsFromMarks = function(e) {
        for (var t = l.gui.damagePreview.damagePreviewManager, i = [], n = !1, s = 0; s < this.effectInstances.length; s++) {
            var c = this.effectInstances[s];
            if (c.effectId === r.ACTION_FORCE_GLYPH_TRIGGER && c.isDirectEffect() && a.verifySpellEffectMask(c, this.caster.id, this.target.id, this.effectMaskOptions) && (this.verifyAllEffectsTrigger(this.effectInstances, c.triggers, this.effectMaskOptions) || this.verifyExternalDamagesTrigger(c.triggers, {
                    isWeapon: !1
                })))
                for (var d = l.background.zones, u = 0; u < d.length; u++) {
                    var p = d[u],
                        h = p.data.sourceId,
                        f = l.gui.fightManager.getFighter(h),
                        b = p.data.spellId,
                        m = p.data.markCell;
                    if (a.isInGlyph(this.caster.id, b, this.caster.cellId) && p.data.type === o.MARK.GLYPH && h === this.caster.id && !i[b]) {
                        var M = f && f.spells[b] ? f.spells[b].level : 1;
                        i[b] = {
                            casterId: h,
                            level: M,
                            targetCellId: m
                        }, n = !0
                    }
                }
        }
        return n ? void t.createSpells(Object.keys(i), function(t, n) {
            if (t) return e(t);
            var o = [];
            for (var a in n)
                if (n.hasOwnProperty(a)) {
                    var r = n[a];
                    r.setLevel(i[a].level), r.ownerId = i[a].casterId, o.push({
                        spell: r,
                        casterId: i[a].casterId,
                        targetCellId: i[a].targetCellId
                    })
                } return e(null, o)
        }) : e()
    }, n.prototype.getTriggeredSpellsByGlyphs = function(e) {
        for (var t = this, i = l.gui.damagePreview.damagePreviewManager, n = [], r = !1, s = 0; s < this.effectInstances.length; s++) {
            var c = this.effectInstances[s],
                d = c.getParams();
            c.isDirectEffect() && o.EFFECTS_IDS.GLYPH_TRIGGERING_SPELLS[c.effectId] && a.isInZoneEffect(c, this.spellCenterCellId) && (n[d[0]] = {
                level: d[1]
            }, r = !0)
        }
        return r ? void i.createSpells(Object.keys(n), function(i, o) {
            if (i) return e(i);
            var a = [];
            for (var r in o)
                if (o.hasOwnProperty(r)) {
                    var s = o[r];
                    s.setLevel(n[r].level), s.ownerId = t.caster.id, a.push({
                        spell: s,
                        casterId: t.caster.id
                    })
                } return e(null, a)
        }) : e()
    }, n.prototype.checkTriggeredSpellGiveState = function(e, t) {
        var i = this,
            n = l.gui.damagePreview.damagePreviewManager;
        if (!e) return t();
        var s = e.spellId;
        n.createSpells([s], function(c, l) {
            if (c) return console.error(c), t();
            var d = l[s];
            if (!d) return t();
            var u, p = e.spellType;
            u = p !== o.TRIGGERING_SPELL_TYPE.SPELL_ON_SYMMETRY && 1 & p ? i.target.id : i.caster.id, d.setLevel(e.level), d.ownerId = u;
            for (var h = i.isCriticalEffect && d.getEffectInstances()
                    .criticalEffects.length > 0 ? d.getEffectInstances()
                    .criticalEffects : d.getEffectInstances()
                    .effects, f = 0; f < h.length; f++) {
                var b = h[f];
                if (b.isDirectEffect() && "C" === b.targetMask) {
                    var m = b.value;
                    b.effectId === r.ACTION_FIGHT_SET_STATE ? (n.triggeredStates[u] = n.triggeredStates[u] || [], n.triggeredStates[u].push(m)) : b.effectId === r.ACTION_BOOST_SPELL_BASE_DMG && a.addBoostSpell(b, u, i.target.id)
                }
            }
            return t()
        })
    }, n.prototype.getTriggeredSpellsByCasterOnTarget = function(e) {
        for (var t = this, i = l.actorManager, n = l.gui.damagePreview.damagePreviewManager, r = {}, c = [], d = i.getActor(this.target.id)
                .cellId, u = !1, p = 0; p < this.effectInstances.length; p++) {
            var h = this.effectInstances[p],
                f = h.getParams(),
                b = o.EFFECTS_IDS.TRIGGERING_SPELL[h.effectId];
            void 0 !== b && h.isDirectEffect() && a.isInZoneEffect(h, d) && a.verifySpellEffectMask(h, this.caster.id, this.target.id, this.effectMaskOptions) && (this.verifyAllEffectsTrigger(this.effectInstances, h.triggers, this.effectMaskOptions) || this.verifyExternalDamagesTrigger(h.triggers, {
                isWeapon: !1
            })) && (c.push(f[0]), r[f[0]] = {
                spellType: b,
                level: f[1]
            }, u = !0)
        }
        return u ? void n.createSpells(c, function(a, l) {
            if (a) return e(a);
            for (var u = [], p = 0; p < c.length; p++) {
                var h = c[p],
                    f = l[h];
                if (f) {
                    var b, m, M, g, _ = r[h].spellType;
                    _ !== o.TRIGGERING_SPELL_TYPE.SPELL_ON_SYMMETRY ? (b = 2 & _ ? t.target.id : t.caster.id, m = 1 & _ ? t.target.id : t.caster.id, g = n.getVirtualCellFromRealCell(i.getActor(b)
                        .cellId), M = n.getVirtualCellFromRealCell(i.getActor(b)
                        .cellId)) : (m = t.caster.id, b = null, g = n.getVirtualCellFromRealCell(i.getActor(m)
                        .cellId), M = s.getCellBySymmetry(g, n.getVirtualCellFromRealCell(d))), f.setLevel(r[h].level), f.ownerId = m, u.push({
                        spell: f,
                        casterId: m,
                        targetId: b,
                        casterCellId: g,
                        targetCellId: M
                    })
                }
            }
            return e(null, u)
        }) : e()
    }, n.prototype.getTargetTriggeredSpellsByBuffs = function(e, t) {
        for (var i = this, n = l.actorManager, a = l.gui.damagePreview.damagePreviewManager, r = [], s = !1, c = 0; c < this.target.buffs.length; c++) {
            var d = this.target.buffs[c],
                u = o.EFFECTS_IDS.TRIGGERING_SPELL[d.effect.effectId];
            if (!e[d.uid] && void 0 !== u && this.verifyBuffTrigger(d)) {
                var p = d.effect.getParams();
                r[p[0]] = {
                    spellType: u,
                    level: p[1]
                }, s = !0, e[d.uid] = !0
            }
        }
        return s ? void a.createSpells(Object.keys(r), function(e, o) {
            if (e) return t(e);
            var s = [];
            for (var c in o) {
                var l = o[c],
                    d = r[c].spellType,
                    u = 2 & d ? i.target.id : i.caster.id,
                    p = 1 & d ? i.target.id : i.caster.id,
                    h = a.getVirtualCellFromRealCell(n.getActor(p)
                        .cellId),
                    f = a.getVirtualCellFromRealCell(n.getActor(u)
                        .cellId);
                l.setLevel(r[c].level), l.ownerId = p, s.push({
                    spell: l,
                    casterId: p,
                    targetId: u,
                    casterCellId: h,
                    targetCellId: f
                })
            }
            return t(null, s)
        }) : t()
    }
}
