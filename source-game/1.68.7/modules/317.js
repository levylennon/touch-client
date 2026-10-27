function(e, t, i) {
    function n(e, t, i) {
        a.call(this, e, i), this._haapiConfig = t, this._haapiKeyManager = i, this._paths = {
            validateCode: "/Ankama/v5/Shield/ValidateCode",
            validateOtp: "/Ankama/v5/Shield/ValidateOtp",
            securityCode: "/Ankama/v5/Shield/SecurityCode"
        }
    }
    var o = i(56)
        .inherits,
        a = i(165),
        r = i(318),
        s = i(327),
        c = i(7),
        l = {
            EMAIL: "EMAIL",
            SMS: "SMS"
        };
    e.exports = n, o(n, a), n.prototype.describe = function() {
        return this.formatHaapiPaths("Ankama/Shield", this._paths)
    }, n.prototype.validateSecurityCode = function(e, t) {
        var i = this._haapiConfig.getBaseUrl() + this._paths.validateCode;
        this._validateCodeOrOtp(e, i, t)
    }, n.prototype.validateSecurityOtp = function(e, t) {
        var i = this._haapiConfig.getBaseUrl() + this._paths.validateOtp;
        this._validateCodeOrOtp(e, i, t)
    }, n.prototype._validateCodeOrOtp = function(e, t, i) {
        var n = this,
            o = this._haapiKeyManager.getHaapiAccountId();
        0 === o && console.error(new Error("Impossible to retrieve an account id from cache")), r.getIdentifierHashes(null, function(o, a) {
            function r(e, t) {
                if (e) return n._haapiKeyManager.resetCertificate(), i(e);
                var o = new s(t.id, t.encodedCertificate);
                return n._haapiKeyManager.setCertificate(o, {
                    save: !0
                }), i()
            }
            if (o) return i(o);
            var l = {
                game_id: n._haapiConfig.getGameId(),
                code: e.code,
                hm1: a.hm1,
                hm2: a.hm2,
                name: e.certificateName + " / " + c.ankamaShieldModelName
            };
            n.fetchDirectly(t, l, r)
        })
    }, n.prototype.askSecurityCode = function(e, t) {
        function i(e) {
            return e ? 401 === e.status && "SECUREDBYOTP" === e.message ? t(null, {
                askForOtp: !0
            }) : t(e) : t(null, {
                askForOtp: !1
            })
        }
        var n = e.isUsingSMS ? l.SMS : l.EMAIL,
            o = this._haapiConfig.getBaseUrl() + this._paths.securityCode;
        this.fetchDirectly(o, {
            transportType: n
        }, i)
    }
}
