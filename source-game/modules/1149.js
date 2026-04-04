function(e, t, i) {
    function n() {
        M.call(this, "div", {
            className: "BidHouseSellerBox",
            hidden: !0
        }), this.tradeItemWindow = null, this.item = null, this.mode = null, this.descriptor = null, this.quantity = 0, this.price = 0, this.fees = 0, this.minPricesCache = {}, this.isDomCreated = !1
    }

    function o(e, t, i) {
        return e ? (g[e.objectGID + "x" + t] = i, void(_[e.objectGID] = t)) : void console.error(new Error('Item missing "' + e + '", qty: ' + t + ", price: " + i))
    }

    function a(e, t) {
        return g[e.objectGID + "x" + t] || 0
    }

    function r() {
        this.bidHouseSellerBox._useMinPriceAndQuantity(this.index)
    }
    var s = i(56)
        .inherits,
        c = i(423),
        l = i(17)
        .getText,
        d = i(86),
        u = i(16),
        p = i(469),
        h = i(91)
        .playUiSound,
        f = i(945),
        b = i(63),
        m = i(88),
        M = i(72),
        g = {},
        _ = {},
        A = 12e4,
        O = "-";
    s(n, M), e.exports = n, n.prototype._onHide = function() {
        this.item = null, this.minPricesCache = {}
    }, n.prototype.updateSettingBox = function(e, t) {
        var i = this;
        this.tradeItemWindow = e;
        var n = this.mode = e.mode;
        switch (this.item = t, this._hideAll(), n) {
            case "modify-bidHouse":
                this.priceLabel.setText(u.kamasToString(t.objectPrice)), this.priceLabel.show(), this.quantityLabel.setText(u.intToString(t.quantity)), this.quantityLabel.show(), this.quantity = t.quantity, this.removeBtn.show(), this.timeLeft.setText(t.unsoldDelay + " " + l("ui.common.hourShort")), this.timeLeftBox.show();
                break;
            case "sell-bidHouse":
                if (this.descriptor.types.indexOf(t.item.typeId) === -1) return e.showError(l("ui.bidhouse.badType"));
                if (t.isLinked()) return e.showError(l("ui.bidhouse.badExchange"));
                if (t.item.level > this.descriptor.maxItemLevel) return e.showError(l("ui.bidhouse.badLevel"));
                this.sellBtn.show(), this.sellBtn.disable();
                var o = this.descriptor.quantities;
                this.quantitySelect.clearContent();
                for (var r = 1, s = 0, c = o.length; s < c; s += 1) {
                    var d = o[s];
                    t.quantity >= d && (this.quantitySelect.addOption(d, d), r = d)
                }
                var h = _[t.objectGID],
                    f = h ? Math.min(h, r) : r;
                this.quantitySelect.select(f), this.quantitySelect.show();
                var b = a(t, f);
                this.priceInput.setValue(b), this.price = b, this.priceInput.show(), this._updateFees()
        }
        this.quantityBox.show(), this.averagePriceBox.show(), this.priceBox.show(), this._refreshMinPrice(), this._displayAveragePrice(t.item.averagePrice), p.getFreshAveragePrice(t.objectGID, function(e) {
            i._displayAveragePrice(e)
        })
    }, n.prototype._hideAll = function() {
        this.quantityBox.hide(), this.averagePriceBox.hide(), this.quantitySelect.hide(), this.quantityLabel.hide(), this.priceBox.hide(), this.priceLabel.hide(), this.priceInput.hide(), this.timeLeftBox.hide(), this.saleFeeBox.hide(), this.sellBtn.hide(), this.removeBtn.hide()
    }, n.prototype.setDescriptorData = function(e) {
        this.descriptor = e, this.isDomCreated || (this.isDomCreated = !0, this._createDom(), this._setupEvents())
    }, n.prototype._displayAveragePrice = function(e) {
        e === -1 ? this.averagePrice.setText(l("ui.item.averageprice.unavailable")) : this.averagePrice.setText(u.kamasToString(e))
    }, n.prototype._updateFees = function() {
        this.fees = Math.max(1, Math.round(this.descriptor.taxPercentage * (this.price - (this.item.objectPrice || 0)) / 100)), this.saleFee.setText(this.price > 0 ? u.kamasToString(this.fees) : "-"), this.saleFeeBox.show();
        var e = window.gui.playerData.inventory.kamas >= this.fees;
        this.saleFee.toggleClassName("red", !e), this.sellBtn.setEnable(e)
    }, n.prototype._setupEvents = function() {
        var e = window.dofus.connectionManager,
            t = this;
        this.on("hide", this._onHide), window.gui.on("disconnect", function() {
            g = {}, _ = {}
        }), e.on("ExchangeBidhouseMinimumItemPriceListMessage", function(e) {
            null !== t.item && t._updateMinSellingPrice(e.objectGID, e.prices)
        })
    }, n.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "settingBox"
            }),
            i = this.quantityBox = t.createChild("div", {
                className: ["setting", "quantity"]
            });
        i.createChild("div", {
            className: "label",
            text: l("ui.common.quantity") + l("ui.common.colon")
        }), this.quantitySelect = i.appendChild(new f), this.quantitySelect.on("change", function(t) {
            e.quantity = t, e.price = a(e.item, t), e.priceInput.setValue(e.price), e._updateFees()
        }), this.quantityLabel = i.createChild("div", {
            className: "value"
        });
        var n = this.priceBox = t.createChild("div", {
            className: ["setting", "batchPrice"]
        });
        n.createChild("div", {
            className: "label",
            text: l("ui.bidhouse.setPrice") + l("ui.common.colon")
        }), this.priceLabel = n.createChild("div", {
            className: "value"
        }), this.priceInput = n.appendChild(new c({
            title: l("ui.bidhouse.setPrice"),
            attr: {
                placeholder: l("tablet.price.placeHolder")
            }
        })), this.priceInput.on("change", function(t) {
            e.price = t, e._updateFees()
        }), t.createChild("div", {
            className: "minPriceLabel",
            text: l("tablet.sellPrice") + l("ui.common.colon")
        });
        var r = t.createChild("div", {
            className: "minPrice"
        });
        m.addTooltip(r, l("tablet.sellPriceTooltip")), this.minPriceValues = [];
        for (var s = this.descriptor.quantities, u = 0; u < s.length; u++) this.minPriceValues[u] = this._createMinPriceValueBox(r, "x" + s[u], u);
        var p = this.averagePriceBox = t.createChild("div", {
            className: ["setting", "averagePrice"]
        });
        p.createChild("div", {
            className: "label",
            text: l("ui.bidhouse.bigStoreAveragePrice") + l("ui.common.colon")
        }), this.averagePrice = p.createChild("div", {
            className: "value"
        });
        var h = this.saleFeeBox = t.createChild("div", {
            className: ["setting", "saleFee"]
        });
        h.createChild("div", {
            className: "label",
            text: l("ui.bidhouse.bigStoreTax") + l("ui.common.colon")
        }), this.saleFee = h.createChild("div", {
            className: ["value", "text"]
        });
        var b = this.timeLeftBox = t.createChild("div", {
            className: ["setting", "timeLeft"]
        });
        b.createChild("div", {
            className: "label",
            text: l("ui.bidhouse.bigStoreTime") + l("ui.common.colon")
        }), this.timeLeft = b.createChild("div", {
            className: "value"
        });
        var M = this.createChild("div", {
            className: "buttonBox"
        });
        this.sellBtn = M.appendChild(new d({
            className: "greenButton",
            text: l("ui.common.putOnSell")
        }, function() {
            return 0 === e.price ? e.priceInput.promptForValue() : (o(e.item, e.quantity, e.price), void e.tradeItemWindow.sellInBidHouse(e.item, e.price, e.quantity, e.fees))
        })), this.removeBtn = M.appendChild(new d({
            className: "greenButton",
            text: l("ui.common.remove")
        }, function() {
            e.tradeItemWindow.removeFromBidHouse(e.item, e.item.objectPrice, e.quantity)
        }))
    }, n.prototype._createMinPriceValueBox = function(e, t, i) {
        var n = e.createChild("div", {
            className: "valueBox"
        });
        return b(n), n.on("tap", r), n.bidHouseSellerBox = this, n.index = i, n.createChild("div", {
            className: "title",
            text: t
        }), n.createChild("div", {
            className: "value",
            text: O
        })
    }, n.prototype._refreshMinPrice = function() {
        var e = this.item.objectGID,
            t = this.minPricesCache[e];
        !t || Date.now() - t.timestamp > A ? window.dofus.sendMessage("ExchangeBidHouseListMessage", {
            id: e
        }) : this._displayMinPrice()
    }, n.prototype._displayMinPrice = function() {
        for (var e = this.minPricesCache[this.item.objectGID], t = this.descriptor.quantities, i = 0; i < t.length; i++) {
            var n = e && e[i] ? u.intToString(e[i]) : O;
            this.minPriceValues[i].setText(n)
        }
    }, n.prototype._useMinPriceAndQuantity = function(e) {
        if ("sell-bidHouse" !== this.mode) return h("NO_ACTION");
        var t = this.descriptor.quantities[e];
        if (t > this.item.quantity) return h("NO_ACTION");
        h("GEN_BUTTON"), this.quantitySelect.select(t);
        var i = this.minPricesCache[this.item.objectGID],
            n = i ? i[e] : 0;
        this.priceInput.setValue(n), this.price = n, this._updateFees(), this.priceInput.promptForValue()
    }, n.prototype._updateMinSellingPrice = function(e, t) {
        this.minPricesCache[e] = t, t.timestamp = Date.now(), this._displayMinPrice()
    }
}
