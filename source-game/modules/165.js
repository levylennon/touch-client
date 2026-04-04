function(e, t, i) {
    function n(e, t) {
        if (!e) throw new Error("Need the logger!");
        if (!t) throw new Error("Need the haapiKeyManager!");
        this._logger = e, this._haapiKeyManager = t
    }

    function o(e) {
        var t = r.parse(e.url);
        return t.pathname
    }
    var a = i(135),
        r = i(166),
        s = i(14),
        c = i(168),
        l = s(),
        d = 204;
    e.exports = n, n.prototype.formatHaapiPaths = function(e, t) {
        var i = [];
        for (var n in t)
            if (t.hasOwnProperty(n)) {
                var o = t[n];
                i.push("- " + o)
            } return "## " + e + "\n" + i.join("\n")
    }, n.prototype.describe = function() {
        return ""
    }, n.prototype.isSpecialThrow = function(e, t) {
        if ("/json/Ankama/v5/Api/CreateApiKey" === t && 401 === e) return !0;
        if ("/json/Ankama/v5/Account/CreateToken" === t) {
            if (500 === e) return !0;
            if (401 === e) return !0;
            if (403 === e) return !0
        }
        if ("/json/Ankama/v5/Account/Account" === t && 403 === e) return !0;
        if ("/json/Ankama/v5/Shield/SecurityCode" === t && 401 === e) return !0;
        if ("/json/Ankama/v5/Shield/ValidateOtp" === t) {
            if (403 === e) return !0;
            if (422 === e) return !0
        }
        if ("/json/Ankama/v5/Shield/ValidateCode" === t) {
            if (403 === e) return !0;
            if (422 === e) return !0
        }
        return !1
    }, n.prototype.checkStatus = function(e) {
        var t = o(e);
        if (e.status < 400 || e.status > 599) return e;
        if (this.isSpecialThrow(e.status, t)) return e;
        var i = new Error(e.status + " " + e.statusText + " " + t);
        throw i.response = e, e.json()
            .then(function(i) {
                console.error(new Error("Haapi status: " + e.status + " " + e.statusText + " " + t + " " + i.reason))
            }), i
    }, n.prototype.handleSpecialErrors = function(e, t, i) {
        var n;
        if ("/json/Ankama/v5/Account/CreateToken" === t) {
            if (403 === e) return n = new Error("CreateToken 403 force NOTOKEN"), n.reason = "NOTOKEN", this._haapiKeyManager.resetHaapiKey(), n;
            if (401 === e && (i && i.reason !== c.INVALID_SECURITY_STATE || !i)) return n = new Error("CreateToken 401 force NOTOKEN"), n.reason = "NOTOKEN", this._haapiKeyManager.resetHaapiKey(), n
        }
        return null
    }, n.prototype.processRequest = function(e, t) {
        var i = this;
        e.then(function(e) {
                return i.checkStatus(e)
            })
            .then(function(e) {
                return e.status === d ? t() : void e.json()
                    .then(function(n) {
                        var a = o(e),
                            r = i.handleSpecialErrors(e.status, a, n);
                        if (r) return t(r);
                        if (n._statusCode || i.isSpecialThrow(e.status, a)) throw n._statusCode = n._statusCode || e.status, n;
                        t(null, n)
                    })["catch"](t)
            })["catch"](t)
    }, n.prototype.fetch = function(e, t, i) {
        var n = l.Config.dataUrl;
        e = n + e;
        var o = a.stringify(t);
        this.processRequest(l.fetch([e, o].join("?")), i)
    }, n.prototype.fetchDirectly = function(e, t, i) {
        var n = {
                Accept: "application/json"
            },
            o = this._haapiKeyManager.getHaapiKey();
        o && (n.APIKEY = o.key);
        var r = a.stringify(t);
        this.processRequest(l.fetch([e, r].join("?"), {
            headers: n
        }), i)
    }, n.prototype.postDirectly = function(e, t, i) {
        var n = {
                Accept: "application/json"
            },
            o = this._haapiKeyManager.getHaapiKey();
        o && (n.apikey = o.key);
        var r = {
            method: "post",
            headers: n
        };
        t && (r.body = a.stringify(t)), this.processRequest(l.fetch(e, r), i)
    }, n.prototype.postJSON = function(e, t, i) {
        var n = {
            Accept: "application/json"
        };
        this.processRequest(l.fetch(e, {
            method: "post",
            headers: n,
            body: t
        }), i)
    }
}
