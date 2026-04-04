function(e, t, i) {
    function n() {
        function e() {
            d.close("itemAppearance")
        }

        function t() {
            var t = r.itemSlots.indexOf(r.selectedSlot) + 1;
            return r.itemInstance.livingObjectSkin === t ? e() : (this.disable(), void window.dofus.sendMessage("LivingObjectChangeSkinRequestMessage", {
                livingUID: r.itemInstance.objectUID,
                livingPosition: r.itemInstance.position,
                skinId: t
            }))
        }

        function i() {
            r.delClassNames("spinner"), r.confirmButton.enable(), r.selectedSlot && (r.selectedSlot.unselect(), delete r.selectedSlot)
        }

        function n() {
            var e = r.itemSlots.indexOf(this) + 1;
            this === r.selectedSlot || r.itemInstance.livingObjectLevel < e || (r.selectedSlot && r.selectedSlot.unselect(), this.select(), r.selectedSlot = this)
        }
        l.call(this, {
            className: "ItemAppearanceWindow",
            title: a("ui.item.chooseSkin"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 450,
                height: 200
            }
        });
        var r = this;
        this.itemSlots = [], this.selectedSlot = null, this.itemInstance = null, this.once("open", function() {
            this.itemSlotsBox = this.windowBody.createChild("div", {
                className: "itemSlotsBox"
            });
            for (var i = 0; i < p; i += 1) {
                var c = this.itemSlotsBox.appendChild(new s);
                c.on("tap", n), r.itemSlots.push(c)
            }
            this.confirmButton = this.windowBody.appendChild(new o(a("ui.common.validation"))), this.confirmButton.on("tap", t), window.gui.playerData.inventory.on("itemModified", function(t) {
                r.itemInstance && t.objectUID === r.itemInstance.objectUID && e()
            })
        }), this.on("open", function(e) {
            return e.itemInstance && e.itemInstance.livingObjectCategory ? void this._displayItem(e.itemInstance) : console.error("Must provide a living object or living object associated itemInstance")
        }), this.on("close", function() {
            i()
        })
    }
    i(1103);
    var o = i(86)
        .DofusButton,
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(873),
        c = i(130),
        l = i(70),
        d = i(52),
        u = i(12),
        p = 20;
    r(n, l), e.exports = n, n.prototype._displayItem = function(e) {
        this.itemInstance = e;
        var t = this;
        this.addClassNames("spinner"), this.confirmButton.disable(), t.itemSlots[e.livingObjectSkin - 1].emit("tap");
        var i = e.livingObjectId || e.objectGID;
        c.getDataMap("LivingObjectSkinJntMood", [i], null, function(n, o) {
            if (n) return console.error(n);
            var a, r = o[i],
                s = [];
            for (a = 0; a < r.moods[e.livingObjectMood].length; a += 1) {
                var c = r.moods[e.livingObjectMood][a];
                s.push("gfx/items/" + c + ".png")
            }
            u.preloadImages(s, function(e) {
                for (var i = 0; i < t.itemSlots.length; i += 1) {
                    var n = t.itemSlots[i];
                    i >= t.itemInstance.livingObjectLevel ? n.unset() : n.setImage(e[i])
                }
                t.delClassNames("spinner"), t.confirmButton.enable()
            })
        })
    }
}
