function(e, t, i) {
    function n() {
        s.call(this, "div", {
            className: "GuildWindow",
            name: "guild"
        });
        var e = this;
        this.openedTabId = null, this.once("open", function() {
            e._setupDom(), e._setupEvents()
        }), this.on("open", function(t) {
            t = t || {}, window.dofus.sendMessage("GuildGetInformationsMessage", {
                infoType: m.INFO_GENERAL
            }), this.openedTabId = t.tabId || "members", e.tabs.openTab(this.openedTabId, null, {
                forceOpen: !0
            })
        }), this.on("close", function() {
            this._resetTabs()
        })
    }
    i(1210);
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(496),
        s = i(72),
        c = i(88)
        .addTooltip,
        l = i(1211),
        d = i(1213),
        u = i(1215),
        p = i(1219),
        h = i(1221),
        f = i(490),
        b = i(437),
        m = i(757),
        M = i(16),
        g = i(52),
        _ = i(21)
        .DofusDate,
        A = i(520),
        O = i(105);
    o(n, s), e.exports = n, n.prototype._buildGuildGeneralInfoArea = function() {
        var e = this.createChild("div", {
                className: "guildGeneralInfo"
            }),
            t = e.createChild("div", {
                className: ["column", "title"]
            }),
            i = e.createChild("div", {
                className: ["column", "content"]
            }),
            n = e.createChild("div", {
                className: ["column", "emblem"]
            });
        this.emblem = n.appendChild(new b({
            width: 70,
            height: 70
        })), this.level = t.createChild("div"), t.createChild("div", {
            className: "member",
            text: a("ui.common.members") + ":"
        }), t.createChild("div", {
            text: a("ui.common.creationDate") + ":"
        }), this.levelBar = i.appendChild(new f({
            className: "yellow"
        })), c(this.levelBar, function() {
            var e = window.gui.playerData.guild.current,
                t = M.intToString(e.experience || 0),
                i = M.intToString(e.expNextLevelFloor || 0);
            return new s("div", {
                text: t + " / " + i
            })
        }), this.membersValue = i.createChild("div", {
            className: "memberValue"
        }), this.creationDateValue = i.createChild("div")
    }, n.prototype._setupDom = function() {
        function e() {
            window.dofus.sendMessage("GuildGetInformationsMessage", {
                infoType: this.id
            })
        }
        this._buildGuildGeneralInfoArea(), this.tabs = this.appendChild(new r);
        var t = new l({
                className: "panel"
            }),
            i = new u,
            n = new h,
            o = new p({
                className: "panel"
            }),
            s = new d;
        t.id = m.INFO_MEMBERS, n.id = m.INFO_TAX_COLLECTOR_GUILD_ONLY, o.id = m.INFO_PADDOCKS, s.id = m.INFO_HOUSES, this.tabs.addTab(a("ui.common.members"), t, "members"), this.tabs.addTab(a("tablet.social.announcements"), i, "customisation"), this.tabs.addTab(a("ui.social.guildTaxCollectors"), n, "perceptors"), this.tabs.addTab(a("ui.common.mountPark"), o, "paddocks"), this.tabs.addTab(a("ui.common.housesWord"), s, "houses"), t.on("open", e), o.on("open", e), s.on("open", e);
        var c = window.gui.playerData.guild,
            f = c.hasRight(A.GUILD_RIGHT_HIRE_TAX_COLLECTOR) || c.hasRight(A.GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR) || c.hasRight(A.GUILD_RIGHT_COLLECT);
        this.tabs.toggleTabAvailability("perceptors", f)
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui.playerData.guild;
        t.on("guildMemberCountUpdate", function() {
            e.isVisible() && e.membersValue.setText(t.current.nbConnectedMembers + " / " + t.current.nbMembers)
        }), t.on("GuildGeneralInformationUpdate", function() {
            e.isVisible() && (e._updateEmblemLogoAndWindowTitle(), e._updateTabNotification())
        }), O.on("GuildInformationsMemberUpdateMessage", function() {
            var i = t.hasRight(A.GUILD_RIGHT_HIRE_TAX_COLLECTOR) || t.hasRight(A.GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR) || t.hasRight(A.GUILD_RIGHT_COLLECT);
            i || e.tabs.openTab("members", null, {
                forceOpen: !0
            }), e.tabs.toggleTabAvailability("perceptors", i)
        })
    }, n.prototype._resetTabs = function() {
        null !== this.openedTabId && (this.openedTabId = null, this.tabs.close()), this._updateTabNotification(!0)
    }, n.prototype._updateTabNotification = function(e) {
        var t = window.gui.playerData.guild.current,
            i = !e && Boolean(t.abandonnedPaddock);
        this.tabs.toggleTabNotification("paddocks", i)
    }, n.prototype._updateGuildCreationData = function() {
        var e = new _(1e3 * window.gui.playerData.guild.current.creationDate)
            .getServerDate()
            .toString(!1);
        this.creationDateValue.setText(e.date)
    }, n.prototype._updateEmblemLogoAndWindowTitle = function() {
        var e = window.gui.playerData.guild.current,
            t = e.guildEmblem,
            i = g.getWindow("social"),
            n = a("ui.common.guild") + " - " + e.guildName;
        window.gui.playerData.isAbleToSeeId() && (n += " (" + e.guildId + ")"), i.setTitle(n), this.level.setText(a("ui.common.rank", e.level)), this.levelBar.setValue(e.experiencePercentage), this.membersValue.setText(e.nbConnectedMembers + " / " + e.nbMembers), this._updateGuildCreationData(), this.emblem.setValue(t, !0)
    }
}
