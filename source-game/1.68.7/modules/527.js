function(e, t, i) {
    var n = i(17)
        .getText,
        o = i(528),
        a = i(530),
        r = i(52);
    t.Emblem = i(529);
    var s = t.guilds = {};
    t.createGuild = function(e) {
        var t = new o(e);
        return s[t.guildId] = t, t
    }, t.initialize = function(e) {
        function t(e) {
            r.getWindow("guildCard")
                .display(e)
        }
        e.on("GuildCreationResultMessage", function(e) {
            switch (e.result) {
                case a.SOCIAL_GROUP_CREATE_ERROR_ALREADY_IN_GROUP:
                    return window.gui.openSimplePopup(n("ui.guild.alreadyInGuild"));
                case a.SOCIAL_GROUP_CREATE_ERROR_EMBLEM_ALREADY_EXISTS:
                    return window.gui.openSimplePopup(n("ui.guild.AlreadyUseEmblem"));
                case a.SOCIAL_GROUP_CREATE_ERROR_NAME_ALREADY_EXISTS:
                    return window.gui.openSimplePopup(n("ui.guild.AlreadyUseName"));
                case a.SOCIAL_GROUP_CREATE_ERROR_NAME_INVALID:
                    return window.gui.openSimplePopup(n("ui.guild.invalidName"));
                case a.SOCIAL_GROUP_CREATE_ERROR_REQUIREMENT_UNMET:
                    return window.gui.openSimplePopup(n("ui.guild.requirementUnmet"));
                case a.SOCIAL_GROUP_CREATE_OK:
                    return r.close("socialGroupCreation");
                case a.SOCIAL_GROUP_CREATE_ERROR_EMBLEM_INVALID:
                case a.SOCIAL_GROUP_CREATE_ERROR_UNKNOWN:
                    return window.gui.openSimplePopup(n("ui.common.unknownFail"))
            }
        }), e.on("GuildInAllianceFactsMessage", t), e.on("GuildFactsMessage", t), window.dofus.connectionManager.on("GuildFactsErrorMessage", function() {
            e.chat.logMsg(n("ui.guild.doesntExistAnymore"))
        })
    }, t.openGuildCard = function(e) {
        window.dofus.sendMessage("GuildFactsRequestMessage", {
            guildId: e
        })
    }
}
