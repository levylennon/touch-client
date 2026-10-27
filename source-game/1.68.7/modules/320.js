function(e, t, i) {
    var n, o;
    (function(i) {
        var a, r, s, c, l, d, u, p, h, f, b, m, M, g, _, A, O, v, y, z, w, T, C, I, S, E, L, N, R, q, x;
        ! function(a) {
            function r(e, t) {
                return e !== s && ("function" == typeof Object.create ? Object.defineProperty(e, "__esModule", {
                        value: !0
                    }) : e.__esModule = !0),
                    function(i, n) {
                        return e[i] = t ? t(i, n) : n
                    }
            }
            var s = "object" == typeof i ? i : "object" == typeof self ? self : "object" == typeof this ? this : {};
            n = [t], o = function(e) {
                a(r(s, r(e)))
            }.apply(t, n), !(void 0 !== o && (e.exports = o))
        }(function(e) {
            var t = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            };
            a = function(e, i) {
                function n() {
                    this.constructor = e
                }
                if ("function" != typeof i && null !== i) throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
                t(e, i), e.prototype = null === i ? Object.create(i) : (n.prototype = i.prototype, new n)
            }, r = Object.assign || function(e) {
                for (var t, i = 1, n = arguments.length; i < n; i++) {
                    t = arguments[i];
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o])
                }
                return e
            }, s = function(e, t) {
                var i = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (i[n] = e[n]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (i[n[o]] = e[n[o]]);
                return i
            }, c = function(e, t, i, n) {
                var o, a = arguments.length,
                    r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
                return a > 3 && r && Object.defineProperty(t, i, r), r
            }, l = function(e, t) {
                return function(i, n) {
                    t(i, n, e)
                }
            }, d = function(e, t, i, n, o, a) {
                function r(e) {
                    if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
                    return e
                }
                for (var s, c = n.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", d = !t && e ? n["static"] ? e : e.prototype : null, u = t || (d ? Object.getOwnPropertyDescriptor(d, n.name) : {}), p = !1, h = i.length - 1; h >= 0; h--) {
                    var f = {};
                    for (var b in n) f[b] = "access" === b ? {} : n[b];
                    for (var b in n.access) f.access[b] = n.access[b];
                    f.addInitializer = function(e) {
                        if (p) throw new TypeError("Cannot add initializers after decoration has completed");
                        a.push(r(e || null))
                    };
                    var m = (0, i[h])("accessor" === c ? {
                        get: u.get,
                        set: u.set
                    } : u[l], f);
                    if ("accessor" === c) {
                        if (void 0 === m) continue;
                        if (null === m || "object" != typeof m) throw new TypeError("Object expected");
                        (s = r(m.get)) && (u.get = s), (s = r(m.set)) && (u.set = s), (s = r(m.init)) && o.unshift(s)
                    } else(s = r(m)) && ("field" === c ? o.unshift(s) : u[l] = s)
                }
                d && Object.defineProperty(d, n.name, u), p = !0
            }, u = function(e, t, i) {
                for (var n = arguments.length > 2, o = 0; o < t.length; o++) i = n ? t[o].call(e, i) : t[o].call(e);
                return n ? i : void 0
            }, p = function(e) {
                return "symbol" == typeof e ? e : "".concat(e)
            }, h = function(e, t, i) {
                return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
                    configurable: !0,
                    value: i ? "".concat(i, " ", t) : t
                })
            }, f = function(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }, b = function(e, t, i, n) {
                function o(e) {
                    return e instanceof i ? e : new i(function(t) {
                        t(e)
                    })
                }
                return new(i || (i = Promise))(function(i, a) {
                    function r(e) {
                        try {
                            c(n.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(n["throw"](e));
                        } catch (t) {
                            a(t)
                        }
                    }

                    function c(e) {
                        e.done ? i(e.value) : o(e.value)
                            .then(r, s)
                    }
                    c((n = n.apply(e, t || []))
                        .next())
                })
            }, m = function(e, t) {
                function i(e) {
                    return function(t) {
                        return n([e, t])
                    }
                }

                function n(i) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s && (s = 0, i[0] && (c = 0)), c;) try {
                        if (o = 1, a && (r = 2 & i[0] ? a["return"] : i[0] ? a["throw"] || ((r = a["return"]) && r.call(a), 0) : a.next) && !(r = r.call(a, i[1]))
                            .done) return r;
                        switch (a = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return c.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, a = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (r = c.trys, !(r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < r[1]) {
                                    c.label = r[1], r = i;
                                    break
                                }
                                if (r && c.label < r[2]) {
                                    c.label = r[2], c.ops.push(i);
                                    break
                                }
                                r[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (n) {
                        i = [6, n], a = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
                var o, a, r, s, c = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: i(0),
                    "throw": i(1),
                    "return": i(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s
            }, M = function(e, t) {
                for (var i in e) "default" === i || Object.prototype.hasOwnProperty.call(t, i) || R(t, e, i)
            }, R = Object.create ? function(e, t, i, n) {
                void 0 === n && (n = i);
                var o = Object.getOwnPropertyDescriptor(t, i);
                o && ("get" in o ? t.__esModule : !o.writable && !o.configurable) || (o = {
                    enumerable: !0,
                    get: function() {
                        return t[i]
                    }
                }), Object.defineProperty(e, n, o)
            } : function(e, t, i, n) {
                void 0 === n && (n = i), e[n] = t[i]
            }, g = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    i = t && e[t],
                    n = 0;
                if (i) return i.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }, _ = function(e, t) {
                var i = "function" == typeof Symbol && e[Symbol.iterator];
                if (!i) return e;
                var n, o, a = i.call(e),
                    r = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = a.next())
                        .done;) r.push(n.value)
                } catch (s) {
                    o = {
                        error: s
                    }
                } finally {
                    try {
                        n && !n.done && (i = a["return"]) && i.call(a)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return r
            }, A = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(_(arguments[t]));
                return e
            }, O = function() {
                for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
                for (var n = Array(e), o = 0, t = 0; t < i; t++)
                    for (var a = arguments[t], r = 0, s = a.length; r < s; r++, o++) n[o] = a[r];
                return n
            }, v = function(e, t, i) {
                if (i || 2 === arguments.length)
                    for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
                return e.concat(n || Array.prototype.slice.call(t))
            }, y = function(e) {
                return this instanceof y ? (this.v = e, this) : new y(e)
            }, z = function(e, t, i) {
                function n(e) {
                    return function(t) {
                        return Promise.resolve(t)
                            .then(e, c)
                    }
                }

                function o(e, t) {
                    u[e] && (d[e] = function(t) {
                        return new Promise(function(i, n) {
                            p.push([e, t, i, n]) > 1 || a(e, t)
                        })
                    }, t && (d[e] = t(d[e])))
                }

                function a(e, t) {
                    try {
                        r(u[e](t))
                    } catch (i) {
                        l(p[0][3], i)
                    }
                }

                function r(e) {
                    e.value instanceof y ? Promise.resolve(e.value.v)
                        .then(s, c) : l(p[0][2], e)
                }

                function s(e) {
                    a("next", e)
                }

                function c(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), p.shift(), p.length && a(p[0][0], p[0][1])
                }
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var d, u = i.apply(e, t || []),
                    p = [];
                return d = {}, o("next"), o("throw"), o("return", n), d[Symbol.asyncIterator] = function() {
                    return this
                }, d
            }, w = function(e) {
                function t(t, o) {
                    i[t] = e[t] ? function(i) {
                        return (n = !n) ? {
                            value: y(e[t](i)),
                            done: !1
                        } : o ? o(i) : i
                    } : o
                }
                var i, n;
                return i = {}, t("next"), t("throw", function(e) {
                    throw e
                }), t("return"), i[Symbol.iterator] = function() {
                    return this
                }, i
            }, T = function(e) {
                function t(t) {
                    n[t] = e[t] && function(n) {
                        return new Promise(function(o, a) {
                            n = e[t](n), i(o, a, n.done, n.value)
                        })
                    }
                }

                function i(e, t, i, n) {
                    Promise.resolve(n)
                        .then(function(t) {
                            e({
                                value: t,
                                done: i
                            })
                        }, t)
                }
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var n, o = e[Symbol.asyncIterator];
                return o ? o.call(e) : (e = "function" == typeof g ? g(e) : e[Symbol.iterator](), n = {}, t("next"), t("throw"), t("return"), n[Symbol.asyncIterator] = function() {
                    return this
                }, n)
            }, C = function(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            };
            var i = Object.create ? function(e, t) {
                Object.defineProperty(e, "default", {
                    enumerable: !0,
                    value: t
                })
            } : function(e, t) {
                e["default"] = t
            };
            I = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && R(t, e, n);
                return i(t, e), t
            }, S = function(e) {
                return e && e.__esModule ? e : {
                    "default": e
                }
            }, E = function(e, t, i, n) {
                if ("a" === i && !n) throw new TypeError("Private accessor was defined without a getter");
                if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
                return "m" === i ? n : "a" === i ? n.call(e) : n ? n.value : t.get(e)
            }, L = function(e, t, i, n, o) {
                if ("m" === n) throw new TypeError("Private method is not writable");
                if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
                if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
                return "a" === n ? o.call(e, i) : o ? o.value = i : t.set(e, i), i
            }, N = function(e, t) {
                if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
                return "function" == typeof e ? t === e : e.has(t)
            }, q = function(e, t, i) {
                if (null !== t && void 0 !== t) {
                    if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
                    var n, o;
                    if (i) {
                        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
                        n = t[Symbol.asyncDispose]
                    }
                    if (void 0 === n) {
                        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
                        n = t[Symbol.dispose], i && (o = n)
                    }
                    if ("function" != typeof n) throw new TypeError("Object not disposable.");
                    o && (n = function() {
                        try {
                            o.call(this)
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    }), e.stack.push({
                        value: t,
                        dispose: n,
                        async: i
                    })
                } else i && e.stack.push({
                    async: !0
                });
                return t
            };
            var n = "function" == typeof SuppressedError ? SuppressedError : function(e, t, i) {
                var n = new Error(i);
                return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
            };
            x = function(e) {
                function t(t) {
                    e.error = e.hasError ? new n(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
                }

                function i() {
                    for (; e.stack.length;) {
                        var n = e.stack.pop();
                        try {
                            var o = n.dispose && n.dispose.call(n.value);
                            if (n.async) return Promise.resolve(o)
                                .then(i, function(e) {
                                    return t(e), i()
                                })
                        } catch (a) {
                            t(a)
                        }
                    }
                    if (e.hasError) throw e.error
                }
                return i()
            }, e("__extends", a), e("__assign", r), e("__rest", s), e("__decorate", c), e("__param", l), e("__esDecorate", d), e("__runInitializers", u), e("__propKey", p), e("__setFunctionName", h), e("__metadata", f), e("__awaiter", b), e("__generator", m), e("__exportStar", M), e("__createBinding", R), e("__values", g), e("__read", _), e("__spread", A), e("__spreadArrays", O), e("__spreadArray", v), e("__await", y), e("__asyncGenerator", z), e("__asyncDelegator", w), e("__asyncValues", T), e("__makeTemplateObject", C), e("__importStar", I), e("__importDefault", S), e("__classPrivateFieldGet", E), e("__classPrivateFieldSet", L), e("__classPrivateFieldIn", N), e("__addDisposableResource", q), e("__disposeResources", x)
        })
    })
    .call(t, function() {
        return this
    }())
}
