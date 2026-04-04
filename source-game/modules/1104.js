function(e, t, i) {
    function n() {
        function e(e, t) {
            return t = t || {}, t.showDescription = void 0 === t.showDescription || t.showDescription, t.showTitle = !0, e ? (n.setTitle(e.getName()), n._itemBox.displayItem(e, t), n._itemBox.show(), void n.windowBody.delClassNames("spinner")) : console.error("ItemBoxWindow: openWithItemData have not itemData")
        }

        function t(t, i) {
            s.getItems([t], function(n, o) {
                return n || !o[0] ? console.error("ItemBoxWindow: error openWithDbItem", n, t) : void e(o[0], i)
            })
        }

        function i(t, i) {
            s.createItemInstances(t, function(t, n) {
                return t ? console.error("ItemBoxWindow: error createItemInstances", t) : void e(n.array[0], i)
            })
        }
        a.call(this, {
            className: "ItemBoxWindow",
            title: "",
            positionInfo: {
                top: "c",
                left: "c",
                width: 500,
                height: 420
            }
        });
        var n = this,
            o = window.gui;
        this._itemBox = null, this._domCreated = !1, this.on("open", function(a) {
            a = a || {}, n._domCreated || n._createDom();
            var r = a.itemData,
                s = a.objectUID,
                c = a.objectGID,
                l = a.objectItem,
                d = a.options || {};
            return n.setTitle(""), n._itemBox.hide(), n.windowBody.addClassNames("spinner"), !r && s && (r = o.playerData.inventory.objects[s]), !r && l ? i(l, d) : void(r ? e(r, d) : c ? t(c, d) : console.error("ItemBoxWindow need itemData or objectUID or objectGID"))
        }), this.on("close", function() {
            n._itemBox.hide(), n.windowBody.delClassNames("spinner")
        })
    }
    i(1105);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(1006),
        s = i(469);
    o(n, a), e.exports = n, n.prototype._createDom = function() {
        var e = this.windowBody;
        this._itemBox = e.appendChild(new r({
            showItemActions: !0
        })), this._itemBox.hide(), this._domCreated = !0
    }
}
