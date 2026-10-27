function(e, t, i) {
    var n = i(105);
    n.on("CharacterCreationResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("CharacterNameSuggestionSuccessMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("CharacterNameSuggestionFailureMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
