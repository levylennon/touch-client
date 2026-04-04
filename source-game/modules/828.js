function(e, t, i) {
    function n(e, t, i, n, o) {
        e[n.id] || (e[n.id] = [], o[n.id] = n.type), e[n.id].push(t[i])
    }

    function o(e, t, i, n, o, a) {
        var r = t[o];
        a.hyperlink && i.push([o, a.hyperlink + r]);
        var s = n[a.id] || {},
            c = s[r];
        c || (u.error(new Error("ptop " + e + ": missing db for param " + r + " on id " + a.id)), c = {}), t[o] = c.nameId || ""
    }

    function a(e, t, i) {
        e[i] = t.GetText[e[i]]
    }

    function r(e, t) {
        for (var i = window.gui.databases.QuestObjectiveTypes, r = {}, l = {}, d = 0, u = e.length; d < u; d += 1) {
            var f = e[d],
                b = f.objectives;
            if (f.dbObjectives)
                for (var m = 0, M = b.length; m < M; m += 1)
                    for (var g = b[m].objectiveId, _ = f.dbObjectives[g], A = p[_._type] || [], O = 0, v = A.length; O < v; O += 1) {
                        var y = A[O];
                        n(r, _.parameters, O, y, l)
                    } else console.warn("Missing objectives Data on quest " + f.questId)
        }
        s.each(Object.keys(r), function(e, t) {
            if (!r[e].length) return t();
            var i = h[l[e]];
            return i ? i(r, e, t) : t()
        }, function(n) {
            if (n) return t(n);
            for (var s = 0, l = e.length; s < l; s += 1) {
                var d = e[s],
                    u = d.objectives;
                if (d.dbObjectives)
                    for (var h = 0, f = u.length; h < f; h += 1) {
                        for (var b = u[h], m = b.objectiveId, M = d.dbObjectives[m], g = M.parameters.slice(0), _ = [], A = p[M._type] || [], O = 0, v = A.length; O < v; O += 1) {
                            var y = A[O];
                            "getText" === y.type ? a(g, r, O) : "table" === y.type && o(m, g, _, r, O, y)
                        }
                        var z = i[M.typeId].nameId;
                        if (g.unshift(z), b.text = c.apply(null, g), _.length) {
                            for (var w = g.concat(), T = 0; T < _.length; T++) w[_[T][0] + 1] = _[T][1];
                            b.hypertext = c.apply(null, w)
                        }
                    }
            }
            t()
        })
    }
    var s = i(18),
        c = i(17)
        .processText,
        l = i(130),
        d = i(829),
        u = i(34)
        .logger,
        p = {
            QuestObjectiveBringItemToNpc: [{
                type: "table",
                id: "Npcs"
            }, {
                type: "table",
                id: "Items",
                hyperlink: "$item"
            }],
            QuestObjectiveBringSoulToNpc: [{
                type: "table",
                id: "Npcs"
            }, {
                type: "table",
                id: "Monsters",
                hyperlink: "$monster"
            }],
            QuestObjectiveDiscoverSubArea: [{
                type: "table",
                id: "SubAreas"
            }],
            QuestObjectiveFightMonster: [{
                type: "table",
                id: "Monsters",
                hyperlink: "$monster"
            }],
            QuestObjectiveFightMonstersOnMap: [{
                type: "table",
                id: "Monsters"
            }],
            QuestObjectiveGoToNpc: [{
                type: "table",
                id: "Npcs"
            }],
            QuestObjectiveMultiFightMonster: [{
                type: "table",
                id: "Monsters",
                hyperlink: "$monster"
            }],
            QuestObjectiveCraftXItem: [{
                type: "table",
                id: "Items",
                hyperlink: "$item"
            }],
            QuestObjectiveWinPvpAgainstBreed: [{
                type: "table",
                id: "Breeds",
                hyperlink: "$breed"
            }],
            QuestObjectiveValidChallenge: [{
                type: "table",
                id: "Monsters",
                hyperlink: "$monster"
            }],
            QuestObjectiveWinMonsterInDungeonValidChallenge: [{
                type: "table",
                id: "Monsters",
                hyperlink: "$monster"
            }, {
                type: "table",
                id: "Challenge",
                hyperlink: "$challenge"
            }],
            QuestObjectiveWinMonsterInDungeon: [{
                type: "table",
                id: "Monsters",
                hyperlink: "$monster"
            }],
            QuestObjectiveWinMonsterInDungeonXTimes: [{
                type: "table",
                id: "Monsters",
                hyperlink: "$monster"
            }],
            QuestObjectiveDiscoverMap: [{
                type: "getText",
                id: "GetText"
            }],
            QuestObjectiveDuelSpecificPlayer: [{
                type: "getText",
                id: "GetText"
            }],
            QuestObjectiveFreeForm: [{
                type: "getText",
                id: "GetText"
            }],
            QuestObjective: [{
                type: "getText",
                id: "GetText"
            }]
        },
        h = {
            table: function(e, t, i) {
                l.getDataMap(t, e[t], null, function(n, o) {
                    e[t] = o, i(n)
                })
            },
            getText: function(e, t, i) {
                l.getText(e[t], function(n, o) {
                    e[t] = o, i(n)
                })
            }
        };
    e.exports.updateQuestObjectives = function(e, t) {
        r([e], t)
    }, e.exports.createFinishedQuestsMap = function(e, t, i) {
        var n = {};
        l.getDataMap("Quests", e, null, function(o, a) {
            if (o) return i(o);
            for (var r = 0, s = e.length; r < s; r += 1) {
                var c = e[r];
                n[c] = {
                    questId: c,
                    dbQuest: a[c],
                    finishedCount: t[r]
                }
            }
            i(null, n)
        })
    }, e.exports.initializeActiveQuests = function(e, t) {
        for (var i = [], n = {}, o = 0, a = e.length; o < a; o += 1) {
            var c = e[o];
            n[c.questId] = c, i.push(c.questId)
        }
        l.getDataMap("Quests", i, null, function(i, o) {
            if (i) return t(i);
            var a = [];
            for (var c in o)
                if (o.hasOwnProperty(c)) {
                    var u = o[c];
                    n[c].dbQuest = u, a = a.concat(u.stepIds)
                } l.getDataMap("QuestSteps", a, null, function(i, a) {
                if (i) return t(i);
                var c = [],
                    u = [];
                for (var p in o)
                    if (o.hasOwnProperty(p)) {
                        var h = n[p],
                            f = h.dbQuest.stepIds;
                        h.dbSteps = {};
                        var b, m;
                        for (b = 0, m = f.length; b < m; b += 1) {
                            var M = f[b],
                                g = a[M];
                            h.dbSteps[M] = g, c = c.concat(g.rewardsIds), u = u.concat(g.objectiveIds)
                        }
                    } var _ = [{
                    ids: u,
                    table: "QuestObjectives"
                }, {
                    ids: c,
                    table: "QuestStepRewards"
                }];
                s.each(_, function(e, t) {
                    l.getDataMap(e.table, e.ids, null, function(i, n) {
                        e.data = n, t(i)
                    })
                }, function(i) {
                    if (i) return t(i);
                    for (var a in o)
                        if (o.hasOwnProperty(a)) {
                            var s = n[a];
                            s.dbObjectives = {}, s.dbRewards = {};
                            for (var c in s.dbSteps)
                                if (s.dbSteps.hasOwnProperty(c)) {
                                    var l, u, p, h = s.dbSteps[c];
                                    for (l = 0, u = h.objectiveIds.length; l < u; l += 1) p = h.objectiveIds[l], s.dbObjectives[p] = _[0].data[p], 0 === s.dbObjectives[p].mapId && (s.dbObjectives[p].mapId = d[p] || 0);
                                    for (l = 0, u = h.rewardsIds.length; l < u; l += 1) p = h.rewardsIds[l], s.dbRewards[p] = _[1].data[p]
                                }
                        } r(e, function(e) {
                        t(e, n)
                    })
                })
            })
        })
    }
}
