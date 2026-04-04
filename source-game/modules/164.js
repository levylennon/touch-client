function(e, t, i) {
    function n(e) {
        return s.indexOf(e) === -1 ? c : e
    }

    function o(e, t, i) {
        r.call(this, e, i), this._haapiConfig = t, this._paths = {
            get: "/Ankama/v5/Cms/Items/Get"
        }
    }
    var a = i(56)
        .inherits,
        r = i(165),
        s = ["fr", "en", "es"],
        c = "en",
        l = "NEWS_ZAAP",
        d = "DOFUS_TOUCH";
    e.exports = o, a(o, r), o.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Cms/Items", this._paths)
    }, o.prototype.get = function(e, t, i) {
        var o = this._haapiConfig.getBaseUrl() + this._paths.get,
            a = n(e),
            r = {
                template_key: l,
                site: d,
                lang: a,
                page: 1,
                count: t
            };
        this.fetchDirectly(o, r, i)
    }
}
