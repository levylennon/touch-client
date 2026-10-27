function(e, t, i) {
    function n(e) {
        function t(e) {
            return m.types.indexOf(e.item.typeId) !== -1 && (!e.isLinked() && !(e.item.level > m.maxItemLevel))
        }

        function i(i) {
            i !== M && (M = i, i ? e.addFilters([t]) : e.removeFilter(t), e.filterList())
        }

        function n(e) {
            b.mode && d.getWindow("tradeItem")
                .displayItem(b.mode, e.itemInstance)
        }

        function s(e) {
            b._selectItem(e)
        }
        l.call(this, {
            title: u("ui.common.inventory"),
            className: "TradeInventoryWindow"
        });
        var b = this;
        this.mode = null, this.openOnItem = null, this.storageView = e, e.registerView(this, {
            tapSelectedEmitsDoubleTap: !0,
            contextParams: {
                enableDestroy: !0
            }
        });
        var m, M = !1,
            g = new a(u("ui.bidhouse.bigStoreFilter"));
        g.on("change", function(e) {
            i(e)
        }), this.on("open", function(t) {
            var n = this.mode = h[t._messageType],
                a = window.gui.scenarioManager.isBehaviourEnabled(p.ENABLE_FAKE_SELL_BIDHOUSE);
            this.toggleClassName("tutorialSellRestriction", a);
            var s = r.windowFullScreenWidth - o.minWidth - c.minWidth;
            s = Math.max(s, f), d.positionWindow(this.id, {
                right: 0,
                top: 0,
                width: s,
                height: "100%"
            }), "sell-bidHouse" === n && (e.storageUI.appendChild(g), m = t.sellerDescriptor || t.buyerDescriptor, i(!0), g.activate(!0), this.openOnItem && this.navigateToItem(this.openOnItem)), t.token && e.showTokens(t.token.type.category)
        }), this.on("closed", function() {
            "sell-bidHouse" === this.mode && (e.storageUI.removeChild(g), i(!1))
        }), this.on("slot-tap", n), this.on("slot-doubletap", n), this.on("itemAdded", s), this.on("itemQuantity", s), this.on("itemRemoved", function(e) {
            var t = d.getWindow("tradeItem"),
                i = t.getCurrentItem();
            i && e === i.getProperty("objectUID") && d.close("tradeItem")
        })
    }
    i(1156);
    var o = i(1157),
        a = i(594),
        r = i(54)
        .dimensions,
        s = i(56)
        .inherits,
        c = i(1147),
        l = i(70),
        d = i(52),
        u = i(17)
        .getText,
        p = i(129),
        h = {
            ExchangeStartOkNpcShopMessage: "sell-npc",
            ExchangeStartedBidSellerMessage: "sell-bidHouse"
        },
        f = 198;
    s(n, l), e.exports = n, n.prototype.navigateToItem = function(e) {
        this.openOnItem = null;
        var t, i;
        return "number" == typeof e ? t = e : (t = e.getProperty("id"), i = e.getItemInstance()), !(!i || !this._selectItem(i, !0)) || !!(i = this.storageView.selectAndShowSlotByGID(t)) && (this._selectItem(i, !0), !0)
    }, n.prototype._selectItem = function(e, t) {
        return !!this.mode && (!!this.storageView.selectAndShowSlotByUID(e.objectUID) && (t && d.getWindow("tradeStorage")
            .setFilter(e.getProperty("typeId")), d.getWindow("tradeItem")
            .displayItem(this.mode, e), d.focusWindow("tradeItem"), d.focusWindow("tradeInventory"), !0))
    }
}
