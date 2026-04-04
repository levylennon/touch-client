function(e, t, i) {
    function n() {
        d.call(this, "div", {
            className: "dropDown",
            hidden: !0
        });
        var e = this,
            t = this.createChild("div", {
                className: "dropDrownOverlay"
            });
        l(t), t.on("tap", function() {
            e.close()
        }), this.entryContainer = this.createChild("div", {
            className: "entryContainer"
        }), this.scroller = this.entryContainer.appendChild(new c({
            className: "entryList"
        }, {
            showHintArrows: !0
        })), this.entryList = this.scroller.content, this._isOpen = !1, this.clearContent(), window.gui.on("disconnect", function() {
            e.clearContent(), e.close()
        })
    }

    function o() {
        var e = this.dropDown,
            t = this.action;
        e.close(), e._selectionFn(t.value, t.index)
    }
    i(915);
    var a = i(86),
        r = i(54)
        .dimensions,
        s = i(56)
        .inherits,
        c = i(453),
        l = i(63),
        d = i(72),
        u = i(66),
        p = 30,
        h = 15;
    s(n, d), e.exports = n, n.prototype.setupDropDown = function(e, t, i, n) {
        var o = u(e.rootElement);
        return e === this._parentElt && o.left === this._parentRect.left && o.top === this._parentRect.top ? this.open(i) : (this._updateContent(t, n, e, o), void this._firstOpen(i))
    }, n.prototype.clearContent = function() {
        this.entryList.clearContent(), this._parentElt = null, this._parentRect = null, this._selectionFn = null, this._entries = [], this._selectedIndex = -1
    }, n.prototype._updateContent = function(e, t, i, n) {
        this.clearContent();
        for (var o = 0, a = e.length; o < a; o++) {
            var r = e[o];
            if (!r.hidden) {
                var s = {
                    index: o,
                    value: r.value
                };
                r.disabled && (s.disabled = !0), this._addEntry(r.text, s)
            }
        }
        this._entries = this.entryList.getChildren(), this._parentElt = i, this._parentRect = n, this._selectionFn = t
    }, n.prototype.select = function(e) {
        e >= this._entries.length || (this._selectedIndex !== -1 && this._entries[this._selectedIndex].delClassNames("ticked"), this._selectedIndex = e, this._entries[e].addClassNames("ticked"))
    }, n.prototype.close = function() {
        this._isOpen && (this.hide(), this._isOpen = !1)
    }, n.prototype._firstOpen = function(e) {
        this.setStyle("opacity", 0), this.show(), this._refreshPositionAndSize(), this.open(e)
    }, n.prototype.open = function(e) {
        this.show(), void 0 !== e && (this.select(e), this._scrollToEntryIndex(e)), this._isOpen = !0, this.setStyle("opacity", 1)
    }, n.prototype._scrollToEntryIndex = function(e) {
        return e < 0 || e >= this._entries.length ? console.warn("Invalid dropdown index", e) : void this.scroller.scrollToElement(this._entries[e], 0)
    }, n.prototype._refreshPositionAndSize = function() {
        var e = this._parentRect,
            t = e.left,
            i = e.width - p,
            n = e.bottom + 1,
            o = r.screenHeight - h - n,
            a = u(this.entryList.rootElement);
        if (o < a.height && e.top > .6 * r.screenHeight) {
            var s = e.top - 5;
            o = Math.min(a.height, s - h), n = s - o
        }
        this.entryContainer.setStyles({
            left: t + "px",
            top: n + "px",
            minWidth: i + "px"
        }), this.scroller.setStyle("max-height", o + "px"), this.scroller.refresh()
    }, n.prototype._addEntry = function(e, t) {
        var i = this.entryList.appendChild(new a({
            text: e,
            className: "dropDownEntry"
        }));
        return t.disabled ? void i.addClassNames("disabled") : (i.on("tap", o), i.dropDown = this, void(i.action = t))
    }
}
