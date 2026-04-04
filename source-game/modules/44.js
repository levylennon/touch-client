function(e, t) {
    "use strict";

    function i(e) {
        if (!e.hasAttribute("class")) return [];
        try {
            var t = Array.prototype.slice.call(e.classList);
            return t.filter(function(e) {
                return /^[a-z_-][a-z\d_-]*$/i.test(e) ? e : null
            })
        } catch (i) {
            var n = e.getAttribute("class");
            return n = n.trim()
                .replace(/\s+/g, " "), n.split(" ")
        }
    }

    function n(e) {
        var t = i(e)
            .filter(Boolean);
        return t.map(function(e) {
            return "." + e
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getClasses = i, t.getClassSelectors = n
}
