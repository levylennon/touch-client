function(e, t, i) {
    function n(e) {
        o.call(this, e), this._objectName = ""
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(611),
        c = i(130);
    r(n, o), n.prototype._isRespected = function(e, t) {
        function i() {
            var e = n.params[1],
                i = window.gui.playerData.inventory.getItemCount(o),
                a = window.gui.playerData.inventory.isGenericItemEquipped(o);
            return t(n.operatorToken === s.superior ? i > e : n.operatorToken === s.inferior ? i < e : n.operatorToken === s.equal ? i >= 1 : n.operatorToken === s.different ? 0 === i : n.operatorToken === s.equipped ? a : n.operatorToken === s.unequipped ? !a : !1)
        }
        var n = this,
            o = this.value;
        return e && e.item && (this._objectName = e.item.nameId), o || 0 === o ? c.getDataMap("Items", [o], null, function(e, t) {
            if (e) return console.error(e), i();
            var a = t[o];
            if (!a) {
                var r = "ObjectItemCriterion: unable to find item id " + o;
                return r += " for criterionString " + n.criterionString, console.error(new Error(r)), i()
            }
            return n._objectName = a.nameId, i()
        }) : i()
    }, n.prototype._getText = function() {
        var e = this.params[1],
            t = "";
        switch (this.operatorToken) {
            case s.equal:
                t = a("ui.common.doPossess", this._objectName);
                break;
            case s.different:
                t = a("ui.common.doNotPossess", this._objectName);
                break;
            case s.equipped:
                t = a("ui.common.doEquip", this._objectName);
                break;
            case s.unequipped:
                t = a("ui.common.doNotEquip", this._objectName);
                break;
            case s.inferior:
                t = a("ui.common.doPossesLess", this._objectName, e);
                break;
            case s.superior:
                t = a("ui.common.doPossessMore", this._objectName, e)
        }
        return t
    }, e.exports = n
}
