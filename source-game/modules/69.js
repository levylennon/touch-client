function(e, t, i) {
    function n(e, t) {
        function i(e) {
            A = "vertical" === e ? "y" : "x"
        }

        function n(e) {
            N = r(e), N.x -= z.left, N.y -= z.top
        }

        function p(t) {
            if (E = Date.now(), T = N.x, C = N.y, n(t), y) {
                if (1 !== N.touchCount) return;
                return S = I, I = N.x - T, e.emit("slide", N), e.slideOut = N.x < 0 || N.x > z.width || N.y < 0 || N.y > z.height, void(e.slideOut ? w || (w = !0, e.emit("slideOut", N)) : (e.emit("slideIn", N), w = !1))
            }
            var i = N.x - O.x,
                a = N.y - O.y,
                r = Math.sqrt(i * i + a * a);
            if (!(r < d)) {
                if (Math.abs(a) > Math.abs(i)) {
                    if (A && "y" !== A || !s.requestInteractionHandle("SLIDE", e)) return void e.cancelSlide();
                    y = !0
                } else {
                    if (A && "x" !== A || !s.requestInteractionHandle("SLIDE", e)) return void e.cancelSlide();
                    y = !0
                }
                e.isSliding = !0, e.emit("slideStart", N, z), I = S = 0, o.isIOS && (R = c.setInterval(M, 100))
            }
        }

        function h(e) {
            n(e), N.touchCount > 0 || (y && f(), _())
        }

        function f() {
            e.isSliding = !1;
            var t, i = N.x,
                n = N.y;
            if (A) {
                var o = "x" === A ? i : n,
                    a = "x" === A ? T : C;
                t = m(o - O[A], o - a)
            } else t = m(i - O.x, i - T) && "x" || m(n - O.y, n - C) && "y";
            e.emit("slideEnd", t, i - O.x, n - O.y)
        }

        function b() {
            e.isSliding = !1, y && e.emit("slideCancel"), _(), s.abortInteraction()
        }

        function m(e, t) {
            var i = Math.abs(e) > q && t / e >= 0;
            return i
        }

        function M() {
            if (E !== x) return void(x = E);
            var e = N.x + z.left;
            if (!(e < a.screenWidth - u)) return e + 2 * S >= a.screenWidth ? (f(), _(), void s.abortInteraction()) : Date.now() - E > 5e3 ? b() : void 0
        }

        function g() {
            window.gui.wBody.on("dom.touchmove", p), window.gui.wBody.on("dom.touchend", h), window.gui.wBody.on("dom.touchcancel", b)
        }

        function _() {
            window.gui.wBody.removeListener("dom.touchmove", p), window.gui.wBody.removeListener("dom.touchend", h), window.gui.wBody.removeListener("dom.touchcancel", b), c.clearInterval(R), v = y = !1
        }
        if (!e._slideBehavior) {
            e._slideBehavior = !0, e.allowDomEvents();
            var A, O, v, y, z, w, T, C, I, S, E, L = !1,
                N = {},
                R = null,
                q = u / 2;
            t && i(t), e.setSlideDirection = i, e.setSwipeMinimum = function(e) {
                q = e
            }, e.isSliding = !1, e.slideOut = !1, e.lockSlide = function(e) {
                L = e
            }, e.cancelSlide = b;
            var x = 0;
            e.on("dom.touchstart", function(t) {
                v || L || (z = l(e.rootElement), n(t), T = N.x, C = N.y, e.slideOut = !1, v = !0, O = {
                    x: N.x,
                    y: N.y
                }, g())
            })
        }
    }
    var o = i(7),
        a = i(54)
        .dimensions,
        r = i(23)
        .getPosition,
        s = i(65),
        c = i(30),
        l = i(66),
        d = 5,
        u = 50;
    e.exports = n
}
