function(e, t, i) {
    function n() {}

    function o(e, t) {
        return new Error("store#" + e + ": " + t)
    }

    function a(e, t, i) {
        var n = this;
        if (this._logger = e, !this._logger || !this._logger.error) throw new Error("Need the logger.");
        this._makePurchaseCb = null, this._alreadyFinishedTransaction = {}, this._purchasingProduct = "", this._accountId = "", this._keys = [], this._storePlugin = t, this._storePlugin && this._storePlugin.store || this._logger.error(o("constructor", "Cannot find the store plugin.")), this._device = "", i && this._storePlugin && this._storePlugin.store && (i.isAndroid ? this._device = this._storePlugin.store.GOOGLE_PLAY : i.isIOS && (this._device = this._storePlugin.store.APPLE_APPSTORE)), this._device || this._logger.error(o("constructor", "Cannot find the device type.")), this.isAvailable() && (this._storePlugin.store.verbosity = this._storePlugin.LogLevel.QUIET, this._storePlugin.store.error(function(e) {
            if (e.code !== n._storePlugin.ErrorCode.PAYMENT_CANCELLED) {
                var t = n._storePlugin.ErrorCode[e.code] || "";
                n._logger.error(o("onError", t + " (" + e.code + "): " + e.message))
            }
        }), this._setStoreListeners())
    }
    var r = i(1483),
        s = i(1484),
        c = "init",
        l = "update";
    e.exports = a, a.prototype._setStoreListeners = function() {
        var e = this;
        this._storePlugin.store.when("consumable")
            .approved(function(t) {
                e._approveTransaction(t)
            })
    }, a.prototype._callbackStoreOrder = function(e, t) {
        return this._makePurchaseCb ? (e ? this._makePurchaseCb(o("order", e)) : this._makePurchaseCb(null, t), this._makePurchaseCb = null, void(this._purchasingProduct = "")) : void this._logger.error(o("order", 'callback called but no callbacks. Purchasing product: "' + this._purchasingProduct + '"'))
    }, a.prototype._approveTransaction = function(e) {
        var t = e.products || [],
            i = t[0] || {};
        if (this._makePurchaseCb && this._purchasingProduct === i.id) {
            var n = this._storePlugin.store.get(i.id);
            if (!n) return this._callbackStoreOrder(o("_approveTransaction", "No product found for " + i.id)
                .toString());
            var a = new s(this._logger, n, e);
            this._callbackStoreOrder(null, a.getWizPurchaseObject())
        }
    }, a.prototype._storeRefresh = function(e, t) {
        function i(e) {
            n && (e ? n(o("refresh", e)) : n(), n = null)
        }
        var n = t,
            a = this;
        e === c ? a._storePlugin.store.initialize([a._device])
            .then(function() {
                i()
            })["catch"](function(e) {
                i("FAILED INIT: " + e)
            }) : a._storePlugin.store.update()
            .then(function() {
                i()
            })["catch"](function(e) {
                i("FAILED UPDATE: " + e)
            })
    }, a.prototype.isAvailable = function() {
        return Boolean(this._storePlugin && this._device)
    }, a.prototype.setAccountUid = function(e, t, i) {
        if (i = i || n, !this.isAvailable()) return i(new Error("not available."));
        this._accountId = t;
        var o = "";
        "0" === this._accountId && (this._accountId = "", o = "setAccountUid v2 failure: missing accountId but token " + e, this._logger.error(new Error(o))), "" === e && (o = "setAccountUid v2 failure: missing token but accountId " + this._accountId, this._logger.error(new Error(o))), this._setApplicationUsername(e), i()
    }, a.prototype._setApplicationUsername = function(e) {
        this._storePlugin.store.applicationUsername = e
    }, a.prototype.getProductDetails = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        if (!Array.isArray(e)) return t(new Error("Need an array."));
        for (var i = new r(this._logger), n = 0; n < e.length; n += 1) {
            var o = e[n],
                a = this._storePlugin.store.get(o);
            a && i.addProduct(o, a)
        }
        return t(null, i.getProductsRequest())
    }, a.prototype.register = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        if (!Array.isArray(e)) return t(new Error("Need an array."));
        for (var i = [], n = 0; n < e.length; n += 1) {
            var o = e[n],
                a = this._storePlugin.store.get(o);
            a || (i.push({
                id: o,
                type: this._storePlugin.ProductType.CONSUMABLE,
                platform: this._device
            }), this._keys.push(o))
        }
        this._storePlugin.store.register(i), this._storeRefresh(c, t)
    }, a.prototype.finishPurchase = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        var i = this,
            n = this._storePlugin.store.localTransactions;
        if (!n.length) return t(o("finishPurchase", "No transaction found for " + e));
        for (var a = null, r = n.length - 1; r >= 0; r -= 1) {
            var s = n[r];
            if (s.state === i._storePlugin.TransactionState.APPROVED && !this._alreadyFinishedTransaction[s.transactionId]) {
                var c = s.products || [],
                    l = c[0] || {};
                if (l.id === e) {
                    a = s;
                    break
                }
            }
        }
        return a ? void a.finish()
            .then(function() {
                return i._alreadyFinishedTransaction[a.transactionId] = !0, t()
            })["catch"](function(e) {
                return t(o("finishPurchase", "Cannot finish, " + e))
            }) : t(o("finishPurchase", "No last transaction found for " + e))
    }, a.prototype.makePurchase = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        var i = this,
            n = this._storePlugin.store.get(e);
        if (!n) return t(o("makePurchase", "No product found for " + e));
        var a = n.getOffer();
        if (!a) return t(o("makePurchase", "No offer found for " + e));
        var r = {},
            s = this._storePlugin.store.getApplicationUsername();
        this._device === this._storePlugin.store.GOOGLE_PLAY ? (this._accountId || this._logger.error(o("tokenv2", "Cannot find the token (Google). acc: " + this._accountId + " ; au: " + s)), r.googlePlay = {
                accountId: this._accountId
            }) : s || this._logger.error(o("tokenv2", "Cannot find the token (Apple). acc: " + this._accountId + " ; au: " + s)), this._purchasingProduct = e, this._makePurchaseCb = t, this._storePlugin.store.order(a, r)
            .then(function(e) {
                if (e && e.isError) return i._callbackStoreOrder(e.message)
            })["catch"](function(e) {
                i._callbackStoreOrder(e)
            })
    }, a.prototype.restoreAllPurchases = function(e) {
        return this.isAvailable() ? e(null, []) : e(new Error("not available."))
    }, a.prototype.getPendingPurchases = function(e) {
        if (!this.isAvailable()) return e(new Error("not available."));
        var t = [],
            i = this._storePlugin.store.localTransactions;
        if (!i.length) return e(null, t);
        for (var n = i.length - 1; n >= 0; n -= 1) {
            var o = i[n];
            if (o.state === this._storePlugin.TransactionState.APPROVED && !this._alreadyFinishedTransaction[o.transactionId]) {
                var a = o.products || [],
                    r = a[0] || {};
                if (r.id) {
                    var c = this._storePlugin.store.get(r.id);
                    if (c) {
                        var l = new s(this._logger, c, o);
                        t.push(l.getWizPurchaseObject())
                    }
                }
            }
        }
        return e(null, t)
    }, a.prototype.refreshReceipt = function(e) {
        return this.isAvailable() ? this._storeRefresh(l, e) : e(new Error("not available."))
    }, a.prototype.isAlreadyOwnedError = function() {
        return !1
    }
}
