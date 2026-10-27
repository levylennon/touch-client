function(e, t, i) {
    (function(e, n) {
        function o(e, i) {
            var n = {
                seen: [],
                stylize: r
            };
            return arguments.length >= 3 && (n.depth = arguments[2]), arguments.length >= 4 && (n.colors = arguments[3]), b(i) ? n.showHidden = i : i && t._extend(n, i), O(n.showHidden) && (n.showHidden = !1), O(n.depth) && (n.depth = 2), O(n.colors) && (n.colors = !1), O(n.customInspect) && (n.customInspect = !0), n.colors && (n.stylize = a), c(n, e, n.depth)
        }

        function a(e, t) {
            var i = o.styles[t];
            return i ? "[" + o.colors[i][0] + "m" + e + "[" + o.colors[i][1] + "m" : e
        }

        function r(e, t) {
            return e
        }

        function s(e) {
            var t = {};
            return e.forEach(function(e, i) {
                t[e] = !0
            }), t
        }

        function c(e, i, n) {
            if (e.customInspect && i && T(i.inspect) && i.inspect !== t.inspect && (!i.constructor || i.constructor.prototype !== i)) {
                var o = i.inspect(n, e);
                return _(o) || (o = c(e, o, n)), o
            }
            var a = l(e, i);
            if (a) return a;
            var r = Object.keys(i),
                b = s(r);
            if (e.showHidden && (r = Object.getOwnPropertyNames(i)), w(i) && (r.indexOf("message") >= 0 || r.indexOf("description") >= 0)) return d(i);
            if (0 === r.length) {
                if (T(i)) {
                    var m = i.name ? ": " + i.name : "";
                    return e.stylize("[Function" + m + "]", "special")
                }
                if (v(i)) return e.stylize(RegExp.prototype.toString.call(i), "regexp");
                if (z(i)) return e.stylize(Date.prototype.toString.call(i), "date");
                if (w(i)) return d(i)
            }
            var M = "",
                g = !1,
                A = ["{", "}"];
            if (f(i) && (g = !0, A = ["[", "]"]), T(i)) {
                var O = i.name ? ": " + i.name : "";
                M = " [Function" + O + "]"
            }
            if (v(i) && (M = " " + RegExp.prototype.toString.call(i)), z(i) && (M = " " + Date.prototype.toUTCString.call(i)), w(i) && (M = " " + d(i)), 0 === r.length && (!g || 0 == i.length)) return A[0] + M + A[1];
            if (n < 0) return v(i) ? e.stylize(RegExp.prototype.toString.call(i), "regexp") : e.stylize("[Object]", "special");
            e.seen.push(i);
            var y;
            return y = g ? u(e, i, n, b, r) : r.map(function(t) {
                return p(e, i, n, b, t, g)
            }), e.seen.pop(), h(y, M, A)
        }

        function l(e, t) {
            if (O(t)) return e.stylize("undefined", "undefined");
            if (_(t)) {
                var i = "'" + JSON.stringify(t)
                    .replace(/^"|"$/g, "")
                    .replace(/'/g, "\\'")
                    .replace(/\\"/g, '"') + "'";
                return e.stylize(i, "string")
            }
            return g(t) ? e.stylize("" + t, "number") : b(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
        }

        function d(e) {
            return "[" + Error.prototype.toString.call(e) + "]"
        }

        function u(e, t, i, n, o) {
            for (var a = [], r = 0, s = t.length; r < s; ++r) L(t, String(r)) ? a.push(p(e, t, i, n, String(r), !0)) : a.push("");
            return o.forEach(function(o) {
                o.match(/^\d+$/) || a.push(p(e, t, i, n, o, !0))
            }), a
        }

        function p(e, t, i, n, o, a) {
            var r, s, l;
            if (l = Object.getOwnPropertyDescriptor(t, o) || {
                    value: t[o]
                }, l.get ? s = l.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : l.set && (s = e.stylize("[Setter]", "special")), L(n, o) || (r = "[" + o + "]"), s || (e.seen.indexOf(l.value) < 0 ? (s = m(i) ? c(e, l.value, null) : c(e, l.value, i - 1), s.indexOf("\n") > -1 && (s = a ? s.split("\n")
                    .map(function(e) {
                        return "  " + e
                    })
                    .join("\n")
                    .substr(2) : "\n" + s.split("\n")
                    .map(function(e) {
                        return "   " + e
                    })
                    .join("\n"))) : s = e.stylize("[Circular]", "special")), O(r)) {
                if (a && o.match(/^\d+$/)) return s;
                r = JSON.stringify("" + o), r.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (r = r.substr(1, r.length - 2), r = e.stylize(r, "name")) : (r = r.replace(/'/g, "\\'")
                    .replace(/\\"/g, '"')
                    .replace(/(^"|"$)/g, "'"), r = e.stylize(r, "string"))
            }
            return r + ": " + s
        }

        function h(e, t, i) {
            var n = 0,
                o = e.reduce(function(e, t) {
                    return n++, t.indexOf("\n") >= 0 && n++, e + t.replace(/\u001b\[\d\d?m/g, "")
                        .length + 1
                }, 0);
            return o > 60 ? i[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + i[1] : i[0] + t + " " + e.join(", ") + " " + i[1]
        }

        function f(e) {
            return Array.isArray(e)
        }

        function b(e) {
            return "boolean" == typeof e
        }

        function m(e) {
            return null === e
        }

        function M(e) {
            return null == e
        }

        function g(e) {
            return "number" == typeof e
        }

        function _(e) {
            return "string" == typeof e
        }

        function A(e) {
            return "symbol" == typeof e
        }

        function O(e) {
            return void 0 === e
        }

        function v(e) {
            return y(e) && "[object RegExp]" === I(e)
        }

        function y(e) {
            return "object" == typeof e && null !== e
        }

        function z(e) {
            return y(e) && "[object Date]" === I(e)
        }

        function w(e) {
            return y(e) && ("[object Error]" === I(e) || e instanceof Error)
        }

        function T(e) {
            return "function" == typeof e
        }

        function C(e) {
            return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
        }

        function I(e) {
            return Object.prototype.toString.call(e)
        }

        function S(e) {
            return e < 10 ? "0" + e.toString(10) : e.toString(10)
        }

        function E() {
            var e = new Date,
                t = [S(e.getHours()), S(e.getMinutes()), S(e.getSeconds())].join(":");
            return [e.getDate(), x[e.getMonth()], t].join(" ")
        }

        function L(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        var N = /%[sdj%]/g;
        t.format = function(e) {
            if (!_(e)) {
                for (var t = [], i = 0; i < arguments.length; i++) t.push(o(arguments[i]));
                return t.join(" ")
            }
            for (var i = 1, n = arguments, a = n.length, r = String(e)
                    .replace(N, function(e) {
                        if ("%%" === e) return "%";
                        if (i >= a) return e;
                        switch (e) {
                            case "%s":
                                return String(n[i++]);
                            case "%d":
                                return Number(n[i++]);
                            case "%j":
                                try {
                                    return JSON.stringify(n[i++])
                                } catch (t) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), s = n[i]; i < a; s = n[++i]) r += m(s) || !y(s) ? " " + s : " " + o(s);
            return r
        }, t.deprecate = function(i, o) {
            function a() {
                if (!r) {
                    if (n.throwDeprecation) throw new Error(o);
                    n.traceDeprecation ? console.trace(o) : console.error(o), r = !0
                }
                return i.apply(this, arguments)
            }
            if (O(e.process)) return function() {
                return t.deprecate(i, o)
                    .apply(this, arguments)
            };
            if (n.noDeprecation === !0) return i;
            var r = !1;
            return a
        };
        var R, q = {};
        t.debuglog = function(e) {
            if (O(R) && (R = n.env.NODE_DEBUG || ""), e = e.toUpperCase(), !q[e])
                if (new RegExp("\\b" + e + "\\b", "i")
                    .test(R)) {
                    var i = n.pid;
                    q[e] = function() {
                        var n = t.format.apply(t, arguments);
                        console.error("%s %d: %s", e, i, n)
                    }
                } else q[e] = function() {};
            return q[e]
        }, t.inspect = o, o.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39]
        }, o.styles = {
            special: "cyan",
            number: "yellow",
            "boolean": "yellow",
            undefined: "grey",
            "null": "bold",
            string: "green",
            date: "magenta",
            regexp: "red"
        }, t.isArray = f, t.isBoolean = b, t.isNull = m, t.isNullOrUndefined = M, t.isNumber = g, t.isString = _, t.isSymbol = A, t.isUndefined = O, t.isRegExp = v, t.isObject = y, t.isDate = z, t.isError = w, t.isFunction = T, t.isPrimitive = C, t.isBuffer = i(57);
        var x = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        t.log = function() {
            console.log("%s - %s", E(), t.format.apply(t, arguments))
        }, t.inherits = i(58), t._extend = function(e, t) {
            if (!t || !y(t)) return e;
            for (var i = Object.keys(t), n = i.length; n--;) e[i[n]] = t[i[n]];
            return e
        }
    })
    .call(t, function() {
        return this
    }(), i(11))
}
