function(e, t, i) {
    function n(e) {
        return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
    }

    function o(e, t) {
        if (!Array.isArray(e)) return console.error(new Error("checkBidHouseCategoriesAddendumIntegrity: types is not an Array"));
        var i = {},
            n = [];
        for (var o in t)
            if (t.hasOwnProperty(o))
                for (var a = t[o], r = 0; r < a.allowedTypes.length; r += 1) {
                    var s = a.allowedTypes[r];
                    i[s] = !0
                }
        n = Object.keys(i), n = n.map(function(e) {
            return window.parseInt(e, 10)
        });
        for (var c = 0; c < n.length; c += 1) {
            var l = n[c];
            e.indexOf(l) === -1 && console.error("BidHouseCategoriesAddendum have an extra type " + l)
        }
        for (var d = 0; d < e.length; d += 1) {
            var u = e[d];
            n.indexOf(u) === -1 && console.error("BidHouseCategoriesAddendum is missing the type " + u)
        }
    }

    function a(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }

    function r(e, t, i) {
        var n = t.isRiding ? t.mountXpRatio || 0 : 0,
            o = t.guild.getGuildMemberInfo(t.id) || {},
            a = {
                level: t.characterBaseInformations.level
            },
            r = [a];
        if (null !== i) {
            var s = i.getMembers();
            for (var c in s) s.hasOwnProperty(c) && r.push(s[c])
        }
        var l = t.characters.mainCharacter.characteristics.experienceBoost,
            d = t.alliance.getPrismBonusPercent(t.position.subAreaId),
            u = {
                level: t.characterBaseInformations.level,
                experienceBoost: l.getTotalStat(),
                experienceFactor: t.experienceFactor,
                xpRatioMount: n,
                xpGuildGivenPercent: o.experienceGivenPercent || 0,
                xpAlliancePrismBonusPercent: d
            };
        return h(u, e, r)
    }

    function s(e) {
        return null === e.getParent() ? e === window.gui.wBody : s(e.getParent())
    }
    var c = i(17)
        .getText,
        l = (i(13), i(18)),
        d = i(21)
        .time.dofusTimeYearLag,
        u = i(22),
        p = i(23)
        .events,
        h = i(24),
        f = i(25);
    t.totalCriticalHitRate = f;
    var b = i(26);
    t.extractElementsFrom = b;
    var m = i(27);
    t.isActorVisibleToUser = m;
    var M = i(28);
    t.parseLook = M;
    var g = i(29);
    t.getIncarnationExpDetails = function(e, t, i) {
        return g(window.gui.databases.IncarnationLevels, e, t, i)
    };
    var _ = 86400;
    t.getEnvName = function() {
        var e = "";
        return e
    }, t.getCacheFolder = function() {
        var e = "";
        return e
    }, t.sortObjectInArray = function(e, t, i) {
        var n = i ? 1 : -1,
            o = i ? -1 : 1;
        e.sort(function(e, i) {
            return e[t] < i[t] ? n : e[t] > i[t] ? o : 0
        })
    }, t.getObjectInArrayIndexById = function(e, t, i) {
        if (!Array.isArray(e)) return console.error("Input not an array.", e);
        for (var n = 0; n < e.length; n += 1) {
            var o = e[n];
            if (o.hasOwnProperty(t) && o[t] === i) return n
        }
        return -1
    }, t.getObjectInArrayById = function(t, i, n) {
        var o = e.exports.getObjectInArrayIndexById(t, i, n);
        if (o >= 0) return t[o]
    }, t.removeObjectInArrayById = function(e, t, i) {
        if (!Array.isArray(e)) return console.error("Input not an array.", e);
        for (var n = !1, o = e.length - 1; o >= 0; o -= 1) {
            var a = e[o];
            a.hasOwnProperty(t) && a[t] === i && (e.splice(o, 1), n = !0)
        }
        return n
    }, t.mergeObjects = function(e) {
        for (var t = e || arguments, i = {}, n = 0, o = t.length; n < o; n += 1) {
            var a = t[n];
            for (var r in a) a.hasOwnProperty(r) && (i[r] = a[r])
        }
        return i
    };
    var A = /[^0-9]+/g,
        O = /\B(?=(\d{3})+(?!\d))/g,
        v = null,
        y = null,
        z = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;"
        };
    t.encodeSpecialChars = function(e) {
        return e ? e = e.replace(/[<>"']/g, function(e) {
            return z[e]
        }) : e
    }, t.kamasToString = function(e, t) {
        t || "" === t || (t = c("ui.common.short.kama"));
        var i = this.intToString(e);
        return t ? i + " " + t : i
    }, t.stringToKamas = function(e) {
        return Number(e.replace(A, ""))
    }, t.intToString = function(e) {
        return isNaN(e) || null === e ? "" : (y = null !== y ? y : c("ui.common.numberSeparator"), t.formatStringWithSeparator(e.toString()))
    }, t.formatStringWithSeparator = function(e) {
        return y = null !== y ? y : c("ui.common.numberSeparator"), e.replace(O, y)
    }, t.stringToInt = function(e) {
        return v || (y = null !== y ? y : c("ui.common.numberSeparator"), v = new RegExp(n(y), "g")), Number(e.replace(v, ""))
    }, t.hardAndSoftToString = function(e, i) {
        var n = e ? t.kamasToString(e, "G") + " / " : "";
        return n + t.kamasToString(i, "K")
    }, t.storeMapAndEmit = function(e, t, i, n) {
        var o = !1;
        for (var a in i) t[a] !== i[a] && (t[a] = i[a], o = !0);
        o && e.emit(n)
    }, t.storeValueAndEmit = function(e, t, i, n, o) {
        t[i] !== n && (t[i] = n, e.emit(o, n))
    }, t.hexToRgb = function(e) {
        for (var t = 6 - e.length, i = 0; i < t; i++) e = "0" + e;
        var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return n ? [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)] : null
    }, t.mod = function(e, t) {
        return 0 === t ? 0 : (e % t + t) % t
    }, t.durationToString = function(e) {
        var t = ~~e % 60;
        t < 10 && (t = "0" + t);
        var i = ~~(e / 60) % 60;
        i < 10 && (i = "0" + i);
        var n = ~~(e / 3600);
        return n < 10 && (n = "0" + n), n + ":" + i + ":" + t
    }, t.durationToHuman = function(e) {
        var t = e / _;
        if (t >= 1) {
            var i = Math.floor(t / 365.25);
            if (i >= 1) return i + " " + c("ui.time.years", i);
            var n = Math.floor(t / 30.5);
            return n >= 1 ? n + " " + c("ui.time.months", n) : (t = Math.floor(t), t + " " + c("ui.time.days", t))
        }
        var o = Math.floor(e / 3600);
        if (o >= 1) return o + " " + c("ui.time.hours", o);
        var a = Math.floor(e / 60);
        if (a >= 1) return a + " " + c("ui.time.minutes", a);
        var r = Math.ceil(e);
        return r + " " + c("ui.time.seconds", r)
    }, t.getAlmanaxDate = function(e, t) {
        e = e ? new Date(e) : new Date;
        var i = t ? e.getFullYear() : e.getUTCFullYear(),
            n = t ? e.getMonth() : e.getUTCMonth(),
            o = t ? e.getDate() : e.getUTCDate(),
            a = t ? e.getHours() : e.getUTCHours(),
            r = t ? e.getMinutes() : e.getUTCMinutes();
        return {
            year: i + d,
            month: n + 1,
            day: o,
            monthName: window.gui.databases.Months[n].nameId,
            hour: a < 10 ? "0" + a : a,
            minute: r < 10 ? "0" + r : r
        }
    }, t.simplifyString = function(e, t) {
        if (!e) {
            var i = "missing word to simplify";
            return t && (i += ", label: " + t), console.error(new Error(i)), ""
        }
        for (var n = e.split(""), o = [], a = n.length, r = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž", s = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz", c = 0; c < a; c++) r.indexOf(n[c]) === -1 ? o[c] = n[c] : o[c] = s.substr(r.indexOf(n[c]), 1);
        return o.join("")
            .toLowerCase()
    }, t.createFifo = function() {
        return l.queue(function(e, t) {
            try {
                e(function(e) {
                    if (e) throw new Error(e);
                    t()
                })
            } catch (i) {
                return console.error(i), t(i)
            }
        })
    }, t.getObjectInstanceName = function(e) {
        if (!e) return null;
        var t = /function ([^(]+)/.exec(String(Object.getPrototypeOf(e)
            .constructor)) || [];
        return t[1]
    }, t.differenceBetweenTwoArrays = function(e, t) {
        if (e.length !== t.length) return !0;
        for (var i = 0; i < e.length; i++)
            if (e[i] !== t[i]) return !0;
        return !1
    }, t.mapToArray = function(e, t) {
        for (var i = Object.keys(e), n = i.length, o = new Array(n), a = 0; a < n; a++) o[a] = e[i[a]];
        if (t && t.sortBy) {
            var r = t.sortBy;
            o.sort(function(e, t) {
                return e[r] - t[r]
            })
        }
        return o
    }, t.forceReflow = function(e, t) {
        e.rootElement.offsetWidth;
        t && window.setTimeout(t, 100)
    }, t.showProgressively = function(e, i, n, o) {
        function a() {
            o && u.tween(o, {
                opacity: 0
            }, {
                time: i || 250
            }), e && u.tween(e, {
                opacity: 1
            }, {
                time: i || 250
            })
        }
        e && (e.setStyle("opacity", 0), e.show(), t.forceReflow(e)), n ? window.setTimeout(a, n) : a()
    }, t.allLinksOnTargetBlank = function(e) {
        function t(e, t) {
            e.addEventListener("click", function(e) {
                e.preventDefault()
            }), e.addEventListener(p.end, function(e) {
                t = encodeURI(t), i.openUrlInAppBrowser(t), e.preventDefault()
            })
        }
        for (var i = this, n = e.rootElement.getElementsByTagName("a"), o = 0; o < n.length; o++) n[o].href && t(n[o], n[o].href)
    }, t.openUrlInDeviceBrowser = function(e) {
        return window.cordova && window.cordova.InAppBrowser ? window.cordova.InAppBrowser.open(e, "_system") : window.open(e, "_system")
    };
    var w;
    if (window.cordova && window.cordova.InAppBrowser) {
        var T, C = function I() {
            T.removeEventListener("exit", I), T = null
        };
        w = function(e) {
            return T ? (console.error(new Error("unable to open url " + e + ": in app browser is already opened")), null) : (T = window.cordova.InAppBrowser.open(e, "_blank", "closebuttoncaption=" + c("tablet.common.backToGame")), T.addEventListener("exit", C), T)
        }
    } else w = function(e) {
        return window.open(e, "_blank")
    };
    t.openUrlInAppBrowser = w, t.cssTransform = function(e, t) {
        e.setStyles({
            transform: t,
            oTransform: t,
            msTransform: t,
            mozTransform: t,
            webkitTransform: t
        })
    }, 
    t.cssTransition = function(e, t) {
        e.setStyles({
            transition: t,
            oTransition: t,
            msTransition: t,
            mozTransition: t,
            webkitTransition: t
        })
    }, 
    t.createPropertyNameCompareFunc = function(e) {
        return function(t, i) {
            return t[e] < i[e] ? -1 : t[e] > i[e] ? 1 : 0
        }
    }, 
    t.createStringCompareFunc = function(e) {
        e = e || "nameId";
        var t = window.Config.language;
        return function(i, n) {
            var o = i[e];
            return "string" != typeof o ? -1 : o.localeCompare(n[e], t)
        }
    }, 
    t.jeffVersionDowngrader = function(e, i) {
        if (i || e.meta && e.meta.version) {
            if (void 0 !== e.x && (e.x *= -1), void 0 !== e.y && (e.y *= -1), void 0 !== e.transforms && (e.matrices = e.transforms, delete e.transforms), void 0 !== e.isAnimation && (e.isAnim = e.isAnimation, delete e.isAnimation), e.symbols)
                for (var n in e.symbols) t.jeffVersionDowngrader(e.symbols[n], !0);
            if (e.children)
                for (var o in e.children) t.jeffVersionDowngrader(e.children[o], !0)
        }
    }, 
    t.checkBidHouseCategoriesAddendumIntegrity = o,
    t.randomIntFromInterval = a,
    t.getXpPreview = r,
    t.isConnectedToDom = s
}
