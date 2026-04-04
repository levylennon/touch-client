function(e, t, i) {
    var n = i(105);
    n.on("TaxCollectorMovementMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TaxCollectorErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TaxCollectorListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TaxCollectorMovementAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TaxCollectorMovementRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TaxCollectorAttackedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TaxCollectorAttackedResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildFightPlayersHelpersJoinMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildFightPlayersHelpersLeaveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildFightPlayersEnemiesListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GuildFightPlayersEnemyRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
