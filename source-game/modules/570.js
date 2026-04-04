function(e, t, i) {
    function n(e, t) {
        function i() {
            t.isFullScreen ? (h = 0, b = 0, f = o.screenWidth, m = o.screenHeight) : (h = o.mapLeft, b = o.mapTop, f = o.mapRight, m = o.mapBottom), p()
        }

        function n() {
            z > T ? z = T : z < I && (z = I), w > C ? w = C : w < S && (w = S), s()
        }

        function s() {
            E = z === I, L = w === S, N = z === T, R = w === C, e.toggleClassName("magnetLeft", E), e.toggleClassName("magnetTop", L), e.toggleClassName("magnetRight", N), e.toggleClassName("magnetBottom", R), e.toggleClassName("magnetFloating", !(E || L || N || R))
        }

        function c() {
            E && (z = I), L && (w = S), N && (z = T), R && (w = C)
        }

        function l() {
            e.setStyles({
                webkitTransform: "",
                left: z + "px",
                top: w + "px",
                right: "initial",
                bottom: "initial"
            }), s()
        }

        function d() {
            var t = e.rootElement.clientWidth,
                i = e.rootElement.clientHeight;
            return !(!t || !i) && (z = e.rootElement.offsetLeft, w = e.rootElement.offsetTop, t <= o.mapWidth ? (I = h, T = f - t) : (I = 0, T = o.screenWidth - t), T < I && (T = I), i <= o.mapHeight ? (S = b, C = m - i) : (S = 0, C = o.screenHeight - i), C < S && (C = S), !0)
        }

        function u() {
            l(), e.delClassNames("dragging"), e.emit("dragEnd")
        }

        function p() {
            q = !1, d() && (n(), c(), l())
        }
        t = t || {};
        var h, f, b, m, M, g = e.createChild("div", {
            className: "gripBehavior"
        });
        if (t.grip) M = t.grip;
        else {
            M = g.createChild("div", {
                className: "gripHandler"
            });
            var _ = M.createChild("div", {
                className: "gripExtraStyle"
            });
            _.createChild("div", {
                className: "gripExtraStyleBorderLeft"
            }), _.createChild("div", {
                className: "gripExtraStyleFill"
            }), _.createChild("div", {
                className: "gripExtraStyleMiddle"
            }), _.createChild("div", {
                className: "gripExtraStyleFill"
            }), _.createChild("div", {
                className: "gripExtraStyleBorderRight"
            }), t.small && M.addClassNames("small")
        }
        a(M);
        var A, O, v, y, z, w, T, C, I, S, E, L, N, R;
        M.on("slideStart", function(t) {
            A = t.x, O = t.y, d(), v = z, y = w, e.addClassNames("dragging"), e.emit("dragStart")
        }), M.on("slide", function(t) {
            z = v + t.x - A, w = y + t.y - O, n();
            var i = z - v,
                o = w - y;
            e.setStyle("webkitTransform", "translate3d(" + i + "px, " + o + "px, 0)")
        }), M.on("slideEnd", u), M.on("slideCancel", u);
        var q = !1;
        if (i(), window.gui.on("resize", i), e.on("destroy", function() {
                window.gui.removeListener("resize", i)
            }), t.isCollapsable) {
            var x = M.createChild("div", {
                className: "collapseBtn"
            });
            r(M), M.on("tap", function() {
                e.collapse(!e.isCollapsed)
            }), e.isCollapsed = !1, e.collapse = function(t, i) {
                e.isCollapsed = t, e.toggleClassName("collapsed", t), q = !0, i || e.emit("collapse", t), q && p()
            }, t.title && (x.addClassNames("collapseBtnWithTitle"), M.createChild("div", {
                name: "nameHolder",
                text: t.title,
                className: "title"
            }))
        }
        e.on("resized", p)
    }
    i(571);
    var o = i(54)
        .dimensions,
        a = i(69),
        r = i(63);
    e.exports = n
}
