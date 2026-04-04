function(e, t, i) {
    function n(e) {
        e = e || {}, s.call(this, "div", {
            className: "ProgressCircle"
        }), this.addClassNames(e.className), this.size = e.size || c, this.thickness = e.thickness || Math.round(.15 * this.size), this.bgThickness = e.bgThickness || this.thickness + 2, this.color = e.color || "#EEE", this.bgColor = e.bgColor, e.tooltip && (this.tooltipText = e.tooltip, r.addTooltip(this, this._tooltipHandler.bind(this), {
            longTapExplanation: !0
        })), this.radius = (this.size - this.bgThickness) / 2, this.center = this.size / 2;
        var t = this.createChild("canvas", {
                className: "canvas"
            })
            .rootElement;
        t.width = this.size, t.height = this.size, t.style.width = this.size + "px", t.style.height = this.size + "px", this._ctx = t.getContext("2d")
    }
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(88),
        s = i(72),
        c = 50;
    a(n, s), e.exports = n, n.prototype.setValue = function(e, t) {
        var i;
        t ? (this.value = e, i = e / t) : (this.value = e, i = e), this.maxValue = t;
        var n = this._ctx;
        this._ctx.clearRect(0, 0, n.canvas.width, n.canvas.height), this.bgColor && this._drawArc(this.bgThickness, this.bgColor, 1), this._drawArc(this.thickness, this.color, i)
    }, n.prototype._drawArc = function(e, t, i) {
        i < .01 && 0 !== i && (i = .01), i > .99 && 1 !== i && (i = .99);
        var n = this._ctx;
        n.lineWidth = e, n.strokeStyle = t, n.beginPath(), n.arc(this.center, this.center, this.radius, -.5 * Math.PI, (2 * i - .5) * Math.PI, !1), n.stroke()
    }, n.prototype._tooltipHandler = function() {
        var e = this.tooltipText + o("ui.common.colon");
        return this.maxValue ? e + this.value + " / " + this.maxValue : e + this.value + "%"
    }
}
