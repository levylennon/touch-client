function(e, t, i) {
    function n(e) {
        r.call(this, e)
    }
    var o = i(523),
        a = i(524),
        r = i(610),
        s = i(17)
        .getText,
        c = i(522),
        l = i(611),
        d = i(56)
        .inherits;
    d(n, r), n.prototype._getText = function() {
        return this.operatorToken === l.equal ? s("ui.criterion.allianceAvA") : ""
    }, n.prototype._isRespected = function(e, t) {
        if (this.operatorToken !== l.equal) return t(!1);
        var i = window.gui.playerData,
            n = i.characters.mainCharacter.characteristics.alignmentInfos.aggressable;
        if (n !== o.AvA_ENABLED_AGGRESSABLE && n !== o.AvA_PREQUALIFIED_AGGRESSABLE) return t(!1);
        var r = a.entities.prism[i.position.subAreaId];
        return t(r && r.mapId !== -1 ? r.state !== c.PRISM_STATE_VULNERABLE ? !1 : !0 : !1)
    }, e.exports = n
}
