function(e, t, i) {
    function n() {
        function e(e, t) {
            t ? e.enable() : e.disable()
        }

        function t() {
            E || u.preloadImage("gfx/illusUi/enclos_tx_illuEnclos.png", function(e) {
                E = !0, v.setStyle("backgroundImage", e)
            });
            var t = _.currency === M,
                a = t ? n : i,
                r = window.isoEngine.mapRenderer.getCurrentPaddockInstanceProperties(),
                s = r.maxOutdoorMount,
                l = r.maxItems,
                d = 0 === r.price;
            if (o) T.replaceClassNames(["buy"], ["sell"]), _.windowTitle.setText(c("ui.mount.paddockSell")), C.setText(c("ui.common.cancelTheSale")), w.setReadonly(!1), e(I, d);
            else {
                T.replaceClassNames(["sell"], ["buy"]), _.windowTitle.setText(c("ui.mount.paddockPurchase")), C.setText(c("ui.common.cancel")), w.setReadonly(!0);
                var p = window.gui.playerData.inventory,
                    h = t || a && a <= p.kamas;
                e(I, h)
            }
            return S.toggleDisplay(!o && !window.gui.playerData.isShopDisabled()), y.setText(c("ui.mount.paddockDescription", s, l)), a ? void w.setValue(a) : w.setValue(c("ui.item.averageprice.unavailable"))
        }
        a.call(this, {
            className: "PaddockBuyWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 350,
                height: 270
            }
        }), this.currency = m;
        var i, n, o, g, _ = this,
            A = this.windowBody.createChild("div", {
                className: "wrapContainer"
            }),
            O = A.createChild("div", {
                className: "container"
            }),
            v = O.createChild("div", {
                className: "illus"
            }),
            y = O.createChild("div", {
                className: "description"
            }),
            z = this.windowBody.createChild("div", {
                className: "price"
            }),
            w = z.appendChild(new l({
                className: "priceValue",
                attr: {
                    readonly: !0
                },
                title: c("ui.common.price")
            }));
        z.createChild("div", {
            className: "priceLabel",
            text: c("ui.common.price") + ":"
        });
        var T = this.windowBody.createChild("div", {
                className: "buttons"
            }),
            C = T.appendChild(new r(null, {
                className: "cancel"
            }));
        C.on("tap", function() {
            o ? (f.hide(), window.dofus.sendMessage("FarmSellRequestMessage", {
                price: 0
            })) : d.close(_.id)
        });
        var I = T.appendChild(new r(c("ui.common.validation"), {
            className: "confirm"
        }));
        I.on("tap", function() {
            if (o) {
                f.hide(), i = w.getValue();
                var e = w.getFormattedValue();
                window.gui.openConfirmPopup({
                    title: c("ui.mount.paddockSell"),
                    message: c("ui.mount.doUSellPaddock", e),
                    cb: function(e) {
                        e && window.dofus.sendMessage("FarmSellRequestMessage", {
                            price: i
                        })
                    }
                })
            } else {
                var t, a = _.currency === m;
                t = a ? c("tablet.price.soft", s.kamasToString(i, "")) : c("tablet.price.hard", s.kamasToString(n, "")), window.gui.openConfirmPopup({
                    title: c("ui.mount.paddockPurchase"),
                    message: c("tablet.ui.mount.doUBuyPaddock", t),
                    cb: function(e) {
                        if (e) {
                            if (a) return window.dofus.sendMessage("FarmBuyRequestMessage", {
                                proposedPrice: i
                            });
                            var t = n - window.gui.playerData.inventory.goultines;
                            return t > 0 ? b.openNotEnoughHardCurrencyPopup(t) : window.dofus.send("paddockBuyRequest", {
                                amountHard: n,
                                amountSoft: i
                            })
                        }
                    }
                }, {
                    isModal: !0
                })
            }
        }), w.on("change", function(t) {
            _.currency === m ? e(I, t !== g) : e(I, !0)
        });
        var S = T.appendChild(new p);
        S.on("switchToHard", function() {
            _._setCurrency(M), t()
        }), S.on("switchToSoft", function() {
            _._setCurrency(m), t()
        });
        var E = !1;
        window.gui.on("PaddockSellBuyDialogMessage", function(e) {
            window.gui.playerData.setDialogState(!0), o = e.bsell, i = g = e.price, n = h.computeHardPrice(i), S.setCurrency(m), t(), d.openDialog("paddockBuy")
        }), h.on("computedHardPricesChange", function() {
            n = h.computeHardPrice(i), _.currency === M && t()
        });
        var L = window.dofus.connectionManager;
        L.on("paddockBuyError", function() {
            this.send("moneyGoultinesAmountRequest")
        }), L.on("paddockBuySuccess", function() {
            this.send("moneyGoultinesAmountRequest")
        }), this.on("close", function() {
            f.hide()
        })
    }
    i(1238);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(86)
        .DofusButton,
        s = i(16),
        c = i(17)
        .getText,
        l = i(423),
        d = i(52),
        u = i(12),
        p = i(1100),
        h = i(840),
        f = i(452),
        b = i(838),
        m = "soft",
        M = "hard";
    o(n, a), e.exports = n, n.prototype._setCurrency = function(e) {
        if (this.currency !== e) {
            var t = this.currency;
            this.currency = e, this.currencyIcon && this.currencyIcon.replaceClassNames([t], [e])
        }
    }
}
