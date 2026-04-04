function(e, t, i) {
    var n = i(56)
        .inherits;
    e.exports = function(e, t) {
        function i() {
            this.init(), this._w = h, t.call(this, 64, 56)
        }

        function o(e, t) {
            return e >>> t | e << 32 - t
        }

        function a(e, t) {
            return e >>> t
        }

        function r(e, t, i) {
            return e & t ^ ~e & i
        }

        function s(e, t, i) {
            return e & t ^ e & i ^ t & i
        }

        function c(e) {
            return o(e, 2) ^ o(e, 13) ^ o(e, 22)
        }

        function l(e) {
            return o(e, 6) ^ o(e, 11) ^ o(e, 25)
        }

        function d(e) {
            return o(e, 7) ^ o(e, 18) ^ a(e, 3)
        }

        function u(e) {
            return o(e, 17) ^ o(e, 19) ^ a(e, 10)
        }
        var p = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
            h = new Array(64);
        return n(i, t), i.prototype.init = function() {
            return this._a = 1779033703, this._b = -1150833019, this._c = 1013904242, this._d = -1521486534, this._e = 1359893119, this._f = -1694144372, this._g = 528734635, this._h = 1541459225, this._len = this._s = 0, this
        }, i.prototype._update = function(e) {
            var t, i, n, o, a, h, f, b, m, M, g = this._w;
            t = 0 | this._a, i = 0 | this._b, n = 0 | this._c, o = 0 | this._d, a = 0 | this._e, h = 0 | this._f, f = 0 | this._g, b = 0 | this._h;
            for (var _ = 0; _ < 64; _++) {
                var A = g[_] = _ < 16 ? e.readInt32BE(4 * _) : u(g[_ - 2]) + g[_ - 7] + d(g[_ - 15]) + g[_ - 16];
                m = b + l(a) + r(a, h, f) + p[_] + A, M = c(t) + s(t, i, n), b = f, f = h, h = a, a = o + m, o = n, n = i, i = t, t = m + M
            }
            this._a = t + this._a | 0, this._b = i + this._b | 0, this._c = n + this._c | 0, this._d = o + this._d | 0, this._e = a + this._e | 0, this._f = h + this._f | 0, this._g = f + this._g | 0, this._h = b + this._h | 0
        }, i.prototype._hash = function() {
            var t = new e(32);
            return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t
        }, i
    }
}
