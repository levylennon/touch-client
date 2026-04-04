function(e, t, i) {
    var n = i(140);
    t.operation = function(e) {
        var i = t.timeouts(e);
        return new n(i, {
            forever: e && (e.forever || e.retries === 1 / 0),
            unref: e && e.unref,
            maxRetryTime: e && e.maxRetryTime
        })
    }, t.timeouts = function(e) {
        if (e instanceof Array) return [].concat(e);
        var t = {
            retries: 10,
            factor: 2,
            minTimeout: 1e3,
            maxTimeout: 1 / 0,
            randomize: !1
        };
        for (var i in e) t[i] = e[i];
        if (t.minTimeout > t.maxTimeout) throw new Error("minTimeout is greater than maxTimeout");
        for (var n = [], o = 0; o < t.retries; o++) n.push(this.createTimeout(o, t));
        return e && e.forever && !n.length && n.push(this.createTimeout(o, t)), n.sort(function(e, t) {
            return e - t
        }), n
    }, t.createTimeout = function(e, t) {
        var i = t.randomize ? Math.random() + 1 : 1,
            n = Math.round(i * Math.max(t.minTimeout, 1) * Math.pow(t.factor, e));
        return n = Math.min(n, t.maxTimeout)
    }, t.wrap = function(e, i, n) {
        if (i instanceof Array && (n = i, i = null), !n) {
            n = [];
            for (var o in e) "function" == typeof e[o] && n.push(o)
        }
        for (var a = 0; a < n.length; a++) {
            var r = n[a],
                s = e[r];
            e[r] = function(n) {
                var o = t.operation(i),
                    a = Array.prototype.slice.call(arguments, 1),
                    r = a.pop();
                a.push(function(e) {
                    o.retry(e) || (e && (arguments[0] = o.mainError()), r.apply(this, arguments))
                }), o.attempt(function() {
                    n.apply(e, a)
                })
            }.bind(e, s), e[r].options = i
        }
    }
}
