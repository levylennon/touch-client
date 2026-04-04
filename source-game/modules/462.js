function(e, t, i) {
    function n() {
        a.call(this), this._cancelButton = null, this.once("open", function() {
            this.buttonsContainer = this.entryList.createChild("div"), this._cancelButton = this._addCancel()
        }), this.on("open", function(e, t) {
            this._update(e), t()
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(86),
        s = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype._update = function(e) {
        function t() {
            i.close();
            var e = this.action;
            e.cb && e.cb(e), i.emit("action", e)
        }
        var i = this;
        e = e || {};
        var n = e.actions || [];
        this.header.setText(e.title || ""), this._displayHeader(Boolean(e.title)), this.buttonsContainer.clearContent();
        for (var o = 0, a = n.length; o < a; o++) {
            var s = n[o];
            if (!s.hidden) {
                var c = this.buttonsContainer.appendChild(new r({
                    className: "cmButton"
                }, t));
                if (s.caption && c.setText(s.caption), s.wuiDomChild && c.appendChild(s.wuiDomChild), s.line) c.addClassNames("line");
                else {
                    var l = "";
                    s.isTitle && (l = "title"), s.disabled ? c.addClassNames(l, "disabled") : (s.ticked && c.addClassNames(l, "ticked"), s.addClassNames && c.addClassNames(s.addClassNames), c.addClassNames(l), c.action = s)
                }
            }
        }
    }, n.prototype.forceUpdateCancelButton = function() {
        this._cancelButton && this._cancelButton.setText(s("ui.common.cancel"))
    }, n.sortMenuActions = function(e) {
        e.sort(function(e, t) {
            return e.caption.localeCompare(t.caption)
        })
    }
}
