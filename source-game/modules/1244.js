function(e, t, i) {
    function n(e) {
        var t = {},
            i = window.gui.playerData.inventory.objects;
        for (var n in i) {
            var o = i[n];
            e(o) && (t[n] = o)
        }
        return t
    }

    function o(e) {
        return w.indexOf(e.item.typeId) !== -1
    }

    function a(e) {
        return y.indexOf(e.objectGID) !== -1 || z.indexOf(e.item.typeId) !== -1
    }

    function r(e, t, i) {
        window.dofus.sendMessage("ObjectFeedMessage", {
            objectUID: i.item ? i.item.objectUID : i.itemInstance.objectUID,
            foodUID: t,
            foodQuantity: e
        })
    }

    function s(e, t, i) {
        i.itemInstance && !i.itemInstance.isShieldManageable() || window.dofus.sendMessage("ObjectFeedMessage", {
            objectUID: i.item ? i.item.objectUID : i.itemInstance.objectUID,
            foodUID: t,
            foodQuantity: e
        })
    }

    function c(e, t, i) {
        window.dofus.sendMessage("MountFeedRequestMessage", {
            mountUid: i.mountUid,
            mountLocation: i.mountLocation,
            mountFoodUid: t,
            quantity: e
        })
    }

    function l() {
        return h("ui.item.confirmFoodLivingItem")
    }

    function d(e, t) {
        return h("ui.item.confirmFoodMount", e, t)
    }

    function u(e) {
        function t(e) {
            var t = f.params.item;
            return t ? window.gui.playerData.inventory.isPetFood({
                foodItems: t.item.foodItems,
                foodTypes: t.item.foodTypes
            }, e) : (console.error(new Error("Cannot find the pet for mode " + f.mode)), !1)
        }

        function i(e) {
            return !e.livingObjectCategory && e.item.type.id === p
        }

        function n() {
            f.quantity.show(), f.quantityLabel.setText(h("ui.common.quantity") + h("ui.common.colon")), f.maxBtn.show(), f.minBtn.show()
        }

        function u() {
            f.quantity.hide(), f.quantityLabel.setText(h("ui.common.quantity") + h("ui.common.colon") + " 1"), f.maxBtn.hide(), f.minBtn.hide()
        }
        var p, f = this;
        this.storageViewer = new g({
            enablePresets: !1
        }), this.storageViewer.registerView(e, {
            manualOpening: !0,
            enableSlotContext: !1
        }), this._settings = {
            mount: {
                handleInput: function() {},
                setupUI: n,
                filter: a,
                confirmMessage: d,
                confirmAction: c,
                dataHandler: window.gui.playerData.inventory
            },
            pet: {
                handleInput: function() {},
                setupUI: n,
                filter: t,
                confirmMessage: l,
                confirmAction: r,
                dataHandler: window.gui.playerData.inventory
            },
            livingObject: {
                handleInput: function(e) {
                    p = e.item.livingObjectCategory
                },
                setupUI: u,
                filter: i,
                confirmMessage: l,
                confirmAction: r,
                dataHandler: window.gui.playerData.inventory
            },
            shield: {
                handleInput: function() {},
                setupUI: n,
                filter: o,
                confirmMessage: l,
                confirmAction: s,
                dataHandler: window.gui.playerData.inventory
            },
            shieldTutorial: {
                handleInput: function() {},
                setupUI: n,
                confirmMessage: l,
                dataHandler: null
            }
        }
    }
    var p = i(86),
        h = i(17)
        .getText,
        f = i(56)
        .inherits,
        b = i(1006),
        m = i(423),
        M = i(767),
        g = i(937),
        _ = i(469),
        A = i(70),
        O = i(476),
        v = i(480),
        y = [7903, 7904],
        z = [41, 62, 63, 64],
        w = [78];
    f(u, A), u.prototype.init = function(e) {
        this._createDom(e)
    }, u.prototype.update = function(e) {
        e = e || {};
        var t = this;
        if (this.reset(), this.mode = e.mode, this.params = e, this.setting = this._settings[this.mode], this.storageViewer.setDataHandler(this.setting.dataHandler), this.setting.handleInput(e), this.setting.setupUI(), "shieldTutorial" === e.mode) _.createItemInstances(v.fakeRune, function(e, i) {
            return e ? console.error(e) : void t.storageViewer.setItemList(i.map)
        });
        else {
            var i = n(this.setting.filter);
            this.storageViewer.setItemList(i), this.storageViewer.addFilters([this.setting.filter])
        }
        this.quantity.on("change", function(e) {
            t._emitQuantityUpdating(e)
        });
        var o = {
            silently: !1,
            rememberLastTabUsed: !1
        };
        this.storageViewer.resetFilter(o)
    }, u.prototype.unloadContent = function() {
        this.storageViewer.unloadContent()
    }, u.prototype.removeFilter = function() {
        this.storageViewer.removeFilter(this.setting.filter)
    }, u.prototype.possessFeedItemForMount = function() {
        for (var e = window.gui.playerData.inventory.objects, t = Object.keys(e), i = 0, n = t.length; i < n; i += 1)
            if (a(e[t[i]])) return !0;
        return !1
    }, u.prototype.possessFeedItemForPet = function(e) {
        for (var t = window.gui.playerData.inventory.objects, i = Object.keys(t), n = e.item.foodItems, o = e.item.foodTypes, a = 0, r = i.length; a < r; a += 1) {
            var s = t[i[a]];
            if (n.indexOf(s.objectGID) !== -1 || o.indexOf(s.item.typeId) !== -1) return !0
        }
        return !1
    }, u.prototype.possessFeedItemForLivingObject = function(e) {
        for (var t = window.gui.playerData.inventory.objects, i = Object.keys(t), n = e.livingObjectCategory, o = 0, a = i.length; o < a; o += 1) {
            var r = t[i[o]];
            if (!r.livingObjectCategory && r.item.type.id === n) return !0
        }
        return !1
    }, u.prototype.reset = function() {
        this.placeHolder.setText(h("ui.common.selectItem")), this.itemBox.hide(), this.confirmBtn.disable(), this.quantity.setValue(1), this._givenXp = 0, this.quantity.disable(), "shield" !== this.mode && "shieldTutorial" !== this.mode || (this.emit("quantityReset"), this.item && (this.storageViewer.unSelectSlot(this.item.objectUID), this.item = null)), this.minBtn.disable(), this.maxBtn.disable()
    }, u.prototype._createDom = function(e) {
        var t = this;
        this.viewerBox = e.createChild("div", {
            className: "viewer"
        }), this.viewerBox.appendChild(t.storageViewer.storageUI);
        var i = e.createChild("div", {
            className: "itemBox"
        });
        this.itemBox = i.appendChild(new b({
            showTitle: !0
        })), this.placeHolder = new M(i);
        var n = e.createChild("div", {
            className: "quantityBox"
        });
        this.quantityLabel = n.createChild("div", {
            className: "label"
        });
        var o = this.quantity = n.appendChild(new m({
            title: h("ui.common.quantity"),
            maxValue: 3e4
        }));
        this.minBtn = n.appendChild(new p({
            text: h("ui.common.minWord"),
            className: ["greenButton", "minButton"]
        }, function() {
            o.setValue(1), t._emitQuantityUpdating(1)
        })), this.maxBtn = n.appendChild(new p({
            text: h("ui.common.maxWord"),
            className: ["greenButton", "minButton"]
        }, function() {
            o.setValue(Math.min(3e4, t.item.quantity)), t._emitQuantityUpdating(Math.min(3e4, t.item.quantity))
        })), this.confirmBtn = e.appendChild(new p({
            text: h("ui.common.validation"),
            className: ["greenButton", "confirm"]
        })), this.confirmBtn.on("tap", function() {
            var e = o.getValue();
            window.gui.openConfirmPopup({
                title: h("ui.popup.warning"),
                message: t.setting.confirmMessage(e, t.item.item.nameId),
                cb: function(i) {
                    if (i) {
                        if (!t.item || !t.item.objectUID) return console.error("Item or objectUID of the item select for the feeding is undefined");
                        if ("shieldTutorial" === t.mode) {
                            var n = window.gui.playerData;
                            window.dofus.sendMessage("QuestObjectiveValidationMessage", {
                                questId: n.shieldTutorialQuestId,
                                objectiveId: n.shieldTutorialQuestObjective
                            }), t.unloadContent()
                        } else t.setting.confirmAction(e, t.item.objectUID, t.params)
                    }
                }
            })
        })
    }, u.prototype.selectItem = function(e) {
        if (this.item = e, "shield" === this.mode || "shieldTutorial" === this.mode)
            for (var t = 0; t < e.effects.length; t++) e.effects[t].actionId === O.ACTION_SHIELD_INTERACT_WITH_TYPE && (this._givenXp = e.effects[t].value);
        this.itemBox.displayItem(e), this.itemBox.show(), this.placeHolder.setText(null), this.confirmBtn.enable(), this.quantity.setValue(1), this._emitQuantityUpdating(1), this.quantity.maxValue = Math.min(3e4, e.quantity), this.quantity.enable(), this.minBtn.enable(), this.maxBtn.enable()
    }, u.prototype._emitQuantityUpdating = function(e) {
        "shield" !== this.mode && "shieldTutorial" !== this.mode || this.emit("quantityUpdated", e, this._givenXp)
    }, e.exports = u
}
