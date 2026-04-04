function(e, t, i) {
    var n = i(105);
    n.on("InventoryPresetUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("InventoryPresetItemUpdateErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("InventoryPresetItemUpdateMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("InventoryPresetSaveResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("InventoryPresetDeleteResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("InventoryPresetUseResultMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
