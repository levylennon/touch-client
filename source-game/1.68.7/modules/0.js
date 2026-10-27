function(e, t, i) {
    function n(e) {
        return window.wizAssets && window.wizAssets.initialize ? void window.wizAssets.initialize(e, function() {
            console.error("failed to init wizAssets"), window.wizAssets = null, e()
        }) : e()
    }

    function o() {
        if (b.isWebGlSupported()) {
            var e = i(1487);
            window.isoEngine = new e,
            window.actorManager = window.isoEngine.actorManager,
            window.background = window.isoEngine.background,
            window.performanceMonitor = new m
        }
        window.dofus.start()
    }
    i(1),
    i(2),
    i(3),
    i(4),
    i(5),
    i(6);
    var a = i(7);
    window.developmentMode = true,
    window.buildVersion = "1.68.17",
    window.envName = "",
    console.log("Production variant is active");
    for (var r = window.location.search.slice(1).split(";"), s = 0, c = r.length; s < c; s += 1) {
        var l = r[s],
            d = l.split("=");
        "code" === d[0] && (window.appInfo = window.appInfo || {}, window.appInfo.version = "9999.0.0"), "appVersion" === d[0] && (window.appInfo = window.appInfo || {}, window.appInfo.version = d[1])
    }
    a.isAndroid && window.MobileAccessibility && window.MobileAccessibility.usePreferredTextZoom(!1), Event.prototype.oldPreventDefault || (Event.prototype.oldPreventDefault = Event.prototype.preventDefault, Event.prototype.preventDefault = function() {
        this.cancelable && this.oldPreventDefault()
    }), window.assetPreloader = i(12), window.dofus = i(34);
    var u = document.createElement("div");
    u.id = "resizableBody", document.body.appendChild(u);
    var p = document.createElement("div");
    p.id = "dofusBody",
    u.appendChild(p);
    var h = i(415),
        f = i(446);
    window.gui = new f,
    window.foreground = new h;
    var b = i(719),
        m = i(1486),
        M = window.chrome;
    "object" == typeof M && M.system && M.system.memory && a.isPhoneGap ? M.system.memory.getInfo(function(e) {
        a.capacity = e.capacity, n(o)
    }) : n(o)
}
