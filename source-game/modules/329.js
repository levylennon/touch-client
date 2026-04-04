function(e, t, i) {
    function n(e) {
        this.logger = e, this.haapiKey = null, this.haapiRefreshToken = null, this.haapiAccountId = null, this.haapiCertificate = null
    }
    var o = i(327),
        a = i(61),
        r = i(14),
        s = r(),
        c = 2592e6;
    e.exports = n, n.prototype.getHaapiKey = function() {
        if (this.haapiKey && this.haapiRefreshToken) return {
            key: this.haapiKey,
            refreshToken: this.haapiRefreshToken
        };
        var e = this.getHaapiKeyFromStorage();
        return e ? this.setHaapiKey(e.key, e.refreshToken) : null
    }, n.prototype.getHaapiKeyFromStorage = function() {
        var e = s.Date.now(),
            t = a.getItem("HAAPI_KEY"),
            i = a.getItem("HAAPI_REFRESH_TOKEN"),
            n = a.getItem("HAAPI_KEY_TIMEOUT");
        return !t || !i || !n || n < e ? (this.resetHaapiKey({
            keepInCache: !0
        }), null) : {
            key: t,
            refreshToken: i
        }
    }, n.prototype.setHaapiKey = function(e, t, i) {
        if (i = i || {}, this.haapiKey = e, this.haapiRefreshToken = t, !i.save) return {
            key: e,
            refreshToken: t
        };
        try {
            var n = e ? s.Date.now() + c : null;
            a.removeItem("UNIQUE_NICKNAME"), a.setItem("HAAPI_KEY", e), a.setItem("HAAPI_REFRESH_TOKEN", t), a.setItem("HAAPI_KEY_TIMEOUT", i.timeout || n)
        } catch (o) {
            return this.logger.error("Failed to store HAAPI_KEY in local storage:", o), null
        }
        return {
            key: e,
            refreshToken: t
        }
    }, n.prototype.resetHaapiKey = function(e) {
        e = e || {}, e.keepInCache || (this.haapiKey = null, this.haapiRefreshToken = null), e.keepInStorage || (a.removeItem("HAAPI_KEY"), a.removeItem("HAAPI_REFRESH_TOKEN"), a.removeItem("HAAPI_KEY_TIMEOUT"))
    }, n.prototype.hasKeyFromStorage = function() {
        return Boolean(this.getHaapiKeyFromStorage())
    }, n.prototype.isCurrentKeyInStorage = function() {
        var e = this.getHaapiKeyFromStorage();
        return !!e && e.key === this.haapiKey
    }, n.prototype.getHaapiAccountId = function() {
        return this.haapiAccountId ? this.haapiAccountId : (this.haapiAccountId = parseInt(a.getItem("HAAPI_ACCOUNTID"), 10) || 0, this.haapiAccountId)
    }, n.prototype.setHaapiAccountId = function(e, t) {
        t = t || {};
        try {
            return e = parseInt(e, 10), t.save && a.setItem("HAAPI_ACCOUNTID", e), this.haapiAccountId = e, e
        } catch (i) {
            return 0
        }
    }, n.prototype.getCertificateFromStorage = function() {
        var e = this.getHaapiAccountId(),
            t = a.getItem(e + "_CERTIFICATE_ID"),
            i = a.getItem(e + "_CERTIFICATE_HASH");
        return t && i ? new o(t, i) : void this.resetCertificateFromStorage()
    }, n.prototype.getCertificate = function() {
        var e = this.getHaapiAccountId();
        return this.haapiCertificate || (this.haapiCertificate = this.getCertificateFromStorage(e)), this.haapiCertificate
    }, n.prototype._setCertificateToStorage = function(e) {
        if (e) {
            var t = this.getHaapiAccountId();
            try {
                a.setItem(t + "_CERTIFICATE_ID", e.getId()), a.setItem(t + "_CERTIFICATE_HASH", e.getEncodedData())
            } catch (i) {
                this.logger.error("Failed to store the certificate in local storage:", i)
            }
        }
    }, n.prototype.setCertificate = function(e, t) {
        return t = t || {}, e ? (this.haapiCertificate = e, void(t.save && this._setCertificateToStorage(e))) : this.resetCertificate()
    }, n.prototype.resetCertificateFromStorage = function() {
        var e = this.getHaapiAccountId();
        a.removeItem(e + "_CERTIFICATE_ID"), a.removeItem(e + "_CERTIFICATE_HASH")
    }, n.prototype.resetCertificate = function() {
        this.haapiCertificate = null, this.resetCertificateFromStorage()
    }
}
