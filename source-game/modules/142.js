function(e, t, i) {
    function n(e, t) {
        if (!h) throw new Error("THROW Need the logger: " + t);
        e === M.error ? h[e](new Error(t)) : h[e](t)
    }

    function o(e, t, i) {
        return e ? e.reason === p.INVALID_SECURITY_STATE ? i(null, {
            askSecurityCode: !0
        }) : ((422 === e.status || e.reason) && m.resetHaapiKey(), i(e)) : i(null, t)
    }
    var a = i(143),
        r = i(21),
        s = i(17),
        c = i(163),
        l = i(12),
        d = i(328),
        u = i(329),
        p = i(168),
        h = null,
        f = null,
        b = null,
        m = null,
        M = {
            error: "error",
            verbose: "verbose"
        },
        g = {
            error: function(e) {
                n(M.error, e)
            },
            verbose: function(e) {
                n(M.verbose, e)
            }
        };
    t.initHaapiModule = function(e, t) {
        h = e, b = new d(h, window.Config), m = new u(h), f = new c(h, t, b, m, r), g.verbose(f.describe())
    }, t.getHaapiConfig = function() {
        return b || g.error("Config not ready yet."), b
    }, t.getHaapiKeyManager = function() {
        return m
    }, t.loginWithWebAuth = function(e, i) {
        return m.setHaapiKey(e.accessKey, e.refreshKey), t.loginWithHaapiKey({
            save: e.save
        }, i)
    }, t.reloginWithHaapiKey = function(e) {
        return m.getHaapiKey() ? f.account.createTokenWithCertificate(function(t, i) {
            o(t, i, e)
        }) : e({
            reason: "NOKEY"
        })
    }, t.loginWithHaapiKey = function(e, t) {
        if (m.getHaapiKey()) {
            var i = m.isCurrentKeyInStorage() || e.save;
            return f.account.account(function(e, n) {
                return e ? (403 === e.status && m.resetHaapiKey(), t(e)) : n ? a.isWebAuthGuest() ? f.api.refreshApiKey({
                    save: i
                }, function(e) {
                    return e ? t(e) : (window.gui.playerData.setLoginName(n.login), f.account.createTokenWithCertificate(function(e, i) {
                        o(e, i, t)
                    }))
                }) : f.api.refreshApiKey({
                    save: i
                }, function(e, i) {
                    if (e) return t(e);
                    window.gui.playerData.setLoginName(n.login);
                    var a = "";
                    return n.nickname ? a = n.nickname + "#" + n.tag : n.login && (a = n.login.split("@")[0]), window.gui.playerData.setNickameInStorage(a), i && i.data && "UNSECURED" === i.data.security_state ? t(null, {
                        askSecurityCode: !0,
                        isOTP: n.is_otp_active
                    }) : f.account.createTokenWithCertificate(function(e, i) {
                        o(e, i, t)
                    })
                }) : t(new Error("Account/Account response is empty"))
            })
        }
        return t({
            reason: "NOKEY"
        })
    }, t.login = function(e, t) {
        function i(e) {
            return e ? t(e) : f.account.createTokenWithCertificate(function(e, i) {
                o(e, i, t)
            })
        }
        var n = {
            login: e.account.trim(),
            password: e.password
        };
        f.api.createApiKey(n, {}, i)
    }, t.createApiKey = function(e, t, i) {
        f.api.createApiKey(e, t, i)
    }, t.deleteApiKey = function() {
        f.api.deleteApiKey(function(e) {
            if (e) return console.error(new Error(e))
        })
    }, t.birthdateRegistrationLimit = function(e) {
        f.account.birthdateRegistrationLimit(e)
    }, t.deleteGuest = function(e) {
        f.account.deleteGuest(e)
    }, t.getForumTopicsList = function(e) {
        f.forum.getForumTopicsList(e)
    }, t.getForumPostsList = function(e, t) {
        f.forum.getForumPostsList({
            topicId: e
        }, t)
    }, t.getNewsList = function(e, t) {
        f.cmsItems.get(window.Config.language, e, t)
    }, t.getAlmanax = function(e) {
        var t = {
            assetPreloading: l,
            getText: s,
            timeManager: r
        };
        f.almanax.getEvent(t, window.Config.language, e)
    }, t.getMarketingPopups = function(e) {
        return window.gui.playerData.isShopDisabled() ? e(new Error("SHOP_DISABLE")) : void f.shop.getHighLightsList(f.shop.type.POPUP, e)
    }, t.getMarketingGondola = function(e, t) {
        return window.gui.playerData.isShopDisabled() ? t(new Error("SHOP_DISABLE")) : void f.shop.getGondolaList(e, t)
    }, t.sendKPIEvent = function(e, t, i, n) {
        f.game.sendEvent(e, t, n, i, function(e) {
            if (e) return void g.error("sendKPIEvent: Error on event id: " + t + ", error: " + e)
        })
    }, t.askSecurityCode = function(e, t) {
        f.shield.askSecurityCode(e, t)
    }, t.validateSecurity = function(e, t) {
        return e.isUsingOtp ? f.shield.validateSecurityOtp(e, t) : void f.shield.validateSecurityCode(e, t)
    }, t.getPurchaseUuid = function() {
        return f.account.getPurchaseUuid() || f.api.getPurchaseUuid()
    }, t.resetPurchaseUuid = function() {
        f.account.resetPurchaseUuid(), f.api.resetPurchaseUuid()
    }
}
