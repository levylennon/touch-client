function(e, t, i) {
    (function(t) {
        function n(e) {
            return function() {
                var i = [],
                    n = {
                        update: function(e, n) {
                            return t.isBuffer(e) || (e = new t(e, n)), i.push(e), this
                        },
                        digest: function(n) {
                            var o = t.concat(i),
                                a = e(o);
                            return i = null, n ? a.toString(n) : a
                        }
                    };
                return n
            }
        }
        var o = i(152),
            a = n(i(157)),
            r = n(i(159));
        e.exports = function(e) {
            return "md5" === e ? new a : "rmd160" === e ? new r : o(e)
        }
    })
    .call(t, i(145)
        .Buffer)
}
