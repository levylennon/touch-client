function(e, t, i) {
    function n() {
        m = !1, d = null
    }

    function o(e) {
        var t = p(e);
        if (!m) {
            if (Math.abs(t.x - c) < g && Math.abs(t.y - l) < g) return;
            if (!h.requestInteractionHandle("DRAG", f)) return f.cancel();
            m = !0, d.emit("_dragStart", t.x, t.y)
        }
        d.emit("dragMove", t.x, t.y), f.emit("dragMove", t.x, t.y)
    }

    function a() {
        M || (M = !0, window.gui.wBody.on("dom.touchmove", o), window.gui.wBody.on("dom.touchend", s))
    }

    function r() {
        M && (M = !1, window.gui.wBody.removeListener("dom.touchmove", o), window.gui.wBody.removeListener("dom.touchend", s))
    }

    function s(e) {
        var t = p(e);
        r(), m && (n(), f.emit("dragEnd", t.x, t.y))
    }
    var c, l, d, u = i(36)
        .EventEmitter,
        p = i(23)
        .getPosition,
        h = i(65),
        f = e.exports = new u,
        b = 5,
        m = !1,
        M = !1,
        g = b;
    f.cancel = function() {
        r(), m && (n(), f.emit("dragEnd", 0, 0), h.abortInteraction())
    }, f.initializeListeners = function(e, t) {
        e.allowDomEvents();
        var i = t.hasOwnProperty("sensitivity") ? t.sensitiviy : b;
        e.on("dom.touchstart", function(n) {
            if (e._dragManager.enable && !M) {
                g = i;
                var r = p(n);
                c = r.x, l = r.y, a(), d = e, t.dragOnTouchstart ? (g = 0, o(n)) : t.dragInsteadOfScroll && h.setPriorityBehavior("DRAG")
            }
        }), e._dragManager.enable = !0
    }
}
