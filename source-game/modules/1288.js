function(e, t, i) {
    function n() {
        l.call(this), this.addClassNames("CraftMagusMultiWindow"), this.on("opened", function() {
            this._resizeIngredientSlots(), this._updateIngrediensSlotsPageCount()
        })
    }

    function o() {
        this.myWindow._tapOnBagSlot(this)
    }

    function a(e, t, i) {
        return !!e.slot && this.myWindow.jobsData.canItemMove(i, "ingredientsBag", e.slot.getItem())
    }
    i(1289);
    var r = i(86)
        .DofusButton,
        s = i(594),
        c = i(668),
        l = i(1282),
        d = i(418),
        u = i(17)
        .getText,
        p = i(56)
        .inherits,
        h = i(469),
        f = i(871),
        b = i(867),
        m = i(52),
        M = i(72),
        g = 40,
        _ = 40,
        A = 30,
        O = c.SIGNATURE_AVAILABLE_LEVEL;
    p(n, l), e.exports = n, n.prototype._initVariables = function() {
        l.prototype._initVariables.call(this, !0), this.isCrafter = null, this.isCraftingMode = !1, this.crafterSkillLevel = 1, this.currentPage = -1, this.pageCount = -1
    }, n.prototype._initialize = function() {
        function e(e) {
            var t = Boolean(e.allowed);
            c.allowCrafterIngredientsCheckbox.toggleActivation(t, !0), c.isCrafter && c.allowCrafterIngredientsCheckbox.setText(u(t ? "ui.craft.crafterRunesAllowed" : "ui.craft.crafterRunesNotAllowed")), c.jobsData.setCrafterIngredientsAllowed(t)
        }

        function t(e, t, i) {
            var n = c.jobsData.getQuickTransferInfo("ingredientsBag", i.getItem(), 1);
            return n.movedQty > 0
        }

        function i(e) {
            c._unselectBagSlot();
            var i = e.object;
            h.createItemInstances(i, function(e, n) {
                if (e) return console.error(e);
                var a = n.map[i.objectUID],
                    r = new f({
                        itemData: a,
                        name: i.objectUID,
                        noDoubleTap: !0
                    });
                r.setQuantity(a.quantity), c.ingredientsSlots.appendChild(r), r.on("tap", o), r.myWindow = c, d.setDraggable(r, {
                    backgroundImage: r.getImage(),
                    prepareForDrag: t
                }, "ingredientsBag", {
                    slot: r
                }), c._updateIngrediensSlotsPageCount()
            })
        }

        function n(e) {
            c._unselectBagSlot();
            var t = e.object,
                i = t.objectUID,
                n = t.quantity,
                o = c.ingredientsSlots.getChild(i);
            o && o.setQuantity(n)
        }

        function a(e) {
            c._unselectBagSlot();
            var t = e.objectUID,
                i = c.ingredientsSlots.getChild(t);
            i && (i.destroy(), c._updateIngrediensSlotsPageCount())
        }

        function r(e, t, i) {
            if (c._unselectBagSlot(), !(!c.skillId || !e.itemInstance || !c._getItemSlotType(e.itemInstance.item) || c.isCrafter && "craftInventory" === t || c.isCrafter && "crafting" === t && c._isMyItem(e.itemInstance.objectUID))) {
                c.newItemInstance = e.itemInstance, c.droppedLocation = "ingredientsBag", c.droppedItemSource = t;
                var n = e.getQuantity();
                return 1 === n ? c._moveItem(1) : void c.minMaxSelector.open({
                    min: 1,
                    max: n,
                    defaultValue: n,
                    x: i.x,
                    y: i.y
                })
            }
        }

        function s(e) {
            var t = e.ready;
            c._updateExchangeReadyDisplay(Boolean(t))
        }
        l.prototype._initialize.call(this);
        var c = this;
        this.itemDropOnBag = r;
        var p = window.gui;
        p.on("ExchangeMultiCraftCrafterCanUseHisRessourcesMessage", this.localizeEvent(e)), p.on("ExchangeObjectPutInBagMessage", this.localizeEvent(i)), p.on("ExchangeObjectRemovedFromBagMessage", this.localizeEvent(a)), p.on("ExchangeObjectModifiedInBagMessage", this.localizeEvent(n)), p.on("ExchangeIsReadyMessage", this.localizeEvent(s));
        var b = this.incrementStep;
        p.on("ExchangeGoldPaymentForCraftMessage", this.localizeEvent(b)), p.on("ExchangeItemPaymentForCraftMessage", this.localizeEvent(b)), p.on("ExchangeModifiedPaymentForCraftMessage", this.localizeEvent(b)), p.on("ExchangeRemovedPaymentForCraftMessage", this.localizeEvent(b)), p.on("ExchangeClearPaymentForCraftMessage", this.localizeEvent(b))
    }, n.prototype._tapOnBagSlot = function(e) {
        var t = e.getItem(),
            i = e.getQuantity(),
            n = this.jobsData.getQuickTransferInfo("ingredientsBag", t, i),
            o = n.movedQty;
        e !== this.selectedBagSlot && window.gui.openContextualMenuAround("item", e, {
            item: t
        }), o && (e !== this.selectedBagSlot ? this._selectBagSlot(e, o > 1 ? "stackMove" : "") : this.isCrafter ? this.jobsData.moveItemToCraft("ingredientsBag", t, o) : this.jobsData.removeItemFromCraft(e.itemInstance.objectUID, o))
    }, n.prototype._selectBagSlot = function(e, t) {
        this.selectedBagSlot && this._unselectBagSlot(), this.selectedBagSlot = e, e.select({
            extraStyle: t
        })
    }, n.prototype._unselectBagSlot = function() {
        this.selectedBagSlot && (this.selectedBagSlot.unselect(), this.selectedBagSlot = null)
    }, n.prototype._createDom = function() {
        l.prototype._createDom.call(this);
        var e = this,
            t = new M("div", {
                className: "crafter"
            });
        this.crafterName = t.createChild("span", {
            className: "playerName"
        }), this.crafterDescription = t.createChild("span"), this.craftingBox.insertAsFirstChild(t), this.acceptBtn = new r(u("ui.common.accept"), {
            className: "acceptBtn"
        }), this.acceptBtn.on("tap", function() {
            window.dofus.sendMessage("ExchangeReadyMessage", {
                ready: !0,
                step: e.exchangeStep
            })
        }), this.acceptBtn.insertBefore(this.stopBtn);
        var i = this.ingredientsBag.createChild("div");
        this.bagDescription = i.createChild("span", {
            className: "title"
        }), this.clientName = i.createChild("span", {
            className: "playerName"
        }), this.ingredientsSlotsContainer = this.ingredientsBag.createChild("div", {
            className: "ingredientsSlotsContainer"
        }), this.ingredientsSlotsBox = this.ingredientsSlotsContainer.createChild("div", {
            className: "ingredientsSlotsBox"
        }), this.ingredientsSlotsMask = this.ingredientsSlotsBox.createChild("div", {
            className: ["ingredientsSlotsMask", "hoverable"]
        }), d.setDroppable(this.ingredientsSlotsMask, ["craftInventory", "crafting"], {
            isDropAllowed: a
        }), this.ingredientsSlotsMask.on("drop", this.itemDropOnBag), this.ingredientsSlotsMask.myWindow = this, this.ingredientsSlots = this.ingredientsSlotsMask.createChild("div", {
            className: "ingredientsSlots"
        }), this.pagination = this.ingredientsSlotsContainer.appendChild(new b), this.pagination.on("previous", function() {
            e._ingrediensSlotsGoToPage(e.currentPage - 1)
        }), this.pagination.on("next", function() {
            e._ingrediensSlotsGoToPage(e.currentPage + 1)
        }), this.pagination.on("page", function(t) {
            e._ingrediensSlotsGoToPage(t)
        }), this.allowCrafterIngredientsCheckbox = this.col2.appendChild(new s("")), this.allowCrafterIngredientsCheckbox.on("change", function(e) {
            window.dofus.sendMessage("ExchangeMultiCraftSetCrafterCanUseHisRessourcesMessage", {
                allow: e
            })
        }), this.paymentBtn = new r(u("ui.common.payment"), {
            className: "paymentBtn"
        }), this.paymentBtn.on("tap", function() {
            m.open("craftPayment")
        }), this.col2.appendChild(this.paymentBtn)
    }, n.prototype._onOpen = function(e) {
        this.jobsData = window.gui.playerData.jobs;
        var t = e.msg;
        this.skillId = t.skillId, this.skillData = this.jobsData.getSkill(t.skillId), this.setTitle(this.skillData.nameId), this._roleSetup(e), this._updateSlotsImage(), this.selectedBagSlot = null, this.jobsData.startCraftingSession(this.isCrafter ? "CRAFTER" : "CLIENT", this.skillId, 1);
        var i = u(this.isCrafter ? "ui.craftHelp.magicMultiCrafter1" : "ui.craftHelp.magicMultiClient1");
        this.setItemBoxPlaceholderText(i), this.setItemBoxVisibility(!1), m.close("cancel", {
            keepDialog: !0
        })
    }, n.prototype._onClose = function() {
        l.prototype._onClose.call(this), this.ingredientsSlots.clearContent(), this.selectedBagSlot = null, m.close("craftPayment")
    }, n.prototype._roleSetup = function(e) {
        var t = e && e.sourceName || "",
            i = e && e.targetName || "",
            n = window.gui.playerData.characterBaseInformations.name,
            o = t === n,
            a = o ? i : t,
            r = e && e.isCrafter;
        this.isCrafter = r, this.mergeAllBtn.toggleDisplay(r), this.mergeBtn.toggleDisplay(r), this.acceptBtn.toggleDisplay(!r), this.allowCrafterIngredientsCheckbox.setText(u(r ? "ui.craft.crafterRunesNotAllowed" : "ui.craft.allowCrafterRunes"));
        var s = !1,
            c = !0;
        this.allowCrafterIngredientsCheckbox.toggleActivation(s, c), this.allowCrafterIngredientsCheckbox.setEnable(!r);
        var l = m.getWindow("craftPayment");
        l.setForCrafter(r), l.setOnSuccess(!0);
        var d = window.gui.playerData.jobs.list[this.skillData.parentJobId] || {},
            p = d.experience || {};
        this.crafterSkillLevel = e.msg.crafterJobLevel || p.jobLevel, this.crafterName.setText(r ? n : a), this.clientName.setText(r ? a : n), this.bagDescription.setText(r ? u("ui.craft.ingredientBagCrafter") + " - " : u("ui.craft.ingredientBagClient") + " - ");
        var h = e.msg.enrichData.jobName;
        this.crafterDescription.setText(" - " + h + " " + u("ui.common.level") + " " + this.crafterSkillLevel), this._updateExchangeReadyDisplay(!1)
    }, n.prototype._hasSignatureSlot = function() {
        return this.crafterSkillLevel >= O
    }, n.prototype._setEnableIngredientsBag = function(e) {
        this.ingredientsSlotsBox.toggleClassName("disabled", !e)
    }, n.prototype._setEnableCraftingBox = function(e) {
        this.craftingSlots.toggleClassName("disabled", !e)
    }, n.prototype._resizeIngredientSlots = function() {
        this.ingredientsSlotsBox.hide();
        var e = this.ingredientsSlotsContainer.rootElement,
            t = e.offsetWidth,
            i = e.offsetHeight - A,
            n = this.ingredientsSlotsRowNum = Math.floor(i / g),
            o = Math.floor(t / _);
        this.maxIngredientsSlotsPerPage = n * o;
        var a = o * _,
            r = n * g;
        this.ingredientsSlotsBox.setStyles({
            width: t + "px",
            height: i + "px"
        }), this.ingredientsSlotsMask.setStyles({
            width: a + "px",
            height: r + "px"
        }), this.ingredientsSlotsBox.show()
    }, n.prototype._updateExchangeReadyDisplay = function(e) {
        var t = this.isCraftingMode = e;
        this.jobsData.switchToCrafter(t);
        var i;
        this.isCrafter ? (this._setEnableCraftingBox(t), this._setEnableIngredientsBag(t), i = e ? "ui.craftHelp.magicMultiCrafter2" : "ui.craftHelp.magicMultiCrafter1") : (this._setEnableCraftingBox(!1), this._setEnableIngredientsBag(!t), this.acceptBtn.setEnable(!t), this.stopBtn.setEnable(t), i = e ? "ui.craftHelp.magicMultiClient2" : "ui.craftHelp.magicMultiClient1"), this.setItemBoxPlaceholderText(u(i))
    }, n.prototype._updateCraftingButtons = function() {
        this.isCrafter && l.prototype._updateCraftingButtons.call(this)
    }, n.prototype._isMyItem = function(e) {
        return Boolean(window.gui.playerData.inventory.objects[e])
    }, n.prototype._ingrediensSlotsGoToPage = function(e) {
        if (!(this.currentPage === e || e < 0 || e > this.pageCount - 1)) {
            this.currentPage = e;
            var t = "translateY(-" + e * this.ingredientsSlotsRowNum * g + "px)";
            this.ingredientsSlots.setStyles({
                webkitTransform: t,
                transform: t
            }), this.pagination.setCurrent(e)
        }
    }, n.prototype._updateIngrediensSlotsPageCount = function() {
        var e = this.ingredientsSlots.getChildren()
            .length;
        this.pageCount = Math.ceil(e / this.maxIngredientsSlotsPerPage) || 1;
        var t = Math.min(Math.max(this.currentPage, 0), this.pageCount - 1);
        this.pagination.setPageCount(this.pageCount), this._ingrediensSlotsGoToPage(t)
    }, n.prototype._moveItem = function(e) {
        var t = "crafting" === this.droppedLocation || "craftInventory" === this.droppedItemSource && "ingredientsBag" === this.droppedLocation;
        t ? this.jobsData.moveItemToCraft(this.droppedItemSource, this.newItemInstance, e) : this.jobsData.removeItemFromCraft(this.newItemInstance.objectUID, e)
    }, n.prototype._onStopBtnTap = function() {
        return this.isCrafter ? l.prototype._onStopBtnTap.call(this) : void window.dofus.sendMessage("ExchangeReadyMessage", {
            ready: !1,
            step: this.exchangeStep
        })
    }, n.prototype._onAutoCraftStopped = function(e) {
        return this.isCrafter ? l.prototype._onAutoCraftStopped.call(this, e) : (c.displayAutoCraftStopReasonMessage(e.reason), void(this.isInAutoCraft = !1))
    }
}
