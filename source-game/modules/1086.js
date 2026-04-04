function(e, t, i) {
    function n() {
        u.call(this, {
            className: "AllianceCardWindow",
            positionInfo: {
                top: "c",
                left: "c",
                width: 400,
                height: 380
            }
        }), this.once("open", function() {
            this._createDom()
        }), this.on("open", function(e) {
            this._setAlliance(e)
        })
    }

    function o(e) {
        var t = new r({
            width: 25,
            height: 25
        });
        t.setValue(e.guildEmblem, !0);
        var i = new p("div", {
            text: e.guildName
        });
        return f(i), i.on("tap", function() {
            s.openGuildCard(e.guildId)
        }), {
            logo: t,
            name: i,
            level: e.guildLevel
        }
    }
    i(1087);
    var a = i(21)
        .DofusDate,
        r = i(437),
        s = i(527),
        c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(765),
        u = i(70),
        p = i(72),
        h = i(52),
        f = i(63);
    l(n, u), n.prototype._createDom = function() {
        var e = this.windowBody.createChild("div", {
            className: "description"
        });
        this.emblem = e.appendChild(new r({
            width: 70,
            height: 70
        }));
        var t = e.createChild("div", {
            className: "labelBox"
        });
        t.createChild("div", {
            className: "label",
            text: c("ui.alliance.tag") + c("ui.common.colon")
        }), t.createChild("div", {
            className: "label",
            text: c("ui.social.guilds") + c("ui.common.colon")
        }), t.createChild("div", {
            className: "label",
            text: c("ui.common.members") + c("ui.common.colon")
        }), t.createChild("div", {
            className: "label",
            text: c("ui.common.creationDate") + c("ui.common.colon")
        });
        var i = e.createChild("div", {
            className: "valueBox"
        });
        this.tag = i.createChild("div", {
            className: "value"
        }), this.guilds = i.createChild("div", {
            className: "value"
        }), this.members = i.createChild("div", {
            className: "value"
        }), this.creationDate = i.createChild("div", {
            className: "value"
        }), this.prisms = this.windowBody.createChild("div", {
            className: "prisms"
        });
        var n = [{
            id: "logo"
        }, {
            id: "name",
            header: c("ui.common.name")
        }, {
            id: "level",
            header: c("ui.common.level")
        }];
        this.guildList = this.windowBody.appendChild(new d(n, null, {
            clickable: !1
        }))
    }, n.prototype.display = function(e) {
        this.openState ? (this._setAlliance(e), h.focusWindow("allianceCard")) : h.open("allianceCard", e)
    }, n.prototype._setAlliance = function(e) {
        var t = e.infos,
            i = e.guilds;
        this.setTitle(c("ui.common.alliance") + " - " + t.allianceName), this.emblem.setValue(t.allianceEmblem, !0), this.tag.setText("[" + t.allianceTag + "]"), this.guilds.setText(i.length);
        var n = new a(1e3 * t.creationDate)
            .getServerDate()
            .toString(!1);
        this.creationDate.setText(n.date), this.prisms.setText(c("ui.prism.nbPrisms", e.controlledSubareaIds.length)), this.guildList.clearContent();
        for (var r = 0, s = 0, l = i.length; s < l; s += 1) {
            var d = i[s];
            r += d.nbMembers, this.guildList.addRow(o(d))
        }
        this.members.setText(r)
    }, e.exports = n
}
