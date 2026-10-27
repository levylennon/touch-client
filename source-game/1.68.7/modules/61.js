function(e, t, i) {
    var n = i(16),
        o = i(14),
        a = o();
    t.getItem = function(e) {
        return a.localStorage.getItem(n.getEnvName() + e)
    }, t.setItem = function(e, t) {
        return a.localStorage.setItem(n.getEnvName() + e, t)
    }, t.removeItem = function(e) {
        return a.localStorage.removeItem(n.getEnvName() + e)
    }
}
