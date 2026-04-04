function(e, t, i) {
    function n() {
        function e() {
            var e = m.getValue();
            y.disable(), v.disable(), A.setText(s("ui.common.waiting")), window.dofus.sendMessage("NicknameChoiceRequestMessage", {
                nickname: e
            })
        }

        function t() {
            window.dofus.disconnect("NICKNAME_CLOSING"), r.close(i.id)
        }
        a.call(this, {
            className: "NicknameWindow",
            title: "",
            isFullScreen: !0,
            noCloseButton: !0
        });
        var i = this,
            n = this.windowBody,
            o = n.createChild("div", {
                className: "description"
            }),
            f = n.createChild("div", {
                className: "nicknameWrapper"
            }),
            m = f.appendChild(new l({
                className: "nickname",
                attr: {
                    type: "text",
                    id: "nameInput",
                    maxlength: h.MAX_PLAYER_NAME_LEN
                },
                onChangeRules: p,
                onSubmitRules: u,
                blockInvalidInput: !1
            }, function(e) {
                e.blur()
            })),
            M = this.nameErrWrapper = f.createChild("div", {
                className: "error"
            }),
            g = M.appendChild(new d);
        g.toggleDisplay(!1);
        var _ = this.windowTitle.appendChild(new c({
            className: "help"
        }));
        _.on("tap", function() {
            window.gui.openPopup({
                title: s("ui.register.nickname"),
                message: s("ui.pseudoChoice.nicknameRules"),
                enablePreWrap: !0,
                fullScreen: !0,
                className: "noCloseBtn"
            })
        });
        var A = n.createChild("div", {
                className: "info"
            }),
            O = n.createChild("div", {
                className: "buttonContainer"
            }),
            v = O.appendChild(new c({
                className: ["emptyButton"]
            })),
            y = O.appendChild(new c({
                className: ["whiteButton"]
            })),
            z = n.createChild("div", {
                className: "corners"
            });
        z.createChild("div", {
            className: "corner"
        }), z.createChild("div", {
            className: "corner"
        }), z.createChild("div", {
            className: "corner"
        }), z.createChild("div", {
            className: "corner"
        }), m.on("validationFailed", function(e) {
            var t = [];
            e.forEach(function(e) {
                t.push(" - " + s(e.error))
            }), t.length > 0 && g.setText(t.join("\n")), y.disable(), g.toggleDisplay(!0)
        }), m.on("validationPassed", function() {
            g.setText(""), g.toggleDisplay(!1), y.enable()
        }), this.once("open", function() {
            m.on("validate", function() {
                y.tap()
            }), y.on("tap", e), v.on("tap", function() {
                t()
            }), window.gui.on("NicknameAcceptedMessage", function() {
                window.gui.openConfirmPopup({
                    title: s("ui.popup.warning"),
                    message: s("tablet.nickname.reconnect.popup"),
                    noDisable: !0,
                    cb: function(e) {
                        e && t()
                    }
                })
            })
        }), 
        window.gui.on("NicknameRefusedMessage", function(e) {
            A.setText(""),
            g.setText(s(b[e.reason])),
            g.toggleDisplay(!0),
            y.enable(),
            v.enable()
        }), this.on("open", function() {
            i.setTitle(s("ui.pseudoChoice.title")), o.setText(s("ui.pseudoChoice.help")), y.disable(), v.enable(), v.setText(s("ui.common.cancel")), y.setText(s("ui.common.validation")), m.focus(), g.hide()
        }), this.on("close", function() {
            A.setText(""), A.delClassNames("error"), m.setValue(""), m.blur()
        })
    }
    i(1460);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(17)
        .getText,
        c = i(86),
        l = i(1260),
        d = i(1262),
        u = i(1264)
        .onSubmitRules,
        p = i(1264)
        .onChangeRules,
        h = i(112),
        f = i(1461),
        b = {};
    b[f.ALREADY_USED] = "ui.nickname.alreadyUsed", b[f.SAME_AS_LOGIN] = "ui.nickname.equalsLogin", b[f.TOO_SIMILAR_TO_LOGIN] = "ui.nickname.similarToLogin", b[f.INVALID_NICK] = "ui.nickname.invalid", b[f.UNKNOWN_NICK_ERROR] = "ui.nickname.unknown", o(n, a), e.exports = n
}
