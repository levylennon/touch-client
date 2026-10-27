function(e, t, i) {
    var n = i(105);
    n.on("UpdateMapPlayersAgressableStatusMessage", function(e) {
        window.gui.transmitMessage(e), window.actorManager.updateActorsAggressableStatus(e.playerIds, e.enable)
    }), n.on("UpdateSelfAgressableStatusMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AlignmentRankUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
