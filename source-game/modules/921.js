function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "HintArrow",
            hidden: !0
        }), this.arrow = this.createChild("div", {
            className: "arrow"
        })
    }
    i(922);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n, n.prototype.showArrow = function(e, t, i) {
        i = i || "downRight", this.arrow.setClassNames(["arrow", i]), this.setStyles({
            left: e + "px",
            top: t + "px"
        }), this.show()
    }, n.prototype.hideArrow = function() {
        this.hide()
    }
}
