function(e, t) {
    function i(e, t, i) {
        var a = "",
            r = i.purchaseId;
        if (i.platform === n && (a = "android"), i.platform === o) {
            a = "ios";
            var s = i.parentReceipt || {},
                c = s.nativeData || {};
            r = c.appStoreReceipt || ""
        }
        a || e.error(new Error("Unknown platform for " + i.platform));
        var l = i.nativePurchase || {};
        this._definition = {
            orderId: i.transactionId,
            platform: a,
            productId: t.id,
            receipt: r,
            json: l.receipt,
            purchaseState: l.purchaseState,
            signature: l.signature
        }
    }
    var n = "android-playstore",
        o = "ios-appstore";
    e.exports = i, i.prototype.getWizPurchaseObject = function() {
        return this._definition
    }
}
