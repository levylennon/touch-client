function(e, t, i) {
    function n() {
        this._hasListeners = !1, this.autosave = null, this.nextSaveTime = 0, this.accountName = null, this.prefs = {}, this._load()
    }
    var o = i(61),
        a = "dofus.1",
        r = 10,
        s = "all",
        c = "guestAccount";
    n.prototype.close = function() {
        this.setAccount(null)
    }, n.prototype._setupListeners = function() {
        if (!this._hasListeners) {
            var e = this;
            window.gui.on("appGoBackground", function() {
                null !== e.accountName && e.autosave && e._save()
            }), this._hasListeners = !0
        }
    }, n.prototype.setAccount = function(e) {
        this.autosave && this._save(), this.accountName = e, this._setupListeners()
    }, n.prototype._load = function() {
        try {
            var e = o.getItem(a);
            e && (this.prefs = JSON.parse(e))
        } catch (t) {
            console.warn("Failed to load user preferences: " + t)
        }
    }, n.prototype._scheduleNextSave = function(e) {
        var t = this;
        e || (e = r);
        var i = Date.now() + 1e3 * e;
        this.autosave && this.nextSaveTime <= i || (this.autosave && window.clearTimeout(this.autosave), this.nextSaveTime = i, this.autosave = window.setTimeout(function() {
            t.autosave = null, t._save()
        }, 1e3 * e))
    }, n.prototype._save = function() {
        this.autosave && (window.clearTimeout(this.autosave), this.autosave = null);
        var e;
        try {
            var t = JSON.stringify(this.prefs);
            e = t.length, o.setItem(a, t), console.info("Saved " + e + " char string into local storage")
        } catch (i) {
            console.error("Failed to save user preferences of size " + e + ": " + i)
        }
    }, n.prototype.saveNow = function() {
        this._save()
    }, n.prototype.getValue = function(e, t, i) {
        e = (this.accountName && !i ? this.accountName : s) + "#" + e;
        var n = this.prefs[e];
        return void 0 === n ? t : n
    }, n.prototype.setValue = function(e, t, i, n) {
        e = (this.accountName && !n ? this.accountName : s) + "#" + e, this.prefs[e] = t, this._scheduleNextSave(i)
    }, n.prototype.delValue = function(e, t, i) {
        e = (this.accountName && !i ? this.accountName : s) + "#" + e, delete this.prefs[e], this._scheduleNextSave(t)
    }, n.prototype.deleteGuest = function() {
        if (!this.accountName) return void delete this.prefs["#all#" + c];
        this.delValue(c, r, !0);
        for (var e in this.prefs)
            if (0 === e.indexOf(this.accountName)) {
                var t = e.replace(this.accountName + "#", "");
                this.delValue(t)
            }
    };
    var l = new n;
    e.exports = l
}
