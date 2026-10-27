function(e, t, i) {
    function n(e) {
        this.guildId = 0, this.guildName = "", this.guildEmblem = new a, this.guildLevel = 0, this.creationDate = 0, this.leaderId = 0, this.leaderName = "", this.nbMembers = 0, this.nbConnectedMembers = 0, this.nbTaxCollectors = 0, this.averageMemberLevel = 0, this.lastActivity = 0, this.enabled = !1, this.allianceId = 0, this.allianceName = "", this.allianceLeader = !1, this.experiencePercentage = 0, this.members = [], this.update(e)
    }

    function o(e, t, i) {
        i.hasOwnProperty(t) && void 0 !== i[t] && e.hasOwnProperty(t) && (e[t] = i[t])
    }
    var a = i(529),
        r = i(17)
        .getText,
        s = i(16);
    n.prototype.update = function(e) {
        for (var t in e) o(this, t, e);
        "#NONAME#" === this.guildName && (this.guildName = r("ui.guild.noName")), "#NONAME#" === this.allianceName && (this.allianceName = r("ui.guild.noName"))
    }, n.prototype.getHoursSinceLastConnection = function() {
        if (!this.lastActivity) return 0;
        var e = new Date;
        return Math.floor((e.time - 1e3 * this.lastActivity) / 36e5)
    }, n.prototype.getMembersByRank = function() {
        var e = window.gui.databases.RankNames,
            t = this.members,
            i = [];
        for (var n in t) {
            var o = t[n];
            o.rankOrder = e[o.rank].order, i.push(o)
        }
        return s.sortObjectInArray(i, "rankOrder"), i
    }, e.exports = n
}
