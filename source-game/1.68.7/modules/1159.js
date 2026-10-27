function(e, t, i) {
    function n() {
        return this.tooltipContent || (this.tooltipContent = new d(this.rowContent)), this.tooltipContent
    }

    function o(e, t, i) {
        f.call(this, "div", {
            className: "ShopViewer"
        }), i = i || {}, this.itemTypes = {}, this._totalPrice = 0, this._createDom(e, t, i)
    }

    function a(e, t) {
        return e.objectGID === t
    }
    i(1160);
    var r = i(88)
        .addTooltip,
        s = i(16),
        c = i(56)
        .inherits,
        l = i(939),
        d = i(875),
        u = i(469),
        p = i(91)
        .playUiSound,
        h = i(765),
        f = i(72);
    c(o, f), e.exports = o, o.prototype._createDom = function(e, t, i) {
        var n = this;
        i.manualFiltering || (this.itemFilter = this.appendChild(new l({
            noSorting: !0
        }))), this.table = this.appendChild(new h(e, t, i.tableOption)), this.table.on("rowSlidedLeft", function(e, t) {
            p("RIGHT_TO_LEFT_SWITCH"), n.emit("rowSlidedLeft", e, t)
        }), this.table.on("rowSlidedRight", function(e, t) {
            p("LEFT_TO_RIGHT_SWITCH"), n.emit("rowSlidedRight", e, t)
        }), this.table.on("rowAdded", function(e, t, i) {
            i.tooltipContent = null, n.addBuyCriterion(t, i)
        }), this.table.on("rowTap", function(e, t) {
            p("GEN_BUTTON"), n.emit("itemSelected", t, Boolean(e.notBuyable))
        }), this.itemFilter && this._setupFiltering()
    }, o.prototype.setHeader = function(e) {
        this.table.setColumnHeader("name", e)
    }, o.prototype._setupFiltering = function() {
        var e, t, i, n, o, a = u.getItemTypeMap(),
            r = this;
        this.itemFilter.on("filter", function(a, c, d) {
            e = a, t = a !== l.filters.all, i = c, n = c !== l.subFilters.all, o = d ? s.simplifyString(d) : null, r.table.filter();
            var u = r.table.rows.getChildren();
            if (u) {
                var p = 0;
                for (var h in u) {
                    var f = u[h];
                    f.isVisible() && f.rowContent && f.rowContent.objectPrice && (p += f.rowContent.objectPrice)
                }
                p > 0 && (r._totalPrice = p, r.emit("totalPriceUpdated", r._totalPrice))
            }
        }), this.table.addFilter(function(r) {
            var c = r.getItem(),
                l = a[r.item.typeId].category;
            if (t && l !== e) return !1;
            if (n && c.typeId !== i) return !1;
            if (o && r.isFullSoulStone())
                for (var d = 0; d < r.effects.length; d++)
                    if (r.effects[d] && s.simplifyString(r.effects[d].description)
                        .indexOf(o) !== -1) return !0;
            return !o || c.getNameForSearch()
                .indexOf(o) !== -1
        })
    }, o.prototype.filter = function(e) {
        this.table.filter(e)
    }, o.prototype._unregisterItemType = function(e) {
        var t = this.table.getRow(e);
        if (t) {
            var i = t.rowContent,
                n = i.getItem()
                .typeId;
            this.itemTypes[n] && (this.itemTypes[n]--, 0 === this.itemTypes[n] && delete this.itemTypes[n])
        }
    }, o.prototype._registerItemType = function(e) {
        var t = e.getItem()
            .typeId;
        return this.itemTypes[t] ? (this.itemTypes[t]++, !1) : (this.itemTypes[t] = 1, !0)
    }, o.prototype._collectItemTypesAndIncrementTotalPrice = function(e, t) {
        if (this.itemFilter) {
            for (var i = !1, n = 0; n < e.length; n++) {
                t && this._incrementTotalPrice(e[n].objectPrice);
                var o = this.table.getIdFn(e[n]);
                this.table.hasRow(o) || (i |= this._registerItemType(e[n]))
            }
            t && this.emit("totalPriceUpdated", this._totalPrice), i && this.itemFilter.updateSubFilters(Object.keys(this.itemTypes))
        }
    }, o.prototype.removeItems = function(e, t) {
        for (var i = 0; i < e.length; i++) t && this._decrementTotalPrice(this.getItem(e[i])
            .objectPrice), this._unregisterItemType(e[i]);
        this.table.delRows(e, !0), t && this.emit("totalPriceUpdated", this._totalPrice)
    }, o.prototype.getItemCount = function() {
        return this.table.getRowCount()
    }, o.prototype.selectItem = function(e) {
        this.table.selectRow(e)
    }, o.prototype.getItem = function(e) {
        var t = this.table.getRow(e);
        return t ? t.rowContent : null
    }, o.prototype.findItemByGID = function(e) {
        return this.table.findRow(a, e)
    }, o.prototype.selectFilter = function(e) {
        this.itemFilter.selectSubfilter(e)
    }, o.prototype.clearContent = function() {
        this.itemTypes = {}, this._totalPrice = 0, this.table.clearContent()
    }, o.prototype._incrementTotalPrice = function(e) {
        this._totalPrice += e
    }, o.prototype._decrementTotalPrice = function(e) {
        this._totalPrice -= e
    }, o.prototype.setItemList = function(e, t) {
        this.clearContent(), this.itemFilter && (this._collectItemTypesAndIncrementTotalPrice(e, t), e.length || this.itemFilter.updateSubFilters([]), this.itemFilter.reset()), this.table.addList(e, !0)
    }, o.prototype.addItems = function(e, t) {
        this._collectItemTypesAndIncrementTotalPrice(e, t), this.table.addList(e, !0, !0)
    }, o.prototype.addItemsAndHighlightThem = function(e, t) {
        this._collectItemTypesAndIncrementTotalPrice(e, t), this.selectFilter(e[0].getProperty("typeId")), this.table.addList(e, !0, !0), this.selectItem(e[0].objectUID)
    }, o.prototype.setPlaceholder = function(e) {
        this.table.setPlaceholderText(e)
    }, o.prototype.refresh = function() {
        this.table.placeholder && this.table.placeholder.refresh(), this.table.scroller.refresh()
    }, o.prototype.addBuyCriterion = function(e, t) {
        if (t && e) return e.buyCriterion ? window.gui.criterionManager.evaluateAndFormatConditions(e.buyCriterion, {
            item: e
        }, null, function(i, o) {
            i || (t.addClassNames("notBuyable"), t.notBuyable = !0), e.buyConditionsFormatted = o, r(t, n)
        }) : void 0
    }
}
