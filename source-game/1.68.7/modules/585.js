function(e, t) {
    function i() {
        this.reset()
    }
    var n = 50,
        o = {
            message: "",
            links: []
        };
    i.prototype.reset = function() {
        this._buffer = [], this._currentIndex = 0
    }, i.prototype.addMessage = function(e, t) {
        this._buffer.unshift({
            message: e,
            links: t
        }), this._buffer.length > n && this._buffer.pop(), this._currentIndex = 0
    }, i.prototype.removeMessage = function() {
        this._buffer.shift()
    }, i.prototype.goBack = function() {
        this._currentIndex++
    }, i.prototype.goForward = function() {
        this._currentIndex = Math.max(this._currentIndex - 1, 0)
    }, i.prototype._getIndexInRange = function() {
        return this._currentIndex % (this._buffer.length + 1)
    }, i.prototype.getCurrentEntry = function() {
        var e = this._getIndexInRange();
        return 0 === e ? o : this._buffer[e - 1]
    }, e.exports = i
}
