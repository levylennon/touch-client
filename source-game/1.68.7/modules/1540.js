function(e, t, i) {
    function n(e, t, i, n, o) {
        if (e) e.position += i ? -.1 : .1, e.animManager.assignSymbol({
            base: "FX",
            direction: t
        }, !1, function() {
            if (e.remove(), o) return o()
        });
        else if (s.error(new Error("gfx missing for spell " + n)), o) return o()
    }

    function o(e, t, i, o, r) {
        new a(o, function() {
                n(e, t, i, r)
            })
            .start()
    }
    var a = i(430)
        .Delay,
        r = 3,
        s = i(34)
        .logger;
    t.playGfx = n, t.playGfxTrailAnimation = function(e, t, i, n, s) {
        for (var c = 0, l = 0; l < e.length; l += 1) o(e[l], t, i, c, n), c += r;
        new a(c, s)
            .start()
    }
}
