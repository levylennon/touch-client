function(e, t, i) {
    function n() {
        function e() {
            i.selectedItemIds = [];
            for (var e = i.itemListBox.getChildren(), t = 0; t < e.length; t += 1) {
                var n = e[t];
                n.unselect()
            }
        }

        function t() {
            for (var e, t = [].concat(i.itemSet.items), n = i.itemListBox.getChildren(), o = 0; o < n.length; o += 1) e = n[o], e.select();
            i.selectedItemIds = t
        }
        d.call(this, {
            className: "ItemSetsWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 800,
                height: 525
            }
        });
        var i = this;
        this.selectedItemIds = [], this._logic = new s(M, b, u), this.once("open", function() {
            function n() {
                i._updateItemSlotsOwned()
            }
            this.currentSetId = null;
            var r = this.windowBody.createChild("div", {
                className: "leftCol"
            });
            this.itemListBox = r.createChild("div", {
                className: "itemListBox"
            }), this.itemBox = new a({
                parent: this,
                showDescription: !0,
                showTitle: !0,
                withBidHouseBtn: !0
            }), r.appendChild(this.itemBox);
            var s = this.windowBody.createChild("div", {
                    className: "rightCol"
                }),
                d = s.createChild("div", {
                    className: "selectorContainer"
                });
            d.createChild("div", {
                className: "tableTitle",
                text: p("ui.set.bonus")
            }), this.bonusSelector = d.appendChild(new c), this.bonusSelector.on("change", function(e) {
                i._updateBonusTable(e, i.combineBonusesCheckbox.isActivate())
            }), this.combineBonusesCheckbox = d.appendChild(new o(p("ui.set.addObjectBonus"))), this.combineBonusesCheckbox.on("change", function(n) {
                n ? t() : e();
                var o = i.selectedItemIds.length;
                i.bonusSelector.select(n ? o : g), i.bonusSelector.toggleOption(o, n), i.bonusSelector.setEnable(!n), i.bonusSelector.toggleClassName("disabled", n)
            }), this.bonusTable = s.appendChild(new l([{
                id: "description"
            }], null, {
                noHeader: !0,
                clickable: !1
            })), window.gui.on("SetUpdateMessage", function(e) {
                i.openState && e.setId === i.currentSetId && i._updateEquippedItems(e.setObjects)
            });
            var u = window.gui.playerData.inventory;
            u.on("itemAdded", n), u.on("itemsAdded", n), u.on("itemDeleted", n), u.on("itemsDeleted", n)
        }), this.on("open", function(e) {
            var t = e.item ? e.item : e;
            this._displayItemSet(t)
        }), this.on("close", function() {
            this.currentSetId = null
        })
    }
    i(1111);
    var o = i(594),
        a = i(1006),
        r = i(871),
        s = i(1112),
        c = i(945),
        l = i(765),
        d = i(70),
        u = i(474),
        p = i(17)
        .getText,
        h = i(1113),
        f = i(56)
        .inherits,
        b = i(469),
        m = i(130),
        M = i(34)
        .logger,
        g = 1,
        _ = -1;
    f(n, d), e.exports = n, n.prototype._updateItemSlotsOwned = function() {
        for (var e = this.itemListBox.getChildren(), t = window.gui.playerData.inventory.quantityList, i = 0; i < e.length; i += 1) {
            var n = e[i];
            n.delClassNames("notOwned"), t.hasOwnProperty(n.dbItem.id) || n.addClassNames("notOwned")
        }
    }, n.prototype._updateEquippedItems = function(e) {
        for (var t = this.itemListBox.getChildren(), i = 0, n = 0; n < t.length; n += 1) {
            var o = t[n];
            o.delClassNames("equipped"), e.indexOf(o.dbItem.id) > -1 && (o.addClassNames("equipped"), i++), o.dbItem.id === this.itemBox.itemId && this._updateItemBox(b.items[o.dbItem.id]);
            var a = h.getEquippedItemById(window.gui.playerData.inventory, o.dbItem.id);
            o.setItem(a || o.dbItem)
        }
        this.bonusSelector.select(i)
    }, n.prototype._displayItemSet = function(e) {
        if (e.itemSetId) {
            var t = this;
            this.currentSetId = e.itemSetId, this._updateItemBox(e), m.getDataMap("ItemSets", [e.itemSetId], null, function(i, n) {
                if (i) return console.error(i);
                var o = n[e.itemSetId];
                t.itemSet = o, t.windowTitle.setText(o.nameId), t.itemListBox.clearContent(), t.bonusSelector.clearContent(), b.getItems(o.items, function(e) {
                    if (e) return console.error(e);
                    var i = 0;
                    t.bonusSelector.addOption("0 " + p("ui.common.objects"), 0), t.bonusSelector.toggleOption(0, !1);
                    for (var n, a, r, s, c = window.gui.playerData.inventory.quantityList, l = 0; l < o.items.length; l += 1) r = o.items[l], a = b.items[r], n = h.getEquippedItemById(window.gui.playerData.inventory, r), n && (i += 1), s = t._createItemSlot(n || a), c.hasOwnProperty(r) || s.addClassNames("notOwned"), t.itemListBox.appendChild(s), t.bonusSelector.addOption(l + 1 + " " + p("ui.common.objects"), l + 1);
                    t.combineBonusesCheckbox.deactivate(), t.bonusSelector.select(i)
                })
            })
        }
    }, n.prototype._createItemSlot = function(e) {
        var t = this,
            i = new r({
                itemData: e
            });
        return i.createChild("div", {
            className: "equippedIcon"
        }), i.toggleClassName("equipped", Boolean(i.itemInstance)), i.on("tap", function() {
            var e = this.itemInstance && this.itemInstance.isInitialised ? this.itemInstance : null,
                n = window.gui.playerData.inventory.getGenericItem(this.dbItem.id);
            if (n && !n.isInitialised && (n = null), t.itemBox.displayItem(e || n || this.dbItem), t.combineBonusesCheckbox.isActivate()) {
                var o = t.selectedItemIds.indexOf(i.dbItem.id);
                o < 0 ? (t.selectedItemIds.push(i.dbItem.id), this.select()) : (t.selectedItemIds.splice(o, 1), this.unselect()), t.bonusSelector.select(t.selectedItemIds.length)
            }
        }), i
    }, n.prototype._updateItemBox = function(e) {
        var t = h.getEquippedItemById(window.gui.playerData.inventory, e.id),
            i = window.gui.playerData.inventory.getGenericItem(e.id);
        this.itemBox.displayItem(t || i || e)
    }, n.prototype._updateBonusTable = function(e, t) {
        var i = this;
        this.bonusTable.clearContent(),
        this._logic.constructEffectInstances(e, t,
            this.selectedItemIds,
            this.itemSet,
            window.gui.playerData.inventory,
            function(e, t) {
            return e ? console.error(e) : (i.bonusTable.clearContent(), void i._addEffectsToTable(t))
        })
    }, n.prototype._addEffectsToTable = function(e) {
        if (this.itemSet.bonusIsSecret && !e.length) return void this.bonusTable.addRow({
            description: p("ui.set.secretBonus")
        });
        for (var t = 0; t < e.length; t += 1) {
            var i = e[t];
            if (i) {
                var n = this.bonusTable.addRow({
                    description: i.description
                });
                n.toggleClassName("negative", i.effect.bonusType === _)
            }
        }
    }
}
