function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            if ("string" != typeof e) throw new TypeError('Failed to construct "CustomEvent": An event name must be provided.');
            var i = document.createEvent("CustomEvent"),
                n = {
                    bubbles: !1,
                    cancelable: !1,
                    detail: null
                };
            return t = t || n, i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
        }
        var t = "CustomEvent" in window && ("function" == typeof window.CustomEvent || window.CustomEvent.toString()
            .indexOf("CustomEventConstructor") > -1);
        t || (window.CustomEvent = e)
    }()
}
