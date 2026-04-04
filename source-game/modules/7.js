function(e, t, i) {
    var n = i(8),
        o = i(9),
        a = window.navigator.userAgent,
        r = new n(a),
        s = r.getOS(),
        c = r.getDevice(),
        l = void 0 !== window.device && "string" == typeof window.device.model,
        d = window.device || {},
        u = d.platform || "";
    t.identifier = [d.cordova || "", d.isVirtual || "", d.model || "", u, d.version || "", d.uuid || "", d.serial || ""].join("|"), t.osName = u || s.name || "", t.isIOS = "iOS" === t.osName, t.isAndroid = "Android" === t.osName, t.isAndroidTablet = t.isAndroid && c && "mobile" !== c.type, t.isDevice = t.isIOS || t.isAndroid, t.isCordova = Boolean(window.cordova || window.PhoneGap || window.phonegap), t.isPhoneGap = t.isCordova, t.isIpad2 = l && "iPad2," === window.device.model.substr(0, 6), t.os = t.osName.toLowerCase(), t.isIOSApp = "iOS" === u, t.isAndroidApp = "Android" === u, t.isAndroidNewCdvPath = t.isCordova && t.isAndroidApp && o.isVersionSatisfies(window.cordova && window.cordova.platformVersion, ">=11"), t.ankamaShieldModelName = d.model || t.osName, t.isAndroidSoonDeprecatedVersion = o.isItThatModel("Android", "5", a, window.device) || o.isItThatModel("Android", "6", a, window.device), t.isIosSoonDeprecatedVersion = o.isItThatModel("iOS", "11", a, window.device) || o.isItThatModel("iOS", "12", a, window.device)
}
