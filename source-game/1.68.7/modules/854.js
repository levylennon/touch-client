function(e, t, i) {
    function n() {
        a.call(this), this._currentSelection = null;
        var e = this;
        this._onSelected = function() {
            e._selectionChanged(this, !0)
        }, this._onUnselected = function() {
            e._selectionChanged(this, !1)
        }
    }
    var o = i(56),
        a = i(59),
        r = {};
    o.inherits(n, a), t.ExclusiveSelector = n, n.prototype.register = function(e) {
        return "function" != typeof e.unselect ? console.error(new Error("ExclusiveSelector.register: target does not have an unselect method")) : e.listeners("selected")
            .indexOf(this._onSelected) !== -1 ? console.error(new Error("Dupe call to ExclusiveSelector.register")) : (e.on("selected", this._onSelected), void e.on("unselected", this._onUnselected))
    }, n.prototype.unregister = function(e) {
        return e.listeners("selected")
            .indexOf(this._onSelected) === -1 ? console.error(new Error("ExclusiveSelector extra unregister")) : (e.removeListener("selected", this._onSelected), void e.removeListener("unselected", this._onUnselected))
    }, n.prototype._selectionChanged = function(e, t) {
        if (t) {
            if (this._currentSelection) {
                if (e === this._currentSelection) return;
                this._currentSelection.unselect()
            }
            this._currentSelection = e
        } else e === this._currentSelection && (this._currentSelection = null);
        this.emit("selectionChanged", this._currentSelection)
    }, t.getExclusiveSelectorByGroup = function(e) {
        if (e || (e = "default"), e in r) return r[e];
        var t = new n;
        return r[e] = t, t
    }
}
