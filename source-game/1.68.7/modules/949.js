function(e, t, i) {
    function n() {
        var e = function() {
                this.cb(u.YES), r.close(this.id, {
                    keepDialog: this.keepDialog
                })
            },
            t = function() {
                this.cb(u.NO), r.close(this.id)
            },
            i = {
                className: ["ConfirmPopup"],
                positionInfo: h,
                openingSound: "POPUP_INFO",
                confirm: !0,
                customConfirm: e,
                customNo: t,
                customClose: !0
            };
        a.call(this, i), this._domCreated = !1, this.actionsEnum = u, this.addedClassNames = [], this.message = this.box.createChild("div", {
            className: "message"
        })
    }
    i(950);
    var o = i(56)
        .inherits,
        a = i(951),
        r = i(52),
        s = i(86),
        c = i(17)
        .getText,
        l = i(502),
        d = i(54)
        .dimensions,
        u = {
            NO: 0,
            YES: 1,
            IGNORE: 2
        },
        p = 200,
        h = {
            left: "c",
            top: "c",
            width: 600,
            height: p,
            isModal: !0
        },
        f = {
            left: "0",
            bottom: "0",
            width: d.screenWidth,
            height: d.screenHeight,
            isFullScreen: !0,
            isModal: !0
        };
    o(n, a), e.exports = n, n.actionsEnum = u, n.prototype.createDom = function() {
        var e = this;
        this._buttonYes.setLabel(c("ui.common.yes")), this._buttonNo.setLabel(c("ui.common.no")), this.closeButton.on("tap", function() {
            e.noAction()
        }), this._buttonIgnore = this.buttonContainer.appendChild(new s({
            text: c("ui.common.ignore"),
            className: ["greenButton"]
        })), this.ignoreAction = function() {
            e.cb(u.IGNORE), r.close(e.id)
        }, this._buttonIgnore.on("tap", function() {
            e.ignoreAction()
        }), this._buttonIgnore.hide(), this._domCreated = !0
    }, n.prototype.backButtonClose = function() {
        this._buttonNo.isVisible() || this.closeButton.isVisible() ? this.noAction() : this._buttonIgnore.isVisible() ? this.ignoreAction() : this.yesAction()
    }, n.prototype.update = function(e, t) {
        var i = this;
        this._domCreated || this.createDom(), this.message.clearContent(), t = t || {}, this.addedClassNames.length > 0 && (this.delClassNames(this.addedClassNames), this.delClassNames(["fullScreenPopup"]), this.addedClassNames = []), e.className && (this.addClassNames(e.className), this.addedClassNames = e.className), this.windowTitle.setHtml(e.title || c("ui.common.confirm")), this.message.appendChild(l.process(e.message, {
            isNonChat: !0
        })), this._buttonYesLabel = e.buttonYesLabel || c("ui.common.yes"), this._buttonYes.setLabel(this._buttonYesLabel), this._buttonYes.toggleBtnIconDisplay(e.yesBtnIcon), this._buttonNo.setLabel(e.buttonNoLabel || c("ui.common.no"));
        var n = JSON.parse(JSON.stringify(h));
        if (n.height = e.heightPixel || p, e.fullScreen && (this.addClassNames("fullScreenPopup"), n = JSON.parse(JSON.stringify(f))), r.positionWindow(this.id, n), this._buttonYes.toggleClassName("greenButton", !e.fullScreen), this._buttonNo.toggleClassName("greenButton", !e.fullScreen), this.cb = e.cb, this.cb && "function" == typeof this.cb || (console.error(new Error("missing cb")), this.cb = function() {}), this.keepDialog = t.keepDialog, this._buttonNo.toggleDisplay(!e.noDisable), this.closeButton.toggleDisplay(Boolean(e.enableCloseCross)), this._buttonIgnore.toggleDisplay(Boolean(t.ignoreEnable)), e.timer) {
            var o = e.timer;
            i._buttonYes.setLabel(this._buttonYesLabel + " (" + o + ")"), this._buttonYes.disable();
            var a = setInterval(function() {
                o--, o <= 0 ? (i._buttonYes.setLabel(i._buttonYesLabel), i._buttonYes.enable(), clearInterval(a)) : i._buttonYes.setLabel(i._buttonYesLabel + " (" + o + ")")
            }, 1e3)
        } else this._buttonYes.enable()
    }
}
