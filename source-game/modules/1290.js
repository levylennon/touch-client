function(e, t, i) {
    function n() {
        function e() {
            c.open("craftPayment")
        }
        this._positionInfoNormal = {
            left: "c",
            bottom: "10%",
            width: 550,
            height: 165
        }, this._positionInfoOnSuccess = {
            left: "c",
            bottom: "10%",
            width: 550,
            height: 225
        }, a.call(this, {
            className: "CraftPaymentWindow",
            title: r("ui.common.payment"),
            positionInfo: this._positionInfoNormal,
            customClose: !0
        });
        var t = this,
            i = window.gui;
        this._domCreated = !1, this._readOnly = !1, this.closeButton.on("tap", function() {
            t.hide()
        }), i.on("ExchangeGoldPaymentForCraftMessage", function(i) {
            var n = i.goldSum;
            i.onlySuccess ? t._successPayment.setKama(n) : t._normalPayment.setKama(n), e()
        }), i.on("ExchangeItemPaymentForCraftMessage", function(i) {
            h.createItemInstances(i.object, function(n, o) {
                if (n) return console.error("PaymentWindow: ExchangeItemPaymentForCraftMessage cannot createItemInstances", n);
                var a = o.array[0];
                i.onlySuccess ? t._successPayment.addItem(a) : t._normalPayment.addItem(a), e()
            })
        }), i.on("ExchangeModifiedPaymentForCraftMessage", function(i) {
            h.createItemInstances(i.object, function(n, o) {
                if (n) return console.error("PaymentWindow: ExchangeModifiedPaymentForCraftMessage cannot createItemInstances", n);
                var a = o.array[0];
                i.onlySuccess ? t._successPayment.modifyItem(a) : t._normalPayment.modifyItem(a), e()
            })
        }), i.on("ExchangeRemovedPaymentForCraftMessage", function(i) {
            i.onlySuccess ? t._successPayment.removeItem(i.objectUID) : t._normalPayment.removeItem(i.objectUID), e()
        }), i.on("ExchangeClearPaymentForCraftMessage", function(e) {
            e.paymentType === d.PAYMENT_ON_SUCCESS_ONLY && t._successPayment.clearPayment(), e.paymentType === d.PAYMENT_IN_ANY_CASE && t._normalPayment.clearPayment(), t.hide()
        }), this.once("open", function() {
            t._domCreated || t._createDom()
        }), this.on("close", function() {
            t._normalPayment.reset(), t._successPayment.reset(), t._readOnly = !1
        })
    }
    i(1291);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(86)
        .DofusButton,
        c = i(52),
        l = i(1292),
        d = i(1294),
        u = i(418),
        p = i(421),
        h = i(469);
    o(n, a), e.exports = n, n.prototype._createDom = function() {
        function e(e) {
            window.dofus.sendMessage("ExchangeItemObjectAddAsPaymentMessage", {
                paymentType: a,
                bAdd: !0,
                objectToMoveId: o,
                quantity: e
            })
        }

        function t(t, i) {
            return o = t, 1 === i ? e(1) : void n._minMaxSelector.open({
                min: 1,
                max: i
            })
        }

        function i(e) {
            if (!n._readOnly) {
                a = this.paymentType;
                var i = e.itemInstance,
                    o = e.getQuantity();
                t(i.objectUID, o)
            }
        }
        var n = this,
            o = null,
            a = d.PAYMENT_IN_ANY_CASE;
        this._minMaxSelector = this.appendChild(new p), this._minMaxSelector.setStyles({
            left: "20px",
            top: "30px"
        });
        var c = this.windowBody,
            h = this._normalPayment = c.appendChild(new l(d.PAYMENT_IN_ANY_CASE)),
            f = this._successPayment = c.appendChild(new l(d.PAYMENT_ON_SUCCESS_ONLY));
        this._minMaxSelector.on("confirm", e), u.setDroppable(h, ["craftInventory"]), h.on("drop", i), h.paymentType = d.PAYMENT_IN_ANY_CASE, this._addDragEvents(h), u.setDroppable(f, ["craftInventory"]), f.on("drop", i), f.paymentType = d.PAYMENT_ON_SUCCESS_ONLY, this._addDragEvents(f), h.on("kamaChange", function(e) {
            window.dofus.sendMessage("ExchangeItemGoldAddAsPaymentMessage", {
                paymentType: d.PAYMENT_IN_ANY_CASE,
                quantity: e
            })
        }), f.on("kamaChange", function(e) {
            window.dofus.sendMessage("ExchangeItemGoldAddAsPaymentMessage", {
                paymentType: d.PAYMENT_ON_SUCCESS_ONLY,
                quantity: e
            })
        });
        var b = c.appendChild(new s(r("ui.common.confirm"), {
            className: "confirmBtn"
        }));
        b.on("tap", function() {
            n.hide()
        }), n._domCreated = !0
    }, n.prototype.setForCrafter = function(e) {
        this._domCreated || this._createDom(), this._normalPayment.setReadonly(e), this._successPayment.setReadonly(e), this._readOnly = e
    }, n.prototype.setOnSuccess = function(e) {
        this._domCreated || this._createDom(), this._successPayment.toggleDisplay(e), e ? this.positionInfo = this._positionInfoOnSuccess : this.positionInfo = this._positionInfoNormal
    }, n.prototype._addDragEvents = function(e) {
        function t(e, t) {
            n && n.selectSlots(t)
        }
        var i = this,
            n = e;
        u.on("dragStart", i.localizeEvent(function(e, i, n) {
            t(n.source, !0)
        })), u.on("dragEnd", i.localizeEvent(function(e, i, n) {
            t(n.source, !1)
        }))
    }
}
