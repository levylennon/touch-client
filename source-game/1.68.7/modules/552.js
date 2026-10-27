function(e, t, i) {
    function n() {
        l = new a;
        for (var e = 0; e < s.length; e++) c.push(new r(s[e], l))
    }

    function o() {
        c.forEach(function(e) {
            e.terminate()
        }), c = [], l = null
    }
    var a = i(553),
        r = i(554),
        s = [i(555), i(558), i(566)],
        c = [],
        l = null;
    t.initialize = function() {
        window.gui.on("connected", n), window.gui.on("disconnect", o)
    }
}
