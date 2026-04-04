function(e, t, i) {
    function n() {}

    function o(e) {
        a.call(this, {
            className: "LegendaryWeaponUpgradingWindow",
            title: s("ui.legendaryWeapon.titleUpgrading"),
            numberSlot: 5
        }, e), this.selectedWeaponUID = null
    }
    i(1393);
    var a = i(1390),
        r = i(56)
        .inherits,
        s = i(17)
        .getText,
        c = i(105),
        l = i(52),
        d = i(1394);
    r(o, a), e.exports = o, o.prototype._setupListeners = function() {
        a.prototype._setupListeners.call(this);
        var e = this;
        this.on("open", function() {
            window.foreground.lock("legendaryWeaponInterface")
        }), this.on("close", function() {
            window.foreground.unlock("legendaryWeaponInterface")
        }), l.on("opened", function(t) {
            switch (t.id) {
                case "bidHouseShop":
                case "exchangeInventory":
                case "tradeInventory":
                    e.close()
            }
        }), c.on("CurrentMapMessage", function() {
            e.close()
        }), c.on("ObjectUpgradeEffectResultMessage", function(t) {
            if (e.isOpened) switch (t.status) {
                case d.UPGRADE_SUCCESS:
                    window.gui.openSimplePopup(s("ui.legendaryWeapon.successUpgrading"), s("ui.craft.success"));
                    break;
                case d.NOT_ENOUGH_INGREDIENTS:
                    window.gui.openSimplePopup(s("ui.craft.dontHaveAllIngredient"));
                    break;
                case d.OBJECT_EQUIPPED:
                    window.gui.openSimplePopup(s("ui.set.objectEquipped"));
                    break;
                case d.NO_WORKBENCH_NEARBY:
                    window.gui.openSimplePopup(s("ui.craft.notNearCraftTable"));
                    break;
                default:
                    window.gui.openSimplePopup(s("ui.craft.failed"))
            }
        }), window.gui.playerData.inventory.on("itemModified", function(t) {
            e.isOpened && t.objectUID === e.selectedWeaponUID && e._selectItem(t)
        }), window.gui.playerData.inventory.on("itemAdded", function(t) {
            e.isOpened && t.isLegendaryWeapon() && e._selectItem(t)
        })
    }, o.prototype._onOpen = function() {
        a.prototype._onOpen.call(this), this.validationButton.setText(s("ui.legendaryWeapon.confirmUpgrading")), this.popupMessage = s("ui.legendaryWeapon.warningUpgrading"), this.storageViewer.addFilters([function(e) {
            return e.isLegendaryWeapon() && !e.isAsleepLegendaryWeapon()
        }]), this.storageViewer.filterList()
    }, o.prototype._reset = function() {
        a.prototype._reset.call(this), this.selectedWeaponUID = null
    }, o.prototype._selectItem = function(e, t) {
        a.prototype._selectItem.call(this, e), t = t || n, this.selectedWeaponUID = e.objectUID, this._upgradeAndDisplayLW(e, t)
    }, o.prototype._validateUpgrading = function() {
        this.itemSelected && window.dofus.sendMessage("ObjectUpgradeEffectLevelUpRequestMessage", {
            objectUID: this.itemSelected.objectUID
        })
    }
}
