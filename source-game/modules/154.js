function(e, t, i) {
    var n = i(56)
        .inherits;
    e.exports = function(e, t) {
        function i() {
            return f.length ? f.pop()
                .init() : this instanceof i ? (this._w = h, t.call(this, 64, 56), this._h = null, void this.init()) : new i
        }

        function o(e, t, i, n) {
            return e < 20 ? t & i | ~t & n : e < 40 ? t ^ i ^ n : e < 60 ? t & i | t & n | i & n : t ^ i ^ n
        }

        function a(e) {
            return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
        }

        function r(e, t) {
            return e + t | 0
        }

        function s(e, t) {
            return e << t | e >>> 32 - t
        }
        var c = 0,
            l = 4,
            d = 8,
            u = 12,
            p = 16,
            h = new("undefined" == typeof Int32Array ? Array : Int32Array)(80),
            f = [];
        return n(i, t), i.prototype.init = function() {
            return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, t.prototype.init.call(this), this
        }, i.prototype._POOL = f, i.prototype._update = function(e) {
            var t, i, n, c, l, d, u, p, h, f;
            t = d = this._a, i = u = this._b, n = p = this._c, c = h = this._d, l = f = this._e;
            for (var b = this._w, m = 0; m < 80; m++) {
                var M = b[m] = m < 16 ? e.readInt32BE(4 * m) : s(b[m - 3] ^ b[m - 8] ^ b[m - 14] ^ b[m - 16], 1),
                    g = r(r(s(t, 5), o(m, i, n, c)), r(r(l, M), a(m)));
                l = c, c = n, n = s(i, 30), i = t, t = g
            }
            this._a = r(t, d), this._b = r(i, u), this._c = r(n, p), this._d = r(c, h), this._e = r(l, f)
        }, i.prototype._hash = function() {
            f.length < 100 && f.push(this);
            var t = new e(20);
            return t.writeInt32BE(0 | this._a, c), t.writeInt32BE(0 | this._b, l), t.writeInt32BE(0 | this._c, d), t.writeInt32BE(0 | this._d, u), t.writeInt32BE(0 | this._e, p), t
        }, i
    }
}
