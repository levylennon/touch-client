function(e, t, i) {
    (function(e, n) {
        function o(e, t) {
            this._id = e, this._clearFn = t
        }
        var a = i(11)
            .nextTick,
            r = Function.prototype.apply,
            s = Array.prototype.slice,
            c = {},
            l = 0;
        t.setTimeout = function() {
            return new o(r.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function() {
            return new o(r.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function(e) {
            e.close()
        }, o.prototype.unref = o.prototype.ref = function() {}, o.prototype.close = function() {
            this._clearFn.call(window, this._id)
        }, t.enroll = function(e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function(e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function(e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                e._onTimeout && e._onTimeout()
            }, t))
        }, t.setImmediate = "function" == typeof e ? e : function(e) {
            var i = l++,
                n = !(arguments.length < 2) && s.call(arguments, 1);
            return c[i] = !0, a(function() {
                c[i] && (n ? e.apply(null, n) : e.call(null), t.clearImmediate(i))
            }), i
        }, t.clearImmediate = "function" == typeof n ? n : function(e) {
            delete c[e]
        }
    })
    .call(t, i(19)
        .setImmediate, i(19)
        .clearImmediate)
}
