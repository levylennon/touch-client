function(e, t, i) {
    function n(e, t) {
        s.call(this, e), this.addClassNames("ListV2"), this.options = t || {}, this._initialize(), this.placeholder = null
    }
    var o = i(56)
        .inherits,
        a = i(767),
        r = i(91)
        .playUiSound,
        s = i(453),
        c = i(63);
    o(n, s), e.exports = n, n.prototype._initialize = function() {
        this.options.enableOdd && this.addClassNames("oddEnabled")
    }, n.prototype._createItem = function(e) {
        e = e || {};
        var t = e.id,
            i = e.element;
        if (!t && 0 !== t) return console.error("List: Invalid Id");
        var n = this.content.createChild("div", {
            name: t,
            className: "listItem"
        });
        return n.myList = this, n.id = t, n.data = e.data, "object" == typeof i ? n.appendChild(i) : n.setText(i), c(n), n.on("tap", this._tapHandler), n
    }, n.prototype.addItem = function(e, t) {
        t = t || {};
        var i = this._createItem(e);
        return t.noRefresh || this.refresh(), i
    }, n.prototype.addItems = function(e, t) {
        t = t || {};
        for (var i, n = 0; n < e.length; n += 1) i = e[n], this._createItem(i);
        return t.noRefresh || this.refresh(), this.getItems()
    }, n.prototype.removeItem = function(e) {
        var t = this.getItem(e);
        t && t.destroy()
    }, n.prototype.selectItem = function(e, t) {
        t = t || {};
        var i = this.getItem(e);
        i && (i.isSelected = !0, i.addClassNames("selected"), t.noEvent || this.emit("selected", i), t.noSound || r("GEN_BUTTON"), t.scrollToElement && this.scrollToElement(i))
    }, n.prototype.deselectItem = function(e, t) {
        t = t || {};
        var i = this.getItem(e);
        i && (i.isSelected = !1, i.delClassNames("selected"), t.noEvent || this.emit("deselected", i), t.noSound || r("GEN_BUTTON"))
    }, n.prototype.deselectAll = function() {
        for (var e = this.getItems(), t = 0; t < e.length; t += 1) {
            var i = e[t];
            i.isSelected && this.deselectItem(i.getWuiName(), {
                noSound: !0
            })
        }
    }, n.prototype.getItemCount = function() {
        return this.content.getChildCount()
    }, n.prototype.getItem = function(e) {
        return this.content.getChild(e)
    }, n.prototype.getItems = function() {
        return this.content.getChildren()
    }, n.prototype.getContentElement = function() {
        return this.content
    }, n.prototype.clearContent = function() {
        this.content.clearContent()
    }, n.prototype.setPlaceholderText = function(e) {
        this.placeholder || (this.placeholder = new a(this)), this.placeholder.setText(e)
    }, n.prototype._tapHandler = function() {
        var e = this.myList,
            t = this.getWuiName();
        return this.isSelected ? void(e.options.disableSelectionToggle || e.deselectItem(t)) : e.selectItem(t)
    }
}
