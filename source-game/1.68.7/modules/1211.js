function(e, t, i) {
    function n(e, t) {
        return e.name < t.name ? -1 : 1
    }

    function o(e, t) {
        return e.rankName.toLowerCase()
            .localeCompare(t.rankName.toLowerCase())
    }

    function a(e, t) {
        return e.hoursSinceLastConnection < t.hoursSinceLastConnection ? -1 : 1
    }

    function r(e) {
        e = e || {}, s.call(this, "div", {
            className: "GuildMembers"
        }), this.addClassNames(e.className), this.once("open", function() {
            this._setupDom(), this._setupSocketEvents()
        })
    }
    i(1212);
    var s = i(72),
        c = i(56)
        .inherits,
        l = i(765),
        d = i(17)
        .getText,
        u = i(17)
        .processText,
        p = i(86),
        h = i(52),
        f = i(594),
        b = i(600),
        m = i(520),
        M = i(12),
        g = i(440),
        _ = i(60),
        A = {};
    A[b.NOT_CONNECTED] = "offline", A[b.GAME_TYPE_ROLEPLAY] = "online", A[b.GAME_TYPE_FIGHT] = "online", A[b.UNKNOWN_STATE] = "offline";
    var O = 720;
    c(r, s), e.exports = r, r.prototype._setupDom = function() {
        var e = this,
            t = [{
                id: "playerIcon",
                sort: a
            }, {
                id: "nameButton",
                header: d("ui.common.name"),
                sort: n
            }, {
                id: "rankName",
                header: d("ui.pvp.rank"),
                sort: o
            }, {
                id: "level",
                header: d("ui.common.short.level"),
                sort: !0
            }, {
                id: "xpPercentage",
                header: "%" + d("ui.common.xp"),
                sort: !0
            }, {
                id: "xp",
                header: d("ui.common.xp"),
                sort: !0
            }, {
                id: "achievement",
                header: d("ui.achievement.achievement"),
                sort: !0
            }, {
                id: "stateIcon",
                sort: a
            }, {
                id: "buttons"
            }];
        this.table = this.appendChild(new l(t, null, {
            clickable: !1
        })), this.table.addFilter(function(t) {
            return !!e.showOfflineCheckbox.isActivate() || "online" === t.onlineStatus
        });
        var i = window.gui.playerData.guild.current.warnMemberOnConnectionState,
            r = _.getValue("showGuildMembersOffline", !1),
            s = this.createChild("div", {
                className: "underTable"
            });
        this.showOfflineCheckbox = s.appendChild(new f(d("ui.social.displayOfflineGuildMembers"), {
            defaultValue: r
        }));
        var c = s.appendChild(new f(d("ui.social.warnWhenGuildMembersComeOnline"), {
            defaultValue: i
        }));
        this.averageLevel = s.createChild("div", {
            className: "averageLevel"
        }), this.showOfflineCheckbox.on("change", function(t) {
            e.table.filter(), _.setValue("showGuildMembersOffline", t)
        }), c.on("change", function(e) {
            window.dofus.sendMessage("GuildMemberSetWarnOnConnectionMessage", {
                enable: e
            }), window.gui.playerData.guild.current.warnMemberOnConnectionState = e
        })
    }, r.prototype._setupSocketEvents = function() {
        var e = this;
        window.gui.playerData.guild.on("guildMember", function(t, i) {
            e.isVisible() && e._updateMembersList(t, i)
        }), window.gui.playerData.guild.on("guildMemberStatusUpdate", function(t) {
            if (e.isVisible()) {
                var i = e.table.getCell(t.id, "playerIcon"),
                    n = i.getChild("onlineStatusIcon");
                n.setClassNames("onlineStatusIcon", "status" + t.status.statusId)
            }
        })
    }, r.prototype._updateMembersList = function(e, t) {
        function i() {
            h.open("guildMemberRights", this.memberInfo)
        }

        function n() {
            var e = this.memberInfo.id,
                t = 1 === Object.keys(c.members)
                .length;
            if (e === c.leaderId && !t) return window.gui.openSimplePopup(d("ui.social.guildBossCantBeBann"), d("ui.popup.warning"));
            var i = l === e ? d("ui.social.doUDeleteYou") : d("ui.social.doUDeleteMember", this.memberInfo.name);
            window.gui.openConfirmPopup({
                title: d("ui.popup.warning"),
                message: i,
                cb: function(t) {
                    t && window.dofus.sendMessage("GuildKickRequestMessage", {
                        kickedId: e
                    })
                }
            })
        }

        function o() {
            this.connected ? window.gui.openContextualMenu("player", {
                playerId: this.id,
                accountId: this.accountId,
                playerName: this.name,
                guildId: window.gui.playerData.guild.current.guildId
            }) : window.gui.openContextualMenu("offlinePlayer", {
                playerId: this.id,
                playerName: this.name,
                hoursSinceLastConnection: this.hoursSinceLastConnection
            })
        }

        function a(e, t) {
            f.getSmallWingsUrl(t, function(t) {
                e.rootElement && e.setStyle("backgroundImage", t)
            })
        }
        var r = window.gui.playerData.guild,
            c = r.current,
            l = window.gui.playerData.id,
            f = window.gui.playerData.alignment,
            b = l === c.leaderId,
            _ = [],
            v = [],
            y = [],
            z = [];
        t || this.table.clearContent(), this.averageLevel.setText(d("ui.social.guildAvgMembersLevel") + ": " + c.averageMemberLevel);
        for (var w = b || r.hasRight(m.GUILD_RIGHT_BOSS) || r.hasRight(m.GUILD_RIGHT_MANAGE_GUILD_BOOSTS) || r.hasRight(m.GUILD_RIGHT_ALMOST_BOSS) || r.hasRight(m.GUILD_RIGHT_MANAGE_XP_CONTRIBUTION) || r.hasRight(m.GUILD_RIGHT_MANAGE_RANKS), T = r.checkRight(m.GUILD_RIGHT_BOSS, c.members[l].rights), C = window.gui.databases.RankNames, I = t ? 1 : e.length, S = 0; S < I; S++) {
            var E = t ? t : e[S],
                L = A[E.connected],
                N = new s("div", {
                    className: "buttons"
                }),
                R = l === e[S].id;
            (R || w || T) && (N.appendChild(new p({
                    className: ["boxSizing", "rowButton", "rights"]
                }, i))
                .memberInfo = {
                    id: E.id,
                    name: E.name,
                    level: E.level,
                    rank: E.rank,
                    sex: E.sex,
                    experienceGivenPercent: E.experienceGivenPercent,
                    rights: E.rights
                }), (R || b || T || r.hasRight(m.GUILD_RIGHT_BAN_MEMBERS)) && (N.appendChild(new p({
                    className: ["boxSizing", "rowButton", "deletion"]
                }, n))
                .memberInfo = {
                    id: E.id,
                    name: E.name
                });
            var q = new p({
                className: "playerIcon",
                scaleOnPress: !1
            }, o);
            q.createChild("div", {
                name: "onlineStatusIcon",
                className: ["onlineStatusIcon", "status" + E.status.statusId]
            });
            var x = q.createChild("div", {
                className: "alignmentSide"
            });
            E.alignmentSide !== g.ALIGNMENT_ANGEL && E.alignmentSide !== g.ALIGNMENT_EVIL || a(x, E.alignmentSide), _.push(x.createChild("div", {
                className: "playerHead"
            })), v.push("gfx/heads/SmallHead_" + E.breed + (E.sex ? 1 : 0) + ".png"), q.id = E.id, q.name = E.name, q.accountId = E.accountId, q.isMySelf = R, q.connected = E.connected, q.hoursSinceLastConnection = E.hoursSinceLastConnection;
            var B = new p({
                className: "nameButton",
                text: E.name,
                scaleOnPress: !1
            }, o);
            B.id = E.id, B.name = E.name, B.accountId = E.accountId, B.isMySelf = R, B.connected = E.connected, B.hoursSinceLastConnection = E.hoursSinceLastConnection;
            var D = u(C[E.rank].nameId, E.sex ? 1 : 0),
                W = {
                    playerIcon: q,
                    nameButton: B,
                    name: E.name,
                    rankName: D,
                    rankValue: E.rank,
                    level: E.level,
                    xpPercentage: E.experienceGivenPercent + "%",
                    xp: E.givenExperience,
                    achievement: E.achievementPoints,
                    buttons: N,
                    onlineStatus: L,
                    hoursSinceLastConnection: "offline" === L ? E.hoursSinceLastConnection : -1
                };
            if ("offline" === L)
                if (E.hoursSinceLastConnection >= O) {
                    var P = d("ui.common.inactive") + "<br/>",
                        k = Math.floor(E.hoursSinceLastConnection / O);
                    P += d("ui.social.monthsSinceLastConnection", k, k), W.stateIcon = new s("div", {
                        className: ["text"]
                    }), W.stateIcon.setHtml(P)
                } else W.stateIcon = new s("div", {
                    className: ["stateIcon", "offline"]
                });
            else if (E.hasOwnProperty("moodSmileyId") && E.moodSmileyId > 0) {
                var F = E.moodSmileyId,
                    H = window.gui.databases.Smileys[F];
                H ? (W.stateIcon = new s("div", {
                    className: ["stateIcon", "smiley"]
                }), y.push(W.stateIcon), z.push("gfx/smilies/" + H.gfxId + ".png")) : console.error("Smiley " + F + " details are not available, it could not be displayed")
            }
            this.table.updateRow(W, E.id)
                .addClassNames(L)
        }
        this.table.filter(), M.preloadImages(v, function(e) {
            for (var t = 0, i = e.length; t < i; t++) {
                var n = _[t];
                n && n.rootElement && n.setStyle("backgroundImage", e[t])
            }
        }), z.length && M.preloadImages(z, function(e) {
            if (e.length !== y.length) return console.error("Number of smileys preloaded does not match number of state icons");
            for (var t = 0; t < e.length; t++) {
                var i = y[t];
                i && i.rootElement && i.setStyle("backgroundImage", e[t])
            }
        })
    }
}
