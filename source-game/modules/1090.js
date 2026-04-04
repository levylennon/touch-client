function(e, t, i) {
    function n(e, t) {
        t = t || {}, this._text = "", this._isPartHidden = !1, this._displayDiv = e.createChild("div", {
            className: ["longTextDisplay", t.className]
        }), a(this._displayDiv, o), this._displayDiv.longText = this, this._textDiv = this._displayDiv.createChild("div", {
            className: "longTextContent"
        }), this._showAllBtn = this._displayDiv.createChild("div", {
            className: "longTextBtn"
        }), s(this._displayDiv);
        var i = this._tapHandler.bind(this);
        this._displayDiv.on("tap", i), this._displayDiv.on("longTap", i)
    }

    function o() {
        return this.longText._text
    }
    i(1091);
    var a = i(88)
        .addTooltip,
        r = i(588),
        s = i(63),
        c = i(72);
    e.exports = n, n.prototype.setText = function(e) {
        this._text = e, this._textDiv.setText(e), this.refresh()
    }, n.prototype.refresh = function() {
        this._isPartHidden = this._textDiv.rootElement.clientHeight > this._displayDiv.rootElement.clientHeight, this._showAllBtn.toggleDisplay(this._isPartHidden)
    }, n.prototype._tapHandler = function() {
        if (this._isPartHidden) {
            var e = new c("div", {
                className: "longTextTooltip",
                text: this._text
            });
            r.showClosableNotification(e, this._displayDiv, {
                centerOnTarget: !0
            })
        }
    }
}
