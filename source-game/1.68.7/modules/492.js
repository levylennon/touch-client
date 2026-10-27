function(e, t, i) {
    function n(e) {
        s.call(this, "div", {
            className: "serenityGauge"
        }), e = e || {};
        var t = this.isMini = e.isMini;
        t && this.addClassNames("mini"), t || this.createChild("div", {
            className: ["bigIcon", "bigIcon_mad"]
        });
        var i = this.createChild("div", {
                className: "barWrapper"
            }),
            n = this._serenityBar = i.createChild("div", {
                className: "serenityBar"
            });
        this.zones = [], this._createColorZone("stamina", c, l, o("ui.mount.viewerTooltipZone1")), this._createColorZone("maturity", l, d, o("ui.mount.viewerToolTipZone2")), this._createColorZone("love", d, u, o("ui.mount.viewerTooltipZone3")), this._serenityBarCursor = n.createChild("div", {
            className: "cursor"
        }), t || (this._serenityValue = this._serenityBarCursor.createChild("div", {
            className: "value"
        })), i.createChild("div", {
            className: "background"
        }), t || this.createChild("div", {
            className: ["bigIcon", "bigIcon_happy"]
        })
    }
    i(493);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(88),
        s = i(72),
        c = -1e4,
        l = -1999,
        d = 1999,
        u = 1e4,
        p = 73,
        h = 50;
    a(n, s), e.exports = n, n.SERENITY_MIN = c, n.SERENITY_MAX = u, n.GOOD_SERENITY_MIN = l, n.GOOD_SERENITY_MAX = d, n.prototype._createColorZone = function(e, t, i, n) {
        var a = this._serenityBar.createChild("div", {
            className: ["colorZone", e]
        });
        this.isMini || (a.createChild("div", {
            className: "icon"
        }), r.addTooltip(a, o("tablet.mount.serenityZoneTooltip", t, i, n), {
            longTapExplanation: !0
        })), a.name = e, a.min = t, a.max = i, this.zones.push(a), this._serenityBar[e] = a
    }, n.prototype.resize = function() {
        this.isMini ? (this.serenityBarWidth = p, this.serenityCursorOffset = -h / 2) : (this.serenityBarWidth = this._serenityBar.rootElement.clientWidth, this.serenityCursorOffset = -this._serenityBarCursor.rootElement.clientWidth / 2);
        for (var e = u - c, t = this._serenityBar.maturity, i = (t.max - t.min) / e * this.serenityBarWidth / 2, n = 0, o = this.zones, a = 0; a < o.length; a++) {
            var r = o[a],
                s = (r.max - r.min) / e,
                l = s * this.serenityBarWidth;
            "maturity" !== r.name && (l += i), "stamina" !== r.name && (n -= i), r.setStyle("left", n + "px"), r.setStyle("width", l + "px"), n += l
        }
        this._serenityBar.maturity.setStyles({
            borderBottomLeftRadius: i + "px",
            borderTopRightRadius: i + "px"
        }), void 0 !== this._currentSerenity && this.setValue(this._currentSerenity)
    }, n.prototype.setValue = function(e) {
        if (this._currentSerenity = e, this.serenityBarWidth) {
            this.isMini || this._serenityValue.setText(e);
            var t = (e - c) / (u - c),
                i = t * this.serenityBarWidth + this.serenityCursorOffset;
            this._serenityBarCursor.setStyle("left", i + "px"), this._serenityBar.stamina.toggleClassName("disabled", e > 0), this._serenityBar.maturity.toggleClassName("disabled", e < l || e > d), this._serenityBar.love.toggleClassName("disabled", e < 0)
        }
    }
}
