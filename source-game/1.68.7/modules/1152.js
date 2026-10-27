function(e, t, i) {
    function n() {
        l.call(this, "div", {
            className: "ExchangeBox",
            hidden: !0
        }), this._createDom(), this.mode = null, this.current = {}, this.tradeItemWindow = null, this.currency = "", this.tokenItem = null, this.disableBtn = !1
    }
    var o = i(56)
        .inherits,
        a = i(423),
        r = i(17)
        .getText,
        s = i(86),
        c = i(16),
        l = i(72),
        d = 10;
    o(n, l), e.exports = n, n.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "settingBox"
            }),
            i = t.createChild("div", {
                className: "setting"
            });
        i.createChild("div", {
            className: "label",
            text: r("ui.common.quantity") + r("ui.common.colon")
        });
        var n = this.quantityValue = i.appendChild(new a({
            minValue: 1,
            title: r("ui.common.quantity")
        }));
        n.on("focus", function() {
            n.maxValue = e._getMaxQuantity()
        }), n.on("change", function() {
            e._updatePrices()
        });
        var o = t.createChild("div", {
            className: "setting"
        });
        o.createChild("div", {
            className: "label",
            text: r("ui.common.unitPrice") + r("ui.common.colon")
        }), this.unitPriceValue = o.createChild("div", {
            className: "value"
        });
        var c = this.totalPrice = t.createChild("div", {
            className: "setting"
        });
        c.createChild("div", {
            className: "label",
            text: r("ui.common.totalPrice") + r("ui.common.colon")
        }), this.totalPriceValue = c.createChild("div", {
            className: "value"
        });
        var l = this.createChild("div", {
            className: "buttonBox"
        });
        this.sellButton = l.appendChild(new s({
            text: r("ui.common.sell"),
            className: "greenButton"
        }, function() {
            var t = e.current;
            e.tradeItemWindow.sellItemToNpc(t.item, t.quantity, t.unitPrice)
        })), this.buyButton = l.appendChild(new s({
            text: r("ui.common.buy"),
            className: "greenButton"
        }, function() {
            var t = e.current;
            e.tradeItemWindow.buyItemFromNpc(t.item, t.quantity, t.unitPrice)
        }))
    }, n.prototype._updatePrices = function() {
        var e = this.pricePerUnit,
            t = this.quantityValue.getValue();
        this.current.quantity = t, this.current.unitPrice = e;
        var i = t * e;
        if (this.totalPrice.show(), this.currency ? this.totalPriceValue.setText(this.currency + " x " + c.intToString(i)) : this.totalPriceValue.setText(c.kamasToString(i)), this.buyButton.isVisible()) {
            var n = window.gui.playerData.inventory,
                o = this.tokenItem ? n.getGenericItemCount(this.tokenItem.id) : n.kamas;
            i > o || this.disableBtn ? (this.buyButton.disable(), i > o && this.totalPriceValue.addClassNames("red")) : (this.buyButton.enable(), this.totalPriceValue.delClassNames("red"))
        }
    }, n.prototype._getMaxQuantity = function() {
        var e = this.current.item;
        return e.quantity
    }, n.prototype.updateSettingBox = function(e, t, i, n) {
        this.tradeItemWindow = e, this.current.item = t;
        var o = this.mode = e.mode;
        this.tokenItem = e.msg.token, this.currency = i, this.disableBtn = n;
        var a = !1;
        this.totalPriceValue.delClassNames("red"), this._hideButtons();
        var s, l = t.getProperty("quantity"),
            u = 1;
        switch (o) {
            case "sell-npc":
                a = !0, this.sellButton.show();
                var p = t.getProperty("price");
                s = p > 0 ? Math.max(1, Math.floor(p / d)) : 0;
                break;
            case "buy-npc":
                this.buyButton.show(), s = t.getProperty("objectPrice") || t.getProperty("price");
                break;
            default:
                console.error(new Error("Invalid exchange mode: " + o))
        }
        return a && t.isLinked() ? e.showError(r("ui.bidhouse.badExchange")) : (this.pricePerUnit = s, this.quantityValue.setValue(u), this.quantityValue.setReadonly(1 === l), this.unitPriceValue.setText(i ? i + " x " + c.intToString(s) : c.kamasToString(s)), void this._updatePrices())
    }, n.prototype._hideButtons = function() {
        this.sellButton.hide(), this.buyButton.hide()
    }
}
