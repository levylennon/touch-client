function(e, t, i) {
    var n = i(105);
    n.on("ExchangeReplayCountModifiedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeObjectAddedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("FMExchangeObjectAddedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeRequestedTradeMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeStartedWithPodsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeCraftSlotCountIncreasedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeIsReadyMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeLeaveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeStartOkNpcTradeMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeOkMultiCraftMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeCraftResultMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeCraftResultWithObjectIdMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeCraftResultWithObjectDescMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeCraftResultMagicWithObjectDescMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeCraftInformationObjectMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeGuildTaxCollectorGetMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountStableErrorMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountStableAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountPaddockAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountStableBornAddMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountStableRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountPaddockRemoveMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountTakenFromPaddockMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountFreeFromPaddockMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeMountSterilizeFromPaddockMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeItemAutoCraftStopedMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeItemAutoCraftRemainingMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeStartOkCraftWithInformationMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeStartOkMulticraftCrafterMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeStartOkMulticraftCustomerMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeStartOkJobIndexMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeGoldPaymentForCraftMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeItemPaymentForCraftMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeModifiedPaymentForCraftMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeRemovedPaymentForCraftMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("ExchangeClearPaymentForCraftMessage", function(e) {
        window.gui.transmitMessage(e)
    })
}
