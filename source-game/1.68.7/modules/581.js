function(e, t, i) {
    function n(e, t) {
        e = e || {};
        var i = this,
            n = {
                type: "text",
                spellcheck: "false",
                autocapitalize: "off",
                autocorrect: "off",
                autocomplete: "off"
            };
        for (var o in e.attr) n[o] = e.attr[o];
        e.attr = n, a.call(this, "div"), e && e.className && this.addClassNames(e.className + "_InputBox"), this.addClassNames("InputBox"), this._inputBox = this.createChild("input", e), this._inputBox.addClassNames("domInputBox", n.type), this._inputBox.rootElement.addEventListener("input", function() {
            i.emit("change", i._inputBox.rootElement.value)
        }), this._inputBox.rootElement.addEventListener("blur", function() {
            i.emit("blur")
        }), this.rootElement.addEventListener("touchend", function(e) {
            e.stopImmediatePropagation(), i._inputBox.rootElement.dispatchEvent(new Event("touchend"))
        }), this.rootElement.addEventListener("keypress", function(e) {
            13 === e.which && (t && t(i), i.emit("validate"))
        })
    }
    i(582);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(452);
    o(n, a), e.exports = n, n.prototype.setValue = function(e, t) {
        this._inputBox.rootElement.value = e, t && this.emit("change", e)
    }, n.prototype.setClassNames = function(e) {
        this._inputBox.setClassNames(e)
    }, n.prototype.setPlaceholder = function(e) {
        this._inputBox.rootElement.placeholder = e
    }, n.prototype.getValue = function() {
        return this._inputBox.rootElement.value || ""
    }, n.prototype.setReadonly = function(e) {
        e === !1 ? this._inputBox.rootElement.removeAttribute("readonly") : this._inputBox.rootElement.setAttribute("readonly", "readonly")
    }, n.prototype.blur = function() {
        this._inputBox.rootElement.blur(), r.hide()
    }, n.prototype.focus = function() {
        this._inputBox.rootElement.focus()
    }, n.prototype.disable = function() {
        this._inputBox.rootElement.disabled = !0
    }, n.prototype.enable = function() {
        this._inputBox.rootElement.disabled = !1
    }, n.prototype.setEnable = function(e) {
        this._inputBox.rootElement.disabled = !e
    }, n.prototype.setCaretPosition = function(e) {
        this._inputBox.rootElement.setSelectionRange(e, e)
    }
}
