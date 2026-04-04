function(e, t, i) {
    var n = i(105);
    n.on("IdentificationSuccessMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("IdentificationSuccessWithLoginTokenMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ServersListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ServerStatusUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("SelectedServerRefusedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AuthenticationTicketAcceptedMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
