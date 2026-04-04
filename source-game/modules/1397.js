function(e, t, i) {
    function n() {}

    function o(e) {
        a.call(this, {
            className: "LegendaryWeaponConversionWindow",
            title: s("ui.legendaryWeapon.titleConversion"),
            numberSlot: 1
        }, e), this.chosenLW = null
    }
    i(1398);
    var a = i(1390),
        r = i(56)
        .inherits,
        s = i(17)
        .getText,
        c = i(469),
        l = i(470),
        d = i(686),
        u = i(130),
        p = i(476),
        h = i(13),
        f = i(105),
        b = i(549),
        m = i(52),
        M = 1;
    r(o, a), e.exports = o, o.prototype._setupListeners = function() {
        a.prototype._setupListeners.call(this);
        var e = this;
        f.on("ObjectUpgradeEffectResultMessage", function(t) {
            e.isOpened && (0 !== t.status ? window.gui.openSimplePopup(s("ui.craft.failed")) : window.gui.openSimplePopup(s("ui.legendaryWeapon.successConversion"), s("ui.craft.success")), e.close())
        }), f.on("ClientUIOpenedByObjectMessage", function(t) {
            t.type === b.CLIENT_UI_CONVERSION && m.open(e.id)
        })
    }, o.prototype._onOpen = function() {
        a.prototype._onOpen.call(this), this.validationButton.setText(s("ui.legendaryWeapon.confirmConversion")), this.popupMessage = s("ui.legendaryWeapon.warningConversion"), this.storageViewer.addFilters([function(e) {
            return e.isLegendaryWeapon() && !e.isAsleepLegendaryWeapon()
        }]), this.storageViewer.filterList()
    }, o.prototype._reset = function() {
        a.prototype._reset.call(this), this.chosenLW = null
    }, o.prototype._selectItem = function(e, t) {
        a.prototype._selectItem.call(this, e);
        var i = this;
        t = t || n, u.getDataMap("Recipes", [e.id], null, function(n, o) {
            if (n) return t(n);
            var a = o[e.id];
            return a ? void u.getDataArray("Items", a.ingredientIds, function(e, n) {
                if (e) return t(e);
                for (var o = null, a = 0; a < n.length; a++)
                    if (n[a].typeId === l.types.cosmeticLegendaryWeapon) {
                        o = n[a];
                        break
                    } return o ? c.getItems(o.recipeIds, function(e, n) {
                    return e ? t(e) : (i.upgradeWeaponList = n, i.statsChoice.show(), void i._selectElement(d.EARTH, t))
                }) : t()
            }) : t(new Error("Unable to find recipes for legendary weapon"))
        })
    }, o.prototype._getWeaponsByEffectChoice = function() {
        var e = window.gui.databases.TypeActions,
            t = {},
            i = [];
        if (!this.itemSelected) return t;
        var n, o = null;
        for (n = 0; n < this.itemSelected.effects.length; n++) {
            var a = this.itemSelected.effects[n];
            if (void 0 !== a.baseValue) {
                o = a.actionId;
                break
            }
        }
        for (n = 0; n < this.upgradeWeaponList.length; n++) {
            var r = this.upgradeWeaponList[n];
            if (0 !== r.upgradeEffects.length)
                for (var s = r.upgradeEffects[0], c = s.typeActionId, l = 0; l < r.possibleEffects.length; l++) {
                    var d = r.possibleEffects[l],
                        u = e[d.effectId];
                    if (u && u.elementId === this.elementSelected && (r.id === this.itemSelected.id && c !== o || r.id !== this.itemSelected.id)) {
                        d.effectId === c ? i.unshift(c) : i.push(c), t[c] = {
                            weapon: r,
                            upgradeEffect: s
                        };
                        break
                    }
                }
        }
        return {
            effectsOrder: i,
            weaponsByEffectChoiceId: t
        }
    }, o.prototype._addEffectsOnRawChosenLW = function(e, t, i) {
        for (var n = 1, o = 0; o < this.itemSelected.effects.length; o++) {
            var a = this.itemSelected.effects[o];
            if (a.actionId === p.ACTION_GRIND_LEVEL) {
                t.effects.push(a.clone()), n = a.value;
                break
            }
        }
        var r = e.weapon.upgradeEffects[0];
        u.getDataMap("UpgradeTemplates", [r.templateId], null, function(e, o) {
            if (e) return i(e);
            var a = o[r.templateId];
            if (!a) return i(new Error("Unable to find template for " + r.templateId));
            var s, l = 0;
            for (s = 0; s < Math.min(n - 1, a.levels.length); s++) l += a.levels[s].bonusValue;
            for (s = 0; s < t.effects.length; s++) {
                var d = t.effects[s];
                if (d.effectId === r.typeActionId) {
                    d.diceNum += l;
                    break
                }
            }
            c.createItemInstances([t], function(e, t) {
                return e ? i(e) : void i(t.array[0])
            })
        })
    }, o.prototype._getAndDisplayChosenLW = function(e, t) {
        var i = this;
        a.prototype._getAndDisplayChosenLW.call(this, e, function() {
            t = t || n, i.chosenLW = e, c.getItems([h.CATALYST_ITEM], function(e, n) {
                return e ? t(e) : (i._refreshIngredientSlots(n, [M]), t())
            })
        })
    }, o.prototype._validateUpgrading = function() {
        this.itemSelected && this.chosenLW && window.dofus.sendMessage("ObjectUpgradeEffectConversionRequestMessage", {
            sourceObjectUID: this.itemSelected.objectUID,
            targetObjectGID: this.chosenLW.weapon.id
        })
    }
}
