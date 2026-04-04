function(e, t, i) {
    function n(e) {
        e = e || {}, a.call(this, "div", {
            className: "TradeSpace"
        });
        var t = this;
        this._isRemote = !1, this._blinkDuration = e.blinkDuration || 5, this._blinkTimeout = null, this._currentUID = null, this._podsTooltip = new a("div"), this._podsTooltipText = "", this._maxPods = 0, this._currentPods = 0, this._exchangePods = 0, this._podsPercent = 0, this._estimationPrice = {}, this.selectedSlot = null, this._minMaxSelector = this.appendChild(new c), this._minMaxSelector.setStyles({
            left: "20px",
            top: "50px"
        }), this._minMaxSelector.on("confirm", function(e) {
            window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: t._currentUID,
                quantity: e * (this.fromInventory ? 1 : -1)
            })
        }), this._tradeGold = this.appendChild(new r), this._tradeGold.on("kamaChange", function(e) {
            window.dofus.sendMessage("ExchangeObjectMoveKamaMessage", {
                quantity: e
            })
        }), this._exchangePodsContent = this.createChild("div", {
            className: "exchangePodsContent"
        }), this._exchangePodsProgressBar = this._exchangePodsContent.appendChild(new u({
            className: "exchangePodsProgressBar"
        })), p(this._exchangePodsProgressBar, t._podsTooltip);
        var i = this.createChild("div", {
            className: "slotBox"
        });
        e.dragInteraction && (h.setDroppable(i, ["tradeWithPlayerAndNPCInventory"]), i.on("drop", function(e) {
            var i = e.itemInstance,
                n = f.getWindow("tradeWithNPC"),
                o = f.getWindow("tradeWithPlayerAndNPCInventory");
            if (o.fakeNpcExchange && n.openState && o.openState) return window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.TRADE_ADD_ITEM), n.displayFakeItemInTradeSpace(i), void o.removeFakeItem();
            var a = e.getQuantity();
            return 1 === a ? window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: i.objectUID,
                quantity: 1
            }) : (t._currentUID = i.objectUID, t._minMaxSelector.fromInventory = !0, void t._minMaxSelector.open({
                min: 1,
                max: a
            }))
        })), this.canRemove = e.canRemove, this._allSlots = i.createChild("div", {
            className: "slots"
        });
        var n = this.createChild("div", {
            className: "estimationContent"
        });
        n.createChild("div", {
            className: ["estimationLabel", "half"],
            text: d("ui.exchange.estimatedValue") + d("ui.common.colon")
        });
        var o = n.createChild("div", {
            className: ["estimationValueContent", "half"]
        });
        this._estimationValue = o.createChild("div", {
            className: "estimationValue"
        }), this._estimationWarning = o.createChild("div", {
            className: "estimationWarning"
        });
        var s = null;
        p(this._estimationWarning, function() {
            return s ? s : s = new a("div", {
                text: d("ui.exchange.warning")
            })
        })
    }
    i(1300);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(1301),
        s = i(871),
        c = i(421),
        l = i(16),
        d = i(17)
        .getText,
        u = i(490),
        p = i(88)
        .addTooltip,
        h = i(418),
        f = i(52);
    o(n, a), e.exports = n, n.prototype.setAsRemote = function() {
        this._isRemote = !0, this._tradeGold.setAsRemote()
    }, n.prototype.modifyKama = function(e) {
        this._isRemote && this._tradeGold.blink(this._blinkDuration), this._tradeGold.setKama(e)
    }, n.prototype.blink = function(e) {
        e = e || 3;
        var t = this;
        window.clearTimeout(this._blinkTimeout), this._blinkTimeout = window.setTimeout(function() {
            t._allSlots.delClassNames("blink")
        }, 1e3 * e), this._allSlots.addClassNames("blink")
    }, n.prototype.setEstimationPrice = function(e, t) {
        t = t || {}, this._estimationValue.setText(l.kamasToString(e)), this._estimationValue.toggleClassName("warning", t.color), this._estimationWarning.setStyle("visibility", t.warning ? "visible" : "hidden")
    }, n.prototype.addAndModifyItem = function(e, t) {
        function i() {
            var t = r._estimationPrice[d],
                i = e.item.averagePrice;
            i < 0 || (t || (t = r._estimationPrice[d] = {}), t.averagePrice = e.item.averagePrice, t.quantity = u)
        }

        function n() {
            if (!r._isRemote && l) {
                var e = a.itemInstance;
                if (e) {
                    r._currentUID = e.objectUID;
                    var t = e.quantity;
                    if (1 === t) return window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                        objectUID: r._currentUID,
                        quantity: -1
                    });
                    r._minMaxSelector.fromInventory = !1, r._minMaxSelector.open({
                        min: 1,
                        max: e.quantity
                    })
                }
            }
        }

        function o(e) {
            "remove" === e && n()
        }
        t = t || {};
        var a, r = this,
            c = this._allSlots,
            l = r.canRemove && !t.forceCannotRemove,
            d = e.objectUID,
            u = e.quantity;
        i(), a = c.getChild("slot" + d), a || (a = c.appendChild(new s({
            name: "slot" + d
        })), a.setContextMenu("item", {
            item: a.itemInstance,
            remove: l,
            onClose: o,
            enableActions: !1,
            enableDestroy: !1
        }), l && (a.on("doubletap", n), a.on("tap", function() {
            r.selectedSlot && r.selectedSlot.delClassNames("selected"), r.selectedSlot = this, r.selectedSlot.addClassNames("selected")
        }))), a.setItem(e), l && h.setDraggable(a, {
            backgroundImage: a.getImage()
        }, "tradeSpace")
    }, n.prototype.removeItem = function(e) {
        delete this._estimationPrice[e];
        var t = this._allSlots.getChild("slot" + e);
        t && (t === this.selectedSlot && (this.selectedSlot = null), t.destroy())
    }, n.prototype.getEstimationPrice = function() {
        var e = this._tradeGold.getKama(),
            t = this._estimationPrice;
        for (var i in t) {
            var n = t[i];
            e += n.quantity * n.averagePrice
        }
        return e
    }, n.prototype.toggleReady = function(e) {
        this._tradeGold.toggleReady(e), this._allSlots.toggleClassName("isReady", e)
    }, n.prototype.setPodsProgressBar = function() {
        var e = this._maxPods,
            t = this._currentPods,
            i = this._exchangePods;
        if (e) {
            var n = this._podsPercent = Math.min(100, Math.floor(100 * (t + i) / e));
            this._exchangePodsProgressBar.setValue(this._podsPercent / 100), n <= 60 ? this._exchangePodsProgressBar.replaceClassNames(["yellow", "orange", "red"], ["green"]) : n <= 70 ? this._exchangePodsProgressBar.replaceClassNames(["green", "orange", "red"], ["yellow"]) : n <= 80 ? this._exchangePodsProgressBar.replaceClassNames(["green", "yellow", "red"], ["orange"]) : this._exchangePodsProgressBar.replaceClassNames(["green", "yellow", "orange"], ["red"]), this._podsTooltipText = d("ui.common.player.weight", l.kamasToString(t + i, ""), l.kamasToString(e, "")), this._podsTooltip.setText(this._podsTooltipText)
        }
    }, n.prototype.initializePods = function(e, t) {
        this._maxPods = t, this._currentPods = e, this._exchangePods = 0, this.setPodsProgressBar()
    }, n.prototype.activateNpcTradeMode = function() {
        this._exchangePodsContent.hide(), this._tradeGold.setReadOnly(!0)
    }, n.prototype.incrementExchangePodsQty = function(e) {
        this._exchangePods += e, this.setPodsProgressBar()
    }, n.prototype.isGoldOrItemToTrade = function() {
        if (this._tradeGold.getKama() > 0) return !0;
        for (var e = this._allSlots.getChildren(), t = 0, i = e.length; t < i; t += 1) {
            var n = e[t];
            if (n.itemInstance) return !0
        }
        return !1
    }, n.prototype.getItemsToTradeCount = function() {
        for (var e = 0, t = this._allSlots.getChildren(), i = 0; i < t.length; i++) t[i].itemInstance && e++;
        return e
    }, n.prototype.hasFreePods = function() {
        return this._maxPods - (this._currentPods + this._exchangePods) >= 0
    }, n.prototype.reset = function() {
        this._tradeGold.reset(), this._isRemote = !1, this._currentUID = null, this._maxPods = 0, this._currentPods = 0, this._exchangePods = 0, this._podsPercent = 0, this._estimationPrice = {}, this._exchangePodsContent.show(), this._tradeGold.show(), window.clearTimeout(this._blinkTimeout), this._allSlots.delClassNames("blink"), this._podsTooltip.setText(""), this._allSlots.clearContent(), this.selectedSlot = null
    }
}
