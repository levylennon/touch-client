function(e, t, i) {
    function n() {
        o.call(this), this.current = {}, this.current.ladder = {}, this._reset()
    }
    var o = i(59),
        a = i(56)
        .inherits,
        r = i(130),
        s = i(52),
        c = i(17)
        .getText,
        l = i(13),
        d = i(34),
        u = i(504),
        p = 75,
        h = 100,
        f = 150,
        b = 200,
        m = 300,
        M = [];
    a(n, o), e.exports = n, n.prototype.GENERAL_TAB_NAME = "general", n.prototype.COMPOSITION_TAB_NAME = "composition", n.prototype.LADDER_TAB_NAME = "ladder", n.prototype._reset = function() {
        this.current = {}, this.current.ladder = {}, this._requestedSocialInfoMap = {}, this._awaitedSocialInfoMap = {}
    }, n.prototype.initialize = function(e) {
        this._setupListeners(e), this._setupTheRetryPopup(e)
    }, n.prototype.disconnect = function() {
        this._reset()
    }, n.prototype.isQuestAccomplished = function() {
        return Boolean(window.gui.playerData.quests.finished[l.TOA_QUEST_ID])
    }, n.prototype.canTabBeDisable = function(e) {
        var t = this.current.steps;
        return e !== this.GENERAL_TAB_NAME && e !== this.LADDER_TAB_NAME && (e !== this.COMPOSITION_TAB_NAME || !t)
    }, n.prototype.gatheringCompositionData = function(e, t, i) {
        r.getDataMap("Monsters", e, null, function(e, n) {
            return e ? i(e) : void r.getDataMap("Challenge", t, null, function(e, t) {
                return e ? i(e) : i(null, n, t)
            })
        })
    }, n.prototype.calculateMaxStageScore = function(e, t) {
        var i = p;
        e > 0 && e <= 50 ? i += h : e > 50 && e <= 100 && (i += f), 50 === e ? i += b : 100 === e && (i += m);
        for (var n in t) i += t[n].points;
        return i
    }, n.prototype.getMonsterIds = function(e, t) {
        var i = this.current.steps,
            n = [];
        if (!e || !t) return n;
        for (var o = 0; o < i.length; o++)
            if (i[o].stepNumber === t)
                for (var a = 0; a < i[o].stages.length; a++)
                    if (i[o].stages[a].stageLevel === e) {
                        for (var r = 0; r < i[o].stages[a].monsters.length; r++) n.push(i[o].stages[a].monsters[r].creatureGenericId);
                        return n
                    }
    }, n.prototype.getChallengeIds = function(e, t) {
        if (!e || !t) return [];
        for (var i = this.current.steps, n = 0; n < i.length; n++)
            if (i[n].stepNumber === t)
                for (var o = 0; o < i[n].stages.length; o++)
                    if (i[n].stages[o].stageLevel === e) return i[n].stages[o].challengeId
    }, n.prototype.getSelectedStageScore = function(e) {
        var t = this.current.scoreStageList,
            i = 0;
        if (!e || !t) return i;
        for (var n = 0; n < t.length; n++)
            if (t[n].stageLevel === e && t[n].scorer.length > 0) {
                for (var o = !1, a = 0; a < t[n].scorer.length; a++) o || (i = t[n].scorer[a].score, o = t[n].scorer[a].validated);
                return i
            } return i
    }, n.prototype.getSelectedMalusScore = function(e) {
        var t = this.current.scoreStageList,
            i = 0;
        if (!e || !t) return i;
        for (var n = 0; n < t.length; n++)
            if (t[n].stageLevel === e && t[n].scorer.length > 0) {
                for (var o = !1, a = 0; a < t[n].scorer.length; a++) o || (i = -20 * t[n].scorer[a].nbDeath, o = t[n].scorer[a].validated);
                return i
            } return i
    }, n.prototype.isSelectedStageDone = function(e) {
        var t = this.current.scoreStageList,
            i = !1;
        if (!e || !t) return i;
        for (var n = 0; n < t.length; n++)
            if (t[n].stageLevel === e && t[n].scorer.length > 0) return i = !0;
        return i
    }, n.prototype.getStepsScoreRatio = function() {
        var e = this.current.steps,
            t = [];
        if (!e) return t;
        for (var i = 0; i < e.length; i++) {
            for (var n = 0, o = 0, a = 0; a < e[i].stages.length; a++) {
                n += this.getSelectedStageScore(e[i].stages[a].stageLevel);
                for (var r = {}, s = 0; s < e[i].stages[a]._challengePts.length; s++) {
                    var c = e[i].stages[a].challengeId[s];
                    r[c] = {
                        points: e[i].stages[a]._challengePts[s]
                    }
                }
                o += this.calculateMaxStageScore(e[i].stages[a].stageLevel, r)
            }
            t.push(Math.trunc(n / o * 100))
        }
        return t
    }, n.prototype.getSelectedStageSucceedChallengeIds = function(e) {
        var t = this.current.scoreStageList,
            i = [],
            n = !1;
        if (!e || !t) return i;
        for (var o = 0; o < t.length; o++)
            if (t[o].stageLevel === e && t[o].scorer.length > 0) {
                var a = !1;
                n = !0;
                for (var r = 0; r < t[o].scorer.length; r++) a || (i = t[o].scorer[r].challengeId, a = t[o].scorer[r].validated);
                return i
            } return !!n && i
    }, n.prototype.getMonstersData = function(e, t) {
        var i = this.current.steps,
            n = [];
        if (!e || !t) return n;
        for (var o = 0; o < i.length; o++)
            if (i[o].stepNumber === t)
                for (var a = 0; a < i[o].stages.length; a++)
                    if (i[o].stages[a].stageLevel === e) return n = i[o].stages[a].monsters
    }, n.prototype._setupListeners = function() {
        var e = this,
            t = window.dofus.connectionManager;
        t.on("toaLadderSuccess", function(t) {
            for (var i = {}, n = 0; n < t.ladderResult.length; n += 1) i[n] = {
                rank: t.ladderResult[n].rank,
                name: t.ladderResult[n].character.name,
                breed: window.gui.databases.Breeds[t.ladderResult[n].character.breed].shortNameId,
                level: t.ladderResult[n].character.level,
                server: t.ladderResult[n].character.server,
                score: t.ladderResult[n].score
            };
            e.current.ladder.nbPlayer = t.nbPlayer, e.current.ladder.data = i, e.emit("toaLadderDataSuccess")
        }), t.on("toaLadderError", function() {
            e.emit("toaLadderDataFailure")
        }), t.on("toaLadderRankCountSuccess", function(t) {
            e._setRank(t.rankCountResult, t.lastRankTop100), e._getCurrentPlayersData()
        }), t.on("toaLadderRankCountError", function() {
            e.emit("toaPlayerRankDataFailure")
        }), t.on("ToARewardsGivenMessage", function(t) {
            e._displayToaRewards(t.rankId)
        }), t.on("toaPlayerRankSuccess", function(t) {
            var i = {},
                n = 0;
            t.ladderResult.score && (n = t.ladderResult.score), i[0] = {
                rank: t.ladderResult.rank || 0 === t.ladderResult.rank ? t.ladderResult.rank : -1,
                score: n,
                name: t.ladderResult.character ? t.ladderResult.character.name : "-"
            }, e.current.ladder.player = i, e._setPlayersData()
        }), t.on("TowerOfAscensionCompositionMessage", function(t) {
            e.current.steps = t.steps
        }), t.on("TowerOfAscensionResultsMessage", function(t) {
            e.current.scoreStageList ? t.steps.forEach(function(t) {
                for (var i = !1, n = 0; n < e.current.scoreStageList.length; n++)
                    if (e.current.scoreStageList[n].stageLevel === t.stageLevel) {
                        e.current.scoreStageList[n] = t, i = !0;
                        break
                    } i || e.current.scoreStageList.push(t)
            }) : (e.current.scoreStageList = t.steps, e.current.scoreStageList.sort(function(e, t) {
                return e.stageLevel > t.stageLevel ? 1 : -1
            }));
            var i = 0;
            e.current.scoreStageList.forEach(function(e) {
                e.scorer.forEach(function(e) {
                    i += e.validated ? e.score : 0
                })
            }), e.current.score = i
        })
    }, n.prototype._setPlayersData = function() {
        var e = this.current.ladder.player,
            t = this.current.scoreStageList;
        if ((e[0].rank || 0 === e[0].rank) && 0 !== M.length) {
            var i;
            if (t && t.length > 0)
                for (var n = 0; n < M.length; n++)
                    if (e[0].rank + 1 <= M[n].rank && e[0].score >= this.ranks[M[n].rankId].score) {
                        i = M[n].rankId;
                        break
                    } var o = {};
            o[0] = {
                rank: e[0].rank,
                score: e[0].score,
                name: e[0].name,
                rankId: i
            }, this.current.ladder.player = o, this.emit("toaPlayerRankDataSuccess")
        }
    }, n.prototype.getCurrentStage = function() {
        var e = this,
            t = {
                step: 1,
                stage: 1
            },
            i = e.current.scoreStageList,
            n = e.current.steps;
        if (!i || 0 === i.length) return t;
        for (var o = i.length - 1; o >= 0; o--)
            if (i[o].scorer.length > 0) {
                t.stage = i[o].stageLevel, t.stage = 100 === t.stage ? t.stage : t.stage++;
                break
            } for (var a = 0; a < n.length; a++)
            for (var r = 0; r < n[a].stages.length; r++)
                if (n[a].stages[r].stageLevel === t.stage) return t.step = n[a].stepNumber, t
    }, n.prototype._displayToaRewards = function(e) {
        if (e) {
            this.initRanksData();
            var t = this.ranks[e];
            if (t && t.rewards && 0 !== !t.rewards.length) {
                for (var i, n = t.rewards, o = "", a = 0; a < n.length; a++) i = a + 1 === n.length ? "." : ", ", o = o + n[a].quantity + " x $item" + n[a].itemId + i;
                var r = c("ui.toa.infoRewards", o);
                window.gui.chat.logMsg(r, u.PSEUDO_CHANNEL_INFO)
            }
        }
    }, n.prototype._setupTheRetryPopup = function() {
        var e = this,
            t = window.dofus.connectionManager;
        t.on("ContinueTOAWithCreditErrorMessage", function(e) {
            window.gui.openPopup({
                title: c("ui.common.error"),
                message: c("ui.common.error") + " (reason: CreditError" + e.reason + ")"
            }), console.error("ContinueTOAWithCreditErrorMessage reason", e.reason)
        }), t.on("PlayerCanContinueStageWithCreditNotificationMessage", function(t) {
            e.openTheRetryPopup(t.stepNumber)
        })
    }, n.prototype.openTheRetryPopup = function(e) {
        s.open("toaRetryPopup", {
            stepNumber: e
        })
    }, n.prototype.initRanksData = function() {
        if (!this.hasOwnProperty("ranks")) {
            for (var e = {}, t = [c("ui.toa.rewardsBoardTop1"), c("ui.toa.rewardsBoardTop2"), c("ui.toa.rewardsBoardTop3"), c("ui.toa.rewardsBoardTop15"), c("ui.toa.rewardsBoardTop16"), c("ui.toa.rewardsBoardTop4"), c("ui.toa.rewardsBoardTop5"), c("ui.toa.rewardsBoardTop6"), c("ui.toa.rewardsBoardTop7"), c("ui.toa.rewardsBoardTop8"), c("ui.toa.rewardsBoardTop9"), c("ui.toa.rewardsBoardTop10"), c("ui.toa.rewardsBoardTop11"), c("ui.toa.rewardsBoardTop12"), c("ui.toa.rewardsBoardTop13"), c("ui.toa.rewardsBoardTop14")], i = [80, 79, 79, 78, 77, 76, 75, 75], n = window.gui.databases.ToaRank, o = 0; o < t.length; o += 1) e[n[o + 1].id] = {
                id: n[o + 1].id,
                rankName: n[o + 1].nameId,
                score: n[o + 1].minScore,
                rewards: n[o + 1].rewards,
                goultines: n[o + 1].goultines,
                ornament: i[o] || -1,
                details: t[o]
            };
            this.ranks = e
        }
    }, n.prototype.requestMaxRankLadderData = function() {
        d.send("toaLadderRankCount")
    }, n.prototype.requestLadderData = function(e, t) {
        d.send("toaLadder", {
            page: e,
            server: t,
            order: "desc"
        })
    }, n.prototype._getCurrentPlayersData = function() {
        d.send("toaPlayerRank", {
            name: window.gui.playerData.identification.uniqueNickname.toString()
        })
    }, n.prototype.getRank = function(e) {
        var t = window.gui.databases.ToaRank,
            i = [];
        if (e && !(e <= 0)) {
            for (var n = 0; n < t.length; n++)
                if (e === t[n].id) {
                    i = t[n];
                    break
                } return i
        }
    }, n.prototype._setRank = function(e, t) {
        this.initRanksData();
        var i = [1, 2, 3, 10, 30, 100, .1 * (e - t) + t, .2 * (e - t) + t, .3 * (e - t) + t, .4 * (e - t) + t, .5 * (e - t) + t, .6 * (e - t) + t, .7 * (e - t) + t, .8 * (e - t) + t, .9 * (e - t) + t, e],
            n = [];
        for (var o in this.ranks) this.ranks.hasOwnProperty(o) && n.push(o);
        for (var a = [], r = 0; r < i.length; r++) a.push({
            rank: i[r],
            rankId: n[r]
        });
        M = a
    }, n.prototype.getMonsterLevelScaled = function(e) {
        if (!Number.isInteger(e) || e < 0) return 0;
        var t = Math.floor(l.BASE_MONSTER_LEVEL + e * ((l.MAX_MONSTER_LEVEL - l.BASE_MONSTER_LEVEL) / l.NB_SCALE_LEVEL));
        return t
    }
}
