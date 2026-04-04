function(e, t, i) {
    var n = i(105);
    n.on("PrismFightDefenderAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismFightDefenderLeaveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismFightAttackerAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismFightAttackerRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismsListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismsListUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismsInfoValidMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismFightAddedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismFightRemovedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismFightStateUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("PrismSettingsErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
