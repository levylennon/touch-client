function(e, t, i) {
    function n(e, t) {
        var i = this;
        t = t || {}, a.call(this, "div", {
            className: "CheckboxLabel",
            text: e
        }), this._enable = !0, t.defaultValue ? (this._active = !0, this.addClassNames("on")) : this._active = !1, this.isRadio = t.isRadio, r(this), this.on("tap", function() {
            this._enable && (this._active && !this.isRadio ? (this.deactivate(), s("CHECKBOX_UNCHECKED")) : this._active || (this.activate(), s("CHECKBOX_CHECKED")))
        }), this.on("enable", function(e) {
            i.toggleClassName("disabled", !e)
        })
    }
    i(595);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(63),
        s = i(91)
        .playUiSound;
    o(n, a), e.exports = n, n.prototype.activate = function(e) {
        var t = this;
        this._active = !0, this.addClassNames("on");
        var i = this.getParent();
        if (this.isRadio && i) {
            var o = i.getChildren();
            o.forEach(function(i) {
                i !== t && t instanceof n && i.deactivate(e)
            })
        }
        e || (this.emit("activate"), this.emit("change", !0))
    }, n.prototype.deactivate = function(e) {
        this._active = !1, this.delClassNames("on"), e || (this.emit("deactivate"), this.emit("change", !1))
    }, n.prototype.enable = function() {
        this._enable = !0, this.toggleClassName("disabled", this._enable)
    }, n.prototype.disable = function() {
        this._enable = !1, this.toggleClassName("disabled", this._enable)
    }, n.prototype.toggleActivation = function(e, t) {
        void 0 === e && (e = !this._active), e ? this.activate(t) : this.deactivate(t)
    }, n.prototype.isActivate = function() {
        return this._active
    }
}
