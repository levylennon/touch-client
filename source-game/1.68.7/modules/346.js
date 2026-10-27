function(e, t, i) {
    var n = i(105);
    n.on("messageSequence", function(e) {
        window.isoEngine.transmitMessage(e), window.gui.emit("checkServerLag", "fightAction", "stop")
    })
}
