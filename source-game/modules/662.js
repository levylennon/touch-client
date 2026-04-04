function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits;
    r(n, o), n.prototype._isRespected = function(e, t) {
        return t(!0)
    }, n.prototype._getText = function() {
        return a("ui.criterion.unusableItem")
    }, e.exports = n
}
