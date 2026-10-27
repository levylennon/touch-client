function(e, t) {
    var i = function() {
        this.eventHandlers = {}
    };
    i.EventEmitter = i, e.exports = i, i.listenerCount = function(e, t) {
        var i = e.eventHandlers[t];
        return i ? i.length : 0
    }, i.prototype.on = function(e, t) {
        if ("function" != typeof t) return console.warn("Tried to register non-function", t, "as event handler for event:", e), this;
        this.emit("newListener", e, t);
        var i = this.eventHandlers,
            n = i[e];
        return void 0 === n ? (i[e] = [t], this) : (n.push(t), this)
    }, i.prototype.addListener = i.prototype.on, i.prototype.once = function(e, t) {
        return t.once ? t.once += 1 : t.once = 1, this.on(e, t)
    }, i.prototype.setMaxListeners = function() {
        console.warn("Method setMaxListeners not supported, there is no limit to the number of listeners")
    }, i.prototype.removeListener = function(e, t) {
        var i = this.eventHandlers[e];
        if (void 0 !== i) {
            var n = i.indexOf(t);
            n !== -1 && (i.splice(n, 1), this.emit("removeListener", e, t), 0 === i.length && delete this.eventHandlers[e])
        }
        return this
    }, i.prototype.removeAllListeners = function(e) {
        return e ? delete this.eventHandlers[e] : this.eventHandlers = {}, this
    }, i.prototype.hasListeners = function(e) {
        return void 0 !== this.eventHandlers[e]
    }, i.prototype.listeners = function(e) {
        var t = this.eventHandlers[e];
        return void 0 !== t ? t.slice() : []
    };
    var n = Array.prototype.slice;
    i.prototype.emit = function(e) {
        var t = this.eventHandlers[e];
        if (void 0 === t) return !1;
        t = t.slice();
        for (var i = !1, o = n.call(arguments, 1), a = 0, r = t.length; a < r; a++) {
            var s = t[a];
            void 0 !== s && (s.apply(this, o), i = !0, s.once && (s.once > 1 ? s.once-- : delete s.once, this.removeListener(e, s)))
        }
        return i
    }
}
