function(e, t, i) {
    function n(e) {
        Q = e
    }

    function o(e) {
        e && console.error(e)
    }

    function a() {
        j = !1, Y = {}, X = [], V = null
    }

    function r(e) {
        return j ? X.push(e) : void(V ? J.setImmediate(function() {
            e(null, V)
        }) : (X.push(e), c()))
    }

    function s(e, t) {
        for (var i = 0; i < X.length; i++) X[i](e, t);
        X = []
    }

    function c() {
        return j = !0, Q.isAvailable() ? void ae.send("shopIAPListRequest") : f({})
    }

    function l() {
        M(new Error("Request IAP keys failed"))
    }

    function d(e) {
        var t = e.iapList;
        if (!t.length) return f({});
        for (var i = [], n = 0; n < t.length; n++) i.push(t[n].key);
        u(i)
    }

    function u(e) {
        return Q.isAvailable() ? e.length ? void Q.register(e, function(t) {
            return t ? M(new Error("Cannot register the purchases error: " + t)) : (de = [], void J.forEachSeries(e, function(e, t) {
                Q.getProductDetails([e], function(i, n) {
                    return i ? void h(i, e, t) : void p(n, t)
                })
            }, function(t) {
                return t ? void M(new Error("PurchaseWrapper#getProductDetails failed with keys: " + e + " and error: " + t)) : (de.length && console.error("PurchaseWrapper#getProductDetails failed with keys: " + de.join(",")), pe || (pe = {
                    platform: $.osName,
                    currency: he,
                    country: fe
                }), void f(pe))
            }))
        }) : f({}) : M(new Error("Purchases are not available on this platform"))
    }

    function p(e, t) {
        var i = e.products;
        for (var n in i)
            if (i.hasOwnProperty(n)) {
                var o = i[n],
                    a = oe.parsePriceMicros(o.priceMicros);
                if (isNaN(a)) continue;
                o._parsedPrice = a, Y[n] = o, he || (he = e.currency), fe || (fe = e.country)
            } return t()
    }

    function h(e, t, i) {
        return de.push(t + " [error:" + e + "]"), i()
    }

    function f(e) {
        e = e || {}, ae.send("setShopDetailsRequest", e)
    }

    function b() {
        M(new Error("Request to set shop details failed"))
    }

    function m(e) {
        M(null, e.shopDetails)
    }

    function M(e, t) {
        return j = !1, e ? s(e) : (V = t, void s(null, t))
    }

    function g(e) {
        e.key || V && V.goultineOnlyArticles[e.id] || e.hardOnlyTuto || (e._softPrice = ie.computeSoftPrice(e._hardPrice), e._hardOriginalPrice && (e._softOriginalPrice = ie.computeSoftPrice(e._hardOriginalPrice)))
    }

    function _(e) {
        for (var t = null, i = e.pricelist || [], n = 0; n < i.length; n += 1) {
            var o = i[n];
            if (o.currency === Z.GOULTINE) {
                t = o;
                break
            }
        }
        return t || e.currency !== Z.GOULTINE || (t = {
            price: e.price,
            original_price: e.original_price
        }), t
    }

    function A(e) {
        var i = [];
        if (!e) return i;
        for (var n = 0; n < e.length; n++) {
            var o = e[n],
                a = _(o);
            if (a && (o._hardPrice = a.price, o._hardOriginalPrice = a.original_price), o.key) {
                var r = Y[o.key];
                if (!r && !a) continue;
                r && (o.product = r, o._inAppPrice = r.price)
            } else if (o.currency !== Z.GOULTINE) continue;
            if (g(o), o._hardPrice && o._hardOriginalPrice) {
                var s = Math.floor(100 - 100 * o._hardPrice / o._hardOriginalPrice);
                o._promoRate = s ? "- " + s + "%" : ""
            }
            for (var c = !1, l = o.references, d = 0; d < l.length; d++) {
                var u = l[d].reference_kard;
                if (u)
                    for (var p = 0; p < u.length; p++)
                        if ("MULTIPLE" === u[p].type) {
                            c = !0;
                            break
                        }
            }
            o.isMysteryBox = c, o.itemsId = t.getItemsIdsFromArticle(o), i.push(o)
        }
        return i
    }

    function O(e) {
        var t = ee("tablet.price.hard", te.kamasToString(e._hardPrice, ""));
        window.gui.openConfirmPopup({
            title: ee("ui.popup.warning"),
            message: ee("tablet.shop.notEnoughKamas", e.name, t),
            cb: function(t) {
                t && z(e, Z.GOULTINE)
            }
        })
    }

    function v(e) {
        var t = ne.getWindow("buyHardCurrencyConfirm");
        t.confirmBuy(e)
    }

    function y(e) {
        return e ? void Q.getPendingPurchases(function(i, n) {
            return i ? (console.error(i), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"))) : n.length ? ne.getWindow("purchasesPending")
                .validatePendingPurchases(n) : void ne.getWindow("shopConfirm")
                .confirmBuy({
                    article: e,
                    isInApp: !0
                }, function(i) {
                    if (i) {
                        if (!V) return console.error(new Error("Purchase could not be done, store infos are no longer available")), P(), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
                        var n = 0;
                        t.doubleCheckAmount(e.key, function(t, i, o) {
                            if (t) return console.error(new Error("Purchase could not be done, error: " + t)), P(), window.gui.openSimplePopup(ee("tablet.shop.couldNotBuy"));
                            i !== V.currency && console.error("Currency is not the same as the storeInfos: storeInfos.currency: " + V.currency + ", currency: " + i), n = o, n !== e.product._parsedPrice && console.error("Amount is not the same as the article: _parsedPrice: " + e.product._parsedPrice + ", amount: " + n);
                            var a = {
                                currency: i,
                                iapKey: e.key,
                                purchase: JSON.stringify([{
                                    quantity: 1,
                                    id: e.id,
                                    amount: n
                                }])
                            };
                            console.error("[Haapi info] ShopWindow sending shopBuyIAPRequest with data: " + JSON.stringify(a) + ", from price: " + e.product.price + ", from priceMicros: " + e.product.priceMicros), window.dofus.send("shopBuyIAPRequest", a)
                        })
                    }
                })
        }) : console.error(new Error("Trying to buy a non-existent article"))
    }

    function z(e, t) {
        if (!e) return console.error(new Error("Trying to buy a non-existent article"));
        var i = window.gui.playerData.inventory,
            n = i.goultines,
            o = i.kamas,
            a = t === Z.KAMA;
        if (a && e._softPrice > o) return O(e);
        if (!a && e._hardPrice > n) {
            var r = e._hardPrice - n;
            return v(r)
        }
        ne.getWindow("shopConfirm")
            .confirmBuy({
                article: e,
                isSoft: a
            }, function(i) {
                i && window.dofus.send("shopBuyRequest", {
                    currency: t,
                    amountHard: e._hardPrice,
                    amountSoft: e._softPrice,
                    purchase: [{
                        quantity: 1,
                        id: e.id
                    }],
                    isMysteryBox: e.isMysteryBox
                })
            })
    }

    function w(e) {
        var t;
        return t = "android" === e.platform ? JSON.stringify({
            json: e.json,
            developerPayload: e.developerPayload,
            signature: e.signature
        }) : e.receipt
    }

    function T(e, t, i) {
        if (i = i || o, !Q.isAvailable()) {
            var n = new Error("Purchase should not have been possible on this platform, for key: " + e + " and order id: " + t);
            return i(n, e)
        }
        ae.send("moneyGoultinesAmountRequest"), Q.finishPurchase(e, function(n) {
            if (n) {
                var o = new Error("Finish purchase failed for key " + e + " and order id " + t + " with error: " + n);
                return i(o, e)
            }
            return i(null, e)
        })
    }

    function C(e) {
        "RECEIPT_ALREADY_VALIDATED" === e.reason ? T(e.iapKey, e.orderId, function() {
            P()
        }) : (P(), window.gui.openSimplePopup(ee("tablet.shop.validateIAPFail")))
    }

    function I(e) {
        window.gui.openSimplePopup(ee("tablet.shop.validateIAPSuccess"), ee("ui.common.informations")), T(e.iapKey, e.buyResult.order_id, function(e) {
            e && console.error(e), P()
        })
    }

    function S(e) {
        P(), W(e.reason)
    }

    function E(e) {
        P(), window.gui.openSimplePopup(ee("tablet.shop.buySuccess"), ee("ui.common.informations")), e.data.currency === Z.GOULTINE && window.dofus.send("moneyGoultinesAmountRequest");
        var t = e.data.purchase[0],
            i = {
                account_id: window.gui.playerData.identification.accountId,
                virtual_currency_used: e.data.currency,
                order_id: e.buyResult.order_id,
                article_id: t.id,
                total: e.data.currency === Z.GOULTINE ? e.data.amountHard : e.data.amountSoft,
                transaction_status: e.buyResult.order_status
            };
        le.log("SHOP.Purchase_detail", i)
    }

    function L() {
        window.gui.openSimplePopup(ee("tablet.shop.mysteryBoxFail"))
    }

    function N() {
        window.gui.openSimplePopup(ee("tablet.shop.mysteryBoxSuccess"), ee("ui.common.informations"))
    }

    function R() {
        window.gui.openSimplePopup(ee("tablet.shop.restoreMysteryBoxFail"))
    }

    function q() {
        window.gui.openSimplePopup(ee("tablet.shop.restoreMysteryBoxSuccess"), ee("ui.common.informations"))
    }

    function x(e, t) {
        var i = w(t),
            n = t.productId;
        "android" === t.platform ? console.error("[Haapi info] ShopWindow sending shopMobileValidateOrderRequest with data: " + JSON.stringify({
            orderId: e,
            receipt: i,
            iapKey: n
        })) : console.error("[Haapi info] ShopWindow sending shopMobileValidateOrderRequest with data: " + JSON.stringify({
            orderId: e,
            iapKey: n
        })), window.dofus.send("shopMobileValidateOrderRequest", {
            orderId: e,
            receipt: i,
            iapKey: n
        })
    }

    function B(e) {
        P(), W(e.reason)
    }

    function D(e) {
        if (!Q.isAvailable()) {
            var t = "Purchase should not have been possible on this platform, for key: " + e.iapKey;
            return t += " and order id: " + e.buyResult.order_id, console.error(new Error(t))
        }
        var i = ce.getPurchaseUuid(),
            n = window.gui.playerData.getAccountId()
            .toString();
        Q.setAccountUid(i, n);
        var o = e.iapKey,
            a = e.buyResult.order_id;
        Q.makePurchase(o, function(e, t) {
            if (e) return Q.isAlreadyOwnedError(e) ? U() : (console.error("makePurchase error: " + e), P(), void window.gui.openSimplePopup(ee("tablet.shop.validateIAPFail")));
            var i = Y[o];
            V ? i ? (K.trackIAPBought(o, i._parsedPrice, V.currency, a), "com.ankama.dofustouchnext.starterpackalbueraios" !== o && "com.ankama.dofustouch.starterpackalbueraios" !== o && "com.ankama.dofustouchnext.starterpackalbueraandroid" !== o && "com.ankama.dofustouch.starterpackalbueraandroid" !== o || se.sendTagAlbueraStarterPackBought()) : console.error(new Error("Could not send event to Adjust, no product found for key: " + o)) : console.error(new Error("Could not send event to Adjust, store infos are no longer available")), x(a, t)
        })
    }

    function W(e) {
        e === ue.GOULTINES_RESTRICTION ? window.gui.openSimplePopup(ee("tablet.shop.goultinesRestriction")) : e === ue.COUNTRY_COHERENCE_RESTRICTION ? window.gui.openSimplePopup(ee("ui.error.countryCoherenceRestriction")) : e === ue.FRAUD_DETECTED ? window.gui.openSimplePopup(ee("ui.error.fraudDetected")) : window.gui.openSimplePopup(ee("tablet.shop.buyFail"))
    }

    function P() {
        ne.close("shopConfirm", {
            endPurchase: !0
        })
    }

    function k(e) {
        return "RECEIPT_ALREADY_VALIDATED" === e.reason ? void T(e.iapKey, null, function(e, t) {
                ne.getWindow("purchasesPending")
                    .validateNextPendingPurchases(e, t)
            }) : void ne.getWindow("purchasesPending")
            .validateNextPendingPurchases(new Error("Validate pending order failed for productId: " + e.iapKey + " with reason: " + e.reason), e.iapKey)
    }

    function F(e) {
        T(e.iapKey, e.buyResult.order_id, function(e, t) {
            ne.getWindow("purchasesPending")
                .validateNextPendingPurchases(e, t)
        })
    }

    function H(e) {
        var t = w(e),
            i = e.productId,
            n = Y[i];
        "android" === e.platform ? console.error("[Haapi info] ShopWindow sending shopMobileValidatePendingOrderRequest with data: " + JSON.stringify({
            receipt: t,
            iapKey: i
        })) : console.error("[Haapi info] ShopWindow sending shopMobileValidatePendingOrderRequest with data: " + JSON.stringify({
            iapKey: i
        })), window.dofus.send("shopMobileValidatePendingOrderRequest", {
            receipt: t,
            iapKey: i,
            productInfo: n,
            currency: V.currency
        })
    }

    function U() {
        Q.restoreAllPurchases(function(e, t) {
            return e ? (console.error(new Error("Restore all purchases failed with error: " + e)), P(), void window.gui.openSimplePopup(ee("tablet.shop.restoreFailed"))) : (t = t || [], P(), void ne.getWindow("purchasesPending")
                .validatePendingPurchases(t))
        })
    }

    function G() {
        Q.getPendingPurchases(function(e, t) {
            return e ? console.error(new Error("Check pending purchases failed with error: " + e)) : void(t.length && ne.getWindow("purchasesPending")
                .validatePendingPurchases(t))
        })
    }
    var j, Y, X, V, Q, K = i(125),
        J = i(18),
        Z = i(839),
        $ = i(7),
        ee = i(17)
        .getText,
        te = i(16),
        ie = i(840),
        ne = i(52),
        oe = i(841),
        ae = i(34),
        re = i(105),
        se = i(559),
        ce = i(142),
        le = i(116),
        de = [],
        ue = {
            COUNTRY_COHERENCE_RESTRICTION: "COUNTRY_COHERENCE_RESTRICTION",
            FRAUD_DETECTED: "FRAUD_DETECTED",
            GOULTINES_RESTRICTION: "GOULTINES_RESTRICTION"
        };
    re.on("setShopDetailsSuccess", m), re.on("setShopDetailsError", b), re.on("shopIAPListSuccess", d), re.on("shopIAPListError", l), re.on("shopMobileValidateOrderError", C), re.on("shopMobileValidateOrderSuccess", I), re.on("shopBuyError", S), re.on("shopBuySuccess", E), re.on("mysteryBoxError", L), re.on("mysteryBoxSuccess", N), re.on("restoreMysteryBoxError", R), re.on("restoreMysteryBoxSuccess", q), re.on("shopBuyIAPError", B), re.on("shopBuyIAPSuccess", D), re.on("shopMobileValidatePendingOrderError", k), re.on("shopMobileValidatePendingOrderSuccess", F);
    var pe = null,
        he = "",
        fe = "";
    t.doubleCheckAmount = function(e, t) {
        var i = 0;
        return Q.isAvailable() ? void Q.getProductDetails([e], function(e, n) {
            if (e) return t(e);
            var o = n.currency,
                a = n.products;
            for (var r in a)
                if (a.hasOwnProperty(r)) {
                    var s = a[r],
                        c = oe.parsePriceMicros(s.priceMicros);
                    if (isNaN(c)) continue;
                    i = c
                } return i ? t(null, o, i) : t(new Error("No amounts."))
        }) : t(new Error("purchase not available."))
    }, t.initialize = n, t.reset = a, t.getStoreInfos = r, t.enrichWithSoftPrice = g, t.validateArticles = A, t.purchaseArticleOnStore = y, t.purchaseArticleOnAnkama = z, t.openNotEnoughHardCurrencyPopup = v, t.validatePendingIAP = H, t.checkPendingPurchases = G, t.getItemsIdsFromArticle = function(e) {
        var t = [],
            i = 0,
            n = e.references || [];
        for (i = 0; i < n.length; i += 1) {
            var o = n[i],
                a = o.reference_virtualgift;
            if ("VIRTUALGIFT" === o.type)
                for (var r = 0; r < a.length; r++) t.push(parseInt(a[r].id, 10));
            if ("GAMEACTION" === o.type)
                for (var s = o.reference_gameaction || {}, c = s.definition || {}, l = c.actions || [], d = 0; d < l.length; d++) {
                    var u = l[d];
                    "DofusTouchItem" === u.type && t.push(parseInt(u.item_id, 10))
                }
        }
        return t
    }
}
