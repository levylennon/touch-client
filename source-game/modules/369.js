function(e, t, i) {
    var n = i(105);
    n.on("EmoteListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("EmoteAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("EmoteRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("EmotePlayMessage", function(e) {
        window.isoEngine.playEmote(e)
    }), n.on("EmotePlayRelookedMessage", function(e) {
        window.isoEngine.playRelookedEmote(e)
    })
}
