function(e, t, i) {
    function n() {
        function e() {
            t.closeHex(), t.emit("confirm", t.currentValue)
        }
        var t = this;
        l.call(this, "div", {
            className: "HexSelector",
            hidden: !0
        }), this.close = this.appendChild(new r({
            className: ["simpleButton", "closeBtn"]
        })), this.createChild("div", {
            className: "hexLabel",
            text: "#"
        }), this.inputBox = this.appendChild(new s({
            className: "hexInputBox",
            attr: {
                maxlength: 6
            }
        }, e)), this.confirm = this.appendChild(new r({
            className: ["simpleButton", "confirmBtn"]
        })), this.currentValue = 0, this.confirm.on("tap", e), this.close.on("tap", function() {
            t.closeHex()
        }), this.inputBox.on("change", function(e) {
            t.currentValue = e
        })
    }
    i(1085);
    var o = i(67)
        .getElementPositionAt,
        a = i(56)
        .inherits,
        r = i(86),
        s = i(581),
        c = i(22),
        l = i(72),
        d = {
            opacity: 0,
            webkitTransform: "scale(0.8)"
        },
        u = {
            opacity: 1,
            webkitTransform: "scale(1)"
        };
    a(n, l), e.exports = n, n.prototype.position = function(e, t) {
        var i = o(this, e, t);
        this.setStyles({
            left: i.x + "px",
            top: i.y + "px"
        })
    }, n.prototype.updateValue = function(e) {
        this.currentValue = e, this.inputBox.setValue(e)
    }, n.prototype.open = function(e) {
        function t() {
            delete i.openTweener, i.inputBox.focus(), i.emit("opened")
        }
        var i = this;
        return e = e || {}, void 0 !== e.placeholder && void 0 === e.defaultValue ? (this.inputBox.setPlaceholder(e.placeholder), this.currentValue = "") : void 0 !== e.defaultValue && (this.currentValue = e.defaultValue), this.inputBox.setValue(this.currentValue), this.show(), e.hasOwnProperty("x") && e.hasOwnProperty("y") && this.position(e.x, e.y), this.setStyles(d), this.openTweener ? (this.openTweener.cancel(), t()) : void(this.openTweener = c.tween(this, u, {
            time: 150,
            delay: 0,
            easing: "ease-out"
        }, t))
    }, n.prototype.closeHex = function() {
        function e() {
            delete t.closeTweener, t.hide(), t.emit("closed"), t.inputBox.blur()
        }
        var t = this;
        return this.closeTweener ? (this.closeTweener.cancel(), e()) : void(this.closeTweener = c.tween(this, d, {
            time: 150,
            delay: 0,
            easing: "ease-out"
        }, e))
    }
}
