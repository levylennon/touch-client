function(e, t, i) {
    function n() {
        h.call(this, {
            className: "GuildCardWindow",
            positionInfo: {
                top: "c",
                left: "c",
                width: 400,
                height: 420
            }
        }), this.once("open", function() {
            this._createDom()
        }), this.on("open", function(e) {
            this._setGuild(e)
        })
    }

    function o(e, t) {
        var i = new f("div", {
            text: e.name
        });
        return m(i), i.on("tap", function() {
            window.gui.openContextualMenu("player", {
                playerName: e.name,
                playerId: e.id,
                hasGuild: !0,
                guildId: t
            })
        }), {
            name: i,
            level: e.level
        }
    }
    i(1089);
    var a = i(537),
        r = i(88)
        .addTooltip,
        s = i(21)
        .DofusDate,
        c = i(437),
        l = i(17)
        .getText,
        d = i(56)
        .inherits,
        u = i(1090),
        p = i(765),
        h = i(70),
        f = i(72),
        b = i(52),
        m = i(63);
    d(n, h), n.prototype._createDom = function() {
        var e = this.windowBody.createChild("div", {
            className: "description"
        });
        this.emblem = e.appendChild(new c({
            width: 70,
            height: 70
        }));
        var t = e.createChild("div", {
            className: "labelBox"
        });
        t.createChild("div", {
            className: "label",
            text: l("ui.common.level") + l("ui.common.colon")
        }), t.createChild("div", {
            className: "label",
            text: l("ui.guild.right.leader") + l("ui.common.colon")
        }), t.createChild("div", {
            className: "label",
            text: l("ui.common.members") + l("ui.common.colon")
        }), t.createChild("div", {
            className: "label",
            text: l("ui.common.creationDate") + l("ui.common.colon")
        });
        var i = this,
            n = e.createChild("div", {
                className: "valueBox"
            });
        this.level = n.createChild("div", {
            className: "value"
        }), this.leader = n.createChild("div", {
            className: ["value", "link"]
        }), m(this.leader), this.leader.on("tap", function() {
            window.gui.openContextualMenu("player", {
                playerName: i._leaderName,
                playerId: i._leaderId,
                hasGuild: !0,
                guildId: i._guild.guildId
            })
        }), this.members = n.createChild("div", {
            className: "value"
        }), this.creationDate = n.createChild("div", {
            className: "value"
        }), this.perceptors = this.windowBody.createChild("div", {
            className: "perceptors"
        }), this._publicMsg = new u(this.windowBody, {
            className: "publicMsg"
        });
        var o = [{
            id: "name",
            header: l("ui.common.name")
        }, {
            id: "level",
            header: l("ui.common.level")
        }];
        this.memberList = this.windowBody.appendChild(new p(o, null, {
            clickable: !1
        }));
        var s = this.windowBody.createChild("div", {
                className: "alliance"
            }),
            d = s.createChild("div", {
                className: "value"
            });
        this.allianceLabel = d.createChild("span"), this.allianceName = d.createChild("span", {
            className: "link"
        }), m(d), d.on("tap", function() {
            a.openAllianceCard(i._allianceId)
        }), this.allianceInvite = s.createChild("div", {
            className: "inviteBtn"
        }), this.allianceInviteTooltip = new f("div"), r(this.allianceInvite, this.allianceInviteTooltip), this.allianceInvite.on("tap", function() {
            window.dofus.sendMessage("AllianceInvitationMessage", {
                targetId: i._leaderId
            })
        })
    }, n.prototype.display = function(e) {
        this.openState ? (this._setGuild(e), b.focusWindow("guildCard")) : b.open("guildCard", e)
    }, n.prototype._setGuild = function(e) {
        var t = this._guild = e.infos,
            i = e.members;
        this.setTitle(l("ui.common.guild") + " - " + t.guildName), this.emblem.setValue(t.guildEmblem, !0), this.level.setText(t.guildLevel), this.members.setText(t.nbMembers);
        var n = new s(1e3 * e.creationDate)
            .getServerDate()
            .toString(!1);
        this.creationDate.setText(n.date), this._leaderId = t.leaderId, this._leaderName = i[0].name, this.leader.setText(this._leaderName), this.perceptors.setText(l("ui.guild.taxcollectorsCurrentlyCollecting", e.nbTaxCollectors, e.nbTaxCollectors)), this._publicMsg.setText(e.publicMsg), this.memberList.clearContent();
        for (var a = 0, r = i.length; a < r; a += 1) this.memberList.addRow(o(i[a], t.guildId));
        var c = e.allianceInfos;
        if (c) this.allianceLabel.setText(l("ui.common.alliance") + l("ui.common.colon")), this.allianceName.setText(c.allianceName), this._allianceId = c.allianceId, this.allianceInvite.hide();
        else {
            this.allianceLabel.setText(l("ui.alliance.noAllianceForThisGuild")), this.allianceName.setText("");
            var d = window.gui.playerData.alliance;
            this.allianceInviteTooltip.setText(l("ui.alliance.inviteLeader", this._leaderName)), this.allianceInvite.toggleDisplay(d.hasAlliance() && d.isBoss())
        }
    }, e.exports = n
}
