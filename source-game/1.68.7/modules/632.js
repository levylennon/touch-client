function(e, t, i) {
    function n(e) {
        o.call(this, e);
        var t = this.key.split(",");
        t.length > 1 ? (this._giftId = parseInt(t[0], 10), this._giftLevel = parseInt(t[1], 10)) : (this._giftId = parseInt(this.value, 10), this._giftLevel = -1)
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(611);
    r(n, o), n.prototype._getText = function() {
        var e = window.gui.databases.AlignmentGift,
            t = e[this._giftId] ? e[this._giftId].nameId : "";
        return this.operatorToken === s.superior ? a("ui.pvp.giftRequired", [t + " > " + this._giftLevel]) : a("ui.pvp.giftRequired", [t])
    }, n.prototype._isRespected = function(e, t) {
        var i = window.gui.playerData.alignmentRank,
            n = window.gui.databases.AlignmentRankJntGift[i];
        if (!n || !n.gifts) return t(!1);
        for (var o = 0, a = n.gifts.length; o < a; o += 1)
            if (n.gifts[o] === this._giftId) return t(this._giftLevel ? n.levels[o] > this._giftLevel : !0);
        return t(!1)
    }, e.exports = n
}
