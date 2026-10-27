function(e, t, i) {
    function n(e) {
        return e = e || "", e.split(",")[0]
    }

    function o(e) {
        var t = C[e];
        if (t) {
            for (var i = z[e], o = n(i.trigger), a = T[o], r = a.eventsList || [], s = 0; s < r.length; s += 1) {
                var c = r[s];
                c.listener.removeListener(c.eventId, t)
            }
            delete C[e]
        }
    }

    function a() {
        for (var e = Object.keys(C), t = 0; t < e.length; t += 1) {
            var i = e[t];
            o(i)
        }
    }

    function r() {
        a();
        for (var e = 0; e < I.length; e += 1) window.gui.notificationBar.removeNotification(I[e]);
        I = []
    }

    function s(e) {
        var t = I.indexOf(e);
        t >= 0 && I.splice(t, 1)
    }

    function c(e) {
        var t = e.id,
            i = "tip" + t,
            n = window.gui.notificationBar;
        if (!n.isNotificationOpen(i) && !w[t]) {
            var a = {
                type: n.notificationType.TUTORIAL,
                title: e.titleId,
                wuidom: A.process(e.messageId),
                onClose: function() {
                    window.dofus.sendMessage("NotificationUpdateFlagMessage", {
                        index: t
                    }), w[t] = !0, s(i)
                }
            };
            n.newNotification(i, a), I.push(i), o(t)
        }
    }

    function l() {
        for (var e in z) {
            var t = z[e],
                i = n(t.trigger),
                o = T[i];
            if (i && o && !w[e])
                if ("GameStart" !== i)
                    for (var a = o.eventsList || [], r = 0; r < a.length; r += 1) {
                        var s = a[r],
                            l = s.listener,
                            d = s.eventId;
                        if (!C[e]) {
                            var u = o.customFunc || c;
                            C[e] = u.bind(null, t)
                        }
                        var p = C[e];
                        l.on(d, p)
                    } else c(t)
        }
    }

    function d() {
        setTimeout(function() {
            l()
        }, 0)
    }

    function u(e, t) {
        for (var i = t.results || [], n = 0; n < i.length; n += 1) {
            var o = i[n];
            if (o.id === window.gui.playerData.id && o.outcome === g.RESULT_VICTORY) return c(e)
        }
    }

    function p(e, t) {
        for (var i = t.actors || [], n = 0; n < i.length; n += 1)
            if ("GameRolePlayGroupMonsterInformations" === i[n]._type) return c(e)
    }

    function h(e, t) {
        t.actorId === window.gui.playerData.id && c(e)
    }

    function f() {
        var e = window.gui,
            t = e.playerData,
            i = y.getWindow("grimoire");
        T = {
            CharacterLevelUp: {
                eventsList: [{
                    listener: t,
                    eventId: "characterLevelUp"
                }]
            },
            FightResultVictory: {
                customFunc: u,
                eventsList: [{
                    listener: e,
                    eventId: "GameFightEndMessage"
                }]
            },
            FightSpellCast: {
                eventsList: [{
                    listener: e,
                    eventId: "GameActionFightSpellCastMessage"
                }, {
                    listener: e,
                    eventId: "GameActionFightCloseCombatMessage"
                }]
            },
            GameFightStart: {
                eventsList: [{
                    listener: e,
                    eventId: "GameFightStartMessage"
                }]
            },
            GameFightStarting: {
                eventsList: [{
                    listener: e,
                    eventId: "GameFightStartingMessage"
                }]
            },
            GameRolePlayPlayerLifeStatus: {
                eventsList: [{
                    listener: e,
                    eventId: "GameRolePlayPlayerLifeStatusMessage"
                }]
            },
            GameStart: {},
            LifePointsRegenBegin: {
                eventsList: [{
                    listener: e,
                    eventId: "LifePointsRegenBeginMessage"
                }]
            },
            MapWithMonsters: {
                customFunc: p,
                eventsList: [{
                    listener: e,
                    eventId: "mapComplementaryInformationsData"
                }]
            },
            NpcDialogCreation: {
                eventsList: [{
                    listener: e,
                    eventId: "NpcDialogCreationMessage"
                }]
            },
            OpenBook: {
                eventsList: [{
                    listener: i,
                    eventId: "open"
                }]
            },
            OpenGrimoireAlignmentTab: {
                eventsList: [{
                    listener: i.tabs.getTabTarget("alignment"),
                    eventId: "open"
                }]
            },
            OpenGrimoireJobTab: {
                eventsList: [{
                    listener: i.tabs.getTabTarget("jobs"),
                    eventId: "open"
                }]
            },
            OpenGrimoireQuestTab: {
                eventsList: [{
                    listener: i.tabs.getTabTarget("quests"),
                    eventId: "open"
                }]
            },
            OpenGrimoireSpellTab: {
                eventsList: [{
                    listener: i.tabs.getTabTarget("spells"),
                    eventId: "open"
                }]
            },
            OpenInventory: {
                eventsList: [{
                    listener: y.getWindow("equipment"),
                    eventId: "open"
                }]
            },
            OpenStats: {
                eventsList: [{
                    listener: y.getWindow("characteristics"),
                    eventId: "open"
                }]
            },
            PlayerFightMove: {
                customFunc: h,
                eventsList: [{
                    listener: e,
                    eventId: "GameMapMovementMessage"
                }]
            },
            PlayerIsDead: {
                eventsList: [{
                    listener: t,
                    eventId: "playerIsDead"
                }]
            },
            PlayerMove: {
                customFunc: h,
                eventsList: [{
                    listener: window.dofus,
                    eventId: "GameMapMovementMessage"
                }]
            },
            PlayerNewSpell: {
                eventsList: [{
                    listener: t.characters.mainCharacter,
                    eventId: "newSpellLearned"
                }]
            }
        }
    }

    function b(e) {
        O.getAllDataMap("Notifications", function(t, i) {
            return t ? e(t) : (z = i, void e())
        })
    }

    function m(e) {
        b(function(t) {
            return t ? e(t) : (f(), void e())
        })
    }

    function M(e) {
        w = {};
        for (var t = 0; t < e.length; t += 1)
            for (var i = e[t], n = 0; n < 32; n += 1) w[n + 32 * t] = Boolean(1 & i), i >>= 1
    }
    var g = i(927),
        _ = i(55),
        A = i(502),
        O = i(130),
        v = i(60),
        y = i(52),
        z = {},
        w = {},
        T = {},
        C = {},
        I = [],
        S = !0,
        E = !1;
    t.initialize = function(e) {
        e.once("initialized", function() {
            S = v.getValue("option-tutorialTips", !0), _.on("tutorialTips", function(e) {
                t.enableTips(e)
            }), m(function(e) {
                if (e) return console.error(e)
            })
        }), e.on("disconnect", function() {
            r(), E = !1
        }), e.on("NotificationListMessage", function(e) {
            M(e.flags)
        })
    }, t.enableTips = function(e) {
        S = e, E || (S ? d() : r())
    }, t.resetTips = function() {
        window.dofus.sendMessage("NotificationResetMessage"), M([0]), S && !E && (r(), d())
    }
}
