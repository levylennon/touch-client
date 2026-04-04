function(e, t, i) {
    function n(e) {
        o.call(this, e), this._hasGroupText = !0
    }
    var o = i(610),
        a = i(17).getText,
        r = i(56).inherits;
    r(n, o),
    n.prototype._getText = function() {
        return this._getGroupText()
    },
    n.prototype._getGroupText = function() {
        return a(this.getEvaluationValue() ? "ui.criterion.correctAlamanach" : "ui.criterion.incorrectAlamanach")
    },
    n.prototype._isRespected = function(e, t) {
        return t(window.gui.almanaxData.isCurrentAlmanax(parseInt(this.value, 10)))
    },
    e.exports = n
}
