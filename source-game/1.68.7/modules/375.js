function(e, t, i) {
    var n = i(105);
    n.on("TaxCollectorDialogQuestionBasicMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("TaxCollectorDialogQuestionExtendedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AllianceTaxCollectorDialogQuestionExtendedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("AlliancePrismDialogQuestionMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
