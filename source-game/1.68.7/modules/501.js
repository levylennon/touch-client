function(e, t, i) {
    function n(e) {
        a.getAllDataMap("UniqueDrops", function(t, i) {
            return t ? e(t) : void a.getDataArray("Items", Object.keys(i), function(t, n) {
                if (t) return e(t);
                l = [];
                for (var o = 0; o < n.length; o++) {
                    var a = n[o],
                        d = i[a.id].drops;
                    if (a.typeId === r.types.cosmeticLegendaryWeapon)
                        for (var u = 0; u < d.length; u++) {
                            var p = d[u];
                            l.push({
                                itemName: a.nameId,
                                criterions: p.criterion
                            })
                        }
                }
                return c = i, s = !0, e()
            })
        })
    }
    var o = i(18),
        a = i(130),
        r = i(470),
        s = !1,
        c = {},
        l = [];
    t.getUniqueDrops = function(e) {
        return s ? e(null, c) : n(function(t) {
            return e(t, c)
        })
    }, t.getLWUniqueDrops = function(e) {
        return s ? e(null, l) : n(function(t) {
            return e(t, l)
        })
    }, t.getLWUniqueDropsTextBySubArea = function(e, i) {
        t.getLWUniqueDrops(function(t, n) {
            if (t) return i(t);
            var a = "";
            return o.someSeries(n, function(t, i) {
                return window.gui.criterionManager.evaluateCriterion(t.criterions, {
                    subAreaId: e
                }, function(e) {
                    return e && (a = t.itemName), i(null, e)
                })
            }, function(e) {
                return e && console.error(e), i(null, a)
            })
        })
    }, t.initialize = function() {
        s = !1, c = {}, l = []
    }
}
