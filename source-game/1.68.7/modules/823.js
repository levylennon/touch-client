function(e, t, i) {
    function n() {
        a.call(this), this._pastParties = null, this._dangerSetting = !0, this._reset()
    }

    function o(e, t, i, n) {
        this._partyId = t, this._partyType = e, this._leaderId = i, this._myCharacterId = n, this._timeWhenDisconnected = 0, this._inviterName = null, this._members = {}, this._guests = {}, this._pastMembers = {}
    }
    var a = i(59)
        .EventEmitter,
        r = i(56)
        .inherits,
        s = i(17)
        .getText,
        c = i(824),
        l = i(516),
        d = i(787),
        u = i(112),
        p = i(825),
        h = i(826),
        f = i(508),
        b = i(60),
        m = l.PARTY_TYPE_CLASSICAL,
        M = l.PARTY_TYPE_ARENA,
        g = l.PARTY_TYPE_DUNGEON,
        _ = l.PARTY_TYPE_RAID,
        A = 3e5,
        O = 1;
    r(n, a), e.exports = n, n.NUM_SLOTS_ARENA = u.MAX_MEMBERS_PER_ARENA_PARTY, n.NUM_SLOTS_CLASSIC = u.MAX_MEMBERS_PER_PARTY, n.prototype._reset = function() {
        this._partyFromId = {}, this._dangerSetting = !0, this.arenaStats = {}, this.arenaStats[f.PVP_1VS1] = {
            rank: 0,
            score: 0,
            position: 0,
            victoryCount: 0,
            arenaFightCount: 0,
            hasClaimedDailyReward: !1,
            isFiltered: !1,
            filtered: {}
        }, this.arenaStats[f.PVP_3VS3] = {
            rank: 0,
            score: 0,
            position: 0,
            victoryCount: 0,
            hasClaimedDailyReward: !1,
            isFiltered: !1,
            filtered: {}
        }, this.arenaBonus = {
            bonus1v1: !1,
            bonus3v3: !1
        }, this.arenaRegistered = !1, this.arenaStep = p.ARENA_STEP_UNREGISTER, this._followedCharacterId = 0, this._partyFights = {}
    }, n.prototype.connect = function() {
        null === this._pastParties && this._reloadRecentParties(), this._tryToRejoin(window.gui.playerData.id)
    }, n.prototype.disconnect = function() {
        for (var e in this._partyFromId) this._archiveParty(this._partyFromId[e]);
        this._reset()
    }, n.prototype.getDangerDisplay = function() {
        return this._dangerSetting
    }, n.prototype.toggleDangerDisplay = function() {
        this._dangerSetting = !this._dangerSetting
    }, o.unserializeFrom = function(e) {
        var t = new o(e._partyType, e._partyId, e._leaderId, e._myCharacterId);
        return t._timeWhenDisconnected = e._timeWhenDisconnected, t._members = e._members, t._guests = e._guests, t._pastMembers = e._pastMembers, t
    }, o.prototype._purgeExpiredPastMembers = function() {
        for (var e in this._pastMembers) {
            var t = this._pastMembers[e];
            Date.now() - t._timeWhenLeft > A && delete this._pastMembers[e]
        }
    }, o.prototype.getPartyId = function() {
        return this._partyId
    }, o.prototype.getLeaderId = function() {
        return this._leaderId
    }, o.prototype.getMember = function(e) {
        return this._members[e]
    }, o.prototype.getMembers = function() {
        return this._members
    }, o.prototype.getGuest = function(e) {
        return this._guests[e]
    }, o.prototype.getSlotCount = function() {
        return this._partyType === M ? n.NUM_SLOTS_ARENA : n.NUM_SLOTS_CLASSIC
    }, o.prototype.getFreeSlotCount = function() {
        return this.getSlotCount() - this.getMemberCount() - this.getGuestCount()
    }, o.prototype.getGuestCount = function() {
        return Object.keys(this._guests)
            .length
    }, o.prototype.getMemberCount = function() {
        return Object.keys(this._members)
            .length + 1
    }, o.prototype.getMembersTotalLevel = function() {
        var e = window.gui.playerData.characterBaseInformations.level;
        for (var t in this._members) this._members.hasOwnProperty(t) && (e += this._members[t].level);
        return e
    }, o.prototype.getMembersLevelAverage = function() {
        return this.getMembersTotalLevel() / this.getMemberCount()
    }, o.prototype._addMember = function(e, t, i) {
        e !== this._myCharacterId && (this._members[e] = {
            name: t,
            level: i
        }, this._pastMembers[e] && delete this._pastMembers[e])
    }, o.prototype._removeMember = function(e, t) {
        this._purgeExpiredPastMembers();
        var i = this._members[e];
        i && (t || (this._pastMembers[e] = i, i._timeWhenLeft = Date.now()), delete this._members[e])
    }, o.prototype._addGuest = function(e) {
        this._guests[e.guestId] = {
            hostId: e.hostId,
            guestName: e.name,
            guestId: e.guestId
        }
    }, o.prototype._removeGuest = function(e) {
        delete this._guests[e]
    }, n.prototype._joinParty = function(e, t, i, n, a) {
        var r = new o(e, t, a, window.gui.playerData.id);
        this._partyFromId[t] = r;
        for (var s = 0; s < i.length; s += 1) {
            var c = i[s];
            r._addMember(c.id, c.name, c.level)
        }
        for (s = 0; s < n.length; s++) r._addGuest(n[s]);
        e === M && this.emit("arenaJoined"), this._rememberRecentParties(O)
    }, n.prototype._leaveParty = function(e, t, i) {
        var n = this._partyFromId[e];
        n && (this.emit("playerLeavingParty", e, t), i && this._archiveParty(n), delete this._partyFromId[e], this.emit("playerLeftParty", e, t), this._rememberRecentParties())
    }, n.prototype._updatePartyLeader = function(e, t) {
        var i = this._partyFromId[e];
        i && (i._partyType === M && this.emit("arenaLeaderUpdate", t), i._leaderId = t, this.emit("partyLeaderUpdate", e, t))
    }, n.prototype._getPartyFromType = function(e) {
        for (var t in this._partyFromId) {
            var i = this._partyFromId[t];
            if (i._partyType === e) return i
        }
        return null
    }, n.prototype.getClassicalParty = function() {
        return this._getPartyFromType(m)
    }, n.prototype.getDungeonParty = function() {
        return this._getPartyFromType(g)
    }, n.prototype.getRaidParty = function() {
        return this._getPartyFromType(_)
    }, n.prototype.getArenaParty = function() {
        return this._getPartyFromType(M)
    }, n.prototype.getMemberName = function(e) {
        var t = window.gui.playerData;
        if (e === t.id) return t.characterBaseInformations.name;
        for (var i in this._partyFromId) {
            var n = this._partyFromId[i],
                o = n._members[e];
            if (o) return o.name
        }
        return "?"
    }, n.prototype._addPartyGuest = function(e, t) {
        var i = this._partyFromId[e];
        i && (i._addGuest(t), this.emit("partyNewGuest", e, t))
    }, n.prototype._removePartyGuest = function(e, t, i) {
        var n = this._partyFromId[e];
        n && (this.emit("partyGuestLeaving", e, t, i), n._removeGuest(t))
    }, n.prototype._addPartyMember = function(e, t) {
        var i = this._partyFromId[e];
        i && (i._removeGuest(t.id), i._addMember(t.id, t.name, t.level), this.emit("partyNewMember", e, t), this._rememberRecentParties())
    }, n.prototype._removePartyMember = function(e, t, i) {
        var n = this._partyFromId[e];
        n && (n._removeMember(t, Boolean(i)), this._rememberRecentParties(), this.emit("partyMemberLeaving", e, t, i), n._partyType === M && this.emit("arenaMemberLeaving", t))
    }, n.prototype.getGuestName = function(e, t) {
        var i = this._partyFromId[e];
        if (!i) return "?";
        var n = i._guests[t];
        return n ? n.guestName : "?"
    }, n.prototype._enrichGuestInfo = function(e) {
        e.isGuest = !0, e.level = "?", e.id = e.guestId, e.entityLook = e.guestLook
    }, n.prototype.getFollowedCharacterId = function() {
        return this._followedCharacterId
    }, n.prototype.initialize = function(e) {
        var t = this,
            i = window.dofus.connectionManager;
        i.on("PartyInvitationMessage", function(i) {
            t._handleRequestedInvitation(i.partyType, i.partyId, i.fromName) || e.party.showPartyInvitationQuestion(i.partyType, i.partyId, i.fromName)
        }), e.on("PartyInvitationDetailsMessage", function(e) {
            for (var i = 0; i < e.guests.length; i++) t._enrichGuestInfo(e.guests[i]);
            t.emit("partyInvitationDetails", e)
        }), e.on("PartyNewGuestMessage", function(e) {
            t._enrichGuestInfo(e.guest), t._addPartyGuest(e.partyId, e.guest)
        }), e.on("PartyNewMemberMessage", function(e) {
            t._addPartyMember(e.partyId, e.memberInformations)
        }), e.on("PartyUpdateMessage", function(e) {
            t.emit("partyUpdateMember", e.partyId, e.memberInformations)
        }), i.on("PartyDeletedMessage", function(e) {
            t._leaveParty(e.partyId, 0, !0)
        }), i.on("PartyLeaveMessage", function(e) {
            t._leaveParty(e.partyId, 0)
        }), i.on("PartyKickedByMessage", function(e) {
            t._leaveParty(e.partyId, e.kickerId)
        }), i.on("ServerBonusMessage", function(e) {
            t.arenaBonus.bonus1v1 = e.kolossium1VS1IsHighlighted,
                t.arenaBonus.bonus3v3 = e.kolossium3VS3IsHighlighted, t.emit("arenaBonusUpdated")
        }), i.on("PartyCancelInvitationNotificationMessage", function(e) {
            t._removePartyGuest(e.partyId, e.guestId, e.cancelerId)
        }), i.on("PartyInvitationCancelledForGuestMessage", function(e) {
            t.emit("partyInvitationCancelled", e.partyId, e.cancelerId)
        }), e.on("PartyJoinMessage", function(e) {
            t._joinParty(e.partyType, e.partyId, e.members, e.guests, e.partyLeaderId)
        }), i.on("PartyMemberRemoveMessage", function(e) {
            t._removePartyMember(e.partyId, e.leavingPlayerId)
        }), i.on("PartyMemberEjectedMessage", function(e) {
            t._removePartyMember(e.partyId, e.leavingPlayerId, e.kickerId)
        }), i.on("PartyLeaderUpdateMessage", function(e) {
            t._updatePartyLeader(e.partyId, e.partyLeaderId)
        }), i.on("PartyRefuseInvitationNotificationMessage", function(e) {
            t._removePartyGuest(e.partyId, e.guestId)
        }), e.on("PartyFollowStatusUpdateMessage", function(e) {
            e.success && (t._followedCharacterId = e.followedId)
        }), e.on("GameFightJoinMessage", function(e) {
            e.fightType !== d.FIGHT_TYPE_PVP_ARENA_3V3 && e.fightType !== d.FIGHT_TYPE_PVP_ARENA_1V1 || e.isSpectator || (t.arenaStep = p.ARENA_STEP_STARTING_FIGHT, t.arenaRegistered = !1, t.emit("arenaRegistrationStatus")), t._cleanPartyFightNotifications()
        }), e.on("GameFightEndMessage", function(e) {
            t.arenaStep === p.ARENA_STEP_STARTING_FIGHT && (t.arenaStep = p.ARENA_STEP_UNREGISTER, t.emit("arenaRegistrationStatus"), t.emit("arenaFightEnd"), window.gui.playerData.evaluateRatingOpening("arenaFightWin", {
                fighters: e.results
            }))
        }), e.on("GameRolePlayArenaUpdatePlayerInfosMessage", function(e) {
            t.arenaStats[e.rankType].score = e.rank, t.arenaStats[e.rankType].victoryCount = e.victoryCount, t.arenaStats[e.rankType].arenaFightCount = e.arenaFightcount, t.arenaStats[e.rankType].hasClaimedDailyReward = e.hasClaimedDailyReward, t.arenaStats[e.rankType].isFiltered = !1;
            var i = window.gui.playerData.characterBaseInformations.id,
                n = window.gui.serversData.connectedServerId;
            i && !isNaN(parseInt(n, 10)) && window.dofus.send("arenaPlayerRank", {
                filters: "",
                name: e.rankType === f.PVP_1VS1 ? "1vs1" : "3vs3",
                characterId: i,
                serverId: n
            })
        }), i.on("arenaPlayerRankSuccess", function(e) {
            var i = 0;
            "1vs1" === e._type ? i = f.PVP_1VS1 : "3vs3" === e._type && (i = f.PVP_3VS3), t.arenaStats[i].isFiltered = e._filtered, e._filtered ? (t.arenaStats[i].filtered.rank = e.ladderResult.rank, t.arenaStats[i].filtered.victoryCount = e.ladderResult.victory_by_season, t.arenaStats[i].filtered.position = e.ladderResult.position, t.arenaStats[i].filtered.score = e.ladderResult.score) : (t.arenaStats[i].rank = e.ladderResult.rank, t.arenaStats[i].victoryCount = e.ladderResult.victory_by_season, t.arenaStats[i].position = e.ladderResult.position, t.arenaStats[i].score = e.ladderResult.score, t.arenaStats[i].filtered = {}), t.emit("arenaStatsUpdated")
        }), e.on("PartyCannotJoinErrorMessage", function(e) {
            var t;
            switch (e.reason) {
                case c.PARTY_JOIN_ERROR_UNKNOWN:
                    t = s("ui.party.cantInvit");
                    break;
                case c.PARTY_JOIN_ERROR_PLAYER_NOT_FOUND:
                    break;
                case c.PARTY_JOIN_ERROR_PARTY_NOT_FOUND:
                    t = s("ui.party.cantFindParty");
                    break;
                case c.PARTY_JOIN_ERROR_PARTY_FULL:
                    t = s("ui.party.partyFull");
                    break;
                case c.PARTY_JOIN_ERROR_PLAYER_BUSY:
                    t = s("ui.party.cantInvitPlayerBusy");
                    break;
                case c.PARTY_JOIN_ERROR_PLAYER_ALREADY_INVITED:
                    t = s("ui.party.playerAlreayBeingInvited");
                    break;
                case c.PARTY_JOIN_ERROR_PLAYER_TOO_SOLLICITED:
                    t = s("ui.party.playerTooSollicited");
                    break;
                case c.PARTY_JOIN_ERROR_UNMODIFIABLE:
                    t = s("ui.party.partyUnmodifiable");
                    break;
                case c.PARTY_JOIN_ERROR_UNMET_CRITERION:
                case c.PARTY_JOIN_ERROR_PLAYER_LOYAL:
            }
            t && this.openSimplePopup(t)
        }), e.on("PartyMemberInFightMessage", function(i) {
            var n = e.playerData.isFighting && !e.playerData.isSpectator;
            if (!n) {
                var o, a = i.fightMap.mapId;
                switch (i.reason) {
                    case h.FIGHT_REASON_MONSTER_ATTACK:
                        o = s("ui.party.memberStartFight.monsterAttack", i.memberName, i.memberId, a);
                        break;
                    case h.FIGHT_REASON_PLAYER_ATTACK:
                        o = s("ui.party.memberStartFight.playerAttack", i.memberName, i.memberId, a);
                        break;
                    case h.FIGHT_REASON_MEMBER_ATTACKED_PLAYERS:
                        o = s("ui.party.memberStartFight.attackPlayer", i.memberName, i.memberId, a);
                        break;
                    default:
                        o = s("ui.party.memberStartFight.unknownReason", i.memberName, i.memberId, a)
                }
                e.chat.logMsg(o);
                var r = i.secondsBeforeFightStart;
                if (t._addFightInfo(a, i.fightId, i.memberId, i.memberName, r), e.playerData.position.mapId === a) {
                    var c = i.memberId;
                    e.party.showPartyFightQuestion(i.fightId, c, i.memberId, i.memberName, r)
                }
            }
        }), e.on("GameRolePlayRemoveChallengeMessage", function(i) {
            e.party.removePartyFightQuestion(i.fightId), t._deleteFightInfo(e.playerData.position.mapId, i.fightId)
        }), e.on("mapComplementaryInformationsData", function(i) {
            t._cleanPartyFightNotifications();
            var n = t._partyFights[i.mapId];
            if (n)
                for (var o = i.fights, a = 0; a < o.length; a++) {
                    var r = n[o[a].fightId];
                    if (r) {
                        var s = r.memberId;
                        e.party.showPartyFightQuestion(r.fightId, s, r.memberId, r.memberName, r.startTime - Date.now())
                    }
                }
        })
    }, n.prototype._addFightInfo = function(e, t, i, n, o) {
        var a = this._partyFights[e];
        a || (a = this._partyFights[e] = {}), a[t] = {
            fightId: t,
            memberId: i,
            memberName: n,
            startTime: Date.now() + o
        };
        var r = this;
        window.setTimeout(function() {
            r._deleteFightInfo(e, t)
        }, o)
    }, n.prototype._deleteFightInfo = function(e, t) {
        var i = this._partyFights[e];
        i && (delete i[t], 0 === Object.keys(i)
            .length && delete this._partyFights[e])
    }, n.prototype._cleanPartyFightNotifications = function() {
        for (var e in this._partyFights) {
            var t = this._partyFights[e];
            for (var i in t) window.gui.party.removePartyFightQuestion(i)
        }
    }, n.prototype._archiveParty = function(e) {
        e._timeWhenDisconnected = Date.now(), this._pastParties[e._partyId] = e
    }, n.prototype._purgeExpiredPastParties = function() {
        var e, t = {};
        for (var i in this._pastParties) e = this._pastParties[i], t[e._partyType] = Math.max(t[e._partyType] || 0, e._timeWhenDisconnected), Date.now() - e._timeWhenDisconnected > A && delete this._pastParties[i];
        for (i in this._pastParties) e = this._pastParties[i], e._timeWhenDisconnected < t[e._partyType] && delete this._pastParties[i]
    }, n.prototype._rememberRecentParties = function(e) {
        var t = {};
        for (var i in this._partyFromId) t[i] = this._partyFromId[i];
        this._purgeExpiredPastParties();
        for (i in this._pastParties) t[i] = this._pastParties[i];
        b.setValue("recentParties", t, e)
    }, n.prototype._reloadRecentParties = function() {
        var e = b.getValue("recentParties", {});
        this._pastParties = {};
        for (var t in e) {
            var i = o.unserializeFrom(e[t]);
            this._pastParties[t] = i, i._timeWhenDisconnected || (i._timeWhenDisconnected = Date.now())
        }
    }, n.prototype._tryToRejoin = function(e) {
        this._purgeExpiredPastParties();
        for (var t in this._pastParties) {
            var i = this._pastParties[t];
            if (!i._inviterName && e === i._myCharacterId) {
                var n = [];
                for (var o in i._members) n.push(i._members[o].name);
                i._purgeExpiredPastMembers();
                for (o in i._pastMembers) n.push(i._pastMembers[o].name);
                if (n.length) {
                    var a = i._members[i._leaderId] || i._pastMembers[i._leaderId];
                    a && (n.splice(n.indexOf(a.name), 1), n.unshift(a.name)), this._findOnlineInviter(i, n)
                }
            }
        }
    }, n.prototype._findOnlineInviter = function(e, t) {
        var i = this;
        window.gui.chat.p2p.checkPlayerOnline(t[0], function(n, o) {
            return o ? (e._inviterName = n, window.gui.chat.p2p.sendMsg(n, "rejoinRequest", e._partyId)) : (t.shift(), t.length ? i._findOnlineInviter(e, t) : void 0)
        })
    }, n.prototype.handleRejoinRequest = function(e, t) {
        var i, n;
        this._purgeExpiredPastParties();
        var o = this._partyFromId[e];
        if (o) {
            if (n = o._partyType, o._purgeExpiredPastMembers(), i = o._pastMembers[t], !i) return;
            if (0 === o.getFreeSlotCount()) return
        } else {
            var a = this._pastParties[e];
            if (!a) return;
            if (a._purgeExpiredPastMembers(), i = a._members[t] || a._pastMembers[t], !i) return;
            if (n = a._partyType, this._getPartyFromType(n)) return
        }
        var r = n === M ? "PartyInvitationArenaRequestMessage" : "PartyInvitationRequestMessage";
        window.dofus.sendMessage(r, {
            name: i.name
        })
    }, n.prototype._handleRequestedInvitation = function(e, t, i) {
        this._purgeExpiredPastParties();
        var n = this._pastParties[t];
        if (!n) {
            var o = !1;
            for (var a in this._pastParties) {
                var r = this._pastParties[a];
                if (r._partyType === e && r._inviterName === i) {
                    o = !0;
                    break
                }
            }
            if (!o) return !1
        }
        return window.dofus.sendMessage("PartyAcceptInvitationMessage", {
            partyId: t
        }), !0
    }
}
