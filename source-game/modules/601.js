function(e, t, i) {
    var n = i(17)
        .getText,
        o = i(602),
        a = i(600);
    e.exports = function(e) {
        var t = e._areaName;
        e.areaId === -1 && (t = n("ui.common.unknowArea"));
        var i = "{player," + e.playerName + "," + e.playerId + "}";
        e.position === o.MODERATOR ? i += '(<span class="position mod">' + n("ui.common.moderator") + "</span>)" : e.position === o.GAMEMASTER_PADAWAN ? i += '(<span class="position gma">' + n("ui.common.gameMasterAssistant") + "</span>)" : e.position === o.GAMEMASTER ? i += '(<span class="position gm">' + n("ui.common.gameMaster") + "</span>)" : e.position === o.ADMIN && (i += '(<span class="position admin">' + n("ui.common.administrator") + "</span>)");
        var r = e.uniqueNickname.getForDisplay(),
            s = n("ui.common.whois", r, i, t);
        if (e.socialGroups && e.socialGroups.length > 0)
            for (var c = 0, l = e.socialGroups.length; c < l; c += 1) {
                var d = e.socialGroups[c];
                "GuildInformations" === d._type && (s += " " + n("ui.common.guild"), s += " {guild," + d.guildId + "::" + d.guildName + "}"), "AllianceInformations" === d._type && (s += " " + n("ui.common.alliance"), s += " {alliance," + d.allianceId + "::[" + d.allianceTag + "]}")
            }
        return e.playerState === a.NOT_CONNECTED && (s += " (" + n("tablet.common.disconnected") + ")"), s
    }
}
