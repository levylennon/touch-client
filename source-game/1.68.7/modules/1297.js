function(e, t, i) {
    function n() {
        function e(e) {
            if (e.exchangeType === c.PLAYER_TRADE) {
                var t = _.playerData;
                m = t.id, M = t.characterBaseInformations.name;
                var i = p.setupNames(g._targetInfo.targetId, e.source);
                i && (A = i.sourceName, O = i.targetName, p.setupCancelPopupTexts({
                    title: r("ui.exchange.requestInProgress"),
                    message: r("ui.exchange.requestInProgress")
                }), p.setupConfirmPopupTexts({
                    title: r("ui.exchange.exchangeRequest"),
                    message: r("ui.exchange.resquestMessage", A)
                }), p.askingExchangePopup())
            }
        }

        function t(e) {
            _.playerData.setDialogState(!0), e.exchangeType === c.PLAYER_TRADE && (s.close("cancel", {
                keepDialog: !0
            }), g._domCreated || g._createDom(), _.once("ExchangeLeaveMessage", function(e) {
                var t, i = e.success;
                t = r(i ? "ui.exchange.success" : "ui.exchange.cancel"), _.chat.logMsg(t)
            }), e.firstCharacterId === m ? (y = e.firstCharacterCurrentWeight, z = e.secondCharacterCurrentWeight, w = e.firstCharacterMaxWeight, T = e.secondCharacterMaxWeight, v = O) : (z = e.firstCharacterCurrentWeight, y = e.secondCharacterCurrentWeight, T = e.firstCharacterMaxWeight, w = e.secondCharacterMaxWeight, v = A), g.setTitle(v + " <-> " + M), g._myTradeSpace.initializePods(y, w), g._otherCharacterTradeSpace.setAsRemote(), g._otherCharacterTradeSpace.initializePods(z, T), i(), s.continueDialog(["tradeWithPlayer", "tradeWithPlayerAndNPCInventory"]))
        }

        function i() {
            var e = g._otherCharacterTradeSpace.getEstimationPrice(),
                t = g._myTradeSpace.getEstimationPrice(),
                i = !1,
                n = !1,
                o = !1;
            t > 0 && t >= 2 * e && (i = !0, o = !0), e > 0 && e >= 2 * t && (i = !0, n = !0), g._otherCharacterTradeSpace.setEstimationPrice(e, {
                color: i,
                warning: n
            }), g._myTradeSpace.setEstimationPrice(t, {
                color: i,
                warning: o
            })
        }

        function n() {
            i(), window.clearTimeout(C), C = window.setTimeout(function() {
                (g._myTradeSpace.isGoldOrItemToTrade() || g._otherCharacterTradeSpace.isGoldOrItemToTrade()) && g._buttonConfirm.enable()
            }, 1e3 * h), g._buttonConfirm.disable()
        }

        function o(e) {
            g._exchangeStep += 1, e.remote ? g._otherCharacterTradeSpace.modifyKama(e.quantity) : g._myTradeSpace.modifyKama(e.quantity), n()
        }

        function l(e) {
            var t = e.remote,
                i = e.object,
                o = i.objectUID,
                a = i.quantity;
            g._exchangeStep += 1, g._toggleConfirmForMe(!1), u.createItemInstances(i, function(e, i) {
                if (e) return console.error(e);
                var r = i.map[o],
                    s = r.weight,
                    c = I[o];
                c || (c = I[o] = {});
                var l = c.quantity || 0;
                c.weight = s, c.quantity = a;
                var d = s * (a - l);
                t ? (g._otherCharacterTradeSpace.addAndModifyItem(r), g._otherCharacterTradeSpace.blink(h), g._otherCharacterTradeSpace.incrementExchangePodsQty(-d), g._myTradeSpace.incrementExchangePodsQty(d)) : (g._myTradeSpace.addAndModifyItem(r), g._otherCharacterTradeSpace.incrementExchangePodsQty(d), g._myTradeSpace.incrementExchangePodsQty(-d)), n()
            })
        }

        function d(e) {
            var t = e.remote,
                i = e.objectUID;
            g._exchangeStep += 1, g._toggleConfirmForMe(!1);
            var o = I[i];
            o || console.warn("TradeWithPlayer: no itemMap for", i);
            var a = o.weight * o.quantity;
            I[i] = {}, t ? (g._otherCharacterTradeSpace.removeItem(i), g._otherCharacterTradeSpace.blink(h), g._otherCharacterTradeSpace.incrementExchangePodsQty(a), g._myTradeSpace.incrementExchangePodsQty(-a)) : (g._myTradeSpace.removeItem(i), g._otherCharacterTradeSpace.incrementExchangePodsQty(-a), g._myTradeSpace.incrementExchangePodsQty(a)), n()
        }

        function f(e) {
            var t = e.id,
                i = e.ready;
            t === m ? g._toggleConfirmForMe(i) : g._otherCharacterTradeSpace.toggleReady(i)
        }

        function b() {
            g.targetInfo = {}, I = {}, g._otherCharacterTradeSpace.reset(), g._myTradeSpace.reset(), g._toggleConfirmForMe(!1), g._otherCharacterTradeSpace.toggleReady(!1), g._buttonConfirm.disable(), g._exchangeStep = 0
        }
        a.call(this, {
            className: "TradeWithPlayerWindow",
            title: "",
            positionInfo: {
                left: "0.5%",
                top: "2%",
                width: "612px",
                height: "350px"
            }
        });
        var m, M, g = this,
            _ = window.gui;
        this._targetInfo = {};
        var A, O, v, y, z, w, T, C, I = {};
        this._domCreated = !1, this._otherCharacterTradeSpace = null, this._myTradeSpace = null, this._buttonConfirm = null, this._iConfirmed = !1, this._exchangeStep = 0, _.on("ExchangeRequestedTradeMessage", e), _.on("ExchangeStartedWithPodsMessage", t), _.on("ExchangeKamaModifiedMessage", this.localizeEvent(o)), _.on("ExchangeObjectAddedMessage", this.localizeEvent(l)), _.on("ExchangeObjectModifiedMessage", this.localizeEvent(l)), _.on("ExchangeObjectRemovedMessage", this.localizeEvent(d)), _.on("ExchangeIsReadyMessage", this.localizeEvent(f)), this._toggleConfirmForMe = function(e) {
            g._iConfirmed = e, g._myTradeSpace.toggleReady(e), e ? g._buttonConfirm.disable() : g._buttonConfirm.enable()
        }, this.on("close", b)
    }
    i(1298);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(52),
        c = i(521),
        l = i(1299),
        d = i(86)
        .DofusButton,
        u = i(469),
        p = i(670),
        h = 2;
    o(n, a), e.exports = n, n.prototype._createDom = function() {
        var e = this,
            t = this.windowBody,
            i = t.createChild("div", {
                className: ["otherCharacterSpace", "tradeSpace"]
            });
        this._otherCharacterTradeSpace = i.appendChild(new l({
            blinkDuration: h
        }));
        var n = t.createChild("div", {
            className: ["mySpace", "tradeSpace"]
        });
        this._myTradeSpace = n.appendChild(new l({
            blinkDuration: h,
            dragInteraction: !0,
            canRemove: !0
        }));
        var o = t.createChild("div", {
            className: "tradeButtons"
        });
        this._buttonConfirm = o.appendChild(new d(r("ui.common.validation"), {
            className: "buttonConfirm",
            disable: !0
        })), this._buttonConfirm.on("tap", function() {
            if (!e._iConfirmed) return !e._otherCharacterTradeSpace.hasFreePods() && e._myTradeSpace.getItemsToTradeCount() > 0 ? window.gui.openSimplePopup(r("ui.storage.noRoomForTransfert")) : void window.dofus.sendMessage("ExchangeReadyMessage", {
                ready: !0,
                step: e._exchangeStep
            })
        });
        var a = o.appendChild(new d(r("ui.common.cancel"), {
            className: "buttonCancel"
        }));
        a.on("tap", function() {
            return e._iConfirmed ? window.dofus.sendMessage("ExchangeReadyMessage", {
                ready: !1,
                step: e._exchangeStep
            }) : void s.close(e.id)
        }), this._domCreated = !0
    }, n.prototype.prepareMakeExchange = function(e) {
        this._targetInfo = e
    }
}
