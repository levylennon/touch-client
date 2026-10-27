function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(628),
        a = i(56)
        .inherits,
        r = i(17)
        .getText;
    a(n, o), n.prototype._getText = function() {
        return r("ui.time.days", 1) + " " + this.getOperatorText() + " " + this.getValueText()
    }, e.exports = n
}
