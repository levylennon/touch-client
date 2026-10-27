function(e, t, i) {
    function n() {
        c.call(this, {
            title: a("ui.common.confirm"),
            className: "TradeItemConfirmWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 350,
                height: 350,
                isModal: !0
            }
        }), this._reset(), this.on("open", this._onOpen), this.on("close", this._onClose)
    }
    i(1154);
    var o = i(86),
        a = i(17)
        .getText,
        r = i(16),
        s = i(56)
        .inherits,
        c = i(70),
        l = i(52),
        d = i(72),
        u = i(880);
    s(n, c), e.exports = n, n.prototype._reset = function() {
        this.cb = null, this.itemLabel = null, this.itemImg = null, this.itemQuantity = null, this.buyBtn = null, this.buyBtnLabel = null
    }, n.prototype._onOpen = function() {
        this.itemLabel || this._createContent()
    }, n.prototype._onClose = function() {
        this.cb(!1)
    }, n.prototype.freeContent = function() {
        this.windowBody.clearContent(), this._reset()
    }, n.prototype._createContent = function() {
        var e = this.windowBody.createChild("div", {
                className: "itemLabelBox"
            }),
            t = this.windowBody.createChild("div", {
                className: "twoColumns"
            });
        this.itemLabel = e.createChild("div", {
            className: "itemLabel"
        });
        var i = t.createChild("div", {
                className: "leftCol"
            }),
            n = i.createChild("div", {
                className: "itemContainer"
            });
        this.itemImg = n.createChild("div", {
            className: "itemImg"
        }), this.itemQuantity = n.createChild("div", {
            className: "itemQuantity"
        });
        var a = t.createChild("div", {
                className: "rightCol"
            }),
            r = this,
            s = a.createChild("div", {
                className: "btnAndFee"
            });
        this.buyBtn = this.windowBody.appendChild(new o({
            addIcon: !0,
            className: ["buyBtn", "greenButton"]
        }, function() {
            this.disable(), r.cb(!0)
        }));
        var c = this.buyBtnIcon = this.buyBtn.getChildren()[0];
        this.buyBtnLabel = this.buyBtn.insertChildBefore(new d("div", {
            className: "btnLabel"
        }), c), this.buyBtnAmount = this.buyBtn.insertChildBefore(new d("div", {
            className: "btnAmount"
        }), c), this.feeAmount = s.createChild("div", {
            className: "feeAmount"
        }), this.inventoryQuantityOwned = s.createChild("div", {
            className: "quantityOwned"
        }), this.bankQuantityOwned = s.createChild("div", {
            className: "quantityOwned"
        }), this.mountQuantityOwned = s.createChild("div", {
            className: "quantityOwned"
        }), this.totalQuantityOwner = s.createChild("div", {
            className: "quantityOwned"
        })
    }, n.prototype.confirmTrade = function(e, t) {
        if (l.open(this.id), this.cb = t, !e.itemInstance) return console.error(new Error("hdv confirm invalid item")), void this.close();
        var i = e.itemInstance;
        this.itemLabel.setText(i.getName()), this.itemImg.setStyle("backgroundImage", i.getProperty("image")), this.itemQuantity.setText("x" + e.qty), this.buyBtnLabel.setText(a(e.isSell ? "ui.common.sell" : "ui.common.buy")
            .toUpperCase()), this.buyBtnAmount.setText(r.intToString(e.amountHard || e.amountSoft)), this.buyBtn.toggleClassName("hardCcy", Boolean(e.amountHard)), this.buyBtn.toggleClassName("softCcy", !e.amountHard);
        var n = e.token ? e.token.getProperty("image") : null;
        this.buyBtnIcon.setStyle("backgroundImage", n), this.feeAmount.setText(e.fee ? a("tablet.salesFee") + a("ui.common.colon") + r.kamasToString(e.fee) : "");
        var o = window.gui.playerData.inventory,
            s = o.getQuantityOfAnItem(i.id) || 0,
            c = window.gui.playerData.belongings.getItemCounts(i.id),
            d = c[u.BANK_QTY] || 0,
            p = c[u.MOUNT_QTY] || 0;
        this.inventoryQuantityOwned.setText(a("ui.common.inventory.quantity", r.intToString(s))), this.bankQuantityOwned.setText(a("ui.common.bank.quantity", r.intToString(d))), this.mountQuantityOwned.setText(a("ui.common.ride.quantity", r.intToString(p)));
        var h = s + d + p;
        this.totalQuantityOwner.setText(a("ui.common.total") + a("ui.common.colon") + r.intToString(h))
    }, n.prototype.updatePriceRealtime = function(e) {
        this.buyBtnAmount.setText(r.intToString(e))
    }
}
