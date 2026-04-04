function(e, t) {
    "use strict";

    function i(e, t) {
        if (!Boolean(t)) return !1;
        var i = e.ownerDocument.querySelectorAll(t);
        return 1 === i.length && i[0] === e
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isUnique = i
}
