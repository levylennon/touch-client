function(e, t) {
    e.exports = function(e) {
        function t(t, i) {
            this._block = new e(t), this._finalSize = i, this._blockSize = t, this._len = 0, this._s = 0
        }
        return t.prototype.init = function() {
            this._s = 0, this._len = 0
        }, t.prototype.update = function(t, i) {
            "string" == typeof t && (i = i || "utf8", t = new e(t, i));
            for (var n = this._len += t.length, o = this._s = this._s || 0, a = 0, r = this._block; o < n;) {
                for (var s = Math.min(t.length, a + this._blockSize - o % this._blockSize), c = s - a, l = 0; l < c; l++) r[o % this._blockSize + l] = t[l + a];
                o += c, a += c, o % this._blockSize === 0 && this._update(r)
            }
            return this._s = o, this
        }, t.prototype.digest = function(e) {
            var t = 8 * this._len;
            this._block[this._len % this._blockSize] = 128, this._block.fill(0, this._len % this._blockSize + 1), t % (8 * this._blockSize) >= 8 * this._finalSize && (this._update(this._block), this._block.fill(0)), this._block.writeInt32BE(t, this._blockSize - 4);
            var i = this._update(this._block) || this._hash();
            return e ? i.toString(e) : i
        }, t.prototype._update = function() {
            throw new Error("_update must be implemented by subclass")
        }, t
    }
}
