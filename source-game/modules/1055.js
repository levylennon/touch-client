function(e, t, i) {
    function n(e, t) {
        a.call(this, e, t), this.addClassNames("SingleSelectionList"), this.currentSelected = null
    }
    var o = i(56)
        .inherits,
        a = i(1054);
    o(n, a), e.exports = n, n.prototype.removeItem = function(e) {
        var t = this.getItem(e);
        t && (this.currentSelected = null), a.prototype.removeItem.call(this, e)
    }, n.prototype.selectItem = function(e, t) {
        this.currentSelected && this.deselectItem(this.currentSelected.getWuiName(), {
            noSound: !0
        }), a.prototype.selectItem.call(this, e, t);
        var i = this.getItem(e);
        i && (this.currentSelected = i)
    }, n.prototype.deselectItem = function(e, t) {
        var i = this.getItem(e);
        i && i.isSelected && (this.currentSelected = null, a.prototype.deselectItem.call(this, e, t))
    }, n.prototype.deselectAll = function() {
        this.currentSelected && this.deselectItem(this.currentSelected.getWuiName(), {
            noSound: !0
        })
    }, n.prototype._tapHandler = function() {
        var e = this.myList,
            t = this.getWuiName(),
            i = e.currentSelected;
        i ? i === this ? (i.tappedOnMe = !0, e.options.disableSelectionToggle || e.deselectItem(i.getWuiName(), {
            noSound: !0
        }), i.tappedOnMe = !1) : (e.deselectItem(e.currentSelected.getWuiName(), {
            noSound: !0
        }), e.selectItem(t)) : e.selectItem(t)
    }
}
