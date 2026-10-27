function(e, t, i) {
    function n() {
        o.call(this, "div", {
            className: "EntityBanner"
        }), this._guildEmblem = this.appendChild(new a({
            width: 40,
            height: 40
        }));
        var e = this.createChild("div", {
            className: "nameBox"
        });
        this._allianceEmblem = this.appendChild(new a({
            width: 40,
            height: 40
        })), this._guildName = e.createChild("div", {
            className: "guildName"
        }), this._nameWrapper = e.createChild("div", {
            className: "nameWrapper"
        }), this._houseName = e.createChild("div", {
            className: "houseName"
        }), this._houseOwner = e.createChild("div", {
            className: "houseOwner"
        }), this._forSale = e.createChild("div", {
            className: "forSale",
            text: r("ui.common.forSale")
        })
    }
    i(465);
    var o = i(72),
        a = i(437),
        r = i(17)
        .getText,
        s = i(56)
        .inherits;
    s(n, o), n.prototype.setContent = function(e) {
        e = e || {}, this._nameWrapper.clearContent();
        var t = this._nameWrapper.createChild("div", {
            className: "icon"
        });
        Boolean(e.playerId) && window.gui.playerData.socialData.isSpouse(e.playerId) ? t.addClassNames("spouse") : Boolean(e.playerId) && window.gui.playerData.socialData.isFriend(e.playerId) ? t.addClassNames("friend") : Boolean(e.guildId) && window.gui.playerData.guildData.isOnSameGuild(e.guildId) ? t.addClassNames("guildMember") : Boolean(e.guildId) && window.gui.playerData.alliance.isGuildOnSameAlliance(e.guildId) && t.addClassNames("allianceMember"), this._nameWrapper.createChild("div", {
            className: "name",
            text: e.name || ""
        }), this._nameWrapper.toggleDisplay(Boolean(e.name));
        var i, n = e.guild;
        n && "?" !== n.guildName ? (this._guildName.setText(n.guildName), this._guildName.show(), i = n.guildEmblem, i && this._guildEmblem.setValue(i, !0), this._guildEmblem.show()) : (this._guildName.hide(), this._guildEmblem.hide());
        var o = e.alliance;
        o ? (this.addClassNames("alliance"), n ? this._guildName.setText(n.guildName + " - [" + o.allianceTag + "]") : (this._guildName.setText(o.allianceName), this._guildName.show()), i = o.allianceEmblem, i && (i.isAlliance = !0, this._allianceEmblem.setValue(i, !0), this._allianceEmblem.show())) : (this.delClassNames("alliance"), this._allianceEmblem.hide());
        var a = e.house || {},
            s = a.houseOwner || "";
        window.gui.playerData.isModeratorOrMore() && a.isClosed && (s += " " + r("ui.house.closed")), this._houseOwner.setText(s), this._houseOwner.toggleDisplay("" !== s), a.houseName && (a.houseName += window.gui.playerData.isAbleToSeeId() ? " (" + a.houseId + ")" : "", this._houseName.setText(a.houseName)), this._houseName.toggleDisplay(Boolean(a.houseName)), this._forSale.toggleDisplay(Boolean(a.forSale))
    }, e.exports = n
}
