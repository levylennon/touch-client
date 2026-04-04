function(e, t, i) {
    function n() {
        function e(e) {
            a.moveItemToCraft("craftInventory", o, e)
        }

        function t(t, i) {
            if (window.gui.scenarioManager.isBehaviourEnabled(p.ENABLE_FAKE_CRAFT_TUTORIAL_2)) {
                var r = h.getWindow("crafting");
                return r.openState && r.addFakeItemToCraftBox(t), !1
            }
            return !window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_SLOT_DROP) && (o = t, o.objectGID === a.RUNE_SIGNATURE_GID ? e(1) : 1 === i ? e(1) : void n._minMaxSelector.open({
                min: 1,
                max: i
            }))
        }

        function i(e, t, i) {
            return !this._isRemote && (!!e.slot && a.howManyCanBeAddedToCraft(i, e.slot.getItem(), 1) > 0)
        }
        l.call(this, "div", {
            className: ["CraftActorBox", "hoverable"]
        });
        var n = this;
        this._usedSlots = 0, this._runeSignatureUid = null, this.highlightedSlots = [], this._minMaxSelector = this.appendChild(new d), this._minMaxSelector.setStyles({
            left: "20px",
            top: "30px"
        });
        var o = null,
            a = this.jobsData = window.gui.playerData.jobs;
        this._minMaxSelector.on("confirm", e);
        var s = this.createChild("div", {
                className: "wrapper"
            }),
            c = this._slotsContainer = s.createChild("div", {
                className: "slotsContainer"
            });
        r.setDroppable(this, ["craftInventory"], {
            isDropAllowed: i
        }), this.on("drop", function(e) {
            t(e.itemInstance, e.getQuantity())
        }), this._playerName = c.createChild("div", {
            className: "playerName"
        }), this._playerRole = c.createChild("div", {
            className: "playerRole"
        }), this._allSlots = c.createChild("div", {
            className: "allSlots"
        }), this._signatureSlot = c.appendChild(this._createItemSlot("signatureSlot")), this._signatureSlot.hide();
        for (var u = 0; u < a.MAX_CRAFT_SLOTS; u += 1) this._allSlots.appendChild(this._createItemSlot())
    }

    function o(e, t, i) {
        return !!i.getItem() && (this.backgroundImage = i.getImage(), !0)
    }

    function a() {
        this.craftActorBox._slotTapHandler(this)
    }
    i(1275);
    var r = i(418),
        s = i(871),
        c = i(56)
        .inherits,
        l = i(72),
        d = i(421),
        u = i(17)
        .getText,
        p = i(129),
        h = i(52),
        f = i(502);
    c(n, l), e.exports = n, n.prototype._createItemSlot = function(e) {
        var t = new s({
            noDoubleTap: !0
        });
        return e && t.addClassNames(e), t.on("tap", a), t.craftActorBox = this, this._isRemote || r.setDraggable(t, {
            prepareForDrag: o
        }, "crafting", {
            slot: t
        }), t
    }, n.prototype._slotTapHandler = function(e) {
        if (!this._isRemote && !window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_SLOT_TAP)) {
            var t = e.getItem();
            if (t) {
                var i = this.jobsData.getQuickTransferInfo("crafting", t, e.getQuantity());
                e !== this.selectedSlot ? (window.gui.openContextualMenuAround("item", e, {
                    item: t
                }), this._selectCurrentSlot(e, i.movedQty > 1 ? "stackMove" : "")) : this.jobsData.removeItemFromCraft(t.objectUID, i.movedQty)
            }
        }
    }, n.prototype._selectCurrentSlot = function(e, t) {
        this.selectedSlot && this._unselectCurrentSlot(), this.selectedSlot = e, e.select({
            extraStyle: t
        })
    }, n.prototype._unselectCurrentSlot = function() {
        this.selectedSlot && (this.selectedSlot.unselect(), this.selectedSlot = null)
    }, n.prototype.setNbSlots = function() {
        for (var e = this._allSlots.getChildren(), t = this._usedSlots + this.jobsData.getFreeSlotCount(), i = 0, n = e.length; i < n; i += 1) {
            var o = e[i],
                a = i >= t;
            o.toggleClassName("locked", a), o.isLocked = a
        }
    }, n.prototype.toggleSignatureSlot = function(e) {
        this._signatureSlot.toggleDisplay(e)
    }, n.prototype.showDropHighlight = function(e) {
        if (this.highlightedSlots = [], e.objectGID === this.jobsData.RUNE_SIGNATURE_GID) this.highlightedSlots.push(this._signatureSlot);
        else
            for (var t = this._allSlots.getChildren(), i = 0; i < t.length; i++) {
                var n = t[i],
                    o = n.getItem();
                if (o && o.objectUID === e.objectUID) {
                    this.highlightedSlots = [n];
                    break
                }
                o || n.isLocked || this.highlightedSlots.push(n)
            }
        for (var a = 0; a < this.highlightedSlots.length; a++) this.highlightedSlots[a].addClassNames("selected")
    }, n.prototype.hideDropHighlight = function() {
        for (var e = 0; e < this.highlightedSlots.length; e++) this.highlightedSlots[e].delClassNames("selected");
        this.highlightedSlots = []
    }, n.prototype.setAsRemote = function() {
        this._isRemote = !0, this._slotsContainer.addClassNames("client")
    }, n.prototype.setPlayerName = function(e) {
        if (this._playerName.clearContent(), e === window.gui.playerData.characterBaseInformations.name) this._playerName.createChild("div", {
            text: e
        });
        else {
            var t = "{collab," + e + "}";
            this._playerName.appendChild(f.process(t))
        }
    }, n.prototype.toggleReady = function(e) {
        this.toggleClassName("isReady", e)
    }, n.prototype._findSlotByUID = function(e) {
        for (var t = this._allSlots.getChildren(), i = 0, n = t.length; i < n; i += 1) {
            var o = t[i];
            if (o.itemInstance && o.itemInstance.objectUID === e) return i
        }
        return null
    }, n.prototype.addAndModifySlot = function(e) {
        var t, i = this._allSlots.getChildren();
        if (e.objectGID === this.jobsData.RUNE_SIGNATURE_GID) return this._runeSignatureUid = e.objectUID, void this._signatureSlot.setItem(e);
        var n = this._findSlotByUID(e.objectUID);
        n || 0 === n ? (t = i[n], t.setItem(e)) : (t = i[this._usedSlots], t.setItem(e), this._usedSlots += 1)
    }, n.prototype.removeIngredient = function(e) {
        if (e === this._runeSignatureUid) return this._signatureSlot.unselect(), this._signatureSlot.unset(), void(this._runeSignatureUid = null);
        var t = this._findSlotByUID(e);
        if (t || 0 === t) {
            this._unselectCurrentSlot();
            for (var i = this._allSlots.getChildren(), n = t + 1; n < i.length; n++) i[n - 1].setItem(i[n].getItem());
            i[i.length - 1].unset(), this._usedSlots -= 1
        }
    }, n.prototype.getGivenIngredientsInfo = function() {
        for (var e = this._allSlots.getChildren(), t = [], i = 0, n = e.length; i < n; i += 1) {
            var o = e[i].itemInstance;
            o && t.push({
                UID: o.objectUID,
                GID: o.objectGID,
                quantity: o.quantity
            })
        }
        return t
    }, n.prototype.getRuneSignatureInfo = function() {
        var e = this._signatureSlot.itemInstance;
        return e ? {
            UID: e.objectUID,
            GID: e.objectGID,
            quantity: e.quantity
        } : {}
    }, n.prototype.setCrafterJobLevel = function(e, t, i) {
        t ? this._playerRole.setText(i + " " + u("ui.common.short.level") + " " + t) : this._playerRole.setText(u("ui.craft.client"))
    }, n.prototype.clear = function() {
        this._unselectCurrentSlot(), this.hideDropHighlight(), this._minMaxSelector.hide(), this._isRemote = !1, this._usedSlots = 0, this._runeSignatureUid = null, this._signatureSlot.unset(), this._signatureSlot.hide();
        for (var e = this._allSlots.getChildren(), t = 0; t < e.length; t++) e[t].unset();
        this.setNbSlots()
    }, n.prototype.getSlots = function() {
        return this._allSlots.getChildren()
    }
}
