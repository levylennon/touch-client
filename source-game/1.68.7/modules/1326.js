function(e, t, i) {
    function n(e, t, i) {
        d.call(this, "div", {
            className: "box"
        }), this.options = i || {}, this._createDom(), e && this.update(e), t && this.resize(t)
    }

    function o() {
        this.emit("tapItemImage")
    }

    function a(e) {
        var t = {
            imgArticle: null,
            imgPromo: []
        };
        return e.promo && e.promo.forEach(function(e) {
            t.imgPromo.push(e.image)
        }), e.media && e.media.length > 0 && e.media[0].param === _ ? t.imgArticle = e.media[0].url : e.image && e.image.length > g && (t.imgArticle = e.image[g].url), t
    }

    function r(e) {
        var t = e._promoRate,
            i = e.is_free,
            n = M.isArticleBestOffer(e);
        return n ? p("ui.shop.bestOffer") : i ? p("ui.shop.free") : t
    }

    function s(e) {
        return !(!e || !e.references || e.references.length <= 0) && Boolean(e.references[0].reference_virtualsubscriptionlevel)
    }

    function c(e) {
        return !(!e || !e.references || 1 !== e.references.length) && Boolean(e.references[0].type === A)
    }
    i(1327);
    var l = i(56)
        .inherits,
        d = i(72),
        u = i(63),
        p = i(17)
        .getText,
        h = i(1328),
        f = i(1167),
        b = i(1325)
        .addItemsFromArticle,
        m = i(32)
        .formatUrlToCssUrl,
        M = i(1325),
        g = 1,
        _ = "ORIGINAL",
        A = "GOULTINE",
        O = 144,
        v = {
            3171: "diamond",
            3172: "gold",
            3173: "silver",
            3174: "bronze",
            3175: "brown"
        },
        y = ["diamond", "gold", "silver", "bronze", "brown"];
    l(n, d), e.exports = n, n.prototype._createDom = function() {
        var e = this,
            t = this.options,
            i = this.createChild("div", {
                className: "slot"
            });
        this.slotBackground = i.createChild("div", {
            className: "slotBackground"
        });
        var n = i.createChild("div", {
            className: "slotIllu"
        });
        if (this.slotImg = n.createChild("div", {
                className: "slotImg"
            }), t.showReferences && (this.slotItems = n.createChild("div", {
                className: "slotItems"
            })), this.slotPromoImg = n.createChild("div", {
                className: "slotPromoImg"
            }), t.showDescription && (this.description = i.createChild("div", {
                className: "description"
            })), i.createChild("div", {
                className: "slotBorder"
            }), t.canTapImage && (u(i), i.on("tap", o.bind(this))), t.showTitle) {
            var a = this.createChild("div", {
                className: "labels"
            });
            this.title = a.createChild("div", {
                className: "title"
            }), this.subtitle = a.createChild("div", {
                className: "subtitle"
            })
        }
        if (t.showButtons) {
            var r = this._articleButtons = this.appendChild(new h);
            r.on("tapIAPButton", function() {
                e.emit("tapIAPButton")
            }), r.on("tapHardButton", function() {
                e.emit("tapHardButton")
            }), r.on("tapSoftButton", function() {
                e.emit("tapSoftButton")
            })
        }
        this._promoBanner = i.createChild("div", {
            className: "promoBanner",
            hidden: !0
        }), this._promoBannerOver = i.createChild("div", {
            className: "promoBannerOver",
            hidden: !0
        }), this._promoBannerFree = i.createChild("div", {
            className: "promoBannerFree",
            hidden: !0
        });
        var s = this._promoCorner = i.createChild("div", {
            className: "promoCorner",
            hidden: !0
        });
        s.createChild("div", {
            className: "promoDummy"
        });
        var c = s.createChild("div", {
            className: "promoElement"
        });
        c.createChild("div", {
            className: "margin"
        });
        var l = c.createChild("div", {
            className: "rotatedContainer"
        });
        this._promoRate = l.createChild("div", {
            className: "text"
        }), this._promoStrip = this.createChild("div", {
            className: "promoStrip",
            hidden: !0
        }), this.on("destroy", function() {
            this._clearCountdown()
        })
    }, n.prototype._clearCountdown = function() {
        this.countdown && this.countdown.clear()
    }, n.prototype.clear = function() {
        this._clearCountdown()
    }, n.prototype.update = function(e) {
        var t = this.options,
            i = this;
        this.articleId = e.id;
        var n = a(e);
        this.slotImg.setStyle("backgroundImage", n.imgArticle ? m(n.imgArticle) : "none"), this.slotPromoImg.clearContent(), n.imgPromo.forEach(function(e) {
            var t = i.slotPromoImg.createChild("div", {
                className: "promoImg"
            });
            t.setStyle("backgroundImage", m(e))
        });
        var o = !e.hasOwnProperty("_softPrice"),
            l = e.is_free,
            d = c(e);
        this.toggleClassName("goultineOnly", o && !l && !d), this.toggleClassName("freeItem", l && !d), this.toggleClassName("packGoultine", d), this.toggleClassName("bonusPack", s(e)), this.delClassNames(y);
        for (var u = e.metas || [], h = 0; h < u.length; h++) {
            var g = u[h];
            if (parseInt(g.id, 10) === O && g.metas.length > 0) {
                var _ = g.metas.length > 0 && v[g.metas[0].id];
                _ && this.addClassNames(_)
            }
        }
        var A = t.promoType,
            z = e._promoRate,
            w = "banner" === A,
            T = "corner" === A,
            C = "strip" === A,
            I = !A,
            S = Boolean(z) || l,
            E = M.isArticleBestOffer(e),
            L = e.enddate && e.showCountDown;
        this._promoBanner.hide(), this._promoBannerOver.hide(), this._promoBannerFree.hide(), this._promoCorner.hide(), this._promoStrip.hide(), !E && w ? (this._promoBanner.toggleDisplay(Boolean(L) && !l), this._promoBannerOver.toggleDisplay(!1), this._promoBannerFree.toggleDisplay(l), L && (this._clearCountdown(), this.countdown = new f(new Date(e.enddate), function(e, t, n) {
            return e ? console.error(e) : (i._promoBanner.setText(p("tablet.shop.promo.banner", n)), void i._promoBannerFree.setText(p("tablet.shop.promo.banner", n)))
        }, function() {
            return i.rootElement ? (i._promoBannerOver.setText(p("tablet.shop.promo.banner.over")), i._promoBannerFree.setText(p("tablet.shop.promo.banner.over")), i._promoBannerOver.toggleDisplay(!l), void i._promoBanner.toggleDisplay(!1)) : console.error(new Error("articleBox onTimeout: the box is missing " + i.articleId))
        }))) : E && !I || T ? (this._promoCorner.toggleDisplay(S || E), this._promoCorner.toggleClassName("promoCorner", !E && !l), this._promoCorner.toggleClassName("promoCornerFree", !E && l), this._promoCorner.toggleClassName("promoCornerBestOffer", E), this._promoRate.setText(r(e))) : C && (this._promoStrip.toggleClassName("promoStrip", !l), this._promoStrip.toggleClassName("promoStripFree", l), S && this._promoStrip.setText(r(e))), t.showTitle && (this.title.setText(e.name), this.subtitle.setText(e.subtitle || "")), t.showReferences && b(e, this.slotItems, {
            hideSubscriptionDays: !0
        }), this.updatePrice(e), t.showDescription && this.description.setHtml(e.description)
    }, n.prototype.updatePrice = function(e) {
        this.options.showButtons && this._articleButtons.update(e)
    }, n.prototype.resize = function(e) {
        this.setStyles({
            width: e.boxWidth + "px",
            height: e.boxHeight + "px"
        }), this.options.showButtons && this._articleButtons.resize(e)
    }, n.prototype.getButtons = function() {
        return this._articleButtons
    }
}
