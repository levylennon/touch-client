function(e, t) {
    t.isEmptyObject = function(e) {
        var t;
        for (t in e) return !1;
        return !0
    }, t.getOwnProperties = function(e) {
        var t = [];
        if (e && "object" == typeof e)
            for (var i in e) e.hasOwnProperty(i) && t.push(i);
        return t
    }, t.shallowCopyProperties = function(e, t, i) {
        if (e && "object" == typeof e && t && "object" == typeof t && Array.isArray(i))
            for (var n = 0; n < i.length; n++) {
                var o = i[n];
                t[o] = e[o]
            }
    }, t.shallowCopyArray = function(e) {
        return e.slice()
    }, t.formatUrlToCssUrl = function(e) {
        return 'url("' + e + '")'
    }
}
