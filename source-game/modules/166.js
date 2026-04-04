function(e, t, i) {
    
    function n() {
        this.protocol = null,
        this.slashes = null,
        this.auth = null,
        this.host = null,
        this.port = null,
        this.hostname = null,
        this.hash = null,
        this.search = null,
        this.query = null,
        this.pathname = null,
        this.path = null,
        this.href = null
    }

    function o(e, t, i) {
        if (e && l(e) && e instanceof n) return e;
        var o = new n;
        return o.parse(e, t, i), o
    }

    function a(e) {
        return c(e) && (e = o(e)), e instanceof n ? e.format() : n.prototype.format.call(e)
    }

    function r(e, t) {
        return o(e, !1, !0)
            .resolve(t)
    }

    function s(e, t) {
        return e ? o(e, !1, !0)
            .resolveObject(t) : t
    }

    function c(e) {
        return "string" == typeof e
    }

    function l(e) {
        return "object" == typeof e && null !== e
    }

    function d(e) {
        return null === e
    }

    function u(e) {
        return null == e
    }
    var p = i(167);
    t.parse = o, t.resolve = r, t.resolveObject = s, t.format = a, t.Url = n;
    var h = /^([a-z0-9.+-]+:)/i,
        f = /:[0-9]*$/,
        b = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        m = ["{", "}", "|", "\\", "^", "`"].concat(b),
        M = ["'"].concat(m),
        g = ["%", "/", "?", ";", "#"].concat(M),
        _ = ["/", "?", "#"],
        A = 255,
        O = /^[a-z0-9A-Z_-]{0,63}$/,
        v = /^([a-z0-9A-Z_-]{0,63})(.*)$/,
        y = {
            javascript: !0,
            "javascript:": !0
        },
        z = {
            javascript: !0,
            "javascript:": !0
        },
        w = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        T = i(135);
    n.prototype.parse = function(e, t, i) {
        if (!c(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
        var n = e;
        n = n.trim();
        var o = h.exec(n);
        if (o) {
            o = o[0];
            var a = o.toLowerCase();
            this.protocol = a, n = n.substr(o.length)
        }
        if (i || o || n.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var r = "//" === n.substr(0, 2);
            !r || o && z[o] || (n = n.substr(2), this.slashes = !0)
        }
        if (!z[o] && (r || o && !w[o])) {
            for (var s = -1, l = 0; l < _.length; l++) {
                var d = n.indexOf(_[l]);
                d !== -1 && (s === -1 || d < s) && (s = d)
            }
            var u, f;
            f = s === -1 ? n.lastIndexOf("@") : n.lastIndexOf("@", s), f !== -1 && (u = n.slice(0, f), n = n.slice(f + 1), this.auth = decodeURIComponent(u)), s = -1;
            for (var l = 0; l < g.length; l++) {
                var d = n.indexOf(g[l]);
                d !== -1 && (s === -1 || d < s) && (s = d)
            }
            s === -1 && (s = n.length), this.host = n.slice(0, s), n = n.slice(s), this.parseHost(), this.hostname = this.hostname || "";
            var b = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!b)
                for (var m = this.hostname.split(/\./), l = 0, C = m.length; l < C; l++) {
                    var I = m[l];
                    if (I && !I.match(O)) {
                        for (var S = "", E = 0, L = I.length; E < L; E++) S += I.charCodeAt(E) > 127 ? "x" : I[E];
                        if (!S.match(O)) {
                            var N = m.slice(0, l),
                                R = m.slice(l + 1),
                                q = I.match(v);
                            q && (N.push(q[1]), R.unshift(q[2])), R.length && (n = "/" + R.join(".") + n), this.hostname = N.join(".");
                            break
                        }
                    }
                }
            if (this.hostname.length > A ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), !b) {
                for (var x = this.hostname.split("."), B = [], l = 0; l < x.length; ++l) {
                    var D = x[l];
                    B.push(D.match(/[^A-Za-z0-9_-]/) ? "xn--" + p.encode(D) : D)
                }
                this.hostname = B.join(".")
            }
            var W = this.port ? ":" + this.port : "",
                P = this.hostname || "";
            this.host = P + W, this.href += this.host, b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== n[0] && (n = "/" + n))
        }
        if (!y[a])
            for (var l = 0, C = M.length; l < C; l++) {
                var k = M[l],
                    F = encodeURIComponent(k);
                F === k && (F = escape(k)), n = n.split(k)
                    .join(F)
            }
        var H = n.indexOf("#");
        H !== -1 && (this.hash = n.substr(H), n = n.slice(0, H));
        var U = n.indexOf("?");
        if (U !== -1 ? (this.search = n.substr(U), this.query = n.substr(U + 1), t && (this.query = T.parse(this.query)), n = n.slice(0, U)) : t && (this.search = "", this.query = {}), n && (this.pathname = n), w[a] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var W = this.pathname || "",
                D = this.search || "";
            this.path = W + D
        }
        return this.href = this.format(), this
    }, n.prototype.format = function() {
        var e = this.auth || "";
        e && (e = encodeURIComponent(e), e = e.replace(/%3A/i, ":"), e += "@");
        var t = this.protocol || "",
            i = this.pathname || "",
            n = this.hash || "",
            o = !1,
            a = "";
        this.host ? o = e + this.host : this.hostname && (o = e + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (o += ":" + this.port)), this.query && l(this.query) && Object.keys(this.query)
            .length && (a = T.stringify(this.query));
        var r = this.search || a && "?" + a || "";
        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || w[t]) && o !== !1 ? (o = "//" + (o || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : o || (o = ""), n && "#" !== n.charAt(0) && (n = "#" + n), r && "?" !== r.charAt(0) && (r = "?" + r), i = i.replace(/[?#]/g, function(e) {
            return encodeURIComponent(e)
        }), r = r.replace("#", "%23"), t + o + i + r + n
    }, n.prototype.resolve = function(e) {
        return this.resolveObject(o(e, !1, !0))
            .format()
    }, n.prototype.resolveObject = function(e) {
        if (c(e)) {
            var t = new n;
            t.parse(e, !1, !0), e = t
        }
        var i = new n;
        if (Object.keys(this)
            .forEach(function(e) {
                i[e] = this[e]
            }, this), i.hash = e.hash, "" === e.href) return i.href = i.format(), i;
        if (e.slashes && !e.protocol) return Object.keys(e)
            .forEach(function(t) {
                "protocol" !== t && (i[t] = e[t])
            }), w[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i;
        if (e.protocol && e.protocol !== i.protocol) {
            if (!w[e.protocol]) return Object.keys(e)
                .forEach(function(t) {
                    i[t] = e[t]
                }), i.href = i.format(), i;
            if (i.protocol = e.protocol, e.host || z[e.protocol]) i.pathname = e.pathname;
            else {
                for (var o = (e.pathname || "")
                        .split("/"); o.length && !(e.host = o.shift()););
                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== o[0] && o.unshift(""), o.length < 2 && o.unshift(""), i.pathname = o.join("/")
            }
            if (i.search = e.search, i.query = e.query, i.host = e.host || "", i.auth = e.auth, i.hostname = e.hostname || e.host, i.port = e.port, i.pathname || i.search) {
                var a = i.pathname || "",
                    r = i.search || "";
                i.path = a + r
            }
            return i.slashes = i.slashes || e.slashes, i.href = i.format(), i
        }
        var s = i.pathname && "/" === i.pathname.charAt(0),
            l = e.host || e.pathname && "/" === e.pathname.charAt(0),
            p = l || s || i.host && e.pathname,
            h = p,
            f = i.pathname && i.pathname.split("/") || [],
            o = e.pathname && e.pathname.split("/") || [],
            b = i.protocol && !w[i.protocol];
        if (b && (i.hostname = "", i.port = null, i.host && ("" === f[0] ? f[0] = i.host : f.unshift(i.host)), i.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === o[0] ? o[0] = e.host : o.unshift(e.host)), e.host = null), p = p && ("" === o[0] || "" === f[0])), l) i.host = e.host || "" === e.host ? e.host : i.host, i.hostname = e.hostname || "" === e.hostname ? e.hostname : i.hostname, i.search = e.search, i.query = e.query, f = o;
        else if (o.length) f || (f = []), f.pop(), f = f.concat(o), i.search = e.search, i.query = e.query;
        else if (!u(e.search)) {
            if (b) {
                i.hostname = i.host = f.shift();
                var m = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                m && (i.auth = m.shift(), i.host = i.hostname = m.shift())
            }
            return i.search = e.search, i.query = e.query, d(i.pathname) && d(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
        }
        if (!f.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
        for (var M = f.slice(-1)[0], g = (i.host || e.host) && ("." === M || ".." === M) || "" === M, _ = 0, A = f.length; A >= 0; A--) M = f[A], "." == M ? f.splice(A, 1) : ".." === M ? (f.splice(A, 1), _++) : _ && (f.splice(A, 1), _--);
        if (!p && !h)
            for (; _--; _) f.unshift("..");
        !p || "" === f[0] || f[0] && "/" === f[0].charAt(0) || f.unshift(""), g && "/" !== f.join("/")
            .substr(-1) && f.push("");
        var O = "" === f[0] || f[0] && "/" === f[0].charAt(0);
        if (b) {
            i.hostname = i.host = O ? "" : f.length ? f.shift() : "";
            var m = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
            m && (i.auth = m.shift(), i.host = i.hostname = m.shift())
        }
        return p = p || i.host && f.length, p && !O && f.unshift(""), f.length ? i.pathname = f.join("/") : (i.pathname = null, i.path = null), d(i.pathname) && d(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = e.auth || i.auth, i.slashes = i.slashes || e.slashes, i.href = i.format(), i
    }, n.prototype.parseHost = function() {
        var e = this.host,
            t = f.exec(e);
        t && (t = t[0], ":" !== t && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
    }
}
