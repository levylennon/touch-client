function(e, t, i) {
    function n(e) {
        o.call(this, e), this._communityId = window.gui.playerData.identification.communityId
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(611),
        s = i(56)
        .inherits;
    s(n, o), n.prototype._isRespected = function(e, t) {
        var i = this,
            n = window.gui.serversData;
        return n.syncServerStaticData(function(a) {
            if (a) return console.error(new Error("ServerDetails setServer error", a)), t(!1);
            var r = n.staticContent.communities[i.value];
            return i._communityName = r ? r.nameId : i.value, o.prototype._isRespected.call(i, e, t)
        })
    }, n.prototype._getText = function() {
        return this.operatorToken === r.equal ? a("ui.criterion.community", [this._communityName]) : a("ui.criterion.notCommunity", [this._communityName])
    }, n.prototype.getCriterion = function() {
        return this._communityId
    }, e.exports = n
}
