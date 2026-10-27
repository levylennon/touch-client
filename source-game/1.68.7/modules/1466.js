function(e, t, i) {
    function n(e, t, i) {
        function n(e) {
            return e || 0 === e || (e = t), i(null, e)
        }

        function o(e) {
            return i(e)
        }
        var s = window.plugins && window.plugins.appPreferences;
        if (s) return s.fetch(n, o, r.getEnvName() + e);
        var l;
        try {
            l = c.getItem(e)
        } catch (d) {
            return a.setImmediate(function() {
                return o(d)
            })
        }
        return a.setImmediate(function() {
            return n(l)
        })
    }

    function o(e, t, i) {
        var n = window.plugins && window.plugins.appPreferences;
        if (n) return n.store(function() {
            i()
        }, i, r.getEnvName() + t, e);
        try {
            c.setItem(t, e)
        } catch (o) {
            return a.setImmediate(function() {
                return i(o)
            })
        }
        return a.setImmediate(i)
    }
    var a = i(18),
        r = i(16),
        s = i(130),
        c = i(61),
        l = i(15),
        d = "plugins.wizassets.assetsversion",
        u = "client.main.staticdataversion",
        p = "0.0.0",
        h = "1";
    t.upgradeAssets = function(e, t) {
        function i(t) {
            function i() {
                return o(n, d, t)
            }
            var n = e.assetsVersion;
            if (!n) return t();
            var a = window.wizAssets;
            return a ? l.deleteFiles(e.changedFiles, i, t) : i()
        }

        function n(t) {
            var i = e.staticDataVersion;
            return i ? void s.eraseDiskCache(function(e) {
                return e ? t(e) : void s.initializeDiskCache(function() {
                    console.info("Updating staticDataVersionKey to " + i), o(i, u, t)
                })
            }) : t()
        }
        return e.staticDataVersion || e.assetsVersion ? void a.series([n, i], function(e) {
            return e ? t(e) : t()
        }) : t()
    }, t.getVersions = function(e) {
        function t(e, t, i, o) {
            n(t, i, function(t, i) {
                return t ? o(t) : (r[e] = i, o())
            })
        }

        function i(e) {
            return t("assetsVersion", d, p, e)
        }

        function o(e) {
            return t("staticDataVersion", u, h, e)
        }
        var r = {};
        a.series([o, i], function(t) {
            return t ? e("Could not get the client assets version: " + t) : e(null, r)
        })
    }
}
