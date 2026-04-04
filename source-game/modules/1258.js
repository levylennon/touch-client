function(e, t, i) {
    function n(e, t, i, n) {
        n = n || {}, this.myWindow = e, this.id = t, this.active = n.active, this.selected = !1, this.currentColor = null, this.isCustom = !1, r.call(this, "div", {
            className: "plusColorButton"
        }), s(this), this.active && i && "function" == typeof i ? this.on("tap", i) : this.addClassNames("inactive"), this.plainColor = this.createChild("div", {
            className: "plainColor"
        })
    }
    i(1259);
    var o = i(475),
        a = i(56)
        .inherits,
        r = i(72),
        s = i(63);
    a(n, r), e.exports = n, n.prototype.select = function() {
        this.addClassNames("selected"), this.selected = !0
    }, n.prototype.deselect = function() {
        this.delClassNames("selected"), this.selected = !1
    }, n.prototype.isCustomColor = function() {
        return this.isCustom
    }, n.prototype.setColor = function(e, t) {
        this.isCustom = t, this.currentColor = e, e ? (this.plainColor.setStyle("display", "block"), this.plainColor.setStyle("background", e.hex), this.plainColor.setStyle("background", "-moz-linear-gradient(top,  #ffffff 0%, " + e.hex + " 14%, " + e.hex + " 85%, " + e.hex + " 85%, #110f0d 100%)"), this.plainColor.setStyle("background", "-webkit-gradient(linear, left top, left bottom, color-stop(0%,#ffffff), color-stop(14%," + e.hex + "), color-stop(85%," + e.hex + "), color-stop(85%," + e.hex + "), color-stop(100%,#110f0d))"), this.plainColor.setStyle("background", "-webkit-linear-gradient(top,  #ffffff 0%," + e.hex + " 14%," + e.hex + " 85%," + e.hex + " 85%,#110f0d 100%)"),
            this.plainColor.setStyle("background", "-o-linear-gradient(top,  #ffffff 0%," + e.hex + " 14%," + e.hex + " 85%," + e.hex + " 85%,#110f0d 100%)"), this.plainColor.setStyle("background", "-ms-linear-gradient(top,  #ffffff 0%," + e.hex + " 14%," + e.hex + " 85%," + e.hex + " 85%,#110f0d 100%)"), this.plainColor.setStyle("background", "linear-gradient(to bottom,  #ffffff 0%," + e.hex + " 14%," + e.hex + " 85%," + e.hex + " 85%,#110f0d 100%)")) : this.plainColor.setStyle("display", "none")
    }, n.prototype.getColor = function() {
        return this.currentColor
    }, n.prototype.randomize = function() {
        var e = Math.floor(255 * Math.random()),
            t = Math.floor(255 * Math.random()),
            i = Math.floor(255 * Math.random()),
            n = [e, t, i];
        n = {
            rgb: n,
            hex: o.colorArrayToHexa(n)
        }, this.setColor(n, !0)
    }
}
