function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ContextualMenuPlayersList"
        }), this.once("open", this._setupDom), this.on("open", this._setContent)
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(86),
        s = i(52),
        c = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype._setupDom = function() {
        var e = this.entryList.createChild("div");
        this.playersList = e.createChild("div", {
            className: "playersList"
        }), this._addCancel()
    }, n.prototype._setContent = function(e, t) {
        function i(e) {
            u.close(), e.openPlayerContextualMenu(h)
        }

        function n(e) {
            u.close(), e.openNpcContextualMenu(h)
        }

        function o(e) {
            u.close(), window.gui.openContextualMenu("monster", e, h)
        }

        function a(e) {
            u.close(), window.gui.openContextualMenu("prism", e, h)
        }

        function l(e) {
            u.close(), e.mapId = window.isoEngine.mapRenderer.map.id, window.gui.openContextualMenu("taxCollector", e, h)
        }

        function d(e) {
            u.close();
            var t = window.gui.fightManager.getFightList();
            for (var i in t) {
                var n = t[i];
                if (n.fightId === e) {
                    var o = n.fightTeams[0],
                        a = {
                            actorId: o.contextualId,
                            fightId: o.fightId,
                            leaderId: o.leaderId,
                            teamId: o.teamId,
                            teamTypeId: o.teamTypeId,
                            teamSide: o.teamSide,
                            teamMembers: o.teamMembers,
                            type: o._type
                        };
                    window.gui.openContextualMenu("fightTeam", a, h);
                    break
                }
            }
        }
        var u = this;
        this.playersList.clearContent();
        var p = e.actors,
            h = e.coordinates,
            f = e.npc,
            b = e.monster;
        if (f) switch (f.data.type) {
            case "GameRolePlayPrismInformations":
                this.playersList.appendChild(new r({
                    text: f.data.npcData.nameId + " [" + f.data.prism.alliance.allianceTag + "]",
                    className: "cmButton"
                }, a.bind(null, f.data)));
                break;
            case "GameRolePlayTaxCollectorInformations":
                this.playersList.appendChild(new r({
                    text: c("ui.common.taxCollector"),
                    className: "cmButton"
                }, l.bind(null, f.data)));
                break;
            case "GameRolePlayNpcInformations":
            case "GameRolePlayNpcWithQuestInformations":
                this.playersList.appendChild(new r({
                    text: c("tablet.npc.cell", f.data.npcData.nameId),
                    className: "cmButton"
                }, n.bind(null, f)));
                break;
            default:
                return
        }
        if (b) {
            var m = b.data || {},
                M = m.staticInfos || {},
                g = M.mainCreatureLightInfos || {};
            if ("GameRolePlayMountInformation" === m.type) {
                var _ = [{
                    caption: c("ui.mount.viewMountDetails"),
                    cb: function() {
                        s.getWindow("mount")
                            .showPaddockMount(b.actorId)
                    }
                }];
                return window.gui.openContextualMenu("generic", {
                    title: (m.name || c("ui.common.noName")) + "\n" + c("ui.mount.mountOf", m.ownerName) + "\n" + c("ui.common.rank", m.level),
                    actions: _
                }, h)
            }
            if (g.staticInfos) this.playersList.appendChild(new r({
                text: c("tablet.monster.cell", g.staticInfos.nameId),
                className: "cmButton"
            }, o.bind(null, m)));
            else {
                var A = b.actorId.toString();
                if (A && !A.indexOf && console.error(new Error("Cannot find indexOf on actorId: " + b.actorId)), A && A.indexOf && 0 === A.indexOf("fight")) {
                    var O = A.split(":"),
                        v = parseInt(O[1], 10);
                    this.playersList.appendChild(new r({
                        text: c("ui.common.fight"),
                        className: "cmButton"
                    }, d.bind(null, v)))
                } else console.error(new Error("Not a monster, type " + m.type))
            }
        }
        for (var y = 0; y < p.length; y += 1) {
            var z = p[y];
            z.data && z.data.playerId ? this.playersList.appendChild(new r({
                text: z.data.name,
                className: "cmButton"
            }, i.bind(null, z))) : console.warn("ContextualMenuPlayersList: skipped actor:", z.actorId)
        }
        t()
    }
}
