function(e, t, i) {
    function n(e) {
        e = e || {}, e.className ? e.className.push("PopupAbstract") : e.className = ["PopupAbstract"], e.confirm && (e.positionInfo.isModal = !0), a.call(this, e), e.customDom || (this.box = this.windowBody.createChild("div", {
            className: "messageBox"
        }), this.buttonContainer = this.windowBody.createChild("div", {
            className: "buttonContainer"
        }));
        var t = this;
        e.confirm && (this._buttonYes = this.buttonContainer.appendChild(new r({
            sound: "POPUP_YES",
            className: ["yesButton", "greenButton"],
            addIcon: e.iconBeforeYes ? "before" : "after",
            text: " "
        })), e.customConfirm ? this.yesAction = e.customConfirm : this.yesAction = function() {
            s.close(t.id)
        }, this._buttonYes.on("tap", function() {
            t.yesAction()
        }), e.customNo ? this.noAction = e.customNo : this.noAction = function() {
            s.close(t.id)
        }, this._buttonNo = this.buttonContainer.appendChild(new r({
            sound: "POPUP_NO",
            className: ["noButton", "greenButton"],
            addIcon: e.iconBeforeNo ? "before" : "after",
            text: " "
        })), this._buttonNo.on("tap", function() {
            t.noAction()
        }), this._buttonYes.toggleBtnIconDisplay(!1), this._buttonNo.toggleBtnIconDisplay(!1)), e.cancel && (this._buttonCancel = this.buttonContainer.appendChild(new r({
            className: ["cancelButton", "greenButton"],
            addIcon: e.iconBeforeCancel ? "before" : "after",
            text: " "
        })), e.customCancel ? this.cancelAction = e.customCancel : this.cancelAction = function() {
            s.close(t.id)
        }, this._buttonCancel.on("tap", function() {
            t.cancelAction()
        }), this._buttonCancel.toggleBtnIconDisplay(!1))
    }
    i(952);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(86),
        s = i(52);
    o(n, a), e.exports = n
}
