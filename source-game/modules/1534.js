function(e, t, i) {
    function n() {
        b = {}, m = null
    }

    function o(e) {
        return b[e] || (b[e] = {
            id: e
        }), b[e]
    }

    function a(e) {
        var t = o(e.targetId);
        return t ? (t.death = !0, void(m && m._deadIds.push(e.targetId))) : console.error("Actor " + e.targetId + " not found.")
    }

    function r(e) {
        var t = o(e.sourceId);
        t.tackled = !0
    }

    function s(e) {
        m && (e._spell = m, m._pointVariationMsgs.push(e))
    }

    function c(e) {
        m && (e._spell = m, m._lifeVariationMsgs.push(e))
    }

    function l(e) {
        var t = window.actorManager.getActor(e.targetId);
        t && t.setOnScreenPosition(e.cellId)
    }

    function d(e) {
        var t = o(e.targetId);
        t.look = e.entityLook
    }

    function u(e) {
        var t = e.summon.contextualId,
            i = o(t),
            n = e.summon.disposition;
        i.position = n.cellId, i.direction = n.direction, i.isSummoned = !0, m && (m.targetId = t)
    }

    function p(e) {
        m = e, m._deadIds = [], m._lifeVariationMsgs = [], m._pointVariationMsgs = []
    }

    function h(e) {
        if (e.cellId !== -1) {
            var t = window.actorManager.getActor(e.sourceId);
            t && 1 === M.getDistance(t.cellId, e.cellId) && (e._messageType = "GameActionFightDropCharacterMessage")
        }
    }

    function f() {
        m = null
    }
    var b, m, M = i(735),
        g = {
            GameActionFightCloseCombatMessage: p,
            GameActionFightSpellCastMessage: p,
            GameMapMovementMessage: null,
            GameActionFightSlideMessage: null,
            GameActionFightPointsVariationMessage: s,
            GameActionFightLifeAndShieldPointsLostMessage: c,
            GameActionFightLifePointsGainMessage: c,
            GameActionFightLifePointsLostMessage: c,
            GameActionFightTeleportOnSameMapMessage: null,
            GameActionFightExchangePositionsMessage: null,
            GameActionFightSummonMessage: u,
            GameActionFightMarkCellsMessage: null,
            GameActionFightUnmarkCellsMessage: null,
            GameActionFightChangeLookMessage: d,
            GameActionFightInvisibilityMessage: null,
            _GameActionFightLeaveMessage: a,
            GameActionFightDeathMessage: a,
            GameActionFightKillMessage: a,
            GameActionFightVanishMessage: null,
            GameActionFightTriggerEffectMessage: null,
            GameActionFightDispellEffectMessage: null,
            GameActionFightDispellSpellMessage: null,
            GameActionFightDispelSpellLevelMessage: null,
            GameActionFightDispellMessage: null,
            GameActionFightDodgePointLossMessage: null,
            GameActionFightSpellCooldownVariationMessage: null,
            GameActionFightSpellImmunityMessage: null,
            GameActionFightInvisibleObstacleMessage: null,
            GameActionFightReduceDamagesMessage: null,
            GameActionFightReflectDamagesMessage: null,
            GameActionFightReflectSpellMessage: null,
            GameActionFightStealKamaMessage: null,
            GameActionFightTackledMessage: r,
            GameActionFightTriggerGlyphTrapMessage: f,
            GameActionFightDispellableEffectMessage: null,
            GameActionFightModifyEffectsDurationMessage: null,
            GameActionFightCarryCharacterMessage: null,
            GameActionFightThrowCharacterMessage: h,
            GameActionFightDropCharacterMessage: null,
            GameActionFightInvisibleDetectedMessage: l,
            GameFightTurnListMessage: null,
            GameRolePlaySpellAnimMessage: null
        };
    e.exports = function(e) {
        n();
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                o = g[i._messageType];
            o && o(i)
        }
        return {
            actors: b
        }
    }
}
