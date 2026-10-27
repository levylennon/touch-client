function(e, t, i) {
    function n() {
        M.call(this, "div", {
            className: "GuildsTab"
        }), this._createDom(), this.on("allianceUpdated", function(e) {
            this.table.clearContent(), this.table.addList(e.guilds), this.table.setContentLoading(!1)
        }), this.on("allianceUpdateRequested", function() {
            this.table.setContentLoading(!0)
        });
        var e = this;
        window.gui.playerData.alliance.on("guildLeft", function(t) {
            e.table.delRow(t)
        }), this.on("open", function() {
            this._updateAvaMode()
        })
    }

    function o(e, t, i) {
        var n = new m({
            className: "kick"
        }, function() {
            if (t.allianceLeader && e.guildCount > 1) return window.gui.openSimplePopup(u("ui.alliance.guildLeaderCantBeBanned"));
            var n = i ? u("ui.alliance.quitConfirm") : u("ui.alliance.kickConfirm", t.guildName);
            window.gui.openConfirmPopup({
                title: u("ui.popup.warning"),
                message: n,
                cb: function(e) {
                    e && window.dofus.sendMessage("AllianceKickRequestMessage", {
                        kickedId: t.guildId
                    })
                }
            })
        });
        return c(n, u("ui.alliance.kickGuild")), n
    }

    function a(e) {
        var t = new m({
            className: "leader"
        }, function() {
            window.gui.openConfirmPopup({
                title: u("ui.popup.warning"),
                message: u("ui.alliance.giveLeadershipConfirm", e.guildName),
                cb: function(t) {
                    t && window.dofus.sendMessage("AllianceChangeGuildRightsMessage", {
                        guildId: e.guildId,
                        rights: s.ALLIANCE_RIGHT_BOSS
                    })
                }
            })
        });
        return c(t, u("ui.alliance.giveLeadership")), t
    }
    i(1200);
    var r = i(523),
        s = i(620),
        c = i(88)
        .addTooltip,
        l = i(594),
        d = i(437),
        u = i(17)
        .getText,
        p = i(527),
        h = i(56)
        .inherits,
        f = i(765),
        b = i(63),
        m = i(86),
        M = i(72);
    h(n, M), e.exports = n, n.prototype._updateAvaMode = function() {
        var e = window.gui.playerData.characterBaseInformations,
            t = !1;
        if (e.level >= 50) {
            this.avaMode.enable();
            var i = window.gui.playerData.characters.mainCharacter.characteristics.alignmentInfos.aggressable;
            t = i === r.AvA_ENABLED_AGGRESSABLE || i === r.AvA_ENABLED_NON_AGGRESSABLE || i === r.AvA_DISQUALIFIED || i === r.AvA_PREQUALIFIED_AGGRESSABLE;
            var n = this.avaMode.isActivate();
            n !== t && this.avaMode.toggleActivation(t)
        } else this.avaMode.disable()
    }, n.prototype._createDom = function() {
        function e(e) {
            var t = new M("div", {
                    className: "nameBox"
                }),
                i = t.createChild("div", {
                    text: e.guildName,
                    className: "link"
                });
            b(i), i.on("tap", function() {
                p.openGuildCard(e.guildId)
            });
            var n = t.createChild("div");
            return b(n), n.on("tap", function() {
                window.gui.openContextualMenu("player", {
                    playerName: e.leaderName,
                    playerId: e.leaderId,
                    guildId: e.guildId,
                    hasGuild: !0
                })
            }), n.createChild("span", {
                text: u("ui.guild.leadBy", "")
            }), n.createChild("span", {
                text: e.leaderName,
                className: "link"
            }), t
        }

        function t(e) {
            var t = new M("div", {
                    className: "memberBox"
                }),
                i = t.createChild("div", {
                    text: u("ui.guild.onlineMembers", e.nbConnectedMembers, e.nbMembers)
                });
            if (0 === e.nbConnectedMembers && e.lastActivity > 0) {
                var n, o = e.getHoursSinceLastConnection(),
                    a = Math.floor(o / 720),
                    r = Math.floor((o - 720 * a) / 24);
                n = a > 0 ? r > 0 ? u("ui.social.monthsAndDaysSinceLastConnection", a, r, r) : u("ui.social.monthsSinceLastConnection", a, a) : r > 0 ? u("ui.social.daysSinceLastConnection", r, r) : u("ui.social.lessThanADay"), c(i, u("ui.social.lastConnection", n))
            }
            return t.createChild("div", {
                text: e.nbTaxCollectors + " " + u("ui.social.guildTaxCollectors")
            }), t
        }

        function i(e) {
            var t, i = e.leaderId === m;
            return h ? (t = new M("div", {
                className: "buttonBox"
            }), t.appendChild(o(s, e, i)), i || t.appendChild(a(e))) : i ? (t = new M("div", {
                className: "buttonBox"
            }), t.appendChild(o(s, e, !0))) : t = "", t
        }

        function n(e) {
            var t = new d({
                width: 50,
                height: 50
            });
            return t.setValue({
                guild: e
            }), t
        }
        var r = window.gui.playerData,
            s = r.alliance.current,
            h = r.alliance.isBoss(),
            m = r.id;
        this.table = this.appendChild(new f([{
            id: "emblem",
            format: n
        }, {
            id: "guildName",
            header: u("ui.common.name"),
            format: e,
            defaultSorter: !0,
            sort: !0
        }, {
            id: "guildLevel",
            header: u("ui.common.level"),
            sort: !0
        }, {
            id: "nbMembers",
            header: u("ui.common.members"),
            format: t,
            sort: !0
        }, {
            id: "actions",
            format: i
        }], "guildId", {
            clickable: !1
        })), this.avaMode = this.appendChild(new l(u("ui.alliance.activateAvA"))), this.avaMode.on("change", function(e) {
            window.dofus.sendMessage("SetEnableAVARequestMessage", {
                enable: e
            })
        })
    }
}
