function(e, t, i) {
    function n(e) {
        e = e || {}, a.call(this, "div", e), this.addClassNames("InputBoxErrors"), this.setText(e.text || "")
    }
    i(1263);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n, n.prototype.setText = function(e) {
        a.prototype.setText.call(this, e), e ? this.show() : this.hide()
    }
}
