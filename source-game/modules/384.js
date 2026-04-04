function(e, t, i) {
    var n = i(105);
    n.on("LeaveDialogMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
