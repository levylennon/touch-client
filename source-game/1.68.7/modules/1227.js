function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: "SpouseWindow",
            name: "spouse"
        });
        var e = this;
        window.gui.playerData.socialData.once("spouseUpdate", function(t) {
            e._updateSocialWindowTitle(t)
        }), this.once("open", function() {
            e._setupDom(), e._setupEvents()
        }), this.on("open", function() {
            window.dofus.sendMessage("SpouseGetInformationsMessage")
        })
    }
    i(1228);
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(72),
        s = i(86),
        c = i(130),
        l = i(689),
        d = i(730),
        u = i(52),
        p = i(12);
    o(n, r), e.exports = n, n.prototype._setupDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "col1"
            }),
            i = this.createChild("div", {
                className: "col2"
            });
        this.name = t.createChild("div", {
            className: "name"
        });
        var n = this.info = t.createChild("div", {
                className: "info"
            }),
            o = n.createChild("div", {
                className: "line"
            });
        o.createChild("div", {
            className: "title",
            text: a("ui.charcrea.breed") + ":"
        }), this["class"] = o.createChild("div", {
            className: "value"
        }), o = n.createChild("div", {
            className: "line"
        }), o.createChild("div", {
            className: "title",
            text: a("ui.common.averageLevel") + ":"
        }), this.level = o.createChild("div", {
            className: "value"
        }), o = n.createChild("div", {
            className: "line"
        }), o.createChild("div", {
            className: "title",
            text: a("ui.common.alignment") + ":"
        }), this.alignment = o.createChild("div", {
            className: "value"
        }), o = n.createChild("div", {
            className: ["line", "guild"]
        }), o.createChild("div", {
            className: "title",
            text: a("ui.common.guild") + ":"
        }), this.guild = o.createChild("div", {
            className: "value"
        }), o = n.createChild("div", {
            className: "line"
        }), o.createChild("div", {
            className: "title",
            text: a("ui.common.state") + ":"
        }), this.status = o.createChild("div", {
            className: "value"
        }), o = n.createChild("div", {
            className: "line"
        }), o.createChild("div", {
            className: "title",
            text: a("ui.common.localisation") + ":"
        }), this.location = o.createChild("div", {
            className: "value"
        }), o = n.createChild("div", {
            className: "line"
        }), this.fightingIcon = o.createChild("div", {
            className: "fightingIcon",
            hidden: !0
        });
        var r = n.createChild("div", {
            className: "buttons"
        });
        this.inviteButton = r.appendChild(new s({
            text: a("ui.party.addToParty"),
            className: "button"
        }, function() {
            window.dofus.sendMessage("PartyInvitationRequestMessage", {
                name: e.name.getText()
            })
        })), this.followButton = r.appendChild(new s({
            text: a("ui.common.follow"),
            className: "button"
        }, function() {
            window.dofus.sendMessage("FriendSpouseFollowWithCompassRequestMessage", {
                enable: !0
            })
        })), this.stopFollowingButton = r.appendChild(new s({
            text: a("ui.common.stopFollow"),
            className: "button",
            hidden: !0
        }, function() {
            window.dofus.sendMessage("FriendSpouseFollowWithCompassRequestMessage", {
                enable: !1
            })
        })), this.joinButton = r.appendChild(new s({
            text: a("ui.common.join"),
            className: "button"
        }, function() {
            window.dofus.sendMessage("FriendSpouseJoinRequestMessage")
        }));
        var c = i.createChild("div", {
            className: ["image", "bird"]
        });
        this.character = i.appendChild(new l({
            scale: 3.5,
            verticalAlign: "center"
        })), p.preloadImage("gfx/illusUi/tofus_bague.png", function(e) {
            c.setStyle("backgroundImage", e)
        })
    }, n.prototype._setupEvents = function() {
        var e = this;
        window.gui.playerData.socialData.on("spouseUpdate", function(t) {
            e._updateSocialWindowTitle(t), e.updateDomData(t)
        }), window.gui.on("CompassUpdateMessage", function() {
            e.stopFollowingButton.show(), e.followButton.hide()
        }), window.gui.on("CompassResetMessage", function() {
            e.stopFollowingButton.hide(), e.followButton.show()
        })
    }, n.prototype.updateDomData = function(e) {
        var t = this,
            i = window.gui.databases;
        this.name.setText(e.spouseName), this["class"].setText(i.Breeds[e.breed].shortNameId), this.level.setText(e.spouseLevel), this.alignment.setText(i.AlignmentSides[e.alignmentSide].nameId);
        var n = e.guildInfo ? e.guildInfo.guildName : "";
        return this.guild.setText("#NONAME#" === n ? a("ui.guild.noName") : n), this.stopFollowingButton.toggleDisplay(Boolean(e.followSpouse)), this.followButton.toggleDisplay(!e.followSpouse), this.fightingIcon.toggleDisplay(Boolean(e.inFight)), t.character.setLook(e.spouseEntityLook, {
            direction: d.DIRECTION_SOUTH_WEST,
            boneType: "characters/",
            skinType: "characters/",
            riderOnly: !0
        }), e.subAreaId ? (this.status.setText(a("ui.server.state.online")), this.inviteButton.enable(), this.followButton.enable(), this.stopFollowingButton.enable(), this.joinButton.enable(), void c.getDataMap("SubAreas", [e.subAreaId], null, function(i, n) {
            i && console.warn("Failed to retrieve subArea data", i);
            var o = n[e.subAreaId];
            t.location.setText(o.nameId)
        })) : (this.status.setText(a("ui.server.state.offline")), this.location.setText("-"), this.inviteButton.disable(), this.followButton.disable(), this.stopFollowingButton.disable(), void this.joinButton.disable())
    }, n.prototype._updateSocialWindowTitle = function(e) {
        var t = u.getWindow("social");
        t.setTitle(a("ui.common.spouse", e.sex))
    }
}
