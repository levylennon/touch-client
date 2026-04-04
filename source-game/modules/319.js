function(e, t, i) {
    "use strict";

    function n(e, t) {
        return new Promise(function(i) {
            return setTimeout(i, e, t)
        })
    }

    function o(e, t) {
        void 0 === t && (t = 1 / 0);
        var i = window.requestIdleCallback;
        return i ? new Promise(function(e) {
            return i.call(window, function() {
                return e()
            }, {
                timeout: t
            })
        }) : n(Math.min(e, t))
    }

    function a(e) {
        return !!e && "function" == typeof e.then
    }

    function r(e, t) {
        try {
            var i = e();
            a(i) ? i.then(function(e) {
                return t(!0, e)
            }, function(e) {
                return t(!1, e)
            }) : t(!0, i)
        } catch (n) {
            t(!1, n)
        }
    }

    function s(e, t, i) {
        return void 0 === i && (i = 16), pt.__awaiter(this, void 0, void 0, function() {
            var o, a, r;
            return pt.__generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        o = Date.now(), a = 0, s.label = 1;
                    case 1:
                        return a < e.length ? (t(e[a], a), r = Date.now(), r >= o + i ? (o = r, [4, n(0)]) : [3, 3]) : [3, 4];
                    case 2:
                        s.sent(), s.label = 3;
                    case 3:
                        return ++a, [3, 1];
                    case 4:
                        return [2]
                }
            })
        })
    }

    function c(e) {
        e.then(void 0, function() {})
    }

    function l(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var i = [0, 0, 0, 0];
        return i[3] += e[3] + t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += e[2] + t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += e[1] + t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += e[0] + t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
    }

    function d(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var i = [0, 0, 0, 0];
        return i[3] += e[3] * t[3], i[2] += i[3] >>> 16, i[3] &= 65535, i[2] += e[2] * t[3], i[1] += i[2] >>> 16, i[2] &= 65535, i[2] += e[3] * t[2], i[1] += i[2] >>> 16, i[2] &= 65535, i[1] += e[1] * t[3], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += e[2] * t[2], i[0] += i[1] >>> 16, i[1] &= 65535, i[1] += e[3] * t[1], i[0] += i[1] >>> 16, i[1] &= 65535, i[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], i[0] &= 65535, [i[0] << 16 | i[1], i[2] << 16 | i[3]]
    }

    function u(e, t) {
        return t %= 64, 32 === t ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
    }

    function p(e, t) {
        return t %= 64, 0 === t ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
    }

    function h(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
    }

    function f(e) {
        return e = h(e, [0, e[0] >>> 1]), e = d(e, [4283543511, 3981806797]), e = h(e, [0, e[0] >>> 1]), e = d(e, [3301882366, 444984403]), e = h(e, [0, e[0] >>> 1])
    }

    function b(e, t) {
        e = e || "", t = t || 0;
        var i, n = e.length % 16,
            o = e.length - n,
            a = [0, t],
            r = [0, t],
            s = [0, 0],
            c = [0, 0],
            b = [2277735313, 289559509],
            m = [1291169091, 658871167];
        for (i = 0; i < o; i += 16) s = [255 & e.charCodeAt(i + 4) | (255 & e.charCodeAt(i + 5)) << 8 | (255 & e.charCodeAt(i + 6)) << 16 | (255 & e.charCodeAt(i + 7)) << 24, 255 & e.charCodeAt(i) | (255 & e.charCodeAt(i + 1)) << 8 | (255 & e.charCodeAt(i + 2)) << 16 | (255 & e.charCodeAt(i + 3)) << 24], c = [255 & e.charCodeAt(i + 12) | (255 & e.charCodeAt(i + 13)) << 8 | (255 & e.charCodeAt(i + 14)) << 16 | (255 & e.charCodeAt(i + 15)) << 24, 255 & e.charCodeAt(i + 8) | (255 & e.charCodeAt(i + 9)) << 8 | (255 & e.charCodeAt(i + 10)) << 16 | (255 & e.charCodeAt(i + 11)) << 24], s = d(s, b), s = u(s, 31), s = d(s, m), a = h(a, s), a = u(a, 27), a = l(a, r), a = l(d(a, [0, 5]), [0, 1390208809]), c = d(c, m), c = u(c, 33), c = d(c, b), r = h(r, c), r = u(r, 31), r = l(r, a), r = l(d(r, [0, 5]), [0, 944331445]);
        switch (s = [0, 0], c = [0, 0], n) {
            case 15:
                c = h(c, p([0, e.charCodeAt(i + 14)], 48));
            case 14:
                c = h(c, p([0, e.charCodeAt(i + 13)], 40));
            case 13:
                c = h(c, p([0, e.charCodeAt(i + 12)], 32));
            case 12:
                c = h(c, p([0, e.charCodeAt(i + 11)], 24));
            case 11:
                c = h(c, p([0, e.charCodeAt(i + 10)], 16));
            case 10:
                c = h(c, p([0, e.charCodeAt(i + 9)], 8));
            case 9:
                c = h(c, [0, e.charCodeAt(i + 8)]), c = d(c, m), c = u(c, 33), c = d(c, b), r = h(r, c);
            case 8:
                s = h(s, p([0, e.charCodeAt(i + 7)], 56));
            case 7:
                s = h(s, p([0, e.charCodeAt(i + 6)], 48));
            case 6:
                s = h(s, p([0, e.charCodeAt(i + 5)], 40));
            case 5:
                s = h(s, p([0, e.charCodeAt(i + 4)], 32));
            case 4:
                s = h(s, p([0, e.charCodeAt(i + 3)], 24));
            case 3:
                s = h(s, p([0, e.charCodeAt(i + 2)], 16));
            case 2:
                s = h(s, p([0, e.charCodeAt(i + 1)], 8));
            case 1:
                s = h(s, [0, e.charCodeAt(i)]), s = d(s, b), s = u(s, 31), s = d(s, m), a = h(a, s)
        }
        return a = h(a, [0, e.length]), r = h(r, [0, e.length]), a = l(a, r), r = l(r, a), a = f(a), r = f(r), a = l(a, r), r = l(r, a), ("00000000" + (a[0] >>> 0)
                .toString(16))
            .slice(-8) + ("00000000" + (a[1] >>> 0)
                .toString(16))
            .slice(-8) + ("00000000" + (r[0] >>> 0)
                .toString(16))
            .slice(-8) + ("00000000" + (r[1] >>> 0)
                .toString(16))
            .slice(-8)
    }

    function m(e) {
        var t;
        return pt.__assign({
            name: e.name,
            message: e.message,
            stack: null === (t = e.stack) || void 0 === t ? void 0 : t.split("\n")
        }, e)
    }

    function M(e, t) {
        for (var i = 0, n = e.length; i < n; ++i)
            if (e[i] === t) return !0;
        return !1
    }

    function g(e, t) {
        return !M(e, t)
    }

    function _(e) {
        return parseInt(e)
    }

    function A(e) {
        return parseFloat(e)
    }

    function O(e, t) {
        return "number" == typeof e && isNaN(e) ? t : e
    }

    function v(e) {
        return e.reduce(function(e, t) {
            return e + (t ? 1 : 0)
        }, 0)
    }

    function y(e, t) {
        if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
        var i = 1 / t;
        return Math.round(e * i) / i
    }

    function z(e) {
        for (var t, i, n = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), a = o[1] || void 0, r = {}, s = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, t) {
                r[e] = r[e] || [], r[e].push(t)
            };;) {
            var l = s.exec(o[2]);
            if (!l) break;
            var d = l[0];
            switch (d[0]) {
                case ".":
                    c("class", d.slice(1));
                    break;
                case "#":
                    c("id", d.slice(1));
                    break;
                case "[":
                    var u = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(d);
                    if (!u) throw new Error(n);
                    c(u[1], null !== (i = null !== (t = u[4]) && void 0 !== t ? t : u[5]) && void 0 !== i ? i : "");
                    break;
                default:
                    throw new Error(n)
            }
        }
        return [a, r]
    }

    function w(e) {
        return e && "object" == typeof e && "message" in e ? e : {
            message: e
        }
    }

    function T(e) {
        return "function" != typeof e
    }

    function C(e, t) {
        var i = new Promise(function(i) {
            var n = Date.now();
            r(e.bind(null, t), function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var o = Date.now() - n;
                if (!e[0]) return i(function() {
                    return {
                        error: w(e[1]),
                        duration: o
                    }
                });
                var a = e[1];
                return T(a) ? i(function() {
                    return {
                        value: a,
                        duration: o
                    }
                }) : void i(function() {
                    return new Promise(function(e) {
                        var t = Date.now();
                        r(a, function() {
                            for (var i = [], n = 0; n < arguments.length; n++) i[n] = arguments[n];
                            var a = o + Date.now() - t;
                            return i[0] ? void e({
                                value: i[1],
                                duration: a
                            }) : e({
                                error: w(i[1]),
                                duration: a
                            })
                        })
                    })
                })
            })
        });
        return c(i),
            function() {
                return i.then(function(e) {
                    return e()
                })
            }
    }

    function I(e, t, i) {
        var o = Object.keys(e)
            .filter(function(e) {
                return g(i, e)
            }),
            a = Array(o.length);
        return s(o, function(i, n) {
                a[n] = C(e[i], t)
            }),
            function() {
                return pt.__awaiter(this, void 0, void 0, function() {
                    var e, t, i, r, l, d, u;
                    return pt.__generator(this, function(p) {
                        switch (p.label) {
                            case 0:
                                for (e = {}, t = 0, i = o; t < i.length; t++) r = i[t], e[r] = void 0;
                                l = Array(o.length), d = function() {
                                    var t;
                                    return pt.__generator(this, function(i) {
                                        switch (i.label) {
                                            case 0:
                                                return t = !0, [4, s(o, function(i, n) {
                                                    if (!l[n])
                                                        if (a[n]) {
                                                            var o = a[n]()
                                                                .then(function(t) {
                                                                    return e[i] = t
                                                                });
                                                            c(o), l[n] = o
                                                        } else t = !1
                                                })];
                                            case 1:
                                                return i.sent(), t ? [2, "break"] : [4, n(1)];
                                            case 2:
                                                return i.sent(), [2]
                                        }
                                    })
                                }, p.label = 1;
                            case 1:
                                return [5, d()];
                            case 2:
                                if (u = p.sent(), "break" === u) return [3, 4];
                                p.label = 3;
                            case 3:
                                return [3, 1];
                            case 4:
                                return [4, Promise.all(l)];
                            case 5:
                                return p.sent(), [2, e]
                        }
                    })
                })
            }
    }

    function S(e, t) {
        var i = function(e) {
            return T(e) ? t(e) : function() {
                var i = e();
                return a(i) ? i.then(t) : t(i)
            }
        };
        return function(t) {
            var n = e(t);
            return a(n) ? n.then(i) : i(n)
        }
    }

    function E() {
        var e = window,
            t = navigator;
        return v(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
    }

    function L() {
        var e = window,
            t = navigator;
        return v(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !E()
    }

    function N() {
        var e = window,
            t = navigator;
        return v(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
    }

    function R() {
        var e = window,
            t = navigator;
        return v(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
    }

    function q() {
        var e = window;
        return v(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
    }

    function x() {
        var e, t, i = window;
        return v(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in i, "mozInnerScreenX" in i, "CSSMozDocumentRule" in i, "CanvasCaptureMediaStream" in i]) >= 4
    }

    function B() {
        var e = window;
        return v([!("MediaSettingsRange" in e), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3
    }

    function D() {
        var e = window;
        return v(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
    }

    function W() {
        if ("iPad" === navigator.platform) return !0;
        var e = screen,
            t = e.width / e.height;
        return v(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
    }

    function P() {
        var e = document;
        return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
    }

    function k() {
        var e = document;
        return (e.exitFullscreen || e.msExitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen)
            .call(e)
    }

    function F() {
        var e = N(),
            t = x();
        if (!e && !t) return !1;
        var i = window;
        return v(["onorientationchange" in i, "orientation" in i, e && !("SharedWorker" in i), t && /android/i.test(navigator.appVersion)]) >= 2
    }

    function H() {
        var e = window,
            t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
        if (!t) return -2;
        if (U()) return -1;
        var i = 4500,
            n = 5e3,
            o = new t(1, n, 44100),
            a = o.createOscillator();
        a.type = "triangle", a.frequency.value = 1e4;
        var r = o.createDynamicsCompressor();
        r.threshold.value = -50, r.knee.value = 40, r.ratio.value = 12, r.attack.value = 0, r.release.value = .25, a.connect(r), r.connect(o.destination), a.start(0);
        var s = G(o),
            l = s[0],
            d = s[1],
            u = l.then(function(e) {
                return j(e.getChannelData(0)
                    .subarray(i))
            }, function(e) {
                if ("timeout" === e.name || "suspended" === e.name) return -3;
                throw e
            });
        return c(u),
            function() {
                return d(), u
            }
    }

    function U() {
        return R() && !q() && !D()
    }

    function G(e) {
        var t = 3,
            i = 500,
            n = 500,
            o = 5e3,
            a = function() {},
            r = new Promise(function(r, s) {
                var c = !1,
                    l = 0,
                    d = 0;
                e.oncomplete = function(e) {
                    return r(e.renderedBuffer)
                };
                var u = function() {
                        setTimeout(function() {
                            return s(Y("timeout"))
                        }, Math.min(n, d + o - Date.now()))
                    },
                    p = function() {
                        try {
                            switch (e.startRendering(), e.state) {
                                case "running":
                                    d = Date.now(), c && u();
                                    break;
                                case "suspended":
                                    document.hidden || l++, c && l >= t ? s(Y("suspended")) : setTimeout(p, i)
                            }
                        } catch (n) {
                            s(n)
                        }
                    };
                p(), a = function() {
                    c || (c = !0, d > 0 && u())
                }
            });
        return [r, a]
    }

    function j(e) {
        for (var t = 0, i = 0; i < e.length; ++i) t += Math.abs(e[i]);
        return t
    }

    function Y(e) {
        var t = new Error(e);
        return t.name = e, t
    }

    function X(e, t, i) {
        var o, a, r;
        return void 0 === i && (i = 50), pt.__awaiter(this, void 0, void 0, function() {
            var s, c;
            return pt.__generator(this, function(l) {
                switch (l.label) {
                    case 0:
                        s = document, l.label = 1;
                    case 1:
                        return s.body ? [3, 3] : [4, n(i)];
                    case 2:
                        return l.sent(), [3, 1];
                    case 3:
                        c = s.createElement("iframe"), l.label = 4;
                    case 4:
                        return l.trys.push([4, , 10, 11]), [4, new Promise(function(e, i) {
                            var n = !1,
                                o = function() {
                                    n = !0, e()
                                },
                                a = function(e) {
                                    n = !0, i(e)
                                };
                            c.onload = o, c.onerror = a;
                            var r = c.style;
                            r.setProperty("display", "block", "important"), r.position = "absolute", r.top = "0", r.left = "0", r.visibility = "hidden", t && "srcdoc" in c ? c.srcdoc = t : c.src = "about:blank", s.body.appendChild(c);
                            var l = function() {
                                var e, t;
                                n || ("complete" === (null === (t = null === (e = c.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? o() : setTimeout(l, 10))
                            };
                            l()
                        })];
                    case 5:
                        l.sent(), l.label = 6;
                    case 6:
                        return (null === (a = null === (o = c.contentWindow) || void 0 === o ? void 0 : o.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, n(i)];
                    case 7:
                        return l.sent(), [3, 6];
                    case 8:
                        return [4, e(c, c.contentWindow)];
                    case 9:
                        return [2, l.sent()];
                    case 10:
                        return null === (r = c.parentNode) || void 0 === r ? void 0 : r.removeChild(c), [7];
                    case 11:
                        return [2]
                }
            })
        })
    }

    function V(e) {
        for (var t = z(e), i = t[0], n = t[1], o = document.createElement(null !== i && void 0 !== i ? i : "div"), a = 0, r = Object.keys(n); a < r.length; a++) {
            var s = r[a],
                c = n[s].join(" ");
            "style" === s ? Q(o.style, c) : o.setAttribute(s, c)
        }
        return o
    }

    function Q(e, t) {
        for (var i = 0, n = t.split(";"); i < n.length; i++) {
            var o = n[i],
                a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
            if (a) {
                var r = a[1],
                    s = a[2],
                    c = a[4];
                e.setProperty(r, s, c || "")
            }
        }
    }

    function K() {
        return X(function(e, t) {
            var i = t.document,
                n = i.body;
            n.style.fontSize = bt;
            var o = i.createElement("div"),
                a = {},
                r = {},
                s = function(e) {
                    var t = i.createElement("span"),
                        n = t.style;
                    return n.position = "absolute", n.top = "0", n.left = "0", n.fontFamily = e, t.textContent = ft, o.appendChild(t), t
                },
                c = function(e, t) {
                    return s("'".concat(e, "',")
                        .concat(t))
                },
                l = function() {
                    return mt.map(s)
                },
                d = function() {
                    for (var e = {}, t = function(t) {
                            e[t] = mt.map(function(e) {
                                return c(t, e)
                            })
                        }, i = 0, n = Mt; i < n.length; i++) {
                        var o = n[i];
                        t(o)
                    }
                    return e
                },
                u = function(e) {
                    return mt.some(function(t, i) {
                        return e[i].offsetWidth !== a[t] || e[i].offsetHeight !== r[t]
                    })
                },
                p = l(),
                h = d();
            n.appendChild(o);
            for (var f = 0; f < mt.length; f++) a[mt[f]] = p[f].offsetWidth, r[mt[f]] = p[f].offsetHeight;
            return Mt.filter(function(e) {
                return u(h[e])
            })
        })
    }

    function J() {
        var e = navigator.plugins;
        if (e) {
            for (var t = [], i = 0; i < e.length; ++i) {
                var n = e[i];
                if (n) {
                    for (var o = [], a = 0; a < n.length; ++a) {
                        var r = n[a];
                        o.push({
                            type: r.type,
                            suffixes: r.suffixes
                        })
                    }
                    t.push({
                        name: n.name,
                        description: n.description,
                        mimeTypes: o
                    })
                }
            }
            return t
        }
    }

    function Z() {
        var e, t, i = !1,
            n = $(),
            o = n[0],
            a = n[1];
        if (ee(o, a)) {
            i = te(a), ie(o, a);
            var r = oe(o),
                s = oe(o);
            r !== s ? e = t = "unstable" : (t = r, ne(o, a), e = oe(o))
        } else e = t = "";
        return {
            winding: i,
            geometry: e,
            text: t
        }
    }

    function $() {
        var e = document.createElement("canvas");
        return e.width = 1, e.height = 1, [e, e.getContext("2d")]
    }

    function ee(e, t) {
        return !(!t || !e.toDataURL)
    }

    function te(e) {
        return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
    }

    function ie(e, t) {
        e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
        var i = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
        t.fillText(i, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(i, 4, 45)
    }

    function ne(e, t) {
        e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
        for (var i = 0, n = [
                ["#f2f", 40, 40],
                ["#2ff", 80, 40],
                ["#ff2", 60, 80]
            ]; i < n.length; i++) {
            var o = n[i],
                a = o[0],
                r = o[1],
                s = o[2];
            t.fillStyle = a, t.beginPath(), t.arc(r, s, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
        }
        t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
    }

    function oe(e) {
        return e.toDataURL()
    }

    function ae() {
        var e, t = navigator,
            i = 0;
        void 0 !== t.maxTouchPoints ? i = _(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (i = t.msMaxTouchPoints);
        try {
            document.createEvent("TouchEvent"), e = !0
        } catch (n) {
            e = !1
        }
        var o = "ontouchstart" in window;
        return {
            maxTouchPoints: i,
            touchEvent: e,
            touchStart: o
        }
    }

    function re() {
        return navigator.oscpu
    }

    function se() {
        var e = navigator,
            t = [],
            i = e.language || e.userLanguage || e.browserLanguage || e.systemLanguage;
        if (void 0 !== i && t.push([i]), Array.isArray(e.languages)) N() && B() || t.push(e.languages);
        else if ("string" == typeof e.languages) {
            var n = e.languages;
            n && t.push(n.split(","))
        }
        return t
    }

    function ce() {
        return window.screen.colorDepth
    }

    function le() {
        return O(A(navigator.deviceMemory), void 0)
    }

    function de() {
        var e = screen,
            t = function(e) {
                return O(_(e), null)
            },
            i = [t(e.width), t(e.height)];
        return i.sort()
            .reverse(), i
    }

    function ue() {
        if (void 0 === ut) {
            var e = function() {
                var t = fe();
                be(t) ? ut = setTimeout(e, gt) : (dt = t, ut = void 0)
            };
            e()
        }
    }

    function pe() {
        var e = this;
        return ue(),
            function() {
                return pt.__awaiter(e, void 0, void 0, function() {
                    var e;
                    return pt.__generator(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return e = fe(), be(e) ? dt ? [2, pt.__spreadArray([], dt, !0)] : P() ? [4, k()] : [3, 2] : [3, 2];
                            case 1:
                                t.sent(), e = fe(), t.label = 2;
                            case 2:
                                return be(e) || (dt = e), [2, e]
                        }
                    })
                })
            }
    }

    function he() {
        var e = this,
            t = pe();
        return function() {
            return pt.__awaiter(e, void 0, void 0, function() {
                var e, i;
                return pt.__generator(this, function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, t()];
                        case 1:
                            return e = n.sent(), i = function(e) {
                                return null === e ? null : y(e, _t)
                            }, [2, [i(e[0]), i(e[1]), i(e[2]), i(e[3])]]
                    }
                })
            })
        }
    }

    function fe() {
        var e = screen;
        return [O(A(e.availTop), null), O(A(e.width) - A(e.availWidth) - O(A(e.availLeft), 0), null), O(A(e.height) - A(e.availHeight) - O(A(e.availTop), 0), null), O(A(e.availLeft), null)]
    }

    function be(e) {
        for (var t = 0; t < 4; ++t)
            if (e[t]) return !1;
        return !0
    }

    function me() {
        return O(_(navigator.hardwareConcurrency), void 0)
    }

    function Me() {
        var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
        if (t) {
            var i = (new t)
                .resolvedOptions()
                .timeZone;
            if (i) return i
        }
        var n = -ge();
        return "UTC".concat(n >= 0 ? "+" : "")
            .concat(Math.abs(n))
    }

    function ge() {
        var e = (new Date)
            .getFullYear();
        return Math.max(A(new Date(e, 0, 1)
            .getTimezoneOffset()), A(new Date(e, 6, 1)
            .getTimezoneOffset()))
    }

    function _e() {
        try {
            return !!window.sessionStorage
        } catch (e) {
            return !0
        }
    }

    function Ae() {
        try {
            return !!window.localStorage
        } catch (e) {
            return !0
        }
    }

    function Oe() {
        if (!E() && !L()) try {
            return !!window.indexedDB
        } catch (e) {
            return !0
        }
    }

    function ve() {
        return !!window.openDatabase
    }

    function ye() {
        return navigator.cpuClass
    }

    function ze() {
        var e = navigator.platform;
        return "MacIntel" === e && R() && !q() ? W() ? "iPad" : "iPhone" : e
    }

    function we() {
        return navigator.vendor || ""
    }

    function Te() {
        for (var e = [], t = 0, i = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < i.length; t++) {
            var n = i[t],
                o = window[n];
            o && "object" == typeof o && e.push(n)
        }
        return e.sort()
    }

    function Ce() {
        var e = document;
        try {
            e.cookie = "cookietest=1; SameSite=Strict;";
            var t = e.cookie.indexOf("cookietest=") !== -1;
            return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
        } catch (i) {
            return !1
        }
    }

    function Ie() {
        var e = atob;
        return {
            abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", e("YVt0aXRsZT0iN25hZ2EgcG9rZXIiIGld"), '[title="ALIENBOLA" i]'],
            abpvn: ["#quangcaomb", e("Lmlvc0Fkc2lvc0Fkcy1sYXlvdXQ="), ".quangcao", e("W2hyZWZePSJodHRwczovL3I4OC52bi8iXQ=="), e("W2hyZWZePSJodHRwczovL3piZXQudm4vIl0=")],
            adBlockFinland: [".mainostila", e("LnNwb25zb3JpdA=="), ".ylamainos", e("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
            adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", e("I2FkMl9pbmxpbmU=")],
            adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", e("LmhlYWRlci1ibG9ja2VkLWFk"), e("I2FkX2Jsb2NrZXI=")],
            adGuardAnnoyances: ['amp-embed[type="zen"]', ".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil"],
            adGuardBase: [".BetterJsPopOverlay", e("I2FkXzMwMFgyNTA="), e("I2Jhbm5lcmZsb2F0MjI="), e("I2FkLWJhbm5lcg=="), e("I2NhbXBhaWduLWJhbm5lcg==")],
            adGuardChinese: [e("LlppX2FkX2FfSA=="), e("YVtocmVmKj0iL29kMDA1LmNvbSJd"), e("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), ".qq_nr_lad", "#widget-quan"],
            adGuardFrench: [e("I2Jsb2NrLXZpZXdzLWFkcy1zaWRlYmFyLWJsb2NrLWJsb2Nr"), "#pavePub", e("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv"],
            adGuardGerman: [e("LmJhbm5lcml0ZW13ZXJidW5nX2hlYWRfMQ=="), e("LmJveHN0YXJ0d2VyYnVuZw=="), e("LndlcmJ1bmcz"), e("YVtocmVmXj0iaHR0cDovL3d3dy5laXMuZGUvaW5kZXgucGh0bWw/cmVmaWQ9Il0="), e("YVtocmVmXj0iaHR0cHM6Ly93d3cudGlwaWNvLmNvbS8/YWZmaWxpYXRlSWQ9Il0=")],
            adGuardJapanese: ["#kauli_yad_1", e("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), e("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), e("LmFkZ29vZ2xl"), e("LmFkX3JlZ3VsYXIz")],
            adGuardMobile: [e("YW1wLWF1dG8tYWRz"), e("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", e("I2FkX2ludmlld19hcmVh")],
            adGuardRussian: [e("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), e("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', e("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), e("I2FkX3NxdWFyZQ==")],
            adGuardSocial: [e("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), e("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
            adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", e("W2hyZWZePSJodHRwOi8vYWRzLmdsaXNwYS5jb20vIl0=")],
            adGuardTrackingProtection: ["#qoo-counter", e("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), e("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), e("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
            adGuardTurkish: ["#backkapat", e("I3Jla2xhbWk="), e("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), e("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), e("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
            bulgarian: [e("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers", e("I25ld0Fk")],
            easyList: [e("I0FEX0NPTlRST0xfMjg="), e("LnNlY29uZC1wb3N0LWFkcy13cmFwcGVy"), ".universalboxADVBOX03", e("LmFkdmVydGlzZW1lbnQtNzI4eDkw"), e("LnNxdWFyZV9hZHM=")],
            easyListChina: [e("YVtocmVmKj0iLndlbnNpeHVldGFuZy5jb20vIl0="), e("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), e("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box"],
            easyListCookie: ["#AdaCompliance.app-notice", ".text-center.rgpd", ".panel--cookie", ".js-cookies-andromeda", ".elxtr-consent"],
            easyListCzechSlovak: ["#onlajny-stickers", e("I3Jla2xhbW5pLWJveA=="), e("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", e("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
            easyListDutch: [e("I2FkdmVydGVudGll"), e("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", e("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
            easyListGermany: [e("I0FkX1dpbjJkYXk="), e("I3dlcmJ1bmdzYm94MzAw"), e("YVtocmVmXj0iaHR0cDovL3d3dy5yb3RsaWNodGthcnRlaS5jb20vP3NjPSJd"), e("I3dlcmJ1bmdfd2lkZXNreXNjcmFwZXJfc2NyZWVu"), e("YVtocmVmXj0iaHR0cDovL2xhbmRpbmcucGFya3BsYXR6a2FydGVpLmNvbS8/YWc9Il0=")],
            easyListItaly: [e("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", e("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
            easyListLithuania: [e("LnJla2xhbW9zX3RhcnBhcw=="), e("LnJla2xhbW9zX251b3JvZG9z"), e("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), e("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), e("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
            estonian: [e("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
            fanboyAnnoyances: ["#feedback-tab", "#taboola-below-article", ".feedburnerFeedBlock", ".widget-feedburner-counter", '[title="Subscribe to our blog"]'],
            fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
            fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
            fanboySocial: [".td-tags-and-social-wrapper-box", ".twitterContainer", ".youtube-social", 'a[title^="Like us on Facebook"]', 'img[alt^="Share on Digg"]'],
            frellwitSwedish: [e("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), e("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", e("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
            greekAdBlock: [e("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), e("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), e("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
            hungarian: ["#cemp_doboz", ".optimonk-iframe-container", e("LmFkX19tYWlu"), e("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
            iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", ".cookie-msg-info-container", "#cookies-policy-sticky"],
            icelandicAbp: [e("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
            latvian: [e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), e("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
            listKr: [e("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), e("I2xpdmVyZUFkV3JhcHBlcg=="), e("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), e("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
            listeAr: [e("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", e("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), e("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), e("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
            listeFr: [e("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), e("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), e("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
            officialPolish: ["#ceneo-placeholder-ceneo-12", e("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), e("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), e("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), e("ZGl2I3NrYXBpZWNfYWQ=")],
            ro: [e("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), 'a[href^="/magazin/"]', e("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), e("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), e("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd")],
            ruAd: [e("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), e("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), e("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
            thaiAds: ["a[href*=macau-uta-popup]", e("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), e("LmFkczMwMHM="), ".bumq", ".img-kosana"],
            webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", e("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
        }
    }

    function Se(e) {
        var t = void 0 === e ? {} : e,
            i = t.debug;
        return pt.__awaiter(this, void 0, void 0, function() {
            var e, t, n, o, a, r;
            return pt.__generator(this, function(s) {
                switch (s.label) {
                    case 0:
                        return Ee() ? (e = Ie(), t = Object.keys(e), n = (r = [])
                            .concat.apply(r, t.map(function(t) {
                                return e[t]
                            })), [4, Le(n)]) : [2, void 0];
                    case 1:
                        return o = s.sent(), i && Re(e, o), a = t.filter(function(t) {
                            var i = e[t],
                                n = v(i.map(function(e) {
                                    return o[e]
                                }));
                            return n > .6 * i.length
                        }), a.sort(), [2, a]
                }
            })
        })
    }

    function Ee() {
        return R() || F()
    }

    function Le(e) {
        var t;
        return pt.__awaiter(this, void 0, void 0, function() {
            var i, o, a, r, s, c, l, s;
            return pt.__generator(this, function(d) {
                switch (d.label) {
                    case 0:
                        for (i = document, o = i.createElement("div"), a = new Array(e.length), r = {}, Ne(o), s = 0; s < e.length; ++s) c = V(e[s]), l = i.createElement("div"), Ne(l), l.appendChild(c), o.appendChild(l), a[s] = c;
                        d.label = 1;
                    case 1:
                        return i.body ? [3, 3] : [4, n(50)];
                    case 2:
                        return d.sent(), [3, 1];
                    case 3:
                        i.body.appendChild(o);
                        try {
                            for (s = 0; s < e.length; ++s) a[s].offsetParent || (r[e[s]] = !0)
                        } finally {
                            null === (t = o.parentNode) || void 0 === t ? void 0 : t.removeChild(o)
                        }
                        return [2, r]
                }
            })
        })
    }

    function Ne(e) {
        e.style.setProperty("display", "block", "important")
    }

    function Re(e, t) {
        for (var i = "DOM blockers debug:\n```", n = 0, o = Object.keys(e); n < o.length; n++) {
            var a = o[n];
            i += "\n".concat(a, ":");
            for (var r = 0, s = e[a]; r < s.length; r++) {
                var c = s[r];
                i += "\n  ".concat(t[c] ? "🚫" : "➡️", " ")
                    .concat(c)
            }
        }
        console.log("".concat(i, "\n```"))
    }

    function qe() {
        for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
            var i = t[e];
            if (matchMedia("(color-gamut: ".concat(i, ")"))
                .matches) return i
        }
    }

    function xe() {
        return !!Be("inverted") || !Be("none") && void 0
    }

    function Be(e) {
        return matchMedia("(inverted-colors: ".concat(e, ")"))
            .matches
    }

    function De() {
        return !!We("active") || !We("none") && void 0
    }

    function We(e) {
        return matchMedia("(forced-colors: ".concat(e, ")"))
            .matches
    }

    function Pe() {
        if (matchMedia("(min-monochrome: 0)")
            .matches) {
            for (var e = 0; e <= At; ++e)
                if (matchMedia("(max-monochrome: ".concat(e, ")"))
                    .matches) return e;
            throw new Error("Too high value")
        }
    }

    function ke() {
        return Fe("no-preference") ? 0 : Fe("high") || Fe("more") ? 1 : Fe("low") || Fe("less") ? -1 : Fe("forced") ? 10 : void 0
    }

    function Fe(e) {
        return matchMedia("(prefers-contrast: ".concat(e, ")"))
            .matches
    }

    function He() {
        return !!Ue("reduce") || !Ue("no-preference") && void 0
    }

    function Ue(e) {
        return matchMedia("(prefers-reduced-motion: ".concat(e, ")"))
            .matches
    }

    function Ge() {
        return !!je("high") || !je("standard") && void 0
    }

    function je(e) {
        return matchMedia("(dynamic-range: ".concat(e, ")"))
            .matches
    }

    function Ye() {
        var e = Ot.acos || vt,
            t = Ot.acosh || vt,
            i = Ot.asin || vt,
            n = Ot.asinh || vt,
            o = Ot.atanh || vt,
            a = Ot.atan || vt,
            r = Ot.sin || vt,
            s = Ot.sinh || vt,
            c = Ot.cos || vt,
            l = Ot.cosh || vt,
            d = Ot.tan || vt,
            u = Ot.tanh || vt,
            p = Ot.exp || vt,
            h = Ot.expm1 || vt,
            f = Ot.log1p || vt,
            b = function(e) {
                return Ot.pow(Ot.PI, e)
            },
            m = function(e) {
                return Ot.log(e + Ot.sqrt(e * e - 1))
            },
            M = function(e) {
                return Ot.log(e + Ot.sqrt(e * e + 1))
            },
            g = function(e) {
                return Ot.log((1 + e) / (1 - e)) / 2
            },
            _ = function(e) {
                return Ot.exp(e) - 1 / Ot.exp(e) / 2
            },
            A = function(e) {
                return (Ot.exp(e) + 1 / Ot.exp(e)) / 2
            },
            O = function(e) {
                return Ot.exp(e) - 1
            },
            v = function(e) {
                return (Ot.exp(2 * e) - 1) / (Ot.exp(2 * e) + 1)
            },
            y = function(e) {
                return Ot.log(1 + e)
            };
        return {
            acos: e(.12312423423423424),
            acosh: t(1e308),
            acoshPf: m(1e154),
            asin: i(.12312423423423424),
            asinh: n(1),
            asinhPf: M(1),
            atanh: o(.5),
            atanhPf: g(.5),
            atan: a(.5),
            sin: r(-1e300),
            sinh: s(1),
            sinhPf: _(1),
            cos: c(10.000000000123),
            cosh: l(1),
            coshPf: A(1),
            tan: d(-1e300),
            tanh: u(1),
            tanhPf: v(1),
            exp: p(1),
            expm1: h(1),
            expm1Pf: O(1),
            log1p: f(10),
            log1pPf: y(10),
            powPI: b(-100)
        }
    }

    function Xe() {
        return Ve(function(e, t) {
            for (var i = {}, n = {}, o = 0, a = Object.keys(zt); o < a.length; o++) {
                var r = a[o],
                    s = zt[r],
                    c = s[0],
                    l = void 0 === c ? {} : c,
                    d = s[1],
                    u = void 0 === d ? yt : d,
                    p = e.createElement("span");
                p.textContent = u, p.style.whiteSpace = "nowrap";
                for (var h = 0, f = Object.keys(l); h < f.length; h++) {
                    var b = f[h],
                        m = l[b];
                    void 0 !== m && (p.style[b] = m)
                }
                i[r] = p, t.appendChild(e.createElement("br")), t.appendChild(p)
            }
            for (var M = 0, g = Object.keys(zt); M < g.length; M++) {
                var r = g[M];
                n[r] = i[r].getBoundingClientRect()
                    .width
            }
            return n
        })
    }

    function Ve(e, t) {
        return void 0 === t && (t = 4e3), X(function(i, n) {
            var o = n.document,
                a = o.body,
                r = a.style;
            r.width = "".concat(t, "px"), r.webkitTextSizeAdjust = r.textSizeAdjust = "none", N() ? a.style.zoom = "".concat(1 / n.devicePixelRatio) : R() && (a.style.zoom = "reset");
            var s = o.createElement("div");
            return s.textContent = pt.__spreadArray([], Array(t / 20 << 0), !0)
                .map(function() {
                    return "word"
                })
                .join(" "), a.appendChild(s), e(o, a)
        }, '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">')
    }

    function Qe() {
        var e, t = document.createElement("canvas"),
            i = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
        if (i && "getExtension" in i) {
            var n = i.getExtension("WEBGL_debug_renderer_info");
            if (n) return {
                vendor: (i.getParameter(n.UNMASKED_VENDOR_WEBGL) || "")
                    .toString(),
                renderer: (i.getParameter(n.UNMASKED_RENDERER_WEBGL) || "")
                    .toString()
            }
        }
    }

    function Ke() {
        return navigator.pdfViewerEnabled
    }

    function Je() {
        var e = new Float32Array(1),
            t = new Uint8Array(e.buffer);
        return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
    }

    function Ze(e) {
        return I(wt, e, [])
    }

    function $e(e) {
        var t = et(e),
            i = tt(t);
        return {
            score: t,
            comment: Tt.replace(/\$/g, "".concat(i))
        }
    }

    function et(e) {
        if (F()) return .4;
        if (R()) return q() ? .5 : .3;
        var t = e.platform.value || "";
        return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
    }

    function tt(e) {
        return y(.99 + .01 * e, 1e-4)
    }

    function it(e) {
        for (var t = "", i = 0, n = Object.keys(e)
                .sort(); i < n.length; i++) {
            var o = n[i],
                a = e[o],
                r = a.error ? "error" : JSON.stringify(a.value);
            t += "".concat(t ? "|" : "")
                .concat(o.replace(/([:|\\])/g, "\\$1"), ":")
                .concat(r)
        }
        return t
    }

    function nt(e) {
        return JSON.stringify(e, function(e, t) {
            return t instanceof Error ? m(t) : t
        }, 2)
    }

    function ot(e) {
        return b(it(e))
    }

    function at(e) {
        var t, i = $e(e);
        return {
            get visitorId() {
                return void 0 === t && (t = ot(this.components)), t
            },
            set visitorId(e) {
                t = e
            },
            confidence: i,
            components: e,
            version: ht
        }
    }

    function rt(e) {
        return void 0 === e && (e = 50), o(e, 2 * e)
    }

    function st(e, t) {
        var i = Date.now();
        return {
            get: function(n) {
                return pt.__awaiter(this, void 0, void 0, function() {
                    var o, a, r;
                    return pt.__generator(this, function(s) {
                        switch (s.label) {
                            case 0:
                                return o = Date.now(), [4, e()];
                            case 1:
                                return a = s.sent(), r = at(a), (t || (null === n || void 0 === n ? void 0 : n.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(r.version, "\nuserAgent: ")
                                    .concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ")
                                    .concat(o - i, "\nvisitorId: ")
                                    .concat(r.visitorId, "\ncomponents: ")
                                    .concat(nt(a), "\n```")), [2, r]
                        }
                    })
                })
            }
        }
    }

    function ct() {
        if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
            var e = new XMLHttpRequest;
            e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(ht, "/npm-monitoring"), !0), e.send()
        } catch (t) {
            console.error(t)
        }
    }

    function lt(e) {
        var t = void 0 === e ? {} : e,
            i = t.delayFallback,
            n = t.debug,
            o = t.monitoring,
            a = void 0 === o || o;
        return pt.__awaiter(this, void 0, void 0, function() {
            var e;
            return pt.__generator(this, function(t) {
                switch (t.label) {
                    case 0:
                        return a && ct(), [4, rt(i)];
                    case 1:
                        return t.sent(), e = Ze({
                            debug: n
                        }), [2, st(e, n)]
                }
            })
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var dt, ut, pt = i(320),
        ht = "3.4.0",
        ft = "mmMwWLliI0O&1",
        bt = "48px",
        mt = ["monospace", "sans-serif", "serif"],
        Mt = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"],
        gt = 2500,
        _t = 10,
        At = 100,
        Ot = Math,
        vt = function() {
            return 0
        },
        yt = "mmMwWLliI0fiflO&1",
        zt = {
            "default": [],
            apple: [{
                font: "-apple-system-body"
            }],
            serif: [{
                fontFamily: "serif"
            }],
            sans: [{
                fontFamily: "sans-serif"
            }],
            mono: [{
                fontFamily: "monospace"
            }],
            min: [{
                fontSize: "1px"
            }],
            system: [{
                fontFamily: "system-ui"
            }]
        },
        wt = {
            fonts: K,
            domBlockers: Se,
            fontPreferences: Xe,
            audio: H,
            screenFrame: he,
            osCpu: re,
            languages: se,
            colorDepth: ce,
            deviceMemory: le,
            screenResolution: de,
            hardwareConcurrency: me,
            timezone: Me,
            sessionStorage: _e,
            localStorage: Ae,
            indexedDB: Oe,
            openDatabase: ve,
            cpuClass: ye,
            platform: ze,
            plugins: J,
            canvas: Z,
            touchSupport: ae,
            vendor: we,
            vendorFlavors: Te,
            cookiesEnabled: Ce,
            colorGamut: qe,
            invertedColors: xe,
            forcedColors: De,
            monochrome: Pe,
            contrast: ke,
            reducedMotion: He,
            hdr: Ge,
            math: Ye,
            videoCard: Qe,
            pdfViewerEnabled: Ke,
            architecture: Je
        },
        Tt = "$ if upgrade to Pro: https://fpjs.dev/pro",
        Ct = {
            load: lt,
            hashComponents: ot,
            componentsToDebugString: nt
        },
        It = b;
    t.componentsToDebugString = nt, t["default"] = Ct, t.getFullscreenElement = P, t.getScreenFrame = pe, t.hashComponents = ot, t.isAndroid = F, t.isChromium = N, t.isDesktopSafari = q, t.isEdgeHTML = L, t.isGecko = x, t.isTrident = E, t.isWebKit = R, t.load = lt, t.loadSources = I, t.murmurX64Hash128 = It, t.prepareForSources = rt, t.sources = wt, t.transformSource = S
}
