function(e, t, i) {
    var n = i(105);
    n.on("GameRolePlayAggressionMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GameRolePlayPlayerFightFriendlyRequestedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GameRolePlayPlayerFightFriendlyAnsweredMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GameRolePlayShowChallengeMessage", function(e) {
        window.isoEngine.showChallenge(e.commonsInfos)
    }), n.on("GameRolePlayRemoveChallengeMessage", function(e) {
        window.gui.transmitMessage(e), window.isoEngine.removeChallenge(e.fightId)
    })
}
