function(e, t, i) {
    var n = i(105);
    n.on("ChatSmileyMessage", function(e) {
        window.gui.playerData.socialData.isIgnored(e.accountId) || window.actorManager.addSmileyOnActor(e.entityId, e.smileyId)
    }), n.on("MoodSmileyResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("MoodSmileyUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
