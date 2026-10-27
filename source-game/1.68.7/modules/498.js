function(e, t, i) {
    function n() {
        a.call(this);
        var e, t, i, n, o, u, p, h, f = {};
        this.worldMapTooltip = new c, this.once("open", function() {
            this.header.setText(r("ui.cartography.title"));
            var a = s.getWindow("worldMap"),
                c = window.gui.GPS;
            this.worldMapTooltip.addClassNames("worldMapTooltip"), this.entryList.appendChild(this.worldMapTooltip), this._addSeparator(), e = this._addEntry(r("ui.common.teleport"), function() {
                var e = window.gui.playerData.teleporterData.getTeleporter(f.i, f.j);
                window.dofus.sendMessage("TeleportRequestMessage", {
                    teleporterType: e.type,
                    mapId: e.mapId
                }), a.isFullScreen && s.close("worldMap")
            }), t = this._addEntry(r("ui.common.teleport"), function() {
                window.dofus.sendMessage("AdminQuietCommandMessage", {
                    content: "move * " + f.i + "," + f.j
                }), a.isFullScreen && s.close("worldMap")
            });
            var l = this;
            this._addEntry(r("ui.common.bestiary"), function() {
                s.open("grimoire", {
                    tabId: "bestiary",
                    tabParams: {
                        subAreaId: l.worldMapTooltip.subAreaData.id,
                        areaId: l.worldMapTooltip.subAreaData.areaId
                    }
                })
            }), u = this._addEntry(r("ui.map.flag"), function() {
                var e = "",
                    t = f.icons;
                if (t) {
                    for (var i = 0, n = t.length; i < n; i += 1) {
                        var o = t[i];
                        o.infoData.isHintFromDB && (e += o.infoData.nameIdOverRideFunc ? o.infoData.nameIdOverRideFunc() : o.infoData.nameId.replace("\\n ", "\n"), e += "\n")
                    }
                    "" !== e && (e += "\n")
                }
                c.addCustomFlag(f.i, f.j, e)
            }), p = this._addEntry(r("ui.common.remove"), function() {
                c.removeCustomFlag(f.i, f.j)
            }), i = this._addEntry(r("ui.common.remove") + " [" + r("ui.zaap.zaap") + "]", function() {
                c.removePOI(this.flagId)
            }), n = this._addEntry(r("ui.common.remove") + " [" + r("ui.common.quests") + "]", function() {
                c.removePOI(this.flagId, void 0, !0)
            }), o = this._addEntry(r("ui.common.remove") + " [" + r("ui.map.flagDefaultName") + "]", function() {
                c.removePOI(this.flagId)
            }), h = this._addEntry(r("ui.common.remove") + " [" + r("tablet.ui.map.estate") + "]", function() {
                c.removePOI(this.flagId)
            }), this._addEntry(r("ui.map.shareLocation"), function() {
                l._createHyperlinkForSharing(f.i, f.j)
            }), this._addCancel()
        }), this.on("open", function(a, s) {
            f = a, u.show(), p.hide(), n.hide(), i.hide(), o.hide(), h.hide();
            var c = a.icons;
            if (c)
                for (var b = 0, m = c.length; b < m; b += 1) {
                    var M = c[b];
                    "customFlag" === M.categoryId ? (p.show(), u.hide()) : "questObjective" === M.categoryId ? (n.flagId = M.id, n.show()) : "zaap" === M.categoryId ? (i.flagId = M.id, i.show()) : "hint" === M.categoryId ? (o.flagId = M.id, o.show()) : "estate" === M.categoryId && (h.flagId = M.id, h.show())
                }
            var g = window.gui.playerData.hasRight(d.SHOW_ADMIN_CONSOLE_BUTTON);
            t.toggleDisplay(window.gui.playerData.isModeratorOrMore() || g);
            var _ = window.gui.playerData.isSubscriberAtMinLevel(l.ELITE);
            !g && _ ? (window.gui.playerData.teleporterData.setListenToZaapListMessage(!1), window.dofus.sendMessage("ZaapOpenDialogRequestMessage")) : (e.hide(), s()), window.gui.playerData.teleporterData.on("zaapListCreated", function() {
                var t = window.gui.playerData.teleporterData.isZaapOrPrism(f.i, f.j),
                    i = window.gui.playerData.teleporterData.getZaapOrPrismCost(f.i, f.j);
                i > -1 && e.setLabel(r("ui.common.teleport") + " (" + i + " K)"), e.toggleDisplay(t), s()
            })
        }), this.on("close", function() {
            window.gui.playerData.teleporterData.setListenToZaapListMessage(!0)
        })
    }
    i(499);
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText,
        s = i(52),
        c = i(500),
        l = i(509),
        d = i(466);
    o(n, a), e.exports = n, a.prototype._createHyperlinkForSharing = function(e, t) {
        var i = window.gui.playerData.position,
            n = "{mapWithFlag," + e + "," + t + "," + i.worldmapId + "}",
            o = {
                text: n,
                posX: e,
                posY: t
            };
        window.gui.chat.insertLink("shareLocation", o)
    }
}
