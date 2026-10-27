function(e, t, i) {
    var n = i(105);
    n.on("PartyInvitationDetailsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyCannotJoinErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyJoinMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyNewGuestMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyNewMemberMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyUpdateLightMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyFollowStatusUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PartyMemberInFightMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
