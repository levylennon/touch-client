function(e, t, i) {
    function n() {
        s.call(this, {
            title: a("tablet.shop.needMoreHardCurrency")
                .toUpperCase(),
            className: "BuyHardCurrencyConfirmWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 540,
                height: 440,
                isModal: !0
            }
        }), this._reset(), this.on("open", this._onOpen);
        var e = this,
            t = window.dofus.connectionManager;
        t.on("shopIAPArticlesSuccess", function(t) {
            e.content && e.displayHardCurrencyPack(t)
        }), t.on("shopIAPArticlesError", function() {
            e.content && e.displayError(u.NO_PACK, new Error("IAP articles are not available"))
        })
    }
    i(1346);
    var o = i(86),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(70),
        c = i(52),
        l = i(838),
        d = i(1326),
        u = {
            NO_PACK: 0,
            AMOUNT_TOO_HIGH: 1
        };
    r(n, s), e.exports = n, n.prototype._reset = function() {
        this.content = null, this.buyPackText = null, this.articleBoxContainer = null, this.articleBox = null, this.hardCurrencyAmountMissing = 0
    }, n.prototype._onOpen = function() {
        this.content || this._createContent()
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this._reset()
    }, n.prototype._createContent = function() {
        this.content = this.windowBody.createChild("div", {
            className: "content"
        });
        var e = this.content.createChild("div", {
            className: "buyPackTextContainer"
        });
        this.buyPackText = e.createChild("div", {
            className: "buyPackText"
        }), this.articleBoxContainer = this.content.createChild("div", {
            className: "articleBoxContainer"
        }), this.articleBox = this.articleBoxContainer.appendChild(new d(null, {
            boxWidth: 190,
            boxHeight: 220
        }, {
            showTitle: !0,
            showButtons: !0,
            promoType: "corner"
        })), this.content.appendChild(new o({
            text: a("tablet.shop.seeAllHardCurrencyPacks"),
            className: ["greenButton", "seePacksBtn"]
        }, function() {
            c.close("buyHardCurrencyConfirm"), c.open("market", {
                tabId: "shop",
                tabParams: {
                    category: "goultines"
                }
            })
        }))
    }, n.prototype.confirmBuy = function(e) {
        c.open(this.id), this.content.hide(), this.windowBody.addClassNames("spinner"), this.hardCurrencyAmountMissing = e;
        var t = this;
        l.getStoreInfos(function(e) {
            return e ? t.displayError(u.NO_PACK, e) : void window.dofus.send("shopIAPArticlesRequest")
        })
    }, n.prototype.displayError = function(e, t) {
        t && console.error(t), this.content && (this.content.show(), this.articleBoxContainer.hide(), this.windowBody.delClassNames("spinner"), e === u.AMOUNT_TOO_HIGH ? this.buyPackText.setText(a("tablet.shop.noHardCurrencyPackForAmount")) : this.buyPackText.setText(a("tablet.shop.noHardCurrencyPack")))
    }, n.prototype.displayHardCurrencyPack = function(e) {
        var t = l.validateArticles(e.articles),
            i = null,
            n = Number.MAX_VALUE;
        if (!t.length) return this.displayError(u.NO_PACK, new Error("No valid IAP " + t.length + " out of " + e.articles.length + " articles"));
        for (var o = 0; o < t.length; o++) {
            var r = t[o],
                s = 1 === r.references.length && r.references[0];
            if (s && "GOULTINE" === s.type) {
                var d = parseInt(s.quantity, 10);
                isNaN(d) || d < this.hardCurrencyAmountMissing || d < n && (n = d, i = r)
            }
        }
        return i ? (this.content.show(), this.articleBoxContainer.show(), this.windowBody.delClassNames("spinner"), this.buyPackText.setText(a("tablet.shop.buyHardCurrencyPack", n)), this.articleBox.update(i), void this.articleBox.on("tapIAPButton", function() {
            c.close("buyHardCurrencyConfirm"), l.purchaseArticleOnStore(i)
        })) : this.displayError(u.AMOUNT_TOO_HIGH)
    }
}
