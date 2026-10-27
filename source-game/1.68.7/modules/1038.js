function(e, t, i) {
    function n() {
        function e(e, t) {
            var i = "gfx/heads/SmallHead_" + e.breed + (e.sex ? 1 : 0) + ".png";
            t.setStyle("backgroundImage", "none"), g.preloadImage(i, function(e) {
                t.rootElement && t.setStyle("backgroundImage", e)
            })
        }

        function t(e, t) {
            var i = "";
            if (t.teamSide >= 0) switch (t.teamSide) {
                case s.ALIGNMENT_NEUTRAL:
                    i += "Neutre";
                    break;
                case s.ALIGNMENT_ANGEL:
                    i += "Bonta";
                    break;
                case s.ALIGNMENT_EVIL:
                    i += "Brakmar";
                    break;
                case s.ALIGNMENT_MERCENARY:
                    i += "Seriane"
            } else switch (t.teamTypeId) {
                case b.TEAM_TYPE_MONSTER:
                    i += "Monstre";
                    break;
                case b.TEAM_TYPE_TAXCOLLECTOR:
                    i += "Perco";
                    break;
                default:
                    i += "Neutre"
            }
            i += 0 === t.teamId ? "G" : "D", i = "gfx/illusUi/fightersType/spectator_tx_Picto" + i + ".png", g.preloadImage(i, function(t) {
                e.rootElement && e.setStyle("backgroundImage", t)
            })
        }

        function i() {
            for (var e = U.fightListTable.rows.getChildren(), t = 0; t < e.length; t += 1) e[t].durationTimeoutId && clearTimeout(e[t].durationTimeoutId)
        }

        function n(e, t) {
            var i = e.duration;
            if (!t) return i.setText("-");
            var o = ~~(Date.now() / 1e3) - t,
                a = h.durationToString(o),
                r = a.split(":"),
                s = r[0] + ":" + r[1];
            i.setText(s);
            var c = ~~o % 60,
                l = 60 - c;
            e.durationTimeoutId = setTimeout(function() {
                n(e, t)
            }, 1e3 * (l + 1))
        }

        function o(e) {
            return U.fightListTable.getRow(e)
        }

        function A(e, i) {
            var n = e.createChild("div", {
                className: "nbPlayers"
            });
            n.createChild("div", {
                className: "num",
                text: i.teamMembersCount
            });
            var o = new a("div", {
                className: "fighterTypeIcon"
            });
            0 === i.teamId ? n.insertAsFirstChild(o) : n.appendChild(o), t(o, i)
        }

        function O(e, t) {
            var i = new a("div", {
                className: "relation"
            });
            return i.addClassNames(e), r.addTooltip(i, t, {
                longTapExplanation: !0
            }), i
        }

        function v(e) {
            var t = e.fightTeams[0],
                i = e.fightTeams[1],
                n = t.teamMembersCount + i.teamMembersCount,
                o = "",
                s = e.fightType,
                c = "";
            s === d.FIGHT_TYPE_PVP_ARENA_3V3 || s === d.FIGHT_TYPE_PVP_ARENA_1V1 ? (o += " fightType1", c += p("ui.common.koliseum")) : s === d.FIGHT_TYPE_CHALLENGE ? (o += " fightType2", c += p("ui.fight.challenge")) : s === d.FIGHT_TYPE_AGRESSION ? (o += " fightType3", c += p("ui.alert.event.11")) : s === d.FIGHT_TYPE_PvT && (o += " fightType3", c += p("ui.spectator.taxcollectorAttack"));
            var l = ("nbPlayersLine" + o)
                .split(" "),
                u = new a("div", {
                    className: l
                });
            A(u, t), A(u, i), u.nbrFighters = n, c && r.addTooltip(u, c, {
                longTapExplanation: !1
            });
            var h, f, b = t.meanLevel * t.teamMembersCount + i.meanLevel * i.teamMembersCount,
                m = Math.round(b / (t.teamMembersCount + i.teamMembersCount));
            t.hasGroupMember || i.hasGroupMember ? (h = O("relation1", p("ui.spectator.isGroup")), f = _.GROUP) : t.hasFriend || i.hasFriend ? (h = O("relation2", p("ui.spectator.isFriend")), f = _.FRIEND) : t.hasGuildMember || i.hasGuildMember ? (h = O("relation3", p("ui.spectator.isGuild")), f = _.GUILD) : t.hasAllianceMember || i.hasAllianceMember ? (h = O("relation4", p("ui.spectator.isAlliance")), f = _.ALLIANCE) : f = _.NO_RELATION;
            var M = new a("div", {
                className: "spectatorLocked",
                name: "spectatorLocked"
            });
            return M.toggleDisplay(e.fightSpectatorLocked), {
                spectatorLocked: M,
                nbPlayers: u,
                level: m,
                duration: new a("div", {
                    name: "duration"
                }),
                friend: h || "",
                relation: f
            }
        }

        function y(t, i) {
            var n;
            i.breed > 0 && (n = new a("div", {
                className: "classIcon"
            }), e(i, n));
            var o = i.enrichData.name,
                r = i.id,
                s = i.guildId,
                c = t.table.addRow({
                    name: o,
                    "class": n || "",
                    level: i.level
                }, r);
            c.playerName = o, c.playerId = r, c.guildId = s
        }

        function z(e) {
            var t = new a("div", {
                    className: ["option", "option" + e],
                    hidden: !0
                }),
                i = "";
            return e === l.FIGHT_OPTION_SET_TO_PARTY_ONLY ? i = p("ui.fight.option.blockJoinerExceptParty") : e === l.FIGHT_OPTION_SET_CLOSED ? i = p("ui.fight.option.blockJoiner") : e === l.FIGHT_OPTION_ASK_FOR_HELP && (i = p("ui.fight.option.help")), i && r.addTooltip(t, i, {
                longTapExplanation: !0
            }), t
        }

        function w(e, t, i) {
            function n(e) {
                if (!(e.playerId < 0)) {
                    var t = {
                        playerName: e.playerName,
                        playerId: e.playerId,
                        guildId: e.guildId
                    };
                    window.gui.openContextualMenu("player", t)
                }
            }
            var o = new a("div", {
                    className: t
                }),
                r = o.createChild("div", {
                    className: "colTop"
                }),
                s = r.createChild("div", {
                    className: "titleContainer"
                });
            s.createChild("div", {
                className: "title",
                text: i
            });
            var l = s.createChild("div", {
                className: "gameFightOptions"
            });
            o.gameFightOptions = {};
            for (var d = 0; d < Y.length; d += 1) {
                var u = Y[d],
                    h = z(u);
                l.appendChild(h), o.gameFightOptions[u] = h
            }
            o.averageLevelContainer = r.createChild("div", {
                className: "averageLevelContainer"
            });
            var b = p("ui.common.averageLevel") + p("ui.common.colon");
            o.averageLevelContainer.createChild("span", {
                text: b
            }), o.averageLevel = o.averageLevelContainer.createChild("span", {
                className: "averageLevel"
            });
            var m = [{
                id: "name",
                header: p("ui.common.name")
            }, {
                id: "class",
                header: p("ui.charcrea.breed")
            }, {
                id: "level",
                header: p("ui.common.short.level")
            }];
            return o.table = o.appendChild(new f(m)), o.table.on("rowTap", function(e) {
                n(e)
            }), o.joinBtn = o.appendChild(new c(p("ui.common.join"))), o.joinBtn.on("tap", function() {
                if (G && G.fightId) {
                    var e = G.fightTeams[o.teamId].leaderId;
                    window.gui.fightManager.joinSpectator(G.fightId, e), M.close(U.id)
                }
            }), o.teamId = e, o
        }

        function T(e) {
            var t = e.gameFightOptions;
            for (var i in t) q(e.teamId, i, !1)
        }

        function C() {
            i(), U.fightListTable.clearContent()
        }

        function I() {
            U.col1.table.clearContent(), U.col1.averageLevelContainer.hide(), U.col2.table.clearContent(), U.col2.averageLevelContainer.hide(), T(U.col1), T(U.col2)
        }

        function S() {
            U.col1.joinBtn.hide(), U.col2.joinBtn.hide(), U.buttonSpectate.disable()
        }

        function E() {
            G = null, C(), I(), S()
        }

        function L(e) {
            var t = e.joinBtn;
            if (!G) return void t.hide();
            var i = e.teamId,
                n = G.fightTeamsOptions[i] || {},
                o = n.isClosed,
                a = (i + 1) % 2,
                r = G.fightTeams[i] || {},
                s = G.fightTeams[a] || {},
                c = o || G.fightStart || r.teamTypeId === b.TEAM_TYPE_MONSTER || r.teamTypeId === b.TEAM_TYPE_TAXCOLLECTOR && !r.hasMyTaxCollector || s.teamTypeId === b.TEAM_TYPE_TAXCOLLECTOR && s.hasMyTaxCollector;
            c ? t.hide() : t.show()
        }

        function N() {
            var e = window.gui.playerData.identification.hasRights;
            !e && G && G.fightSpectatorLocked ? U.buttonSpectate.disable() : U.buttonSpectate.enable()
        }

        function R() {
            L(U.col1), L(U.col2), N()
        }

        function q(e, t, i) {
            if (t) {
                var n = U["col" + (e + 1)],
                    o = n.gameFightOptions[t];
                o && n && o.toggleDisplay(i)
            }
        }

        function x(e, t, i) {
            if (G)
                for (var n in j)
                    if (G.fightTeamsOptions[e] && j[n] === t) {
                        var o = G.fightTeamsOptions[e];
                        o[n] = i;
                        break
                    }
        }

        function B(e) {
            if (U.fightListTable.hasRow(e.fightId)) {
                var t = U.fightListTable.getRow(e.fightId);
                t.fight.fightSpectatorLocked = e.state;
                var i = U.fightListTable.getCell(e.fightId, "spectatorLocked");
                i.toggleDisplay(e.state)
            }
        }

        function D(e) {
            0 === e.option && B(e), G && G.fightId === e.fightId && (x(e.teamId, e.option, e.state), q(e.teamId, e.option, e.state), R())
        }

        function W(e, t) {
            if (t = t || [], e.table.clearContent(), e.averageLevelContainer.toggleDisplay(Boolean(t.length)), T(e), t.length) {
                var i = e.teamId;
                if (G) {
                    var n = G.fightTeamsOptions[i];
                    for (var o in n)
                        if (j.hasOwnProperty(o)) {
                            var a = j[o],
                                r = n[o];
                            q(i, a, r)
                        }
                }
                for (var s = 0, c = t.length, l = 0; l < c; l++) {
                    var d = t[l];
                    y(e, d), s += d.level
                }
                e.averageLevel.setText(Math.round(s / c))
            }
        }

        function P(e) {
            e = e || {}, W(U.col1, e.attackers), W(U.col2, e.defenders)
        }

        function k(e) {
            e = e || {};
            var t = e.fights || [];
            if (t.length < 1) return void E();
            i();
            var a, r, s = U.fightListTable.rows.getChildren(),
                c = [];
            s.forEach(function(e) {
                c.push(e.fight.fightId)
            });
            var l = [];
            for (t.forEach(function(e) {
                    l.push(e.fightId)
                }), a = 0; a < c.length; a += 1) {
                var d = c[a];
                l.indexOf(d) < 0 && U.fightListTable.delRow(d)
            }
            for (a = 0; a < t.length; a++) {
                var u = t[a],
                    p = v(u);
                r = U.fightListTable.hasRow(u.fightId) ? U.fightListTable.updateRow(p, u.fightId) : U.fightListTable.addRow(p, u.fightId), r.fight = u, r.rowContent.fightStart = u.fightStart, n(r, u.fightStart)
            }
            if (U.fightListTable.sortAgain(), G && G.fightId) {
                var h = o(G.fightId);
                if (h) return void h.tap()
            }
            U.fightListTable.selectFirstRow()
        }

        function F() {
            window.dofus.sendMessage("MapRunningFightDetailsRequestMessage", {
                fightId: G.fightId
            })
        }

        function H() {
            window.dofus.sendMessage("MapRunningFightListRequestMessage")
        }
        var U = this;
        m.call(this, {
            className: "FightListWindow",
            title: p("ui.spectator.fightList"),
            positionInfo: {
                left: "c",
                top: "c",
                width: "680px",
                height: "96%",
                maxHeight: 630
            }
        });
        var G, j = u.FIGHT_OPTION_KEY_TO_ENUM,
            Y = u.FIGHT_OPTION_ICON_ID;
        this.once("open", function() {
            function e(e, t) {
                return e.nbPlayers.nbrFighters - t.nbPlayers.nbrFighters
            }

            function t(e, t) {
                return e.fightStart ? t.fightStart ? t.fightStart - e.fightStart : 1 : -1
            }

            function i(e, t) {
                return t.relation - e.relation
            }
            var n = [{
                id: "spectatorLocked"
            }, {
                id: "nbPlayers",
                header: p("ui.common.numberOfPlayers"),
                sort: e
            }, {
                id: "level",
                header: p("ui.common.level"),
                sort: !0
            }, {
                id: "duration",
                header: p("ui.fightend.duration"),
                sort: t
            }, {
                id: "friend",
                header: p("ui.common.friends"),
                sort: i
            }];
            this.fightListTable = this.windowBody.appendChild(new f(n)), this.fightListTable.setSorter(i), this.fightListTable.addClassNames("fightListTable"), this.fightListTable.on("rowTap", function(e) {
                G = e.fight, F()
            });
            var o = this.windowBody.createChild("div", {
                className: "colsWrapper"
            });
            this.col1 = w(0, ["colTeam", "col1"], p("ui.common.attackers")), this.col2 = w(1, ["colTeam", "col2"], p("ui.common.defenders")), o.appendChild(this.col1), o.appendChild(this.col2), this.buttonSpectate = new c(p("ui.common.tospectate"), {
                className: "buttonSpectate"
            }), this.buttonSpectate.on("tap", function() {
                G && G.fightId && (window.gui.fightManager.joinSpectator(G.fightId, 0), M.close(U.id))
            }), this.windowBody.appendChild(this.buttonSpectate)
        }), this.on("open", function() {
            E(), H()
        }), this.on("close", function() {
            window.dofus.sendMessage("StopToListenRunningFightRequestMessage")
        });
        var X = window.gui;
        X.on("MapFightCountMessage", function() {
            U.isVisible() && H()
        }), X.on("MapRunningFightListMessage", k), X.on("MapRunningFightDetailsMessage", function(e) {
            P(e), R()
        }), X.on("GameRolePlayRemoveChallengeMessage", function() {
            U.isVisible() && H()
        }), X.on("GameFightOptionStateUpdateMessage", function(e) {
            U.isVisible() && D(e)
        }), X.playerData.position.on("mapChanged", function() {
            M.close(U.id)
        })
    }
    i(1039);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(88),
        s = i(440),
        c = i(86)
        .DofusButton,
        l = i(517),
        d = i(787),
        u = i(674),
        p = i(17)
        .getText,
        h = i(16),
        f = i(765),
        b = i(1040),
        m = i(70),
        M = i(52),
        g = i(12),
        _ = {
            GROUP: 1,
            FRIEND: 2,
            GUILD: 3,
            ALLIANCE: 4,
            NO_RELATION: 5
        };
    o(n, m), e.exports = n
}
