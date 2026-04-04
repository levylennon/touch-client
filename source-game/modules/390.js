function(e, t, i) {
    var n = i(105);
    n.on("TeleportDestinationsListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ZaapListMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
