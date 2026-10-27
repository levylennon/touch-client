function(e, t) {
    "use strict";

    function i(e, t) {
        this._getString = function() {
            return e.getAttribute(t) || ""
        }, this._setString = function(i) {
            e.setAttribute(t, i)
        }, n(this, o(this))
    }

    function n(e, t) {
        for (var i = t.length, n = 0; n < i; n++) e[n] = t[n];
        delete e[i]
    }

    function o(e) {
        var t = e._getString();
        return t && "" !== t ? t.split(/\s+/) : []
    }

    function a(e) {
        if ("" === e || void 0 === e) throw new Error("An invalid or illegal string was specified (DOM Exception 12)");
        if (/\s+/.test(e)) throw new Error("InvalidCharacterError: String contains an invalid character (DOM Exception 5)")
    }
    i.prototype = {
        add: function(e) {
            for (var t, i = 0, r = arguments.length, s = o(this), c = !1; i < r; i++) t = arguments[i], a(t), s.indexOf(t) < 0 && (s.push(t), c = !0);
            c && (this._setString(s.join(" ")
                .trim()), n(this, s))
        },
        contains: function(e) {
            return a(e), o(this)
                .indexOf(e) > -1
        },
        item: function(e) {
            return o(this)[e] || null
        },
        get length() {
            return o(this)
                .length
        },
        remove: function(e) {
            for (var t, i, r = 0, s = arguments.length, c = o(this), l = !1; r < s; r++)
                for (i = arguments[r], a(i);
                    (t = c.indexOf(i)) > -1;) c.splice(t, 1), l = !0;
            l && (this._setString(c.join(" ")
                .trim()), n(this, c))
        },
        toggle: function(e, t) {
            var i = this.contains(e),
                n = i ? t !== !0 && "remove" : t !== !1 && "add";
            return n && this[n](e), "boolean" == typeof t ? t : !i
        },
        toString: function() {
            return this._getString()
        }
    }, e.exports = i
}
