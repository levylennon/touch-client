function(e, t, i) {
    var n = i(13),
        o = i(12),
        a = {};
    t.loadMissingTemplatesInfo = function() {
        o.loadJson(n.MISSING_ANIM_PATH, function(e) {
            for (var t = 0; t < e.length; t++) a[e[t]] = !0
        })
    }, t.isMissingTemplates = function(e) {
        return a[e] || !1
    }
}
