function(e, t, i) {
    function n(e) {
        e = e || {}, this.isVertical = e.vertical || !1, this.pixelValue = 1 / h, this.hasTriedToGetPixelValue = !1, this.shouldGetPixelValue = !1, this.mustRecompute = !1, l.call(this, "div", {
            className: "ProgressBarMultiple",
            name: e.name
        }), this.barBg = this.createChild("div", {
            className: "barBg"
        }), this.currentValues = [], this.previousValues = [], this.colorBars = [], this.maskSizes = [];
        for (var t = e.valueClassNames || [""], i = t.length - 1; i >= 0; i--) this.currentValues[i] = this.previousValues[i] = 0, this.colorBars[i] = this._newColorBar(t[i]);
        e.tooltip && (this.tooltipText = e.tooltip, s.addTooltip(this, this._tooltipHandler.bind(this))), this.on("destroy", function() {
            this.tweener && this.tweener.cancel(), this.colorBars = null
        })
    }
    i(1037);
    var o = i(17)
        .getText,
        a = i(16),
        r = i(56)
        .inherits,
        s = i(88),
        c = i(22),
        l = i(72),
        d = 0,
        u = 2,
        p = 4,
        h = 100,
        f = "webkitMaskSize";
    r(n, l), e.exports = n, n.prototype._newColorBar = function(e) {
        var t = this.createChild("div", {
            className: "barFill"
        });
        return this.isVertical && t.addClassNames("vertical"), t.createChild("div", {
            className: ["barColor", e]
        }), t
    }, n.prototype.setValue = function(e, t, i) {
        this.maxValue = t, this._setGaugeLogicalValue(d, e, i), this._computeGaugePhysicalValue(d), this.shouldGetPixelValue ? this._tryAndGetPixelValue(this._refresh) : this._refresh()
    }, n.prototype._setGaugeLogicalValue = function(e, t, i) {
        this.maxValue ? (e === d && (this.humanValue = t), void 0 !== i ? t = i : t /= this.maxValue) : e === d && (this.humanValue = Math.round(100 * t)), this.currentValues[e] = t
    }, n.prototype._computeGaugePhysicalValue = function(e) {
        var t = this.currentValues[e],
            i = e ? this.currentValues[e - 1] : 0,
            n = u * this.pixelValue,
            o = t > i && t - i < n,
            a = t < 1 && 1 - t < n;
        !o && !a || this.hasTriedToGetPixelValue || (this.shouldGetPixelValue = !0);
        var r;
        if (o) {
            var s = u + (0 === i ? p : 0);
            r = "calc(" + Math.round(100 * i) + "% + " + s + "px)"
        } else r = a ? "calc(100% - " + (u + p) + "px)" : Math.round(100 * t) + "%";
        this.maskSizes[e] = r
    }, n.prototype._tryAndGetPixelValue = function(e) {
        this.shouldGetPixelValue = !1, window.setTimeout(function(t) {
            if (t.colorBars) {
                var i = t.colorBars[0].rootElement,
                    n = t.isVertical ? i.offsetHeight : i.offsetWidth;
                0 !== n && (t.pixelValue = 1 / n, t.mustRecompute = !0), t.hasTriedToGetPixelValue = !0, e.call(t)
            }
        }, 50, this)
    }, n.prototype._getMaskSizeStyle = function(e) {
        return "0%" === e && (e = "1px"), this.isVertical ? "100% " + e : e + " 100%"
    }, n.prototype._setColorBarPos = function(e, t) {
        e.setStyle(f, this._getMaskSizeStyle(t))
    }, n.prototype._tooltipHandler = function() {
        var e = this.tooltipText + o("ui.common.colon");
        return this.maxValue ? e + this.humanValue + " / " + this.maxValue : e + this.humanValue + "%"
    }, n.prototype.setValues = function(e) {
        for (var t = 0; t < this.colorBars.length; t++) this._setGaugeLogicalValue(t, Math.max(Math.min(e[t] || 0, 1), 0)), this._computeGaugePhysicalValue(t);
        this.shouldGetPixelValue ? this._tryAndGetPixelValue(this._refresh) : this._refresh()
    }, n.prototype._recompute = function() {
        for (var e = 0; e < this.colorBars.length; e++) this._computeGaugePhysicalValue(e);
        this.mustRecompute = !1
    }, n.prototype._refresh = function() {
        this.mustRecompute && this._recompute();
        for (var e = 0; e < this.colorBars.length; e++) this._setColorBarPos(this.colorBars[e], this.maskSizes[e]), this.previousValues[e] = this.currentValues[e]
    }, n.prototype.setValuesWithAnimation = function(e, t, i) {
        this.animTimeInMs = t;
        for (var n = 0; n < this.colorBars.length; n++) this._setGaugeLogicalValue(n, Math.max(Math.min(e[n] || 0, 1), 0)), this._computeGaugePhysicalValue(n);
        if (this.shouldGetPixelValue) {
            var o = this;
            return this._tryAndGetPixelValue(function() {
                o._recompute(), o._startAnim(i)
            })
        }
        this._startAnim(i)
    }, n.prototype._startAnim = function(e) {
        this.currentAnimBarIndex = 0, this.nextAnimFunc = this.nextAnimFunc || this._startNextAnim.bind(this), this.endAnimCb = e, this._startNextAnim()
    }, n.prototype._startNextAnim = function() {
        if (this.colorBars) {
            var e = this.currentAnimBarIndex;
            this.currentAnimBarIndex++;
            var t = this.colorBars[e],
                i = this.maskSizes[e],
                n = e === this.currentValues.length - 1 ? this.endAnimCb : this.nextAnimFunc,
                o = e >= 1 ? this.currentValues[e - 1] : 0,
                r = Math.max(this.previousValues[e], o),
                s = this.currentValues[e],
                l = this.previousValues[e];
            this.previousValues[e] = s;
            var d = ~~(Math.abs(s - r) * this.animTimeInMs);
            if (d < 15) return this._setColorBarPos(t, i), n && n();
            r !== l && (this._setColorBarPos(t, Math.round(100 * r) + "%"), a.forceReflow(t));
            var u = {};
            u[f] = this._getMaskSizeStyle(i), this.tweener = c.tween(t, u, {
                time: d,
                easing: "linear"
            }, n)
        }
    }
}
