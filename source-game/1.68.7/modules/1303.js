function(e, t, i) {
    function n() {
        function e() {
            f._domCreated || f._createDom(), b.once("ExchangeLeaveMessage", function(e) {
                if (f._fakeNpcExchange) return void(f._fakeNpcExchange = null);
                var t, i = e.success;
                t = r(i ? "ui.exchange.success" : "ui.exchange.cancel"), b.chat.logMsg(t)
            }), "" === f._npcName && console.error("TradeWithNPCWindow: npcName is missing on mapid:", window.isoEngine.mapRenderer.mapId), f.setTitle(f._npcName + " <-> " + b.playerData.characterBaseInformations.name), f._myTradeSpace.activateNpcTradeMode(), f._npcTradeSpace.setAsRemote(), f._npcTradeSpace.activateNpcTradeMode(), t(), f._fakeNpcExchange = window.gui.scenarioManager.isBehaviourEnabled(u.ENABLE_FAKE_NPC_EXCHANGE), s.continueDialog(["tradeWithNPC", "tradeWithPlayerAndNPCInventory"], {
                displayFakeNpcExchange: f._fakeNpcExchange
            })
        }

        function t() {
            var e = f._npcTradeSpace.getEstimationPrice(),
                t = f._myTradeSpace.getEstimationPrice(),
                i = !1,
                n = !1,
                o = !1;
            t > 0 && t >= 2 * e && (i = !0, o = !0), e > 0 && e >= 2 * t && (i = !0, n = !0), f._npcTradeSpace.setEstimationPrice(e, {
                color: i,
                warning: n
            }), f._myTradeSpace.setEstimationPrice(t, {
                color: i,
                warning: o
            })
        }

        function i() {
            t(), window.clearTimeout(p), p = window.setTimeout(function() {
                f._npcTradeSpace.isGoldOrItemToTrade() && f._buttonConfirm.enable()
            }, 1e3 * h), f._buttonConfirm.disable()
        }

        function n(e) {
            var t = e.remote,
                n = e.object,
                o = n.objectUID;
            f._exchangeStep += 1, d.createItemInstances(n, function(e, n) {
                if (e) return console.error(e);
                var a = n.map[o];
                t ? (f._npcTradeSpace.addAndModifyItem(a), f._npcTradeSpace.blink(h)) : f._myTradeSpace.addAndModifyItem(a), i()
            })
        }

        function o(e) {
            var t = e.remote,
                n = e.objectUID;
            f._exchangeStep += 1, t ? (f._npcTradeSpace.removeItem(n), f._npcTradeSpace.blink(h)) : f._myTradeSpace.removeItem(n), i()
        }

        function c() {
            f._npcTradeSpace.reset(), f._myTradeSpace.reset(), f._buttonConfirm.disable(), f._exchangeStep = 0, f._npcName = ""
        }

        function l(e) {
            f._exchangeStep += 1, e.remote ? f._npcTradeSpace.modifyKama(e.quantity) : f._myTradeSpace.modifyKama(e.quantity)
        }
        a.call(this, {
            className: "TradeWithNPCWindow",
            title: "",
            positionInfo: {
                left: "0.5%",
                top: "2%",
                width: "612px",
                height: "300px"
            }
        });
        var p, f = this,
            b = window.gui;
        this._npcName = "", this._domCreated = !1, this._npcTradeSpace = null, this._myTradeSpace = null, this._buttonConfirm = null, this._exchangeStep = 0, this._fakeNpcExchange = null, b.on("ExchangeStartOkNpcTradeMessage", e), b.on("ExchangeKamaModifiedMessage", this.localizeEvent(l)), b.on("ExchangeObjectAddedMessage", this.localizeEvent(n)), b.on("ExchangeObjectModifiedMessage", this.localizeEvent(n)), b.on("ExchangeObjectRemovedMessage", this.localizeEvent(o)), this.on("closed", c), window.gui.scenarioManager.on("stepChanged", function() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(u.DISABLE_CLOSE_BTN);
            f.toggleClassName("disableCloseBtn", e)
        })
    }
    i(1304);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(52),
        c = i(1299),
        l = i(86)
        .DofusButton,
        d = i(469),
        u = i(129),
        p = i(13),
        h = 2;
    o(n, a), e.exports = n, n.prototype.prepareExchange = function(e) {
        this._npcName = e
    }, n.prototype._createDom = function() {
        var e = this,
            t = this.windowBody,
            i = t.createChild("div", {
                className: ["otherCharacterSpace", "tradeSpace"]
            });
        this._npcTradeSpace = i.appendChild(new c({
            blinkDuration: h
        }));
        var n = t.createChild("div", {
            className: ["mySpace", "tradeSpace"]
        });
        this._myTradeSpace = n.appendChild(new c({
            blinkDuration: h,
            dragInteraction: !0,
            canRemove: !0
        }));
        var o = t.createChild("div", {
            className: "tradeButtons"
        });
        this._buttonConfirm = o.appendChild(new l(r("ui.common.validation"), {
            className: "buttonConfirm",
            disable: !0
        })), this._buttonConfirm.on("tap", function() {
            return e._fakeNpcExchange ? (window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.TRADE_CONFIRM), s.close(e.id)) : void window.dofus.sendMessage("ExchangeReadyMessage", {
                ready: !0,
                step: e._exchangeStep
            })
        });
        var a = o.appendChild(new l(r("ui.common.cancel"), {
            className: "buttonCancel"
        }));
        a.on("tap", function() {
            s.close(e.id)
        }), this._domCreated = !0
    }, n.prototype.displayFakeItemInTradeSpace = function(e) {
        var t = this;
        this._myTradeSpace.addAndModifyItem(e, {
            forceCannotRemove: !0
        });
        var i = p.TUTORIAL_NPC_FAKE_NPC_ITEM,
            n = {
                objectGID: i,
                effects: [],
                objectUID: -i,
                quantity: 1,
                position: 63
            };
        d.createItemInstances([n], function(e, i) {
            return e ? console.error(e) : void(i.array.length > 0 && (t._npcTradeSpace.addAndModifyItem(i.array[0]), t._npcTradeSpace.blink(h), window.setTimeout(function() {
                t._buttonConfirm.enable()
            }, 1e3 * h)))
        })
    }, n.prototype.getValidateBtn = function() {
        return this._buttonConfirm
    }
}
