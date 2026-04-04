function(e, t, i) {
    function n(e) {
        e = e || {}, d.call(this, "div", e), this.addClassNames("wallet"), this._isFakingGoultine = !1, this.goultineAmount = 0, this.kamaAmount = 0, this.emitTap = e.emitTap, this.showBonusPack = Boolean(e.showBonusPack), this._createContent(), this._initialize()
    }

    function o() {
        var e = this.myWallet;
        return e.emitTap ? e.emit("moreGoultinesTap") : void l.open("market", {
            tabId: "shop",
            tabParams: {
                category: "goultines"
            }
        })
    }

    function a() {
        var e = this.myWallet;
        return e.emitTap ? e.emit("bonusPackTap") : void l.open("market", {
            tabId: "shop",
            tabParams: {
                category: "bonuspack"
            }
        })
    }
    i(1166);
    var r = i(86),
        s = i(16),
        c = i(56)
        .inherits,
        l = i(52),
        d = i(72),
        u = i(17)
        .getText,
        p = i(88),
        h = i(1167),
        f = i(509),
        b = i(21),
        m = i(129);
    c(n, d), e.exports = n, n.prototype._initialize = function() {
        this._setupListeners();
        var e = window.gui.playerData.inventory;
        this._setSoftAmount(e.kamas), this._setHardAmount(e.goultines)
    }, n.prototype._setHardAmount = function(e) {
        this.goultineAmount = e, this._isFakingGoultine || this.hardAmountElt.setText(s.intToString(e))
    }, n.prototype._setSoftAmount = function(e) {
        this.kamaAmount = e, this.softAmountElt.setText(s.intToString(e))
    }, n.prototype._createContent = function() {
        if (this.showBonusPack) {
            var e = this.createChild("div", {
                className: ["currency", "bonusPack"]
            });
            e.createChild("div", {
                className: "counterCrown"
            });
            var t = e.createChild("div", {
                className: "text"
            });
            this.bonusPackEliteDuration = t.createChild("div", {
                className: "eliteDuration",
                text: "0"
            }), t.createChild("div", {
                className: "separatorBonus",
                text: " / "
            }), this.bonusPackDuration = t.createChild("div", {
                className: "duration",
                text: "0"
            }), e.createChild("div", {
                className: "currencyIcon"
            }), this._refreshSubscriptionCountdown(), p.addTooltip(this.bonusPackEliteDuration, u("ui.shop.bonusPackEliteTooltip"), {
                longTapExplanation: !0
            }), p.addTooltip(this.bonusPackDuration, u("ui.shop.bonusPackTooltip"), {
                longTapExplanation: !0
            }), this.bonusPackBtn = e.appendChild(new r({
                className: "moreButton"
            }, a)), this.bonusPackBtn.myWallet = this
        }
        this.goultines = this.createChild("div", {
            className: ["currency", "goultines"]
        }), this.hardAmountElt = this.goultines.createChild("div", {
            className: "text"
        }), this.goultines.createChild("div", {
            className: "currencyIcon"
        }), this.goultinesBtn = this.goultines.appendChild(new r({
            className: "moreButton"
        }, o)), this.goultinesBtn.myWallet = this;
        var i = this.createChild("div", {
            className: ["currency", "kamas"]
        });
        this.softAmountElt = i.createChild("div", {
            className: "text"
        }), i.createChild("div", {
            className: "currencyIcon"
        }), this.refreshTutorialRestriction()
    }, n.prototype._setupListeners = function() {
        function e(e) {
            a._setHardAmount(e)
        }

        function t(e) {
            a._setSoftAmount(e)
        }

        function i() {
            a._refreshSubscriptionCountdown()
        }

        function n() {
            a.refreshTutorialRestriction()
        }
        var o = window.gui.playerData.inventory,
            a = this;
        o.on("goultinesUpdated", e), o.on("kamasUpdated", t), window.gui.playerData.on("subscriptionChanged", i), window.gui.scenarioManager.on("stepChanged", n), this.on("destroy", function() {
            o.removeListener("goultinesUpdated", e), o.removeListener("kamasUpdated", t), window.gui.playerData.removeListener("subscriptionChanged", i), window.gui.scenarioManager.removeListener("stepChanged", n), a.bonusPackCountdown && a.bonusPackCountdown.clear(), a.bonusPackEliteCountdown && a.bonusPackEliteCountdown.clear()
        })
    }, n.prototype.refreshTutorialRestriction = function() {
        var e = window.gui.scenarioManager.isBehaviourEnabled(m.ENABLE_GOULTINE_HIGHLIGHT);
        this.goultines && this.goultines.toggleClassName("highlight", e)
    }, n.prototype._refreshSubscriptionCountdown = function() {
        var e = this,
            t = window.gui.playerData;
        if (this.bonusPackEliteDuration && this.bonusPackDuration) {
            var i = b.now() + t.getSubscriptionRemainingTime(f.NORMAL),
                n = b.now() + t.getSubscriptionRemainingTime(f.ELITE);
            this.bonusPackCountdown && this.bonusPackCountdown.clear(), this.bonusPackCountdown = new h(new Date(i), function(t, i, n) {
                return t ? console.error(t) : void e.bonusPackDuration.setText(n.toUpperCase())
            }, function() {
                e.bonusPackDuration.setText("0 " + u("tablet.time.days.short"))
            }), this.bonusPackDuration.delClassNames("paused"), t.isSubscriberAtMinLevel(f.ELITE, {
                noForced: !0
            }) && (this.bonusPackCountdown.clear(), this.bonusPackDuration.addClassNames("paused")), this.bonusPackEliteCountdown && this.bonusPackEliteCountdown.clear(), this.bonusPackEliteCountdown = new h(new Date(n), function(t, i, n) {
                return t ? console.error(t) : void e.bonusPackEliteDuration.setText(n.toUpperCase())
            }, function() {
                e.bonusPackEliteDuration.setText("0 " + u("tablet.time.days.short"))
            })
        }
    }, n.prototype.setFakeHardAmount = function(e) {
        this._isFakingGoultine = !0, this.hardAmountElt.setText(s.intToString(e))
    }, n.prototype.resetFakeHardAmount = function() {
        this._isFakingGoultine = !1, this.hardAmountElt.setText(s.intToString(this.goultineAmount))
    }
}
