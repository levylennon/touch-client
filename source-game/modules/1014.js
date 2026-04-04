function(e, t, i) {
    function n() {
        a.call(this, {
            className: "DeleteCharacterConfirmWindow",
            title: c("ui.popup.delete"),
            positionInfo: {
                left: "c",
                top: "0",
                width: f,
                height: b,
                minHeight: m
            },
            noCloseButton: !0
        });
        var e, t, i, n, o, M, g = 50,
            _ = this,
            A = this.windowBody,
            O = "";
        this.once("open", function() {
            var a = function() {
                return M || O.trim()
                    .toLowerCase() === o.toLowerCase() ? (window.gui.openConfirmPopup({
                        fullScreen: !0,
                        className: ["swapButtons", "noBg"],
                        buttonYesLabel: c("ui.popup.delete"),
                        buttonNoLabel: c("ui.common.cancel"),
                        title: c("ui.popup.warnBeforeDeleteTitle", o),
                        message: c("ui.popup.warnBeforeDelete"),
                        cb: function(e) {
                            e && window.dofus.sendMessage("CharacterDeletionRequestMessage", {
                                characterId: n,
                                secretAnswerHash: d(n + "~" + O)
                            }), r.close(_.id)
                        }
                    }), void _.toggleClassName("noBg", !0)) : void t.show()
            };
            i = A.createChild("div", {
                className: "secretQuestionDiv"
            }), A.createChild("div", {
                text: c(M ? "ui.charSel.secretQuestion" : "ui.charSel.enterDeletedCharacterName"),
                className: "explications"
            }), e = A.appendChild(new l({
                attr: {
                    maxlength: g,
                    value: "",
                    placeholder: c(M ? "ui.common.answer" : "ui.common.pseudo")
                },
                onEnter: function() {
                    e.blur(), a()
                }
            })), t = A.appendChild(new h("div", {
                text: c("ui.charSel.incorrectPseudo"),
                className: "errorDiv"
            })), t.hide(), e.addClassNames("inputSecretAnswer"), e.on("change", function(e) {
                t.hide(), O = e
            });
            var p = A.createChild("div", {
                    className: "buttonContainer"
                }),
                f = p.appendChild(new s({
                    text: c("ui.common.cancel"),
                    className: "noButton"
                }));
            f.on("tap", function() {
                r.close(_.id)
            });
            var b = p.appendChild(new s({
                text: c("ui.button_Next"),
                className: "yesButton"
            }));
            b.on("tap", a), this.keyboardHeight = .6 * u.screenHeight
        }), this.on("open", function(e) {
            p.disableFocusOnInput(!0), e = e || {}, n = e.id, o = e.name, o && _.windowTitle.setText(c("ui.popup.delete") + " " + o), e.secretQuestion ? (M = !0, i.setText(e.secretQuestion)) : (M = !1, i.setText(c("ui.popup.warnBeforeDelete")))
        }), this.on("opened", function() {
            e.focus()
        }), this.on("close", function() {
            e.setValue(""), O = "", e.blur(), p.disableFocusOnInput(!1), _.toggleClassName("noBg", !1)
        })
    }
    i(1015);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(86),
        c = i(17)
        .getText,
        l = i(581),
        d = i(323),
        u = i(54)
        .dimensions,
        p = i(452),
        h = i(72),
        f = 780,
        b = 150,
        m = 361;
    o(n, a), e.exports = n
}
