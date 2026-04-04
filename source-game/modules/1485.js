function(e, t) {
    var i = 0,
        n = !1,
        o = function(e) {
            for (var t = e.target; t !== document.body;) {
                var n = window.getComputedStyle(t),
                    o = n.getPropertyValue("-webkit-overflow-scrolling"),
                    a = n.getPropertyValue("overflow-y"),
                    r = parseInt(n.getPropertyValue("height"), 10),
                    s = "touch" === o && ("auto" === a || "scroll" === a),
                    c = t.scrollHeight > t.offsetHeight;
                if (s && c) {
                    var l = e.touches ? e.touches[0].screenY : e.screenY,
                        d = i <= l && 0 === t.scrollTop,
                        u = i >= l && t.scrollHeight - t.scrollTop === r;
                    return void((d || u) && e.preventDefault())
                }
                t = t.parentNode
            }
            e.preventDefault()
        },
        a = function(e) {
            i = e.touches ? e.touches[0].screenY : e.screenY
        },
        r = function() {
            window.addEventListener("touchstart", a, !1), window.addEventListener("touchmove", o, !1), n = !0
        },
        s = function() {
            window.removeEventListener("touchstart", a, !1), window.removeEventListener("touchmove", o, !1), n = !1
        },
        c = function() {
            return n
        },
        l = document.createElement("div");
    document.documentElement.appendChild(l), l.style.WebkitOverflowScrolling = "touch";
    var d = "touch" === window.getComputedStyle(l)["-webkit-overflow-scrolling"];
    document.documentElement.removeChild(l), d && r();
    var u = {
        enable: r,
        disable: s,
        isEnabled: c
    };
    e.exports = u
}
