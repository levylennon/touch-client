function(e, t, i) {
    function n() {
        s = {
                CM: d("ui.stats.shortMP"),
                CP: d("ui.stats.shortAP"),
                CH: d("ui.pvp.honourPoints"),
                CD: d("ui.pvp.disgracePoints"),
                CT: d("ui.stats.takleBlock"),
                Ct: d("ui.stats.takleEvade"),
                CL: d("ui.criterion.CL"),
                CE: d("ui.criterion.CE"),
                Ce: d("ui.criterion.Ce"),
                Ch: d("ui.criterion.Ch"),
                Cd: d("ui.criterion.Cd")
            }, c = d("ui.item.characteristics")
            .split(",")
    }

    function o(e, t, i) {
        var n, o = i.length,
            a = e,
            r = t.length;
        for (n = 0; n < r; n += 1) a = a.split(t[n])
            .join(p + t[n] + p);
        for (n = 0; n < r; n += 1) a = a.split(p + t[n] + p)
            .join(i[n % o]);
        return a
    }

    function a(e) {
        return s[e] ? s[e] : o(e, ["CS", "Cs", "CV", "Cv", "CA", "Ca", "CI", "Ci", "CW", "Cw", "CC", "Cc", "<NO>", "PG", "PJ", "Pj", "PM", "PA", "PN", "PE", "<NO>", "PS", "PR", "PL", "PK", "Pg", "Pr", "Ps", "Pa", "PP", "PZ", "CM", "Qa", "<NO>", "<NO>", "ca", "cc", "ci", "cs", "cv", "cw"], c)
    }

    function r(e) {
        l.call(this, e), s || n(), this._keyText = a(this.key)
    }
    var s, c, l = i(610),
        d = i(17)
        .getText,
        u = i(56)
        .inherits,
        p = "%%%";
    u(r, l), r.prototype.getKeyText = function() {
        return this._keyText
    }, r.prototype.getCriterion = function() {
        var e = window.gui.playerData.characters.mainCharacter.getCharacteristicFromCriterionKey(this.key);
        return null === e ? (console.error("unknown criterion key: " + this.key), 0) : e
    }, e.exports = r
}
