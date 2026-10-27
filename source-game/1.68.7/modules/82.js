function(e, t) {
    ! function() {
        "use strict";
        var e = Element.prototype;
        "closest" in e || (e.closest = function(e) {
            for (var t = this; t;) {
                if (t.matches(e)) return t;
                t = t.parentElement
            }
            return null
        })
    }()
}
