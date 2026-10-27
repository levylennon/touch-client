function(e, t, i) {
    var n = i(105);
    n.on("GuildCreationStartedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildModificationStartedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildCreationResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildInvitedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildInvitationStateRecruterMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildInvitationStateRecrutedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildJoinedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildMemberOnlineStatusMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildInformationsMembersMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildMemberWarnOnConnectionStateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildInformationsPaddocksMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildMemberLeavingMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildLeftMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildMembershipMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildInfosUpgradeMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildHousesInformationMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildHouseUpdateInformationMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildHouseRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildPaddockBoughtMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildPaddockRemovedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildFactsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildInAllianceFactsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ChallengeFightJoinRefusedMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
