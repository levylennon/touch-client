function(e, t, i) {
    function n() {
        l.call(this, "div", {
            className: ["panel", "fightsTab"],
            name: "fights"
        });
        var e = this;
        this._pending = !1;
        var t = c.get3v3Data(),
            i = c.get1v1Data(),
            n = this.createChild("div", {
                className: "wrapper",
                name: "status"
            });
        this._wrapper1v1 = n.createChild("div", {
            className: "wrapper1v1"
        }), this._wrapper1v1.createChild("div", {
            className: "corner"
        }), this._wrapper1v1.createChild("div", {
            className: "corner"
        }), this._wrapper1v1.createChild("div", {
            className: "corner"
        }), this._wrapper1v1.createChild("div", {
            className: "corner"
        }), this._wrapper1v1._tag = this._wrapper1v1.createChild("div", {
            className: "tagArea1v1"
        }), this._wrapper1v1._tag.hide(), a(this._wrapper1v1, {
            doubletapTimeout: 1
        }), this._wrapper1v1.createChild("div", {
            className: "title",
            text: s("ui.matchmaking.feature2.name")
        }), this._icon1v1 = this._wrapper1v1.createChild("div", {
            className: "icon1v1"
        }), this._bonus1v1 = this._icon1v1.createChild("div", {
            className: "bonus"
        }), d.addTooltip(this._bonus1v1, s("ui.koliseum.alterBonus"), {
            longTapExplanation: !0
        });
        var o = this._icon1v1.createChild("div", {
            className: "trophy"
        });
        d.addTooltip(o, s("ui.koliseum.1stVictory"), {
            longTapExplanation: !0
        }), this._wrapper1v1._firstVictory = o.createChild("div", {
            className: "tick"
        }), this._description1v1 = this._wrapper1v1.createChild("div", {
            className: "descriptionWrapper"
        });
        var u = this._description1v1.createChild("div", {
            className: "description"
        });
        u.setHtml(s("ui.koliseum.1v1SearchingExplanation")), this._description1v1.hide(), this._buttonWrapper1v1 = this._wrapper1v1.createChild("div", {
            className: "buttonWrapper"
        }), this._buttonWrapperSubscribe1v1 = this._buttonWrapper1v1.createChild("div", {
            className: "buttonWrapperSubscribe"
        }), this._buttonWrapperPending1v1 = this._buttonWrapper1v1.createChild("div", {
            className: "buttonWrapperPending"
        });
        var p = this._buttonWrapper1v1.createChild("div", {
            className: "buttonBack",
            text: s("ui.common.back")
        });
        a(p, {
            doubletapTimeout: 1
        }), p.on("tap", function() {
            e._pending !== !0 && (e._pending = !0, e._wrapper3v3.delClassNames("notSelected"), e._wrapper1v1.toggleClassName("transition"), e._wrapper1v1.delClassNames("highlight"), setTimeout(function() {
                e._icon1v1.show(), e._description1v1.hide(), e._buttonWrapper1v1.hide(), e._pending = !1
            }, 250), setTimeout(function() {
                e._wrapper1v1.delClassNames("transition"), e._pending = !1
            }, 500))
        }), this._subscribeButton1v1 = this._buttonWrapperSubscribe1v1.appendChild(new r({
            text: s("ui.koliseum.subscribe"),
            className: ["greenButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtons1v1Availability(), c.subscribe1v1())
        })), this._cancelButton1v1 = this._buttonWrapperPending1v1.appendChild(new r({
            text: s("ui.koliseum.cancel"),
            className: ["specialButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtons1v1Availability(), c.cancel1v1())
        })), this._wrapper1v1._stats = this._wrapper1v1.createChild("div", {
            className: "wrapperStats1v1"
        });
        var h = this._wrapper1v1._stats.createChild("div", {
            className: "rankWrapper"
        });
        h.createChild("div", {
            className: "rankLabel",
            text: s("ui.koliseum.positionLabel")
        }), this._wrapper1v1._stats._rank = h.createChild("div", {
            className: "rankValue",
            text: i.rank
        }), this._wrapper1v1._stats.createChild("div", {
            className: "separator"
        });
        var f = this._wrapper1v1._stats.createChild("div", {
            className: "scoreWrapper"
        });
        f.createChild("div", {
            className: "scoreLabel",
            text: s("ui.koliseum.rankingLabel")
        }), this._wrapper1v1._stats._score = f.createChild("div", {
            className: "scoreValue"
        }), this._wrapper1v1._stats.createChild("div", {
            className: "separator"
        });
        var b = this._wrapper1v1._stats.createChild("div", {
            className: "victoryWrapper"
        });
        b.createChild("div", {
            className: "victoryLabel",
            text: s("ui.koliseum.victoryLabel")
        }), this._wrapper1v1._stats._victory = b.createChild("div", {
            className: "victoryValue",
            text: i.arenaFightCount > 0 ? Math.round(100 * i.victoryCount / i.arenaFightCount) + "%" : "-"
        }), this._wrapper3v3 = n.createChild("div", {
            className: "wrapper3v3"
        }), this._wrapper3v3.createChild("div", {
            className: "corner"
        }), this._wrapper3v3.createChild("div", {
            className: "corner"
        }), this._wrapper3v3.createChild("div", {
            className: "corner"
        }), this._wrapper3v3.createChild("div", {
            className: "corner"
        }), a(this._wrapper3v3, {
            doubletapTimeout: 1
        }), this._wrapper3v3.createChild("div", {
            className: "title",
            text: s("ui.matchmaking.feature3.name")
        }), this._icon3v3 = this._wrapper3v3.createChild("div", {
            className: "icon3v3"
        }), this._bonus3v3 = this._icon3v3.createChild("div", {
            className: "bonus"
        }), d.addTooltip(this._bonus3v3, s("ui.koliseum.alterBonus"), {
            longTapExplanation: !0
        });
        var m = this._icon3v3.createChild("div", {
            className: "trophy"
        });
        d.addTooltip(m, s("ui.koliseum.1stVictory"), {
            longTapExplanation: !0
        }), this._wrapper3v3._firstVictory = m.createChild("div", {
            className: "tick"
        }), this._description3v3 = this._wrapper3v3.createChild("div", {
            className: "descriptionWrapper",
            text: s("ui.koliseum.3v3SearchingExplanation")
        });
        var M = this._description3v3.createChild("div", {
            className: "description"
        });
        M.setHtml(s("ui.koliseum.3v3SearchingExplanation")), this._description3v3.hide(), this._buttonWrapper3v3 = this._wrapper3v3.createChild("div", {
            className: "buttonWrapper"
        }), this._buttonWrapperSubscribe3v3 = this._buttonWrapper3v3.createChild("div", {
            className: "buttonWrapperSubscribe"
        }), this._buttonWrapperPending3v3 = this._buttonWrapper3v3.createChild("div", {
            className: "buttonWrapperPending"
        });
        var g = this._buttonWrapper3v3.createChild("div", {
            className: "buttonBack",
            text: s("ui.common.back")
        });
        a(g, {
            doubletapTimeout: 1
        }), g.on("tap", function() {
            e._pending !== !0 && (e._pending = !0, e._wrapper1v1.delClassNames("notSelected"), e._wrapper3v3.delClassNames("highlight"), e._wrapper3v3.toggleClassName("transition"), setTimeout(function() {
                e._icon3v3.show(), e._description3v3.hide(), e._buttonWrapper3v3.hide()
            }, 250), setTimeout(function() {
                e._wrapper3v3.delClassNames("transition"), e._pending = !1
            }, 500))
        }), this._subscribeButton3v3 = this._buttonWrapperSubscribe3v3.appendChild(new r({
            text: s("ui.koliseum.subscribe"),
            className: ["greenButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtons3v3Availability(), c.subscribe3v3())
        })), this._cancelButton3v3 = this._buttonWrapperPending3v3.appendChild(new r({
            text: s("ui.koliseum.cancel"),
            className: ["specialButton", "cmButton"]
        }, function() {
            e._pending !== !0 && (e._pending = !0, e._setButtons3v3Availability(), c.cancel3v3())
        })), this._buttonWrapper1v1.hide(), this._buttonWrapper3v3.hide(), this._wrapper3v3._stats = this._wrapper3v3.createChild("div", {
            className: "wrapperStats3v3"
        });
        var _ = this._wrapper3v3._stats.createChild("div", {
            className: "rankWrapper"
        });
        _.createChild("div", {
            className: "rankLabel",
            text: s("ui.koliseum.positionLabel")
        }), this._wrapper3v3._stats._rank = _.createChild("div", {
            className: "rankValue",
            text: t.rank
        }), this._wrapper3v3._stats.createChild("div", {
            className: "separator"
        });
        var A = this._wrapper3v3._stats.createChild("div", {
            className: "scoreWrapper"
        });
        A.createChild("div", {
            className: "scoreLabel",
            text: s("ui.koliseum.rankingLabel")
        }), this._wrapper3v3._stats._score = A.createChild("div", {
            className: "scoreValue"
        }), this._wrapper3v3._stats.createChild("div", {
            className: "separator"
        });
        var O = this._wrapper3v3._stats.createChild("div", {
            className: "victoryWrapper"
        });
        O.createChild("div", {
            className: "victoryLabel",
            text: s("ui.koliseum.victoryLabel")
        }), this._wrapper3v3._stats._victory = O.createChild("div", {
            className: "victoryValue",
            text: t.arenaFightCount > 0 ? Math.round(100 * t.victoryCount / t.arenaFightCount) + "%" : "-"
        }), this._wrapper1v1.on("tap", function() {
            this.hasClassName("highlight") || this._pending || (this.delClassNames("notSelected"), setTimeout(function() {
                e._icon1v1.hide(), e._buttonWrapper1v1.show(), e._description1v1.show()
            }, 500), this.toggleClassName("highlight"), e._wrapper3v3.toggleClassName("notSelected", !e._wrapper3v3.hasClassName("highlight")))
        }), this._wrapper3v3.on("tap", function() {
            this.hasClassName("highlight") || this._pending || (this.delClassNames("notSelected"), setTimeout(function() {
                e._icon3v3.hide(), e._buttonWrapper3v3.show(), e._description3v3.show()
            }, 500), this.toggleClassName("highlight"), e._wrapper1v1.toggleClassName("notSelected", !e._wrapper1v1.hasClassName("highlight")))
        }), this._setArenaBonus();
        var v = window.dofus.connectionManager;
        window.gui.playerData.MatchmakingData.on("Kolosseum3v3StatusUpdate", function() {
            e._pending = !1, e.isVisible() && e._setButtons3v3Availability()
        }), window.gui.playerData.MatchmakingData.on("Kolosseum1v1StatusUpdate", function() {
            e._pending = !1, e.isVisible() && e._setButtons1v1Availability()
        }), window.gui.playerData.partyData.on("partyLeaderUpdate", function() {
            e.isVisible() && (e._setButtons3v3Availability(), e._setButtons1v1Availability())
        }), window.gui.playerData.partyData.on("playerLeftParty", function() {
            e.isVisible() && (e._setButtons3v3Availability(), e._setButtons1v1Availability())
        }), window.gui.playerData.partyData.on("arenaJoined", function() {
            e.isVisible() && (e._setButtons3v3Availability(), e._setButtons1v1Availability())
        }), window.gui.playerData.partyData.on("arenaStatsUpdated", function() {
            e.isVisible() && (e._setKoliData(), e._setFirstVictory())
        }), window.gui.playerData.partyData.on("arenaBonusUpdated", function() {
            e.isVisible() && e._setArenaBonus()
        }), window.gui.on("GameFightPlacementPossiblePositionsMessage", function() {
            e.isVisible() && (e._setButtons1v1Availability(), e._setButtons3v3Availability())
        }), window.gui.on("GameFightEndMessage", function() {
            e.isVisible() && (e._setButtons1v1Availability(), e._setButtons3v3Availability())
        }), v.on("MatchmakingErrorMessage", function() {
            e._pending = !1, e.isVisible() && (e._setButtons1v1Availability(), e._setButtons3v3Availability())
        }), this.on("open", function() {
            e._setButtons1v1Availability(), e._setButtons3v3Availability(), e._setFirstVictory(), e._setArenaBonus(), e._setKoliData()
        }), v.on("MatchmakingProposalUpdateMessage", function() {
            e._pending = !1, e.isVisible() && (e._setButtons1v1Availability(), e._setButtons3v3Availability())
        }), window.gui.on("disconnect", function() {
            e._pending = !1
        })
    }
    i(965);
    var o = i(56)
        .inherits,
        a = i(63),
        r = i(86),
        s = i(17)
        .getText,
        c = i(966),
        l = i(72),
        d = i(88);
    o(n, l), e.exports = n, n.prototype._setKoliData = function() {
        var e = c.get3v3Data(),
            t = e.score < 0 ? "-" : Math.trunc(e.score),
            i = e.rank < 0 ? "-" : e.rank;
        this._wrapper3v3._stats._rank.setText(i), this._wrapper3v3._stats._score.setText(t);
        var n = Math.round(100 * e.victoryCount / e.arenaFightCount),
            o = e.arenaFightCount ? n + "%" : "-";
        this._wrapper3v3._stats._victory.setText(o);
        var a = c.get1v1Data(),
            r = a.score < 0 ? "-" : Math.trunc(a.score),
            s = a.rank < 0 ? "-" : a.rank;
        this._wrapper1v1._stats._rank.setText(s), this._wrapper1v1._stats._score.setText(r);
        var l = Math.round(100 * a.victoryCount / a.arenaFightCount),
            d = a.arenaFightCount ? l + "%" : "-";
        this._wrapper1v1._stats._victory.setText(d)
    }, n.prototype._setFirstVictory = function() {
        this._wrapper3v3._firstVictory.toggleDisplay(c.is3v3FirstVictory()), this._wrapper1v1._firstVictory.toggleDisplay(c.is1v1FirstVictory())
    }, n.prototype._setArenaBonus = function() {
        this._bonus3v3.toggleClassName("display", c.is3v3ArenaBonus()), this._bonus1v1.toggleClassName("display", c.is1v1ArenaBonus())
    }, n.prototype._setButtons1v1Availability = function() {
        function e() {
            i._subscribeButton1v1.disable(), i._cancelButton1v1.disable()
        }

        function t() {
            i._subscribeButton1v1.enable(), i._cancelButton1v1.enable()
        }
        var i = this;
        this._buttonWrapperSubscribe1v1.toggleDisplay(c.canTag1v1()), this._buttonWrapperPending1v1.toggleDisplay(c.isQueued1v1()), this._description1v1.toggleClassName("spinner", c.isQueued1v1()), !window.gui.playerData.isPlayerArenaGroupLeader() || window.gui.playerData.isFighting ? e() : this._pending ? e() : t()
    }, n.prototype._setButtons3v3Availability = function() {
        function e() {
            i._subscribeButton3v3.disable(), i._cancelButton3v3.disable()
        }

        function t() {
            i._subscribeButton3v3.enable(), i._cancelButton3v3.enable()
        }
        var i = this;
        this._buttonWrapperSubscribe3v3.toggleDisplay(c.canTag3v3()), this._buttonWrapperPending3v3.toggleDisplay(c.isQueued3v3()), this._description3v3.toggleClassName("spinner", c.isQueued3v3()), !window.gui.playerData.isPlayerArenaGroupLeader() || window.gui.playerData.isFighting ? e() : this._pending ? e() : t()
    }
}
