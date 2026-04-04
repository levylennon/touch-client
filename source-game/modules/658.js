function(e, t, i) {
    function n(e) {
        o.call(this, e), this._alignmentGradeName = ""
    }
    var o = i(610),
        a = i(56)
        .inherits,
        r = i(130),
        s = i(17)
        .getText;
    a(n, o), n.prototype._isRespected = function(e, t) {
        function i() {
            return o.prototype._isRespected.call(n, e, t)
        }
        var n = this;
        return r.getDataMap("AlignmentRank", [this.value], null, function(e, t) {
            if (e) return console.error(e), i();
            var o = t[n.value];
            return n._alignmentGradeName = o.nameId, i()
        })
    }, n.prototype.getCriterion = function() {
        return window.gui.playerData.characters.mainCharacter.characteristics.alignmentInfos.alignmentGrade
    }, n.prototype.getKeyText = function() {
        return s("ui.pvp.rank")
    }, n.prototype.getValueText = function() {
        return this._alignmentGradeName
    }, e.exports = n
}
