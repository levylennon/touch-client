function(e, t, i) {
    var n = i(105);
    n.on("SystemMessageDisplayMessage", function(e) {
        window.gui.openSimplePopup(e.text, e.title), e.hangUp && (window.gui.disconnect(), window.isoEngine.disconnect())
    })
}
