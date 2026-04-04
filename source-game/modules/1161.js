function(e, t, i) {
    function n() {
        u.call(this, {
            className: "TradeStorageWindow",
            positionInfo: m,
            helpTab: {
                part: 2,
                subPart: 7
            }
        }), this.openOnItem = null, this.mode = null, this.currentItem = null, this.on("open", this._onOpen), this.on("closed", this._onClose)
    }
    i(1162);
    var o = i(86),
        a = i(17)
        .getText,
        r = i(16),
        s = i(56)
        .inherits,
        c = i(469),
        l = i(1159),
        d = i(88),
        u = i(70),
        p = i(52),
        h = i(129),
        f = i(72),
        b = {
            ExchangeStartOkNpcShopMessage: "buy-npc",
            ExchangeShopStockStartedMessage: "modify-myShop",
            ExchangeStartedBidSellerMessage: "modify-bidHouse"
        },
        m = {
            left: 0,
            top: 0,
            width: 300,
            height: "100%",
            mustAvoidToolbar: !0
        };
    s(n, u), e.exports = n, n.prototype.navigateToItem = function(e) {
        this.openOnItem = null;
        var t, i;
        "number" == typeof e ? t = e : (t = e.getProperty("id"), i = e.getItemInstance());
        var n = p.getWindow("tradeInventory");
        if (n.navigateToItem(e)) return !0;
        if (i && this._selectItemByUID(i.objectUID, !0)) return !0;
        var o = this.shopViewer.findItemByGID(t);
        return !(!o || !this._selectItemByUID(o, !0))
    }, n.prototype._onOpen = function(e) {
        if (this.mode = b[e._messageType], !this.mode) return console.error(new Error("Unexpected msg type for TradeStorageWindow: " + e._messageType));
        this.shopViewer || (this._createContent(), this._setupEventListeners());
        var t = this,
            i = !1,
            n = !1,
            o = window.gui.scenarioManager.isBehaviourEnabled(h.ENABLE_FAKE_SELL_BIDHOUSE),
            r = window.gui.scenarioManager.isBehaviourEnabled(h.DISABLE_CLOSE_BTN);
        switch (this.toggleClassName("tutorialSellRestriction", o), this.toggleClassName("disableCloseButton", r), this.mode) {
            case "buy-npc":
                this.setTitle(a("ui.common.shop")), this.shopViewer.table.setSlideEnable(!1);
                break;
            case "modify-bidHouse":
                this.setTitle(a("ui.common.shopStock"));
                var s = this.descriptor = e.sellerDescriptor;
                i = !0, this.infoContent.setHtml(this._getBidHouseInfoHtml(s)), this._totalItemsPrice = 0, this._itemCount = e.objectsInfos.length, this._updatePlayerInformation(), this.switchToBuyModeBtn.enable(), this.shopViewer.table.setSlideEnable(!0), this._slideBack.modify.hide(), this._slideBack.remove.show()
        }
        n ? p.arrangeOpeningWindowVertically(this.id, {
            below: "wallet",
            fullHeight: !0
        }) : p.positionWindow(this.id, m), this.headerRow.toggleDisplay(i), this.shopViewer.table.setContentLoading(!0), this.lastOpenMode !== this.mode && (this.lasOpenMode && this.delClassNames(this.lasOpenMode), this.addClassNames(this.mode)), this.lasOpenMode = this.mode, c.createItemInstances(e.objectsInfos, function(i, n) {
            return t.shopViewer.table.setContentLoading(!1), i ? console.error(i) : (t.currency = e.tokenId, t.token = e.token || null, t.shopViewer.setItemList(n.array, "modify-bidHouse" === t.mode), void(t.openOnItem && t.navigateToItem(t.openOnItem)))
        })
    }, n.prototype._onClose = function() {
        this.currentItem = null, this.shopViewer.clearContent(), p.close("tradeItem")
    }, n.prototype._createContent = function() {
        this._createHeader(), this._createViewer()
    }, n.prototype._createHeader = function() {
        var e = this.headerRow = this.windowBody.createChild("div", {
            className: "headerRow"
        });
        this._playerInfoElt = e.createChild("div", {
            className: "playerInfoElt"
        }), this._itemCountElt = this._playerInfoElt.createChild("div", {
            className: "itemCountElt"
        }), this._totalItemsPriceElt = this._playerInfoElt.createChild("div", {
            className: "totalItemsPriceElt"
        }), this._playerInfoTooltop = new f("div"), this._itemCountTooltip = this._playerInfoTooltop.createChild("div", {
            className: "itemCount"
        }), this._totalItemsPriceTooltip = this._playerInfoTooltop.createChild("div", {
            className: "totalItemsPrice"
        }), d.addTooltip(this._playerInfoElt, this._playerInfoTooltop), this._createInfoButton(), this._createSwitchToBuyModeButton()
    }, n.prototype._updatePlayerInformation = function() {
        this._itemCountElt.setText(this._itemCount + "/" + this.descriptor.maxItemPerAccount), this._itemCountTooltip.setText(a("ui.bidhouse.quantityObjectSold", this._itemCount, this.descriptor.maxItemPerAccount)), this._totalItemsPriceElt.setText(r.intToString(this._totalItemsPrice) + " K"), this._totalItemsPriceTooltip.setText(a("ui.bidhouse.quantityKamas", r.intToString(this._totalItemsPrice)))
    }, n.prototype._getBidHouseInfoHtml = function(e) {
        var t = a("ui.common.colon"),
            i = "";
        return e.maxItemLevel < 1e3 && (i += a("ui.common.maxLevel") + t + e.maxItemLevel + "<br/>"), i + a("ui.bidhouse.bigStoreTax") + t + e.taxPercentage + "%<br/>" + a("ui.bidhouse.bigStoreMaxSellTime") + t + e.unsoldDelay + " " + a("ui.time.hours", e.unsoldDelay) + "<br/>" + a("ui.bidhouse.unsold")
    }, n.prototype._createInfoButton = function() {
        var e = this.infoContent = new f("div");
        this.infoButton = this.headerRow.createChild("div", {
            className: "infoButton"
        }), d.addTooltip(this.infoButton, e, {
            openOnTap: !0
        }), this.infoButton.on("tooltipOn", function() {
            window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.INFO_BTN_SELL_HOVER)
        })
    }, n.prototype._createSwitchToBuyModeButton = function() {
        this.switchToBuyModeBtn = this.headerRow.appendChild(new o({
            addIcon: !0,
            className: ["buyModeBtn", "greenButton"],
            tooltip: a("ui.bidhouse.bigStoreModeBuy")
        }, function() {
            var e = p.getWindow("bidHouseShop");
            e.switchBuySellMode(!1), this.disable()
        }))
    }, n.prototype._createViewer = function() {
        function e(e, t) {
            return e.objectPrice - t.objectPrice
        }

        function t(e) {
            window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: e.objectUID,
                quantity: -e.quantity
            })
        }
        var i = this,
            n = [{
                id: "icon",
                format: function(e) {
                    var t = new f("div", {
                            className: "slot"
                        }),
                        i = t.createChild("div", {
                            className: "icon"
                        });
                    return i.setStyle("backgroundImage", e.getProperty("image")), i.createChild("div", {
                        className: "quantity",
                        text: e.quantity > 1 ? e.quantity : ""
                    }), t
                }
            }, {
                id: "name",
                header: a("ui.common.name"),
                format: function(e) {
                    var t = new f("div", {
                        className: "name",
                        text: e.item.nameId
                    });
                    return e.item.etheral ? t.addClassNames("etheral") : e.item.itemSetId && t.addClassNames("itemSet"), t
                },
                getContent: function(e) {
                    return e.item.nameId
                },
                sort: !0
            }, {
                id: "price",
                header: a("ui.common.price"),
                format: function(e) {
                    var t;
                    if (i.currency) {
                        t = new f("div", {
                            className: "token"
                        });
                        var n = t.createChild("div", {
                            className: "icon"
                        });
                        n.setStyle("backgroundImage", i.token.image), t.createChild("div", {
                            className: "quantity",
                            text: "x" + e.objectPrice
                        })
                    } else t = r.kamasToString(e.objectPrice);
                    return t
                },
                sort: e,
                defaultSorter: !0
            }],
            o = this._slideBack = new f("div", {
                className: "slideBack"
            });
        o.modify = o.createChild("div", {
            className: "modify",
            text: a("ui.common.modify")
        }), o.remove = o.createChild("div", {
            className: "remove",
            text: a("ui.common.remove")
        }), o.createChild("div", {
            className: ["remove", "right"],
            text: a("ui.common.remove")
        }), this.shopViewer = this.windowBody.appendChild(new l(n, function(e) {
            return e.hasOwnProperty("objectUID") ? e.objectUID : e.hasOwnProperty("objectGID") ? e.objectGID : 0
        }, {
            tableOption: {
                slidable: o,
                scaleOnPress: !0
            }
        })), this.shopViewer.on("itemSelected", function(e, t) {
            i._showCurrentItem(e, t)
        }), this.shopViewer.on("rowSlidedRight", function(e, i) {
            t(i)
        }), this.shopViewer.on("rowSlidedLeft", function(e, i) {
            t(i)
        }), this.shopViewer.on("totalPriceUpdated", function(e) {
            i.mode === b.ExchangeStartedBidSellerMessage && (i._totalItemsPrice = e, i._updatePlayerInformation())
        })
    }, n.prototype._showCurrentItem = function(e, t) {
        this.currentItem = e, p.getWindow("tradeItem")
            .displayItem(this.mode, e, this.token && this.token.nameId, t)
    }, n.prototype._selectItemByUID = function(e, t) {
        var i = this.shopViewer.getItem(e);
        return !!i && (t && this.setFilter(i.getProperty("typeId")), this.shopViewer.selectItem(e), this._showCurrentItem(i), !0)
    }, n.prototype.setFilter = function(e) {
        return this.shopViewer.selectFilter(e)
    }, n.prototype._setupEventListeners = function() {
        function e(e, t) {
            c.createItemInstances(e, function(e, i) {
                return e ? console.error(e) : void(t ? n.shopViewer.addItemsAndHighlightThem(i.array, "modify-bidHouse" === n.mode) : n.shopViewer.addItems(i.array, "modify-bidHouse" === n.mode))
            })
        }

        function t(e) {
            n.currentItem && e.indexOf(n.currentItem.objectUID) >= 0 && "modify-bidHouse" === n.mode && p.close("tradeItem");
            for (var t = 0; t < e.length; t++) n.shopViewer.table.endSlide(e[t]);
            n.shopViewer.removeItems(e, "modify-bidHouse" === n.mode)
        }
        var i = window.dofus.connectionManager,
            n = this;
        i.on("ExchangeBidHouseItemAddOkMessage", function(t) {
            e([t.itemInfo], !1), n._itemCount++, n._updatePlayerInformation()
        }), i.on("ExchangeBidHouseItemRemoveOkMessage", function(e) {
            t([e.sellerId]), n._itemCount--, n._updatePlayerInformation()
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(h.DISABLE_CLOSE_BTN);
            n.toggleClassName("disableCloseButton", e)
        })
    }
}
