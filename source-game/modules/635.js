function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(520),
        s = i(56)
        .inherits,
        c = i(611);
    s(n, o), n.prototype._getText = function() {
        var e;
        switch (this.value) {
            case r.GUILD_RIGHT_BOSS:
                e = a("ui.guild.right.leader");
                break;
            case r.GUILD_RIGHT_BAN_MEMBERS:
                e = a("ui.social.guildRightsBann");
                break;
            case r.GUILD_RIGHT_COLLECT:
                e = a("ui.social.guildRightsCollect");
                break;
            case r.GUILD_RIGHT_COLLECT_MY_TAX_COLLECTOR:
                e = a("ui.social.guildRightsCollectMy");
                break;
            case r.GUILD_RIGHT_DEFENSE_PRIORITY:
                e = a("ui.social.guildRightsPrioritizeMe");
                break;
            case r.GUILD_RIGHT_HIRE_TAX_COLLECTOR:
                e = a("ui.social.guildRightsHiretax");
                break;
            case r.GUILD_RIGHT_INVITE_NEW_MEMBERS:
                e = a("ui.social.guildRightsInvit");
                break;
            case r.GUILD_RIGHT_MANAGE_GUILD_BOOSTS:
                e = a("ui.social.guildRightsBoost");
                break;
            case r.GUILD_RIGHT_MANAGE_MY_XP_CONTRIBUTION:
                e = a("ui.social.guildRightManageOwnXP");
                break;
            case r.GUILD_RIGHT_MANAGE_RANKS:
                e = a("ui.social.guildRightsRank");
                break;
            case r.GUILD_RIGHT_ALMOST_BOSS:
                e = a("ui.social.guildManageRights");
                break;
            case r.GUILD_RIGHT_MANAGE_XP_CONTRIBUTION:
                e = a("ui.social.guildRightsPercentXP");
                break;
            case r.GUILD_RIGHT_ORGANIZE_FARMS:
                e = a("ui.social.guildRightsMountParkArrange");
                break;
            case r.GUILD_RIGHT_MANAGE_ALLIANCE_PRISM:
                e = a("ui.social.guildRightsSetAlliancePrism");
                break;
            case r.GUILD_RIGHT_TALK_IN_ALLIANCE_CHAN:
                e = a("ui.social.guildRightsTalkInAllianceChannel");
                break;
            case r.GUILD_RIGHT_TAKE_OTHERS_MOUNTS_IN_PADDOCKS:
                e = a("ui.social.guildRightsManageOtherMount");
                break;
            case r.GUILD_RIGHT_USE_FARMS:
                e = a("ui.social.guildRightsMountParkUse");
                break;
            default:
                e = ""
        }
        return this.operatorToken === c.equal ? a("ui.criterion.guildRights", [e]) : a("ui.criterion.notGuildRights", [e])
    }, n.prototype._isRespected = function(e, t) {
        var i = window.gui.playerData.guild;
        if (!i.hasGuild()) return t(this.operatorToken === c.different);
        var n = i.hasRight(this.value);
        return t(this.operatorToken === c.equal ? n : !n)
    }, e.exports = n
}
