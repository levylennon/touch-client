function(e, t, i) {
    function n() {
        o.call(this), this.objects = {}, this.isLoaded = !1, this.presets = {}, this.kamas = 0, this.goultines = 0, this.weight = 0, this.maxWeight = 0, this.quantityList = {}, this.equippedItems = {}, this._lastUpdatedPosition = {}, this.itemSets = {}, this._isUsingPreset = !1, this._blockPresetTimeout = null
    }
    var o = i(59)
        .EventEmitter,
        a = i(16),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(814),
        l = i(469),
        d = i(91)
        .playUiSound,
        u = l.positions,
        p = i(138),
        h = i(34)
        .logger,
        f = i(815),
        b = i(816),
        m = i(817),
        M = i(818),
        g = i(52),
        _ = 113,
        A = 15261,
        O = 2e3;
    s(n, o), e.exports = n, n.prototype.connect = function() {
        window.dofus.send("moneyGoultinesAmountRequest")
    }, n.prototype.isOverloaded = function() {
        return this.weight > this.maxWeight
    }, n.prototype.pendingPreset = function() {
        this._isUsingPreset = !0
    }, n.prototype.isPendingPreset = function() {
        return this._isUsingPreset
    }, n.prototype.blockPreset = function() {
        var e = this;
        this._blockPresetTimeout && (clearTimeout(this._blockPresetTimeout), this._blockPresetTimeout = null), this.emit("presetBlock", !0), this._blockPresetTimeout = setTimeout(function() {
            clearTimeout(this._blockPresetTimeout), e._blockPresetTimeout = null, e.emit("presetBlock", !1)
        }, O)
    }, n.prototype.usePreset = function(e) {
        this._blockPresetTimeout || (this.pendingPreset(), window.gui.fightManager.isInFight() || this.blockPreset(), window.dofus.sendMessage("InventoryPresetUseMessage", {
            presetId: e
        }))
    }, n.prototype.disconnect = function() {
        this.objects = {}, this.isLoaded = !1, this.presets = {}, this.weight = 0, this.maxWeight = 0, this.quantityList = {}, this.equippedItems = {}, this._lastUpdatedPosition = {}, this.itemSets = {}, this._isUsingPreset = !1, this.kamas = null, this.goultines = null, this.emit("unloaded")
    }, n.prototype.initialize = function(e) {
        function t() {
            var e = v.quantityList = {},
                t = v.objects;
            for (var i in t) {
                var n = t[i],
                    o = n.objectGID;
                e[o] = (e[o] || 0) + n.quantity
            }
        }

        function i(e) {
            for (var i = 0, n = e.length; i < n; i += 1) {
                var o = e[i];
                v.objects[o.objectUID] = o, o.position !== u.notEquipped && (v.equippedItems[o.position] = o, o.position === u.weapon && v.emit("weaponChanged"))
            }
            t()
        }

        function n(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t].objectGID === A) return !0;
            return !1
        }

        function o() {
            v.isLoaded = !0, v.emit("loaded"), v.emit("listUpdate", v.objects)
        }

        function s(e) {
            v.kamas = e.kamas, v.emit("kamasUpdated", e.kamas), n(e.objects) && h.error(new Error("Inventory: player should not have tournament buff on production"));
            var t = l.createItemInstances(e.objects, function(t) {
                if (t) return console.error(t);
                if (!e.presets) return o();
                e.presets = e.presets || [], v.presets = {};
                for (var i = [], n = 0; n < e.presets.length; n += 1) {
                    var a = e.presets[n];
                    v.presets[a.presetId] = a;
                    for (var r = 0; r < a.objects.length; r += 1) {
                        var s = a.objects[r].objGid;
                        l.items[s] || i.push(s)
                    }
                }
                l.getItems(i, function(e) {
                    e && h.error(e), o()
                })
            });
            i(t)
        }

        function d(e) {
            var t = l.createItemInstances(e.object, function(e, t) {
                return e ? console.error(e) : void v.emit("itemAdded", t.array[0])
            });
            i(t)
        }

        function g(e, t, i) {
            var n = e.presets[i.presetId];
            if (!n) return t.retry(new Error("Preset is missing for presetId " + i.presetId)) ? void console.warn("Preset is missing for presetId " + i.presetId + " will retry...") : void console.error(t.mainError());
            for (var o = 0; o < n.objects.length; o += 1)
                if (n.objects[o].position === i.presetItem.position) {
                    n.objects[o] = i.presetItem;
                    break
                } e.emit("presetItemUpdated", i.presetId)
        }

        function _(e) {
            var i = v.objects[e.objectUID];
            if (i) {
                var n = i.quantity;
                i.quantity = e.quantity, t(), i.isInitialised && v.emit("itemQuantity", e.objectUID, e.quantity, n)
            }
        }

        function O(e) {
            var i = v.objects[e];
            return i ? (i.position !== u.notEquipped && (delete v.equippedItems[i.position], i.position === u.weapon && v.emit("weaponChanged")), i.emit("deleted"), delete v.objects[e], t(), i) : console.error(new Error("[ObjectDeletedMessage] unknown object UID"))
        }
        var v = this,
            y = window.dofus.connectionManager;
        e.on("ObjectAddedMessage", function(e) {
            d(e)
        }), y.on("ObjectAddedWithReasonMessage", function(e) {
            d(e)
        }), e.on("ObjectsAddedMessage", function(e) {
            var t = l.createItemInstances(e.object, function(e, t) {
                return e ? console.error(e) : void v.emit("itemsAdded", t.map)
            });
            i(t)
        }), e.on("ObjectModifiedMessage", function(e) {
            var t = l.createItemInstances(e.object, function(t, i) {
                if (t) return console.error(t);
                var n = i.array[0];
                return v.objects[e.object.objectUID] || n.livingObjectCategory ? void(n.isInitialised && (n.emit("modified"), v.emit("itemModified", n))) : console.error(new Error("[ObjectModifiedMessage] unknown object UID"))
            });
            i(t)
        }), e.on("ObjectMovementMessage", function(e) {
            var t = v.objects[e.objectUID],
                i = !1;
            if (t) {
                t.position !== u.weapon && e.position !== u.weapon || (i = !0);
                var n = t.position;
                t.position = e.position, v.equippedItems[n] && delete v.equippedItems[n], e.position !== u.notEquipped && (v.equippedItems[e.position] = t), t.isInitialised && (i && v.emit("weaponChanged"), t.emit("moved"), v.emit("itemMoved", t, n, e.position))
            }
        }), e.on("InventoryContentMessage", s), e.on("InventoryContentAndPresetMessage", s), e.on("InventoryPresetDeleteResultMessage", function(e) {
            switch (e.code) {
                case f.PRESET_DEL_OK:
                    delete v.presets[e.presetId], v.emit("presetDeleted", e.presetId);
                    break;
                case f.PRESET_DEL_ERR_TOO_MANY:
                    v.emit("presetDeleted", e.presetId, "tooMany");
                    break;
                case f.PRESET_DEL_ERR_UNKNOWN:
                    v.emit("presetDeleted", e.presetId, "unknown");
                    break;
                case f.PRESET_DEL_ERR_BAD_PRESET_ID:
                    v.emit("presetDeleted", e.presetId, "badId")
            }
        }), e.on("InventoryPresetSaveResultMessage", function(e) {
            switch (e.code) {
                case b.PRESET_SAVE_OK:
                    v.emit("presetSaved", e.presetId);
                    break;
                case b.PRESET_SAVE_ERR_TOO_MANY:
                    v.emit("presetSaved", e.presetId, "tooMany");
                    break;
                case b.PRESET_SAVE_ERR_UNKNOWN:
                    v.emit("presetSaved", e.presetId, "unknown")
            }
        }), e.on("InventoryPresetUseResultMessage", function(e) {
            switch (e.code) {
                case M.PRESET_USE_OK:
                    v.emit("presetUsed", e.presetId);
                    break;
                case M.PRESET_USE_OK_PARTIAL:
                    v.emit("presetUsed", e.presetId, "usePartial");
                    break;
                case M.PRESET_USE_ERR_UNKNOWN:
                    v.emit("presetUsed", e.presetId, "unknown");
                    break;
                case M.PRESET_USE_ERR_CRITERION:
                    v.emit("presetUsed", e.presetId, "criterion");
                    break;
                case M.PRESET_USE_ERR_BAD_PRESET_ID:
                    v.emit("presetUsed", e.presetId, "badId")
            }
        }), e.on("InventoryPresetUpdateMessage", function(e) {
            v.presets[e.preset.presetId] = e.preset, v.emit("presetUpdated", e.preset.presetId)
        }), e.on("InventoryPresetItemUpdateMessage", function(e) {
            var t = p.operation({
                retries: 4,
                randomize: !0
            });
            t.attempt(function() {
                g(v, t, e)
            })
        }), e.on("InventoryPresetItemUpdateErrorMessage", function(e) {
            switch (e.code) {
                case m.PRESET_UPDATE_ERR_UNKNOWN:
                    v.emit("presetItemUpdateError", "unknown");
                    break;
                case m.PRESET_UPDATE_ERR_BAD_PRESET_ID:
                    v.emit("presetItemUpdateError", "badId");
                    break;
                case m.PRESET_UPDATE_ERR_BAD_POSITION:
                    v.emit("presetItemUpdateError", "badPosition");
                    break;
                case m.PRESET_UPDATE_ERR_BAD_OBJECT_ID:
                    v.emit("presetItemUpdateError", "badObjectId")
            }
        }), y.on("GoultinesGivenMessage", function() {
            window.dofus.send("moneyGoultinesAmountRequest")
        }), y.on("InventoryWeightMessage", function(e) {
            v.weight = e.weight, v.maxWeight = e.weightMax, v.emit("weightUpdated", e.weight, e.weightMax)
        }), e.on("SetUpdateMessage", function(e) {
            var t = e.setId;
            v.itemSets[t] = {
                setEffects: e.setEffects,
                setObjects: e.setObjects
            }
        }), y.on("ObjectsQuantityMessage", function(e) {
            for (var i = {}, n = {}, o = 0, a = e.objectsUIDAndQty.length; o < a; o += 1) {
                var r = e.objectsUIDAndQty[o],
                    s = r.objectUID,
                    c = r.quantity,
                    l = v.objects[s],
                    d = l.quantity;
                l.quantity = c, l.isInitialised && (i[s] = c, n[s] = d)
            }
            t(), v.emit("itemsQuantity", i, n)
        }), y.on("ObjectQuantityMessage", function(e) {
            _(e)
        }), y.on("ObjectQuantityWithReasonMessage", function(e) {
            _(e)
        }), y.on("InventoryPresetUseResultMessage", function() {
            v._isUsingPreset = !1
        }), y.on("ObjectsDeletedMessage", function(e) {
            for (var t = {}, i = 0, n = e.objectUID.length; i < n; i += 1) {
                var o = e.objectUID[i];
                t[o] = O(o)
            }
            v.emit("itemsDeleted", e.objectUID, t)
        }), y.on("ObjectDeletedMessage", function(e) {
            var t = O(e.objectUID);
            v.emit("itemDeleted", e.objectUID, t)
        }), y.on("ObjectErrorMessage", function(t) {
            var i;
            switch (t.reason) {
                case c.INVENTORY_FULL:
                    i = r("ui.objectError.InventoryFull");
                    break;
                case c.CANNOT_EQUIP_TWICE:
                    i = r("ui.objectError.CannotEquipTwice");
                    break;
                case c.CANNOT_DROP:
                    i = r("ui.objectError.CannotDrop");
                    break;
                case c.CANNOT_DROP_NO_PLACE:
                    i = r("ui.objectError.CannotDropNoPlace");
                    break;
                case c.CANNOT_DESTROY:
                    i = r("ui.objectError.CannotDelete");
                    break;
                case c.LEVEL_TOO_LOW:
                    i = r("ui.objectError.levelTooLow");
                    break;
                case c.LIVING_OBJECT_REFUSED_FOOD:
                    i = r("ui.objectError.LivingObjectRefusedFood")
            }
            i && e.chat.logError(i)
        }), e.on("KamasUpdateMessage", function(e) {
            a.storeValueAndEmit(v, v, "kamas", e.kamasTotal, "kamasUpdated")
        }), y.on("CharacterStatsListMessage", function(e) {
            a.storeValueAndEmit(v, v, "kamas", e.stats.kamas, "kamasUpdated")
        }), y.on("moneyGoultinesAmountSuccess", function(e) {
            a.storeValueAndEmit(v, v, "goultines", e.goultinesAmount, "goultinesUpdated")
        })
    }, n.prototype.getCurrentWeapon = function() {
        return this.equippedItems[u.weapon]
    };
    var v = {
        0: "EQUIP_NECKLACE",
        1: "EQUIP_WEAPON",
        2: "EQUIP_WRISTBAND",
        3: "EQUIP_ACCESORIES",
        4: "EQUIP_WRISTBAND",
        5: "EQUIP_BOOTS",
        6: "EQUIP_CLOTH_2",
        7: "EQUIP_CLOTH_1",
        8: "EQUIP_PET",
        9: "EQUIP_DOFUS",
        10: "EQUIP_DOFUS",
        11: "EQUIP_DOFUS",
        12: "EQUIP_DOFUS",
        13: "EQUIP_DOFUS",
        14: "EQUIP_DOFUS",
        15: "EQUIP_HAND",
        16: "EQUIP_PET"
    };
    n.prototype._equip = function(e, t, i) {
        this._lastUpdatedPosition[i.superTypeId] = e, window.dofus.sendMessage("ObjectSetPositionMessage", {
            objectUID: t.objectUID,
            position: e,
            quantity: 1
        });
        var n = v[e];
        n && d(n)
    }, n.prototype.equipItem = function(e, t) {
        var i = this.objects[e];
        if (i && i.position === u.notEquipped) {
            var n = i.item,
                o = n.type;
            if (o.category === l.categories.equipment || o.category === l.categories.cosmetics) {
                if (n.typeId === _) return this._equip(t, i, o);
                var a = o.possiblePositions;
                if (a.length) {
                    if (t && a.indexOf(t) !== -1) return this._equip(t, i, o);
                    var r, s, c, d, p = this.equippedItems;
                    if (9 !== o.id || i.belongsToSet)
                        for (r = 0, s = a.length; r < s; r += 1)
                            if (c = a[r], d = p[c], d && d.objectGID === i.objectGID) return this._equip(c, i, o);
                    for (r = 0, s = a.length; r < s; r += 1)
                        if (c = a[r], !p[c]) return this._equip(c, i, o);
                    var h = this._lastUpdatedPosition[o.superTypeId] || 0,
                        f = h < a.length - 1 ? h + 1 : 0;
                    this._equip(a[f], i, o)
                }
            }
        }
    }, n.prototype.unEquipItem = function(e) {
        var t = this.objects[e];
        t && t.position !== u.notEquipped && (window.isoEngine.actionQueue.isActive() || window.dofus.sendMessage("ObjectSetPositionMessage", {
            objectUID: e,
            position: u.notEquipped,
            quantity: 1
        }))
    }, n.prototype.confirmDestroyItem = function(e, t) {
        var i = {
            title: r("ui.common.delete.item"),
            message: r("ui.common.doYouDestroy", t, e.item.nameId),
            item: e,
            quantity: t
        };
        g.open("destroyItem", i)
    }, n.prototype.getGenericItem = function(e) {
        var t, i = this.objects;
        for (var n in i)
            if (t = i[n], t.objectGID === e) return t;
        return null
    }, n.prototype.getGenericItemCount = function(e) {
        var t = this.objects,
            i = 0;
        for (var n in t) {
            var o = t[n];
            o.objectGID === e && (i += o.quantity)
        }
        return i
    }, n.prototype.getQuantityOfAnItem = function(e) {
        return this.quantityList[e]
    }, n.prototype.isGenericItemEquipped = function(e) {
        var t = this.objects;
        for (var i in t) {
            var n = t[i];
            if (n.objectGID === e && n.position !== u.notEquipped) return !0
        }
        return !1
    }, n.prototype.getItemCount = function(e) {
        var t = 0;
        for (var i in this.objects) {
            var n = this.objects[i];
            n.objectGID === e && t++
        }
        return t
    }, n.prototype.isPetFood = function(e, t) {
        var i = e.foodItems,
            n = e.foodTypes;
        return !(!i || !n) && (i.indexOf(t.getProperty("objectGID")) !== -1 || n.indexOf(t.getProperty("typeId")) !== -1)
    }
}
