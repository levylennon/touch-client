function(e, t, i) {
    function n() {}

    function o(e) {
        r.call(this, {
            className: "LegendaryWeaponShatterWindow",
            title: s("ui.legendaryWeapon.titleShatter"),
            positionInfo: {
                left: "c",
                top: "c",
                width: "90%",
                height: "90%",
                minWidth: 700,
                maxHeight: 530,
                mustAvoidToolbar: !0
            }
        }), this.resultItemSlots = [], this.itemSelected = null, this.opened = !1, this.isOpened = !1, this.storageViewer = e, this.storageViewer.registerView(this, {
            manualOpening: !0,
            enableSlotContext: !1,
            noExtraMargin: !0
        }), this._setupListeners()
    }
    i(1396);
    var a = i(56)
        .inherits,
        r = i(70),
        s = i(17)
        .getText,
        c = i(1006),
        l = i(871),
        d = i(86),
        u = i(767),
        p = i(469),
        h = i(105),
        f = i(52),
        b = i(1394),
        m = 4;
    a(o, r), e.exports = o, o.prototype._setupListeners = function() {
        var e = this;
        this.once("open", function() {
            e._createDom()
        }), this.on("open", function() {
            e.isOpened = !0, e._onOpen(), window.foreground.lock("legendaryWeaponInterface")
        }), this.on("close", function() {
            e.isOpened = !1, window.foreground.unlock("legendaryWeaponInterface")
        }), this.on("closed", function() {
            e._clear(), e.storageViewer.unloadContent()
        }), window.gui.on("disconnect", function() {
            e._reset(), e.storageViewer.unloadContent()
        }), this.on("slot-tap", function(t) {
            e._selectItem(t.itemInstance)
        }), h.on("CurrentMapMessage", function() {
            e.close()
        }), f.on("opened", function(t) {
            switch (t.id) {
                case "bidHouseShop":
                case "exchangeInventory":
                case "tradeInventory":
                    e.close()
            }
        }), h.on("ObjectUpgradeEffectResultMessage", function(t) {
            if (e.isOpened) switch (e._clear(), t.status) {
                case b.UPGRADE_SUCCESS:
                    window.gui.openSimplePopup(s("ui.legendaryWeapon.successShatter"), s("ui.craft.success"));
                    break;
                case b.NOT_ENOUGH_INGREDIENTS:
                    window.gui.openSimplePopup(s("ui.craft.dontHaveAllIngredient"));
                    break;
                case b.OBJECT_EQUIPPED:
                    window.gui.openSimplePopup(s("ui.set.objectEquipped"));
                    break;
                case b.NO_WORKBENCH_NEARBY:
                    window.gui.openSimplePopup(s("ui.craft.notNearCraftTable"));
                    break;
                default:
                    window.gui.openSimplePopup(s("ui.craft.failed"))
            }
        })
    }, o.prototype._createDom = function() {
        var e = this;
        this.opened = !0;
        var t = this.windowBody.createChild("div", {
                className: "LWBody"
            }),
            i = t.createChild("div", {
                className: "leftContainer"
            }),
            n = t.createChild("div", {
                className: "rightContainer"
            }),
            o = i.createChild("div", {
                className: "currentLW"
            });
        this.currentLW = o.appendChild(new c({
            showTitle: !0,
            noListener: !0
        })), this.placeHolderLW = new u(o, {
            noHeight: !0
        }), i.createChild("div", {
            className: "bottomArrow"
        });
        var a = i.createChild("div", {
            className: "resourcesContainer"
        });
        this.placeHolderResources = new u(a, {
            noHeight: !0
        }), this.resultItemSlots = [];
        for (var r = 0; r < m; r++) this.resultItemSlots.push(a.appendChild(new l({
            noDoubleTap: !0,
            forceQuantity: !0
        }))), this.resultItemSlots[r].hide();
        var p = n.createChild("div", {
            className: "warningBox"
        });
        this.warningText = p.createChild("div", {
            className: "warningText"
        }), this.storageBox = n.createChild("div", {
            className: "storageBox"
        }), this.validationButton = n.appendChild(new d({
            className: "button"
        }, function() {
            window.gui.openConfirmPopup({
                title: s("ui.popup.warning"),
                message: s("ui.legendaryWeapon.warningShatter"),
                cb: function(t) {
                    t && e._validateShatter()
                }
            })
        }))
    }, o.prototype._onOpen = function() {
        this.opened && (this._clear(), this.validationButton.setText(s("ui.legendaryWeapon.confirmShatter")), this.warningText.setText(s("ui.legendaryWeapon.infoShatter")), this.storageBox.appendChild(this.storageViewer.storageUI), this.storageViewer.clearFilters(), this.storageViewer.resetDisplay(), this.storageViewer.addFilters([function(e) {
            return e.isLegendaryWeapon()
        }]), this.storageViewer.filterList())
    }, o.prototype._reset = function() {
        this.itemSelected = null
    }, o.prototype._clear = function() {
        this.opened && (this.validationButton.disable(), this.storageViewer.unSelectSlot(), this._clearIngredientSlots(), this._displayCurrentLW(null), this.placeHolderResources.setText(s("ui.search.noResult")), this._reset())
    }, o.prototype._clearIngredientSlots = function() {
        for (var e = 0; e < this.resultItemSlots.length; e++) this.resultItemSlots[e].unset(), this.resultItemSlots[e].hide()
    }, o.prototype._displayCurrentLW = function(e) {
        e ? (this.currentLW.displayItem(e), this.currentLW.show(), this.placeHolderLW.setText(null)) : (this.currentLW.hide(), this.placeHolderLW.setText(s("ui.common.selectItem")))
    }, o.prototype._selectItem = function(e, t) {
        var i = this;
        if (t = t || n, this._clear(), !e.item) return t(new Error("Unable to find item in the itemInstance of legendary weapon"));
        this.itemSelected = e, this._displayCurrentLW(e);
        var o, a = [];
        for (o = 0; o < e.item.shatterResults.length; o++) a.push(e.item.shatterResults[o].resultResourceId);
        p.getItems(a, function(n, a) {
            if (n) return t(n);
            for (o = 0; o < a.length; o++) {
                var r = i.resultItemSlots[o];
                r.setItem(a[o]), r.setQuantity(e.item.shatterResults[o].resultResourceQty), r.show()
            }
            return a.length > 0 && (i.placeHolderResources.setText(null), i.validationButton.enable()), t()
        })
    }, o.prototype._validateShatter = function() {
        this.itemSelected && window.dofus.sendMessage("ObjectUpgradeEffectShatterRequestMessage", {
            objectUID: this.itemSelected.objectUID
        })
    }
}
