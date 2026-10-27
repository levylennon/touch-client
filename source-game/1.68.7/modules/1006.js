function(e, t, i) {
    function n() {
        window.gui.openContextualMenu("item", {
            item: this.myWindow.itemInstance || this.myWindow.item,
            enableActions: !0,
            enableDestroy: !1,
            enableSet: !1,
            enableRecipe: !1,
            enableInsertRecipe: !0,
            enableSell: !1,
            enableBestiary: !1
        })
    }

    function o() {
        var e = D.getWindow("bidHouseShop");
        this.myWindow.itemInstance && this.sellMode ? e.openBidHouse(!0, this.myWindow.itemInstance) : e.openBidHouse(!1, this.myWindow.itemId)
    }

    function a() {
        return y(this.myWindow.itemInstance && this.sellMode ? "tablet.itemSellInBidHouse" : "tablet.itemSearchInBidHouse")
    }

    function r() {
        var e = this.myWindow.item;
        D.open("grimoire", {
            tabId: "bestiary",
            tabParams: {
                monsterIds: e.getProperty("dropMonsterIds"),
                label: e.getRawName()
            }
        })
    }

    function s() {
        D.open("itemRecipes", {
            itemData: this.myWindow.item
        })
    }

    function c() {
        var e = [this.myWindow.itemId];
        window.dofus.sendMessage("AccessoryPreviewRequestMessage", {
            genericId: e
        })
    }

    function l() {
        var e = this.myWindow,
            t = e.itemInstance;
        return 1 === t.quantity ? void window.gui.playerData.inventory.confirmDestroyItem(t, 1) : void e._minMaxSelector.openAround(this, {
            min: 1,
            max: t.quantity
        })
    }

    function d() {
        D.open("itemSets", this.myWindow.itemInstance)
    }

    function u(e) {
        B.call(this, "div", {
            className: "ItemBox"
        }), e = e || {}, this.itemInstance = null, this.item = null, this._mountData = null, this.effectsScrollerPosition = {
            x: 0,
            y: 0
        }, this.forceHidePreviewBtn = Boolean(e.forceHidePreviewBtn);
        var t = this;
        this._parentWindow = e.parent, this.showTitle = Boolean(e.showTitle), this.showItemActions = !!e.hasOwnProperty("showItemActions") && e.showItemActions, this.showDescription = !!e.hasOwnProperty("showDescription") && e.showDescription;
        var i = this._itemTitle = this.createChild("div", {
            className: "itemBox-title"
        });
        this._name = i.createChild("div", {
            className: "itemBox-name"
        }), this._level = i.createChild("div", {
            className: "itemBox-level"
        });
        var u = this.createChild("div", {
                className: "infoContainer"
            }),
            p = u.createChild("div", {
                className: "topLeftInfoContainer"
            });
        p.toggleDisplay(!e.hideItemImage), this.topContainer = p.createChild("div", {
            className: "itemBox-topContainer"
        }), this.weight = this.topContainer.createChild("div", {
            className: "weight"
        }), this.weight.toggleDisplay(!e.noWeight), this.twoHandedIcon = p.createChild("div", {
            className: "twoHandedIcon"
        }), M(this.twoHandedIcon, y("ui.common.twoHandsWeapon"));
        var h = p.createChild("div", {
            className: "itemContainer"
        });
        this.image = h.createChild("div", {
            className: "itemImage"
        }), this.durabilityBar = h.appendChild(new S({
            className: ["durabilityBar", "red"],
            tooltip: !0
        })), this.durabilityBarDescription = new B("div"), M(this.durabilityBar, this.durabilityBarDescription), this.tooltipItemDescription = new z, M(this.image, function(e) {
            return t.tooltipItemDescription.updateUI(t.item, null, function() {
                return e(t.tooltipItemDescription)
            })
        }), P(this.image), this.image.on("tap", function() {
            return t._mountData ? D.open("mount") : void(t.item && window.gui.openContextualMenu("item", {
                item: t.item.getItemInstance() || t.item.getItem(),
                location: t._parentWindow ? t._parentWindow.constructor.name : "",
                enableCertificate: !0
            }))
        });
        var f = [{
            title: y("ui.common.effects", 2),
            name: "effects"
        }, {
            title: y("ui.common.conditions"),
            name: "conditions"
        }, {
            title: y("ui.common.short.caracteristic"),
            name: "characteristics"
        }];
        this.panelCollection = {}, this.topRightInfoContainer = u.createChild("div", {
            className: "topRightInfoContainer"
        }), this.itemInfoTabs = new N, this.itemInfoTabs.toggleDisplay(!e.noTabs), this.topRightInfoContainer.appendChild(this.itemInfoTabs), this.itemInfoPanels = this.topRightInfoContainer.createChild("div", {
            className: "itemInfoPanels"
        }), this.minRows = isNaN(e.minRows) ? j : e.minRows;
        for (var b = 0, m = f.length; b < m; b += 1) {
            var g = f[b];
            this.panelCollection[g.name] = this.itemInfoPanels.appendChild(new L([{
                id: "info"
            }], null, {
                clickable: !1,
                noHeader: !0
            })), this.itemInfoTabs.addTab(g.title, this.panelCollection[g.name])
        }
        this.panelCollection.effects.scroller.on("scrollEnd", function() {
            t.effectsScrollerPosition = this.getScrollPosition()
        });
        var _ = this.itemActionContainer = this.createChild("div", {
                className: "actionContainer"
            }),
            A = this.actionBtn = _.appendChild(new R({
                text: y("tablet.itemAction"),
                className: "actionButton"
            }, n));
        A.myWindow = this, A = this.bidHouseBtn = _.appendChild(new R({
            className: ["bidHouseActionButton"],
            tooltip: a
        }, o)), A.myWindow = this, A.sellMode = !0, A = this.bestiaryBtn = _.appendChild(new R({
            className: ["bestiaryButton"],
            tooltip: y("ui.common.bestiary")
        }, r)), A.myWindow = this, A = this.setButton = _.appendChild(new R({
            className: "setButton",
            tooltip: y("ui.common.set")
        }, d)), A.myWindow = this, this.buttonContainer = this.topContainer.createChild("div", {
            className: "buttonContainer"
        });
        var O = e.withCraftBtn ? this.buttonContainer : _;
        A = this.recipeButton = O.appendChild(new R({
            className: "recipeButton",
            tooltip: y("ui.craft.associateReceipts")
        }, s)), A.myWindow = this, e.withBidHouseBtn && (A = this.buttonContainer.appendChild(new R({
            className: ["bidHouseButton"],
            tooltip: a
        }, o)), A.myWindow = this, A.sellMode = !0), A = this.previewBtn = this.buttonContainer.appendChild(new R({
            className: "previewButton",
            tooltip: y("ui.button.previewSkin")
        }, c)), A.myWindow = this;
        var w = this._minMaxSelector = window.gui.windowsContainer.appendChild(new W);
        w.on("confirm", function(e) {
            window.gui.playerData.inventory.confirmDestroyItem(t.itemInstance, e)
        }), A = this.bidHouseSearchBtn = _.appendChild(new R({
            className: ["bidHouseSearchButton"],
            tooltip: a
        }, o)), A.myWindow = this, A.sellMode = !1, A = this.destroyButton = _.appendChild(new R({
            className: "destroyButton",
            tooltip: y("ui.common.destroyThisItem")
        }, l)), A.myWindow = this, window.gui.playerData.on("dialogStateChanged", function(e) {
            t.destroyButton && t.destroyButton.rootElement && t.destroyButton.toggleDisplay(!e)
        }), this.itemDescriptionContainer = this.appendChild(new x({
            className: "itemDescriptionContainer"
        })), this.categoryText = this.itemDescriptionContainer.content.createChild("div", {
            className: "category"
        }), this.descriptionText = this.itemDescriptionContainer.content.createChild("div", {
            className: "description"
        }), this.itemInfoTabs.openTab(0), e.noListener || (this._listener = new v, this._listener.listenTo(window.gui.playerData.inventory, "itemModified", function(e) {
            t.itemInstance && t.itemInstance.objectUID === e.objectUID && t.displayItem(e)
        })), this.on("destroy", function() {
            this._listener && this._listener.stopListening()
        }), H.on("AccessoryPreviewMessage", function(e) {
            D.getOpenWindows()
                .indexOf("market > shop") < 0 && D.open("characterPreviewSkin", {
                    look: e.look
                })
        })
    }

    function p(e, t) {
        if (e && e.rows)
            for (var i = e.rows.getChildCount(); i < t; i++) e.addRow({
                info: ""
            })
    }

    function h(e, t, i) {
        if (t) {
            for (var n = A.exoticEffects, o = 0; o < t.length; o += 1) {
                var a = t[o],
                    r = a.effect;
                if (r.id !== U) {
                    var s = a.description;
                    if (s) {
                        var c = k.process(s),
                            l = e.addRow({
                                info: c
                            });
                        n[r.id] ? l.addClassNames("exotic") : a.isOver ? l.addClassNames("over") : r.bonusType === -1 ? l.addClassNames("malus") : 1 === r.bonusType && l.addClassNames("bonus")
                    }
                }
            }
            p(e, i), e.scroller.refresh()
        }
    }

    function f(e, t, i) {
        var n = i.addRow({
            info: k.process(e)
        });
        t && n.addClassNames("malus")
    }

    function b(e, t, i) {
        for (var n = 0; n < e.length; n++) {
            var o = e[n],
                a = o.text;
            if ("string" == typeof a) f(a, o.isMalus, t);
            else
                for (var r = 0; r < a.length; r++) {
                    var s = a[r];
                    f(s, o.isMalus, t)
                }
        }
        p(t, i)
    }

    function m(e, t, i) {
        for (var n = 0; n < e.length; n++) t.addRow({
            info: e[n]
        });
        p(t, i)
    }
    i(1007);
    var M = i(88)
        .addTooltip,
        g = i(12),
        _ = i(474),
        A = i(879),
        O = i(88)
        .enableTooltip,
        v = i(556),
        y = i(17)
        .getText,
        z = i(875),
        w = i(469),
        T = w.Item,
        C = w.ItemInstance,
        I = i(481),
        S = i(490),
        E = i(130),
        L = i(765),
        N = i(962),
        R = i(86),
        q = i(56),
        x = i(453),
        B = i(72),
        D = i(52),
        W = i(421),
        P = i(63),
        k = i(502),
        F = i(470)
        .positions,
        H = window.dofus.connectionManager,
        U = I.EFFECT_MOUNT,
        G = 812,
        j = 5,
        Y = [F.hat, F.cape, F.shield, F.cosmeticHat, F.cosmeticCape, F.cosmeticPets, F.cosmeticShield, F.mount, F.pets];
    q.inherits(u, B), u.prototype._toggleItemActions = function(e) {
        if (this.showItemActions && e) {
            this.itemActionContainer.show(), this.bestiaryBtn.toggleDisplay(Boolean(e.getProperty("dropMonsterIds")
                .length)), this.setButton.toggleDisplay(e.getProperty("itemSetId") !== -1);
            var t = w.isEquipped(e.position),
                i = !e.isItemInstance || !(e.isLinked() || e.isLinkedCharacter() || t),
                n = !e.isItemInstance || !(e.isLinked() || e.isLinkedCharacter());
            this.bidHouseBtn.toggleDisplay(i), this.bidHouseSearchBtn.toggleDisplay(n), this.destroyButton.toggleDisplay(Boolean(e.isItemInstance) && !window.gui.playerData.isInDialog)
        } else this.itemActionContainer.hide()
    }, u.prototype._canDisplayDescription = function() {
        return this.showDescription && ("auto" !== this.showDescription || this.itemDescriptionContainer.rootElement.clientHeight > 30)
    }, u.prototype.displayMount = function(e, t) {
        if (e !== this._mountData) {
            t = t || {}, this._mountData = e, this.item = null, this.itemInstance = null, this.showTitle = t.hasOwnProperty("showTitle") ? t.showTitle : this.showTitle, this.showDescription = t.hasOwnProperty("showDescription") ? t.showDescription : this.showDescription, this.weight.setText(y("ui.common.short.weight", 0)), this.twoHandedIcon.hide(), this.durabilityBar.hide();
            var i = this;
            if (g.preloadImage("gfx/mounts/" + e.model + ".png", function(t) {
                    e === i._mountData && i.image.setStyle("backgroundImage", t)
                }), O(this.image, !1), this._toggleItemActions(null), this._canDisplayDescription()) {
                this.categoryText.setText(y("ui.common.category") + y("ui.common.colon") + y("ui.common.ride"));
                var n = y("ui.mount.description", e.name, e.level, e.xpRatio);
                this.descriptionText.setText(n), this.itemDescriptionContainer.show(), this.itemDescriptionContainer.refresh()
            } else this.itemDescriptionContainer.hide();
            this._itemTitle.toggleDisplay(Boolean(this.showTitle)), this.showTitle && (E.getDataMap("Mounts", [e.model], null, function(t, n) {
                if (t) return console.error(t);
                if (e === i._mountData) {
                    var o = n[e.model];
                    i._name.setText(o.nameId)
                }
            }), this._level.setText(y("ui.common.short.level") + " " + e.level));
            for (var o in this.panelCollection) this.panelCollection[o].clearContent();
            this.itemInfoTabs.toggleTabDisplay(2, !1), _.createEffectInstances(e.effectList, function(t, n) {
                if (t) return console.error(t);
                if (e === i._mountData) {
                    var o = A.sortEffects(n);
                    h(i.panelCollection.effects, o, i.minRows)
                }
            })
        }
    }, u.prototype.displayItem = function(e, t) {
        var i = this;
        if (!(e instanceof T || e instanceof C)) return console.error(new Error("ItemBox: item is not Item nor ItemInstance"));
        if (t = t || {}, this.showTitle = t.hasOwnProperty("showTitle") ? t.showTitle : this.showTitle, this.showDescription = t.hasOwnProperty("showDescription") ? t.showDescription : this.showDescription, this.itemInstance = e.getItemInstance(), this.item = e, this._mountData = null, e.isItemInstance && !e.isInitialised) return e.once("initialised", function() {
            i.item === e && i.displayItem(e, t)
        });
        if (e.getProperty("id") !== this.itemId && (this.effectsScrollerPosition = {
                x: 0,
                y: 0
            }), this.itemId = e.getProperty("id"), this.weight.setText(y("ui.common.short.weight", e.getProperty("weight"))), this.twoHandedIcon.toggleDisplay(Boolean(e.getProperty("twoHanded"))), this.image.setStyle("backgroundImage", e.getProperty("image")), this.tooltipItemDescription.updateUI(e, null, function() {
                O(i.image, !0)
            }), this._toggleItemActions(e), this._canDisplayDescription()) {
            var n = w.getItemTypeMap()[e.getProperty("typeId")].nameId;
            this.categoryText.setText(y("ui.common.category") + y("ui.common.colon") + n), this.descriptionText.setText(e.getProperty("descriptionId")), this.itemDescriptionContainer.show(), window.setTimeout(function() {
                i.itemDescriptionContainer.refresh()
            }, 0)
        } else this.itemDescriptionContainer.hide();
        var o = e.item ? e.item.type : e.type,
            a = o.possiblePositions[0],
            r = Y.indexOf(a) !== -1,
            s = this.itemActionContainer.isVisible(),
            c = r && !s && !this.forceHidePreviewBtn;
        this.previewBtn.toggleDisplay(c), this._itemTitle.toggleDisplay(Boolean(this.showTitle)), this.showTitle && (this._name.setText(e.getProperty("nameId")), this._level.setText(y("ui.common.short.level") + " " + e.getProperty("level")));
        for (var l in this.panelCollection) this.panelCollection[l].clearContent();
        var d = null !== window.gui.playerData.inventory.getGenericItem(this.itemId),
            u = e.getProperty("hideEffects") && !d;
        if (u) this.panelCollection.effects.addRow([y("ui.set.secretBonus")]);
        else {
            var p = A.getSortedEffectInstances(e);
            h(this.panelCollection.effects, p, this.minRows)
        }
        var f = this.panelCollection.effects.scroller;
        f.scrollTo(this.effectsScrollerPosition.x, this.effectsScrollerPosition.y), e.getConditionsFormatted(function(t, n) {
            if (i.item === e) return b(n, i.panelCollection.conditions, 0), e.getTargetConditionsFormatted(function(t, n) {
                i.item === e && b(n, i.panelCollection.conditions, i.minRows)
            })
        }), e.getProperty("isWeapon") ? (m(e.getProperty("statsFormatted"), i.panelCollection.characteristics, i.minRows), i.itemInfoTabs.toggleTabDisplay(2, !0)) : i.itemInfoTabs.toggleTabDisplay(2, !1);
        var M = i.itemInstance && i.itemInstance.effectsMap[G];
        i.durabilityBar.toggleDisplay(Boolean(M)), M && (i.durabilityBar.setValue(M.diceNum, M.value), i.durabilityBarDescription.setText(M.description))
    }, u.prototype.refreshEffectsScroller = function() {
        this.panelCollection.effects.scroller.refresh()
    }, u.prototype.displayDestroyBtn = function(e) {
        this.destroyButton && this.destroyButton.rootElement && this.destroyButton.toggleDisplay(e)
    }, e.exports = u
}
