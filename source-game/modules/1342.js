function(e, t, i) {
    function n(e) {
        a.call(this, "div", {
            className: "itemDetailsBox"
        }), this._createDom(e)
    }
    i(1341);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n, n.prototype._createDom = function(e) {
        var t = this.createChild("div", {
            className: "header"
        });
        t.createChild("div", {
            className: "title",
            text: e
        }), t.createChild("div", {
            className: "titleCorner"
        }), this._content = this.createChild("div", {
            className: "content"
        })
    }, n.prototype.clearContent = function() {
        this._content.clearContent()
    }, n.prototype.addRow = function(e, t) {
        t = t || [], t.push("row"), this._content.createChild("div", {
            className: t,
            text: e
        })
    }, n.prototype.addRowWuidom = function(e, t) {
        t = t || [], t.push("row");
        var i = this._content.appendChild(e);
        i.addClassNames(t)
    }, n.prototype.hasRow = function() {
        return this._content.getChildCount() > 0
    }
}
