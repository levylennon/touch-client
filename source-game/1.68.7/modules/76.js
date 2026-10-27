function(e, t) {
    function i() {
        this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
    }

    function n(e) {
        return "function" == typeof e
    }

    function o(e) {
        return "number" == typeof e
    }

    function a(e) {
        return "object" == typeof e && null !== e
    }

    function r(e) {
        return void 0 === e
    }
    e.exports = i, i.EventEmitter = i, i.prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(e) {
        if (!o(e) || e < 0 || isNaN(e)) throw TypeError("n must be a positive number");
        return this._maxListeners = e, this
    }, i.prototype.emit = function(e) {
        var t, i, o, s, c, l;
        if (this._events || (this._events = {}), "error" === e && (!this._events.error || a(this._events.error) && !this._events.error.length)) {
            if (t = arguments[1], t instanceof Error) throw t;
            throw TypeError('Uncaught, unspecified "error" event.')
        }
        if (i = this._events[e], r(i)) return !1;
        if (n(i)) switch (arguments.length) {
            case 1:
                i.call(this);
                break;
            case 2:
                i.call(this, arguments[1]);
                break;
            case 3:
                i.call(this, arguments[1], arguments[2]);
                break;
            default:
                s = Array.prototype.slice.call(arguments, 1), i.apply(this, s)
        } else if (a(i))
            for (s = Array.prototype.slice.call(arguments, 1), l = i.slice(), o = l.length, c = 0; c < o; c++) l[c].apply(this, s);
        return !0
    }, i.prototype.addListener = function(e, t) {
        var o;
        if (!n(t)) throw TypeError("listener must be a function");
        return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", e, n(t.listener) ? t.listener : t), this._events[e] ? a(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t, a(this._events[e]) && !this._events[e].warned && (o = r(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners, o && o > 0 && this._events[e].length > o && (this._events[e].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length), "function" == typeof console.trace && console.trace())), this
    }, i.prototype.on = i.prototype.addListener, i.prototype.once = function(e, t) {
        function i() {
            this.removeListener(e, i), o || (o = !0, t.apply(this, arguments))
        }
        if (!n(t)) throw TypeError("listener must be a function");
        var o = !1;
        return i.listener = t, this.on(e, i), this
    }, i.prototype.removeListener = function(e, t) {
        var i, o, r, s;
        if (!n(t)) throw TypeError("listener must be a function");
        if (!this._events || !this._events[e]) return this;
        if (i = this._events[e], r = i.length, o = -1, i === t || n(i.listener) && i.listener === t) delete this._events[e], this._events.removeListener && this.emit("removeListener", e, t);
        else if (a(i)) {
            for (s = r; s-- > 0;)
                if (i[s] === t || i[s].listener && i[s].listener === t) {
                    o = s;
                    break
                } if (o < 0) return this;
            1 === i.length ? (i.length = 0, delete this._events[e]) : i.splice(o, 1), this._events.removeListener && this.emit("removeListener", e, t)
        }
        return this
    }, i.prototype.removeAllListeners = function(e) {
        var t, i;
        if (!this._events) return this;
        if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e], this;
        if (0 === arguments.length) {
            for (t in this._events) "removeListener" !== t && this.removeAllListeners(t);
            return this.removeAllListeners("removeListener"), this._events = {}, this
        }
        if (i = this._events[e], n(i)) this.removeListener(e, i);
        else if (i)
            for (; i.length;) this.removeListener(e, i[i.length - 1]);
        return delete this._events[e], this
    }, i.prototype.listeners = function(e) {
        var t;
        return t = this._events && this._events[e] ? n(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
    }, i.prototype.listenerCount = function(e) {
        if (this._events) {
            var t = this._events[e];
            if (n(t)) return 1;
            if (t) return t.length
        }
        return 0
    }, i.listenerCount = function(e, t) {
        return e.listenerCount(t)
    }
}
