function(e, t, i) {
    function n(e) {
        e = e || {}, a.call(this, document.createElementNS("http://www.w3.org/2000/svg", "svg")), this.addClassNames("Svg"), this.style = this.rootElement.style, e.attr && this.setAttributes(e.attr)
    }
    i(858);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n, n.prototype.newElement = function(e, t) {
        t = t || {};
        var i = t.parent ? t.parent : this,
            n = new a(document.createElementNS("http://www.w3.org/2000/svg", e));
        return t.attr && this.setAttributes(t.attr, n), i.appendChild(n)
    }, n.prototype.setAttributes = function(e, t) {
        t = t || this, t.rootElement && (e = e || {}, Object.keys(e)
            .forEach(function(i) {
                t.rootElement.setAttribute(i, e[i])
            }))
    }, Object.defineProperty(n.prototype, "width", {
        get: function() {
            return this.rootElement.width
        },
        set: function(e) {
            this.rootElement.width = e
        }
    }), Object.defineProperty(n.prototype, "height", {
        get: function() {
            return this.rootElement.height
        },
        set: function(e) {
            this.rootElement.height = e
        }
    })
}
