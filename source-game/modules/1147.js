function(e, t, i) {
    function n() {
        M.call(this, {
            className: "tradeItemWindow",
            noCloseButton: !0,
            fixed: !0,
            positionInfo: {
                width: v,
                height: y
            }
        }), this._setupEvents(), this.mode = "", this.item = null, this.msg = null, this.itemDescription = null, this.settingBox = null, this.selection = null, this.tradeItemConfirm = null, this.isTradePending = !1, this.tradeTimeout = null, this.on("open", function(e) {
            switch (this.tradeItemConfirm = null, this.isTradePending = !1, this.tradeTimeout = null, this.itemDescription || this._createDom(), this.buyHardSoftDiv.hide(), this.msg._messageType) {
                case "ExchangeStartOkNpcShopMessage":
                    this.settingBox = this.exchangeBox, g.arrangeOpeningWindow(this.id, {
                        rightOf: "tradeStorage",
                        height: y
                    });
                    break;
                case "ExchangeStartedBidSellerMessage":
                    this.settingBox = this.bidHouseSellerBox, this.settingBox.setDescriptorData(this.msg.sellerDescriptor), g.arrangeOpeningWindow(this.id, {
                        rightOf: "tradeStorage",
                        height: z
                    });
                    break;
                case "ExchangeStartedBidBuyerMessage":
                    this.settingBox = this.bidHouseBuyerBox, this.settingBox.setDescriptorData(this.msg.buyerDescriptor), this.buyHardSoftDiv.show(), g.arrangeOpeningWindow(this.id, {
                            rightOf: "bidHouseShop",
                            height: "100%"
                        }), g.getWindow("bidHouseShop")
                        .isOpening = !1;
                    break;
                default:
                    return
            }
            this._setContent(e.mode, e.item, e.currency, e.disableBtn)
        }), this.on("close", function() {
            this.item = null, this.selection = null, this.isTradePending = !1, window.clearTimeout(this.tradeTimeout), this._closeTradeConfirmWindow()
        }), this.on("closed", function() {
            this.settingBox.hide()
        })
    }

    function o(e, t) {
        return e ? void f.getItems([e], function(i, n) {
            return i ? console.error("Failed to get token " + e + " for trade: " + i) : t(n[0])
        }) : t(null)
    }
    i(1148);
    var a = i(1149),
        r = i(1150),
        s = i(86),
        c = i(105),
        l = i(1152),
        d = i(17)
        .getText,
        u = i(16),
        p = i(56)
        .inherits,
        h = i(1006),
        f = i(469),
        b = i(814),
        m = i(792),
        M = i(70),
        g = i(52),
        _ = i(838),
        A = i(13),
        O = i(129),
        v = 410,
        y = 392,
        z = 480,
        w = 1e4;
    p(n, M), e.exports = n, n.minWidth = v, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui;
        c.on("ExchangeStartOkNpcShopMessage", function(t) {
            e.msg = t, o(t.tokenId, function(e) {
                e && (t.token = e), g.openDialog(["tradeInventory", "tradeStorage"], t)
            })
        }), c.on("ExchangeStartedBidSellerMessage", function(t) {
            window.gui.playerData.setDialogState(!0), e.msg = t, g.openDialog(["tradeInventory", "tradeStorage"], t)
        }), c.on("ExchangeStartedBidBuyerMessage", function(t) {
            window.gui.playerData.setDialogState(!0), e.msg = t, g.openDialog(["wallet", "bidHouseShop", "tradeInventory"], t)
        });
        var i = {};
        i[m.REQUEST_IMPOSSIBLE] = d("ui.exchange.cantExchange"), i[m.REQUEST_CHARACTER_OCCUPIED] = d("ui.exchange.cantExchangeCharacterOccupied"), i[m.REQUEST_CHARACTER_JOB_NOT_EQUIPED] = d("ui.exchange.cantExchangeCharacterJobNotEquiped"), i[m.REQUEST_CHARACTER_TOOL_TOO_FAR] = d("ui.craft.notNearCraftTable"), i[m.REQUEST_CHARACTER_OVERLOADED] = d("ui.exchange.cantExchangeCharacterOverloaded"), i[m.REQUEST_CHARACTER_NOT_SUSCRIBER] = d("ui.exchange.cantExchangeCharacterNotSuscriber"), i[m.REQUEST_CHARACTER_RESTRICTED] = d("ui.exchange.cantExchangeCharacterRestricted"), i[m.BUY_ERROR] = d("ui.exchange.cantExchangeBuyError"), i[m.SELL_ERROR] = d("ui.exchange.cantExchangeSellError"), i[m.MOUNT_PADDOCK_ERROR] = d("ui.exchange.cantExchangeMountPaddockError"), i[m.BID_SEARCH_ERROR] = d("ui.bidhouse.itemNotInBigStore"), i[m.REQUEST_RESTRICTED_AREA] = d("ui.popup.bidhouseDenied"), c.on("ExchangeErrorMessage", function(n) {
            var o = i[n.errorType];
            if (!e._concludeTrade(!1, o)) {
                if (!o) return console.error("ExchangeErrorMessage: no error message for type", n.errorType);
                t.openSimplePopup(o)
            }
        }), c.on("ObjectErrorMessage", function(t) {
            t.reason === b.INVENTORY_FULL && e._concludeTrade(!1)
        }), c.on("exchangeBidHouseBuyError", function() {
            e._concludeTrade(!1, d("tablet.purchaseInHardCcyError"))
        }), c.on("exchangeHumanBuyError", function() {
            e._concludeTrade(!1, d("tablet.purchaseInHardCcyError"))
        }), c.on("exchangeBidHouseBuySuccess", function() {
            this.send("moneyGoultinesAmountRequest")
        }), c.on("exchangeHumanBuySuccess", function() {
            this.send("moneyGoultinesAmountRequest")
        }), c.on("ExchangeBidHouseBuyResultMessage", function(t) {
            e._concludeTrade(t.bought, d("tablet.tradeItemFailed"))
        }), c.on("ExchangeBuyOkMessage", function() {
            e._concludeTrade(!0), g.close(e.id)
        }), c.on("ExchangeSellOkMessage", function() {
            e._concludeTrade(!0), g.close(e.id)
        }), c.on("ExchangeBidHouseItemAddOkMessage", function() {
            e._concludeTrade(!0)
        })
    }, n.prototype._beginTrade = function() {
        this.isTradePending = !0, this.tradeTimeout = window.setTimeout(function(e) {
            e._tradeTimedOut()
        }, w, this)
    }, n.prototype._concludeTrade = function(e, t) {
        return !!this.tradeTimeout && (this.isTradePending = !1, window.clearTimeout(this.tradeTimeout), this.tradeTimeout = null, this._closeTradeConfirmWindow(), !e && t && window.gui.openSimplePopup(t), !0)
    }, n.prototype._tradeTimedOut = function() {
        this._concludeTrade(!1, d("tablet.tradeItemTimeout"))
    }, n.prototype.getCurrentItem = function() {
        return this.selection ? this.selection.item : this.item
    }, n.prototype.updateSelection = function(e) {
        if (e) {
            var t = window.gui.playerData.inventory;
            this.buySoftBtn.setEnable(t.kamas >= e.amountSoft), this.buySoftBtnLabel.setText(u.intToString(e.amountSoft)), e.tutorialPrice ? (this.buySoftBtn.disable(), this.buyHardBtn.enable(), this.buyHardBtnLabel.setText(0), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.SHOP_ITEM_SELECTED)) : (this.buyHardBtn.setEnable(Boolean(e.amountHard)), this.buyHardBtnLabel.setText(e.amountHard ? u.intToString(e.amountHard) : "")), e.item !== this.itemDescription.item && this.itemDescription.displayItem(e.item)
        } else {
            this.buySoftBtn.disable(), this.buyHardBtn.disable();
            var i = d("ui.common.buy");
            this.buySoftBtnLabel.setText(i), this.buyHardBtnLabel.setText(i), this._closeTradeConfirmWindow()
        }
        this.selection = e
    }, n.prototype.updateBidHouseBuyPriceRealtime = function(e, t) {
        if (this.tradeItemConfirm && !this.isTradePending) {
            var i = this.isHardCcyTrade ? t : e;
            if (i > this.initialPrice) return this._closeTradeConfirmWindow();
            this.currentPrice = i, this.tradeItemConfirm.updatePriceRealtime(i)
        }
    }, n.prototype._confirmTrade = function(e, t) {
        this.isHardCcyTrade = Boolean(e.amountHard);
        var i = e.amountHard || e.amountSoft;
        this.initialPrice = i, this.currentPrice = i, this.tradeItemConfirm = g.getWindow("tradeItemConfirm");
        var n = this;
        this.tradeItemConfirm.confirmTrade(e, function(e) {
            e && (n._beginTrade(), t())
        })
    }, n.prototype._closeTradeConfirmWindow = function() {
        this.tradeItemConfirm && (this.tradeItemConfirm = null, g.close("tradeItemConfirm"))
    }, n.prototype._buyInGoultines = function() {
        var e = g.getWindow("bidHouseShop"),
            t = !!e.openState && e.openAsFakeBuyShop;
        if (t) return this.settingBox.forceRemoveItem(A.ITEM_TUTORIAL_UID), e.forceRemoveItem(A.ITEM_TUTORIAL), void window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.SHOP_ITEM_BOUGHT);
        var i = this,
            n = this.selection,
            o = n.item,
            a = n.amountHard,
            r = n.amountSoft,
            s = n.qty,
            c = a - window.gui.playerData.inventory.goultines;
        return c > 0 ? _.openNotEnoughHardCurrencyPopup(c) : void this._confirmTrade({
            itemInstance: o,
            amountHard: a,
            qty: s
        }, function() {
            window.dofus.send("exchangeBidHouseBuyRequest", {
                id: o.getProperty("id"),
                uid: o.objectUID,
                qty: s,
                amountHard: a,
                amountSoft: r
            }), i._prepareKpi("ExchangeBidHouseBuyResultMessage")
        })
    }, n.prototype._buyInKamas = function() {
        if (!this.selection) return void console.error(new Error("_buyInKamas: selection is not valid"));
        var e = this.selection,
            t = e.item,
            i = e.qty,
            n = this;
        this._confirmTrade({
            itemInstance: t,
            amountSoft: e.amountSoft,
            qty: i
        }, function() {
            window.dofus.sendMessage("ExchangeBidHouseBuyMessage", {
                uid: t.objectUID,
                qty: i,
                price: n.currentPrice
            }), n._prepareKpi("ExchangeBidHouseBuyResultMessage")
        })
    }, n.prototype.buyItemFromNpc = function(e, t, i) {
        i = i || e.item.price, this._confirmTrade({
            itemInstance: e,
            amountSoft: i * t,
            qty: t,
            token: this.msg.token
        }, function() {
            window.dofus.sendMessage("ExchangeBuyMessage", {
                objectToBuyId: e.item.id,
                quantity: t
            })
        })
    }, n.prototype.sellItemToNpc = function(e, t, i) {
        i = i || e.item.price, this._confirmTrade({
            isSell: !0,
            itemInstance: e,
            amountSoft: i * t,
            qty: t
        }, function() {
            window.dofus.sendMessage("ExchangeSellMessage", {
                objectToSellId: e.objectUID,
                quantity: t
            })
        })
    }, n.prototype.sellInBidHouse = function(e, t, i, n) {
        return t <= 0 ? (window.gui.openSimplePopup(d("ui.error.invalidPrice")), void console.error(new Error("hdv invalid price sell btn should be disabled"))) : e ? void this._confirmTrade({
            isSell: !0,
            itemInstance: e,
            amountSoft: t,
            qty: i,
            fee: n
        }, function() {
            window.dofus.sendMessage("ExchangeObjectMovePricedMessage", {
                objectUID: e.objectUID,
                quantity: i,
                price: t
            })
        }) : void console.error(new Error("hdv invalid item"))
    }, n.prototype.removeFromBidHouse = function(e, t, i) {
        window.gui.openConfirmPopup({
            title: d("ui.popup.warning"),
            message: d("ui.bidhouse.doUWithdrawItemBigStore", i + " x " + e.item.nameId, u.kamasToString(t / i)),
            cb: function(n) {
                n && window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                    objectUID: e.objectUID,
                    quantity: -i,
                    price: t
                })
            }
        })
    }, n.prototype._createDom = function() {
        this.itemDescription = this.windowBody.appendChild(new h({
            showTitle: !0,
            withCraftBtn: !0
        })), g.makeMovable(this, this.itemDescription.getChildren()[0]), this.exchangeBox = this.windowBody.appendChild(new l), this.bidHouseSellerBox = this.windowBody.appendChild(new a), this.bidHouseBuyerBox = this.windowBody.appendChild(new r), this._createBuyHardSoftButtons(), this.errorBox = this.windowBody.createChild("div", {
            className: "errorBox"
        }), this.errorText = this.errorBox.createChild("div", {
            className: "errorText"
        })
    }, n.prototype._createBuyHardSoftButtons = function() {
        var e = this.buyHardSoftDiv = this.windowBody.createChild("div", {
                className: "buyHardSoftButtons"
            }),
            t = this;
        this.buyHardBtn = e.appendChild(new s({
            className: ["button", "buyHardBtn"],
            text: d("ui.common.buy"),
            addIcon: !0
        }, function() {
            t._buyInGoultines()
        })), this.buyHardBtnLabel = this.buyHardBtn.getChildren()[0], this.buySoftBtn = e.appendChild(new s({
            className: ["greenButton", "buySoftBtn"],
            text: d("ui.common.buy"),
            addIcon: !0
        }, function() {
            t._buyInKamas()
        })), this.buySoftBtnLabel = this.buySoftBtn.getChildren()[0]
    }, n.prototype.displayItem = function(e, t, i, n) {
        n = Boolean(n), this.openState ? this._setContent(e, t, i, n) : g.open(this.id, {
            mode: e,
            item: t,
            currency: i,
            disableBtn: n
        })
    }, n.prototype._setContent = function(e, t, i, n) {
        if (e !== this.mode || t !== this.item) {
            this.mode = e, this.item = t;
            var o = t.item || t,
                a = o.nameId + " (" + o.id + ") " + d("ui.common.short.level") + " " + o.level;
            this.errorBox.hide(), this.setTitle(a), this.itemDescription.displayItem(t), this.settingBox.updateSettingBox(this, t, i, n), this.errorBox.isVisible() || this.settingBox.show();
            var r = window.gui.scenarioManager.isBehaviourEnabled(O.ENABLE_FAKE_SELL_BIDHOUSE);
            this.toggleDisplay(!r), this.itemDescription.refreshEffectsScroller()
        }
    }, n.prototype.showError = function(e) {
        this.errorText.setHtml(e), this.errorBox.show(), this.settingBox.hide()
    }, n.prototype._prepareKpi = function(e) {
        if (!("ExchangeBidHouseBuyResultMessage" !== e || this.selection && this.selection.item)) return console.error("TradeItemWindow._prepareKpi: this.selection is not valid")
    }
}
