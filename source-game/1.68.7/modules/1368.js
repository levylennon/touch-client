function(e, t, i) {
    function n() {
        r.call(this, {
            className: "DailyQuestRerollWindow",
            title: a("ui.dailyQuest.buyRetry"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 555,
                height: 400
            }
        }), this._articleMap = {}, this.spinner = new l(this);
        var e = this,
            t = window.dofus.connectionManager;
        this.once("open", function() {
            e._createDom()
        }), this.on("open", function() {
            this._view.clearItems(), this._view.setSpinnerVisible(!0), this._getCategoryInfo()
        }), t.on("shopOpenCategorySuccess", function(t) {
            t.categoryId === h && e._loadCategory(t)
        })
    }
    i(1369);
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(70),
        s = i(838),
        c = i(1338),
        l = i(769),
        d = i(1165),
        u = i(52),
        p = 500,
        h = "716";
    o(n, r), e.exports = n, n.prototype._createDom = function() {
        function e(e, i) {
            s.purchaseArticleOnAnkama(t._articleMap[e], i)
        }
        var t = this,
            i = this.windowBody.createChild("div", {
                className: "header"
            });
        this._wallet = i.appendChild(new d({
            emitTap: !0
        })), this._wallet.on("moreGoultinesTap", function() {
            u.open("market", {
                tabId: "shop",
                tabParams: {
                    category: "goultines"
                }
            })
        }), this.windowBody.createChild("div", {
            text: a("ui.dailyQuest.buyRetryWarning"),
            className: "warn"
        }), this._view = this.windowBody.appendChild(new c), this._view.on("purchaseOnAnkama", e)
    }, n.prototype._loadCategory = function(e) {
        var t = this._view;
        if (0 === e.totalArticles) return void t.showNoResult(a("ui.dailyQuest.premiumReroll"), ~~e.categoryId);
        for (var i = s.validateArticles(e.articles), n = 0; n < i.length; n++) {
            var o = i[n];
            this._articleMap[o.id] = o
        }
        t.addArticles(i), this._view.setSpinnerVisible(!1)
    }, n.prototype._requestPageOfCategory = function(e, t) {
        var i = {
                categoryId: e,
                page: t
            },
            n = function() {
                window.dofus.send("shopOpenCategoryRequest", i)
            };
        window.clearTimeout(this.requestTimeout);
        var o = Date.now(),
            a = o - this.requestTimestamp;
        a > p ? n() : this.requestTimeout = window.setTimeout(n, p - a), this.requestTimestamp = o
    }, n.prototype._getCategoryInfo = function() {
        function e(e) {
            console.error(e), t._view.setSpinnerVisible(!1), t.openState && t._showErrorPopup()
        }
        var t = this;
        s.getStoreInfos(function(i) {
            return i ? e(i) : void t._requestPageOfCategory(h, 1)
        })
    }, n.prototype._showErrorPopup = function() {
        var e = this;
        u.getWindow("confirm")
            .update({
                title: a("ui.common.error"),
                message: a("ui.popup.accessDenied.serviceUnavailable") + " " + a("tablet.common.askRetry"),
                cb: function(t) {
                    return t ? e._getCategoryInfo() : e.close()
                }
            }), u.openDialog(["confirm"])
    }
}
