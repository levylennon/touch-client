function(e, t, i) {
    function n() {
        this.currentStep = null, this.currentStepId = -1, this.currentSpecialStepId = -1, this.currentQuestId = -1, this._dialogsData = null, this._interactionApplied = !0, this._hasTutorialQuest = !1, this._init = !1, this._setupListeners(), this._init = !0, this.conditionTypeEnum = p
    }
    var o = i(59)
        .EventEmitter,
        a = i(1424),
        r = i(130),
        s = i(52),
        c = i(56)
        .inherits,
        l = i(13),
        d = i(448),
        u = i(105),
        p = {
            WINDOW_CLOSED: 0,
            MOVEMENT_CONFIRM: 1,
            FIGHT_TAP: 2,
            PLACEMENT_TAP: 3,
            SPELL_CASTED: 4,
            TAP_ANYWHERE: 5,
            FINISH_TURN: 6,
            SPELL_SELECTED: 7,
            SPELL_CANCELED: 8,
            FIGHT_START: 9,
            FIGHT_PLACEMENT_POSITION: 10,
            WEAPON_CHANGED: 11,
            NPC_INTERACTION: 12,
            SHOW_CONFIRM_BUTTON: 13,
            CONFIRM_UPGRADE_SPELL: 14,
            WINDOW_OPENED: 15,
            CHANGE_MAP: 16,
            FIGHTER_TURN: 17,
            CHARAC_UPDATE: 18,
            NEW_QUEST_START: 19,
            QUEST_ALREADY_STARTED: 20,
            FAKE_SHOP_BUY: 21,
            HIGHLIGHT_ELEMENTS: 22,
            LEVEL_UP: 23,
            SHOP_LOADED: 24,
            WINDOW_OPENING_FINISHED: 25,
            MAP_LOADED: 26,
            SUBCATEGORY_OPEN: 27,
            SHOP_ITEM_SELECTED: 28,
            SHOP_ITEM_BOUGHT: 29,
            FORCE_NEXT_STEP: 30,
            INFO_BTN_SELL_HOVER: 31,
            INTERACTIVE_USED: 32,
            TOOLTIP_DISPLAYED: 33,
            FORCE_NEXT_SPECIAL_STEP: 34,
            CONTEXTUAL_MENU_OPEN: 35,
            CONTEXTUAL_MENU_CLOSE: 36,
            CRAFT_MERGE: 37,
            CRAFT_RECIPE: 38,
            CRAFT_ITEM_ADDED: 39,
            BESTIARY_MONSTER_DROP_LOADED: 40,
            BESTIARY_MONSTER_DESELECTED: 41,
            BESTIARY_MONSTER_LOADED: 42,
            BESTIARY_MONSTER_START_LOADING: 43,
            TRADE_CONFIRM: 44,
            TRADE_ADD_ITEM: 45,
            FAKE_STORAGE_LOADED: 46,
            STORAGE_WILL_RELOAD: 47,
            OBJECTIVE_VALIDATE: 48
        };
    c(n, o), e.exports = n, n.prototype.verifyOwnedTutorialQuest = function() {
        var e = window.gui.playerData.quests.active;
        this._hasTutorialQuest = !1;
        for (var t in a.TUTORIALS)
            if (a.TUTORIALS.hasOwnProperty(t) && e[t]) {
                this._hasTutorialQuest = !0;
                break
            }
    }, n.prototype.checkTutorialState = function(e) {
        if (e = e || {}, !this._hasTutorialQuest) return void this.stopScenario();
        var t = a.TUTORIALS[this.currentQuestId];
        if (t)
            if (t.startingCondition(e)) {
                if (this.currentQuestId !== e.questId) return;
                if (!this._hasStepChanged()) return;
                var i = this._getCurrentStepFromTutorial(e.questId);
                if (this.changeStep(e.questId, i), i !== -1) return
            } else this.stopScenario();
        var n = window.gui.playerData.quests.active;
        if (!n) return void this.stopScenario();
        for (var o in a.TUTORIALS)
            if (a.TUTORIALS.hasOwnProperty(o) && n[o] && a.TUTORIALS[o].startingCondition(e) && this._getCurrentStepFromTutorial(o) !== -1) return void this.playScenario(o);
        this.stopScenario()
    }, n.prototype._setupListeners = function() {
        var e = this;
        this._init || (window.isoEngine.on("disconnect", function() {
            e.stopScenario(), e.changeSpecialStep(-1)
        }), window.isoEngine.on("mapChange", function(t) {
            e.checkTutorialState({
                subAreaId: t.subAreaId,
                mapId: t.mapId
            })
        }), window.isoEngine.on("mapLoaded", function() {
            e.readyToRestartStep(), e.checkCondition(p.CHANGE_MAP), e.checkCondition(p.MAP_LOADED)
        }), s.on("open", function(t) {
            var i = {
                windowId: t.id,
                tabId: t.extraParams && t.extraParams.tabId
            };
            e.checkCondition(p.WINDOW_OPENED, i)
        }), s.on("opened", function(t) {
            var i = {
                windowId: t.id,
                tabId: t.extraParams && t.extraParams.tabId
            };
            e.checkCondition(p.WINDOW_OPENING_FINISHED, i)
        }), s.on("closed", function(t) {
            e.checkCondition(p.WINDOW_CLOSED, {
                windowId: t.id
            })
        }), window.isoEngine.on("highlightElements", function() {
            e.checkCondition(p.HIGHLIGHT_ELEMENTS)
        }), window.isoEngine.on("movementConfirm", function(t) {
            e.checkCondition(p.MOVEMENT_CONFIRM, {
                cellId: t
            })
        }), window.isoEngine.on("fightTap", function(t) {
            e.checkCondition(p.FIGHT_TAP, {
                cellId: t
            })
        }), window.isoEngine.on("placementTap", function(t) {
            e.checkCondition(p.PLACEMENT_TAP, {
                cellId: t
            })
        }), window.gui.fightManager.on("spellCasted", function() {
            e.checkCondition(p.SPELL_CASTED)
        }), window.gui.wBody.on("dom.touchend", function() {
            e.checkCondition(p.TAP_ANYWHERE)
        }), window.gui.fightManager.on("GameFightTurnStart", function(t) {
            e.checkCondition(p.FIGHTER_TURN, {
                id: t
            })
        }), window.gui.fightManager.on("finishTurn", function() {
            e.checkCondition(p.FINISH_TURN)
        }), window.foreground.on("spellSelected", function() {
            e.checkCondition(p.SPELL_SELECTED)
        }), window.foreground.on("spellCanceled", function() {
            e.checkCondition(p.SPELL_CANCELED)
        }), window.gui.on("GameFightStartMessage", function() {
            e.checkCondition(p.FIGHT_START)
        }), window.foreground.on("fightPlacementPosition", function() {
            e.checkTutorialState(), e.checkCondition(p.FIGHT_PLACEMENT_POSITION)
        }), window.gui.playerData.quests.on("listUpdated", function() {
            e.verifyOwnedTutorialQuest(), e.checkTutorialState(), e.checkCondition(p.QUEST_ALREADY_STARTED)
        }), window.gui.playerData.quests.on("questStarted", function(t) {
            e.verifyOwnedTutorialQuest(), e.checkTutorialState({
                questId: t
            }), e.checkCondition(p.NEW_QUEST_START, {
                questId: t
            })
        }), window.gui.playerData.quests.on("questUpdate", function(t) {
            e.verifyOwnedTutorialQuest(), e.checkTutorialState({
                questId: t
            })
        }), window.gui.playerData.quests.on("stepValidated", function(t) {
            e.checkTutorialState({
                questId: t.questId
            })
        }), window.gui.playerData.quests.on("questFinished", function(t) {
            e.checkTutorialState({
                questId: t.questId
            })
        }), window.gui.playerData.inventory.on("weaponChanged", function() {
            e.checkCondition(p.WEAPON_CHANGED)
        }), window.gui.on("CharacterLevelUpMessage", function() {
            e.checkCondition(p.LEVEL_UP)
        }), window.gui.on("InteractiveUsedMessage", function() {
            e.checkCondition(p.INTERACTIVE_USED)
        }), u.on("QuestObjectiveValidatedMessage", function(t) {
            e.checkCondition(p.OBJECTIVE_VALIDATE, {
                objectiveId: t.objectiveId
            })
        }))
    }, n.prototype._prepareDialogs = function(e) {
        var t = this;
        if (this._dialogsData) return e();
        var i = a.TUTORIALS,
            n = a.SPECIAL_STEPS,
            o = [];
        Object.keys(i)
            .forEach(function(e) {
                var t = i[e].steps;
                t.forEach(function(e) {
                    e.dialog && o.push(e.dialog.id)
                })
            }), n.forEach(function(e) {
                e.dialog && o.push(e.dialog.id)
            }), r.getDataMap("NpcMessages", o, null, function(i, n) {
                return i ? e("Unable to get NPC Messages for Albuera :" + i) : (t._dialogsData = n, void e())
            })
    }, n.prototype.playScenario = function(e) {
        var t = this;
        this.currentQuestId === -1 && a.TUTORIALS[e] && this._prepareDialogs(function(i) {
            i && console.error("ScenarioManager._prepareDialogs -" + i);
            var n = t._getCurrentStepFromTutorial(e);
            t.changeStep(e, n)
        })
    }, n.prototype.stopScenario = function() {
        this.currentQuestId !== -1 && this.currentStepId !== -1 && this.changeStep(-1, -1)
    }, n.prototype.checkCondition = function(e, t) {
        var i = !1;
        for (var n in a.SPECIAL_STEPS)
            if (n !== this.currentSpecialStepId && a.SPECIAL_STEPS.hasOwnProperty(n) && a.SPECIAL_STEPS[n].startingCondition(e, t)) {
                this.changeSpecialStep(n), i = !0;
                break
            } if (!i && this.currentSpecialStepId !== -1) {
            var o = a.SPECIAL_STEPS[this.currentSpecialStepId],
                r = o.endingCondition(e, t);
            r > l.SPECIAL_TUTO_STOP_VALUE && 0 !== r ? this.changeSpecialStep(this.currentSpecialStepId + r) : r <= l.SPECIAL_TUTO_STOP_VALUE && this.changeSpecialStep(-1)
        }
        if (this.currentStep) {
            var s = this.currentStepId + this.currentStep.endingCondition(e, t);
            s !== this.currentStepId && this.changeStep(this.currentQuestId, s)
        }
    }, n.prototype._hasStepChanged = function() {
        var e = window.gui.playerData.quests.active[this.currentQuestId],
            t = a.TUTORIALS[this.currentQuestId];
        if (e && t)
            for (var i = t.steps, n = !1, o = 0; o < i.length; o++) {
                if (o === this.currentStepId) return i[o].questStepCheckpoint !== e.stepId && (!n || i[o].questStepCheckpoint !== -1);
                i[o].questStepCheckpoint === e.stepId && (n = !0)
            }
        return !0
    }, n.prototype._getCurrentStepFromTutorial = function(e) {
        var t = window.gui.playerData.quests.active[e],
            i = a.TUTORIALS[e];
        if (t && i)
            for (var n = i.steps, o = 0; o < n.length; o++)
                if (n[o].questStepCheckpoint === t.stepId) return o;
        return -1
    }, n.prototype.changeStep = function(e, t) {
        var i = !1;
        this.currentQuestId = parseInt(e, 10), this.currentStepId = t, this.currentStep && (window.gui.portraitDialogUI.removeDialog(), this.currentStep.executeEnd(), i = !0);
        var n = a.TUTORIALS[e];
        this.currentStep = n && n.steps[this.currentStepId], this.currentStep ? (this._interactionApplied = !1, window.foreground.lockMap.loadMap ? window.gui.menuBar.enableTutorialRestrictedFeatures([]) : this._applyStepInteraction(), i = !0) : (this.currentQuestId = -1, this.currentStepId = -1), i && this.emit("stepChanged")
    }, n.prototype._applyStepInteraction = function() {
        if (this.currentStep) {
            window.gui.menuBar.disableTutorialRestrictedFeatures();
            var e = this.currentStep.dialog,
                t = a.TUTORIALS[this.currentQuestId];
            if (this._dialogsData && e && this._dialogsData[e.id]) {
                var i = "";
                e.getNPCName ? i = e.getNPCName() : t.getNPCName && (i = t.getNPCName()), window.gui.portraitDialogUI.displayDialog({
                    portraitName: e.portrait,
                    npcName: i,
                    content: this._dialogsData[e.id].messageId,
                    rightPosition: Boolean(e.rightPosition),
                    blockClick: Boolean(e.blockClick)
                })
            }
            this.currentStep.executeStart(), this._interactionApplied = !0
        }
    }, n.prototype.readyToRestartStep = function() {
        this._interactionApplied ? this.checkTutorialState() : this._applyStepInteraction()
    }, n.prototype.changeSpecialStep = function(e) {
        var t = this,
            i = !1,
            n = a.SPECIAL_STEPS[this.currentSpecialStepId];
        this.currentSpecialStepId = parseInt(e, 10), n && (window.gui.portraitDialogUI.removeDialog(), n.executeEnd(), i = !0), n = a.SPECIAL_STEPS[this.currentSpecialStepId], n && (this._prepareDialogs(function(e) {
            e && console.error("ScenarioManager._prepareDialogs -" + e);
            var i = n.dialog;
            if (t._dialogsData && i) {
                var o = "";
                i.getNPCName && (o = i.getNPCName()), window.gui.portraitDialogUI.displayDialog({
                    portraitName: i.portrait,
                    npcName: o,
                    content: t._dialogsData[i.id].messageId,
                    rightPosition: Boolean(i.rightPosition),
                    blockClick: Boolean(i.blockClick)
                })
            }
        }), n.executeStart(), i = !0), i && this.emit("stepChanged")
    }, n.prototype.isBehaviourEnabled = function(e) {
        if (this.currentStep && this.currentStep.behaviours.indexOf(e) > -1) return !0;
        var t = a.SPECIAL_STEPS[this.currentSpecialStepId];
        return !!t && t.behaviours.indexOf(e) > -1
    }, n.prototype.getDefaultAttackSpell = function() {
        return a.ATTACK_SPELLS[window.gui.playerData.characterBreed.id] || 0
    }, n.prototype.enableAttackSpell = function(e, t) {
        t = t || {};
        var i = window.gui.shortcutBar;
        i.openPanel("spell", 0);
        var n = i.getSpellSlotBySpellId(e);
        n || (console.error(new Error("Albuera: The spell id " + e + " does not exist in the shortcut bar")), n = i.getSpellSlotByIndex(0)), i.forceDisableSpellSlots(!0), n.forceDisable(!1), t.displayArrow && window.gui.hintAnimationManager.playUITap(n, {
            side: 0,
            doubleTap: !1
        })
    }, n.prototype.displayHighlightedSpellButtons = function(e) {
        var t = s.getWindow("grimoire");
        if (t) {
            var i = t.tabs.tabsMap.spells;
            i && i.target.displayHighlightPlusBtn(e)
        }
    }, n.prototype.npcContextualMenuOnlyKeep = function(e) {
        var t = d.getContextMenu("npc");
        t && t.actionsContainer && t.actionsContainer.getChildren()
            .forEach(function(t) {
                t.setEnable(t.npcActionId === e)
            })
    }, n.prototype.isPlaying = function() {
        return this.currentQuestId !== -1 || this.currentStepId !== -1
    }
}
