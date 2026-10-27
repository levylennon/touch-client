function(e, t, i) {
    var n = i(105),
        o = i(17)
        .getText;
    n.on("PopupWarningMessage", function(e) {
        window.gui.openConfirmPopup({
            title: o("ui.popup.information"),
            message: e.author + ": " + e.content,
            noDisable: !0,
            timer: e.lockDuration,
            cb: function() {}
        })
    })
}
