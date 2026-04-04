function(e, t, i) {
    function n(e) {
        e = e || {}, s.call(this, "div", {
            className: "ProgressBar",
            name: e.name
        }), this.addClassNames(e.className), this.barBg = this.createChild("div", {
            className: "barBg"
        }), this.barFill = this.createChild("div", {
            className: "barFill"
        }), this.barColor = this.barFill.createChild("div", {
            className: "barColor"
        }), this.vertical = e.vertical || !1, this.barFill.toggleClassName("vertical", this.vertical), this.tooltipText = e.tooltipText, e.tooltip && r.addTooltip(this, this._tooltipHandler.bind(this), {
            longTapExplanation: e.longTapExplanation
        }), this.epsilon = void 0 === e.epsilon ? 5 : e.epsilon, this.setValue(e.value || 0)
    }
    i(491);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(88),
        s = i(72);
    a(n, s), e.exports = n, n.prototype.setValue = function(e, t, i) {
        this.maxValue = t, t ? (this.humanValue = e, void 0 !== i ? e = i : e /= t) : this.humanValue = Math.round(100 * e), e *= 100;
        var n = this.epsilon;
        e < n && e > 0 && (e = n), e > 100 - n && e < 100 && (e = 100 - n), e = Math.round(e);
        var o = e ? e + "%" : "1px";
        this.barFill.setStyle("-webkit-mask-size", this.vertical ? "100% " + o : o + " 100%"), this.barFill.setStyle("-webkit-mask-position", this.vertical ? "0 100%" : "0 0")
    }, n.prototype.setRange = function(e, t) {
        var i = t - e,
            n = i ? Math.round(100 * i) + "%" : "1px",
            o = e ? Math.round(100 * e) + "%" : "1px";
        this.barFill.setStyle("-webkit-mask-size", this.vertical ? "100% " + n : n + " 100%"), this.barFill.setStyle("-webkit-mask-position", this.vertical ? "100% " + o : o + " 100%")
    }, n.prototype._tooltipHandler = function() {
        var e = this.tooltipText ? this.tooltipText + o("ui.common.colon") : "";
        return this.maxValue ? e + this.humanValue + " / " + this.maxValue : e + this.humanValue + "%"
    }
}
