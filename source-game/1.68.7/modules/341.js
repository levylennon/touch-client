function(e, t, i) {
    function n() {
        s && (window.background.removeGridLayer(s), s = null)
    }
    var o = i(342),
        a = i(343),
        r = i(105),
        s = null;
    r.on("DebugHighlightCellsMessage", function(e) {
        for (var t = {}, i = 0, r = 0; r < e.cells.length; r++) {
            var c = e.cells[r];
            t[c] = new o(c, i, a.fullRed)
        }
        n(), s = window.background.addGridAnimation(t), window.setTimeout(function() {
            n()
        }, 5e3)
    }), r.on("DebugClearHighlightCellsMessage", function() {
        n()
    }), r.on("DebugInClientMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
