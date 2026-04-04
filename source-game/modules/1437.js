function(e, t, i) {
    "use strict";

    function n(e, t, i, n, a) {
        this._urls = e, this._uid = i || "one", isNaN(n) && o.error(new Error("The end timestamp is incorrect")), this._endMilliTimestamp = n || -1, isNaN(a) && o.error(new Error("The start timestamp is incorrect")), this._startMilliTimestamp = a || 0, this._seed = t
    }
    var o = i(34)
        .logger,
        a = i(60),
        r = i(21),
        s = "en",
        c = "splashScreenNews-shown";
    e.exports = n, n.prototype.setShownIn = function(e) {
        var t = this._getUserPrefKey(e);
        a.setValue(t, this._seed, 1, !0)
    }, n.prototype.shouldShowFor = function(e, t) {
        t = t || {};
        var i = this._getUserPrefKey(e),
            n = !1,
            o = r.now();
        if (this._endMilliTimestamp !== -1 && o > this._endMilliTimestamp) return !1;
        if (t.force) return !0;
        if (this._startMilliTimestamp > o) return !1;
        var s = a.getValue(i, !0, !0);
        return s !== this._seed && (n = !0), n
    }, n.prototype.getUrlFor = function(e) {
        var t = this._urls[e];
        return t || (t = this._urls[s]), t ? t : (o.error("getUrlFor: url missing for lang " + e),
            null)
    }, n.prototype._getUserPrefKey = function(e) {
        var t = e;
        return t || (o.error(new Error("_getUserPrefKey: language missing with lang " + t)), t = s), c + "_" + this._uid + "_" + t
    }
}
