function(e, t, i) {
    function n() {
        s.call(this, {
            title: a("ui.shield.interfaceTitle"),
            className: "ShieldSelectionWindow",
            positionInfo: {
                right: "c",
                bottom: "c",
                width: 400,
                height: 490,
                mustAvoidToolbar: !0
            }
        }), this.once("opened", function() {
            this._createDom()
        }), this.on("opened", function(e) {
            this._currentShieldUID = e, this._reset(), this._update()
        }), this.on("close", function() {
            this._removeFilter()
        }), this.on("closed", function() {
            this._unloadContent()
        }), this.on("slot-tap", function(e) {
            this._selectItem(e.itemInstance)
        }), this.on("itemRemoved", function() {
            this._reset()
        }), this.storageViewer = new u({
            enablePresets: !1,
            dataHandler: window.gui.playerData.inventory,
            enableLookAllObjects: !0
        }), this.storageViewer.registerView(this, {
            manualOpening: !0,
            enableSlotContext: !1
        })
    }

    function o() {
        var e = {},
            t = window.gui.playerData.inventory.objects;
        for (var i in t) {
            var n = t[i];
            n.isShieldManageable() && (e[i] = n)
        }
        return e
    }
    i(1362);
    var a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(70),
        c = i(86),
        l = i(1006),
        d = i(767),
        u = i(937),
        p = i(52);
    r(n, s), n.prototype._filterShield = function(e) {
        return e.isShieldManageable() && this._currentShieldUID !== e.objectUID
    }, n.prototype._update = function() {
        function e(e) {
            return e.isShieldManageable() && t !== e.objectUID
        }
        var t = this._currentShieldUID;
        this._filter = e, this.storageViewer.addFilters([this._filter]);
        var i = o();
        this.storageViewer.setItemList(i)
    }, n.prototype._unloadContent = function() {
        this.storageViewer.unloadContent()
    }, n.prototype._removeFilter = function() {
        this.storageViewer.removeFilter(this._filter)
    }, n.prototype._reset = function() {
        this.placeHolder.setText(a("ui.common.selectItem")), this.itemSelected = null, this.itemBox.hide(), this.confirmBtn.disable()
    }, n.prototype._createDom = function() {
        var e = this;
        this.viewerBox = this.windowBody.createChild("div", {
            className: "viewer"
        }), this.viewerBox.appendChild(e.storageViewer.storageUI);
        var t = this.windowBody.createChild("div", {
            className: "itemBox"
        });
        this.itemBox = t.appendChild(new l({
            showTitle: !0
        })), this.placeHolder = new d(t), this.confirmBtn = this.windowBody.appendChild(new c({
            text: a("ui.common.validation"),
            className: ["greenButton", "confirm"]
        })), this.confirmBtn.on("tap", function() {
            p.getWindow("shieldWindow")
                .setNewShield(e.itemSelected), p.close("ShieldSelectionWindow")
        })
    }, n.prototype._selectItem = function(e) {
        this.itemSelected = e, this.itemBox.displayItem(e), this.itemBox.show(), this.placeHolder.setText(null), this.confirmBtn.enable()
    }, e.exports = n
}
