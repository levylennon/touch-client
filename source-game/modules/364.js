function(e, t, i) {
    var n = i(105);
    n.on("NotificationListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("NotificationByServerMessage", function(e) {
        console.info("NotificationByServerMessage: ", "id:" + e.id, e.parameters)
    })
}
