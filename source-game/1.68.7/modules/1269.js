function(e, t, i) {
    function n() {
        function e(e) {
            e = e || {}, c._totalFailure = 0, c._totalSuccess = 0, c._done = 0;
            var t = [],
                i = c._mySlotElems.getGivenIngredientsInfo(),
                n = c._targetSlotElems.getGivenIngredientsInfo();
            i.length > 0 && n.length <= 0 && (t = i, t.push(c._mySlotElems.getRuneSignatureInfo()));
            var o = c.jobsData.checkRecipe(c._skillId);
            if (c._skillId === c.jobsData.SKILLID_DECRAFT)
                for (var a = 0; a < t.length; a += 1) {
                    var r = t[a];
                    r.GID && (o.itemToCraft.ingredientIds.push(r.GID), o.itemToCraft.quantities.push(r.quantity))
                }
            c._craftResultBox.checkRecipe(t, o), o.isRecipeKnown && !e.keepResultVisible ? (c._itemResult.hide(), c._craftResultBox._clearProgress(), c.highlightedRecipeId = o.itemToCraft.resultId) : c.highlightedRecipeId = null, c._recipeList.highlightRecipe(c.highlightedRecipeId)
        }

        function t(e) {
            e = e || {
                count: 0
            };
            var t = e.count || 0;
            c._done = c._totalQty - t, c._craftResultBox.setProgress(c._done, c._totalQty)
        }

        function i(i) {
            var n = i.reason;
            l.displayAutoCraftStopReasonMessage(n), c._isInAutoCraft = !1, n === h.STOPPED_REASON_OK && t({
                count: 0
            }), e({
                keepResultVisible: !0
            }), c._restoreMergeStopButtons()
        }

        function n(e) {
            var n = e._messageType;
            if (c.openState) switch (n) {
                case "ExchangeCraftResultMessage":
                case "ExchangeCraftResultWithObjectIdMessage":
                case "ExchangeCraftResultWithObjectDescMessage":
                    c._onResultEvents(e);
                    break;
                case "ExchangeReplayCountModifiedMessage":
                    c._updateQtyToCraft(e);
                    break;
                case "ExchangeItemAutoCraftRemainingMessage":
                    t(e);
                    break;
                case "ExchangeItemAutoCraftStopedMessage":
                    i(e);
                    break;
                case "ExchangeCraftSlotCountIncreasedMessage":
                    c._slotCountIncreased(e);
                    break;
                case "ExchangeObjectAddedMessage":
                    c.objectData[e.object.objectUID] = e.object;
                    break;
                case "ExchangeObjectRemovedMessage":
                    break;
                case "ExchangeObjectModifiedMessage":
                    c.objectData[e.object.objectUID] = e.object;
                    break;
                case "ExchangeCraftResultRunicRecyclingMessage":
                    for (var o = [], a = 0; a < e.recyclingResults.length; a++) {
                        var r = e.recyclingResults[a],
                            s = c.objectData[r.objectUID];
                        s || (console.error(new Error("Added item cannot be found GID: " + r.objectGID)), s = {
                            quantity: 1,
                            effects: []
                        });
                        var l = {
                            frequencyBonus: r.frequencyBonus,
                            objectGID: r.objectGID,
                            objectUID: r.objectUID,
                            quantity: s.quantity,
                            runeResults: r.runeResults,
                            effects: s.effects,
                            alreadyInRow: !1
                        };
                        o.push(l)
                    }
                    c.objectData = {}, d.close("shatter"), d.open("shatter", o);
                    break;
                default:
                    console.error(new Error(n + " not handle by CraftingWindow"))
            }
        }
        a.call(this, {
            className: "CraftingWindow",
            title: "",
            noCloseButton: !0,
            positionInfo: {
                width: "76%",
                height: "100%",
                isDefault: !0
            }
        }), this.objectData = {};
        var o = {
            left: "0.5%",
            bottom: "2%",
            width: 320,
            height: "95%"
        };
        this._positionInfos = {
            decrafting: o,
            wrapping: o
        };
        var s = {
            right: "0.5%",
            bottom: "2%",
            width: "34.8%",
            height: "95%"
        };
        this._inventoryPositionInfos = {
            decrafting: s,
            wrapping: s
        }, this._mergeLabels = {
            crafting: r("ui.common.merge"),
            decrafting: r("ui.common.decraft")
        };
        var c = this,
            p = window.gui;
        this._domCreated = !1, this._recipeList = null, this._mySlotElems = null, this._targetSlotElems = null, this._craftResultBox = null, this._itemResult = null, this._totalQty = 1, this._done = 0, this._isInAutoCraft = !1, this._skillId = null, this._fakeCraft = null, this.jobsData = p.playerData.jobs, this._updateQtyToCraft = function(e) {
            c._totalQty = e.count, c._craftResultBox.setQty(c._totalQty, !0), c._isInAutoCraft = c._totalQty > 1
        }, this.addAndModifySlots = function(t) {
            u.createItemInstances(t, function(t, i) {
                if (t) return console.error("Crafting: addAndModifySlots cannot createItemInstances", t);
                var n = i.array[0];
                p.playerData.inventory.objects[n.objectUID] || c._fakeCraft ? c._mySlotElems.addAndModifySlot(n) : c._targetSlotElems.addAndModifySlot(n), c._mySlotElems.setNbSlots(), c._targetSlotElems.setNbSlots(), e()
            })
        }, this.objectRemoved = function(t) {
            c._targetSlotElems.removeIngredient(t), c._mySlotElems.removeIngredient(t), c._mySlotElems.setNbSlots(), c._targetSlotElems.setNbSlots(), e()
        }, this._onResultEvents = function(e) {
            c._onResult(e, function(e, t) {
                return e ? console.error("Crafting: onResult error", e) : void c.giveTheResult(t.objectInfo, t.message)
            })
        }, this._slotCountIncreased = function(e) {
            var t = e.newMaxSlot;
            c._updateRecipeList(t), c._updateSlotElems(t)
        }, this._updateSlotElems = function(e) {
            c._updateMySlotElems(e)
        }, p.on("ExchangeCraftResultMessage", n), p.on("ExchangeCraftResultWithObjectIdMessage", n), p.on("ExchangeCraftResultWithObjectDescMessage", n), p.on("ExchangeReplayCountModifiedMessage", n), p.on("ExchangeItemAutoCraftRemainingMessage", n), p.on("ExchangeItemAutoCraftStopedMessage", n), p.on("ExchangeCraftSlotCountIncreasedMessage", n), p.on("ExchangeCraftResultRunicRecyclingMessage", n), p.on("ExchangeObjectAddedMessage", n), p.on("ExchangeObjectRemovedMessage", n), p.on("ExchangeObjectModifiedMessage", n), this.on("open", function(e) {
            c._domCreated || c._createDom(), c._onOpen(e)
        }), this.on("close", function() {
            c._fakeCraft = null, c._mySlotElems.clear(), c._targetSlotElems.clear(), c._recipeList.reset(), c._craftResultBox.clear(), c.jobsData.clearAfterCraft(), c._skillId = null, c._paymentButton.hide(), c.objectData = {}, d.close("craftPayment")
        }), this.on("closed", function() {
            this._updatePerCraftType()
        }), this._buttonMergeAction = function() {
            function e() {
                window.dofus.sendMessage("ExchangeReadyMessage", {
                    ready: !0,
                    step: 2
                }), c._isInAutoCraft ? c._buttonMerge.disable() : c._restoreMergeStopButtons()
            }
            if (c._fakeCraft) {
                var t = c._craftResultBox.getItem();
                if (t) return window.gui.openSimplePopup(r("ui.craft.craftSuccessSelf", 1, t.nameId), r("ui.craft.success")), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CRAFT_MERGE), c._fakeCraft = null, c.close()
            }
            var i = c._mySlotElems.getGivenIngredientsInfo()
                .length;
            if (i += c._targetSlotElems.getGivenIngredientsInfo()
                .length, !(i < 1)) return c._skillId !== c.jobsData.SKILLID_DECRAFT ? e() : void window.gui.openConfirmPopup({
                title: r("ui.popup.warning"),
                message: r("ui.craft.decraftConfirm"),
                cb: function(t) {
                    t && e()
                }
            })
        }, window.gui.scenarioManager.on("stepChanged", function() {
            c._refreshTutorialRestrictions()
        })
    }
    i(1270);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(1074),
        c = i(86)
        .DofusButton,
        l = i(668),
        d = i(52),
        u = i(469),
        p = i(1271),
        h = i(669),
        f = i(1006),
        b = i(1272),
        m = i(1274),
        M = i(418),
        g = i(129);
    o(n, a), e.exports = n, n.prototype._restoreMergeStopButtons = function() {
        this._stopBtn.disable(), this._buttonMerge.enable()
    }, n.prototype._createDom = function() {
        var e = this,
            t = this.windowBody.createChild("div", {
                className: "col1"
            }),
            i = this.windowBody.createChild("div", {
                className: "col2"
            });
        this._recipeList = t.appendChild(new s({
            isInCraft: !0,
            filterCraftableOnly: !0
        })), this._recipeList.on("recipeSelected", function(t) {
            return e._fakeCraft ? e.addFakeRecipeToCraftBox(t) : this.isRecipeCraftableFromInventory(t) ? void(t !== e.highlightedRecipeId ? window.dofus.sendMessage("ExchangeSetCraftRecipeMessage", {
                objectGID: t
            }) : e._totalQty < e._craftResultBox.getMaxQuantity() ? e._requestReplayCountChange(e._totalQty + 1) : e._craftResultBox.setQty(e._totalQty, !0)) : window.gui.openSimplePopup(r("ui.craft.dontHaveAllIngredient"))
        }), this._targetSlotElems = i.appendChild(new m), this._mySlotElems = i.appendChild(new m), M.on("dragStart", e.localizeEvent(function(t, i) {
            switch (i) {
                case "craftInventory":
                    e._mySlotElems.showDropHighlight(t.getItem()), t.once("dragEnd", function() {
                        e._mySlotElems.hideDropHighlight()
                    });
                    break;
                case "recipeList":
                    e._craftResultBox.selectSlot(!0), t.once("dragEnd", function() {
                        e._craftResultBox.selectSlot(!1)
                    })
            }
        })), this._craftResultBox = i.appendChild(new b), this._craftResultBox.on("craftReplayCount", function(t) {
            e._requestReplayCountChange(t)
        });
        var n = i.createChild("div", {
            className: "buttonsContainer"
        });
        this._buttonMerge = n.appendChild(new c(r("ui.common.merge"), {
            className: "mergeButton"
        })), this._buttonMerge.on("tap", e._buttonMergeAction), this._stopBtn = n.appendChild(new c(r("ui.common.stop"), {
            className: "stopButton",
            disable: !0
        })), this._stopBtn.on("tap", function() {
            window.dofus.sendMessage("ExchangeReplayStopMessage")
        }), this._paymentButton = n.appendChild(new c(r("ui.common.payment"), {
            className: "paymentButton"
        })), this._paymentButton.on("tap", function() {
            d.open("craftPayment")
        }), this._itemResult = i.createChild("div", {
            className: "itemResult"
        });
        var o = this._itemResult.createChild("div", {
            className: "titleBar"
        });
        this._itemName = o.createChild("div", {
            className: "itemName"
        }), this._itemLevel = o.createChild("div", {
            className: "itemLevel"
        }), this._itemDescription = this._itemResult.appendChild(new f), this._domCreated = !0
    }, n.prototype._requestReplayCountChange = function(e) {
        window.dofus.sendMessage("ExchangeReplayMessage", {
            count: e
        })
    }, n.prototype._updateRecipeList = function(e) {
        var t = this.jobsData.getRecipesBySkill(this._skillId);
        this._recipeList.addRecipes(t, {
            nbCase: e,
            mode: "craft"
        });
        var i = e > 8 ? 8 : e;
        this.jobsData.setExistingSlotCount(i), this.toggleClassName("noRecipe", !t.length)
    }, n.prototype._updatePerCraftType = function(e) {
        d.positionWindow(this.id, this._positionInfos[e]), d.positionWindow("craftInventory", this._inventoryPositionInfos[e]), this._buttonMerge.setText(this._mergeLabels[e] || this._mergeLabels.crafting)
    }, n.prototype._updateMySlotElems = function(e) {
        var t = 9 === e;
        this._mySlotElems.setNbSlots(), this._mySlotElems.toggleSignatureSlot(t)
    }, n.prototype._onOpen = function(e) {
        var t = e.msg;
        this._skillId = t.skillId, this._craftResultBox.toggleDisplay(this._skillId !== this.jobsData.SKILLID_DECRAFT), this._totalQty = 1, this._totalFailure = 0, this._totalSuccess = 0, this.highlightedRecipeId = null, this._craftResultBox.clear(), this._itemResult.hide(), this._targetSlotElems.hide(), this._paymentButton.hide(), this._restoreMergeStopButtons(), this._mySlotElems.setPlayerName(window.gui.playerData.characterBaseInformations.name);
        var i, n = t.maxCase || t.nbCase;
        i = void 0 === e.isCrafter ? "SOLO" : e.isCrafter ? "CRAFTER" : "CLIENT", this.jobsData.startCraftingSession(i, this._skillId, n), this.jobsData.on("objectAdded", this.addAndModifySlots), this.jobsData.on("objectModified", this.addAndModifySlots), this.jobsData.on("objectRemoved", this.objectRemoved), this._updateRecipeList(n), this._updateSlotElems(n), this._updatePerCraftType(e.type), this._refreshTutorialRestrictions(), this._fakeCraft = e.fakeCraft, this._fakeCraft && (this._recipeList.enableAndRefreshFilter(!1), this._mySlotElems.clear())
    }, n.prototype._onResult = function(e, t) {
        var i = "",
            n = null,
            o = window.gui,
            a = this,
            s = "",
            c = e.craftResult,
            l = e.objectInfo && e.objectInfo.quantity || 1;
        return l > 1 && this._updateQtyToCraft({
            count: 0
        }), n = e.objectGenericId || e.objectInfo && e.objectInfo.objectGID, c === p.CRAFT_IMPOSSIBLE ? (a._totalFailure += l, i = r("ui.craft.noResult"), o.openSimplePopup(i), void a._restoreMergeStopButtons()) : (c === p.CRAFT_FAILED && (a._totalFailure += l, a._isInAutoCraft || o.openSimplePopup(r("ui.craft.failed"))), a._isInAutoCraft || a._restoreMergeStopButtons(), n ? void u.getItems([n], function(o) {
            if (o) return t(o);
            var d = u.items[n];
            s = d.nameId, c === p.CRAFT_SUCCESS && (a._totalSuccess += l, i = r("ui.craft.craftSuccessSelf", l, s)), t(null, {
                objectName: s,
                objectInfo: e.objectInfo,
                craftResult: c,
                message: i
            })
        }) : t(null, {
            objectName: s,
            objectInfo: e.objectInfo,
            craftResult: c,
            message: i
        }))
    }, n.prototype.giveTheResult = function(e, t) {
        function i(e) {
            u.createItemInstances(e, function(t, i) {
                if (t) return console.error("Crafting: updateItemResultDescription Failed to create item instances", t);
                var n = i.map[e.objectUID];
                o._itemDescription.displayItem(n), o._itemName.setText(n.item.nameId), o._itemLevel.setText(r("ui.common.short.level") + n.item.level), o._itemResult.show()
            })
        }
        var n = window.gui,
            o = this;
        t && n.chat.logMsg(t), this._recipeList.refreshDisplayedRecipes(), e && i(e), this._craftResultBox.updateFailSuccessValues(this._totalFailure, this._totalSuccess)
    }, n.prototype._refreshTutorialRestrictions = function() {
        var e = window.gui.scenarioManager.isBehaviourEnabled(g.DISABLE_CRAFTING_ESSENTIAL_BTNS),
            t = window.gui.scenarioManager.isBehaviourEnabled(g.DISABLE_RECIPE_BTN);
        this.toggleClassName("disableEssentialBtns", e), this.toggleClassName("disableRecipeBtn", t)
    }, n.prototype.getFirstRecipe = function() {
        return this._recipeList ? this._recipeList.getFirstRecipe() : null
    }, n.prototype.getMergeBtn = function() {
        return this._buttonMerge
    }, n.prototype.addFakeItemToCraftBox = function(e) {
        if (this._recipeList) {
            var t = d.getWindow("craftInventory");
            t.openState && t.removeFakeItem(e.objectUID), this.addAndModifySlots({
                objectGID: e.objectGID,
                effects: [],
                objectUID: e.objectUID,
                quantity: 1,
                position: 63
            }), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CRAFT_ITEM_ADDED);
            var i, n = {},
                o = this._mySlotElems.getSlots();
            for (i = 0; i < o.length; i++) {
                var a = o[i] && o[i].getItem();
                a && a.objectGID && (n[a.objectGID] = !0)
            }
            var r = null;
            for (i = 0; i < this._recipeList.recipesList.getChildCount(); i++) {
                var s = this._recipeList.recipesList.getChildren()[i],
                    c = s.ingredients;
                r = s.recipeId;
                for (var l = 0; l < c.length; l++) {
                    var u = c[l].data && c[l].data.id;
                    if (!n[u]) {
                        r = null;
                        break
                    }
                }
                if (r) break
            }
            r && (this._craftResultBox.prepareItem(r), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CRAFT_RECIPE))
        }
    }, n.prototype.addFakeRecipeToCraftBox = function(e) {
        var t = d.getWindow("craftInventory");
        if (this._fakeCraft && this._recipeList && this._recipeList.recipesList && t.openState) {
            var i = this._recipeList.recipesList.getChild(e);
            if (i && i.ingredients) {
                var n = i.ingredients;
                this._mySlotElems.clear();
                for (var o = 0; o < n.length; o++) {
                    var a = n[o].data && n[o].data.id;
                    this.addAndModifySlots({
                        objectGID: a,
                        effects: [],
                        objectUID: -a,
                        quantity: 1,
                        position: 63
                    }), t.removeFakeItem(-a)
                }
                this._craftResultBox.prepareItem(i.recipeId), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CRAFT_RECIPE)
            }
        }
    }
}
