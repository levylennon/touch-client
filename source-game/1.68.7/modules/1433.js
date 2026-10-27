function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "splashscreen-manager"
        }), this._createContent()
    }
    i(1434);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(1435);
    o(n, a), e.exports = n, n.prototype._createContent = function() {
        this._splashScreenNews = [], this._splashScreenNews.push(new r("dungeonRusherMulti", "20250514", new Date("2025-05-14T14:00:00.000Z")
            .getTime(), new Date("2025-05-28T09:00:00.000Z")
            .getTime(), {
                fr: "https://www.dofus-touch.com/fr/mmorpg/actualites/news/1761394-dungeon-rusher-antre-blop-multicolore-royal?refreshcache",
                es: "https://www.dofus-touch.com/es/mmorpg/actualidad/noticias/1761403-dungeon-rusher-antro-blop-multicolor-real?refreshcache",
                en: "https://www.dofus-touch.com/en/mmorpg/news/announcements/1761402-dungeon-rusher-royal-rainbow-blop-lair?refreshcache"
            }), new r("beta169", "20250610", new Date("2025-06-10T14:00:00.000Z")
            .getTime(), new Date("2025-06-24T14:00:00.000Z")
            .getTime(), {
                fr: "https://www.dofus-touch.com/fr/mmorpg/actualites/news/1762495-beta-1-69-paso-doble?refreshcache",
                es: "https://www.dofus-touch.com/es/mmorpg/actualidad/noticias/1762497-beta-1-69-paso-doble?refreshcache",
                en: "https://www.dofus-touch.com/en/mmorpg/news/announcements/1762496-beta-1-69-paso-doble?refreshcache"
            }));
        for (var e = this._splashScreenNews.length - 1; e >= 0; e -= 1) {
            var t = this._splashScreenNews[e];
            this.appendChild(t)
        }
    }, n.prototype.show = function(e) {
        for (var t = 0; t < this._splashScreenNews.length; t += 1) {
            var i = this._splashScreenNews[t];
            i.showSplashScreen(window.Config.language, e)
        }
    }
}
