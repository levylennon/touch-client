function(e, t, i) {
    function n() {}

    function o(e) {
        e = void 0 === e || e, this.castingSpellId = null, this.casterId = null, this.targetedCell = null, this.spell = null, this.spellRank = null, this.markId = null, this.markType = null, this.silentCast = null, this.weaponId = -1, this.isCriticalHit = null, this.isCriticalFail = null, this.rollback = E.NONE, e && (this.castingSpellId = o.uniqueSpellId++)
    }

    function a() {
        c.call(this), this.turnCount = 0, this.fightId = null, this.turnsList = [], this.deadTurnsList = [], this.entitiesWithoutTurnList = [], this.currentFighterId = 0, this._lastFighterId = 0, this._fighters = {}, this.fightState = D.UNDEFINED, this.fightType = W, this.isInReconnection = !1, this.isInactive = !1, this.turnStartTime = 0, this.spellCastCounts = {}, this.spellBuffsToIgnore = [], this.buffSkipped = [], this.fightMessagesStack = [], this.isProcessing = !1, this.asyncFightMessages = {
            GameActionFightDispellableEffectMessage: this.addDispellableEffect,
            GameActionFightCloseCombatMessage: this.gameActionFightCloseCombatAndSpell,
            GameActionFightSpellCastMessage: this.gameActionFightCloseCombatAndSpell
        }, s = window.gui.playerData, this._isTurnEndRequestPending = !1, this._finishFightSequenceCb = null, this._spellCasted = [], this.fightSecretOn = !1, this.fightHelpOn = !1, this._swapMessagesReceived = [], this.fightList = [], this.draggingSpellState = !1, this.numberOfHumanInTheFight = 0
    }

    function r(e) {
        switch (e._messageType) {
            case "GameFightRefreshFighterMessage":
            case "GameFightShowFighterMessage":
            case "GameFightShowFighterRandomStaticPoseMessage":
                return e.informations;
            case "GameActionFightSummonMessage":
                return e.summon;
            default:
                return null
        }
    }
    var s, c = i(36)
        .EventEmitter,
        l = i(17)
        .getText,
        d = i(64),
        u = i(56)
        .inherits,
        p = i(60),
        h = i(596),
        f = i(517),
        b = i(675),
        m = i(688),
        M = i(476),
        g = i(732),
        _ = i(685),
        A = i(18),
        O = i(52),
        v = i(683),
        y = i(744),
        z = y.pushStep,
        w = i(746)
        .SpellData.SPELL_STATUS,
        T = i(103),
        C = i(32)
        .shallowCopyArray,
        I = i(13),
        S = i(129),
        E = i(745),
        L = i(91)
        .playUiSound,
        N = i(55),
        R = 1024,
        q = 1097,
        x = 1008,
        B = I.WEAPON_SPELL_ID,
        D = {
            UNDEFINED: -1,
            PREPARATION: 0,
            BATTLE: 1
        },
        W = -1,
        P = {
            isSecret: f.FIGHT_OPTION_SET_SECRET,
            isRestrictedToPartyOnly: f.FIGHT_OPTION_SET_TO_PARTY_ONLY,
            isClosed: f.FIGHT_OPTION_SET_CLOSED,
            isAskingForHelp: f.FIGHT_OPTION_ASK_FOR_HELP
        },
        k = [f.FIGHT_OPTION_SET_TO_PARTY_ONLY, f.FIGHT_OPTION_SET_CLOSED, f.FIGHT_OPTION_ASK_FOR_HELP, f.FIGHT_OPTION_SET_SECRET];
    o.uniqueSpellId = 0;
    var F;
    u(a, c), e.exports = a, a.FIGHT_STATES = D, a.FIGHT_OPTION_KEY_TO_ENUM = P, a.FIGHT_OPTION_ICON_ID = k, a.prototype.INCREMENT_MODE_SOURCE = 1, a.prototype.INCREMENT_MODE_TARGET = 2, a.prototype._swapNotification = function(e) {
        function t() {
            window.dofus.sendMessage("GameFightPlacementSwapPositionsCancelMessage", {
                requestId: e.requestId
            })
        }
        var i = window.gui.notificationBar,
            n = window.gui.playerData;
        this.fightState === D.PREPARATION && n.id === e.requestedId && this.getFighter(e.requesterId) && (i.newNotification("swap_" + e.requestId, {
            type: i.notificationType.INVITATION,
            title: l("ui.fight.swapPosition"),
            text: l("ui.fight.swapPositionOffer", this.getFighter(e.requesterId)
                .name),
            buttons: [{
                label: l("ui.common.refuse"),
                action: t
            }, {
                label: l("ui.common.accept"),
                action: function() {
                    window.dofus.sendMessage("GameFightPlacementSwapPositionsAcceptMessage", {
                        requestId: e.requestId
                    })
                }
            }],
            onClose: t
        }), this._swapMessagesReceived.push(e))
    }, a.prototype.getFighters = function() {
        return window.gui.fightManager.isInFightPreparation() ? this.getOrdonnedPreFighters() : this.turnsList
    }, a.prototype.getDeadFighters = function() {
        return this.deadTurnsList
    }, a.prototype.getAvailableFighters = function() {
        return this._fighters
    }, a.prototype.getAvailableFighterIds = function() {
        return Object.keys(this._fighters)
            .map(function(e) {
                return parseInt(e, 10)
            })
    }, a.prototype.getEntitiesWithoutTurn = function() {
        return this.entitiesWithoutTurnList
    }, a.prototype.getFighter = function(e) {
        return this._fighters[e]
    }, a.prototype.getSummonerId = function(e) {
        return this._fighters[e] ? this._fighters[e].data.stats.summoner : 0
    }, a.prototype.getAmountSummonedCreatures = function() {
        if (!this.isInBattle()) return 0;
        var e = 0,
            t = window.gui.playerData.characterBaseInformations.id,
            i = this;
        return Object.keys(this._fighters)
            .forEach(function(n) {
                var o = i._fighters[n];
                o.isCreature && o.data.alive && o.data.stats.summoner === t && e++
            }), e
    }, a.prototype.getTurnCount = function() {
        return this.turnCount
    }, a.prototype.isInFight = function() {
        return this.fightState === D.PREPARATION || this.fightState === D.BATTLE
    }, a.prototype.isInFightPreparation = function() {
        return this.fightState === D.PREPARATION
    }, a.prototype.isInUndefinedState = function() {
        return this.fightState === D.UNDEFINED
    }, a.prototype.tacticGraphicsOn = function() {
        this._tacticalModeUsed = !0
    }, a.prototype.resetTacticInfo = function() {
        this._tacticalModeUsed = !1
    }, a.prototype.wasTacticalUsed = function() {
        return this._tacticalModeUsed
    }, a.prototype.getFighterSpell = function(e, t, i) {
        var n = this.getAvailableFighters(),
            o = n[t];
        if (!o) return i(new Error("Spell " + e + " could not be found, its fighter " + t + " does not exist"));
        if (o.spells[e]) return i(null, o.spells[e]);
        var a = s.characters,
            r = a.mainCharacter;
        t < 0 && a.slaves[t] && (r = a.slaves[t]);
        var c = r.spellData;
        if (c.spells[e]) return o.spells[e] = c.spells[e].clone(), o.spells[e].setLevel(c.spells[e].level), o.spells[e].ownerId = t, i(null, o.spells[e]);
        for (var l in n)
            if (n.hasOwnProperty(l)) {
                var d = n[l];
                if (d.id === t) continue;
                if (d.spells[e]) return o.spells[e] = d.spells[e].clone(), o.spells[e].ownerId = t, i(null, o.spells[e])
            } g.createSpells([e], function(n, a) {
            return n ? i(n) : (s.id === t && c.spells[e] && a[e].setLevel(c.spells[e].level), o.spells[e] = a[e], o.spells[e].ownerId = t, i(null, o.spells[e]))
        })
    }, a.prototype._checkInactivityOnTurnStart = function() {
        this.isInactive && d.isActiveSince(this.turnStartTime) && (this.isInactive = !1, window.dofus.sendMessage("PlayerFightActiveRequestMessage")), this.turnStartTime = Date.now()
    }, a.prototype.finishTurn = function() {
        this.emit("finishTurn"), window.dofus.sendMessage("GameFightTurnFinishMessage"), this._spellCasted = [], this._isTurnEndRequestPending = !0
    }, a.prototype.initialize = function(e) {
        function t() {
            e.timeline && e.timeline.close(), d.turnsList = [], d.deadTurnsList = [], d.entitiesWithoutTurnList = [], d.currentFighterId = 0, d._lastFighterId = 0;
            for (var t in d._fighters) d._fighters.hasOwnProperty(t) && d.removeFighter(t);
            d._fighters = {}, d.fightState = D.UNDEFINED, d.fightType = W, d.isInReconnection = !1, d.spellCastCounts = {}, d.isInactive = !1, d.fightMessagesStack = [], d.isProcessing = !1, s.isFightLeader = !1, s.isFighting = !1, s.isSpectator = !1, s.characters.switchControlledCharacter(s.characters.mainCharacterId), s.characters.mainCharacter.currentSummonedCreature = 0, s.characters.mainCharacter.currentSummonedBomb = 0, s.characters.clearSlaves(), window.actorManager.removeTeamCircles(), window.actorManager.clearQueuedToCarryActors(), d._isTurnEndRequestPending = !1, d._finishFightSequenceCb = null, d._spellCasted = [], d.numberOfHumanInTheFight = 0
        }

        function i(e) {
            var t = e.id;
            d.currentFighterId = t, "GameFightTurnResumeMessage" !== e._messageType && d.decrementDuration(t), s.characters.canControlCharacterId(t) && (d.spellCastCounts = {}, d._checkInactivityOnTurnStart(), N.showFightNotifications && window.isoEngine.displayTextBanner("ui.fight.animation.userTurn")), d.emit("GameFightTurnStart", e.id, e.waitTime, p.getValue("turnPicture")), d._isTurnEndRequestPending = !1
        }

        function n(e) {
            if (d.fightState === D.PREPARATION) {
                var t = r(e);
                d.emit("UpdatePreFightersList", t.contextualId)
            }
        }

        function o(e, t) {
            var i = d.getAvailableFighters(),
                n = i[e];
            if (!n || !n.data.alive) return console.warn("Fighter was killed previously.");
            z(y.fightDeathStep, [F ? F.castingSpellId : -1, e, !t]);
            var o = n.data.stats.summoner;
            s.characters.canControlCharacterId(o) && (n.isBomb ? s.characters.removeSummonedBomb(o) : s.characters.removeSummonedCreature(o))
        }

        function a(e) {
            for (var t = 0; t < e.dispositions.length; t++)
                for (var i = 0; i < d._swapMessagesReceived.length; i++)
                    if (e.dispositions[t].id > 0 && (d._swapMessagesReceived[i].requesterId === e.dispositions[t].id || d._swapMessagesReceived[i].requestedId === e.dispositions[t].id)) {
                        var n = d._swapMessagesReceived.splice(i, 1);
                        window.gui.notificationBar.removeNotification("swap_" + n[0].requestId)
                    }
        }

        function c() {
            for (; d._swapMessagesReceived.length;) window.gui.notificationBar.removeNotification("swap_" + d._swapMessagesReceived.pop()
                .requestId)
        }
        var d = this;
        this._tacticalModeUsed = !1;
        var u = window.dofus.connectionManager,
            b = e.playerData.characters;
        b.on("spellList", function() {
            var e = d.getFighter(b.controlledCharacterId),
                t = b.getControlledCharacter();
            if (e && t)
                for (var i in e.spells)
                    if (e.spells.hasOwnProperty(i)) {
                        var n = t.spellData.spells[i];
                        n && d._refreshCooldown(e, e.spells[i], n.level)
                    }
        }), e.on("appLeaveBackground", function() {
            d.isInFight() && window.dofus.sendMessage("PlayerFightActiveRequestMessage")
        }), u.on("PlayerFightInactiveMessage", function() {
            d.isInactive = !0, d.numberOfHumanInTheFight > 1 && window.gui.openConfirmPopup({
                title: l("ui.fight.inactivityTitle"),
                message: l("ui.fight.inactivityMessage"),
                noDisable: !0,
                buttonYesLabel: l("ui.common.ok"),
                cb: function() {
                    window.dofus.sendMessage("PlayerFightActiveRequestMessage")
                }
            })
        }), e.on("GameFightStartMessage", function() {
            d._cleanFighters(), d.fightState = D.BATTLE, d.emit("fightEnterBattle"), d.prepareSpellsWithInitialCooldown(s.characters.mainCharacter);
            for (var e in s.characters.slaves) s.characters.slaves.hasOwnProperty(e) && d.prepareSpellsWithInitialCooldown(s.characters.slaves[e]);
            N.showFightNotifications && window.isoEngine.displayTextBanner("ui.fight.animation.fightStarts"), window.actorManager.removeReadyIcon()
        }), e.on("GameFightStartingMessage", function(t) {
            d.fightType = t.fightType, d.turnCount = 0, e.timeline.show(), d.emit("fightStart")
        }), e.on("disconnect", function() {
            t(), v.reset()
        }), e.on("GameFightEndMessage", function(e) {
            var i = d.getAvailableFighters();
            e.results && e.results.length > 0 && !window.gui.scenarioManager.isBehaviourEnabled(S.DISABLE_LEVEL_FIGHT_POPUP) && O.open("fightEnd", {
                msg: e,
                fighters: i
            }), window.gui.playerData.evaluateRatingOpening("fightEnd", {
                fighters: i
            }), v.flush(function(e) {
                e && console.error(e), t(), s.isSpectator || v.send(h.FIGHT_END), v.reset()
            })
        }), e.on("GameFightTurnResumeMessage", function(e) {
            i(e)
        }), e.on("GameFightTurnStartMessage", function(e) {
            i(e)
        }), e.on("GameFightTurnStartSlaveMessage", function(e) {
            i(e)
        }), e.on("GameFightHumanReadyStateMessage", function(e) {
            e.characterId === s.id && d.emit("playerReady", e.isReady), window.actorManager.setReadyIconOnActor(e.characterId, e.isReady)
        }), e.on("confirmTurnEnd", function() {
            var e = s.characters;
            if (d._lastFighterId) {
                var t = d._lastFighterId,
                    i = d.getFighter(t);
                if (!i) return console.warn("Turn confirmation failed, fighter does not exist:", t);
                if (i.data.stats.actionPoints = i.data.stats.maxActionPoints, i.data.stats.movementPoints = i.data.stats.maxMovementPoints, t === e.controlledCharacterId) {
                    var n = e.getControlledCharacter();
                    e.setCharacteristic(n, "actionPointsCurrent", i.data.stats.maxActionPoints), e.setCharacteristic(n, "movementPointsCurrent", i.data.stats.maxMovementPoints);
                    for (var o in i.spells)
                        if (i.spells.hasOwnProperty(o)) {
                            var a = i.spells[o];
                            a.newTurn()
                        } N.showFightNotifications && window.isoEngine.displayTextBanner("ui.fight.animation.endOfUserTurn")
                }
                d.prepareNextPlayableCharacter(), d.emit("gameFightTurnEnd", t)
            }
        }), e.on("GameFightTurnEndMessage", function(e) {
            var t = e.id;
            d._lastFighterId = t;
            var i = d.getFighter(t);
            if (!i) return console.warn("Turn end failed, fighter does not exist");
            if (!i.data.alive && (d.decrementDuration(t), i.data.stats.actionPoints = i.data.stats.maxActionPoints, i.data.stats.movementPoints = i.data.stats.maxMovementPoints, d.emit("gameFightTurnEnd", t), t === s.characters.controlledCharacterId))
                for (var n in i.spells)
                    if (i.spells.hasOwnProperty(n)) {
                        var o = i.spells[n];
                        o.newTurn()
                    }
        }), e.on("GameFightShowFighterMessage", function(e) {
            d.loadFighter(e), n(e)
        }), e.on("GameFightShowFighterRandomStaticPoseMessage", function(e) {
            d.loadFighter(e)
        }), e.on("GameActionFightSummonMessage", function(e) {
            n(e);
            var t = e.sourceId,
                i = e.actionId,
                o = e.summon;
            if (t === s.id && i !== M.ACTION_SUMMON_STATIC_CREATURE) {
                var a = d.getFighter(o.contextualId);
                if (!a) return console.error(new Error("Summoning failed, fighter does not exist"));
                i === x || a.isBomb ? s.characters.addSummonedBomb() : a.isCreature && s.characters.addSummonedCreature()
            }
            z(y.fightSummonStep, [F ? F.castingSpellId : -1, t, o])
        }), e.on("GameFightTurnListMessage", function(e) {
            d.turnsList = e.ids, d.deadTurnsList = e.deadsIds;
            var t = [],
                i = [],
                n = [],
                o = e.fighters;
            for (var a in o) {
                var r = o[a];
                t.push(r.id), r.alive || i.push(r.id), r.staticCharacter && n.push(r.id)
            }
            d.turnsList = t, d.deadTurnsList = i, d.entitiesWithoutTurnList = n, d.emit("FightersListUpdated")
        }), e.on("GameFightSynchronizeMessage", function(e) {
            for (var t = e.fighters, i = d.getAvailableFighters(), n = 0, o = 0; o < t.length; o++) {
                var a = t[o];
                if (a.contextualId > -1 && n++, a.alive) {
                    var r = i[a.contextualId];
                    if (!r) return console.error(new Error("Synchronizing failed, fighter does not exist"));
                    r.synchronizeData(a)
                }
            }
            d.numberOfHumanInTheFight = n
        }), e.on("_GameActionFightLeaveMessage", function(e) {
            o(e.targetId, !0)
        }), e.on("GameActionFightDeathMessage", function(e) {
            o(e.targetId, !1)
        }), e.on("GameFightRefreshFighterMessage", function(e) {
            var t = e.informations,
                i = t.contextualId,
                n = d.getFighter(i);
            return n ? (n.data.updateData({
                look: t.look,
                disposition: t.disposition
            }), void(window.gui.fightManager.isInFightPreparation() && (n.updateFighterIllustration(), d.emit("UpdatePreFightersList", i)))) : console.error(new Error("Refreshing fighter failed, fighter " + i + " does not exist"))
        }), e.on("GameFightRemoveTeamMemberMessage", function(e) {
            var t = e.charId;
            d.removeFighter(t), window.gui.fightManager.isInFightPreparation() && d.emit("UpdatePreFightersList", t)
        }), e.on("GameFightNewRoundMessage", function(e) {
            d.turnCount = e.roundNumber - 1, d.emit("TurnCountUpdated", e.roundNumber - 1)
        }), e.on("GameFightResumeMessage", function(e) {
            d.gameFightResumeMessage(e)
        }), e.on("GameFightResumeWithSlavesMessage", function(e) {
            d.gameFightResumeMessage(e)
        }), e.on("GameFightSpectateMessage", function(e) {
            d.gameFightResumeMessage(e)
        }), e.on("GameActionFightChangeLookMessage", function(e) {
            var t = e.targetId,
                i = d.getFighter(t);
            if (!i) return console.error(new Error("Changing fighter's look failed, fighter does not exist"));
            var n = e.entityLook;
            i.data.updateData({
                look: n
            }), i.updateFighterIllustration(), d.emit(h.FIGHTER_CHANGE_LOOK, [t, n], t)
        }), e.on("GameActionFightDispellEffectMessage", function(e) {
            z(y.fightDispelEffectStep, [F ? F.castingSpellId : -1, e.targetId, e.boostUID])
        }), e.on("GameActionFightDispellSpellMessage", function(e) {
            z(y.fightDispelSpellStep, [F ? F.castingSpellId : -1, e.targetId, e.spellId, e.effectId])
        }), e.on("GameActionFightDispelSpellLevelMessage", function(e) {
            z(y.fightDispelSpellLevelStep, [F ? F.castingSpellId : -1, e.targetId, e.SpellLevelId])
        }), e.on("GameActionFightDispellMessage", function(e) {
            z(y.fightDispelStep, [F ? F.castingSpellId : -1, e.targetId, e.effectId])
        }), e.on("GameActionFightNoSpellCastMessage", function(e) {
            var t, i = e.spellLevelId,
                n = s.characters.getControlledCharacter();
            if (t = 0 === i ? n.spellData.spells[B] : n.spellData.getSpellBySpellLevelId(e.spellLevelId), t && d.spellCastCounts[t.id]) {
                d.spellCastCounts[t.id] -= 1;
                var o = t.getProperty("apCost", t.level);
                s.characters.setCharacteristic(n, "actionPointsCurrent", n.characteristics.actionPointsCurrent + o)
            }
        }), e.on("GameActionFightLifePointsGainMessage", function(e) {
            z(y.fightLifePointsVariationStep, [F ? F.castingSpellId : -1, e.targetId, e.delta, 0, e.actionId, e.effectId, 0])
        }), e.on("GameActionFightLifePointsLostMessage", function(e) {
            z(y.fightLifePointsVariationStep, [F ? F.castingSpellId : -1, e.targetId, -e.loss, -e.permanentDamages, e.actionId, e.effectId, 0])
        }), e.on("GameActionFightLifeAndShieldPointsLostMessage", function(e) {
            z(y.fightShieldPointsVariationStep, [F ? F.castingSpellId : -1, e.targetId, -e.shieldLoss, e.actionId, e.effectId]), z(y.fightLifePointsVariationStep, [F ? F.castingSpellId : -1, e.targetId, -e.loss, -e.permanentDamages, e.actionId, e.effectId, e.shieldLoss])
        }), e.on("GameActionFightPointsVariationMessage", function(e) {
            var t = e.targetId,
                i = e.actionId,
                n = e.delta;
            i === M.ACTION_CHARACTER_ACTION_POINTS_USE || i === M.ACTION_CHARACTER_ACTION_POINTS_LOST || i === M.ACTION_CHARACTER_ACTION_POINTS_WIN ? z(y.fightActionPointsVariationStep, [F ? F.castingSpellId : -1, t, n, i === M.ACTION_CHARACTER_ACTION_POINTS_USE]) : i !== M.ACTION_CHARACTER_MOVEMENT_POINTS_USE && i !== M.ACTION_CHARACTER_MOVEMENT_POINTS_LOST && i !== M.ACTION_CHARACTER_MOVEMENT_POINTS_WIN || z(y.fightMovementPointsVariationStep, [F ? F.castingSpellId : -1, t, n, i === M.ACTION_CHARACTER_MOVEMENT_POINTS_USE])
        }), e.on("GameActionFightVanishMessage", function(e) {
            var t = e.targetId,
                i = d.getFighter(t);
            return i ? (i.setAlive(!1), i.dispel(!1, !1, !0), void d.removeLinkedBuff(t)) : console.warn(new Error("Vanish failed, fighter does not exist"))
        }), u.on("CharacterSelectedForceMessage", function() {
            d.isInReconnection = !0
        }), e.on("GameFightJoinMessage", function(e) {
            d.fightState = e.isFightStarted ? D.BATTLE : D.PREPARATION, d.fightType = e.fightType, window.actorManager.userActor.noMovement();
            var t = e.isSpectator;
            t ? window.actorManager.userActor.hide() : window.actorManager.userActor.show(), s.isSpectator = t, s.isFighting = !0, e.isFightStarted ? (N.showFightNotifications && window.isoEngine.displayTextBanner("ui.fight.animation.fightStarts"), d.emit("fightEnterBattle", "PREPARATION_SKIPPED")) : (N.showFightNotifications && window.isoEngine.displayTextBanner("ui.fight.animation.preparationPhase"), L("INTRO_FIGHT"), d.emit("fightEnterPreparation", e))
        }), e.on("GameActionFightSpellCooldownVariationMessage", function(e) {
            z(y.fightSpellCooldownVariationStep, [F ? F.castingSpellId : -1, e.targetId, e.spellId, e.value])
        }), e.on("GameActionFightModifyEffectsDurationMessage", function(e) {
            z(y.fightModifyEffectsDurationStep, [F ? F.castingSpellId : -1, e.sourceId, e.targetId, e.delta, e.effectId])
        }), e.on("GameActionFightExchangePositionsMessage", function(e) {
            z(y.fightExchangePositionsStep, [F ? F.castingSpellId : -1, e.sourceId, e.casterCellId, e.targetId, e.targetCellId, F.rollback])
        }), e.on("GameActionFightSlideMessage", function(e) {
            z(y.fightSlideStep, [F ? F.castingSpellId : -1, e.targetId, e.endCellId, e.startCellId])
        }), e.on("GameActionFightTeleportOnSameMapMessage", function(e) {
            z(y.fightTeleportOnSameMapStep, [F ? F.castingSpellId : -1, e.targetId, e.cellId, F.rollback])
        }), e.on("GameMapMovementMessage", function(e) {
            var t = e.keyMovements[e.keyMovements.length - 1];
            z(y.mapMovementStep, [F ? F.castingSpellId : -1, e.actorId, t, e.keyMovements])
        }), e.on("GameActionFightCarryCharacterMessage", function(e) {
            z(y.fightCarryCharacterStep, [F ? F.castingSpellId : -1, e.sourceId, e.targetId])
        }), e.on("GameActionFightThrowCharacterMessage", function(e) {
            z(y.fightThrowCharacterStep, [F ? F.castingSpellId : -1, e.sourceId, e.targetId, e.cellId])
        }), e.on("GameActionFightDropCharacterMessage", function(e) {
            z(y.fightThrowCharacterStep, [F ? F.castingSpellId : -1, e.sourceId, e.targetId, e.cellId])
        }), e.on("sendAllFightEvent", function() {
            v.flush()
        }), e.on("GameActionFightReduceDamagesMessage", function(e) {
            z(y.fightReduceDamages, [F ? F.castingSpellId : -1, e.targetId, e.amount, e.effectId])
        }), e.on("GameActionFightDodgePointLossMessage", function(e) {
            var t = e.actionId;
            t === M.ACTION_FIGHT_SPELL_DODGED_PA ? z(y.fightActionPointsLossDodge, [F ? F.castingSpellId : -1, e.targetId, e.amount, e.effectId]) : t === M.ACTION_FIGHT_SPELL_DODGED_PM && z(y.fightMovementPointsLossDodge, [F ? F.castingSpellId : -1, e.targetId, e.amount, e.effectId])
        }), e.on("GameActionFightSpellImmunityMessage", function(e) {
            z(y.fightSpellImmunity, [F ? F.castingSpellId : -1, e.targetId, e.effectId])
        }), e.on("GameActionFightReflectSpellMessage", function(e) {
            z(y.fightReflectSpellStep, [F ? F.castingSpellId : -1, e.targetId, e.effectId])
        }), e.on("GameActionFightReflectDamagesMessage", function(e) {
            z(y.fightReflectDamagesStep, [F ? F.castingSpellId : -1, e.sourceId, e.effectId])
        }), e.on("GameActionFightTackledMessage", function(e) {
            z(y.fightTackledStep, [F ? F.castingSpellId : -1, e.sourceId])
        }), e.on("GameActionFightKillMessage", function(e) {
            z(y.fightKillStep, [F ? F.castingSpellId : -1, e.targetId, e.sourceId])
        }), e.on("GameActionFightInvisibilityMessage", function(e) {
            z(y.fightInvisibilityStep, [F ? F.castingSpellId : -1, e.targetId, e.state, e.effectId])
        }), e.on("GameActionFightTriggerGlyphTrapMessage", function(e) {
            z(y.fightTriggerGlyphTrapStep, [F ? F.castingSpellId : -1, e.triggeringCharacterId, e.sourceId, e._spellId, e.effectId])
        }), e.on("GameFightUpdateTeamMessage", function(e) {
            e.team.teamMembers.forEach(function(t) {
                t.id === s.id && (d.fightId = e.fightId, s.isFightLeader = e.team.leaderId === s.id, d.emit("fightLeaderFound"))
            })
        }), u.on("GameFightPlacementSwapPositionsMessage", function(e) {
            window.actorManager.setActorsDisposition(e.dispositions, !0)
        }), u.on("GameFightPlacementSwapPositionsErrorMessage", function() {
            e.openPopup({
                title: l("ui.common.error"),
                message: l("ui.fight.swapPositionError")
            })
        }), e.on("GameFightOptionStateUpdateMessage", function(e) {
            d.fightId = e.fightId, e.option === f.FIGHT_OPTION_SET_SECRET ? d.fightSecretOn = e.state : e.option === f.FIGHT_OPTION_ASK_FOR_HELP && (d.fightHelpOn = e.state), d.emit("fightOptionUpdate", e)
        }), u.on("GameContextDestroyMessage", function() {
            T.isRoleplayMode || (d.fightState = D.UNDEFINED)
        }), u.on("GameFightPlacementSwapPositionsOfferMessage", function(e) {
            for (var t = 0; t < d._swapMessagesReceived.length; t++)
                if (d._swapMessagesReceived[t].requesterId === e.requesterId) {
                    var i = d._swapMessagesReceived.splice(t, 1);
                    window.gui.notificationBar.removeNotification("swap_" + i[0].requestId);
                    break
                } d._swapNotification(e)
        }), u.on("GameEntitiesDispositionMessage", function(e) {
            a(e)
        }), u.on("GameFightPlacementSwapPositionsMessage", function(e) {
            a(e)
        }), u.on("GameFightStartMessage", function() {
            c()
        }), u.on("GameFightEndMessage", function() {
            c()
        }), u.on("GameFightRemoveTeamMemberMessage", function(e) {
            for (var t = 0; t < d._swapMessagesReceived.length; t++)
                if (d._swapMessagesReceived[t].requesterId === e.charId) {
                    var i = d._swapMessagesReceived.splice(t, 1);
                    window.gui.notificationBar.removeNotification("swap_" + i[0].requestId)
                }
        }), u.on("GameRolePlayShowChallengeMessage", function(e) {
            d.fightList.push(e.commonsInfos)
        }), u.on("MapComplementaryInformationsDataMessage", function(e) {
            d.fightList = [];
            for (var t in e.fights) d.fightList.push(e.fights[t])
        }), u.on("GameRolePlayRemoveChallengeMessage", function(e) {
            for (var t in d.fightList) {
                var i = d.fightList[t];
                if (i.fightId === e.fightId) {
                    d.fightList.splice(t, 1);
                    break
                }
            }
        })
    }, a.prototype.getNextControllableCharacterId = function() {
        var e = this.turnsList,
            t = e.length;
        if (0 === t) return s.characters.controlledCharacterId;
        for (var i = e.indexOf(this.currentFighterId), n = 1; n <= t; n++) {
            var o = e[(i + n) % t],
                a = this.getFighter(o);
            if (!a) return console.error(new Error("Find next controllable character failed, fighter does not exist")), null;
            if (s.characters.canControlCharacterId(o) && a.data.alive) return o
        }
        return s.characters.controlledCharacterId
    }, a.prototype.prepareNextPlayableCharacter = function() {
        var e = this.getNextControllableCharacterId();
        e && s.characters.switchControlledCharacter(e)
    }, a.prototype.removeFighter = function(e) {
        var t = this.getFighter(e);
        return t ? (t.clear(), void delete this._fighters[e]) : console.warn("Removing fighter failed, it does not exist")
    }, a.prototype._cleanFighters = function() {
        for (var e in this._fighters) {
            if (this._fighters.hasOwnProperty(e)) {
                var t = this._fighters[e];
                t.id <= 0 && "" === t.name && t.data.disposition.cellId === -1 && "GameFightCharacterInformations" === t.data._type && !t.isBomb && !t.isCreature && (this.removeFighter(e), window.actorManager.removeActor(e))
            }
            this.emit("UpdatePreFightersList")
        }
    }, a.prototype.getFight = function(e) {
        for (var t = 0; t < this.fightList.length; t++)
            if (this.fightList[t].fightId === e) return this.fightList[t];
        return {}
    }, a.prototype.getFightMaxPerTeam = function(e) {
        var t = this.getFight(e);
        return t.maxFighterPerTeam ? t.maxFighterPerTeam : 4
    }, a.prototype.loadFighter = function(e) {
        var t = e.actionId,
            i = "GameFightShowFighterRandomStaticPoseMessage" === e._type || t === R || t === q,
            n = r(e);
        if (!n) return void console.error(new Error("Fighter information could not be extracted from this message type: " + e._messageType));
        var o = n.contextualId,
            a = this.getFighter(o);
        a || (o || console.error(new Error("Fighter id is missing from this message type: " + e._messageType)), a = new m(o, i), this._fighters[o] = a), a.setData(n);
        var s = window.actorManager.getActor(a.id);
        s && s.addTeamCircle()
    }, a.prototype.prepareSpellsWithInitialCooldown = function(e) {
        function t(e, t) {
            return e ? console.error(e) : void t.resetInitialCooldown(i.turnCount)
        }
        var i = this,
            n = e.spellData.getSpells(w.USABLE);
        for (var o in n)
            if (n.hasOwnProperty(o)) {
                var a = n[o];
                if (a.isItem || 0 === a.spellLevel.initialCooldown) continue;
                this.getFighterSpell(o, e.spellData.characterId, t)
            }
    }, a.prototype.addDispellableEffect = function(e, t) {
        function i() {
            function i(i, o) {
                if (i) return console.error(i);
                var a = o.visibleInFightLog;
                if (o.timeCreationStarted = c.timeCreationStarted, o instanceof b.StateBuff && (952 === o.actionId ? z(y.fightLeavingStateStep, [F ? F.castingSpellId : -1, o.targetId, o.stateId, a]) : z(y.fightEnteringStateStep, [F ? F.castingSpellId : -1, o.targetId, o.stateId, o.effect.getDurationString(), a])), "FightTemporaryBoostEffect" === n._type) {
                    var r = e.actionId;
                    r !== M.ACTION_CHARACTER_MAKE_INVISIBLE && r !== M.ACTION_CHARACTER_UPDATE_BOOST && r !== M.ACTION_CHARACTER_CHANGE_LOOK && r !== M.ACTION_CHARACTER_CHANGE_COLOR && r !== M.ACTION_CHARACTER_ADD_APPEARANCE && r !== M.ACTION_FIGHT_SET_STATE && z(y.fightTemporaryBoostStep, [F ? F.castingSpellId : -1, e.effect.targetId, o.effect.description, o.effect.duration, o.effect.getDurationString(), a])
                }
                return z(y.fightDisplayBuffStep, [F ? F.castingSpellId : -1, o]), delete o.timeCreationStarted, t()
            }
            var n = e.effect;
            b.makeBuffFromEffect(n, s, e.actionId, i)
        }
        var n = e && e.effect || {},
            a = n.effectId,
            r = n.spellId;
        e.effect.effectCaller = "FightManager: GameActionFightDispellableEffectMessage from spellId:" + r, e.effect.effectCaller += ",effectId:" + a, e.effect.effectCaller += ",params:" + [n.param1, n.param2, n.param3].join(",");
        var s;
        s = new o(e.actionId === M.ACTION_CHARACTER_UPDATE_BOOST ? !1 : !F), F && (s.castingSpellId = F.castingSpellId, F.spell.id === r && (s.spellRank = F.spellRank));
        var c = this;
        s.casterId = e.sourceId, this.getFighterSpell(r, s.casterId, function(e, n) {
            return e ? t(e) : n ? (s.spell = n, void i()) : t(new Error("unable to find spell id " + r))
        })
    }, a.prototype.gameActionFightCloseCombatAndSpell = function(e, t) {
        var i = this,
            n = "GameActionFightCloseCombatMessage" === e._messageType,
            a = 0;
        n && (e.spellId = B, e.spellLevel = 1, a = e.weaponGenericId), this.spellCastCounts[e.spellId] && (this.spellCastCounts[e.spellId] = this.spellCastCounts[e.spellId] - 1), this.getFighterSpell(e.spellId, e.sourceId, function(r, c) {
            if (r) return t(r);
            if (!c) return t(new Error("unable to find spell id " + e.spellId));
            F = new o, F.casterId = e.sourceId, F.spell = c, F.spellRank = n ? null : c.getProperty("spellLevel", e.spellLevel), F.isCriticalFail = e.critical === _.CRITICAL_FAIL, F.isCriticalHit = e.critical === _.CRITICAL_HIT, F.silentCast = e.silentCast, n && (F.weaponId = e.weaponGenericId), 0 === i.currentFighterId && i.spellBuffsToIgnore.push(F);
            var l = s.characters,
                d = l.controlledCharacterId,
                u = e.sourceId === d;
            u && e.critical !== _.CRITICAL_FAIL && c.cast(i.turnCount, [e.targetId]), n && 0 !== a ? z(y.fightCloseCombatStep, [F ? F.castingSpellId : -1, e.sourceId, a, e.critical, e.targetId, e.destinationCellId, e.silentCast]) : (z(y.fightSpellCastStep, [F ? F.castingSpellId : -1, e.sourceId, e.spellId, e.critical, e.effectId, e.targetId, e.destinationCellId, e.silentCast]), c.spellLevel && c.spellLevel.effects.forEach(function(e) {
                e.isPreview || (e.effectId === M.ACTION_FIGHT_ROLLBACK_PREVIOUS_POSITION ? F.rollback = E.PREVIOUS_POSITION : e.effectId === M.ACTION_FIGHT_ROLLBACK_TURN_BEGIN_POSITION && (F.rollback = E.BEGINNING_POSITION))
            }));
            var p = i.getFighter(e.sourceId),
                h = i.getFighter(l.controlledCharacterId),
                f = h && h.data.teamId === p.data.teamId;
            if (!u && f && !F.isCriticalFail) {
                var b = l.getControlledCharacter();
                if (b) {
                    var m = b.spellData.getSpells(w.USABLE),
                        g = m[e.spellId];
                    if (g) {
                        var A = c.getProperty("globalCooldown");
                        A === -1 && (A = g.getProperty("minCastInterval")), A && z(y.fightSpellCooldownVariationStep, [F.castingSpellId, d, e.spellId, A])
                    }
                }
            }
            t()
        })
    }, a.prototype._refreshCooldown = function(e, t, i) {
        var n = t.getCooldown(e);
        t.setLevel(i), t.forceCooldown(n), window.gui.shortcutBar.updateSpellAvailability(t.id)
    }, a.prototype._restoreSpellCooldown = function(e, t, i) {
        var n = window.gui.shortcutBar;
        return t.cast(this.turnCount, [], !1), t.forceCooldown(e.cooldown), n.updateSpellAvailability(t.id), i()
    }, a.prototype._restoreCooldowns = function(e, t, i) {
        var n = this;
        if (!t || 0 === t.length) return i();
        var o = this.getFighter(e);
        return o ? void A.each(t, function(t, i) {
            if ("GameFightSpellCooldown" !== t._type) return i();
            var a = t.spellId,
                r = o.spells[a];
            return r ? n._restoreSpellCooldown(t, r, i) : void n.getFighterSpell(a, e, function(e, o) {
                return e ? i(e) : n._restoreSpellCooldown(t, o, i)
            })
        }, function(e) {
            i(e)
        }) : console.error(new Error("Restoring cooldowns failed, fighter does not exist."))
    }, a.prototype._restoreBuffs = function(e) {
        function t(e, t, i, o) {
            b.makeBuffFromEffect(e, t, i, function(e, t) {
                if (e) return o(e);
                var i = n.getFighter(t.targetId);
                if (!i) return o(new Error("Restoring buffs failed, fighter does not exist"));
                var a = !(t instanceof b.StatBuff);
                return i.addBuff(t, a), o()
            })
        }

        function i(e, i) {
            var r = e.effect || {},
                s = r.effectId,
                c = r.spellId;
            r.effectCaller || (r.effectCaller = "restored buff spellId: " + c, r.effectCaller += ",effectId:" + s, r.effectCaller += ",params:" + [r.param1, r.param2, r.param3].join(",")), a[r.targetId] || (a[r.targetId] = {}), a[r.targetId][r.turnDuration] || (a[r.targetId][r.turnDuration] = {});
            var l = a[r.targetId][r.turnDuration][r.spellId];
            return l ? void t(r, l, e.actionId, i) : (l = new o, l.casterId = n.getFighter(e.sourceId) ? e.sourceId : e.effect.targetId, n.getFighterSpell(r.spellId, l.casterId, function(n, o) {
                return n ? i(n) : o ? (l.spell = o, a[r.targetId][r.turnDuration][r.spellId] = l, void t(r, l, e.actionId, i)) : i(new Error("unable to find spell id " + r.spellId))
            }))
        }
        var n = this,
            a = {};
        A.eachSeries(e, function(e, t) {
            return i(e, t)
        }, function(e) {
            if (n.isInReconnection = !1, e) return console.error(e)
        })
    }, a.prototype.gameFightResumeMessage = function(e) {
        var t = this;
        if (s.characters.mainCharacter.currentSummonedCreature = e.summonCount, s.characters.mainCharacter.currentSummonedBomb = e.bombCount, this.turnCount = e.gameTurn - 1, this.emit("TurnCountUpdated", e.gameTurn - 1), "GameFightSpectateMessage" === e._messageType) return t._restoreBuffs(e.effects), v.flush();
        var i = e.slavesInfo || [];
        i.unshift({
            slaveId: s.characters.mainCharacterId,
            spellCooldowns: e.spellCooldowns
        }), A.eachSeries(i, function(e, i) {
            return t._restoreCooldowns(e.slaveId, e.spellCooldowns, i)
        }, function(i) {
            return i ? console.error(i) : t._restoreBuffs(e.effects)
        })
    }, a.prototype.getOrdonnedPreFighters = function() {
        function e(e, t) {
            return e.init === t.init ? t.fighter - e.fighter : t.init - e.init
        }
        var t = [],
            i = [],
            n = [],
            o = 0,
            a = 0,
            r = this.getAvailableFighters();
        for (var s in r)
            if (r.hasOwnProperty(s)) {
                var c = r[s],
                    l = c.data.stats;
                if (l) {
                    l.initiative || 0 === l.initiative || (console.warn("Initiative stats is not defined, it will be initialized at 0."), l.initiative = 0);
                    var d = ~~(l.initiative * l.lifePoints / l.maxLifePoints);
                    0 === c.data.teamId ? (n.push({
                        fighter: s,
                        init: d
                    }), o += d) : (i.push({
                        fighter: s,
                        init: d
                    }), a += d)
                }
            } n.sort(e), i.sort(e);
        var u = n,
            p = i;
        (0 === n.length || 0 === i.length || o / n.length < a / i.length) && (u = i, p = n);
        var h, f = Math.min(u.length, p.length);
        for (h = 0; h < f; h++) t.push(u[h].fighter), t.push(p[h].fighter);
        var b = n.length > i.length ? n : i;
        for (f = b.length; h < f; h++) t.push(b[h].fighter);
        return t
    }, a.prototype.canCastThisSpell = function(e) {
        var t = s.characters.getControlledCharacter(),
            i = s.characters.controlledCharacterId,
            n = this.getFighter(i);
        if (!n) return !1;
        var o = n.states,
            a = t.spellData.getSpellStatus(e) === w.USABLE;
        if (!a) return !1;
        var r = t.spellData.spells[e];
        if (!r || !r.isLoaded) return !1;
        var c, l = r.getProperty("apCost"),
            d = t.characteristics.actionPointsCurrent;
        if (l > d) return !1;
        var u = r.getProperty("castRestrictedOnMaxInvoc"),
            p = r.getProperty("canSummon");
        if ((p || u) && !s.characters.canSummonCreature()) return !1;
        var h = r.getProperty("canBomb");
        if (h && !s.characters.canSummonBomb()) return !1;
        var f = r.getProperty("statesForbidden"),
            b = r.getProperty("statesRequired");
        for (c = 0; c < o.length; c++) {
            var m = window.gui.databases.SpellStates[o[c]];
            if (f && f.length > 0 && f.indexOf(o[c]) !== -1) return !1;
            if (e === B && m && m.preventsFight) return !1
        }
        if (b)
            for (c = 0; c < b.length; c++)
                if (o.indexOf(b[c]) === -1) return !1;
        var M = n.spells[e];
        if (M && M.hasBeenCast()) {
            var g = M.getProperty("maxCastPerTurn");
            if (g > 0 && M.castingData.castThisTurn >= g) return !1;
            if (M.getCooldown(n) > 0) return !1
        }
        return !0
    }, a.prototype.getSpellCooldown = function(e) {
        var t = s.characters.controlledCharacterId,
            i = this.getFighter(t);
        if (!i || !i.spells[e]) return 0;
        var n = i.spells[e].getCooldown(i);
        return Math.max(0, n)
    }, a.prototype.decrementDuration = function(e) {
        this.incrementDuration(e, -1)
    }, a.prototype.incrementDuration = function(e, t, i, n) {
        void 0 === n && (n = this.INCREMENT_MODE_SOURCE);
        var o, a = this.getAvailableFighters();
        for (var r in a)
            if (a.hasOwnProperty(r)) {
                o = [];
                for (var s = a[r], c = s.buffs, l = 0; l < c.length; l++) {
                    var d = c[l],
                        u = a[d.aliveSource];
                    if (n === this.INCREMENT_MODE_SOURCE && d.aliveSource === e || n === this.INCREMENT_MODE_TARGET && d.targetId === e || (!u || u && !u.data.alive) && d.targetId === e) {
                        var p = this.spellBuffsToIgnore.length;
                        if (n === this.INCREMENT_MODE_SOURCE && p && this.buffSkipped.indexOf(d.id) === -1) {
                            for (var h = !1, f = 0; f < p; f++) {
                                var b = this.spellBuffsToIgnore[f];
                                if (b.castingSpellId === d.castingSpell.castingSpellId && b.casterId === e) {
                                    h = !0, this.buffSkipped.push(d.id);
                                    break
                                }
                            }
                            if (h) {
                                o.map(function(e) {
                                        return e.id
                                    })
                                    .indexOf(d.id) === -1 && o.push(d);
                                continue
                            }
                        }
                        var m = d.incrementDuration(t, i);
                        d.isActive() ? (o.push(d), m && this.emit("BuffUpdate", d, s)) : (d.remove(), this.emit("BuffRemove", d, s))
                    } else o.push(d)
                }
                s.buffs = o
            }
    }, a.prototype.removeLinkedBuff = function(e) {
        var t = this.getAvailableFighters();
        for (var i in t)
            if (t.hasOwnProperty(i))
                for (var n = t[i], o = C(n.buffs), a = 0; a < o.length; a++) {
                    var r = o[a];
                    r.source === e && n.dispelUniqueBuff(r.id, !1, !0, !1), n.isBomb && (r.aliveSource = n.data.stats.summoner)
                }
    }, a.prototype.castSpell = function(e, t, i) {
        this._spellCasted.push(e), window.dofus.sendMessage("GameActionFightCastRequestMessage", {
            spellId: e,
            cellId: t
        }), this.spellCastSucceeded(e, i)
    }, a.prototype.castSpellOnTarget = function(e, t, i) {
        this._spellCasted.push(e), window.dofus.sendMessage("GameActionFightCastOnTargetRequestMessage", {
            spellId: e,
            targetId: t
        }), this.spellCastSucceeded(e, i)
    }, a.prototype.spellCastSucceeded = function(e, t) {
        if (this.emit("spellCasted"), s.characters.controlledCharacterId === t) {
            var i = this.spellCastCounts[e];
            this.spellCastCounts[e] = i ? i + 1 : 1;
            var n = s.characters.getControlledCharacter(),
                o = n.spellData.spells[e],
                a = o.getProperty("apCost", o.level);
            s.characters.setCharacteristic(n, "actionPointsCurrent", n.characteristics.actionPointsCurrent - a)
        }
    }, a.prototype.emptyFightMessagesStack = function() {
        this.fightMessagesStack = []
    }, a.prototype.processFightSequenceMessage = function(e, t) {
        function i(e) {
            if (t(), e && console.error(e), o.isProcessing = !1, o.fightMessagesStack.length) {
                var i = o.fightMessagesStack.shift();
                o.processFightSequenceMessage(i.msg, i.callback)
            } else {
                if (o._finishFightSequenceCb) {
                    var n = o._finishFightSequenceCb;
                    o._finishFightSequenceCb = null, o.timeCreationStarted = null, n()
                }
                var a = window.gui.playerData.characters;
                a.controlledCharacterId && o.refreshStats()
            }
        }
        if (t = t || n, this.timeCreationStarted = this.timeCreationStarted ? this.timeCreationStarted : Date.now(), this.isProcessing) return this.fightMessagesStack.push({
            msg: e,
            callback: t
        });
        var o = this;
        this.isProcessing = !0;
        var a = this.asyncFightMessages[e._messageType];
        return a ? (window.gui.emit(e._messageType, e), a.call(this, e, i)) : (window.gui.emit(e._messageType, e), void i())
    }, a.prototype.refreshStats = function() {
        this._spellCasted.shift();
        var e = window.gui.playerData.characters;
        e.emitCharacteristicsUpdate(e.getControlledCharacter()), this.emit("updateSpellsAvailability")
    }, a.prototype.finishFightSequence = function(e) {
        e && (this._finishFightSequenceCb && console.error("FightManager.finishFightSequence: _finishFightSequenceCb was already set"), this._finishFightSequenceCb = e), this.processFightSequenceMessage({
            _messageType: "sendAllFightEvent"
        })
    }, a.prototype.correctActionPoint = function(e, t) {
        for (var i = window.gui.playerData, n = 0, o = 0; o < this._spellCasted.length; o++) this._spellCasted[o] === e && n++;
        var a = n * t,
            r = i.characters.getControlledCharacter();
        i.characters.setCharacteristic(r, "actionPointsCurrent", r.characteristics.actionPointsCurrent + a)
    }, a.prototype.isInBattle = function() {
        return this.fightState === D.BATTLE
    }, a.prototype.isFightersTurn = function(e) {
        return this.currentFighterId === e
    }, a.prototype.getIsTurnEndRequestPending = function() {
        return this._isTurnEndRequestPending
    }, a.prototype.isFighterOnUsersTeam = function(e) {
        var t = this.getFighter(window.actorManager.userActor.actorId);
        return !!t && t.isOnSameTeam(e)
    }, a.prototype.contextQuit = function() {
        window.dofus.sendMessage("GameContextQuitMessage", {
            fightId: this.fightId
        })
    }, a.prototype.joinSpectator = function(e, t) {
        this.fightId = e, window.dofus.sendMessage("GameFightJoinRequestMessage", {
            fightId: e,
            fighterId: t
        })
    }, a.prototype.getFightList = function() {
        return this.fightList
    }, a.prototype.setDraggingSpellState = function(e) {
        this.draggingSpellState = e
    }, a.prototype.getDraggingSpellState = function() {
        return this.draggingSpellState
    }
}
