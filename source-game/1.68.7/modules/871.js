function(e, t, i) {
    function n(e) {
        e = e || {}, o.call(this, e), this.addClassNames("ItemSlot"), this.itemTypeStyle = "", this.descriptionOptions = e.descriptionOptions || {}, this.setItem(e.itemData, e.quantity)
    }
    i(872);
    var o = i(873),
        a = i(875),
        r = i(56)
        .inherits,
        s = i(12),
        c = 0,
        l = [1, 9, 10, 11, 16, 17, 81, 26, 78];
    r(n, o), e.exports = n, n.prototype._getContextualMenuProperties = function() {
        return this._contextMenuParams.item = this.data, o.prototype._getContextualMenuProperties.call(this)
    }, n.prototype.setItem = function(e, t) {
        if (!e) return this.unset();
        this.toggleClassName("cosmeticSlot", e.isCosmetic()), this.toggleClassName("legendaryWeaponSlot", e.isLegendaryWeapon()), this._itemData = e, this.itemInstance = e.getItemInstance(), this.dbItem = e.getItem();
        var i = e.getProperty("image");
        if (!i && e.isItemInstance && !e.isInitialised) {
            var n = this;
            e.once("initialised", function() {
                n._itemData === e && (n.setImage(e.getProperty("image")), n.toggleClassName("cosmeticSlot", e.isCosmetic()), n.toggleClassName("legendaryWeaponSlot", e.isLegendaryWeapon()))
            })
        }
        t = t || e.getProperty("quantity") || 1, this.setImage(i), this.setQuantity(t), this.setTooltip(this._getTooltipContent), this.setData(e)
    }, n.prototype.getItem = function() {
        return this._itemData
    }, n.prototype.unset = function() {
        o.prototype.unset.call(this), this._itemData = null, this.itemInstance = null, this.dbItem = null
    }, n.prototype.lock = function() {
        var e = this;
        this.unset(), s.preloadImage("ui/slots/tx_slotLockedimg.png", function(t) {
            e.setImage(t)
        })
    }, n.prototype._getTooltipContent = function(e) {
        var t = this,
            i = new a;
        return i.updateUI(t._itemData, t.descriptionOptions, function() {
            return e(i)
        })
    }, n.prototype.setBackgroundImageByItemType = function(e) {
        l.indexOf(e) === -1 && (e = c);
        var t = "itemType" + e;
        this.replaceClassNames([this.itemTypeStyle], [t]), this.itemTypeStyle = t
    }
}
