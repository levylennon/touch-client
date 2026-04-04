function(e, t, i) {
    function n(e) {
        o.call(this, e), this._keyText = a("ui.header.server"), this._serverName = ""
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(130);
    r(n, o), n.prototype._isRespected = function(e, t) {
        function i() {
            return o.prototype._isRespected.call(n, e, t)
        }
        var n = this;
        return s.getDataMap("Servers", [this.value], null, function(e, t) {
            if (e) return console.error(e), i();
            var o = t[n.value];
            return n._serverName = o.nameId, i()
        })
    }, n.prototype.getKeyText = function() {
        return this._keyText
    }, n.prototype.getValueText = function() {
        return this._serverName
    }, n.prototype.getCriterion = function() {
        return window.gui.serversData.connectedServerId
    }, e.exports = n
}
