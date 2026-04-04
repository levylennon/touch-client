function(e, t) {
    function i(e, t) {
        "boolean" == typeof t && (t = {
            forever: t
        }), this._originalTimeouts = JSON.parse(JSON.stringify(e)), this._timeouts = e, this._options = t || {}, this._maxRetryTime = t && t.maxRetryTime || 1 / 0, this._fn = null, this._errors = [], this._attempts = 1, this._operationTimeout = null, this._operationTimeoutCb = null, this._timeout = null, this._operationStart = null, this._timer = null, this._options.forever && (this._cachedTimeouts = this._timeouts.slice(0))
    }
    e.exports = i, i.prototype.reset = function() {
        this._attempts = 1, this._timeouts = this._originalTimeouts.slice(0)
    }, i.prototype.stop = function() {
        this._timeout && clearTimeout(this._timeout), this._timer && clearTimeout(this._timer), this._timeouts = [], this._cachedTimeouts = null
    }, i.prototype.retry = function(e) {
        if (this._timeout && clearTimeout(this._timeout), !e) return !1;
        var t = (new Date)
            .getTime();
        if (e && t - this._operationStart >= this._maxRetryTime) return this._errors.push(e), this._errors.unshift(new Error("RetryOperation timeout occurred")), !1;
        this._errors.push(e);
        var i = this._timeouts.shift();
        if (void 0 === i) {
            if (!this._cachedTimeouts) return !1;
            this._errors.splice(0, this._errors.length - 1), i = this._cachedTimeouts.slice(-1)
        }
        var n = this;
        return this._timer = setTimeout(function() {
            n._attempts++, n._operationTimeoutCb && (n._timeout = setTimeout(function() {
                n._operationTimeoutCb(n._attempts)
            }, n._operationTimeout), n._options.unref && n._timeout.unref()), n._fn(n._attempts)
        }, i), this._options.unref && this._timer.unref(), !0
    }, i.prototype.attempt = function(e, t) {
        this._fn = e, t && (t.timeout && (this._operationTimeout = t.timeout), t.cb && (this._operationTimeoutCb = t.cb));
        var i = this;
        this._operationTimeoutCb && (this._timeout = setTimeout(function() {
                i._operationTimeoutCb()
            }, i._operationTimeout)), this._operationStart = (new Date)
            .getTime(), this._fn(this._attempts)
    }, i.prototype["try"] = function(e) {
        console.log("Using RetryOperation.try() is deprecated"), this.attempt(e)
    }, i.prototype.start = function(e) {
        console.log("Using RetryOperation.start() is deprecated"), this.attempt(e)
    }, i.prototype.start = i.prototype["try"], i.prototype.errors = function() {
        return this._errors
    }, i.prototype.attempts = function() {
        return this._attempts
    }, i.prototype.mainError = function() {
        if (0 === this._errors.length) return null;
        for (var e = {}, t = null, i = 0, n = 0; n < this._errors.length; n++) {
            var o = this._errors[n],
                a = o.message,
                r = (e[a] || 0) + 1;
            e[a] = r, r >= i && (t = o, i = r)
        }
        return t
    }
}
