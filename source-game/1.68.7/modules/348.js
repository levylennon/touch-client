function(e, t, i) {
    var n = i(105);
    n.on("AccountLoggingKickedMessage", function() {
        window.gui.disconnect("AccountLoggingKickedMessage"), window.isoEngine.disconnect()
    }), n.on("ServerSettingsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ServerSessionConstantsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ServerOptionalFeaturesMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AccountCapabilitiesMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
