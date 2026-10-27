function(e, t, i) {
    function n(e) {
        return l.itemTypePositions[e] || []
    }

    function o(e) {
        var t = l.categories;
        switch (e) {
            case t.equipment:
                return "equipment";
            case t.consumables:
                return "consumables";
            case t.resources:
                return "resources";
            case t.quest:
                return "quest";
            case t.preset:
                return "preset";
            case t.cosmetics:
                return "cosmetics";
            default:
                return null
        }
    }

    function a(e) {
        var t = l.categories;
        return l.filterCosmetics[e] ? t.cosmetics : l.filterEquipment[e] ? t.equipment : l.filterConsumables[e] ? t.consumables : l.filterRessources[e] ? t.resources : l.filterQuest[e] ? t.quest : t.preset
    }

    function r(e) {
        return l.superTypeNotEquippable.indexOf(e) === -1
    }

    function s(e) {
        return e !== l.positions.notEquipped
    }

    function c(e) {
        return !e.isLinkedCharacter()
    }
    var l = i(470);
    e.exports.getTypePositions = n,
    e.exports.getCategoryName = o,
    e.exports.getCategory = a,
    e.exports.isEquippable = r,
    e.exports.isEquipped = s,
    e.exports.unlinkedItemsFilter = c
}
