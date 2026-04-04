function(e, t) {
    function i(e) {
        this.maxSize = e, this.clear()
    }
    e.exports = i, i.prototype.clear = function() {
        this.buf = new Array(this.maxSize), this.first = 0, this.last = 0, this.empty = !0
    }, i.prototype.isEmpty = function() {
        return this.empty
    }, i.prototype.isFull = function() {
        return this.last === (this.first + this.maxSize - 1) % this.maxSize
    }, i.prototype.getCurrentSize = function() {
        return this.empty ? 0 : (this.last - this.first + this.maxSize) % this.maxSize + 1
    }, i.prototype.push = function(e) {
        var t;
        if (this.empty) this.buf[this.last] = e, this.empty = !1;
        else {
            var i = (this.last + 1) % this.maxSize;
            i === this.first && (t = this.buf[i], this.first = (i + 1) % this.maxSize), this.buf[i] = e, this.last = i
        }
        return t
    }, i.prototype.pop = function() {
        if (!this.empty) {
            var e = this.buf[this.last];
            return this.buf[this.last] = void 0, this.first === this.last ? this.empty = !0 : this.last = (this.last + this.maxSize - 1) % this.maxSize, e
        }
    }, i.prototype.getFirst = function() {
        if (!this.empty) return this.buf[this.first]
    }, i.prototype.getLast = function() {
        if (!this.empty) return this.buf[this.last]
    }, i.prototype.getBuffer = function() {
        return this.buf
    }
}
