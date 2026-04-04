function(e, t, i) {
    function n(e) {
        l.call(this), this._init(e)
    }

    function o(e) {
        var t = this.myDrilldownList;
        e.isSelected = !1;
        var i = t.currentDeployedItems.indexOf(e) !== -1;
        t.deployItem(e, !i)
    }

    function a() {
        if (!this.data.unclickable) {
            var e = this.myTopItem.myDrilldownList;
            return this !== e.currentSubitem || e.noBreadcrumb ? void e._selectSubitem(this) : e.toggleBreadcrumb(!0)
        }
    }

    function r() {
        var e = this.myDrilldownList;
        e.toggleBreadcrumb(!1)
    }

    function s(e, t) {
        e.toggleClassName("selected", t), e.subitemList.toggleDisplay(t)
    }
    i(1061);
    var c = i(86),
        l = i(59)
        .EventEmitter,
        d = i(56)
        .inherits,
        u = i(1052),
        p = i(72);
    d(n, l), e.exports = n, n.prototype._init = function(e) {
        e = e || {}, this.parentElt = null, this.elt = null, this.items = [], this.infos = [], this.breadcrumb = null, this.list = null, this.currentDeployedItems = [], this.currentSubitem = null, this.isFilterOn = !1, this.itemFilterFunc = null, this.subitemFilterFunc = null, this.singleItem = null, this.singleSubitem = null, this.emitOnSelectItem = Boolean(e.emitOnSelectItem), this.allowMultipleOpen = Boolean(e.allowMultipleOpen), this.noBreadcrumb = Boolean(e.noBreadcrumb)
    }, n.prototype.clearContent = function() {
        this.elt && (this.elt.clearContent(), this._init())
    }, n.prototype.reset = function() {
        if (this.elt) {
            if (!this.allowMultipleOpen) {
                var e = this.currentDeployedItems[0];
                e && this.deployItem(e, !1)
            }
            this.refresh(!0), this._selectSubitem(null), this.removeFilter()
        }
    }, n.prototype.setBreadcrumbText = function(e) {
        this.breadcrumbText.setText(e)
    }, n.prototype.inBreadcrumbMode = function() {
        return this.breadcrumb.isVisible()
    }, n.prototype.toggleBreadcrumb = function(e) {
        this.elt && this.breadcrumb && this.list && (this.elt.toggleClassName("onlyBreadcrumb", e), this.breadcrumb.toggleDisplay(e), this.list.toggleDisplay(!e), this.emit("resized"), e || (this.list.refresh(), this.currentSubitem && this.list.showElement(this.currentSubitem)))
    }, n.prototype.setSubitemsGetter = function(e) {
        this.getSubitemsFunc = e
    }, n.prototype.colorItems = function() {
        for (var e = !0, t = 0; t < this.items.length; t++) {
            var i = this.list.getItem(t);
            i && i.isVisible() && (i.toggleClassName("odd", e), e = !e)
        }
    }, n.prototype.getDom = function(e) {
        if (this.elt) return this.elt;
        if (!this.items.length) return console.warn("Empty DrillDownList");
        this.parentElt = e;
        var t = this.elt = e.createChild("div", {
                className: "drillDownList"
            }),
            i = this.breadcrumb = t.appendChild(new c({
                className: "breadcrumb",
                hidden: !0,
                addIcon: "before",
                text: "_"
            }, r));
        i.myDrilldownList = this, this.breadcrumbText = i.getChildren()[1], this.list = t.appendChild(new u({
            className: "tree"
        })), this.list.myDrilldownList = this;
        for (var n = 0; n < this.items.length; n++) {
            var a = new p("div", {
                className: "sublistHeader"
            });
            a.createChild("div", {
                className: "arrow"
            }), a.createChild("div", {
                className: "text",
                text: this.items[n]
            });
            var s = this.list.addItem({
                id: n,
                element: a
            }, {
                noRefresh: !0
            });
            s.info = this.infos[n], s.myDrilldownList = this
        }
        return this.colorItems(), this.list.setStyle("max-height", e.rootElement.clientHeight + "px"), this.list.refresh(), this.list.on("selected", o), this.elt = t, t
    }, n.prototype.createSubitemList = function(e) {
        for (var t = this.getSubitemsFunc(e), i = e.subitemList = e.appendChild(new p("div", {
                className: "subitemList",
                hidden: !0
            })), n = 0; n < t.length; n++) {
            var o = t[n],
                r = void 0 !== o.id ? o.id : n,
                s = i.appendChild(new c({
                    className: "subitem",
                    name: r,
                    scaleOnPress: !o.unclickable
                }, a));
            o.beforeText && s.appendChild(o.beforeText), s.createChild("div", {
                text: o.text,
                className: "text"
            }), s.data = o, s.myTopItem = e
        }
    }, n.prototype.addItem = function(e, t) {
        this.items.push(e), this.infos.push(void 0 === t ? this.infos.length : t)
    }, n.prototype.getItemCount = function() {
        return this.list.getItemCount()
    }, n.prototype.getItem = function(e) {
        return this.items[e]
    }, n.prototype.getItemElt = function(e) {
        return this.list.getItem(e)
    }, n.prototype.getSubitemBookmark = function(e) {
        return e ? [e.myTopItem.id, e.getWuiName()] : null
    }, n.prototype.getSubitemByBookmark = function(e) {
        if (!e) return null;
        var t = this.list.getItem(e[0]);
        return t ? (t.subitemList || this.createSubitemList(t), t.subitemList.getChild(e[1])) : null
    }, n.prototype.selectAndShowSubitem = function(e) {
        this._selectSubitem(e, !1, !0), this.list.isVisible() && (this.deployItem(e.myTopItem, !0), this.list.showElement(e))
    }, n.prototype.collapseAll = function() {
        this.currentSubitem && this.deselectSubitem();
        for (var e = 0; e < this.currentDeployedItems.length; e++) {
            var t = this.currentDeployedItems[e];
            this.deployItem(t, !1)
        }
    }, n.prototype.deselectSubitem = function() {
        this._selectSubitem(null)
    }, n.prototype._selectSubitem = function(e, t, i) {
        var n = this.currentSubitem;
        return n && n.delClassNames("selected"), this.currentSubitem = e, e ? (this.setBreadcrumbText(this.items[e.myTopItem.id] + " > " + e.data.text), e.addClassNames("selected"), void(i || this.emit("subitemSelected", e, t))) : this.toggleBreadcrumb(!1)
    }, n.prototype.getSelectedSubitem = function() {
        return this.currentSubitem
    }, n.prototype.setPlaceholder = function(e) {
        this.list.setPlaceholderText(e)
    }, n.prototype.refresh = function(e) {
        this.colorItems(), this.list.refresh(), e && this.list.goToTop()
    }, n.prototype.setFilter = function(e, t) {
        this.itemFilterFunc = e, this.subitemFilterFunc = t
    }, n.prototype._filterOneItemSubitems = function(e) {
        if (!this.isFilterOn) return this._resetFilterOnSubitems(e);
        for (var t, i = 0, n = e.subitemList.getChildren(), o = 0; o < n.length; o++) {
            var a = n[o];
            this.subitemFilterFunc(e, o, a) ? (i++, 1 === i && (t = a), a.show()) : a.hide()
        }
        return 1 === i && (this.singleSubitem = t), i
    }, n.prototype.isItemDeployed = function(e) {
        return e.subitemList && e.subitemList.isVisible()
    }, n.prototype.deployItem = function(e, t) {
        if (t === this.isItemDeployed(e)) return 0;
        if (t && !e.subitemList && this.createSubitemList(e), !this.allowMultipleOpen) {
            var i = this.currentDeployedItems[0];
            i && e !== i && (s(i, !1), this.currentDeployedItems.pop())
        }
        s(e, t);
        var n = this.currentDeployedItems.indexOf(e);
        t && n === -1 ? this.currentDeployedItems.push(e) : t || n === -1 || this.currentDeployedItems.splice(n, 1);
        var o = 0;
        return t && (this.subitemFilterFunc ? o = this._filterOneItemSubitems(e) : (o = e.subitemList.getChildCount(), 1 === o && (this.singleSubitem = e.subitemList.getChildren()[0]))), this.list.refresh(), this.list.showElement(e), this.emitOnSelectItem && this.emit("itemDeployed", e), o
    }, n.prototype.refreshFilter = function() {
        this.isFilterOn = !0;
        for (var e, t = 0, i = this.list.getItems(), n = i.length - 1; n >= 0; n--) {
            var o = i[n];
            this.itemFilterFunc(o) ? (t++, 1 === t && (e = o), this.isItemDeployed(o) && this.subitemFilterFunc && this._filterOneItemSubitems(o), o.show()) : o.hide()
        }
        var a = 0;
        return 1 === t && (this.singleItem = e, a = this.deployItem(e, !0), 1 === a && this._selectSubitem(this.singleSubitem, !0)), this.refresh(), {
            itemCount: t,
            subitemCount: a
        }
    }, n.prototype._resetFilterOnSubitems = function(e) {
        if (e.subitemList)
            for (var t = e.subitemList.getChildren(), i = 0; i < t.length; i++) t[i].show()
    }, n.prototype.removeFilter = function() {
        if (this.isFilterOn) {
            this.isFilterOn = !1;
            for (var e = this.list.getItems(), t = e.length - 1; t >= 0; t--) {
                var i = e[t];
                i.show(), this._resetFilterOnSubitems(i)
            }
            this.refresh(), this.currentSubitem && (this.list.showElement(this.currentSubitem), this.emit("subitemSelected", this.currentSubitem, !0))
        }
    }
}
