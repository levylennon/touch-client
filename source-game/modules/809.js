function(e, t, i) {
    function n() {
        l.call(this), this._reset()
    }
    var o = i(504),
        a = i(105),
        r = i(527),
        s = i(520),
        c = i(757),
        l = i(59),
        d = i(17)
        .getText,
        u = i(16),
        p = i(56)
        .inherits,
        h = i(801),
        f = i(810),
        b = i(52),
        m = i(545),
        M = i(811),
        g = i(505),
        _ = i(125),
        A = 1,
        O = {
            allPagesAllowed: !0
        };
    p(n, l), e.exports = n, n.prototype._reset = function() {
        this.current = null, this._requestedSocialInfoMap = {}, this._awaitedSocialInfoMap = {}
    }, n.prototype.initialize = function(e) {
        this._setupListeners(e)
    }, n.prototype.disconnect = function() {
        this._reset()
    }, n.prototype.hasGuild = function() {
        return null !== this.current
    }, n.prototype.checkRight = function(e, t) {
        return (s.GUILD_RIGHT_ALMOST_BOSS & t) > 0 || (e & t) > 0
    }, n.prototype.getGuildMemberInfo = function(e) {
        if (this.hasGuild()) return this.current.members[e]
    }, n.prototype.hasRight = function(e) {
        return !!this.isBoss() || this.checkRight(e, this.current.memberRights)
    }, n.prototype.isBoss = function() {
        return this.current.leaderId === window.gui.playerData.id || this.checkRight(s.GUILD_RIGHT_BOSS, this.current.memberRights)
    }, n.prototype.isAMember = function(e) {
        return this.current.members.hasOwnProperty(e)
    }, n.prototype.isOnSameGuild = function(e) {
        return !!this.hasGuild() && this.current.guildId === e
    }, n.prototype._initPerceptors = function() {
        return this.current.perceptors = {
            nbcollectorMax: 0,
            informationsOrderList: [],
            perceptorsMap: {}
        }, this.current.perceptors
    }, n.prototype.getPerceptors = function() {
        var e = this.current.perceptors;
        return e || (e = this._initPerceptors()), e
    }, n.prototype.getPerceptor = function(e) {
        var t = this.getPerceptors();
        return t.perceptorsMap[e]
    }, n.prototype._setupListeners = function(e) {
        var t = this;
        e.on("GuildMembershipMessage", function(e) {
            t.current && t.current.guildId === e.guildInfo.guildId || (t.current = r.createGuild(e.guildInfo)), t.current.enabled = e.enabled, t.current.memberRights = e.memberRights, t.requestSocialInfo(f.SOCIAL_INFO_GUILD_MOTD, !0)
        }), e.on("GuildJoinedMessage", function(i) {
            t.current = r.createGuild(i.guildInfo), t.current.enabled = i.enabled, t.current.memberRights = i.memberRights, _.trackJoinGuild(), e.chat.logMsg(d("ui.guild.JoinGuildMessage", [i.guildInfo.guildName])), t.emit("guildJoin")
        }), a.on("GuildInformationsGeneralMessage", function(i) {
            if (e.isConnected) {
                var n = t.current;
                n.level = i.level, n.creationDate = i.creationDate, n.abandonnedPaddock = i.abandonnedPaddock, n.experience = i.experience, n.expNextLevelFloor = i.expNextLevelFloor, n.experiencePercentage = (i.experience - i.expLevelFloor) / (i.expNextLevelFloor - i.expLevelFloor), t.emit("GuildGeneralInformationUpdate")
            }
        }), e.on("GuildInformationsMembersMessage", function(i) {
            if (e.isConnected) {
                for (var n = t.current, o = 0, a = {}, r = i.members.length, s = 0, c = 0; c < r; c++) {
                    var l = i.members[c];
                    s += l.level, l.rank === A && (n.leaderId = l.id), l.connected && (o += 1), a[l.id] = l
                }
                n.members = a, n.averageMemberLevel = Math.floor(s / r), n.nbMembers = r, n.nbConnectedMembers = o, t.emit("guildMemberCountUpdate"), t.emit("guildMember", n.getMembersByRank())
            }
        }), a.on("GuildInformationsMemberUpdateMessage", function(e) {
            var i = t.current,
                n = e.member;
            i.members[n.id] = n, n.rank === A && (i.leaderId = n.id), t.emit("guildMember", i.getMembersByRank(), n)
        }), e.on("GuildMemberLeavingMessage", function(e) {
            var i = t.current,
                n = i.members;
            delete n[e.memberId];
            var o = 0,
                a = 0;
            for (var r in n) {
                var s = n[r];
                s.connected && (o += 1), a += 1
            }
            i.nbMembers = a, i.nbConnectedMembers = o, t.emit("guildMemberCountUpdate"), t.emit("guildMember", t.current.getMembersByRank())
        }), e.on("GuildMemberOnlineStatusMessage", function(e) {
            var i = t.current,
                n = i.members[e.memberId];
            n && (e.online ? (n.connected = 1, n.status.statusId = m.PLAYER_STATUS_AVAILABLE, i.nbConnectedMembers++) : (n.connected = 0, n.status.statusId = m.PLAYER_STATUS_OFFLINE, i.nbConnectedMembers--), t.emit("guildMemberCountUpdate"), t.emit("guildMember", i.getMembersByRank(), n))
        }), a.on("PlayerStatusUpdateMessage", function(e) {
            if (t.current) {
                var i = t.current.members[e.playerId];
                i && (i.status = e.status, t.emit("guildMemberStatusUpdate", i))
            }
        }), e.on("GuildMemberWarnOnConnectionStateMessage", function(e) {
            t.current && (t.current.warnMemberOnConnectionState = e.enable)
        }), e.on("GuildLeftMessage", function() {
            t.current = null, t.emit("guildLeft")
        }), e.on("GuildInvitationStateRecruterMessage", function(t) {
            return t.invitationState === h.SOCIAL_GROUP_INVITATION_OK && window.dofus.sendMessage("GuildGetInformationsMessage", {
                infoType: c.INFO_MEMBERS
            }), t.invitationState !== h.SOCIAL_GROUP_INVITATION_SENT ? b.close("cancel") : void e.openCancelPopup({
                title: d("ui.common.invitation"),
                message: d("ui.craft.waitForCraftClient", t.recrutedName),
                cb: function() {
                    window.dofus.sendMessage("GuildInvitationAnswerMessage", {
                        accept: !1
                    })
                }
            })
        }), e.on("GuildInvitationStateRecrutedMessage", function(e) {
            if (e.invitationState === h.SOCIAL_GROUP_INVITATION_CANCELED) return b.close("confirm")
        }), e.on("GuildInvitedMessage", function(e) {
            window.gui.openConfirmPopup({
                title: d("ui.common.invitation"),
                message: d("ui.social.aInvitYouInGuild", e.recruterName, e.guildInfo.guildName),
                cb: function(e) {
                    window.dofus.sendMessage("GuildInvitationAnswerMessage", {
                        accept: e
                    })
                }
            })
        }), e.on("GuildInformationsPaddocksMessage", function(e) {
            t.current && (t.current.paddocks = e.paddocksInformations || [], t.emit("guildPaddockUpdate"))
        }), e.on("GuildPaddockBoughtMessage", function(e) {
            t.current && (t.current.paddocks || (t.current.paddocks = []), t.current.paddocks.push(e.paddockInfo), t.emit("guildPaddockBought", e.paddockInfo))
        }), e.on("GuildPaddockRemovedMessage", function(e) {
            if (t.current && t.current.paddocks) {
                var i = e.paddockId;
                u.removeObjectInArrayById(t.current.paddocks, "paddockId", i) && t.emit("guildPaddockRemoved", i)
            }
        }), e.on("GuildHousesInformationMessage", function(e) {
            t.current && (t.current.houses = e.housesInformations || [], t.emit("guildHouseUpdateAll"))
        }), e.on("GuildHouseUpdateInformationMessage", function(e) {
            t.current && (t.current.houses || (t.current.houses = []), t.current.houses.push(e.housesInformations), t.emit("guildHouseUpdateInfo", e.housesInformations))
        }), e.on("GuildHouseRemoveMessage", function(e) {
            if (t.current && t.current.houses) {
                var i = e.houseId;
                u.removeObjectInArrayById(t.current.houses, "houseId", i) && t.emit("guildHouseRemoved", i)
            }
        }), e.on("MoodSmileyUpdateMessage", function(e) {
            var i = t.current && t.current.members[e.playerId];
            i && (i.moodSmileyId = e.smileyId, t.emit("guildMember", t.current.getMembersByRank()))
        }), e.on("MoodSmileyResultMessage", function(e) {
            if (e.resultCode === M.MOOD_OK) {
                var i = t.current && t.current.members[window.gui.playerData.id];
                i && (i.moodSmileyId = e.smileyId, t.emit("guildMember", t.current.getMembersByRank()))
            }
        }), a.on("SocialInfoDataMessage", function(e) {
            t._receiveSocialInfo(e.infoTypes, e.contents)
        })
    }, n.prototype.requestSocialInfo = function(e, t) {
        this._requestedSocialInfoMap[e] = this._requestedSocialInfoMap[e] || Boolean(t), this._socialInfoRequestTimeout || (this._socialInfoRequestTimeout = window.setTimeout(function(e) {
            e._socialInfoRequestTimeout = null;
            var t = [];
            for (var i in e._requestedSocialInfoMap) e._requestedSocialInfoMap.hasOwnProperty(i) && (t.push(i), e._awaitedSocialInfoMap[i] = e._awaitedSocialInfoMap[i] || e._requestedSocialInfoMap[i]);
            e._requestedSocialInfoMap = {}, window.dofus.sendMessage("SocialInfoRequestMessage", {
                infoTypes: t
            })
        }, 0, this))
    }, n.prototype._receiveSocialInfo = function(e, t) {
        for (var i = 0; i < e.length; i++) {
            var n = e[i],
                a = t[i],
                r = this._awaitedSocialInfoMap[n];
            if (delete this._awaitedSocialInfoMap[n], (void 0 === r || r) && n === f.SOCIAL_INFO_GUILD_MOTD && a.value) {
                var s = g.decode(a.value, O);
                s = u.encodeSpecialChars(s);
                var c = d("tablet.social.motd") + d("ui.common.colon") + s;
                window.gui.chat.logMsg(c, o.CHANNEL_GUILD)
            }
            this.emit("socialInfoUpdated", n, a)
        }
    }
}
