function(e, t, i) {
    function n() {
        z.call(this, {
            className: "BidHouseShopWindow",
            freeContentDelay: L,
            positionInfo: {
                left: "0",
                bottom: "0",
                width: R,
                height: "100%"
            },
            title: g("ui.bidhouse.bigStoreItemList"),
            helpTab: {
                part: 2,
                subPart: 7
            }
        }), this.openOnItem = null, this.backBtn = null, this.history = null, this.openAsFakeBuyShop = !1, this.searchBox = null, this.isListening = !1, this.sortedAllowedTypes = {}, this.currentSearchText = null, this.currentSearchItemTypeMap = null, this.currentItemTypeElt = null, this.liveItemTypeId = null, this.liveItems = null, this._categoryToDisplay = null, this._categoryToDisplayItems = null, this._requestedCategories = [], this.isOpening = !1, this.on("open", this._onOpen), this.on("close", this._onClose)
    }

    function o(e, t, i) {
        var n = w.getWindow(e);
        return n.openState ? i && i !== n.mode ? (n.openOnItem = t, x) : (w.focusWindow(e), t && n.navigateToItem(t) ? D : B) : (n.openOnItem = t, x)
    }

    function a() {
        this.myWindow._goBackInHistory()
    }

    function r(e, t) {
        var i = this.myWindow;
        i._selectItemType(e, t)
    }

    function s(e) {
        w.getWindow("tradeItem")
            .displayItem("buy-bidHouse", e), w.focusWindow("tradeItem")
    }

    function c() {
        var e = this.myWindow;
        e.shopViewer.refresh(), e.openAsFakeBuyShop && this.list.content.getChildren()
            .forEach(function(e) {
                e.info !== E.CATEGORY_TUTORIAL && e.addClassNames("disabled")
            })
    }

    function l(e, t) {
        return e.text.localeCompare(t.text)
    }

    function d(e) {
        var t = this.myWindow;
        return t._sortAllowedTypes(e.info)
    }

    function u(e, t) {
        var i = e.myDrilldownList.myWindow,
            n = i._sortAllowedTypes(e.info);
        return Boolean(i.currentSearchItemTypeMap[n[t].id])
    }

    function p(e) {
        for (var t = e.myDrilldownList.myWindow, i = t._sortAllowedTypes(e.info), n = 0; n < i.length; n++)
            if (t.currentSearchItemTypeMap[i[n].id]) return !0;
        return !1
    }

    function h() {
        this.searchBox.setValue(""), this._cancelSearch()
    }
    i(1158);
    var f = i(86),
        b = i(105),
        m = i(1060),
        M = i(941),
        g = i(17)
        .getText,
        _ = i(16),
        A = i(597),
        O = i(56)
        .inherits,
        v = i(469),
        y = i(1159),
        z = i(70),
        w = i(52),
        T = i(72),
        C = i(943),
        I = i(130),
        S = i(129),
        E = i(13),
        L = 5e3,
        N = 30,
        R = 300,
        q = 30;
    O(n, z), e.exports = n, n.minWidth = R;
    var x = 0,
        B = 1,
        D = 2;
    n.prototype.openBidHouse = function(e, t) {
        if (!window.gui.scenarioManager.isBehaviourEnabled(S.DISABLE_BIDHOUSE)) {
            this.isOpening = !0;
            var i = o("tradeStorage", t, "modify-bidHouse"),
                n = o("bidHouseShop", t);
            if (i !== x || n !== x) {
                if (i === D) return void(this.isOpening = !1);
                if (n === D) return void(this.isOpening = !1);
                if (e && i) return void(this.isOpening = !1);
                if (!e && n) return void(this.isOpening = !1)
            }
            this.isOpening = !1, window.dofus.sendMessage("NpcGenericActionRequestMessage", {
                npcId: 0,
                npcActionId: e ? 5 : 6,
                npcMapId: window.gui.playerData.position.mapId
            })
        }
    }, n.prototype.switchBuySellMode = function(e, t) {
        var i = w.getWindow("tradeItem");
        if (!t) {
            var n = i.getCurrentItem();
            n && (t = n.getItemInstance() ? n : n.getProperty("id"))
        }
        w.close("tradeItem"), window.dofus.sendMessage("LeaveDialogRequestMessage");
        var o = this;
        window.gui.once("ExchangeLeaveMessage", function() {
            o.openBidHouse(e, t)
        })
    }, n.prototype._onOpen = function() {
        w.arrangeOpeningWindowVertically(this.id, {
            below: "wallet",
            fullHeight: !0
        }), this.openAsFakeBuyShop = window.gui.scenarioManager.isBehaviourEnabled(S.ENABLE_FAKE_BUY_BIDHOUSE);
        var e = window.gui.scenarioManager.isBehaviourEnabled(S.ENABLE_FAKE_SELL_BIDHOUSE);
        this.openAsFakeBuyShop ? (this.addClassNames("tutorialBuyRestriction"), this.freeContent()) : this.delClassNames("tutorialBuyRestriction"), this.toggleClassName("tutorialSellRestriction", e), this.searchBox || (this._createContent(), this.isListening || this._setupEventListeners()), this.switchToSellModeBtn.enable(), this._showBlankUi(), this.openOnItem && this.navigateToItem(this.openOnItem)
    }, n.prototype._onClose = function() {
        this.isOpening = !1, w.close("tradeItem"), this.openAsFakeBuyShop && this.freeContent(), this.liveItemTypeId = null, this.liveItems = null
    }, n.prototype._createContent = function() {
        this.history || (this.history = new A(q)), this._createBackButton(), this._createSearchBox(), this._createSwitchToSellModeButton(), this._createBidHouseCatList(), this._createViewer(), this._resetSearchBox()
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this.searchBox = this.bidHouseCatList = this.shopViewer = null, this.currentItemTypeElt = null, this._categoryToDisplayItems = null, this.sortedAllowedTypes = {}
    }, n.prototype._resetCategoryFilter = function() {
        this.currentItemTypeElt = null, this._categoryToDisplayItems = null, this.bidHouseCatList.reset()
    }, n.prototype._showBlankUi = function() {
        this._resetSearchBox(), this._resetCategoryFilter(), this._refreshDisplayedItems()
    }, n.prototype._searchAgainFromTop = function() {
        this._resetCategoryFilter(), this._refreshDisplayedItems()
    }, n.prototype._sortAllowedTypes = function(e) {
        if (this.sortedAllowedTypes[e]) return this.sortedAllowedTypes[e];
        for (var t = window.gui.databases.BidHouseCategories[e].allowedTypes, i = window.gui.databases.ItemTypes, n = [], o = 0; o < t.length; o++) {
            var a = t[o];
            n.push({
                text: i[a].nameId,
                id: a
            })
        }
        return n.sort(l), this.sortedAllowedTypes[e] = n, n
    }, n.prototype._selectItemType = function(e, t) {
        this.currentItemTypeElt = e, t ? this.bidHouseCatList.selectAndShowSubitem(e) : this._pushHistory(), this._requestAndDisplayItemAvailability(e.data.id)
    }, n.prototype._createBackButton = function() {
        if (!this.backBtn) {
            var e = this.backBtn = new f({
                className: "backButton",
                hidden: !0
            }, a);
            e.insertBefore(this.windowTitle), e.myWindow = this
        }
    }, n.prototype._createSwitchToSellModeButton = function() {
        var e = this;
        this.switchToSellModeBtn = this.headerRow.appendChild(new f({
            addIcon: !0,
            className: ["sellModeBtn", "greenButton"],
            tooltip: g("ui.bidhouse.bigStoreModeSell")
        }, function() {
            e.switchBuySellMode(!0), this.disable()
        }))
    }, n.prototype._createSearchBox = function() {
        this.headerRow = this.windowBody.createChild("div", {
            className: "headerRow"
        });
        var e = this.searchBox = this.headerRow.appendChild(new C({
            maxLength: N
        }));
        e.on("search", this._search.bind(this))
    }, n.prototype._createBidHouseCatList = function() {
        var e = this,
            t = this.bidHouseCatList = new m({
                emitOnSelectItem: this.openAsFakeBuyShop
            });
        t.myWindow = this, t.setSubitemsGetter(d), t.setFilter(p, u);
        var i = window.gui.databases.BidHouseCategories;
        this.openAsFakeBuyShop && (i = {}, E.FAKEBIDHOUSE_CATEGORIES.forEach(function(e) {
            i[e] = window.gui.databases.BidHouseCategories[e]
        }));
        var n = [];
        for (var o in i) n.push({
            text: i[~~o].description,
            id: ~~o
        });
        n.sort(l);
        for (var a = 0; a < n.length; a++) t.addItem(n[a].text, n[a].id);
        t.getDom(this.windowBody)
            .addClassNames("bidHouseCategories"), t.on("subitemSelected", r), t.on("resized", c), t.on("itemDeployed", function(t) {
                var i = t.subitemList.getChild(E.SUBCATEGORY_TUTORIAL);
                e._selectItemType(i, !0)
            })
    }, n.prototype._refreshFilter = function() {
        this._categoryToDisplayItems && this._refreshDisplayedItems();
        var e = this.bidHouseCatList.refreshFilter();
        0 === e.itemCount ? (this.bidHouseCatList.toggleBreadcrumb(!1), this.bidHouseCatList.setPlaceholder(g("tablet.bidHouse.noCatHasMatchingItem", this.currentSearchText)), this.shopViewer.setPlaceholder(g("tablet.bidHouse.noMatchingItem", this.currentSearchText)), this._resetShopViewerHeader()) : this.bidHouseCatList.setPlaceholder(null)
    }, n.prototype._pushHistory = function() {
        0 === this.history.getCurrentSize() && this.backBtn.show();
        var e = {
            bookmark: this.bidHouseCatList.getSubitemBookmark(this.currentItemTypeElt),
            search: this.currentSearchText
        };
        this.history.push(e)
    }, n.prototype._goBackInHistory = function() {
        (this.currentItemTypeElt || this.currentSearchText) && this.history.pop();
        var e = this.history.getLast();
        if (!e) return this.backBtn.hide(), this._showBlankUi();
        this.bidHouseCatList.toggleBreadcrumb(!1), this._search(e.search, !0);
        var t = this.bidHouseCatList.getSubitemByBookmark(e.bookmark);
        t ? this._selectItemType(t, !0) : this.bidHouseCatList.collapseAll()
    }, n.prototype.navigateToItem = function(e, t) {
        this.openOnItem = null;
        var i;
        i = "number" == typeof e ? v.items[e] : e.getItem();
        var n = {};
        return n[i.typeId] = !0, this.currentSearchItemTypeMap = n, this.currentSearchText = i.getNameForSearch(), this.searchBox.setValue(i.nameId), this._resetCategoryFilter(), this._refreshFilter(), t || this._pushHistory(), !0
    }, n.prototype._search = function(e, t) {
        if (null === e || "" === e) return this._cancelSearch(t);
        var i = _.simplifyString(e);
        i !== this.currentSearchText && (this.searchBox.searchInput.blur(), this.currentSearchText = i, this.bidHouseCatList.inBreadcrumbMode() || this._searchAgainFromTop(), t ? this.searchBox.setValue(e) : this._pushHistory(), this._searchItemsByName())
    }, n.prototype._cancelSearch = function(e) {
        this.searchBox.searchInput.blur(), this.currentSearchText && (this.currentSearchText = null, this.bidHouseCatList.removeFilter(), this.bidHouseCatList.toggleBreadcrumb(!1), this.currentItemTypeElt && this.bidHouseCatList.selectAndShowSubitem(this.currentItemTypeElt), this._categoryToDisplayItems && this._refreshDisplayedItems(), e ? this.searchBox.clear() : this.currentItemTypeElt && this._pushHistory())
    }, n.prototype._resetSearchBox = function() {
        this.searchBox.clear(), this.currentSearchText = null
    }, n.prototype._createViewer = function() {
        function e(e, t) {
            var i = e.level - t.level;
            if (0 !== i) return i;
            var n = e.nameId || "";
            return n.localeCompare(t.nameId)
        }
        var t = [{
            id: "icon",
            format: function(e) {
                var t = new T("div", {
                        className: "slot"
                    }),
                    i = t.createChild("div", {
                        className: "icon"
                    });
                return i.setStyle("backgroundImage", e.image), t
            },
            sort: e,
            defaultSorter: !0
        }, {
            id: "name",
            header: "",
            format: function(e) {
                var t = new T("div", {
                    className: "name",
                    text: e.nameId
                });
                return e.etheral ? t.addClassNames("etheral") : e.itemSetId && t.addClassNames("itemSet"), t
            },
            getContent: function(e) {
                return e.nameId
            },
            sort: !0
        }];
        this.shopViewer = this.windowBody.appendChild(new y(t, "id", {
            manualFiltering: !0,
            tableOption: {
                scaleOnPress: !0
            }
        })), this.shopViewer.on("itemSelected", s), this.shopViewer.myWindow = this;
        var i = new T("div", {
            className: "filterHeader"
        });
        this.shopViewerHeaderLabel = i.createChild("div", {
            className: "label",
            text: g("tablet.bidHouse.nowOnSale")
        }), this.shopViewerHeaderButton = i.appendChild(new M("", h.bind(this))), this.shopViewerHeaderButton.hide(), this.shopViewer.setHeader(i)
    }, n.prototype._setupEventListeners = function() {
        this.isListening = !0;
        var e = this;
        b.on("ExchangeTypesExchangerDescriptionForUserMessage", function(t) {
            e._requestedCategories.shift(), e._storeItemAvailability(t.typeDescription, !0)
        }), b.on("ExchangeBidHouseGenericItemAddedMessage", function(t) {
            e._storeItemAvailability(t.objGenericId)
        }), b.on("ExchangeBidHouseGenericItemRemovedMessage", function(t) {
            e._storeNonAvailableItem(t.objGenericId)
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var t = window.gui.scenarioManager.isBehaviourEnabled(S.DISABLE_SHOP_SELL_BTN);
            e.toggleClassName("sellModeBtnRestriction", t)
        })
    }, n.prototype._shouldItemBeDisplayed = function(e) {
        if (e.typeId !== this._categoryToDisplay) return !1;
        if (!this.currentSearchText) return !0;
        var t = e.getNameForSearch()
            .indexOf(this.currentSearchText) >= 0,
            i = "";
        return this.currentSearchText.toLowerCase()
            .indexOf("oe") === -1 || t ? this.currentSearchText.toLowerCase()
            .indexOf("œ") === -1 || t ? e.getNameForSearch()
            .indexOf(this.currentSearchText) >= 0 : (i = this.currentSearchText.replace(/œ/g, "oe"), e.getNameForSearch()
                .indexOf(i) >= 0) : (i = this.currentSearchText.replace(/oe/g, "œ"), e.getNameForSearch()
                .indexOf(i) >= 0)
    }, n.prototype._refreshDisplayedItems = function() {
        var e = this._categoryToDisplayItems || [],
            t = Boolean(e.length);
        if (e.length && this.currentSearchText) {
            for (var i = [], n = 0; n < e.length; n++) {
                var o = e[n];
                this._shouldItemBeDisplayed(o) && i.push(o)
            }
            e = i
        }
        if (e.length > 0 && this.bidHouseCatList.toggleBreadcrumb(!0), t && this.currentSearchText) {
            var a = g("tablet.common.filterHeader", this._categoryToDisplayItems.length - e.length);
            this._setShopViewerHeader(a, this.currentSearchText)
        } else this._resetShopViewerHeader();
        if (!e.length) {
            this.shopViewer.clearContent();
            var r;
            if (this._categoryToDisplayItems) {
                var s = window.gui.databases.ItemTypes[this._categoryToDisplay].nameId;
                r = t ? g("tablet.bidHouse.noMatchInCat", this.currentSearchText, s) : g("tablet.bidHouse.nothingInCat", s)
            } else r = g("tablet.bidHouse.searchOrSelect");
            this.shopViewer.setPlaceholder(r)
        }
        this.shopViewer.setItemList(e)
    }, n.prototype._setShopViewerHeader = function(e, t) {
        this.shopViewerHeaderLabel.setText(e), this.shopViewerHeaderButton.setLabel(t), this.shopViewerHeaderButton.show(), this.shopViewer.table.setSortingHintVisible("name", !0)
    }, n.prototype._resetShopViewerHeader = function() {
        this.shopViewerHeaderLabel.setText(g("tablet.bidHouse.nowOnSale")), this.shopViewerHeaderButton.hide(), this.shopViewer.table.setSortingHintVisible("name", !1)
    }, n.prototype._requestAndDisplayItemAvailability = function(e) {
        return e === this.liveItemTypeId ? (this._categoryToDisplayItems = this.liveItems, this._refreshDisplayedItems()) : (w.close("tradeItem"), this._categoryToDisplay = e, void(this._requestedCategories.indexOf(e) === -1 && (this._requestedCategories.push(e), this.liveItemTypeId = e, this.liveItems = null, this.shopViewer.setPlaceholder(" "), this.shopViewer.table.placeholder.frame.addClassNames("spinner"), this.openAsFakeBuyShop ? (this._requestedCategories.shift(), this._storeItemAvailability(E.ITEM_TUTORIAL, !0), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.SUBCATEGORY_OPEN)) : window.dofus.sendMessage("ExchangeBidHouseTypeMessage", {
            type: e
        }))))
    }, n.prototype._searchItemsByName = function() {
        this.searchBox.showAsSearching(!0);
        var e = this;
        I.searchDataMap("Items", {
            match: this.currentSearchText
        }, function(t, i) {
            if (t) return console.error(t), e.shopViewer.setPlaceholder(g("tablet.searchError"));
            var n = {};
            for (var o in i) {
                var a = i[~~o];
                n[a.typeId] = !0
            }
            if (e.currentSearchText.toLowerCase()
                .indexOf("oe") !== -1) {
                var r = e.currentSearchText.replace(/oe/g, "œ");
                I.searchDataMap("Items", {
                    match: r
                }, function(t, i) {
                    if (t) return console.error(t), e.shopViewer.setPlaceholder(g("tablet.searchError"));
                    for (o in i) a = i[~~o], n[a.typeId] = !0;
                    e.currentSearchItemTypeMap = n, e._refreshFilter(), e.searchBox.showAsSearching(!1)
                })
            } else e.currentSearchText.toLowerCase()
                .indexOf("œ") !== -1 ? (r = e.currentSearchText.replace(/œ/g, "oe"), I.searchDataMap("Items", {
                    match: r
                }, function(t, i) {
                    if (t) return console.error(t), e.shopViewer.setPlaceholder(g("tablet.searchError"));
                    for (o in i) a = i[~~o], n[a.typeId] = !0;
                    e.currentSearchItemTypeMap = n, e._refreshFilter(), e.searchBox.showAsSearching(!1)
                })) : (e.currentSearchItemTypeMap = n, e._refreshFilter(), e.searchBox.showAsSearching(!1))
        })
    }, n.prototype._storeItemAvailability = function(e, t) {
        var i = e instanceof Array,
            n = i ? e : [e],
            o = this;
        v.getItems(n, function(e, i) {
            if (e) return console.error(e);
            if (o.openState && (t || o.liveItems)) {
                o.shopViewer.table.placeholder.frame.delClassNames("spinner");
                var n = o._categoryToDisplayItems === o.liveItems;
                o.liveItems = t ? i : o.liveItems.concat(i), (n || t) && (o._categoryToDisplayItems = o.liveItems, o._refreshDisplayedItems())
            }
        })
    }, n.prototype._storeNonAvailableItem = function(e) {
        if (this.openState && this.liveItems) {
            for (var t = this.liveItems.length - 1; t >= 0; t--)
                if (this.liveItems[t].id === e) {
                    this.liveItems.splice(t, 1);
                    break
                } var i = this._categoryToDisplayItems === this.liveItems;
            i && this.shopViewer.removeItems([e])
        }
    }, n.prototype.forceRemoveItem = function(e) {
        this._storeNonAvailableItem(e)
    }, n.prototype.getCategoryDom = function(e) {
        if (!this.bidHouseCatList) return null;
        var t = this.bidHouseCatList.list.content.getChildren()
            .filter(function(t) {
                return t.info === e
            });
        return t[0]
    }, n.prototype.getItemInSaleDom = function(e) {
        return this.shopViewer && this.shopViewer.table ? this.shopViewer.table.getCell(e, "name") : null
    }
}
