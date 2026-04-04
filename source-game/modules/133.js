function(module, exports) {
    var idbModules = {
        util: {
            cleanInterface: !1
        }
    };
    ! function() {
        "use strict";
        var e = {
            test: !0
        };
        if (Object.defineProperty) try {
            Object.defineProperty(e, "test", {
                enumerable: !1
            }), e.test && (idbModules.util.cleanInterface = !0)
        } catch (t) {}
    }(),
    function(e) {
        "use strict";

        function t(e, t, i) {
            i.target = t, "function" == typeof t[e] && t[e].apply(t, [i])
        }
        var i = function() {
            this.length = 0, this._items = [], e.util.cleanInterface && Object.defineProperty(this, "_items", {
                enumerable: !1
            })
        };
        if (i.prototype = {
                contains: function(e) {
                    return -1 !== this._items.indexOf(e)
                },
                item: function(e) {
                    return this._items[e]
                },
                indexOf: function(e) {
                    return this._items.indexOf(e)
                },
                push: function(e) {
                    this._items.push(e), this.length += 1;
                    for (var t = 0; t < this._items.length; t++) this[t] = this._items[t]
                },
                splice: function() {
                    this._items.splice.apply(this._items, arguments), this.length = this._items.length;
                    for (var e in this) e === String(parseInt(e, 10)) && delete this[e];
                    for (e = 0; e < this._items.length; e++) this[e] = this._items[e]
                }
            }, e.util.cleanInterface)
            for (var n in {
                    indexOf: !1,
                    push: !1,
                    splice: !1
                }) Object.defineProperty(i.prototype, n, {
                enumerable: !1
            });
        e.util.callback = t, e.util.StringList = i, e.util.quote = function(e) {
            return '"' + e + '"'
        }
    }(idbModules),
    function(e) {
        "use strict";

        function t() {
            (navigator.userAgent.match(/MSIE/) || navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/Edge/)) && i()
        }

        function i() {
            var e = IDBFactory.prototype.cmp,
                t = IDBDatabase.prototype.createObjectStore,
                i = IDBObjectStore.prototype.createIndex,
                a = IDBObjectStore.prototype.add,
                l = IDBObjectStore.prototype.put,
                d = IDBIndex.prototype.get,
                u = IDBIndex.prototype.getKey,
                p = IDBIndex.prototype.openCursor,
                h = IDBIndex.prototype.openKeyCursor,
                f = IDBObjectStore.prototype.get,
                b = IDBObjectStore.prototype["delete"],
                m = IDBObjectStore.prototype.openCursor,
                M = IDBObjectStore.prototype.openKeyCursor,
                g = IDBKeyRange.bound,
                _ = IDBKeyRange.upperBound,
                A = IDBKeyRange.lowerBound,
                O = IDBKeyRange.only,
                v = Object.getOwnPropertyDescriptor(IDBRequest.prototype, "result"),
                y = Object.getOwnPropertyDescriptor(IDBCursor.prototype, "primaryKey"),
                z = Object.getOwnPropertyDescriptor(IDBCursor.prototype, "key"),
                w = Object.getOwnPropertyDescriptor(IDBCursorWithValue.prototype, "value");
            IDBFactory.prototype.cmp = function(t, i) {
                var n = Array.prototype.slice.call(arguments);
                return t instanceof Array && (n[0] = c(t)), i instanceof Array && (n[1] = c(i)), e.apply(this, n)
            }, IDBDatabase.prototype.createObjectStore = function(e, i) {
                return i && i.keyPath instanceof Array && (i.keyPath = o(i.keyPath)), t.apply(this, arguments)
            }, IDBObjectStore.prototype.createIndex = function(e, t, n) {
                var a = Array.prototype.slice.call(arguments);
                return t instanceof Array && (a[1] = o(t)), i.apply(this, a)
            }, IDBObjectStore.prototype.add = function(e, t) {
                return this.__insertData(a, arguments)
            }, IDBObjectStore.prototype.put = function(e, t) {
                return this.__insertData(l, arguments)
            }, IDBObjectStore.prototype.__insertData = function(e, t) {
                t = Array.prototype.slice.call(t);
                var i = t[0],
                    o = t[1];
                if (o instanceof Array && (t[1] = c(o)), "object" == typeof i) {
                    n(this.keyPath) && r(i, this.keyPath);
                    for (var a = 0; a < this.indexNames.length; a++) {
                        var s = this.index(this.indexNames[a]);
                        if (n(s.keyPath)) try {
                            r(i, s.keyPath)
                        } catch (l) {}
                    }
                }
                return e.apply(this, t)
            }, IDBIndex.prototype.get = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), d.apply(this, t)
            }, IDBIndex.prototype.getKey = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), u.apply(this, t)
            }, IDBIndex.prototype.openCursor = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), p.apply(this, t)
            }, IDBIndex.prototype.openKeyCursor = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), h.apply(this, t)
            }, IDBObjectStore.prototype.get = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), f.apply(this, t)
            }, IDBObjectStore.prototype["delete"] = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), b.apply(this, t)
            }, IDBObjectStore.prototype.openCursor = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), m.apply(this, t)
            }, IDBObjectStore.prototype.openKeyCursor = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), M.apply(this, t)
            }, IDBKeyRange.bound = function(e, t, i, n) {
                var o = Array.prototype.slice.call(arguments);
                return e instanceof Array && (o[0] = c(e)), t instanceof Array && (o[1] = c(t)), g.apply(IDBKeyRange, o)
            }, IDBKeyRange.upperBound = function(e, t) {
                var i = Array.prototype.slice.call(arguments);
                return e instanceof Array && (i[0] = c(e)), _.apply(IDBKeyRange, i)
            }, IDBKeyRange.lowerBound = function(e, t) {
                var i = Array.prototype.slice.call(arguments);
                return e instanceof Array && (i[0] = c(e)), A.apply(IDBKeyRange, i)
            }, IDBKeyRange.only = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return e instanceof Array && (t[0] = c(e)), O.apply(IDBKeyRange, t)
            }, Object.defineProperty(IDBRequest.prototype, "result", {
                enumerable: v.enumerable,
                configurable: v.configurable,
                get: function() {
                    var e = v.get.call(this);
                    return s(e)
                }
            }), Object.defineProperty(IDBCursor.prototype, "primaryKey", {
                enumerable: y.enumerable,
                configurable: y.configurable,
                get: function() {
                    var e = y.get.call(this);
                    return s(e)
                }
            }), Object.defineProperty(IDBCursor.prototype, "key", {
                enumerable: z.enumerable,
                configurable: z.configurable,
                get: function() {
                    var e = z.get.call(this);
                    return s(e)
                }
            }), Object.defineProperty(IDBCursorWithValue.prototype, "value", {
                enumerable: w.enumerable,
                configurable: w.configurable,
                get: function() {
                    var e = w.get.call(this);
                    return s(e)
                }
            });
            try {
                IDBTransaction.VERSION_CHANGE || (IDBTransaction.VERSION_CHANGE = "versionchange")
            } catch (T) {}
        }

        function n(e) {
            return e && 0 === e.indexOf(u + ".")
        }

        function o(e) {
            for (var t = 0; t < e.length; t++) e[t] = e[t].replace(/\./g, h);
            return u + "." + e.join(f)
        }

        function a(e) {
            e = e.substr(u.length + 1), e = e.split(f);
            for (var t = 0; t < e.length; t++) e[t] = e[t].replace(p, ".");
            return e
        }

        function r(t, i) {
            var n = a(i),
                o = e.Key.getValue(t, n),
                r = c(o);
            i = i.substr(u.length + 1), t[u] = t[u] || {}, t[u][i] = r
        }

        function s(e) {
            return "string" == typeof e && n(e) ? l(e) : (e && "object" == typeof e[u] && delete e[u], e)
        }

        function c(t) {
            return e.Key.validate(t), t = e.Key.encode(t), t = u + "." + t, d(t), t
        }

        function l(t) {
            return d(t), t = t.substr(u.length + 1), t = e.Key.decode(t)
        }

        function d(t) {
            if (t.length > 889) throw e.util.createDOMException("DataError", "The encoded key is " + t.length + " characters long, but IE only allows 889 characters. Consider replacing numeric keys with strings to reduce the encoded length.")
        }
        var u = "__$$compoundKey",
            p = /\$\$/g,
            h = "$$$$",
            f = "$_$";
        e.polyfill = t
    }(idbModules),
    function(idbModules) {
        "use strict";
        var Sca = function() {
            return {
                decycle: function(object, callback) {
                    function checkForCompletion() {
                        0 === queuedObjects.length && returnCallback(derezObj)
                    }

                    function readBlobAsDataURL(e, t) {
                        var i = new FileReader;
                        i.onloadend = function(i) {
                            var n = i.target.result,
                                o = "Blob";
                            e instanceof File, updateEncodedBlob(n, t, o)
                        }, i.readAsDataURL(e)
                    }

                    function updateEncodedBlob(dataURL, path, blobtype) {
                        var encoded = queuedObjects.indexOf(path);
                        path = path.replace("$", "derezObj"), eval(path + '.$enc="' + dataURL + '"'), eval(path + '.$type="' + blobtype + '"'), queuedObjects.splice(encoded, 1), checkForCompletion()
                    }

                    function derez(e, t) {
                        var i, n, o;
                        if (!("object" != typeof e || null === e || e instanceof Boolean || e instanceof Date || e instanceof Number || e instanceof RegExp || e instanceof Blob || e instanceof String)) {
                            for (i = 0; i < objects.length; i += 1)
                                if (objects[i] === e) return {
                                    $ref: paths[i]
                                };
                            if (objects.push(e), paths.push(t), "[object Array]" === Object.prototype.toString.apply(e))
                                for (o = [], i = 0; i < e.length; i += 1) o[i] = derez(e[i], t + "[" + i + "]");
                            else {
                                o = {};
                                for (n in e) Object.prototype.hasOwnProperty.call(e, n) && (o[n] = derez(e[n], t + "[" + JSON.stringify(n) + "]"))
                            }
                            return o
                        }
                        return e instanceof Blob ? (queuedObjects.push(t), readBlobAsDataURL(e, t)) : e instanceof Boolean ? e = {
                            $type: "Boolean",
                            $enc: e.toString()
                        } : e instanceof Date ? e = {
                            $type: "Date",
                            $enc: e.getTime()
                        } : e instanceof Number ? e = {
                            $type: "Number",
                            $enc: e.toString()
                        } : e instanceof RegExp ? e = {
                            $type: "RegExp",
                            $enc: e.toString()
                        } : "number" == typeof e ? e = {
                            $type: "number",
                            $enc: e + ""
                        } : void 0 === e && (e = {
                            $type: "undefined"
                        }), e
                    }
                    var objects = [],
                        paths = [],
                        queuedObjects = [],
                        returnCallback = callback,
                        derezObj = derez(object, "$");
                    checkForCompletion()
                },
                retrocycle: function retrocycle($) {
                    function dataURLToBlob(e) {
                        var t, i, n, o = ";base64,";
                        if (e.indexOf(o) === -1) return i = e.split(","), t = i[0].split(":")[1], n = i[1], new Blob([n], {
                            type: t
                        });
                        i = e.split(o), t = i[0].split(":")[1], n = window.atob(i[1]);
                        for (var a = n.length, r = new Uint8Array(a), s = 0; s < a; ++s) r[s] = n.charCodeAt(s);
                        return new Blob([r.buffer], {
                            type: t
                        })
                    }

                    function rez(value) {
                        var i, item, name, path;
                        if (value && "object" == typeof value)
                            if ("[object Array]" === Object.prototype.toString.apply(value))
                                for (i = 0; i < value.length; i += 1) item = value[i], item && "object" == typeof item && (path = item.$ref, "string" == typeof path && px.test(path) ? value[i] = eval(path) : value[i] = rez(item));
                            else if (void 0 !== value.$type) switch (value.$type) {
                            case "Blob":
                            case "File":
                                value = dataURLToBlob(value.$enc);
                                break;
                            case "Boolean":
                                value = Boolean("true" === value.$enc);
                                break;
                            case "Date":
                                value = new Date(value.$enc);
                                break;
                            case "Number":
                                value = Number(value.$enc);
                                break;
                            case "RegExp":
                                value = eval(value.$enc);
                                break;
                            case "number":
                                value = parseFloat(value.$enc);
                                break;
                            case "undefined":
                                value = void 0
                        } else
                            for (name in value) "object" == typeof value[name] && (item = value[name], item && (path = item.$ref, "string" == typeof path && px.test(path) ? value[name] = eval(path) : value[name] = rez(item)));
                        return value
                    }
                    var px = /^\$(?:\[(?:\d+|\"(?:[^\\\"\u0000-\u001f]|\\([\\\"\/bfnrt]|u[0-9a-zA-Z]{4}))*\")\])*$/;
                    return rez($)
                },
                encode: function(e, t) {
                    function i(e) {
                        t(JSON.stringify(e))
                    }
                    this.decycle(e, i)
                },
                decode: function(e) {
                    return this.retrocycle(JSON.parse(e))
                }
            }
        }();
        idbModules.Sca = Sca
    }(idbModules),
    function(idbModules) {
        "use strict";

        function padBase32Exponent(e) {
            return e = e.toString(32), 1 === e.length ? "0" + e : e
        }

        function padBase32Mantissa(e) {
            return (e + zeros(11))
                .slice(0, 11)
        }

        function flipBase32(e) {
            for (var t = "", i = 0; i < e.length; i++) t += (31 - parseInt(e[i], 32))
                .toString(32);
            return t
        }

        function pow32(e, t) {
            var i, n, o;
            return t = parseInt(t, 32), t < 0 ? roundToPrecision(parseInt(e, 32) * Math.pow(32, t - 10)) : t < 11 ? (i = e.slice(0, t), i = parseInt(i, 32), n = e.slice(t), n = parseInt(n, 32) * Math.pow(32, t - 11), roundToPrecision(i + n)) : (o = e + zeros(t - 11), parseInt(o, 32))
        }

        function roundToPrecision(e, t) {
            return t = t || 16, parseFloat(e.toPrecision(t))
        }

        function zeros(e) {
            for (var t = ""; e--;) t += "0";
            return t
        }

        function negate(e) {
            return "-" + e
        }

        function getType(e) {
            return e instanceof Date ? "date" : e instanceof Array ? "array" : typeof e
        }

        function validate(e) {
            var t = getType(e);
            if ("array" === t)
                for (var i = 0; i < e.length; i++) validate(e[i]);
            else if (!types[t] || "string" !== t && isNaN(e)) throw idbModules.util.createDOMException("DataError", "Not a valid key")
        }

        function getValue(source, keyPath) {
            try {
                if (keyPath instanceof Array) {
                    for (var arrayValue = [], i = 0; i < keyPath.length; i++) arrayValue.push(eval("source." + keyPath[i]));
                    return arrayValue
                }
                return eval("source." + keyPath)
            } catch (e) {
                return
            }
        }

        function setValue(e, t, i) {
            for (var n = t.split("."), o = 0; o < n.length - 1; o++) {
                var a = n[o];
                e = e[a] = e[a] || {}
            }
            e[n[n.length - 1]] = i
        }

        function isMultiEntryMatch(e, t) {
            var i = collations[t.substring(0, 1)];
            return "array" === i ? t.indexOf(e) > 1 : t === e
        }

        function isKeyInRange(e, t) {
            var i = void 0 === t.lower,
                n = void 0 === t.upper,
                o = idbModules.Key.encode(e, !0);
            return void 0 !== t.lower && (t.lowerOpen && o > t.__lower && (i = !0), !t.lowerOpen && o >= t.__lower && (i = !0)), void 0 !== t.upper && (t.upperOpen && o < t.__upper && (n = !0), !t.upperOpen && o <= t.__upper && (n = !0)), i && n
        }

        function findMultiEntryMatches(e, t) {
            var i = [];
            if (e instanceof Array)
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    if (o instanceof Array) {
                        if (t.lower === t.upper) continue;
                        if (1 !== o.length) {
                            var a = findMultiEntryMatches(o, t);
                            a.length > 0 && i.push(o);
                            continue
                        }
                        o = o[0]
                    }
                    isKeyInRange(o, t) && i.push(o)
                } else isKeyInRange(e, t) && i.push(e);
            return i
        }
        var collations = ["undefined", "number", "date", "string", "array"],
            signValues = ["negativeInfinity", "bigNegative", "smallNegative", "smallPositive", "bigPositive", "positiveInfinity"],
            types = {
                undefined: {
                    encode: function(e) {
                        return collations.indexOf("undefined") + "-"
                    },
                    decode: function(e) {}
                },
                date: {
                    encode: function(e) {
                        return collations.indexOf("date") + "-" + e.toJSON()
                    },
                    decode: function(e) {
                        return new Date(e.substring(2))
                    }
                },
                number: {
                    encode: function(e) {
                        var t = Math.abs(e)
                            .toString(32),
                            i = t.indexOf(".");
                        t = i !== -1 ? t.replace(".", "") : t;
                        var n = t.search(/[^0]/);
                        t = t.slice(n);
                        var o, a = zeros(2),
                            r = zeros(11);
                        return isFinite(e) ? e < 0 ? e > -1 ? (o = signValues.indexOf("smallNegative"), a = padBase32Exponent(n), r = flipBase32(padBase32Mantissa(t))) : (o = signValues.indexOf("bigNegative"), a = flipBase32(padBase32Exponent(i !== -1 ? i : t.length)), r = flipBase32(padBase32Mantissa(t))) : e < 1 ? (o = signValues.indexOf("smallPositive"), a = flipBase32(padBase32Exponent(n)), r = padBase32Mantissa(t)) : (o = signValues.indexOf("bigPositive"), a = padBase32Exponent(i !== -1 ? i : t.length), r = padBase32Mantissa(t)) : o = signValues.indexOf(e > 0 ? "positiveInfinity" : "negativeInfinity"), collations.indexOf("number") + "-" + o + a + r
                    },
                    decode: function(e) {
                        var t = +e.substr(2, 1),
                            i = e.substr(3, 2),
                            n = e.substr(5, 11);
                        switch (signValues[t]) {
                            case "negativeInfinity":
                                return -(1 / 0);
                            case "positiveInfinity":
                                return 1 / 0;
                            case "bigPositive":
                                return pow32(n, i);
                            case "smallPositive":
                                return i = negate(flipBase32(i)), pow32(n, i);
                            case "smallNegative":
                                return i = negate(i), n = flipBase32(n), -pow32(n, i);
                            case "bigNegative":
                                return i = flipBase32(i), n = flipBase32(n), -pow32(n, i);
                            default:
                                throw new Error("Invalid number.")
                        }
                    }
                },
                string: {
                    encode: function(e, t) {
                        return t && (e = e.replace(/(.)/g, "-$1") + " "), collations.indexOf("string") + "-" + e
                    },
                    decode: function(e, t) {
                        return e = e.substring(2), t && (e = e.substr(0, e.length - 1)
                            .replace(/-(.)/g, "$1")), e
                    }
                },
                array: {
                    encode: function(e) {
                        for (var t = [], i = 0; i < e.length; i++) {
                            var n = e[i],
                                o = idbModules.Key.encode(n, !0);
                            t[i] = o
                        }
                        return t.push(collations.indexOf("undefined") + "-"), collations.indexOf("array") + "-" + JSON.stringify(t)
                    },
                    decode: function(e) {
                        var t = JSON.parse(e.substring(2));
                        t.pop();
                        for (var i = 0; i < t.length; i++) {
                            var n = t[i],
                                o = idbModules.Key.decode(n, !0);
                            t[i] = o
                        }
                        return t
                    }
                }
            };
        idbModules.Key = {
            encode: function(e, t) {
                return void 0 === e ? null : types[getType(e)].encode(e, t)
            },
            decode: function(e, t) {
                if ("string" == typeof e) return types[collations[e.substring(0, 1)]].decode(e, t)
            },
            validate: validate,
            getValue: getValue,
            setValue: setValue,
            isMultiEntryMatch: isMultiEntryMatch,
            findMultiEntryMatches: findMultiEntryMatches
        }
    }(idbModules),
    function(e) {
        "use strict";

        function t(e, t) {
            var i = new Event(e);
            return i.debug = t, Object.defineProperty(i, "target", {
                writable: !0
            }), i
        }

        function i(e, t) {
            this.type = e, this.debug = t, this.bubbles = !1, this.cancelable = !1, this.eventPhase = 0, this.timeStamp = (new Date)
                .valueOf()
        }
        var n = !1;
        try {
            var o = t("test type", "test debug"),
                a = {
                    test: "test target"
                };
            o.target = a, o instanceof Event && "test type" === o.type && "test debug" === o.debug && o.target === a && (n = !0)
        } catch (r) {}
        n ? (e.Event = Event, e.IDBVersionChangeEvent = Event, e.util.createEvent = t) : (e.Event = i, e.IDBVersionChangeEvent = i, e.util.createEvent = function(e, t) {
            return new i(e, t)
        })
    }(idbModules),
    function(e) {
        "use strict";

        function t(e, t) {
            var i = new DOMException.prototype.constructor(0, t);
            return i.name = e || "DOMException", i.message = t, i
        }

        function i(e, t) {
            e = e || "DOMError";
            var i = new DOMError(e, t);
            return i.name === e || (i.name = e), i.message === t || (i.message = t), i
        }

        function n(e, t) {
            var i = new Error(t);
            return i.name = e || "DOMException", i.message = t, i
        }
        e.util.logError = function(t, i, n) {
            if (e.DEBUG) {
                n && n.message && (n = n.message);
                var o = "function" == typeof console.error ? "error" : "log";
                console[o](t + ": " + i + ". " + (n || "")), console.trace && console.trace()
            }
        }, e.util.findError = function(e) {
            var t;
            if (e) {
                if (1 === e.length) return e[0];
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    if (n instanceof Error || n instanceof DOMException) return n;
                    n && "string" == typeof n.message && (t = n)
                }
            }
            return t
        };
        var o, a = !1,
            r = !1;
        try {
            o = t("test name", "test message"), o instanceof DOMException && "test name" === o.name && "test message" === o.message && (a = !0)
        } catch (s) {}
        try {
            o = i("test name", "test message"), o instanceof DOMError && "test name" === o.name && "test message" === o.message && (r = !0)
        } catch (s) {}
        a ? (e.DOMException = DOMException, e.util.createDOMException = function(i, n, o) {
            return e.util.logError(i, n, o), t(i, n)
        }) : (e.DOMException = Error, e.util.createDOMException = function(t, i, o) {
            return e.util.logError(t, i, o), n(t, i)
        }), r ? (e.DOMError = DOMError, e.util.createDOMError = function(t, n, o) {
            return e.util.logError(t, n, o), i(t, n)
        }) : (e.DOMError = Error, e.util.createDOMError = function(t, i, o) {
            return e.util.logError(t, i, o), n(t, i)
        })
    }(idbModules),
    function(e) {
        "use strict";

        function t() {
            this.onsuccess = this.onerror = this.result = this.error = this.source = this.transaction = null, this.readyState = "pending"
        }

        function i() {
            this.onblocked = this.onupgradeneeded = null
        }
        i.prototype = new t, i.prototype.constructor = i, e.IDBRequest = t, e.IDBOpenDBRequest = i
    }(idbModules),
    function(e, t) {
        "use strict";

        function i(i, n, o, a) {
            i !== t && e.Key.validate(i), n !== t && e.Key.validate(n), this.lower = i, this.upper = n, this.lowerOpen = !!o, this.upperOpen = !!a
        }
        i.only = function(e) {
            return new i(e, e, (!1), (!1))
        }, i.lowerBound = function(e, n) {
            return new i(e, t, n, t)
        }, i.upperBound = function(e, n) {
            return new i(t, e, t, n)
        }, i.bound = function(e, t, n, o) {
            return new i(e, t, n, o)
        }, e.IDBKeyRange = i
    }(idbModules),
    function(e, t) {
        "use strict";

        function i(i, n, o, a, r, s, c) {
            if (null === i && (i = t), i === t || i instanceof e.IDBKeyRange || (i = new e.IDBKeyRange(i, i, (!1), (!1))), o.transaction.__assertActive(), n !== t && ["next", "prev", "nextunique", "prevunique"].indexOf(n) === -1) throw new TypeError(n + "is not a valid cursor direction");
            this.source = a, this.direction = n || "next", this.key = t, this.primaryKey = t, this.__store = o, this.__range = i, this.__req = new e.IDBRequest, this.__keyColumnName = r, this.__valueColumnName = s, this.__valueDecoder = "value" === s ? e.Sca : e.Key, this.__count = c, this.__offset = -1, this.__lastKeyContinued = t, this.__multiEntryIndex = a instanceof e.IDBIndex && a.multiEntry, this.__unique = this.direction.indexOf("unique") !== -1, i !== t && (i.__lower = i.lower !== t && e.Key.encode(i.lower, this.__multiEntryIndex), i.__upper = i.upper !== t && e.Key.encode(i.upper, this.__multiEntryIndex)), this["continue"]()
        }
        i.prototype.__find = function() {
            var e = Array.prototype.slice.call(arguments);
            this.__multiEntryIndex ? this.__findMultiEntry.apply(this, e) : this.__findBasic.apply(this, e)
        }, i.prototype.__findBasic = function(i, n, o, a, r) {
            r = r || 1;
            var s = this,
                c = e.util.quote(s.__keyColumnName),
                l = ["SELECT * FROM", e.util.quote(s.__store.name)],
                d = [];
            l.push("WHERE", c, "NOT NULL"), !s.__range || s.__range.lower === t && s.__range.upper === t || (l.push("AND"), s.__range.lower !== t && (l.push(c, s.__range.lowerOpen ? ">" : ">=", "?"), d.push(s.__range.__lower)), s.__range.lower !== t && s.__range.upper !== t && l.push("AND"), s.__range.upper !== t && (l.push(c, s.__range.upperOpen ? "<" : "<=", "?"), d.push(s.__range.__upper))), "undefined" != typeof i && (s.__lastKeyContinued = i, s.__offset = 0), s.__lastKeyContinued !== t && (l.push("AND", c, ">= ?"), e.Key.validate(s.__lastKeyContinued), d.push(e.Key.encode(s.__lastKeyContinued)));
            var u = "prev" === s.direction || "prevunique" === s.direction ? "DESC" : "ASC";
            s.__count || (l.push("ORDER BY", c, u), l.push("LIMIT", r, "OFFSET", s.__offset)), l = l.join(" "), e.DEBUG && console.log(l, d), s.__prefetchedData = null, s.__prefetchedIndex = 0, n.executeSql(l, d, function(i, n) {
                s.__count ? o(t, n.rows.length, t) : n.rows.length > 1 ? (s.__prefetchedData = n.rows, s.__prefetchedIndex = 0, e.DEBUG && console.log("Preloaded " + s.__prefetchedData.length + " records for cursor"), s.__decode(n.rows.item(0), o)) : 1 === n.rows.length ? s.__decode(n.rows.item(0), o) : (e.DEBUG && console.log("Reached end of cursors"), o(t, t, t))
            }, function(t, i) {
                e.DEBUG && console.log("Could not execute Cursor.continue", l, d), a(i)
            })
        }, i.prototype.__findMultiEntry = function(i, n, o, a) {
            var r = this;
            if (r.__prefetchedData && r.__prefetchedData.length === r.__prefetchedIndex) return e.DEBUG && console.log("Reached end of multiEntry cursor"), void o(t, t, t);
            var s = e.util.quote(r.__keyColumnName),
                c = ["SELECT * FROM", e.util.quote(r.__store.name)],
                l = [];
            c.push("WHERE", s, "NOT NULL"), r.__range && r.__range.lower !== t && r.__range.upper !== t && 0 === r.__range.upper.indexOf(r.__range.lower) && (c.push("AND", s, "LIKE ?"), l.push("%" + r.__range.__lower.slice(0, -1) + "%")), "undefined" != typeof i && (r.__lastKeyContinued = i, r.__offset = 0), r.__lastKeyContinued !== t && (c.push("AND", s, ">= ?"), e.Key.validate(r.__lastKeyContinued), l.push(e.Key.encode(r.__lastKeyContinued)));
            var d = "prev" === r.direction || "prevunique" === r.direction ? "DESC" : "ASC";
            r.__count || c.push("ORDER BY key", d), c = c.join(" "), e.DEBUG && console.log(c, l), r.__prefetchedData = null, r.__prefetchedIndex = 0, n.executeSql(c, l, function(i, n) {
                if (r.__multiEntryOffset = n.rows.length, n.rows.length > 0) {
                    for (var a = [], s = 0; s < n.rows.length; s++)
                        for (var c = n.rows.item(s), l = e.Key.decode(c[r.__keyColumnName], !0), d = e.Key.findMultiEntryMatches(l, r.__range), u = 0; u < d.length; u++) {
                            var p = d[u],
                                h = {
                                    matchingKey: e.Key.encode(p, !0),
                                    key: c.key
                                };
                            h[r.__keyColumnName] = c[r.__keyColumnName], h[r.__valueColumnName] = c[r.__valueColumnName], a.push(h)
                        }
                    var f = 0 === r.direction.indexOf("prev");
                    a.sort(function(e, t) {
                        return e.matchingKey.replace("[", "z") < t.matchingKey.replace("[", "z") ? f ? 1 : -1 : e.matchingKey.replace("[", "z") > t.matchingKey.replace("[", "z") ? f ? -1 : 1 : e.key < t.key ? "prev" === r.direction ? 1 : -1 : e.key > t.key ? "prev" === r.direction ? -1 : 1 : 0
                    }), r.__prefetchedData = {
                        data: a,
                        length: a.length,
                        item: function(e) {
                            return this.data[e]
                        }
                    }, r.__prefetchedIndex = 0, r.__count ? o(t, a.length, t) : a.length > 1 ? (e.DEBUG && console.log("Preloaded " + r.__prefetchedData.length + " records for multiEntry cursor"), r.__decode(a[0], o)) : 1 === a.length ? (e.DEBUG && console.log("Reached end of multiEntry cursor"), r.__decode(a[0], o)) : (e.DEBUG && console.log("Reached end of multiEntry cursor"), o(t, t, t))
                } else e.DEBUG && console.log("Reached end of multiEntry cursor"), o(t, t, t)
            }, function(t, i) {
                e.DEBUG && console.log("Could not execute Cursor.continue", c, l), a(i)
            })
        }, i.prototype.__onsuccess = function(e) {
            var i = this;
            return function(n, o, a) {
                if (i.__count) e(o, i.__req);
                else {
                    i.key = n === t ? null : n, i.value = o === t ? null : o, i.primaryKey = a === t ? null : a;
                    var r = n === t ? null : i;
                    e(r, i.__req)
                }
            }
        }, i.prototype.__decode = function(i, n) {
            if (this.__multiEntryIndex && this.__unique) {
                if (this.__matchedKeys || (this.__matchedKeys = {}), this.__matchedKeys[i.matchingKey]) return void n(t, t, t);
                this.__matchedKeys[i.matchingKey] = !0
            }
            var o = e.Key.decode(this.__multiEntryIndex ? i.matchingKey : i[this.__keyColumnName], this.__multiEntryIndex),
                a = this.__valueDecoder.decode(i[this.__valueColumnName]),
                r = e.Key.decode(i.key);
            n(o, a, r)
        }, i.prototype["continue"] = function(t) {
            var i = e.cursorPreloadPackSize || 100,
                n = this;
            this.__store.transaction.__pushToQueue(n.__req, function(e, o, a, r) {
                return n.__offset++, n.__prefetchedData && (n.__prefetchedIndex++, n.__prefetchedIndex < n.__prefetchedData.length) ? void n.__decode(n.__prefetchedData.item(n.__prefetchedIndex), n.__onsuccess(a)) : void n.__find(t, e, n.__onsuccess(a), r, i)
            })
        }, i.prototype.advance = function(i) {
            if (i <= 0) throw e.util.createDOMException("Type Error", "Count is invalid - 0 or negative", i);
            var n = this;
            this.__store.transaction.__pushToQueue(n.__req, function(e, o, a, r) {
                n.__offset += i, n.__find(t, e, n.__onsuccess(a), r)
            })
        }, i.prototype.update = function(i) {
            var n = this;
            return n.__store.transaction.__assertWritable(), n.__store.transaction.__addToTransactionQueue(function(o, a, r, s) {
                e.Sca.encode(i, function(a) {
                    n.__find(t, o, function(t, c, l) {
                        var d = n.__store,
                            u = [a],
                            p = ["UPDATE", e.util.quote(d.name), "SET value = ?"];
                        e.Key.validate(l);
                        for (var h = 0; h < d.indexNames.length; h++) {
                            var f = d.__indexes[d.indexNames[h]],
                                b = e.Key.getValue(i, f.keyPath);
                            p.push(",", e.util.quote(f.name), "= ?"), u.push(e.Key.encode(b, f.multiEntry))
                        }
                        p.push("WHERE key = ?"), u.push(e.Key.encode(l)), e.DEBUG && console.log(p.join(" "), a, t, l), o.executeSql(p.join(" "), u, function(e, i) {
                            n.__prefetchedData = null, n.__prefetchedIndex = 0, 1 === i.rowsAffected ? r(t) : s("No rows with key found" + t)
                        }, function(e, t) {
                            s(t)
                        })
                    }, s)
                })
            })
        }, i.prototype["delete"] = function() {
            var i = this;
            return i.__store.transaction.__assertWritable(), this.__store.transaction.__addToTransactionQueue(function(n, o, a, r) {
                i.__find(t, n, function(o, s, c) {
                    var l = "DELETE FROM  " + e.util.quote(i.__store.name) + " WHERE key = ?";
                    e.DEBUG && console.log(l, o, c), e.Key.validate(c), n.executeSql(l, [e.Key.encode(c)], function(e, n) {
                        i.__prefetchedData = null, i.__prefetchedIndex = 0, 1 === n.rowsAffected ? (i.__offset--, a(t)) : r("No rows with key found" + o)
                    }, function(e, t) {
                        r(t)
                    })
                }, r)
            })
        }, e.IDBCursor = i
    }(idbModules),
    function(e, t) {
        "use strict";

        function i(e, t) {
            this.objectStore = e, this.name = t.columnName, this.keyPath = t.keyPath, this.multiEntry = t.optionalParams && t.optionalParams.multiEntry, this.unique = t.optionalParams && t.optionalParams.unique, this.__deleted = !!t.__deleted
        }
        i.__clone = function(e, t) {
            return new i(t, {
                columnName: e.name,
                keyPath: e.keyPath,
                optionalParams: {
                    multiEntry: e.multiEntry,
                    unique: e.unique
                }
            })
        }, i.__createIndex = function(t, n) {
            var o = !!t.__indexes[n.name] && t.__indexes[n.name].__deleted;
            t.__indexes[n.name] = n, t.indexNames.push(n.name);
            var a = t.transaction;
            a.__addToTransactionQueue(function(a, r, s, c) {
                function l(t, i) {
                    c(e.util.createDOMException(0, 'Could not create index "' + n.name + '"', i))
                }

                function d(o) {
                    i.__updateIndexList(t, o, function() {
                        o.executeSql("SELECT * FROM " + e.util.quote(t.name), [], function(i, o) {
                            function a(r) {
                                if (r < o.rows.length) try {
                                    var c = e.Sca.decode(o.rows.item(r)
                                            .value),
                                        d = e.Key.getValue(c, n.keyPath);
                                    d = e.Key.encode(d, n.multiEntry), i.executeSql("UPDATE " + e.util.quote(t.name) + " set " + e.util.quote(n.name) + " = ? where key = ?", [d, o.rows.item(r)
                                        .key
                                    ], function(e, t) {
                                        a(r + 1)
                                    }, l)
                                } catch (u) {
                                    a(r + 1)
                                } else s(t)
                            }
                            e.DEBUG && console.log("Adding existing " + t.name + " records to the " + n.name + " index"), a(0)
                        }, l)
                    }, l)
                }
                if (o) d(a);
                else {
                    var u = ["ALTER TABLE", e.util.quote(t.name), "ADD", e.util.quote(n.name), "BLOB"].join(" ");
                    e.DEBUG && console.log(u), a.executeSql(u, [], d, l)
                }
            })
        }, i.__deleteIndex = function(t, n) {
            t.__indexes[n.name].__deleted = !0, t.indexNames.splice(t.indexNames.indexOf(n.name), 1);
            var o = t.transaction;
            o.__addToTransactionQueue(function(o, a, r, s) {
                function c(t, i) {
                    s(e.util.createDOMException(0, 'Could not delete index "' + n.name + '"', i))
                }
                i.__updateIndexList(t, o, r, c)
            })
        }, i.__updateIndexList = function(t, i, n, o) {
            for (var a = {}, r = 0; r < t.indexNames.length; r++) {
                var s = t.__indexes[t.indexNames[r]];
                a[s.name] = {
                    columnName: s.name,
                    keyPath: s.keyPath,
                    optionalParams: {
                        unique: s.unique,
                        multiEntry: s.multiEntry
                    },
                    deleted: !!s.deleted
                }
            }
            e.DEBUG && console.log("Updating the index list for " + t.name, a), i.executeSql("UPDATE __sys__ set indexList = ? where name = ?", [JSON.stringify(a), t.name], function() {
                n(t)
            }, o)
        }, i.prototype.__fetchIndexData = function(i, n) {
            var o, a, r = this;
            return 1 === arguments.length ? (n = i, o = !1) : (e.Key.validate(i), a = e.Key.encode(i, r.multiEntry), o = !0), r.objectStore.transaction.__addToTransactionQueue(function(i, s, c, l) {
                var d = ["SELECT * FROM", e.util.quote(r.objectStore.name), "WHERE", e.util.quote(r.name), "NOT NULL"],
                    u = [];
                o && (r.multiEntry ? (d.push("AND", e.util.quote(r.name), "LIKE ?"), u.push("%" + a + "%")) : (d.push("AND", e.util.quote(r.name), "= ?"), u.push(a))), e.DEBUG && console.log("Trying to fetch data for Index", d.join(" "), u), i.executeSql(d.join(" "), u, function(i, s) {
                    var l = 0,
                        d = null;
                    if (r.multiEntry)
                        for (var u = 0; u < s.rows.length; u++) {
                            var p = s.rows.item(u),
                                h = e.Key.decode(p[r.name]);
                            o && e.Key.isMultiEntryMatch(a, p[r.name]) ? (l++, d = d || p) : o || h === t || (l += h instanceof Array ? h.length : 1, d = d || p)
                        } else l = s.rows.length, d = l && s.rows.item(0);
                    c("count" === n ? l : 0 === l ? t : "key" === n ? e.Key.decode(d.key) : e.Sca.decode(d.value))
                }, l)
            })
        }, i.prototype.openCursor = function(t, i) {
            return new e.IDBCursor(t, i, this.objectStore, this, this.name, "value")
                .__req
        }, i.prototype.openKeyCursor = function(t, i) {
            return new e.IDBCursor(t, i, this.objectStore, this, this.name, "key")
                .__req
        }, i.prototype.get = function(e) {
            if (0 === arguments.length) throw new TypeError("No key was specified");
            return this.__fetchIndexData(e, "value")
        }, i.prototype.getKey = function(e) {
            if (0 === arguments.length) throw new TypeError("No key was specified");
            return this.__fetchIndexData(e, "key")
        }, i.prototype.count = function(i) {
            return i === t ? this.__fetchIndexData("count") : i instanceof e.IDBKeyRange ? new e.IDBCursor(i, "next", this.objectStore, this, this.name, "value", (!0))
                .__req : this.__fetchIndexData(i, "count")
        }, e.IDBIndex = i
    }(idbModules),
    function(e) {
        "use strict";

        function t(t, i) {
            this.name = t.name, this.keyPath = JSON.parse(t.keyPath), this.transaction = i, this.autoIncrement = "string" == typeof t.autoInc ? "true" === t.autoInc : !!t.autoInc, this.__indexes = {}, this.indexNames = new e.util.StringList;
            var n = JSON.parse(t.indexList);
            for (var o in n)
                if (n.hasOwnProperty(o)) {
                    var a = new e.IDBIndex(this, n[o]);
                    this.__indexes[a.name] = a, a.__deleted || this.indexNames.push(a.name)
                }
        }
        t.__clone = function(e, i) {
            var n = new t({
                name: e.name,
                keyPath: JSON.stringify(e.keyPath),
                autoInc: JSON.stringify(e.autoIncrement),
                indexList: "{}"
            }, i);
            return n.__indexes = e.__indexes, n.indexNames = e.indexNames, n
        }, t.__createObjectStore = function(t, i) {
            t.__objectStores[i.name] = i, t.objectStoreNames.push(i.name);
            var n = t.__versionTransaction;
            e.IDBTransaction.__assertVersionChange(n), n.__addToTransactionQueue(function(t, n, o, a) {
                function r(t, n) {
                    throw e.util.createDOMException(0, 'Could not create object store "' + i.name + '"', n)
                }
                var s = ["CREATE TABLE", e.util.quote(i.name), "(key BLOB", i.autoIncrement ? "UNIQUE, inc INTEGER PRIMARY KEY AUTOINCREMENT" : "PRIMARY KEY", ", value BLOB)"].join(" ");
                e.DEBUG && console.log(s), t.executeSql(s, [], function(e, t) {
                    e.executeSql("INSERT INTO __sys__ VALUES (?,?,?,?)", [i.name, JSON.stringify(i.keyPath), i.autoIncrement, "{}"], function() {
                        o(i)
                    }, r)
                }, r)
            })
        }, t.__deleteObjectStore = function(t, i) {
            t.__objectStores[i.name] = void 0, t.objectStoreNames.splice(t.objectStoreNames.indexOf(i.name), 1);
            var n = t.__versionTransaction;
            e.IDBTransaction.__assertVersionChange(n), n.__addToTransactionQueue(function(t, n, o, a) {
                function r(t, i) {
                    a(e.util.createDOMException(0, "Could not delete ObjectStore", i))
                }
                t.executeSql("SELECT * FROM __sys__ where name = ?", [i.name], function(t, n) {
                    n.rows.length > 0 && t.executeSql("DROP TABLE " + e.util.quote(i.name), [], function() {
                        t.executeSql("DELETE FROM __sys__ WHERE name = ?", [i.name], function() {
                            o()
                        }, r)
                    }, r)
                })
            })
        }, t.prototype.__validateKey = function(t, i) {
            if (this.keyPath) {
                if ("undefined" != typeof i) throw e.util.createDOMException("DataError", "The object store uses in-line keys and the key parameter was provided", this);
                if (!t || "object" != typeof t) throw e.util.createDOMException("DataError", "KeyPath was specified, but value was not an object");
                if (i = e.Key.getValue(t, this.keyPath), void 0 === i) {
                    if (this.autoIncrement) return;
                    throw e.util.createDOMException("DataError", "Could not eval key from keyPath")
                }
            } else if ("undefined" == typeof i) {
                if (this.autoIncrement) return;
                throw e.util.createDOMException("DataError", "The object store uses out-of-line keys and has no key generator and the key parameter was not provided. ", this)
            }
            e.Key.validate(i)
        }, t.prototype.__deriveKey = function(t, i, n, o, a) {
            function r(i) {
                t.executeSql("SELECT * FROM sqlite_sequence where name like ?", [s.name], function(e, t) {
                    i(1 !== t.rows.length ? 1 : t.rows.item(0)
                        .seq + 1)
                }, function(t, i) {
                    a(e.util.createDOMException("DataError", "Could not get the auto increment value for key", i))
                })
            }
            var s = this;
            if (s.keyPath) {
                var c = e.Key.getValue(i, s.keyPath);
                void 0 === c && s.autoIncrement ? r(function(t) {
                    try {
                        e.Key.setValue(i, s.keyPath, t), o(t)
                    } catch (n) {
                        a(e.util.createDOMException("DataError", "Could not assign a generated value to the keyPath", n))
                    }
                }) : o(c)
            } else "undefined" == typeof n && s.autoIncrement ? r(o) : o(n)
        }, t.prototype.__insertData = function(t, i, n, o, a, r) {
            try {
                var s = {};
                "undefined" != typeof o && (e.Key.validate(o), s.key = e.Key.encode(o));
                for (var c = 0; c < this.indexNames.length; c++) {
                    var l = this.__indexes[this.indexNames[c]];
                    s[l.name] = e.Key.encode(e.Key.getValue(n, l.keyPath), l.multiEntry)
                }
                var d = ["INSERT INTO ", e.util.quote(this.name), "("],
                    u = [" VALUES ("],
                    p = [];
                for (var h in s) d.push(e.util.quote(h) + ","), u.push("?,"), p.push(s[h]);
                d.push("value )"), u.push("?)"), p.push(i);
                var f = d.join(" ") + u.join(" ");
                e.DEBUG && console.log("SQL for adding", f, p), t.executeSql(f, p, function(t, i) {
                    e.Sca.encode(o, function(t) {
                        t = e.Sca.decode(t), a(t)
                    })
                }, function(t, i) {
                    r(e.util.createDOMError("ConstraintError", i.message, i))
                })
            } catch (b) {
                r(b)
            }
        }, t.prototype.add = function(t, i) {
            var n = this;
            if (0 === arguments.length) throw new TypeError("No value was specified");
            this.__validateKey(t, i), n.transaction.__assertWritable();
            var o = n.transaction.__createRequest();
            return n.transaction.__pushToQueue(o, function(o, a, r, s) {
                n.__deriveKey(o, t, i, function(i) {
                    e.Sca.encode(t, function(e) {
                        n.__insertData(o, e, t, i, r, s)
                    })
                }, s)
            }), o
        }, t.prototype.put = function(t, i) {
            var n = this;
            if (0 === arguments.length) throw new TypeError("No value was specified");
            this.__validateKey(t, i), n.transaction.__assertWritable();
            var o = n.transaction.__createRequest();
            return n.transaction.__pushToQueue(o, function(o, a, r, s) {
                n.__deriveKey(o, t, i, function(i) {
                    e.Sca.encode(t, function(a) {
                        e.Key.validate(i);
                        var c = "DELETE FROM " + e.util.quote(n.name) + " where key = ?";
                        o.executeSql(c, [e.Key.encode(i)], function(o, c) {
                            e.DEBUG && console.log("Did the row with the", i, "exist? ", c.rowsAffected), n.__insertData(o, a, t, i, r, s)
                        }, function(e, t) {
                            s(t)
                        })
                    })
                }, s)
            }), o
        }, t.prototype.get = function(t) {
            var i = this;
            if (0 === arguments.length) throw new TypeError("No key was specified");
            e.Key.validate(t);
            var n = e.Key.encode(t);
            return i.transaction.__addToTransactionQueue(function(t, o, a, r) {
                e.DEBUG && console.log("Fetching", i.name, n), t.executeSql("SELECT * FROM " + e.util.quote(i.name) + " where key = ?", [n], function(t, i) {
                    e.DEBUG && console.log("Fetched data", i);
                    var n;
                    try {
                        if (0 === i.rows.length) return a();
                        n = e.Sca.decode(i.rows.item(0)
                            .value)
                    } catch (o) {
                        e.DEBUG && console.log(o)
                    }
                    a(n)
                }, function(e, t) {
                    r(t)
                })
            })
        }, t.prototype["delete"] = function(t) {
            var i = this;
            if (0 === arguments.length) throw new TypeError("No key was specified");
            i.transaction.__assertWritable(), e.Key.validate(t);
            var n = e.Key.encode(t);
            return i.transaction.__addToTransactionQueue(function(t, o, a, r) {
                e.DEBUG && console.log("Fetching", i.name, n), t.executeSql("DELETE FROM " + e.util.quote(i.name) + " where key = ?", [n], function(t, i) {
                    e.DEBUG && console.log("Deleted from database", i.rowsAffected), a()
                }, function(e, t) {
                    r(t)
                })
            })
        }, t.prototype.clear = function() {
            var t = this;
            return t.transaction.__assertWritable(), t.transaction.__addToTransactionQueue(function(i, n, o, a) {
                i.executeSql("DELETE FROM " + e.util.quote(t.name), [], function(t, i) {
                    e.DEBUG && console.log("Cleared all records from database", i.rowsAffected), o()
                }, function(e, t) {
                    a(t)
                })
            })
        }, t.prototype.count = function(t) {
            if (t instanceof e.IDBKeyRange) return new e.IDBCursor(t, "next", this, this, "key", "value", (!0))
                .__req;
            var i = this,
                n = !1;
            return void 0 !== t && (n = !0, e.Key.validate(t)), i.transaction.__addToTransactionQueue(function(o, a, r, s) {
                var c = "SELECT * FROM " + e.util.quote(i.name) + (n ? " WHERE key = ?" : ""),
                    l = [];
                n && l.push(e.Key.encode(t)), o.executeSql(c, l, function(e, t) {
                    r(t.rows.length)
                }, function(e, t) {
                    s(t)
                })
            })
        }, t.prototype.openCursor = function(t, i) {
            return new e.IDBCursor(t, i, this, this, "key", "value")
                .__req
        }, t.prototype.index = function(t) {
            if (0 === arguments.length) throw new TypeError("No index name was specified");
            var i = this.__indexes[t];
            if (!i) throw e.util.createDOMException("NotFoundError", 'Index "' + t + '" does not exist on ' + this.name);
            return e.IDBIndex.__clone(i, this)
        }, t.prototype.createIndex = function(t, i, n) {
            if (0 === arguments.length) throw new TypeError("No index name was specified");
            if (1 === arguments.length) throw new TypeError("No key path was specified");
            if (i instanceof Array && n && n.multiEntry) throw e.util.createDOMException("InvalidAccessError", "The keyPath argument was an array and the multiEntry option is true.");
            if (this.__indexes[t] && !this.__indexes[t].__deleted) throw e.util.createDOMException("ConstraintError", 'Index "' + t + '" already exists on ' + this.name);
            this.transaction.__assertVersionChange(), n = n || {};
            var o = {
                    columnName: t,
                    keyPath: i,
                    optionalParams: {
                        unique: !!n.unique,
                        multiEntry: !!n.multiEntry
                    }
                },
                a = new e.IDBIndex(this, o);
            return e.IDBIndex.__createIndex(this, a), a
        }, t.prototype.deleteIndex = function(t) {
            if (0 === arguments.length) throw new TypeError("No index name was specified");
            var i = this.__indexes[t];
            if (!i) throw e.util.createDOMException("NotFoundError", 'Index "' + t + '" does not exist on ' + this.name);
            this.transaction.__assertVersionChange(), e.IDBIndex.__deleteIndex(this, i)
        }, e.IDBObjectStore = t
    }(idbModules),
    function(e) {
        "use strict";

        function t(e, t, n) {
            this.__id = ++i, this.__active = !0, this.__running = !1, this.__errored = !1, this.__requests = [], this.__storeNames = t, this.mode = n, this.db = e, this.error = null, this.onabort = this.onerror = this.oncomplete = null;
            var o = this;
            setTimeout(function() {
                o.__executeRequests()
            }, 0)
        }
        var i = 0;
        t.prototype.__executeRequests = function() {
            function t(t) {
                if (e.util.logError("Error", "An error occurred in a transaction", t), !n.__errored) {
                    if (n.__errored = !0, !n.__active) throw t;
                    try {
                        n.error = t;
                        var i = e.util.createEvent("error");
                        e.util.callback("onerror", n, i), e.util.callback("onerror", n.db, i)
                    } finally {
                        n.abort()
                    }
                }
            }

            function i() {
                e.DEBUG && console.log("Transaction completed");
                var t = e.util.createEvent("complete");
                try {
                    e.util.callback("oncomplete", n, t), e.util.callback("__oncomplete", n, t)
                } catch (i) {
                    throw n.__errored = !0, i
                }
            }
            if (this.__running) return void(e.DEBUG && console.log("Looks like the request set is already running", this.mode));
            this.__running = !0;
            var n = this;
            n.db.__db.transaction(function(o) {
                function a(t, i) {
                    i && (c.req = i), c.req.readyState = "done", c.req.result = t, delete c.req.error;
                    var n = e.util.createEvent("success");
                    e.util.callback("onsuccess", c.req, n), l++, s()
                }

                function r(i, n) {
                    n = e.util.findError(arguments);
                    try {
                        c.req.readyState = "done", c.req.error = n || "DOMError", c.req.result = void 0;
                        var o = e.util.createEvent("error", n);
                        e.util.callback("onerror", c.req, o)
                    } finally {
                        t(n)
                    }
                }

                function s() {
                    if (l >= n.__requests.length) n.__requests = [], n.__active && (n.__active = !1, i());
                    else try {
                        c = n.__requests[l], c.op(o, c.args, a, r)
                    } catch (e) {
                        r(e)
                    }
                }
                n.__tx = o;
                var c = null,
                    l = 0;
                s()
            }, function(e) {
                t(e)
            })
        }, t.prototype.__createRequest = function() {
            var t = new e.IDBRequest;
            return t.source = this.db, t.transaction = this, t
        }, t.prototype.__addToTransactionQueue = function(e, t) {
            var i = this.__createRequest();
            return this.__pushToQueue(i, e, t), i
        }, t.prototype.__pushToQueue = function(e, t, i) {
            this.__assertActive(), this.__requests.push({
                op: t,
                args: i,
                req: e
            })
        }, t.prototype.__assertActive = function() {
            if (!this.__active) throw e.util.createDOMException("TransactionInactiveError", "A request was placed against a transaction which is currently not active, or which is finished")
        }, t.prototype.__assertWritable = function() {
            if (this.mode === t.READ_ONLY) throw e.util.createDOMException("ReadOnlyError", "The transaction is read only")
        }, t.prototype.__assertVersionChange = function() {
            t.__assertVersionChange(this)
        }, t.__assertVersionChange = function(i) {
            if (!i || i.mode !== t.VERSION_CHANGE) throw e.util.createDOMException("InvalidStateError", "Not a version transaction")
        }, t.prototype.objectStore = function(i) {
            if (0 === arguments.length) throw new TypeError("No object store name was specified");
            if (!this.__active) throw e.util.createDOMException("InvalidStateError", "A request was placed against a transaction which is currently not active, or which is finished");
            if (this.__storeNames.indexOf(i) === -1 && this.mode !== t.VERSION_CHANGE) throw e.util.createDOMException("NotFoundError", i + " is not participating in this transaction");
            var n = this.db.__objectStores[i];
            if (!n) throw e.util.createDOMException("NotFoundError", i + " does not exist in " + this.db.name);
            return e.IDBObjectStore.__clone(n, this)
        }, t.prototype.abort = function() {
            var t = this;
            e.DEBUG && console.log("The transaction was aborted", t), t.__active = !1;
            var i = e.util.createEvent("abort");
            setTimeout(function() {
                e.util.callback("onabort", t, i)
            }, 0)
        }, t.READ_ONLY = "readonly", t.READ_WRITE = "readwrite", t.VERSION_CHANGE = "versionchange", e.IDBTransaction = t
    }(idbModules),
    function(e) {
        "use strict";

        function t(t, i, n, o) {
            this.__db = t, this.__closed = !1, this.version = n, this.name = i, this.onabort = this.onerror = this.onversionchange = null, this.__objectStores = {}, this.objectStoreNames = new e.util.StringList;
            for (var a = 0; a < o.rows.length; a++) {
                var r = new e.IDBObjectStore(o.rows.item(a));
                this.__objectStores[r.name] = r, this.objectStoreNames.push(r.name)
            }
        }
        t.prototype.createObjectStore = function(t, i) {
            if (0 === arguments.length) throw new TypeError("No object store name was specified");
            if (this.__objectStores[t]) throw e.util.createDOMException("ConstraintError", 'Object store "' + t + '" already exists in ' + this.name);
            this.__versionTransaction.__assertVersionChange(), i = i || {};
            var n = {
                    name: t,
                    keyPath: JSON.stringify(i.keyPath || null),
                    autoInc: JSON.stringify(i.autoIncrement),
                    indexList: "{}"
                },
                o = new e.IDBObjectStore(n, this.__versionTransaction);
            return e.IDBObjectStore.__createObjectStore(this, o), o
        }, t.prototype.deleteObjectStore = function(t) {
            if (0 === arguments.length) throw new TypeError("No object store name was specified");
            var i = this.__objectStores[t];
            if (!i) throw e.util.createDOMException("NotFoundError", 'Object store "' + t + '" does not exist in ' + this.name);
            this.__versionTransaction.__assertVersionChange(), e.IDBObjectStore.__deleteObjectStore(this, i)
        }, t.prototype.close = function() {
            this.__closed = !0
        }, t.prototype.transaction = function(t, i) {
            if (this.__closed) throw e.util.createDOMException("InvalidStateError", "An attempt was made to start a new transaction on a database connection that is not open");
            if ("number" == typeof i ? (i = 1 === i ? IDBTransaction.READ_WRITE : IDBTransaction.READ_ONLY, e.DEBUG && console.log("Mode should be a string, but was specified as ", i)) : i = i || IDBTransaction.READ_ONLY, i !== IDBTransaction.READ_ONLY && i !== IDBTransaction.READ_WRITE) throw new TypeError("Invalid transaction mode: " + i);
            if (t = "string" == typeof t ? [t] : t, 0 === t.length) throw e.util.createDOMException("InvalidAccessError", "No object store names were specified");
            for (var n = 0; n < t.length; n++)
                if (!this.objectStoreNames.contains(t[n])) throw e.util.createDOMException("NotFoundError", 'The "' + t[n] + '" object store does not exist');
            var o = new e.IDBTransaction(this, t, i);
            return o
        }, e.IDBDatabase = t
    }(idbModules),
    function(e) {
        "use strict";

        function t(t, i) {
            function a(t, n) {
                n = e.util.findError(arguments), e.DEBUG && console.log("Error in sysdb transaction - when creating dbVersions", n), i(n)
            }
            n ? t() : (n = window.openDatabase("__sysdb__", 1, "System Database", o), n.transaction(function(e) {
                e.executeSql("CREATE TABLE IF NOT EXISTS dbVersions (name VARCHAR(255), version INT);", [], t, a)
            }, a))
        }

        function i() {
            this.modules = e
        }
        var n, o = 4194304;
        i.prototype.open = function(i, a) {
            function r(t, i) {
                if (!l) {
                    i = e.util.findError(arguments), l = !0;
                    var n = e.util.createEvent("error", arguments);
                    c.readyState = "done", c.error = i || "DOMError", e.util.callback("onerror", c, n)
                }
            }

            function s(t) {
                var s = window.openDatabase(i, 1, i, o);
                if (c.readyState = "done", "undefined" == typeof a && (a = t || 1), a <= 0 || t > a) {
                    var l = e.util.createDOMError("VersionError", "An attempt was made to open a database using a lower version than the existing version.", a);
                    return void r(l)
                }
                s.transaction(function(o) {
                    o.executeSql("CREATE TABLE IF NOT EXISTS __sys__ (name VARCHAR(255), keyPath VARCHAR(255), autoInc BOOLEAN, indexList BLOB)", [], function() {
                        o.executeSql("SELECT * FROM __sys__", [], function(o, l) {
                            var d = e.util.createEvent("success");
                            c.source = c.result = new e.IDBDatabase(s, i, a, l), t < a ? n.transaction(function(n) {
                                n.executeSql("UPDATE dbVersions set version = ? where name = ?", [a, i], function() {
                                    var i = e.util.createEvent("upgradeneeded");
                                    i.oldVersion = t, i.newVersion = a, c.transaction = c.result.__versionTransaction = new e.IDBTransaction(c.source, [], e.IDBTransaction.VERSION_CHANGE), c.transaction.__addToTransactionQueue(function(t, n, o) {
                                        e.util.callback("onupgradeneeded", c, i), o()
                                    }), c.transaction.__oncomplete = function() {
                                        c.transaction = null;
                                        var t = e.util.createEvent("success");
                                        e.util.callback("onsuccess", c, t)
                                    }
                                }, r)
                            }, r) : e.util.callback("onsuccess", c, d)
                        }, r)
                    }, r)
                }, r)
            }
            var c = new e.IDBOpenDBRequest,
                l = !1;
            if (0 === arguments.length) throw new TypeError("Database name is required");
            if (2 === arguments.length && (a = parseFloat(a), isNaN(a) || !isFinite(a) || a <= 0)) throw new TypeError("Invalid database version: " + a);
            return i += "", t(function() {
                n.transaction(function(e) {
                    e.executeSql("SELECT * FROM dbVersions where name = ?", [i], function(e, t) {
                        0 === t.rows.length ? e.executeSql("INSERT INTO dbVersions VALUES (?,?)", [i, a || 1], function() {
                            s(0)
                        }, r) : s(t.rows.item(0)
                            .version)
                    }, r)
                }, r)
            }, r), c
        }, i.prototype.deleteDatabase = function(i) {
            function a(t, i) {
                if (!c) {
                    i = e.util.findError(arguments), s.readyState = "done", s.error = i || "DOMError";
                    var n = e.util.createEvent("error");
                    n.debug = arguments, e.util.callback("onerror", s, n), c = !0
                }
            }

            function r() {
                n.transaction(function(t) {
                    t.executeSql("DELETE FROM dbVersions where name = ? ", [i], function() {
                        s.result = void 0;
                        var t = e.util.createEvent("success");
                        t.newVersion = null, t.oldVersion = l, e.util.callback("onsuccess", s, t)
                    }, a)
                }, a)
            }
            var s = new e.IDBOpenDBRequest,
                c = !1,
                l = null;
            if (0 === arguments.length) throw new TypeError("Database name is required");
            return i += "", t(function() {
                n.transaction(function(t) {
                    t.executeSql("SELECT * FROM dbVersions where name = ?", [i], function(t, n) {
                        if (0 === n.rows.length) {
                            s.result = void 0;
                            var c = e.util.createEvent("success");
                            return c.newVersion = null, c.oldVersion = l, void e.util.callback("onsuccess", s, c)
                        }
                        l = n.rows.item(0)
                            .version;
                        var d = window.openDatabase(i, 1, i, o);
                        d.transaction(function(t) {
                            t.executeSql("SELECT * FROM __sys__", [], function(t, i) {
                                var n = i.rows;
                                ! function o(i) {
                                    i >= n.length ? t.executeSql("DROP TABLE IF EXISTS __sys__", [], function() {
                                        r()
                                    }, a) : t.executeSql("DROP TABLE " + e.util.quote(n.item(i)
                                        .name), [], function() {
                                        o(i + 1)
                                    }, function() {
                                        o(i + 1)
                                    })
                                }(0)
                            }, function(e) {
                                r()
                            })
                        })
                    }, a)
                }, a)
            }, a), s
        }, i.prototype.cmp = function(t, i) {
            if (arguments.length < 2) throw new TypeError("You must provide two keys to be compared");
            e.Key.validate(t), e.Key.validate(i);
            var n = e.Key.encode(t),
                o = e.Key.encode(i),
                a = n > o ? 1 : n === o ? 0 : -1;
            if (e.DEBUG) {
                var r = e.Key.decode(n),
                    s = e.Key.decode(o);
                "object" == typeof t && (t = JSON.stringify(t), r = JSON.stringify(r)), "object" == typeof i && (i = JSON.stringify(i), s = JSON.stringify(s)), r !== t && console.warn(t + " was incorrectly encoded as " + r), s !== i && console.warn(i + " was incorrectly encoded as " + s)
            }
            return a
        }, e.shimIndexedDB = new i, e.IDBFactory = i
    }(idbModules),
    function(e, t) {
        "use strict";

        function i(t, i) {
            try {
                e[t] = i
            } catch (n) {}
            if (e[t] !== i && Object.defineProperty) {
                try {
                    Object.defineProperty(e, t, {
                        value: i
                    })
                } catch (n) {}
                e[t] !== i && e.console && console.warn && console.warn("Unable to shim " + t)
            }
        }
        i("shimIndexedDB", t.shimIndexedDB), e.shimIndexedDB && (e.shimIndexedDB.__useShim = function() {
            "undefined" != typeof e.openDatabase ? (i("indexedDB", t.shimIndexedDB), i("IDBFactory", t.IDBFactory), i("IDBDatabase", t.IDBDatabase), i("IDBObjectStore", t.IDBObjectStore), i("IDBIndex", t.IDBIndex), i("IDBTransaction", t.IDBTransaction), i("IDBCursor", t.IDBCursor), i("IDBKeyRange", t.IDBKeyRange), i("IDBRequest", t.IDBRequest), i("IDBOpenDBRequest", t.IDBOpenDBRequest), i("IDBVersionChangeEvent", t.IDBVersionChangeEvent)) : "object" == typeof e.indexedDB && t.polyfill()
        }, e.shimIndexedDB.__debug = function(e) {
            t.DEBUG = e
        }), "indexedDB" in e || (e.indexedDB = e.indexedDB || e.webkitIndexedDB || e.mozIndexedDB || e.oIndexedDB || e.msIndexedDB);
        var n = !1;
        if ((navigator.userAgent.match(/Android 2/) || navigator.userAgent.match(/Android 3/) || navigator.userAgent.match(/Android 4\.[0-3]/)) && (navigator.userAgent.match(/Chrome/) || (n = !0)), "undefined" != typeof e.indexedDB && e.indexedDB && !n || "undefined" == typeof e.openDatabase) {
            e.IDBDatabase = e.IDBDatabase || e.webkitIDBDatabase, e.IDBTransaction = e.IDBTransaction || e.webkitIDBTransaction, e.IDBCursor = e.IDBCursor || e.webkitIDBCursor, e.IDBKeyRange = e.IDBKeyRange || e.webkitIDBKeyRange, e.IDBTransaction || (e.IDBTransaction = {});
            try {
                e.IDBTransaction.READ_ONLY = e.IDBTransaction.READ_ONLY || "readonly", e.IDBTransaction.READ_WRITE = e.IDBTransaction.READ_WRITE || "readwrite"
            } catch (o) {}
        } else e.shimIndexedDB.__useShim()
    }(window, idbModules)
}
