function(e, t, i) {
    var n = i(105);
    n.on("LockableShowCodeDialogMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("LockableCodeResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("LockableStateUpdateHouseDoorMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
