function(e, t, i) {
    function n(e) {
        p.call(this), 
        e = e || {}, this.itemList = {},
        this._filteredItemList = {},
        this._sortedItemList = [],
        this.itemsQuantityList = {},
        this.slotList = {},
        this.weight = 0,
        this.maxWeight = 1,
        this._isTagBarHidden = !0,
        this._disconneting = !1,
        this._waitingForBankReply = !1,
        this._isAlreadyOpeningBank = !1,
        this.enablePresets = e.enablePresets;
        var t = e.dataHandler;
        this.enableLookAllObjects = e.enableLookAllObjects,
        this._silently = Boolean(e.silently),
        this._rememberLastTabUsed = "boolean" != typeof e.rememberLastTabUsed || e.rememberLastTabUsed,
        this._defaultFilter = function(e, t, i, n, o, a) {
            if (!this.enableLookAllObjects && e.position !== D) return !1;
            if (0 === t) return !1;
            if (this.filteringOptions.usable && !e.item.usable) return !1;
            if (!this.filterCategories[i]) return !1;
            if (i !== this.filteringOptions.filterId && o) return !1;
            if (e.item.typeId !== this.filteringOptions.subFilterId && a) return !1;
            if (n && e.isFullSoulStone())
                for (var r = 0; r < e.effects.length; r++)
                    if (f.simplifyString(e.effects[r].description)
                        .indexOf(n) !== -1) return !0;
            if (n) {
                var s = n.replace(/oe/gi, "(oe|œ)"),
                    c = new RegExp(s, "i");
                if (!c.test(e.item.getNameForSearch())) return !1
            }
            return !0
        }, 
        this._tutorialFilter = function(e) {
            return e.objectUID < 0
        }, this._filters = [this._defaultFilter], t && this.setDataHandler(t), this.currentOpenedWindow = null, this.selectedSlot = null, this.slotToShow = null, this.filterCategories = {};
        for (var i in m.categories) this.filterCategories[m.categories[i]] = !0;
        this.filteringOptions = {}, this.storageUI = new w("div", {
            className: "StorageViewer"
        }), this.domIsCreated = !1, this.contentInitiated = !1, this.listUpdateRequested = null, this.dataHandlerItemList = null, this._itemFilter = null, this.sortingCriterias = null, this.sortingOrder = "", this.showBankButton = !1, this.currentPage = -1, this.pageCount = -1, this.dragSourceData = {}, this._setupListeners()
    }

    function o() {
        this.addClassNames("pressed")
    }

    function a() {
        this.delClassNames("pressed")
    }

    function r(e) {
        var t = new w("div", {
            className: ["arrow", e]
        });
        return z(t), t.on("tapstart", o), t.on("tapend", a), t
    }

    function s(e, t, i) {
        var n = i.storageViewer.currentOpenedWindow;
        return !n.prepareForDragFunction || n.prepareForDragFunction(e, t, i)
    }

    function c(e, t, i) {
        return e[i] - t[i]
    }

    function l(e, t, i, n) {
        for (var o = 0; o < e.length; o++) {
            var a = e[o],
                r = W[a] || c,
                s = r(i, n, a, t);
            if (0 !== s) return "ASC" === t ? s : -s
        }
        return 0
    }
    i(938);
    var d = i(88),
        u = i(418),
        p = i(36)
        .EventEmitter,
        h = i(17)
        .getText,
        f = i(16),
        b = i(56)
        .inherits,
        m = i(469),
        M = i(871),
        g = i(939),
        _ = i(867),
        A = i(947),
        O = i(490),
        v = i(769),
        y = i(23)
        .events,
        z = i(63),
        w = i(72),
        T = i(13),
        C = i(86),
        I = i(116),
        S = i(129),
        E = i(52),
        L = 40,
        N = T.WARN_INVENTORY_YELLOW_MIN,
        R = T.WARN_INVENTORY_RED_MIN,
        q = 30,
        x = 14,
        B = 100,
        D = m.positions.notEquipped;
    b(n, p), e.exports = n, n.prototype._setupListeners = function() {
        var e = this;
        window.gui.playerData.characters.on("characteristicsUpdated", function(t) {
            e._waitingForBankReply && (e._waitingForBankReply = !1, e._isAlreadyOpeningBank = !1, window.gui.openConfirmPopup({
                title: h("ui.popup.warning"),
                message: h("ui.popup.bankWarning", t.remoteBankTaxKamas),
                cb: function(t) {
                    if (I.log("HUD.Click_on_button", {
                            interface_id: "mainUI",
                            button_id: "BTN_BANK",
                            clic_parameter_key: "using",
                            clic_parameter_value: Boolean(t),
                            clic_type: "Simple_court"
                        }), t && !e._isAlreadyOpeningBank) {
                        var i = E.getWindow("teleporterList");
                        i.openState && i.close(), window.dofus.sendMessage("NpcGenericActionRequestMessage", {
                            npcActionId: 11,
                            npcId: 0,
                            npcMapId: -1
                        }), e._isAlreadyOpeningBank = !0
                    }
                }
            }))
        })
    }, n.prototype.setDataHandler = function(e) {
        e && (this._setupEvents(e), this.enablePresets && this.on("StorageViewerOpen", function() {
            this.setWeight(e.weight, e.maxWeight), this.setKamas(e.kamas)
        }))
    }, n.prototype._updatePageSystem = function(e) {
        var t = this.currentOpenedWindow;
        t && (t._storageViewer = t._storageViewer || {}, this.slotsMask.setStyles({
            width: t.availableSlotBoxWidth,
            height: t.availableSlotBoxHeight
        }), this._updatePageCount(t, e), this.slotsBox.setStyle("height", t._storageViewer.slotsPerColumn * this.pageCount * L + "px"), this.slotsBox.show())
    }, n.prototype._updatePageCount = function(e, t) {
        var i = e._storageViewer;
        if (i.slotsPerPage) {
            var n = Math.ceil(this.displayedSlotCount / i.slotsPerPage) || 1;
            (n !== this.pageCount || t) && (this.pageCount = n, this._displayPage(0, t), this.pagination.setPageCount(n))
        }
    }, n.prototype.setBankButtonAvailability = function() {
        this.bankButton.setEnable(window.gui.playerData.achievements.hasFinished(T.ASTRUB_EXPLORED_ACHIEVEMENT))
    }, n.prototype._getAvailableSpaceAndUpdatePageSystem = function() {
        var e = this.currentOpenedWindow;
        if (!e) return !1;
        e._storageViewer = e._storageViewer || {};
        var t = e._storageViewer,
            i = this.storageUI.rootElement.clientHeight,
            n = this.pagination.rootElement.clientHeight,
            o = this.podContainer.rootElement.clientHeight,
            a = this._itemFilter.rootElement.clientHeight,
            r = this.noExtraMargin ? 0 : x,
            s = i - (n + o + a + r);
        if (s <= 0) return !1;
        var c = this.slotsContainer.rootElement.clientWidth,
            l = Math.floor(c / L);
        return t.slotsPerColumn = Math.floor((s - (this._isTagBarHidden ? 0 : q)) / L), t.slotsPerPage = l * t.slotsPerColumn, e.availableSlotBoxWidth = l * L + "px", e.availableSlotBoxHeight = t.slotsPerColumn * L + "px", this._updatePageSystem(), !0
    }, n.prototype._initializeView = function() {
        this._isTagBarHidden = !0, this._getAvailableSpaceAndUpdatePageSystem() && this.slotToShow && this._displaySlotPage(this.slotToShow)
    }, n.prototype.registerView = function(e, t) {
        var i = this;
        t = t || {}, e.on("open", function() {
            var n = i.currentOpenedWindow = this;
            if (i.dragSourceData.source = this.id, n.tapSelectedEmitsDoubleTap = t.tapSelectedEmitsDoubleTap, n.prepareForDragFunction = t.prepareForDragFunction, i._disconneting = !1, i.contextParams = t.contextParams || {}, i.enableAveragePrice = !t.hasOwnProperty("enableAveragePrice") || t.enableAveragePrice, i.enableSlotContext = !t.hasOwnProperty("enableSlotContext") || t.enableSlotContext, i.noExtraMargin = Boolean(t.noExtraMargin), i.domIsCreated || (i._createDom(), i.domIsCreated = !0), i.contentInitiated || i._spinner.addSpinner("loading"), i.averagePrice.toggleDisplay(Boolean(i.enableAveragePrice)), t.manualOpening || e.windowBody.appendChild(i.storageUI), e.availableSlotBoxWidth ? i._updatePageSystem() : i.slotsBox.hide(), i.currentOpenedWindow !== i.lastOpenedWindow) {
                i.leftArrow.toggleDisplay(Boolean(t.leftArrow)), i.rightArrow.toggleDisplay(Boolean(t.rightArrow)), i.slotsMask.toggleClassName("hoverable", Boolean(t.showHoverFrame));
                var o;
                if (!i.listUpdateRequested)
                    for (o in i.slotList) {
                        var a = i.slotList[o];
                        a.data && (i.contextParams.item = a.data, a.setContextMenu("item", i.contextParams), a.enableContextMenu(Boolean(i.enableSlotContext)))
                    }
                i._itemFilter.setAvailableCategories(t.filters)
            }
            i.showBankButton = Boolean(t.showBankButton), i.displayBankButton(i.showBankButton), i.contentInitiated = !0, i.emit("StorageViewerOpen"), i.listUpdateRequested && (i.dataHandlerItemList = i.listUpdateRequested)
        }), e.on("opened", function() {
            i.domIsCreated ? i._initializeView() : i.once("domCreated", i._initializeView), i.listUpdateRequested ? (i.setItemList(i.listUpdateRequested), i.listUpdateRequested = null) : t.manualReset || i.resetDisplay()
        }), e.on("close", function() {
            i.lastOpenedWindow = i.currentOpenedWindow, i.currentOpenedWindow = null
        })
    }, n.prototype._createDom = function() {
        function e(e) {
            return e >= N && e < R ? h("ui.inventory.yellowWarningTooltip") : e >= R ? h("ui.inventory.redWarningTooltip") : ""
        }
        var t = this,
            i = this.storageUI = new w("div", {
                className: "StorageViewer"
            }),
            n = i.createChild("div", {
                className: "filterBox"
            }),
            o = this.leftArrow = n.appendChild(r("left"));
        d.addTooltip(o, h("ui.storage.advancedTransferts")), o.on("tap", function(e) {
            t.currentOpenedWindow && t.currentOpenedWindow.emit("leftArrow-tap", e)
        }), this._itemFilter = n.appendChild(new g({
            withTagBar: !0
        }));
        var a = this._itemFilter.getCurrentSorting();
        this.sortingCriterias = [a.by], this.sortingOrder = a.order, this.defaultSorting = this.sortingCriterias.toString() + "/" + this.sortingOrder, this.enablePresets && (this.presetsBox = i.appendChild(new A), this.presetsBox.on("setItemSlotTapped", function(e) {
            e.data && "placeholder" === e.data.mountLocation || t.currentOpenedWindow.emit("slot-tap", e)
        })), this._itemFilter.toggleCategoryDisplay(m.categories.preset, Boolean(this.enablePresets)), this._itemFilter.on("filter", function(e, i, n) {
            var o = t.filteringOptions.filterId !== e || t.filteringOptions.subFilterId !== i || t.filteringOptions.search !== n;
            o && (t.filteringOptions.filterId = e, t.filteringOptions.subFilterId = i, t.filteringOptions.search = n, t._showTagBar(), t.filterList(), t.presetsBox && t._enablePresetsView(e === m.categories.preset), t._updateFilter(), t._getAvailableSpaceAndUpdatePageSystem(), t._displayPage(0, !0), t.emit("filter", e))
        }), this._itemFilter.on("sort", function(e, i) {
            t._spinner.addSpinner("sorting"), f.forceReflow(t.slotsContainer, function() {
                t.sortBy(e, i)
            })
        }), o = this.rightArrow = n.appendChild(r("right")), d.addTooltip(o, h("ui.storage.advancedTransferts")), o.on("tap", function(e) {
            t.currentOpenedWindow && t.currentOpenedWindow.emit("rightArrow-tap", e)
        }), this.slotsContainer = i.createChild("div", {
            className: "slotBox"
        }), this.slotsMask = this.slotsContainer.createChild("div", {
            className: "slotsMask"
        }), this.slotsBox = this.slotsMask.createChild("div", {
            className: "slots"
        }), this.slotsBox.hide(), this.slotsBox.rootElement.addEventListener(y.end, function(e) {
            e.preventDefault()
        }, !1), this._spinner = new v(this.slotsContainer, (!0));
        var s = i.createChild("div", {
            className: "bottomContainer"
        });
        this.pagination = s.appendChild(new _), this.pagination.on("previous", function() {
            t._displayPage(t.currentPage - 1)
        }), this.pagination.on("next", function() {
            t._displayPage(t.currentPage + 1)
        }), this.pagination.on("page", function(e) {
            t._displayPage(e)
        }), this.pagination.setPageCount(this.pageCount), this.bankButton = s.appendChild(new C({
            className: ["greenButton", "bankButton"],
            text: h("tablet.bank"),
            scaleOnPress: !0
        })), this.bankButton.toggleDisplay(!1), this.bankButton.on("tap", function() {
            t._waitingForBankReply = !0, window.dofus.sendMessage("CharacterStatsRequestMessage")
        });
        var c = this.podContainer = i.createChild("div", {
                className: "podContainer"
            }),
            l = c.createChild("div", {
                className: "priceBox"
            });
        this.averagePrice = l.createChild("div", {
            className: "averagePrice",
            text: 0
        }), d.addTooltip(this.averagePrice, function() {
            var e = f.kamasToString(t.averagePriceValue);
            return new w("div", {
                text: h("ui.storage.estimatedValue") + h("ui.common.colon") + e
            })
        }), this.kamas = l.createChild("div", {
            className: "kamas",
            text: 0
        }), d.addTooltip(this.kamas, function() {
            var e = f.kamasToString(t.kamasValue);
            return new w("div", {
                text: h("ui.storage.ownedKamas") + h("ui.common.colon") + e
            })
        });
        var u = c.createChild("div", {
            className: "progressBarContainer"
        });
        this.barLabel = u.createChild("div", {
            text: h("tablet.common.pods") + ":",
            className: "label"
        }), this.progressBar = u.appendChild(new O({
            className: "green"
        })), d.addTooltip(this.progressBar, function() {
            return new w("div", {
                text: e(t.weight / t.maxWeight) + "\n(" + f.intToString(t.weight) + " / " + f.intToString(t.maxWeight) + ")"
            })
        }, {
            longTapExplanation: !0
        }), this.emit("domCreated")
    }, n.prototype._showTagBar = function() {
        var e = this.filteringOptions,
            t = e.filterId !== -1 || e.subFilterId !== -1 || Boolean(e.search),
            i = this.sortingCriterias.toString() + "/" + this.sortingOrder,
            n = i !== this.defaultSorting;
        this.slotsMask.toggleClassName("withFilter", t || n)
    }, n.prototype.setBarLabel = function(e) {
        this.barLabel.setText(e)
    }, n.prototype.displayBankButton = function(e) {
        this.bankButton.toggleDisplay(e)
    }, n.prototype._enablePresetsView = function(e) {
        this.pagination.toggleDisplay(!e), this.podContainer.toggleDisplay(!e), this.kamas.toggleDisplay(!e), this.displayBankButton(!e && this.showBankButton), this.presetsBox.toggleDisplay(e)
    }, n.prototype._filter = function(e, t, i, n, o, a) {
        for (var r = 0, s = this._filters.length; r < s; r += 1) {
            var c = this._filters[r];
            if (!c.call(this, e, t, i, n, o, a)) return !1
        }
        return !0
    }, n.prototype._displayPage = function(e, t) {
        var i = this;
        setTimeout(function() {
            if (i.isDisplayingPage) return void(i.displayingPageLastParam = {
                page: e,
                forceReload: t
            });
            if (i.isDisplayingPage = setTimeout(function() {
                    clearTimeout(i.isDisplayingPage), i.isDisplayingPage = null, i.displayingPageLastParam && (i._displayPage(i.displayingPageLastParam.page, i.displayingPageLastParam.forceReload), i.displayingPageLastParam = !1)
                }, B), !t) {
                if (i.currentPage === e || !i.currentOpenedWindow) return;
                if (e < 0 || e > i.pageCount - 1) return
            }
            i.currentPage = e, i.pagination.setCurrent(e), i.sortBy(i.sortingCriterias, i.sortingOrder)
        }, 0)
    }, n.prototype.addFilters = function(e) {
        for (var t = 0, i = e.length; t < i; t += 1) this._filters.indexOf(e[t]) === -1 && this._filters.push(e[t])
    }, n.prototype.removeFilter = function(e) {
        var t = this._filters;
        t.indexOf(e) !== -1 ? t.splice(t.indexOf(e), 1) : console.error(new Error("StorageViewer: remove unknown filter"))
    }, n.prototype.addTutorialFilter = function() {
        this._itemFilter.selectDefaultCategory(), this.addFilters([this._tutorialFilter])
    }, n.prototype.removeTutorialFilter = function() {
        this.removeFilter(this._tutorialFilter)
    }, n.prototype.clearFilters = function() {
        this._filters = [this._defaultFilter], this._filteredItemList = {}
    }, n.prototype._updateAveragePrice = function() {
        var e = 0;
        for (var t in this._filteredItemList) {
            var i = this.itemList[t];
            if (i) {
                var n = i.getItem();
                if (n) {
                    var o = n.averagePrice === -1 ? 0 : n.averagePrice;
                    e += o * this.itemsQuantityList[t]
                } else console.error(new Error("no item ref for " + (i.id || i.objectGID) + ", is an instance? " + i.isItemInstance + ", is yet initialised? " + i.isInitialised))
            }
        }
        this.averagePriceValue = e, this.averagePrice.setText(f.intToString(e))
    }, n.prototype._updateFilter = function() {
        var e = {};
        for (var t in this._filteredItemList) {
            var i = this._filteredItemList[t];
            if (i.position === D && this.itemsQuantityList[t] > 0) {
                if (!i.item) {
                    console.error(new Error('Missing the property "item" for itemInstance: ' + i.id));
                    continue
                }
                e[i.item.typeId] = !0
            }
        }
        this._itemFilter.updateSubFilters(Object.keys(e))
    }, n.prototype._filterItem = function(e) {
        var t = this.slotList[e.objectUID];
        if (t) {
            var i = this.filteringOptions.search ? f.simplifyString(this.filteringOptions.search) : null,
                n = this.filteringOptions.filterId !== g.filters.all,
                o = this.filteringOptions.subFilterId !== g.subFilters.all,
                a = m.getItemTypeMap(),
                r = a[e.item.typeId].category,
                s = this.itemsQuantityList[e.objectUID],
                c = s && this._filter(e, s, r, i, n, o);
            this._setDisplayedSlotCount(i, n, o), t.isVisible() && (this.displayedSlotCount -= 1), c ? this.displayedSlotCount += 1 : this.unSelectSlot(e.objectUID), this._updatePageSystem(), this.enableAveragePrice && this._updateAveragePrice()
        }
    }, n.prototype._setDisplayedSlotCount = function(e, t, i) {
        this.displayedSlotCount = 0;
        var n = m.getItemTypeMap();
        this._filteredItemList = {};
        for (var o in this.itemList) {
            var a = this.itemList[o];
            if (a.isInitialised) {
                var r = a.isLegendaryWeapon() ? m.categories.equipment : n[a.item.typeId].category,
                    s = this._filter(a, this.itemsQuantityList[o], r, e, t, i);
                s ? (this.displayedSlotCount += 1, this._filteredItemList[o] = a) : this.unSelectSlot(a.objectUID)
            }
        }
    }, n.prototype.filterList = function(e) {
        var t = this.filteringOptions.search ? f.simplifyString(this.filteringOptions.search) : null,
            i = this.filteringOptions.filterId !== g.filters.all,
            n = this.filteringOptions.subFilterId !== g.subFilters.all;
        t || i || n ? this._isTagBarHidden = !1 : this._isTagBarHidden = !0, this._setDisplayedSlotCount(t, i, n), this._updatePageSystem(e), this.enableAveragePrice && this._updateAveragePrice()
    }, n.prototype.getDisplayedItemsUIDs = function() {
        for (var e = [], t = this._sortedItemList, i = 0; i < t.length; i += 1) {
            var n = parseInt(t[i], 10);
            e.push(n)
        }
        return e
    }, n.prototype._createSlot = function(e) {
        var t = new M({
            itemData: e,
            enableContextMenu: this.enableSlotContext
        });
        t.storageViewer = this, t.setQuantity(e.quantity), t.setContextMenu("item", this.contextParams);
        var i = this;
        return t.on("tap", function(e) {
            t.selected ? i.currentOpenedWindow.emit("slot-doubletap", t, e.x, e.y) : t !== i.selectedSlot ? (i.selectSlot(t), i.currentOpenedWindow.emit("slot-tap", t, e.x, e.y)) : i.currentOpenedWindow.tapSelectedEmitsDoubleTap && i.currentOpenedWindow.emit("slot-doubletap", t, e.x, e.y)
        }), t.on("doubletap", function(e) {
            i.currentOpenedWindow.emit("slot-doubletap", this, e.x, e.y)
        }), t.on("dragStart", function() {
            u.setElementSource(this, i.currentOpenedWindow.id), i.dragSourceData.slot = t, i.currentOpenedWindow.emit("slot-dragStart", t)
        }), u.setDraggable(t, {
            backgroundImage: t.getImage(),
            prepareForDrag: s
        }, "storageViewer", i.dragSourceData), this.emit("slotCreated", t), t
    };
    var W = {
        none: function(e, t) {
            return e.objectUID - t.objectUID
        },
        name: function(e, t) {
            return e && e.item && e.item.nameId ? t && t.item && t.item.nameId ? e.item.nameId.localeCompare(t.item.nameId) : (console.error("Missing information for " + t && t.id), 0) : (console.error("Missing information for " + e && e.id), 0)
        },
        level: function(e, t) {
            return e.item.level - t.item.level
        },
        totalWeight: function(e, t) {
            return e.quantity * e.weight - t.quantity * t.weight
        },
        averagePrice: function(e, t) {
            var i = e.item.averagePrice,
                n = t.item.averagePrice;
            return i > 0 && n > 0 ? i - n : i > 0 ? 1 : n > 0 ? -1 : e.objectUID - t.objectUID
        },
        totalAveragePrice: function(e, t) {
            var i = e.item.averagePrice,
                n = t.item.averagePrice;
            return i > 0 && n > 0 ? e.quantity * i - t.quantity * n : i > 0 ? 1 : n > 0 ? -1 : e.objectUID - t.objectUID
        },
        category: function(e, t) {
            return e.item.type.nameId.localeCompare(t.item.type.nameId)
        }
    };
    n.prototype._displaySlotPage = function(e) {
        var t = this.currentOpenedWindow && this.currentOpenedWindow._storageViewer;
        if (!t || !t.slotsPerPage) return void(this.slotToShow = e);
        this.slotToShow = null;
        for (var i = this.slotsBox.getChildren(), n = 0, o = 0; o < i.length; o++) {
            var a = i[o];
            if (a.isVisible()) {
                if (a === e) return void this._displayPage(~~(n / t.slotsPerPage));
                n++
            }
        }
    }, n.prototype.sortBy = function(e, t) {
        var i = this.currentOpenedWindow;
        if (i && !this.isCurrentlySorting) {
            var n = this._filteredItemList,
                o = this,
                a = this.slotsBox.getChildren();
            a.forEach(function(e) {
                o.slotsBox.rootElement && e && o.slotsBox.removeChild(e)
            });
            var r = i._storageViewer;
            if (e && n) {
                this.sortingCriterias = e, this.sortingOrder = t;
                var s = this.sortingCriterias.toString() + "/" + this.sortingOrder !== this.defaultSorting;
                s && (this._isTagBarHidden = !1);
                var c = Object.keys(n)
                    .sort(function(i, o) {
                        return l(e, t, n[i], n[o])
                    });
                this._sortedItemList = c;
                for (var d = this.currentPage ? this.currentPage * r.slotsPerPage : 0, u = this.pageCount > this.currentPage && c.length > r.slotsPerPage ? (this.currentPage + 1) * r.slotsPerPage : c.length, p = d; p < u; p += 1) {
                    var h = this.slotList[c[p]];
                    if (!h) {
                        var f = parseInt(c[p], 10),
                            b = this.itemList[f];
                        if (!b) continue;
                        this.slotList[f] = this._createSlot(b), this.itemsQuantityList[f] = b.quantity, h = this.slotList[c[p]]
                    }
                    this.slotsBox.appendChild(h)
                }
                this._spinner.removeSpinner("sorting"), this._getAvailableSpaceAndUpdatePageSystem(), this._showTagBar()
            }
        }
    }, n.prototype.resetDisplay = function() {
        for (var e in this.itemList) {
            var t = this.itemsQuantityList[e] = this.itemList[e].quantity;
            this.slotList[e] && this.slotList[e].setQuantity(t)
        }
        var i = {
            silently: this._silently,
            rememberLastTabUsed: this._rememberLastTabUsed
        };
        this.resetFilter(i), this.pageCount = -1, this.currentPage = -1, this._updatePageSystem(), this.selectedSlot && this.unSelectSlot()
    }, n.prototype.unloadContent = function() {
        this._disconneting || (this.slotList = {}, this.slotsBox && this.slotsBox.clearContent(), this._filteredItemList = {}, this.itemsQuantityList = {}, this.itemList = [], this.selectedSlot = null, this.contentInitiated = !1, this.currentPage = -1, this.pageCount = -1, this.listUpdateRequested = this.dataHandlerItemList, this.dataHandlerItemList = null)
    }, n.prototype._disconnectionReset = function() {
        this.unloadContent(), this._sortedItemList = [], this.listUpdateRequested = null, this.dataHandlerItemList = null
    }, n.prototype.setItemList = function(e) {
        this._spinner && !this._spinner.isActive() && console.warn("Missing spinner", this.dragSourceData), this.slotsBox && this.slotsBox.clearContent(), this.slotList = {}, this.itemsQuantityList = {}, this.itemList = e, this.selectedSlot = null;
        for (var t in this.itemList) {
            var i = this.itemList[t];
            this.itemsQuantityList[t] = i.quantity
        }
        this.filterList(), this._updateFilter();
        var n = {
            silently: this._silently,
            rememberLastTabUsed: this._rememberLastTabUsed
        };
        this.resetFilter(n), this.sortBy(this.sortingCriterias, this.sortingOrder), this._spinner.removeSpinner("loading")
    }, n.prototype.modifyItem = function(e) {
        if (this.contentInitiated) {
            var t = e.objectUID,
                i = this.slotList[t];
            i && (this.unSelectSlot(t), i.destroy(), delete this.slotList[t]), this.slotList[t] = this._createSlot(e), this.itemList[t] = e, this.itemsQuantityList[t] = e.quantity, this._filterItem(e), this.filterList(), this._displayPage(this.currentPage, !0), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemModified", e)
        }
    }, n.prototype.moveItem = function(e) {
        if (this.contentInitiated) {
            var t = e.objectUID,
                i = this.slotList[t];
            i || (this.slotList[t] = this._createSlot(e)), this._filterItem(e), this._updateFilter(), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemMoved", e), this.filterList(), this._displayPage(this.currentPage, !0)
        }
    }, n.prototype.setItemQuantity = function(e, t) {
        var i = this.currentOpenedWindow;
        if (this.itemsQuantityList[e] = t, i && this.contentInitiated) {
            var n = this.slotList[e],
                o = this.itemList[e];
            return n || o ? void(n && (n.setQuantity(t), this._filterItem(this.itemList[e]), this._updateFilter(), this.filterList(), this._displayPage(this.currentPage, !0))) : void console.error(new Error("No slot with item UID " + e))
        }
    }, n.prototype.setItemsQuantity = function(e) {
        if (this.contentInitiated) {
            for (var t in e) {
                var i = this.slotList[t],
                    n = this.itemList[t],
                    o = e[t];
                if (!i && !n) return void console.error(new Error("No slot with item UID " + t));
                i && (i.setQuantity(o), this.itemsQuantityList[t] = o, this._filterItem(this.itemList[t]))
            }
            this._updateFilter(), this.filterList(), this._displayPage(this.currentPage, !0), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemsQuantity", e)
        }
    }, n.prototype.resetItemQuantity = function(e) {
        var t = this.itemList[e];
        t && this.setItemQuantity(e, t.quantity)
    }, n.prototype.resetItemsQuantity = function() {
        for (var e in this.itemList) this.resetItemQuantity(e);
        this.filterList(), this._displayPage(this.currentPage, !0)
    }, n.prototype._addItem = function(e) {
        var t = e.objectUID,
            i = this.slotList[t];
        i && this._removeItem(t), this.itemList[t] = e, this.itemsQuantityList[t] = e.quantity
    }, n.prototype.addItem = function(e) {
        this.contentInitiated && (this._addItem(e), this._filterItem(e), this._updateFilter(), this.filterList(), this._displayPage(this.currentPage, !0), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemAdded", e))
    }, n.prototype.addItems = function(e) {
        if (this.contentInitiated) {
            for (var t in e) {
                var i = e[t];
                this._addItem(i), this._filterItem(i)
            }
            this.filterList(), this._displayPage(this.currentPage, !0), this._updateFilter(), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemsAdded", e)
        }
    }, n.prototype._removeItem = function(e) {
        var t = this.slotList[e];
        t && (this.unSelectSlot(t.itemInstance.objectUID), t.destroy()), delete this.slotList[e], delete this.itemList[e], delete this.itemsQuantityList[e], delete this._filteredItemList[e]
    }, n.prototype.removeItems = function(e) {
        if (this.contentInitiated) {
            for (var t = 0, i = e.length; t < i; t += 1) this._removeItem(e[t]);
            this._updateFilter(), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemsRemoved", e), this.filterList(), this._displayPage(this.currentPage, !0)
        }
    }, n.prototype.removeItem = function(e) {
        this.contentInitiated && (this._removeItem(e), this._updateFilter(), this.currentOpenedWindow && this.currentOpenedWindow.emit("itemRemoved", e), this.filterList(), this._displayPage(this.currentPage, !0))
    }, n.prototype.setPodProgressBarValue = function(e) {
        this.progressBar.setValue(e), this.progressBar.toggleClassName("green", e < .75), this.progressBar.toggleClassName("yellow", e >= .75 && e < .9), this.progressBar.toggleClassName("orange", e >= .9 && e < 1), this.progressBar.toggleClassName("red", e >= 1), this.progressBar.toggleClassName("warnYellowIconCircle", e >= N && e < R), this.progressBar.toggleClassName("warnRedIconCircle", e >= R)
    }, n.prototype.setMaxWeight = function(e) {
        this.maxWeight = e || 1, this.contentInitiated && (this.setPodProgressBarValue(this.weight / this.maxWeight), this.currentOpenedWindow && this.currentOpenedWindow.emit("weightUpdated", this.weight, this.maxWeight))
    }, n.prototype.refreshSlotGauge = function() {
        this.setWeight(Object.keys(this.itemList)
            .length)
    }, n.prototype.setWeight = function(e, t) {
        this.weight = e, this.maxWeight = t || this.maxWeight, this.contentInitiated && (this.setPodProgressBarValue(this.weight / this.maxWeight), this.currentOpenedWindow && this.currentOpenedWindow.emit("weightUpdated", e, this.maxWeight))
    }, n.prototype.setKamas = function(e) {
        this.contentInitiated && (this.kamasValue = e, this.kamas.setText(f.intToString(e)), this.currentOpenedWindow && this.currentOpenedWindow.emit("kamasUpdated", e))
    }, n.prototype.selectAndShowSlotByGID = function(e) {
        for (var t in this.slotList) {
            var i = this.itemList[t];
            if (i.getProperty("id") === e && this._selectSlotAndDisplayPage(this.slotList[t])) return i
        }
        return null
    }, n.prototype.getSlotByUID = function(e) {
        return this.slotList[e]
    }, n.prototype.selectAndShowSlotByUID = function(e) {
        var t = this.slotList[e];
        return t && this._selectSlotAndDisplayPage(t) ? t.itemInstance : null
    }, n.prototype._selectSlotAndDisplayPage = function(e) {
        return !!e.isVisible() && (this.selectSlot(e), this._displaySlotPage(e), !0)
    }, n.prototype.selectSlot = function(e, t) {
        this.selectedSlot && e !== this.selectedSlot && this.selectedSlot.unselect(), e && e.select(t), this.selectedSlot = e
    }, n.prototype.unSelectSlot = function(e) {
        if (void 0 === e) return void(this.selectedSlot && (this.selectedSlot.unselect(), this.selectedSlot = null));
        var t = this.slotList[e];
        this.selectedSlot === t && (t.unselect(), this.selectedSlot = null)
    }, n.prototype.toggleSlotSelection = function(e) {
        var t = this.slotList[e];
        this.selectedSlot !== t ? (this.selectedSlot && this.selectedSlot.unselect(), t.select(), this.selectedSlot = t) : (t.unselect(), this.selectedSlot = null)
    }, n.prototype.getSelectedSlot = function() {
        return this.selectedSlot
    }, n.prototype._setupEvents = function(e) {
        var t = this;
        e.on("listUpdate", function(e) {
            t.currentOpenedWindow ? (t.setItemList(e), t.dataHandlerItemList = e) : t.listUpdateRequested = e
        }), e.on("unloaded", function() {
            t._disconnectionReset(), t._disconneting = !0
        }), e.on("itemAdded", function(e) {
            t.currentOpenedWindow && "craftInventory" === t.currentOpenedWindow.id && E.isWindowOpen("craftMagus") || t.addItem(e)
        }), e.on("itemsAdded", function(e) {
            t.currentOpenedWindow && "craftInventory" === t.currentOpenedWindow.id && E.isWindowOpen("craftMagus") || t.addItems(e)
        }), e.on("itemDeleted", function(e) {
            t.removeItem(e)
        }), e.on("itemsDeleted", function(e) {
            t.removeItems(e)
        }), e.on("itemModified", function(e) {
            t.modifyItem(e)
        }), e.on("itemMoved", function(e) {
            t.moveItem(e)
        }), e.on("itemQuantity", function(e, i) {
            t.currentOpenedWindow && "craftInventory" === t.currentOpenedWindow.id && E.isWindowOpen("craftMagus") || t.setItemQuantity(e, i)
        }), e.on("itemsQuantity", function(e) {
            t.setItemsQuantity(e)
        }), e.on("kamasUpdated", function(e) {
            t.setKamas(e)
        }), e.on("weightUpdated", function(e, i) {
            t.setWeight(e, i)
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(S.DISABLE_FILTER);
            t.domIsCreated && t.storageUI.toggleClassName("disableFilter", e)
        })
    }, n.prototype.getDisplayedQuantity = function(e) {
        return this.itemsQuantityList[e]
    }, n.prototype.getEquipmentFilterButtonForTuto = function() {
        return this._itemFilter.getEquipmentButton()
    }, n.prototype.getQuestFilterButtonForTuto = function() {
        return this._itemFilter.getQuestButton()
    }, n.prototype.getStorageFirstSlotForTuto = function() {
        var e = this.slotsBox.getChildren();
        return e[0]
    }, n.prototype.showEquippableItems = function() {
        this._itemFilter.selectCategory(g.filters.equipment)
    }, n.prototype.showTokens = function(e) {
        this._itemFilter.toggleCategoryDisplay(e, !0), this._itemFilter.selectCategory(e)
    }, n.prototype.resetFilter = function(e) {
        this._itemFilter && ("boolean" == typeof e.rememberLastTabUsed && (this._rememberLastTabUsed = e.rememberLastTabUsed), "boolean" == typeof e.silently && (this._silently = e.silently), this._itemFilter.reset(e))
    }
}
