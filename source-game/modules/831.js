function(e, t) {
    t.parseMonsterId = function(e) {
        if (!e) return null;
        var t = e.match(/(.+)?\$monster([0-9]*)/);
        if (t && t[2]) {
            var i = parseInt(t[2], 10);
            if (!isNaN(i)) return i
        }
        return null
    }
}
