function(e, t) {
    function i(e) {
        if (!e) throw new Error("Need the logger!");
        this._logger = e
    }
    e.exports = i, i.prototype.calculateAttribution = function(e) {
        var t = e.cost,
            i = e.usedSpellPoints,
            n = e.level,
            o = e.characterPoints,
            a = e.accountPoints;
        if (0 === t) return {
            characterPoints: o,
            accountPoints: a
        };
        var r = o + a,
            s = r - t;
        if (s <= 0) return {
            characterPoints: s,
            accountPoints: 0
        };
        var c = n - 1,
            l = c - i;
        return l < 0 ? (o = 0, a = s) : (o = l, a = s - o), {
            characterPoints: o,
            accountPoints: a
        }
    }
}
