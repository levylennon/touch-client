function(e, t) {
    function i(e) {
        return Math.floor(e * Math.pow(100 + 2 * e, 2) / 20)
    }

    function n(e) {
        return e < l ? 0 : e > d ? 0 : Math.floor(c[e - 1])
    }

    function o(e, t) {
        if (e <= 0) return 0;
        if (t > e) {
            var i = Math.min(t, Math.floor(e * a)),
                o = Math.floor(r * n(e)),
                c = Math.floor(s * n(i));
            return o + c
        }
        return Math.floor(n(t))
    }
    var a = 1.5,
        r = .3,
        s = .7,
        c = {},
        l = 1,
        d = 200;
    t.calculateStepKamasRatio = function(e) {
        var t = window.gui.playerData.characterBaseInformations.level,
            i = e.kamasScaleWithPlayerLevel ? t : e.optimalLevel;
        return Math.floor((Math.pow(i, 2) + 20 * i - 20) * e.kamasRatio * e.duration)
    };
    for (var u = 0; u < d; u++) c[u] = i(u + 1);
    t.calculateStepXpRatio = function(e, t, i) {
        var n = e.duration * e.xpRatio,
            a = 1 + i / 100,
            r = o(e.optimalLevel, t);
        return Math.floor(Math.floor(r * n) * a)
    }, t.calculateAchievementXp = function(e, t, i, n) {
        var a = 1 + n / 100,
            r = o(t, i);
        return Math.floor(Math.floor(r * e) * a)
    }
}
