function(e, t) {
    function i(e) {
        return !!e._tween && (e._tween.cancel(), e.emit("tweenCancelled"), !0)
    }
    t.tween = function(e, t, n, o) {
        function a() {
            window.clearTimeout(h), d.removeEventListener("webkitTransitionEnd", f), h = null, d.style.webkitTransition = u, e._tween = null
        }

        function r() {
            b || m || (b = m = !0, a(), o = null)
        }
        i(e), n = n || {};
        var s = n.time || 500,
            c = n.delay || 0,
            l = n.easing || "ease-in-out",
            d = e.rootElement;
        if (!d) return void console.error(new Error("The dom is gone"));
        var u = d.style.webkitTransition,
            p = "all " + s + "ms " + l;
        c && (p += " " + c + "ms");
        var h, f, b = !1,
            m = !1;
        return f = function(t) {
            m || (m = !0, t && t.stopPropagation(), a(), o && (o.call(e, t), o = null))
        }, window.setTimeout(function() {
            if (!b) {
                d.style.webkitTransition = p;
                for (var e in t) d.style[e] = t[e];
                d.addEventListener("webkitTransitionEnd", f), h = window.setTimeout(f, c + s)
            }
        }, 0), e._tween = {
            cancel: r
        }, e._tween
    }, t.cancelTween = i
}
