function(e, t, i) {
    function n() {
        try {
            return new window.XMLHttpRequest
        } catch (e) {}
        try {
            return new window.ActiveXObject("Msxml3.XMLHTTP")
        } catch (e) {}
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (e) {}
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP")
        } catch (e) {}
        try {
            return new window.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) {}
        return null
    }

    function o(e, t) {
        var i = {};
        if (0 === t.length) return i;
        for (var n = 0; n < t.length; n += 1) {
            var o = t[n] || "",
                a = e.getResponseHeader(o.toLowerCase());
            a && (i[o] = a)
        }
        return i
    }
    var a = i(135),
        r = ["POST", "GET"],
        s = 1e4;
    t.open = function(e, t) {
        function i() {
            try {
                var e = this.readyState,
                    i = this.status
            } catch (n) {
                return t("caught Exception: " + n.description, {
                    xhr: this
                })
            }
            if (4 === e) {
                if (i < 200 || i >= 300) return t("there was a problem with the request", {
                    xhr: this
                });
                var a = {
                    content: this.responseText,
                    headers: o(d, f),
                    xhr: this
                };
                return t(null, a)
            }
        }
        var c = function(e, i) {
            setTimeout(t, 0, e, i)
        };
        if (!e) return c("no options provided", {
            xhr: {}
        });
        var l = e.requestType || "GET";
        if (r.indexOf(l) === -1) return c('unsupported request type "' + l + '"', {
            xhr: {}
        });
        var d = n();
        if (!d) return c("unable to retrieve browser XMLHttpRequest object", {
            xhr: {}
        });
        var u = e.uri,
            p = "string" == typeof e.params ? e.params : a.stringify(e.params),
            h = e.timeout || s,
            f = e.resultHeaders || [];
        "GET" === l && p && (u = u + "?" + p, p = null), d.timeout = h, d.onreadystatechange = i, d.open(l, u, !0), d.send(p)
    }
}
