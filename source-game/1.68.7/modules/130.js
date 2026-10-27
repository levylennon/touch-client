function(e, t, i) {
    function n(e) {
        var t = "";
        M.initialize(t + O + m.cacheDatabaseSuffix, m, function(t) {
            if (t) {
                var i = "tablet.fatal.idb",
                    n = p && p[i] || h && h[i] || "IDB failure";
                return "string" == typeof t && "IDB_" === t.substr(0, 4) && (n += "\n\n(" + t + ")"), window.dofus.reloadAppOnFatalError("InitializeDiskCache: " + t, n)
            }
            return e()
        })
    }

    function o(e, t, i) {
        return g(A, "/data/" + e, t, O, i)
    }

    function a(e, t) {
        for (var i = Object.keys(e), n = i.length, o = new Array(n), a = 0; a < n; a++) o[a] = e[i[a]];
        if (t && t.sortBy) {
            var r = t.sortBy;
            o.sort(function(e, t) {
                return e[r] - t[r]
            })
        }
        return o
    }

    function r(e) {
        return e && e.toString()
            .indexOf("InvalidStateError") !== -1
    }

    function s(e, t, i) {
        var n = [];
        for (var o in e) n.push(e[o]);
        if (i) {
            var a = m.getKey(t);
            n.sort(function(e, t) {
                return e[a] - t[a]
            })
        }
        return n
    }

    function c(e, t, i) {
        i = i || {}, M.requestAll(e, function(a, s) {
            if (a) {
                if (r(a)) {
                    if (!i.noReinitializationCache) return console.error(new Error("Trying to re-initialize the IndexedDb database")), n(function() {
                        c(e, t, {
                            noReinitializationCache: !0
                        })
                    });
                    console.error(new Error("Re-initialization of the IndexedDb database failed"))
                }
                return t(a)
            }
            return s ? t(null, s) : o("map", {
                "class": e
            }, function(i, n) {
                if (i) return t(i);
                var o, a = m.getKey(e);
                for (var r in n) {
                    o = n[r] && void 0 !== n[r][a];
                    break
                }
                return o ? M.putAll(e, n, function(e) {
                    e && console.warn("_getAllDataMap putAll: Caching data on disk failed with error: " + e)
                }) : console.warn("Request to cache table " + e + ' which has no "' + a + '" key; table will not be cached.'), t(null, n)
            })
        })
    }

    function l(e, t) {
        var i = {};
        b.eachLimit(e, 5, function(e, t) {
            return c(e, function(n, o) {
                return n ? t(n) : (i[e] = o, t())
            })
        }, function(e) {
            return e ? t(e) : t(null, i)
        })
    }

    function d(e, t, i) {
        c(e, function(n, o) {
            return n ? i(n) : i(null, s(o, e, t))
        })
    }

    function u(e, t, i) {
        var n = {};
        b.eachLimit(e, 5, function(e, i) {
            return d(e, t, function(t, o) {
                return t ? i(t) : (n[e] = o, i())
            })
        }, function(e) {
            return e ? i(e) : i(null, n)
        })
    }
    var p, h, f = i(13),
        b = i(18),
        m = i(131),
        M = i(132),
        g = i(134),
        _ = M.DUMMY_RECORD_FLAG,
        A = null,
        O = null;
    t.initialize = function(e) {
        console.error(new Error("Should not use the init on static content")), A = e.dataUrl
    }, t.setDataUrl = function(e) {
        A = e
    }, t.initializeDiskCache = n, t.eraseDiskCache = function(e) {
        for (var t = window.Config.serverLanguages, i = [], n = 0; n < t.length; n++) i.push(t[n]), i.push(f.BETA_SUFFIX + t[n]);
        b.eachSeries(i, function(e, t) {
            return M["delete"](e + m.cacheDatabaseSuffix, t)
        }, e)
    }, t.changeLanguage = function(e) {
        O = e
    }, t.initializeDictionariesAndDiskCache = function(e, t, i) {
        p = null, h = null;
        var a = [];
        O = null, b.series([function(i) {
            return e === t ? i() : void o("dictionary", {
                lang: e
            }, function(e, t) {
                e ? a.push(e) : p = t, i()
            })
        }, function(e) {
            o("dictionary", {
                lang: t
            }, function(t, i) {
                t ? a.push(t) : h = i, e()
            })
        }], function() {
            var o = a.join(", ");
            return p || h ? (o && console.error("Failed getting dictionaries: " + o), p ? O = e : (p = h, O = t), h || (h = p), void n(function() {
                i(null, p, h)
            })) : window.dofus.reloadAppOnFatalError("No " + e + "/" + t + " dictionary: " + o);
        })
    }, t.getText = function(e, t) {
        var i = {};
        Array.isArray(e) ? i.ids = e : i.id = e, o("text", i, function(e, i) {
            return e ? t(e) : void t(null, i)
        })
    }, t.getDataMap = function(e, i, a, s) {
        return a = a || {}, Array.isArray(i) ? void M.request(e, i, function(c, l, d) {
            if (c) {
                if (r(c)) {
                    if (!a.noReinitializationCache) return console.error(new Error("Trying to re-initialize the IndexedDb database")), n(function() {
                        t.getDataMap(e, i, {
                            noReinitializationCache: !0
                        }, s)
                    });
                    console.error(new Error("Re-initialization of the IndexedDb database failed"))
                }
                return s(c)
            }
            var u = {};
            for (var p in l) l[p][_] || (u[p] = l[p]);
            if (0 === d.length) return s(null, u);
            var h = {
                "class": e,
                ids: d
            };
            o("map", h, function(t, i) {
                if (t) return s(t);
                for (var n = 0, o = d.length; n < o; n++) {
                    var a = d[n],
                        r = i[a];
                    r ? u[a] = r : i[a] = M.newDummyRecord(m.getKey(e), a)
                }
                return M.put(e, i, function(e) {
                    e && console.warn("getDataMap put: Caching data on disk failed with error:", e)
                }), s(null, u)
            })
        }) : s(new TypeError("Data ids should be passed as an array"))
    }, t.getDataArray = function(e, i, n, o) {
        "function" == typeof n && (o = n, n = null), t.getDataMap(e, i, null, function(e, t) {
            return e ? o(e) : void o(null, a(t, n))
        })
    }, t.searchDataMap = function(e, t, i) {
        var n = {
            "class": e,
            match: t.match,
            matchProp: t.matchProp
        };
        o("map", n, function(t, n) {
            return t ? i(t) : (M.put(e, n, function(e) {
                e && console.warn("searchDataMap put: Caching search results on disk failed with error: " + e)
            }), i(null, n))
        })
    }, t.getObject = function(e, i, n) {
        return i || 0 === i ? void t.getDataMap(e, [i], null, function(t, o) {
            if (t) return n(t);
            var a = o[i];
            return a ? n(null, a) : n("Missing ID #" + i + " in static data " + e)
        }) : n(new Error("You must pass an ID"))
    }, t.getAllDataTable = function(e, t) {
        return Array.isArray(e) ? u(e, !0, t) : d(e, !0, t)
    }, t.getAllDataBulk = function(e, t) {
        return Array.isArray(e) ? u(e, !1, t) : d(e, !1, t)
    }, t.getAllDataMap = function(e, t) {
        return Array.isArray(e) ? l(e, t) : c(e, t)
    }
}
