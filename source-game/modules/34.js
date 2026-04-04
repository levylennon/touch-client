function(e, t, i) {
    function n() {
        D || (D = window.setTimeout(function() {
            window.dofus.sendMessage("BasicPingMessage", {
                quiet: !0
            }), D = null
        }, 2e3))
    }

    function o() {
        D && (window.clearTimeout(D), D = null)
    }

    function a(e) {
        if (!window.Config.sessionId) return console.warn("Cannot make URL sticky (no session ID has been set):", e), e;
        var t = e.indexOf("?") === -1 ? "?" : "&";
        return e + t + q + "=" + encodeURIComponent(window.Config.sessionId)
    }

    function r() {
        if (P) return P;
        var e = window.appInfo || {};
        console.log('e', e);
        return e.server ? e.server : window.developmentMode ? "http://localhost:5555" : "http://192.168.0.2:5555" // "https://dt-proxy-production-login.ankama-games.com"
    }

    function s(e) {
        for (var t = 0; t < W.length; t += 1) {
            var i = W[t];
            if (i.id === e) return i
        }
    }

    function c(e, t) {
        var i = {};
        e && (i.lang = e);
        var n = r() + "/config.json?" + S.stringify(i);
        return H[n] ? t(null, H[n]) : void m.loadJson(n, function(e, i) {
            return e ? t(e) : (i.imgCrossOrigin = i.assetsUrl.match(/^https?:\/\/.+?:.+?@.+?/) ? void 0 : "anonymous", H[n] = i, void t(null, i))
        })
    }

    function l(e, t) {
        c(e, function(e, i) {
            return e ? t(e) : (window.Config = i, O.setDataUrl(window.Config.dataUrl), void t())
        })
    }

    function d(e, i, n) {
        b.auto({
            primus: function(e) {
                return window.Primus ? e() : void m.loadScript(r() + "/build/primus.js", e)
            },
            config: function(i) {
                return window.Config ? e ? t.setLanguage(e, i) : i() : void l(e, i)
            },
            syncSetup: ["config", function(e, t) {
                g.setup(window.Config), O.setDataUrl(window.Config.dataUrl), t()
            }],
            getText: ["syncSetup", function(e, n) {
                v.initialize(window.Config, t.logger, O, function(e) {
                    return e ? n(e) : (i.initialize(window.Config, t.logger), N.initialize(i, v.getText), n())
                })
            }]
        }, n)
    }

    function u() {
        z.setupChannels(A.getValue("soundPreferences", {}, !0)), z.playLoopSound("music", "20000", .8)
    }

    function p() {
        z.stopAllLoopSounds(), z.release()
    }

    function h() {
        return window.gui.splashScreen.show(), window.setTimeout(function() {
            window.gui.splashScreen.hide(), window.location.reload()
        }, 3e4)
    }

    function f(e) {
        return {
            language: window.Config ? window.Config.language : "en",
            server: e,
            client: "android",
            appVersion: window._["appVersion"],
            buildVersion: window._["buildVersion"]
        }
    }
    var b = i(18),
        m = i(35),
        M = i(36)
        .EventEmitter,
        g = i(37),
        _ = i(105),
        A = i(60),
        O = i(130),
        v = i(17),
        y = i(141);
    i(334);
    var z = i(91),
        w = i(412),
        T = i(413),
        C = i(116),
        I = i(125),
        S = i(135),
        E = i(7),
        L = i(142),
        N = i(21),
        R = i(143);
    window.developmentMode && i(414);
    var q = "STICKER",
        x = window.appInfo && window.appInfo.version,
        B = window.buildVersion,
        D = null;
    t = e.exports = new M, t.logger = g, t.connectionManager = _, t.sessionId = null;
    var W = [],
        P = "",
        k = !1,
        F = !1;
    t.setLanguage = function(e, t) {
        if (!window.Config || e && window.Config.language === e) return t();
        var i = r() + "/getLanguage.json?lang=" + e;
        m.loadJson(i, function(e, i) {
            return e ? t(e) : (window.Config.language = i.language, void t())
        })
    };
    var H = {};
    t.start = function() {
        window.gui.initialize();
        var e = A.getValue("lang");
        d(e, window.gui, function(e) {
            return e ? t.reloadAppOnFatalError(e) : (L.initHaapiModule(t.logger, t.connectionManager), C.init(null, L), I.initialize(t.logger, window.Config.adjust, window.Adjust, window.AdjustConfig, window.AdjustEvent), y.backToLogin(), R.initialize(), window.gui.initialize(window.Config), void(window.isoEngine && window.isoEngine.initialize()))
        })
    }, t.reloadAppOnFatalError = function(e, t) {
        t = t || "Server busy", console.error(new Error("Reloading on fatal error: " + e)), window.alert(t), h()
    };
    var U, G = 0,
        j = 1,
        Y = 2,
        X = 3,
        V = 4,
        Q = G,
        K = {
            username: null,
            token: null,
            forcedAccount: null,
            salt: null,
            key: null
        };
    t.setCredentials = function(e, t, i) {
        K.username = e,
        K.token = t,
        K.forcedAccount = i,
        K.salt = null,
        K.key = null
    },
    t.login = function(e) {
        if (Q === Y) return console.warn("Already logged in"), e();
        if (Q === j) return console.warn("Already logging in"), t.once("loginEnd", e);
        Q === V && _.disconnect("SWITCHING_TO_LOGIN"), Q = j, K.salt = null, K.key = null, k = !1, F = !1;
        var i = T(_, function(i) {
            o(), i ? (this.disconnect("LOGIN_ERROR"), Q = G, t.emit("loginEnd", i)) : F ? (Q = G, t.emit("loginEnd")) : (Q = Y, t.emit("loginEnd")), e(i, {
                disconnected: F
            })
        });
        i("disconnect", function(e) {
            if (k = !0, "NICKNAME_CLOSING" !== e) throw new Error("Disconnect during login");
            F = !0, i.done()
        }),
            i("open", function() {
            this.send("connecting",f("login"))
        }),
            i("serverDisconnecting", function(e) {
            k || (k = !0, i.done(e))
        }),
            i("ProtocolRequired", function(e) {
            console.log("[Login server protocol] requiredVersion:", e.requiredVersion, "currentVersion:", e.currentVersion)
        }),
            i("HelloConnectMessage", function(e) {
                K.salt = e.salt,
                K.key = e.key,
                this.send("login", K)
        }),
            i("IdentificationSuccessMessage", "IdentificationSuccessWithLoginTokenMessage", function(msg) {
            var o = msg.uniqueNickname,
                a = window.gui.playerData.loginName;
            if (a) {
                if (/^\[GUEST]/.test(a)) {
                    if (window.Config.disabledFeatures.guest) return i.done(new Error("identification: no guests"));
                    var r = A.getValue("guestAccount", {}, !0);
                    r.nickname = o.toString()
                }
            } else console.error("dofus.login: loginName is empty");
            A.setAccount(o.toString()), u(), w.start(), msg.wasAlreadyConnected && t.emit("wasAlreadyConnected"), n()
        }),
            i("ConnectionFailedMessage", "IdentificationFailedMessage", "IdentificationFailedForBadVersionMessage", "IdentificationFailedBannedMessage", function(e) {
                i.done(e)
        }),
            i("ServersListMessage", function(e) {
                o(), 
                W = e.servers,
                i.done()
        }), 
        _.connect(t.logger, a(r()))
    }, t.accessGameServer = function(e, i) {
        if (Q === j) return console.warn("WARN: Login not finished yet."), t.once("loginEnd", function(n) {
            return n ? i(n) : void t.accessGameServer(e, i)
        });
        if (Q === X) return e === U ? (console.error("WARN: Already accessing this game server (" + e + ")"), t.once("accessGameEnd", i)) : i(new Error("Already accessing game server " + U + " (while trying to access " + e + ")"));
        if (U = e, Q !== Y) return t.login(function(n) {
            return n ? i(n) : void t.accessGameServer(e, i)
        });
        var n, o, r, c = s(e);
        if (!c) return i(new Error("Unknown server: " + e));
        Q = X;
        var d = T(_, function(e) {
            debugger;
            e ? (this.disconnect("GAME_HANDSHAKE_ERROR"), Q = G, t.emit("accessGameEnd", e)) : (Q = V, t.emit("accessGameEnd")), U = null, i(e)
        });
        d("SelectedServerDataMessage", function(e) {
            n = e.ticket, o = e.address, r = e.port, P = e._access, _.switchToGame(a(e._access))
        }), d("SelectedServerRefusedMessage", function(e) {
            throw new Error("serverId " + e.serverId + " not accessible, error: " + e.error + ", serverStatus: " + e.serverStatus)
        }), d("open", function() {
            this.send("connecting", f({
                address: o,
                port: r,
                id: e
            }))
        }), d("serverDisconnecting", function(e) {
            d.done(e)
        }), d("ProtocolRequired", function(e) {
            console.log("[Game server protocol] requiredVersion:", e.requiredVersion, "currentVersion:", e.currentVersion)
        }), d("HelloGameMessage", function() {
            this.sendMessage("AuthenticationTicketMessage", {
                ticket: n,
                lang: window.Config.language
            })
        }), d("AuthenticationTicketAcceptedMessage", function() {
            l(window.Config.language, d.done)
        }), d("AuthenticationTicketRefusedMessage", function() {
            console.error(new Error("Server " + e + " Authentication failed")), d.done()
        }), _.sendMessage("ServerSelectionMessage", {
            serverId: e
        })
    }, _.on("HelloConnectMessage", function() {
        window.gui.connectionSplashScreen.onStateChange("CONNECTED")
    }), _.on("offline", function() {
        window.gui.connectionSplashScreen.onStateChange("UNSTABLE")
    }), _.on("reconnecting", function(e, t) {
        console.info("Reconnecting to " + t + " (attempt #" + e + ")"), window.gui.connectionSplashScreen.onStateChange("RECONNECTING", e)
    }), _.on("open", function(e) {
        e && _.send("reconnecting")
    }), _.on("sessionReconnected", function() {
        return window.isoEngine.onQuickReconnection(function() {
            window.gui.connectionSplashScreen.onStateChange("CONNECTED")
        })
    }), _.on("sessionTimedOut", function() {
        console.info("Session timed out"), _.disconnect("SESSION_TIMED_OUT")
    }), _.on("serverDisconnecting", function(e) {
        console.info("Server disconnecting, reason:", e.reason), _.disconnect("SOCKET_LOST")
    }), _.on("disconnect", function(e) {
        Q = G, P = "", l(window.Config && window.Config.language, function(e) {
            if (e) return console.error("Update config error on disconnect: ", e)
        }), e.match(/^SWITCHING_/) || (p(), w.stop(), window.gui.disconnect(e), window.isoEngine && window.isoEngine.disconnect(), window.gui.connectionSplashScreen.onStateChange("RELOAD" === e ? "RELOADING" : "DISCONNECTED"))
    }), t.send = function(e, t) {
        _.send(e, t)
    }, t.sendMessage = function(e, t) {
        _.sendMessage(e, t)
    }, t.disconnect = function(e) {
        _.disconnect(e)
    }, t.disconnectAndReload = function(e) {
        var i = !window.gui.playerData.isModeratorOrMore();
        t.disconnect(e), !window.developmentMode && i && window.location.reload()
    }, window.addEventListener("beforeunload", function() {
        _.disconnect("RELOAD")
    })
}
