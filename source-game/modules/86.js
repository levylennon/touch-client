function(e, t, i) {
    function n(e, t) {
        e = e || {}, s.call(this, "div", e), this.addClassNames("Button"), c(this, {
            repeatDelay: e.repeatDelay,
            doubletapTimeout: 1
        });
        var i = e.addIcon;
        if (i) {
            if ("string" == typeof i && d.indexOf(i) < 0) return console.error("Invalid addIcon option:", i);
            this.iconDiv = new s("div", {
                className: "btnIcon"
            }), "before" === i && this.appendChild(this.iconDiv), e.text && (this.textDiv = this.createChild("div", {
                className: "btnText",
                text: e.text
            })), "after" !== i && i !== !0 || this.appendChild(this.iconDiv)
        }(e.scaleOnPress || void 0 === e.scaleOnPress) && this.addClassNames("scaleOnPress"), e.tooltip && a(this, e.tooltip), "function" == typeof t && this.on("tap", t), this.on("tap", function() {
            l(e.sound || "GEN_BUTTON")
        }), this.on("tapstart", function() {
            this.addClassNames("pressed")
        }), this.on("tapend", function() {
            this.delClassNames("pressed")
        }), this.on("enable", function(e) {
            this.toggleClassName("disabled", !e)
        }), e.disable && this.disable()
    }

    function o(e, t, i) {
        t = t || {}, t.text = e, n.call(this, t, i), this.addClassNames("button")
    }
    i(87);
    var a = i(88)
        .addTooltip,
        r = i(56)
        .inherits,
        s = i(72),
        c = i(63),
        l = i(91)
        .playUiSound,
        d = ["before", "after"];
    r(n, s), e.exports = n, n.prototype.setLabel = function(e) {
        this.textDiv ? this.textDiv.setText(e) : this.setText(e)
    }, n.prototype.toggleBtnIconDisplay = function(e) {
        void 0 !== e && null !== e || (e = !this.isVisible()), this.iconDiv && this.iconDiv.toggleDisplay(e)
    }, r(o, n), n.DofusButton = o
}
