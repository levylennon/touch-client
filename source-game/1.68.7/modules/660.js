function(e, t, i) {
    function n(e) {
        o.call(this, e), this._name = ""
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(130),
        c = i(611);
    r(n, o), n.prototype._isRespected = function(e, t) {
        function i() {
            return o.prototype._isRespected.call(n, e, t)
        }
        var n = this;
        return s.getObject("SubAreas", this.value, function(e, t) {
            return e ? (console.error(new Error(e)), i()) : (n._name = t.nameId, i())
        })
    }, n.prototype._getText = function() {
        if (!this._name) return "";
        var e = "";
        switch (this.operatorToken) {
            case c.equal:
                e = a("ui.tooltip.beInSubarea", [this._name]);
                break;
            case c.different:
                e = a("ui.tooltip.dontBeInSubarea", [this._name])
        }
        return e
    }, n.prototype.getCriterion = function(e) {
        return e = e || {}, e.subAreaId || window.gui.playerData.position.subAreaId
    }, e.exports = n
}
