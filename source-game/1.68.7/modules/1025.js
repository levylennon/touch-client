function(e, t, i) {
    function n(e) {
        d.call(this, {
            title: r("ui.common.inventory"),
            className: "EquipmentWindow",
            freeContentDelay: 5e3,
            plusButton: !1,
            positionInfo: {
                left: "10%",
                top: "c",
                width: 636,
                height: "90%",
                minHeight: 550
            },
            openingSound: "OPEN_INVENTORY",
            closingSound: "CLOSE_INVENTORY",
            helpTab: {
                part: 2,
                subPart: 3
            }
        }), this.hasDom = !1, this.isListening = !1, this.drawerNeedsUpdate = !0, this.storageView = e, this.storageView.registerView(this, {
            manualOpening: !0,
            enableAveragePrice: !1,
            enableSlotContext: !1,
            showBankButton: !0,
            filters: {
                quest: !0,
                preset: !0
            }
        }), this.on("open", this._onOpen), this.on("closed", this._onClose)
    }
    i(1026);
    var o = i(418),
        a = i(1027),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(469),
        l = o.setDroppable,
        d = i(70),
        u = i(52),
        p = i(129);
    s(n, d), e.exports = n, n.prototype.freeContent = function() {
        this.storageView.storageUI.getParent() === this.storageBox && (this.storageView.unloadContent(), this.storageBox.removeChild(this.storageView.storageUI)), this.storageBox = null, this.drawer.clearCharacter(), this.windowBody.removeChild(this.drawer), this.drawerNeedsUpdate = !0, this.windowBody.clearContent(), this.hasDom = !1
    }, n.prototype._onOpen = function() {
        this.hasDom || this._createDom(), this.isListening || this._setupEvents(), this.alignWithCharacteristics(), this.storageBox.appendChild(this.storageView.storageUI), this.storageView.setBankButtonAvailability(), this.drawer.resetItem()
    }, n.prototype._onClose = function() {
        this.drawer.resetItem()
    }, n.prototype.alignWithCharacteristics = function() {
        var e = u.getWindow("characteristics");
        e.openState && (this.setStyle("top", e.getStyle("top")), u.arrangeOpeningWindow(this.id, {
            rightOf: e.id,
            sameHeight: !0
        }))
    }, n.prototype.getEquipmentSlotsForTuto = function() {
        if (this.drawer) return this.drawer.getSlots()
    }, n.prototype._setupEvents = function() {
        function e() {
            t.drawer.removePossiblePositionsHighlight()
        }
        this.isListening = !0;
        var t = this,
            i = window.gui;
        this.on("opened", function() {
            this.drawerNeedsUpdate && (this.drawerNeedsUpdate = !1, this.drawer.updateCharacter(), this.drawer.setColoAvailability(), this.drawer.setEquipment())
        }), this.on("slot-tap", function(e) {
            var t = e.itemInstance;
            t && (this.drawer.displayItem(t), this.emit("itemSelected", t))
        }), this.on("slot-doubletap", function(e) {
            e.itemInstance.doDefaultAction()
        }), this.on("slot-dragStart", function(t) {
            var i = t.dbItem.type.possiblePositions;
            i.length && this.drawer.highlightPossiblePositions(i), o.once("dragEnd", e)
        }), this.on("focus", function() {
            i.fightManager.isInBattle() || i.shortcutBar.openPanel("item")
        }), this.drawer.on("equippableHighlighted", function(e) {
            t.emit("equippableHighlighted", e)
        }), this.drawer.on("itemDropped", function(e, i) {
            t.emit("itemDropped", e, i)
        }), this.drawer.on("itemSelect", function() {
            t.storageView.unSelectSlot()
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(p.DISABLE_CLOSE_BTN);
            t.toggleClassName("disableCloseBtn", e)
        })
    }, n.prototype._createDom = function() {
        this.hasDom = !0, this.storageBox = this.windowBody.createChild("div", {
            className: "storageBox"
        }), l(this.storageBox, ["characterBox"]), this.storageBox.on("drop", function(e) {
            window.dofus.sendMessage("ObjectSetPositionMessage", {
                objectUID: e.itemInstance.objectUID,
                position: c.positions.notEquipped,
                quantity: 1
            })
        }), this.drawer = this.windowBody.appendChild(this.drawer || new a)
    }
}
