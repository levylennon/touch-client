function(e, t, i) {
    function n() {
        function e() {
            r.setText(a("ui.sponsoring.titleError")), p.clearContent(), p.appendChild(u.process(a("ui.sponsoring.descriptionError")))
        }
        s.call(this, {
            className: "sponsoringWindow",
            title: "",
            isFullScreen: !0,
            noCloseButton: !0
        });
        var t = this,
            i = this.windowBody,
            n = i.createChild("div", {
                className: "codeWrapper"
            }),
            r = n.createChild("div", {
                className: "title"
            }),
            p = n.createChild("div", {
                className: "label"
            }),
            h = n.createChild("div", {
                className: "codeWrapperInput"
            }),
            f = h.appendChild(new l({
                className: ["inputText", "whiteStyle", "code"],
                attr: {
                    type: "text"
                }
            })),
            b = i.createChild("div", {
                className: "buttonContainer"
            }),
            m = b.appendChild(new o({
                className: ["emptyButton"],
                text: a("ui.common.cancel")
            }));
        m.on("tap", function() {
            t.close(), d.goBackToSelectionOf("server")
        });
        var M = b.appendChild(new o({
            className: ["whiteButton"],
            text: a("ui.common.validation")
        }));
        this.on("open", function() {
            f.setValue(""), r.setText(a("ui.sponsoring.title"));
            var e = window.gui.serversData.connectedServerId,
                t = window.gui.serversData.getServerNameById(e);
            p.clearContent(), p.appendChild(u.process(a("ui.sponsoring.description2", t))), M.enable()
        }), M.on("tap", function() {
            return f.getValue()
                .length < 36 ? e() : (M.disable(), void window.dofus.sendMessage("LoginInviteCodeReplyMessage", {
                    inviteCode: f.getValue()
                }))
        }), window.dofus.connectionManager.on("LoginInviteCodeRequiredMessage", function() {
            c.open(t.id)
        }), window.dofus.connectionManager.on("LoginInviteCodeErrorMessage", function() {
            M.enable(), e()
        }), window.dofus.connectionManager.on("LoginInviteCodeSuccessMessage", function() {
            return c.closeAll(), c.open("firstCharacterForm")
        })
    }
    i(1412);
    var o = i(86),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(70),
        c = i(52),
        l = i(581),
        d = i(141),
        u = i(502);
    r(n, s), e.exports = n
}
