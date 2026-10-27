function(e, t, i) {
    var n = i(105);
    n.on("SpellForgetUIMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("SpellForgottenMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("SpellChangeSuccessMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("SpellChangeFailureMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GameRolePlaySpellAnimMessage", function(e) {
        window.isoEngine.playRoleplaySpellAnim(e, function(e) {
            if (e) return console.error("GameRolePlaySpellAnimMessage error", e)
        })
    })
}
