function(e, t) {
    function i(e, t) {
        function i() {
            if (!t) throw new Error("Final callback was already called");
            for (var i = 0; i < o.length; i += 1) e.removeListener(o[i].eventName, o[i].callback);
            o = null;
            try {
                t.apply(e, arguments)
            } catch (n) {
                setTimeout(function() {
                    throw n
                }, 0)
            } finally {
                t = null
            }
        }

        function n() {
            function t() {
                try {
                    n.apply(e, arguments)
                } catch (t) {
                    i(t)
                }
            }
            var n = arguments[arguments.length - 1];
            if ("function" != typeof n) throw new TypeError("Final argument must be a callback function");
            for (var a = 0; a < arguments.length - 1; a += 1) {
                var r = arguments[a];
                e.on(r, t), o.push({
                    eventName: r,
                    callback: t
                })
            }
        }
        var o = [];
        return t = t || function() {}, n.done = i, n
    }
    e.exports = i
}
