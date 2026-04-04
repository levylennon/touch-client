function(e, t, i) {
    function n() {
        u.call(this), this._reset()
    }

    function o(e, t) {
        if (!e) return null;
        var i = Date.now(),
            n = (i - t) / 1e3,
            o = n / e;
        return ~~(o - n)
    }

    function a(e, t) {
        for (var i = 0; i < t.length; i++)
            if (t[i] === e) return !0;
        return !1
    }

    function r(e, t) {
        var i = m + e + ".json";
        h.loadJson(i, function(i) {
            if (i === f.EMPTY_JSON) return console.error("preload: map id " + e + " missing for preload."), t();
            var n = [M + e + ".jpg"];
            i.foreground && n.push(g + e + ".png");
            for (var o = i.midgroundLayer, r = Object.keys(o), s = 0; s < r.length; s++)
                for (var c = r[s], l = o[c], d = 0; d < l.length; d++) {
                    var u = l[d],
                        p = u.g;
                    if (p) {
                        var m = u.jpg ? "jpg" : "png",
                            _ = m + "/" + p + "." + m;
                        n.push(b + _)
                    }
                }
            h.preloadAssets(n, !1, null, function(i) {
                return a(null, i) ? (console.error("preload: assets missing for map id " + e), t()) : t(null, i)
            })
        })
    }

    function s(e, t) {
        for (var i = 0; i < e.length; i++) t.hasOwnProperty(e[i]) || (t[e[i]] = !0)
    }

    function c(e, t) {
        return e.length ? void p.getAllDataMap("SubAreas", function(i, n) {
            if (i) return t(i);
            var o = {};
            for (var a in n)
                if (n.hasOwnProperty(a)) {
                    var r = n[a],
                        c = r.mapIds || [];
                    if (e.indexOf(r.areaId) === -1) continue;
                    s(c, o)
                } return t(null, o)
        }) : this._onError("noArea:" + e)
    }
    var l = i(18),
        d = i(56).inherits,
        u = i(36).EventEmitter,
        p = i(130),
        h = i(12),
        f = i(13),
        b = f.IMG_PATH,
        m = f.MAP_PATH,
        M = f.BACKGROUND_PATH,
        g = f.FOREGROUND_PATH,
        _ = "MapPreloaderInterrupt";
    d(n, u), e.exports = n, 
    n.prototype._reset = function() {
        this._isStopped = !1,
        this._shouldStop = !1,
        this._remainingMaps = {},
        this._lastCount = 0
    },
    n.prototype._onError = function(e) {
        this._isStopped = !0, this.emit("error", e)
    },
    n.prototype._onEnd = function(e) {
        this._isStopped = !0, this.emit("end", e)
    },
    n.prototype._onStop = function() {
        this._isStopped = !0, this.emit("stop")
    },
    n.prototype._onStep = function(e) {
        this.emit("step", e)
    },
    n.prototype._preload = function(e, t) {
        var i = this,
            n = Object.keys(e),
            a = n.length;
        if (!a) return i._onEnd({
            elapsedSecond: 0
        });
        var s = 0,
            c = Date.now();
        return l.forEachSeries(n, function(n, d) {
            return i._shouldStop ? l.setImmediate(function() {
                return d(_)
            }) : r(n, function(r) {
                if (r) return d(r);
                delete e[n], s++;
                var l = s / a,
                    u = o(l, c),
                    p = s + t,
                    h = a + t,
                    f = p / h,
                    b = Math.round(100 * f) / 100;
                return i._onStep({
                    count: p,
                    nbTotalMaps: h,
                    percent: b,
                    secondLeft: u
                }), d()
            })
        }, function(t) {
            return i._remainingMaps = e, i._lastCount += s, t ? t === _ ? i._shouldStop ? i._onStop() : i._restart() : i._onError(t) : i._onEnd({
                elapsedSecond: ~~((Date.now() - c) / 1e3)
            })
        })
    },
    n.prototype.preloadAreas = function(e) {
        var t = this;
        this._reset(), this._isStopped = !1, c(e, function(e, i) {
            return e ? t._onError(e) : void t._preload(i, 0)
        })
    },
    n.prototype.stop = function() {
        this._shouldStop = !0, this._isStopped && this._onStop()
    },
    n.prototype.restart = function() {
        this._shouldStop = !1, this._isStopped && this._restart()
    },
    n.prototype._restart = function() {
        this._isStopped = !1, this._preload(this._remainingMaps, this._lastCount)
    }
}
