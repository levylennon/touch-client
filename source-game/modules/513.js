function(e, t, i) {
    function n() {
        o.call(this);
        var e;
        this.once("open", function() {
            e = this.header.appendChild(new a), this._addCancel()
        }), this.on("open", function(t, i) {
            if (void 0 === t.hoursSinceLastConnection) e.setContent({
                name: t.playerName
            });
            else {
                var n = Math.floor(t.hoursSinceLastConnection),
                    o = Math.floor(n / 720),
                    a = Math.floor((n - 720 * o) / 24),
                    s = "";
                s = o > 0 ? a > 0 ? r("ui.social.monthsAndDaysSinceLastConnection", o, a) : r("ui.social.monthsSinceLastConnection", o) : a > 0 ? r("ui.social.daysSinceLastConnection", a) : n > 0 ? r("tablet.ui.social.hoursSinceLastConnection", n) : r("tablet.ui.social.lessThanOneHour"), e.setContent({
                    name: t.playerName + "\n" + r("ui.social.lastConnection", s)
                })
            }
            i()
        })
    }
    var o = i(450),
        a = i(464),
        r = i(17)
        .getText,
        s = i(56)
        .inherits;
    s(n, o), e.exports = n
}
