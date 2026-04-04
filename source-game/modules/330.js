function(e, t, i) {
    function n(e) {
        return "v" + [e.major, e.minor, e.release].join(".")
    }
    var o = i(331),
        a = i(17)
        .getText,
        r = i(121);
    e.exports = function(e) {
        switch (e.unitTest || e.reason === o.WRONG_CREDENTIALS || e.reason === o.BANNED || e.reason === o.IN_MAINTENANCE || e.reason === o.EMAIL_UNVALIDATED || console.error("Identification failed:", e), e.reason) {
            case o.BAD_VERSION:
                return e.requiredVersion ? a("ui.popup.accessDenied.badVersion", n(e.currentVersion), n(e.requiredVersion)) : a("ui.popup.accessDenied.badVersion");
            case o.WRONG_CREDENTIALS:
                return a("ui.popup.accessDenied.wrongCredentials");
            case o.BANNED:
                if (e.banEndDate) {
                    var t = r(new Date(e.banEndDate), "yyyy-mm-dd HH:MM");
                    return a("ui.popup.accessDenied.bannedWithDuration", t)
                }
                return a("ui.popup.accessDenied.banned");
            case o.KICKED:
                return a("ui.popup.accessDenied.kicked");
            case o.IN_MAINTENANCE:
                return a("ui.popup.accessDenied.inMaintenance");
            case o.TOO_MANY_ON_IP:
                return a("ui.popup.accessDenied.toomanyonip");
            case o.TIME_OUT:
                return a("ui.popup.accessDenied.timeout");
            case o.BAD_IPRANGE:
                return a("ui.popup.accessDenied.badIpRange");
            case o.CREDENTIALS_RESET:
                return a("ui.popup.accessDenied.credentialsReset");
            case o.EMAIL_UNVALIDATED:
                return a("ui.popup.accessDenied.unvalidatedEmail");
            case o.SERVICE_UNAVAILABLE:
                return a("ui.popup.accessDenied.serviceUnavailable");
            default:
                return a("ui.popup.accessDenied.unknown")
        }
    }
}
