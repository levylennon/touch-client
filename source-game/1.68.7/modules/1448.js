function(e, t, i) {
    function n(e, t) {
        a.call(this, "div", {
            className: "NewsBlock",
            hidden: !1
        });
        var i = this;
        this.loginScreen = e,
        this._newsLoadedTime = 0,
        this._currentPage = 0,
        this._newsLang = null,
        this._transitioning = !1,
        this._setTimoutId = null,
        this._pageCount = p,
        this._carouselPages = [],
        this._banners = [],
        this._newsUrls = [],
        this._bannerTitles = [],
        this._date = [],
        this._dots = [],
        this._carousel = this.appendChild(new l({ onTap: c.openUrlInAppBrowser, bannerTitle: !0, defaultTapBehaviour: !0, onTabTap: t.onTabTap, heightRatio: t.heightRatio })),
        this.tabs = this._carousel.bannerInfoWrappers,
        e.on("hide", function() { i._carousel.clear() })
    }
    i(1449);
    var o = i(56).inherits,
        a = i(72),
        r = i(17).getText,
        s = i(142),
        c = i(16),
        l = i(1336),
        d = i(21),
        u = 288e5,
        p = 3;
    o(n, a),
    e.exports = n,
    n.prototype.refresh = function() {
        this._update()
    },
    n.prototype.toggleDefaultTapBehaviour = function(e) {
        this._carousel.defaultTapBehaviour = e
    },
    n.prototype._update = function() {
        var e = window.Config,
            t = this;
        Date.now() - this._newsLoadedTime < u && this._newsLang === e.language || (t._carousel.update(), s.getNewsList(p, function(e, i) {
            return e || !i ? t._noNewsFallback() : i.length ? (t._newsLoadedTime = Date.now(), t._pageCount = i.length, i.forEach(function(e) {
                var t = new Date(1e3 * e.timestamp),
                    i = d.leadWithZero(t.getDate()),
                    n = d.leadWithZero(t.getMonth() + 1),
                    o = t.getFullYear();
                e.imageUrl = e.image_url, e.date = r("ui.login.newsDate", r("ui.time.dateNumbers", i, n, o)), e.tapParam = e.url
            }), t._currentPage = 0, void t._carousel.setPages(i)) : t._noNewsFallback()
        }))
    },
    n.prototype._noNewsFallback = function() {
        this._carousel.clear(), this._carousel.setPages([{
            name: r("tablet.login.noNewsFallback"),
            className: "noNewsFallback",
            url: r("tablet.forum.link")
        }])
    },
    n.prototype.stopCarousel = function() {
        this._carousel.pauseAutomatedChange()
    },
    n.prototype.resumeCarousel = function() {
        this._carousel.resumeAutomatedChange()
    }
}
