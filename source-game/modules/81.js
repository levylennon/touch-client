function(e, t) {
    ! function() {
        "use strict";
        var e = Element.prototype,
            t = e.matches = e.matches || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector,
            i = "matches" in e && t.call(document.createElement("a"), "a");
        i || (e.matches = function(e) {
            var i = Array.prototype.indexOf,
                n = this.parentNode;
            return n || (n = document.createDocumentFragment(), n.appendChild(this)), t ? t.call(this, e) : i.call(n.querySelectorAll(e), this) > -1
        })
    }()
}
