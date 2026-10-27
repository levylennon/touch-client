function(e, t, i) {
    function n() {
        function e(e) {
            n && n.delClassNames("selected"), n = e, e && (e.addClassNames("selected"), u = e.data.id, o.selectBtn.enable(), o.createCharBtn.enable())
        }

        function t() {
            var t = window.gui.serversData.serversWithMyCharacter;
            e(null);
            for (var i = 0; i < d; i += 1) {
                var n = h[i],
                    o = t[i + p];
                n.setServer(o), o && o.id === u && o.isSelectable && e(n)
            }
            p <= 0 ? b.disable() : b.enable(), p >= t.length - d ? M.disable() : M.enable()
        }

        function i(t) {
            var i = m.appendChild(new c(t));
            i.on("tap", function() {
                e(this)
            }), h.push(i)
        }
        r.call(this, {
            className: "ServerSelectionWindow",
            title: l("ui.sersel.choseServer"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 700,
                height: 445
            },
            hidden: !0
        });
        var n, o = this,
            d = 4,
            u = null,
            p = 0,
            h = [];
        this.closeButton.on("tap", function() {
            window.dofus.disconnect()
        });
        var f = this.windowBody,
            b = f.appendChild(new a({
                className: ["arrow", "arrowLeft"]
            }, function() {
                p <= 0 || (b.disable(), p -= 1, t())
            }));
        b.on("disabled", function() {
            this.addClassNames("disabled")
        }), b.on("enabled", function() {
            this.delClassNames("disabled")
        });
        var m = f.createChild("div", {
                className: "serverBoxesDiv"
            }),
            M = f.appendChild(new a({
                className: ["arrow", "arrowRight"]
            }, function() {
                var e = window.gui.serversData.serversWithMyCharacter;
                p >= e.length - d || (M.disable(), p += 1, t())
            }));
        M.on("disabled", function() {
            this.addClassNames("disabled")
        }), M.on("enabled", function() {
            this.delClassNames("disabled")
        });
        for (var g = 0; g < d; g += 1) i();
        var _ = f.appendChild(new a({
            className: ["greenButton", "selectServerBtn"],
            text: l("ui.common.select")
        }, function() {
            _.disable(), o.createCharBtn.disable(), window.gui.serversData.connectedServerId === u ? (window.dofus.sendMessage("CharactersListRequestMessage"), s.close(o.id)) : window.gui.serversData.selectServer(u)
        }));
        this.selectBtn = _, _.disable();
        var A = f.createChild("div", {
            className: "createCharacterDiv"
        });
        this.createCharBtn = A.appendChild(new a({
            className: ["greenButton", "createCharacterBtn"],
            text: l("ui.charsel.createCharacter")
        }, function() {
            s.close(o.id), s.open("serverSimpleSelection")
        })), window.gui.on("TrustStatusMessage", function() {
            s.close(o.id)
        }), this.on("open", function() {
            var e = window.gui.serversData.serversWithMyCharacter;
            if (!u) {
                var i = e[0] || {};
                u = i.id
            }
            p = 0, b.disable(), e.length <= d && M.disable(),
                t(), window.gui.serversData.on("serversUpdate", t), o.consoleButton.toggleDisplay(window.gui.playerData.identification.hasConsoleRight)
        }), this.on("close", function() {
            window.gui.serversData.removeListener("serversUpdate", t)
        }), this.consoleButton = f.appendChild(new a({
            className: ["consoleButton"],
            hidden: !0
        }, function() {
            s["switch"]("adminConsole")
        }))
    }
    i(1136);
    var o = i(56)
        .inherits,
        a = i(86),
        r = i(70),
        s = i(52),
        c = i(1137),
        l = i(17)
        .getText;
    o(n, r), e.exports = n, n.prototype.backButtonClose = function() {
        this.close(), window.dofus.disconnect()
    }
}
