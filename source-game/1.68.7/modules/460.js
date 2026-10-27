function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ContextualMenuFightTeam"
        }), this.leaderId = 0, this.fightId = 0, this.once("open", this._setupDom), this.on("open", this._setContent)
    }
    i(461);
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(130),
        s = i(17)
        .getText,
        c = i(52);
    o(n, a), e.exports = n, n.prototype._setupDom = function() {
        var e = this,
            t = this.entryList.createChild("div");
        this.teamMemberList = t.createChild("div", {
            className: "teamMemberList"
        }), this.actionsContainer = t.createChild("div"), this.buttonJoin = this._addEntry(s("ui.common.join"), function() {
            return e.isAlliancePrismFight ? void c.open("social", {
                tabId: "alliance",
                tabParams: {
                    tabId: "attacks"
                }
            }) : e.isTaxCollectorFight ? void c.open("social", {
                tabId: "guild",
                tabParams: {
                    tabId: "perceptors"
                }
            }) : void window.gui.fightManager.joinSpectator(e.fightId, e.leaderId)
        }), this._addCancel()
    }, n.prototype._setContent = function(e, t) {
        var i = this;
        this.isAlliancePrismFight = !1, this.isTaxCollectorFight = !1, this.leaderId = e.leaderId, this.fightId = e.fightId, this.teamMemberList.clearContent();
        for (var n = e.teamMembers, o = [], a = 0; a < n.length; a++) {
            var c = n[a];
            switch (c._type) {
                case "FightTeamMemberMonsterInformations":
                    o.push(c.monsterId);
                    break;
                case "FightTeamMemberCharacterInformations":
                case "FightTeamMemberWithAllianceCharacterInformations":
                case "FightTeamMemberTaxCollectorInformations":
            }
        }
        var l = window.gui.fightManager.getFightMaxPerTeam(e.fightId),
            d = " (" + e.teamMembers.length + "/" + l + ")";
        this.buttonJoin.setText(s("ui.common.join") + d), r.getDataMap("Monsters", o, null, function(e, o) {
            if (e) return console.error(e);
            for (var a = 0, r = s("ui.common.short.level") + " ", c = 0; c < n.length; c++) {
                var l = n[c],
                    d = i.teamMemberList.createChild("div", {
                        className: "teamMember"
                    });
                switch (l._type) {
                    case "FightTeamMemberMonsterInformations":
                        var u = l.grade,
                            p = o[l.monsterId],
                            h = p.grades[u - 1].level;
                        a += h, d.setText(p.nameId + " (" + r + h + ")"), 3451 === p.id && (i.isAlliancePrismFight = !0);
                        break;
                    case "FightTeamMemberCharacterInformations":
                    case "FightTeamMemberWithAllianceCharacterInformations":
                        a += l.level, d.setText(l.name + " (" + r + l.level + ")");
                        break;
                    case "FightTeamMemberTaxCollectorInformations":
                        i.isTaxCollectorFight = !0
                }
            }
            i.header.setText(s("ui.common.rank", a)), t()
        })
    }
}
