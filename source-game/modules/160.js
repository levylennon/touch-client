function(e, t, i) {
    (function(t) {
        function n(e, i) {
            if (!(this instanceof n)) return new n(e, i);
            this._opad = c, this._alg = e;
            var r = "sha512" === e ? 128 : 64;
            i = this._key = t.isBuffer(i) ? i : new t(i), i.length > r ? i = o(e)
                .update(i)
                .digest() : i.length < r && (i = t.concat([i, a], r));
            for (var s = this._ipad = new t(r), c = this._opad = new t(r), l = 0; l < r; l++) s[l] = 54 ^ i[l], c[l] = 92 ^ i[l];
            this._hash = o(e)
                .update(s)
        }
        var o = i(151),
            a = new t(128);
        a.fill(0), e.exports = n, n.prototype.update = function(e, t) {
            return this._hash.update(e, t), this
        }, n.prototype.digest = function(e) {
            var t = this._hash.digest();
            return o(this._alg)
                .update(this._opad)
                .update(t)
                .digest(e)
        }
    })
    .call(t, i(145)
        .Buffer)
}
