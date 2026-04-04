function(e, t, i) {
    function n() {
        var e = this,
            t = function() {
                e._enableButtons(!1), e._buy()
            },
            i = function() {
                e._retryError && s.error("ToaRetryPopup retry cancelled", e._retryError), d.close(e.id)
            };
        l.call(this, {
            className: ["ToaRetryPopup", "orangeYesButton"],
            positionInfo: {
                left: "c",
                top: "c",
                width: 600,
                height: 200
            },
            noCloseButton: !0,
            confirm: !0,
            customConfirm: t,
            customNo: i
        }), this._domCreated = !1, this._stepNumber = -1, this._retryError = null, this._logic = new c, this._message = this.box.createChild("div", {
            className: "message"
        }), this.on("open", function(t) {
            e._domCreated || e._createDom(), e._retryError = null, e._stepNumber = t.stepNumber, e._enableButtons(!0), e.setTitle(r("ui.toa.retryTitle")), window.gui.gifts.getToaRetryPendingUid()
                .length ? e._message.setText(r("ui.toa.retryOwned")) : e._message.setText(r("ui.toa.retryMessage", a.TOA_RETRY_HC_PRICE))
        })
    }
    i(1366);
    var o = i(56)
        .inherits,
        a = i(13),
        r = i(17)
        .getText,
        s = i(34)
        .logger,
        c = i(1367),
        l = i(951),
        d = i(52);
    o(n, l), e.exports = n, n.prototype._createDom = function() {
        this._buttonYes.setLabel(a.TOA_RETRY_HC_PRICE.toString()), this._buttonYes.toggleBtnIconDisplay(!0), this._buttonNo.setLabel(r("ui.common.no")), this._setupListeners(window.gui), this._domCreated = !0
    }, n.prototype._buy = function() {
        var e = this;
        this._retryError = null, this._logic.buy(this._stepNumber, window.gui.playerData.inventory, function(t, i) {
            e._buyCallback(t, i)
        })
    }, n.prototype._buyCallback = function(e, t) {
        return e ? e.message === this._logic.NEED_HC ? void this._enableButtons(!0) : e.message === this._logic.ALREADY_IN_PROGRESS ? void s.warning("ToaRetryPopup: already in process") : e.message === this._logic.GET_STORE_INFOS_ERROR ? (this._enableButtons(!0), void this._retry(e)) : e.message === this._logic.CANNOT_ASSIGN_PENDING_RETRY ? (this._enableButtons(!0), window.gui.openPopup({
            title: r("ui.common.error"),
            message: r("tablet.shop.couldNotBuy") + " (code: caprerr)"
        }), s.error("ToaRetryPopup buy (caprerr)", e), void d.close(this.id)) : e.message === this._logic.GIFT_TIMEOUT ? (this._enableButtons(!0), window.gui.openPopup({
            title: r("tablet.gift.unableToAssignTitle"),
            message: r("tablet.gift.unableToAssign") + " (code: gterr)"
        }), s.error("ToaRetryPopup buy (gterr)", e), void d.close(this.id)) : (this._enableButtons(!0), window.gui.openPopup({
            title: r("ui.common.error"),
            message: r("tablet.shop.couldNotBuy") + " (code: genbuyerr)"
        }), s.error("ToaRetryPopup buy (genbuyerr)", e), void d.close(this.id)) : (window.dofus.sendMessage("ContinueTowerOfAscensionWithCreditRequestMessage", {
            stepNumber: t
        }), this._enableButtons(!0), void d.close(this.id))
    }, n.prototype._setupListeners = function(e) {
        this._logic.initialize(e.gifts)
    }, n.prototype._enableButtons = function(e) {
        return e ? (this._buttonYes.enable(), this._buttonNo.enable(), void this._buttonYes.delClassNames("spinner")) : (this._buttonYes.disable(), this._buttonNo.disable(), void this._buttonYes.addClassNames("spinner"))
    }, n.prototype._retry = function(e) {
        this.setTitle(r("ui.common.error")), this._message.setText(r("ui.popup.accessDenied.serviceUnavailable") + " " + r("tablet.common.askRetry")), this._retryError = e
    }
}
