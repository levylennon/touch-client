function(e, t, i) {
    function n(e) {
        this._controller = e, this._controller.setOptions({
            maxFrequencyMs: 3 * p,
            averageDelayMs: 5 * u
        }), this._eventListener = new r, this._initializeOnConnect()
    }

    function o() {
        s.changeValue("systemNotificationsEnabled", !0), s.changeValue("wantPromoNotif", !0), s.changeValue("wantPrismAttackedNotif", !0), s.changeValue("wantPrismVulnerableNotif", !0), d.open("options", {
            tab: "notification"
        })
    }
    var a = i(7),
        r = i(556),
        s = i(55),
        c = i(17)
        .getText,
        l = i(557),
        d = i(52),
        u = 6e4,
        p = 60 * u * 24 * 30;
    e.exports = n, n.configName = "AllNotif", n.prototype._initializeOnConnect = function() {
        s.systemNotificationsEnabled ? this._controller.takeNoteOfPlayerChoice() : (this._controller.takeNoteOfTriggeringEvent(), this._controller.scheduleCheck())
    }, n.prototype.terminate = function() {
        this._eventListener.stopListening()
    }, n.prototype.checkAndShowSuggestion = function() {
        l.isAvailable() && (s.systemNotificationsEnabled || (a.isAndroid && !this._controller.getLastProposedTime() ? (this._controller.takeNoteOfPlayerChoice("F"), s.changeValue("systemNotificationsEnabled", !0)) : this._controller.showPopup(c("tablet.proposeAllNotif"), o)))
    }
}
