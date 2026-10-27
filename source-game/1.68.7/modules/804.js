function(e, t, i) {
    function n(e) {
        this._storeName = e, this._keyName = "localStore-" + e, this._valueMap = {}, this._needsSave = !1
    }
    var o = i(61);
    e.exports = n, n.prototype.load = function() {
        this._valueMap = {}, this._needsSave = !1;
        try {
            var e = o.getItem(this._keyName);
            e && (this._valueMap = JSON.parse(e))
        } catch (t) {
            console.error("Failed to load LocalStore " + this._keyName + ": " + t)
        }
    }, n.prototype.save = function() {
        if (this._needsSave) {
            var e, t = Date.now();
            try {
                var i = JSON.stringify(this._valueMap);
                e = i.length, o.setItem(this._keyName, i), this._needsSave = !1, console.info("LocalStore saved " + e + " characters to " + this._keyName + " in " + (Date.now() - t) + "ms")
            } catch (n) {
                console.error("Failed to save LocalStore, size " + e + " into " + this._keyName + ": " + n)
            }
            e > 1e5 && console.error("LocalStore size is " + e + " for " + this._keyName);
            var a = Date.now() - t;
            a > 500 && console.error("LocalStore took " + a + "ms to save")
        }
    }, n.prototype.getValue = function(e) {
        return this._valueMap[e]
    }, n.prototype.setValue = function(e, t) {
        this._valueMap[e] = t, this._needsSave = !0
    }, n.prototype.delValue = function(e) {
        delete this._valueMap[e], this._needsSave = !0
    }
}
