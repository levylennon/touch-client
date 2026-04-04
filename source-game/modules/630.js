function(e, t, i) {
    function n(e) {
        o.call(this, e), this._emoticonData = {}
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(130),
        s = i(611),
        c = i(56)
        .inherits,
        l = {};
    c(n, o), n.prototype._isRespected = function(e, t) {
        var i = this.value,
            n = window.gui.playerData.emoteData.list.hasOwnProperty(i),
            o = l[i];
        if (o) return this._emoticonData = o, t(n);
        if (o = window.gui.playerData.emoteData.list[i]) return this._emoticonData = o, t(n);
        var a = this;
        return r.getDataMap("Emoticons", [this.value], null, function(e, i) {
            if (e) return t(n);
            var o = i[a.value];
            return l[o.id] = o, a._emoticonData = o, t(n)
        })
    }, n.prototype._getText = function() {
        var e;
        return e = a(this.operatorToken === s.different ? "ui.tooltip.dontPossessEmote" : "ui.tooltip.possessEmote"), e + " '" + this._emoticonData.nameId + "'"
    }, e.exports = n
}
