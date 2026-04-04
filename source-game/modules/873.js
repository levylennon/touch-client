function(e, t, i) {
    function n(e) {
        e = e || {}, s.call(this, "div", {
            className: "Slot",
            name: e.name || ""
        }), r(this, e.noDoubleTap ? {
            doubletapTimeout: 1
        } : null), this._quantity = 0, this.forceDisabled = !1, this.enabledBehaviour = !0, this.isSelecting = !1, e.errorIcon && (this.errorIcon = this.createChild("div", {
            className: "errorIcon"
        })), this.icon = this.createChild("div", {
            className: "slotIcon"
        }), this.iconBorder = this.createChild("div", {
            className: "slotIconBorder"
        }), this.quantityBox = this.createChild("div", {
            className: "quantity"
        }), this.forceQuantity = e.forceQuantity, e.quantity && this.setQuantity(e.quantity), e.image && this.setImage(e.image), this.tooltipOptions = e.tooltipOptions, e.tooltip && this.setTooltip(e.tooltip, this.tooltipOptions), this.on("destroy", this._onDestroy), this.on("tap", this._openContextMenu), this.on("tooltipOn", this._removeHoverStyle), this.on("tooltipOut", this._applyHoverStyle), e.scaleOnPress && (this.on("tapstart", this._showAsPressed), this.on("tapend", this._showAsReleased)), this.enableContextMenu(!e.hasOwnProperty("enableContextMenu") || e.enableContextMenu)
    }
    i(874);
    var o = i(88),
        a = i(56)
        .inherits,
        r = i(63),
        s = i(72),
        c = i(12);
    a(n, s), e.exports = n, n.prototype._onDestroy = function() {
        this.destroyed = !0
    }, n.prototype._openContextMenu = function() {
        this._contextMenuId && this.isContextEnabled && !this.isSelecting && window.gui.openContextualMenuAround(this._contextMenuId, this, this._getContextualMenuProperties())
    }, n.prototype._showAsPressed = function() {
        this.data && this.icon.setStyle("webkitTransform", "scale(0.9)")
    }, n.prototype._showAsReleased = function() {
        this.icon.setStyle("webkitTransform", "scale(1)")
    }, n.prototype._removeHoverStyle = function() {
        this.icon.setStyle("webkitTransform", "scale(1.1)")
    }, n.prototype._applyHoverStyle = function() {
        this.icon.setStyle("webkitTransform", "scale(1)")
    }, n.prototype._getContextualMenuProperties = function() {
        return this._contextMenuParams
    }, n.prototype.unset = function() {
        o.enableTooltip(this, !1), this.quantityBox.hide(), this.setContextMenu(), this.forceDisable(!1), this.setImage(), this.setData(), this.emit("unset")
    }, n.prototype.setQuantity = function(e) {
        this._quantity = e, this.quantityBox.setText(e), this.quantityBox.toggleDisplay(Boolean(this.forceQuantity) || e && e > 1)
    }, n.prototype.getQuantity = function() {
        return this._quantity
    }, n.prototype.select = function(e) {
        var t = this;
        if (!window.gui.pingSystem.isActive() && !this.isSelecting) {
            this.isSelecting = !0;
            var i = e && e.extraStyle ? e.extraStyle : null;
            i !== this.extraStyle && (this.extraStyle && this.delClassNames(this.extraStyle), i && this.addClassNames(i), this.extraStyle = i), this.selected || (this.selected = !0, this.addClassNames("selected"), this.emit("selected")), window.setTimeout(function() {
                t.isSelecting = !1
            }, 500)
        }
    }, n.prototype.forceDisable = function(e) {
        this.forceDisabled = e, this.updateAvaibility()
    }, n.prototype.setDisable = function(e) {
        this.isDisabled = e, this.updateAvaibility()
    }, n.prototype.updateAvaibility = function() {
        this._enable(!this.forceDisabled && !this.isDisabled)
    }, n.prototype._enable = function(e) {
        this.rootElement && (this.enabledBehaviour = e, this.toggleClassName("disabled", !e))
    }, n.prototype.unselect = function() {
        this.extraStyle && this.delClassNames(this.extraStyle), this.delClassNames("selected"), this.selected = !1, this.emit("unselected")
    }, n.prototype.setImage = function(e) {
        return this.rootElement ? (this.image = e, e = e || "none", this.icon.setStyle("backgroundImage", e), this.loadingImage = !1, this.requestedImages = null, void this.emit("setImage", this.image)) : console.warn("trying to set an image on a destroyed object")
    }, n.prototype.getImage = function() {
        return this.image
    }, n.prototype.setTooltip = function(e, t) {
        return this.hasTooltip ? void o.enableTooltip(this, !0) : (o.addTooltip(this, e, t || this.tooltipOptions), void(this.hasTooltip = !0))
    }, n.prototype.setContextMenu = function(e, t) {
        this._contextMenuId = e, this._contextMenuParams = t
    }, n.prototype.setData = function(e) {
        if (this.data = e, this.data) {
            if (this.data.mountLocation)
                for (var t = this.data.effectList || [], i = 0, n = t.length; i < n; i += 1) {
                    var o = t[i];
                    o.effectCaller || (o.effectCaller = "Slot: mount " + this.data.model + " from location " + this.data.mountLocation)
                }
            this.emit("setData", this.data)
        }
    }, n.prototype.preloadAndSetImages = function(e) {
        e = e || [], this.requestedImages = e;
        var t = this;
        this.loadingImage = !0, c.preloadImages(e, function(i) {
            if (t.requestedImages === e && !this.destroyed) {
                for (var n = "none", o = 0; o < i.length && (n = i[o], "none" === n); o += 1);
                t.loadingImage && t.setImage(n)
            }
        })
    }, n.prototype.enableContextMenu = function(e) {
        this.isContextEnabled = !arguments.length || e
    }
}
