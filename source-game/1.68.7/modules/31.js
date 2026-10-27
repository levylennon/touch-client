function(e, t) {
    function i(e, t, i, n) {
        this._type = e, this._delay = i, this._action = t, this._arguments = n, this._startedAtTime = null, this._timeout = null, this._interval = null
    }

    function n(e) {
        return function() {
            e._action.apply(this, e._arguments)
        }
    }

    function o(e) {
        return function() {
            e._startedAtTime = Date.now(), e._action.apply(this, e._arguments)
        }
    }

    function a(e) {
        return function() {
            e._timeout = null, e._interval = window.setInterval(o(e), e._delay), e._startedAtTime = Date.now(), e._action.apply(this, e._arguments)
        }
    }
    e.exports = i;
    var r = {
        TIMEOUT: 1,
        INTERVAL: 2
    };
    i.TYPES = r, i.prototype.start = function() {
        this._startedAtTime || (this._startedAtTime = Date.now(), this._type === r.TIMEOUT ? this._timeout = window.setTimeout(n(this), this._delay) : this._type === r.INTERVAL && (this._interval = window.setInterval(o(this), this._delay)))
    }, i.prototype.suspend = function() {
        this._startedAtTime && (this._type === r.TIMEOUT ? this._timeout = window.clearTimeout(this._timeout) : this._type === r.INTERVAL && (this._timeout = window.clearTimeout(this._timeout), this._interval = window.clearInterval(this._interval)))
    }, i.prototype["continue"] = function() {
        if (this._startedAtTime && !this._timeout && !this._interval) {
            var e = Date.now() - this._startedAtTime,
                t = Math.max(0, this._delay - e);
            this._type === r.TIMEOUT ? this._timeout = window.setTimeout(n(this), t) : this._type === r.INTERVAL && (this._timeout = window.setTimeout(a(this), t))
        }
    }, i.prototype.clear = function() {
        this.suspend(), this._startedAtTime = null
    }
}
