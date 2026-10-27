function(e, t, i) {
    function n() {
        s = window.gui.wBody.appendChild(new r({
            className: "notification"
        })), s.appendChild(new a({
            className: "closeButton",
            scaleOnPress: !0
        }, function() {
            t.closeNotifications()
        }))
    }

    function o() {
        t.closeNotifications()
    }
    i(589);
    var a = i(86),
        r = i(88),
        s = null,
        c = !1;
    t.showClosableNotification = function(e, t, i) {
        return s || n(), c || (window.gui.wBody.on("dom.touchend", o), c = !0), i && i.centerOnTarget ? s.updateAndAppearAt(e, t, {
            centerOnTarget: !0
        }) : s.updateAndAppearAt(e, t), s
    }, t.closeNotifications = function() {
        c && (window.gui.wBody.removeListener("dom.touchend", o), c = !1), s && s.closeTooltip()
    }, t.showNotification = function(e, t, i) {
        r._showNotification(e, t, i)
    }
}
