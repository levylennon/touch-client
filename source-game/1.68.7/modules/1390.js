function(e, t, i) {
    function n() {}

    function o(e, t) {
        r.call(this, {
            className: ["LegendaryWeaponBaseWindow", e.className],
            title: e.title,
            positionInfo: {
                left: "c",
                top: "c",
                width: "90%",
                height: "90%",
                minWidth: 700,
                maxHeight: 530,
                mustAvoidToolbar: !0
            }
        }), this.craftItemSlots = [], this.upgradeWeaponList = [], this.numberSlot = e.numberSlot, this.itemSelected = null, this.elementSelected = null, this.popupMessage = "", this.opened = !1, this.isOpened = !1, this.storageViewer = t, this.storageViewer.registerView(this, {
            manualOpening: !0,
            enableSlotContext: !1,
            noExtraMargin: !0
        }), this._setupListeners()
    }
    i(1391);
    var a = i(56)
        .inherits,
        r = i(70),
        s = i(17)
        .getText,
        c = i(594),
        l = i(1006),
        d = i(871),
        u = i(86),
        p = i(767),
        h = i(63),
        f = i(880),
        b = i(476),
        m = i(469),
        M = i(686),
        g = i(130),
        _ = i(17)
        .processText,
        A = i(91)
        .playUiSound;
    a(o, r), e.exports = o, o.prototype._setupListeners = function() {
        var e = this;
        this.once("open", function() {
            e._createDom()
        }), this.on("open", function() {
            e.isOpened = !0, e._onOpen()
        }), this.on("close", function() {
            e.isOpened = !1
        }), this.on("closed", function() {
            e._clear(), e.storageViewer.unloadContent()
        }), window.gui.on("disconnect", function() {
            e._reset(), e.storageViewer.unloadContent()
        }), this.on("slot-tap", function(t) {
            e._selectItem(t.itemInstance)
        })
    }, o.prototype._createDom = function() {
        var e = this;
        this.opened = !0;
        var t = this.windowBody.createChild("div", {
                className: "LWBody"
            }),
            i = t.createChild("div", {
                className: "leftContainer"
            }),
            n = t.createChild("div", {
                className: "middleContainer"
            }),
            o = t.createChild("div", {
                className: "rightContainer"
            });
        this.statsChoice = i.createChild("div", {
            className: "statsChoice"
        }), this.elementChoiceText = this.statsChoice.createChild("div", {
            className: "elementChoiceText"
        }), this.wrapElementButtons = this.statsChoice.createChild("div", {
            className: "wrapElementButtons"
        });
        var a = this.wrapElementButtons.createChild("div", {
            name: M.EARTH,
            className: "earthButton"
        });
        h(a), a.on("tap", function() {
            A("GEN_BUTTON"), e._selectElement(M.EARTH)
        });
        var r = this.wrapElementButtons.createChild("div", {
            name: M.FIRE,
            className: "fireButton"
        });
        h(r), r.on("tap", function() {
            A("GEN_BUTTON"), e._selectElement(M.FIRE)
        });
        var c = this.wrapElementButtons.createChild("div", {
            name: M.WATER,
            className: "waterButton"
        });
        h(c), c.on("tap", function() {
            A("GEN_BUTTON"), e._selectElement(M.WATER)
        });
        var f = this.wrapElementButtons.createChild("div", {
            name: M.AIR,
            className: "airButton"
        });
        h(f), f.on("tap", function() {
            A("GEN_BUTTON"), e._selectElement(M.AIR)
        }), this.effectChoiceText = this.statsChoice.createChild("div", {
            className: "effectChoiceText"
        }), this.wrapEffectChoice = this.statsChoice.createChild("div", {
            className: "wrapEffectChoice"
        });
        var b = i.createChild("div", {
            className: "upgradedLW"
        });
        this.upgradedLW = b.appendChild(new l({
            showTitle: !0,
            noListener: !0
        })), this.placeHolderUpgradedLW = new p(b, {
            noHeight: !0
        }), n.createChild("div", {
            className: "arrow"
        }), this.storageBox = o.createChild("div", {
            className: "storageBox"
        });
        var m = o.createChild("div", {
            className: "currentLW"
        });
        this.currentLW = m.appendChild(new l({
            showTitle: !0,
            noListener: !0
        })), this.placeHolderLW = new p(m, {
            noHeight: !0
        });
        var g = o.createChild("div", {
            className: "craftItemContainer"
        });
        this.craftItemSlots = [];
        for (var _ = 0; _ < this.numberSlot; _++) this.craftItemSlots.push(g.appendChild(new d({
            noDoubleTap: !0,
            forceQuantity: !0
        })));
        this.validationButton = o.appendChild(new u({
            className: "button"
        }, function() {
            window.gui.openConfirmPopup({
                title: s("ui.popup.warning"),
                message: e.popupMessage,
                cb: function(t) {
                    t && e._validateUpgrading()
                }
            })
        }))
    }, o.prototype._onOpen = function() {
        this.opened && (this._clear(), this.elementChoiceText.setText(s("ui.legendaryWeapon.chooseElement")), this.effectChoiceText.setText(s("ui.legendaryWeapon.chooseEffect")), this.storageBox.appendChild(this.storageViewer.storageUI), this.storageViewer.clearFilters(), this.storageViewer.resetDisplay())
    }, o.prototype._reset = function() {
        this.itemSelected = null, this.elementSelected = null, this.upgradeWeaponList = []
    }, o.prototype._clear = function() {
        if (this.opened) {
            for (var e = 0; e < this.wrapElementButtons.getChildren()
                .length; e++) this.wrapElementButtons.getChildren()[e].delClassNames("selectedButton");
            this.statsChoice.hide(), this.wrapEffectChoice.clearContent(), this.storageViewer.unSelectSlot(), this._clearIngredientSlots(), this._displayCurrentLW(null), this._displayUpgradedLW(null), this._reset()
        }
    }, o.prototype._selectItem = function(e) {
        this._clear(), this.itemSelected = e, this._displayCurrentLW(e)
    }, o.prototype._selectElement = function(e, t) {
        t = t || n;
        for (var i = 0; i < this.wrapElementButtons.getChildren()
            .length; i++) this.wrapElementButtons.getChildren()[i].delClassNames("selectedButton");
        this.wrapElementButtons.getChild(e)
            .addClassNames("selectedButton"), this.elementSelected = e, this._displayUpgradedLW(null), this._clearIngredientSlots(), this._refreshEffectChoices(t)
    }, o.prototype._getWeaponsByEffectChoice = function() {
        return {}
    }, o.prototype._refreshEffectChoices = function(e) {
        var t = this;
        if (e = e || n, !this.elementSelected || !this.itemSelected || 0 === this.upgradeWeaponList.length) return e(new Error("Unable to find the selected element, item or upgradable weapons"));
        var i = this._getWeaponsByEffectChoice(),
            o = i.weaponsByEffectChoiceId,
            a = i.effectsOrder;
        return a.length > 0 ? void g.getDataMap("Effects", a, null, function(i, n) {
            return i ? e(i) : (t.wrapEffectChoice.clearContent(), a.forEach(function(e) {
                var i = n[e],
                    a = t.wrapEffectChoice.appendChild(new c(_(i.descriptionId, ""), {
                        isRadio: !0
                    }));
                a.on("change", function(e) {
                    e && t._getAndDisplayChosenLW(o[i.id])
                })
            }), e())
        }) : (t.wrapEffectChoice.clearContent(), e())
    }, o.prototype._addEffectsOnRawChosenLW = function(e, t, i) {
        return i()
    }, o.prototype._getAndDisplayChosenLW = function(e, t) {
        var i = this;
        if (t = t || n, !e) return t(new Error("Unable to get a upgraded legendary weapon"));
        for (var o = {
                objectGID: e.weapon.id,
                effects: []
            }, a = 0; a < e.weapon.possibleEffects.length; a++) {
            var r = e.weapon.possibleEffects[a].clone();
            r.effectId === b.ACTION_CHARACTER_LEARN_EMOTICON && (r.diceSide = 1), o.effects.push(r)
        }
        this._addEffectsOnRawChosenLW(e, o, function(e) {
            return e && i._displayUpgradedLW(e), t()
        })
    }, o.prototype._upgradeAndDisplayLW = function(e, t) {
        var i = this;
        if (t = t || n, !e.item) return t(new Error("The itemInstance of legendary weapon is missing the item"));
        for (var o = e.getGrindLevel() - 1, a = {
                objectGID: e.item.id,
                effects: []
            }, r = 0; r < e.effects.length; r++) a.effects.push(e.effects[r].clone());
        var s = e.item.upgradeEffects && e.item.upgradeEffects[0];
        return s ? void g.getDataMap("UpgradeTemplates", [s.templateId], null, function(e, n) {
            if (e) return t(e);
            var r = n[s.templateId];
            if (!r || o >= r.levels.length) return t();
            for (var c = r.levels[o].bonusValue, l = 0; l < a.effects.length; l++) {
                var d = a.effects[l];
                d.effectId === s.typeActionId ? d.value += c : d.effectId === b.ACTION_GRIND_LEVEL && d.value++
            }
            m.createItemInstances([a], function(e, n) {
                return e ? t(e) : (n.array.length > 0 && i._displayUpgradedLW(n.array[0]), i._displayRecipeFromTemplateLevel(r.levels[o], t))
            })
        }) : t(new Error("No upgrade effects available for weapon " + e.item.id))
    }, o.prototype._displayCurrentLW = function(e) {
        e ? (this.currentLW.displayItem(e), this.currentLW.show(), this.placeHolderLW.setText(null)) : (this.currentLW.hide(), this.placeHolderLW.setText(s("ui.common.selectItem")))
    }, o.prototype._displayUpgradedLW = function(e) {
        e ? (this.upgradedLW.displayItem(e), this.upgradedLW.show(), this.placeHolderUpgradedLW.setText(null)) : (this.upgradedLW.hide(), this.placeHolderUpgradedLW.setText(s("ui.search.noResult")))
    }, o.prototype._displayRecipeFromWeaponId = function(e, t) {
        var i = this;
        t = t || n, g.getDataMap("Recipes", [e], null, function(n, o) {
            if (n) return t(n);
            var a = o[e];
            return a ? m.getItems(a.ingredientIds, function(e, o) {
                return e ? t(n) : (i._refreshIngredientSlots(o, a.quantities), t())
            }) : t()
        })
    }, o.prototype._displayRecipeFromTemplateLevel = function(e, t) {
        var i = this;
        if (t = t || n, !e || !e.ingredients) return t(new Error("LegendaryWeapon error: Template or ingredients are missing"));
        for (var o = [], a = [], r = 0; r < e.ingredients.length; r++) {
            var s = e.ingredients[r];
            o.push(s.ingredientId), a.push(s.ingredientQty)
        }
        m.getItems(o, function(e, n) {
            return e ? t(e) : (i._refreshIngredientSlots(n, a), t())
        })
    }, o.prototype._refreshIngredientSlots = function(e, t) {
        if (e && t) {
            var i = window.gui.playerData;
            this.validationButton.enable();
            for (var n = 0; n < this.craftItemSlots.length; n++) {
                var o = this.craftItemSlots[n];
                if (n >= e.length) o.hide();
                else {
                    var a = e[n],
                        r = t[n];
                    o.show(), o.setItem(a), o.setContextMenu("item", {}), o.enableContextMenu(!0);
                    var s = i.belongings.getItemCounts(a.id)[f.INVENTORY_QTY],
                        c = (s > 9999 ? "9999+" : s) + "/" + r;
                    o.setQuantity(c), o.toggleClassName("quantityNotEnough", s < r), s < r && this.validationButton.disable()
                }
            }
        }
    }, o.prototype._clearIngredientSlots = function() {
        for (var e = 0; e < this.craftItemSlots.length; e++) this.craftItemSlots[e].unset();
        this.validationButton.disable()
    }, o.prototype._validateUpgrading = function() {}
}
