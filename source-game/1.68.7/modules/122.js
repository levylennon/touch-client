function(e, t) {
    var i = {
        0: "amu_id",
        1: "weapon_id",
        2: "ringl_id",
        3: "belt_id",
        4: "ringr_id",
        5: "boots_id",
        6: "hat_id",
        7: "cloack_id",
        8: "pet_id",
        15: "shield_id"
    };
    t.addEquippedItem = function(e, t) {
        var n = t.inventory.equippedItems;
        for (var o in i) {
            var a = n[o],
                r = i[o];
            if (a)
                if (a.getProperty) e[r] = a.getProperty("objectGID");
                else {
                    var s = "analytics#addEquippedItem: getProperty is not a function. posId: " + o + ", itemName: ";
                    s += r + ", objectGID: " + a.objectGID + ", id: " + a.id, console.error(new Error(s)), e[r] = void 0
                }
            else e[r] = void 0
        }
        e.comp_id = void 0;
        var c = t.equippedMount;
        t.isRiding && c && c.model ? e.ride_id = c.model : e.ride_id = void 0
    }, t.addCharacterInfo = function(e) {
        if (window.gui.playerData) {
            var t = window.gui.playerData,
                i = t.characterBaseInformations || {},
                n = t.position || {};
            e.server_id = window.gui.serversData.connectedServerId, e.character_id = t.id, e.character_level = i.level, e.soft_currency_balance = t.inventory.kamas, e.hard_currency_balance = t.inventory.goultines, e.breed = i.breed, e.map_id = n.mapId
        }
    }
}
