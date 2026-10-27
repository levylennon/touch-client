function(e, t, i) {
    function n() {
        v.call(this, "div", {
            className: "BidHouseBuyerBox",
            hidden: !0
        }), this.tradeItemWindow = null, this.item = null, this.currentOffer = null, this.descriptor = null, this.table = null, this.actions = [], this.mountWindow = null, this.serverAveragePrice = -1, this.displayedUnitCount = 0, this.displayedUnitPrice = 0, this.isDomCreated = !1
    }

    function o(e, t) {
        return t.myTable.bidHouseBuyerBox.isItemSearchable ? e.item.shortName : null
    }

    function a(e) {
        return e.tutorialPrice ? 0 : (e.amountHard = m.computeHardPrice(e.amountSoft), e.amountHard ? h.intToString(e.amountHard) : null)
    }

    function r(e, t) {
        return O.addTooltip(t, c), h.intToString(e.amountSoft)
    }

    function s(e, t) {
        var i = this.id;
        switch (i) {
            case "icon":
                var n = e.qty - t.qty;
                return 0 !== n ? n : e.unitPrice - t.unitPrice;
            case "shortName":
                var o = e.item.shortName,
                    a = t.item.shortName;
                return "string" == typeof o ? o.localeCompare(a) : -1;
            case "amountSoft":
            case "amountHard":
                var r = e.unitPrice - t.unitPrice;
                return 0 !== r ? r : e.qty - t.qty;
            default:
                return 0
        }
    }

    function c() {
        var e = this.myTable.bidHouseBuyerBox,
            t = this.rowContent,
            i = t.amountSoft / t.qty;
        i >= 100 ? i = Math.round(i) : i >= 10 && (i = Math.round(10 * i) / 10);
        var n = "",
            o = e._computeAveragePrice(),
            a = 100 * (i / o - 1);
        a <= -1 ? (a < -99 && (a = -99), n = " -" + Math.round(-a) + "%") : a >= 1 && (n = " +" + Math.round(a) + "%");
        var r = p("ui.bidhouse.bigStoreAveragePrice");
        return r = r[0].toLowerCase() + r.substr(1), p("tablet.unitPrice") + p("ui.common.colon") + h.intToString(i) + "\n(" + r + n + ")"
    }

    function l(e, t) {
        g("GEN_BUTTON");
        var i = this.bidHouseBuyerBox;
        i.currentOffer = t, i.tradeItemWindow.updateSelection(t), i._showSpecialItemInfo(t.item)
    }

    function d(e) {
        var t = this.bidHouseBuyerBox.searchedText;
        if (!t) return !0;
        var i = e.item;
        if (h.simplifyString(i.shortName)
            .indexOf(t) !== -1) return !0;
        for (var n = i.effects, o = 0; o < n.length; o++)
            if (h.simplifyString(n[o].description)
                .indexOf(t) !== -1) return !0;
        return !1
    }
    i(1151);
    var u = i(792),
        p = i(17)
        .getText,
        h = i(16),
        f = i(56)
        .inherits,
        b = i(469),
        m = i(840),
        M = i(481),
        g = i(91)
        .playUiSound,
        _ = i(943),
        A = i(765),
        O = i(88),
        v = i(72),
        y = i(52),
        z = i(13),
        w = i(871),
        T = 2,
        C = .5,
        I = 0,
        S = 1,
        E = 2,
        L = 3,
        N = 500,
        R = 30,
        q = 300,
        x = 100;
    f(n, v), e.exports = n, n.prototype.updateSettingBox = function(e, t) {
        var i = this;
        this.tradeItemWindow = e, this.item = t, e.updateSelection(null);
        var n = y.getWindow("bidHouseShop"),
            o = !!n.openState && n.openAsFakeBuyShop;
        o || (window.dofus.sendMessage("ExchangeBidHouseListMessage", {
            id: t.id
        }), this._setAveragePrice(t.averagePrice), b.getFreshAveragePrice(t.id, function(e) {
            i._setAveragePrice(e)
        })), this.displayedUnitCount = 0, this.displayedUnitPrice = 0, this.pendingItemGid = null, this.expectedItems = null, window.clearTimeout(this.chunkLoadTimeout), this.searchedText = "", this.searchBox.clear(), this.table.clearContent(), this.addClassNames("spinner"), o && i._loadItemList([z.FAKE_INSTANCED_ITEM])
    }, n.prototype._updateOffer = function(e, t) {
        if (this.currentOffer && e === this.currentOffer.id) {
            if (t > this.currentOffer.amountSoft) return this.tradeItemWindow.updateSelection(null);
            this.table.selectRow(e, !0), this.tradeItemWindow.updateBidHouseBuyPriceRealtime(t, m.computeHardPrice(t))
        }
    }, n.prototype._removeOffer = function(e) {
        this.currentOffer && e === this.currentOffer.id && this.tradeItemWindow.updateSelection(null)
    }, n.prototype._hideMountPreview = function() {
        this.mountWindow && (this.mountWindow.close(), this.mountWindow = null)
    }, n.prototype._showSpecialItemInfo = function(e) {
        M.getMountInfoFromCertificate(e) ? (this.mountWindow = y.getWindow("mount"), this.mountWindow.showCertificateMount(e)) : this._hideMountPreview()
    }, n.prototype.setDescriptorData = function(e) {
        function t(e) {
            var t = new w({
                itemData: e.item,
                quantity: e.qty
            });
            return t
        }
        this.descriptor = e, this.isDomCreated || (this.isDomCreated = !0, this._createDom(), this._setupEvents());
        var i = new v("div", {
                className: ["currencyIcon", "soft"]
            }),
            n = new v("div", {
                className: ["currencyIcon", "hard"]
            }),
            c = [{
                id: "icon",
                format: t,
                sort: s
            }, {
                id: "shortName",
                header: p("ui.common.name"),
                format: o,
                sort: s
            }, {
                id: "amountHard",
                header: n,
                format: a,
                sort: s
            }, {
                id: "amountSoft",
                header: i,
                format: r,
                sort: s,
                defaultSorter: !0,
                order: "descending"
            }];
        this.item = null, this.expectedItems = null, this.itemCache = {
            monstersCache: {}
        }, this.table ? this.table.clearContent() : (this.table = this.tableBox.appendChild(new A(c, "id", {
            scaleOnPress: !0
        })), this.table.on("rowTap", l), this.table.addFilter(d), this.table.bidHouseBuyerBox = this)
    }, n.prototype._onHide = function() {
        this._hideMountPreview(), window.clearTimeout(this.chunkLoadTimeout), window.clearTimeout(this.actionTimeout), this.actionTimeout = null, this.actions = [], this.itemCache = null, this.item = null
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.dofus.connectionManager;
        this.on("hide", this._onHide), t.on("ExchangeErrorMessage", function(t) {
            t.errorType === u.BID_SEARCH_ERROR && e.delClassNames("spinner")
        }), t.on("ExchangeBidHouseInListUpdatedMessage", function(t) {
            var i = {
                objectUID: t.itemUID,
                objectGID: t.objGenericId,
                prices: t.prices,
                effects: t.effects,
                quantity: 1
            };
            e._queueAction({
                type: E,
                GID: t.objGenericId,
                rawItem: i
            })
        }), t.on("ExchangeBidHouseInListAddedMessage", function(t) {
            var i = {
                objectUID: t.itemUID,
                objectGID: t.objGenericId,
                prices: t.prices,
                effects: t.effects,
                quantity: 1
            };
            e._queueAction({
                type: S,
                GID: t.objGenericId,
                rawItems: [i]
            })
        }), t.on("ExchangeTypesItemsExchangerDescriptionForUserMessage", function(t) {
            null !== e.item && e._loadItemList(t.itemTypeDescriptions)
        }), t.on("ExchangeBidHouseInListRemovedMessage", function(t) {
            e._queueAction({
                type: L,
                GID: e.pendingItemGid,
                UID: t.itemUID
            })
        }), m.on("computedHardPricesChange", function() {
            e.table && e.table.refreshRows()
        })
    }, n.prototype._loadItemList = function(e) {
        this.pendingItemGid = this.item.id, window.clearTimeout(this.chunkLoadTimeout), this.table.clearContent(), this._queueAction({
            type: I,
            GID: this.pendingItemGid,
            bidExchangerObjectInfos: e
        })
    }, n.prototype._queueAction = function(e) {
        this.actions.push(e), this.actionTimeout || this._processNextAction()
    }, n.prototype._processNextAction = function() {
        for (var e;;) {
            if (!this.actions.length) return;
            if (e = this.actions.shift(), e.GID === this.pendingItemGid) break
        }
        switch (e.type) {
            case I:
                return this._addItemListChunk(this.pendingItemGid, e.bidExchangerObjectInfos, 0);
            case S:
                return this._addItems(e.rawItems, S, this._scheduleNextAction.bind(this));
            case L:
                return this._removeItem(e.UID, L), this._scheduleNextAction();
            case E:
                return this._updateItem(e.rawItem, this._scheduleNextAction.bind(this));
            default:
                console.error("Invalid action: " + e.type)
        }
    }, n.prototype._scheduleNextAction = function() {
        !this.actionTimeout && this.actions.length && (this.actionTimeout = window.setTimeout(function(e) {
            e.actionTimeout = null, e._processNextAction()
        }, x, this))
    }, n.prototype._addItemListChunk = function(e, t, i) {
        if (e === this.pendingItemGid) {
            for (var n = 0 === i, o = Math.min(i + (n ? R : N), t.length), a = [], r = i; r < o; r++) {
                var s = t[r];
                a.push({
                    objectUID: s.objectUID,
                    objectGID: e,
                    tutorialPrice: s.tutorialPrice,
                    prices: s.prices,
                    effects: s.effects,
                    quantity: 1
                })
            }
            this._addItems(a, n ? I : S, this._nextItemListChunk.bind(this, e, t, o))
        }
    }, n.prototype._nextItemListChunk = function(e, t, i) {
        e === this.pendingItemGid && (i !== t.length ? (this.rowCount.show(), this.rowCount.setText(i + " / " + t.length), this.chunkLoadTimeout = window.setTimeout(function(n) {
            n._addItemListChunk(e, t, i)
        }, q, this)) : (this.rowCount.hide(), this.delClassNames("spinner")))
    }, n.prototype._adaptTableToItemType = function(e) {
        this.isItemSearchable = e && e.getRawName() !== e.shortName, this.isItemSearchable ? (this.searchDiv.toggleDisplay(!0), this.rowCount.setText("..."), this.rowCount.show(), this.table.sortByColumnId("shortName", "ascending"), this.table.delClassNames("noShortName")) : (this.searchDiv.toggleDisplay(!1), this.table.sortBy && "shortName" === this.table.sortBy.id && this.table.resetSort(), this.table.addClassNames("noShortName")), this.table.sortAgain()
    }, n.prototype._removeItem = function(e, t) {
        for (var i = this.descriptor.quantities, n = 0; n < i.length; n++) {
            var o = e + "x" + i[n];
            this.table.delRow(o), t === L && this._removeOffer(o)
        }
    }, n.prototype._updateItem = function(e, t) {
        this._removeItem(e.objectUID, E), this._addItems([e], E, t)
    }, n.prototype._addItems = function(e, t, i) {
        this.expectedItems = e;
        var n = this;
        b.createItemInstances(e, this.itemCache, function(o, a) {
            if (o) return console.error(o), i && i(o);
            if (e === n.expectedItems) {
                n.expectedItems = null, t === I && n._adaptTableToItemType(a.array[0]);
                var r = a.map,
                    s = [];
                for (var c in r) n._separateItemBulks(r[c], s);
                if (n.table.addList(s), t === E)
                    for (var l = 0; l < s.length; l++) {
                        var d = s[l];
                        n._updateOffer(d.id, d.amountSoft)
                    }
                return n._updatePriceHighlighting(), i && i()
            }
        })
    }, n.prototype._separateItemBulks = function(e, t) {
        for (var i = this.descriptor.quantities, n = 0; n < i.length; n++) {
            var o = e.prices[n];
            if (o) {
                var a = i[n];
                t.push({
                    id: e.getProperty("objectUID") + "x" + a,
                    item: e,
                    qty: a,
                    amountSoft: o,
                    unitPrice: o / a,
                    amountHard: null,
                    tutorialPrice: e.tutorialPrice
                }), this.displayedUnitCount += a, this.displayedUnitPrice += o
            }
        }
    }, n.prototype._setAveragePrice = function(e) {
        if (this.serverAveragePrice = e, e === -1) return this.averagePriceElement.setText(p("ui.item.averageprice.unavailable"));
        var t = m.computeHardPrice(e);
        this.averagePriceElement.setText(h.hardAndSoftToString(t, e))
    }, n.prototype._createDom = function() {
        var e = this;
        this.searchDiv = this.createChild("div", {
            className: "searchDiv"
        }), this.searchBox = this.searchDiv.appendChild(new _({
            label: p("ui.common.search") + p("ui.common.colon")
        })), this.searchBox.on("search", function(t) {
            e._search(t)
        }), this.rowCount = this.searchDiv.createChild("div", {
            className: "rowCount"
        }), this.tableBox = this.createChild("div", {
            className: "tableBox"
        });
        var t = this.createChild("div", {
            className: ["setting", "averagePrice"]
        });
        t.createChild("div", {
            className: "label",
            text: p("ui.bidhouse.bigStoreAveragePrice") + p("ui.common.colon")
        }), this.averagePriceElement = t.createChild("div", {
            className: "value"
        })
    }, n.prototype._search = function(e) {
        this.searchedText = h.simplifyString(e), this.addClassNames("spinner"), window.setTimeout(function(e) {
            e.table.filter(), e.delClassNames("spinner")
        }, 0, this)
    }, n.prototype._computeAveragePrice = function() {
        return this.serverAveragePrice !== -1 ? this.serverAveragePrice : this.displayedUnitPrice / this.displayedUnitCount
    }, n.prototype._updatePriceHighlighting = function() {
        for (var e = this._computeAveragePrice(), t = this.table.rows.getChildren(), i = 0; i < t.length; i++) {
            var n = t[i],
                o = n.rowContent;
            n.toggleClassName("expensive", o.unitPrice >= e * T), n.toggleClassName("cheap", o.unitPrice <= e * C)
        }
    }, n.prototype.forceRemoveItem = function(e) {
        this._queueAction({
            type: L,
            GID: this.pendingItemGid,
            UID: e
        })
    }, n.prototype.getItemRowDom = function(e) {
        if (this.table && this.table.rows) return this.table.rows.getChildren()[e]
    }
}
