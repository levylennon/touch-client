function(e, t, i) {
    function n() {
        var e = this;
        d.call(this, {
                className: "MarketingWindow",
                positionInfo: {
                    left: "c",
                    top: "c",
                    width: 500,
                    height: b
                }
            }), this._popupInfo = {}, this._shopRedirection = !1, this.promoImg = this.windowBody.createChild("div", {
                className: "promoImg"
            }), this._description = this.windowBody.createChild("div", {
                className: "description"
            }), this.scroll = this._description.appendChild(new c({
                className: "scroll"
            })), this.scrollContent = this.scroll.content.createChild("div", {
                className: "scrollContent"
            }), this.validateBtn = this.windowBody.createChild("div", {
                className: "buttonContainer"
            })
            .appendChild(new a({
                className: "greenButton"
            }, function() {
                e._popupInfo.articleId ? (u.close("market"), u.open("market", {
                    tabId: "shop",
                    tabParams: {
                        articleId: e._popupInfo.articleId
                    }
                }), e._shopRedirection = !0) : e._popupInfo.link && f.openUrlInAppBrowser(e._popupInfo.link), e.close()
            })), this.on("open", function(e) {
                this._updateContent(e)
            }), this.on("close", function() {
                this._popupInfo.articleId && h.log("HUD.marketing_window", {
                    consult: this._shopRedirection,
                    article_id: this._popupInfo.articleId
                }), this._popupInfo = {}, this._shopRedirection = !1
            })
    }
    i(1373);
    var o = i(56)
        .inherits,
        a = i(86),
        r = i(32)
        .formatUrlToCssUrl,
        s = i(17)
        .getText,
        c = i(453),
        l = i(60),
        d = i(70),
        u = i(52),
        p = i(21),
        h = i(116),
        f = i(16),
        b = 460,
        m = 64;
    o(n, d), e.exports = n, n.prototype._updateContent = function(e) {
        this.setTitle(e.name || "");
        var t = e.external_article || {},
            i = e.image || [];
        this._popupInfo = {
            popupId: e.id,
            articleId: t.id,
            link: e.link
        }, this.validateBtn.setText(s("ui.popup.shopMarketingConfirm")), e.description ? (this.setStyle("height", b + "px"), this._description.setStyle("height", m + "px"), this._description.show()) : (this.setStyle("height", b - m + "px"), this._description.setStyle("height", 0), this._description.hide());
        var n = i.length - 1,
            o = (i[n] || {})
            .url || "none";
        this.promoImg.setStyle("backgroundImage", r(o)), this.scrollContent.setHtml(e.description), this.scroll.refresh();
        var a = window.gui.playerData.shopData.getPromoDisplayUserPrefKey(),
            c = l.getValue(a, {});
        c[this._popupInfo.popupId] = p.now(), l.setValue(a, c)
    }
}
