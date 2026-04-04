function(e, t, i) {
    function n(e, t) {
        var i = this,
            n = window.gui.playerData;
        d.call(this, "div", {
            className: "RecipeBox",
            name: e.resultId
        }), t = t || {}, this.rawRecipe = e, this.recipeId = e.resultId, this.nbCases = t.nbCases || 0, this.isMenuOnItemDisabled = Boolean(t.isMenuOnItemDisabled), this._hasBeenDestroy = !1;
        var o = i.createChild("div", {
            className: "recipeTitle"
        });
        this._item = o.appendChild(new c({
            noDoubleTap: !0,
            forceQuantity: !0
        })), this.isMenuOnItemDisabled || this._item.setContextMenu("item", {}), this._recipeLeft = o.createChild("div", {
            className: "recipeLeft"
        });
        var a = o.createChild("div", {
            className: "recipeRight"
        });
        a.createChild("div", {
            className: "recipeLevel",
            text: r("ui.common.short.level") + " " + e.resultLevel
        });
        var s = e.ingredientIds.length;
        this.ingredients = [];
        var l = t.nbCases - s >= 4,
            f = l ? 0 : _[s],
            b = f,
            m = n.isSubscriberAtMinLevel(h.NORMAL),
            M = Math.max(0, n.jobs.jobXpBonus - 100),
            g = M + (m ? p.BONUS_PACK_XPJOB : 0);
        if (!l && g > 0) {
            var A = Math.floor(f * g / 100);
            b += ' <span class="bonusXP">(+' + A + ")</span>"
        }
        var O = a.createChild("div", {
            className: "recipeXP"
        });
        O.setHtml(r("ui.tooltip.monsterXpAlone", b)), l && O.addClassNames("warningText"), this._ingredientsList = i.createChild("div", {
            className: "ingredientsList"
        }), t.isInCraft && (this.craftButton = this._ingredientsList.appendChild(new u({
            addIcon: !0,
            className: ["greenButton", "recipeButton"],
            scaleOnPress: !0
        })), this.craftButton.on("tap", function() {
            i.emit("craftButtonTapped")
        })), this.on("destroy", function() {
            i._hasBeenDestroy = !0
        })
    }

    function o(e, t) {
        var i = "";
        if (1 !== e.jobId) {
            var n = 1;
            if (t.type.id === g && e.jobId === M && t.recipeSlots > 1) n = 50;
            else switch (t.recipeSlots) {
                case 3:
                    n = 10;
                    break;
                case 4:
                    n = 20;
                    break;
                case 5:
                    n = 40;
                    break;
                case 6:
                    n = 60;
                    break;
                case 7:
                    n = 80;
                    break;
                case 8:
                    n = 100
            }
            i = r("ui.craft.recipesJobDetails", e.jobName, n)
        }
        return i
    }

    function a() {
        this.recipeBox.emit("itemTapped", this.dbItem, this)
    }
    i(1077);
    var r = i(17)
        .getText,
        s = i(469),
        c = i(871),
        l = i(56)
        .inherits,
        d = i(72),
        u = i(86),
        p = i(13),
        h = i(509),
        f = i(880),
        b = i(129),
        m = i(16)
        .simplifyString,
        M = 25,
        g = 42,
        _ = {
            1: 1,
            2: 10,
            3: 25,
            4: 50,
            5: 100,
            6: 250,
            7: 500,
            8: 1e3
        };
    l(n, d), e.exports = n, n.prototype.setupRecipe = function(e) {
        var t = this,
            i = this.rawRecipe,
            n = [this.recipeId].concat(i.ingredientIds),
            r = i.ingredientIds.length;
        s.getItems(n, function(n) {
            if (n) return e(n);
            if (t._hasBeenDestroy) return e();
            var c = s.items[t.recipeId];
            if (!c) return e();
            t._item.setItem(c), t._item.recipeBox = t, t._item.on("tap", a), t.craftDetails = o(i, c), t._recipeLeft.createChild("div", {
                className: "recipeName",
                text: c.nameId
            }), t._recipeLeft.createChild("div", {
                className: "recipeSkillName",
                text: t.craftDetails
            });
            for (var l = c.nameId, d = 0, u = 0; u < r; u += 1) {
                var p = i.ingredientIds[u],
                    h = s.items[p];
                h ? (l += " " + h.nameId, t._createIngredientSlot(h, i.quantities[u]), d += 1) : console.error("RecipeBox#setupRecipe: ingredientId", p, "from recipeId", t.recipeId, "is missing, just continue")
            }
            return t.nbIngredients = d, t.searchString = m(l), t.refreshQuantities(), e(null, t)
        })
    }, n.prototype._createIngredientSlot = function(e, t) {
        var i = this._ingredientsList.appendChild(new c({
            itemData: e,
            forceQuantity: !0,
            noDoubleTap: !0
        }));
        i.recipeBox = this, i.qtyNeeded = t, i.on("tap", a), this.isMenuOnItemDisabled || i.setContextMenu("item", {}), this.ingredients.push(i), this._refreshIngredientSlot(i)
    }, n.prototype.refreshQuantities = function() {
        this.craftableCount = 1 / 0, this.craftableRemoteCount = 1 / 0, this.missingIngredientCount = 0;
        for (var e = 0; e < this.nbIngredients; e++) this._refreshIngredientSlot(this.ingredients[e]);
        this._item.setQuantity(this.craftableCount > 0 ? "(x" + this.craftableCount + ")" : ""), this.craftButton && this.craftButton.toggleDisplay(this.craftableCount > 0)
    }, n.prototype._refreshIngredientSlot = function(e) {
        var t = e.data.id,
            i = e.qtyNeeded,
            n = window.gui.playerData.belongings.getItemCounts(t),
            o = n[f.INVENTORY_QTY],
            a = n[f.BANK_QTY],
            r = n[f.MOUNT_QTY];
        window.gui.scenarioManager.isBehaviourEnabled(b.ENABLE_MAX_QUANTITY_INGREDIENT) && (o = i);
        var s = Boolean(window.gui.playerData.equippedMount),
            c = o + (a || 0) + (r || 0);
        i > c && this.missingIngredientCount++, this.craftableCount = Math.min(this.craftableCount, Math.floor(o / i)), this.craftableRemoteCount = Math.min(this.craftableRemoteCount, Math.floor(c / i));
        var l = o >= i ? o : c,
            d = "";
        d = o >= i ? "quantityGood" : c >= i ? "quantityRemote" : null === a || null === r && s ? "quantityUnknown" : "quantityNoGood", e.setClassNames(["Slot", "ItemSlot", d]), l = (l > 99 ? "99+" : l) + "/" + i, e.setQuantity(l)
    }, n.prototype.getItemSlot = function() {
        return this._item
    }, n.prototype.isCraftableFromBelongings = function(e) {
        return this.craftableRemoteCount > 0 || this.missingIngredientCount <= e
    }
}
