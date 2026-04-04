function(e, t, i) {
    function n() {
        this._alreadyUsedMark = [], this._temporaryUsedMark = [], this._allSpellDamageInfo = [], this._buffsWithSpellsTriggered = [], this._spellCache = {}, this.transposition = {}, this.teleported = {}, this.triggeredStates = {}, this.boostSpell = {}, this._callStacks = [], this.movementPreview = {}, this.tpTriggerEffect = [], this._setupListeners()
    }

    function o(e) {
        var t = m.isoEngine.mapRenderer.map.cells,
            i = t[e] && t[e].l || 0;
        return 1 === (5 & i)
    }

    function a(e, t) {
        if (!e || !t || u.DISABLED_SPELL[e.id]) return !1;
        var i = p.getActorOnCell(t),
            n = e.spellLevel && e.spellLevel.needTakenCell;
        return !n || n && i
    }

    function r(e) {
        return e.type === u.MARK.BOMB ? e.markSize + "-" + e.sourceId + "-" + e.spellId : e.markId
    }
    var s = i(18),
        c = i(476),
        l = i(732),
        d = i(902),
        u = i(739),
        p = i(736),
        h = i(741),
        f = i(14),
        b = i(735),
        m = f(),
        M = 40;
    e.exports = n, n.prototype._setupListeners = function() {
        var e = m.gui,
            t = this;
        e.fightManager.on("fightEnd", function() {
            t._spellCache = {}
        })
    }, n.prototype._resetData = function() {
        this._callStacks = [], this._allSpellDamageInfo = [], this._buffsWithSpellsTriggered = [], this.transposition = {}, this.teleported = {}, this.triggeredStates = {}, this.boostSpell = {}, this.tpTriggerEffect = []
    }, n.prototype.getPreview = function(e, t, i) {
        var n = this,
            o = m.gui.playerData.characters;
        setTimeout(function() {
            n.movementPreview = {};
            var a = o.getControlledCharacter()
                .spellData.spells[e];
            if (!a) return i(new Error("Spell " + e + " not available"));
            var r = o.controlledCharacterId,
                s = m.actorManager.userActor.cellId;
            return a.isInSpellRange(s, t) ? (n._resetData(), void n._computeSpell(a, r, s, t, {
                statsBonus: {},
                currentDepth: 0
            }, function(e) {
                if (e) return a.resetCellZoneEffect(), i(e);
                var o = n._allSpellDamageInfo,
                    c = n._temporaryUsedMark;
                n._temporaryUsedMark = [], n._resetData(), n._computeSpell(a, r, s, t, {
                    isCriticalEffect: !0,
                    statsBonus: {},
                    currentDepth: 0
                }, function(e) {
                    if (a.resetCellZoneEffect(), e) return i(e);
                    var t = n._allSpellDamageInfo;
                    n._temporaryUsedMark = c;
                    var r = p.getDamageData(o, t);
                    return i(null, r)
                })
            })) : i(null, [])
        }, 0)
    }, n.prototype._refreshPositions = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                n = i.newCellId;
            this.changePosition(i.id, n)
        }
    }, n.prototype.changePosition = function(e, t) {
        var i = m.actorManager.getActor(e);
        i && (this.transposition[i.cellId] = t)
    }, n.prototype.isFighterTeleported = function(e) {
        var t = m.actorManager.getActor(e);
        return !!t && Boolean(this.getCellTeleported(t.cellId))
    }, n.prototype.getCellTeleported = function(e) {
        return this.teleported[e]
    }, n.prototype._checkChangeOfPosition = function(e, t, i, n, a) {
        a = a || {}, this.teleported = [];
        var r = this.transposition,
            s = m.actorManager.getActor(t);
        if (!s) return console.warn("DamagePreviewManager._checkChangeOfPosition - The caster actor " + t + " does not exist"), !1;
        for (var l = this.getCell(i), d = i, u = p.getActorOnCell(n), h = u && u.cellId, f = n, M = b.getCellBySymmetry(d, f), g = p.getActorOnCell(M), _ = g && g.cellId, A = !g || p.isTeleportableEntity(g), O = !u || p.isTeleportableEntity(u), v = p.isTeleportableEntity(s), y = b.getCellBySymmetry(f, d), z = p.getActorOnCell(y), w = z && z.cellId, T = !z || p.isTeleportableEntity(z), C = a.isCriticalEffect ? e.getEffectInstances()
                .criticalEffects : e.getEffectInstances()
                .effects, I = m.gui.fightManager.getAvailableFighters(), S = !1, E = null, L = null, N = null, R = !1, q = 0; q < C.length; q++)
            if (!a.forceEffectInstance || a.forceEffectInstance === q) {
                var x = C[q];
                R = R || x.effectId === c.ACTION_SUMMON_CREATURE;
                var B = 0 === x.order,
                    D = a.onlyFirstEffect && !B;
                if (!(!a.onlyFirstEffect && B || !x.isDirectEffect() || "I" !== x.triggers && "DT" !== x.triggers))
                    if (r = D ? this.teleported : this.transposition, "P" === x.rawZone)(x.effectId === c.ACTION_CHARACTER_EXCHANGE_PLACES || x.effectId === c.ACTION_CHARACTER_EXCHANGE_PLACES_FORCE) && v && (u && (O || x.effectId === c.ACTION_CHARACTER_EXCHANGE_PLACES_FORCE) && p.verifySpellEffectMask(x, t, u.actorId, a) || R) ? (r[l] = f, r[h] = d, S = !0) : x.effectId === c.ACTION_CHARACTER_TELEPORT_ON_SAME_MAP && v && !u ? (r[l] = f, S = !0) : (x.effectId === c.ACTION_FIGHT_TELESWAP_MIRROR || x.effectId === c.ACTION_FIGHT_TELESWAP_MIRROR_IMPACT_POINT) && o(M) && A && v ? (r[l] = M, g && (r[_] = d), S = !0) : x.effectId === c.ACTION_FIGHT_TELESWAP && O && v ? (r[l] = f, u && p.verifySpellEffectMask(x, t, u.actorId, a) && (r[h] = d),
                        S = !0) : (x.effectId === c.ACTION_FIGHT_ROLLBACK_PREVIOUS_POSITION || x.effectId === c.ACTION_FIGHT_ROLLBACK_TURN_BEGIN_POSITION) && u && O && p.verifySpellEffectMask(x, t, u.actorId, a) ? (E = u.getFighter(), L = E.getLastCellInHistory(), x.effectId === c.ACTION_FIGHT_ROLLBACK_TURN_BEGIN_POSITION && (L = E.getStartTurnCell()), L !== -1 && (N = p.getActorOnCell(L), N && !p.isTeleportableEntity(N) || (r[h] = L, N && (r[N.cellId] = f), S = !0))) : x.effectId === c.ACTION_CHARACTER_TELEPORT_TO_FIGHT_START_POS && u && O && p.verifySpellEffectMask(x, t, u.actorId, a) ? (E = u.getFighter(), L = E.getFirstCellInHistory(), L !== -1 && (r[h] = L, S = !0)) : x.effectId !== c.ACTION_CHARACTER_ADD_ILLUSION_MIRROR || u ? u && p.verifySpellEffectMask(x, t, u.actorId, a) && x.effectId === c.ACTION_FIGHT_TELESWAP_MIRROR_CASTER && T && o(y) && (r[h] = y, z && (r[w] = f), S = !0) : (r[l] = f, S = !0);
                    else {
                        var W = {};
                        for (var P in I)
                            if (I.hasOwnProperty(P)) {
                                E = I[P];
                                var k = m.actorManager.getActor(E.id),
                                    F = k && k.cellId,
                                    H = k && this.getVirtualCellFromRealCell(k.cellId);
                                if (k && p.isTeleportableEntity(k) && p.isInZoneEffect(x, H) && p.verifySpellEffectMask(x, t, E.id, a)) {
                                    var U = b.getCellBySymmetry(H, f),
                                        G = p.getActorOnCell(U),
                                        j = G && G.cellId,
                                        Y = !G || p.isTeleportableEntity(G),
                                        X = b.getCellBySymmetry(H, d),
                                        V = p.getActorOnCell(X),
                                        Q = V && V.cellId,
                                        K = !V || p.isTeleportableEntity(V);
                                    x.effectId === c.ACTION_FIGHT_ROLLBACK_PREVIOUS_POSITION || x.effectId === c.ACTION_FIGHT_ROLLBACK_TURN_BEGIN_POSITION ? (L = r[F] ? F : E.getLastCellInHistory(), x.effectId === c.ACTION_FIGHT_ROLLBACK_TURN_BEGIN_POSITION && (L = E.getStartTurnCell()), L !== -1 && (N = p.getActorOnCell(L), N && !p.isTeleportableEntity(N) || (r[F] = L, N && (r[N.cellId] = H), S = !0))) : x.effectId === c.ACTION_CHARACTER_TELEPORT_TO_FIGHT_START_POS ? (L = E.getFirstCellInHistory(), L !== -1 && (r[F] = L, S = !0)) : x.effectId !== c.ACTION_FIGHT_TELESWAP_MIRROR && x.effectId !== c.ACTION_FIGHT_TELESWAP_MIRROR_IMPACT_POINT || !o(U) || !Y || W[F + "-" + U] ? t !== k.actorId && x.effectId === c.ACTION_FIGHT_TELESWAP_MIRROR_CASTER && K && o(X) && !W[F + "-" + X] && (r[F] = X, V && (r[Q] = H, W[Q + "-" + H] = !0), S = !0) : (r[F] = U, G && (r[j] = H, W[j + "-" + H] = !0), S = !0)
                                }
                            }
                    }
            } return S
    }, n.prototype.updateMovementPreview = function() {
        var e = this;
        Object.keys(this.transposition)
            .forEach(function(t) {
                e.movementPreview[t] || (e.movementPreview[t] = e.transposition[t])
            })
    }, n.prototype._computeSpell = function(e, t, i, n, o, r) {
        o = o || {};
        var c = this,
            l = m.gui.fightManager,
            u = m.actorManager;
        setTimeout(function() {
            if (!e) return r(new Error("The casting spell does not exist"));
            var p = c._callStacks[e + "-" + t] || 0;
            if (p > M) return r(new Error("The spell " + e.id + " seems to be looped."));
            if (c._callStacks[e + "-" + t] = ++p, !a(e, n)) return r(null, []);
            var h, f = e.getEffectInstances();
            (o.isCriticalEffect || !f.effects.length) && f.criticalEffects.length > 0 ? (o.isCriticalEffect = !0, h = f.criticalEffects) : (o.isCriticalEffect = !1, h = f.effects);
            var b = [];
            e.refreshCellZoneEffect(i, n);
            var m, g, _, A = c._checkChangeOfPosition(e, t, i, n, {
                    isCriticalEffect: o.isCriticalEffect,
                    onlyFirstEffect: !0
                }),
                O = l.getAvailableFighters();
            for (m in O)
                if (O.hasOwnProperty(m)) {
                    m = parseInt(m, 10);
                    var v = u.getActor(m);
                    if (v && !v.isDead && !v.isInvisibleInFight()) {
                        var y = c._getLifeLostFromFighter(t),
                            z = c._getLifeLostFromFighter(m);
                        b[m] = new d(e, h, i, n, t, m, {
                            isCriticalEffect: o.isCriticalEffect,
                            isGlyph: o.isGlyph,
                            isTrap: o.isTrap,
                            comboBonus: o.comboBonus,
                            casterLifeLost: y,
                            targetLifeLost: z,
                            statsBonus: o.statsBonus,
                            specificTarget: o.specificTarget,
                            triggeredBy: o.triggeredBy,
                            currentDepth: o.currentDepth || 0
                        })
                    }
                } s.eachSeries(h, function(e, t) {
                s.eachSeries(Object.keys(b), function(t, i) {
                    b[t].computeBaseDamageForEffect(e, i)
                }, function(e) {
                    return e && console.error(e), t()
                })
            }, function(a) {
                a && console.error(a);
                for (var l in b) b.hasOwnProperty(l) && b[l].lastStepInit();
                A && (i = c.getVirtualCellFromRealCell(i));
                var d = b[t];
                if (!d) return r(new Error("Unable to preview the spell as the caster " + t + " is dead"));
                for (var u = c.getPushedEntities(e, b, t, i, n, o), p = 0; p < u.length; p++) {
                    var h = u[p];
                    g = b[h.id], g && g.pushedEntities.push(h)
                }
                for (l in b) b.hasOwnProperty(l) && b[l].addSplashDamages(c._allSpellDamageInfo[t]);
                var f = [],
                    m = [];
                for (l in b) b.hasOwnProperty(l) && b[l].addSharedDamages(f, m);
                for (l in b) b.hasOwnProperty(l) && b[l].computeSpellDamage();
                for (l in b) b.hasOwnProperty(l) && (_ = b[l], d.addCounteredDamagesReceived(_.counteredDamagesGiven));
                Object.keys(d.counteredDamagesReceived)
                    .length && d.computeSpellDamage();
                var M = [];
                for (l in b)
                    if (b.hasOwnProperty(l)) {
                        _ = b[l], d.addLifeStealingDamagesReceived(_.lifeStealingDamagesGiven);
                        var O = _.damagesOutputTo;
                        0 !== O && (g = b[O], g && (g.addInterceptionDamages(_.damagesOutput), M[O] = !0))
                    } Object.keys(d.lifeStealingDamagesReceived)
                    .length && (M[t] = !0);
                for (l in M) b.hasOwnProperty(l) && b[l].computeSpellDamage();
                for (l in b) b.hasOwnProperty(l) && (c._allSpellDamageInfo[l] = c._allSpellDamageInfo[l] || [], c._allSpellDamageInfo[l].push(b[l]));
                c._checkChangeOfPosition(e, t, i, n, o), s.series([function(e) {
                    c._refreshPositions(u);
                    var t = !o.isCriticalEffect;
                    t && c.updateMovementPreview(), e()
                }, function(e) {
                    s.eachSeries(Object.keys(b), function(e, i) {
                        c._triggeredSpellByBuffs(b[e], t, o, i)
                    }, e)
                }, function(e) {
                    s.eachSeries(Object.keys(b), function(e, i) {
                        c._bombSpells(b[e], t, o, i)
                    }, e)
                }, function(e) {
                    s.eachSeries(Object.keys(b), function(e, i) {
                        c._trapSpells(b[e], t, o, i)
                    }, e)
                }, function(e) {
                    s.eachSeries(Object.keys(b), function(e, i) {
                        c._triggeredSpellsByCaster(b[e], t, o, i)
                    }, e)
                }, function(e) {
                    c._glyphSpellsFromMarks(d, t, i, o, e)
                }, function(e) {
                    return o.fromMark ? c._triggeredSpellsByGlyphs(d, t, i, n, o, e) : e()
                }], function(e) {
                    return r(e)
                })
            })
        }, 0)
    }, n.prototype._triggeredSpellByBuffs = function(e, t, i, n) {
        var o = this;
        e.getTargetTriggeredSpellsByBuffs(this._buffsWithSpellsTriggered, function(e, a) {
            return !e && a ? s.eachSeries(a, function(e, n) {
                var a = e.casterId === t ? i.statsBonus : null;
                o._computeSpell(e.spell, e.casterId, e.casterCellId, e.targetCellId, {
                    triggeredBy: t,
                    isCriticalEffect: i.isCriticalEffect,
                    statsBonus: a,
                    currentDepth: i.currentDepth + 1
                }, n)
            }, n) : n(e)
        })
    }, n.prototype._bombSpells = function(e, t, i, n) {
        var o = this;
        e.getBombSpells(function(e, a) {
            return !e && a ? s.eachSeries(a, function(e, n) {
                var a = e.spell.ownerId === t ? i.statsBonus : null;
                o._computeSpell(e.spell, e.spell.ownerId, e.casterCellId, e.targetCellId, {
                    comboBonus: e.comboBonus,
                    statsBonus: a,
                    specificTarget: e.target,
                    currentDepth: i.currentDepth + 1
                }, n)
            }, n) : n(e)
        })
    }, n.prototype._trapSpells = function(e, t, i, n) {
        var o = this;
        e.getTrapSpells(function(e, a) {
            return !e && a ? s.eachSeries(a, function(e, n) {
                var a = e.spell.ownerId === t ? i.statsBonus : null;
                o._computeSpell(e.spell, e.spell.ownerId, e.casterCellId, e.targetCellId, {
                    specificTarget: e.target,
                    isTrap: !0,
                    statsBonus: a,
                    currentDepth: i.currentDepth + 1
                }, n)
            }, n) : n(e)
        })
    }, n.prototype._triggeredSpellsByCaster = function(e, t, i, n) {
        var o = this;
        e.getTriggeredSpellsByCasterOnTarget(function(e, a) {
            return !e && a ? s.eachSeries(a, function(e, n) {
                var a = e.casterId === t ? i.statsBonus : null;
                o._computeSpell(e.spell, e.casterId, e.casterCellId, e.targetCellId, {
                    isGlyph: i.isGlyph,
                    isCriticalEffect: i.isCriticalEffect,
                    statsBonus: a,
                    currentDepth: i.currentDepth + 1
                }, n)
            }, n) : n(e)
        })
    }, n.prototype._glyphSpellsFromMarks = function(e, t, i, n, o) {
        var a = this;
        e.getGlyphSpellsFromMarks(function(e, r) {
            return !e && r ? s.eachSeries(r, function(e, o) {
                var r = e.casterId === t ? n.statsBonus : null;
                a._computeSpell(e.spell, e.casterId, i, e.targetCellId, {
                    fromMark: !0,
                    statsBonus: r,
                    currentDepth: n.currentDepth + 1
                }, o)
            }, o) : o(e)
        })
    }, n.prototype._triggeredSpellsByGlyphs = function(e, t, i, n, o, a) {
        var r = this;
        e.getTriggeredSpellsByGlyphs(function(e, c) {
            return !e && c ? s.eachSeries(c, function(e, a) {
                r._computeSpell(e.spell, t, i, n, {
                    isGlyph: !0,
                    statsBonus: o.statsBonus,
                    currentDepth: o.currentDepth + 1
                }, a)
            }, a) : a(e)
        })
    }, n.prototype._getLifeLostFromFighter = function(e) {
        var t = new h;
        if (this._allSpellDamageInfo[e])
            for (var i = 0; i < this._allSpellDamageInfo[e].length; i++) {
                var n = this._allSpellDamageInfo[e][i].finalSpellDamage.damage;
                n && (t.min += n.min, t.max += n.max, t.minCritical += n.minCritical, t.maxCritical += n.maxCritical)
            }
        return t
    }, n.prototype.createSpells = function(e, t) {
        var i = this,
            n = {};
        s.each(e, function(e, t) {
            return i._spellCache[e] ? (n[e] = i._spellCache[e].clone(), t()) : void l.createSpells([e], function(o, a) {
                return o ? t(o) : (n[e] = i._spellCache[e] = a[e], t())
            })
        }, function(e) {
            return e ? t(e) : t(null, n)
        })
    }, n.prototype.hasAlreadyBeenAffectedByMark = function(e, t) {
        var i = m.background.zones,
            n = r(e),
            o = this._alreadyUsedMark[n],
            a = this._temporaryUsedMark[n];
        if (!t) return o || a;
        if (o) return o[t];
        if (a) return a[t];
        var s = m.actorManager.getActor(t);
        if (!s) return !1;
        for (var c = 0; c < i.length; c++) {
            var l = i[c],
                d = l.data;
            if (d) {
                var p = r(d);
                if (p === n && d.markCell === s.cellId && d.type === u.MARK.BOMB) return !0
            }
        }
        return !1
    }, n.prototype.confirmAffectedMark = function() {
        for (var e in this._temporaryUsedMark)
            if (this._temporaryUsedMark.hasOwnProperty(e)) {
                this._alreadyUsedMark[e] || (this._alreadyUsedMark[e] = []);
                for (var t in this._temporaryUsedMark[e]) this._temporaryUsedMark[e].hasOwnProperty(t) && (this._alreadyUsedMark[e][t] = !0)
            } this.resetTemporaryMark()
    }, n.prototype.affectedByMark = function(e, t) {
        var i = r(t);
        this._temporaryUsedMark[i] || (this._temporaryUsedMark[i] = []), this._temporaryUsedMark[i][e] = !0
    }, n.prototype.resetTemporaryMark = function() {
        this._temporaryUsedMark = []
    }, n.prototype.resetMark = function() {
        this._alreadyUsedMark = []
    }, n.prototype.getVirtualCellFromRealCell = function(e) {
        return this.transposition[e] || e
    }, n.prototype.getCell = function(e) {
        for (var t in this.transposition)
            if (this.transposition.hasOwnProperty(t) && (t = parseInt(t, 10), this.transposition[t] === e)) return t;
        return this.getVirtualCellFromRealCell(e)
    }
}
