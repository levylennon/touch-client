function(e, t) {
    function i() {
        this._queue = [], this._isProcessing = !1
    }
    e.exports = i, i.prototype.enqueue = function(e) {
        this._queue.push(e)
    }, i.prototype.signal = function() {
        if (!this._isProcessing) {
            for (this._isProcessing = !0; this._queue.length;) {
                var e = this._queue.shift();
                e()
            }
            this._isProcessing = !1
        }
    }, i.prototype.hasActions = function() {
        return this._queue.length > 0
    }, i.prototype.clear = function() {
        this._isProcessing && console.error(new Error("DeferredActionQueue.clear during signal")), this._queue.length = 0, this._isProcessing = !1
    }
}
