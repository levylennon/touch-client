function(e, t, i) {
    function n() {
        function e(e, t, i) {
            var n = e.createChild("div", {
                className: t
            });
            return r(n), n.on("tap", i), n
        }

        function t() {
            if (M) {
                if (M.isVisible()) return;
                m.table.unSelectRow(), M = null, m.serverImage.setClassNames("serverImage")
            }
            S.disable()
        }

        function i() {
            var e = d;
            A.serversData.syncServerStaticData(function(i) {
                if (i) return console.error("ServerRow getServerStaticData error", i);
                for (var n = 0, o = e.length; n < o; n += 1) {
                    var a = e[n];
                    a && m.updateServerLine(a)
                }
                m.table.sort(function(e, t) {
                    return e.date - t.date
                }, "descending"), m.table.toggleDisplayColumn("persos", O), m.table.toggleDisplayColumn("creationDate", !O), t(), m.table.scroller.refresh()
            })
        }

        function n() {
            f ? (f = !1, z.delClassNames("selected")) : (f = !0, z.addClassNames("selected"))
        }

        function o() {
            b ? (b = !1, w.delClassNames("selected")) : (b = !0, w.addClassNames("selected"))
        }
        a.call(this, {
            className: "ServerListSelectionWindow",
            title: c("ui.sersel.choseServer")
        });
        var d, h, f, b, m = this,
            M = null,
            g = [],
            _ = this.windowBody,
            A = window.gui,
            O = !1;
        this.closeButton.setText(c("ui.common.cancel")), this.closeButton.on("tap", function() {
            O && window.dofus.disconnect()
        });
        var v = _.appendChild(new s({
            className: ["consoleButton"]
        }, function() {
            l["switch"]("adminConsole")
        }));
        this.table.addFilter(function(e) {
            var t = p.indexOf(e.id) !== -1;
            return A.playerData.identification.hasConsoleRight || !(t && 0 === e.charactersCount)
        }), this.table.addFilter(function(e) {
            return !b || e.charactersCount > 0
        }), this.table.addFilter(function(e) {
            return f || g.indexOf(e.id) !== -1
        }), this.table.on("rowTap", function(e) {
            m.serverImage.setClassNames(["serverImage", "servId_" + e.rowId]), e.rowContent.isSelectable ? (M = e, I.show(), I.enable(), e.rowContent.isRestricted && e.rowContent.charactersCount < 1 ? (I.setText(c("ui.common.sponsoringButton")), S.disable()) : (I.setText(c("ui.charsel.createCharacter")), S.enable())) : (M = null, S.disable())
        });
        var y = this.buttonsDiv.createChild("div", {
                className: "filtersBtnDiv"
            }),
            z = e(y, "allServersBtn", function() {
                n(), A.serversData.getAutoChosenServers(null, function(e, t) {
                    e && console.warn(e), h = t || [], g = [];
                    for (var i = 0, n = h.length; i < n; i += 1) g.push(h[i].id)
                }), i()
            }),
            w = e(y, "myServersBtn", function() {
                o(), i()
            }),
            T = this.buttonsDiv.createChild("div", {
                className: "greenBtnDiv"
            }),
            C = T.appendChild(new s({
                text: c("ui.sersel.autochoice"),
                className: ["autochooseBtn", "greenButtonV2"]
            }));
        C.on("tap", function() {
            A.serversData.pickUpOneServerForMe()
        });
        var I = T.appendChild(new s({
            text: c("ui.charsel.createCharacter"),
            className: ["createChar", "greenButtonV2"]
        }));
        I.on("tap", function() {
            if (M) {
                var e = M.rowId;
                u.setOpenCharacterCreation(!0), window.gui.serversData.connectedServerId === e ? (window.dofus.sendMessage("CharactersListRequestMessage"), l.close(m.id)) : window.gui.serversData.selectServer(e), I.disable(), S.disable()
            } else l.close(m.id), l.open("serverSimpleSelection")
        });
        var S = T.appendChild(new s({
            text: c("ui.sersel.validateServer"),
            className: ["confirmBtn", "greenButtonV2"]
        }));
        S.on("tap", function() {
            if (M) {
                var e = M.rowId;
                window.gui.serversData.connectedServerId === e ? (window.dofus.sendMessage("CharactersListRequestMessage"), l.close(m.id)) : window.gui.serversData.selectServer(e), I.disable(), S.disable()
            }
        }), this.on("open", function(e) {
            O = e && e.seeCharacters, d = A.serversData.serversRawData, t(), A.serversData.getAutoChosenServers(null, function(e, t) {
                e && console.warn(e), h = t || [], O ? (b = !0, w.addClassNames("selected"), f = !0, z.addClassNames("selected")) : (b = !1, w.delClassNames("selected"), f = !1, z.delClassNames("selected")), g = [];
                for (var n = 0, o = h.length; n < o; n += 1) g.push(h[n].id);
                i(), S.enable(), I.enable(), m.table.selectFirstDisplayedRow(), A.serversData.on("serversUpdate", i)
            }), C.toggleDisplay(!O), I.toggleDisplay(O), v.toggleDisplay(window.gui.playerData.identification.hasConsoleRight)
        }), this.on("close", function() {
            A.serversData.removeListener("serversUpdate", i)
        }), A.on("TrustStatusMessage", function() {
            l.close(m.id)
        })
    }
    i(1134);
    var o = i(56)
        .inherits,
        a = i(1131),
        r = i(63),
        s = i(86),
        c = i(17)
        .getText,
        l = i(52),
        d = i(13),
        u = i(563),
        p = d.INVISIBLE_SERVER_IDS;
    o(n, a), e.exports = n
}
