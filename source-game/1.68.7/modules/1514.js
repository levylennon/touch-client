function(e, t, i) {
    function n() {}

    function o(e) {
        e = e || {}, e.data = e.data || {}, c.call(this, e), this.actorId = void 0 === e.actorId ? null : e.actorId, this.cellId = null, this._step = 0, this.path = [], this.moving = !1, this.animated = !1, this.emoteAnimated = !1, this.lastEmoteAnim = null, this.speedAdjust = 0, this.tints = null, this.data = {}, this.groupBoss = null, this.isInvisible = !1, this.detectedAnimationTween = null, this.followers = null, this.isFollower = !1, this.isLocked = !1, this.isRiding = !1, this.isDead = !1, this.canMoveDiagonally = !0, this.isolationCoefficient = 0, this.pathTween = new r(this, ["step"]),
            this.riderEntity = null, this.carriedActor = null, this.carriedEntity = null, this.parentActor = null, this.circleGraphic = null, this.icons = {}, this.realLook = null, this.actorManager = e.actorManager, this.fighterIndicator = null, this._turnNumberLabel = null, this.nicknameLabel = null, this._questIconLoadingStartTime = null, this.x = u.DEFAULT_ACTOR_X, this.y = u.DEFAULT_ACTOR_Y, this.updateData(e.data)
    }
    var a = i(56)
        .inherits,
        r = i(430)
        .Tween,
        s = i(731),
        c = i(691),
        l = i(103),
        d = i(55),
        u = i(13),
        p = i(60),
        h = u.ICON_CATEGORY_ENUM,
        f = [6305, 6306, 6307];
    a(o, c), e.exports = o, o.prototype.hasFullNicknameLabelData = function() {
        var e = this.data;
        if (!e.humanoidInfo) return !1;
        for (var t = e.humanoidInfo.options || [], i = !1, n = 0; n < t.length; n++) {
            var o = t[n];
            if ("HumanOptionOrnament" === o._type || "HumanOptionTitle" === o._type) {
                i = !0;
                break
            }
        }
        var a = e.alignmentInfos && 0 !== e.alignmentInfos.alignmentGrade;
        return i || a
    }, Object.defineProperty(o.prototype, "step", {
        get: function() {
            return this._step
        },
        set: function(e) {
            this._step = e, this.forceRefresh()
        }
    }), o.prototype._isCandidateToHideTheMountInFight = function(e) {
        if (!e) return console.error(new Error("The look is missing.")), !1;
        var t = c.getLookOfRider(e);
        return Boolean(t) && this.isPlayer() && (f.indexOf(t.bonesId) >= 0 || !d.showMountsInFight) && !l.isRoleplayMode
    }, o.prototype.setLook = function(e, t, i) {
        var o = i || n;
        return e || console.error(new Error("Assigning falsy look to realLook")), this.realLook = e, this.isRiding = Boolean(c.getLookOfRider(e)), this.speedAdjust = void 0 !== e.speed ? e.speed : u.DEFAULT_ACTOR_SPEED, this.actorManager.isCreatureModeOn && !t.useRealLook ? this.setCreatureLook(t, o) : this._isCandidateToHideTheMountInFight(e) ? c.prototype.setLook.call(this, c.getLookWithoutMount(e), t, o) : void c.prototype.setLook.call(this, e, t, o)
    }, o.prototype.applyLook = function(e) {
        return this.actorManager.isCreatureModeOn ? (e.look || console.error(new Error("Assigning falsy look to realLook")), void(this.realLook = e.look)) : (e.animationManager && 1 === e.look.bonesId && e.look.skins[0] && e.animationManager.applyBones1AnimationModifier(e.look.skins[0]), e.animationManager && e.animationManager !== this.animationManager && (this.animManager.clear(), this.setAnimManager(e.animationManager)), this.staticAnim(), this._isCandidateToHideTheMountInFight(e.look) ? this.look = c.getLookWithoutMount(e.look) : this.look = e.look, this.look || console.error(new Error("Assigning falsy look to realLook")), void(this.realLook = this.look))
    }, o.prototype.useRealLook = function() {
        return this.realLook ? void this.actorManager.setActorLook(this.actorId, this.realLook, {
            useRealLook: !0,
            noSmokeAnimation: !0
        }, null) : void console.warn("actorId " + this.actorId + " not real look yet...")
    }, o.prototype.updateData = function(e) {
        var t = window.isoEngine,
            i = window.gui.playerData.quests,
            n = e.disposition;
        if (n) {
            var o = !0;
            window.actorManager.paused && window.actorManager.userActor !== this && (this.position = n.cellId, this.cellId = n.cellId), this.moving && this.actorManager.userActor === this && l.isRoleplayMode && (o = !t.isMovementWaitingForConfirmation), o && this.setDisposition(n.cellId, n.direction)
        }
        switch (void 0 !== e.alive && (this.isDead = !e.alive), e.npcId && (this.data.npcId = e.npcId, this.data.npcData = e._npcData), e.name && (this.data.name = e.name), e.contextualId && (this.data.actorId = e.contextualId), e.look && void 0 !== e.look.speed && (this.speedAdjust = e.look.speed), e._type) {
            case "GameRolePlayCharacterInformations":
                this.data.accountId = e.accountId, this.data.playerId = e.contextualId, this.data.humanoidInfo = e.humanoidInfo, this.data.alignmentInfos = e.alignmentInfos, this.processHumanoidOptions();
                break;
            case "GameRolePlayMutantInformations":
                this.data.accountId = e.accountId, this.data.playerId = e.contextualId, this.data.humanoidInfo = e.humanoidInfo, this.data.monsterId = e.monsterId, this.data.powerLevel = e.powerLevel, this.processHumanoidOptions();
                break;
            case "GameRolePlayNpcWithQuestInformations":
                this.addQuestIcon(e.questFlag);
                break;
            case "GameFightMonsterInformations":
            case "GameFightMonsterWithAlignmentInformations":
                this.data.contextualId = e.contextualId, this.data.isBoss = e._isBoss, this.data.isSummon = e.stats && e.stats.summoned, this.data.creatureGenericId = e.creatureGenericId;
                break;
            case "GameRolePlayGroupMonsterInformations":
                this.data.alignmentSide = e.alignmentSide, this.data.contextualId = e.contextualId, this.data.hasHardcoreDrop = e.hasHardcoreDrop, this.data.keyRingBonus = e.keyRingBonus, this.data.lootShare = e.lootShare, this.data.staticInfos = e.staticInfos, this.data.scaleLevel = e.scaleLevel, e.hasHardcoreDrop && this.addIcon("hardcoreDrop");
                var a, r = e.staticInfos.mainCreatureLightInfos.staticInfos;
                if (r) {
                    if (r.isMiniBoss) {
                        this.addIcon("miniBoss", h.UI);
                        break
                    }
                    if (r.isBoss) {
                        this.addIcon("boss", h.UI);
                        break
                    }
                    if (a = i.hasWantedMonsterQuest(e.staticInfos.mainCreatureLightInfos.creatureGenericId), a && r.isWantedMonster) {
                        this.addIcon("wanted", h.UI);
                        break
                    }
                }
                if (!d.showAllMonsters) {
                    var s = e.staticInfos.underlings;
                    if (s)
                        for (var c = 0; c < s.length; c++) {
                            if (s[c].staticInfos.isMiniBoss) {
                                this.addIcon("miniBoss", h.UI);
                                break
                            }
                            if (s[c].staticInfos.isBoss) {
                                this.addIcon("boss", h.UI);
                                break
                            }
                            if (a = i.hasWantedMonsterQuest(s[c].creatureGenericId), a && s[c].staticInfos.isWantedMonster) {
                                this.addIcon("wanted", h.UI);
                                break
                            }
                        }
                }
                var u = [],
                    f = e.staticInfos.mainCreatureLightInfos.creatureGenericId;
                u.push(f);
                var b = e.staticInfos.underlings;
                for (var m in b) u.push(b[m].creatureGenericId);
                for (var M = p.getValue("targetedMonsterList", []), g = 0; g < u.length; g++)
                    if (M.indexOf(u[g]) !== -1) {
                        this.addIcon("targeted", h.UI);
                        break
                    } break;
            case "GameRolePlayPrismInformations":
                this.data.prism = e.prism, this.data.contextualId = e.contextualId;
                break;
            case "GameRolePlayTaxCollectorInformations":
                this.data.contextualId = e.contextualId, this.data.taxCollectorAttack = e.taxCollectorAttack;
                var _ = e.identification.guildIdentity;
                this.data.guild = {
                    guildLevel: e.guildLevel,
                    guildEmblem: _.guildEmblem,
                    guildId: _.guildId,
                    guildName: _.guildName
                }, this.data.taxCollector = {
                    lastNameId: e.identification.lastNameId,
                    firstNameId: e.identification.firstNameId
                };
                break;
            case "FightTeamInformations":
            case "FightAllianceTeamInformations":
            case "FightTeamLightInformations":
                this.data.fightId = e.fightId, this.data.teamId = e.teamId, this.data.leaderId = e.leaderId, this.data.teamSide = e.teamSide, this.data.teamTypeId = e.teamTypeId, this.data.teamMembers = e.teamMembers;
                break;
            case "GameFightCharacterInformations":
                this.data.playerId = e.contextualId;
                break;
            case "PaddockObject":
                this.data.durability = e.durability;
                break;
            case "GameRolePlayMountInformation":
                this.data.level = e.level, this.data.ownerName = e.ownerName
        }
        this.data.type = e._type
    }, o.prototype.updateRestrictions = function(e) {
        if (this.data.humanoidInfo && (this.data.humanoidInfo.restrictions = e),
            this.canMoveDiagonally = !e.cantWalk8Directions,
            this.canMoveDiagonally === !1 && 0 === (1 & this.direction)) {
            var t = this.direction + 1;
            t > 7 && (t = 1), this.setDisposition(this.position, t)
        }
    }, o.prototype.processHumanoidOptions = function() {
        if (this.actorManager.removeActorFollowers(this, !0), this.data.humanoidInfo && this.data.humanoidInfo.options)
            for (var e = this.data.humanoidInfo.options, t = 0; t < e.length; t++) {
                var i = e[t];
                "HumanOptionAlliance" === i._type ? this.addConquestIcon(i) : "HumanOptionFollowers" === i._type && this.actorManager.addActorFollowers(this, i.followingCharactersLook, !0)
            }
    }, o.prototype.remove = function() {
        this.removeIcons(), this.removeCustomAnimTimeout(), (this.pathTween.playing || this.pathTween.starting) && this.pathTween.stop(), this.actorManager._removeActor(this), c.prototype.remove.call(this)
    }, o.prototype.getFighter = function() {
        return window.gui.fightManager.getFighter(this.actorId)
    }, o.prototype.getFighterData = function() {
        var e = this.getFighter();
        return e ? e.data : (console.warn("Fighter " + this.actorId + " could not be found."), new s)
    }, o.prototype.isNPC = function() {
        return Boolean(this.data && this.data.npcId)
    }, o.prototype.getTeamId = function() {
        var e = this.getFighter();
        return e ? this.getFighterData()
            .teamId : -1
    }, o.prototype.isPlayer = function() {
        return this.data.playerId && !this.isFollower
    }, o.prototype.refreshLook = function(e) {
        this.actorManager.setActorLook(this.actorId, this.realLook, {}, e)
    }, o.prototype.hasSameLook = function(e) {
        return !(!e || !this.realLook) && this.realLook.bonesId === e.bonesId
    }
}
