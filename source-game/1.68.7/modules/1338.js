function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: "itemsListView"
        }), this.articlesPerLine = u, this.articlesPerColumn = p, this._isAdditionalContentLoading = !1, this._boxHeight = g, this._boxWidth = M, this._scrollMargin = 0, this._scrollPosition = null, this.constraints = {}, this.setConstraints(T), this._createDom()
    }
    i(1339);
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(72),
        s = i(453),
        c = i(1326),
        l = i(839),
        d = i(66),
        u = 2,
        p = 1,
        h = 9,
        f = 0,
        b = 11,
        m = 9,
        M = 155,
        g = 200,
        _ = g + b,
        A = 40,
        O = 305,
        v = 515,
        y = 533,
        z = 10,
        w = 548,
        T = {
            lines: null,
            columns: null,
            promoType: "corner",
            position: null,
            showArticleDescription: !1,
            useBonusPackDisplay: !1,
            canTapImage: !0
        };
    o(n, r), e.exports = n, n.prototype.clear = function() {
        for (var e = this._getArticleBoxes(), t = 0; t < e.length; t++) e[t].clear();
        this._scrollPosition = null
    }, n.prototype._createDom = function() {
        var e = this;
        this._itemsScroll = this.appendChild(new s({
            className: "scroll"
        }, {
            isHorizontal: !0
        })), this._itemsList = this._itemsScroll.content.createChild("div", {
            className: "itemsList"
        });
        for (var t = 0; t < this.articlesPerColumn; t++) this._itemsList.createChild("div", {
            className: "itemsLine"
        });
        this._loadContent = this._itemsScroll.content.createChild("div", {
            className: "loadContent"
        }), this._loadContent.hide(), this._noResultMessage = this._itemsScroll.content.createChild("div", {
            className: "rightLabel"
        }), this._noResultMessageText = this._noResultMessage.createChild("div", {
            className: "text"
        }), this._noResultMessage.hide(), this._itemsScroll.on("scrollEnd", function() {
            !e._isAdditionalContentLoading && e._loadContent.isVisible() && Math.abs(this.iScroll.maxScrollX - this.iScroll.x) < A && e.emit("loadAdditionalContent")
        }), this._itemsScroll.on("scrollStart", function() {
            e.emit("noRebound")
        })
    }, n.prototype.update = function() {}, n.prototype.resize = function(e) {
        if (this._computeMargins(e), !this.constraints.useBonusPackDisplay) {
            var t = this._getItemsMap(),
                i = this.getArticleBoxSize();
            for (var n in t) t[n].resize(i);
            this._itemsScroll.refresh(), this.emit("nbArticlesVisibleUpdated", (this.articlesPerLine + 1) * this.articlesPerColumn)
        }
    }, n.prototype.saveScrollPosition = function() {
        this._scrollPosition = this._itemsScroll.getScrollPosition()
    }, n.prototype.restoreScrollPosition = function() {
        var e = this._scrollPosition;
        e && this._itemsScroll.scrollTo(e.x, e.y), this._scrollPosition = null
    }, n.prototype.getArticleBoxSize = function() {
        return {
            boxWidth: this._boxWidth,
            boxHeight: this._boxHeight
        }
    }, n.prototype.setConstraints = function(e) {
        e = e || T;
        var t = !1;
        for (var i in T) {
            var n = e.hasOwnProperty(i) ? e[i] : T[i];
            this.constraints[i] !== e[i] && (this.constraints[i] = n, t = !0)
        }
        return t
    }, n.prototype.addArticles = function(e, t) {
        this.setSpinnerVisible(!1), this.setLoadingAdditionalContent(!1), this._loadContent.toggleDisplay(!t), this._addArticles(e)
    }, n.prototype.showNoResult = function(e, t) {
        this.clearItems();
        var i;
        i = t === w ? a("tablet.shop.category.emote.noResults") : e ? a("ui.search.noResultFor", e) : a("ui.search.noResult"), this._noResultMessageText.setText(i), this._noResultMessage.show()
    }, n.prototype.getLines = function() {
        return this._itemsList.getChildren()
    }, n.prototype._addArticles = function(e) {
        function t() {
            u.emit("purchaseIAP", this.articleId)
        }

        function i() {
            u.emit("purchaseOnAnkama", this.articleId, l.GOULTINE)
        }

        function n() {
            u.emit("purchaseOnAnkama", this.articleId, l.KAMA)
        }

        function o() {
            u.emit("displayItemDetails", this.articleId), u.emit("noRebound")
        }
        for (var a = 0, r = this._itemsList.getChildren(), s = r.length, u = this, p = 0; p < e.length; p++) {
            var h = this.constraints.useBonusPackDisplay && 0 === p,
                f = {
                    showButtons: !0,
                    showTitle: !0,
                    promoType: this.constraints.promoType,
                    showDescription: this.constraints.showArticleDescription,
                    canTapImage: this.constraints.canTapImage,
                    showReferences: h
                },
                b = e[p].showCountDown;
            f.promoType = b ? "banner" : f.promoType;
            var M = this.getArticleBoxSize();
            this.constraints.useBonusPackDisplay && (M.boxWidth = 0 === p ? y : O, M.boxHeight = v);
            var g = new c(e[p], M, f);
            g.on("tapIAPButton", t), g.on("tapHardButton", i), g.on("tapSoftButton", n), g.on("tapItemImage", o), r[a % s].appendChild(g), a++
        }
        this._itemsList.setStyle("margin-left", "0"), this._itemsList.setStyle("width", "unset");
        var _ = this._itemsList.getChildren();
        if (_.length > 0 && _[0].setStyle("transform", "unset"), this._itemsScroll.refresh(), this.constraints.useBonusPackDisplay && _.length && e.length && this.rootElement) {
            var A = this._boxHeight / (v + z);
            _[0].setStyle("transform", "scale(" + A + ")");
            var w = d(this.rootElement),
                T = y + m;
            T += (O + 2 * m) * (e.length - 1), T *= A, T += z, this._itemsList.setStyle("width", T + "px");
            var C = Math.max(0, (w.width - T) / 2);
            this._itemsList.setStyle("margin-left", C + "px"), this._itemsScroll.refresh(!0)
        }
        "left" === this.constraints.position && this._itemsList.setStyle("margin-left", 0)
    }, n.prototype.setLoadingAdditionalContent = function(e) {
        this._isAdditionalContentLoading = e, e ? (this._loadContent.addClassNames("spinner"), this._loadContent.delClassNames("showArrow")) : (this._loadContent.delClassNames("spinner"), this._loadContent.addClassNames("showArrow"))
    }, n.prototype.setSpinnerVisible = function(e) {
        e ? this._itemsScroll.addClassNames("spinner") : this._itemsScroll.delClassNames("spinner")
    }, n.prototype.clearItems = function() {
        this.setSpinnerVisible(!1), this.setLoadingAdditionalContent(!1);
        for (var e = this._itemsList.getChildren(), t = 0; t < e.length; t++) e[t].clearContent();
        this._loadContent.hide(), this._noResultMessage.hide(), this._itemsScroll.refresh(), this._itemsScroll.goToTop()
    }, n.prototype._setNumberOfLines = function(e) {
        if (e !== this.articlesPerColumn) {
            this.articlesPerColumn = e;
            var t, i = [],
                n = this._itemsList.getChildren(),
                o = n.length - e;
            for (t = 0; t < n.length; t++) {
                for (var a = n[t], r = a.getChildren(), s = 0; s < r.length; s++) i.push(a.removeChild(r[s]));
                o > 0 && (a.destroy(), o--)
            }
            if (n.length < e) {
                var c = e - n.length;
                for (t = 0; t < c; t++) this._itemsList.createChild("div", {
                    className: "itemsLine"
                })
            }
            if (i.length)
                for (n = this._itemsList.getChildren(), t = 0; t < i.length; t++) n[t % e].appendChild(i[t])
        }
    }, n.prototype._computeMargins = function(e) {
        var t = this.constraints,
            i = d(e.rootElement),
            n = i.width - 2 * f,
            o = i.height - (2 * f + h),
            a = t.lines || Math.max(p, ~~(o / _)),
            r = o - _ * a,
            s = ~~(r / a);
        if (this._boxHeight = g + s, t.columns) {
            var c = n - (M + 2 * m) * t.columns,
                l = ~~(c / t.columns);
            this._boxWidth = M + l
        } else this._boxWidth = M + s;
        var A = this._boxHeight + b,
            O = this._boxWidth + 2 * m;
        this.articlesPerLine = t.columns || Math.max(u, ~~(n / O)), r = o - A * a, r > 1 && (this._scrollMargin = ~~(.5 * r), this._itemsScroll.setStyles({
            "margin-top": this._scrollMargin + "px",
            "margin-bottom": this._scrollMargin + "px"
        })), this._setNumberOfLines(a), this._itemsScroll.refresh()
    }, n.prototype._getArticleBoxes = function() {
        for (var e = [], t = this._itemsList.getChildren(), i = 0; i < t.length; i++) e = e.concat(t[i].getChildren());
        return e
    }, n.prototype.updateArticlesPrices = function(e) {
        for (var t = this._getArticleBoxes(), i = 0; i < t.length; i++) {
            var n = t[i],
                o = n.articleId;
            if (o) {
                var a = e[o];
                a ? n.updatePrice(a) : console.error(new Error("Article " + o + " missing for an ArticleBox"))
            }
        }
    }, n.prototype._getItemsMap = function() {
        for (var e = {}, t = this._itemsList.getChildren(), i = 0; i < t.length; i++)
            for (var n = t[i].getChildren(), o = 0; o < n.length; o++) {
                var a = n[o];
                e[a.getWuiName()] = a
            }
        return e
    }
}
