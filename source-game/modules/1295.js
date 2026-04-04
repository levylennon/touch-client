function(e, t, i) {
    function n(e) {
        function t(e) {
            return x === L.SKILLID_WRAP_GIFT || q && q[e.objectGID]
        }

        function i(e) {
            var t = e.item,
                i = L.getSkill(x);
            return !i || (t.typeId === i.modifiableItemType && t.enhanceable || t.typeId === u.SMITHMAGIC_RUNE_ID || t.typeId === u.SMITHMAGIC_POTION_ID || e.objectGID === u.SIGNATURE_RUNE_ID && L.canCrafterSign && "CLIENT" !== L.craftSide)
        }

        function n(e) {
            return !e.isLinked() && (!e.isLinkedCharacter() && e.item.isEquippable())
        }

        function a(e) {
            return "craftPayment" === I ? window.dofus.sendMessage("ExchangeItemObjectAddAsPaymentMessage", {
                paymentType: w,
                bAdd: !1,
                objectToMoveId: y,
                quantity: e
            }) : "ingredientsBag" === I ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: y,
                quantity: -e
            }) : void L.removeItemFromCraft(y, e)
        }

        function h(e) {
            b(e.object, e.remote)
        }

        function b(t, i) {
            var n = t.objectUID,
                o = E.objects[n];
            if (o) {
                var a = o.quantity - t.quantity;
                e.setItemQuantity(n, a), a > 0 && !i && O(n)
            }
        }

        function m(t) {
            var i = t.count,
                n = L.getCraftTable();
            for (var o in n) {
                var a = parseInt(o, 10),
                    r = n[o].quantity,
                    s = E.objects[a];
                s && e.setItemQuantity(a, s.quantity - r * i)
            }
        }

        function M(e) {
            g(e.objectUID, e.remote)
        }

        function g(t, i) {
            e.resetItemQuantity(t), i || O(t)
        }

        function _(e, t, i, n) {
            return !window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_SLOT_DROP) && (y = e.itemInstance.objectUID, z = e.itemInstance.objectGID, w = e.paymentType, z === L.RUNE_SIGNATURE_GID && "craftPayment" !== I ? a(1) : 1 === n ? a(1) : void N.open({
                min: 1,
                max: n,
                defaultValue: n,
                x: t,
                y: i
            }))
        }

        function A(e, t, i) {
            return !!e.slot && L.canItemMove(i, "craftInventory", e.slot.getItem())
        }

        function O(t) {
            var i = e.getSlotByUID(t);
            if (i) {
                var n = L.getQuickTransferInfo("craftInventory", i.getItem(), i.getQuantity());
                n.movedQty > 0 && e.selectSlot(i, n.movedQty > 1 ? "stackMove" : "")
            }
        }

        function v() {
            return !L.isCombining
        }
        s.call(this, {
            title: c("ui.common.inventory"),
            className: "CraftInventoryWindow",
            positionInfo: {
                right: 0,
                width: "24%",
                height: "100%",
                isDefault: !0
            }
        }), this.storageViewer = e, e.registerView(this, {
            enableSlotContext: !1,
            tapSelectedEmitsDoubleTap: !0,
            showHoverFrame: !0,
            prepareForDragFunction: v,
            manualReset: !0
        });
        var y, z, w, T = this,
            C = !1,
            I = null,
            S = window.gui,
            E = S.playerData.inventory,
            L = S.playerData.jobs;
        this.fakeResources = null, this.fakeCraft = !1;
        var N = S.windowsContainer.appendChild(new l);
        N.on("confirm", a);
        var R = !0,
            q = null,
            x = null,
            B = null,
            D = null,
            W = new d(c("ui.craft.craftFilter"), {
                defaultValue: !0
            });
        W.on("change", function(t) {
            R = t, t ? e.addFilters([D]) : e.removeFilter(D), e.filterList(!0)
        }), S.on("ExchangeItemPaymentForCraftMessage", this.localizeEvent(h)), S.on("ExchangeModifiedPaymentForCraftMessage", this.localizeEvent(h)), S.on("ExchangeObjectPutInBagMessage", this.localizeEvent(h)), S.on("ExchangeObjectModifiedInBagMessage", this.localizeEvent(h)), this.on("itemModified", this.localizeEvent(function(e) {
            h({
                object: e,
                remote: !1
            })
        })), S.on("ExchangeReplayCountModifiedMessage", this.localizeEvent(m)), S.on("ExchangeRemovedPaymentForCraftMessage", this.localizeEvent(M)), S.on("ExchangeClearPaymentForCraftMessage", this.localizeEvent(M)), S.on("ExchangeObjectRemovedFromBagMessage", this.localizeEvent(M)), this.on("open", function(a) {
            C || (C = !0, o(this, ["crafting", "craftPayment", "ingredientsBag"], {
                isDropAllowed: A
            }), this.on("drop", function(e, t, i) {
                T.fakeCraft || (I = t, _(i.slot, i.x, i.y, i.slot.getQuantity()))
            })), L.on("objectAdded", b), L.on("objectModified", b), L.on("objectRemoved", g), a = a || {}, B = a.type;
            var s = a.msg;
            x = s.skillId;
            var c = s.maxCase || s.nbCase;
            "craftMagus" === B ? (q = {}, D = i) : "decrafting" === B ? D = n : (q = L.getStorageCraftFilterMap(x, c), D = t), e.storageUI.appendChild(W), e.clearFilters(), e.addFilters([r.unlinkedItemsFilter]), R && e.addFilters([D]), e.filterList(), e.resetDisplay(), T._refreshTutorialRestrictions()
        }), this.on("opened", function(e) {
            e = e || {}, T.fakeCraft = e.fakeCraft, T._displayFakeIngredients(e.fakeCraft)
        }), this.on("close", function() {
            N.hide(), q = null, x = null, B = null
        }), this.on("closed", function() {
            T._removeFakeAllItems(), e.storageUI.removeChild(W), e.clearFilters(), e.resetItemsQuantity(), e.filterList()
        }), this.on("slot-tap", function(t) {
            if (!window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_SLOT_TAP)) {
                var i = t.getItem();
                window.gui.openContextualMenuAround("item", t, {
                    item: i
                });
                var n = L.getQuickTransferInfo("craftInventory", i, t.getQuantity()),
                    o = n.movedQty;
                return 0 === o ? e.unSelectSlot() : void(o > 1 && t.select({
                    extraStyle: "stackMove"
                }))
            }
        }), this.on("slot-doubletap", function(t) {
            var i = t.getItem();
            if (window.gui.scenarioManager.isBehaviourEnabled(p.ENABLE_FAKE_CRAFT_TUTORIAL_2)) {
                var n = f.getWindow("crafting");
                return void(n.openState && n.addFakeItemToCraftBox(i))
            }
            if (!window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_SLOT_DOUBLE_TAP)) {
                var o = L.getQuickTransferInfo("craftInventory", i, t.getQuantity()),
                    a = o.movedQty;
                return 0 === a ? e.unSelectSlot() : void L.moveItemToCraft(this.id, i, a)
            }
        }), window.gui.scenarioManager.on("stepChanged", function() {
            T._refreshTutorialRestrictions()
        })
    }
    i(1296);
    var o = i(418)
        .setDroppable,
        a = i(56)
        .inherits,
        r = i(469),
        s = i(70),
        c = i(17)
        .getText,
        l = i(421),
        d = i(594),
        u = i(668),
        p = i(129),
        h = i(13),
        f = i(52);
    a(n, s), e.exports = n, n.prototype._refreshTutorialRestrictions = function() {
        var e = window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_CLOSE_BTN);
        this.toggleClassName("disableCloseButton", e)
    }, n.prototype._displayFakeIngredients = function(e) {
        var t = this;
        if (e) {
            var i = h.TUTORIAL_CRAFT_INGREDIENT_ITEMS[e - 1];
            if (i) {
                this.fakeResources = [];
                for (var n = 0; n < i.length; n++) this.fakeResources.push({
                    objectGID: i[n],
                    effects: [],
                    objectUID: -i[n],
                    quantity: 1,
                    position: 63
                });
                this.storageViewer.addTutorialFilter(), r.createItemInstances(this.fakeResources, function(e, i) {
                    return e ? console.error(e) : void(t.openState && (t.storageViewer.addItems(i.map), t.storageViewer.filterList(), t.storageViewer.resetDisplay(), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.FAKE_STORAGE_LOADED)))
                })
            }
        }
    }, n.prototype._removeFakeAllItems = function() {
        if (this.fakeResources) {
            for (var e = 0; e < this.fakeResources.length; e++) this.storageViewer.removeItem(this.fakeResources[e].objectUID);
            this.storageViewer.removeTutorialFilter(), this.fakeResources = null
        }
    }, n.prototype.removeFakeItem = function(e) {
        if (this.fakeResources)
            for (var t = 0; t < this.fakeResources.length; t++)
                if (this.fakeResources[t].objectUID === e) {
                    this.storageViewer.removeItem(this.fakeResources[t].objectUID), this.fakeResources.splice(t, 1);
                    break
                }
    }, n.prototype.getStorageFirstSlotForTuto = function() {
        return this.storageViewer.getStorageFirstSlotForTuto()
    }
}
