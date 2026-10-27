function(e, t, i) {
    function n(e) {
        this.enabled = !1, this.allianceId = 0, this.allianceTag = "", this.allianceName = "", this.creationDate = 0, this.allianceEmblem = new c, this.nbMembers = 0, this.prisms = [], this.guilds = [], this.guildCount = 0, this.setInfo(e)
    }

    function o(e, t) {
        t.hasOwnProperty(e) && void 0 !== t[e] && this.hasOwnProperty(e) && (this[e] = t[e])
    }

    function a(e) {
        var t = 0,
            i = e.guilds.map(function(i) {
                var n = r.createGuild(i);
                return n.allianceId = e.allianceId, n.allianceName = e.allianceName, t += n.nbMembers, n
            });
        return i[0].allianceLeader = !0, {
            memberCount: t,
            guilds: i
        }
    }
    var r = i(527),
        s = i(17)
        .getText,
        c = r.Emblem;
    n.prototype.setInfo = function(e) {
        for (var t in e) o.call(this, t, e);
        if (e.guilds) {
            var i = a(e);
            this.nbMembers = i.memberCount, this.guilds = i.guilds, this.guildCount = this.guilds.length
        }
        var n = e.prisms;
        if (n) {
            this.prisms = {};
            for (var r = 0, c = n.length; r < c; r += 1) {
                var l = n[r];
                this.prisms[l.subAreaId] = l
            }
        }
        "#NONAME#" === this.allianceName && (this.allianceName = s("ui.guild.noName")), "#TAG#" === this.allianceTag && (this.allianceTag = s("ui.alliance.noTag")), this.allianceEmblem.isAlliance = !0
    }, e.exports = n
}
