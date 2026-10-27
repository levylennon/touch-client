function(e, t, i) {
    function n(e, t, i, n) {
        for (var o in t.dbRewards)
            if (t.dbRewards.hasOwnProperty(o)) {
                var a = t.dbRewards[o];
                if (a.stepId === i || i === -1) {
                    var r = a.itemsReward,
                        s = a.levelMax,
                        l = a.levelMin;
                    if (s > -1 && l > -1 && (s < n || l > n)) continue;
                    for (var d in r)
                        if (r.hasOwnProperty(d)) {
                            var u = r[d];
                            e.logMsg(c("ui.common.newItem", u[1], u[0]))
                        }
                }
            }
    }

    function o(e, t, i, n, o) {
        return o |= !1, i ? n.finished[t.questId] ? e.logMsg(c("ui.dailyQuest.DQachievement")) : e.logMsg(c("ui.dailyQuest.dqNew")) : t.questId === _ && n.mainQuest && 1 === n.mainQuest.finishedCount ? e.logMsg(c("ui.dailyQuest.MDQachievement")) : t.questId !== _ && n.finished[t.questId] ? e.logMsg(c("ui.quest.questValidation", t.questId)) : t.questId === _ || o ? t.questId !== _ ? e.logMsg(c("ui.quest.questUpdate", t.questId)) : void 0 : e.logMsg(c("ui.quest.questNew", t.questId))
    }

    function a() {
        s.call(this), this._reset()
    }
    var r = i(18),
        s = i(59)
        .EventEmitter,
        c = i(17)
        .getText,
        l = i(828),
        d = i(56)
        .inherits,
        u = i(16)
        .createFifo(),
        p = i(105),
        h = i(830),
        f = i(649),
        b = i(831)
        .parseMonsterId,
        m = i(125),
        M = i(559),
        g = 4,
        _ = 1744,
        A = 3740,
        O = 4282,
        v = 4604,
        y = 4615,
        z = 4638,
        w = "QuestObjectiveInformationsWithCompletion",
        T = "QuestObjectiveInformations";
    d(a, s), e.exports = a, a.prototype._reset = function() {
        this.finished = {}, this.startable = {}, this.active = {}, this.all = {}, this.dailyQuests = {}, this.dailyQuests.finished = {}, this.dailyQuests.active = {}, this.dailyQuests.all = {}, this.dailyQuests.mainQuest = {}, this.initialized = !1
    }, a.prototype.connect = function(e) {
        return e ? window.connectionManager.once("GameFightStartingMessage", function() {
            window.dofus.sendMessage("QuestListRequestMessage")
        }) : void window.dofus.sendMessage("QuestListRequestMessage")
    }, a.prototype.disconnect = function() {
        this._reset()
    }, a.prototype.rerollDQ = function(e) {
        window.dofus.sendMessage("RerollDailyQuestRequestMessage", {
            questId: e
        }), this._pendingOldDaily = e
    }, a.prototype.getDQClassName = function(e) {
        return h[e] ? h[e].categoryClassName : ""
    }, a.prototype.isRareDQ = function(e) {
        return !!h[e] && h[e].isRare
    }, a.prototype.getQuestIdfromObjectiveId = function(e) {
        function t(t) {
            return t.objectiveId === e
        }
        for (var i = Object.getOwnPropertyNames(this.active), n = 0; n < i.length; n++) {
            var o = this.active[i[n]];
            if (o.objectives.find(t)) return o.questId
        }
        return 0
    }, a.prototype.getDqQuestIdfromObjectiveId = function(e) {
        function t(t) {
            return t.objectiveId === e
        }
        for (var i = Object.getOwnPropertyNames(this.dailyQuests.active), n = 0; n < i.length; n++) {
            var o = this.dailyQuests.active[i[n]];
            if (o.objectives.find(t)) return o.questId
        }
        return 0
    }, a.prototype.hasWantedMonsterQuest = function(e) {
        for (var t in this.active)
            if (this.active.hasOwnProperty(t) && this.active[t])
                for (var i = this.active[t].objectives, n = 0; n < i.length; n++) {
                    if (!i[n]) return;
                    if (b(i[n].text) === e) return !0
                }
        return !1
    }, a.prototype.getCurrentCompletion = function(e, t) {
        if (!this.dailyQuests.active[e] && !this.active[e]) return "";
        for (var i = this.dailyQuests.active[e] ? this.dailyQuests.active[e] : this.active[e], n = 0; n < i.objectives.length; n++)
            if (i.objectives[n].objectiveId === t) return !i.objectives[n].maxCompletion || i.objectives[n].maxCompletion < 2 ? "" : " (" + i.objectives[n].curCompletion + "/" + i.objectives[n].maxCompletion + ")";
        return ""
    }, a.prototype.initialize = function() {
        var e = this;
        p.on("QuestListMessage", function(t) {
            e._reset(), r.parallel([function(i) {
                e.startable = {};
                for (var n in t.startableQuestsIds) t.startableQuestsIds.hasOwnProperty(n) && (e.startable[t.startableQuestsIds[n]] = !0);
                i()
            }, function(i) {
                l.createFinishedQuestsMap(t.finishedQuestsIds, t.finishedQuestsCounts, function(t, n) {
                    if (t) return i(t);
                    for (var o in n) n.hasOwnProperty(o) && (o === _ ? e.dailyQuests.mainQuest = n[o] : n[o].dbQuest.repeatType === g ? (e.dailyQuests.finished[o] = n[o], e.dailyQuests.all[o] = n[o]) : (e.finished[o] = n[o], e.all[o] = n[o]), o === A && M.sendTagFinishedBlackEyesWhiteDragon());
                    i()
                })
            }, function(i) {
                l.initializeActiveQuests(t.activeQuests, function(t, n) {
                    if (t) return i(t);
                    for (var o in n) n.hasOwnProperty(o) && (n[o].questId === _ ? e.dailyQuests.mainQuest = n[o] : n[o].dbQuest && n[o].dbQuest.repeatType === g ? (e.dailyQuests.active[o] = n[o], e.dailyQuests.all[o] = n[o]) : (e.active[o] = n[o], e.all[o] = n[o]), n[o].questId === y && M.sendTagStartFuseAndConquer());
                    i()
                })
            }], function(t) {
                return t ? console.error(t) : (e.initialized = !0, void e.emit("listUpdated"))
            })
        }), p.on("QuestStartedMessage", function(t) {
            delete e.finished[t.questId], delete e.dailyQuests.finished[t.questId], t.questId === z && M.sendTagStartTaleAutumnKnight(), t.questId === y && M.sendTagStartFuseAndConquer(), window.dofus.sendMessage("QuestStepInfoRequestMessage", {
                questId: t.questId
            })
        }), p.on("QuestsUpdatedMessage", function(t) {
            t.quests.forEach(function(t) {
                u.push(function(i) {
                    var n;
                    if (n = t.questId === _ ? e.dailyQuests.mainQuest : e.active[t.questId] || e.dailyQuests.active[t.questId], !n) return i(new Error("QuestsUpdatedMessage: quest gone for " + t.questId));
                    if (t.stepId !== n.stepId) return i(new Error("QuestsUpdatedMessage: not the same stepId " + t.stepId + " on quest " + t.questId));
                    for (var o = !1, a = 0, r = t.objectives.length; a < r; a += 1)
                        for (var s = t.objectives[a], c = 0; c < n.objectives.length; c += 1) {
                            var l = n.objectives[c];
                            l.objectiveId === s.objectiveId && (o = o || l.curCompletion !== s.curCompletion || l.objectiveStatus !== s.objectiveStatus, l.curCompletion = s.curCompletion, l.objectiveStatus = s.objectiveStatus)
                        }
                    o && e.emit("questUpdate", t.questId), i()
                })
            })
        }), p.on("QuestObjectiveValidatedMessage", function(t) {
            u.push(function(i) {
                var n = e.active[t.questId];
                if (!n) return i(new Error("QuestObjectiveValidatedMessage: quest gone for " + t.questId));
                window.dofus.sendMessage("QuestStepInfoRequestMessage", {
                    questId: n.questId
                });
                for (var a = 0, r = n.objectives.length; a < r; a += 1) {
                    var s = n.objectives[a];
                    if (s.objectiveId === t.objectiveId) return s.objectiveStatus = f.FINISHED, e.emit("objectiveValidated", n, t.objectiveId), o(window.gui.chat, n, Boolean(e.dailyQuests.all[n.questId]), e, !0), e.emit("questUpdate", t.questId), i()
                }
                i()
            })
        }), p.on("QuestStepInfoMessage", function(t) {
            u.push(function(i) {
                if (!t.infos.objectives) return i();
                var n = t.infos;
                if (!n) return i();
                var a = n.questId,
                    r = e.active[a] || n;
                r.stepId = n.stepId, r.objectives = n.objectives;
                var s;
                r.dbQuest ? l.updateQuestObjectives(r, function(t) {
                    return t ? i(t) : (e.emit("questUpdate", r.questId), void i())
                }) : l.initializeActiveQuests([r], function(t, n) {
                    return t ? i(t) : (s = n[a].dbQuest.repeatType === g ? e.dailyQuests : e, a === _ ? (e.dailyQuests.mainQuest = n[a], e.emit("mainDQStarted", a)) : n[a].dbQuest.repeatType === g ? (e.dailyQuests.active[a] = e.dailyQuests.all[a] = n[a], e.emit("DQStarted", a), e._pendingDailyQuest === a && (delete e.dailyQuests.all[e._pendingOldDaily], delete e.dailyQuests.active[e._pendingOldDaily], e.emit("rerollDQ", {
                        oldDQId: e._pendingOldDaily,
                        newDQId: a
                    }), e._pendingOldDaily = 0, e._pendingDailyQuest = 0)) : (e.active[a] = e.all[a] = n[a], e.emit("questStarted", a)), o(window.gui.chat, r, Boolean(e.dailyQuests.all[a]), s), void i())
                })
            })
        }), p.on("RerollDailyQuestNotificationMessage", function(t) {
            e._pendingDailyQuest = t.questId
        }), p.on("RerollDailyQuestErrorMessage", function() {
            e._pendingOldDaily = 0, e._pendingDailyQuest = 0, e.emit("rerollDQFailed")
        }), p.on("QuestStepStartedMessage", function(t) {
            u.push(function(i) {
                var n = e.active[t.questId];
                return n ? (n.stepId = t.stepId, o(window.gui.chat, n, Boolean(e.dailyQuests.all[n.questId]), e, !0), window.dofus.sendMessage("QuestStepInfoRequestMessage", {
                    questId: n.questId
                }), i()) : (console.error(new Error("QuestStepStartedMessage: quest gone for " + t.questId)), i())
            })
        }), p.on("QuestStepValidatedMessage", function(t) {
            u.push(function(i) {
                var a = e.active[t.questId];
                if (!a) return console.error(new Error("QuestStepValidatedMessage: quest gone for " + t.questId)), i();
                n(window.gui.chat, a, t.stepId, window.gui.playerData.characterBaseInformations.level), o(window.gui.chat, a, Boolean(e.dailyQuests.all[t.questId]), e, !0);
                var r = a.dbQuest.stepIds,
                    s = r.indexOf(t.stepId);
                return a.stepId = r[s + 1], e.emit("stepValidated", a, t.stepId), window.dofus.sendMessage("QuestStepInfoRequestMessage", {
                    questId: a.questId
                }), i()
            })
        }), p.on("QuestValidatedMessage", function(t) {
            t.questId === O && (m.landedAstrub(), M.sendTagLandedAstrub(), M.sendEventLandedAstrub()), t.questId === y && M.sendEventStartGrobe(), t.questId === v && M.sendTagDiscoveringDestiny(), t.questId === z && M.sendTagTaleAutumnKnight(), t.questId === A && M.sendTagFinishedBlackEyesWhiteDragon(), u.push(function(i) {
                var a, r = window.gui.playerData.characterBaseInformations.level;
                if (t.questId === _) return a = e.dailyQuests, a.mainQuest.finishedCount = 1, e.emit("DQFinished", t.questId), n(window.gui.chat, a.mainQuest, -1, r), o(window.gui.chat, a.mainQuest, Boolean(e.dailyQuests.all[t.questId]), a), i();
                e.dailyQuests.all[t.questId] ? (a = e.dailyQuests, e.emit("DQFinished", t.questId)) : t.questId !== _ && (e.emit("QuestFinished", t.questId), a = e);
                var s = a.active[t.questId];
                return delete a.active[t.questId], s || t.questId === _ ? (a.finished[t.questId] = a.all[t.questId] = s, s.finishedCount = 1, n(window.gui.chat, s, s.stepId, r), o(window.gui.chat, s, Boolean(e.dailyQuests.all[t.questId]), a), e.emit("questFinished", s), void i()) : i(new Error("QuestValidatedMessage: quest gone for " + t.questId))
            })
        })
    }, a.prototype.hasFinished = function(e) {
        return this.finished[e]
    }, a.prototype.getNeededMonstersForQuest = function() {
        function e(e) {
            if (e) {
                var t = /\$monster(\d+)/;
                return e.match(t)
            }
        }

        function t(t) {
            for (var o in t)
                if (t[o]) {
                    var a = t[o].objectives;
                    for (var s in a) {
                        var c = a[s] || {};
                        c._type !== w && c._type !== T || c.objectiveStatus === f.FINISHED || (i = c.hypertext, n = e(i), n && r.push(parseInt(n[1], 10)))
                    }
                }
        }
        var i, n, o = this.active,
            a = this.dailyQuests.active,
            r = [];
        return t(o), t(a), r
    }
}
