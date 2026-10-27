function(e, t) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function n() {
        throw new Error("clearTimeout has not been defined")
    }

    function o(e) {
        if (d === setTimeout) return setTimeout(e, 0);
        if ((d === i || !d) && setTimeout) return d = setTimeout, setTimeout(e, 0);
        try {
            return d(e, 0)
        } catch (t) {
            try {
                return d.call(null, e, 0)
            } catch (t) {
                return d.call(this, e, 0)
            }
        }
    }

    function a(e) {
        if (u === clearTimeout) return clearTimeout(e);
        if ((u === n || !u) && clearTimeout) return u = clearTimeout, clearTimeout(e);
        try {
            return u(e)
        } catch (t) {
            try {
                return u.call(null, e)
            } catch (t) {
                return u.call(this, e)
            }
        }
    }

    function r() {
        b && h && (b = !1, h.length ? f = h.concat(f) : m = -1, f.length && s())
    }

    function s() {
        if (!b) {
            var e = o(r);
            b = !0;
            for (var t = f.length; t;) {
                for (h = f, f = []; ++m < t;) h && h[m].run();
                m = -1, t = f.length
            }
            h = null, b = !1, a(e)
        }
    }

    function c(e, t) {
        this.fun = e, this.array = t
    }

    function l() {}
    var d, u, p = e.exports = {};
    ! function() {
        try {
            d = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            d = i
        }
        try {
            u = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (e) {
            u = n
        }
    }();
    var h, f = [],
        b = !1,
        m = -1;
    p.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        f.push(new c(e, t)), 1 !== f.length || b || o(s)
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = l, p.addListener = l, p.once = l, p.off = l, p.removeListener = l, p.removeAllListeners = l, p.emit = l, p.prependListener = l, p.prependOnceListener = l, p.listeners = function(e) {
        return []
    }, p.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function() {
        return "/"
    }, p.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function() {
        return 0
    }
}
