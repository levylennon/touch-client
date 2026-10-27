function(e, t, i) {
    function n(e) {
        this._fightManager = null;
        var t = this;
        this._monsterMap = {},
        this._isSpectator = !1,
        this._currentFightId = null,
        this._teamHPMap = { 0: {}, 1: {} },
        e.on("GameFightJoinMessage", function(e) {
            return e.isSpectator ? void(t._isSpectator = !0) : (t._monsterMap = {}, t._isSpectator = !1, void(t._currentFightId = null))
        }),
        e.on("GameFightTurnReadyRequestMessage", function() {
            if (!t._isSpectator) {
                var e = t._fightManager.getAvailableFighters();
                for (var i in e) t._updateMonsterLife(e[i])
            }
        }),
        e.on("messageSequence", function() {
            null === t._currentFightId && (t._currentFightId = t._fightManager.fightId)
        }),
        e.on("GameFightShowFighterMessage", function(e) {
            if (!t._isSpectator) {
                var i = e.informations;
                t._addTeamHP(i.teamId, i.contextualId, i.stats.lifePoints), t._addMonster(i)
            }
        }),
        e.on("GameFightRemoveTeamMemberMessage", function(e) {
            t._isSpectator || t._removeTeamHP(e.teamId, e.charId)
        }),
        e.on("GameFightStartMessage", function() {
            t._isSpectator || (t._currentFightId = t._fightManager.fightId, t._sendCharacterReport())
        }),
        e.on("GameFightEndMessage", function(e) {
            t._isSpectator || (
                t._sendAliveMonsterReport(e),
                t._teamHPMap = { 0: {}, 1: {} }, 
                t._monsterMap = {}, 
                t._isSpectator = !1, 
                t._currentFightId = null, 
                t._fightManager.resetTacticInfo())
        })
    }
    var o = i(117),
        a = i(14),
        r = [848, 849, 850, 851, 852];
    e.exports = function(e) {
        return new n(e)
    },
    n.prototype.initFightEvents = function(e) {
        this._fightManager = e
    },
    n.prototype._addMonster = function(e) {
        if (!(e.contextualId >= 0)) {
            var t = {};
            this._monsterMap[e.contextualId] = t,
            t.monster_id = e.creatureGenericId,
            t.monster_level = e.monsterLevel,
            t.monster_grade = e.creatureGrade,
            t.team_id = e.teamId
        }
    },
    n.prototype._updateMonsterLife = function(e) {
        if (!(e.id >= 0)) {
            var t = this._monsterMap[e.id];
            t || (t = this._monsterMap[e.id] = {});
            var i = e.data.stats;
            t.ratio_life_remaining = Math.ceil(100 * i.lifePoints / i.maxLifePoints) / 100, 1 === t.ratio_life_remaining && i.lifePoints !== i.maxLifePoints && (t.ratio_life_remaining = .99)
        }
    },
    n.prototype._sendCharacterReport = function() {
        var e = a(),
            t = this._fightManager.getAvailableFighters(),
            i = t[e.gui.playerData.id],
            n = e.gui.playerData.position.subAreaId;
        !i || r.indexOf(n) < 0 || o.log("Fight_Report.Fight_Character_Description", {
            fight_id: this._currentFightId,
            is_incarnation: e.gui.playerData.isIncarnation(),
            team_id: i.data.teamId
        }, {
            withEquipment: !0
        })
    },
    n.prototype._sendAliveMonsterReport = function(e) {
        for (var t = 0; t < e.results.length; t += 1) {
            var i = e.results[t];
            if (i.alive && !(i.id >= 0)) {
                var n = this._monsterMap[i.id];
                if (!n) return;
                void 0 === n.ratio_life_remaining && (n.ratio_life_remaining = 1), o.log("fight_report.fight_end_alive_monster_description", {
                    fight_id: this._currentFightId,
                    team_id: n.team_id,
                    monster_id: n.monster_id,
                    monster_level: n.monster_level,
                    monster_grade: n.monster_grade,
                    ratio_life_remaining: n.ratio_life_remaining
                }, {
                    noSessionId: !0
                })
            }
        }
    },
    n.prototype._addTeamHP = function(e, t, i) {
        0 !== e && 1 !== e || (this._teamHPMap[e][t] = i)
    },
    n.prototype._removeTeamHP = function(e, t) {
        0 !== e && 1 !== e || (this._teamHPMap[e][t] = 0)
    },
    n.prototype._getWinnerTeamId = function(e) {
        for (var t = null, i = 0, n = e.results.length; i < n; i += 1) {
            var o = e.results[i];
            if (o.alive) {
                t = o.id;
                break
            }
        }
        return this._teamHPMap[0][t] ? 0 : this._teamHPMap[1][t] ? 1 : -1
    }
}
