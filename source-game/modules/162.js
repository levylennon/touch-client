function(e, t, i) {
    (function(t) {
        e.exports = function(e) {
            function i(e, t, i, o, a, r) {
                if ("function" == typeof a && (r = a, a = void 0), "function" != typeof r) throw new Error("No callback provided to pbkdf2");
                setTimeout(function() {
                    var s;
                    try {
                        s = n(e, t, i, o, a)
                    } catch (c) {
                        return r(c)
                    }
                    r(void 0, s)
                })
            }

            function n(i, n, o, a, r) {
                if ("number" != typeof o) throw new TypeError("Iterations not a number");
                if (o < 0) throw new TypeError("Bad iterations");
                if ("number" != typeof a) throw new TypeError("Key length not a number");
                if (a < 0) throw new TypeError("Bad key length");
                r = r || "sha1", t.isBuffer(i) || (i = new t(i)), t.isBuffer(n) || (n = new t(n));
                var s, c, l, d = 1,
                    u = new t(a),
                    p = new t(n.length + 4);
                n.copy(p, 0, 0, n.length);
                for (var h = 1; h <= d; h++) {
                    p.writeUInt32BE(h, n.length);
                    var f = e.createHmac(r, i)
                        .update(p)
                        .digest();
                    if (!s && (s = f.length, l = new t(s), d = Math.ceil(a / s), c = a - (d - 1) * s, a > (Math.pow(2, 32) - 1) * s)) throw new TypeError("keylen exceeds maximum length");
                    f.copy(l, 0, 0, s);
                    for (var b = 1; b < o; b++) {
                        f = e.createHmac(r, i)
                            .update(f)
                            .digest();
                        for (var m = 0; m < s; m++) l[m] ^= f[m]
                    }
                    var M = (h - 1) * s,
                        g = h == d ? c : s;
                    l.copy(u, M, 0, g)
                }
                return u
            }
            return {
                pbkdf2: i,
                pbkdf2Sync: n
            }
        }
    })
    .call(t, i(145)
        .Buffer)
}
