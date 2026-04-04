function(e, t) {
    function i(e) {
        this._connectionManager = e, this._pingLoopTimeout = null, this._isListening = !1, this._latencyBuffer = [], this._lastPingSent = 0
    }
    var n = 6e4,
        o = 10;
    e.exports = i, i.prototype._getLatencyAvg = function() {
        var e = 0;
        if (0 === this._latencyBuffer.length) return e;
        for (var t = 0; t < this._latencyBuffer.length; t += 1) e += this._latencyBuffer[t];
        return Math.round(e / this._getLatencySamplesCount())
    }, i.prototype._getLatencySamplesCount = function() {
        return this._latencyBuffer.length
    }, i.prototype._getLatencySamplesMax = function() {
        return o
    }, i.prototype._addSample = function() {
        if (this._lastPingSent) {
            var e = Date.now() - this._lastPingSent;
            this._lastPingSent = 0, this.startPingLoop(), this._latencyBuffer.push(e), this._getLatencySamplesCount() > o && this._latencyBuffer.shift()
        }
    }, i.prototype.startListening = function() {
        if (!this._isListening) {
            this._isListening = !0;
            var e = this;
            this._connectionManager.on("BasicLatencyStatsRequestMessage", function() {
                e._connectionManager.sendMessage("BasicLatencyStatsMessage", {
                    latency: e._getLatencyAvg(),
                    sampleCount: e._getLatencySamplesCount(),
                    max: e._getLatencySamplesMax()
                })
            }), this._connectionManager.on("BasicPongMessage", function() {
                e._addSample()
            })
        }
    }, i.prototype.startPingLoop = function() {
        if (!this._pingLoopTimeout) {
            var e = this;
            this._pingLoopTimeout = window.setTimeout(function() {
                e.sendPing(), e.stopPingLoop()
            }, n)
        }
    }, i.prototype.stopPingLoop = function() {
        clearTimeout(this._pingLoopTimeout), this._pingLoopTimeout = 0, this._lastPingSent = 0
    }, i.prototype.sendPing = function() {
        this._connectionManager.sendMessage("BasicPingMessage", {
            quiet: !0
        }), this._lastPingSent = Date.now()
    }
}
