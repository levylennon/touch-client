function(e, t) {
    function i() {
        var e = document.createElement("style");
        return e.appendChild(document.createTextNode("")), document.head.appendChild(e), e
    }

    function n(e, t, i, n) {
        "insertRule" in e ? e.insertRule(t + "{" + i + "}", n) : "addRule" in e && e.addRule(t, i, n)
    }

    function o() {
        this.styleTag = null
    }
    var a = /(\.*?[a-z0-9_-]+?)[ ]*{[ ]*(.*?\/?)[ ]*}/gi;
    e.exports = o, o.prototype.destroy = function() {
        this.styleTag && (document.head.removeChild(this.styleTag), this.styleTag = null)
    }, o.prototype.create = function(e, t) {
        this.styleTag || (this.styleTag = i());
        for (var o, r = this.styleTag.sheet, s = new RegExp(a); null !== (o = s.exec(e));) o.index === s.lastIndex && s.lastIndex++, t && ("body" === o[1] ? o[1] = t : o[1] = t + " " + o[1]), n(r, o[1], o[2], 0)
    }
}
