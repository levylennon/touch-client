function(e, t, i) {
    var n = i(105);
    n.on("ContactLookMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
