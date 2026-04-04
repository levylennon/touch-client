function(e, t, i) {
    function n() {
        c.call(this), this.friendsList = {}, this.enemiesList = {}, this.ignoredList = {}, this.spouse = null, this.onConnectNotification = !1, this.sponsoring = {}
    }

    function o(e) {
        for (var t = {}, i = 0; i < e.length; i++) e[i].accountId && (t[e[i].accountId] = e[i]);
        return t
    }
    var a = i(105),
        r = i(17)
        .getText,
        s = i(16),
        c = i(59),
        l = i(56)
        .inherits,
        d = i(125),
        u = i(833);
    l(n, c), e.exports = n, n.prototype.connect = function() {
        window.dofus.sendMessage("FriendsGetListMessage"), window.dofus.sendMessage("IgnoredGetListMessage"), window.dofus.sendMessage("SpouseGetInformationsMessage"), window.dofus.sendMessage("InviteCodeRequestMessage")
    }, n.prototype.disconnect = function() {
        this.friendsList = {}, this.enemiesList = {}, this.ignoredList = {}, this.spouse = null, this.onConnectNotification = !1, this.sponsoring = {}
    }, n.prototype.initialize = function(e) {
        var t = this,
            i = {
                0: r("ui.common.unknownFail"),
                1: r("ui.social.friend.addFailureListFull"),
                2: r("ui.social.friend.addFailureNotFound"),
                3: r("ui.social.friend.addFailureEgocentric"),
                4: r("ui.social.friend.addFailureAlreadyInList")
            };
        a.on("PlayerStatusUpdateMessage", function(e) {
            t.friendsList[e.accountId] && (t.friendsList[e.accountId].status = e.status, t.emit("friendUpdate", t.friendsList[e.accountId])), t.enemiesList[e.accountId] && (t.enemiesList[e.accountId].status = e.status, t.emit("enemyUpdate", t.enemiesList[e.accountId])), t.ignoredList[e.accountId] && (t.ignoredList[e.accountId].status = e.status, t.emit("ignoredUpdate", t.ignoredList[e.accountId]))
        }), a.on("InviteCodeErrorMessage", function(e) {
            t.sponsoring.errorCode = e.errorCode, t.sponsoring.inviteCode = "", t.emit("updateSponsoAvailability"), t.emit("updateSponsoCode")
        }), a.on("InviteCodeResultMessage", function(e) {
            t.sponsoring.inviteCode = e.inviteCode, t.sponsoring.errorCode = -1, t.emit("updateSponsoAvailability"), t.emit("updateSponsoCode")
        }), e.on("FriendUpdateMessage", function(e) {
            t.friendsList[e.friendUpdated.accountId] = e.friendUpdated, t.emit("friendUpdate", e.friendUpdated), t.emit("enemyUpdate", e.friendUpdated), t.emit("ignoredUpdate", e.friendUpdated)
        }), e.on("FriendsListMessage", function(e) {
            t.friendsList = o(e.friendsList), t.emit("newFriendList")
        }), e.on("IgnoredListMessage", function(e) {
            t.enemiesList = o(e.ignoredList), t.emit("newEnemyList")
        }), e.on("FriendAddedMessage", function(e) {
            t.friendsList[e.friendAdded.accountId] = e.friendAdded, d.trackAddFriend(), t.emit("friendAdded", e.friendAdded)
        }), e.on("IgnoredAddedMessage", function(e) {
            var i = e.session ? t.ignoredList : t.enemiesList;
            i[e.ignoreAdded.accountId] = e.ignoreAdded, t.emit(e.session ? "ignoredAdded" : "enemyAdded", e.ignoreAdded)
        }), a.on("FriendDeleteResultMessage", function(i) {
            if (i.success) {
                e.chat.logError(r("ui.social.friend.delete"));
                for (var n in t.friendsList)
                    if (t.friendsList[n].uniqueNickname.toString() === i.name) return delete t.friendsList[n], t.emit("friendDeleted", n)
            }
        }), e.on("IgnoredDeleteResultMessage", function(e) {
            if (e.success) {
                var i = e.session ? t.ignoredList : t.enemiesList;
                for (var n in i)
                    if (i[n].uniqueNickname.toString() === e.name) return delete i[n], t.emit(e.session ? "ignoredDeleted" : "enemyDeleted", n)
            }
        }), a.on("FriendAddFailureMessage", function(t) {
            e.chat.logError(i[t.reason])
        }), a.on("IgnoredAddFailureMessage", function(t) {
            e.chat.logError(i[t.reason])
        }), e.on("FriendWarnOnConnectionStateMessage", function(e) {
            t.onConnectNotification = e.enable
        }), e.on("SpouseInformationsMessage", function(e) {
            var i = e.spouse;
            t.spouse = {
                spouseAccountId: i.spouseAccountId,
                spouseId: i.spouseId,
                spouseName: i.spouseName,
                spouseLevel: i.spouseLevel,
                breed: i.breed,
                sex: i.sex,
                spouseEntityLook: i.spouseEntityLook,
                guildInfo: i.guildInfo,
                alignmentSide: i.alignmentSide,
                mapId: i.mapId,
                subAreaId: i.subAreaId,
                inFight: i.inFight,
                followSpouse: i.followSpouse
            }, t.emit("spouseUpdate", t.spouse)
        }), e.on("SpouseStatusMessage", function(e) {
            t.spouse && e.hasSpouse === !1 && (t.spouse = null, t.emit("spouseLeft"))
        }), e.on("MoodSmileyUpdateMessage", function(e) {
            var i = t.friendsList[e.accountId];
            i && (i.moodSmileyId = e.smileyId, t.emit("friendUpdate", i), t.emit("enemyUpdate", i), t.emit("ignoredUpdate", i))
        })
    }, n.prototype.isIgnored = function(e) {
        return Boolean(this.ignoredList[e])
    }, n.prototype.isFriend = function(e) {
        for (var t in this.friendsList) {
            var i = this.friendsList[t];
            if (i.playerId === e) return !0
        }
        return !1
    }, n.prototype.canSponso = function() {
        var e = this.sponsoring.errorCode;
        return e !== u.PLAYER_NOT_VALID_ERROR && e !== u.INVITES_DISABLED
    }, n.prototype.isOverused = function() {
        var e = this.sponsoring.errorCode;
        return e === u.CODE_OVERUSED_ERROR
    }, n.prototype.getSponsoCode = function() {
        return this.sponsoring.inviteCode
    }, n.prototype.isSpouse = function(e) {
        return Boolean(this.spouse) && this.spouse.spouseId === e
    }, n.prototype.searchOnlineFriendById = function(e) {
        for (var t in this.friendsList) {
            var i = this.friendsList[t];
            if (i.playerId === e) return i
        }
        return null
    }, n.prototype.searchOnlineFriendByName = function(e) {
        var t = s.simplifyString(e);
        for (var i in this.friendsList) {
            var n = this.friendsList[i];
            if (n.playerName && s.simplifyString(n.playerName) === t) return n
        }
        return null
    }, n.prototype.isMutualFriend = function(e) {
        return e.level > 0
    }
}
