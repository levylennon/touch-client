function(e, t, i) {
    var n = i(105);
    n.on("GameRolePlayPlayerLifeStatusMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GameRolePlayGameOverMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
