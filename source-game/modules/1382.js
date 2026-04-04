function(e, t, i) {
    function n(e) {
        e = e || {}, r.call(this, "div", e), this._endDate = e.endDate, this.addClassNames("countdown")
    }

    function o(e) {
        var t = new s.DofusDate(s.now())
            .getServerDate(),
            i = e._endDate.timestamp - t.timestamp;
        if (i <= 0) return clearInterval(e._interval);
        var n = Math.floor(i % 864e5 / 36e5),
            o = Math.floor(i % 36e5 / 6e4),
            a = Math.floor(i % 6e4 / 1e3),
            r = new Date(t.year, t.month, t.day + 1, n, o, a),
            c = {
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: !1
            };
        e.setText(r.toLocaleString(window.Config.language, c))
    }
    i(1383);
    var a = i(56)
        .inherits,
        r = i(72),
        s = i(21);
    a(n, r), e.exports = n, n.prototype.setEndDate = function(e) {
        this._endDate = e
    }, n.prototype.startCountdown = function() {
        if (this._endDate) {
            var e = this;
            this._interval && this.stopCountdown(), this._interval = setInterval(function() {
                e.rootElement || e.stopCountdown(), o(e)
            }, 1e3)
        }
    }, n.prototype.stopCountdown = function() {
        clearInterval(this._interval)
    }
}
