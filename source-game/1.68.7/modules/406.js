function(e, t, i) {
    var n = i(105);
    n.on("TrustStatusMessage", function(e) {
        n.sendMessage("CharactersListRequestMessage"), window.gui.transmitMessage(e)
    })
}
