function(e, t, i) {
    function n() {
        S = 0
    }

    function o(e) {
        return e.code === R || e.code === N && e.status > 499
    }

    function a(e, t, i, n) {
        this.url = e, this.cssFormat = t, this.callback = i, this.loadBatchIndex = n
    }

    function r(e) {
        return /^\/?ui\//.test(e)
    }

    function s(e) {
        return Boolean(!r(e) && window.wizAssets)
    }

    function c(e) {
        return w * Math.pow(2, e - 1)
    }

    function l(e) {
        if (I += 1, !e) return d("emptyPath", e);
        if (r(e)) return d(null, e, window.Config.uiUrl + "/" + e);
        if (O[e] || L[e]) return console.warn('initiateAssetLoading: known missing asset "' + e + '" will be skip'),
            d(null, e, null);
        var t = window.Config.assetsUrl + "/" + e;
        if (!window.wizAssets) return d(null, e, t);
        var i = y,
            n = function(t) {
                return window.WkWebView && (t = window.WkWebView.convertFilePath(t)), d(null, e, t)
            },
            a = function(r) {
                if (i -= 1, /bones\/1107\/.*/.test(e)) return L[e] = !0, d(r, e, null);
                if (i > 0 && o(r)) {
                    var s = y - i,
                        l = c(s);
                    return window.gui.isConnected ? _.setTimeout(g.downloadFile, l, t, e, n, a) : window.setTimeout(g.downloadFile, l, t, e, n, a)
                }
                return d(r, e, null)
            };
        return g.downloadFile(t, e, n, a)
    }

    function d(e, t, i) {
        e && console.warn("notifyAsLoaded: Could not load asset: " + t + " (" + JSON.stringify(e) + ")");
        for (var n = T[t], o = 0; o < n.length; o += 1) {
            var a, r = n[o],
                s = r.callback,
                c = r.loadBatchIndex;
            a = i ? r.cssFormat ? A(i) : i : null, s && s(a, c)
        }
        delete T[t], I -= 1, u()
    }

    function u() {
        for (; I < v && C.length > 0;) {
            var e = C.pop();
            l(e)
        }
    }

    function p(e, t, i, n) {
        e && "/" === e.substring(0, 1) && (console.error(new Error('Starting by "/" for url ' + e)), e = e.substring(1));
        var o = new a(e, t, i, n);
        T[e] ? T[e].push(o) : (T[e] = [o], I < v ? l(e) : C.push(e))
    }

    function h(e, t, i, n) {
        function o(e, t) {
            if (a[t] = e, s += 1, i && i(e, t), s === r) return n && n(a)
        }
        var a = [],
            r = e.length;
        if (0 === r) return n && n(a);
        for (var s = 0, c = 0; c < e.length; c += 1) p(e[c], t, o, c)
    }

    function f(e, t, i, o, a) {
        0 === S && E(n, 0), S < z ? (S += 1, e(t, i, o, a)) : E(function() {
            f(e, t, i, o, a)
        }, 0)
    }

    function b(e, t, i, n) {
        if (!t) return i(M.EMPTY_IMAGE, n);
        var o = window.Config.imgCrossOrigin,
            a = new Image;
        o && (a.crossOrigin = o);
        var r = y;
        a.onload = function() {
            return this.onload = null, this.onerror = null, i(this, n)
        }, a.onerror = function() {
            return r -= 1, r > 0 ? void(this.src = t) : (this.onload = null, this.onerror = null, s(e) && (console.error("loadAndCreateImage: Image not found: " + t), window.wizAssets.deleteFile(e, function() {}, function(e) {
                console.error("loadAndCreateImage: Image could not be deleted: " + t + " with error: " + e)
            })), i(M.EMPTY_IMAGE, n))
        }, a.src = t
    }

    function m(e, t, i, n) {
        if (!t) return i(M.EMPTY_JSON, n);
        var o = y,
            a = new XMLHttpRequest;
        a.onreadystatechange = function() {
            if (4 === ~~a.readyState) {
                if (200 !== ~~a.status && 0 !== ~~a.status) return o -= 1, o > 0 ? (a.open("GET", t, !0), void a.send()) : (r(e) || console.error("loadAndParseJson: Failed to load json " + t + ": " + a.status), i(M.EMPTY_JSON, n));
                var c;
                try {
                    c = JSON.parse(a.response)
                } catch (l) {
                    return s(e) && (console.warn("loadAndParseJson: Could not parse json " + t + ": " + l), window.wizAssets.deleteFile(e, function() {}, function(e) {
                        console.error("loadAndParseJson: json could not be deleted: " + t + " with error: " + e)
                    })), i(M.EMPTY_JSON, n)
                }
                return i(c, n)
            }
        }, a.open("GET", t, !0), a.send()
    }
    var M = i(13),
        g = i(15),
        _ = i(30),
        A = i(32)
        .formatUrlToCssUrl,
        O = i(33),
        v = 30,
        y = 5,
        z = 5,
        w = 1e3,
        T = {},
        C = [],
        I = 0,
        S = 0,
        E = window.setTimeout,
        L = {},
        N = window.WizAssetsError && window.WizAssetsError.HTTP_REQUEST_ERROR,
        R = window.WizAssetsError && window.WizAssetsError.CONNECTIVITY_ERROR;
    t.preloadAsset = p, t.preloadAssets = h, t.preloadImages = function(e, t) {
        return h(e, !0, null, t)
    }, t.preloadImage = function(e, t) {
        return p(e, !0, t)
    }, t.preloadImageUrls = function(e, t) {
        return h(e, !1, null, t)
    }, t.preloadImageUrl = function(e, t) {
        return p(e, !1, t)
    }, t.loadImages = function(e, t, i) {
        function n(e, n) {
            if (o[n] = e, a += 1, t && t(e, n), a === r) return i && i(o)
        }
        var o = [],
            a = 0,
            r = e.length;
        return 0 === r ? i && i(o) : void h(e, !1, function(t, i) {
            f(b, e[i], t, n, i)
        }, null)
    }, t.loadImage = function(e, t) {
        p(e, !1, function(i) {
            f(b, e, i, t)
        })
    }, t.loadJsons = function(e, t, i) {
        h(e, !1, function(i, n) {
            f(m, e[n], i, t, n)
        }, i)
    }, t.loadJson = function(e, t) {
        p(e, !1, function(i) {
            f(m, e, i, t)
        })
    }
}
