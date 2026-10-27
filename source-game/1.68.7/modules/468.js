function(e, t, i) {
    function n() {
        c.call(this);
        var e, t = {},
            i = {};
        this.once("open", function() {
            this._setupDom(t, i)
        }), this.on("open", function(n, o) {
            this._params = n;
            var a = this._item = n.item;
            this._action = null, e = n.onClose;
            var s = a.objectUID ? a : null,
                c = this._dbItem = s ? s.item : a;
            this.header.setText(c.nameId || ""), i.backgroundImage = c.image;
            for (var l in t) t[l].hide();
            var d = window.gui.playerData.isInDialog,
                p = !n.hasOwnProperty("enableSet") || n.enableSet,
                f = !n.hasOwnProperty("enableBestiary") || n.enableBestiary,
                b = !n.hasOwnProperty("enableRecipe") || n.enableRecipe,
                m = !n.hasOwnProperty("enableInsertRecipe") || n.enableInsertRecipe,
                M = Boolean(n.enableDestroy) && !d,
                g = Boolean(n.enableSell),
                _ = !n.hasOwnProperty("enableCertificate") || n.enableCertificate,
                A = Boolean(c),
                O = Boolean(s) && u.isItemInstanceWithMountInfo(s);
            if (t.itemSet.toggleDisplay(p && "ItemSetsWindow" !== n.location && Boolean(c.itemSetId) && c.itemSetId !== -1), t.recipes.toggleDisplay(b && A), t.insertRecipe.toggleDisplay(m && A), t.findInBestiary.toggleDisplay(f && Boolean(a.getProperty("dropMonsterIds")
                    .length)), t.bidHouseSell.toggleDisplay(Boolean(s) && g), t.bidHouseSearch.show(), t.remove.toggleDisplay(Boolean(n.remove)), t.mount.toggleDisplay(_ && O), s && (t.insertItemStats.toggleDisplay(m && A), n.enableActions && !d)) {
                t.feed.toggleDisplay(Boolean(c.foodTypes)), t.multiUse.toggleDisplay(Boolean(c.usable) && a.quantity > 1 && !c.multiUseUnabled), t.use.toggleDisplay(Boolean(c.usable)), t.target.toggleDisplay(h.isRoleplayMode && Boolean(c.targetable) && !c.nonUsableOnAnother);
                var v = c.isEquippable();
                t.equip.toggleDisplay(v && !r(a.position)), t.unequip.toggleDisplay(v && r(a.position)), t.mount.toggleDisplay(O), t.manage.toggleDisplay(Boolean(a.livingObjectCategory)), t.freeMimicry.toggleDisplay(s.isMimicryHost()), t.manageShield.toggleDisplay(s.isShieldManageable())
            }
            M && s && void 0 !== a.position && t.destroy.toggleDisplay(a.quantity > 0), o()
        }), this.on("close", function() {
            e && e(this._action)
        })
    }
    var o = i(418),
        a = i(56)
        .inherits,
        r = i(469)
        .isEquipped,
        s = i(469)
        .useObject,
        c = i(450),
        l = i(17)
        .getText,
        d = i(421),
        u = i(481),
        p = i(52),
        h = i(103),
        f = 40;
    a(n, c), e.exports = n, n.prototype._setupDom = function(e, t) {
        function i(e, t, i) {
            n = e, c.open({
                min: t,
                max: i,
                x: a._position.x,
                y: a._position.y
            })
        }
        var n, a = this,
            r = window.gui.playerData.inventory,
            c = this._minMaxSelector = window.gui.windowsContainer.appendChild(new d);
        e.equip = this._addEntry(l("ui.common.equip"), function() {
            r.equipItem(a._item.objectUID)
        }), e.unequip = this._addEntry(l("tablet.common.unequip"), function() {
            r.unEquipItem(a._item.objectUID)
        });
        var u = e.target = this._addEntry(l("ui.common.target"), function() {
            return window.gui.openSimplePopup(l("tablet.ui.item.targetInfo"))
        });
        o.setDraggable(u, t, "itemContextMenu", null, {
            containerWidth: f,
            containerHeight: f
        }), u.on("dragStart", function() {
            this.item = a._item, p.closeAll(), a.close()
        }), e.feed = this._addEntry(l("ui.common.feed"), function() {
            var e = a._item.item,
                t = p.getWindow("feed");
            return t.feedingBox.possessFeedItemForPet(a._item) ? void p.open("feed", {
                mode: "pet",
                item: a._item
            }) : window.gui.openSimplePopup(l("ui.item.errorNoFoodLivingItem", e.nameId))
        }), e.use = this._addEntry(l("ui.common.use"), function() {
            var e = a._item;
            return e.item.type.needUseConfirm ? void window.gui.openConfirmPopup({
                title: l("ui.common.confirm"),
                message: l("ui.common.confirmationUseItem", e.item.nameId),
                cb: function(t) {
                    t && s(e.objectUID)
                }
            }) : void s(e.objectUID)
        }), e.multiUse = this._addEntry(l("ui.common.multipleUse"), function() {
            i("use", 1, a._item.quantity)
        }), e.insertItemStats = this._addEntry(l("ui.craft.displayChatItem"), function() {
            window.gui.chat.insertLink("itemStats", a._item)
        }), e.insertRecipe = this._addEntry(l("ui.craft.displayChatRecipe"), function() {
            window.gui.chat.insertLink("recipe", a._item)
        }), e.bidHouseSell = this._addEntry(l("tablet.itemSellInBidHouse"), function() {
            var e = p.getWindow("bidHouseShop");
            e.openBidHouse(!0, a._item)
        }), e.bidHouseSearch = this._addEntry(l("ui.bidhouse.searchInBidhouse"), function() {
            var e = p.getWindow("bidHouseShop");
            e.openBidHouse(!1, a._item)
        }), e.findInBestiary = this._addEntry(l("ui.common.bestiary"), function() {
            p.open("grimoire", {
                tabId: "bestiary",
                tabParams: {
                    monsterIds: a._item.getProperty("dropMonsterIds"),
                    label: a._item.getRawName()
                }
            })
        }), e.recipes = this._addEntry(l("ui.craft.associateReceipts"), function() {
            p.open("itemRecipes", {
                itemData: a._item || a._dbItem
            })
        }), e.itemSet = this._addEntry(l("ui.common.set"), function() {
            p.open("itemSets", a._item)
        }), e.manage = this._addEntry(l("ui.item.manageItem"), function() {
            p.open("itemManage", {
                itemInstance: a._item
            })
        }), e.manageShield = this._addEntry(l("ui.item.manageShield"), function() {
            p.open("shieldWindow", {
                itemInstance: a._item
            })
        }), this.getEntryManageShield = function() {
            return e.manageShield
        }, e.freeMimicry = this._addEntry(l("ui.mimicry.free"), function() {
            var e = a._item;
            window.gui.openConfirmPopup({
                message: l("ui.mimicry.confirmFreePopup", e.getName()),
                cb: function(t) {
                    t && window.dofus.sendMessage("MimicryObjectEraseRequestMessage", {
                        hostUID: e.objectUID,
                        hostPos: e.position
                    })
                }
            })
        }), e.mount = this._addEntry(l("ui.mount.viewMountDetails"), function() {
            p.getWindow("mount")
                .showCertificateMount(a._item)
        }), e.destroy = this._addEntry(l("ui.common.destroyThisItem"), function() {
            var e = a._item;
            return 1 === e.quantity ? void window.gui.playerData.inventory.confirmDestroyItem(e, 1) : void i("destroy", 1, e.quantity)
        }), e.remove = this._addEntry(l("ui.common.remove"), function() {
            a._action = "remove"
        }), c.on("confirm", function(e) {
            var t = a._item;
            switch (n) {
                case "use":
                    window.dofus.sendMessage("ObjectUseMultipleMessage", {
                        objectUID: t.objectUID,
                        quantity: e
                    });
                    break;
                case "destroy":
                    window.gui.playerData.inventory.confirmDestroyItem(t, e);
                    break;
                default:
                    console.warn("[ContextualMenuItem] unknow mode.")
            }
        }), this._addCancel()
    }
}
