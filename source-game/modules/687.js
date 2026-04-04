function(e, t, i) {
    function n(e, t, i) {
        switch (t) {
            case c:
            case l:
            case d:
                return !1
        }
        switch (i) {
            case u:
                return !1
        }
        switch (e) {
            case s.ACTION_CHARACTER_LIFE_POINTS_LOST_FROM_WATER:
            case s.ACTION_CHARACTER_LIFE_POINTS_LOST_FROM_EARTH:
            case s.ACTION_CHARACTER_LIFE_POINTS_LOST_FROM_AIR:
            case s.ACTION_CHARACTER_LIFE_POINTS_LOST_FROM_FIRE:
            case s.ACTION_CHARACTER_LIFE_POINTS_LOST:
            case s.ACTION_CHARACTER_LIFE_POINTS_LOST_FROM_BEST_ELEMENT:
                return !0;
            default:
                return !1
        }
    }

    function o(e, t, i, o) {
        var r = this,
            s = e && e.param1,
            c = e && e.param2,
            l = e && e.param3;
        a.call(this, e, t, i, s, c, l, function(a, d) {
            if (a) return o && o(a);
            r.delay = e.delay, r.effect.delay = e.delay;
            var u = r.effect.effect || {};
            if (u.forceMinMax) {
                var p = t && t.spellRank && t.spellRank.id,
                    h = t && t.spell && t.spell.id;
                n(i, p, h) && (r._forceMinMax(s, c, l), r._effectEnrichment())
            }
            return o && o(null, d)
        })
    }
    var a = i(676),
        r = i(56)
        .inherits,
        s = i(476),
        c = 24469,
        l = 24470,
        d = 19710,
        u = 641;
    r(o, a), e.exports = o, o.prototype._forceMinMax = function(e, t, i) {
        var n = e || 0,
            o = t || 0,
            a = i || 0,
            r = a + n,
            s = n * o + a;
        r === s ? (n = r, o = 0, a = 0) : r > s ? (n = s, o = r, a = 0) : (n = r, o = s, a = 0), this.updateParam(n, o, a)
    }, o.prototype.isActive = function() {
        return this.delay > 0 || a.prototype.isActive.call(this)
    }, o.prototype.isTrigger = function() {
        return !0
    }, o.prototype.incrementDuration = function(e, t) {
        return this.delay > 0 && !t && (this.delay + e >= 0 ? (this.delay--, this.effect.delay--) : (e += this.delay, this.delay = 0, this.effect.delay = 0)), 0 === e || a.prototype.incrementDuration.call(this, e, t)
    }, o.prototype.isUnusableNextTurn = function() {
        return this.delay <= 1 && a.prototype.isUnusableNextTurn.call(this)
    }, o.prototype.clone = function() {
        var e = new o;
        return this._copyTo(e), e
    }
}
