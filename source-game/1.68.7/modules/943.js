function(e, t, i) {
    function n(e) {
        p.call(this, "div", {
            className: "searchBox"
        }), e = e || {}, this.isLiveSearch = Boolean(e.isLiveSearch), this.maxLength = e.maxLength || 50, this._createContent(e.label), e.placeholder && this.setPlaceholder(e.placeholder)
    }

    function o() {
        var e = this.mySearchBox;
        if (e.isLiveSearch) {
            var t = e.getValue();
            e.emit("search", t), e.cancelBtn.toggleDisplay(Boolean(t))
        } else e.cancelBtn.show()
    }

    function a() {
        var e = this.mySearchBox,
            t = e.getValue();
        return 0 === t.length ? r.call(e.cancelBtn) : !e.isLiveSearch && t.length < h ? u.showNotification(c("ui.common.searchFilterTooltip", h), e) : void(t !== e.lastEmittedValue && (e.lastEmittedValue = t, e.searchInput.blur(), e.emit("search", t)))
    }

    function r() {
        var e = this.mySearchBox;
        e.cancelBtn.hide(), e.clear(), e.searchInput.blur(), e.emit("search", "")
    }
    i(944);
    var s = i(86),
        c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(581),
        u = i(588),
        p = i(72),
        h = 2;
    l(n, p), e.exports = n, n.prototype.clear = function() {
        this.lastEmittedValue = null, this.searchInput.setValue(""), this.cancelBtn.hide()
    }, n.prototype.setValue = function(e) {
        this.searchInput.setValue(e), this.cancelBtn.toggleDisplay("string" == typeof e && "" !== e)
    }, n.prototype.getValue = function() {
        return this.searchInput.getValue()
            .trim()
    }, n.prototype.setPlaceholder = function(e) {
        this.searchInput.setPlaceholder(e)
    }, n.prototype._createContent = function(e) {
        e && this.createChild("div", {
            className: "label",
            text: e
        });
        var t = this.createChild("div", {
                className: "inputFrame"
            }),
            i = this.searchInput = t.appendChild(new d({
                attr: {
                    maxLength: this.maxLength,
                    type: "search"
                }
            }));
        i.mySearchBox = this, i.on("change", o), i.on("validate", a);
        var n = this.cancelBtn = t.appendChild(new s({
            className: "cancelBtn",
            addIcon: !0,
            hidden: !0
        }, r));
        if (n.mySearchBox = this, !this.isLiveSearch) {
            var c = this.appendChild(new s({
                className: "searchBtn",
                addIcon: !0
            }, a));
            c.mySearchBox = this
        }
    }, n.prototype.showAsSearching = function(e) {
        this.toggleClassName("spinner", e), this.searchInput.setEnable(!e)
    }, n.prototype.setEnable = function(e) {
        this.searchInput.setEnable(e)
    }, n.prototype.getSearchMinLen = function() {
        return h
    }
}
