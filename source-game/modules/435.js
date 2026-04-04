function(e, t, i) {
    function n(e) {
        a.call(this, "canvas", e), this.addClassNames("Canvas"), this.style = this.rootElement.style
    }
    i(436);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n, n.prototype.getContext = function(e) {
        return e = e || "2d", this.rootElement.getContext(e)
    }, Object.defineProperty(n.prototype, "width", {
        get: function() {
            return this.rootElement && this.rootElement.width ? this.rootElement.width : 0
        },
        set: function(e) {
            this.rootElement && (this.rootElement.width = e)
        }
    }), Object.defineProperty(n.prototype, "height", {
        get: function() {
            return this.rootElement && this.rootElement.height ? this.rootElement.height : 0
        },
        set: function(e) {
            this.rootElement && (this.rootElement.height = e)
        }
    })
}
