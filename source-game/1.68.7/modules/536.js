function(e, t, i) {
    function n() {
        a.call(this);
        var e, t, i, n, l, h, f, b;
        this.once("open", function() {
            e = this.header.appendChild(new r), this._addEntry(s("ui.common.talk"), function() {
                f.prepareDialog(l.npcData), window.dofus.sendMessage("NpcGenericActionRequestMessage", {
                    npcId: l.contextualId,
                    npcActionId: 3,
                    npcMapId: window.gui.playerData.position.mapId
                })
            }), h = this._addEntry(s("ui.common.teleport"), function() {
                window.dofus.sendMessage("PrismUseRequestMessage")
            }), i = this._addEntry(s("ui.common.attack"), function() {
                window.gui.openConfirmPopup({
                    title: s("ui.popup.warning"),
                    message: s("tablet.popup.prismAttackConfirm"),
                    cb: function(e) {
                        e && window.dofus.sendMessage("PrismAttackRequestMessage")
                    }
                })
            }), n = this._addEntry(s("ui.common.modify"), function() {
                p.open("social", {
                    tabId: "alliance",
                    tabParams: {
                        tabId: "conquests"
                    }
                })
            }), this._addCancel(), window.gui.on("AlliancePrismDialogQuestionMessage", function() {
                var e = new u(1e3 * t.nextVulnerabilityDate)
                    .getServerDate()
                    .toString(),
                    i = [b, o.prismState[t.state], e.date + " " + e.time, 0];
                f.nextQuestionAsync(15428, [], i)
            })
        }), this.on("open", function(o, a) {
            l = o, f = window.gui.npcDialogHandler;
            var r, s = window.gui.playerData;
            t = o.prism, "AlliancePrismInformation" === t._type ? (r = o.prism.alliance, b = r.allianceName, e.setContent({
                alliance: r
            }), s.alliance.hasAlliance() && s.alliance.current.allianceId === r.allianceId ? (i.hide(), n.toggleDisplay(s.guild.hasRight(c.GUILD_RIGHT_MANAGE_ALLIANCE_PRISM))) : (i.show(), s.isAlive() && t.state === d.PRISM_STATE_NORMAL ? i.enable() : i.disable(), n.hide()), h.hide()) : (r = window.gui.playerData.alliance.current, b = r.allianceName, e.setContent({
                alliance: r
            }), i.hide(), h.toggleDisplay(t.hasTeleporterModule), s.guild.hasRight(c.GUILD_RIGHT_MANAGE_ALLIANCE_PRISM) ? n.show() : n.hide()), a()
        })
    }
    var o = i(537),
        a = i(450),
        r = i(464),
        s = i(17)
        .getText,
        c = i(520),
        l = i(56)
        .inherits,
        d = i(522),
        u = i(21)
        .DofusDate,
        p = i(52);
    l(n, a), e.exports = n
}
