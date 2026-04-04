function(e, t, i) {
    function n() {
        a.call(this, {
            className: "PartyInviteDetailsWindow",
            positionInfo: b
        }), this.partyMap = {}, this.numParties = 0, this.partyId = null;
        var e = this;
        window.gui.on("disconnect", function() {
            e._closeAll()
        })
    }
    i(1123);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = i(86)
        .DofusButton,
        c = i(63),
        l = i(17)
        .getText,
        d = i(823),
        u = i(516),
        p = i(689),
        h = i(730),
        f = i(453),
        b = {
            left: "c",
            top: "c",
            width: "60%",
            height: 375
        };
    o(n, a), e.exports = n, n.prototype.showPartyDetails = function(e) {
        return e === this.partyId ? r.open(this.id) : (window.dofus.sendMessage("PartyInvitationDetailsRequestMessage", {
            partyId: e
        }), this.partyMap[e] || (this.partyMap[e] = !0, this.numParties++, 1 === this.numParties && this._setupListeners(!0)), void(this.text ? this._resetDom() : this._setupDom()))
    }, n.prototype._closeAll = function() {
        for (var e in this.partyMap) this._closePartyInvitation(e);
        this.partyMap = {}, this.numParties = 0, this.partyId = null
    }, n.prototype._closePartyInvitation = function(e) {
        this.partyMap[e] && (delete this.partyMap[e], this.numParties--, 0 === this.numParties && this._setupListeners(!1), window.gui.notificationBar.removeNotification("party" + e), e === this.partyId && (this.partyId = null, r.close(this.id), this.windowBody.clearContent(), this.text = null, this.characters = [], this.members = null, this.scroller = null, this.slotList = null))
    }, n.prototype._setupDom = function() {
        var e = this;
        this.text = this.windowBody.createChild("div", {
            className: "text"
        });
        var t = this.windowBody.createChild("div", {
            className: "container"
        });
        this.scroller = t.appendChild(new f({
            className: "slotList"
        }, {
            isHorizontal: !0
        })), this.slotList = this.scroller.content, this.characters = [];
        var i = this.windowBody.createChild("div", {
                className: "buttons"
            }),
            n = i.appendChild(new s(l("ui.common.accept"), {
                className: "acceptButton"
            })),
            o = i.appendChild(new s(l("ui.common.refuse"), {
                className: "refuseButton"
            })),
            a = i.appendChild(new s(l("ui.social.blackListTemporarly"), {
                className: "ignoreButton"
            }));
        n.on("tap", function() {
            window.dofus.sendMessage("PartyAcceptInvitationMessage", {
                partyId: e.partyId
            }), e._closePartyInvitation(e.partyId)
        }), o.on("tap", function() {
            window.dofus.sendMessage("PartyRefuseInvitationMessage", {
                partyId: e.partyId
            }), e._closePartyInvitation(e.partyId)
        }), a.on("tap", function() {
            window.dofus.sendMessage("IgnoredAddRequestMessage", {
                name: e.fromName,
                session: !0
            }), e._closePartyInvitation(e.partyId)
        })
    }, n.prototype._newCharacterSlot = function() {
        var e = this.slotList.createChild("div", {
            className: "character"
        });
        e.createChild("div", {
            className: "background",
            name: "background"
        }), e.appendChild(new p({
            name: "characterDisplay",
            scale: 1.4,
            verticalAlign: "bottom"
        })), e.createChild("div", {
            className: "name",
            name: "name"
        }), e.createChild("div", {
            className: "breed",
            name: "breed"
        }), e.createChild("div", {
            className: "level",
            name: "level"
        }), c(e);
        var t = this;
        return e.on("tap", function() {
            if (e.characterId) {
                var i = t.members[e.characterId];
                window.gui.openContextualMenu("player", {
                    playerId: i.id,
                    playerName: i.name,
                    guildId: i.guildInfo.guildId
                })
            }
        }), e
    }, n.prototype._resetDom = function() {
        this.characters = [], this.slotList.clearContent()
    }, n.prototype._removeMember = function(e, t) {
        if (e === this.partyId) {
            var i = this.members[t];
            if (i) {
                var n = i.index,
                    o = this.characters.splice(n, 1)[0];
                this.slotList.removeChild(o), this.characters.push(this._newCharacterSlot());
                for (var a in this.members) i = this.members[a], i.index > n && i.index--;
                delete this.members[t], this.scroller.refresh()
            }
        }
    };
    var m = ["PartyGuestInformations", "PartyInvitationMemberInformations", "PartyMemberInformations"];
    n.prototype._addOrUpdateMember = function(e, t, i) {
        if (e === this.partyId) {
            if (m.indexOf(t._type) === -1) return console.error("Unhandled type for character: " + t._type);
            var n = this.members[t.id];
            n ? t.index = n.index : t.index = Object.keys(this.members)
                .length, this.members[t.id] = t, this._updateCharacterSlot(t), i || this.scroller.refresh()
        }
    }, n.prototype._updateCharacterSlot = function(e) {
        var t = this.characters[e.index];
        t || (t = this.characters[e.index] = this._newCharacterSlot()), t.characterId = e.id, t.getChild("name")
            .setText(e.name), t.getChild("level")
            .setText(l("ui.common.level") + " " + e.level), t.getChild("breed")
            .setText(window.gui.databases.Breeds[e.breed].shortNameId);
        var i = t.getChild("characterDisplay");
        i.setLook(e.entityLook, {
            direction: h.DIRECTION_SOUTH_EAST,
            animation: "AnimStatique",
            boneType: "characters/",
            skinType: "characters/",
            riderOnly: !0
        }), this._toggleGuest(e.id, e.isGuest)
    }, n.prototype._toggleGuest = function(e, t) {
        var i = this.members[e];
        if (i) {
            var n = this.characters[i.index];
            n.getChild("background")
                .toggleClassName("guestFrame", Boolean(t))
        }
    }, n.prototype._toggleLeader = function(e, t) {
        var i = this.members[e];
        if (i) {
            var n = this.characters[i.index];
            n.getChild("background")
                .toggleClassName("leaderIcon", Boolean(t))
        }
    }, n.prototype._setLeader = function(e, t) {
        e === this.partyId && (this._toggleLeader(this.leaderId, !1), this._toggleLeader(t, !0), this.leaderId = t)
    }, n.prototype._joinParty = function(e) {
        var t = e.partyId;
        this.partyId = t;
        var i = e.partyType === u.PARTY_TYPE_ARENA;
        this.position = null, r.open(this.id), this.windowTitle.setText(l(i ? "ui.common.invitationArena" : "ui.common.invitationGroupe")), this.slotList.toggleClassName("arena", i), this.slotList.toggleClassName("classic", !i);
        for (var n = i ? d.NUM_SLOTS_ARENA : d.NUM_SLOTS_CLASSIC, o = n; o > 0; o--) this.characters.push(this._newCharacterSlot());
        for (this.text.setText(l("ui.common.invitationPresentation", e.fromName) + "."), this.fromName = e.fromName, this.members = {}, o = 0; o < e.members.length; o++) this._addOrUpdateMember(t, e.members[o], !0);
        for (o = 0; o < e.guests.length; o++) this._addOrUpdateMember(t, e.guests[o], !0);
        this._setLeader(t, e.leaderId), this.scroller.refresh()
    }, n.prototype._setupListeners = function(e) {
        var t = window.gui.playerData.partyData;
        this.joinPartyHandler || (this.joinPartyHandler = this._joinParty.bind(this), this.closePartyInvitationHandler = this._closePartyInvitation.bind(this), this.setLeaderHandler = this._setLeader.bind(this), this.addOrUpdateMemberHandler = this._addOrUpdateMember.bind(this), this.removeMemberHandler = this._removeMember.bind(this)), e ? (t.on("partyInvitationDetails", this.joinPartyHandler), t.on("partyInvitationCancelled", this.closePartyInvitationHandler), t.on("partyLeaderUpdate", this.setLeaderHandler), t.on("partyNewGuest", this.addOrUpdateMemberHandler), t.on("partyNewMember", this.addOrUpdateMemberHandler), t.on("partyUpdateMember", this.addOrUpdateMemberHandler), t.on("partyMemberLeaving", this.removeMemberHandler), t.on("partyGuestLeaving", this.removeMemberHandler)) : (t.removeListener("partyInvitationDetails", this.joinPartyHandler), t.removeListener("partyInvitationCancelled", this.closePartyInvitationHandler), t.removeListener("partyLeaderUpdate", this.setLeaderHandler), t.removeListener("partyNewGuest", this.addOrUpdateMemberHandler), t.removeListener("partyNewMember", this.addOrUpdateMemberHandler), t.removeListener("partyUpdateMember", this.addOrUpdateMemberHandler), t.removeListener("partyMemberLeaving", this.removeMemberHandler), t.removeListener("partyGuestLeaving", this.removeMemberHandler))
    }
}
