function(e, t, i) {
    function n(e, t) {
        e.apply(null, t)
    }

    function o(e, t, i, n, o, a) {
        var r = window.gui.playerData.characters;
        void 0 === o && (o = !0);
        var s = window.gui.fightManager.getFighter(t);
        if (!s) return console.error("Movement points variation step failed, fighter does not exist");
        if (o && (s.data.stats.movementPoints += i, r.controlledCharacterId === t)) {
            var c = r.getControlledCharacter();
            r.setCharacteristic(c, "movementPointsCurrent", s.data.stats.movementPoints)
        }
        i > 0 ? H.push(W.FIGHTER_MP_GAINED, [t, i], t, -1, e, !1, 2, a) : i < 0 && (n ? H.push(W.FIGHTER_MP_USED, [t, Math.abs(i)], t, -1, e, !1, 2, a) : H.push(W.FIGHTER_MP_LOST, [t, Math.abs(i)], t, -1, e, !1, 2, a))
    }

    function a(e, t, i, n, o, a) {
        var r = window.gui.playerData.characters;
        void 0 === o && (o = !0);
        var s = window.gui.fightManager.getFighter(t);
        if (!s) return console.error("Action points variation step failed, fighter does not exist");
        if (o && (s.data.stats.actionPoints += i, r.controlledCharacterId === t && !n)) {
            var c = r.getControlledCharacter();
            r.setCharacteristic(c, "actionPointsCurrent", c.characteristics.actionPointsCurrent + i)
        }
        i > 0 ? H.push(W.FIGHTER_AP_GAINED, [t, i], t, -1, e, !1, 2, a) : i < 0 && (n ? H.push(W.FIGHTER_AP_USED, [t, Math.abs(i)], t, -1, e, !1, 2, a) : H.push(W.FIGHTER_AP_LOST, [t, Math.abs(i)], t, -1, e, !1, 2, a))
    }

    function r(e, t, i, n) {
        H.push(W.FIGHTER_LEAVING_STATE, [t, i], t, -1, e, !1, 2, n)
    }

    function s(e, t, i, n, o) {
        H.push(W.FIGHTER_ENTERING_STATE, [t, i, n], t, -1, e, !1, 2, o)
    }

    function c(e, t, i, n, o, a) {
        H.push(W.FIGHTER_TEMPORARY_BOOSTED, [t, i, n, o], t, -1, e, !1, 2, a)
    }

    function l(e, t) {
        var i = window.gui.fightManager.getFighter(t.targetId);
        return i ? t.actionId === k.ACTION_CHARACTER_UPDATE_BOOST ? i.updateBuff(t) : (i.addBuff(t), void(t instanceof F.StatBuff && ("movementPoints" === t.statName ? o(e, t.targetId, t.getDelta(), !1, !1, !1) : "actionPoints" === t.statName && a(e, t.targetId, t.getDelta(), !1, !1, !1)))) : console.error("Display buff step failed, fighter does not exist")
    }

    function d(e, t, i) {
        var n = window.gui.fightManager,
            o = i.contextualId,
            a = n.deadTurnsList.indexOf(o);
        a !== -1 && n.deadTurnsList.splice(a, 1);
        var r = window.gui.playerData;
        if (o === r.id) {
            var s = r.characters.mainCharacter;
            n.prepareSpellsWithInitialCooldown(s), r.characters.setCharacteristic(s, "lifePoints", i.stats.lifePoints)
        }
        n.emit(W.FIGHTER_SUMMONED, [t, o], o, e)
    }

    function u(e, t, i, n) {
        var o = window.gui.fightManager,
            a = window.gui.playerData,
            r = o.getFighter(t);
        r && t === a.characters.controlledCharacterId && o.getFighterSpell(i, t, function(e, t) {
            if (e) return console.error(e);
            t.castingData || t.cast(o.turnCount, [], !1);
            var a = r.isTurnPassed() ? n + 1 : n;
            t.forceCooldown(a), window.gui.shortcutBar.updateSpellAvailability(i)
        })
    }

    function p(e, t, i, n, o) {
        var a = window.gui.fightManager;
        a.incrementDuration(i, n, !0, a.INCREMENT_MODE_TARGET), H.push(W.FIGHTER_EFFECTS_MODIFY_DURATION, [i, t, n], i, o, e)
    }

    function h(e, t, i, n, o, a) {
        var r = window.gui.fightManager,
            s = r.getFighter(t),
            c = r.getFighter(n);
        return s && c ? (r.emit(W.FIGHTERS_POSITION_EXCHANGE, [t, n], 0, e), a === U.PREVIOUS_POSITION ? (s.removeLastCellInHistory(), c.addCellInHistory(c.data.disposition.cellId)) : a === U.BEGINNING_POSITION ? (s.resetCellHistory(), c.resetCellHistory()) : (s.addCellInHistory(s.data.disposition.cellId), c.addCellInHistory(c.data.disposition.cellId)), s.data.disposition.cellId = i, void(c.data.disposition.cellId = o)) : console.error("Exchange position step failed, fighters do not exist")
    }

    function f(e, t, i, n) {
        var o = window.gui.fightManager,
            a = o.getFighter(t);
        return a ? (a.addCellInHistory(n), a.data.disposition.cellId = i, void o.emit(W.FIGHTER_SLIDE, [t], t, e)) : console.error("Slide step failed, fighter does not exist")
    }

    function b(e, t, i, n) {
        var o = window.gui.fightManager,
            a = o.getFighter(t);
        return a ? (o.emit(W.FIGHTER_TELEPORTED, [t], 0, e), n === U.PREVIOUS_POSITION ? a.removeLastCellInHistory() : n === U.BEGINNING_POSITION ? a.resetCellHistory() : a.addCellInHistory(a.data.disposition.cellId), void(a.data.disposition.cellId = i)) : console.error("Teleport step failed, fighter does not exist")
    }

    function m(e, t, i, n) {
        var o = window.gui.fightManager.getFighter(t);
        return o ? (o.addKeyMovementsInHistory(n), void(o.data.disposition.cellId = i)) : console.error("Map movement step failed, fighter does not exist")
    }

    function M(e, t, i) {
        var n = window.gui.fightManager,
            o = n.getFighter(i);
        o && (o.data.isCarryied = !0), window.gui.fightManager.emit(W.FIGHTER_CARRY, [t, i], 0, e)
    }

    function g(e, t, i, n) {
        var o = window.gui.fightManager;
        if (n !== -1) {
            var a = o.getFighter(i);
            if (!a) return console.error("Throw character step failed, fighter does not exist");
            a.data.isCarryied = !1, a.addCellInHistory(a.data.disposition.cellId), a.data.disposition.cellId = n
        }
        o.emit(W.FIGHTER_THROW, [t, i, n], 0, e)
    }

    function _(e, t, i, n, o) {
        var a = window.gui.fightManager.getFighter(t);
        return a ? void(i < 0 ? H.push(W.FIGHTER_SHIELD_LOSS, [t, i, n], t, o, e) : i > 0 ? H.push(W.FIGHTER_SHIELD_GAIN, [t, i], t, o, e) : H.push(W.FIGHTER_NO_CHANGE, [t], t, o, e)) : console.error("Fighter " + t + " does not exist.")
    }

    function A(e, t, i, n, o, a, r) {
        var s = window.gui.fightManager,
            c = s.getFighter(t);
        if (!c) return console.error("Fighter " + t + " does not exist.");
        var l = c.data.stats;
        l.maxLifePoints = Math.max(1, l.maxLifePoints + n);
        var d = Math.min(Math.max(0, l.lifePoints + i), l.maxLifePoints);
        c.setHP(d), (!r || r && i) && (i <= 0 ? H.push(W.FIGHTER_LIFE_LOSS, [t, i, o], t, a, e, !1, 2) : i > 0 && H.push(W.FIGHTER_LIFE_GAIN, [t, i, o], t, a, e, !1, 2))
    }

    function O(e, t, i, n) {
        H.push(W.FIGHTER_REDUCED_DAMAGES, [t, i], t, n, e)
    }

    function v(e, t, i, n) {
        H.push(W.FIGHTER_AP_LOSS_DODGED, [t, i], t, n, e)
    }

    function y(e, t, i, n) {
        H.push(W.FIGHTER_MP_LOSS_DODGED, [t, i], t, n, e)
    }

    function z(e, t, i) {
        H.push(W.FIGHTER_SPELL_IMMUNITY, [t], 0, i, e)
    }

    function w(e, t, i) {
        var n = window.gui.fightManager.getFighter(t);
        return n ? void n.dispelUniqueBuff(i, !0, !1, !0) : console.error("Fighter " + t + " does not exist.")
    }

    function T(e, t, i, n) {
        var o = window.gui.fightManager.getFighter(t);
        return o ? (o.dispelSpell(i, !0), void H.push(W.FIGHTER_SPELL_DISPELLED, [t, i], t, n, e)) : console.error("Fighter " + t + " does not exist.")
    }

    function C(e, t, i) {
        var n = window.gui.fightManager.getFighter(t);
        return n ? void n.dispelSpellLevel(i) : console.error("Fighter " + t + " does not exist.")
    }

    function I(e, t, i) {
        var n = window.gui.fightManager.getFighter(t);
        return n ? (n.dispel(), void H.push(W.FIGHTER_GOT_DISPELLED, [t], t, i, e)) : console.error("Fighter " + t + " does not exist.")
    }

    function S(e, t, i) {
        H.push(W.FIGHTER_REFLECTED_SPELL, [t], t, i, e)
    }

    function E(e, t, i) {
        H.push(W.FIGHTER_REFLECTED_DAMAGES, [t], t, i, e)
    }

    function L(e, t) {
        H.push(W.FIGHTER_GOT_TACKLED, [t], 0, -1, e)
    }

    function N(e, t, i) {
        H.push(W.FIGHTER_GOT_KILLED, [i, t], t, -1, e)
    }

    function R(e, t, i, n) {
        var o = window.gui.fightManager.getFighter(t);
        if (!o) return console.error("Fighter " + t + " does not exist.");
        var a, r = o.data.stats.invisibilityState;
        i !== P.VISIBLE && r === P.VISIBLE ? a = P.INVISIBLE : i === P.VISIBLE && r !== P.VISIBLE && (a = P.VISIBLE), a && H.push(W.FIGHTER_VISIBILITY_CHANGED, [t, a], t, n, e), o.data.stats.invisibilityState = i
    }

    function q(e, t, i, n, o) {
        H.push(W.FIGHTER_TRIGGERED_GLYPH, [t, i, n], 0, o, e)
    }

    function x(e, t, i, n, o, a, r) {
        H.push(W.FIGHTER_CLOSE_COMBAT, [t, i, n, o, a, r], t, -1, e)
    }

    function B(e, t, i, n, o, a, r, s) {
        H.push(W.FIGHTER_CASTED_SPELL, [t, i, n, a, r, s], 0, o, e)
    }

    function D(e, t, i) {
        void 0 === i && (i = !0);
        var n = window.gui.fightManager,
            o = n.getFighter(t);
        return o ? (n.deadTurnsList.push(t), o.dispel(!1, !1, !0), n.removeLinkedBuff(t), o.setAlive(!1), void H.push(i ? W.FIGHTER_DEATH : W.FIGHTER_LEAVE, [t], t, -1, e)) : console.error("Fighter " + t + " does not exist.")
    }
    var W = i(596),
        P = i(684),
        k = i(476),
        F = i(675),
        H = i(683),
        U = i(745);
    t.pushStep = n, t.fightMovementPointsVariationStep = o, t.fightActionPointsVariationStep = a, t.fightLeavingStateStep = r, t.fightEnteringStateStep = s, t.fightTemporaryBoostStep = c, t.fightDisplayBuffStep = l, t.fightSummonStep = d, t.fightSpellCooldownVariationStep = u, t.fightModifyEffectsDurationStep = p, t.fightExchangePositionsStep = h, t.fightSlideStep = f, t.fightTeleportOnSameMapStep = b, t.mapMovementStep = m, t.fightCarryCharacterStep = M, t.fightThrowCharacterStep = g, t.fightShieldPointsVariationStep = _, t.fightLifePointsVariationStep = A, t.fightReduceDamages = O, t.fightActionPointsLossDodge = v, t.fightMovementPointsLossDodge = y, t.fightSpellImmunity = z, t.fightDispelEffectStep = w, t.fightDispelSpellStep = T, t.fightDispelSpellLevelStep = C, t.fightDispelStep = I, t.fightReflectSpellStep = S, t.fightReflectDamagesStep = E, t.fightTackledStep = L, t.fightKillStep = N, t.fightInvisibilityStep = R, t.fightTriggerGlyphTrapStep = q, t.fightCloseCombatStep = x, t.fightSpellCastStep = B, t.fightDeathStep = D
}
