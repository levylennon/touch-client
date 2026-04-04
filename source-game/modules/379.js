function(e, t, i) {
    var n = i(105);
    n.on("PurchasableDialogMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
