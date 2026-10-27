function(e, t, i) {
    function n(e, t) {
        if ("function" != typeof e.prototype.checkAndShowSuggestion || !e.configName) throw new Error("Invalid class " + e.name);
        this._name = e.configName, this._coordinator = t, this._sugTimeout = null, this._maxFrequency = l, this._averageDelay = d, this._delayDelta = u, this._suggestion = new e(this)
    }

    function o(e, t) {
        var i = t - e;
        return e + Math.random() * i
    }
    var a = i(17)
        .getText,
        r = i(30),
        s = i(60),
        c = 6e4,
        l = 60 * c * 24 * 30,
        d = 3 * c,
        u = .5 * c,
        p = 5 * c,
        h = "sugTriggerTime-",
        f = "sugProposedTime-";
    e.exports = n, n.prototype.terminate = function() {
        r.clearTimeout(this._sugTimeout), this._suggestion.terminate()
    }, n.prototype.setOptions = function(e) {
        e.maxFrequencyMs && (this._maxFrequency = e.maxFrequencyMs), e.averageDelayMs && (this._averageDelay = e.averageDelayMs)
    }, n.prototype.takeNoteOfTriggeringEvent = function() {
        s.setValue(h + this._name, Date.now())
    }, n.prototype.takeNoteOfPlayerChoice = function() {
        s.setValue(f + this._name, Date.now())
    }, n.prototype.getLastProposedTime = function() {
        return s.getValue(f + this._name) || 0
    }, n.prototype._canSuggestionBeProposed = function() {
        if (window.gui.playerData.characterBaseInformations.level < 40) return !1;
        var e = s.getValue(h + this._name);
        if (!e) return !1;
        var t = s.getValue(f + this._name) || 0;
        return !(t > e) && !(Date.now() - t < this._maxFrequency)
    }, n.prototype.scheduleCheck = function() {
        this._sugTimeout && r.clearTimeout(this._sugTimeout);
        var e = Math.max(0, this._averageDelay - this._delayDelta),
            t = this._averageDelay + this._delayDelta,
            i = o(e, t);
        this._sugTimeout = r.setTimeout(this._doCheckOrReschedule.bind(this), i)
    }, n.prototype._doCheckOrReschedule = function() {
        return this._sugTimeout = null, window.gui.playerData.isFighting ? this.scheduleCheck() : Date.now() - this._coordinator.getLastPopupTime() < p ? this.scheduleCheck() : void(this._canSuggestionBeProposed() && this._suggestion.checkAndShowSuggestion())
    }, n.prototype.showPopup = function(e, t) {
        this._coordinator.rememberPopupTime();
        var i = this;
        window.gui.openConfirmPopup({
            title: a("tablet.suggestion"),
            buttonNoLabel: a("ui.connection.notNow"),
            message: e,
            cb: function(e) {
                i.takeNoteOfPlayerChoice(e ? "Y" : "N"), e && t()
            }
        })
    }
}
