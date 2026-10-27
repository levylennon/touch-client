function(e, t, i) {
    // #playerData
    function n() {
        function e(e) {
            t.identification = {
                accountCreation: e.accountCreation,
                accountId: e.accountId,
                communityId: e.communityId,
                hasRights: e.hasRights,
                hasConsoleRight: e.hasConsoleRight,
                accountSessionUid: e.login,
                login: t.loginName,
                uniqueNickname: e.uniqueNickname,
                secretQuestion: e.secretQuestion,
                wasAlreadyConnected: e.wasAlreadyConnected
            };
            var i = e.uniqueNickname.toString();
            t.forcedAccount || t.setNickameInStorage(i),
            a.setAccountInfo(e._groupFlags, e.accountId)
        }
        o.call(this);
        var t = this;
        this._pushToken = "",
        this.loginName = null,
        this.identification = {},
        this.subscriptionLevels = [],
        this.isInDialog = !1,
        this.characterBaseInformations = {},
        this.characterBreed = null,
        this.accountCapabilities = {},
        this.achievements = {},
        this.lifePoints = 0,
        this.maxLifePoints = 0,
        this.movementPoints = 0,
        this.actionPoints = 0,
        this.isFightLeader = !1,
        this.isFighting = !1,
        this.isSpectator = !1,
        this.state = l.STATUS_ALIVE_AND_KICKING,
        this.experienceFactor = 0,
        this.forcedAccount = null,
        this.shieldTutorialQuestId = 1620,
        this.shieldTutorialQuestObjective = 9560,
        this.alliance = new A,
        this.characters = new v,
        this.emoteData = new y,
        this.fightRequests = new z,
        this.guild = this.guildData = new w,
        this.houseData = new T,
        this.inventory = new C,
        this.belongings = new O(this.inventory),
        this.jobs = new I,
        this.achievements = new S,
        this.position = new E,
        this.partyData = new L,
        this.quests = new N,
        this.socialData = new R,
        this.alignment = new q,
        this.adminMenu = new x,
        this.ToaData = new B,
        this.MatchmakingData = new W,
        this.shopData = new D,
        this.teleporterData = new P,
        window.dofus.connectionManager.on("IdentificationSuccessMessage", e),
        window.dofus.connectionManager.on("IdentificationSuccessWithLoginTokenMessage", e)
    }
    var o = i(59).EventEmitter,
        a = i(38),
        r = i(16),
        s = i(61),
        c = i(56).inherits,
        l = i(534),
        d = i(602),
        u = i(52),
        p = i(17).getText,
        h = i(523),
        f = i(21),
        b = i(466),
        m = i(509),
        M = i(60),
        g = i(649),
        _ = i(130),
        A = i(800),
        O = i(802),
        v = i(805),
        y = i(806),
        z = i(807),
        w = i(809),
        T = i(812),
        C = i(813),
        I = i(819),
        S = i(820),
        E = i(822),
        L = i(823),
        N = i(827),
        R = i(832),
        q = i(834),
        x = i(835),
        B = i(836),
        D = i(837),
        W = i(843),
        P = i(845),
        k = i(125),
        F = i(112).MAX_LEVEL,
        H = {};
    c(n, o), e.exports = n, n.prototype.initialize = function(e, t, i) {
        this.alliance.initialize(e), this.characters.initialize(e), this.emoteData.initialize(e), this.fightRequests.initialize(e), this.guildData.initialize(e), this.houseData.initialize(e), this.inventory.initialize(e), this.jobs.initialize(e), this.achievements.initialize(e), this.position.initialize(e), this.partyData.initialize(e), this.quests.initialize(), this.socialData.initialize(e), this.alignment.initialize(e), this.adminMenu.initialize({
            lang: window.Config.language
        }), this.ToaData.initialize(e), this.MatchmakingData.initialize(), this.shopData.initialize(e, t, i), this.teleporterData.initialize(e), this._setupListeners(e)
    }, n.prototype.connectModules = function(e, t) {
        this._selectCharacter(e), this.alliance.connect(), this.belongings.connect(), this.characters.connect(e.id), this.inventory.connect(), this.partyData.connect(), this.quests.connect(t), this.socialData.connect(), this.MatchmakingData.connect(), this.adminMenu.connect({
            lang: window.Config.language
        })
    }, n.prototype.disconnectModules = function() {
        this.characters.disconnect(), this.emoteData.disconnect(), this.fightRequests.disconnect(), this.guildData.disconnect(), this.inventory.disconnect(), this.jobs.disconnect(), this.achievements.disconnect(), this.position.disconnect(), this.partyData.disconnect(), this.quests.disconnect(), this.socialData.disconnect(), this.adminMenu.disconnect(), this.ToaData.disconnect(), this.MatchmakingData.disconnect(), this.teleporterData.disconnect(), this.experienceFactor = 0, this.accountCapabilities = {}, this.loginName = null, this.characterBaseInformations = {}, this.characterBreed = null, this.forcedAccount = null, this.state = l.STATUS_ALIVE_AND_KICKING, this.isInDialog = !1, this._removeMount()
    }, n.prototype._selectCharacter = function(e) {
        this.id = e.id, r.storeMapAndEmit(this, this.characterBaseInformations, e, "characterInfosUpdated"), this.characterBreed = window.gui.databases.Breeds[e.breed], this.emit("setCharacterBreed"), this.emit("characterSelectedSuccess"), this.emit("lookUpdate", e.entityLook)
    }, n.prototype.getPushToken = function() {
        return this._pushToken
    }, n.prototype.getAccountId = function() {
        return this.identification && this.identification.accountId ? this.identification.accountId : 0
    }, n.prototype.setPushToken = function(e) {
        this._pushToken = e
    }, n.prototype._removeMount = function() {
        delete this.equippedMount, this.isRiding = !1
    }, n.prototype._setupListeners = function(e) {
        function t(e) {
            e.contextualId === i.id && (i.characterBaseInformations.entityLook = e.look, i.emit("lookUpdate", e.look))
        }
        var i = this,
            n = window.dofus.connectionManager;
        n.on("AccountCapabilitiesMessage", function(e) {
            i.adminMenu.setAccountCapabilities(e),
                i.accountCapabilities = e,
                i.isSubscriberAtMinLevel(m.NORMAL) && k.trackBonusPack(),
                window.dofus.send("pingSession", parseInt((1e9 * Math.random() + 1).toString(), 10))
        }),
            e.on("ServerExperienceModificatorMessage", function(e) {
            i.experienceFactor = e.experiencePercent - 100
        }),
            e.on("GameContextRefreshEntityLookMessage", function(e) {
            e.id === i.id && (i.characterBaseInformations.entityLook = e.look, i.emit("lookUpdate", e.look))
        }), n.on("GameFightRefreshFighterMessage", function(e) {
            t(e.informations)
        }), n.on("GameRolePlayShowActorMessage", function(e) {
            t(e.informations)
        }), n.on("GameRolePlayShowActorListMessage", function(e) {
            e.informations.forEach(function(e) {
                t(e)
            })
        }), e.on("mapComplementaryInformationsData", function(t) {
            for (var n = e.playerData.characters.controlledCharacterId, o = 0; o < t.actors.length; o++) {
                var a = t.actors[o];
                if (a.contextualId === n) {
                    var s = i.characterBaseInformations.entityLook,
                        c = a.look,
                        l = r.differenceBetweenTwoArrays(s.skins, c.skins);
                    return l = l || r.differenceBetweenTwoArrays(s.indexedColors, c.indexedColors), void(l && (i.characterBaseInformations.entityLook = a.look, i.emit("lookUpdate", a.look)))
                }
            }
        }), e.on("CharacterLevelUpMessage", function(e) {
            var t = i.characterBaseInformations.level;
            i.characterBaseInformations.level = e.newLevel, i.emit("characterLevelUp", {
                newLevel: e.newLevel,
                previousLevel: t
            }), i.emit("characterInfosUpdated"), i.evaluateRatingOpening("levelUp")
        }), 
        n.on("CharactersListMessage", function() {
            i.adminMenu.runStartupCmd({
                isOnCharacterSelection: !0
            })
        }), n.on("StartupActionsListMessage", function() {
            i.adminMenu.runStartupCmd({
                isOnRP: !0
            })
        }), n.on("MountUnSetMessage", function() {
            if (i.equippedMount) {
                var e = i.equippedMount.id;
                i._removeMount(), i.emit("unsetMount", e)
            }
        }), n.on("MountRidingMessage", function(e) {
            i.isRiding = e.isRiding, i.emit("mountRiding", e.isRiding)
        }), n.on("MountSetMessage", function(e) {
            i.equippedMount && i.equippedMount.level < e.mountData.level && window.gui.chat.logMsg(p("ui.mount.levelUp", [e.mountData.level])), i.equippedMount = e.mountData, i.equippedMount.mountLocation = "equip", i.equippedMount.xpRatio = i.mountXpRatio, i.emit("setMount", e)
        }), n.on("MountXpRatioMessage", function(e) {
            i.equippedMount && (i.equippedMount.xpRatio = i.mountXpRatio = e.ratio, i.emit("setMountRatio", e.ratio))
        }), e.on("GameRolePlayPlayerLifeStatusMessage", function(e) {
            var t = e.state;
            if (i.state = t, t === l.STATUS_TOMBSTONE) {
                var n = {
                    title: p("ui.login.news"),
                    message: p("ui.gameuicore.playerDied") + "\n\n" + p("ui.gameuicore.freeSoul"),
                    cb: function(e) {
                        e && window.dofus.sendMessage("GameRolePlayFreeSoulRequestMessage")
                    }
                };
                u.getWindow("confirm")
                    .update(n), u.openDialog(["confirm"])
            } else t === l.STATUS_PHANTOM && window.gui.openSimplePopup(p("ui.gameuicore.soulsWorld"), p("ui.login.news"))
        }), e.on("GameRolePlayGameOverMessage", function() {
            u.openDialog(["hardcoreDeath"])
        }), n.on("SubscriptionStatusMessage", function(e) {
            i.subscriptionLevels = [];
            for (var t = 0; t < e.levels.length; t++) {
                var n = e.levels[t];
                i.subscriptionLevels[n.level] = n
            }
            i.emit("subscriptionChanged")
        }), window.developmentMode && (n.on("ExchangeStartedBidSellerMessage", function(e) {
            r.checkBidHouseCategoriesAddendumIntegrity(e.sellerDescriptor.types, window.gui.databases.BidHouseCategories)
        }), n.on("ExchangeStartedBidBuyerMessage", function(e) {
            r.checkBidHouseCategoriesAddendumIntegrity(e.buyerDescriptor.types, window.gui.databases.BidHouseCategories)
        }))
    }, n.prototype.setForcedAccount = function(e) {
        this.forcedAccount = e
    }, n.prototype.setLoginName = function(e) {
        return e ? void(this.loginName = e) : console.error(new Error("PlayerData.setLoginName: login is emtpy"))
    }, n.prototype.setNickameInStorage = function(e) {
        e.indexOf("#guest#") === -1 && s.setItem("UNIQUE_NICKNAME", e)
    }, n.prototype.isAlive = function() {
        return this.state === l.STATUS_ALIVE_AND_KICKING
    }, n.prototype.isAdmin = function() {
        return this.hasRight(b.RIGHT_IS_ADMIN)
    }, n.prototype.isModeratorOrMore = function() {
        return this.accountCapabilities.status >= d.MODERATOR
    }, n.prototype.isCommunityHelper = function() {
        return this.hasRight(b.IS_COMMUNITY_HELPER)
    }, n.prototype.isAbleToSeeId = function() {
        return this.hasRight(b.SHOW_ID)
    }, n.prototype.hasRight = function(e) {
        return !!this.accountCapabilities._accountRightsMap && Boolean(this.accountCapabilities._accountRightsMap[e])
    }, n.prototype.isModerator = function() {
        return this.accountCapabilities.status >= d.MODERATOR && this.accountCapabilities.status <= d.GAMEMASTER
    }, n.prototype.isSubscriberAtMinLevel = function(e, t) {
        t = t || {};
        for (var i = m.ALBUERA; i >= e; i--) {
            var n = this.subscriptionLevels[i] && this.subscriptionLevels[i].expiration_date > f.now();
            if (n || this.isSubscriptionForced(i) && !t.noForced) return !0
        }
        return !1
    }, n.prototype.isSubscriptionForced = function(e) {
        return this.subscriptionLevels[e] && this.subscriptionLevels[e].isForced
    }, n.prototype.getSubscriptionMaxExpiration = function() {
        var e = 0;
        for (var t in this.subscriptionLevels) e = Math.max(e, this.subscriptionLevels[t].expiration_date);
        return e
    }, n.prototype.getSubscriptionRemainingTime = function(e) {
        if (!this.subscriptionLevels[e]) return 0;
        for (var t = f.now(), i = e + 1; i <= m.ELITE; i++)
            if (this.subscriptionLevels[i]) {
                t = this.subscriptionLevels[i].expiration_date;
                break
            } return Math.max(0, this.subscriptionLevels[e].expiration_date - t)
    }, n.prototype.getSubscriptionMaxDays = function() {
        var e = this.getSubscriptionMaxExpiration();
        if (0 === e) return 0;
        var t = e - f.now(),
            i = Math.ceil(t / 1e3 / 60 / 60 / 24);
        return Math.ceil(i)
    }, n.prototype.isMutant = function() {
        return "GameRolePlayMutantInformations" === window.isoEngine.actorManager.userActor.data.type
    }, n.prototype.getMutantData = function(e) {
        if (!this.isMutant()) return e(new Error("Player.getMutantData - Client is not a mutant"));
        var t = window.actorManager.userActor.data.monsterId,
            i = window.actorManager.userActor.data.powerLevel;
        _.getDataMap("Monsters", [t], null, function(n, o) {
            if (n) return e("PlayerData.getMutantData - Monster " + t + " is not found with error " + n);
            var a = o[t],
                r = a && a.grades && a.grades[i - 1];
            return e(null, {
                name: a.nameId,
                level: r.level
            })
        })
    }, n.prototype.getRestrictions = function() {
        return window.isoEngine.actorManager.userActor.data.humanoidInfo.restrictions
    }, n.prototype.isPvpAggressable = function() {
        return this.alignment.alignmentInfos.aggressable === h.PvP_ENABLED_AGGRESSABLE || this.alignment.alignmentInfos.aggressable === h.PvP_ENABLED_NON_AGGRESSABLE
    }, n.prototype.getLevelDiff = function(e) {
        var t, i, n = this.characterBaseInformations.level;
        return e < n ? (t = -1, i = n / e) : (t = 1, i = e / n), Math.abs(e - n) > 20 || i >= 1.2 ? t : 0
    }, n.prototype.isIncarnation = function() {
        var e = window.gui.playerData.characterBaseInformations.entityLook;
        if (!e) return !1;
        var t = e.bonesId;
        if (void 0 !== H[t]) return H[t];
        var i = window.gui.databases.Incarnation;
        for (var n in i) {
            var o = i[n],
                a = o.lookMale.slice(1, o.lookMale.indexOf("|")),
                r = o.lookFemale.slice(1, o.lookFemale.indexOf("|"));
            if (t === ~~a || t === ~~r) return H[t] = !0, !0
        }
        return H[t] = !1, !1
    }, n.prototype.isShopDisabled = function() {
        var e = window.Config || {},
            t = e.disabledFeatures || {};
        if (t.shop) return !0;
        var i = window.parseInt(window.gui.serversData.connectedServerId, 10);
        if (isNaN(i) || !i) return !1;
        i = i.toString();
        var n = t.shopByServerIdList || [];
        return n.indexOf(i) !== -1
    }, n.prototype.isOnShieldTutorial = function() {
        return Boolean(window.gui.playerData.quests.active[this.shieldTutorialQuestId])
    }, n.prototype.isShieldTutorialFortified = function() {
        if (!this.isOnShieldTutorial()) return !1;
        for (var e = window.gui.playerData.quests.active[this.shieldTutorialQuestId], t = 0; t < e.objectives.length; t++)
            if (e.objectives[t].objectiveId === this.shieldTutorialQuestObjective) return e.objectives[t].objectiveStatus === g.FINISHED
    }, n.prototype.evaluateRatingOpening = function(e, t) {
        var i = this.characterBaseInformations.level;
        if ("levelUp" === e && i % 20 === 0) this._openRatingWindow();
        else if ("fightEnd" === e && t && t.fighters) {
            for (var n = Object.keys(t.fighters), o = 0; o < n.length; o++)
                if (t.fighters[n[o]].isBoss && i >= 200) {
                    this._openRatingWindow();
                    break
                }
        } else if ("arenaFightWin" === e && t && t.fighters && i >= 200)
            for (var a = this.id, r = t.fighters, s = 0; s < r.length; s++)
                if (a === r[s].id) {
                    r[s].outcome && this._openRatingWindow();
                    break
                }
    }, n.prototype._openRatingWindow = function() {
        if (window && window.cordova && window.LaunchReview) {
            var e = M.getValue("rateDofus", null);
            e ? e.numAsked <= 4 && !e.isNeverAsk && u.open("ratingWindow") : this.characterBaseInformations.level >= 40 && u.open("ratingWindow")
        }
    }, n.prototype.hasJob = function() {
        return this.jobs && Object.keys(this.jobs.list)
            .length > 0
    }, n.prototype.hasParty = function() {
        var e = this.partyData,
            t = e.getClassicalParty(),
            i = e.getDungeonParty();
        return Boolean(t || i)
    }, n.prototype.isLevelMax = function() {
        return this.characterBaseInformations.level >= F
    }, n.prototype.isPlayerClassicGroupLeader = function() {
        var e = this.partyData,
            t = e.getClassicalParty(),
            i = e.getDungeonParty();
        if (!t && !i) return !0;
        var n = t && t.getLeaderId() === this.id,
            o = i && i.getLeaderId() === this.id;
        return n || o
    }, n.prototype.isPlayerArenaGroupLeader = function() {
        var e = this.partyData,
            t = e.getArenaParty();
        return !t || t && t.getLeaderId() === this.id
    }, n.prototype.setDialogState = function(e) {
        this.isInDialog = e, this.emit("dialogStateChanged", e)
    }
}
