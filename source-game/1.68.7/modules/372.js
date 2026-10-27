function(e, t, i) {
    var n = i(105);
    n.on("HouseGuildNoneMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("HouseGuildRightsMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
