function(e, t, i) {
    function n(e, t, i) {
        r.call(this, "div"), this.name = e, this.tapHandler = t, this.states = i.states || s, this._createDom(i), this._setValueByIndex(0), a(this), this.on("tap", this._changeToNextValue)
    }
    i(986);
    var o = i(56)
        .inherits,
        a = i(63),
        r = i(72),
        s = [{
            value: !1
        }, {
            value: !0,
            className: "active"
        }];
    o(n, r), e.exports = n, n.prototype._createDom = function(e) {
        e.addIcon && (this.icon = this.createChild("div", {
            className: "btnIcon"
        })), e.text && (this.labelElement = this.createChild("div", {
            className: "label",
            text: e.text
        }))
    }, n.prototype._changeToNextValue = function() {
        var e = (this.valueIndex + 1) % this.states.length;
        this._setValueByIndex(e), this._notifyOfUpdate()
    }, n.prototype._notifyOfUpdate = function() {
        this.tapHandler(this.name, this.states[this.valueIndex].value, this.valueIndex)
    }, n.prototype._setValueByIndex = function(e) {
        this.valueIndex = e;
        var t = this.icon ? "withIcon" : "";
        this.setClassNames(["toggleButton", this.name, t, this.states[e].className])
    }, n.prototype.setIcon = function(e) {
        e !== this.icon && (this.icon && this.removeChild(this.icon), this.icon = e, this.toggleClassName("withIcon", Boolean(e)), e && this.insertAsFirstChild(e))
    }, n.prototype.setLabel = function(e) {
        this.labelElement.setText(e)
    }, n.prototype.reset = function() {
        0 !== this.valueIndex && (this._setValueByIndex(0), this._notifyOfUpdate())
    }, n.prototype.selectState = function(e) {
        return e < 0 || e >= this.states.length ? console.error("Bad state index for toggle: " + e) : void this._setValueByIndex(e)
    }
}
