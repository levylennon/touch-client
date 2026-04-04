function(e, t, i) {
    function n() {
        m.call(this, {
            className: "CraftMagusWindow",
            title: "",
            positionInfo: {
                width: "76%",
                height: "100%"
            },
            noCloseButton: !0,
            helpTab: {
                part: 2,
                subPart: 15
            }
        }), this._initialize(), this.once("open", this._createDom), this.on("open", this._onOpen), this.on("close", this._onClose)
    }

    function o(e, t, i) {
        return !!e.slot && this.myWindow.jobsData.canItemMove(i, "crafting", e.slot.getItem())
    }
    i(1283);
    var a = i(86)
        .DofusButton,
        r = i(668),
        s = i(1271),
        c = i(418),
        l = i(17)
        .getText,
        d = i(56)
        .inherits,
        u = i(1284),
        p = i(469),
        h = i(871),
        f = i(421),
        b = i(767),
        m = i(70),
        M = i(116),
        g = i(63),
        _ = i(588),
        A = i(1286),
        O = r.SMITHMAGIC_RUNE_ID,
        v = r.SMITHMAGIC_POTION_ID,
        y = r.SIGNATURE_RUNE_ID,
        z = r.SIGNATURE_AVAILABLE_LEVEL,
        w = ["item", "rune", "signatureRune"],
        T = 53,
        C = 56;
    d(n, m), e.exports = n, n.prototype._initVariables = function(e) {
        this.isMultiCraft = Boolean(e), this.exchangeStep = 0, this.isInAutoCraft = !1, this.newItemInstance = null, this.newItemSlotType = null, this.skillId = null, this.skillData = null, this.droppedLocation = "", this.droppedItemSource = "", this.currentCraftingItem = null, this._currentRune = null
    }, n.prototype._initialize = function() {
        function e() {
            M.log("HUD.Click_on_button", {
                interface_id: "craftMagus",
                button_id: "mergeAllBtn",
                clic_parameter_key: "rune",
                clic_parameter_value: d._currentRune ? d._currentRune.id : 0,
                clic_type: "Simple_court"
            }), d.isInAutoCraft = !0, d._updateCraftingButtons(), u("ExchangeReplayMessage", {
                count: -1
            }), u("ExchangeReadyMessage", {
                ready: !0,
                step: d.exchangeStep
            })
        }

        function t() {
            M.log("HUD.Click_on_button", {
                interface_id: "craftMagus",
                button_id: "mergeBtn",
                clic_parameter_key: "rune",
                clic_parameter_value: d._currentRune ? d._currentRune.id : 0,
                clic_type: "Simple_court"
            }), d.isInAutoCraft = !1, d._updateCraftingButtons(), u("ExchangeReadyMessage", {
                ready: !0,
                step: d.exchangeStep
            })
        }

        function i(e) {
            p.createItemInstances(e.object, function(t, i) {
                if (t) return console.error("Craft Magus: updateSlot cannot createItemInstances", t);
                if (d.openState) {
                    var n = i.array[0],
                        o = d._getItemSlotType(n.item),
                        a = d._getSlotByType(o);
                    a.setItem(n), a.dragUiInfo.backgroundImage = a.getImage(), c.enableDrag(a), "item" === o && (d.currentCraftingItem = n, d.itemBox.displayItem(n), d.setItemBoxVisibility(!0)), "rune" === o && (d._currentRune = n);
                    var r = 0 === e.object.effects.length;
                    e.residualMagic > -1 && !r && d.residualMagictext.setText(l("ui.craft.residualMagic", e.residualMagic / 100)), d._updateCraftingButtons()
                }
            })
        }

        function n(e) {
            var t = e.objectUID,
                i = d._getSlotTypeByUID(t);
            i && (d._unselectCurrentSlot(), d._resetSlot(i), d._updateSlotsImage(), "item" === i && (d.setItemBoxVisibility(!1), d.residualMagictext.setText(l("ui.craft.residualMagic", ""))), d._updateCraftingButtons())
        }

        function o(e) {
            i(e), h()
        }

        function a(e) {
            n(e), h()
        }

        function r(e) {
            var t = window.gui;
            if (e.residualMagic > -1 && d.residualMagictext.setText(l("ui.craft.residualMagic", e.residualMagic / 100)), e.craftResult === s.CRAFT_IMPOSSIBLE) {
                var i = l("ui.craft.noResult");
                return t.openSimplePopup(i), t.chat.logMsg(i), u("ExchangeReadyMessage", {
                    ready: !1,
                    step: d.exchangeStep
                }), d.isInAutoCraft = !1, void d._updateCraftingButtons()
            }
            p.createItemInstances(e.objectInfo, function(t, i) {
                if (t) return console.error("CraftMagusWindow createItemInstances", t);
                if (d.openState) {
                    var n = i.array[0];
                    A.display(d.currentCraftingItem, n, e)
                }
            })
        }
        this._initVariables();
        var d = this,
            u = window.dofus.sendMessage,
            h = this.incrementStep = function() {
                d.exchangeStep += 1
            };
        this.onMergeAllBtnTap = e, this.onMergeBtnTap = t;
        var f = window.gui;
        f.on("ObjectModifiedMessage", this.localizeEvent(i)), f.on("ExchangeObjectAddedMessage", this.localizeEvent(o)), f.on("FMExchangeObjectAddedMessage", this.localizeEvent(o)), f.on("FMExchangeObjectAddedMessage", this.localizeEvent(i)), f.on("ExchangeObjectModifiedMessage", this.localizeEvent(o)), f.on("ExchangeObjectRemovedMessage", this.localizeEvent(a)), f.on("ExchangeCraftResultMagicWithObjectDescMessage", this.localizeEvent(r)), f.on("ExchangeCraftResultMessage", this.localizeEvent(r)), f.on("ExchangeItemAutoCraftStopedMessage", this.localizeEvent(this._onAutoCraftStopped.bind(this)))
    }, n.prototype._createDom = function() {
        function e(e, t, n) {
            var o = n.getItem();
            return !!o && i.jobsData.getQuickTransferInfo("crafting", o, 1)
                .movedQty > 0
        }

        function t(t) {
            var n = new h({
                name: t,
                noDoubleTap: !0
            });
            return n.dragUiInfo = {
                backgroundImage: "none",
                prepareForDrag: e
            }, c.setDraggable(n, n.dragUiInfo, "crafting", {
                slot: n
            }), c.disableDrag(n), n.on("tap", function() {
                i._simpleTapOnSlot(n)
            }), n
        }
        var i = this,
            n = this.col2 = this.windowBody.createChild("div", {
                className: "col2"
            }),
            r = this.col1 = this.windowBody.createChild("div", {
                className: "col1"
            }),
            s = this.craftingBoxContainer = r.createChild("div", {
                className: "craftingBoxContainer"
            }),
            d = s.createChild("div", {
                className: ["craftingBoxDropArea", "hoverable"]
            });
        c.setDroppable(d, ["craftInventory", "ingredientsBag"], {
            isDropAllowed: o
        }), d.on("drop", this._itemDropOnCraftBox.bind(this)), d.myWindow = this;
        var p = this.craftingBox = d.createChild("div", {
            className: "craftingBox"
        });
        this.residualMagicContainer = r.createChild("div", {
            className: "residualMagicContainer"
        }), this.residualMagictext = this.residualMagicContainer.createChild("div", {
            className: "residualMagic",
            text: l("ui.craft.residualMagic", "")
        }), g(this.residualMagictext), this.residualMagictext.on("longtap", function() {
            _.showNotification(l("ui.craft.residualMagic.details"), i.residualMagicContainer)
        });
        for (var m = this.craftingSlots = p.createChild("div", {
                className: "craftingSlots"
            }), M = 0; M < w.length; M += 1) {
            var A = w[M];
            m.appendChild(t(A)), 0 === M && (this.plusIcon = m.createChild("div", {
                className: "plusIcon"
            }))
        }
        this.minMaxSelector = this.windowContent.appendChild(new f), this.minMaxSelector.on("confirm", this._moveItem.bind(this));
        var O = r.createChild("div", {
            className: "buttonsContainer"
        });
        this.mergeAllBtn = O.appendChild(new a(l("ui.common.mergeAll"), {
            className: "mergeAllBtn"
        })), this.mergeAllBtn.on("tap", this.onMergeAllBtnTap), this.stopBtn = O.appendChild(new a(l("ui.common.stop"), {
            className: "stopBtn"
        })), this.stopBtn.on("tap", this._onStopBtnTap.bind(this)), this.mergeBtn = O.appendChild(new a(l("ui.common.merge"), {
            className: "mergeBtn"
        })), this.mergeBtn.on("tap", this.onMergeBtnTap), this._setEnableCraftingButtons(!1), this.ingredientsBag = this.col1.createChild("div", {
            className: "ingredientsBag"
        });
        var v = this.col1.appendChild(new a(l("ui.button.openChat"), {
            className: "openChatBtn"
        }));
        v.on("tap", this._onOpenChatBtnTap), this.itemBox = n.appendChild(new u({
            showDescription: !1,
            showTitle: !0,
            minRows: 0,
            hideItemImage: !1,
            forceHidePreviewBtn: !0
        })), this.itemPlaceholder = new b(n, {
            noHeight: !0
        }), this.itemPlaceholder.setText(" ")
    }, n.prototype._onOpen = function(e) {
        this.jobsData = window.gui.playerData.jobs;
        var t = e.msg;
        this.skillId = t.skillId, this.skillData = this.jobsData.getSkill(t.skillId), this.setTitle(this.skillData.nameId), this._updateSlotsImage(), this.selectedSlot = null, this.setItemBoxPlaceholderText(l("ui.craftHelp.magicSolo")), this.setItemBoxVisibility(!1), this.jobsData.startCraftingSession("SOLO", this.skillId, 1)
    }, n.prototype._onClose = function() {
        this.jobsData.clearAfterCraft(), this._initVariables(), this._resetSlots(), this._unselectCurrentSlot(), this.setItemBoxVisibility(!1), this._setEnableCraftingButtons(!1), this.residualMagictext.setText(l("ui.craft.residualMagic", ""))
    }, n.prototype._isCraftableItem = function(e) {
        return this.skillData.modifiableItemType === e.typeId
    }, n.prototype._hasSignatureSlot = function() {
        var e = window.gui.playerData.jobs.list,
            t = this.skillData.parentJobId,
            i = e[t] || {},
            n = i.experience || {};
        return n.jobLevel >= z
    }, n.prototype._getSlotByType = function(e) {
        return this.craftingSlots.getChild(e)
    }, n.prototype._slotHasItem = function(e) {
        var t = this._getSlotByType(e);
        return Boolean(t.itemInstance)
    }, n.prototype._updateSlotsImage = function() {
        var e = this.skillData.modifiableItemType;
        this._getSlotByType("item")
            .setBackgroundImageByItemType(e), this._getSlotByType("rune")
            .setBackgroundImageByItemType(O);
        var t = this._hasSignatureSlot(),
            i = this._getSlotByType("signatureRune");
        i.toggleClassName("signatureSlot", t), i.toggleClassName("locked", !t)
    }, n.prototype._resetSlot = function(e) {
        var t = this._getSlotByType(e);
        t.unset(), c.disableDrag(t)
    }, n.prototype._resetSlots = function() {
        for (var e = 0; e < w.length; e += 1) this._resetSlot(w[e])
    }, n.prototype._getItemSlotType = function(e) {
        var t, i = this.skillData;
        return this._isCraftableItem(e) ? t = "item" : i.isForgemagus && e.typeId === O || e.typeId === v ? t = "rune" : e.id === y && (t = "signatureRune"), t
    }, n.prototype._getSlotTypeByUID = function(e) {
        for (var t = 0; t < w.length; t += 1) {
            var i = w[t],
                n = this._getSlotByType(i);
            if (n.itemInstance && n.itemInstance.objectUID === e) return i
        }
    }, n.prototype._setEnableMergeButtons = function(e) {
        this.mergeAllBtn.setEnable(e), this.mergeBtn.setEnable(e), this.plusIcon.toggleClassName("available", e)
    }, n.prototype._setEnableCraftingButtons = function(e) {
        this._setEnableMergeButtons(e), this.stopBtn.setEnable(e)
    }, n.prototype._updateCraftingButtons = function() {
        this._setEnableMergeButtons(!this.isInAutoCraft && this._slotHasItem("item") && this._slotHasItem("rune")), this.stopBtn.setEnable(this.isInAutoCraft), this.isInAutoCraft ? this.jobsData.startCombining() : this.jobsData.stopCombining()
    }, n.prototype._moveItem = function(e) {
        this.jobsData.moveItemToCraft("craftInventory", this.newItemInstance, e)
    }, n.prototype._itemDropOnCraftBox = function(e, t) {
        if (this.skillId && e.itemInstance && (this.newItemSlotType = this._getItemSlotType(e.itemInstance.item), this.newItemSlotType)) {
            var i = this.newItemInstance = e.itemInstance;
            this.droppedLocation = "crafting", this.droppedItemSource = t;
            var n = e.getQuantity();
            n = this.jobsData.howManyCanBeAddedToCraft(t, i, n), 0 !== n && (1 === n ? this._moveItem(1) : this.minMaxSelector.open({
                min: 1,
                max: n,
                defaultValue: n,
                x: T,
                y: C
            }))
        }
    }, n.prototype._onStopBtnTap = function() {
        window.dofus.sendMessage("ExchangeReplayStopMessage")
    }, n.prototype._onAutoCraftStopped = function(e) {
        r.displayAutoCraftStopReasonMessage(e.reason), this.isInAutoCraft = !1, this._updateCraftingButtons()
    }, n.prototype.setItemBoxPlaceholderText = function(e) {
        this.placeholderText = e, this.isPlaceholderVisible && this.itemPlaceholder.setText(this.placeholderText)
    }, n.prototype.setItemBoxVisibility = function(e) {
        this.itemBox.toggleDisplay(e), e ? this.itemPlaceholder.setText(null) : this.itemPlaceholder.setText(this.placeholderText), this.isPlaceholderVisible = !e
    }, n.prototype._simpleTapOnSlot = function(e) {
        var t = e.getItem();
        if (t) {
            e !== this.selectedSlot && window.gui.openContextualMenuAround("item", e, {
                item: t
            });
            var i = this.jobsData.getQuickTransferInfo("crafting", t, e.getQuantity());
            i.movedQty && (e !== this.selectedSlot ? this._selectCurrentSlot(e, i.movedQty > 1 ? "stackMove" : "") : this.jobsData.removeItemFromCraft(t.objectUID, i.movedQty))
        }
    }, n.prototype._selectCurrentSlot = function(e, t) {
        this.selectedSlot && this._unselectCurrentSlot(), this.selectedSlot = e, e.select({
            extraStyle: t
        })
    }, n.prototype._unselectCurrentSlot = function() {
        this.selectedSlot && (this.selectedSlot.unselect(), this.selectedSlot = null)
    }, n.prototype._onOpenChatBtnTap = function() {
        window.gui.chat.active ? window.gui.chat.deactivate() : window.gui.chat.activate()
    }
}
