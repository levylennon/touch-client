function(e, t, i) {
    function n() {
        function e() {
            var e = u.getWindow("feed");
            return e.feedingBox.possessFeedItemForLivingObject(n.itemInstance) ? void u.open("feed", {
                mode: "livingObject",
                item: n.itemInstance
            }) : window.gui.openSimplePopup(r("ui.item.errorNoFoodLivingItem", n.itemInstance.item.nameId))
        }

        function t() {
            n.lastLivingObjectId = n.itemInstance.livingObjectId, window.dofus.sendMessage("LivingObjectDissociateMessage", {
                livingUID: n.itemInstance.objectUID,
                livingPosition: n.itemInstance.position
            })
        }

        function i() {
            u.open("itemAppearance", {
                itemInstance: n.itemInstance
            })
        }
        d.call(this, {
            className: "ItemManageWindow",
            title: r("ui.item.manageItem"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 300,
                height: 300
            }
        });
        var n = this;
        this.itemInstance = null, this.lastLivingObjectId = "", this.once("open", function() {
            var s = this.windowBody.createChild("div", {
                className: "topRow"
            });
            this.itemSlot = s.appendChild(new c);
            var d = s.createChild("div", {
                className: "buttons"
            });
            this.feedButton = d.appendChild(new a(r("ui.item.feed"))), this.feedButton.on("tap", e), this.dissociateButton = d.appendChild(new a(r("ui.item.dissociate"))), this.dissociateButton.on("tap", t), this.appearanceButton = d.appendChild(new a(r("ui.item.skin"))), this.appearanceButton.on("tap", i);
            var u = this.windowBody.createChild("div", {
                    className: "botRow"
                }),
                h = u.createChild("div", {
                    className: "statsBox"
                });
            h.createChild("div", {
                className: "label",
                text: r("ui.common.state") + r("ui.common.colon")
            }), this.moodBox = h.createChild("div", {
                className: "value"
            }), this.lastFedBox = h.createChild("div", {
                className: ["label", "lastFedBox"]
            });
            var f = r("ui.common.level") + r("ui.common.colon");
            h.createChild("div", {
                className: "label",
                text: f
            }), this.levelBox = h.createChild("div", {
                className: "value"
            }), f = r("ui.common.experiment") + r("ui.common.colon"), h.createChild("div", {
                className: "label",
                text: f
            }), this.expBar = h.appendChild(new l), this.expBar.addClassNames("expBar", "blue", "value"), this.expTooltip = new p("div", {
                className: "expTooltip"
            }), o(this.expBar, this.expTooltip), window.gui.playerData.inventory.on("itemAdded", function(e) {
                if (e.objectGID === n.lastLivingObjectId) {
                    var t = window.gui.playerData.inventory.objects[e.objectUID];
                    n._displayItem(t)
                }
            }), window.gui.playerData.inventory.on("itemModified", function(e) {
                e && n.itemInstance && (e.livingObjectId && e.livingObjectId === n.itemInstance.objectGID ? n._displayItem(e) : e.objectUID === n.itemInstance.objectUID && n._displayItem(e))
            })
        }), this.on("open", function(e) {
            return e.itemInstance && e.itemInstance.livingObjectCategory ? void this._displayItem(e.itemInstance) : console.error("Must provide a living object or living object associated itemInstance")
        })
    }
    i(1107);
    var o = i(88)
        .addTooltip,
        a = i(86)
        .DofusButton,
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(871),
        l = i(490),
        d = i(70),
        u = i(52),
        p = i(72),
        h = {
            MOOD_LEAN: 0,
            MOOD_SATISFIED: 1,
            MOOD_FAT: 2
        };
    s(n, d), e.exports = n, n.prototype._updateMood = function(e) {
        var t;
        switch (e.livingObjectMood) {
            case h.MOOD_LEAN:
                t = r("ui.common.lean");
                break;
            case h.MOOD_SATISFIED:
                t = r("ui.common.satisfied");
                break;
            case h.MOOD_FAT:
                t = r("ui.common.fat")
        }
        this.moodBox.setText(t)
    }, n.prototype._updateLastFed = function(e) {
        this.lastFedBox.setText(e.livingObjectFoodDate)
    }, n.prototype._updateExp = function(e) {
        this.levelBox.setText(e.livingObjectLevel);
        var t = e.livingObjectXp,
            i = e.livingObjectMaxXp;
        this.expBar.setValue(0 !== i ? t / i : 1), this.expTooltip.setText(t + " / " + i)
    }, n.prototype._displayItem = function(e) {
        this.itemInstance = e, this.itemSlot.setItem(e), this.itemSlot.setQuantity(1), e.livingObjectId && e.objectGID ? (this.feedButton.enable(), this.dissociateButton.enable()) : (this.feedButton.disable(), this.dissociateButton.disable()), this._updateMood(e), this._updateLastFed(e), this._updateExp(e)
    }
}
