function(e, t, i) {
    function n(e) {
        switch (e) {
            case s.ALLIANCE_RIGHT_BOSS:
                return r("ui.guild.right.leader");
            case s.ALLIANCE_RIGHT_KICK_GUILDS:
                return r("ui.social.guildRightsBann");
            case s.ALLIANCE_RIGHT_MANAGE_PRISMS:
                return r("ui.social.guildRightsSetAlliancePrism");
            case s.ALLIANCE_RIGHT_MANAGE_RIGHTS:
                return r("ui.social.guildManageRights");
            case s.ALLIANCE_RIGHT_RECRUIT_GUILDS:
                return r("ui.social.guildRightsInvit");
            case s.ALLIANCE_RIGHT_TALK_IN_CHAN:
                return r("ui.social.guildRightsTalkInAllianceChannel");
            default:
                return ""
        }
    }

    function o(e) {
        a.call(this, e)
    }
    var a = i(610),
        r = i(17)
        .getText,
        s = i(620),
        c = i(611),
        l = i(56)
        .inherits;
    s.ALLIANCE_RIGHT_MANAGE_PRISMS = 2, s.ALLIANCE_RIGHT_TALK_IN_CHAN = 4, s.ALLIANCE_RIGHT_RECRUIT_GUILDS = 8, s.ALLIANCE_RIGHT_KICK_GUILDS = 16, s.ALLIANCE_RIGHT_MANAGE_RIGHTS = 32, l(o, a), o.prototype._getText = function() {
        var e = n(this.value);
        return this.operatorToken === c.equal ? r("ui.criterion.allianceRights", [e]) : r("ui.criterion.notAllianceRights", [e])
    }, o.prototype._isRespected = function(e, t) {
        var i = window.gui.playerData.alliance;
        if (!i.hasAlliance()) return t(this.operatorToken === c.equal);
        var n = this.value !== s.ALLIANCE_RIGHT_BOSS || i.isBoss();
        return t(this.operatorToken === c.equal ? n : this.operatorToken === c.equal ? !n : !1)
    }, e.exports = o
}
