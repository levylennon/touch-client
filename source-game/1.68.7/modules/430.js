function(e, t, i) {
    "use strict";

    function n() {
        this._time = 0, this._duration = 0, this.playing = !1, this.stopping = !1, this.starting = !1, this._iterations = 0, this._onStart = null, this._onStop = null, this._onFinish = null, this._onUpdate = null, this._onceFinish = null, this.reference = null
    }

    function o(e, t) {
        n.call(this), this._duration = e, this.onFinish(t)
    }

    function a(e, t, i, n, o, a, r) {
        this.start = i, this.end = i + n, this.duration = n, this.fromObject = e, this.toObject = t, this.easing = o, this.easingParam = a, this.callback = r
    }

    function r(e, t) {
        n.call(this), e || (console.error(new Error("Invalid tween element: " + e)), e = {}), this._element = e, this._properties = t, this._transitions = [], this._currentTransitionIndex = 0, this._duration = 0, this._from = null
    }

    function s(e, t) {
        if (this instanceof s == !1) return new s(e, t);
        n.call(this), e || (console.error(new Error("Invalid tween element: " + e)), e = {}), this._element = e, this._properties = t, this._previousValues = {};
        for (var i = 0; i < this._properties.length; i += 1) this._previousValues[this._properties[i]] = 0;
        this._transitions = [], this._currentTransitionIndex = 0, this._duration = 0, this._from = null
    }
    var c = i(56)
        .inherits,
        l = i(13),
        d = i(431),
        u = i(432),
        p = window.performance ? window.performance : Date,
        h = {
            tups: l.TIME_UNITS_PER_SECOND,
            easing: d,
            _startingTime: p.now(),
            _previousTime: p.now(),
            _playables: new u,
            _addList: [],
            _removeList: [],
            _silent: !0,
            _debug: !1,
            restart: function() {
                this._startingTime = p.now(), this._previousTime = p.now()
            },
            getFramesSinceStart: function() {
                return Math.floor((p.now() - this._startingTime) * this.tups / 1e3)
            },
            update: function() {
                var e = p.now(),
                    t = (e - this._previousTime) * this.tups / 1e3;
                for (this._previousTime = e; this._addList.length > 0;) {
                    var i = this._addList.pop();
                    i.reference = this._playables.add(i)
                }
                for (var n = this._playables.first; null !== n; n = n.next) n.object.update(t);
                for (; this._removeList.length > 0;) this._playables.removeByReference(this._removeList.pop()
                    .reference)
            },
            start: function(e) {
                e.start(this)
            },
            _add: function(e) {
                var t = this._addList.indexOf(e);
                t === -1 && (t = this._removeList.indexOf(e), t !== -1 ? this._removeList.splice(t, 1) : this._addList.push(e))
            },
            _remove: function(e) {
                var t = this._removeList.indexOf(e);
                t === -1 && (t = this._addList.indexOf(e), t !== -1 ? this._addList.splice(t, 1) : this._removeList.push(e))
            },
            stop: function() {
                for (var e = this._playables.first; null !== e; e = e.next) e.object._stopped();
                this._playables.clear()
            },
            silent: function(e) {
                this._silent = e || !1
            },
            debug: function(e) {
                this._debug = e || !1
            },
            _warn: function(e) {
                this._silent === !1 && console.warn(e)
            }
        };
    e.exports = h, n.prototype.start = function(e) {
        return e === !0 ? this._iterations = 1 / 0 : this._iterations = e || 1, 0 === this._iterations ? (h._warn("[Playable.start] playable is required to run 0 times"), this) : this.starting ? (h._warn("[Playable.start] playable is already starting"), this) : this.playing && !this.stopping ? (h._warn("[Playable.start] playable is already playing"), this) : (this.starting = !0, h._add(this), this)
    }, n.prototype.stop = function() {
        return this.stopping ? (h._warn("[Playable.stop] playable is already stopping"), this) : this.playing || this.starting ? (this.stopping = !0, this.starting = !1, this._finished(), this) : (h._warn("[Playable.stop] playable is not playing"), this)
    }, n.prototype.fastForwardToEnd = function() {
        this._time = this._duration
    }, n.prototype._stopped = function() {
        this.stopping = !1, this.playing = !1, null !== this._onStop && this._onStop()
    }, n.prototype._started = function() {
        this.starting = !1, this.playing = !0, null !== this._onStart && this._onStart()
    }, n.prototype._finished = function() {
        if (this.playing = !1, h._remove(this), null !== this._onceFinish) {
            var e = this._onceFinish.slice();
            this._onceFinish = null;
            for (var t = 0; t < e.length; t += 1) e[t]()
        }
        null !== this._onFinish && this._onFinish()
    }, n.prototype._reset = function() {
        this._time = 0
    }, n.prototype.update = function(e) {
        if (!this.stopping || (this._stopped(), this.starting))
            if (this.starting) this._time = 0, this._update(), this._started();
            else {
                var t = this._time + e;
                t >= this._duration ? 1 === this._iterations ? (this._time = this._duration, this._update(), null !== this._onUpdate && this._onUpdate(), this._finished()) : (this._time = t % this._duration, this._update(), null !== this._onUpdate && this._onUpdate(), this._iterations -= 1) : (this._time = t, this._update(), null !== this._onUpdate && this._onUpdate())
            }
    }, n.prototype.onUpdate = function(e) {
        return this._onUpdate = e || null, this
    }, n.prototype.onStart = function(e) {
        return this._onStart = e || null, this
    }, n.prototype.onStop = function(e) {
        return this._onStop = e || null, this
    }, n.prototype.onFinish = function(e) {
        return this._onFinish = e || null, this
    }, n.prototype.onceFinish = function(e) {
        return null === this._onceFinish ? this._onceFinish = [e] : this._onceFinish.push(e), this
    }, n.prototype.removeOnFinish = function() {
        return this._onFinish = null, this._onceFinish = null, this
    }, n.prototype.removeOnUpdate = function() {
        return this._onUpdate = null, this
    }, n.prototype.removeOnStart = function() {
        return this._onStart = null, this
    }, n.prototype.removeOnStop = function() {
        return this._onStop = null, this
    }, n.prototype.getElapsedTime = function() {
        return this._time
    }, n.prototype.getRemainingTime = function() {
        return this._duration - this._time
    }, c(o, n), h.Delay = o, o.prototype.reset = function(e, t) {
        this._duration = e, this.removeOnFinish(), this.onFinish(t)
    }, o.prototype._update = function() {}, c(r, n), h.Tween = r, r.prototype.reset = function() {
        return this._from = null, this._duration = 0, this._currentTransitionIndex = 0, this._transitions = [], this._reset(), this
    }, r.prototype.from = function(e) {
        return this._from = e, this._transitions.length > 0 && (this._transitions[0].from = e), this
    }, r.prototype._setFrom = function() {
        this._from = {};
        for (var e = 0; e < this._properties.length; e += 1) {
            var t = this._properties[e];
            this._from[t] = this._element[t]
        }
        return this._from
    }, r.prototype._getLastTransitionEnding = function() {
        return this._transitions.length > 0 ? this._transitions[this._transitions.length - 1].toObject : null === this._from ? this._setFrom() : this._from
    }, r.prototype.to = function(e, t, i, n, o) {
        void 0 === i && (i = d.linear);
        var r = this._getLastTransitionEnding();
        return this._transitions.push(new a(r, e, this._duration, t, i, n, o)), this._duration += t, this
    }, r.prototype.wait = function(e, t) {
        if (0 === e) return this;
        var i = this._getLastTransitionEnding();
        return this._transitions.push(new a(i, i, this._duration, e, d.linear, null, t)), this._duration += e, this
    }, r.prototype._update = function() {
        for (; this._time < this._transitions[this._currentTransitionIndex].start;) this._currentTransitionIndex--;
        for (; this._time > this._transitions[this._currentTransitionIndex].end;) this._currentTransitionIndex++, this._transitions[this._currentTransitionIndex].callback && this._transitions[this._currentTransitionIndex].callback();
        for (var e = this._transitions[this._currentTransitionIndex], t = e.easing((this._time - e.start) / e.duration, e.easingParam), i = e.fromObject, n = e.toObject, o = 0; o < this._properties.length; o++) {
            var a = this._properties[o];
            this._element[a] = i[a] * (1 - t) + n[a] * t
        }
    }, c(s, n), h.RelativeTween = s, s.prototype.reset = function() {
        this._from = null, this._duration = 0, this._currentTransitionIndex = 0, this._transitions = [], this._reset(), this._previousValues = {};
        for (var e = 0; e < this._properties.length; e += 1) this._previousValues[this._properties[e]] = 0;
        return this
    }, s.prototype.from = function(e) {
        return this._from = e, this._transitions.length > 0 && (this._transitions[0].from = e), this
    }, s.prototype._setFrom = function() {
        this._from = {};
        for (var e = 0; e < this._properties.length; e += 1) this._from[this._properties[e]] = 0;
        return this._from
    }, s.prototype._getLastTransitionEnding = function() {
        return this._transitions.length > 0 ? this._setFrom() : null === this._from ? this._setFrom() : this._from
    }, s.prototype.to = function(e, t, i, n) {
        void 0 === i && (i = d.linear);
        var o = this._getLastTransitionEnding();
        return this._transitions.push(new a(o, e, this._duration, t, i, n)), this._duration += t, this
    }, s.prototype.wait = function(e) {
        if (0 === e) return this;
        var t = this._getLastTransitionEnding();
        return this._transitions.push(new a(t, t, this._duration, e, d.linear, null)), this._duration += e, this
    }, s.prototype._update = function() {
        for (; this._time < this._transitions[this._currentTransitionIndex].start;) this._currentTransitionIndex--;
        for (; this._time > this._transitions[this._currentTransitionIndex].end;) this._currentTransitionIndex++;
        for (var e = this._transitions[this._currentTransitionIndex], t = e.easing((this._time - e.start) / e.duration, e.easingParam), i = e.fromObject, n = e.toObject, o = 0; o < this._properties.length; o++) {
            var a = this._properties[o],
                r = i[a] * (1 - t) + n[a] * t;
            this._element[a] += r - this._previousValues[a], this._previousValues[a] = r
        }
    }
}
