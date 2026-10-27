function(e, t, i) {
    function n(e) {
        var t = A(e, {
            useScrollValue: !0
        });
        h = O.x = t.x, f = O.y = t.y, O.touchCount = t.touchCount
    }

    function o() {
        v = !0
    }

    function a() {
        if (v) {
            v = !1;
            var e = document.elementFromPoint(h, f);
            if (!e) return void(v = !0);
            if (e === g) return void o();
            g = e, m = O.touchedElements = [];
            var t = document.createEvent("Event");
            t.initEvent("touching", !0, !0), e.dispatchEvent(t)
        }
    }

    function r(e) {
        n(e), (Math.abs(h - y) > 15 || Math.abs(f - z) > 15 || e.timeStamp - w > 50) && (y = h, z = f, a()), w = e.timeStamp
    }

    function s(e) {
        var t = A(e, {
            useScrollValue: !0
        });
        O.touchCount = t.touchCount, 0 === t.touchCount && d()
    }

    function c() {
        m.push(_), M = O.topElement = m[0];
        for (var e = m.length - 1, t = b.length - 1, i = Math.max(e, t); i >= 0; i -= 1) {
            var n = b[t],
                o = m[e];
            n !== o && (n && n.emit("touchleave", O), o && o.emit("touchenter", O)), t -= 1, e -= 1
        }
        b = m, v = !0
    }

    function l() {
        p || (p = !0, b = [], m = [], g = null, M = null, v = !0, _.on("dom.touchmove", r), _.on("dom.touchend", s))
    }

    function d() {
        p && (p = !1, _.removeListener("dom.touchend", s), _.removeListener("dom.touchmove", r))
    }

    function u(e) {
        e._hoverBehavior || (e._hoverBehavior = !0, e.allowDomEvents(), e.on("dom.touching", function(t) {
            return M !== e || m.length ? void m.push(e) : (t.stopPropagation(), o())
        }))
    }
    var p, h, f, b, m, M, g, _, A = i(23)
        .getPosition,
        O = {
            x: 0,
            y: 0,
            touchCount: 0,
            topElement: null,
            touchedElements: null
        },
        v = !1,
        y = 0,
        z = 0,
        w = 0;
    e.exports = u, u.start = l, u.stop = d, u.initialize = function(e) {
        return window._hoverBehavior ? console.error("hover behavior initialised more than one time.") : (window._hoverBehavior = !0, _ = e, void _.on("dom.touching", c))
    }
}
