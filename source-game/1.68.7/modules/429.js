function(e, t, i) {
    function n(e, t) {
        function i(e, t) {
            return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2))
        }

        function n(e, t) {
            if (window.gui.pingSystem.isActive()) return !1;
            var n = b[0];
            if (!e) return !1;
            if (!A) {
                var o = i(e, n),
                    a = Date.now() - m;
                if (o / c + a / l >= O) return !0
            }
            if (!t) return !1;
            var r = b[1];
            r || (r = b[1] = t);
            var s = Math.abs(i(n, r) - i(e, t));
            return s > d
        }

        function u(t) {
            var r = o(t),
                s = r.touches[0],
                c = r.touches[1];
            if (!s) return void console.error(new Error("touch1 is null, touchCount: " + r.touchCount + " x: " + r.x + " y: " + r.y));
            if (!_) {
                if (!n(s, c)) return;
                return void(a.requestInteractionHandle("TRANSFORM", e) ? (_ = !0, e.isTransforming = !0, e.emit("transformStart", r, b)) : e.cancelTransform())
            }
            var l = s,
                d = 1;
            if (c) {
                l = {
                    x: (s.x + c.x) / 2,
                    y: (s.y + c.y) / 2
                };
                var u = i(s, c);
                f && (d = u / f), f = u
            }
            l.x -= p.left, l.y -= p.top, h = h || l;
            var m = A ? 0 : l.x - h.x,
                M = A ? 0 : l.y - h.y;
            e.emit("transform", l.x, l.y, m, M, d, r), h = l
        }
        if (!e._transformBehavior) {
            e._transformBehavior = !0, e.allowDomEvents();
            var p, h, f, b, m, M = !1,
                g = !1,
                _ = !1;
            e.on("dom.wheel", function(t) {
                if (a.requestInteractionHandle("TRANSFORM", e)) {
                    p = r(e.rootElement);
                    var i = t.wheelDeltaY > 0 ? s : 1 / s;
                    e.emit("transform", t.x - p.left, t.y - p.top, 0, 0, i)
                }
            }), e.isTransforming = !1;
            var A = !1;
            e.setTranslationEnable = function(e) {
                A = !e
            };
            var O = 2 / ("HIGH" === t ? 3 : 1);
            e.cancelTransform = function() {
                g && (M = !0, h = f = null, g = !1, e.removeListener("dom.touchmove", u), e.isTransforming = !1, _ && e.emit("transformEnd"))
            }, e.on("dom.touchstart", function(t) {
                if (h = f = null, !g && !M) {
                    var i = o(t);
                    A && 2 !== i.touchCount || i.touchCount > 2 || (p = r(e.rootElement), g = !0, _ = !1, b = i.touches, m = Date.now(), e.on("dom.touchmove", u))
                }
            }), e.on("dom.touchend", function(t) {
                h = f = null;
                var i = o(t);
                return M || 0 !== i.touchCount ? void(M = !1) : (e.removeListener("dom.touchmove", u), g = !1, void(_ && (e.isTransforming = !1, e.emit("transformEnd", i))))
            })
        }
    }
    var o = i(23)
        .getPosition,
        a = i(65),
        r = i(66),
        s = 1.2,
        c = 40,
        l = 100,
        d = 10;
    e.exports = n
}
