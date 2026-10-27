function(e, t, i) {
    (function(t) {
        function i(e, i) {
            if (e.length % a !== 0) {
                var n = e.length + (a - e.length % a);
                e = t.concat([e, r], n)
            }
            for (var o = [], s = i ? e.readInt32BE : e.readInt32LE, c = 0; c < e.length; c += a) o.push(s.call(e, c));
            return o
        }

        function n(e, i, n) {
            for (var o = new t(i), a = n ? o.writeInt32BE : o.writeInt32LE, r = 0; r < e.length; r++) a.call(o, e[r], 4 * r, !0);
            return o
        }

        function o(e, o, a, r) {
            t.isBuffer(e) || (e = new t(e));
            var c = o(i(e, r), e.length * s);
            return n(c, a, r)
        }
        var a = 4,
            r = new t(a);
        r.fill(0);
        var s = 8;
        e.exports = {
            hash: o
        }
    })
    .call(t, i(145)
        .Buffer)
}
