function(e, t, i) {
    function n(e) {
        o.call(this, e), this.respected = !1, this.ready = !1, this.respectedCallback = null
    }
    var o = i(610),
        a = i(56)
        .inherits;
    a(n, o), n.prototype._getText = function() {
        return ""
    }, n.prototype.setRespectedValue = function(e) {
        this.respected = e
    }, n.prototype.finishResult = function(e) {
        this.respected = e, this.ready = !0, this.respectedCallback && (this.respectedCallback(this.respected), this.respectedCallback = null)
    }, n.prototype._isRespected = function(e, t) {
        return this.ready ? t(this.respected) : void(this.respectedCallback = t)
    }, e.exports = n
}
