function(e, t, i) {
    function n(e) {
        o.call(this, e)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits;
    r(n, o), n.prototype._getText = function() {
        var e = "";
        switch (this.key) {
            case "Oo":
                var t = window.gui.databases.ItemTypes[this.value].nameId;
                e = a("ui.criterion.cosmeticItemSlotType", t);
                break;
            case "Pn":
                switch (this.value) {
                    case 1:
                        e = a("ui.criterion.cosmeticItemSlot", a("ui.common.inventoryType2"));
                        break;
                    case 6:
                        e = a("ui.criterion.cosmeticItemSlot", a("ui.common.inventoryType10"));
                        break;
                    case 7:
                        e = a("ui.criterion.cosmeticItemSlot", a("ui.common.inventoryType11"));
                        break;
                    case 8:
                        e = a("ui.criterion.cosmeticItemSlot", a("ui.common.inventoryType8"));
                        break;
                    case 15:
                        e = a("ui.criterion.cosmeticItemSlot", a("ui.common.inventoryType7"));
                        break;
                    case 16:
                        e = a("ui.criterion.cosmeticItemSlot", a("ui.banner.mount"));
                        break;
                    case -1:
                        e = a("ui.set.objectEquipped")
                }
        }
        return e
    }, n.prototype.getCriterion = function() {
        var e = window.gui.playerData.inventory.equippedItems;
        switch (this.key) {
            case "Oo":
                for (var t = window.gui.databases.ItemTypes[this.value].possiblePositions, i = 0; i < t.length; i++)
                    if (e[t[i]]) {
                        if (e[t[i]].item) return e[t[i]].item.typeId;
                        console.error("Equipped items not initialized yet to set criterion `" + this.key + "`")
                    } return null;
            case "Pn":
                switch (this.value) {
                    case 16:
                        return window.gui.playerData.isRiding ? this.value : null;
                    case -1:
                        return Object.keys(window.gui.playerData.inventory.equippedItems)
                            .length ? -1 : 0;
                    default:
                        return window.gui.playerData.inventory.equippedItems[this.value] ? this.value : null
                }
            default:
                return ""
        }
    }, e.exports = n
}
