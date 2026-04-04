function(e, t, i) {
    function n(e, t, i, n) {
        n = n || {}, o.call(this, {
            className: "filterTagButton",
            tooltip: n.tooltip
        }, t), this.tapHandler = t, this.filterName = i;
        var a = this.createChild("div", {
            className: "btnBackground"
        });
        n.withIcon && (a.createChild("div", {
            className: "btnIcon"
        }), a.addClassNames("withIcon")), this._labelElement = a.createChild("div", {
            className: "btnText",
            text: e
        }), a.createChild("div", {
            className: "cross",
            text: "x"
        })
    }
    i(942);
    var o = i(86),
        a = i(56)
        .inherits;
    a(n, o), e.exports = n, n.prototype.setLabel = function(e) {
        this._labelElement.setText(e)
    }
}
