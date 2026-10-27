function(e, t, i) {
    function n() {}

    function o() {
        if (d) return !0;
        var e = s();
        return e.gui.playerData.isAdmin()
    }

    function a(e, t) {
        return new Error("store#" + e + ": " + t)
    }

    function r(e) {
        if (this._logger = e, !this._logger || !this._logger.error) throw new Error("Need the logger.");
        this._makePurchaseCb = null, this._purchasingProduct = "", this._keys = [], this._accountId = "";
        var t = s();
        t.store && (t.store.verbosity = t.store.QUIET, this._setStoreListeners())
    }
    var s = i(14),
        c = i(1480),
        l = i(1481),
        d = !0,
        u = 5e3,
        p = 5e3,
        h = 5,
        f = {};
    f[1] = "UNKNOWN_ERROR", f[2] = "ARGS_TYPE_MISMATCH", f[3] = "ARGS_ARITY_MISMATCH", f[4] = "IOS_VERSION_ERR", f[5] = "INVALID_RECEIPT", f[6] = "INVALID_TRANSACTION_STATE", f[7] = "PURCHASE_NOT_FOUND", f[8] = "PURCHASE_NOT_PENDING", f[9] = "REMOTE_EXCEPTION", f[10] = "BAD_RESPONSE", f[11] = "BAD_SIGNATURE", f[12] = "SEND_INTENT_FAILED", f[13] = "USER_CANCELLED", f[14] = "INVALID_PURCHASE", f[15] = "MISSING_TOKEN", f[16] = "NO_SUBSCRIPTIONS", f[17] = "INVALID_CONSUMPTION", f[18] = "CANNOT_PURCHASE", f[19] = "UNKNOWN_PRODUCT_ID", f[20] = "ALREADY_OWNED", f[21] = "NOT_OWNED", f[22] = "INVALID_CLIENT", f[23] = "INVALID_PAYMENT", f[24] = "UNAUTHORIZED", f[25] = "RECEIPT_REFRESH_FAILED", e.exports = r, r.prototype._getWizPurchaseError = function(e) {
        return f[e] + " (code: " + e + ")" || e + " is not known error"
    }, r.prototype._setStoreListeners = function() {
        var e = this,
            t = s();
        t.store.when("consumable")
            .valid(function(i) {
                e._onStoreEvent(t.store.VALID, i)
            })
            .requested(function(i) {
                e._onStoreEvent(t.store.REQUESTED, i)
            })
            .initiated(function(i) {
                e._onStoreEvent(t.store.INITIATED, i)
            })
            .approved(function(i) {
                e._onStoreEvent(t.store.APPROVED, i)
            })
            .finished(function(i) {
                e._onStoreEvent(t.store.FINISHED, i)
            })
            .owned(function(i) {
                e._onStoreEvent(t.store.OWNED, i)
            })
            .downloading(function(i) {
                e._onStoreEvent(t.store.DOWNLOADING, i)
            })
            .downloaded(function(i) {
                e._onStoreEvent(t.store.DOWNLOADED, i)
            })
    }, r.prototype._callbackStoreOrder = function(e, t) {
        return this._makePurchaseCb ? (e ? this._makePurchaseCb(a("order", e)) : this._makePurchaseCb(null, t), this._makePurchaseCb = null, void(this._purchasingProduct = "")) : void this._logger.error(a("order", 'callback called but no callbacks. Purchasing product: "' + this._purchasingProduct + '"'))
    }, r.prototype._onStoreEvent = function(e, t) {
        var i = s();
        if (e === i.store.VALID && this._makePurchaseCb && this._purchasingProduct === t.id && this._callbackStoreOrder("CANCELLED"), e === i.store.APPROVED && this._makePurchaseCb && this._purchasingProduct === t.id) {
            var n = new l(this._logger, t);
            this._callbackStoreOrder(null, n.getWizPurchaseObject())
        }
    }, r.prototype._storeRefresh = function(e) {
        function t(e) {
            setTimeout(function() {
                r && (e ? r(a("refresh", e)) : r(), r = null)
            }, u), r && (clearTimeout(n), n = null)
        }

        function i() {
            o += 1;
            var a = s();
            a.store.refresh()
                .cancelled(function() {
                    t("CANCELLED")
                })
                .failed(function() {
                    t("FAILED")
                })
                .completed(function() {
                    t()
                })
                .finished(function() {}), n = setTimeout(function() {
                    if (r) return o >= h ? e(new Error("Max limit of refreshes reach.")) : void i()
                }, p)
        }
        var n, o = 0,
            r = e;
        return this.isAvailable() ? void i() : e(new Error("not available."))
    }, r.prototype._forcePurchaseCordova = function(e) {
        d = e
    }, r.prototype._setRefreshTimeout = function(e) {
        p = e
    }, r.prototype._setRefreshWaiting = function(e) {
        u = e
    }, r.prototype.isAvailable = function() {
        var e = s();
        return o() ? Boolean(e.store) : Boolean(e.wizPurchase)
    }, r.prototype._setApplicationUsername = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        var i = s();
        if (o()) return i.store.applicationUsername = e, t();
        var n = this;
        i.wizPurchase.setApplicationUsername(e, function() {
            t()
        }, function(e) {
            t(new Error(n._getWizPurchaseError(e)))
        })
    }, r.prototype.setAccountUid = function(e, t, i) {
        if (i = i || n, !this.isAvailable()) return i(new Error("not available."));
        var o = this;
        this._accountId = t;
        var a = "";
        "0" === this._accountId && (this._accountId = "", a = "setAccountUid v1 failure: missing accountId but token " + e, this._logger.error(new Error(a))), "" === e && (a = "setAccountUid v1 failure: missing token but accountId " + this._accountId, this._logger.error(new Error(a))), this._setApplicationUsername(e, function(t) {
            if (t) {
                var n = "setApplicationUsername v1 failure: for token " + e + " and accountId ";
                n += o._accountId + " with the error " + t, o._logger.error(new Error(n))
            }
            i()
        })
    }, r.prototype.getProductDetails = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        if (!Array.isArray(e)) return t(new Error("Need an array."));
        var i = s();
        if (o()) {
            for (var n = new c(i.store, this._logger), a = 0; a < e.length; a += 1) {
                var r = e[a],
                    l = i.store.get(r);
                n.addProduct(l)
            }
            return t(null, n.getProductsRequest())
        }
        var d = this;
        i.wizPurchase.getProductDetails(e, function(e) {
            t(null, e)
        }, function(e) {
            t(new Error(d._getWizPurchaseError(e)))
        })
    }, r.prototype.register = function(e, t) {
        var i = this;
        if (!this.isAvailable()) return t(new Error("not available."));
        if (!Array.isArray(e)) return t(new Error("Need an array."));
        var n = s();
        if (!o()) return t();
        n.store.error(function(e) {
            i._logger.error(a("onError", e.code + ": " + e.message))
        });
        for (var r = 0; r < e.length; r += 1) {
            var c = e[r],
                l = n.store.get(c);
            l || (n.store.register({
                id: c,
                alias: c,
                type: n.store.CONSUMABLE
            }), this._keys.push(c))
        }
        this._storeRefresh(t)
    }, r.prototype.finishPurchase = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        var i = s();
        if (o()) {
            var n = i.store.get(e);
            return n ? n.state !== i.store.APPROVED ? t(a("finishPurchase", "Cannot finish, " + e + " not APPROVED")) : (n.finish(), t()) : t(a("finishPurchase", "No product found for " + e))
        }
        var r = this;
        i.wizPurchase.finishPurchase(e, !0, function() {
            t()
        }, function(e) {
            t(new Error(r._getWizPurchaseError(e)))
        })
    }, r.prototype.makePurchase = function(e, t) {
        if (!this.isAvailable()) return t(new Error("not available."));
        var i = this,
            n = s();
        if (o()) {
            this._purchasingProduct = e, this._makePurchaseCb = t;
            var r = n.store.applicationUsername;
            return r || this._logger.error(a("tokenv1", "Cannot find the token (Apple). acc: " + this._accountId + " ; au: " + r)), void n.store.order(e)
                .then(function() {})
                .error(function(e) {
                    i._callbackStoreOrder(e)
                })
        }
        n.wizPurchase.makePurchase(e, function(e) {
            t(null, e)
        }, function(e) {
            t(new Error(i._getWizPurchaseError(e)))
        })
    }, r.prototype.restoreAllPurchases = function(e) {
        if (!this.isAvailable()) return e(new Error("not available."));
        var t = s();
        if (o()) return e(null, []);
        var i = this;
        t.wizPurchase.restoreAllPurchases(function(t) {
            return t = t || [], e(null, t)
        }, function(t) {
            e(new Error(i._getWizPurchaseError(t)))
        })
    }, r.prototype.getPendingPurchases = function(e) {
        if (!this.isAvailable()) return e(new Error("not available."));
        var t = s();
        if (o()) {
            for (var i = [], n = 0; n < this._keys.length; n += 1) {
                var a = this._keys[n],
                    r = t.store.get(a);
                if (r && r.state === t.store.APPROVED) {
                    var c = new l(this._logger, r);
                    i.push(c.getWizPurchaseObject())
                }
            }
            return e(null, i)
        }
        var d = this;
        t.wizPurchase.getPendingPurchases(function(t) {
            return t = t || [], e(null, t)
        }, function(t) {
            e(new Error(d._getWizPurchaseError(t)))
        })
    }, r.prototype.refreshReceipt = function(e) {
        if (!this.isAvailable()) return e(new Error("not available."));
        var t = s();
        if (o()) return this._storeRefresh(e);
        var i = this;
        t.wizPurchase.refreshReceipt(function() {
            return e()
        }, function(t) {
            e(new Error(i._getWizPurchaseError(t)))
        })
    }, r.prototype.isAlreadyOwnedError = function(e) {
        if (!this.isAvailable()) return !1;
        var t = s();
        return !o() && e === t.WizPurchaseError.ALREADY_OWNED
    }
}
