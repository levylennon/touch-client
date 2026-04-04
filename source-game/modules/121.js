function(e, t, i) {
    function n(e) {
        "@babel/helpers - typeof";
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var o;
    ! function(a) {
        var r = arguments,
            s = function() {
                var e = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,
                    t = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                    i = /[^-+\dA-Z]/g;
                return function(n, o, a, h) {
                    if (1 !== r.length || "string" !== p(n) || /\d/.test(n) || (o = n, n = void 0), n = n || 0 === n ? n : new Date, n instanceof Date || (n = new Date(n)), isNaN(n)) throw TypeError("Invalid date");
                    o = String(s.masks[o] || o || s.masks["default"]);
                    var f = o.slice(0, 4);
                    "UTC:" !== f && "GMT:" !== f || (o = o.slice(4), a = !0, "GMT:" === f && (h = !0));
                    var b = function() {
                            return a ? "getUTC" : "get"
                        },
                        m = function() {
                            return n[b() + "Date"]()
                        },
                        M = function() {
                            return n[b() + "Day"]()
                        },
                        g = function() {
                            return n[b() + "Month"]()
                        },
                        _ = function() {
                            return n[b() + "FullYear"]()
                        },
                        A = function() {
                            return n[b() + "Hours"]()
                        },
                        O = function() {
                            return n[b() + "Minutes"]()
                        },
                        v = function() {
                            return n[b() + "Seconds"]()
                        },
                        y = function() {
                            return n[b() + "Milliseconds"]()
                        },
                        z = function() {
                            return a ? 0 : n.getTimezoneOffset()
                        },
                        w = function() {
                            return d(n)
                        },
                        T = function() {
                            return u(n)
                        },
                        C = {
                            d: function() {
                                return m()
                            },
                            dd: function() {
                                return c(m())
                            },
                            ddd: function() {
                                return s.i18n.dayNames[M()]
                            },
                            DDD: function() {
                                return l({
                                    y: _(),
                                    m: g(),
                                    d: m(),
                                    _: b(),
                                    dayName: s.i18n.dayNames[M()],
                                    "short": !0
                                })
                            },
                            dddd: function() {
                                return s.i18n.dayNames[M() + 7]
                            },
                            DDDD: function() {
                                return l({
                                    y: _(),
                                    m: g(),
                                    d: m(),
                                    _: b(),
                                    dayName: s.i18n.dayNames[M() + 7]
                                })
                            },
                            m: function() {
                                return g() + 1
                            },
                            mm: function() {
                                return c(g() + 1)
                            },
                            mmm: function() {
                                return s.i18n.monthNames[g()]
                            },
                            mmmm: function() {
                                return s.i18n.monthNames[g() + 12]
                            },
                            yy: function() {
                                return String(_())
                                    .slice(2)
                            },
                            yyyy: function() {
                                return c(_(), 4)
                            },
                            h: function() {
                                return A() % 12 || 12
                            },
                            hh: function() {
                                return c(A() % 12 || 12)
                            },
                            H: function() {
                                return A()
                            },
                            HH: function() {
                                return c(A())
                            },
                            M: function() {
                                return O()
                            },
                            MM: function() {
                                return c(O())
                            },
                            s: function() {
                                return v()
                            },
                            ss: function() {
                                return c(v())
                            },
                            l: function() {
                                return c(y(), 3)
                            },
                            L: function() {
                                return c(Math.floor(y() / 10))
                            },
                            t: function() {
                                return A() < 12 ? s.i18n.timeNames[0] : s.i18n.timeNames[1]
                            },
                            tt: function() {
                                return A() < 12 ? s.i18n.timeNames[2] : s.i18n.timeNames[3]
                            },
                            T: function() {
                                return A() < 12 ? s.i18n.timeNames[4] : s.i18n.timeNames[5]
                            },
                            TT: function() {
                                return A() < 12 ? s.i18n.timeNames[6] : s.i18n.timeNames[7]
                            },
                            Z: function() {
                                return h ? "GMT" : a ? "UTC" : (String(n)
                                        .match(t) || [""])
                                    .pop()
                                    .replace(i, "")
                                    .replace(/GMT\+0000/g, "UTC")
                            },
                            o: function() {
                                return (z() > 0 ? "-" : "+") + c(100 * Math.floor(Math.abs(z()) / 60) + Math.abs(z()) % 60, 4)
                            },
                            p: function() {
                                return (z() > 0 ? "-" : "+") + c(Math.floor(Math.abs(z()) / 60), 2) + ":" + c(Math.floor(Math.abs(z()) % 60), 2)
                            },
                            S: function() {
                                return ["th", "st", "nd", "rd"][m() % 10 > 3 ? 0 : (m() % 100 - m() % 10 != 10) * m() % 10]
                            },
                            W: function() {
                                return w()
                            },
                            WW: function() {
                                return c(w())
                            },
                            N: function() {
                                return T()
                            }
                        };
                    return o.replace(e, function(e) {
                        return e in C ? C[e]() : e.slice(1, e.length - 1)
                    })
                }
            }();
        s.masks = {
            "default": "ddd mmm dd yyyy HH:MM:ss",
            shortDate: "m/d/yy",
            paddedShortDate: "mm/dd/yyyy",
            mediumDate: "mmm d, yyyy",
            longDate: "mmmm d, yyyy",
            fullDate: "dddd, mmmm d, yyyy",
            shortTime: "h:MM TT",
            mediumTime: "h:MM:ss TT",
            longTime: "h:MM:ss TT Z",
            isoDate: "yyyy-mm-dd",
            isoTime: "HH:MM:ss",
            isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
            expiresHeaderFormat: "ddd, dd mmm yyyy HH:MM:ss Z"
        }, 
        s.i18n = {
            dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"]
        };
        var c = function(e, t) {
                for (e = String(e), t = t || 2; e.length < t;) e = "0" + e;
                return e
            },
            l = function(e) {
                var t = e.y,
                    i = e.m,
                    n = e.d,
                    o = e._,
                    a = e.dayName,
                    r = e["short"],
                    s = void 0 !== r && r,
                    c = new Date,
                    l = new Date;
                l.setDate(l[o + "Date"]() - 1);
                var d = new Date;
                d.setDate(d[o + "Date"]() + 1);
                var u = function() {
                        return c[o + "Date"]()
                    },
                    p = function() {
                        return c[o + "Month"]()
                    },
                    h = function() {
                        return c[o + "FullYear"]()
                    },
                    f = function() {
                        return l[o + "Date"]()
                    },
                    b = function() {
                        return l[o + "Month"]()
                    },
                    m = function() {
                        return l[o + "FullYear"]()
                    },
                    M = function() {
                        return d[o + "Date"]()
                    },
                    g = function() {
                        return d[o + "Month"]()
                    },
                    _ = function() {
                        return d[o + "FullYear"]()
                    };
                return h() === t && p() === i && u() === n ? s ? "Tdy" : "Today" : m() === t && b() === i && f() === n ? s ? "Ysd" : "Yesterday" : _() === t && g() === i && M() === n ? s ? "Tmw" : "Tomorrow" : a
            },
            d = function(e) {
                var t = new Date(e.getFullYear(), e.getMonth(), e.getDate());
                t.setDate(t.getDate() - (t.getDay() + 6) % 7 + 3);
                var i = new Date(t.getFullYear(), 0, 4);
                i.setDate(i.getDate() - (i.getDay() + 6) % 7 + 3);
                var n = t.getTimezoneOffset() - i.getTimezoneOffset();
                t.setHours(t.getHours() - n);
                var o = (t - i) / 6048e5;
                return 1 + Math.floor(o)
            },
            u = function(e) {
                var t = e.getDay();
                return 0 === t && (t = 7), t
            },
            p = function(e) {
                return null === e ? "null" : void 0 === e ? "undefined" : "object" !== n(e) ? n(e) : Array.isArray(e) ? "array" : {}.toString.call(e)
                    .slice(8, -1)
                    .toLowerCase()
            };
        o = function() {
            return s
        }.call(t, i, t, e), !(void 0 !== o && (e.exports = o))
    }(void 0)
}
