function(e, t, i) {
    function n() {
        function e() {
            d += 1
        }

        function t(e) {
            var t = e.ready,
                i = o._buttonMerge;
            o._craftResultBox.toggleReady(t), o._mySlotElems.toggleReady(t), o._targetSlotElems.toggleReady(t), t ? l.playerData.id === e.id && (i.setText(a("ui.common.cancel")), o._restoreMergeStopButtons()) : (i.setText(a("ui.common.merge")), o._isReady = !1)
        }

        function i() {
            o._craftResultBox.toggleReady(!1), o._mySlotElems.toggleReady(!1), o._targetSlotElems.toggleReady(!1), o._buttonMerge.setText(a("ui.common.merge")), o._isReady = !1
        }

        function n(i) {
            var n = i._messageType;
            if (o.openState) switch (n) {
                case "ExchangeObjectAddedMessage":
                case "FMExchangeObjectAddedMessage":
                case "ExchangeObjectModifiedMessage":
                case "ExchangeObjectRemovedMessage":
                case "ExchangeGoldPaymentForCraftMessage":
                case "ExchangeItemPaymentForCraftMessage":
                case "ExchangeModifiedPaymentForCraftMessage":
                case "ExchangeRemovedPaymentForCraftMessage":
                case "ExchangeClearPaymentForCraftMessage":
                    e();
                    break;
                case "ExchangeIsReadyMessage":
                    t(i);
                    break;
                default:
                    console.error(new Error(n + " not handle by CraftingMultiWindow"))
            }
        }
        r.call(this);
        var o = this,
            l = window.gui;
        this.jobsData = l.playerData.jobs, this._mySlotElems = null, this._targetSlotElems = null, this._craftResultBox = null, this._isReady = !1, this._otherName = "";
        var d = 0;
        this._updateSlotElems = function(e) {
            o._updateMySlotElems(e);
            var t = 9 === e;
            o._targetSlotElems.setPlayerName(o._otherName), o._targetSlotElems.setNbSlots(), o._targetSlotElems.setAsRemote(), o._mySlotElems.toggleSignatureSlot(t && "CRAFTER" === o.jobsData.craftSide), o._targetSlotElems.toggleSignatureSlot(t && "CLIENT" === o.jobsData.craftSide)
        }, this._onResultEvents = function(e) {
            i(), o._buttonMerge.disable(), o._onResult(e, function(e, t) {
                if (e) return console.error("Crafting multi: onResult error", e);
                var i = t.message,
                    n = t.craftResult,
                    r = t.objectInfo,
                    c = t.objectName,
                    l = r && r.quantity || 1;
                n === s.CRAFT_SUCCESS && (i = "CRAFTER" === o.jobsData.craftSide ? a("ui.craft.successTarget", l, c, o._otherName) : a("ui.craft.successOther", o._otherName, l, c)), o.giveTheResult(r, i)
            })
        }, l.on("ExchangeObjectAddedMessage", n), l.on("FMExchangeObjectAddedMessage", n), l.on("ExchangeObjectModifiedMessage", n), l.on("ExchangeObjectRemovedMessage", n), l.on("ExchangeGoldPaymentForCraftMessage", n), l.on("ExchangeItemPaymentForCraftMessage", n), l.on("ExchangeModifiedPaymentForCraftMessage", n), l.on("ExchangeRemovedPaymentForCraftMessage", n), l.on("ExchangeClearPaymentForCraftMessage", n), l.on("ExchangeIsReadyMessage", n), this.on("close", function() {
            o._otherName = "", d = 0, i(), c.close("craftPayment")
        }), this._buttonMergeAction = function() {
            var e = o._mySlotElems.getGivenIngredientsInfo()
                .length;
            e += o._targetSlotElems.getGivenIngredientsInfo()
                .length, e < 1 || (o._isReady = !o._isReady, window.dofus.sendMessage("ExchangeReadyMessage", {
                    ready: o._isReady,
                    step: d
                }))
        }
    }
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(1269),
        s = i(1271),
        c = i(52);
    o(n, r), e.exports = n, n.prototype._onOpen = function(e) {
        var t = e && e.sourceName || "",
            i = e && e.targetName || "",
            n = window.gui.playerData.characterBaseInformations.name,
            o = t === n;
        this._otherName = o ? i : t;
        var a = e && e.isCrafter;
        r.prototype._onOpen.call(this, e), c.close("cancel", {
            keepDialog: !0
        });
        var s = e && e.msg || {},
            l = s.enrichData && s.enrichData.jobName || "";
        this._targetSlotElems.setCrafterJobLevel(s.skillId, s.crafterJobLevel, l), this._targetSlotElems.show(), this._paymentButton.show();
        var d = c.getWindow("craftPayment");
        d.setForCrafter(a), d.setOnSuccess(!1)
    }
}
