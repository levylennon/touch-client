function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "TradeGold"
        });
        var e = this;
        this._blinkTimeout = null, this._currentKama = 0, this._kamaContent = this.createChild("div", {
            className: "kamaContent"
        });
        var t;
        c.addTooltip(this._kamaContent, function() {
            return t || (t = new a("div", {
                className: "kamaTooltip",
                text: r("ui.exchange.kamas")
            })), t
        }), c.enableTooltip(this._kamaContent, !1);
        var i = this._kamaContent.createChild("div", {
            className: "imgContent"
        });
        i.createChild("div", {
            className: "kamaImg"
        });
        var n = this._kamaContent.createChild("div", {
                className: "kamaInput"
            }),
            o = this._input = n.appendChild(new s({
                minValue: 0,
                title: r("ui.common.kamas")
            }));
        n.createChild("div", {
            className: "kamaUnit",
            text: r("ui.common.short.kama")
        }), o.on("focus", function() {
            o.maxValue = window.gui.playerData.inventory.kamas
        }), o.on("change", function(t) {
            e._currentKama !== t && (e._currentKama = t, e.emit("kamaChange", t))
        })
    }
    i(1302);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(17)
        .getText,
        s = i(423),
        c = i(88);
    o(n, a), e.exports = n, n.prototype.getKama = function() {
        return this._input.getValue()
    }, n.prototype.setKama = function(e) {
        this._input.setValue(e)
    }, n.prototype.blink = function(e) {
        e = e || 3;
        var t = this;
        window.clearTimeout(this._blinkTimeout), this._blinkTimeout = window.setTimeout(function() {
            t._kamaContent.delClassNames("blink")
        }, 1e3 * e), this._kamaContent.addClassNames("blink")
    }, n.prototype.toggleReady = function(e) {
        this._kamaContent.toggleClassName("isReady", e)
    }, n.prototype.setAsRemote = function() {
        c.enableTooltip(this._kamaContent, !0), this._input.setReadonly(!0)
    }, n.prototype.reset = function() {
        this._input.setValue(0), this._input.setReadonly(!1), window.clearTimeout(this._blinkTimeout), this._kamaContent.delClassNames("blink"), this._currentKama = 0, c.enableTooltip(this._kamaContent, !1)
    }, n.prototype.setReadOnly = function(e) {
        this._input.setReadonly(e)
    }
}
