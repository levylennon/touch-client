function(e, t, i) {
    function n(e) {
        return "string" == typeof e ? e : e.toString()
    }

    function o(e) {
        if ("number" == typeof e) return isNaN(e) ? null : e;
        var t = parseInt(e, 10);
        return isNaN(t) ? null : t
    }

    function a(e) {
        return f.hasStringId(e) ? n : o
    }

    function r(e) {
        try {
            for (var t = 1; t < arguments.length; t++) t > 1 && (e += ", "), e += s(arguments[t]);
            for (var i in O)
                if (e.indexOf(i) !== -1) {
                    var n = ++O[i];
                    if (n % v !== 1) return e;
                    e += " (x" + n + ")"
                } console.error(e)
        } catch (o) {
            console.error('Failed logging createError for "' + e + '": ' + o)
        }
        return e
    }

    function s(e) {
        switch (typeof e) {
            case "string":
                return e;
            case "object":
                if (null === e) return "null";
                if (void 0 !== e.name || void 0 !== e.code || void 0 !== e.message) {
                    var t = e.name ? e.name : e.code;
                    return t + (e.message ? "(" + e.message + ")" : "")
                }
                var i = "{ ";
                for (var n in e) i += n + ":" + e[n] + " ";
                return i + "}";
            default:
                return String(e)
        }
    }

    function c(e, t) {
        function i(i) {
            var n = f.getKey(i),
                o = e.createObjectStore(i, {
                    keyPath: n
                }),
                a = o.transaction;
            a.oncomplete = function() {
                if (console.info("Object store creation completed for: " + i), !A) return _++, _ === g ? (h = e, A = !0, t()) : void 0
            }, a.onabort = function() {
                A || (A = !0, t(r("Object store creation aborted for " + i + ": ", a.error)))
            }, a.onerror = function() {
                A || (A = !0, t(r("Object store creation failed for " + i + ": ", a.error)))
            }
        }
        _ = 0;
        var n = f.typeNames;
        g = n.length + (f.cacheCompletion ? 1 : 0);
        for (var o = 0, a = n.length; o < a; ++o) i(n[o]);
        f.cacheCompletion && i(f.cacheCompletion)
    }

    function l(e, t, i) {
        function n(t) {
            if (void 0 === t || null === t) return void console.error(new Error("IndexedDB id to get in object store: " + e + ", is invalid: " + t));
            if (t = u(t), null === t) return void console.error(new Error("IndexedDB id to get in object store: " + e + ", is invalid: " + t));
            var i = d.get(t);
            i.onsuccess = function(e) {
                e.target.result ? o[t] = e.target.result : s.push(t)
            }, i.onerror = function() {
                r("Requesting id: " + t + ", in store: " + e + ", failed: ", i.error), s.push(t)
            }
        }
        var o = {},
            s = [];
        if (!t.length) return i(null, o, s);
        var c;
        try {
            c = h.transaction(e, m.READ_ONLY)
        } catch (l) {
            return i(l)
        }
        for (var d = c.objectStore(e), u = a(e), p = 0, f = t.length; p < f; ++p) n(t[p]);
        c.oncomplete = function() {
            i(null, o, s)
        }, c.onabort = function() {
            i(r("IndexedDB request transaction aborted with error: ", c.error))
        }, c.onerror = function() {
            i(r("IndexedDB request transaction failed with error: ", c.error))
        }
    }

    function d(e, t, i) {
        function n(t) {
            var i = "";
            if (!t) return i = "IndexedDB object to put in object store: " + e + ", is invalid (missing)", void console.error(new Error(i));
            if (t[u] = p(t[u]), null === t[u]) return i = "IndexedDB object to put in object store: " + e, i += ", is invalid (null): " + Object.keys(t)
                .join(",") + " and key: " + u, void console.error(new Error(i));
            var n = d.put(t);
            n.onsuccess = function() {}, n.onerror = function() {
                r("IndexedDB put object in store: " + e + ", failed: ", n.error)
            }
        }
        var o, s = !0;
        for (o in t) {
            s = !1;
            break
        }
        if (s) return i();
        var c;
        try {
            c = h.transaction(e, m.READ_WRITE)
        } catch (l) {
            return i(l)
        }
        var d = c.objectStore(e),
            u = f.getKey(e),
            p = a(e);
        for (o in t) n(t[o]);
        c.oncomplete = function() {
            i()
        }, c.onabort = function() {
            i(r("IndexedDB put transaction aborted with error: ", c.error))
        }, c.onerror = function() {
            i(r("IndexedDB put transaction failed with error: ", c.error))
        }
    }

    function u(e, t) {
        var i, n = {};
        try {
            i = h.transaction(e, m.READ_ONLY)
        } catch (o) {
            return t(o)
        }
        var a = i.objectStore(e),
            s = f.getKey(e),
            c = a.openCursor();
        c.onsuccess = function(e) {
            var t = e.target.result;
            if (t) {
                var i = t.value;
                i[M] || (n[i[s]] = i), t["continue"]()
            }
        }, c.onerror = function() {
            r("IndexedDB opening cursor on object store: " + e + " failed: ", c.error)
        }, i.oncomplete = function() {
            t(null, n)
        }, i.onabort = function() {
            t(r("IndexedDB requestAll transaction aborted with error: ", i.error))
        }, i.onerror = function() {
            t(r("IndexedDB requestAll transaction failed with error: ", i.error))
        }
    }

    function p(e, t, i) {
        return h ? h.objectStoreNames.contains(e) ? void d(e, t, i) : void i(new Error("IndexedDB put failed: object store: " + e + " not found in disk cache")) : void i(new Error("IndexedDB put failed: disk cache not yet initialized"))
    }
    i(133);
    var h, f, b = window.indexedDB || window.webkitIndexedDB || window.shimIndexedDB,
        m = window.IDBTransaction || window.webkitIDBTransaction;
    void 0 === m.READ_ONLY && (m.READ_ONLY = "readonly"), void 0 === m.READ_WRITE && (m.READ_WRITE = "readwrite");
    var M = t.DUMMY_RECORD_FLAG = "MISSING_ID";
    t.newDummyRecord = function(e, t) {
        var i = {};
        return i[M] = !0, i[e] = t, i
    };
    var g, _, A, O = {
            QuotaExceededError: 0
        },
        v = 100;
    t.initialize = function(e, t, i) {
        if (!b) return i(r("IDB_NOT_SUPPORTED"));
        h && (h.close(), h = null), f = t, A = !1;
        var n = b.open(e);
        n.onupgradeneeded = function(e) {
            console.info("IDB request.onupgradeneeded");
            var t = e.target.result;
            t.onerror = function() {
                r("IndexedDB post-upgrade request error: ", t.error)
            }, c(t, i)
        }, n.onsuccess = function() {
            console.info("open request.onsuccess; create count: " + _ + "/" + g), g > 0 && 0 === _ || A || (h = n.result, h.onerror = function(e) {
                var t = e || {},
                    i = t.target || {};
                r("IndexedDB database error: ", h && h.error, "target error code:", i.errorCode)
            }, A = !0, i())
        }, n.onerror = function() {
            A || i(r("IndexedDB open error: ", n.error))
        }
    }, t["delete"] = function(e, t) {
        console.info("IDB.delete called for " + e + " current: " + (h && h.name)), h && h.name === e && (h.close(), h = null);
        var i = b.deleteDatabase(e);
        i.onsuccess = function() {
            return console.info("IDB successfully deleted, name: " + e), t()
        }, i.onerror = function() {
            return t(r("Could not delete database: ", i.error))
        }, i.onblocked = function() {
            return t(r("Delete database operation was blocked, name: " + e))
        }
    }, t.request = function(e, t, i) {
        return h ? h.objectStoreNames.contains(e) ? void l(e, t, i) : void i(new Error("IndexedDB request failed: object store: " + e + " not found in disk cache")) : void i(new Error("IndexedDB request failed: disk cache not yet initialized"))
    }, t.put = p, t.requestAll = function(e, t) {
        if (!h) return void t(new Error("IndexedDB request failed: disk cache not yet initialized"));
        var i = f.cacheCompletion;
        return i && h.objectStoreNames.contains(i) ? void l(i, [e], function(i, n) {
            if (i) return t(i);
            var o = n[e];
            return o ? h.objectStoreNames.contains(e) ? void u(e, t) : void t(new Error("IndexedDB request all failed: object store: " + e + " not found in disk cache")) : t(null, null)
        }) : void t(new Error("IndexedDB isCacheComplete failed: cache completion not initialized"))
    }, t.putAll = function(e, t, i) {
        p(e, t, function(t) {
            if (t) return i(t);
            var n = f.cacheCompletion;
            if (!n || !h.objectStoreNames.contains(n)) return void i(new Error("IndexedDB putAll operation called but cache completion is not set up"));
            var o = {
                completedType: {
                    id: e
                }
            };
            p(n, o, function(e) {
                return e ? i(e) : i()
            })
        })
    }
}
