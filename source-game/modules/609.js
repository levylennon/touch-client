function(e, t, i) {
    function n(e) {
        a.call(this, e)
    }
    var o = i(18),
        a = i(610),
        r = i(56)
        .inherits,
        s = i(611);
    r(n, a), n.prototype._initValue = function() {
        this.subCriterions = [], this.operatorToken = "|"
    }, n.prototype.setOperatorToken = function(e) {
        this.operatorToken = e
    }, n.prototype.addSubCriterion = function(e) {
        e && this.subCriterions.push(e)
    }, n.prototype._getText = function() {
        if (!this.isEvaluated) return console.error(new Error("getText is called but the criterion has not been evaluated")), "";
        for (var e = [], t = 0; t < this.subCriterions.length; t++) {
            var i = this.subCriterions[t],
                n = i.getText();
            if (i.hasGroupText()) {
                if (this.getEvaluationValue() === i.getEvaluationValue()) return i.getGroupText()
            } else "" !== n && (i.subCriterions ? e.push("(" + i.getText() + ")") : e.push(i.getText()))
        }
        var o = e.join("\n" + this.getOperatorText() + " ");
        return e.length > 1 && (o = "(" + o + ")"), o
    }, n.prototype._getTextFromCriterion = function() {
        var e = [];
        for (var t in this.subCriterions) {
            var i = this.subCriterions[t];
            switch (i.key) {
                case "PL":
                case "PB":
                    e.push(i.getText());
                    break;
                default:
                    continue
            }
        }
        return this.getOperatorText() ? e.join(" " + this.getOperatorText() + " ") : e.join(" ")
    }, n.prototype._isRespectedOr = function(e, t, i) {
        var n = !1;
        return o.each(e, function(e, i) {
            return e.evaluate(t, function(e) {
                return e && (n = !0), i()
            })
        }, function(e) {
            return e && console.error(e), i(n)
        })
    }, n.prototype._isRespectedAnd = function(e, t, i) {
        var n = !0;
        return o.each(e, function(e, i) {
            return e.evaluate(t, function(e) {
                return e || (n = !1), i()
            })
        }, function(e) {
            return e && console.error(e), i(n)
        })
    }, n.prototype._isRespected = function(e, t) {
        return this.operatorToken === s.and ? this._isRespectedAnd(this.subCriterions, e, t) : this._isRespectedOr(this.subCriterions, e, t)
    }, e.exports = n
}
