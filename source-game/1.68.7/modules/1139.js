function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ServerSimpleSelectionWindow",
            title: l("ui.sersel.choseServer"),
            isFullScreen: !0,
            hidden: !0
        }), this.once("open", n.prototype._createContent)
    }
    i(1140);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(86),
        c = s.DofusButton,
        l = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype._createContent = function() {
        var e = this,
            t = this.windowBody;
        this.closeButton.setText(l("ui.common.cancel")), t.createChild("div", {
            className: "bg"
        }), t.createChild("div", {
            className: "bottomBg"
        }), t.createChild("div", {
            className: "jiva"
        });
        var i = t.createChild("div", {
                className: "divButtons"
            }),
            n = i.appendChild(new c(l("ui.sersel.autoChoice"), {
                className: ["autoSelectServerBtn", "greenButtonV2"]
            }));
        n.on("tap", function() {
            window.gui.serversData.pickUpOneServerForMe()
        });
        var o = i.appendChild(new c(l("ui.sersel.manualChoice"), {
            className: ["manualCreationBtn", "greenButtonV2"]
        }));
        o.on("tap", function() {
            r.open("serverListSelection", {
                seeCharacters: !1
            })
        }), this.on("close", function(e) {
            e && e.validated || (window.gui.serversData.serversWithMyCharacter.length ? r.open("serverListSelection", {
                seeCharacters: !0
            }) : window.dofus.disconnect())
        }), window.gui.on("TrustStatusMessage", function() {
            r.close(e.id, {
                validated: !0
            })
        }), this.consoleButton = t.appendChild(new s({
            className: ["consoleButton"],
            hidden: !window.gui.playerData.identification.hasConsoleRight
        }, function() {
            r["switch"]("adminConsole")
        }))
    }, n.prototype.backButtonClose = function() {
        this.close({
            validated: !1
        })
    }
}
