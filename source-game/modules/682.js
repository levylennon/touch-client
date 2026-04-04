function(e, t, i) {
    function n(e, t, i, n) {
        var a = this,
            s = e && e.stateId;
        o.call(this, e, t, i, s, null, null, function(e, t) {
            return e ? n && n(e) : (a.statName = r.getActionStatName(i), a.stateId = s, n && n(null, t))
        })
    }
    var o = i(676),
        a = i(56)
        .inherits,
        r = i(476),
        s = i(683),
        c = i(596);
    a(n, o), e.exports = n, n.prototype.apply = function() {
        var e = window.gui.fightManager.getFighter(this.targetId);
        return e ? (e.addState(this.stateId), void o.prototype.apply.call(this)) : console.error("Applying state buff failed, fighter does not exist.")
    }, n.prototype.remove = function() {
        if (!this._removed) {
            var e = window.gui.fightManager.getFighter(this.targetId);
            if (!e) return console.error("Removing state buff failed, fighter does not exist.");
            e.removeState(this.stateId);
            var t = this.targetId,
                i = this.visibleInFightLog;
            window.gui.fightManager.deadTurnsList.indexOf(t) === -1 && (952 === this.actionId ? s.push(c.FIGHTER_ENTERING_STATE, [t, this.stateId], t, -1, -1, !1, 2, i) : s.push(c.FIGHTER_LEAVING_STATE, [t, this.stateId], t, -1, -1, !1, 2, i))
        }
        o.prototype.remove.call(this)
    }, n.prototype.clone = function() {
        var e = new n;
        return this._copyTo(e), e
    }
}
