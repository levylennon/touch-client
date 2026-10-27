function(e, t, i) {
    var n, o, a;
    ! function(r, s) {
        "use strict";
        o = [i(41)], n = s, a = "function" == typeof n ? n.apply(t, o) : n, !(void 0 !== a && (e.exports = a))
    }(this, function(e) {
        "use strict";
        var t = /(^|@)\S+:\d+/,
            i = /^\s*at .*(\S+:\d+|\(native\))/m,
            n = /^(eval@)?(\[native code])?$/;
        return {
            parse: function(e) {
                if ("undefined" != typeof e.stacktrace || "undefined" != typeof e["opera#sourceloc"]) return this.parseOpera(e);
                if (e.stack && e.stack.match(i)) return this.parseV8OrIE(e);
                if (e.stack) return this.parseFFOrSafari(e);
                throw new Error("Cannot parse given Error object")
            },
            extractLocation: function(e) {
                if (e.indexOf(":") === -1) return [e];
                var t = /(.+?)(?::(\d+))?(?::(\d+))?$/,
                    i = t.exec(e.replace(/[()]/g, ""));
                return [i[1], i[2] || void 0, i[3] || void 0]
            },
            parseV8OrIE: function(t) {
                var n = t.stack.split("\n")
                    .filter(function(e) {
                        return !!e.match(i)
                    }, this);
                return n.map(function(t) {
                    t.indexOf("(eval ") > -1 && (t = t.replace(/eval code/g, "eval")
                        .replace(/(\(eval at [^()]*)|(\),.*$)/g, ""));
                    var i = t.replace(/^\s+/, "")
                        .replace(/\(eval code/g, "("),
                        n = i.match(/ (\((.+):(\d+):(\d+)\)$)/);
                    i = n ? i.replace(n[0], "") : i;
                    var o = i.split(/\s+/)
                        .slice(1),
                        a = this.extractLocation(n ? n[1] : o.pop()),
                        r = o.join(" ") || void 0,
                        s = ["eval", "<anonymous>"].indexOf(a[0]) > -1 ? void 0 : a[0];
                    return new e({
                        functionName: r,
                        fileName: s,
                        lineNumber: a[1],
                        columnNumber: a[2],
                        source: t
                    })
                }, this)
            },
            parseFFOrSafari: function(t) {
                var i = t.stack.split("\n")
                    .filter(function(e) {
                        return !e.match(n)
                    }, this);
                return i.map(function(t) {
                    if (t.indexOf(" > eval") > -1 && (t = t.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), t.indexOf("@") === -1 && t.indexOf(":") === -1) return new e({
                        functionName: t
                    });
                    var i = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                        n = t.match(i),
                        o = n && n[1] ? n[1] : void 0,
                        a = this.extractLocation(t.replace(i, ""));
                    return new e({
                        functionName: o,
                        fileName: a[0],
                        lineNumber: a[1],
                        columnNumber: a[2],
                        source: t
                    })
                }, this)
            },
            parseOpera: function(e) {
                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n")
                    .length > e.stacktrace.split("\n")
                    .length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
            },
            parseOpera9: function(t) {
                for (var i = /Line (\d+).*script (?:in )?(\S+)/i, n = t.message.split("\n"), o = [], a = 2, r = n.length; a < r; a += 2) {
                    var s = i.exec(n[a]);
                    s && o.push(new e({
                        fileName: s[2],
                        lineNumber: s[1],
                        source: n[a]
                    }))
                }
                return o
            },
            parseOpera10: function(t) {
                for (var i = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, n = t.stacktrace.split("\n"), o = [], a = 0, r = n.length; a < r; a += 2) {
                    var s = i.exec(n[a]);
                    s && o.push(new e({
                        functionName: s[3] || void 0,
                        fileName: s[2],
                        lineNumber: s[1],
                        source: n[a]
                    }))
                }
                return o
            },
            parseOpera11: function(i) {
                var n = i.stack.split("\n")
                    .filter(function(e) {
                        return !!e.match(t) && !e.match(/^Error created at/)
                    }, this);
                return n.map(function(t) {
                    var i, n = t.split("@"),
                        o = this.extractLocation(n.pop()),
                        a = n.shift() || "",
                        r = a.replace(/<anonymous function(: (\w+))?>/, "$2")
                        .replace(/\([^)]*\)/g, "") || void 0;
                    a.match(/\(([^)]*)\)/) && (i = a.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                    var s = void 0 === i || "[arguments not available]" === i ? void 0 : i.split(",");
                    return new e({
                        functionName: r,
                        args: s,
                        fileName: o[0],
                        lineNumber: o[1],
                        columnNumber: o[2],
                        source: t
                    })
                }, this)
            }
        }
    })
}
