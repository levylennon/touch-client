function(e, t, i) {
    function n() {
        function e() {
            n ? c("ExchangeObjectTransfertAllToInvMessage", {}) : c("ExchangeObjectTransfertAllFromInvMessage", {})
        }

        function t() {
            var e = o.getDisplayedItemsUIDs();
            !e || e.length < s.MIN_OBJ_COUNT_BY_XFERT || (e.length > s.MAX_OBJ_COUNT_BY_XFERT && (e = e.slice(0, s.MAX_OBJ_COUNT_BY_XFERT), window.gui.chat.logMsg(r("ui.exchange.partialTransfert"))), n ? c("ExchangeObjectTransfertListToInvMessage", {
                ids: e
            }) : c("ExchangeObjectTransfertListFromInvMessage", {
                ids: e
            }))
        }

        function i() {
            n ? c("ExchangeObjectTransfertExistingToInvMessage", {}) : c("ExchangeObjectTransfertExistingFromInvMessage", {})
        }
        a.call(this, {
            noHeader: !0
        });
        var n, o, c = window.dofus.sendMessage;
        this.once("open", function() {
            this._addEntry(r("ui.storage.getAll"), e), this._addEntry(r("ui.storage.getVisible"), t), this._addEntry(r("ui.storage.getExisting"), i), this._addCancel()
        }), this.on("open", function(e, t) {
            n = e.toInventory, o = e.viewer, t()
        })
    }
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText,
        s = i(112);
    o(n, a), e.exports = n
}
