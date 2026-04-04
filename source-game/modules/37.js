function(e, t, i) {
    function n(e) {
        _[e] || (_[e] = function() {
            _.emit(e, arguments)
        })
    }

    function o() {
        var e = {};
        if (!window.gui.playerData) return e;
        var t = window.gui.playerData,
            i = t.identification || {},
            n = i.uniqueNickname && i.uniqueNickname.toString(),
            o = t.characterBaseInformations || {},
            a = t.position || {},
            r = window.gui.fightManager || {},
            s = window.appInfo && window.appInfo.version,
            c = window.buildVersion;
        return e.groupFlags = p.getGroupFlags(), e.nickname = n, e.isGuiConnected = window.gui.isConnected, e.charaName = o.name, e.charaId = o.id, e.breed = o.breed, e.level = o.level, e.mapId = a.mapId, e.openWindows = f.getOpenWindows(), e.lastClosedWindow = f.getLastClosedWindow(), e.fightState = r.fightState, e.appVersion = s, e.buildVersion = c, e.appStart = v, e.lastDisconnect = y, e.lastCharaSelection = z, e.lastReceivedMessage = b.lastReceivedMessage, e
    }

    function a() {}

    function r() {}

    function s(e) {
        var t = I[e];
        if (t) return t;
        var i = C[e];
        return i ? (t = new i, I[e] = t, t) : void A.error("Unknown writer type:", e)
    }

    function c(e) {
        for (var t = Object.keys(g), i = 0, o = t.length; i < o; i++) {
            var a = t[i];
            n(a);
            for (var r in e) {
                var c = e[r],
                    l = s(r);
                l && c.indexOf(a) !== -1 && l.addChannel(a)
            }
        }
    }

    function l(e) {
        if (!d) {
            d = {};
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    if (S[t]) continue;
                    d[t] = e[t]
                }
        }
    }
    var d, u = i(36)
        .EventEmitter,
        p = i(38),
        h = i(39),
        f = i(52),
        b = i(105),
        m = i(21),
        M = i(7),
        g = {},
        _ = new u,
        A = window.console,
        O = 10,
        v = m.now(),
        y = -1,
        z = -1;
    A || (A = {
        log: function() {},
        info: function() {},
        debug: function() {},
        warn: function() {},
        error: function() {}
    });
    var w = {
            log: "verbose",
            debug: "debug",
            info: "info",
            warn: "warning",
            error: "error"
        },
        T = {
            verbose: "color: #AAA",
            log: "color: #AAA",
            debug: "color: #0AA;",
            info: "color: #00A; font-weight: bold;",
            notice: "color: #0A0;",
            warn: "color: #F55;",
            warning: "color: #F55;",
            error: "color: #A00;",
            critical: "color: #A00; font-weight: bold;",
            alert: "color: #A00; font-weight: bold; text-decoration: underline;",
            emergency: "background-color: #A00; font-weight: bold;"
        };
    Object.keys(w)
        .forEach(function(e) {
            "function" == typeof A[e] ? A["_" + e] = A[e] : "object" == typeof A[e] && (A["_" + e] = Function.prototype.bind.call(A[e], A))
        }), a.prototype.addChannel = function(e) {
            var t, i = Array.prototype.slice,
                n = "%c[" + e + "]",
                o = "background-color: transparent;",
                a = g[e] || 0;
            T[e] && (o = T[e]), a > g.warning && (t = A._error), !t && a >= g.warning && (t = A._warn), !t && A._info && a >= g.info && (t = A._info), !t && A._debug && a >= g.debug && (t = A._debug), t || (t = A._log), _.on(e, function(e) {
                var a = i.call(e),
                    r = n;
                return A.group && _.groups ? (A.group(r, o), t.apply(A, a), void A.groupEnd()) : ("string" == typeof a[0] && (r = r + " " + a.shift()), e = [r, o].concat(a), void t.apply(A, e))
            })
        }, r.prototype.addChannel = function(e) {
            var t = window.navigator || {},
                i = window.fetch || {},
                n = i.polyfill,
                a = {
                    userAgent: t.userAgent || "unknown",
                    clientConfig: d,
                    isFetchPolyfill: n,
                    identifier: M.identifier
                };
            _.on(e, function(t) {
                var i = h(t);
                i.data || (i.data = {}), Array.isArray(i.data.error) && i.data.error.length > O && (i.data.error.length = O), a.characterInfo = o(), i.data.clientInfo = JSON.stringify(a, null, 0);
                var n = window.gui.playerData,
                    r = n.identification || {};
                r.accountId && (i.data.accountId = r.accountId), window.gui.serversData.connectedServerId && (i.data.serverId = window.gui.serversData.connectedServerId);
                var s = window.Config && window.Config.dataUrl || "",
                    c = {};
                c.Accept = "application/json",
                c["Content-Type"] = "application/json";
                top.console.log(n);
                return null, window.fetch(s + "/logger", {
                    method: "post",
                    headers: c,
                    body: JSON.stringify({
                        channelName: e,
                        message: i.message,
                        data: i.data
                    })
                })
            })
        };
    var C = {
            console: a,
            server: r
        },
        I = {},
        S = {
            logging: !0,
            haapi: !0,
            adjust: !0,
            analytics: !0,
            serverLanguages: !0,
            failoverLanguage: !0,
            uiUrl: !0,
            disabledFeatures: !0,
            notification: !0,
            recaptcha: !0,
            dataUrl: !0,
            imgCrossOrigin: !0,
            webAuth: !0
        };
    _.setup = function(e) {
        e = e || {};
        var t = e.logging || {};
        l(e), g = t.logLevels || {}, _.groups = t.groups, c(t.config), t.disableOverride || (_.overrideConsole(), _.logUncaughtExceptions("error", !1)), window.gui.on("disconnect", function() {
            y = m.now()
        }), b.on("CharacterSelectedSuccessMessage", function() {
            z = m.now()
        })
    }, _.overrideConsole = function() {}; !1 && function() {
        Object.keys(w)
            .forEach(function(e) {
                var t = w[e];
                A[e] = function() {
                    _.emit(t, arguments)
                }
            })
    }, _.logUncaughtExceptions = function() {}; !1 && function(e, t) {
        var i = window.ErrorEvent;
        window.onerror && _.debug("window.onerror was already assigned, overwriting."), window.onerror = function(n, o, a, r, s) {
            if (i && n instanceof i) _.emit(e, [n, s]);
            else if (i && window.event instanceof i) _.emit(e, [window.event, s]);
            else {
                var c = [{
                    message: n,
                    url: o,
                    lineno: a,
                    colno: r
                }];
                s && c.push(s), _.emit(e, c)
            }
            if (!t) return !0
        }
    }, e.exports = _
}
