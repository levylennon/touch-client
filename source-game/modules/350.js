function(e, t, i) {
    var n = i(105);
    n.on("BasicTimeMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("BasicWhoIsNoMatchMessage", function(e) {
        window.gui.transmitMessage(e)
    });
    var o = 0;
    n.on("send:login", function() {
        o = 0
    }), n.on("SequenceNumberRequestMessage", function() {
        o += 1, n.sendMessage("SequenceNumberMessage", {
            number: o
        })
    })
}
