function(e, t, i) {
    function n() {
        d.call(this, "div", {
            className: "Party",
            hidden: !0
        }), p(this, {
            isCollapsable: !0
        }), this.numParties = 0, this.hasParty = {}, this.currentPartyType = null, this.currentParty = null, this.invitedFrom = {}, this.partyTypesById = {}, this.setupEvents()
    }

    function o(e) {
        return e === m.PARTY_TYPE_ARENA ? m.PARTY_TYPE_CLASSICAL : m.PARTY_TYPE_ARENA
    }

    function a(e, t) {
        var i = e.memberData,
            n = t.memberData,
            o = i.initiative || 0,
            a = n.initiative || 0,
            r = i.LifePoints || 0,
            s = n.LifePoints || 0,
            c = i.maxLifePoints || 0,
            l = n.maxLifePoints || 0;
        return o > a ? -1 : o === a && o * r / c > a * s / l ? -1 : 1
    }
    i(798);
    var r = i(88)
        .addTooltip,
        s = i(54)
        .dimensions,
        c = i(502),
        l = i(56)
        .inherits,
        d = i(72),
        u = i(86),
        p = i(570),
        h = i(17),
        f = h.getText,
        b = h.processTextWithModifier,
        m = i(516),
        M = i(689),
        g = i(730),
        _ = i(504),
        A = i(52),
        O = i(453),
        v = i(125);
    l(n, d), e.exports = n, n.prototype._reset = function() {
        this.hide(), this._cleanData(m.PARTY_TYPE_CLASSICAL, !0), this._cleanData(m.PARTY_TYPE_ARENA, !0)
    }, n.prototype._selectPartyType = function(e) {
        var t = e === m.PARTY_TYPE_ARENA;
        this.toggleClassName("arena", t), this.currentPartyType = e, this.currentParty = t ? this.arenaParty : this.classicParty, this.classicParty.toggleDisplay(!t), this.arenaParty.toggleDisplay(t)
    }, n.prototype._createContent = function() {
        var e = this;
        this.setStyle("max-height", s.mapHeight + "px"), this.createChild("div", {
            className: "gripIcon"
        }), this.scroller = this.appendChild(new O({
            className: "partyScroller"
        }));
        var t = this.switchPartyButton = this.scroller.content.appendChild(new u({
            className: "switchPartyButton",
            hidden: !0
        }));
        t.createChild("div", {
            className: "iconGroup"
        }), t.createChild("div", {
            className: "separator"
        }), t.createChild("div", {
            className: "iconArena"
        }), t.on("tap", function() {
            e._selectPartyType(o(e.currentPartyType))
        });
        var i = this.scroller.content.appendChild(new u({
            className: ["optionsButton", "greenButton"]
        }));
        i.createChild("div", {
            className: "icon"
        }), i.on("tap", function() {
            var t = e.currentParty;
            window.gui.openContextualMenuAround("partyOptions", i, {
                partyType: e.currentPartyType,
                partyId: e.currentParty.partyId,
                isLoyal: t.isLoyal,
                isRestricted: t.isRestricted,
                isLeader: t.partyLeaderId === window.gui.playerData.id
            })
        }), this.cogDom = i, this.partyBoxes = this.scroller.content.createChild("div", {
            className: "partyBoxes"
        }), this.classicParty = this.partyBoxes.createChild("div", {
            className: ["partyBox", "classic"],
            name: m.PARTY_TYPE_CLASSICAL
        }), this.arenaParty = this.partyBoxes.createChild("div", {
            className: ["partyBox", "arena"],
            name: m.PARTY_TYPE_ARENA,
            hidden: !0
        }), this.setStyles({
            left: s.mapRight - 90 + "px"
        }), this.show();
        var n = this.scroller.rootElement.offsetTop;
        this.scroller.setStyle("maxHeight", s.mapHeight - n + "px"), this.scroller.refresh()
    }, n.prototype.addMember = function(e, t) {
        var i = this.partyBoxes.getChild(e),
            n = t.id || t.guestId,
            o = i.createChild("div", {
                className: "member",
                name: n
            }),
            a = new M({
                name: "characterDisplay",
                scale: "fitin"
            });
        o.appendChild(a), o.on("tap", function() {
            window.gui.openContextualMenuAround("player", o, {
                playerId: t.id || t.guestId,
                playerName: t.name,
                guildId: t.guildInfo.guildId
            })
        });
        var r = o.createChild("div", {
            className: "hpBar",
            name: "hpBar"
        });
        o.hp = r.createChild("div", {
            className: "hp",
            name: "hp"
        }), o.createChild("div", {
            className: "pendingIcon",
            name: "pendingIcon",
            text: "?"
        }), o.createChild("div", {
            className: "leaderIcon",
            name: "leaderIcon"
        });
        var s = o.createChild("div", {
            className: "followingBadge"
        });
        s.createChild("div", {
            className: "icon"
        }), this.updateMember(e, t), this.scroller.refresh(), this.emit("resized")
    }, n.prototype.updateMember = function(e, t) {
        var i = this.partyBoxes.getChild(e),
            n = t.id || t.guestId,
            o = i.partyLeaderId === n,
            r = i.getChild(n);
        if (r) {
            r.memberData = t, this._updateMemberTooltip(r, o, e), this._updateCogTooltip(this.cogDom);
            for (var s = i.getChildren(), c = s.sort(a), l = 0; l < c.length; l += 1) {
                var d = i.removeChild(c[l]);
                i.appendChild(d)
            }
            var u = r.getChild("characterDisplay"),
                p = t.entityLook || t.guestLook;
            u.setLook(p, {
                riderOnly: !0,
                direction: g.DIRECTION_SOUTH_WEST,
                animation: "AnimArtwork",
                boneType: "timeline/",
                skinType: "timeline/"
            }), r.hp.setStyle("height", t.lifePoints / t.maxLifePoints * 100 + "%"), r.toggleClassName("guest", Boolean(t.guestId)), r.toggleClassName("leader", o)
        }
    }, n.prototype.addOrUpdateMember = function(e, t) {
        var i = this._getPartyById(e);
        if (i) {
            var n = i.getChild(t.id);
            n ? (n.memberData = t, this.updateMember(i.type, t)) : this.addMember(i.type, t)
        }
    }, n.prototype.getMemberById = function(e, t) {
        var i = this._getPartyById(e);
        if (i) {
            var n = i.getChild(t);
            if (n) return n.memberData
        }
    }, n.prototype._getPartyById = function(e) {
        var t = this.partyTypesById[e];
        return t ? this.partyBoxes.getChild(t) : null
    }, n.prototype._joinParty = function(e, t, i, n, o) {
        this.partyBoxes || this._createContent(), this.hasParty[e] = !0, this.numParties++, this.partyTypesById[t] = e;
        var a = this.partyBoxes.getChild(e);
        a.type = e, a.partyLeaderId = i, a.partyId = t, a.isLoyal = !1, a.isRestricted = !0;
        for (var r = 0; r < n.length; r += 1) a.getChild(n[r].id) ? this.updateMember(e, n[r]) : this.addMember(e, n[r]);
        for (r = 0; r < o.length; r += 1) a.getChild(o[r].id) ? this.updateMember(e, o[r]) : this.addMember(e, o[r]);
        this._selectPartyType(e), this.numParties >= 2 && this.switchPartyButton.show(), 1 === this.numParties && this.show(), this.emit("resized")
    }, n.prototype._cleanData = function(e, t) {
        if (e && this.hasParty[e]) {
            this.hasParty[e] = !1, this.numParties--;
            var i = this.partyBoxes.getChild(e);
            i.hide(), i.clearContent(), delete i.partyLeaderId;
            for (var n in this.partyTypesById) parseInt(this.partyTypesById[n], 10) === e && delete this.partyTypesById[n];
            this.switchPartyButton.hide(), this.numParties > 0 ? this._selectPartyType(o(e)) : this.hide(), e === m.PARTY_TYPE_ARENA && this.removeArenaFightQuestion(), t || this.emit("resized")
        }
    }, n.prototype._removeMember = function(e, t) {
        var i = this._getPartyById(e);
        i && (i.getChild(t)
            .destroy(), this.removeTeleportQuestion(t), this.scroller.refresh(), this.emit("resized"))
    }, n.prototype.setupEvents = function() {
        var e = this,
            t = window.gui,
            i = t.playerData.partyData,
            n = window.dofus.connectionManager;
        t.on("disconnect", function() {
            e._reset()
        }), t.on("PartyJoinMessage", function(t) {
            t.partyType === m.PARTY_TYPE_CLASSICAL && v.trackJoinGroup(), e._joinParty(t.partyType, t.partyId, t.partyLeaderId, t.members, t.guests)
        }), i.on("partyLeaderUpdate", function(t, i) {
            var n = e._getPartyById(t);
            if (n) {
                var o = n.getChild(n.partyLeaderId),
                    a = n.getChild(i);
                n.partyLeaderId = i, e.updateMember(n.type, o.memberData), e.updateMember(n.type, a.memberData)
            }
        }), t.on("PartyNewGuestMessage", function(t) {
            var i = e._getPartyById(t.partyId);
            if (i) {
                var n = t.guest;
                n.hostName = i.getChild(n.hostId)
                    .memberData.name, e.addMember(i.type, n), i.partyId = t.partyId
            }
        }), i.on("partyMemberLeaving", function(t, i) {
            e._removeMember(t, i)
        }), i.on("partyNewMember", function(t, i) {
            e.addOrUpdateMember(t, i)
        }), i.on("partyUpdateMember", function(t, i) {
            e.addOrUpdateMember(t, i)
        }), i.on("playerLeavingParty", function(t) {
            e._cleanData(e.partyTypesById[t])
        }), i.on("partyInvitationCancelled", function(i, n) {
            if (t.playerData.id !== n) {
                var o = e.invitedFrom[i],
                    a = f("ui.party.invitationCancelledForGuest", o);
                t.chat.logMsg(a), t.notificationBar.removeNotification("party" + i)
            }
        }), i.on("partyGuestLeaving", function(n, o, a) {
            var r = i.getGuestName(n, o);
            if (a) {
                if (a !== t.playerData.characterBaseInformations.id) {
                    var s = i.getMemberName(a);
                    t.chat.logMsg(f("ui.party.invitationCancelled", s, r))
                }
            } else t.chat.logMsg(f("ui.party.invitationRefused", r));
            e._removeMember(n, o)
        }), t.on("PartyFollowStatusUpdateMessage", function(t) {
            if (t.success) {
                var i = e._getPartyById(t.partyId);
                if (i) {
                    var n = i.getChild(e.followedId);
                    if (e.followedId && (n ? n.delClassNames("following") : console.error(new Error("Cannot find the previous child " + e.followedId))), e.followedId = t.followedId, e.followedId) {
                        var o = i.getChild(e.followedId);
                        o ? o.addClassNames("following") : console.error(new Error("Cannot find the new child " + e.followedId))
                    }
                }
            }
        }), t.on("PartyUpdateLightMessage", function(t) {
            var i = e._getPartyById(t.partyId);
            if (i) {
                var n = i.getChild(t.id)
                    .getChild("hpBar")
                    .getChild("hp");
                n.setStyle("height", t.lifePoints / t.maxLifePoints * 100 + "%")
            }
        }), n.on("TeleportBuddiesMessage", function() {
            t.openConfirmPopup({
                title: f("ui.common.confirm"),
                message: f("ui.party.teleportMembersProposition"),
                cb: function(e) {
                    n.sendMessage("TeleportBuddiesAnswerMessage", {
                        accept: e
                    })
                }
            })
        }), n.on("TeleportBuddiesRequestedMessage", function(e) {
            for (var n = i.getMemberName(e.inviterId), o = [], a = 0; a < e.invalidBuddiesIds.length; a++) o.push(i.getMemberName(e.invalidBuddiesIds[a]));
            var r = f("ui.party.teleportWish", n, e._dungeonName);
            o.length && (r += " " + b(f("ui.party.teleportCriterionFallenAngels"), o.length, o.join(", "))), t.chat.logMsg(r, _.CHANNEL_PARTY)
        }), n.on("TeleportToBuddyOfferMessage", function(t) {
            e.showTeleportQuestion(t.buddyId, t.dungeonId, t._dungeonName, 1e3 * t.timeLeft)
        }), n.on("TeleportToBuddyCloseMessage", function(t) {
            e.removeTeleportQuestion(t.buddyId)
        }), n.on("PartyRestrictedMessage", function(t) {
            var i = e._getPartyById(t.partyId);
            i && (i.isRestricted = t.restricted)
        }), n.on("PartyLoyaltyStatusMessage", function(t) {
            var i = e._getPartyById(t.partyId);
            i && (i.isLoyal = t.loyal)
        })
    }, n.prototype.showTeleportQuestion = function(e, t, i, n) {
        function o(i) {
            var n = 1 === i;
            n && A.isDialogActive() && A.closeAll(), window.isoEngine.cancelMoveAndDo(function() {
                window.dofus.connectionManager.sendMessage("TeleportToBuddyAnswerMessage", {
                    dungeonId: t,
                    buddyId: e,
                    accept: n
                })
            })
        }
        var a = window.gui.playerData.partyData.getMemberName(e),
            r = window.gui.notificationBar,
            s = {
                type: r.notificationType.PRIORITY_INVITATION,
                title: f("ui.common.invitation"),
                text: f("ui.party.teleportProposition", a, i),
                timer: n,
                buttons: [{
                    label: f("ui.common.refuse"),
                    action: o
                }, {
                    label: f("ui.common.accept"),
                    action: o
                }],
                onClose: o
            };
        r.newNotification("teleport" + e, s)
    }, n.prototype.removeTeleportQuestion = function(e) {
        window.gui.notificationBar.removeNotification("teleport" + e)
    }, n.prototype.removeArenaFightQuestion = function(e) {
        e && e !== this.arenaFightId && console.error("removeArenaFightQuestion: bad fightId?"), this.arenaFightId && (window.gui.notificationBar.removeNotification("arena" + this.arenaFightId), this.arenaFightId = null)
    }, n.prototype.showPartyInvitationQuestion = function(e, t, i) {
        function n() {
            return A.getWindow("partyInviteDetails")
                .showPartyDetails(t), "HIDE_DIALOG"
        }

        function o(e) {
            var i = e === -1 ? "PartyRefuseInvitationMessage" : "PartyAcceptInvitationMessage";
            window.dofus.connectionManager.sendMessage(i, {
                partyId: t
            })
        }
        this.invitedFrom[t] = i;
        var a, r = "party" + t;
        if (e === m.PARTY_TYPE_CLASSICAL) a = f("ui.party.playerInvitation", i);
        else {
            if (e !== m.PARTY_TYPE_ARENA) return console.error("Unknown party type " + e);
            a = f("ui.party.playerInvitationArena", i)
        }
        var s = window.gui.notificationBar,
            c = {
                type: s.notificationType.INVITATION,
                title: f("ui.common.invitation"),
                text: a,
                buttons: [{
                    label: f("ui.common.details"),
                    action: n
                }, {
                    label: f("ui.common.accept"),
                    action: o
                }],
                onClose: o
            };
        s.newNotification(r, c)
    }, n.prototype.showPartyFightQuestion = function(e, t, i, n, o) {
        function a() {
            return window.gui.playerData.isSpectator ? window.gui.fightManager.contextQuit() : void window.gui.fightManager.joinSpectator(e, t)
        }
        var r = window.gui.notificationBar,
            s = {
                type: r.notificationType.PRIORITY_INVITATION,
                title: f("ui.party.teamFightTitle"),
                wuidom: c.process(f("ui.party.joinTeamFightQuestion", n, i)),
                timer: o,
                buttons: [{
                    label: f("ui.common.join"),
                    action: a
                }]
            };
        r.newNotification("partyFight" + e, s)
    }, n.prototype.removePartyFightQuestion = function(e) {
        window.gui.notificationBar.removeNotification("partyFight" + e)
    }, n.prototype._updateCogTooltip = function(e) {
        var t = this;
        r(e, function() {
            var i = e.getChild("tooltip");
            i || (i = new d("div", {
                className: "partyTooltip",
                name: "tooltip"
            }), i.createChild("div", {
                className: "stat",
                name: "infosParty"
            }));
            for (var n = 0, o = 0, a = 0, r = 0, s = t.partyBoxes.getChild(t.currentPartyType), c = 0; c < s.getChildCount(); c++) {
                var l = s.getChildren()[c].memberData;
                "?" !== l.level && (n += l.level, o += l.prospecting, a += l.initiative, r++)
            }
            return a /= r, i.getChild("infosParty")
                .setText(f("ui.party.partyInformation", n, o, ~~a)), i
        })
    }, n.prototype._updateMemberTooltip = function(e, t, i) {
        r(e, function() {
            var n, o, a = e.memberData,
                r = e.getChild("tooltip");
            r || (r = new d("div", {
                    className: "memberTooltip",
                    name: "tooltip"
                }), r.createChild("div", {
                    className: "stat",
                    name: "leaderTitle",
                    text: f("ui.party.leader")
                }), r.createChild("div", {
                    className: "stat",
                    name: "memberName"
                }), n = r.createChild("div", {
                    className: "memberTips",
                    name: "memberTips"
                }), o = r.createChild("div", {
                    className: "guestTips",
                    name: "guestTips"
                }), n.createChild("div", {
                    className: "stat",
                    name: "level"
                }), n.createChild("div", {
                    className: "stat",
                    name: "hp"
                }), n.createChild("div", {
                    className: "stat",
                    name: "prospecting"
                }), n.createChild("div", {
                    className: "stat",
                    name: "rank"
                }), n.createChild("div", {
                    className: "stat",
                    name: "initiative"
                }), o.createChild("div", {
                    className: "stat",
                    name: "invitedBy"
                })), r.getChild("memberName")
                .setText(a.name);
            var s = Boolean(a.guestId);
            n = r.getChild("memberTips"), o = r.getChild("guestTips"), n.toggleDisplay(!s), o.toggleDisplay(s);
            var c = f("ui.common.colon");
            if (s) r.getChild("leaderTitle")
                .hide(), o.getChild("invitedBy")
                .setText(f("ui.party.invitedBy") + c + "\n" + a.hostName);
            else {
                var l = a.lifePoints + " / " + a.maxLifePoints;
                r.getChild("leaderTitle")
                    .toggleDisplay(t), n.getChild("level")
                    .setText(f("ui.common.level") + c + a.level), n.getChild("hp")
                    .setText(f("ui.short.lifePoints") + c + l);
                var u = n.getChild("prospecting");
                u.setText(f("ui.stats.prospecting") + c + a.prospecting), u.toggleDisplay(i !== m.PARTY_TYPE_ARENA);
                var p = n.getChild("rank"),
                    h = a.characterArenaInformations || {};
                p.setText(f("ui.koliseum.rankingLabel") + c + h.rank || 0), p.toggleDisplay(i === m.PARTY_TYPE_ARENA), n.getChild("initiative")
                    .setText(f("ui.stats.initiative") + c + a.initiative)
            }
            return r
        })
    }
}
