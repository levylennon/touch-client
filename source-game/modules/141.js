function(e, t, i) {
    function n(e) {
        if (e) return console.error(e)
    }

    function o(e, t, i) {
        var n = Date.now(),
            o = c.getValue(e, 0, !0);
        n - o < m || (window.gui.openSimplePopup(t, u("ui.popup.warning")), console.error("[INFO]", i, 'Drop popup shown for "' + window.navigator.userAgent + '"'), c.setValue(e, n, 1, !0))
    }

    function a() {
        o(M, u("tablet.ui.popup.drop.android"), "Android")
    }

    function r() {
        o(g, u("tablet.ui.popup.drop.ios"), "iOS")
    }

    function s(e) {
        if (e.reason) {
            if (e.reason === f.INCOMPATIBLE_APP_VERSION) {
                var t, i;
                return d.isAndroidApp ? (t = u("tablet.ui.popup.accessDenied.incompatibleAppAndroid"), i = "market://details?id=com.ankama.dofustouch") : d.isIOSApp ? (t = u("tablet.ui.popup.accessDenied.incompatibleAppIOS"), i = "https://itunes.apple.com/app/id1041406978") : t = u("tablet.ui.popup.accessDenied.incompatibleApp"), void window.gui.openConfirmPopup({
                    title: u("ui.popup.accessDenied"),
                    message: t,
                    cb: function(e) {
                        e && i && window.open(i, "_system", "location=no")
                    }
                })
            }
            if (e.reason === f.INCOMPATIBLE_BUILD_VERSION) return t = u("tablet.ui.popup.accessDenied.incompatibleBuild"), void window.gui.openConfirmPopup({
                title: u("ui.popup.accessDenied"),
                message: t,
                noDisable: !0,
                cb: function(e) {
                    e && (window.loader && (window.localStorage.removeItem(window.loader._id + "_last_update_files"), window.localStorage.removeItem(window.loader._id + "_manifest")), window.location.reload())
                }
            });
            window.gui.openSimplePopup(p(e), u("ui.popup.accessDenied"))
        } else window.gui.openSimplePopup(u("ui.popup.connectionFailed.text")), console.warn("login error without reason:", e)
    }
    var c = i(60),
        l = i(142),
        d = i(7),
        u = i(17)
        .getText,
        p = i(330),
        h = i(332),
        f = i(333),
        b = (i(331), i(168), !1),
        m = 864e6,
        M = "androidDrop5.0",
        g = "IOSDrop11And12";
    t.characterId = null, t.connectMethod = null, t.startLoginProcess = function(e, i, o) {
        function p(n, p) {
            if (n) return window.gui.openSimplePopup(h(n), u("ui.popup.accessDenied")), o(n);
            if (p.askSecurityCode) return i.askSecurityCode = !0,
                i.isOTP = p.isOTP, o(null, i);
            var f = l.getHaapiKeyManager()
                .getHaapiAccountId()
                .toString();
            window.gui.playerData.setForcedAccount(i.forcedAccount), window.dofus.setCredentials(f, p.token, i.forcedAccount);
            var m = i.loginName || i.account;
            return m && window.gui.playerData.setLoginName(m), t.connectMethod = e, window.dofus.login(function(e, t) {
                return b = !1, e ? (window.dofus.disconnect(), s(e), o(e)) : t && t.disconnected ? (window.dofus.disconnect(), o()) : (d.isAndroidSoonDeprecatedVersion && a(), d.isIosSoonDeprecatedVersion && r(), c.delValue("lastServerId"), o())
            })
        }
        return i = i || {}, o = o || n, i.account && (i.account = i.account.trim()), i.relogin ? l.reloginWithHaapiKey(p) : i.account ? l.login(i, p) : i.accessKey && i.refreshKey ? l.loginWithWebAuth(i, p) : l.loginWithHaapiKey({}, p)
    }, t.reconnectByCharId = function(e, i) {
        i = i || n, t.characterId = e, b = !0;
        var o = window.gui.playerData.forcedAccount,
            a = window.gui.playerData.loginName;
        window.dofus.disconnect(), window.gui._shutDownUI(), t.startLoginProcess("characterId", {
            relogin: !0,
            forcedAccount: o,
            loginName: a
        }, function(e) {
            return e ? (b = !1, t.backToLogin(), i(e)) : i()
        })
    }, t.connectForcedAccount = function(e) {
        b = !0;
        var i = window.gui.playerData.loginName;
        window.dofus.disconnect(), window.gui._shutDownUI(), t.startLoginProcess(null, {
            relogin: !0,
            forcedAccount: e,
            loginName: i
        }, function(e) {
            if (e) return b = !1, t.backToLogin(), console.error(e)
        })
    }, t.backToLogin = function() {
        b || window.gui.loginScreen.backToLogin()
    }, t.goBackToSelectionOf = function(e, i) {
        i = i || n, window.gui.splashScreen.show(), window.gui.loginScreen.hide(), b = !0;
        var o = window.gui.playerData.forcedAccount,
            a = window.gui.playerData.loginName;
        window.dofus.disconnect();
        var r = "character" === e ? "lastServer" : null;
        t.startLoginProcess(r, {
            relogin: !0,
            forcedAccount: o,
            loginName: a
        }, function(e) {
            return e ? (b = !1, t.backToLogin(), i(e)) : i()
        })
    }, t.onFullReconnection = function() {
        window.gui.splashScreen.show(), window.gui.loginScreen.hide(), t.connectMethod = "lastCharacter"
    }
}
