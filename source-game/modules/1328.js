function(e, t, i) {
    function n(e, t) {
        c.call(this, "div", {
            className: "priceButtonsBox"
        }), this._hintArrow = null, this._createDom(), e && this.update(e), t && this.resize(t)
    }

    function o(e) {
        "tapHardButton" === e && this._clearHintArrow(), this.emit(e)
    }

    function a(e, t, i, n, o, a) {
        var r;
        e.toggleClassName("iap", Boolean(n)), n ? (e.delClassNames(["unavailable"]), e.currentPriceText.setText(t)) : (e.toggleClassName("unavailable", !t), o ? (e.currentPriceText.setText(p("ui.shop.free")), e.replaceClassNames(["bigPrice"], ["lowPrice"]), e.enable()) : t ? (a && (i = t, t = 0), e.currentPriceText.setText(l.kamasToString(t, "")), t >= h ? e.replaceClassNames(["lowPrice"], ["bigPrice"]) : t < f ? e.replaceClassNames(["bigPrice"], ["lowPrice"]) : e.delClassNames(["lowPrice", "bigPrice"]), e.enable(), i && (r = l.kamasToString(i, ""), e.originalPriceText.setText(r))) : (e.currentPriceText.setText(p("ui.item.averageprice.unavailable")), e.replaceClassNames(["lowPrice"], ["bigPrice"]), e.disable()))
    }

    function r(e) {
        if (e.isVisible() && e.rootElement && e.currentPriceText && e.currentPriceText.rootElement) {
            var t = e.rootElement.getBoundingClientRect();
            if (0 !== t.width && 0 !== t.height) {
                e.currentPriceText.setStyle("fontSize", b + "px");
                var i = e.currentPriceText.rootElement.getBoundingClientRect(),
                    n = t.height * M / (i.height / b),
                    o = (t.width - m) / (i.width / b),
                    a = Math.min(n, o);
                o = (t.width - m - a) / (i.width / b);
                var r = Math.min(n, o),
                    s = r * g;
                e.currentPriceText.setStyle("fontSize", r + "px"), e.currentIcon.setStyles({
                    width: Math.floor(r) + "px",
                    height: Math.floor(r) + "px"
                }), e.originalPriceText.setStyle("fontSize", s + "px"), e.originalIcon.setStyles({
                    width: Math.floor(s) + "px",
                    height: Math.floor(s) + "px"
                })
            }
        }
    }
    i(1329);
    var s = i(56)
        .inherits,
        c = i(72),
        l = i(16),
        d = i(86),
        u = d.DofusButton,
        p = i(17)
        .getText,
        h = 1e6,
        f = 1e3,
        b = 15,
        m = 15,
        M = .4,
        g = .9;
    s(n, c), e.exports = n, n.prototype._createDom = function() {
        function e(e, i) {
            var n = i ? ["priceButton", i] : "priceButton",
                o = t.appendChild(new u("", {
                    className: n
                }, e)),
                a = o.createChild("div", {
                    className: "prices"
                }),
                r = a.createChild("div", {
                    className: "original"
                });
            o.originalPriceText = r.createChild("div", {
                className: "text"
            }), o.originalIcon = r.createChild("div", {
                className: "icon"
            });
            var s = a.createChild("div", {
                className: "current"
            });
            return o.currentPriceText = s.createChild("div", {
                className: "text"
            }), o.currentIcon = s.createChild("div", {
                className: "icon"
            }), o
        }
        this.createChild("div", {
            className: "priceBorder"
        });
        var t = this.priceButtons = this.createChild("div", {
            className: "priceButtons"
        });
        this.iapButton = e(o.bind(this, "tapIAPButton")), this.hardButton = e(o.bind(this, "tapHardButton"), "hard"), this.softButton = e(o.bind(this, "tapSoftButton"), "soft")
    }, n.prototype.update = function(e) {
        this.articleId = e.id;
        var t = e._hardOriginalPrice,
            i = e.product;
        if (this._clearHintArrow(), this.iapButton.hide(), this.hardButton.hide(), this.softButton.hide(), this.hardButton.delClassNames("twoPrices"), this.iapButton.delClassNames("twoPrices"), e.is_free) return this.priceButtons.toggleClassName("promo", !1), a(this.hardButton, 0, 0, !1, !0), this.hardButton.show(), void this.checkButtons();
        if (i && (this.priceButtons.toggleClassName("promo", !1), a(this.iapButton, e._inAppPrice, e.original_price, !0, !1), this.iapButton.show()), e._hardPrice) {
            this.priceButtons.toggleClassName("promo", e.hardOnlyTuto || Boolean(t)), a(this.hardButton, e._hardPrice, t, !1, !1, e.hardOnlyTuto), a(this.softButton, e._softPrice, e._softOriginalPrice, !1, !1), this.hardButton.show();
            var n = !e.hasOwnProperty("_softPrice");
            this.softButton.toggleDisplay(!n), n && i && (this.iapButton.addClassNames("twoPrices"), this.hardButton.addClassNames("twoPrices")), n || this.hardButton.addClassNames("twoPrices")
        }
        this.checkButtons()
    }, n.prototype.checkButtons = function() {
        var e = this;
        window.setTimeout(function() {
            r(e.hardButton), r(e.softButton), r(e.iapButton)
        }, 0)
    }, n.prototype.resize = function() {
        this.checkButtons()
    }, n.prototype._clearHintArrow = function() {
        this._hintArrow && (this._hintArrow.clearContent(), this._hintArrow = null)
    }
}
