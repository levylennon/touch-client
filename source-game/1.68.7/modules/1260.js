function(e, t, i) {
    function n(e, t) {
        function i(e) {
            !e.regex || e.regex instanceof RegExp || (e.regex = new RegExp(e.regex, e.regexFlags))
        }
        a.call(this, e, t), this.addClassNames("InputBoxValidated");
        var n = "",
            o = this.onChangeRules = e.onChangeRules || [],
            r = this.onSubmitRules = e.onSubmitRules || [],
            s = void 0 === e.blockInvalidInput || e.blockInvalidInput;
        o.forEach(i), r.forEach(i), this.on("change", function(e) {
            for (var t = [], i = 0; i < o.length; i += 1) {
                var a = o[i],
                    r = void 0 === a.expectedResult || a.expectedResult;
                a.regex && a.regex.test(e) !== r && (a.transform ? e = a.transform(e) : t.push({
                    error: a.error
                }))
            }
            t.length > 0 && s ? this.setValue(n, !1) : (n = e, this.setValue(n, !1)), t.length > 0 ? (this.addClassNames("invalid"), this.emit("validationFailed", t)) : (this.delClassNames("invalid"), this.emit("validationPassed"))
        })
    }
    i(1261);
    var o = i(56)
        .inherits,
        a = i(581);
    o(n, a), e.exports = n, n.prototype.getValue = function(e) {
        var t = a.prototype.getValue.call(this);
        if (e = void 0 === e || e, !e) return t;
        var i, n, o, r = [];
        for (i = 0; i < this.onChangeRules.length; i += 1) n = this.onChangeRules[i], o = void 0 === n.expectedResult || n.expectedResult, n.regex && n.regex.test(t) !== o && n.error && r.push({
            error: n.error
        });
        for (i = 0; i < this.onSubmitRules.length; i += 1) n = this.onSubmitRules[i], o = void 0 === n.expectedResult || n.expectedResult, n.regex && n.regex.test(t) !== o && n.error && r.push({
            error: n.error
        });
        return 0 === r.length ? (this.delClassNames("invalid"), this.emit("validationPassed"), t) : (this.addClassNames("invalid"), this.emit("validationFailed", r), !1)
    }
}
