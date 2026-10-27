function(e, t, i) {
    var n = i(538),
        o = i(17)
        .getText,
        a = i(530),
        r = i(52);
    t.alliances = {}, t.createAlliance = function(e) {
        var i = new n(e);
        return t.alliances[i.allianceId] = i, i
    }, t.initialize = function(e) {
        e.on("disconnect", function() {
            t.alliances = {}
        }), e.on("PrismSettingsErrorMessage", function() {
            e.chat.logMsg(o("ui.error.cantModifiedPrismVulnerabiltyHour"))
        }), e.on("AllianceCreationResultMessage", function(e) {
            switch (e.result) {
                case a.SOCIAL_GROUP_CREATE_ERROR_ALREADY_IN_GROUP:
                    return window.gui.openSimplePopup(o("ui.alliance.alreadyInAlliance"));
                case a.SOCIAL_GROUP_CREATE_OK:
                    return r.close("socialGroupCreation");
                case a.SOCIAL_GROUP_CREATE_ERROR_NAME_ALREADY_EXISTS:
                    return window.gui.openSimplePopup(o("ui.alliance.alreadyUseName"));
                case a.SOCIAL_GROUP_CREATE_ERROR_NAME_INVALID:
                    return window.gui.openSimplePopup(o("ui.alliance.invalidName"));
                case a.SOCIAL_GROUP_CREATE_ERROR_TAG_ALREADY_EXISTS:
                    return window.gui.openSimplePopup(o("ui.alliance.alreadyUseTag"));
                case a.SOCIAL_GROUP_CREATE_ERROR_TAG_INVALID:
                    return window.gui.openSimplePopup(o("ui.alliance.invalidTag"));
                case a.SOCIAL_GROUP_CREATE_ERROR_EMBLEM_ALREADY_EXISTS:
                    return window.gui.openSimplePopup(o("ui.guild.AlreadyUseEmblem"));
                case a.SOCIAL_GROUP_CREATE_ERROR_REQUIREMENT_UNMET:
                    return window.gui.openSimplePopup(o("ui.guild.requirementUnmet"));
                case a.SOCIAL_GROUP_CREATE_ERROR_EMBLEM_INVALID:
                case a.SOCIAL_GROUP_CREATE_ERROR_UNKNOWN:
                    return window.gui.openSimplePopup(o("ui.common.unknownFail"))
            }
        }), e.on("AllianceFactsMessage", function(e) {
            r.getWindow("allianceCard")
                .display(e)
        }), e.on("AllianceFactsErrorMessage", function() {
            e.chat.logMsg(o("ui.alliance.doesntExistAnymore"))
        }), t.prismState = {
            0: o("ui.prism.state0"),
            1: o("ui.prism.state1"),
            2: o("ui.prism.state2"),
            3: o("ui.prism.state3"),
            4: o("ui.prism.state4"),
            5: o("ui.prism.state5"),
            6: o("ui.prism.state6")
        }, t.getPrismStateInfo = function(e, t) {
            switch (e) {
                case 0:
                    return o("ui.prism.stateInfos0");
                case 1:
                    return o("ui.prism.stateInfos1");
                case 2:
                    return o("ui.prism.stateInfos2");
                case 3:
                    return o("ui.prism.stateInfos3");
                case 4:
                    return o("ui.prism.stateInfos4", t);
                case 5:
                    return o("ui.prism.stateInfos5");
                case 6:
                    return o("ui.prism.stateInfos6")
            }
        }
    }, t.openAllianceCard = function(e) {
        window.dofus.sendMessage("AllianceFactsRequestMessage", {
            allianceId: e
        })
    }
}
