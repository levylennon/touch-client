function(e, t, i) {
    function n(e) {
        window.gui.transmitMessage(e), window.isoEngine.transmitMessage(e)
    }
    var o = i(105);
    o.on("GameFightStartingMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightJoinMessage", function(e) {
        window.isoEngine.transmitMessage(e), window.gui.transmitMessage(e)
    }), o.on("GameFightPlacementPossiblePositionsMessage", function(e) {
        window.isoEngine.displayFightPositions(e), window.gui.transmitMessage(e)
    }), o.on("GameFightOptionStateUpdateMessage", function(e) {
        window.isoEngine.challengeOptionChange(e.fightId, e.teamId, e.option, e.state), window.gui.transmitMessage(e)
    }), o.on("GameFightUpdateTeamMessage", function(e) {
        window.isoEngine.updateFightTeam(e), window.gui.transmitMessage(e)
    }), o.on("GameFightRemoveTeamMemberMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightHumanReadyStateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightStartMessage", function(e) {
        window.gui.transmitMessage(e), window.isoEngine.transmitMessage(e)
    }), o.on("GameFightSpectateMessage", n), o.on("GameFightResumeMessage", n), o.on("GameFightResumeWithSlavesMessage", n), o.on("GameFightNewRoundMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightTurnListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightTurnStartMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightTurnStartPlayingMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightTurnResumeMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightTurnStartSlaveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("GameFightTurnReadyRequestMessage", function(e) {
        window.isoEngine.transmitMessage(e)
    }), o.on("GameFightSynchronizeMessage", function(e) {
        window.isoEngine.transmitMessage(e)
    }), o.on("GameFightTurnEndMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
