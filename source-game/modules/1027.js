function(e, t, i) {
    function n() {
        m.call(this, "div", {
                className: "EquipmentDrawer"
            }), this.content = this.createChild("div", {
                className: "drawerContent"
            }), this._slots = {}, this._selectedItemData = null,
            this._createDom(), this._setupEvents()
    }

    function o() {
        if (this.data)
            if (this.data.mountLocation) window.dofus.sendMessage("MountToggleRidingRequestMessage");
            else {
                if (!this.data.isInitialised) return;
                window.gui.playerData.inventory.unEquipItem(this.data.objectUID)
            }
    }

    function a(e, t) {
        var i = e.item;
        if (!i) return !1;
        var n = {
                foodItems: i.foodItems,
                foodTypes: i.foodTypes
            },
            o = window.gui.playerData.inventory.isPetFood(n, t),
            a = t.getProperty("typeId") === y;
        return o || a
    }

    function r(e, t) {
        window.dofus.sendMessage("ObjectFeedMessage", {
            objectUID: e.getProperty("objectUID"),
            foodUID: t.getProperty("objectUID"),
            foodQuantity: 1
        })
    }
    i(1028);
    var s = i(689),
        c = i(63),
        l = i(418),
        d = i(17)
        .getText,
        u = i(56)
        .inherits,
        p = i(1006),
        h = i(469),
        f = i(871),
        b = i(12),
        m = i(72),
        M = i(16),
        g = i(52),
        _ = i(475),
        A = i(691),
        O = i(509),
        v = i(116),
        y = 116,
        z = h.positions.pets,
        w = 9,
        T = h.positions,
        C = {
            bottom: [T.amulet, T.ringLeft, T.ringRight, T.belt, T.boots, T.mount],
            left: [T.dofus1, T.dofus2, T.dofus3, T.dofus4, T.dofus5, T.dofus6],
            right1: [T.cosmeticHat, T.cosmeticWeapon, T.cosmeticShield, T.cosmeticCape, T.cosmeticPets],
            right2: [T.hat, T.weapon, T.shield, T.cape, T.pets]
        },
        I = M.createFifo();
    u(n, m), e.exports = n, n.prototype._createSlot = function(e, t) {
        function i(e) {
            var t = this.data || {},
                i = this.position === z,
                o = t.model;
            e.data && e.data.objectUID && (!o && i && a(t, e.data) ? r(t, e.data) : window.gui.playerData.inventory.equipItem(e.data.objectUID, this.position), n.emit("itemDropped", e.data, this.position))
        }
        var n = this,
            s = this._slots[t] = e.appendChild(new f({
                scaleOnPress: !0
            }));
        s.addClassNames("pos" + t), s.position = t, l.setDroppable(s, ["characterBox", "equipment"], {
            matchPositionOnDrop: !0
        }), s.on("drop", i), s.itemUI = {}, l.setDraggable(s, s.itemUI, "characterBox"), s.on("tap", function() {
            this.data && (this.data.mountLocation || this.data.isInitialised) && (n.displayItem(this.data), n.emit("itemSelect", this.data))
        }), s.on("doubletap", o)
    }, n.prototype._createDom = function() {
        function e(e) {
            e.itemInstance && window.gui.playerData.inventory.equipItem(e.itemInstance.objectUID)
        }
        var t = this.content.createChild("div", {
                className: "characterBox"
            }),
            i = {};
        i.left = t.createChild("div", {
            className: "leftSlotBox"
        });
        var n = t.createChild("div", {
                className: "rightContainer"
            }),
            o = n.createChild("div", {
                className: "topBox"
            }),
            a = this._character = o.appendChild(new s({
                scale: "fitin",
                horizontalAlign: "center"
            })),
            r = o.createChild("div", {
                className: "rightBoxes"
            });
        l.setDroppable(a, ["equipment"]), a.on("drop", e), this._coloButton = a.createChild("div", {
            className: "coloButton"
        }), this._coloButton.createChild("div", {
            className: "infinityLogo"
        }), c(this._coloButton), this._coloButton.on("tap", function() {
            if (window.gui.playerData.isFighting) return void window.gui.chat.logError(d("ui.chat.noColorChange"));
            if (v.log("HUD.Click_on_button", {
                    interface_id: "EquipmentWindow",
                    button_id: "coloButton",
                    clic_parameter_key: "BPE",
                    clic_parameter_value: window.gui.playerData.isSubscriberAtMinLevel(O.ELITE),
                    clic_type: "Simple_court"
                }), !window.gui.playerData.isSubscriberAtMinLevel(O.ELITE)) return g.open("BonusPackElitePopup");
            var e = {
                    relookingParams: {},
                    isInfiniteRecolor: !0
                },
                t = e.relookingParams,
                i = window.gui.playerData.characterBaseInformations;
            t.breed = i.breed, t.colors = _.parseIndexedColors(i.entityLook.indexedColors);
            var n = A.getLookWithoutMount(i.entityLook),
                o = window.gui.playerData.isRiding;
            t.characterToRemodel = {
                name: i.name,
                breed: i.breed,
                sex: i.sex,
                headId: n.skins[1],
                colors: n.indexedColors,
                isRiding: o,
                isRideCameleon: o && window.gui.playerData.equippedMount.behaviors.indexOf(w) > -1
            },
            t.id = i.id,
            t.name = i.name,
            t.canRebreed = !1,
            t.canRecolor = !0,
            t.canReface = !1,
            t.canRename = !1,
            t.canRegender = !1,
            t.entityLook = i.entityLook,
            g.open("characterCreation", e)
        });
        var u = a.createChild("div", {
            className: "leftButton"
        });
        c(u, {
            repeatDelay: 100
        }), u.on("tap", function() {
            a.rotateCharacter(!1)
        });
        var h = a.createChild("div", {
            className: "rightButton"
        });
        c(h, {
            repeatDelay: 100
        }), h.on("tap", function() {
            a.rotateCharacter(!0)
        }), i.right1 = r.createChild("div", {
            className: "rightSlotBox1"
        }), i.right2 = r.createChild("div", {
            className: "rightSlotBox2"
        }), i.bottom = n.createChild("div", {
            className: "bottomSlotBox"
        });
        for (var f in C)
            for (var b = C[f], m = i[f], M = 0, y = b.length; M < y; M += 1) this._createSlot(m, b[M]);
        this._placeHolder = this.content.createChild("div", {
            className: "itemBoxPlaceHolder",
            text: d("ui.common.selectItem")
        }), this._itemBox = this.content.appendChild(new p({
            showTitle: !0,
            showItemActions: !0,
            minRows: 5
        }))
    }, n.prototype._setSlot = function(e, t) {
        var i = this._slots[e];
        if (i)
            if (t.mountLocation) i.setData(t), b.preloadImage("gfx/mounts/" + t.model + ".png", function(e) {
                i.setImage(e)
            });
            else {
                i.setItem(t), i.itemUI.backgroundImage = i.getImage(), l.enableDrag(i);
                var n = this._slots[T.weapon],
                    o = this._slots[T.shield],
                    a = n.itemInstance && n.itemInstance.item;
                a && a.twoHanded ? o.lock() : o.itemInstance || o.unset()
            }
    }, n.prototype._unsetSlot = function(e) {
        var t = this._slots[e];
        t && (t.unset(), l.disableDrag(t))
    }, n.prototype.updateCharacterLook = function(e) {
        var t = this;
        I.push(function(i) {
            t._character.setLook(e, {
                riderOnly: !1,
                boneType: "characters/",
                skinType: "characters/",
                keepDirection: !0,
                keepModels: !0
            }, i)
        })
    }, n.prototype.updateCharacter = function() {
        var e = window.gui.playerData.characterBaseInformations;
        this.updateCharacterLook(e.entityLook);
        var t = this._character;
        b.preloadImage("gfx/illusUi/symboles_classe/FichePerso_tx_symboleClasse_frame" + (e.breed - 1) + ".png", function(e) {
            t.setStyle("backgroundImage", e)
        })
    }, n.prototype.clearCharacter = function() {
        this._character.release()
    }, n.prototype.setColoAvailability = function() {
        this._coloButton.toggleClassName("disabled", !window.gui.playerData.isSubscriberAtMinLevel(O.ELITE))
    }, n.prototype._getItemBoxActionButton = function() {
        return this._itemBox.actionBtn
    }, n.prototype.setEquipment = function() {
        var e, t = window.gui.playerData,
            i = t.inventory.equippedItems;
        for (e in this._slots) {
            var n = i[e];
            n ? this._setSlot(e, n) : this._unsetSlot(e)
        }
        t.isRiding && this._setSlot(T.mount, t.equippedMount)
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui,
            i = t.playerData,
            n = i.inventory;
        n.on("itemMoved", function(t, i, n) {
            n === T.notEquipped ? e._unsetSlot(i) : e._setSlot(n, t)
        }), n.on("itemAdded", function(t) {
            t && t.position !== T.notEquipped && e._setSlot(t.position, t)
        }), n.on("itemDeleted", function(t, i) {
            if (i) {
                var n = e._itemBox.item;
                n && n === i && e.resetItem(), i.position !== T.notEquipped && e._unsetSlot(i.position)
            }
        }), n.on("itemModified", function(t) {
            t && t.position !== T.notEquipped && e._setSlot(t.position, t)
        }), n.on("listUpdate", function() {
            e.setEquipment()
        }), i.on("lookUpdate", function(t) {
            e.updateCharacterLook(t)
        }), i.on("mountRiding", function() {
            i.isRiding ? e._setSlot(T.mount, i.equippedMount) : e._unsetSlot(T.mount), e.updateCharacter()
        }), i.on("setMount", function() {
            i.isRiding && e._setSlot(T.mount, i.equippedMount)
        }), i.characters.on("characteristicsUpdated", function() {
            e._selectedItemData && e.displayItem(e._selectedItemData)
        }), i.on("dialogStateChanged", function(t) {
            e._itemBox.displayDestroyBtn(!t)
        })
    }, n.prototype.displayItem = function(e) {
        this._selectedItemData = e, this._placeHolder.hide(), this._itemBox.show(), e.mountLocation ? this._itemBox.displayMount(e) : this._itemBox.displayItem(e)
    }, n.prototype.resetItem = function() {
        this._selectedItemData = null, this._placeHolder.show(), this._itemBox.hide()
    }, n.prototype.getSlots = function() {
        return this._slots
    }, n.prototype.highlightPossiblePositions = function(e) {
        e = e || [];
        for (var t = 0; t < e.length; t += 1) {
            var i = e[t];
            this._slots[i].addClassNames("selected")
        }
        this.emit("equippableHighlighted", e)
    }, n.prototype.removePossiblePositionsHighlight = function() {
        for (var e in this._slots) this._slots[e].delClassNames("selected")
    }
}
