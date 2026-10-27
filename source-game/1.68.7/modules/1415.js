function(e, t, i) {
    function n() {
        r.call(this, {
            className: "ShatterResultsWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 356,
                height: 190
            }
        }), this.runesContainer = this.windowBody.appendChild(new o("div", {
            className: ["overlayBox"]
        }))
    }
    i(1416);
    var o = i(72),
        a = i(56)
        .inherits,
        r = i(70),
        s = i(871);
    a(n, r), e.exports = n, n.prototype.updateContent = function(e, t) {
        this.setTitle(e), this.runesContainer.clearContent();
        for (var i = 0; i < t.length; i += 1) this.runesContainer.appendChild(new s(t[i]))
    }
}
