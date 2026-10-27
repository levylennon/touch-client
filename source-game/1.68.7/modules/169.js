function(e, t, i) {
    function n(e, t, i) {
        a.call(this, e, i), this._haapiConfig = t, this._haapiKeyManager = i, this._purchaseUuid = "", this._paths = {
            createToken: "/Ankama/v5/Account/CreateToken",
            birthdateRegistrationLimit: "/Ankama/v5/Account/PublicBirthdateRegistrationLimit",
            account: "/Ankama/v5/Account/Account",
            deleteGuest: "/Ankama/v5/Account/DeleteGuestWithApiKey"
        }
    }
    var o = i(56)
        .inherits,
        a = i(165),
        r = i(14),
        s = r();
    e.exports = n, o(n, a), n.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Account", this._paths)
    }, n.prototype.account = function(e) {
        var t = this,
            i = this._haapiConfig.getBaseUrl() + this._paths.account;
        return this.fetchDirectly(i, {}, function(i, n) {
            return i ? e(i) : (t._purchaseUuid = n.uuid, void e(null, n))
        })
    }, n.prototype.deleteGuest = function(e) {
        var t = this._haapiConfig.getBaseUrl() + this._paths.deleteGuest;
        return this.postDirectly(t, {}, e)
    }, n.prototype.createToken = function(e, t) {
        var i = this._haapiConfig.getBaseUrl() + this._paths.createToken;
        return e.game = this._haapiConfig.getGameId(), this.fetchDirectly(i, e, t)
    }, n.prototype.createTokenWithCertificate = function(e) {
        var t = this,
            i = this._haapiKeyManager.getCertificate();
        return i ? void i.decode(function(i, n) {
            return i ? (t._haapiKeyManager.resetCertificate(), e(i)) : t.createToken(n, e)
        }) : this.createToken({}, e)
    }, n.prototype.birthdateRegistrationLimit = function(e) {
        var t = s.Config || {},
            i = this._haapiConfig.getBaseUrl() + this._paths.birthdateRegistrationLimit;
        this.fetchDirectly(i, {
            lang: t.language
        }, e)
    }, n.prototype.getPurchaseUuid = function() {
        return this._purchaseUuid
    }, n.prototype.resetPurchaseUuid = function() {
        this._purchaseUuid = ""
    }
}
