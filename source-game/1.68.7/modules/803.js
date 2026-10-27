function(e, t, i) {
    function n(e, t, i) {
        this._cacheLevel = t, this._isSingleCopy = Boolean(i), this._isUnknown = !0, this._localStore = new o(e), this._entryName = null, this._countByGid = {}, this._countByUid = {}, this._gidByUid = {}
    }
    var o = i(804),
        a = "singleCopy";
    e.exports = n, n.PER_ACCOUNT = 1, n.PER_SERVER = 2, n.PER_CHARACTER = 3, n.prototype.load = function(e, t, i) {
        switch (this._localStore.load(), this._cacheLevel) {
            case n.PER_ACCOUNT:
                this._entryName = "a" + e;
                break;
            case n.PER_SERVER:
                this._entryName = "a" + e + "-s" + t;
                break;
            case n.PER_CHARACTER:
                this._entryName = "a" + e + "-s" + t + "-c" + i;
                break;
            default:
                return console.error("Invalid cache level: " + this._cacheLevel)
        }
        if (this._isSingleCopy) {
            var o = this._localStore.getValue(a);
            this._entryName !== o && (this._erase(o), this._localStore.setValue(a, this._entryName))
        }
        var r = this._localStore.getValue(this._entryName + "-countByGid");
        this._isUnknown = !r, this._countByGid = r || {}, this._countByUid = this._localStore.getValue(this._entryName + "-countByUid") || {}, this._gidByUid = this._localStore.getValue(this._entryName + "-gidByUid") || {}
    }, n.prototype.isUnknown = function() {
        return this._isUnknown
    }, n.prototype._erase = function(e) {
        this._localStore.delValue(e + "-countByGid"), this._localStore.delValue(e + "-countByUid"), this._localStore.delValue(e + "-gidByUid")
    }, n.prototype._save = function() {
        this._isUnknown || (this._localStore.setValue(this._entryName + "-countByGid", this._countByGid), this._localStore.setValue(this._entryName + "-countByUid", this._countByUid), this._localStore.setValue(this._entryName + "-gidByUid", this._gidByUid), this._localStore.save())
    }, n.prototype.setItems = function(e) {
        this._isUnknown = !1, this._countByGid = {}, this._countByUid = {}, this._gidByUid = {};
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                n = i.objectGID,
                o = i.objectUID,
                a = i.quantity;
            this._countByGid[n] = (this._countByGid[n] || 0) + a, this._countByUid[o] = a, this._gidByUid[o] = n
        }
        this._save()
    }, n.prototype.updateItems = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i, n = e[t],
                o = n.objectGID,
                a = n.objectUID,
                r = n.quantity,
                s = this._countByUid[a];
            void 0 === s ? (i = r, this._gidByUid[a] = o) : i = r - s, this._countByGid[o] = (this._countByGid[o] || 0) + i, this._countByUid[a] = r
        }
        this._save()
    }, n.prototype.removeItems = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                n = this._gidByUid[i];
            n ? (this._countByGid[n] -= this._countByUid[i], 0 === this._countByGid[n] && delete this._countByGid[n], delete this._countByUid[i], delete this._gidByUid[i]) : console.error("Invalid UID: " + i)
        }
        this._save()
    }, n.prototype.getItemCount = function(e) {
        return this._isUnknown ? null : this._countByGid[e] || 0
    }
}
