function(e, t, i) {
    function n(e, t, i, n) {
        r.call(this, e, i), this._haapiConfig = t, this._timeManager = n, this._eventFlushMs = 1e3, this._eventFlushRetries = 4, this._paths = {
            sendEvents: "/Ankama/v5/Game/SendEvents"
        }, this._stack = {
            current: [],
            buffer: []
        }, this._lastTimestamp = 0, this._cbs = {
            current: [],
            buffer: []
        }, this._eventsProcessing = !1, this._nextTimeout = 0
    }
    var o = i(56)
        .inherits,
        a = i(138),
        r = i(165);
    e.exports = n, o(n, r), n.prototype._next = function(e) {
        var t = this,
            i = this._timeManager.now(),
            n = i - this._lastTimestamp;
        if (!this._nextTimeout) {
            if (n <= this._eventFlushMs) {
                var o = this._eventFlushMs - n + 10;
                return void(this._nextTimeout = setTimeout(function() {
                    t._nextTimeout = 0, t._next(e)
                }, o))
            }
            this._stack.current.length <= 0 || n > this._eventFlushMs && (this._flushEvents(e), this._lastTimestamp = i)
        }
    }, n.prototype._flushEvents = function(e) {
        var t = a.operation({
            retries: this._eventFlushRetries,
            randomize: !0
        });
        this._eventsProcessing = !0;
        var i = this,
            n = this._haapiConfig.getBaseUrl() + this._paths.sendEvents,
            o = Boolean(this._haapiConfig.getEventServiceUrl());
        if (o) return void this._sendToMicroservice(e);
        this._logger.error("KPI: Should not use the url " + n);
        var r = null,
            s = "";
        try {
            s = JSON.stringify(this._stack.current)
        } catch (c) {
            r = c, s = ""
        }
        if (this._stack.current = [], r) return void this._callbackAndLeave(r, e);
        var l = {
            game: this._haapiConfig.getGameId(),
            session_id: e,
            events: s
        };
        t.attempt(function() {
            i.postDirectly(n, l, function(o) {
                return t.retry(o) ? void i._logger.warning("sendEvents: on the url", n, "will retry...") : o ? i._callbackAndLeave(t.mainError(), e) : i._callbackAndLeave(null, e)
            })
        })
    }, n.prototype._sendToMicroservice = function(e) {
        var t = a.operation({
                retries: this._eventFlushRetries,
                randomize: !0
            }),
            i = this,
            n = this._haapiConfig.getEventServiceUrl(),
            o = null,
            r = this._stack.current,
            s = {
                game: this._haapiConfig.getGameId(),
                session_id: e,
                events: r
            };
        try {
            s = JSON.stringify(s)
        } catch (c) {
            o = c, s = ""
        }
        return o ? void this._callbackAndLeave(o, e) : (this._stack.current = [], void t.attempt(function() {
            i.postJSON(n, s, function(o) {
                return t.retry(o) ? void i._logger.warning("sendEvents: on the url", n, "will retry...") : o ? i._callbackAndLeave(t.mainError(), e) : i._callbackAndLeave(null, e)
            })
        }))
    }, n.prototype._callbackAndLeave = function(e, t) {
        this._cbs.current.length > 0 && (this._cbs.current.forEach(function(t) {
            return t(e)
        }), this._cbs.current = []), this._stack.buffer.length > 0 ? (this._stack.current = this._stack.buffer, this._stack.buffer = [], this._cbs.current = this._cbs.buffer, this._cbs.buffer = [], this._eventsProcessing = !1, this._nextTimeout || this._next(t)) : this._eventsProcessing = !1
    }, n.prototype._addEventToStack = function(e, t, i) {
        this._eventsProcessing ? (this._stack.buffer.push(t), this._cbs.buffer.push(i)) : (this._stack.current.push(t), this._cbs.current.push(i)), this._next(e)
    }, n.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Game", this._paths)
    }, n.prototype.setEventFlushMs = function(e) {
        this._eventFlushMs = e
    }, n.prototype.setRetries = function(e) {
        this._eventFlushRetries = e
    }, n.prototype.sendEvent = function(e, t, i, n, o) {
        this._addEventToStack(e, {
            event_id: t,
            data: i || {},
            date: n
        }, o)
    }
}
