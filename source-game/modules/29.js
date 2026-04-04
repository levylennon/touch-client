function(e, t) {
    function i(e, t, i) {
        var n = 100 * t + i;
        return e[n]
    }
    e.exports = function(e, t, n, o) {
        var a = 32768 * t + o,
            r = 1,
            s = 0,
            c = 0;
        do r++, c = 0, c = i(e, n, r), c && (s = c.requiredXp); while (s <= a && r < 51);
        return r--, {
            level: r,
            currentExp: a,
            requiredExpToNextLevel: c ? c.requiredXp : 0,
            expPreviousLevel: i(e, n, r)
                .requiredXp
        }
    }
}
