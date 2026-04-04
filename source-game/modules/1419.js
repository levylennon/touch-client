function(e, t, i) {
    function n() {
        var e = function() {
            window.dofus.sendMessage("ObjectDeleteMessage", {
                objectUID: this.objectUID,
                quantity: this.quantity
            }), c.close(this.id)
        };
        a.call(this, {
            className: ["DestroyItemPopup", "orangeYesButton"],
            positionInfo: {
                left: "c",
                top: "c",
                width: 600,
                height: 250
            },
            openingSound: "POPUP_INFO",
            confirm: !0,
            customConfirm: e,
            noCloseButton: !0
        });
        var t = this;
        this.on("open", function(e) {
            t.box.clearContent(), t._createDom(e), t.objectUID = e.item.objectUID, t.quantity = e.quantity
        })
    }
    i(1420);
    var o = i(56)
        .inherits,
        a = i(951),
        r = i(17)
        .getText,
        s = i(871),
        c = i(52);
    o(n, a), e.exports = n, n.prototype._createDom = function(e) {
        this.windowTitle.setHtml(e.title);
        var t = new s({
            itemData: e.item,
            quantity: e.quantity
        });
        this.box.appendChild(t), this.message = this.box.createChild("div", {
            className: "message",
            text: e.message
        }), this._buttonNo.setLabel(r("ui.common.cancel")), this._buttonYes.setLabel(r("ui.common.destroy")), this._buttonYes.toggleBtnIconDisplay(!0)
    }
}
