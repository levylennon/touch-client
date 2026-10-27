function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: "homepageView"
        }), this.highlightArticleBox = null, this.highlightCarouselArticle = null, this._createDom()
    }

    function o(e, t) {
        return {
            boxWidth: e,
            boxHeight: t
        }
    }
    i(1335);
    var a = i(56)
        .inherits,
        r = i(72),
        s = i(1326),
        c = i(839),
        l = i(66),
        d = i(1336),
        u = 6,
        p = 5,
        h = 8,
        f = 155,
        b = 200,
        m = 1,
        M = f / b;
    a(n, r), e.exports = n, n.prototype.clear = function() {
        this.highlightArticleBox && (this.highlightArticleBox.clear(), this.highlightArticleBox = null);
        for (var e = this.gondolaHead.getChildren(), t = 0; t < e.length; t++) e[t].clear();
        this.highlightCarouselArticle = null, this.highlightCarouselImage.clear(), this.highlightCarouselImage.hide(), this.highlightImage.clearContent(), this.gondolaHead.clearContent()
    }, n.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "highlights"
            });
        this.gondolaHead = this.createChild("div", {
            className: "gondolaHead"
        });
        var i = t.createChild("div", {
            className: "highlightCarousel"
        });
        this.highlightCarouselImage = i.appendChild(new d({
            onTap: function(t) {
                "ARTICLE" === t.type ? e.emit("displayItemDetails", t.id) : "CATEGORY" === t.type && e.emit("openCategory", t.id), e.emit("clickCarousel")
            }
        })), this.highlightCarouselImage.update(), this.highlightCarouselImage.on("swiped", function() {
            e.emit("swipeCarousel")
        }), this.highlightCarouselImage.on("clickOnArrow", function() {
            e.emit("arrowCarousel")
        }), this.highlightImage = t.createChild("div", {
            className: "highlightImage"
        })
    }, n.prototype.resize = function() {}, n.prototype.update = function(e) {
        function t(e) {
            var t = [];
            return e.forEach(function(e) {
                var i = e.image.length > 0 ? e.image[u].url : null;
                e.data && t.push({
                    imageUrl: i,
                    tapParam: {
                        id: e.data.id,
                        type: e.type
                    }
                })
            }), t
        }

        function i() {
            A.emit("purchaseIAP", this.articleId)
        }

        function n() {
            A.emit("purchaseOnAnkama", this.articleId, c.GOULTINE)
        }

        function a() {
            A.emit("purchaseOnAnkama", this.articleId, c.KAMA)
        }

        function r() {
            A.emit("displayItemDetails", this.articleId), A.emit("noRebound")
        }

        function d(e, t, o) {
            o = o || {}, o.canTapImage = !0, o.showButtons = void 0 === o.showButtons || o.showButtons, o.showTitle = void 0 === o.showTitle || o.showTitle;
            var c = e.showCountDown;
            o.promoType = c ? "banner" : o.promoType;
            var l = new s(e, t, o);
            return l.on("tapIAPButton", i), l.on("tapHardButton", n), l.on("tapSoftButton", a), l.on("tapItemImage", r), l
        }
        if (this.emit("hideSubCategoryRow"), e) {
            this.clear();
            var f = this.highlightCarouselImage,
                b = e.highlightCarouselArticles;
            f.toggleDisplay(b), b && (f.update(), this.highlightCarouselArticles = e.highlightCarouselArticles, f.setPages(t(e.highlightCarouselArticles)));
            var g, _, A = this,
                O = e.highlightImageArticle;
            if (O) {
                this.highlightImage.show();
                var v = l(this.highlightImage.rootElement);
                _ = o(v.width, v.height), this.highlightArticleBox = d(O, _, {
                    promoType: "banner"
                }), this.highlightImage.appendChild(this.highlightArticleBox)
            } else this.highlightImage.hide();
            var y = e.gondolaHeadArticles;
            if (y) {
                var z = l(this.gondolaHead.rootElement),
                    w = ~~z.width + 2 * p,
                    T = ~~z.height - h,
                    C = ~~(T * M) + 2 * p,
                    I = Math.min(y.length, ~~(w / C)),
                    S = w - C * I,
                    E = ~~(S / I),
                    L = C + E;
                C = L / T > m ? T * m - 2 * p : L - 2 * p, _ = o(C, T);
                for (var N = 0; N < I; N++) g = d(y[N], _, {
                    promoType: "corner"
                }), this.gondolaHead.appendChild(g)
            }
        }
    }, n.prototype.updateArticlesPrices = function(e) {
        var t = this.gondolaHead.getChildren();
        this.highlightArticleBox && t.push(this.highlightArticleBox);
        for (var i = 0; i < t.length; i++) {
            var n = t[i],
                o = n.articleId;
            if (o) {
                var a = e[o.toString()];
                a ? n.updatePrice(a) : console.error(new Error("Article " + o + " missing for an ArticleBox"))
            }
        }
    }
}
