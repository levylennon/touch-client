function(e, t, i) {
    function n(e, t, i, n) {
        if (!e) return console.error(new Error("Tutorial hint: no wuidom"));
        var o = e.rootElement;
        if (!o) return console.error(new Error("Tutorial hint issue"));
        var a = s(o),
            r = Math.round(a.left + a.width * (i || .5)),
            c = Math.round(a.top + a.height * (n || .5));
        window.gui.hintArrow.showArrow(r, c, t)
    }

    function o(e) {
        setTimeout(function() {
            window.gui.hintArrow.hideArrow()
        }, e)
    }
    var a = i(52),
        r = i(448),
        s = i(66),
        c = i(72),
        l = 500,
        d = 5e3;
    t.pointHintArrowAt = n, t.pointToChallenge = function() {
        window.gui.hintAnimationManager.playUITap(window.gui.challengeIndicator.challengeSlot, {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.RIGHT_BOTTOM_POINT_TO_RIGHT
        })
    }, t.pointToWindowCloseButton = function(e) {
        var t = a.getWindow(e);
        t.openState && window.gui.hintAnimationManager.playUITap(t.closeButton, {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_BOTTOM_POINT_TO_RIGHT
        })
    }, t.pointToConfirmUpgradeSpell = function() {
        var e = a.getWindow("grimoire");
        if (e) {
            var t = e.tabs.tabsMap.spells;
            t && window.gui.hintAnimationManager.playUITap(t.target.confirmButton, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
            })
        }
    }, t.pointToMenuIcon = function(e, t) {
        t = t || {};
        var i = window.gui.menuBar.getIconForTuto(e);
        i && window.gui.hintAnimationManager.playUITap(i, {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
            hideOnTap: t.hideOnTap
        })
    }, t.pointToTimelineButton = function(e) {
        var t = window.gui.timeline.fightControlButtons.getButtonForTuto(e);
        t && window.gui.hintAnimationManager.playUITap(t, {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
        })
    }, t.pointToFirstSkillShortcut = function() {
        var e = window.gui.shortcutBar;
        e.openPanel("spell"), window.gui.hintAnimationManager.playUITap(e.getSlotForTuto("spell", 0), {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
        })
    }, t.pointToEquipFilterIcon = function() {
        var e = a.getWindow("equipment");
        e.openState && window.gui.hintAnimationManager.playUITap(e.storageView.getEquipmentFilterButtonForTuto(), {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_BOTTOM_POINT_TO_RIGHT
        })
    }, t.pointToQuestFilterIcon = function() {
        var e = a.getWindow("equipment");
        e.openState && window.gui.hintAnimationManager.playUITap(e.storageView.getQuestFilterButtonForTuto(), {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_BOTTOM_POINT_TO_RIGHT
        })
    }, t.pointToActionButton = function() {
        var e = a.getWindow("equipment");
        e.openState && window.gui.hintAnimationManager.playUITap(e.drawer._getItemBoxActionButton(), {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
        })
    }, t.pointToEntryManageShield = function() {
        var e = r.getContextMenu("item");
        e && window.gui.hintAnimationManager.playUITap(e.getEntryManageShield(), {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
        })
    }, t.pointToCharacterItem = function(e) {
        var t = a.getWindow("equipment");
        if (t.openState) {
            var i = t.getEquipmentSlotsForTuto();
            n(i[e], "upLeft")
        }
    }, t.pointToShieldSpellSlot = function() {
        var e = a.getWindow("shieldWindow");
        e.openState && window.gui.hintAnimationManager.playUITap(e.getShieldSpellSlot(), {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_BOTTOM_POINT_TO_RIGHT
        })
    }, t.pointToFirstArticleShopButton = function() {
        var e = a.getWindow("market");
        if (e.openState) {
            var t = e.tabs.getFirstTab();
            if (t) {
                var i = t.target.getFirstArticle();
                if (i) {
                    var n = i.getButtons();
                    window.gui.hintAnimationManager.playUITap(n.hardButton, {
                        animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
                    })
                }
            }
        }
    }, t.pointToShopCategory = function(e) {
        var t = a.getWindow("bidHouseShop");
        if (t.openState) {
            var i = t.getCategoryDom(e);
            i && window.gui.hintAnimationManager.playUITap(i, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.RIGHT_BOTTOM_POINT_TO_CENTER
            })
        }
    }, t.pointToShopItem = function(e) {
        var t = a.getWindow("bidHouseShop");
        if (t.openState) {
            var i = t.getItemInSaleDom(e);
            i && window.gui.hintAnimationManager.playUITap(i, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.RIGHT_BOTTOM_POINT_TO_CENTER
            })
        }
    }, t.pointToFirstAvailableShopItem = function() {
        var e = a.getWindow("tradeItem");
        if (e.openState) {
            var t = e && e.bidHouseBuyerBox && e.bidHouseBuyerBox.getItemRowDom(0);
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER
            })
        }
    }, t.pointToHardBtnShop = function() {
        var e = a.getWindow("tradeItem");
        if (e.openState) {
            var t = e && e.buyHardBtn;
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER
            })
        }
    }, t.pointToSellModeBtnShop = function() {
        var e = a.getWindow("bidHouseShop");
        if (e.openState) {
            var t = e && e.switchToSellModeBtn;
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.RIGHT_BOTTOM_POINT_TO_CENTER
            })
        }
    }, t.pointToInfoBtnSellShop = function() {
        var e = a.getWindow("tradeStorage");
        if (e.openState) {
            var t = e && e.infoButton;
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.RIGHT_BOTTOM_POINT_TO_CENTER
            })
        }
    }, t.pointToDropInFightEndWindow = function() {
        var e = a.getWindow("fightEnd");
        if (e.openState) {
            var t = e.getOwnFirstDropDom();
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                longTap: !0
            })
        }
    }, t.pointToInteractiveContextualMenuAction = function(e) {
        var t = r.getContextMenu("interactive");
        if (t && t.actionsContainer) {
            var i = t.actionsContainer.getChildren()[e];
            i && window.gui.hintAnimationManager.playUITap(i, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
            })
        }
    }, t.pointToInteractiveNPCContextualMenuAction = function(e) {
        var t = r.getContextMenu("npc");
        if (t && t.actionsContainer) {
            var i = t.actionsContainer.getChildren()[e];
            i && window.gui.hintAnimationManager.playUITap(i, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
            })
        }
    }, t.pointToNPCTradeValidateBtn = function() {
        var e = a.getWindow("tradeWithNPC");
        if (e.openState) {
            var t = e.getValidateBtn();
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER
            })
        }
    }, t.pointToFirstTradeNPCInventorySlot = function() {
        var e = a.getWindow("tradeWithPlayerAndNPCInventory");
        if (e.openState) {
            var t = e.getStorageFirstSlotForTuto();
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                doubleTap: !0
            })
        }
    }, t.pointToRecipeBtn = function() {
        var e = a.getWindow("crafting");
        if (e.openState) {
            var t = e.getFirstRecipe();
            t && t.craftButton && window.gui.hintAnimationManager.playUITap(t.craftButton, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
            })
        }
    }, t.pointToMergeBtn = function() {
        var e = a.getWindow("crafting");
        if (e.openState) {
            var t = e.getMergeBtn();
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
            })
        }
    }, t.dragDropItemSlotToCraftActorBox = function() {
        var e = a.getWindow("crafting"),
            t = a.getWindow("craftInventory");
        if (e.openState && t.openState) {
            var i = e._mySlotElems,
                n = t.getStorageFirstSlotForTuto();
            n && i && window.gui.hintAnimationManager.playUIDragDrop(n, i, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER
            })
        }
    }, t.pointToFirstCraftItemSlot = function() {
        var e = a.getWindow("craftInventory");
        if (e.openState) {
            var t = e.getStorageFirstSlotForTuto();
            t && window.gui.hintAnimationManager.playUITap(t, {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER,
                doubleTap: !0
            })
        }
    }, t.pointToFirstNormalBestiaryMonsterWithSpecificDrop = function(e) {
        var t = a.getWindow("grimoire");
        if (t) {
            var i = t.tabs.tabsMap.bestiary;
            if (i) {
                var n = i.target.getMonsterWithDrop(e) || i.target.getMonsterWithDrop();
                n && window.gui.hintAnimationManager.playUITap(n, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER
                })
            }
        }
    }, t.pointToFirstDropBestiaryMonsterWithSpecificDrop = function(e) {
        var t = a.getWindow("grimoire");
        if (t) {
            var i = t.tabs.tabsMap.bestiary;
            if (i) {
                var n = i.target.getMonsterWithDrop(e) || i.target.getMonsterWithDrop(),
                    o = i.target.getDropDomFromMonster(n);
                o && window.gui.hintAnimationManager.playUITap(o, {
                    animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_CENTER
                })
            }
        }
    }, t.pointToShieldValidateButton = function() {
        var e = a.getWindow("shieldWindow");
        e.openState && window.gui.hintAnimationManager.playUITap(e.feedingBox.confirmBtn, {
            animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
        })
    }, t.pointToShieldStorageFirstSlotBox = function() {
        var e = a.getWindow("shieldWindow");
        e.openState && setTimeout(function() {
            window.gui.hintAnimationManager.playUITap(e.feedingBox.storageViewer.getStorageFirstSlotForTuto(), {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT
            })
        }, l)
    }, t.pointToStorageFirstSlotBox = function(e) {
        e = e || {};
        var t = a.getWindow("equipment");
        t.openState && setTimeout(function() {
            window.gui.hintAnimationManager.playUITap(t.storageView.getStorageFirstSlotForTuto(), {
                animationPath: window.gui.hintAnimationManager.ANIMATION_PATH.LEFT_TOP_POINT_TO_RIGHT,
                doubleTap: e.doubleTap
            })
        }, l)
    }, t.pointToSpecificUi = function(e) {
        if (!e) return console.warn("We can not point to a null link");
        for (var t = e.split(","), i = window, a = 0; a < t.length; a++) {
            var r = i[t[a]];
            if (!r) {
                i = null;
                break
            }
            i = r
        }
        return i && i instanceof c ? void(i.isVisible() && (n(i, "upLeft"), o(d))) : console.warn("The dom " + e + " does not exist")
    }
}
