function(e, t, i) {
    function n(e, t, i) {
        this._endTimestamp = e, this._updateCallback = t, this._endCallback = i, this._endTimeout = null, this._updateTimeout = null, this._setUpdateTimeout(), this._setEndTimeout()
    }

    function o(e) {
        var t;
        return e.day ? t = e.day + " " + a("tablet.time.days.short", e.day) : e.hour ? t = e.hour + " " + a("tablet.time.hours.short", e.hour) : e.minute && (t = e.minute + " " + a("tablet.time.minutes.short", e.minute)), t
    }
    var a = i(17)
        .getText,
        r = i(21),
        s = 6e4,
        c = 60 * s,
        l = 24 * c;
    e.exports = n, n.prototype.clear = function() {
        window.clearTimeout(this._updateTimeout), window.clearTimeout(this._endTimeout), this._endTimeout = null, this._updateTimeout = null, this._endTimestamp = null, this._updateCallback = null, this._endCallback = null
    }, n.prototype._setEndTimeout = function() {
        var e = this,
            t = r.now(),
            i = this._endTimestamp - t;
        i > l || (i > 0 ? this._endTimeout = window.setTimeout(function() {
            e._endCallback(), e.clear()
        }, i) : (this._endCallback(), this.clear()))
    }, n.prototype._setUpdateTimeout = function() {
        var e, t = this,
            i = r.now(),
            n = this._endTimestamp - i;
        if (!(n <= 0)) {
            var a = n % s === 0 ? 1 : 0,
                d = Math.max(0, ~~(n / l) - a),
                u = Math.max(0, ~~(n / c) - a),
                p = Math.max(0, ~~(n / s) - a);
            d ? e = n % l || l : u ? e = n % c || c : p && (e = n % s || s);
            var h = {
                    day: d,
                    hour: u,
                    minute: p || 1
                },
                f = o(h);
            if (!f) return t._updateCallback(new Error("Time left could not be formatted, day: " + h.day + ", hour: " + h.hour + ", minute: " + h.minute));
            t._updateCallback(null, h, f), e && (this._updateTimeout = window.setTimeout(function() {
                t._setUpdateTimeout()
            }, e))
        }
    }
}
