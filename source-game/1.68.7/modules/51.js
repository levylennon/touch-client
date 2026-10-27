function(e, t, i) {
    "use strict";

    function n(e) {
        for (var t = [], i = e;
            (0, o.isElement)(i);) t.push(i), i = i.parentNode;
        return t
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getParents = n;
    var o = i(48)
}
