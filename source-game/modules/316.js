function(e, t, i) {
    function n(e, t, i) {
        a.call(this, e, i), this._haapiConfig = t, this._haapiKeyManager = i, this._purchaseUuid = "", this._paths = {
            createApiKey: "/Ankama/v5/Api/CreateApiKey",
            refreshApiKey: "/Ankama/v5/Api/RefreshApiKey",
            deleteApiKey: "/Ankama/v5/Api/DeleteApiKey"
        }
    }
    var o = i(56)
        .inherits,
        a = i(165),
        r = i(14),
        s = r();
    e.exports = n, o(n, a), n.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Api", this._paths)
    }, n.prototype.refreshApiKey = function(e, t) {
        var i = this,
            n = i._haapiKeyManager.getHaapiKey(),
            o = n && n.refreshToken,
            a = {
                game_id: this._haapiConfig.getGameId(),
                refresh_token: o,
                long_life_token: e.save
            },
            r = this._haapiConfig.getBaseUrl() + this._paths.refreshApiKey;
        this.postDirectly(r, a, function(n, o) {
            if (n) return t(n);
            i._purchaseUuid = o.account_uuid;
            var r = new s.Date(o.expiration_date)
                .getTime();
            return i._haapiKeyManager.setHaapiKey(o.key, o.refresh_token, {
                save: e.save,
                timeout: r
            }), i._haapiKeyManager.setHaapiAccountId(o.account_id, {
                save: e.save
            }), t(null, a)
        })
    }, n.prototype.deleteApiKey = function(e) {
        var t = this,
            i = this._haapiConfig.getBaseUrl() + this._paths.deleteApiKey;
        this.fetchDirectly(i, {}, function(t) {
            return e(t ? t : null)
        }), t._haapiKeyManager.resetCertificateFromStorage(), t._haapiKeyManager.resetHaapiKey()
    }, n.prototype.createApiKey = function(e, t, i) {
        var n = this;
        e.game_id = this._haapiConfig.getGameId();
        var o = this._haapiConfig.getBaseUrl() + this._paths.createApiKey;
        this.postDirectly(o, e, function(e, o) {
            if (e) return i(e);
            n._purchaseUuid = o.account_uuid;
            var a = new s.Date(o.expiration_date)
                .getTime();
            return n._haapiKeyManager.setHaapiKey(o.key, o.refresh_token, {
                save: t.saveKey,
                timeout: a
            }), n._haapiKeyManager.setHaapiAccountId(o.account_id, {
                save: t.saveKey
            }), i(null, o)
        })
    }, n.prototype.createApiKeyWithCertificate = function(e, t, i, n) {
        var o = this;
        return e ? void e.decode(function(e, a) {
            return e ? n(e) : (t.certificate_id = a.certificate_id, t.certificate_hash = a.certificate_hash, o.createApiKey(t, i, n))
        }) : this.createApiKey(t, i, n)
    }, n.prototype.getPurchaseUuid = function() {
        return this._purchaseUuid
    }, n.prototype.resetPurchaseUuid = function() {
        this._purchaseUuid = ""
    }
}
