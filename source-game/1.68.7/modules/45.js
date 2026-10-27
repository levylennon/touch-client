function(e, t) {
    "use strict";

    function i(e, t, n, o, a, r, s) {
        if (r === s) return void e.push(n.slice(0, r)
            .join(""));
        for (var c = o; c <= a && a - c + 1 >= s - r; ++c) n[r] = t[c], i(e, t, n, c + 1, a, r + 1, s)
    }

    function n(e, t) {
        for (var n = [], o = e.length, a = [], r = 1; r <= t; ++r) i(n, e, a, 0, o - 1, 0, r);
        return n
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getCombinations = n
}
