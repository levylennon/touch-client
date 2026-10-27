function(e, t) {
    function i(e, t) {
        t = t || 0;
        var i = Math.pow(10, t),
            n = e * i;
        return parseInt(n, 10) / i
    }

    function n(e, t) {
        var i = 1;
        return "number" != typeof e || "number" != typeof t ? (console.error("xpFormula: one of getGroupXPCoeff's params is not a number", {
            totalPlayerLevels: e,
            totalMobLevels: t
        }), i) : (e - a > t ? i = t / e : e + 2 * a < t && (i = (e + 2 * a) / t), i)
    }

    function o(e) {
        return r[Math.max(0, Math.min(r.length, e) - 1)]
    }
    var a = 5,
        r = [1, 1.1, 1.5, 2.3];
    e.exports = function(e, t, a) {
        e = e || {}, a = a || [e], Array.isArray(a) || (a = [e]);
        var r = 0;
        if ("number" != typeof e.level || "number" != typeof e.experienceBoost || "number" != typeof e.xpRatioMount || "number" != typeof e.experienceFactor || "number" != typeof e.xpGuildGivenPercent || "number" != typeof e.xpAlliancePrismBonusPercent) return console.error("xpFormula: there are params in playerData that are not a number", {
            level: e.level,
            experienceBoost: e.experienceBoost,
            experienceFactor: e.experienceFactor,
            xpRatioMount: e.xpRatioMount,
            xpGuildGivenPercent: e.xpGuildGivenPercent,
            xpAlliancePrismBonusPercent: e.xpAlliancePrismBonusPercent
        }), 0;
        var s = 0,
            c = 0,
            l = 0;
        a.forEach(function(e) {
            s += e.level, e.level > c && (c = e.level)
        });
        var d = Math.floor(c / 3);
        a.forEach(function(e) {
            e.level >= d && (l += 1)
        });
        var u = 0,
            p = 0,
            h = 0;
        Array.isArray(t) && t.forEach(function(e) {
            return "number" != typeof e.xp || "number" != typeof e.level ? void console.error("xpFormula: mob xp or level is not a number for mob: " + e.id, {
                xp: e.xp,
                level: e.level
            }) : (p += e.level, e.level > u && (u = e.level), void(h += i(e.xp)))
        });
        var f = n(s, p),
            b = o(l);
        if (h = i(h * f), h = i(h * b), h <= 0) return 0;
        var m = i(2.5 * u),
            M = Math.min(e.level, m),
            g = .25 * e.experienceBoost;
        r = i(h * M / s), r = i(r * (2.05 * e.level / 100 + g) + r), r = Math.max(1, r);
        var _ = 1 + e.experienceFactor / 100,
            A = 100;
        return A -= A * e.xpRatioMount / 100, A -= A * e.xpGuildGivenPercent / 100, A /= 100, e.xpAlliancePrismBonusPercent > 0 && (r *= 1 + e.xpAlliancePrismBonusPercent / 100), r = i(r * A) * _, i(r)
    }
}
