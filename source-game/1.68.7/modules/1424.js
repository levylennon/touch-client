function(e, t, i) {
    var n = i(129),
        o = i(507),
        a = i(52),
        r = i(54)
        .dimensions,
        s = i(746)
        .SpellData.SPELL_STATUS,
        c = i(17)
        .getText,
        l = i(13),
        d = i(463),
        u = i(512),
        p = i(55),
        h = 3841,
        f = 4262,
        b = 13948,
        m = 4596,
        M = 4590,
        g = 4598,
        _ = 4646,
        A = 4594,
        O = 4600,
        v = 4108,
        y = 14884,
        z = 19344,
        w = 847,
        T = 287,
        C = {
            850: !0,
            851: !0,
            852: !0
        },
        I = 145490432,
        S = 150209538,
        E = 150209538,
        L = 150209538,
        N = {
            493: !0,
            492: !0,
            489: !0,
            490: !0,
            236: !0
        },
        R = {
            2: !0,
            24: !0,
            26: !0,
            28: !0,
            36: !0
        },
        q = {
            1: 3,
            2: 9629,
            3: 43,
            4: 61,
            5: 7359,
            6: 7467,
            7: 4947,
            8: 8139,
            9: 5813,
            10: 183,
            11: 5885,
            12: 0,
            13: 2794,
            14: 6131,
            15: 3210
        };
    t.ATTACK_SPELLS = q;
    var x = {
            289: !0,
            302: !0,
            303: !0,
            316: !0,
            317: !0,
            318: !0,
            330: !0,
            331: !0,
            345: !0
        },
        B = [{
            behaviours: [],
            dialog: {
                portrait: "neutral_spear",
                id: 25868,
                rightPosition: !0
            },
            getNPCName: function() {
                return c("ui.albueraTutorial.portraitName")
            },
            executeStart: function() {
                window.gui.mainControls.open()
            },
            executeEnd: function() {},
            startingCondition: function(e) {
                if (window.gui.playerData.quests.all[h] && e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_START) {
                    var t = window.actorManager.actors[-1];
                    if (t && t.data && 4210 === t.data.creatureGenericId) return window.gui.mainControls.open(), !0
                }
                return !1
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.TAP_ANYWHERE ? l.SPECIAL_TUTO_STOP_VALUE : 0
            }
        }, {
            behaviours: [],
            dialog: {
                portrait: "neutral_spear",
                id: 26255,
                blockClick: !0
            },
            getNPCName: function() {
                return c("ui.albueraTutorial.portraitName")
            },
            executeStart: function() {},
            executeEnd: function() {},
            startingCondition: function(e) {
                var t = window.gui.playerData.quests.active[f];
                if (t && e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED && window.gui.playerData.position.mapId === I)
                    for (var i = 0; i < t.objectives.length; i++) {
                        var n = t.objectives[i];
                        if (n.objectiveId === b && 2 === n.objectiveStatus) return !0
                    }
                return !1
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.OBJECTIVE_VALIDATE && t.objectiveId === b || e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED ? l.SPECIAL_TUTO_STOP_VALUE : 0
            }
        }, {
            behaviours: [],
            executeStart: function() {},
            executeEnd: function() {},
            startingCondition: function(e) {
                var t = window.gui.playerData.quests.active[_];
                if (!t) return !1;
                for (var i = !1, n = 0; n < t.objectives.length; n++) {
                    var o = t.objectives[n];
                    if (o.objectiveId === y && window.gui.playerData.inventory && !window.gui.playerData.inventory.getGenericItem(z)) {
                        i = !0;
                        break
                    }
                }
                if (i && (e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_START || e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED))
                    for (var a in window.actorManager.actors)
                        if (window.actorManager.actors.hasOwnProperty(a)) {
                            var r = window.actorManager.actors[a];
                            if (r.data && N[r.data.creatureGenericId]) return !0
                        } return !1
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_OUTCOME ? t.isWin ? 1 : l.SPECIAL_TUTO_STOP_VALUE : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_END_PLUS_BUTTON, n.DISABLE_CLOSE_BTN, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26650
            },
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), setTimeout(function() {
                    o.pointToDropInFightEndWindow()
                }, 500)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            startingCondition: function() {
                return !1
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "fightEnd" === t.windowId ? l.SPECIAL_TUTO_STOP_VALUE : e === window.gui.scenarioManager.conditionTypeEnum.TOOLTIP_DISPLAYED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_END_PLUS_BUTTON, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26652
            },
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToWindowCloseButton("fightEnd")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            startingCondition: function() {
                return !1
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "fightEnd" === t.windowId ? l.SPECIAL_TUTO_STOP_VALUE : 0
            }
        }];
    t.SPECIAL_STEPS = B;
    var D = [{
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26666
            },
            questStepCheckpoint: 5334,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["job"]), window.gui.menuBar.open(), o.pointToMenuIcon("Job")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                if (t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "jobs" === t.tabId) {
                    var i = window.gui.playerData.jobs.jobOriginalOrder[0];
                    return R[i] ? 1 : 2
                }
                return e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: g,
                    objectiveId: 14498
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26668
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["job"]), o.pointToWindowCloseButton("grimoire")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId || e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED) && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: g,
                    objectiveId: 14498
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26670
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["job"]), o.pointToWindowCloseButton("grimoire")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, (e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId || e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED) && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: g,
                    objectiveId: 14498
                }), 0
            }
        }],
        W = [{
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26654
            },
            questStepCheckpoint: 5326,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["bestiary"]), window.gui.menuBar.open(), o.pointToMenuIcon("Bestiary")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "bestiary" === t.tabId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.DISABLE_BESTIARY_LEFT_COLUMN, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26656
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["bestiary"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_LOADED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_DROP_LOADED ? 2 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.DISABLE_BESTIARY_LEFT_COLUMN, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26656
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["bestiary"]), setTimeout(function() {
                    o.pointToFirstNormalBestiaryMonsterWithSpecificDrop(T);
                    var e = a.getWindow("grimoire");
                    if (e) {
                        var t = e.tabs.tabsMap.bestiary;
                        if (t) {
                            var i = t.target.getMonsterWithDrop(T) || t.target.getMonsterWithDrop();
                            t.target.hideAllMonstersExcept(i)
                        }
                    }
                }, 300)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId ? -2 : e === window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_DROP_LOADED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.DISABLE_BESTIARY_LEFT_COLUMN, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26658
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["bestiary"]), setTimeout(function() {
                    o.pointToFirstDropBestiaryMonsterWithSpecificDrop(T)
                }, 300)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint();
                var e = a.getWindow("grimoire");
                if (e) {
                    var t = e.tabs.tabsMap.bestiary;
                    t && t.target.displayAllMonsters()
                }
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId ? -3 : e === window.gui.scenarioManager.conditionTypeEnum.BESTIARY_MONSTER_DESELECTED ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.TOOLTIP_DISPLAYED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26660
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["bestiary"]), o.pointToWindowCloseButton("grimoire")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: A,
                    objectiveId: 14490
                }), 0
            }
        }],
        P = [{
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_NPC_EXCHANGE, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 5340,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(v), window.gui.hintAnimationManager.playNPCTap(v, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_OPEN && t.context instanceof u ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "tradeWithPlayerAndNPCInventory" === t.windowId ? 2 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_NPC_EXCHANGE, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.scenarioManager.npcContextualMenuOnlyKeep(2), o.pointToInteractiveNPCContextualMenuAction(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.scenarioManager.npcContextualMenuOnlyKeep(-1), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_CLOSE ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "tradeWithPlayerAndNPCInventory" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_NPC_EXCHANGE, n.DISABLE_FILTER, n.DISABLE_SLOT_DROP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26662
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), setTimeout(function() {
                    o.pointToFirstTradeNPCInventorySlot()
                }, 0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "tradeWithPlayerAndNPCInventory" === t.windowId ? -2 : e === window.gui.scenarioManager.conditionTypeEnum.TRADE_ADD_ITEM ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_NPC_EXCHANGE, n.DISABLE_FILTER, n.DISABLE_SLOT_DROP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26664
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToNPCTradeValidateBtn()
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "tradeWithPlayerAndNPCInventory" === t.windowId ? -3 : (e === window.gui.scenarioManager.conditionTypeEnum.TRADE_CONFIRM && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: O,
                    objectiveId: 14504
                }), 0)
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 5464,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_OPEN && t.context instanceof u ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.scenarioManager.npcContextualMenuOnlyKeep(3)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.scenarioManager.npcContextualMenuOnlyKeep(-1)
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_CLOSE ? -1 : 0
            }
        }],
        k = [{
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26630
            },
            questStepCheckpoint: 5298,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playInteractiveElementTap(514870, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.INTERACTIVE_USED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26632
            },
            questStepCheckpoint: 5300,
            executeStart: function() {
                window.isoEngine.abortAllInteractives(), window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playInteractiveElementTap(514873, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.INTERACTIVE_USED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26634
            },
            questStepCheckpoint: 5302,
            executeStart: function() {
                window.isoEngine.abortAllInteractives(), window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playInteractiveElementTap(516403, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.INTERACTIVE_USED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26636
            },
            questStepCheckpoint: 5304,
            executeStart: function() {
                window.isoEngine.abortAllInteractives(), window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playInteractiveElementTap(516613, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.INTERACTIVE_USED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26694
            },
            questStepCheckpoint: 5362,
            executeStart: function() {
                window.isoEngine.abortAllInteractives(), window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playInteractiveElementTap(514874, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.INTERACTIVE_USED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_CRAFT_TUTORIAL_1, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26638
            },
            questStepCheckpoint: 5306,
            executeStart: function() {
                window.isoEngine.abortAllInteractives(), window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playInteractiveElementTap(514876, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_OPEN && t.context instanceof d ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "crafting" === t.windowId ? 2 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_CRAFT_TUTORIAL_1, n.DISABLE_SLOT_TAP, n.DISABLE_SLOT_DOUBLE_TAP, n.DISABLE_SLOT_DROP, n.DISABLE_FILTER, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26640
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToInteractiveContextualMenuAction(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "crafting" === t.windowId ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_CLOSE ? -1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CRAFTING_ESSENTIAL_BTNS, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_CRAFT_TUTORIAL_1, n.DISABLE_SLOT_TAP, n.DISABLE_SLOT_DROP, n.DISABLE_SLOT_DOUBLE_TAP, n.ENABLE_MAX_QUANTITY_INGREDIENT, n.DISABLE_FILTER, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26642
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), setTimeout(function() {
                    o.pointToRecipeBtn()
                }, 500)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "crafting" === t.windowId ? -2 : e === window.gui.scenarioManager.conditionTypeEnum.CRAFT_RECIPE ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CRAFTING_ESSENTIAL_BTNS, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_CRAFT_TUTORIAL_1, n.DISABLE_SLOT_TAP, n.DISABLE_SLOT_DROP, n.DISABLE_SLOT_DOUBLE_TAP, n.ENABLE_MAX_QUANTITY_INGREDIENT, n.DISABLE_FILTER, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26644
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToMergeBtn()
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.CRAFT_MERGE && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: M,
                    objectiveId: 14470
                }), e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "crafting" === t.windowId ? -3 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_CRAFT_TUTORIAL_2, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26646
            },
            questStepCheckpoint: 5316,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playInteractiveElementTap(514876, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_OPEN && t.context instanceof d ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "crafting" === t.windowId ? 2 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_CRAFT_TUTORIAL_2, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26646
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToInteractiveContextualMenuAction(1)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "crafting" === t.windowId ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.FAKE_STORAGE_LOADED ? 2 : e === window.gui.scenarioManager.conditionTypeEnum.CONTEXTUAL_MENU_CLOSE ? -1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CRAFTING_ESSENTIAL_BTNS, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_CRAFT_TUTORIAL_2, n.ENABLE_MAX_QUANTITY_INGREDIENT, n.DISABLE_RECIPE_BTN, n.DISABLE_FILTER, n.DISABLE_SLOT_TAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26648
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "crafting" === t.windowId ? -2 : e === window.gui.scenarioManager.conditionTypeEnum.FAKE_STORAGE_LOADED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CRAFTING_ESSENTIAL_BTNS, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_CRAFT_TUTORIAL_2, n.ENABLE_MAX_QUANTITY_INGREDIENT, n.DISABLE_RECIPE_BTN, n.DISABLE_FILTER, n.DISABLE_SLOT_TAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26648
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), setTimeout(function() {
                    o.dragDropItemSlotToCraftActorBox()
                }, 200)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "crafting" === t.windowId ? -3 : e === window.gui.scenarioManager.conditionTypeEnum.CRAFT_ITEM_ADDED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CRAFTING_ESSENTIAL_BTNS, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_CRAFT_TUTORIAL_2, n.ENABLE_MAX_QUANTITY_INGREDIENT, n.DISABLE_RECIPE_BTN, n.DISABLE_FILTER, n.DISABLE_SLOT_TAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26648
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), setTimeout(function() {
                    o.pointToFirstCraftItemSlot()
                }, 0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "crafting" === t.windowId ? -4 : e === window.gui.scenarioManager.conditionTypeEnum.CRAFT_RECIPE ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_CRAFTING_ESSENTIAL_BTNS, n.DISABLE_CLOSE_BTN, n.ENABLE_FAKE_CRAFT_TUTORIAL_2, n.DISABLE_RECIPE_BTN, n.ENABLE_MAX_QUANTITY_INGREDIENT, n.DISABLE_FILTER, n.DISABLE_SLOT_TAP, n.DISABLE_BIDHOUSE],
            dialog: {
                id: 26644
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToMergeBtn()
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.CRAFT_MERGE && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: M,
                    objectiveId: 14480
                }), e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "crafting" === t.windowId ? -5 : 0
            }
        }],
        F = [{
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_BUY_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN],
            dialog: {
                id: 26672
            },
            questStepCheckpoint: 5344,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["bidHouse"]), window.isoEngine.setUnblockedNpcId(0), o.pointToMenuIcon("BidHouse")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "bidHouseShop" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_BUY_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN],
            dialog: {
                id: 26674
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), o.pointToShopCategory(l.CATEGORY_TUTORIAL)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "bidHouseShop" === t.windowId ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.SUBCATEGORY_OPEN ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_BUY_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN],
            dialog: {
                id: 26676
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), setTimeout(function() {
                    o.pointToShopItem(l.ITEM_TUTORIAL)
                }, 100)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "bidHouseShop" === t.windowId ? -2 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "tradeItem" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_BUY_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN],
            dialog: {
                id: 26678,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), o.pointToFirstAvailableShopItem()
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "bidHouseShop" === t.windowId ? -3 : e === window.gui.scenarioManager.conditionTypeEnum.SHOP_ITEM_SELECTED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_BUY_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN],
            dialog: {
                id: 26680,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), o.pointToHardBtnShop()
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "bidHouseShop" === t.windowId ? -4 : (e === window.gui.scenarioManager.conditionTypeEnum.SHOP_ITEM_BOUGHT && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: m,
                    objectiveId: 14508
                }), 0)
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_SELL_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN],
            dialog: {
                id: 26672
            },
            questStepCheckpoint: 5346,
            executeStart: function() {
                return a.getWindow("tradeItem")
                    .openState ? window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.FORCE_NEXT_STEP) : (window.gui.menuBar.enableTutorialRestrictedFeatures(["bidHouse"]), window.isoEngine.setUnblockedNpcId(0), void o.pointToMenuIcon("BidHouse"))
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.FORCE_NEXT_STEP || e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "bidHouseShop" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_SELL_BIDHOUSE, n.DISABLE_CLOSE_BTN],
            dialog: {
                id: 26682
            },
            questStepCheckpoint: 1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), o.pointToSellModeBtnShop()
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "tradeStorage" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_SELL_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN, n.DISABLE_CLOSE_BTN],
            dialog: {
                id: 26684
            },
            questStepCheckpoint: 1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToInfoBtnSellShop(), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.INFO_BTN_SELL_HOVER ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_SHORTCUT_BAR, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_SELL_BIDHOUSE, n.DISABLE_SHOP_SELL_BTN],
            dialog: {
                id: 26686
            },
            questStepCheckpoint: 1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "tradeStorage" === t.windowId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: m,
                    objectiveId: 14510
                }), 0
            }
        }],
        H = [{
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "surprised_spear",
                id: 26146
            },
            questStepCheckpoint: 4531,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedCells(x), window.isoEngine.setUnblockedNpcId(0), window.gui.hintAnimationManager.playHintOnCell(317, {
                    nbCells: 9
                }), p.changeValue("maxActorsBeforeCreatureMode", 20)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedCells(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.MOVEMENT_CONFIRM && x[t.cellId] && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13491
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4533,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedCells({}), window.isoEngine.setUnblockedNpcId(3888), window.gui.hintAnimationManager.playNPCTap(3888, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedCells(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.NPC_INTERACTION && 3888 === t.npcId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13493
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25427
            },
            questStepCheckpoint: 4535,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), window.gui.hintAnimationManager.playHintOnCell(307, {
                    nbCells: 1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "angry_spear",
                id: 25429
            },
            questStepCheckpoint: 4539,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playMonsterTap(4192, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_PLACEMENT_POSITION ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_FIGHT_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "determined_spear",
                id: 25431
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.foreground.tapOptions && window.gui.fightManager.isInFightPreparation() && setTimeout(function() {
                    var e = window.foreground.tapOptions.possiblePlacements.filter(function(e) {
                        return e !== window.actorManager.userActor.cellId
                    });
                    window.gui.hintAnimationManager.playHintOnCell(e[0], {
                        nbCells: 1
                    })
                }, 100)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.PLACEMENT_TAP ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25433
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToTimelineButton("fightReadyBtn"), window.isoEngine.setUnblockedCells({}), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint(), window.isoEngine.resetUnblockedCells(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_START ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -2 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_FIGHT_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "determined_spear",
                id: 25435
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.mainControls.open(), window.gui.hintAnimationManager.playHintOnCell(359, {
                    nbCells: 1
                }), window.isoEngine.setUnblockedCells({
                    359: !0
                }), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint(), window.isoEngine.resetUnblockedCells(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_TAP && 359 === t.cellId ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -3 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_FIGHT_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "determined_spear",
                id: 25437
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.mainControls.open(), window.gui.scenarioManager.enableAttackSpell(window.gui.scenarioManager.getDefaultAttackSpell(), {
                    displayArrow: !0
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.shortcutBar.forceDisableSpellSlots(!1), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_SELECTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -4 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_FIGHT_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TIMELINE_CAST, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "determined_spear",
                id: 25437
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.hintAnimationManager.playMonsterTap(4192, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                    doubleTap: !1
                }), window.isoEngine.setUnblockedCells({
                    374: !0
                }), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint(), window.isoEngine.resetUnblockedCells(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CASTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CANCELED ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -5 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25439
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToTimelineButton("turnReadyBtn")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.FINISH_TURN ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -6 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "surprised_spear",
                id: 25441
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.FINISH_TURN ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -7 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -8 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4545,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.fightManager.isInFight() || window.foreground.locked || window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.MAP_LOADED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25443
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"]), o.pointToMenuIcon("Spell"), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                t = t || {};
                var i = !1,
                    n = window.gui.playerData.characters.mainCharacter.spellData;
                return Object.keys(n.getSpells(s.USABLE))
                    .every(function(e) {
                        return n.spells[e].level > 1 && (i = !0), !i
                    }), e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "spells" === t.tabId ? 1 : i ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                        questId: h,
                        objectiveId: 13505
                    }), 3) : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_NO_LIMIT_SPELL_UPGRADE, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "happy_spear",
                id: 25445,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.gui.scenarioManager.displayHighlightedSpellButtons(!0), window.isoEngine.setUnblockedNpcId(0), a.getWindow("grimoire")
                    .changePosition(0, 0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.scenarioManager.displayHighlightedSpellButtons(!1)
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.SHOW_CONFIRM_BUTTON && t.canConfirm ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_NO_LIMIT_SPELL_UPGRADE, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "happy_spear",
                id: 25445,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), o.pointToConfirmUpgradeSpell(), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId ? -2 : e !== window.gui.scenarioManager.conditionTypeEnum.SHOW_CONFIRM_BUTTON || t.canConfirm ? (e === window.gui.scenarioManager.conditionTypeEnum.CONFIRM_UPGRADE_SPELL && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13505
                }), 0) : -1
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4950,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"]), o.pointToWindowCloseButton("grimoire")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4585,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"]), window.gui.hintAnimationManager.playHintOnCell(363, {
                    nbCells: 1
                }), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4948,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25447
            },
            questStepCheckpoint: 4547,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["inventory"]), window.isoEngine.setUnblockedNpcId(0), o.pointToMenuIcon("Bag")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "equipment" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25449
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), a.getWindow("equipment")
                    .changePosition(r.windowFullScreenWidth, 0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "equipment" === t.windowId ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENING_FINISHED && "equipment" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_CLOSE_BTN, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25449
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                return window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), window.gui.playerData.inventory.equippedItems[1] ? window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.FORCE_NEXT_STEP) : void o.pointToStorageFirstSlotBox({
                    doubleTap: !0
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "equipment" === t.windowId ? -2 : e === window.gui.scenarioManager.conditionTypeEnum.FORCE_NEXT_STEP || window.gui.playerData.inventory.equippedItems[1] ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25449
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), window.isoEngine.setUnblockedNpcId(0), o.pointToWindowCloseButton("equipment")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "equipment" === t.windowId ? window.gui.playerData.inventory.equippedItems[1] ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13507
                }), 0) : -3 : e !== window.gui.scenarioManager.conditionTypeEnum.WEAPON_CHANGED || window.gui.playerData.inventory.equippedItems[1] ? 0 : -1
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4966,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4587,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.FIGHTER_TURN && t.id === window.gui.playerData.characters.mainCharacterId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_FIGHT_BTN, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "angry_spear",
                id: 25453
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"]), window.gui.hintAnimationManager.playHintOnCell(329, {
                    nbCells: 1
                }), window.isoEngine.setUnblockedCells({
                    329: !0
                }), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint(), window.isoEngine.resetUnblockedCells(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.FIGHT_TAP && 329 === t.cellId ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_BTN, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25455
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"]), window.gui.scenarioManager.enableAttackSpell(0, {
                    displayArrow: !0
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.shortcutBar.forceDisableSpellSlots(!1), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_SELECTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -2 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_FIGHT_BTN, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25455
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"]), window.gui.hintAnimationManager.playMonsterTap(4194, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                    doubleTap: !1
                }), window.isoEngine.setUnblockedCells({
                    316: !0
                }), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint(), window.isoEngine.resetUnblockedCells(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CASTED ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.SPELL_CANCELED ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.CHANGE_MAP ? -3 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_FIGHT_LEAVE_BTN, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_DAMAGE_PREVIEW, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "happy_spear",
                id: 25459
            },
            questStepCheckpoint: 4573,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac"]), o.pointToMenuIcon("Carac")
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                t = t || {};
                var i = window.gui.playerData.characters.mainCharacter.characteristics.statsPoints;
                return i <= 0 ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13531
                }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "characteristics" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_CHARACT_MENU, n.DISABLE_ADD_CHARACT, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25461,
                rightPosition: !0,
                blockClick: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                t = t || {};
                var i = window.gui.playerData.characters.mainCharacter.characteristics.statsPoints;
                return i <= 0 ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13531
                }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === t.windowId ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.TAP_ANYWHERE ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_CHARACT_MENU, n.ENABLE_UPGRADE_CHARACT_HIGHLIGHT, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25463,
                rightPosition: !0,
                blockClick: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                t = t || {};
                var i = window.gui.playerData.characters.mainCharacter.characteristics.statsPoints;
                return i <= 0 ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13531
                }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "characUpdate" === t.windowId ? 1 : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === t.windowId ? -2 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHORTCUT_BAR, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_CHARACT_MENU, n.ENABLE_UPGRADE_CHARACT_HIGHLIGHT, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25463,
                rightPosition: !0,
                blockClick: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures([]), a.getWindow("characUpdate")
                    .changePosition(0, 0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                t = t || {};
                var i = window.gui.playerData.characters.mainCharacter.characteristics.statsPoints;
                return i <= 0 || e === window.gui.scenarioManager.conditionTypeEnum.CHARAC_UPDATE ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13531
                }), 0) : e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "characteristics" === t.windowId ? -3 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHOP_BUTTON, n.DISABLE_LEVEL_FIGHT_POPUP, n.DISABLE_BEGINNER_CHANNEL, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4982,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_SHOP_BUTTON, n.DISABLE_QUEST_ARROW, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4974,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.FORCE_DISPLAY_SHOP_BUTTON, n.ENABLE_FAKE_SHOP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "determined_spear",
                id: 25465
            },
            questStepCheckpoint: 4976,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells"]), setTimeout(function() {
                    window.gui.hintAnimationManager.playUITap(window.gui.shopFloatingToolbar, {
                        animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.RIGHT_BOTTOM_POINT_TO_RIGHT,
                        doubleTap: !1
                    })
                }, 0), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.hintAnimationManager.stopHint(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.SHOP_LOADED ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_SHOP, n.DISABLE_BUTTONS_IN_SHOP, n.ENABLE_GOULTINE_HIGHLIGHT, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 26689,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells"]), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "market" === t.windowId ? -1 : e === window.gui.scenarioManager.conditionTypeEnum.TAP_ANYWHERE ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.ENABLE_FAKE_SHOP, n.DISABLE_BUTTONS_IN_SHOP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "happy_spear",
                id: 25467,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells"]), window.isoEngine.setUnblockedNpcId(0), o.pointToFirstArticleShopButton()
            },
            executeEnd: function() {
                window.gui.hintAnimationManager.stopHint(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "market" === t.windowId ? -2 : e === window.gui.scenarioManager.conditionTypeEnum.FAKE_SHOP_BUY ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 14072
                }), 0) : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4579,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.NEW_QUEST_START && 4260 === t.questId || e === window.gui.scenarioManager.conditionTypeEnum.QUEST_ALREADY_STARTED && window.gui.playerData.quests.active[4260] ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells"]), window.gui.hintAnimationManager.playInteractiveElementTap(513203, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                    doubleTap: !1
                })
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function() {
                return 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25473
            },
            questStepCheckpoint: 4581,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["quests"]), o.pointToMenuIcon("Book"), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "quests" === t.tabId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "happy_spear",
                id: 25475
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["quests"]), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "grimoire" === t.windowId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 13539
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25469
            },
            questStepCheckpoint: 4968,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells", "quests", "worldMap"]), o.pointToMenuIcon("Map"), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "worldMap" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "happy_spear",
                id: 25471
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["worldMap"]), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.isoEngine.resetUnblockedNpcId(), window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "worldMap" === t.windowId && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 14060
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4970,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells", "quests", "worldMap"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.FIGHTER_TURN && 145490946 !== window.isoEngine.mapRenderer.mapId && 145489920 !== window.isoEngine.mapRenderer.mapId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25477,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells", "quests", "worldMap"]), o.pointToChallenge()
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint()
            },
            endingCondition: function(e) {
                return e === window.gui.scenarioManager.conditionTypeEnum.TAP_ANYWHERE && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 14062
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_BIDHOUSE],
            questStepCheckpoint: 4978,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells", "quests", "worldMap"])
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures()
            },
            endingCondition: function() {
                return !window.gui.playerData.isFighting && window.gui.playerData.characterBaseInformations.level >= 10 && window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 14074
                }), 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "neutral_spear",
                id: 25862
            },
            questStepCheckpoint: 4980,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells", "quests", "worldMap", "Help"]), o.pointToMenuIcon("Help"), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.gui.hintAnimationManager.stopHint(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_OPENED && "help" === t.windowId ? 1 : 0
            }
        }, {
            behaviours: [n.DISABLE_ALMANAX_NOTIF, n.DISABLE_LEFT_SLIDE_CHANGEMAP, n.DISABLE_RIGHT_SLIDE_CHANGEMAP, n.DISABLE_TOP_SLIDE_CHANGEMAP, n.DISABLE_BOTTOM_SLIDE_CHANGEMAP, n.DISABLE_BIDHOUSE],
            dialog: {
                portrait: "happy_spear",
                id: 25864,
                rightPosition: !0
            },
            questStepCheckpoint: -1,
            executeStart: function() {
                window.gui.menuBar.enableTutorialRestrictedFeatures(["carac", "inventory", "market", "spells", "quests", "worldMap", "Help"]), window.isoEngine.setUnblockedNpcId(0)
            },
            executeEnd: function() {
                window.gui.menuBar.disableTutorialRestrictedFeatures(), window.isoEngine.resetUnblockedNpcId()
            },
            endingCondition: function(e, t) {
                return t = t || {}, e === window.gui.scenarioManager.conditionTypeEnum.WINDOW_CLOSED && "help" === t.windowId ? (window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                    questId: h,
                    objectiveId: 14076
                }), 1) : 0
            }
        }, {
            behaviours: [],
            questStepCheckpoint: 4972,
            executeStart: function() {},
            executeEnd: function() {},
            endingCondition: function() {
                return 0
            }
        }],
        U = {};
    U[h] = {
        startingCondition: function(e) {
            return e = e || {}, void 0 !== e.subAreaId ? C[e.subAreaId] : C[window.gui.playerData.position.subAreaId]
        },
        getNPCName: function() {
            return c("ui.albueraTutorial.portraitName")
        },
        steps: H
    }, U[m] = {
        startingCondition: function(e) {
            return e = e || {}, !window.gui.fightManager.isInFight() && (void 0 !== e.mapId ? e.mapId === S : window.gui.playerData.position.mapId === S)
        },
        getNPCName: function() {
            return c("ui.astrubTutorial.portraitName")
        },
        steps: F
    }, U[M] = {
        startingCondition: function(e) {
            return e = e || {}, !window.gui.fightManager.isInFight() && (void 0 !== e.mapId ? e.mapId === E : window.gui.playerData.position.mapId === E)
        },
        getNPCName: function() {
            return c("ui.astrubTutorial.portraitName")
        },
        steps: k
    }, U[g] = {
        startingCondition: function() {
            return !window.gui.fightManager.isInFight() && window.gui.playerData.hasJob()
        },
        steps: D
    }, U[A] = {
        startingCondition: function(e) {
            return e = e || {}, !window.gui.fightManager.isInFight() && (void 0 !== e.mapId ? e.subAreaId === w : window.gui.playerData.position.subAreaId === w)
        },
        steps: W
    }, U[O] = {
        startingCondition: function(e) {
            return e = e || {}, !window.gui.fightManager.isInFight() && (void 0 !== e.mapId ? e.mapId === L : window.gui.playerData.position.mapId === L)
        },
        getNPCName: function() {
            return c("ui.astrubTutorial.portraitName")
        },
        steps: P
    }, t.TUTORIALS = U
}
