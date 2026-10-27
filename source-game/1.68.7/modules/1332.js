function(e, t, i) {
    function n() {
        f.close("market")
    }

    function o(e, t) {
        l.call(this, "div", {
            className: "ShopWindow",
            name: "shop"
        }), r = t, this.nbArticlesVisible = 1, this.activeTopTab = null, this.selectedTopTab = null, this.selectedSubTab = null, this.openedCategory = null, this.openedSubCategory = null, this.currentArticle = null, this.categoriesName = {}, this.categoriesData = {}, this.requestTimestamp = 0, this.requestTimeout = null, this.lastAction = null, this._isInitializing = !1, this.articlesMap = {}, this._views = {}, this._currentViewName = null, this._previousViewName = null, this._categoryToOpenWhenReady = null, this._needsResize = !1, this._isOpened = !1, this._articleIdToOpen = 0, this.visitedCategories = {}, this.visitedSubCategories = {}, this.visitedArticles = {}, this.carouselClics = 0, this.carouselArrows = 0, this.carouselSwipes = 0, this.exitCategory = 0, window.gui.on("connected", function() {
            a()
        }), this.once("open", function() {
            this._createDom(), this._setupEvents()
        }), this.on("open", function(e) {
            e && e.articleId && (this._articleIdToOpen = e.articleId)
        }), this.on("opened", function(e) {
            return this._isOpened = !0, this._categoryToOpenWhenReady = null, this.currentArticle = null, this.visitedCategories = {}, this.visitedSubCategories = {}, this.visitedArticles = {}, this.rebound = !0, this.carouselClics = 0, this.carouselArrows = 0, this.carouselSwipes = 0, this.exitCategory = 0, e && e.tabParams && e.tabParams.category && (this._categoryToOpenWhenReady = e.tabParams.category), window.gui.scenarioManager.isBehaviourEnabled(v.ENABLE_FAKE_SHOP) ? this._showFakeShop(function(e) {
                if (e) return console.error(e)
            }) : this._currentViewName ? void(e && e.tabParams && e.tabParams.category && this._navigateToCategory(e.tabParams.category)) : (this._isInitializing || this._reinitializeShop(), this._needsResize && this.resize(), void a())
        }), this.on("close", function() {
            this._isOpened = !1, this.wallet.resetFakeHardAmount(), this.clearShop(), this._sendKPI()
        })
    }

    function a() {
        window.gui.playerData.isShopDisabled() || window.dofus.send("restoreMysteryBox")
    }
    i(1333);
    var r, s = i(56)
        .inherits,
        c = i(17)
        .getText,
        l = i(72),
        d = i(1052)
        .SingleSelectionList,
        u = i(91)
        .playUiSound,
        p = i(86),
        h = i(63),
        f = i(52),
        b = i(1165),
        m = i(840),
        M = i(1334),
        g = i(1338),
        _ = i(1340),
        A = i(838),
        O = i(88),
        v = i(129),
        y = i(116),
        z = i(1343)
        .getFakeShopData,
        w = i(16),
        T = 500,
        C = "itemsList",
        I = "homepage",
        S = "itemDetails",
        E = "homepage",
        L = "-1",
        N = 556,
        R = 557,
        q = 999,
        x = 716,
        B = 625,
        D = {
            id: E,
            name: "",
            child: []
        },
        W = {
            id: N,
            name: "Goultine",
            child: []
        },
        P = {};
    P[R] = {
        lines: 1,
        promoType: "corner",
        showArticleDescription: !0,
        useBonusPackDisplay: !0,
        canTapImage: !1
    }, P[q] = {
        lines: 1,
        promoType: "corner",
        showArticleDescription: !0,
        useBonusPackDisplay: !0,
        position: "left",
        canTapImage: !1
    };
    var k = {};
    k[R] = !0, k[q] = !0;
    var F = {
        home: 0,
        category: 1,
        subCategory: 2,
        article: 3
    };
    window.m = f, s(o, l), e.exports = o, o.prototype._showFakeShop = function(e) {
        var t = this;
        return this.wallet.setFakeHardAmount(0), this._needsResize && this.resize(), z(function(i, n) {
            return i || !n ? e(new Error("ShopWindow._showFakeShop: unable to get data. " + i)) : (t.onShopOpenCategorySuccess(n), t._openCategory(q), e(null))
        })
    };
    var H = !0,
        U = !0;
    o.prototype.setSubCategoryRowVisible = function(e) {
        var t = U !== e;
        U = e, this.subCategoryRow.toggleDisplay(e), this.subCategoryRowSeparator.toggleDisplay(e), t && (this.viewContainer.toggleClassName("hasSubCategory", e), this.resize())
    }, o.prototype._activateTopTab = function(e) {
        var t = e.getWuiName(),
            i = this.activeTopTab;
        if (i) {
            if (e === i) return;
            this._deactivateTopTab(i), this.noRebound()
        }
        if (this.setSubCategoryRowVisible(!1), t === E) this.closeCategory(this.openedCategory), this._setView(I);
        else {
            if (this._isSameCategory(t)) return;
            if (e.sublist) {
                for (var n = this.subCategoryRow.getChildren(), o = 0; o < n.length; o++) this.subCategoryRow.removeChild(n[o]);
                this.subCategoryRow.appendChild(e.sublist), this.setSubCategoryRowVisible(!0), H && (e.sublist.deselectAll(), this.selectedSubTab = null)
            }
            var a = this._views[S];
            a.getArticleId() && a.clear(), this._openCategory(t)
        }
        var r = t === E ? L : t;
        r = parseInt(r, 10), this.visitedCategories[r] ? this.visitedCategories[r].visits += 1 : this.visitedCategories[r] = {
            id: r,
            visits: 1
        }, this.openedSubCategory = null, this.currentArticle = null, this.activeTopTab = e, this.selectedTopTab = t, e.addClassNames("on"), u("TAB")
    }, o.prototype._activateSubCategory = function(e) {
        var t = e.getWuiName();
        this._isSameCategory(t) || (this.selectedSubTab = t, this._openCategory(t), u("TAB"))
    };
    var G = !0;
    o.prototype._deactivateTopTab = function(e) {
        var t = e.getWuiName();
        t !== E && (e.sublist && (this.setSubCategoryRowVisible(!1), e.sublist.deselectAll()), this._isSameCategory(t) && this.closeCategory(t)), e.delClassNames("on"), this.activeTopTab = null
    }, o.prototype._deactivateSubCategory = function(e) {
        var t = e.getWuiName();
        this._isSameCategory(t) && (this.closeCategory(t), G && (this.selectedSubTab = null, this._openCategory(this.selectedTopTab)))
    }, o.prototype.deactivateAllCategories = function() {
        G = !1, this.activeTopTab && this._deactivateTopTab(this.activeTopTab), G = !0
    }, o.prototype.reactivateCategories = function() {
        var e = this.selectedTopTab;
        if (e) {
            H = !1;
            var t = this.topTabsList.getChild(e);
            if (this._activateTopTab(t), !t.sublist || !this.selectedSubTab) return void(H = !0);
            t.sublist.selectItem(this.selectedSubTab), H = !0
        }
    }, o.prototype._openGoultinesCategory = function() {
        this._isSameCategory(N) || (this.deactivateAllCategories(), this.setSubCategoryRowVisible(!1), this._openCategory(N))
    }, o.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "row1"
            });
        t.createChild("div", {
            className: ["separator", "first"]
        }), this.subCategoryRowSeparator = t.createChild("div", {
            className: ["separator", "second"]
        }), D.name = c("tablet.shop.homepage.name"), this.topTabsList = t.createChild("div", {
            className: "topTabsList"
        }), this._closeButton = t.appendChild(new p({
            className: "closeButton",
            scaleOnPress: !0
        })), this._closeButton.on("tap", function() {
            n()
        }), this.wallet = t.appendChild(new b({
            emitTap: !0,
            showBonusPack: !0
        })), this.wallet.on("moreGoultinesTap", function() {
            var t = e.topTabsList.getChild(W.id);
            t && e._activateTopTab(t)
        }), this.wallet.on("bonusPackTap", function() {
            var t = e.topTabsList.getChild(R);
            t && e._activateTopTab(t)
        }), this.subCategoryRow = this.createChild("div", {
            className: "subCategoryRow"
        }), this.viewContainer = this.createChild("div", {
            className: "row2"
        }), this.setSubCategoryRowVisible(!1), this._views[I] = new M, this._views[C] = new g, this._views[S] = new _
    }, o.prototype._setView = function(e, t) {
        if (this._currentViewName !== e) {
            this.deactivateAllCategories(), this._previousViewName = this._currentViewName, this._currentViewName = e;
            for (var i = this.viewContainer, n = i.getChildren(), o = 0; o < n.length; o++) i.removeChild(n[o]);
            var a = this._views[e];
            a && (i.appendChild(a), a.update(t))
        }
    }, o.prototype.goToPreviousView = function() {
        return this.currentArticle = null, this._previousViewName === I ? this.reactivateCategories() : this._previousViewName === C ? (this.reactivateCategories(), void this._views[C].restoreScrollPosition()) : void this._setView(this._previousViewName)
    }, o.prototype._displayItemDetails = function(e) {
        if (this.currentArticle = e, this._currentViewName === C) {
            var t = this._views,
                i = t[C];
            i.saveScrollPosition()
        }
        var n = this.articlesMap[e],
            o = this.openedCategory || E,
            a = this.categoriesName[o];
        n && this._setView(S, {
            article: n,
            categoryName: a
        })
    }, o.prototype._setupEvents = function() {
        function e(e) {
            window.gui.scenarioManager.isBehaviourEnabled(v.ENABLE_FAKE_SHOP) || (A.purchaseArticleOnStore(d.articlesMap[e]), d.noRebound())
        }

        function t(e, t) {
            return window.gui.scenarioManager.isBehaviourEnabled(v.ENABLE_FAKE_SHOP) ? (window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.FAKE_SHOP_BUY), f.close("shopConfirm"), void n()) : (A.purchaseArticleOnAnkama(d.articlesMap[e], t), void d.noRebound())
        }

        function i(e) {
            d.showSubCategoryRow(e)
        }

        function o() {
            d.showSubCategoryRow(!1)
        }

        function a() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(v.DISABLE_BUTTONS_IN_SHOP);
            d.toggleClassName("disabledBehaviour", e)
        }
        var r = window.dofus.connectionManager,
            s = this._views,
            c = s[C],
            l = s[S],
            d = this;
        r.on("shopOpenError", function(e) {
                d.onShopOpenError(e)
            }), r.on("shopOpenSuccess", function(e) {
                d.onShopOpenSuccess(e)
            }), r.on("shopOpenCategoryError", function(e) {
                d.onShopOpenCategoryError(e)
            }), r.on("shopOpenCategorySuccess", function(e) {
                d.onShopOpenCategorySuccess(e)
            }), r.on("AccessoryPreviewErrorMessage", function(e) {
                console.error(new Error("Accessory preview failed with: " + e.error + " for article " + l.getArticleId())), l.setLook(null)
            }), r.on("AccessoryPreviewMessage", function(e) {
                l.setLook(e.look)
            }), window.gui.on("resize", function() {
                d.resize()
            }), f.getWindow("shopConfirm")
            .on("closed", function(e) {
                e && e.endPurchase && d._refreshCurrentTab()
            });
        for (var u in s)
            if (s.hasOwnProperty(u)) {
                var p = s[u];
                p.on("displayItemDetails", this._displayItemDetails.bind(this)), p.on("purchaseIAP", e), p.on("purchaseOnAnkama", t), p.on("showSubCategoryRow", i), p.on("hideSubCategoryRow", o), p.on("openCategory", function(e) {
                    d._openCategory(e)
                }), p.on("previewArrowsTapped", function(e, t) {
                    e && (d.visitedArticles[e] ? d.visitedArticles[e].visits += 1 : d.visitedArticles[e] = {
                        id: e,
                        visits: 1,
                        previsualisation: 0
                    }, t && (d.visitedArticles[e].previsualisation += 1))
                }), p.on("noRebound", function() {
                    d.noRebound()
                }), p.on("arrowCarousel", function() {
                    d.carouselArrows += 1, d.noRebound()
                }), p.on("swipeCarousel", function() {
                    d.carouselSwipes += 1, d.noRebound()
                }), p.on("clickCarousel", function() {
                    d.carouselClics += 1, d.noRebound()
                })
            } c.on("loadAdditionalContent", function() {
            d._saveAndExecuteAction(function() {
                d.loadAdditionalContent()
            })
        }), c.on("nbArticlesVisibleUpdated", function(e) {
            d.nbArticlesVisible = e
        }), l.on("goToPreviousView", function() {
            d.noRebound(), d.goToPreviousView()
        }), l.on("requestPrevisualization", function(e) {
            r.sendMessage("AccessoryPreviewRequestMessage", {
                genericId: e
            })
        }), m.on("canNotComputeSoftPrices", function() {
            d.isOpen() && d.updateArticlesPrices()
        }), m.on("computedSoftPricesChange", function() {
            d.isOpen() && d.updateArticlesPrices()
        }), a(), window.gui.scenarioManager.on("stepChanged", function() {
            a()
        })
    }, o.prototype.isOpen = function() {
        return f.getWindow("market")
            .openState
    }, o.prototype.noRebound = function() {
        this.rebound = !1
    }, o.prototype.showSubCategoryRow = function(e) {
        for (var t = this.subCategoryRow.getChildren(), i = 0; i < t.length; i++) this.subCategoryRow.removeChild(t[i]);
        var n = Boolean(e);
        this.setSubCategoryRowVisible(n), n && this.subCategoryRow.appendChild(e)
    }, o.prototype._navigateToCategory = function(e) {
        var t;
        if ("goultines" === e ? (this._openGoultinesCategory(), t = N) : "bonuspack" === e && (this._openCategory(R), t = R), t) {
            var i = t === E ? L : t;
            i = parseInt(i, 10), this.visitedCategories[i] ? this.visitedCategories[i].visits += 1 : this.visitedCategories[i] = {
                id: i,
                visits: 1
            }
        }
    }, o.prototype.onShopOpenError = function() {
        this._isInitializing = !1, this.viewContainer.delClassNames("spinner"), this.isOpen() && this._showErrorPopup(!0)
    }, o.prototype.onShopOpenSuccess = function(e) {
        if (this._isInitializing = !1, this.viewContainer.delClassNames("spinner"), this.isOpen()) {
            this.wallet.goultinesBtn.enable(), this.wallet.bonusPackBtn.enable();
            var t = e.home;
            this.setCategories(t.categories);
            var i = this.topTabsList.getChildren();
            i.length && this._activateTopTab(i[0]);
            var n;
            if (t._highlightImageArticle) {
                var o = this.validateArticles([t._highlightImageArticle]);
                o.length && (n = o[0])
            }
            var a;
            if (t.gondolahead_article && (a = this.validateArticles(t.gondolahead_article)), t._highlightCarouselElements && this.validateArticles(t._highlightCarouselArticles), t.hightlight_popup) {
                for (var s = [], c = 0, l = t.hightlight_popup.length; c < l; c += 1) {
                    var d = t.hightlight_popup[c];
                    d.external_article && s.push(d.external_article)
                }
                this.validateArticles(s)
            }
            var u = {
                gondolaHeadArticles: a,
                highlightCarouselArticles: t._highlightCarouselElements,
                highlightImageArticle: n
            };
            if (this._views[I].update(u), this._categoryToOpenWhenReady && (delete this.visitedCategories[L], this._navigateToCategory(this._categoryToOpenWhenReady)), r.isAvailable() && A.checkPendingPurchases(), this._articleIdToOpen) {
                var p = this.articlesMap[this._articleIdToOpen];
                p ? this._displayItemDetails(this._articleIdToOpen) : console.error(new Error("ShopWindow: Cannot find article: " + this._articleIdToOpen))
            }
        }
    }, o.prototype.onShopOpenCategoryError = function(e) {
        if (this._isSameCategory(e.categoryId)) {
            var t = this._views[C];
            t.setSpinnerVisible(!1), t.setLoadingAdditionalContent(!1), this._showErrorPopup()
        }
    }, o.prototype.onShopOpenCategorySuccess = function(e) {
        this._loadCategoryWithMessage(e)
    }, o.prototype.resize = function() {
        if (!this._isOpened) return void(this._needsResize = !0);
        var e = this._views;
        for (var t in e) e.hasOwnProperty(t) && e[t].resize(this.viewContainer);
        this._needsResize = !1
    }, o.prototype._showErrorPopup = function(e) {
        var t = this;
        f.getWindow("confirm")
            .update({
                title: c("ui.common.error"),
                message: c("ui.popup.accessDenied.serviceUnavailable") + " " + c("tablet.common.askRetry"),
                cb: function(i) {
                    return i ? t.lastAction ? void t.lastAction() : void t._reinitializeShop() : void(e && n())
                }
            }), f.openDialog(["confirm"])
    }, o.prototype._isSameCategory = function(e) {
        return e === this.openedCategory
    }, o.prototype._saveAndExecuteAction = function(e) {
        this.lastAction = e, e()
    }, o.prototype.updateArticlesPrices = function() {
        var e = this.articlesMap;
        for (var t in e) e.hasOwnProperty(t) && A.enrichWithSoftPrice(e[t]);
        var i = this._views;
        for (var n in i) i.hasOwnProperty(n) && i[n].updateArticlesPrices(this.articlesMap)
    }, o.prototype._reinitializeShop = function() {
        function e(e) {
            console.error(e), t._isInitializing = !1, t.viewContainer.delClassNames("spinner"), t.isOpen() && t._showErrorPopup(!0)
        }
        var t = this;
        this._saveAndExecuteAction(function() {
            t._isInitializing = !0, t.viewContainer.addClassNames("spinner"), A.getStoreInfos(function(t) {
                return t ? e(t) : void window.dofus.send("shopOpenRequest")
            })
        })
    }, o.prototype.clearShop = function() {
        this.exitCategory = parseInt(this.openedCategory, 10);
        var e = this.activeTopTab;
        e && this._deactivateTopTab(e), this.closeCategory(this.openedCategory), this.clearCategories(), this.requestTimestamp = 0, this.requestTimeout = null, this.lastAction = null, this._isInitializing = !1, this._articleIdToOpen = 0, this.wallet.goultinesBtn.disable(), this._setView(I), this._currentViewName = null, this._previousViewName = null;
        var t = this._views;
        for (var i in t) t.hasOwnProperty(i) && t[i].clear()
    }, o.prototype.setCategories = function(e) {
        this.clearCategories(), this._addTopCategories(e)
    }, o.prototype._createCategoryLabel = function(e) {
        var t = new l("div", {
            className: "textContainer"
        });
        return t.createChild("div", {
            className: "text",
            text: e.name.toUpperCase()
        }), t
    }, o.prototype._addTopCategories = function(e) {
        function t(e) {
            a._activateSubCategory(e), a.visitedSubCategories[e.id] ? a.visitedSubCategories[e.id].visits += 1 : a.visitedSubCategories[e.id] = {
                id: e.id,
                visits: 1
            }, a.openedSubCategory = e.id, a.noRebound()
        }

        function i(e) {
            a._deactivateSubCategory(e)
        }

        function n() {
            a._activateTopTab(this)
        }

        function o(e) {
            if (e.id !== x && e.id !== B) {
                a.categoriesName[e.id] = e.name;
                var o = a.topTabsList.createChild("div", {
                        name: e.id,
                        className: "tab"
                    }),
                    r = o.createChild("div", {
                        className: "icon"
                    });
                if (r.addClassNames("icon-" + e.id), h(o), o.on("tap", n.bind(o)), O.addTooltip(o, e.name), e.child.length) {
                    var s = new d;
                    o.sublist = s, s.on("selected", t), s.on("deselected", i), a._addSubCategories(s, e.child)
                }
            }
        }
        var a = this;
        o(D);
        for (var r = 0; r < e.length; r++) o(e[r])
    }, o.prototype._addSubCategories = function(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            this.categoriesName[n.id] = n.name;
            var o = this._createCategoryLabel(n),
                a = e.addItem({
                    id: n.id,
                    element: o
                });
            a.addClassNames("tab")
        }
    }, o.prototype.clearCategories = function() {
        this.topTabsList.clearContent(), this.activeTopTab = null, this.selectedTopTab = null, this.selectedSubTab = null, this.openedCategory = null, this.categoriesName = {}, this.categoriesData = {}, this.articlesMap = {}
    }, o.prototype._loadCategoryWithMessage = function(e) {
        var t = e.categoryId,
            i = this.categoriesData[t];
        if (i) {
            if (i.page !== e.page - 1) return;
            i.page = e.page, i.articles = i.articles.concat(e.articles)
        } else this.categoriesData[t] = e;
        this._isSameCategory(t) && this._loadCategory(e)
    }, o.prototype.validateArticles = function(e) {
        for (var t = A.validateArticles(e), i = 0; i < t.length; i++) {
            var n = t[i];
            this.articlesMap[n.id] = n
        }
        return t
    }, o.prototype._loadCategory = function(e) {
        var t = this._views[C];
        if (0 === e.totalArticles) return void t.showNoResult(this.categoriesName[this.openedCategory], ~~e.categoryId);
        var i = this.validateArticles(e.articles),
            n = Math.ceil(e.totalArticles / this.nbArticlesVisible),
            o = e.page === n;
        t.addArticles(i, o), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.SHOP_LOADED)
    }, o.prototype.getFirstArticle = function() {
        var e = this._views[C],
            t = e.getLines();
        return t.length > 0 ? t[0].getChildren()[0] : null
    }, o.prototype._refreshCurrentTab = function() {
        if (this.selectedTopTab) {
            if (this.setSubCategoryRowVisible(!1), this._views[S] && (this.reactivateCategories(), this._views[C].restoreScrollPosition()), this.selectedTopTab === E && this._views[I]) return this._views[I].clear(), this.topTabsList.clearContent(), void this._reinitializeShop();
            var e = this.topTabsList.getChild(this.selectedTopTab);
            this.closeCategory(this.selectedTopTab), this.categoriesData[this.selectedTopTab] = null, this._deactivateTopTab(e), this._activateTopTab(e)
        }
    }, o.prototype._openCategory = function(e) {
        this._currentViewName !== C && this._setView(C);
        var t = this,
            i = this._views[C],
            n = P[e];
        if (i.setConstraints(n) && i.resize(this.viewContainer), i.setClassNames(["itemsListView", "_" + e]), !this._isSameCategory(e)) {
            (this.openedCategory || 0 === this.openedCategory) && this.closeCategory(this.openedCategory), k[e] && this.showSubCategoryRow(!1), this.openedCategory = e;
            var o = this.categoriesData[this.openedCategory];
            o ? this._loadCategory(o) : this._saveAndExecuteAction(function() {
                i.setSpinnerVisible(!0), t._requestPageOfCategory(e, 1)
            })
        }
    }, o.prototype.loadAdditionalContent = function() {
        if (this.openedCategory) {
            this._views[C].setLoadingAdditionalContent(!0);
            var e = this.categoriesData[this.openedCategory];
            return e ? void this._requestPageOfCategory(this.openedCategory, e.page + 1) : console.error(new Error("Trying to load additional content of a non-opened category."))
        }
    }, o.prototype._requestPageOfCategory = function(e, t) {
        var i = {
                categoryId: e,
                page: t,
                size: this.nbArticlesVisible
            },
            n = function() {
                window.dofus.send("shopOpenCategoryRequest", i)
            };
        window.clearTimeout(this.requestTimeout);
        var o = Date.now(),
            a = o - this.requestTimestamp;
        a > T ? n() : this.requestTimeout = window.setTimeout(n, T - a), this.requestTimestamp = o
    }, o.prototype.closeCategory = function(e) {
        this.openedCategory && this._isSameCategory(e) && (this._views[C].clearItems(), this.openedCategory = null)
    }, o.prototype._sendKPI = function() {
        var e = L,
            t = F.home;
        this.currentArticle ? (e = this.currentArticle, t = F.article) : this.openedSubCategory ? (e = this.openedSubCategory, t = F.subCategory) : this.exitCategory && (e = this.exitCategory, t = F.category);
        var i = w.mapToArray(this.visitedCategories),
            n = w.mapToArray(this.visitedSubCategories),
            o = w.mapToArray(this.visitedArticles),
            a = {
                account_id: window.gui.playerData.identification.accountId,
                bounce: this.rebound,
                referrer_exit_type: t,
                referrer_exit_id: parseInt(e, 10),
                categories_visited: i,
                subcategories_visited: n,
                articles_visited: o,
                click_carousel: this.carouselClics,
                arrow_carousel: this.carouselArrows,
                slide_carousel: this.carouselSwipes
            };
        y.log("HUD.Shop_Interactions", a)
    }
}
