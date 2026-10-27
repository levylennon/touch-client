function(e, t, i) {
    function n(e) {
        this._controller = e, this._eventListener = new a, this._initializeOnConnect()
    }

    function o() {
        r.changeValue("wantPromoNotif", !0), r.changeValue("systemNotificationsEnabled", !0), l.open("options", {
            tab: "notification"
        })
    }
    var a = i(556),
        r = i(55),
        s = i(17)
        .getText,
        c = i(557),
        l = i(52);
    e.exports = n, n.configName = "Promo", n.prototype._initializeOnConnect = function() {
        var e = window.dofus.connectionManager,
            t = this;
        this._controller.scheduleCheck(), this._eventListener.listenTo(e, "shopBuySuccess", function() {
            t._controller.takeNoteOfTriggeringEvent()
        }), this._eventListener.listenTo(l, "close", function(e) {
            "market" === e.id && t._controller.scheduleCheck()
        })
    }, n.prototype.terminate = function() {
        this._eventListener.stopListening()
    }, n.prototype.checkAndShowSuggestion = function() {
        c.isAvailable() && (r.systemNotificationsEnabled && r.wantPromoNotif || this._controller.showPopup(s("tablet.proposePromoNotif"), o))
    }
}
