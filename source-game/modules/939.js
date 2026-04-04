function(e, t, i) {
    function n(e) {
        p.call(this, "div", {
            className: "ItemFilters"
        }), e = e || {}, this._withAllCategoriesBtn = !e.noAllCategory, this._withSorting = !e.noSorting, this._withTagBar = Boolean(e.withTagBar), this._selectedFilter = null, this._selectedSubFilter = null, this._sortOrderMap = {}, this._currentSorting = m, this._currentText = "", this._filterButtonList = {}, this._selectList = {}, this._subFiltersSelect = [], this._createDom(), this._switchFilterInput("category"), this._refreshSortOrder()
    }

    function o() {
        this.myItemFilters._tapOnMainCategory(this.filter)
    }

    function a() {
        var e = this.itemFilters;
        switch (e._delFilterButton(this.filterName), this.filterName) {
            case "CAT":
                return e._updateFilterDisplay(_);
            case "SUBCAT":
                return e._updateFilterDisplay(e._selectedFilter, _);
            case "TEXT":
                return e._textChangedHandler("");
            case "SORTING":
                return e._resetSortOrder();
            default:
                console.error("Invalid filter " + this.filterName)
        }
    }
    i(940);
    var r = i(88)
        .addTooltip,
        s = i(941),
        c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(469),
        u = i(86),
        p = i(72),
        h = i(943),
        f = i(945),
        b = i(480),
        m = "none",
        M = "DESC",
        g = "*",
        _ = -1,
        A = {
            all: _
        };
    for (var O in d.categories) A[O] = d.categories[O];
    var v, y, z, w = {
            all: _
        },
        T = [A.all, A.equipment, A.cosmetics, A.consumables, A.resources, A.quest, A.preset],
        C = {
            EQUIPEMENT: 1,
            COSMETICS: 2,
            CONSUMABLES: 3,
            RESSOURCES: 4,
            QUEST: 5
        },
        I = ["category", "search", "sort"],
        S = _;
    l(n, p), e.exports = n, n.filters = A, n.subFilters = w, n.prototype._createDom = function() {
        v || (v = [c("ui.common.all"), c("ui.common.equipement"), c("ui.common.cosmetics"), c("ui.common.usableItems"), c("ui.common.ressources"), c("ui.common.quest.objects"), c("ui.common.presets")]);
        var e = this.createChild("div", {
            className: "filters"
        });
        this._filterBtnMap = {}, this._subFiltersBox = this.createChild("div", {
            className: "subFiltersBox"
        }), this._switchFilteringBtn = this._subFiltersBox.appendChild(new u({
            className: "switchBtn",
            addIcon: !0,
            tooltip: c("ui.common.sortOrSearch")
        }, this._switchFilterInput.bind(this, "NEXT"))), this._categoryBox = this._subFiltersBox.createChild("div", {
            className: "categories"
        });
        for (var t = e.createChild("div", {
                className: "content"
            }), i = this._itemTypeChangeHandler.bind(this), n = 0, a = T.length; n < a; n++) {
            var s = T[n];
            if (s !== _) {
                var l = ["filter", d.getCategoryName(s) || "all"],
                    p = t.appendChild(new u({
                        className: l
                    }, o));
                this._filterButtonList[s] = p, this._filterBtnMap[s] = p, r(p, v[n]), p.filter = s, p.myItemFilters = this, p.createChild("div", {
                    className: "icon"
                })
            }
            var b = this._categoryBox.appendChild(new f({
                className: "subFilterSelect"
            }));
            this._subFiltersSelect.push(b), b.on("change", i), b.hide(), this._selectList[s] = {
                wdSelect: b
            }
        }
        if (this._searchBox = this._subFiltersBox.appendChild(new h({
                isLiveSearch: !0
            })), this._searchBox.on("search", this._textChangedHandler.bind(this)), this._searchBox.setPlaceholder(c("tablet.common.filter")), this._sortBox = this._subFiltersBox.createChild("div", {
                className: "sortBox"
            }), this._sortSelector = this._sortBox.appendChild(this._createSortSelector()), this._sortSelector.on("change", this._sortChangeHandler.bind(this)), this._sortOrderBtn = new u({
                className: "sortOrderBtn",
                addIcon: !0
            }, this._switchSortOrder.bind(this)), this._sortBox.appendChild(this._sortOrderBtn), this._withTagBar) {
            var m = this.createChild("div", {
                className: "tagZone"
            });
            this._tagBar = m.createChild("div", {
                className: "tagBar"
            }), this._tagButtons = []
        }
    }, n.prototype._itemTypeChangeHandler = function(e) {
        this._updateFilterDisplay(this._selectedFilter, parseInt(e, 10))
    }, n.prototype._sortChangeHandler = function(e) {
        this._currentSorting = e, this._refreshSortOrder(), this._requestSort()
    }, n.prototype._switchSortOrder = function() {
        var e = this._sortOrderMap[this._currentSorting],
            t = "ASC" === e ? "DESC" : "ASC";
        this._sortOrderMap[this._currentSorting] = t, this._refreshSortOrder(), this._requestSort()
    }, n.prototype._resetSortOrder = function() {
        this._currentSorting = m, this._sortOrderMap[m] = M, this._sortSelector.selectFirst(), this._refreshSortOrder(), this._requestSort()
    }, n.prototype.getCurrentSorting = function() {
        var e = this._sortOrderMap[this._currentSorting];
        return {
            by: this._currentSorting,
            order: e
        }
    }, n.prototype._refreshSortOrder = function() {
        var e = this._sortOrderMap[this._currentSorting];
        this._sortOrderBtn.toggleClassName("ascending", "ASC" === e), this._sortOrderBtn.toggleClassName("descending", "DESC" === e), this._updateSortingTag()
    }, n.prototype._updateSortingTag = function() {
        if (this._withTagBar) {
            this._delFilterButton("SORTING");
            var e = this._sortOrderMap[this._currentSorting];
            if (this._currentSorting !== m || e !== M) {
                var t = y[z[this._currentSorting]].labels,
                    i = t["ASC" === e ? 0 : 1];
                this._addFilterButton("SORTING", i)
                    .addClassNames("sorting")
            }
        }
    }, n.prototype._requestSort = function() {
        this.emit("sort", [this._currentSorting], this._sortOrderMap[this._currentSorting])
    }, n.prototype._createSortSelector = function() {
        var e = "A..Z",
            t = "Z..A",
            i = c("ui.common.category"),
            n = c("ui.common.quantity"),
            o = c("tablet.filter.light"),
            a = c("tablet.filter.heavy"),
            r = c("tablet.filter.cheap"),
            s = c("tablet.filter.costly");
        y = [{
            value: m,
            defOrder: M,
            text: c("tablet.sortBy.default"),
            labels: [c("tablet.filter.older"), "new"]
        }, {
            value: "name",
            defOrder: "ASC",
            text: c("tablet.sortBy.name"),
            labels: [e, t]
        }, {
            value: "weight",
            defOrder: "DESC",
            text: c("tablet.sortBy.weight"),
            labels: [o, a]
        }, {
            value: "totalWeight",
            defOrder: "DESC",
            text: c("tablet.sortBy.weight.lot"),
            labels: [g + o, g + a]
        }, {
            value: "quantity",
            defOrder: "DESC",
            text: c("tablet.sortBy.quantity"),
            labels: ["1..999 " + n, "999..1 " + n]
        }, {
            value: "averagePrice",
            defOrder: "DESC",
            text: c("tablet.sortBy.averageprice"),
            labels: [r, s]
        }, {
            value: "totalAveragePrice",
            defOrder: "DESC",
            text: c("tablet.sortBy.averageprice.lot"),
            labels: [g + r, g + s]
        }, {
            value: "level",
            defOrder: "DESC",
            text: c("tablet.sortBy.level"),
            labels: [c("tablet.filter.lowLevel"), c("tablet.filter.highLevel")]
        }, {
            value: "category",
            defOrder: "ASC",
            text: c("tablet.sortBy.category"),
            labels: [e + " " + i, t + " " + i]
        }];
        var l = new f({
            className: "sortSelector",
            removeWords: c("tablet.sortBy.removeWords")
        });
        z = {};
        for (var d = 0; d < y.length; d++) {
            var u = y[d];
            l.addOption(u.text, u.value), this._sortOrderMap[u.value] = u.defOrder, z[u.value] = d
        }
        return l
    }, n.prototype._switchFilterInput = function(e) {
        var t = this._filterDisplayed;
        if ("NEXT" === e) {
            var i = I.indexOf(this._filterDisplayed),
                n = this._withSorting ? I.length : I.length - 1;
            i = (i + 1) % n, this._filterDisplayed = I[i]
        } else this._filterDisplayed = e;
        this._switchFilteringBtn.replaceClassNames([t], [this._filterDisplayed]), this._categoryBox.toggleDisplay("category" === this._filterDisplayed), this._searchBox.toggleDisplay("search" === this._filterDisplayed), this._sortBox.toggleDisplay("sort" === this._filterDisplayed)
    }, n.prototype._setCategoryFilter = function(e, t) {
        var i = !1;
        if (e === this._selectedFilter && (e = A.all), e !== this._selectedFilter) {
            if (this._filterButtonList[this._selectedFilter] ? (this._filterButtonList[this._selectedFilter].delClassNames("selected"), this._selectList[this._selectedFilter].wdSelect.hide()) : this._selectedFilter === _ && this._selectList[this._selectedFilter].wdSelect.hide(), this._selectedFilter = e, this._filterButtonList[e] && this._filterButtonList[e].addClassNames("selected"), e === A.preset) return this._subFiltersBox.hide(), this._withTagBar && this._tagBar.hide(), !0;
            if (this._subFiltersBox.show(), this._withTagBar && (this._tagBar.show(), this._delFilterButton("CAT"), e !== _)) {
                var n = 0,
                    o = d.categories;
                switch (e) {
                    case o.equipment:
                        n = C.EQUIPEMENT;
                        break;
                    case o.consumables:
                        n = C.CONSUMABLES;
                        break;
                    case o.resources:
                        n = C.RESSOURCES;
                        break;
                    case o.quest:
                        n = C.QUEST;
                        break;
                    case o.cosmetics:
                        n = C.COSMETICS
                }
                this._addFilterButton("CAT", v[n])
            }
            var a = this._selectList[e].wdSelect;
            a.show(), i = !0
        }
        return !(!i && void 0 === t) && (void 0 === t && (t = this._selectedSubFilter), S = e, this._setSubCategoryFilter(t) | i)
    }, n.prototype._setSubCategoryFilter = function(e) {
        var t = this._selectList[this._selectedFilter].wdSelect;
        return t.hasValue(e) ? t.select(e, !0) : (e = t.selectFirst(!0), void 0 === e && (e = _)), e !== this._selectedSubFilter && (this._selectedSubFilter = e, this._withTagBar && (this._delFilterButton("SUBCAT"), e !== _ && this._addFilterButton("SUBCAT", t.getCurrentText())), !0)
    }, n.prototype._setTextFilter = function(e) {
        return e !== this._currentText && (this._searchBox.setValue(e), this._currentText = e, this._withTagBar && (this._delFilterButton("TEXT"), e && this._addFilterButton("TEXT", '"' + e + '"')), !0)
    }, n.prototype._textChangedHandler = function(e) {
        this._setTextFilter(e) && this._requestFilter()
    }, n.prototype._updateFilterDisplay = function(e, t) {
        this._setCategoryFilter(e, t) && this._requestFilter()
    }, n.prototype._requestFilter = function() {
        this.emit("filter", this._selectedFilter, this._selectedSubFilter, this._searchBox.getValue())
    }, n.prototype._tapOnMainCategory = function(e) {
        this._updateFilterDisplay(e)
    }, n.prototype.selectCategory = function(e) {
        this._switchFilterInput("category"), this._updateFilterDisplay(e, _)
    }, n.prototype.selectDefaultCategory = function() {
        this.selectCategory(_)
    }, n.prototype.toggleCategoryDisplay = function(e, t) {
        this._filterBtnMap[e].toggleDisplay(t)
    }, n.prototype.selectSubfilter = function(e) {
        var t = this._selectedFilter,
            i = this._selectList[t].wdSelect;
        return !!i.hasValue(e) && (i.select(e, !0), this._updateFilterDisplay(t, e), !0)
    }, n.prototype.updateSubFilters = function(e) {
        var t = d.getItemTypeMap(),
            i = e.sort(function(e, i) {
                return t[e].nameId.localeCompare(t[i].nameId)
            });
        for (var n in this._selectList) this._selectList[n].wdSelect.clearContent(), this._withAllCategoriesBtn && this._selectList[n].wdSelect.addOption(c("ui.common.allTypesForObject"), w.all);
        for (var o = this._selectList[A.all], a = 0, r = i.length; a < r; a += 1) {
            var s = t[i[a]],
                l = this._selectList[s.category];
            l.wdSelect.addOption(s.nameId, s.id), o.wdSelect.addOption(s.nameId, s.id)
        }
    }, n.prototype.reset = function(e) {
        e = e || {};
        var t = _;
        e.rememberLastTabUsed && (t = S);
        var i = this._setCategoryFilter(t, t),
            n = this._setTextFilter("");
        (!e.silently && i || n) && this._requestFilter()
    };
    var E = 0;
    n.prototype.getEquipmentButton = function() {
        return this._filterBtnMap[E]
    }, n.prototype.getQuestButton = function() {
        return this._filterBtnMap[b.questFilterId]
    };
    var L = {
        equipment: !0,
        consumables: !0,
        resources: !0,
        quest: !1,
        preset: !1,
        cosmetics: !0
    };
    n.prototype.setAvailableCategories = function(e) {
        for (var t in d.categories) {
            var i = Boolean(e && e[t]) || L[t];
            this.toggleCategoryDisplay(d.categories[t], i), this._selectedFilter !== d.categories[t] || i || this.selectCategory(_)
        }
    }, n.prototype._addFilterButton = function(e, t) {
        var i = {};
        t[0] === g ? (t = t.substr(1), i.withIcon = !0, i.tooltip = t + " (" + c("tablet.lot") + ")") : i.tooltip = t;
        var n = new s(t, a, e, i);
        return n.itemFilters = this, this._tagButtons.push(n), this._tagBar.appendChild(n), this._tagBar.show(), n
    }, n.prototype._delFilterButton = function(e) {
        for (var t = 0; t < this._tagButtons.length; t++) {
            var i = this._tagButtons[t];
            if (i.filterName === e) return this._tagBar.removeChild(i), void this._tagButtons.splice(t, 1)
        }
    }
}
