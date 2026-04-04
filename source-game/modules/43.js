function(e, t) {
    "use strict";

    function i(e) {
        var t = e.getAttribute("id");
        return null !== t && "" !== t ? t.match(/(?:^\d|:)/) ? '[id="' + t + '"]' : "#" + t : null
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getID = i
}
