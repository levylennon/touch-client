function(e, t, i) {
    function n(e) {
        function t() {
            var t = {
                title: a.title,
                message: a.message,
                cb: function() {
                    s && s()
                }
            };
            p.getWindow("cancel")
                .update(t, {
                    keepDialog: e
                }), p.openDialog(["cancel"])
        }

        function i() {
            var t = {
                title: o.title,
                message: o.message,
                cb: function(e) {
                    e === n.NO ? r.refuse && r.refuse() : e === n.IGNORE ? r.ignore && r.ignore() : r.confirm && r.confirm()
                }
            };
            p.getWindow("confirm")
                .update(t, {
                    ignoreEnable: !0,
                    keepDialog: e
                }), p.openDialog(["confirm"])
        }
        var n = p.getWindow("confirm")
            .actionsEnum;
        u ? t() : i()
    }
    var o, a, r, s, c, l, d, u, p = i(52);
    t.askingExchangePopup = function() {
        r = {
            confirm: function() {
                window.dofus.sendMessage("ExchangeAcceptMessage")
            },
            refuse: void 0,
            ignore: function() {
                window.dofus.sendMessage("IgnoredAddRequestMessage", {
                    name: c,
                    session: !0
                })
            }
        }, s = void 0, n(!0)
    }, t.askingChallengePopup = function(e) {
        function t() {
            window.dofus.sendMessage("GameRolePlayPlayerFightFriendlyAnswerMessage", {
                fightId: e,
                accept: !0
            })
        }

        function i() {
            window.dofus.sendMessage("GameRolePlayPlayerFightFriendlyAnswerMessage", {
                fightId: e,
                accept: !1
            })
        }

        function o() {
            i(), window.dofus.sendMessage("IgnoredAddRequestMessage", {
                name: c,
                session: !0
            })
        }
        r = {
            confirm: t,
            refuse: i,
            ignore: o
        }, s = i, n(!1)
    }, t.closingChallengePopup = function(e) {
        var t = e ? "cancel" : "confirm",
            i = p.getWindow(t);
        p.close(i.id)
    }, t.setupCancelPopupTexts = function(e) {
        a = e
    }, t.setupConfirmPopupTexts = function(e) {
        o = e
    }, t.setupNames = function(e, t) {
        var i = window.gui.playerData;
        l = i.id, d = i.characterBaseInformations.name, u = t === l;
        var n = u ? e : t,
            o = window.actorManager.getActor(n);
        if (!o) return console.error(new Error("mutualPopup#setupNames cannot find the other actor: " + n)), null;
        var a = o.data.name;
        c = u ? d : a;
        var r = u ? a : d;
        return {
            sourceName: c,
            targetName: r
        }
    }
}
