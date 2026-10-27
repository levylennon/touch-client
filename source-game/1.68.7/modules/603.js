function(e, t, i) {
    function n(e, t) {
        function i(t) {
            if (!h && s("RESIZE", e)) {
                h = !0, f.w = m.w = e.rootElement.clientWidth, f.h = m.h = e.rootElement.clientHeight;
                var i = r(t);
                b.x = i.x, b.y = i.y, e.emit("resizeStart"), window.gui.wBody.once("dom.touchend", a), window.gui.wBody.on("dom.touchmove", n), n(t)
            }
        }

        function n(i) {
            var n = r(i),
                a = n.x - b.x,
                s = n.y - b.y;
            M && (a = 0), m.w = f.w + a, m.h = f.h + s;
            var l = c(e.rootElement);
            m.w = Math.min(Math.max(m.w, u), o.windowFullScreenWidth - l.x), m.h = Math.min(Math.max(m.h, p), o.windowFullScreenHeight - l.y), e.setStyles({
                width: m.w + "px",
                height: m.h + "px"
            }), t.eventOnResize && e.emit("resizeMove", m)
        }

        function a() {
            window.gui.wBody.removeListener("dom.touchmove", n), h = !1, e.windowWidth = m.w, e.windowHeight = m.h, e.emit("resize")
        }
        t = t || {};
        var u = t.minWidth || l,
            p = t.minHeight || d;
        e.resizeHandle = e.createChild("div", {
            className: "resizeHandle"
        }), e.resizeHandle.allowDomEvents();
        var h = !1,
            f = {
                w: null,
                h: null
            },
            b = {
                x: null,
                y: null
            },
            m = {
                w: null,
                h: null
            },
            M = !1;
        e.setWidthLock = function(e) {
            M = Boolean(e)
        }, e.resizeHandle.on("dom.touchstart", i)
    }
    i(604);
    var o = i(54)
        .dimensions,
        a = i(23),
        r = a.getPosition,
        s = i(65)
        .requestInteractionHandle,
        c = i(66),
        l = 300,
        d = 300;
    e.exports = n
}
