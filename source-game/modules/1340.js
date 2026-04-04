function(e, t, i) {
    function n(e) {
        var t = [],
            i = c("ui.common.colon"),
            n = e && e.name && "null" !== e.name,
            o = e && e.description && "null" !== e.description;
        return n && t.push(e.name), o && t.push(e.description), t.join(i)
    }

    function o() {
        l.call(this, "div", {
            className: "itemDetailsView"
        }), this._resetProperties(), this._createDom()
    }

    function a() {
        return window.gui.playerData.characterBaseInformations.entityLook
    }
    i(1341);
    var r = i(18),
        s = i(56)
        .inherits,
        c = i(17)
        .getText,
        l = i(72),
        d = i(86),
        u = i(689),
        p = i(63),
        h = i(469),
        f = i(1326),
        b = i(1328),
        m = i(730),
        M = i(12),
        g = i(453),
        _ = i(871),
        A = i(52),
        O = i(839),
        v = i(1342),
        y = i(879),
        z = i(476),
        w = i(16),
        T = i(66),
        C = i(471),
        I = i(873),
        S = i(32)
        .formatUrlToCssUrl,
        E = i(502),
        L = i(1325),
        N = {};
    N[z.ACTION_LADDER_ID] = !0, N[z.ACTION_ITEM_CHANGE_PETS_LIFE] = !0, N[z.ACTION_ITEM_PETS_SHAPE] = !0, N[z.ACTION_ITEM_PETS_EAT] = !0, N[z.ACTION_PETS_LAST_MEAL] = !0, N[z.ACTION_ID_LIVING_OBJECT_MOOD] = !0, N[z.ACTION_ID_LIVING_OBJECT_SKIN] = !0, N[z.ACTION_ID_LIVING_OBJECT_CATEGORY] = !0, N[z.ACTION_ID_LIVING_OBJECT_LEVEL] = !0, N[z.ACTION_CLIENT_OPEN_UI] = !0, N[983] = !0, N[984] = !0, N[620] = !0;
    var R = 641,
        q = 429,
        x = q / R,
        B = .85,
        D = -99,
        W = ["GOULTINE", "VIRTUALGIFT", "VIRTUALSUBSCRIPTIONLEVEL"];
    s(o, l), e.exports = o, o.prototype._resetProperties = function() {
        this._classSymbolImage = null, this._firstItemOfSet = null, this._articleId = null, this.outfits = [], this.currentOutfitIndex = 0, this.previewArrowTapped = !1
    }, o.prototype.clear = function() {
        this._articleId && this.emit("previewArrowsTapped", this._articleId, this.previewArrowTapped), this._resetProperties(), this._articleBox.clear(), this._characterDisplay.release()
    }, o.prototype._createDom = function() {
        function e() {
            n.emit("purchaseIAP", n._articleId)
        }

        function t() {
            n.emit("purchaseOnAnkama", n._articleId, O.GOULTINE)
        }

        function i() {
            n.emit("purchaseOnAnkama", n._articleId, O.KAMA)
        }
        var n = this,
            o = this._backToCategory = new l("div", {
                className: "goToPrevious"
            }),
            a = new d({
                className: "arrow"
            }, function() {
                n.emit("goToPreviousView"), n.emit("previewArrowsTapped", n._articleId, n.previewArrowTapped)
            });
        o.appendChild(a), this._backToCategoryText = o.createChild("div", {
            className: "text"
        }), this.promoBanner = this.createChild("div", {
            className: "promoBanner"
        }), this._leftColumnScroller = new g({
            className: "left"
        }), this.appendChild(this._leftColumnScroller);
        var r = this._leftColumnScroller,
            s = r.content.createChild("div", {
                className: "topRow"
            }),
            h = s.createChild("div", {
                className: "illuContainer"
            });
        h.createChild("div", {
            className: "dummy"
        });
        var m = h.createChild("div", {
            className: "illuElement"
        });
        this._articleBox = m.appendChild(new f);
        var M = s.createChild("div", {
            className: "nameAndDescription"
        });
        this._name = M.createChild("div", {
            className: "section"
        }), this.promoDescription = M.createChild("div", {
            className: "promoDescription"
        }), this._description = M.createChild("div", {
            className: "subSection"
        }), this._weight = this._articleBox.createChild("div", {
            className: "weight"
        }), this._linkToItemSet = s.appendChild(new d({
            className: "setButton",
            scaleOnPress: !0
        }, function() {
            n._firstItemOfSet && A.open("itemSets", n._firstItemOfSet)
        })), this._linkToItemSet.hide();
        var _ = this._itemsListRow = r.content.createChild("div", {
            className: "itemsListRow"
        });
        _.createChild("div", {
            className: "section",
            text: c("tablet.shop.comesWith")
                .toUpperCase()
        }), this._itemsList = _.createChild("div", {
            className: "subSection"
        });
        var y = r.content.createChild("div", {
            className: "leftItemDetails"
        });
        this._effectsBox = y.appendChild(new v(c("ui.common.effects", 2)
            .toUpperCase()));
        var z = r.content.createChild("div", {
            className: "rightItemDetails"
        });
        this._conditionsBox = z.appendChild(new v(c("ui.common.conditions")
            .toUpperCase())), this._characBox = z.appendChild(new v(c("ui.common.caracteristics")
            .toUpperCase()));
        var w = this.createChild("div", {
                className: "right"
            }),
            T = w.createChild("div", {
                className: "charaContainer"
            });
        T.createChild("div", {
            className: "dummy"
        });
        var C = T.createChild("div", {
                className: "charaElement"
            }),
            I = C.createChild("div", {
                className: "characterOnIsland"
            });
        this._characterOnIsland = I, this._islandImage = I.createChild("div", {
            className: "islandImage"
        });
        var S = this._characterDisplay = I.appendChild(new u({
                scale: "fitin",
                horizontalAlign: "center"
            })),
            E = S.createChild("div", {
                className: "leftButton"
            });
        p(E, {
            repeatDelay: 100
        }), E.on("tap", function() {
            S.rotateCharacter(!1), n.previewArrowTapped = !0, n.emit("noRebound")
        });
        var L = S.createChild("div", {
            className: "rightButton"
        });
        p(L, {
            repeatDelay: 100
        }), L.on("tap", function() {
            S.rotateCharacter(!0), n.previewArrowTapped = !0, n.emit("noRebound")
        });
        var N = I.createChild("div", {
            className: "outfitSelector"
        });
        this.outfitArrows = N.createChild("div", {
            className: "outfitArrows"
        }), this.outfitDots = N.createChild("div", {
            className: "outfitDots"
        });
        var R = this.outfitArrows.createChild("div", {
            className: "leftArrow"
        });
        p(R), R.on("tap", function() {
            n.selectOutfit(), n.emit("noRebound")
        });
        var q = this.outfitArrows.createChild("div", {
            className: "rightArrow"
        });
        p(q), q.on("tap", function() {
            n.selectOutfit({
                right: !0
            }), n.emit("noRebound")
        });
        var x = w.createChild("div", {
                className: "priceBottomSection"
            }),
            B = this._articleButtons = x.appendChild(new b);
        B.on("tapIAPButton", e), B.on("tapHardButton", t), B.on("tapSoftButton", i)
    }, o.prototype.resize = function() {
        var e = T(this._characterDisplay.rootElement),
            t = x * e.height,
            i = B * e.height;
        this._characterDisplay.setStyle("top", t - i + "px"), this._characterDisplay.resize(), this._leftColumnScroller.refresh()
    }, o.prototype._isDisplayable = function(e) {
        return W.indexOf(e.type) !== -1
    }, o.prototype._displayConditions = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                n = i.text,
                o = i.isMalus ? ["malus"] : [];
            if ("string" == typeof n) this._conditionsBox.addRow(n, o);
            else
                for (var a = 0; a < n.length; a++) this._conditionsBox.addRow(n[a], o)
        }
    }, o.prototype._displayOneItem = function(e) {
        var t = this;
        if (this._itemsListRow.hide(), this._linkToItemSet.hide(), e.notItem) return void this._leftColumnScroller.refresh();
        var i = c("ui.common.short.weight", e.getProperty("realWeight"));
        this._weight.setText(c("ui.common.weight") + c("ui.common.colon") + i);
        var n;
        if (this._effectsBox.clearContent(), this._effectsBox.show(), e.hideEffects) this._effectsBox.addRow(c("ui.set.secretBonus"));
        else {
            var o = y.getSortedEffectInstances(e);
            if (o && o.length)
                for (n = 0; n < o.length; n++) {
                    var a = o[n];
                    if (!N[a.effectId])
                        if ("" !== a.description) {
                            var s = a.effect.bonusType,
                                l = [];
                            s === -1 ? l.push("malus") : 1 === s && l.push("bonus"), this._effectsBox.addRowWuidom(E.process(a.description), l)
                        } else console.error("Effect " + a.effectId + " not supported for item " + e.getProperty("id"))
                }
            this._effectsBox.hasRow() || this._effectsBox.addRow(c("tablet.common.none", 0), ["placeholder"])
        }
        this._conditionsBox.clearContent(), this._conditionsBox.show();
        var d, u;
        return r.series([function(t) {
            return e.getConditionsFormatted(function(e, i) {
                return d = i, t()
            })
        }, function(t) {
            return e.getTargetConditionsFormatted(function(e, i) {
                return u = i, t()
            })
        }], function(i) {
            if (i && console.error(i), 0 === d.length && 0 === u.length ? t._conditionsBox.addRow(c("tablet.common.none", 1), ["placeholder"]) : (t._displayConditions(d), t._displayConditions(u)), t._characBox.clearContent(), e.getProperty("isWeapon")) {
                t._characBox.show();
                var o = e.getProperty("statsFormatted");
                if (0 === o.length) t._characBox.addRow(c("tablet.common.none", 1), ["placeholder"]);
                else
                    for (n = 0; n < o.length; n++) t._characBox.addRow(o[n])
            } else t._characBox.hide();
            t._leftColumnScroller.refresh()
        })
    }, o.prototype._displayMultipleItems = function(e) {
        function t() {
            A.open("itemBox", {
                itemData: this.data
            })
        }
        this._itemsListRow.show(), this._effectsBox.hide(), this._conditionsBox.hide(), this._characBox.hide();
        var i, n = 0;
        this._itemsList.clearContent();
        for (var o = 0; o < e.length; o++)
            if (i = e[o], i.notItem) {
                if (!this._isDisplayable(i)) continue;
                var a = this._itemsList.appendChild(new I({
                    image: S(i.image),
                    tooltip: i.name
                }));
                a.addClassNames("ItemSlot"), a.setQuantity(i.quantity)
            } else {
                i.getProperty("realWeight") && (n += i.getProperty("realWeight"));
                var r = new _({
                    itemData: i,
                    quantity: i.quantity
                });
                r.on("tap", t), this._itemsList.appendChild(r)
            } var s = c("ui.common.short.weight", n);
        this._weight.setText(c("ui.common.weight") + c("ui.common.colon") + s), i = e[0];
        var l = i.itemSetId;
        l && l !== -1 ? (this._firstItemOfSet = i, this._linkToItemSet.show()) : (this._firstItemOfSet = null, this._linkToItemSet.hide()), this._leftColumnScroller.refresh()
    }, o.prototype.getArticleId = function() {
        return this._articleId
    }, o.prototype.update = function(e) {
        if (this.emit("showSubCategoryRow", this._backToCategory), this.previewArrowTapped = !1, e) {
            this._itemsListRow.hide(), this._effectsBox.hide(), this._conditionsBox.hide(), this._characBox.hide(), this._backToCategoryText.setText(c("tablet.shop.backTo", e.categoryName));
            var t = e.article;
            this._articleId = t.id, t.name || (console.error("Shop: article name missing for id " + t.id), t.name = ""), this._name.setText(t.name.toUpperCase()), this._description.setHtml(t.description), w.allLinksOnTargetBlank(this._description), this._articleBox.update(t), this._articleButtons.update(t), this._setClassSymbol(), this._characterDisplay.hide(), this._islandImage.addClassNames("spinner");
            var i, o = 0;
            if (t.promo)
                for (i = 0; i < t.promo.length; i += 1) {
                    var r = t.promo[i],
                        s = r && r.name && "null" !== r.name,
                        l = r && r.description && "null" !== r.description;
                    (s || l) && (o += 1)
                }
            var d = t._promoRate,
                u = t.is_free,
                p = L.isArticleBestOffer(t),
                f = t.enddate && t.showCountDown;
            if (o || d || f || u || p) {
                this._leftColumnScroller.addClassNames("promo"), this.promoBanner.toggleDisplay(Boolean(d) || u || p), this.promoBanner.toggleClassName("promoBannerFree", !p && u), this.promoBanner.toggleClassName("promoBannerBestOffer", p), this.promoDescription.toggleDisplay(Boolean(o));
                var b, m;
                if (o || d || !f ? (d || f) && (b = "", d && (b += d), f && (d && (b += " "), m = new Date(t.enddate), b += c("tablet.common.until", m.toLocaleDateString()))) : (m = new Date(t.enddate), b = c("tablet.common.available", c("tablet.common.until", m.toLocaleDateString()))), p ? b = c("ui.shop.bestOffer") : u && (b = c("ui.shop.free")), this.promoBanner.setText(b), o) {
                    var M = t.promo,
                        g = "<b>";
                    for (i = 0; i < o - 1; i++) g += n(M[i]) + "<br /><br />";
                    g += n(M[o - 1]), g += "</b>", this.promoDescription.setHtml(g)
                }
            } else this._leftColumnScroller.delClassNames("promo"), this.promoBanner.hide(), this.promoDescription.hide();
            this._leftColumnScroller.refresh();
            var _ = this,
                A = t.itemsId;
            this.resetOutfits(), h.getItems(A, function(e, i) {
                if (e) return console.error("ItemDetailsView#update: getItems", e);
                var n = i.length;
                if (A.length !== n) return console.error(new Error("Some items are missing, ids requested: " + A + ", items get: " + i));
                t.references.forEach(function(e) {
                    var t, o;
                    if (e.reference_virtualgift)
                        for (t = 0; t < n; t++) o = i[t], o.id && o.id.toString() === e.reference_virtualgift[0].id && (o.quantity = e.quantity);
                    else if (e.reference_gameaction)
                        for (t = 0; t < n; t++) {
                            o = i[t];
                            for (var a = e.reference_gameaction || {}, r = a.definition || {}, s = r.actions || [], c = 0; c < s.length; c++) {
                                var l = s[c];
                                "DofusTouchItem" === l.type && o.id === l.item_id && (o.quantity = l.quantity)
                            }
                        } else e.notItem = !0, i.push(e), n++
                }), n && (1 === n ? _._displayOneItem(i[0]) : _._displayMultipleItems(i));
                for (var o = [], r = 0; r < n; r++) {
                    var s = i[r];
                    "Item" === s._type && s.isEquippable() && o.push(s)
                }
                o.length ? _.generateOutfits(o) : _.setLook(a())
            })
        }
    }, o.prototype.resetOutfits = function() {
        this.outfits = [], this.outfitDots.clearContent(), this.outfitDots.createChild("div", {
            className: ["dot", "selected"]
        }), this.outfitArrows.hide()
    }, o.prototype.generateOutfits = function(e) {
        this.outfits = [];
        var t;
        for (t = 0; t < e.length; t++) {
            var i = e[t],
                n = i.type.superTypeId;
            if (i.isMount()) n = D;
            else {
                if (n === C.DOFUS_OR_TROPHY) continue;
                n === C.PET ? n = C.COSMETIC_PETS : n === C.CAPE ? n = C.COSMETIC_CAPE : n === C.HAT && (n = C.COSMETIC_HAT)
            }
            var o = 0;
            if (!i.isMount())
                for (o = 0; o < this.outfits.length; o++)
                    if (!this.outfits[o][n] && !this.outfits[o][D]) {
                        this.outfits[o][n] = i.id;
                        break
                    } if (o >= this.outfits.length || i.isMount()) {
                var a = {};
                a[n] = i.id, this.outfits.push(a)
            }
        }
        for (this.setOutfitLook(0), this.outfitDots.clearContent(), this.outfitDots.createChild("div", {
                className: ["dot", "selected"]
            }), t = 1; t < this.outfits.length; t++) this.outfitDots.createChild("div", {
            className: "dot"
        });
        this.outfitArrows.toggleDisplay(this.outfits.length > 1)
    }, o.prototype.setOutfitLook = function(e) {
        var t = this.outfits[e];
        if (t) {
            this.currentOutfitIndex = e;
            var i = [];
            for (var n in t) t.hasOwnProperty(n) && i.push(t[n]);
            this.emit("requestPrevisualization", i);
            for (var o = 0; o < this.outfitDots.getChildren()
                .length; o++) {
                var a = this.outfitDots.getChildren()[o];
                a.toggleClassName("selected", o === e)
            }
        }
    }, o.prototype.selectOutfit = function(e) {
        e = e || {};
        var t = w.mod(this.currentOutfitIndex + (e.right ? 1 : -1), this.outfits.length);
        this.setOutfitLook(t)
    }, o.prototype.setLook = function(e) {
        e = e || a();
        var t = this;
        this._characterDisplay.setLook(e, {
            boneType: "characters/",
            skinType: "characters/",
            direction: m.DIRECTION_SOUTH_WEST,
            keepDirection: !1,
            keepModels: !0
        }, function() {
            t._islandImage.delClassNames("spinner"), t._characterDisplay.show(), t._characterDisplay.resize()
        })
    }, o.prototype.updateArticlesPrices = function(e) {
        var t, i = this._articleBox,
            n = this._articleButtons,
            o = i.articleId;
        o && (t = e[o], t ? i.updatePrice(t) : console.error(new Error("Article " + o + " missing for an ArticleBox"))), o = n.articleId, o && (t = e[o], t ? n.update(t) : console.error(new Error("Article " + o + " missing for an ArticleButtons")))
    }, o.prototype._setClassSymbol = function() {
        if (!this._classSymbolImage) {
            var e = this,
                t = window.gui.playerData.characterBaseInformations;
            M.preloadImage("gfx/illusUi/symboles_classe/FichePerso_tx_symboleClasse_frame" + (t.breed - 1) + ".png", function(t) {
                e._classSymbolImage = t, e._characterOnIsland.setStyle("backgroundImage", t)
            })
        }
    }
}
