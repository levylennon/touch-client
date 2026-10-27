function(e, t, i) {
    function n(e) {
        y.call(this, "div", {
            className: "ContextualMenuPlayerContent"
        });
        var t = this.createChild("div");
        this.banner = e, this._setupGroup1(t), this._setupGroup2(t), this._setupGroup3(t), this._setupGroup4(t), this._setupGroup5(t), this._setupGroup6(t), this._setupHelper(t), this._setupAdmin(t)
    }

    function o(e) {
        return e === v.AvA_ENABLED_AGGRESSABLE || e === v.AvA_PREQUALIFIED_AGGRESSABLE
    }

    function a(e) {
        return e ? 0 !== (e.capabilities & B) : (console.warn("isAggressionAllowedOnMap called before we know mapPosition"), !1)
    }

    function r(e, t, i) {
        var n = window.gui.playerData;
        if (!a(n.position.mapPosition)) return R;
        if (n.isMutant()) return n.getRestrictions()
            .cantAttack || i ? q : x;
        if (i) return x;
        var r = 1 === window.gui.serversData.settings.serverGameType,
            s = n.alliance.current,
            c = T.entities.prism[n.position.subAreaId],
            l = c && c.prism,
            d = l && l.mapId !== -1,
            u = n.characters.mainCharacter.characteristics.alignmentInfos,
            h = o(u.aggressable),
            f = !1;
        if (d) {
            var m = l.state === O.PRISM_STATE_VULNERABLE;
            if (r) {
                if (s && !h && (l.alliance.allianceId !== s.allianceId || u.aggressable !== v.AvA_ENABLED_NON_AGGRESSABLE)) return R
            } else if (m) {
                if (s && (!h || !t)) return R
            } else f = !0;
            if (!f) {
                if (!s) return R;
                if (t && (r || m)) {
                    if (t.aggressable === v.AvA_DISQUALIFIED) return q;
                    if (!o(t.aggressable) || s.allianceId === t.allianceInformations.allianceId || r && l.alliance.allianceId === t.allianceInformations.allianceId && !m) return R
                }
            }
            b = !0
        }
        if (r) {
            if (!d) {
                if (s && t) {
                    if (s.allianceId === t.allianceInformations.allianceId || !h || !o(t.aggressable)) return R
                } else if (!s || h) return R;
                b = !0
            }
        } else if (!d || f) {
            if (!u || !e || u.aggressable !== v.PvP_ENABLED_AGGRESSABLE || e.alignmentSide <= w.ALIGNMENT_NEUTRAL || 0 === e.alignmentGrade || u.alignmentSide !== w.ALIGNMENT_MERCENARY && u.alignmentSide === e.alignmentSide || u.alignmentSide === w.ALIGNMENT_NEUTRAL) return R;
            b = !1
        }
        var M = n.characterBaseInformations.level;
        if (r && M < 50) return q;
        var g = b ? 100 : 50;
        return M + g < e.characterPower - p ? R : x
    }
    var s, c, l, d, u, p, h, f, b, m = i(56)
        .inherits,
        M = i(17)
        .getText,
        g = i(86),
        _ = i(520),
        A = i(521),
        O = i(522),
        v = i(523),
        y = i(72),
        z = i(52),
        w = i(440),
        T = i(524),
        C = i(103),
        I = i(21),
        S = I.DofusDate,
        E = i(504),
        L = i(466),
        N = !1,
        R = -1,
        q = 0,
        x = 1,
        B = 2;
    m(n, y), e.exports = n, n.prototype.updateContent = function(e) {
        function t(e) {
            switch (e._type) {
                case "HumanOptionAlliance":
                    r = e;
                    break;
                case "HumanOptionGuild":
                    a = e.guildInformations, o = e.guildInformations.guildId
            }
        }
        u = e.accountId, p = e.playerId, h = e.playerName, f = e.cellId;
        var i = e.humanoidInfoOptions,
            n = e.alignmentInfos,
            o = e.guildId;
        this.admin.hide(), this.muteLong.hide(), this.muteShort.hide();
        var a = null,
            r = null;
        if (this.targetPlayer = {
                id: p,
                name: h
            }, i)
            for (var b = 0, m = i.length; b < m; b += 1) t(i[b]);
        var M = {
            name: h,
            guild: a,
            accountId: u,
            playerId: p,
            guildId: o
        };
        null !== r && (M.alliance = r.allianceInformations), this.banner.setContent(M);
        var g = window.gui.playerData.partyData;
        s = g.getClassicalParty(), c = g.getArenaParty(), l = s ? s.getPartyId() : null, d = c ? c.getPartyId() : null, this.toggleButtonsAvailability(e, n, a, r);
        var _ = window.gui.playerData.adminMenu.getAdminMenuId();
        window.gui.playerData.isModeratorOrMore() && null !== _ && this.admin.show();
        var A = window.gui.playerData.hasRight(L.SHOW_MUTE_MENU);
        A && parseInt(e.channel, 10) === E.CHANNEL_NOOB && (this.muteLong.show(), this.muteShort.show())
    }, n.prototype.hideButtons = function() {
        this.kickFighter.hide(), this.swapPosition.hide(), this.challenge.hide(), this.assault.hide(), this.exchangeProp.hide(), this.inviteParty.hide(), this.inviteArena.hide(), this.inviteGuild.hide(), this.inviteAlliance.hide(), this.addFriend.hide(), this.addEnemy.hide(), this.ignoreSession.hide(), this.stopIgnoreSession.hide(), this.partyTitle.hide(), this.follow.hide(), this.stopFollowing.hide(), this.kickPlayer.hide(), this.appointLeader.hide(), this.kickArenaPlayer.hide(), this.appointArenaLeader.hide(), this.allFollow.hide(), this.allStopFollow.hide(), this.cancelPartyInvitation.hide(), this.leaveParty.hide(), this.arenaTitle.hide(), this.cancelArenaInvitation.hide(), this.leaveArena.hide(), this.kickOutFromHome.hide(), this.guildInformations.hide(), this.allianceInformations.hide(), this.join.hide(), this.spouseJoin.hide()
    }, n.prototype.toggleButtonsAvailability = function(e, t, i, n) {
        e = e || {};
        var o = window.gui.playerData,
            a = o.partyData,
            l = o.jobs,
            d = o.socialData,
            h = !o.isAlive(),
            b = e.isMutant;
        this.hideButtons(), window.gui.fightManager.isInFightPreparation() && o.id !== p && (o.isFightLeader && this.kickFighter.show(), this.swapPosition.show()), s && s.getGuest(p) ? (this.partyTitle.show(), this.cancelPartyInvitation.show()) : s && s.getMember(p) || this.inviteParty.show(), c && c.getGuest(p) ? (this.arenaTitle.show(), this.cancelArenaInvitation.show()) : c && c.getMember(p) || this.inviteArena.show(), u && (d.friendsList[u] || d.enemiesList[u]) || (this.addFriend.show(), this.addEnemy.show()), d.isIgnored(u) ? this.stopIgnoreSession.show() : this.ignoreSession.show(), s && s.getMember(p) && (this.partyTitle.show(), a.getFollowedCharacterId() === p ? this.stopFollowing.show() : this.follow.show(), s.getLeaderId() === o.id && (this.kickPlayer.show(), this.appointLeader.show(), N && a.getFollowedCharacterId() === p ? this.allStopFollow.show() : this.allFollow.show())), this.kickOutFromHome.toggleDisplay(Boolean(window.gui.playerData.position.isInMyHouse)), c && c.getMember(p) && c.getLeaderId() === o.id && (this.arenaTitle.show(), this.kickArenaPlayer.show(), this.appointArenaLeader.show());
        var m = d.spouse && d.spouse.spouseId === p;
        if (C.isRoleplayMode) {
            var M = o.getRestrictions();
            if (M.cantExchange || (h ? this.exchangeProp.disable() : this.exchangeProp.enable(), this.exchangeProp.show()), M.cantChallenge || (h ? this.challenge.disable() : this.challenge.enable(), this.challenge.show()), t) {
                var g = r(t, n, b, p);
                g !== q && g !== x || (g === q || h ? this.assault.disable() : this.assault.enable(), this.assault.show())
            }!f && m ? this.spouseJoin.show() : o.position.isGlobalSubArea() && this.join.show()
        }
        var A = o.guild;
        !e.hasGuild && !i && A.current && A.hasRight(_.GUILD_RIGHT_INVITE_NEW_MEMBERS) && this.inviteGuild.show();
        var O = o.alliance;
        !e.hasGuild && p && i && !n && O.current && O.isBoss() && this.inviteAlliance.show(), i && (this.guildId = i.guildId, this.guildInformations.show()), n && (this.allianceId = n.allianceInformations.allianceId, this.allianceInformations.show()), this._updateMultiCraftMenu(e, o, l)
    }, n.prototype._setupGroup1 = function(e) {
        var t = this,
            i = e.createChild("div", {
                className: "group"
            });
        this.kickFighter = i.appendChild(new g({
            text: M("ui.fight.kick"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("GameContextKickMessage", {
                targetId: p
            }), t.emit("close")
        })), this.swapPosition = i.appendChild(new g({
            text: M("ui.fight.swapPosition"),
            className: "cmButton"
        }, function() {
            var e = window.actorManager.getActor(p);
            e && window.dofus.sendMessage("GameFightPlacementSwapPositionsRequestMessage", {
                requestedId: p,
                cellId: e.cellId
            }), t.emit("close")
        }))
    }, n.prototype._setupGroup2 = function(e) {
        var t = this,
            i = e.createChild("div", {
                className: "group"
            });
        this.privateMessage = i.appendChild(new g({
            text: M("ui.common.wisperMessage"),
            className: "cmButton"
        }, function() {
            window.gui.chat.startPrivateMessage(h), t.emit("close")
        })), this.challenge = i.appendChild(new g({
            text: M("ui.common.challenge"),
            className: "cmButton"
        }, function() {
            window.gui.playerData.fightRequests.requestChallenge({
                targetId: p,
                targetName: h,
                targetCellId: f
            }), t.emit("close")
        })), this.assault = i.appendChild(new g({
            text: M("ui.pvp.assault"),
            className: "cmButton"
        }, function() {
            window.gui.playerData.fightRequests.requestAssault({
                targetId: p,
                targetName: h,
                targetCellId: f
            }, b), t.emit("close")
        })), this.join = i.appendChild(new g({
            text: M("ui.common.join"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("FriendJoinRequestMessage", {
                name: h
            }), t.emit("close")
        })), this.spouseJoin = i.appendChild(new g({
            text: M("ui.common.join"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("FriendSpouseJoinRequestMessage"), t.emit("close")
        })), this.kickOutFromHome = i.appendChild(new g({
            text: M("ui.common.kickOff"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("HouseKickRequestMessage", {
                id: p
            }), t.emit("close")
        })), i.appendChild(new g({
            text: M("ui.common.informations"),
            className: ["cmButton"]
        }, function() {
            var e = new S(I.now())
                .getServerDate(!1)
                .toString(!1),
                i = e.date + " - " + e.time;
            window.gui.chat.logMsg(i), window.dofus.sendMessage("BasicWhoIsRequestMessage", {
                search: h,
                verbose: !0
            }), t.emit("close")
        })), this.guildInformations = i.appendChild(new g({
            text: M("ui.guild.guildInformations"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("GuildFactsRequestMessage", {
                guildId: t.guildId
            }), t.emit("close")
        })), this.allianceInformations = i.appendChild(new g({
            text: M("ui.alliance.allianceInformations"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("AllianceFactsRequestMessage", {
                allianceId: t.allianceId
            }), t.emit("close")
        }))
    }, n.prototype._setupGroup3 = function(e) {
        var t = this,
            i = e.createChild("div", {
                className: "group"
            });
        this.exchangeProp = i.appendChild(new g({
            text: M("ui.common.exchangeProp"),
            className: "cmButton"
        }, function() {
            t.emit("close"), z.getWindow("tradeWithPlayer")
                .prepareMakeExchange({
                    targetId: p,
                    targetName: h
                }), window.dofus.sendMessage("ExchangePlayerRequestMessage", {
                    exchangeType: 1,
                    target: p
                })
        })), this.inviteParty = i.appendChild(new g({
            text: M("ui.party.addToParty"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyInvitationRequestMessage", {
                name: h
            }), t.emit("close")
        })), this.inviteArena = i.appendChild(new g({
            text: M("ui.party.addToArena"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyInvitationArenaRequestMessage", {
                name: h
            }), t.emit("close")
        })), this.inviteGuild = i.appendChild(new g({
            text: M("ui.social.inviteInGuild"),
            className: "cmButton"
        }, function() {
            p ? window.dofus.sendMessage("GuildInvitationMessage", {
                targetId: p
            }) : window.dofus.sendMessage("GuildInvitationByNameMessage", {
                name: h
            }), t.emit("close")
        })), this.inviteAlliance = i.appendChild(new g({
            text: M("ui.social.inviteInAlliance"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("AllianceInvitationMessage", {
                targetId: p
            }), t.emit("close")
        })), this._multiCraftMenu = i.createChild("div", {
            className: "multiCraftMenu"
        })
    }, n.prototype._setupGroup4 = function(e) {
        var t = this,
            i = e.createChild("div");
        this.addFriend = i.appendChild(new g({
            text: M("ui.social.addToFriends"),
            className: "cmButton"
        }, function() {
            t.emit("close"), window.gui.openConfirmPopup({
                title: M("ui.popup.warning"),
                message: M("ui.social.confirmAddFriend", h),
                cb: function(e) {
                    e && window.dofus.sendMessage("FriendAddRequestMessage", {
                        name: h
                    })
                }
            })
        })), this.addEnemy = i.appendChild(new g({
            text: M("ui.social.addToEnemy"),
            className: "cmButton"
        }, function() {
            t.emit("close"), window.gui.openConfirmPopup({
                title: M("ui.popup.warning"),
                message: M("ui.social.confirmAddEnemy", h),
                cb: function(e) {
                    e && window.dofus.sendMessage("IgnoredAddRequestMessage", {
                        name: h,
                        session: !1
                    })
                }
            })
        })), this.ignoreSession = i.appendChild(new g({
            text: M("ui.social.blackListTemporarly"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("IgnoredAddRequestMessage", {
                name: h,
                session: !0
            }), t.emit("close")
        })), this.stopIgnoreSession = i.appendChild(new g({
            text: M("ui.social.blackListRemove"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("IgnoredDeleteRequestMessage", {
                accountId: u,
                session: !0
            }), t.emit("close")
        }))
    }, n.prototype._setupGroup5 = function(e) {
        var t = this,
            i = e.createChild("div");
        this.partyTitle = i.createChild("div", {
            text: M("ui.common.party"),
            className: "title"
        }), this.follow = i.appendChild(new g({
            text: M("ui.common.follow"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyFollowMemberRequestMessage", {
                partyId: l,
                playerId: p
            }), t.emit("close")
        })), this.stopFollowing = i.appendChild(new g({
            text: M("ui.party.stopFollowing"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyStopFollowRequestMessage", {
                partyId: l
            }), t.emit("close")
        })), this.kickPlayer = i.appendChild(new g({
            text: M("ui.party.kickPlayer"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyKickRequestMessage", {
                partyId: l,
                playerId: p
            }), t.emit("close")
        })), this.appointLeader = i.appendChild(new g({
            text: M("ui.party.promotePartyLeader"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyAbdicateThroneMessage", {
                partyId: l,
                playerId: p
            }), t.emit("close")
        })), this.allFollow = i.appendChild(new g({
            text: M("ui.party.followHimAll"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyFollowThisMemberRequestMessage", {
                partyId: l,
                playerId: p,
                enabled: !0
            }), N = !0, t.emit("close")
        })), this.allStopFollow = i.appendChild(new g({
            text: M("ui.party.stopAllFollowingHim"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyFollowThisMemberRequestMessage", {
                partyId: l,
                playerId: p,
                enabled: !1
            }), N = !1, t.emit("close")
        })), this.cancelPartyInvitation = i.appendChild(new g({
            text: M("ui.party.cancelInvitation"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyCancelInvitationMessage", {
                partyId: l,
                guestId: p
            }), t.emit("close")
        })), this.leaveParty = i.appendChild(new g({
            text: M("ui.party.leaveParty"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyLeaveRequestMessage", {
                partyId: l
            }), t.emit("close")
        }))
    }, n.prototype._setupGroup6 = function(e) {
        var t = this,
            i = e.createChild("div", {
                className: "group"
            });
        this.arenaTitle = i.createChild("div", {
            text: M("ui.common.koliseum"),
            className: "title"
        }), this.cancelArenaInvitation = i.appendChild(new g({
            text: M("ui.party.cancelInvitation"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyCancelInvitationMessage", {
                partyId: d,
                guestId: p
            }), t.emit("close")
        })), this.kickArenaPlayer = i.appendChild(new g({
            text: M("ui.party.kickPlayer"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyKickRequestMessage", {
                partyId: d,
                playerId: p
            }), t.emit("close")
        })), this.appointArenaLeader = i.appendChild(new g({
            text: M("ui.party.promotePartyLeader"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyAbdicateThroneMessage", {
                partyId: d,
                playerId: p
            }), t.emit("close")
        })), this.leaveArena = i.appendChild(new g({
            text: M("ui.party.arenaQuit"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("PartyLeaveRequestMessage", {
                partyId: d
            }), t.emit("close")
        }))
    }, n.prototype._updateMultiCraftMenu = function(e, t, i) {
        function n(e, t, i) {
            var n = o.appendChild(new g({
                text: e,
                className: "cmButton"
            }, function() {
                window.dofus.sendMessage("ExchangePlayerMultiCraftRequestMessage", {
                    exchangeType: t,
                    target: p,
                    skillId: i
                }), a.emit("close")
            }));
            s ? n.disable() : n.enable()
        }
        var o = this._multiCraftMenu;
        if (o.clearContent(), !C.isFightMode) {
            var a = this,
                r = t.id,
                s = !t.isAlive();
            if (e.isInteractiveRequired && r !== e.playerId) {
                var c, l = window.isoEngine.mapRenderer.interactiveElements,
                    d = i.getUsableSkillsInMap(r, l, !0),
                    u = M("ui.common.inviteTo");
                for (var h in d) {
                    var f = d[h];
                    c = u + " " + f.nameId, n(c, A.MULTICRAFT_CRAFTER, f.id)
                }
                var b = i.getUsableSkillsInMap(p, l, !0),
                    m = M("ui.common.askTo");
                for (var _ in b) {
                    var O = b[_];
                    c = m + " " + O.nameId, n(c, A.MULTICRAFT_CUSTOMER, O.id)
                }
            }
        }
    }, n.prototype._setupHelper = function(e) {
        var t = this;
        t.muteShort = e.appendChild(new g({
            text: M("tablet.chat.mute.short"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("AdminQuietCommandMessage", {
                content: "mutenoob " + t.targetPlayer.name + " short"
            }), t.emit("close")
        })), t.muteLong = e.appendChild(new g({
            text: M("tablet.chat.mute.long"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("AdminQuietCommandMessage", {
                content: "mutenoob " + t.targetPlayer.name + " long"
            }), t.emit("close")
        }))
    }, n.prototype._setupAdmin = function(e) {
        var t = this;
        t.admin = e.appendChild(new g({
            text: "Admin",
            className: "cmButton"
        }, function() {
            window.gui.closeContextualMenu(), window.gui.openContextualMenuAround("admin", t.admin, t.targetPlayer), t.emit("close")
        }))
    }
}
