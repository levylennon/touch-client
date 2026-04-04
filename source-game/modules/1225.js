function(e, t, i) {
    function n() {
        s.call(this, "div", {
            className: "GuildFilters"
        }), this._sortOrderMap = {}, this._currentSorting = l, this._createDom(), this._switchFilterInput("sort"), this._refreshSortOrder()
    }
    i(1226);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(86),
        s = i(72),
        c = i(945),
        l = "date",
        d = "DESC",
        u = ["sort", "ownerOrArea"],
        p = [],
        h = !0;
    a(n, s), e.exports = n, n.prototype._createDom = function(e) {
        this._subFiltersBox = this.createChild("div", {
            className: "subFiltersBox"
        }), this._switchFilteringBtn = this._subFiltersBox.appendChild(new r({
            className: "switchBtn",
            addIcon: !0,
            tooltip: o("ui.common.sortOrSearch")
        }, this._switchFilterInput.bind(this, "NEXT"))), this._setupSortSelector(e, "sort"), this._setupSecondSortSelector(!1)
    }, n.prototype._setupSortSelector = function(e, t) {
        this._sortBox = this._subFiltersBox.createChild("div", {
            className: "sortBox"
        }), this._sortSelector = this._sortBox.appendChild(this._createSortSelector(t)), this._sortSelector.setEnable(e), this._sortSelector.on("change", this._sortChangeHandler.bind(this)), this._sortOrderBtn = new r({
            className: "sortOrderBtn",
            addIcon: !0
        }, this._switchSortOrder.bind(this)), this._sortBox.appendChild(this._sortOrderBtn), this._refreshSortOrder()
    }, n.prototype._setupSecondSortSelector = function(e, t) {
        this._secondSortBox = this._subFiltersBox.createChild("div", {
            className: "sortBox"
        }), this._secondSortSelector = this._secondSortBox.appendChild(this._createSortSelector(t)), this._secondSortSelector.setEnable(e), this._secondSortSelector.on("change", this._sortChangeHandler.bind(this))
    }, n.prototype._removeFirstSortSelector = function() {
        this._subFiltersBox.removeChild(this._sortBox), this._sortBox.removeChild(this._sortSelector), this._sortBox.removeChild(this._sortOrderBtn)
    }, n.prototype._removeSecondSortSelector = function() {
        this._subFiltersBox.removeChild(this._secondSortBox), this._secondSortBox.removeChild(this._secondSortSelector)
    }, n.prototype._sortChangeHandler = function(e) {
        this._currentSorting = e, this._refreshSortOrder(), this._requestSort()
    }, n.prototype._switchSortOrder = function() {
        var e = this._sortOrderMap[this._currentSorting];
        this._sortOrderMap[this._currentSorting] = "ASC" === e ? "DESC" : "ASC", this._refreshSortOrder(), this._requestSort()
    }, n.prototype._resetSortOrder = function() {
        this._currentSorting = l, this._sortOrderMap[l] = d, this._sortSelector.selectFirst(), this._refreshSortOrder(), this._requestSort()
    }, n.prototype.getCurrentSorting = function() {
        var e = this._sortOrderMap[this._currentSorting];
        return {
            by: this._currentSorting,
            order: e
        }
    }, n.prototype._refreshSortOrder = function() {
        var e = this._sortOrderMap[this._currentSorting];
        this._sortOrderBtn.toggleClassName("ascending", "ASC" === e), this._sortOrderBtn.toggleClassName("descending", "DESC" === e)
    }, n.prototype._requestSort = function() {
        var e = ["collectorCallerName", "subAreaName"];
        return "ownerOrArea" === this._filterDisplayed && e.indexOf(this._currentSorting) !== -1 ? (this._removeSecondSortSelector(), void this._setupSecondSortSelector(h, this._currentSorting)) : void this.emit("sort", [this._currentSorting], this._sortOrderMap[this._currentSorting])
    }, n.prototype._createSortSelector = function(e) {
        var t, i = [],
            n = !1,
            a = {};
        if ("ownerOrArea" === e) i = [{
            value: l,
            defOrder: d,
            text: o("ui.common.sortBy.date")
        }, {
            value: "collectorCallerName",
            defOrder: "ASC",
            text: o("ui.common.filterBy.owner")
        }, {
            value: "subAreaName",
            defOrder: "ASC",
            text: o("ui.common.filterBy.area")
        }];
        else if ("sort" === e) i = [{
            value: l,
            defOrder: d,
            text: o("ui.common.sortBy.date")
        }, {
            value: "pods",
            defOrder: "ASC",
            text: o("ui.common.sortBy.pods")
        }, {
            value: "itemsValue",
            defOrder: "ASC",
            text: o("ui.common.sortBy.value")
        }, {
            value: "collectorCallerName",
            defOrder: "ASC",
            text: o("ui.common.sortBy.owner")
        }, {
            value: "experience",
            defOrder: "ASC",
            text: o("ui.common.sortBy.experience")
        }, {
            value: "subAreaName",
            defOrder: "ASC",
            text: o("ui.common.sortBy.area")
        }];
        else if ("collectorCallerName" === e) {
            i = [{
                value: l,
                defOrder: d,
                text: o("ui.common.sortBy.date")
            }];
            for (var r in p) {
                t = p[r];
                var s = this._getTaxCollectorOwner(t);
                a = {
                    value: "collectorCallerName-" + s,
                    defOrder: "ASC",
                    text: s
                };
                for (var u = 0; u < i.length; u++)
                    if (i[u].value === a.value) {
                        n = !0;
                        break
                    } n || i.push(a)
            }
        } else if ("subAreaName" === e) {
            i = [{
                value: l,
                defOrder: d,
                text: o("ui.common.sortBy.date")
            }];
            for (var h in p) {
                t = p[h];
                var f = this._getTaxCollectorSubArea(t);
                for (a = {
                        value: "subAreaName-" + f,
                        defOrder: "ASC",
                        text: f
                    }, n = !1, u = 0; u < i.length; u++)
                    if (i[u].value === a.value) {
                        n = !0;
                        break
                    } n || i.push(a)
            }
        } else i = [{
            value: l,
            defOrder: d,
            text: o("ui.common.sortBy.date")
        }];
        var b = new c({
                className: "sortSelector"
            }),
            m = {};
        for (u = 0; u < i.length; u++) {
            var M = i[u];
            b.addOption(M.text, M.value), this._sortOrderMap[M.value] = M.defOrder, m[M.value] = u
        }
        return b
    }, n.prototype._switchFilterInput = function(e) {
        var t = this._filterDisplayed;
        if ("NEXT" === e) {
            var i = u.indexOf(this._filterDisplayed),
                n = u.length;
            i = (i + 1) % n, this._filterDisplayed = u[i]
        } else this._filterDisplayed = e;
        this._switchFilteringBtn && this._switchFilteringBtn.replaceClassNames([t], [this._filterDisplayed]), this._removeFirstSortSelector(), this._removeSecondSortSelector(), "sort" === this._filterDisplayed ? (this._setupSortSelector(h, "sort"), this._setupSecondSortSelector(!h, this._filterDisplayed)) : (this._setupSortSelector(h, "ownerOrArea"), this._setupSecondSortSelector(h, this._filterDisplayed))
    }, n.prototype.setTaxCollectorsList = function(e) {
        p = e
    }, n.prototype._getTaxCollectorOwner = function(e) {
        return e.additionalInfos.collectorCallerName
    }, n.prototype._getTaxCollectorSubArea = function(e) {
        return e.enrichData.subAreaName
    }
}
