function(e, t, i) {
    function n(e) {
        this.criterionString = e, this._hasGroupText = !1, this.isEvaluated = !1, this.result = !1, this._initValue()
    }
    var o = i(611),
        a = i(17)
        .getText;
    n.prototype._initValue = function() {
        this.key = this.criterionString.substring(0, 2), this.operatorToken = this.criterionString.substring(2, 3), this.rawValue = this.criterionString.substring(3);
        var e = this.rawValue.split(",");
        this.stringValue = e[0], this.value = parseInt(this.stringValue, 10), this.params = e.map(function(e) {
            return parseInt(e, 10)
        })
    }, n.prototype.getOperatorText = function() {
        switch (this.operatorToken) {
            case o.and:
                return a("ui.common.and");
            case o.or:
                return a("ui.common.or");
            case o.different:
                return "! ";
            case o.equal:
                return ": ";
            case o.superior:
                return " > ";
            case o.inferior:
                return "< "
        }
        return ""
    }, n.prototype.getKeyText = function() {
        return this.key
    }, n.prototype.getValueText = function() {
        return this.stringValue
    }, n.prototype._getText = function() {
        return this.getKeyText() + " " + this.getOperatorText() + " " + this.getValueText()
    }, n.prototype._getTextFromCriterion = function() {
        return ""
    }, n.prototype._getGroupText = function() {
        return ""
    }, n.prototype.getText = function() {
        return this.isEvaluated ? this._getText() : (console.error(new Error("getText is called but the criterion has not been evaluated")), "")
    }, n.prototype.getTextFromCriterion = function() {
        return this.isEvaluated ? this._getTextFromCriterion() : (console.error(new Error("getTextFromCriterion is called but the criterion has not been evaluated")), "")
    }, n.prototype.getGroupText = function() {
        return this.isEvaluated ? this._getGroupText() : (console.error(new Error("getGroupText is called but the criterion has not been evaluated")), "")
    }, n.prototype.getCriterion = function() {
        return 0
    }, n.prototype.getEvaluationValue = function() {
        return this.isEvaluated ? this.result : (console.error(new Error("getEvaluationValue is called but the criterion has not been evaluated")), !1)
    }, n.prototype.hasGroupText = function() {
        return this._hasGroupText
    }, n.prototype.evaluate = function(e, t) {
        var i = this;
        return this.isEvaluated ? t(this.result) : this._isRespected(e, function(e) {
            return i.isEvaluated = !0, i.result = e, t(e)
        })
    }, n.prototype._isRespected = function(e, t) {
        var i = this.getCriterion(e);
        return t(this.operatorToken === o.superior ? i > this.value : this.operatorToken === o.inferior ? i < this.value : this.operatorToken === o.equal ? i === this.value : this.operatorToken === o.different ? i !== this.value : !1)
    }, e.exports = n
}
