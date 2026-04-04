function(e, t, i) {
    function n(e) {
        a.call(this, "div", {
            className: "PaymentSlotsKamas"
        });
        var t = this;
        this._MAX_SLOTS = 5, this._currentKama = 0, this._currentItems = [], this._currentPage = 1, this._readOnly = !1, this._paymentType = e;
        var i = this.createChild("div", {
            className: "itemsContent"
        });
        this._previousBtn = i.appendChild(new d({
            className: ["previousBtn", "arrow"]
        }, function() {
            t._currentPage -= 1, t._updateItems()
        }));
        var n = i.createChild("div", {
            className: "itemsSlotsAndLabel"
        });
        e === u.PAYMENT_ON_SUCCESS_ONLY && n.createChild("div", {
            className: "itemsLabel",
            text: l("ui.craft.additionalPayment")
        });
        for (var o = this._itemsSlots = n.createChild("div", {
                className: "itemsSlots"
            }), p = 0; p < this._MAX_SLOTS; p += 1) {
            var h = o.appendChild(new c({
                noDoubleTap: !0
            }));
            h.itemUI = {
                width: 40,
                height: 40,
                onDragClassName: "slot"
            }, r.setDraggable(h, h.itemUI, "craftPayment", {
                slot: h
            }), r.disableDrag(h)
        }
        this._nextBtn = i.appendChild(new d({
            className: ["nextBtn", "arrow"]
        }, function() {
            t._currentPage += 1, t._updateItems()
        }));
        var f = this.createChild("div", {
            className: "pagesContent"
        });
        this._pagesCount = f.createChild("div", {
            className: "pagesCount"
        }), this._updatePagesCount();
        var b = this.createChild("div", {
            className: "kamaContent"
        });
        b.createChild("div", {
            className: "kamaLabel",
            text: l("ui.common.kamas")
        });
        var m = this._numberInput = b.appendChild(new s({
            minValue: 0,
            title: l("ui.common.kamas")
        }));
        m.on("focus", function() {
            m.maxValue = window.gui.playerData.inventory.kamas
        }), m.on("change", function(e) {
            t._currentKama !== e && (t._currentKama = e, t.emit("kamaChange", e))
        })
    }
    i(1293);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(418),
        s = i(423),
        c = i(871),
        l = i(17)
        .getText,
        d = i(86),
        u = i(1294);
    o(n, a), e.exports = n, n.prototype.setKama = function(e) {
        this._numberInput.setValue(e), this._numberInput.blur()
    }, n.prototype.setReadonly = function(e) {
        this._numberInput.setReadonly(e), this._itemsSlots.toggleClassName("disable", e), this._readOnly = e
    }, n.prototype.selectSlots = function(e) {
        this._readOnly && (e = !1);
        for (var t = this._itemsSlots.getChildren(), i = 0, n = t.length; i < n; i += 1) t[i].toggleClassName("selected", e)
    }, n.prototype._getPageMax = function() {
        return parseInt(this._currentItems.length / this._MAX_SLOTS, 10) + 1
    }, n.prototype._updatePagesCount = function() {
        var e = this._getPageMax();
        this._currentPage > e && (this._currentPage = e), this._currentPage < 1 && (this._currentPage = 1);
        var t = this._currentPage;
        this._pagesCount.setText(t + "/" + e), t >= e ? this._nextBtn.disable() : this._nextBtn.enable(), t <= 1 ? this._previousBtn.disable() : this._previousBtn.enable()
    }, n.prototype._getItemIndex = function(e) {
        for (var t = this._currentItems, i = 0, n = t.length; i < n; i += 1) {
            var o = t[i];
            if (o) {
                var a = o.objectUID;
                if (a === e) return i
            }
        }
        return null
    }, n.prototype.addItem = function(e) {
        this._currentItems.push(e), this._updateItems()
    }, n.prototype.modifyItem = function(e) {
        var t = this._getItemIndex(e.objectUID);
        null !== t && (this._currentItems[t] = e, this._currentPage = parseInt(t / this._MAX_SLOTS, 10) + 1, this._updateItems())
    }, n.prototype.removeItem = function(e) {
        var t = this._getItemIndex(e);
        null !== t && (this._currentItems.splice(t, 1), this._updateItems())
    }, n.prototype._updateItems = function() {
        this._updatePagesCount();
        for (var e = this._itemsSlots.getChildren(), t = this._currentPage - 1, i = 0, n = e.length; i < n; i += 1) {
            var o = i + t * this._MAX_SLOTS,
                a = e[i],
                s = this._currentItems[o];
            s ? (a.setItem(s), a.itemUI.backgroundImage = a.getImage(), a.paymentType = this._paymentType, this._readOnly ? r.disableDrag(a) : r.enableDrag(a)) : (delete a.paymentType, a.unset(), r.disableDrag(a))
        }
    }, n.prototype.clearPayment = function() {
        this._currentKama = 0, this._currentPage = 1, this._numberInput.setValue(""), this._currentItems = [], this._updateItems()
    }, n.prototype.reset = function() {
        this._readOnly = !1, this.clearPayment()
    }
}
