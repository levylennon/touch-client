function(e, t, i) {
    function n(e, t, i) {
        var n = new c({
            className: ["arrow", e],
            repeatDelay: l,
            sound: i
        }, function() {
            t.emit(e)
        });
        return t.appendChild(n)
    }

    function o(e) {
        s.call(this, "div", {
            className: "PaginationUI"
        }), e = e || {}, this._leftArrow = n("previous", this, e.soundPrev), this._centeringContainer = this.createChild("div", {
            className: "centeringContainer"
        });
        var t = this._numberInputBox = this._centeringContainer.appendChild(new r);
        this.isInputDisabled = Boolean(e.disableInput), t.setReadonly(this.isInputDisabled), this.isBtnAlwaysEnabled = Boolean(e.btnAlwaysEnabled);
        var i = this;
        t.on("change", function(e) {
            i.emit("page", e - 1)
        }), this._pageCountLabel = this._centeringContainer.createChild("div", {
            className: "pageCount"
        }), this._rightArrow = n("next", this, e.soundNext)
    }
    i(868);
    var a = i(56)
        .inherits,
        r = i(423),
        s = i(72),
        c = i(86),
        l = 200;
    a(o, s), o.prototype.setDirection = function(e) {
        this.toggleClassName("vertical", "vertical" === e)
    }, o.prototype._checkPosition = function() {
        this.isBtnAlwaysEnabled || (this._leftArrow.setEnable(0 !== this.current), this._rightArrow.setEnable(this.current < this._pageCount - 1));
        var e = this._pageCount <= 1 || this.isInputDisabled;
        this._numberInputBox.setReadonly(e), this._centeringContainer.toggleClassName("readOnly", e)
    }, o.prototype.setCurrent = function(e) {
        this.current = e, this._numberInputBox.setValue(e + 1), this._checkPosition()
    }, o.prototype.setPageCount = function(e) {
        this._numberInputBox.maxValue = e, this._pageCount = e, this._pageCountLabel.setText("/ " + e), this._checkPosition()
    }, e.exports = o
}
