function(e, t, i) {
    var n, o, a;
    ! function(i, r) {
        "use strict";
        o = [], n = r, a = "function" == typeof n ? n.apply(t, o) : n, !(void 0 !== a && (e.exports = a))
    }(this, function() {
        "use strict";

        function e(e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }

        function t(e) {
            return e.charAt(0)
                .toUpperCase() + e.substring(1)
        }

        function i(e) {
            return function() {
                return this[e]
            }
        }

        function n(e) {
            if (e)
                for (var i = 0; i < l.length; i++) void 0 !== e[l[i]] && this["set" + t(l[i])](e[l[i]])
        }
        var o = ["isConstructor", "isEval", "isNative", "isToplevel"],
            a = ["columnNumber", "lineNumber"],
            r = ["fileName", "functionName", "source"],
            s = ["args"],
            c = ["evalOrigin"],
            l = o.concat(a, r, s, c);
        n.prototype = {
            getArgs: function() {
                return this.args
            },
            setArgs: function(e) {
                if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                this.args = e
            },
            getEvalOrigin: function() {
                return this.evalOrigin
            },
            setEvalOrigin: function(e) {
                if (e instanceof n) this.evalOrigin = e;
                else {
                    if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                    this.evalOrigin = new n(e)
                }
            },
            toString: function() {
                var e = this.getFileName() || "",
                    t = this.getLineNumber() || "",
                    i = this.getColumnNumber() || "",
                    n = this.getFunctionName() || "";
                return this.getIsEval() ? e ? "[eval] (" + e + ":" + t + ":" + i + ")" : "[eval]:" + t + ":" + i : n ? n + " (" + e + ":" + t + ":" + i + ")" : e + ":" + t + ":" + i
            }
        }, n.fromString = function(e) {
            var t = e.indexOf("("),
                i = e.lastIndexOf(")"),
                o = e.substring(0, t),
                a = e.substring(t + 1, i)
                .split(","),
                r = e.substring(i + 1);
            if (0 === r.indexOf("@")) var s = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(r, ""),
                c = s[1],
                l = s[2],
                d = s[3];
            return new n({
                functionName: o,
                args: a || void 0,
                fileName: c,
                lineNumber: l || void 0,
                columnNumber: d || void 0
            })
        };
        for (var d = 0; d < o.length; d++) n.prototype["get" + t(o[d])] = i(o[d]), n.prototype["set" + t(o[d])] = function(e) {
            return function(t) {
                this[e] = Boolean(t)
            }
        }(o[d]);
        for (var u = 0; u < a.length; u++) n.prototype["get" + t(a[u])] = i(a[u]), n.prototype["set" + t(a[u])] = function(t) {
            return function(i) {
                if (!e(i)) throw new TypeError(t + " must be a Number");
                this[t] = Number(i)
            }
        }(a[u]);
        for (var p = 0; p < r.length; p++) n.prototype["get" + t(r[p])] = i(r[p]), n.prototype["set" + t(r[p])] = function(e) {
            return function(t) {
                this[e] = String(t)
            }
        }(r[p]);
        return n
    })
}
