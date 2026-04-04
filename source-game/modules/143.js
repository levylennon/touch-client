function(e, t, i) {
    function n(e) {
        return e.replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/[=]+$/, "")
    }

    function o() {
        for (var e = Math.floor(85 * Math.random() + 43), t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", i = "", o = 0; o < e; o++) i += t[Math.floor(Math.random() * t.length)];
        return i = n(btoa(i)), m.setItem("CODE_VERIFIER", i), i
    }

    function a(e) {
        return n(f.createHash("sha256")
            .update(e)
            .digest("base64"))
    }

    function r() {
        return m.getItem("CODE_VERIFIER") || ""
    }

    function s(e) {
        window.location.href = e
    }

    function c(e) {
        var t = window.open(e, "_blank");
        return t ? (z && clearInterval(z), void(z = setInterval(function() {
            var e, i = t.closed,
                n = null,
                o = null;
            if (i || (e = t.location.search), i || t.eval("var uri = document.querySelector('redirect-uri')?.getAttribute('uri')|| document.querySelector('.success-page a')?.href;if (uri) {history.pushState({}, '', '?electron=' + uri);}"), e && e.indexOf("?electron=") !== -1 && e.indexOf("?code=") !== -1 && (n = e.split("code=")[1].split("&")[0], t.close(), i = !0), e && e.indexOf("?electron=") !== -1 && e.indexOf("?error=") !== -1 && (o = e.split("error=")[1].split("&")[0], t.close(), i = !0), i) return clearInterval(z), z = null, n ? O(null, n) : O(o ? new Error(o) : new Error("Error WebAuth Electron response is empty"))
        }, y))) : O(new Error("Error WebAuth Electron impossible to open the page"))
    }

    function l(e) {
        return M.openUrlInDeviceBrowser(e)
    }

    function d(e) {
        if (g.isIOS && O) {
            var t = M.openUrlInAppBrowser(e);
            if (t) return t.addEventListener("loadstart", function(e) {
                if (e && e.url) {
                    if (e.url.indexOf(A.deepLink + "?code=") !== -1) {
                        var i = e.url.split("code=")[1].split("&")[0];
                        return t.close(), O(null, i)
                    }
                    if (e.url.indexOf(A.deepLink + "?error=") !== -1) {
                        var n = e.url.split("error=")[1].split("&")[0];
                        return t.close(), O(new Error(n))
                    }
                }
            })
        }
        return l(e)
    }

    function u(e) {
        window.cordova.plugins.browsertab.isAvailable(function(t) {
            return t ? window.cordova.plugins.browsertab.openUrl(e, function() {}, function() {
                d(e)
            }) : void d(e)
        }, function() {
            d(e)
        })
    }
    var p, h, f = i(144),
        b = i(135),
        m = i(61),
        M = i(16),
        g = i(7),
        _ = {
            NORMAL: "normal",
            GUEST: "guest",
            VALIDATE_GUEST: "validateGuest"
        },
        A = {},
        O = function() {
            console.error("WebAuth event called but not initialized")
        },
        v = null;
    t.getWebAuthKey = function() {
        return v
    };
    var y = 2e3,
        z = null;
    t.isWebAuthGuest = function() {
        return m.getItem("WEBAUTH_TYPE") === _.GUEST
    }, t.isWebAuthValidateGuest = function() {
        return m.getItem("WEBAUTH_TYPE") === _.VALIDATE_GUEST
    }, t.requestWebAuthKey = function(e) {
        e = e || {};
        var t = o(),
            i = a(t),
            n = e.shortcut || A.shortcutDefault;
        n = "login/" + n;
        var r = _.NORMAL,
            s = {
                client_id: A.clientId,
                code_challenge: i,
                redirect_uri: p,
                origin_tracker: A.referer
            };
        e.guestToken && (r = _.GUEST, s.token = e.guestToken, n = "login/ankama-guest"), e.validateGuestToken && (r = _.VALIDATE_GUEST, s.token = e.validateGuestToken, n = "register-direct/ankama"), m.setItem("WEBAUTH_TYPE", r);
        var c = b.stringify(s),
            l = A.authUrl + n + "?" + c;
        h && h(l)
    }, t.requestWebAuthValidateGuestToken = function(e, t, i) {
        var n = A.authUrl + "token/validate-guest",
            o = btoa(e.login + ":" + e.password),
            a = {
                "content-type": "application/x-www-form-urlencoded",
                Authorization: "Basic " + o
            },
            r = {
                client_id: A.clientId,
                account_id: t
            },
            s = b.stringify(r);
        window.fetch(n, {
                headers: a,
                method: "POST",
                body: s
            })
            .then(function(e) {
                return 200 !== e.status ? i(new Error("Error WebAuth validate guest token status is " + e.status)) : e.json()
                    .then(function(e) {
                        return i(null, e.token)
                    })["catch"](function(e) {
                        return i(e)
                    })
            })["catch"](function() {
                return i(new Error("Error impossible to reach WebAuth validate guest token"))
            })
    }, t.requestWebAuthGuestToken = function(e) {
        var t = A.authUrl + "token/create-guest",
            i = {
                "content-type": "application/x-www-form-urlencoded"
            },
            n = {
                client_id: A.clientId
            },
            o = b.stringify(n);
        window.fetch(t, {
                headers: i,
                method: "POST",
                body: o
            })
            .then(function(t) {
                return 200 !== t.status ? e(new Error("Error WebAuth guest token status is " + t.status)) : t.json()
                    .then(function(t) {
                        return e(null, t.token)
                    })["catch"](function(t) {
                        return e(t)
                    })
            })["catch"](function() {
                return e(new Error("Error impossible to reach WebAuth guest token"))
            })
    }, window.$_authManager = t, t.requestWebAuthToken = function(e, t) {
        var i = A.authUrl + "token",
            n = {
                "content-type": "application/x-www-form-urlencoded"
            },
            o = {
                grant_type: "authorization_code",
                client_id: A.clientId,
                code: e,
                code_verifier: r(),
                redirect_uri: p
            },
            a = b.stringify(o);
        window.fetch(i, {
                headers: n,
                method: "POST",
                body: a
            })
            .then(function(e) {
                return 200 !== e.status ? t(new Error("Error WebAuth status is " + e.status)) : e.json()
                    .then(function(e) {
                        return t(null, e.access_token, e.refresh_token, e.guest_credentials)
                    })["catch"](function(e) {
                        return t(e)
                    })
            })["catch"](function() {
                return t(new Error("Error impossible to reach WebAuth"))
            })
    }, t.setCallback = function(e) {
        O = e
    }, t.initialize = function() {
        if (window.Config) {
            var e = !1;
            A = window.Config.webAuth, window.cordova ? (h = window.IonicDeeplink && window.cordova.plugins && window.cordova.plugins.browsertab ? u : d, p = A.deepLink) : window.process && window.process.type ? (h = c, p = A.deepLink) : (h = s, p = A.browserLink, e = !0);
            var t = new URL(window.location.href);
            t.searchParams.forEach(function(e, t) {
                return "code" === t ? (v = e, O(null, e)) : "error" === t ? O(new Error(e)) : void 0
            }), e && window.history.pushState({}, "", "/"), window.IonicDeeplink && window.IonicDeeplink.onDeepLink(function(e) {
                if (!window.gui.isConnected && e && e.queryString) {
                    if (e.queryString.indexOf("code=") !== -1) {
                        var t = e.queryString.split("code=")[1];
                        O(null, t)
                    }
                    if (e.queryString.indexOf("error=") !== -1) {
                        var i = e.queryString.split("error=")[1];
                        O(new Error(i))
                    }
                    window.cordova && window.cordova.plugins && window.cordova.plugins.browsertab && window.cordova.plugins.browsertab.close()
                }
            })
        }
    }
}
