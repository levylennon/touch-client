function(e, t, i) {
    function n() {}

    function o(e) {
        a.call(this, {
            className: "LegendaryWeaponAwakeningWindow",
            title: s("ui.legendaryWeapon.titleAwakening"),
            numberSlot: 3
        }, e), this.chosenLW = null
    }
    i(1389);
    var a = i(1390),
        r = i(56)
        .inherits,
        s = i(17)
        .getText,
        c = i(469),
        l = i(1271),
        d = i(686),
        u = i(474),
        p = i(476),
        h = {
            _effectCaller: "Awakened Legendary Weapon",
            actionId: p.ACTION_GRIND_LEVEL,
            diceNum: 1
        };
    r(o, a), e.exports = o, o.prototype._setupListeners = function() {
        a.prototype._setupListeners.call(this);
        var e = this,
            t = window.gui;
        this.closeButton.on("tap", function() {
            window.dofus.sendMessage("LeaveDialogRequestMessage")
        }), t.on("ExchangeLeaveMessage", function() {
            e.isOpened && e.close()
        }), t.on("ExchangeObjectAddedMessage", function() {
            e.isOpened && e.chosenLW && e.validationButton.enable()
        }), t.on("ExchangeCraftInformationObjectMessage", function(i) {
            e.isOpened && i.playerId === window.gui.playerData.id && (e._clear(), i.craftResult === l.CRAFT_SUCCESS ? t.openSimplePopup(s("ui.legendaryWeapon.successAwakening"), s("ui.craft.success")) : t.openSimplePopup(s("ui.craft.failed")))
        })
    }, o.prototype._onOpen = function() {
        a.prototype._onOpen.call(this), this.validationButton.setText(s("ui.legendaryWeapon.confirmAwakening")), this.popupMessage = s("ui.legendaryWeapon.warningAwakening"), this.storageViewer.addFilters([function(e) {
            return e.isAsleepLegendaryWeapon()
        }]), this.storageViewer.filterList()
    }, o.prototype._reset = function() {
        a.prototype._reset.call(this), this.chosenLW = null, this.recipeIsReady = !1
    }, o.prototype._selectItem = function(e, t) {
        a.prototype._selectItem.call(this, e);
        var i = this;
        t = t || n, c.getItems(this.itemSelected.item.recipeIds, function(e, n) {
            return e ? t(e) : (i.upgradeWeaponList = n, i.statsChoice.show(), void i._selectElement(d.EARTH, t))
        })
    }, o.prototype._getWeaponsByEffectChoice = function() {
        for (var e = window.gui.databases.TypeActions, t = {}, i = [], n = 0; n < this.upgradeWeaponList.length; n++) {
            var o = this.upgradeWeaponList[n];
            if (0 !== o.upgradeEffects.length)
                for (var a = o.upgradeEffects[0].typeActionId, r = 0; r < o.possibleEffects.length; r++) {
                    var s = o.possibleEffects[r],
                        c = e[s.effectId];
                    if (c && c.elementId === this.elementSelected) {
                        o.possibleEffects[0].effectId === a ? i.unshift(a) : i.push(a), t[a] = {
                            weapon: o,
                            upgradeEffect: o.upgradeEffects[0]
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
        u.createEffectInstances([h], function(e, n) {
            return e ? (i(), console.error(e)) : (t.effects.push(n[0]), void c.createItemInstances([t], function(e, t) {
                return e ? (i(), console.error(e)) : void i(t.array[0])
            }))
        })
    }, o.prototype._getAndDisplayChosenLW = function(e, t) {
        var i = this;
        a.prototype._getAndDisplayChosenLW.call(this, e, function() {
            t = t || n, i.chosenLW = e, i._displayRecipeFromWeaponId(e.weapon.id, t)
        })
    }, o.prototype._refreshIngredientSlots = function(e, t) {
        a.prototype._refreshIngredientSlots.call(this, e, t), this.validationButton.isEnable() && (this.validationButton.disable(), window.dofus.sendMessage("ExchangeSetCraftRecipeMessage", {
            objectGID: this.chosenLW.weapon.id
        }))
    }, o.prototype._validateUpgrading = function() {
        window.dofus.sendMessage("ExchangeReadyMessage", {
            ready: !0,
            step: 1
        })
    }
}
