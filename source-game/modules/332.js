function(e, t, i) {
    var n = i(168),
        o = i(17)
        .getText;
    e.exports = function(e) {
        var t = e.reason || e.message;
        switch (e.unitTest || t === n.FAILED || t === n.OTPTIMEFAILED || t === n.BAN || t === n.NOTOKEN || t === n.MAILNOVALID || t === n.BRUTEFORCE || console.error(new Error("Haapi identification failed: " + e)), t) {
            case n.ACCOUNT_INVALID:
            case n.ACCOUNT_LINKED:
            case n.ACCOUNT_NO_CERTIFY:
            case n.ACCOUNT_SHIELDED:
            case n.PARTNER:
            case n.NOACCOUNT:
            case n.RECAPTCHA_INVALID:
            case n.RESETANKAMA:
            case n.SECURITYCARD:
                return o("ui.popup.accessDenied.unknown");
            case n.ANONYMOUS_IP_FORBIDDEN:
                return o("ui.error.anonymousConnectionIP");
            case n.BAN:
                return o("ui.popup.accessDenied.banned");
            case n.BETACLOSED:
                return o("tablet.ui.popup.accessDenied.betaClosed");
            case n.BLACKLIST:
                return o("tablet.ui.popup.accessDenied.blacklist");
            case n.BRUTEFORCE:
                return o("tablet.ui.popup.accessDenied.bruteForceDetected");
            case n.DELETED:
                return o("tablet.ui.popup.accessDenied.deleted");
            case n.FAILED:
                return o("ui.popup.accessDenied.wrongCredentials");
            case n.LOCKED:
                return o("tablet.ui.popup.accessDenied.locked");
            case n.MAILNOVALID:
                return o("ui.popup.accessDenied.unvalidatedEmail");
            case n.NOTOKEN:
                return o("ui.popup.accessDenied.notoken");
            case n.OTPTIMEFAILED:
                return o("tablet.ui.popup.accessDenied.otptimefailed");
            case n.INVALID_SECURITY_STATE:
                return o("ui.popup.accessDenied.secureApiKey");
            default:
                return o("ui.popup.accessDenied.maintenance")
        }
    }
}
