function(e, t, i) {
    var n = i(105);
    n.on("InventoryContentMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("SetUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ObjectMovementMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ObjectAddedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ObjectsAddedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ObjectModifiedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("InventoryContentAndPresetMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeObjectRemovedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeCraftResultRunicRecyclingMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeObjectModifiedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeObjectPutInBagMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeObjectRemovedFromBagMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeObjectModifiedInBagMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeKamaModifiedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMultiCraftCrafterCanUseHisRessourcesMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
