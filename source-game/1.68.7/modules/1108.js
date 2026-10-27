function(e, t, i) {
    function n() {
        b.call(this, {
            className: "ItemRecipesWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 800,
                height: 525
            }
        }), this.dbItemId = null, this.itemBox = null, this.itemHistory = [], this._isReloading = !1, this.on("open", this._onOpen), this.on("close", this._onClose)
    }

    function o(e) {
        this.myWindow._displayNextItem(e)
    }

    function a(e) {
        this.myWindow._displayNextItem(u.items[e])
    }

    function r() {
        var e = this.myWindow;
        e.itemHistory.pop();
        var t = u.items[e.itemHistory[e.itemHistory.length - 1]];
        e._displayItem(t)
    }

    function s(e, t) {
        this.myWindow._isReloading || (this.myWindow._isReloading = !0, t.select(), setTimeout(function(t) {
            t._displayNextItem(e)
        }, 0, this.myWindow))
    }
    i(1109);
    var c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(1006),
        u = i(469),
        p = i(1076),
        h = i(1074),
        f = i(130),
        b = i(70),
        m = i(86),
        M = i(72),
        g = i(16);
    l(n, b), e.exports = n, n.prototype._onOpen = function(e) {
        this.itemBox || this._createContent();
        var t = e.itemData && e.itemData.item ? e.itemData.item : e.itemData;
        this._displayNextItem(t)
    }, n.prototype._onClose = function() {
        this.dbItemId = null, this.itemHistory = [], this.windowBody.clearContent(), this.itemBox = null, this.itemRecipeBox = null, this.recipeList = null, this.windowHeadWrapper.removeChild(this.backButton), this.backButton = null
    }, n.prototype._displayNextItem = function(e) {
        e.id !== this.dbItemId && (this.itemHistory.push(e.id), this._displayItem(e))
    }, n.prototype._createContent = function() {
        var e = this.windowBody.createChild("div", {
            className: "leftCol"
        });
        this.itemBox = new d({
            showDescription: !0,
            showTitle: !0,
            withBidHouseBtn: !0
        }), e.appendChild(this.itemBox), this.itemRecipeBox = e.createChild("div", {
            className: "itemRecipeBox"
        }), this.itemRecipeBox.createChild("div", {
            className: "title",
            name: "title"
        }), this.itemRecipeBox.on("itemTapped", o), this.itemRecipeBox.myWindow = this;
        var t = this.windowBody.createChild("div", {
            className: "rightCol"
        });
        this.recipeList = new h({
            isMenuOnItemDisabled: !0
        }), this.recipeList.on("itemTapped", o), this.recipeList.on("recipeSelected", a), this.recipeList.myWindow = this, t.appendChild(this.recipeList);
        var i = this.backButton = new m({
            className: "backButton"
        }, r);
        i.insertBefore(this.windowTitle), i.myWindow = this
    }, n.prototype._displayItem = function(e) {
        this.recipeList.reset(), this.dbItemId = e.id, this._isReloading = !1;
        var t = this;
        this.windowTitle.setText(e.nameId), this.backButton.toggleDisplay(this.itemHistory.length > 1), this.itemBox.displayItem(e);
        var i = [e.id].concat(e.recipeIds);
        f.getDataMap("Recipes", i, null, function(n, o) {
            if (n) return console.error(n);
            if (t.recipeList) {
                for (var a = o[i[0]], r = [], l = 1; l < i.length; l++) {
                    var d = o[i[l]];
                    d && r.push(d)
                }
                t.recipeBox && (t.recipeBox.destroy(), t._craftDetails.destroy(), t._averagePrice.destroy());
                var h = !e.getProperty("secretRecipe");
                t.itemRecipeBox.toggleClassName("empty", !a || h), a ? (t.itemRecipeBox.getChild("title")
                        .setText(c("ui.item.utilityReceipt")), t.recipeBox = new p(a, {
                            isMenuOnItemDisabled: !0
                        }), t._craftDetails = new M("div", {
                            "class": "craftDetails"
                        }), t._averagePrice = new M("div", {
                            "class": "craftDetails"
                        }), t.recipeBox.on("itemTapped", s), t.recipeBox.myWindow = t, t.recipeBox.setupRecipe(function(e) {
                            if (e) return void console.error(new Error("setupRecipe error: " + e));
                            if (t.itemRecipeBox) {
                                t.itemRecipeBox.appendChild(t.recipeBox), t._craftDetails.setText(t.recipeBox.craftDetails);
                                var i = 0,
                                    n = !1;
                                for (var o in t.recipeBox.ingredients) {
                                    var a = t.recipeBox.ingredients[o].data.id || -1,
                                        r = t.recipeBox.ingredients[o].qtyNeeded || -1,
                                        s = u.items[a] || -1,
                                        l = s.getProperty("averagePrice") || -1;
                                    if (l === -1 || a === -1 || r === -1 || s === -1) {
                                        n = !0;
                                        break
                                    }
                                    i += l * r
                                }
                                n ? t._averagePrice.setText(c("ui.item.averageprice") + " : " + c("ui.item.averageprice.unavailable")) : t._averagePrice.setText(c("ui.item.averageprice") + " : " + g.kamasToString(i)), t.itemRecipeBox.appendChild(t._craftDetails), t.itemRecipeBox.appendChild(t._averagePrice)
                            }
                        }), t.recipeBox.myWindow = t) : h ? t.itemRecipeBox.getChild("title")
                    .setText(c("ui.item.secretReceipt")) : t.itemRecipeBox.getChild("title")
                    .setText(c("ui.item.utilityNoReceipt")), t.recipeList.addRecipes(r, {
                        usingItemId: e.id
                    })
            }
        })
    }
}
