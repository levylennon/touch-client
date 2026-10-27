function(e, t, i) {
    function n(e, t, i) {
        s.call(this, e, i), this._haapiConfig = t, this._lastUpdate = "", this._cachedResult = null, this._paths = {
            getEvent: "/Ankama/v5/Almanax/GetEvent"
        }
    }

    function o(e) {
        return e && "false" !== e
    }

    function a(e, t, i, n) {
        var a = i && i.event || {},
            r = i && i.month || {},
            s = i && i.zodiac || {},
            c = {
                event: {
                    id: a.id,
                    imageUrl: a.image_url,
                    bossText: a.boss_text || t.getText("ui.almanax.default.boss"),
                    ephemeris: a.ephemeris || t.getText("ui.almanax.default.ephemeris"),
                    bossImageUrl: a.boss_image_url
                },
                month: {
                    id: r.id,
                    protectorImageUrl: r.protector_image_url,
                    protectorDesc: r.protector_description || t.getText("ui.almanax.default.protector")
                },
                zodiac: {
                    id: s.id,
                    imageUrl: s.image_url,
                    description: s.description || t.getText("ui.almanax.default.zodiac")
                }
            };
        if (o(c.event.imageUrl) && o(c.month.protectorImageUrl) && o(c.zodiac.imageUrl)) return n(null, c);
        var l = ["gfx/almanax/jour.jpg", "gfx/almanax/protecteur.jpg", "gfx/almanax/constellation.jpg"];
        return e.preloadImageUrls(l, function(e) {
            return o(c.event.imageUrl) || (c.event.imageUrl = e[0]), o(c.month.protectorImageUrl) || (c.month.protectorImageUrl = e[1]), o(c.zodiac.imageUrl) || (c.zodiac.imageUrl = e[2]), n(null, c)
        })
    }
    var r = i(56)
        .inherits,
        s = i(165),
        c = i(171);
    e.exports = n, r(n, s), n.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Almanax", this._paths)
    }, n.prototype.getEvent = function(e, t, i) {
        var n = e.assetPreloading,
            o = e.getText,
            r = e.timeManager,
            s = this,
            l = this._haapiConfig.getBaseUrl() + this._paths.getEvent,
            d = !1,
            u = c(r.now()),
            p = u.tz("Europe/Paris")
            .format("YYYY-MM-DD");
        if (this._lastUpdate === p) return d = !0, i(null, this._cachedResult, d);
        var h = {
            lang: t
        };
        this.fetchDirectly(l, h, function(e, t) {
            return e ? i(e) : (s._lastUpdate = p, s._cachedResult = t, a(n, o, t, function(e, t) {
                return e ? i(e) : i(null, t, d)
            }))
        })
    }
}
