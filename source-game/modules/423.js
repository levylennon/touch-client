function(e, t, i) {
    function n(e) {
        e = e || {}, this.title = e.title, this.minValue = void 0 !== e.minValue ? e.minValue : d, this.maxValue = e.maxValue || l;
        var t = {
            type: "text",
            maxlength: u + 1,
            placeholder: 0
        };
        if (e.attr)
            for (var i in e.attr) t[i] = e.attr[i];
        e.attr = t, c.call(this, "input", e), this.addClassNames("NumberInputBox"), s(this), this.on("tap", this._tapOnNumberInputBox)
    }
    i(424);
    var o = i(16),
        a = i(56)
        .inherits,
        r = i(13),
        s = i(63),
        c = i(72),
        l = r.MAX_NUMBER,
        d = 1,
        u = r.MAX_NUMBER_LEN;
    a(n, c), e.exports = n, n.prototype._parseNumber = function(e) {
        var t = o.stringToInt(e);
        return Math.min(Math.max(t, this.minValue), this.maxValue)
    }, n.prototype._tapOnNumberInputBox = function() {
        this.emit("focus"), void 0 === this.minValue && (this.minValue = d), void 0 === this.maxValue && (this.maxValue = l), window.gui.numberInputPad.open(this, this.title, this.minValue, this.maxValue)
    }, n.prototype.promptForValue = function(e) {
        function t() {
            n = !0
        }
        if (this._tapOnNumberInputBox(), e) {
            var i = this,
                n = !1;
            this.on("change", t), window.gui.numberInputPad.once("hide", function() {
                return i.removeListener("change", t), e(n)
            })
        }
    }, n.prototype.getValue = function() {
        return o.stringToInt(this.rootElement.value)
    }, n.prototype.getRawValue = function() {
        return this.rootElement.value
    }, n.prototype.getFormattedValue = function() {
        return o.intToString(o.stringToInt(this.rootElement.value))
    }, n.prototype.setValue = function(e, t) {
        var i, n;
        "number" == typeof e ? (n = e, i = o.intToString(n)) : (i = e, n = this._parseNumber(i)), this.rootElement.value = i, t && this.emit("change", n)
    }, n.prototype.setReadonly = function(e) {
        e === !1 ? this.rootElement.removeAttribute("readonly") : this.rootElement.setAttribute("readonly", "readonly"), this.setEnable(!e)
    }, n.prototype.setPlaceholder = function(e) {
        this.rootElement.placeholder = e
    }, n.prototype.blur = function() {}, n.prototype.focus = function() {}, n.prototype.disable = function() {
        this.setEnable(!1), this.rootElement.disabled = !0
    }, n.prototype.enable = function() {
        this.setEnable(!0), this.rootElement.disabled = !1
    }
}
