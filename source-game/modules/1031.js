function(e, t, i) {
    var n = i(16),
        o = i(130),
        a = null,
        r = null,
        s = null;
    e.exports.getAreasWithHouseOrPaddock = function(e) {
        var t = "paddock" === e;
        if (a) return t ? r : a;
        var i = window.gui.databases.Areas;
        r = [], a = [];
        for (var o in i) {
            var s = i[o];
            if (s.containPaddocks || s.containHouses) {
                var c = {
                    id: o,
                    nameId: s.nameId
                };
                s.containPaddocks && r.push(c), s.containHouses && a.push(c)
            }
        }
        return n.sortObjectInArray(r, "nameId"), n.sortObjectInArray(a, "nameId"), t ? r : a
    }, e.exports.getSkillsAvailableInHouse = function(e) {
        return s ? e(null, s) : void o.getAllDataMap("Skills", function(t, i) {
            if (t) return e(t);
            s = [];
            for (var o in i) {
                var a = i[o];
                a.availableInHouse && s.push({
                    id: a.id,
                    nameId: a.nameId
                })
            }
            return n.sortObjectInArray(s, "nameId"), e(null, s)
        })
    }
}
