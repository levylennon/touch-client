function(e, t, i) {
    ! function() {
        "use strict";
        var e, t = document.createElement("x"),
            n = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
            o = function(e) {
                return "classList" in e && (!e.classList.toggle("a", !1) && !e.classList.contains("a"))
            };
        if (o(n) || (e = i(85), Object.defineProperty(Element.prototype, "classList", {
                get: function() {
                    function t() {}
                    return t.prototype = new e(this, "class"), new t
                }
            })), !o(t)) {
            e = i(85);
            var a = DOMTokenList.prototype,
                r = function(e) {
                    return function() {
                        var t, i = arguments.length;
                        for (t = 0; t < i; t++) e.call(this, arguments[t])
                    }
                };
            a.add = r(a.add), a.remove = r(a.remove), a.toggle = function(t, i) {
                return 1 in arguments && this.contains(t) === i ? i : e.prototype.toggle.call(this, t, i)
            }
        }
    }()
}
