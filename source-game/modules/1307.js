function(e, t, i) {
    function n() {
        var e = function() {
            "function" == typeof t.cb && t.cb(), t.close()
        };
        a.call(this, {
            className: ["CancelPopup"],
            positionInfo: {
                left: "c",
                top: "c",
                width: 600,
                height: 200
            },
            noCloseButton: !0,
            openingSound: "POPUP_INFO",
            cancel: !0,
            customCancel: e
        });
        var t = this;
        this.message = this.box.createChild("div", {
            className: "message"
        })
    }
    i(1308);
    var o = i(56)
        .inherits,
        a = i(951),
        r = i(17)
        .getText,
        s = i(502);
    o(n, a), e.exports = n, n.prototype.update = function(e, t) {
        t = t || {}, this.windowTitle.setText(e.title), this.message.clearContent(), this.message.appendChild(s.process(e.message, {
            isNonChat: !0
        })), this.cb = e.cb, this.keepDialog = t.keepDialog, this._buttonCancel.setLabel(r("ui.common.cancel"))
    }
}
