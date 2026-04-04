function(e, t, i) {
    function n() {
        this._cb = null, this._inventory = null, this._actionIdMap = {}, this._giftModule = null, this._giftTimeout = null, this._stepNumber = -1
    }
    var o = i(105),
        a = i(838),
        r = i(34),
        s = r.logger,
        c = i(13);
    n.prototype.STEP_NUMBER_IS_NOT_A_VALID_NUMBER = "stepNumberIsNotAValidNumber", n.prototype.GET_STORE_INFOS_ERROR = "storeInfosFailed", n.prototype.ALREADY_IN_PROGRESS = "alreadyInProgress", n.prototype.NEED_HC = "needHardCurrency", n.prototype.CANNOT_ASSIGN_PENDING_RETRY = "cannotAssignPendingRetry", n.prototype.GIFT_TIMEOUT = "giftTimeout", e.exports = n, n.prototype.initialize = function(e) {
        function t(e) {
            if (e.length)
                for (var t = 0; t < e.length; t += 1) {
                    for (var n = e[t], o = n.uid, a = n.items || [], r = null, s = 0; s < a.length; s += 1)
                        if (a[s].objectGID === c.TOA_RETRY_ITEM_ID) {
                            r = a[s];
                            break
                        } r && (i._actionIdMap[o] = !0)
                }
        }
        var i = this;
        this._giftModule = e, o.on("StartupActionsListMessage", function(e) {
            t(e.actions)
        }), o.on("StartupActionAddMessage", function(e) {
            t([e.newAction])
        }), o.on("toaContinueError", function(e) {
            if ("PAIDFAILED" === e.reason) {
                var t = i._inventory.goultines;
                return a.openNotEnoughHardCurrencyPopup(c.TOA_RETRY_HC_PRICE - t), i._fireCallbackAndClean(new Error(i.NEED_HC))
            }
            return i._fireCallbackAndClean(e)
        }), e.on("giftAssignRequestResult", function(e) {
            if (i._actionIdMap[e.actionId]) return delete i._actionIdMap[e.actionId], i._fireCallbackAndClean()
        }), o.on("toaContinueSuccess", function() {
            i._startGiftTimeout(), r.send("moneyGoultinesAmountRequest")
        })
    }, n.prototype.buy = function(e, t, i) {
        var n = this;
        if (this._cb) return i(new Error(n.ALREADY_IN_PROGRESS));
        var o = e === parseInt((e || 0)
            .toString(), 10);
        if (!e || !o || e < 0) return i(new Error(this.STEP_NUMBER_IS_NOT_A_VALID_NUMBER + ": " + e));
        if (this._stepNumber = e, this._inventory = t, this._cb = i, this._giftModule.getToaRetryPendingUid()
            .length) {
            var s = this._giftModule.getToaRetryPendingUid()[0];
            this._actionIdMap[s] = !0;
            var l = this._giftModule.assignPendingToaRetry(s);
            if (!l) return this._fireCallbackAndClean(new Error(n.CANNOT_ASSIGN_PENDING_RETRY))
        } else this._giftModule.setAutoAssign(!0), a.getStoreInfos(function(e) {
            if (e) return n._fireCallbackAndClean(new Error(n.GET_STORE_INFOS_ERROR));
            var t = n._inventory.goultines;
            return t - c.TOA_RETRY_HC_PRICE < 0 ? (a.openNotEnoughHardCurrencyPopup(c.TOA_RETRY_HC_PRICE - t), n._fireCallbackAndClean(new Error(n.NEED_HC))) : void r.send("toaContinue", {
                goultinesAmount: t
            })
        })
    }, n.prototype._fireCallbackAndClean = function(e) {
        this._cb ? this._cb(e, this._stepNumber) : s.error(new Error("ToaRetryPopupLogic: cb is falsy")), this._inventory = null, this._cb = null, this._stepNumber = -1, this._actionIdMap = {}, this._giftModule.setAutoAssign(!1), this._stopGiftTimeout()
    }, n.prototype._startGiftTimeout = function() {
        var e = this;
        this._giftTimeout = setTimeout(function() {
            e._fireCallbackAndClean(new Error(e.GIFT_TIMEOUT))
        }, c.TOA_RETRY_TIMEOUT)
    }, n.prototype._stopGiftTimeout = function() {
        clearTimeout(this._giftTimeout)
    }
}
