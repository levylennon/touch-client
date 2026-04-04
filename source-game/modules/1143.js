function(e, t, i) {
    function n(e) {
        function t(e) {
            window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: n.objectUID,
                quantity: b ? -e : e
            })
        }

        function i(e, i, o, a) {
            return b = a || !1, n = e.itemInstance, 1 === n.quantity ? t(1, b) : (s = "items", void m.open({
                min: 1,
                max: n.quantity,
                x: i + f.x,
                y: o + f.y
            }))
        }
        p.call(this, {
            title: r("ui.common.inventory"),
            className: "ExchangeInventoryWindow",
            positionInfo: {
                right: "0.5%",
                bottom: "3%",
                width: "30%",
                height: "94%"
            }
        });
        var n, s, b;
        e.registerView(this, {
            contextParams: {
                enableDestroy: !0
            },
            leftArrow: !0
        });
        var m = this.minMaxSelector = window.gui.windowsContainer.appendChild(new l);
        m.on("confirm", function(e) {
            "items" === s ? t(e) : window.dofus.sendMessage("ExchangeObjectMoveKamaMessage", {
                quantity: e
            })
        });
        var M = this.windowBody.appendChild(new o(r("tablet.exchange.deposit")));
        M.addClassNames("depositButton"), M.on("tap", function() {
            var t = e.kamasValue;
            if (t) {
                var i = h.getWindow("exchangeStorage");
                i.closeMinMaxSelector(), d.positionNextTo(m, M), s = "kamas", m.open({
                    min: 1,
                    max: t
                })
            }
        }), this.on("open", function(t) {
            this.exchangeType = t.exchangeType, this.exchangeType === a.STORAGE && e.addFilters([c.unlinkedItemsFilter]), e.filterList(), e.resetDisplay(), this.windowBody.appendChild(M), M.toggleDisplay(t.exchangeType !== a.MOUNT), M.setEnable(Boolean(e.kamasValue))
        }), this.on("close", function() {
            this.exchangeType === a.STORAGE && e.removeFilter(c.unlinkedItemsFilter), m.closeMinMax(), this.exchangeType = -1
        }), this.on("kamasUpdated", function(e) {
            M.isVisible() && M.setEnable(Boolean(e))
        }), this.on("slot-doubletap", i), this.on("leftArrow-tap", function(t) {
            window.gui.openContextualMenu("storage", {
                toInventory: !1,
                viewer: e
            }, {
                x: t.x,
                y: t.y
            })
        }), u(this, ["exchangeStorage"]), this.on("drop", function(e, t, n) {
            i(e, n.x, n.y, !0)
        })
    }
    i(1144);
    var o = i(86)
        .DofusButton,
        a = i(521),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(469),
        l = i(421),
        d = i(67),
        u = i(418)
        .setDroppable,
        p = i(70),
        h = i(52),
        f = {
            x: -50,
            y: 50
        };
    s(n, p), e.exports = n, n.prototype.closeMinMaxSelector = function() {
        this.minMaxSelector.closeMinMax()
    }
}
