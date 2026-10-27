function(e, t, i) {
    function n() {
        c.call(this, "div", {
            className: "AllianceTab",
            name: "alliance"
        });
        var e = this;
        this.once("open", function() {
            this._createDom(), window.gui.playerData.alliance.on("allianceUpdated", function(t) {
                e._updateAllianceInformation();
                var i = e.tabs.tabMap;
                for (var n in i) i[n].content.emit("allianceUpdated", t)
            })
        }), this.on("open", function(e) {
            e = e || {};
            var t = e.tabId || "guilds";
            this.tabs.openTab(t), this._guilds.emit("allianceUpdateRequested"), window.dofus.sendMessage("AllianceInsiderInfoRequestMessage"), window.dofus.sendMessage("PrismsListRegisterMessage", {
                listen: u.PRISM_LISTEN_MINE
            })
        }), this.on("close", function() {
            this.tabs.close()
        })
    }
    i(1197);
    var o = i(537),
        a = i(56)
        .inherits,
        r = i(17)
        .getText,
        s = i(496),
        c = i(72),
        l = i(437),
        d = i(21)
        .DofusDate,
        u = i(1198),
        p = i(63),
        h = i(52),
        f = i(1199),
        b = i(1201),
        m = i(1203);
    a(n, c), e.exports = n, n.prototype._updateAllianceInformation = function() {
        var e = window.gui.playerData.alliance.current;
        this._updateAllianceCreationData(e), this.emblem.setValue(e.allianceEmblem, !0);
        var t = h.getWindow("social");
        t.setTitle(r("ui.common.alliance") + " - " + e.allianceName), this.tag.setText("[" + e.allianceTag + "]"), this.members.setText(r("ui.alliance.membersInGuilds", e.nbMembers, e.guildCount, e.guildCount))
    }, n.prototype._updateAllianceCreationData = function(e) {
        var t = new d(1e3 * e.creationDate)
            .getServerDate()
            .toString(!1);
        this.creationDate.setText(t.date)
    }, n.prototype._createDom = function() {
        this._buildHeader(), this._buildTabs()
    }, n.prototype._buildHeader = function() {
        var e = this.createChild("div", {
                className: "description"
            }),
            t = e.createChild("div", {
                className: ["column", "title"]
            }),
            i = e.createChild("div", {
                className: ["column", "content"]
            }),
            n = e.createChild("div", {
                className: ["column", "emblem"]
            });
        this.emblem = n.appendChild(new l({
            width: 70,
            height: 70
        })), t.createChild("div", {
            text: r("ui.alliance.tag") + ":"
        }), this.tag = i.createChild("div", {
            className: "link"
        }), p(this.tag), this.tag.on("tap", function() {
            o.openAllianceCard(window.gui.playerData.alliance.current.allianceId)
        }), t.createChild("div", {
            text: r("ui.common.creationDate") + ":"
        }), this.creationDate = i.createChild("div"), t.createChild("div", {
            text: r("ui.common.members") + ":"
        }), this.members = i.createChild("div")
    }, n.prototype._buildTabs = function() {
        var e = this.tabs = this.appendChild(new s);
        this._guilds = new f, e.addTab(r("ui.social.guilds"), this._guilds, "guilds"), e.addTab(r("ui.common.conquest"), new b, "conquests"), e.addTab(r("ui.common.attacks"), new m, "attacks")
    }
}
