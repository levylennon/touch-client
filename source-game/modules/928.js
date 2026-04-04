function(e, t, i) {
    function n(e) {
        var t = window.gui,
            i = this;
        r.call(this, "div", {
                className: "RoleplayBuffs"
            }), l(this, {
                isCollapsable: !0,
                title: b("ui.effects"),
                small: !0
            }), this._itemSlotMap = {}, this._timedBuffMap = {},
            this._createDom(), this._setupListeners(e), this.hide(), t.on("disconnect", function() {
                i._unloadTimedBuffsContent()
            })
    }

    function o(e) {
        return e.position === f.INVENTORY_POSITION_MUTATION || e.position === f.INVENTORY_POSITION_BOOST_FOOD || e.position === f.INVENTORY_POSITION_FIRST_BONUS || e.position === f.INVENTORY_POSITION_SECOND_BONUS || e.position === f.INVENTORY_POSITION_FIRST_MALUS || e.position === f.INVENTORY_POSITION_SECOND_MALUS || e.position === f.INVENTORY_POSITION_ROLEPLAY_BUFFER || e.position === f.INVENTORY_POSITION_FOLLOWER
    }
    i(929);
    var a = i(56)
        .inherits,
        r = i(72),
        s = i(871),
        c = i(930),
        l = i(570),
        d = i(32)
        .isEmptyObject,
        u = i(54)
        .dimensions,
        p = i(21),
        h = i(105),
        f = i(584),
        b = i(17)
        .getText;
    a(n, r), e.exports = n, n.prototype._setupListeners = function(e) {
        var t = this;
        window.gui.on("connected", function() {
            t.setStyle("left", ~~(u.mapWidth / 2) + u.mapLeft + "px"), t.setStyle("top", u.mapTop + "px")
        }), e.on("listUpdate", function(e) {
            t._unloadItemsContent();
            for (var i in e) t._addItem(e[i])
        }), e.on("unloaded", function() {
            t._unloadItemsContent()
        }), e.on("itemAdded", function(e) {
            t._addItem(e)
        }), e.on("itemsAdded", function(e) {
            for (var i in e) t._addItem(e[i])
        }), e.on("itemDeleted", function(e) {
            t._removeItem(e)
        }), e.on("itemsDeleted", function(e) {
            for (var i in e) t._removeItem(e[i])
        }), e.on("itemModified", function(e) {
            t._modifyItem(e)
        }), h.on("UpdateTimedBuffTimeMessage", function(e) {
            t._addOrUpdateTimedBuff(e.buffType, e.updatedTime)
        }), this.on("collapse", function(e) {
            if (e) {
                var i = this.getChildren()[0].getChildren()[0];
                i.toggleClassName("small", !e)
            } else t._refreshDisplay()
        })
    }, n.prototype._createDom = function() {
        this.itemSlotBox = this.createChild("div", {
            className: "slotBox"
        }), this.timedBuffSlotBox = this.createChild("div", {
            className: "slotBox"
        })
    }, n.prototype._addItem = function(e) {
        if (o(e)) {
            var t = e.objectUID,
                i = this._itemSlotMap[t];
            i || (i = this._itemSlotMap[t] = new s({
                itemData: e,
                enableContextMenu: !1,
                descriptionOptions: {
                    averagePrice: !1,
                    showCategory: !1,
                    showWeight: !1
                }
            }), this.itemSlotBox.appendChild(i), this.show(), this._switchDisplayMode(), this.emit("resized"))
        }
    }, n.prototype._removeItem = function(e) {
        var t = this._itemSlotMap[e];
        t && (t.destroy(), delete this._itemSlotMap[e], this._refreshDisplay())
    }, n.prototype._modifyItem = function(e) {
        this._removeItem(e.objectUID), this._addItem(e), this._refreshDisplay()
    }, n.prototype._unloadItemsContent = function() {
        this._itemSlotMap = {}, this.itemSlotBox.clearContent(), this._refreshDisplay()
    }, n.prototype._unloadTimedBuffsContent = function() {
        this._timedBuffMap = {}, this.timedBuffSlotBox.clearContent(), this._refreshDisplay()
    }, n.prototype._refreshDisplay = function() {
        d(this._itemSlotMap) && d(this._timedBuffMap) && this.hide(), this._switchDisplayMode(), this.emit("resized")
    }, n.prototype._addOrUpdateTimedBuff = function(e, t) {
        var i = this._timedBuffMap[e];
        if (i) return i.setEndTime(t), void this._refreshDisplay();
        if (!(t - p.now() < 0)) {
            i = this._timedBuffMap[e] = new c(e, t);
            var n = this;
            i.on("onTimerFinished", function() {
                delete n._timedBuffMap[e], n.timedBuffSlotBox.removeChild(i), n._refreshDisplay()
            }), this.timedBuffSlotBox.appendChild(i), this.show(), this._refreshDisplay()
        }
    }, n.prototype._switchDisplayMode = function() {
        var e = Object.keys(this._itemSlotMap)
            .length,
            t = !1;
        switch (e) {
            case 0:
                return;
            case 1:
                t = !0
        }
        this.toggleClassName("oneBuff", t);
        var i = this.getChildren()[0].getChildren()[0];
        i.toggleClassName("small", t)
    }
}
