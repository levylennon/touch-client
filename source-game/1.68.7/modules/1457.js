function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "splashScreen",
            hidden: !0
        }), this.once("show", n.prototype._createContent);
        var e = this;
        window.gui.on("connected", function() {
            e.hide()
        })
    }
    i(1458);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n, n.prototype._createContent = function() {
        this.log = this.createChild("div", {
            className: "logBox"
        }), this.createChild("div", {
            className: "dofusLogo"
        }), this.createChild("div", {
            className: ["spinner", "splashSpinner"]
        })
    }, n.prototype.showMessage = function(e) {
        this.log.setText(e)
    }
}
