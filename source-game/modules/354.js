function(e, t, i) {
    var n = i(105);
    n.on("CharacterLevelUpMessage", function(e) {
        window.gui.transmitMessage(e), window.isoEngine.playLevelUpAnimation(window.gui.playerData.id)
    }), n.on("CharacterLevelUpInformationMessage", function(e) {
        var t = e.id;
        t !== window.gui.playerData.id && window.isoEngine.playLevelUpAnimation(t)
    }), n.on("UpdateLifePointsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("LifePointsRegenBeginMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("LifePointsRegenEndMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
