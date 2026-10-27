function(e, t, i) {
    function n(e, t, i) {
        return function() {
            delete b[e], t.apply(this, i)
        }
    }

    function o(e, t, i, o) {
        var a = f++;
        e === u.TYPES.TIMEOUT && (t = n(a, t, o));
        var r = b[a] = new u(e, t, i, o);
        return h && r.start(), a
    }

    function a(e) {
        var t = b[e];
        t && (t.clear(), delete b[e])
    }

    function r() {
        for (var e in b) b[e].clear();
        b = {}
    }

    function s() {
        for (var e in b) b[e].start()
    }

    function c() {
        p = !1;
        for (var e in b) b[e]["continue"]()
    }

    function l() {
        for (var e in b) b[e].suspend();
        p = !0
    }

    function d() {
        r(), p = !1
    }
    var u = i(31),
        p = !1,
        h = !1,
        f = 0,
        b = {};
    t.initialize = function(e) {
        e.on("connected", function() {
            h = !0, s()
        }), e.on("disconnect", function() {
            h = !1, d()
        }), e.on("appGoBackground", function() {
            l()
        }), e.on("connectedAfterAppLeaveBackground", function() {
            p && c()
        })
    };
    var m = 2;
    t.setTimeout = function(e, t) {
        var i = [];
        if (arguments.length > m)
            for (var n = 0; n < arguments.length - m; n++) i[n] = arguments[n + m];
        return o(u.TYPES.TIMEOUT, e, t, i)
    }, t.setInterval = function(e, t) {
        var i = [];
        if (arguments.length > m)
            for (var n = 0; n < arguments.length - m; n++) i[n] = arguments[n + m];
        return o(u.TYPES.INTERVAL, e, t, i)
    }, t.clearTimeout = t.clearInterval = function(e) {
        return a(e), null
    }
}
