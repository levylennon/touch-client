function(e, t, i) {
    function n(e) {
        c.call(this, {
            title: a("ui.common.inventory"),
            className: "ItemPickingWindow",
            plusButton: !1,
            positionInfo: {
                right: "10%",
                top: "c",
                width: 280,
                height: 564
            },
            openingSound: "OPEN_INVENTORY",
            closingSound: "CLOSE_INVENTORY"
        }), this.storageView = e, this.storageView.registerView(this, {
            manualOpening: !0,
            enableAveragePrice: !1,
            enableSlotContext: !1,
            tapSelectedEmitsDoubleTap: !0,
            filters: {
                quest: !0,
                preset: !0
            }
        }), this.hasDom = !1, this.on("open", this._onOpen)
    }
    i(1119);
    var o = i(418),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = o.setDroppable,
        c = i(70);
    r(n, c), e.exports = n, n.prototype._onOpen = function() {
        this.hasDom || this._createDom(), this.storageBox.appendChild(this.storageView.storageUI), this.isReadyForUserInteraction = !1;
        var e = this;
        this.storageView.once("StorageViewerOpen", function() {
            e.isReadyForUserInteraction = !0
        })
    }, n.prototype._createDom = function() {
        var e = this;
        this.hasDom = !0, this.storageBox = this.windowBody.createChild("div", {
            className: "storageBox"
        }), s(this.storageBox, ["mimicry"]), this.storageBox.on("drop", function(t, i) {
            e.emit("unpickItem", t, i)
        })
    }, n.prototype.showEquippableItems = function() {
        this.storageView.showEquippableItems()
    }
}
