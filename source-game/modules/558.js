function(e, t, i) {
    function n(e) {
        this._controller = e, this._eventListener = new r, this._initializeOnConnect()
    }

    function o() {
        return !!l.isAvailable() && (!!s.systemNotificationsEnabled && (!s.wantPrismAttackedNotif && !s.wantPrismVulnerableNotif))
    }

    function a() {
        s.changeValue("systemNotificationsEnabled", !0), s.changeValue("wantPrismAttackedNotif", !0), s.changeValue("wantPrismVulnerableNotif", !0), p.open("options", {
            tab: "notification"
        })
    }
    var r = i(556),
        s = i(55),
        c = i(17)
        .getText,
        l = i(557),
        d = i(524),
        u = i(559),
        p = i(52);
    e.exports = n, n.configName = "Prism", n.prototype._initializeOnConnect = function() {
        this._controller.scheduleCheck(), this._eventListener.listenTo(u, "receivedServerFlag", this._onReceivedServerFlag.bind(this)), this._eventListener.listenTo(d, "entityUpdated", this._onEntityUpdate.bind(this))
    }, n.prototype.terminate = function() {
        this._eventListener.stopListening()
    }, n.prototype._onReceivedServerFlag = function(e) {
        "MISSED_PRISM_NOTIF" === e && o() && (this._controller.takeNoteOfTriggeringEvent(), this._controller.scheduleCheck())
    }, n.prototype._onEntityUpdate = function(e) {
        e === d.entityType.prism && o() && (this._controller.takeNoteOfTriggeringEvent(), this._controller.scheduleCheck())
    }, n.prototype.checkAndShowSuggestion = function() {
        this._controller.showPopup(c("tablet.proposePrismNotif"), a)
    }
}
