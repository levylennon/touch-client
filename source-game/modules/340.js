function(e, t, i) {
    var n = i(105);
    n.on("NicknameRegistrationMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("NicknameRefusedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("NicknameAcceptedMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
