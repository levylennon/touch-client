function(e, t, i) {
    var n = i(105);
    n.on("CompassResetMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("CompassUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("CompassUpdatePartyMemberMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
