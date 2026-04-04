function(e, t, i) {
    var n = i(105);
    n.on("FriendsListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("IgnoredListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("FriendAddedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("FriendUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("IgnoredAddedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("IgnoredDeleteResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("SpouseStatusMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("SpouseInformationsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("FriendWarnOnConnectionStateMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
