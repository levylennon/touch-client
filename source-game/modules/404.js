function(e, t, i) {
    var n = i(105);
    n.on("TitlesAndOrnamentsListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TitleGainedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TitleLostMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("OrnamentGainedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TitleSelectedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TitleSelectErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("OrnamentSelectedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("OrnamentSelectErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
