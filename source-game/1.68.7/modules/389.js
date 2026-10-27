function(e, t, i) {
    var n = i(105);
    n.on("InteractiveUseErrorMessage", function(e) {
        window.isoEngine.onInteractiveUseErrorMessage(e)
    }), n.on("InteractiveUsedMessage", function(e) {
        window.isoEngine.interactiveUseStart(e), window.gui.transmitMessage(e)
    }), n.on("InteractiveUseEndedMessage", function(e) {
        window.isoEngine.interactiveUseEndedMessage(e), window.gui.transmitMessage(e)
    }), n.on("InteractiveMapUpdateMessage", function(e) {
        window.isoEngine.updateInteractiveElements(e.interactiveElements)
    }), n.on("InteractiveElementUpdatedMessage", function(e) {
        window.isoEngine.updateInteractiveElements([e.interactiveElement])
    }), n.on("StatedMapUpdateMessage", function(e) {
        window.isoEngine.updateStatedElements(e.statedElements)
    }), n.on("StatedElementUpdatedMessage", function(e) {
        window.isoEngine.updateStatedElements([e.statedElement])
    })
}
