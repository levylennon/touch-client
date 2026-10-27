function(e, t, i) {
    function n(e, t) {
        this.parent = e, this.options = t || {}, this.frame = null, this.text = null
    }
    i(768);
    var o = i(453);
    e.exports = n, n.prototype.setText = function(e) {
        return e ? (this.frame || (this.frame = this.parent.createChild("div", {
            className: "placeholderFrame"
        }), this.options.headerElement && this.frame.addClassNames("withHeader"), this.text = this.frame.createChild("div", {
            className: "placeholderText"
        })), this.options.noHeight || this._computeHeight(), this.text.setHtml(e), void this.frame.show()) : this.frame && this.frame.hide()
    }, n.prototype._computeHeight = function() {
        var e = this.parent;
        e instanceof o && (e = e.getParent());
        var t = e.rootElement.offsetHeight;
        0 === t && console.warn(new Error("Placeholder computing a 0 height")), this.options.headerElement && (t -= this.options.headerElement.rootElement.offsetHeight), this.frame.setStyle("minHeight", t + "px")
    }, n.prototype.toggleDisplay = function(e) {
        this.frame && this.frame.toggleDisplay(Boolean(e))
    }, n.prototype.refresh = function() {
        this.frame && this.frame.isVisible() && this.setText(this.text.getText())
    }
}
