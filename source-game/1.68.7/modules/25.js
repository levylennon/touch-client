function(e, t) {
    e.exports = function(e, t) {
        if (0 === e) return 0;
        var i = t.criticalHit.getTotalStat(),
            n = Math.max(Math.min(e + i, 100), 1);
        return n
    }
}
