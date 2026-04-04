function(e, t, i) {
    var n = i(105);
    n.on("_ErrorPopupMessage", function(e) {
        window.gui.openSimplePopup(e.text, e.title)
    })
}
