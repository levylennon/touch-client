function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: ["CraftResultBox", "hoverable"]
        });
        var e = this;
        this._maxQuantity = this._currentQuantity = 1, this._minMaxSelector = this.appendChild(new s), this._minMaxSelector.on("confirm", function(t) {
            e.emit("craftReplayCount", t)
        });
        var t = this.createChild("div", {
                className: "resultContainer"
            }),
            i = t.createChild("div", {
                className: "resultObjectBox"
            });
        this._resultSlot = i.appendChild(new d);
        var n = i.createChild("div", {
            className: "resultNameBox"
        });
        this._resultName = n.createChild("div", {
            className: "label"
        });
        var o = t.createChild("div", {
                className: "secondRow"
            }),
            l = this._qtyButton = o.appendChild(new u({
                className: "quantityBtn"
            }));
        this._quantity = l.createChild("div", {
            className: "quantity",
            text: "x1"
        }), l.createChild("div", {
            className: "btnIcon"
        });
        var h = this.successFailBox = o.createChild("div", {
                className: "successFailBox",
                hidden: !0
            }),
            f = h.createChild("div", {
                className: "nameCol"
            });
        f.createChild("div", {
            className: "label",
            text: r("ui.craft.success") + r("ui.common.colon")
        }), f.createChild("div", {
            className: "label",
            text: r("ui.craft.failure") + r("ui.common.colon")
        });
        var b = h.createChild("div", {
            className: "valueCol"
        });
        this._successValue = b.createChild("div", {
            className: "value"
        }), this._failureValue = b.createChild("div", {
            className: "value"
        }), this._progressLine = t.createChild("div", {
            className: "progressBox",
            hidden: !0
        }), this._progressBar = this._progressLine.appendChild(new c({
            className: ["progressBar", "orange"],
            tooltip: !0
        })), this._progressValue = this._progressLine.createChild("div", {
            className: "value"
        }), p.setDroppable(this, ["recipeList"]), this.on("drop", function(e, t, i) {
            i.selectRecipe()
        }), this._qtyButton.disable(), this._qtyButton.on("tap", function() {
            e._minMaxSelector.open({
                min: 1,
                max: e._maxQuantity,
                defaultValue: e._currentQuantity
            })
        })
    }
    i(1273);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(17)
        .getText,
        s = i(421),
        c = i(490),
        l = i(469),
        d = i(871),
        u = i(86),
        p = i(418),
        h = 350;
    o(n, a), e.exports = n, n.prototype.prepareItem = function(e) {
        var t = this;
        l.getItems([e], function(i) {
            if (i) return console.error(i);
            var n = l.items[e];
            t._resultSlot.setItem(n), t._resultName.setText(n.nameId)
        })
    }, n.prototype.setQty = function(e, t) {
        this._currentQuantity = e, this._quantity.setText("x " + e), t && (this._qtyButton.addClassNames("highlighted"), this.highlightTimeout && window.clearTimeout(this.highlightTimeout), this.highlightTimeout = window.setTimeout(function(e) {
            e._qtyButton.delClassNames("highlighted")
        }, h, this))
    }, n.prototype._setMaxQuantity = function(e) {
        this._maxQuantity = e
    }, n.prototype.setProgress = function(e, t) {
        if (1 === e) {
            if (t <= 1) return;
            this._progressLine.show(), this._progressBar.setValue(e)
        }
        this._progressBar.setValue(e / t), this._progressValue.setText(e + " / " + t)
    }, n.prototype.updateFailSuccessValues = function(e, t) {
        this.successFailBox.show(), this._failureValue.setText(e), this._successValue.setText(t)
    }, n.prototype.checkRecipe = function(e, t) {
        function i() {
            var t, i, n = window.gui.playerData,
                o = n.inventory.objects,
                a = {},
                r = -1;
            for (t = 0, i = e.length; t < i; t += 1) {
                var s = e[t];
                if (o[s.UID]) {
                    var c = o[s.UID].quantity;
                    a[s.GID] = c
                }
            }
            for (t = 0, i = e.length; t < i; t += 1)
                if (e[t].GID) {
                    var l = e[t].GID,
                        d = e[t].quantity,
                        u = a[l],
                        p = Math.floor(u / d);
                    (r === -1 || r > p) && (r = p)
                } var h = a[n.jobs.RUNE_SIGNATURE_GID];
            return h && r > h && (r = h), r
        }
        var n = e.length <= 0;
        if (t.isRecipeKnown ? this.prepareItem(t.itemToCraft.resultId) : this._clearItem(), n) this._qtyButton.disable(), this._setMaxQuantity(1);
        else {
            this._qtyButton.enable();
            var o = i();
            this._setMaxQuantity(o)
        }
    }, n.prototype.getMaxQuantity = function() {
        return this._maxQuantity
    }, n.prototype._clearItem = function() {
        this._resultSlot.unset(), this._resultName.setText(""), this.setQty(1), this._qtyButton.disable()
    }, n.prototype.toggleReady = function(e) {
        this.toggleClassName("isReady", e)
    }, n.prototype._clearProgress = function() {
        this._progressLine.hide(), this.successFailBox.hide()
    }, n.prototype.clear = function() {
        this._clearItem(), this._clearProgress(), this._setMaxQuantity(1)
    }, n.prototype.selectSlot = function(e) {
        this._resultSlot.toggleClassName("selected", e)
    }, n.prototype.getItem = function() {
        return this._resultSlot.dbItem
    }
}
