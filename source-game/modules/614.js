function(e, t, i) {
    function n(e) {
        o.call(this, e), this._valueText = "", this._keyText = ""
    }
    var o = i(610),
        a = i(611),
        r = i(17)
        .getText,
        s = i(130),
        c = i(56)
        .inherits;
    c(n, o), n.prototype._isRespected = function(e, t) {
        var i = this;
        return s.getDataMap("Achievements", [this.value], null, function(e, n) {
            if (e) return console.error(new Error(e)), t(!1);
            var o = n[i.value];
            i._valueText = " '" + o.nameId + "'";
            var r = window.gui.playerData.achievements.hasFinished(i.value);
            return t(i.operatorToken === a.equal ? r : !r)
        })
    }, n.prototype.getText = function() {
        return this.operatorToken === a.different ? r("ui.tooltip.dontUnlockAchievement", [this._valueText]) : r("ui.tooltip.unlockAchievement", [this._valueText])
    }, e.exports = n
}
