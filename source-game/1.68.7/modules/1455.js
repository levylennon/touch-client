function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "backgroundScreen",
            hidden: !0
        }), this.addClassNames("astrub2024Skin");
        var e = this;
        window.gui.on("connected", function() {
            e.hide()
        }), this.on("show", function() {
            e.addClassNames("backgroundImage")
        }), this.on("hide", function() {
            e.delClassNames("backgroundImage")
        })
    }
    i(1456);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n
}
