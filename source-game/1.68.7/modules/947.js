function(e, t, i) {
    function n(e, t) {
        e.setData(t), s.preloadImage("gfx/mounts/" + t.model + ".png", function(t) {
            e.setImage(t)
        })
    }

    function o() {
        function e() {
            L.setSlotsBox.toggleClassName("disabled", L.presetBlocked);
            var e = L.setSlotsBox.selectedSlot;
            t(!e.preset), e.preset ? (L.deleteSetButton.enable(), L.saveSetButton.enable(), L.optionsButton.enable()) : (L.deleteSetButton.disable(), L.saveSetButton.disable(), L.optionsButton.disable());
            var i = window.gui.playerData.inventory.presets;
            Object.keys(i)
                .length >= O ? L.addSetButton.disable() : L.addSetButton.enable()
        }

        function t(e) {
            L.explanationPanel.toggleDisplay(e), L.setItemSlotsBox.toggleDisplay(!e), L.buttonsBox.toggleDisplay(!e)
        }

        function i(e) {
            function t(t) {
                if ("remove" === t) {
                    var r = L.setSlotsBox.selectedSlot && L.setSlotsBox.selectedSlot.preset;
                    if (!r) return void console.error(new Error("PresetBox#setDeleteContextMenu: selectedPreset is missing for pos " + n + " mountModel " + o + " type " + a));
                    var s = i.getName && i.getName();
                    return s ? void T(s, r.presetId, function(t) {
                        t === _.YES ? L.saveCustom = !0 : e.setItem(i)
                    }) : void console.error(new Error("PresetBox#setDeleteContextMenu: itemNameId is missing for pos " + n + " mountModel " + o + " type " + a))
                }
            }
            var i = e.getItem && e.getItem() || e.data,
                n = e.data && e.data.position,
                o = e.data && e.data.model,
                a = e.data && e.data._type;
            return i ? i.model ? void e.enableContextMenu(!1) : (e.enableContextMenu(!0), void e.setContextMenu("preset", {
                slot: e,
                canRemove: !0,
                onClose: t
            })) : void console.error(new Error("PresetBox#setDeleteContextMenu: itemData is missing for pos " + n + " mountModel " + o + " type " + a))
        }

        function n(t) {
            t.select();
            var i;
            L.setSlotsBox.getChild(t.getWuiName()) ? (i = L.setSlotsBox, L._displaySet(t.preset)) : L.setItemSlotsBox.getChild(t.getWuiName()) ? (i = L.setItemSlotsBox, L.emit("setItemSlotTapped", t)) : i = L.setIconsBox, i.selectedSlot && t !== i.selectedSlot && i.selectedSlot.unselect(), i.selectedSlot = t, i === L.setSlotsBox && e()
        }

        function o(e) {
            e.preset && (window.gui.playerData.inventory.usePreset(e.preset.presetId), L.addClassNames("spinner"))
        }

        function a(e) {
            e.on("tap", function() {
                n(this)
            })
        }

        function u(e) {
            e.on("doubletap", function() {
                o(this)
            })
        }

        function f(e) {
            e.on("setData", function() {
                i(this)
            })
        }

        function b() {
            for (var e = 0; e < O; e += 1) {
                var t = L.setSlotsBox.appendChild(new p({
                    name: "setSlot" + e
                }));
                a(t), u(t), t.dragUI = {
                    width: z,
                    height: z,
                    onDragClassName: "slot"
                }, l.setDraggable(t, t.dragUI, "presets", {
                    type: A
                })
            }
        }

        function M() {
            for (var e = 0; e < w.length; e += 1) {
                var t = L.setItemSlotsBox.appendChild(new h({
                    name: "setItemSlot" + w[e],
                    errorIcon: !0
                }));
                t.addClassNames("pos" + w[e]), a(t), f(t)
            }
        }

        function g() {
            L.setIconsBox.addClassNames("spinner");
            for (var e = [], t = 0; t < y; t += 1) {
                e.push("gfx/presets/small_" + t + ".png");
                var i = L.setIconsBox.appendChild(new p({
                    name: "setIconSlot" + t
                }));
                a(i)
            }
            s.preloadImages(e, function(e) {
                for (var t = 0; t < e.length; t += 1) {
                    var i = L.setIconsBox.getChild("setIconSlot" + t);
                    i.setImage(e[t])
                }
                L.setIconsBox.delClassNames("spinner")
            })
        }

        function v(e, t) {
            window.gui.openConfirmPopup({
                title: d("ui.popup.warning"),
                message: d("ui.preset.warningDelete", e + 1),
                cb: t
            })
        }

        function T(e, t, i) {
            window.gui.openConfirmPopup({
                title: d("ui.popup.warning"),
                message: d("ui.preset.warningItemDelete", e, t + 1),
                cb: i
            })
        }

        function C() {
            L.addSetButton.on("tap", function() {
                this.disable(), L._addSet()
            }), L.importSetButton.on("tap", function() {
                L._importSet()
            }), r(L.importSetButton, d("ui.preset.importCurrentStuff")), L.deleteSetButton.on("tap", function() {
                var e = L.deleteSetButton;
                e.disable();
                var t = L.setSlotsBox.selectedSlot && L.setSlotsBox.selectedSlot.preset;
                return t ? void v(t.presetId, function(i) {
                    i === _.YES ? (window.dofus.sendMessage("InventoryPresetDeleteMessage", {
                        presetId: t.presetId
                    }), L.addClassNames("spinner")) : e.enable()
                }) : e.enable()
            }), r(L.deleteSetButton, d("ui.preset.delete")), L.chooseIconButton.on("tap", function() {
                L._confirmIconPopup(function(e) {
                    e === _.YES && L._saveSet()
                })
            }), L.saveSetButton.on("tap", function() {
                this.disable(), L._saveSet()
            }), L.optionsButton.on("tap", function() {
                L._confirmOptionsPopup()
            })
        }

        function I() {
            for (var e = L.setSlotsBox.getChildren(), t = 0; t < e.length; t += 1) {
                var i = e[t];
                i.preset && L._deleteSet(i.preset.presetId)
            }
            var n = window.gui.playerData.inventory.presets || {};
            for (var o in n) L._updateSetSlot(o);
            e[0].emit("tap")
        }

        function S(e) {
            var t = {
                usePartial: d("ui.preset.error.usePartial"),
                badObjectId: d("ui.preset.error.badObjectId"),
                tooMany: d("ui.preset.error.tooMany"),
                criterion: d("ui.preset.error.criterion"),
                badId: d("ui.preset.error.badId"),
                badPosition: d("ui.preset.error.badPosition"),
                unknown: d("ui.common.unknownFail")
            };
            window.gui.openSimplePopup(t[e])
        }

        function E() {
            L.displayedPreset && L.displayedPreset.mount && L._displaySet(L.displayedPreset)
        }
        m.call(this, "div", {
            className: "PresetsBox"
        });
        var L = this;
        this.displayedItems = {}, this.presetBlocked = !1, this.setSlotsBox = this.createChild("div", {
            className: "setSlotsBox"
        }), this.addSetButton = this.appendChild(new c(d("ui.common.new"), {
            className: ["addSetButton"]
        })), this.setItemSlotsBox = this.createChild("div", {
            className: "setItemSlotsBox"
        }), this.setIconsBox = this.createChild("div", {
            className: "setIconsBox"
        });
        var N = this.createChild("div", {
            className: "buttonsBox"
        });
        this.importSetButton = N.appendChild(new c("", {
            className: ["importSetButton"]
        })), this.importSetButton.createChild("div", {
            className: "icon"
        }), this.deleteSetButton = N.appendChild(new c("", {
            className: ["deleteSetButton"]
        })), this.deleteSetButton.createChild("div", {
            className: "icon"
        }), this.chooseIconButton = N.appendChild(new c("!", {
            className: ["chooseIconButton"]
        })), this.chooseIconButton.createChild("div", {
            className: "icon"
        }), this.saveSetButton = N.appendChild(new c(d("ui.common.save"), {
            className: ["saveSetButton"]
        })), this.optionsButton = N.appendChild(new c(d("ui.common.options"), {
            className: ["optionsButton"]
        })), this.buttonsBox = N, this.createChild("div", {
            className: "overlay"
        }), this.explanationPanel = this.createChild("div", {
            className: "explanationPanel"
        }), this.explanationPanel.createChild("div", {
            className: "instruction",
            text: d("ui.preset.howToUse")
        }), b(), M(), g(), C(), I();
        var R = window.gui.playerData,
            q = R.inventory;
        q.on("listUpdate", function() {
            I()
        }), q.on("presetSaved", function(t, i) {
            if (L.delClassNames("spinner"), i) return e(), S(i)
        }), q.on("presetDeleted", function(t, i) {
            return L.delClassNames("spinner"), i ? (e(), S(i)) : (L._deleteSet(t), void e())
        }), q.on("presetUpdated", function(t, i) {
            return i ? S(i) : (L._updateSetSlot(t), void e())
        }), q.on("presetBlock", function(t) {
            L.presetBlocked = t, e()
        }), q.on("presetItemUpdated", function(e) {
            L._updateSetSlot(e)
        }), q.on("presetItemUpdateError", S), q.on("presetUsed", function(e, t) {
            if (L.delClassNames("spinner"), t) return S(t);
            var i = q.presets[e],
                n = R.equippedMount && i.mount && !R.isRiding;
            n && window.gui.textNotification.add(d("tablet.mount.cannotRide"))
        }), R.on("setMount", E), R.on("unsetMount", E)
    }
    i(948);
    var a = i(18),
        r = i(88)
        .addTooltip,
        s = i(12),
        c = i(86)
        .DofusButton,
        l = i(418),
        d = i(17)
        .getText,
        u = i(469),
        p = i(873),
        h = i(871),
        f = i(56),
        b = i(52),
        m = i(72),
        M = i(470),
        g = i(509),
        _ = i(949)
        .actionsEnum,
        A = i(866)
        .GENERAL_SHORTCUT_BAR,
        O = 16,
        v = 33,
        y = 27,
        z = 40,
        w = [M.positions.cosmeticHat, M.positions.cosmeticWeapon, M.positions.cosmeticShield, M.positions.cosmeticCape, M.positions.cosmeticPets, M.positions.hat, M.positions.weapon, M.positions.shield, M.positions.cape, M.positions.pets, M.positions.amulet, M.positions.ringLeft, M.positions.ringRight, M.positions.belt, M.positions.boots, M.positions.dofus1, M.positions.dofus2, M.positions.dofus3, M.positions.dofus4, M.positions.dofus5, M.positions.dofus6, M.positions.mount],
        T = u.positions.mount,
        C = 3;
    f.inherits(o, m), e.exports = o, o.prototype._getItemPosMap = function(e) {
        if (e) {
            for (var t = e.objects || e, i = window.gui.playerData.inventory, n = {}, o = 0; o < t.length; o += 1) {
                var a, r = t[o].objUid || t[o].objectUID,
                    s = t[o].position;
                if (r) a = i.objects[r];
                else {
                    var c = t[o].objGid;
                    a = u.items[c]
                }
                n[s] = a
            }
            return n
        }
    }, o.prototype._updateSetSlot = function(e) {
        var t = window.gui.playerData.inventory.presets[e],
            i = this.setSlotsBox.getChild("setSlot" + t.presetId);
        i.preset = t, s.preloadImage("gfx/presets/icon_" + t.symbolId + ".png", function(e) {
            i.setImage(e), i.dragUI.backgroundImage = i.getImage(), l.enableDrag(i)
        });
        var n = this.setIconsBox.getChild("setIconSlot" + t.symbolId);
        n.preset = t;
        var o = this.setSlotsBox.selectedSlot && this.setSlotsBox.selectedSlot.preset;
        o && o.presetId === t.presetId && this._displaySet(t)
    }, o.prototype._getIsItemUnavailable = function(e, t) {
        if (!e || !e.conditions) return t(!1);
        if (e.mountLocation) {
            var i = window.gui.playerData.equippedMount;
            return t(!i)
        }
        return e.conditions._isRespected(null, function(i) {
            return t(!e.objectUID || e.conditions && !i)
        })
    }, o.prototype._updateSetItemSlots = function(e) {
        var t = this;
        return e ? a.timesSeries(v, function(i, o) {
            var a = e[i],
                r = t.setItemSlotsBox.getChild("setItemSlot" + i);
            return r ? (r.unset(), r.delClassNames("unavailable"), a ? (a.model ? n(r, a) : r.setItem(a), t._getIsItemUnavailable(a, function(e) {
                return r.toggleClassName("unavailable", e), o()
            })) : o()) : o()
        }, function(e) {
            e && console.error(e);
            var i = t.setItemSlotsBox.selectedSlot;
            i && i.unselect()
        }) : this._resetItemSlots(this.setItemSlotsBox.getChildren())
    }, o.prototype._resetItemSlots = function(e) {
        for (var t = 0; t < e.length; t += 1) e[t].unset()
    }, o.prototype._displaySet = function(e) {
        var t = window.gui.playerData,
            i = this._getItemPosMap(e),
            n = e && e.symbolId;
        if (e) n = e.symbolId, e.mount && (i[T] = t.equippedMount || {
            model: C,
            mountLocation: "placeholder"
        });
        else {
            var o = this.setIconsBox.getChildren(),
                a = this._getNextAvailableSlot(o);
            n = o.indexOf(a)
        }
        this._updateSetItemSlots(i), this.shouldSaveEquipment = !1, this.saveCustom = !1, this.setIconsBox.getChild("setIconSlot" + n)
            .emit("tap"), this.displayedPreset = e
    }, o.prototype._deleteSet = function(e) {
        for (var t = this.setSlotsBox.getChildren(), i = 0; i < t.length; i += 1) {
            var n = t[i];
            if (n.preset && n.preset.presetId === e) {
                delete n.preset, n.unset(), l.disableDrag(n), this._resetItemSlots(this.setItemSlotsBox.getChildren());
                break
            }
        }
    }, o.prototype._importSet = function() {
        var e = window.gui.playerData,
            t = e.inventory.equippedItems,
            i = {};
        for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
        e.isRiding && (i[M.positions.mount] = e.equippedMount), this._updateSetItemSlots(i), this.shouldSaveEquipment = !0
    }, o.prototype._saveSet = function() {
        var e = this,
            t = this.setSlotsBox.getChildren(),
            i = this.setItemSlotsBox.getChildren(),
            n = this.setIconsBox.getChildren(),
            o = !1,
            a = !1,
            r = !1,
            s = this.setSlotsBox.selectedSlot,
            c = this.setIconsBox.selectedSlot;
        if (s.preset) {
            var l = n[s.preset.symbolId];
            o = s.preset.applyCharacs, r = s.preset.applySpells, a = s.preset.applyColors, delete l.preset
        }
        var d, u;
        if (this.saveCustom) {
            for (var p = [], h = [], f = 0; f < i.length; f += 1) {
                var b = i[f].itemInstance;
                if (b) p.push(b.position), h.push(b.objectUID || b.mountLocation && b.id);
                else {
                    var m = i[f].data;
                    m && m.mountLocation && (p.push(T), h.push(m.id))
                }
            }
            d = {
                presetId: t.indexOf(s),
                symbolId: n.indexOf(c),
                applyCharacs: o,
                applySpells: r,
                applyColors: a,
                itemsPositions: p,
                itemsUids: h
            }, u = "InventoryPresetSaveCustomMessage"
        } else d = {
            presetId: t.indexOf(s),
            symbolId: n.indexOf(c),
            applyCharacs: o,
            applySpells: r,
            applyColors: a,
            saveEquipment: this.shouldSaveEquipment
        }, u = "InventoryPresetSaveMessage";
        window.dofus.sendMessage(u, d), e.addClassNames("spinner")
    }, o.prototype._getNextAvailableSlot = function(e) {
        for (var t = 0; t < e.length; t += 1) {
            var i = e[t];
            if (!i.preset) return i
        }
    }, o.prototype._confirmIconPopup = function(e) {
        var t = b.getWindow("presetChooseIcon");
        t && !t.openState && (b.open("presetChooseIcon", this.setIconsBox), b.getWindow("presetChooseIcon")
            .once("close", e))
    }, o.prototype._confirmOptionsPopup = function() {
        var e = this,
            t = window.gui.playerData.isSubscriberAtMinLevel(g.ELITE);
        if (!t) return b.open("BonusPackElitePopup");
        var i = b.getWindow("presetOptions"),
            n = this.setSlotsBox.selectedSlot && this.setSlotsBox.selectedSlot.preset;
        n && i && !i.openState && (b.open("presetOptions", {
                applyCharacs: n.applyCharacs,
                applySpells: n.applySpells,
                applyColors: n.applyColors
            }), b.getWindow("presetOptions")
            .once("close", function(t) {
                t = t || {}, t.action === _.YES && (n.applyCharacs = t.applyCharacs, n.applySpells = t.applySpells, n.applyColors = t.applyColors, e._saveSet())
            }))
    }, o.prototype._addSet = function() {
        var e = this,
            t = this._getNextAvailableSlot(this.setSlotsBox.getChildren());
        if (t) {
            var i = this._getNextAvailableSlot(this.setIconsBox.getChildren());
            t.emit("tap"), i.emit("tap"), this._confirmIconPopup(function(t) {
                return t !== _.YES ? e.addSetButton.enable() : (e._importSet(), void e._saveSet())
            })
        }
    }
}
