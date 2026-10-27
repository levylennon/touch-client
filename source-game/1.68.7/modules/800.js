function(e, t, i) {
    function n() {
        a.call(this), this.current = null
    }
    var o = i(537),
        a = i(59),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(801),
        l = i(52),
        d = 25;
    s(n, a), e.exports = n, n.prototype.connect = function() {
        this.current = null
    }, n.prototype.hasAlliance = function() {
        return null !== this.current
    }, n.prototype.isBoss = function() {
        if (!this.current || !this.current.guilds.length) return !1;
        var e = this.current.guilds[0],
            t = window.gui.playerData.guild;
        return e.guildId === t.current.guildId && t.isBoss()
    }, n.prototype.isGuildOnSameAlliance = function(e) {
        if (!this.hasAlliance()) return !1;
        for (var t = 0; t < this.current.guilds.length; t++)
            if (this.current.guilds[t].guildId === e) return !0;
        return !1
    }, n.prototype.getPrismBonusPercent = function(e) {
        if (!this.hasAlliance()) return 0;
        var t = Object.keys(this.current.prisms);
        return t.indexOf(e.toString()) === -1 ? 0 : d
    }, n.prototype.initialize = function(e) {
        var t = this;
        e.on("AllianceMembershipMessage", function(e) {
            t.current ? t.current.setInfo(e.allianceInfo) : t.current = o.createAlliance(e.allianceInfo), t.current.enabled = e.enabled
        }), e.on("AllianceJoinedMessage", function(i) {
            t.current = o.createAlliance(i.allianceInfo), t.current.enabled = i.enabled, e.chat.logMsg(r("ui.alliance.joinAllianceMessage", [i.allianceInfo.allianceName])), t.emit("allianceJoined")
        }), e.on("AllianceGuildLeavingMessage", function(e) {
            for (var i = t.current.guilds, n = 0, o = i.length; n < o; n += 1)
                if (i[n].guildId === e.guildId) return i.splice(n, 1), void t.emit("guildLeft", e.guildId)
        }), e.on("AllianceLeftMessage", function() {
            t.current = null, t.emit("allianceLeft")
        }), e.on("AllianceInsiderInfoMessage", function(e) {
            var i = e.allianceInfos;
            i.guilds = e.guilds, i.prisms = e.prisms, t.current ? t.current.setInfo(i) : t.current = o.createAlliance(i), t.emit("allianceUpdated", t.current)
        }), e.on("AllianceInvitationStateRecruterMessage", function(t) {
            return t.invitationState !== c.SOCIAL_GROUP_INVITATION_SENT ? l.close("cancel") : void e.openCancelPopup({
                title: r("ui.common.invitation"),
                message: r("ui.craft.waitForCraftClient", t.recrutedName),
                cb: function() {
                    window.dofus.sendMessage("AllianceInvitationAnswerMessage", {
                        accept: !1
                    })
                }
            })
        }), e.on("AllianceInvitationStateRecrutedMessage", function(e) {
            if (e.invitationState === c.SOCIAL_GROUP_INVITATION_CANCELED) return l.close("confirm")
        }), e.on("AllianceInvitedMessage", function(e) {
            window.gui.openConfirmPopup({
                title: r("ui.common.invitation"),
                message: r("ui.alliance.youAreInvited", e.recruterName, e.allianceInfo.allianceName),
                cb: function(e) {
                    window.dofus.sendMessage("GuildInvitationAnswerMessage", {
                        accept: e
                    })
                }
            })
        }), e.on("PrismsListUpdateMessage", function(e) {
            if (t.current) {
                for (var i = e.prisms, n = [], o = [], a = t.current.prisms, r = 0, s = i.length; r < s; r += 1) {
                    var c = i[r];
                    "PrismGeolocalizedInformation" === c._type && "AllianceInsiderPrismInformation" === c.prism._type ? (c.prism.alliance = t.current, a[c.subAreaId] = c, n.push(c)) : a[c.subAreaId] && (delete a[c.subAreaId], o.push(c.subAreaId))
                }
                n.length && t.emit("prismUpdatedList", n), o.length && t.emit("prismDeletedList", o)
            }
        })
    }
}
