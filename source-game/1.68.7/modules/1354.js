function(e, t, i) {
    (function(e) {
        function i(e, t) {
            for (var i = 0, n = e.length - 1; n >= 0; n--) {
                var o = e[n];
                "." === o ? e.splice(n, 1) : ".." === o ? (e.splice(n, 1), i++) : i && (e.splice(n, 1), i--)
            }
            if (t)
                for (; i--; i) e.unshift("..");
            return e
        }

        function n(e, t) {
            if (e.filter) return e.filter(t);
            for (var i = [], n = 0; n < e.length; n++) t(e[n], n, e) && i.push(e[n]);
            return i
        }
        var o = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            a = function(e) {
                return o.exec(e)
                    .slice(1)
            };
        t.resolve = function() {
            for (var t = "", o = !1, a = arguments.length - 1; a >= -1 && !o; a--) {
                var r = a >= 0 ? arguments[a] : e.cwd();
                if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
                r && (t = r + "/" + t, o = "/" === r.charAt(0))
            }
            return t = i(n(t.split("/"), function(e) {
                    return !!e
                }), !o)
                .join("/"), (o ? "/" : "") + t || "."
        }, t.normalize = function(e) {
            var o = t.isAbsolute(e),
                a = "/" === r(e, -1);
            return e = i(n(e.split("/"), function(e) {
                    return !!e
                }), !o)
                .join("/"), e || o || (e = "."), e && a && (e += "/"), (o ? "/" : "") + e
        }, t.isAbsolute = function(e) {
            return "/" === e.charAt(0)
        }, t.join = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(n(e, function(e, t) {
                    if ("string" != typeof e) throw new TypeError("Arguments to path.join must be strings");
                    return e
                })
                .join("/"))
        }, t.relative = function(e, i) {
            function n(e) {
                for (var t = 0; t < e.length && "" === e[t]; t++);
                for (var i = e.length - 1; i >= 0 && "" === e[i]; i--);
                return t > i ? [] : e.slice(t, i - t + 1)
            }
            e = t.resolve(e)
                .substr(1), i = t.resolve(i)
                .substr(1);
            for (var o = n(e.split("/")), a = n(i.split("/")), r = Math.min(o.length, a.length), s = r, c = 0; c < r; c++)
                if (o[c] !== a[c]) {
                    s = c;
                    break
                } for (var l = [], c = s; c < o.length; c++) l.push("..");
            return l = l.concat(a.slice(s)), l.join("/")
        }, t.sep = "/", t.delimiter = ":", t.dirname = function(e) {
            var t = a(e),
                i = t[0],
                n = t[1];
            return i || n ? (n && (n = n.substr(0, n.length - 1)), i + n) : "."
        }, t.basename = function(e, t) {
            var i = a(e)[2];
            return t && i.substr(-1 * t.length) === t && (i = i.substr(0, i.length - t.length)), i
        }, t.extname = function(e) {
            return a(e)[3]
        };
        var r = "b" === "ab".substr(-1) ? function(e, t, i) {
            return e.substr(t, i)
        } : function(e, t, i) {
            return t < 0 && (t = e.length + t), e.substr(t, i)
        }
    })
    .call(t, i(11))
}
