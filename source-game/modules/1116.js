function(e, t, i) {
    function n() {
        m.call(this, {
            title: d("ui.mimicry.associate"),
            className: "MimicryWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 450,
                height: 326
            }
        }), this._reset(), this.on("open", this._onOpen), this.on("close", this._onClose), this._setListeners()
    }

    function o(e, t, i) {
        var n = e.createChild("div", {
            className: ["slotDiv", t]
        });
        n.createChild("div", {
            className: "icon"
        });
        var o = n.appendChild(new h);
        return o.mySlotDiv = n, i && b.addTooltip(n, i), o
    }

    function a() {
        this.backgroundImage = null
    }

    function r(e, t, i) {
        var n = this.mySlot;
        return "mimicry" !== i || e.slot !== n
    }
    i(1117);
    var s = i(418),
        c = i(86),
        l = i(549),
        d = i(17)
        .getText,
        u = i(56)
        .inherits,
        p = i(469),
        h = i(871),
        f = i(814),
        b = i(88),
        m = i(70),
        M = i(52);
    u(n, m), e.exports = n, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this._reset()
    }, n.prototype._reset = function() {
        this.mimicryItem = null, this.foodItem = null, this.hostItem = null, this.previewItem = null, this.hasDom = !1, this.hostSlot = this.foodSlot = this.mimicrySlot = this.previewSlot = null, this.selectedSlot = null
    }, n.prototype._onOpen = function(e) {
        var t = window.gui.playerData.inventory.objects;
        this.mimicryItem = t[e], this.mimicryItem || console.error("Missing mimicry. UID=" + e), this.hasDom || this._createDom(), this._prepareItemPickingWindow(), this.mimicrySlot.setItem(this.mimicryItem, 1), this._showHelp(d("tablet.mimicry.help")), this.mergeBtn.disable()
    }, n.prototype._onClose = function() {
        this.itemPicking && (this.itemPicking.removeAllListeners("close"), this.itemPicking.removeAllListeners("unpickItem"), this.itemPicking.removeAllListeners("slot-doubletap"), this.itemPicking = null), M.close("itemPicking")
    }, n.prototype._prepareItemPickingWindow = function() {
        var e = this.itemPicking = M.open("itemPicking");
        e.once("close", function() {
            M.close("mimicry")
        }), e.on("unpickItem", this._dragItemAwayFromSlot.bind(this)), e.on("slot-doubletap", this._addItemByDoubleTap.bind(this)), e.showEquippableItems(), M.arrangeOpeningWindow(this.id, {
            leftOf: e.id
        })
    }, n.prototype._createDom = function() {
        this.hasDom = !0;
        var e = this.windowBody.createChild("div", {
                className: "content"
            }),
            t = e.createChild("div", {
                className: "workDiv"
            }),
            i = t.createChild("div", {
                className: "slotsZone"
            });
        this.mimicrySlot = o(i, "mimicrySlot", d("ui.mimicry.mimicry") + " " + d("ui.mimicry.toBeDestroyed")), i.createChild("div", {
            className: "plusOrEqualSign",
            text: "+"
        }), this.hostSlot = o(i, "hostSlot", d("tablet.mimicry.host")), i.createChild("div", {
            className: "plusOrEqualSign",
            text: "+"
        }), this._setActiveSlot(this.hostSlot), this.foodSlot = o(i, "foodSlot", d("tablet.mimicry.food") + " " + d("ui.mimicry.toBeDestroyed")), i.createChild("div", {
            className: "plusOrEqualSign",
            text: "="
        }), this._setActiveSlot(this.foodSlot), this.previewSlot = o(i, "previewSlot", d("ui.craft.itemCreated")), this.messageBox = t.createChild("div"), this.messageText = this.messageBox.createChild("div", {
            className: "msgText"
        }), this.mergeBtn = e.appendChild(new c({
            text: d("ui.common.merge"),
            className: ["greenButton", "mergeBtn"]
        }, this._mergeBtnAction.bind(this)))
    }, a.prototype.prepareForDrag = function(e) {
        var t = e.slot;
        return !!t.data && (this.backgroundImage = t.getImage(), !0)
    }, n.prototype._setActiveSlot = function(e) {
        var t = e.mySlotDiv,
            i = {
                isDropAllowed: r
            };
        s.setDroppable(t, ["itemPicking", "mimicry"], i), t.mySlot = e;
        var n = this;
        t.on("drop", function(t, i) {
            n._dropItem(t.getItem(), e, i)
        });
        var o = new a,
            c = {
                dragElement: !1
            };
        s.setDraggable(e, o, "mimicry", {
            slot: e
        }, c), e.on("tap", function() {
            n._simpleTapOnSlot(e)
        }), e.on("doubletap", function() {
            n._simpleTapOnSlot(e), n._simpleTapOnSlot(e)
        })
    }, n.prototype._simpleTapOnSlot = function(e) {
        e.getItem() && (e === this.selectedSlot ? (e.unselect(), e.unset(), this._refreshAfterSlotChange()) : (this.selectedSlot && this.selectedSlot.unselect(), this.selectedSlot = e, e.select()))
    }, n.prototype._dragItemAwayFromSlot = function(e, t) {
        "mimicry" === t && (e.unset(), this._refreshAfterSlotChange())
    }, n.prototype._dropItem = function(e, t, i) {
        if ("mimicry" === i) {
            var n = t === this.hostSlot ? this.foodSlot : this.hostSlot,
                o = t.getItem();
            n.setItem(o, 1), t.setItem(e, 1)
        } else t.setItem(e, 1);
        this._refreshAfterSlotChange()
    }, n.prototype._addItemByDoubleTap = function(e) {
        var t = e.getItem();
        if (this.hostItem)
            if (this.foodItem) t.objectUID === this.foodItem.objectUID || t.objectUID === this.hostItem.objectUID ? (this.hostSlot.setItem(t, 1), this.foodSlot.unset()) : this.foodSlot.setItem(t, 1);
            else {
                if (t.objectUID === this.hostItem.objectUID) return;
                this.foodSlot.setItem(t, 1)
            }
        else this.hostSlot.setItem(t, 1);
        this._refreshAfterSlotChange()
    }, n.prototype._refreshAfterSlotChange = function() {
        this._clearPreviewSlot(), this.mergeBtn.disable(), this.selectedSlot && (this.selectedSlot.unselect(), this.selectedSlot = null);
        var e = this.hostItem = this.hostSlot.getItem(),
            t = this.foodItem = this.foodSlot.getItem();
        return e && !e.item.isEquippable() ? this._showError(d("tablet.mimicry.errorEquippable")) : t && !t.item.isEquippable() ? this._showError(d("tablet.mimicry.errorEquippable")) : e && t ? e.getProperty("iconId") === t.getProperty("iconId") ? this._showError(d("ui.mimicry.error.sameSkin")) : e.getProperty("typeId") !== t.getProperty("typeId") ? this._showError(d("ui.mimicry.error.foodType")) : t.getProperty("level") > e.getProperty("level") ? this._showError(d("ui.mimicry.error.foodLevel")) : void this._requestMergeOrPreview(!0) : e ? this._showHelp(d("tablet.mimicry.helpFood")) : this._showHelp(d("tablet.mimicry.help"));
    }, n.prototype._requestMergeOrPreview = function(e) {
        window.dofus.sendMessage("MimicryObjectFeedAndAssociateRequestMessage", {
            mimicryUID: this.mimicryItem.objectUID,
            mimicryPos: this.mimicryItem.position,
            foodUID: this.foodItem.objectUID,
            foodPos: this.foodItem.position,
            hostUID: this.hostItem.objectUID,
            hostPos: this.hostItem.position,
            preview: e
        })
    }, n.prototype._mergeBtnAction = function() {
        var e = this;
        window.gui.openConfirmPopup({
            message: d("ui.mimicry.confirmPopup", this.hostItem.getName(), this.foodItem.getName(), this.mimicryItem.getName()),
            cb: function(t) {
                t && (e.mergeBtn.disable(), e._requestMergeOrPreview(!1))
            }
        })
    }, n.prototype._clearPreviewSlot = function() {
        this.previewItem = null, this.previewSlot.unset(), this.previewSlot.delClassNames("success")
    }, n.prototype._showPreviewItem = function(e) {
        this.previewItem = e, this.previewSlot.setItem(e), this.previewSlot.addClassNames("success"), this.mergeBtn.enable(), e.item.isChangingCharacterLookWhenEquipped() ? this._showHelp(d("tablet.mimicry.helpMerge")) : this._showWarning(d("tablet.mimicry.fixedAppearance"))
    }, n.prototype._showHelp = function(e) {
        this.messageBox.setClassNames(["msgBox", "help"]), this.messageText.setText(e)
    }, n.prototype._showWarning = function(e) {
        this.messageBox.setClassNames(["msgBox", "warn"]), this.messageText.setText(e)
    }, n.prototype._showError = function(e) {
        this.messageBox.setClassNames(["msgBox", "error"]), this.messageText.setText(e)
    }, n.prototype._setListeners = function() {
        var e = window.dofus.connectionManager,
            t = this;
        e.on("ClientUIOpenedByObjectMessage", function(e) {
            e.type === l.CLIENT_UI_OBJECT_MIMICRY && M.open(t.id, e.uid)
        }), e.on("MimicryObjectPreviewMessage", function(e) {
            p.createItemInstances(e.result, function(e, i) {
                return e ? console.error("Failed creating preview item:" + e) : void t._showPreviewItem(i.array[0])
            })
        }), e.on("MimicryObjectAssociatedMessage", function(e) {
            var i = window.gui.playerData.inventory.objects,
                n = i[e.hostUID],
                o = "{itemStats," + n.objectGID + "," + n.objectUID + "}";
            window.gui.chat.logMsg(d("ui.mimicry.success", o)), M.close(t.id)
        }), e.on("MimicryObjectErrorMessage", function(e) {
            if (e.reason === f.MIMICRY_OBJECT_ERROR) {
                var i, n = !1;
                switch (e.errorCode) {
                    case -1:
                        i = d("ui.error.state");
                        break;
                    case -2:
                        i = d("ui.charSel.deletionErrorUnsecureMode");
                        break;
                    case -7:
                        i = d("ui.mimicry.error.foodType");
                        break;
                    case -8:
                        i = d("ui.mimicry.error.foodLevel");
                        break;
                    case -9:
                        i = d("ui.mimicry.error.noValidMimicry");
                        break;
                    case -10:
                        i = d("ui.mimicry.error.noValidHost");
                        break;
                    case -11:
                        i = d("ui.mimicry.error.noValidFood");
                        break;
                    case -16:
                        i = d("ui.mimicry.error.noMimicryAssociated");
                        break;
                    case -17:
                        i = d("ui.mimicry.error.sameSkin");
                        break;
                    case -3:
                    case -4:
                    case -5:
                    case -6:
                    case -12:
                    case -13:
                    case -14:
                    case -15:
                        i = d("ui.popup.impossible_action"), n = !0;
                        break;
                    default:
                        i = d("ui.common.unknownFail"), n = !0
                }
                n && console.error("Abnormal mimicry error: " + e.errorCode), t._showError(i)
            }
        })
    }
}
