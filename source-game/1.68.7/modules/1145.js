function(e, t, i) {
    function n() {
        function e(e) {
            window.dofus.sendMessage("ExchangeObjectMoveMessage", {
                objectUID: m.objectUID,
                quantity: g ? e : -e
            })
        }

        function t(t, i, n, o) {
            return g = o || !1, m = t.itemInstance, 1 === m.quantity ? e(1) : (M = "items", void v.open({
                min: 1,
                max: m.quantity,
                x: i,
                y: n
            }))
        }

        function i(e) {
            switch (A.exchangeType) {
                case s.STORAGE:
                    _ && l.updateBankItems(e);
                    break;
                case s.MOUNT:
                    l.updateMountItems(e)
            }
            d.createItemInstances(e, function(e, t) {
                return e ? console.error(e) : (O.addItems(t.map), void(A.exchangeType !== s.MOUNT && O.refreshSlotGauge()))
            })
        }

        function n(e) {
            switch (A.exchangeType) {
                case s.STORAGE:
                    _ && l.removeBankItems(e);
                    break;
                case s.MOUNT:
                    l.removeMountItems(e)
            }
            O.removeItems(e), A.exchangeType !== s.MOUNT && O.refreshSlotGauge()
        }
        f.call(this, {
            className: "ExchangeStorageWindow",
            positionInfo: {
                left: "0.5%",
                bottom: "3%",
                width: "30%",
                height: "94%"
            },
            customClose: !0
        });
        var l, m, M, g, _ = !1,
            A = this,
            O = new h({
                enablePresets: !1,
                dataHandler: null
            });
        O.registerView(this, {
            rightArrow: !0
        }), this.viewer = O;
        var v = this.minMaxSelector = window.gui.windowsContainer.appendChild(new u);
        v.on("confirm", function(t) {
            "items" === M ? e(t) : window.dofus.sendMessage("ExchangeObjectMoveKamaMessage", {
                quantity: -t
            })
        });
        var y = this.windowBody.appendChild(new o({
            className: "greenButton",
            text: c("tablet.exchange.withdraw")
        }));
        y.addClassNames("withdrawButton"), y.on("tap", function() {
            var e = O.kamasValue;
            if (e) {
                var t = b.getWindow("exchangeInventory");
                t.closeMinMaxSelector(), p.positionNextTo(v, y), M = "kamas", v.open({
                    min: 1,
                    max: e
                })
            }
        }), this.on("open", function(e) {
            this.exchangeType = e.exchangeType, l = window.gui.playerData.belongings;
            var t;
            switch (this.exchangeType) {
                case s.TAXCOLLECTOR:
                    t = c("ui.common.taxCollector");
                    break;
                case s.STORAGE:
                    O.setBarLabel(c("tablet.common.slots") + ":"), t = c("ui.common.storage");
                    break;
                case s.MOUNT:
                    t = c("ui.common.ride");
                    break;
                default:
                    console.error("Unexpected exchangeType value:", e.exchangeType), t = c("ui.common.storage")
            }
            this.setTitle(t), this.windowBody.appendChild(y), y.setEnable(Boolean(O.kamasValue)), y.toggleDisplay(e.exchangeType !== s.MOUNT), O.kamas.toggleClassName("hiddenKamas", e.exchangeType === s.MOUNT);
            var i = {
                silently: !1,
                rememberLastTabUsed: !1
            };
            O.resetFilter(i)
        }), this.closeButton.on("tap", function() {
            var e = O.itemList,
                t = this.myWindow.exchangeType,
                i = t === s.TAXCOLLECTOR;
            if (i && Object.keys(e)
                .length > 0) {
                var n = this;
                window.gui.openConfirmPopup({
                    title: c("ui.popup.warning"),
                    message: c("ui.popup.taxCollectorExchangeLeaveConfirm"),
                    className: ["orangeYesButton", "trashIcon"],
                    buttonYesLabel: c("ui.common.remove"),
                    buttonNoLabel: c("ui.common.cancel"),
                    yesBtnIcon: !0,
                    cb: function(e) {
                        e && b.close(n.myWindow.id)
                    }
                })
            } else b.close(this.myWindow.id)
        }), this.on("close", function() {
            this.exchangeType = -1, v.closeMinMax(), O.unloadContent()
        }), this.on("kamasUpdated", function(e) {
            y.isVisible() && y.setEnable(Boolean(e))
        }), this.on("rightArrow-tap", function(e) {
            window.gui.openContextualMenu("storage", {
                toInventory: !0,
                viewer: O
            }, {
                x: e.x,
                y: e.y
            })
        }), this.on("slot-doubletap", t), r(this, ["exchangeInventory"]), this.on("drop", function(e, i, n) {
            t(e, n.x, n.y, !0)
        }), a.on("ExchangeStartedWithStorageMessage", function(e) {
            O.setMaxWeight(e.storageMaxSlot), _ = e.exchangeType === s.STORAGE && e.storageMaxSlot > 2e9, b.openDialog(["exchangeInventory", "exchangeStorage"], e)
        }), a.on("ExchangeStartedMountStockMessage", function(e) {
            b.openDialog(["exchangeInventory", "exchangeStorage"], {
                exchangeType: s.MOUNT
            }), l.setMountItems(e.objectsInfos), d.createItemInstances(e.objectsInfos, function(e, t) {
                return e ? console.error(e) : void O.setItemList(t.map)
            })
        }), a.on("ExchangeStartedMessage", function(e) {
            e.exchangeType === s.TAXCOLLECTOR && b.openDialog(["exchangeInventory", "exchangeStorage"], e)
        }), a.on("StorageInventoryContentMessage", function(e) {
            _ && l.setBankItems(e.objects), O.setKamas(e.kamas), d.createItemInstances(e.objects, function(e, t) {
                return e ? console.error(e) : (O.setItemList(t.map), void O.refreshSlotGauge())
            })
        }), a.on("StorageKamasUpdateMessage", function(e) {
            O.setKamas(e.kamasTotal)
        }), a.on("ExchangeWeightMessage", function(e) {
            O.setWeight(e.currentWeight, e.maxWeight)
        }), a.on("StorageObjectUpdateMessage", function(e) {
            i([e.object])
        }), a.on("StorageObjectsUpdateMessage", function(e) {
            i(e.objectList)
        }), a.on("StorageObjectRemoveMessage", function(e) {
            n([e.objectUID])
        }), a.on("StorageObjectsRemoveMessage", function(e) {
            n(e.objectUIDList)
        })
    }
    i(1146);
    var o = i(86),
        a = i(105),
        r = i(418)
        .setDroppable,
        s = i(521),
        c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(469),
        u = i(421),
        p = i(67),
        h = i(937),
        f = i(70),
        b = i(52);
    l(n, f), e.exports = n, n.prototype.closeMinMaxSelector = function() {
        this.minMaxSelector.closeMinMax()
    }
}
