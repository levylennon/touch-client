function(e, t, i) {
    function n(e) {
        e = e || {}, e.noTabs = !0, e.noWeight = !0, a.call(this, e), this.addClassNames("itemBoxMinMax"), this.forceHidePreviewBtn = Boolean(e.forceHidePreviewBtn)
    }

    function o(e, t, i) {
        if (t) {
            for (var n = c.exoticEffects, o = 0; o < t.length; o += 1) {
                var a = t[o],
                    r = a.effect;
                if (r.id !== m) {
                    var s = a.description;
                    if (s) {
                        var l = "",
                            d = "";
                        if ("null" !== r.operator) {
                            var u = 0 === a.diceSide ? a.diceNum : a.diceSide;
                            u && (l = "+" === r.operator ? a.diceNum : -u, d = "+" === r.operator ? u : -a.diceNum)
                        }
                        var p = f.process(s),
                            h = e.addRow({
                                min: l,
                                max: d,
                                info: p
                            }),
                            b = "+" === r.operator ? a.value : -a.value,
                            M = b > d;
                        n[r.id] ? h.addClassNames("exotic") : a.isLost ? h.addClassNames("lost") : M ? h.addClassNames("over") : r.bonusType === -1 ? h.addClassNames("malus") : 1 === r.bonusType ? h.addClassNames("bonus") : h.hide()
                    }
                }
            }
            for (var g = t.length; g < i; g += 1) e.addRow({
                info: ""
            })
        }
    }
    i(1285);
    var a = i(1006),
        r = i(56),
        s = i(88)
        .enableTooltip,
        c = i(879),
        l = i(17)
        .getText,
        d = i(469),
        u = d.Item,
        p = d.ItemInstance,
        h = i(765),
        f = i(502),
        b = i(481),
        m = b.EFFECT_MOUNT,
        M = 812;
    r.inherits(n, a), n.prototype.displayItem = function(e, t) {
        var i = this;
        if (!(e instanceof u || e instanceof p)) return console.error(new Error("ItemBox: item is not Item nor ItemInstance"));
        if (t = t || {}, this.showTitle = t.hasOwnProperty("showTitle") ? t.showTitle : this.showTitle, this.showDescription = t.hasOwnProperty("showDescription") ? t.showDescription : this.showDescription, this.itemInstance = e.getItemInstance(), this.item = e, this._mountData = null, e.isItemInstance && !e.isInitialised) return e.once("initialised", function() {
            i.item === e && i.displayItem(e, t)
        });
        if (e.getProperty("id") !== this.itemId && (this.effectsScrollerPosition = {
                x: 0,
                y: 0
            }), this.itemId = e.getProperty("id"), this.weight.setText(l("ui.common.short.weight", e.getProperty("weight"))), this.twoHandedIcon.toggleDisplay(Boolean(e.getProperty("twoHanded"))), this.image.setStyle("backgroundImage", e.getProperty("image")), this.tooltipItemDescription.updateUI(e, null, function() {
                s(i.image, !0)
            }), this._toggleItemActions(e), this._canDisplayDescription()) {
            var n = d.getItemTypeMap()[e.getProperty("typeId")].nameId;
            this.categoryText.setText(l("ui.common.category") + l("ui.common.colon") + n), this.descriptionText.setText(e.getProperty("descriptionId")), this.itemDescriptionContainer.show(), window.setTimeout(function() {
                i.itemDescriptionContainer.refresh()
            }, 0)
        } else this.itemDescriptionContainer.hide();
        this._itemTitle.toggleDisplay(Boolean(this.showTitle)), this.showTitle && (this._name.setText(e.getProperty("nameId")), this._level.setText(l("ui.common.short.level") + " " + e.getProperty("level")));
        var a = null !== window.gui.playerData.inventory.getGenericItem(this.itemId),
            r = e.getProperty("hideEffects") && !a;
        this.itemInfoPanels.clearContent();
        var f = [{
            id: "min",
            header: l("ui.common.minWord")
        }, {
            id: "max",
            header: l("ui.common.maxWord")
        }, {
            id: "info",
            header: l("ui.common.effects", 2)
        }];
        if (this.effects = this.itemInfoPanels.appendChild(new h(f, null, {
                clickable: !1
            })), this.effects.scroller.on("scrollEnd", function() {
                i.effectsScrollerPosition = this.getScrollPosition()
            }), r) this.effects.addRow([l("ui.set.secretBonus")]);
        else {
            var b = c.getSortedEffectInstances(e, !0);
            o(this.effects, b, this.minRows)
        }
        var m = this.effects.scroller;
        m.scrollTo(this.effectsScrollerPosition.x, this.effectsScrollerPosition.y);
        var g = this.itemInstance && this.itemInstance.effectsMap[M];
        this.durabilityBar.toggleDisplay(Boolean(g)), g && (this.durabilityBar.setValue(g.diceNum, g.value), this.durabilityBarDescription.setText(g.description)), this.previewBtn.toggleDisplay(!this.forceHidePreviewBtn)
    }, e.exports = n
}
