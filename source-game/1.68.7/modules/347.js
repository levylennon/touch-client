function(e, t, i) {
    var n = i(105);
    n.on("AllianceCreationStartedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceModificationStartedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceCreationResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceInvitedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceInvitationStateRecruterMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceInvitationStateRecrutedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceJoinedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceGuildLeavingMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceLeftMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceMembershipMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("KohUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceFactsErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceFactsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceInsiderInfoMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
