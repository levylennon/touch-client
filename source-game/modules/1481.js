function(e, t) {
    function i(e, t) {
        var i = "",
            a = "";
        t.transaction.type === n && (i = "android", a = t.transaction.purchaseToken), t.transaction.type === o && (i = "ios", a = t.transaction.appStoreReceipt), i || e.error(new Error("Unknown platform for " + t.transaction.type)), this._definition = {
            json: t.transaction.receipt,
            orderId: t.transaction.id,
            platform: i,
            productId: t.id,
            purchaseState: t.transaction.purchaseState,
            receipt: a,
            signature: t.transaction.signature
        }
    }
    var n = "android-playstore",
        o = "ios-appstore";
    e.exports = i, i.prototype.getWizPurchaseObject = function() {
        return this._definition
    }
}
