function(e, t, i) {
    function n() {
        a.call(this, {
            className: "houseBuySellWindow",
            title: "house",
            positionInfo: {
                left: "c",
                top: "c",
                width: 450,
                height: 335
            }
        });
        var e = this;
        this.currency = m, this.once("open", function() {
            var t = this.windowBody.createChild("div", {
                    className: "container"
                }),
                i = t.createChild("div", {
                    className: "imageContainer"
                });
            e.image = i.createChild("div", {
                className: "image"
            }), e.image.setStyle("backgroundImage", e.imageUrl), e.title = t.createChild("div", {
                className: ["text", "title"],
                text: e.titleText
            }), e.description = t.createChild("div", {
                className: ["text", "description"],
                text: e.descriptionText
            });
            var n = this.windowBody.createChild("div", {
                className: "priceContainer"
            });
            n.createChild("div", {
                className: "priceText",
                text: d("ui.common.price") + d("ui.common.colon")
            }), e.price = n.appendChild(new s({
                title: d("ui.common.price")
            })), e.price.hide(), e.price.on("change", function(t) {
                e.proposedPrice = t
            }), e.priceTextOnly = n.createChild("div", {
                className: "priceText"
            }), e.priceTextOnly.hide(), e.currencyIcon = n.createChild("div", {
                className: ["currencyIcon", "soft"]
            });
            var o = this.windowBody.createChild("div", {
                className: "footer"
            });
            e.cancelSaleButton = o.appendChild(new r(d("ui.common.cancelTheSale"), {
                className: "cancelSaleButton"
            })), e.confirmButton = o.appendChild(new r(d("ui.common.validation"), {
                className: "confirmButton"
            })), e.switchButton = o.appendChild(new h), e.switchButton.on("switchToHard", function() {
                e._setCurrency(M), e.updateDisplay(e.houseInfo)
            }), e.switchButton.on("switchToSoft", function() {
                e._setCurrency(m), e.updateDisplay(e.houseInfo)
            }), e.cancelSaleButton.on("tap", function() {
                if (!e.houseInfo || !e.houseInfo.buyOrSell) return e.fromInside ? (window.dofus.sendMessage("HouseSellFromInsideRequestMessage", {
                    amount: 0
                }), void c.close(e.id)) : void window.dofus.sendMessage("HouseSellRequestMessage", {
                    amount: 0
                })
            }), e.confirmButton.on("tap", function() {
                if (e.houseInfo && e.houseInfo.buyOrSell) {
                    var t;
                    t = e.currency === M ? d("tablet.price.hard", e.priceTextOnly.getText()) : d("tablet.price.soft", e.priceTextOnly.getText());
                    var i = window.gui.playerData.position.getHousePropertiesById(e.houseInfo.purchasableId);
                    return window.gui.openConfirmPopup({
                        title: d("ui.common.housePurchase"),
                        message: d("tablet.ui.common.doUBuyHouse", i._name, t),
                        cb: function(t) {
                            if (t) {
                                if (e.currency === m) return window.dofus.sendMessage("HouseBuyRequestMessage", {
                                    proposedPrice: e.proposedPrice
                                });
                                var i = e.proposedPriceHard - window.gui.playerData.inventory.goultines;
                                return i > 0 ? b.openNotEnoughHardCurrencyPopup(i) : window.dofus.send("houseBuyRequest", {
                                    houseId: e.houseInfo.purchasableId,
                                    amountHard: e.proposedPriceHard,
                                    amountSoft: e.proposedPrice
                                })
                            }
                        }
                    }, {
                        isModal: !0
                    })
                }
                return e.fromInside ? (window.dofus.sendMessage("HouseSellFromInsideRequestMessage", {
                    amount: e.proposedPrice
                }), void c.close(e.id)) : void window.dofus.sendMessage("HouseSellRequestMessage", {
                    amount: e.proposedPrice
                })
            })
        }), this.on("open", function(t) {
            return t = t || {}, e.fromInside = t.fromInside, e.switchButton.setCurrency(m), e.fromInside ? void e.fromInsideUpdateDisplay(t.myHouse) : void e.updateDisplay(t.msg);
        }), this.on("close", function() {
            e.fromInside = !1, e.houseInfo = {}
        }), this.setupSocketEvents()
    }
    i(1099);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(86)
        .DofusButton,
        s = i(423),
        c = i(52),
        l = i(16),
        d = i(17)
        .getText,
        u = i(130),
        p = i(12),
        h = i(1100),
        f = i(840),
        b = i(838),
        m = "soft",
        M = "hard";
    o(n, a), e.exports = n, n.prototype.setupSocketEvents = function() {
        var e = this,
            t = window.gui,
            i = window.dofus.connectionManager;
        window.dofus.connectionManager.on("PurchasableDialogMessage", function(t) {
            window.gui.playerData.setDialogState(!0), c.openDialog(e.id, {
                fromInside: !1,
                msg: t
            })
        }), window.dofus.connectionManager.on("HouseBuyResultMessage", function(e) {
            var i = window.gui.playerData.position.getHousePropertiesById(e.houseId);
            e.bought ? t.openPopup({
                title: d("ui.popup.information"),
                message: d("ui.common.houseBuy", i._name, l.kamasToString(e.realPrice, ""))
            }) : t.openPopup({
                title: d("ui.popup.information"),
                message: d("ui.common.cantBuyHouse", l.kamasToString(e.realPrice, ""))
            })
        }), window.dofus.connectionManager.on("HouseSoldMessage", function(e) {
            if (t.playerData.identification.uniqueNickname.toString() === e.buyerName) {
                var i = t.playerData.houseData.getHouseByInstanceId(e.houseId);
                if (!i.enrichData) return;
                0 === e.realPrice ? t.openPopup({
                    title: d("ui.popup.information"),
                    message: d("ui.common.houseNosell", "'" + i.enrichData.houseName + "'")
                }) : t.openPopup({
                    title: d("ui.popup.information"),
                    message: d("ui.common.houseSell", "'" + i.enrichData.houseName + "'", l.kamasToString(e.realPrice, ""))
                })
            }
        }), f.on("computedHardPricesChange", function() {
            e.currency === M && e.updateDisplay(e.houseInfo)
        }), i.on("houseBuyError", function() {
            this.send("moneyGoultinesAmountRequest")
        }), i.on("houseBuySuccess", function() {
            this.send("moneyGoultinesAmountRequest")
        })
    }, n.prototype._setCurrency = function(e) {
        if (this.currency !== e) {
            var t = this.currency;
            this.currency = e, this.currencyIcon && this.currencyIcon.replaceClassNames([t], [e])
        }
    }, n.prototype.prepareDialog = function(e, t, i) {
        var n = this;
        u.getDataMap("Houses", [e], null, function(o, a) {
            if (o || !a) return console.warn("Houses Id: " + e + " not found!", o);
            var r = a[e];
            p.preloadImage("gfx/houses/" + r.gfxId + ".png", function(e) {
                n.houseOwner = "?" === t ? d("ui.common.houseWithNoOwner") : d("ui.house.homeOf", i);
                var o = r.nameId;
                return n.image ? (delete n.imageUrl, delete n.titleText, delete n.descriptionText, n.image.setStyle("backgroundImage", e), n.title.setText(n.houseOwner), void n.description.setText(o)) : (n.imageUrl = e, n.titleText = n.houseOwner, void(n.descriptionText = o))
            })
        })
    }, n.prototype.updateDisplay = function(e) {
        if (!e) return console.warn("Missing purchaseMsg from PurchasableDialogMessage.");
        this.proposedPrice = e.price, this.proposedPriceHard = f.computeHardPrice(e.price), this.houseInfo = e;
        var t = this.currency === M,
            i = t ? this.proposedPriceHard : e.price;
        if (this.priceTextOnly.toggleDisplay(e.buyOrSell), this.price.toggleDisplay(!e.buyOrSell), e.buyOrSell) {
            this.windowTitle.setText(d("ui.common.housePurchase")), this.cancelSaleButton.disable();
            var n = window.gui.playerData.inventory,
                o = t || i && i <= n.kamas;
            o ? this.confirmButton.enable() : this.confirmButton.disable()
        } else this.windowTitle.setText(d("ui.common.houseSale")), this.cancelSaleButton.enable(), this.confirmButton.enable();
        return this.switchButton.toggleDisplay(e.buyOrSell && !window.gui.playerData.isShopDisabled()), i ? void(e.buyOrSell ? this.priceTextOnly.setText(l.kamasToString(i, "")) : this.price.setValue(l.kamasToString(i, ""))) : e.buyOrSell ? this.priceTextOnly.setText(d("ui.item.averageprice.unavailable")) : this.price.setValue(d("ui.item.averageprice.unavailable"))
    }, n.prototype.fromInsideUpdateDisplay = function(e) {
        var t = this;
        return this.switchButton.hide(), this.confirmButton.enable(), e ? (this.priceTextOnly.hide(), this.price.show(), this.windowTitle.setText(d("ui.common.houseSale")), e.price ? (this.cancelSaleButton.enable(), this.proposedPrice = e.price, void this.price.setValue(l.kamasToString(e.price, ""))) : (this.cancelSaleButton.disable(), void u.getDataMap("Houses", [e.modelId], null, function(i, n) {
            if (i || !n) return console.warn("Houses Id: " + e.modelId + " not found!", i);
            var o = n[e.modelId];
            t.proposedPrice = o.defaultPrice, t.price.setValue(l.kamasToString(t.proposedPrice, ""))
        }))) : console.warn("Missing current house info.")
    }
}
