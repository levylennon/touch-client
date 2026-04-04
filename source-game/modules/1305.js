function(e, t, i) {
    function n(e) {
        function t() {
            for (var t in f) e.resetItemQuantity(t);
            f = {}
        }

        function i(t) {
            if (!t.remote) {
                var i = t.object.objectUID,
                    n = d.objects[i];
                e.setItemQuantity(i, n.quantity - t.object.quantity), f[i] = !0
            }
        }

        function n(t) {
            if (!t.remote) {
                var i = t.objectUID;
                e.resetItemQuantity(i), delete f[i]
            }
        }
        r.call(this, {
            title: s("ui.common.inventory"),
            className: "TradeWithPlayerAndNPCInventoryWindow",
            positionInfo: {
                right: "0.5%",
                top: "2%",
                width: "23.2%",
                height: "95%"
            }
        }), this.storageViewer = e, e.registerView(this, {
            manualReset: !0
        }), l.setDroppable(this, ["tradeSpace"]), this.on("drop", function(e) {
            var t = e.itemInstance.quantity;
            return 1 === t ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: e.itemInstance.objectUID,
                quantity: -1
            }) : (o = e.itemInstance.objectUID, m.fromInventory = !1, void m.open({
                min: 1,
                max: t
            }))
        });
        var o, d = window.gui.playerData.inventory,
            h = window.gui,
            f = {},
            b = this;
        this.fakeResource = null, this.fakeNpcExchange = !1;
        var m = this.appendChild(new c);
        m.setStyles({
            left: "-100px",
            top: "100px"
        }), m.on("confirm", function(e) {
            window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: o,
                quantity: e * (this.fromInventory ? 1 : -1)
            })
        }), h.on("ExchangeObjectRemovedMessage", this.localizeEvent(n)), h.on("ExchangeObjectAddedMessage", this.localizeEvent(i)), h.on("ExchangeObjectModifiedMessage", this.localizeEvent(i)), this.on("open", function(t) {
            e.addFilters([a.unlinkedItemsFilter]), e.filterList(), e.resetDisplay(), t && t.displayFakeNpcExchange && (b.fakeNpcExchange = !0, b._displayFakeInventory())
        }), this.on("opened", function(e) {
            e && e.displayFakeNpcExchange && b._displayFakeInventory()
        }), this.on("close", function() {
            b.removeFakeItem(), b.fakeNpcExchange = !1, e.removeFilter(a.unlinkedItemsFilter), e.filterList(), m.hide(), t()
        }), this.on("slot-doubletap", function(e) {
            var t = e.itemInstance;
            o = t.objectUID;
            var i = e.getQuantity();
            if (b.fakeNpcExchange) {
                var n = u.getWindow("tradeWithNPC");
                return void(n.openState && (window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.TRADE_ADD_ITEM), n.displayFakeItemInTradeSpace(t), b.removeFakeItem()))
            }
            return 1 === i ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: o,
                quantity: 1
            }) : (m.fromInventory = !0, void m.open({
                min: 1,
                max: i
            }))
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_CLOSE_BTN);
            b.toggleClassName("disableCloseBtn", e)
        })
    }
    i(1306);
    var o = i(56)
        .inherits,
        a = i(469),
        r = i(70),
        s = i(17)
        .getText,
        c = i(421),
        l = i(418),
        d = i(13),
        u = i(52),
        p = i(129);
    o(n, r), e.exports = n, n.prototype._displayFakeInventory = function() {
        var e = this,
            t = d.TUTORIAL_NPC_FAKE_PLAYER_ITEM;
        this.fakeResource = {
            objectGID: t,
            effects: [],
            objectUID: -t,
            quantity: 1,
            position: 63
        }, this.storageViewer.addTutorialFilter(), a.createItemInstances([this.fakeResource], function(t, i) {
            return t ? console.error(t) : void(e.openState && (e.storageViewer.addItems(i.map), e.storageViewer.filterList(), e.storageViewer.resetDisplay()))
        })
    }, n.prototype.removeFakeItem = function() {
        this.fakeResource && (this.storageViewer.removeItem(this.fakeResource.objectUID), this.storageViewer.removeTutorialFilter(), this.fakeResource = null)
    }, n.prototype.getStorageFirstSlotForTuto = function() {
        return this.storageViewer.getStorageFirstSlotForTuto()
    }
}
