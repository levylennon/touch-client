function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            return "string" == typeof e ? document.createTextNode(e) : e
        }

        function t(t) {
            var i, n, o;
            if (t && (o = t.length), !o) throw new Error("No node was specified (DOM Exception 8)");
            if (1 === o) return e(t[0]);
            for (i = document.createDocumentFragment(), n = 0; n < o; n++) i.appendChild(e(t[n]));
            return i
        }
        var i = Element.prototype,
            n = i.after && i.append && i.before && i.prepend && i.remove && i.replace;
        n || (i.prepend = function() {
            this.insertBefore(t(arguments), this.firstChild)
        }, i.append = function() {
            this.appendChild(t(arguments))
        }, i.before = function() {
            var e = this.parentNode;
            e && e.insertBefore(t(arguments), this)
        }, i.after = function() {
            var e = this.parentNode;
            e && e.insertBefore(t(arguments), this.nextSibling)
        }, i.replace = function() {
            var e = this.parentNode;
            e && e.replaceChild(t(arguments), this)
        }, i.remove = function() {
            var e = this.parentNode;
            e && e.removeChild(this)
        })
    }()
}
