function(e, t, i) {
    var n = i(105);
    n.on("CharacterDeletionErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
