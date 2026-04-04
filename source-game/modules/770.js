function(e, t, i) {
    function n(e, t) {
        r.call(this, "div", {
            className: "Gauge"
        }), this.createChild("div", {
            className: "barBg"
        });
        var i = this.createChild("div", {
            className: "barBox"
        });
        this.bars = [];
        for (var n = 0, a = e.length; n < a; n += 1) {
            var s = i.createChild("div", {
                className: "barContainer"
            });
            s.createChild("div", {
                className: ["bar", e[n]]
            }), s.tooltip = i.createChild("div", {
                className: "tooltip"
            }), s.tooltipContent = new r("div"), o(s.tooltip, s.tooltipContent, {
                openOnTap: !0
            }), this.bars.push(s)
        }
        this.width = t
    }
    var o = i(88)
        .addTooltip,
        a = i(56)
        .inherits,
        r = i(72);
    a(n, r), e.exports = n, n.prototype.setValues = function(e) {
        for (var t = 0, i = 0, n = this.bars.length; i < n; i += 1) {
            var o = e[i],
                a = this.bars[i],
                r = Math.floor(this.width * o.weight);
            a.setStyles({
                "-webkit-mask-position": t + "px 0",
                "-webkit-mask-size": r + "px 100%"
            }), a.tooltip.setStyles({
                left: t + "px",
                width: r + "px"
            }), t += r, a.tooltipContent.setText(o.tooltip)
        }
    }
}
