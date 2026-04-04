function(e, t, i) {
    function n(e) {
        d.call(this, "div", {
            className: "ContextualMenuUserContent"
        }), this.banner = e, this._createDom()
    }
    var o, a, r, s = i(56)
        .inherits,
        c = i(17)
        .getText,
        l = i(86),
        d = i(72),
        u = i(534),
        p = i(103),
        h = i(52);
    s(n, d), e.exports = n, n.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div"),
            i = window.gui.playerData;
        this.freeSoul = t.appendChild(new l({
            text: c("ui.common.freeSoul"),
            className: "cmButton",
            hidden: !0
        }, function() {
            window.dofus.sendMessage("GameRolePlayFreeSoulRequestMessage"), e.emit("close")
        })), this.slapHimself = t.appendChild(new l({
            text: c("ui.dialog.slapHimself"),
            className: "cmButton"
        }, function() {
            window.dofus.sendMessage("ChatClientMultiMessage", {
                content: c("ui.dialog.slapSentence"),
                channel: 0
            }), e.emit("close")
        })), this.orientCharacter = t.appendChild(new l({
            text: c("ui.orientCharacter"),
            className: ["cmButton"]
        }, function() {
            h.open("characterOrientation"), e.emit("close")
        })), this.partyTitle = t.createChild("div", {
            text: c("ui.common.party"),
            className: "title",
            hidden: !0
        }), this.leaveParty = t.appendChild(new l({
            text: c("ui.party.leaveParty"),
            className: "cmButton",
            hidden: !0
        }, function() {
            window.dofus.sendMessage("PartyLeaveRequestMessage", {
                partyId: o
            }), e.emit("close")
        })), this.followMe = t.appendChild(new l({
            text: c("ui.party.followMeAll"),
            className: "cmButton",
            hidden: !0
        }, function() {
            window.dofus.sendMessage("PartyFollowThisMemberRequestMessage", {
                partyId: o,
                playerId: i.id,
                enabled: !0
            }), r = !0, e.emit("close")
        })), this.stopFollowMe = t.appendChild(new l({
            text: c("ui.party.stopAllFollowingMe"),
            className: "cmButton",
            hidden: !0
        }, function() {
            window.dofus.sendMessage("PartyFollowThisMemberRequestMessage", {
                partyId: o,
                playerId: i.id,
                enabled: !1
            }), r = !1, e.emit("close")
        }));
        var n = t.createChild("div", {
            className: "group"
        });
        this.arenaTitle = n.createChild("div", {
            text: c("ui.common.koliseum"),
            className: "title",
            hidden: !0
        }), this.leaveArena = n.appendChild(new l({
            text: c("ui.party.arenaQuit"),
            className: "cmButton",
            hidden: !0
        }, function() {
            window.dofus.sendMessage("PartyLeaveRequestMessage", {
                partyId: a
            }), e.emit("close")
        })), this.fightReady = t.appendChild(new l({
            text: c("ui.banner.ready"),
            className: "cmButton"
        }, function() {
            window.gui.timeline.fightControlButtons.toggleReadyForFight(), e.emit("close")
        })), this.admin = t.appendChild(new l({
            text: "Admin",
            className: "cmButton"
        }, function() {
            var t = {
                id: i.id,
                name: i.characterBaseInformations.name
            };
            window.gui.closeContextualMenu(), window.gui.openContextualMenuAround("admin", e.admin, t), e.emit("close")
        }))
    }, n.prototype.updateContent = function() {
        var e = window.gui.playerData,
            t = e.partyData.getClassicalParty(),
            i = e.partyData.getArenaParty();
        if (this.banner.setContent({
                name: e.characterBaseInformations.name
            }), o = t ? t.getPartyId() : null, a = i ? i.getPartyId() : null, this.freeSoul.hide(), this.slapHimself.hide(), this.orientCharacter.hide(), this.partyTitle.hide(), this.leaveParty.hide(), this.arenaTitle.hide(), this.leaveArena.hide(), this.followMe.hide(), this.stopFollowMe.hide(), this.fightReady.hide(), this.admin.hide(), e.state === u.STATUS_TOMBSTONE ? this.freeSoul.show() : p.isRoleplayMode && (this.slapHimself.show(), this.orientCharacter.show()), o && (this.partyTitle.show(), this.leaveParty.show(), t.getLeaderId() === e.id)) {
            if (r) return this.followMe.hide(), void this.stopFollowMe.show();
            this.followMe.show(), this.stopFollowMe.hide()
        }
        a && (this.arenaTitle.show(), this.leaveArena.show()), window.gui.timeline.fightControlButtons.isReadyForFightButtonVisible() && this.fightReady.show();
        var n = e.adminMenu.getAdminMenuId();
        e.isModeratorOrMore() && null !== n && this.admin.show()
    }
}
