function(e, t, i) {
    function n(e) {
        function t(e, t) {
            function n(e) {
                i.filterNbSlots[o.slotNumber] = e, T && (i._currentPage = 0, i.pagination.setCurrent(0), i._search())
            }
            var o = i.filterCheckboxes.appendChild(new p(e, {
                defaultValue: t
            }));
            return o.slotNumber = e, o.on("change", n), o
        }
        e = e || {};
        var i = this;
        l.call(this, "div", {
            className: "RecipeList"
        }), T = !1, this._filterCraftableOnly = e.filterCraftableOnly, this.isInCraft = Boolean(e.isInCraft), this.shouldNotSelect = Boolean(e.shouldNotSelect), this.isMenuOnItemDisabled = Boolean(e.isMenuOnItemDisabled), this.selectedRecipe = null, this.tappedRecipe = null, this.usingItemId = null, this._currentPage = -1, this._isItemDataPending = !1, this._recipesData = [], this._currentFilteredRecipesList = [];
        var n = this._searchBar = this.createChild("div", {
                className: "searchBar"
            }),
            o = this._searchLine = n.createChild("div", {
                className: "searchLine"
            });
        o.createChild("div", {
            className: "label",
            text: u("ui.common.recipes", 2)
        }), this._searchInput = o.appendChild(new A), this._searchInput.on("search", function() {
            i._currentPage = 0, i.pagination.setCurrent(0), i._search()
        });
        var a = this._ingredientsLine = n.createChild("div", {
            className: "ingredientsLine"
        });
        a.createChild("div", {
            className: "label",
            text: u("ui.common.ingredients")
        }), this.filterNbSlots = {}, this.filterText = "", this.filterCheckboxes = {}, this.filterCheckboxes = a.createChild("div", {
            className: "filterCheckboxes"
        });
        for (var r = 1; r <= z; r += 1) this.filterCheckboxes[r] = t(r, !0), i.filterNbSlots[r] = !0;
        this.recipesWrapper = this.appendChild(new d({
            className: ["recipesWrapper", "spinner"]
        })), this._recipesPlaceholder = this.recipesWrapper.createChild("div", {
            className: "recipesPlaceholder",
            hidden: !0
        }), this._recipesPlaceholder.createChild("div", {
            className: "recipesPlaceholderText",
            text: u("ui.craft.noCraftAvailable")
        }), this.recipesList = this.recipesWrapper.content, this.isInCraft && (this._checkboxWrapper = this.createChild("div", {
            className: "checkboxWrapper"
        }), this._showCraftableCheckbox = this._checkboxWrapper.appendChild(new p(u("ui.craft.possibleRecipes"), {
            defaultValue: !0
        })), this._showCraftableCheckbox.addClassNames("possibleRecipeCheckbox"), this._showCraftableCheckbox.on("change", function(e) {
            i.filterCraftable(e)
        })), this.pagination = this.appendChild(new g), this.pagination.on("previous", function() {
            i._displayPage(i._currentPage - 1)
        }), this.pagination.on("next", function() {
            i._displayPage(i._currentPage + 1)
        }), this.pagination.on("page", function(e) {
            i._displayPage(e)
        }), window.gui.scenarioManager.on("stepChanged", function() {
            window.gui.scenarioManager.isBehaviourEnabled(v.ENABLE_MAX_QUANTITY_INGREDIENT) && i.recipesList.getChildren()
                .forEach(function(e) {
                    e.refreshQuantities()
                })
        })
    }

    function o() {
        this.recipeBox.recipeList._selectRecipe(this.recipeBox)
    }

    function a() {
        this.recipeList._tapOnRecipeBoxHandler(this)
    }

    function r(e, t) {
        this.recipeList._tapOnRecipeBoxItemHandler(this, e, t)
    }

    function s() {
        this.recipeList._selectRecipe(this)
    }
    i(1075);
    var c = i(56)
        .inherits,
        l = i(72),
        d = i(453),
        u = i(17)
        .getText,
        p = i(594),
        h = i(469),
        f = i(18),
        b = i(63),
        m = i(1076),
        M = i(418),
        g = i(867),
        _ = i(588),
        A = i(943),
        O = i(880),
        v = i(129),
        y = i(16)
        .simplifyString,
        z = 8,
        w = 25,
        T = !1;
    c(n, l), e.exports = n, n.prototype._setPageCount = function(e) {
        var t = Math.ceil(e.length / w) || 1;
        t !== this._pageCount && (this._pageCount = t, this._currentPage = 0, this.pagination.setCurrent(0), this.pagination.setPageCount(this._pageCount))
    }, n.prototype._updatePageCount = function(e) {
        var t = Math.ceil(e.length / w) || 1;
        t !== this._pageCount && (this._pageCount = t, this._displayPage(0), this.pagination.setPageCount(this._pageCount))
    }, n.prototype._displayPage = function(e) {
        this._currentPage !== e && (e < 0 || e > this._pageCount - 1 || (this._currentPage = e, this.pagination.setCurrent(e), this._search()))
    }, n.prototype.addRecipes = function(e, t, i) {
        this.recipesList.clearContent(), this.recipesWrapper.addClassNames("spinner"), t = t || {}, this.usingItemId = t.usingItemId, this.tappedRecipe = null;
        var n = this;
        if (i = i || function() {}, 0 === e.length) return this._recipesPlaceholder.show(), this.recipesWrapper.delClassNames("spinner"), this._setPageCount(e), this.recipesWrapper.refresh(), i();
        this._recipesPlaceholder.hide(), this._nbCase = t.nbCase || this._nbCase, this._isItemDataPending || (this._ingredientsLine.hide(), this._searchLine.hide(), this._searchBar.addClassNames("spinner"), this.isInCraft && (this._showCraftableCheckbox.hide(), this._checkboxWrapper.addClassNames("spinner")));
        var o = (new Date)
            .getTime();
        this._timestamp = o;
        var a = [];
        t.nbCase && t.nbCase < z ? e.forEach(function(e) {
            e.ingredientIds.length <= t.nbCase && a.push(e)
        }) : e.forEach(function(e) {
            a.push(e)
        });
        for (var r = {}, s = [], c = this._currentPage === -1 ? 0 : this._currentPage, l = (c + 1) * w < a.length, d = l ? (c + 1) * w : a.length, u = c * w; u < d; u += 1) {
            var p = a[u];
            if (p) {
                s.push(p);
                var b = p.ingredientIds;
                r[p.resultId] = !0;
                for (var m = 0, M = b.length; m < M; m += 1) {
                    var g = b[m];
                    r[g] = !0
                }
            }
        }
        r = Object.keys(r), h.getItems(r, function(r) {
            return r ? (console.error("Failed to get ingredients", r), i(r)) : n._timestamp !== o ? i() : f.eachSeries(s, function(e, t) {
                n._addRecipe(e, t)
            }, function(o) {
                if (o) return console.error(o), i(o);
                if (n._hasBeenReset()) return i();
                if (t.nbCase) {
                    T = !1;
                    for (var r = 1; r <= z; r += 1) {
                        var s = r <= n._nbCase;
                        n.filterNbSlots[r] = s, n.filterCheckboxes[r].toggleActivation(s)
                    }
                    T = !0
                }
                0 === n._recipesData.length && (n._recipesData = e), n.recipesWrapper.delClassNames("spinner"), n.recipesList.show(), n.recipesWrapper.refresh(), n.recipesWrapper.goToTop(), n._setPageCount(a), n._isItemDataPending || (n._isItemDataPending = !0, f.eachLimit(e, 50, function(e, t) {
                    var i = [e.resultId].concat(e.ingredientIds);
                    h.getItems(i, t)
                }, function(e) {
                    return e ? (console.error(e), i(e)) : n._hasBeenReset() ? i() : (T = !0, n._searchLine.show(), n._ingredientsLine.show(), n._searchBar.delClassNames("spinner"), n.isInCraft && (n._showCraftableCheckbox.show(), n._checkboxWrapper.delClassNames("spinner"), n._search()), i())
                }))
            })
        })
    }, n.prototype._addRecipe = function(e, t) {
        var i = this;
        if (!h.items[e.resultId]) return console.error(new Error("Recipe " + e.resultId + " is missing")), t();
        if (this._hasBeenReset()) return t();
        var n = new m(e, {
            isInCraft: this.isInCraft,
            nbCases: this._nbCase,
            isMenuOnItemDisabled: this.isMenuOnItemDisabled
        });
        n.recipeList = this, i.recipesList.appendChild(n), b(n, {
            doubletapTimeout: 1
        }), n.on("tap", a), n.on("itemTapped", r), n.on("craftButtonTapped", s), n.setupRecipe(function(e, a) {
            if (e) return console.error(new Error("Cannot setup recipe for recipeId " + n.recipeId)), t(e);
            if (i.isInCraft && n.craftableCount) {
                var r = n.getItemSlot();
                M.setDraggable(r, {
                    backgroundImage: r.image
                }, "recipeList", {
                    source: "recipeList",
                    selectRecipe: o,
                    recipeBox: n
                })
            }
            t(null, a)
        })
    }, n.prototype._tapOnRecipeBoxItemHandler = function(e, t, i) {
        this.shouldNotSelect || this.isInCraft || this.tappedRecipe || t.id !== this.usingItemId && (this.tappedRecipe = e, i.select(), setTimeout(function(e) {
            e.emit("itemTapped", t)
        }, 0, this))
    }, n.prototype._tapOnRecipeBoxHandler = function(e) {
        if (!this.shouldNotSelect)
            if (this.isInCraft) this.tappedRecipe && this.tappedRecipe === e ? this._selectRecipe(e) : this._setTappedRecipe(e);
            else {
                if (this.tappedRecipe) return;
                this.tappedRecipe = e, e.addClassNames("tapped"), setTimeout(function(t) {
                    t.emit("itemTapped", h.items[e.recipeId])
                }, 0, this)
            }
    }, n.prototype._setTappedRecipe = function(e) {
        if (this.tappedRecipe && this.tappedRecipe.rootElement) {
            if (this.tappedRecipe === e) return;
            this.tappedRecipe.delClassNames("tapped")
        }
        e.addClassNames("tapped"), this.tappedRecipe = e
    }, n.prototype._selectRecipe = function(e) {
        this._setTappedRecipe(e), this.emit("recipeSelected", e.recipeId)
    }, n.prototype.isRecipeCraftableFromInventory = function(e) {
        var t = this.recipesList.getChild(e);
        return t.isCraftableFromBelongings(0)
    }, n.prototype.enableAndRefreshFilter = function(e) {
        e ? this._showCraftableCheckbox.enable() : this._showCraftableCheckbox.disable(), this.filterCraftable(e)
    }, n.prototype.filterCraftable = function(e) {
        this._filterCraftableOnly = e, this._search()
    }, n.prototype._search = function() {
        var e = this,
            t = this._searchInput.getValue();
        if (this._currentFilteredRecipesList = [], null === t || "" === t) return this._recipesData.forEach(function(t) {
            var i = e._filterCraftableOnly && e._canUseThisRecipe(t.resultId),
                n = i || !e._filterCraftableOnly;
            e.filterNbSlots[t.ingredientIds.length] && n && e._currentFilteredRecipesList.push(t)
        }), this.addRecipes(this._currentFilteredRecipesList, {
            usingItemId: this.usingItemId
        });
        if (t.length < this._searchInput.getSearchMinLen()) return _.showNotification(u("ui.common.searchFilterTooltip", this._searchInput.getSearchMinLen()), this._searchInput);
        t = y(t);
        var i = new RegExp(t, "i");
        this._recipesData.forEach(function(t) {
            var n = e._filterCraftableOnly && e._canUseThisRecipe(t.resultId),
                o = n || !e._filterCraftableOnly,
                a = h.items[t.resultId];
            if (!a) return console.error("item", t.resultId, "is missing");
            var r = y(a.nameId)
                .search(i) !== -1;
            r && e.filterNbSlots[t.ingredientIds.length] && o && e._currentFilteredRecipesList.push(t)
        }), this.addRecipes(this._currentFilteredRecipesList, {
            usingItemId: this.usingItemId
        })
    }, n.prototype.highlightRecipe = function(e) {
        if (this.selectedRecipe && this.selectedRecipe.rootElement && this.selectedRecipe.delClassNames("selected"), null !== e) {
            var t = this.recipesList.getChild(e);
            t && (t.addClassNames("selected"), this.selectedRecipe = t)
        }
    }, n.prototype.reset = function() {
        this._isItemDataPending = !1, this._pageCount = null, this._currentPage = -1, this._recipesData = [], this.selectedRecipe = null, this.tappedRecipe = null, this.usingItemId = null, this._recipesPlaceholder.hide(), this.recipesList.hide(), this.recipesList.clearContent(), this.filterText = "", this._searchInput.clear(), this._currentFilteredRecipesList = []
    }, n.prototype.refreshDisplayedRecipes = function() {
        this._search();
        for (var e = this.recipesList.getChildren(), t = 0; t < e.length; t++) {
            var i = e[t];
            i.refreshQuantities()
        }
    }, n.prototype._canUseThisRecipe = function(e) {
        for (var t = null, i = 0; i < this._recipesData.length; i++)
            if (this._recipesData[i].resultId === e) {
                t = this._recipesData[i];
                break
            } if (!t) return !1;
        for (i = 0; i < t.ingredientIds.length; i++) {
            var n = window.gui.playerData.belongings.getItemCounts(t.ingredientIds[i]),
                o = n[O.INVENTORY_QTY];
            if (t.quantities && t.quantities[i] > o) return !1
        }
        return !0
    }, n.prototype._hasBeenReset = function() {
        return !this.recipesList || !this.recipesList.rootElement
    }, n.prototype.getFirstRecipe = function() {
        return this.recipesList ? this.recipesList.getChildren()[0] : null
    }
}
