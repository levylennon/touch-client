function(e, t, i) {
    function n(e) {
        var t = A.isoEngine.mapRenderer.map.cells;
        return t[e] && !(5 & t[e])
    }

    function o(e, t, i) {
        return e && u.MARK_TO_BOMB[e.spellId] === t && e.sourceId === i
    }

    function a(e, t, i, n, o) {
        return t <= 0 || t >= u.UNLIMITED_ZONE_SIZE || e > t || n <= 0 ? u.DAMAGE_NOT_BOOSTED : 0 !== i ? e <= i ? u.DAMAGE_NOT_BOOSTED : Math.max(0, u.DAMAGE_NOT_BOOSTED - .01 * Math.min(e - i, o) * n) : Math.max(0, u.DAMAGE_NOT_BOOSTED - .01 * Math.min(e, o) * n)
    }
    var r = i(735),
        s = i(737),
        c = i(474),
        l = i(476),
        d = i(738),
        u = i(739),
        p = i(742),
        h = i(730),
        f = i(680),
        b = i(741),
        m = i(14),
        M = i(686),
        g = i(681),
        _ = i(743),
        A = m(),
        O = new RegExp("\\*?[bBeEfFzZKoOPpTWUvV][0-9]*", "g");
    t.isMovableEntity = function(e) {
        var t = e && e.getFighter();
        return !!t && (!!t.canBePushed && (!t.hasState(_.STATE_CHARACTER_ROOTED) && !t.hasState(_.STATE_CANNOT_BE_MOVED) && !t.hasState(_.STATE_CANNOT_BE_PUSHED)))
    }, t.isTeleportableEntity = function(e) {
        var t = e && e.getFighter();
        return !!t && (!!t.canSwitchPos && !(t.hasState(_.STATE_NOTELEPORT) || t.hasState(_.STATE_CHARACTER_ROOTED) || t.hasState(_.STATE_CANNOT_BE_MOVED) || t.hasState(_.STATE_MOMMIFIED)))
    }, t.getActorOnCell = function(e) {
        var t = A.gui.damagePreview.damagePreviewManager,
            i = t.getCell(e),
            n = A.actorManager.getActorsOnCell(i)[0];
        return !n || n.isInvisibleInFight() ? null : n
    }, t.isInGlyph = function(e, t, i) {
        for (var n = A.background.zones, o = 0; o < n.length; o++) {
            var a = n[o];
            if (a.data.type === u.MARK.GLYPH && a.data.sourceId === e && a.data.spellId === t) {
                if (a.data.markSize > 0) return a.data.markSize >= r.getDistance(i, a.data.markCell);
                if (i === a.data.markCell) return !0
            }
        }
        return !1
    }, t.isBombOf = function(e, t, i) {
        if (!e) return null;
        var n = e.getFighter();
        return n && e.data.creatureGenericId === t && n.data.stats.summoner === i
    }, t.getBombFromWall = function(e, i, n) {
        function a(i, o) {
            for (var a = 0; a < u.WALL_MAX_SIZE; a++) {
                if (i = s.getNearestCellInDirection(i, o), !i) return null;
                var r = t.getActorOnCell(i.cellId);
                if (t.isBombOf(r, n, e)) return r.actorId
            }
            return null
        }
        for (var r = s.fromCellId(i), c = A.background.zones, l = [], d = 0; d < c.length; d++) {
            var p = c[d];
            p.data && p.data.markCell && p.data.type === u.MARK.BOMB && (l[p.data.markCell] = p.data)
        }
        if (!o(l[i], n, e)) return null;
        var f = a(r, h.DIRECTION_SOUTH_EAST),
            b = a(r, h.DIRECTION_NORTH_WEST),
            m = a(r, h.DIRECTION_SOUTH_WEST),
            M = a(r, h.DIRECTION_NORTH_EAST);
        return f && b ? f : m && M ? m : null
    }, t.doesBombMarkStillExist = function(e) {
        function i(e, i) {
            for (var a = 0; a < u.WALL_MAX_SIZE; a++) {
                if (e = s.getNearestCellInDirection(e, i), !e) return !1;
                var r = t.getActorOnCell(e.cellId);
                if (t.isBombOf(r, n, o)) return !0
            }
            return !1
        }
        if (e.type !== u.MARK.BOMB) return !0;
        var n = u.MARK_TO_BOMB[e.spellId],
            o = e.sourceId,
            a = s.fromCellId(e.markCell),
            r = i(a, h.DIRECTION_SOUTH_EAST),
            c = i(a, h.DIRECTION_NORTH_WEST);
        if (r && c) return !0;
        var l = i(a, h.DIRECTION_SOUTH_WEST),
            d = i(a, h.DIRECTION_NORTH_EAST);
        return !(!l || !d)
    }, t.getChainReactionBomb = function(e, i) {
        function a(t) {
            for (var i in l.actors)
                if (l.actors.hasOwnProperty(i)) {
                    i = parseInt(i, 10);
                    var n = l.actors[i],
                        o = n.getFighter(),
                        d = r.getDistance(t.cellId, n.cellId);
                    !o.isBomb || d > u.BOMB_ZONE_SIZE || o.data.stats.summoner !== e || p.indexOf(i) !== -1 || (p.push(i), a(n), c(s.fromCellId(n.cellId), -1, n.data.creatureGenericId))
                }
        }

        function c(i, r, l) {
            if (i) {
                var d = b[i.cellId];
                r !== -1 && (o(d, l, e) || n(i.cellId)) && c(s.getNearestCellInDirection(i, r), r, l);
                var u = t.getActorOnCell(i.cellId);
                t.isBombOf(u, l, e) && (p.indexOf(u.actorId) === -1 && (p.push(u.actorId), a(u)), r !== h.DIRECTION_NORTH_WEST && c(s.getNearestCellInDirection(i, h.DIRECTION_SOUTH_EAST), h.DIRECTION_SOUTH_EAST, l), r !== h.DIRECTION_NORTH_EAST && c(s.getNearestCellInDirection(i, h.DIRECTION_SOUTH_WEST), h.DIRECTION_SOUTH_WEST, l), r !== h.DIRECTION_SOUTH_EAST && c(s.getNearestCellInDirection(i, h.DIRECTION_NORTH_WEST), h.DIRECTION_NORTH_WEST, l), r !== h.DIRECTION_SOUTH_WEST && c(s.getNearestCellInDirection(i, h.DIRECTION_NORTH_EAST), h.DIRECTION_NORTH_EAST, l))
            }
        }
        var l = A.actorManager,
            d = A.background.zones,
            p = [],
            f = l.getActor(i);
        if (!f) return p;
        for (var b = [], m = 0; m < d.length; m++) {
            var M = d[m];
            M.data && M.data.markCell && M.data.type === u.MARK.BOMB && (b[M.data.markCell] = M.data)
        }
        return a(f), p
    }, t.getComboCoeffBomb = function(e, t) {
        for (var i = A.actorManager, n = 0, o = 0; o < e.length; o++) {
            var a = i.getActor(e[o]);
            if (a && (!t || a.data.creatureGenericId === t))
                for (var r = a.getFighter(), s = 0; s < r.buffs.length; s++) {
                    var c = r.buffs[s];
                    c instanceof g && c.actionId === l.ACTION_BOMB_COMBO_BONUS && (n += c.effect.diceNum)
                }
        }
        return n
    }, t.getBuffMinMaxDamageFromRawEffect = function(e) {
        return e.diceNum && e.diceNum > 0 ? {
            min: e.value + e.diceNum,
            max: e.value + e.diceSide
        } : e.min && e.max ? {
            min: e.min,
            max: e.max
        } : e.value && e.value > 0 ? {
            min: e.value,
            max: e.value
        } : {
            min: 0,
            max: 0
        }
    }, t.getMinMaxDamageFromRawEffect = function(e) {
        return e.diceNum && e.diceNum > 0 ? {
            min: e.diceNum,
            max: 0 === e.diceSide ? e.diceNum : e.diceSide
        } : e.min && e.max ? {
            min: e.min,
            max: e.max
        } : e.value && e.value > 0 ? {
            min: e.value,
            max: e.value
        } : {
            min: 0,
            max: 0
        }
    }, t.applySpellModificationsOnEffect = function(e, t) {
        var i = A.gui.playerData.characters.controlledCharacterId,
            n = A.gui.playerData.characters.getSpellModifications(i, t, f.BASE_DAMAGE);
        if (n) {
            var o = n.value.getTotalStat();
            e.damage.min += e.damage.min > 0 ? o : 0, e.damage.max += e.damage.max > 0 ? o : 0
        }
    }, t.verifyRawEffectMask = function(e, t, i, n) {
        var o = A.gui.damagePreview.damagePreviewManager,
            a = A.actorManager.getActor(i),
            r = A.actorManager.getActor(n);
        if (!a || !r) return !1;
        var s = a.getFighter(),
            c = r.getFighter();
        if (!s || !c) return !1;
        if (!e || "null" === e) return !0;
        e = e.split("#")
            .join("");
        var l = n === i,
            d = c.data.teamId === s.data.teamId,
            u = c.data.isCarryied,
            p = s.states,
            h = c.states,
            f = n === i || (0 !== c.data.stats.summoner || 0 !== s.data.stats.summoner) && (c.data.stats.summoner === s.data.stats.summoner || c.data.stats.summoner === i || s.data.stats.summoner === n),
            b = "";
        if (l) {
            if (e.indexOf("g") !== -1) return !1;
            b = "caC"
        } else {
            if (u && t.indexOf("A") === -1 && t.indexOf("a") === -1) return !1;
            b = c.isSummon() && 0 === c.data.stats.maxMovementPoints ? d ? "agsj" : "ASJ" : c.isSummon() ? d ? "agij" : "AIJ" : "GameFightCompanionInformations" === c.data._type ? d ? "agdl" : "ADL" : "GameFightMonsterInformations" === c.data._type ? d ? "agm" : "AM" : d ? "gahl" : "AHL"
        }
        var m = e.match(new RegExp("[" + b + "]", "g"));
        if (!m || !m.length) return !1;
        var M = e.match(O);
        if (!M || !M.length) return !0;
        for (var g = !1, _ = [], v = 0; v < M.length; v++) {
            var y = M[v],
                z = !1;
            "*" === y.charAt(0) && (z = !0, y = y.substr(1));
            var w = y.charAt(0),
                T = y.substr(1),
                C = ~~T;
            switch (w) {
                case "e":
                    g = z ? !p || p.indexOf(C) === -1 : !h || h.indexOf(C) === -1;
                    break;
                case "E":
                    g = !0, z ? _.E = _.E || p && p.indexOf(C) !== -1 : _.E = _.E || h && h.indexOf(C) !== -1;
                    break;
                case "f":
                    g = !r.data.creatureGenericId || r.data.creatureGenericId !== ~~T;
                    break;
                case "F":
                    g = !0, _.F = _.F || r.data.creatureGenericId === ~~T;
                    break;
                case "p":
                    g = !f;
                    break;
                case "P":
                    g = f;
                    break;
                case "v":
                    g = c.data.stats.lifePoints / c.data.stats.maxLifePoints * 100 > ~~T;
                    break;
                case "V":
                    g = c.data.stats.lifePoints / c.data.stats.maxLifePoints * 100 <= ~~T;
                    break;
                case "T":
                    g = o.isFighterTeleported(n)
            }
            if (!g) return !1
        }
        for (var I in _)
            if (!_.hasOwnProperty(I) || !_[I]) return !1;
        return !0
    }, t.verifySpellEffectMask = function(e, t, i, n) {
        n = n || {};
        var o = A.gui,
            a = o.damagePreview.damagePreviewManager,
            r = A.actorManager.getActor(t),
            s = A.actorManager.getActor(i);
        if (!r || !s) return !1;
        var c = r.getFighter(),
            d = s.getFighter();
        if (!c || !d) return !1;
        var u = i === t,
            p = d.data.teamId === c.data.teamId,
            h = d.data.isCarryied,
            f = c.states.concat(a.triggeredStates[t]),
            b = d.states.concat(a.triggeredStates[i]),
            m = i === t || (0 !== d.data.stats.summoner || 0 !== c.data.stats.summoner) && (d.data.stats.summoner === c.data.stats.summoner || d.data.stats.summoner === t || c.data.stats.summoner === i);
        if (!e.targetMask || t === i && 0 === e.effect.category && "C" === e.targetMask) return !0;
        var M = e.targetMask;
        M = M.split("#")
            .join("");
        var g = "";
        if (u) {
            if (e.effectId === l.ACTION_CHARACTER_DISPATCH_LIFE_POINTS_PERCENT) return !0;
            if (M.indexOf("g") !== -1) return !1;
            g = "caC"
        } else {
            if (h && e.rawZone.indexOf("A") === -1 && e.rawZone.indexOf("a") === -1) return !1;
            g = d.isSummon() && 0 === d.data.stats.maxMovementPoints ? p ? "agsj" : "ASJ" : d.isSummon() ? p ? "agij" : "AIJ" : "GameFightCompanionInformations" === d.data._type ? p ? "agdl" : "ADL" : "GameFightMonsterInformations" === d.data._type ? p ? "agm" : "AM" : p ? "gahl" : "AHL"
        }
        var _ = M.match(new RegExp("[" + g + "]", "g"));
        if (!_ || !_.length) return !1;
        var v = M.match(O);
        if (!v || !v.length) return !0;
        for (var y = !1, z = [], w = 0; w < v.length; w++) {
            var T = v[w],
                C = !1;
            "*" === T.charAt(0) && (C = !0, T = T.substr(1));
            var I = T.charAt(0),
                S = T.substr(1),
                E = ~~S;
            switch (I) {
                case "e":
                    y = C ? !f || f.indexOf(E) === -1 : !b || b.indexOf(E) === -1;
                    break;
                case "E":
                    y = !0, C ? z.E = z.E || f && f.indexOf(E) !== -1 : z.E = z.E || b && b.indexOf(E) !== -1;
                    break;
                case "f":
                    y = !s.data.creatureGenericId || s.data.creatureGenericId !== ~~S;
                    break;
                case "F":
                    y = !0, z.F = z.F || s.data.creatureGenericId === ~~S;
                    break;
                case "o":
                case "O":
                    y = n.triggeredBy === i;
                    break;
                case "p":
                    y = !m;
                    break;
                case "P":
                    y = m;
                    break;
                case "v":
                    y = d.data.stats.lifePoints / d.data.stats.maxLifePoints * 100 > ~~S;
                    break;
                case "V":
                    y = d.data.stats.lifePoints / d.data.stats.maxLifePoints * 100 <= ~~S;
                    break;
                case "T":
                    y = a.isFighterTeleported(i)
            }
            if (!y) return !1
        }
        for (var L in z)
            if (!z.hasOwnProperty(L) || !z[L]) return !1;
        return !0
    }, t.isHealingEffect = function(e) {
        return e && u.EFFECTS_IDS.HEALING[e.effectId]
    }, t.isLifeStealingEffect = function(e) {
        return e && u.EFFECTS_IDS.STEALING[e.effectId]
    }, t.getShapeEfficiency = function(e, t, i) {
        if (!e) return 0;
        var n = c.parseZone(e),
            o = e.charAt(0),
            s = n.zoneSize,
            l = n.zoneMinSize,
            d = n.zoneEfficiencyPercent,
            h = n.zoneMaxEfficiency,
            f = 0;
        switch (o) {
            case p.A:
            case p.a:
            case p.Z:
            case p.I:
            case p.O:
            case p.semicolon:
            case p.empty:
            case p.P:
            case p.Q:
                return u.DAMAGE_NOT_BOOSTED;
            case p.B:
            case p.V:
            case p.G:
            case p.W:
                f = r.getSquareDistance(t, i);
                break;
            case p.minus:
            case p.plus:
            case p.U:
                f = r.getDistance(t, i) / 2;
                break;
            default:
                f = r.getDistance(t, i)
        }
        return a(f, s, l, d, h)
    }, t.isInZoneEffect = function(e, i) {
        var n = A.gui.damagePreview.damagePreviewManager;
        if (!e) return !1;
        var o = "a" === e.rawZone || "A" === e.rawZone,
            a = e.targetMask && (e.targetMask.indexOf("O") !== -1 || e.targetMask.indexOf("C") !== -1),
            r = n.getCellTeleported(i),
            s = e.targetMask && e.targetMask.indexOf("T") !== -1 && r && Boolean(t.getActorOnCell(r));
        return o || a || e.isInZoneEffect(i) || s
    }, t.getElementEffect = function(e, t) {
        var i = A.gui.databases.TypeActions;
        if (!t || !e) return -1;
        var n = [];
        n[M.EARTH] = e.strength + e.strengthBonus, n[M.FIRE] = e.intelligence + e.intelligenceBonus, n[M.WATER] = e.chance + e.chanceBonus, n[M.AIR] = e.agility + e.agilityBonus;
        var o = [];
        o[M.EARTH] = e.earthDamageBonus, o[M.FIRE] = e.fireDamageBonus, o[M.WATER] = e.waterDamageBonus, o[M.AIR] = e.airDamageBonus;
        for (var a = M.EARTH, r = 2; r < 5; r++) n[a] === n[r] && o[a] < o[r] ? a = r : n[a] < n[r] && (a = r);
        if (u.EFFECTS_IDS.BEST_ELEMENT[t.id]) return a;
        var s = i[t.id];
        return s ? s.elementId : -1
    }, t.addBoostSpell = function(e, t, i) {
        var n = A.gui.damagePreview.damagePreviewManager,
            o = t + "-" + i,
            a = e.diceNum,
            r = e.value;
        n.boostSpell[a] = n.boostSpell[a] || {}, n.boostSpell[a][o] || (n.boostSpell[a][o] = r)
    }, t.getTotalBoostSpell = function(e) {
        var t = A.gui.damagePreview.damagePreviewManager,
            i = t.boostSpell[e];
        if (!i) return 0;
        var n = 0;
        return Object.keys(i)
            .forEach(function(e) {
                n += i[e]
            }), n
    }, t.getDamageData = function(e, t) {
        function i(e, i) {
            for (var n in e)
                if (t.hasOwnProperty(n)) {
                    var a = o[n] || new d;
                    o[n] = a;
                    for (var r = 0; r < e[n].length; r++) {
                        var s = e[n][r];
                        a.isAccurate = a.isAccurate && (!s.finalSpellDamage.doesDamageOrHeal() || s.isAccurate), a.invulnerableState = a.invulnerableState || s.target.isInvulnerable, a.unhealableState = a.unhealableState || s.target.isUnhealable;
                        for (var c = 0; c < s.finalSpellDamage.effectDamages.length; c++) {
                            var l = s.finalSpellDamage.effectDamages[c];
                            i.critical ? (l.damage.convertToCritical(), l.lifePointsAdded.convertToCritical()) : (l.damage.resetCritical(), l.lifePointsAdded.resetCritical());
                            var u = l.element + "," + l.random,
                                p = a.getEffectDamageByNameId(u);
                            p ? (p.damage.addFromDamage(l.damage), p.lifePointsAdded.addFromDamage(l.lifePointsAdded)) : (l.nameId = u, a.addEffectDamage(l))
                        }
                    }
                }
        }
        var n = A.gui.fightManager,
            o = [];
        i(e, {
            critical: !1
        }), i(t, {
            critical: !0
        });
        var a = [];
        for (var r in o)
            if (o.hasOwnProperty(r)) {
                r = parseInt(r, 10);
                var s = o[r];
                s.updateDamage();
                var c = n.getFighter(r)
                    .data.stats,
                    l = c.maxLifePoints - c.lifePoints,
                    u = new b(l + s.damage.min, l + s.damage.max, l + s.damage.minCritical, l + s.damage.maxCritical);
                a[r] = s.toData(u, c.lifePoints)
            } return a
    }
}
