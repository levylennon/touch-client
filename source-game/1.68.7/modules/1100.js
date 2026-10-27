function(e, t, i) {
    function n(e) {
        var t = this;
        e = e || {}, this.currency = r, a.call(this, e, function() {
            t.toggleCurrency()
        }), this.addClassNames("button", "SwitchCurrencyButton", r)
    }
    i(1101);
    var o = i(56)
        .inherits,
        a = i(86),
        r = "soft",
        s = "hard";
    o(n, a), e.exports = n, n.prototype.toggleCurrency = function() {
        this.setCurrency(this.currency === r ? s : r)
    }, n.prototype.setCurrency = function(e) {
        if (this.currency !== e) {
            var t = this.currency;
            return this.currency = e, this.replaceClassNames([t], [this.currency]), this.currency === s ? this.emit("switchToHard") : this.emit("switchToSoft")
        }
    }
}
