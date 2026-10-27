function(e, t, i) {
    function n() {
        l.call(this, {
            title: a("ui.common.confirm"),
            className: "ShopConfirmWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 700,
                height: 400,
                isModal: !0,
                modalZIndex: 170
            }
        }), this._hintArrow = null, this._reset(), this.on("open", this._onOpen), this.on("close", this._onClose);
        var e = this;
        c.on("canNotComputeSoftPrices", function() {
            if (e.articleBox) {
                var t = !e.isPurchasing,
                    i = !e.params.article.product && Boolean(e.params.isSoft);
                t && i && d.close(e.id)
            }
        }), c.on("computedSoftPricesChange", function() {
            if (e.articleBox) {
                var t = !e.isPurchasing,
                    i = !e.params.article.product && Boolean(e.params.isSoft);
                t && i && (u.enrichWithSoftPrice(e.params.article), e.updateAmount())
            }
        })
    }
    i(1324);
    var o = i(86),
        a = i(17)
        .getText,
        r = i(16),
        s = i(56)
        .inherits,
        c = i(840),
        l = i(70),
        d = i(52),
        u = i(838),
        p = i(921),
        h = i(1325)
        .addItemsFromArticle,
        f = i(1326),
        b = i(129),
        m = i(7);
    s(n, l), e.exports = n, n.prototype._reset = function() {
        this.params = null, this.cb = null, this.articleBox = null, this.buyBtn = null, this.buyBtnAmount = null, this.buyBtnIcon = null, this.purchaseLoader = null, this._setIsPurchasing(!1)
    }, n.prototype._onOpen = function() {
        this.articleBox || this._createContent()
    }, n.prototype._onClose = function() {
        return this._hintArrow.hideArrow(), this.cb && this.cb(!1)
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this._reset()
    }, n.prototype._createContent = function() {
        var e = this.windowBody.createChild("div", {
                className: "twoColumns"
            }),
            t = e.createChild("div", {
                className: "leftCol"
            });
        this.articleBox = t.appendChild(new f(null, {
            boxWidth: 290,
            boxHeight: 330
        }, {
            showTitle: !0,
            promoType: "corner"
        }));
        var i = e.createChild("div", {
                className: "rightCol"
            }),
            n = i.createChild("div", {
                className: "articleLabels"
            });
        this.articleTitle = n.createChild("div", {
            className: "articleTitle"
        }), this.articleSubtitle = n.createChild("div", {
            className: "articleSubtitle"
        }), this.itemsList = i.createChild("div", {
            className: "itemsList"
        });
        var r = i.createChild("div", {
                className: "bottomRightContainer"
            }),
            s = r.createChild("div", {
                className: "infoArticle"
            }),
            c = a("ui.common.quantity") + a("ui.common.colon"),
            l = s.createChild("div", {
                className: "quantityContent"
            });
        l.createChild("div", {
            className: "quantityLabel",
            text: c
        }), l.createChild("div", {
            className: "quantityAmount",
            text: "1"
        });
        var d = a("ui.common.price") + a("ui.common.colon"),
            u = s.createChild("div", {
                className: "priceContent"
            });
        u.createChild("div", {
            className: "priceLabel",
            text: d
        }), this.amount = u.createChild("div", {
            className: "priceAmount"
        }), this.priceIcon = u.createChild("div", {
            className: "priceIcon"
        });
        var h = this;
        this.buyBtn = r.appendChild(new o({
            className: ["buyBtn", "greenButton"]
        }, function() {
            h._setIsPurchasing(!0), h.cb(!0)
        })), this._hintArrow = this.buyBtn.appendChild(new p);
        var b = this.buyBtn.createChild("div", {
            className: "btnContent"
        });
        this.btnLabel = b.createChild("div", {
            className: "btnLabel"
        }), this.purchaseLoader = i.createChild("div", {
            className: ["purchaseLoader", "spinner"],
            hidden: !0
        }), this.purchaseLoader.createChild("div", {
            className: "purchaseLoaderLabel",
            text: a("tablet.shop.transactionInProgress")
        })
    }, n.prototype.confirmBuy = function(e, t) {
        d.open(this.id), this._setIsPurchasing(!1), this.params = e, this.cb = t, this.articleBox.update(e.article), this.update()
    }, n.prototype._setIsPurchasing = function(e) {
        this.isPurchasing = Boolean(e), this.articleBox && (e ? (this.closeButton.disable(), this.buyBtn.disable()) : (this.closeButton.enable(), this.buyBtn.enable()), this.purchaseLoader.toggleDisplay(e))
    }, n.prototype.update = function() {
        if (this.articleBox) {
            var e = this.params,
                t = e.article;
            this.articleTitle.setText(t.name), this.articleSubtitle.setText(t.subtitle || ""), this.btnLabel.setText(a("ui.common.buy"));
            var i = t.product;
            if (i && e.isInApp) this.amount.setText(i.price), this.priceIcon.hide();
            else if (t.is_free) this.btnLabel.setText(a("ui.shop.free")), this.amount.setText(a("ui.shop.free")), this.priceIcon.hide();
            else {
                var n = e.isSoft,
                    o = window.gui.playerData.inventory,
                    s = n ? o.kamas : o.goultines,
                    c = n ? t._softPrice : t._hardPrice;
                c > s ? this.buyBtn.disable() : this.buyBtn.enable(), this.amount.setText(r.intToString(c)), this.priceIcon.show(), this.priceIcon.toggleClassName("hardCcy", !n), this.priceIcon.toggleClassName("softCcy", Boolean(n)), window.gui.scenarioManager.isBehaviourEnabled(b.ENABLE_FAKE_SHOP) && this.buyBtn.enable()
            }
            var l = m.isAndroidApp ? "Z1" : "Z4";
            l = e.isInApp || e.isSoft || t.is_free ? "" : "GO", this.itemsList.clearContent(), h(t, this.itemsList, {
                paymentMode: l
            })
        }
    }
}
