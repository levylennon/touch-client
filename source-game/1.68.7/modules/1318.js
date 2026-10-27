function(e, t, i) {
    function n() {
        return !!(window.cordova && window.cordova.plugins && window.cordova.plugins.WebViewSelector) && (!!l.isAndroid && (!(!window.device || !window.device.version) && o()))
    }

    function o() {
        var e = window.device.version.toString();
        return e = e.split(".")[0], e = e.replace(/\D/g, ""), e = ~~e, e >= 7
    }
    var a, r = i(17)
        .hasText,
        s = i(17)
        .getText,
        c = i(52),
        l = i(7),
        d = "DEFAULT";
    t.getCurrentEngineId = function() {
        return n() ? window.cordova.plugins.WebViewSelector.currentEngine : d
    }, t.getEngineName = function(e) {
        var t = "tablet.webViewSelector.engine." + e;
        return r(t) ? s(t) : e
    }, t.setCurrentEngine = function(e, i) {
        return n() ? t.getAvailableEngineIds()
            .indexOf(e) === -1 ? i(s("tablet.webViewSelector.engineUnknown", e)) : void window.cordova.plugins.WebViewSelector.setEngine(e, function(e) {
                return e ? (console.error("webViewSelector error: " + e), i(s("tablet.webViewSelector.pluginError"))) : void i()
            }) : i(s("tablet.webViewSelector.pluginNotFound"))
    }, t.getAvailableEngineIds = function() {
        if (!a)
            if (n()) try {
                a = JSON.parse(JSON.stringify(window.cordova.plugins.WebViewSelector.availableEngines))
            } catch (e) {
                a = [d]
            } else a = [d];
        return a
    }, t.getAvailableEngineNames = function() {
        for (var e = t.getAvailableEngineIds(), i = [], n = 0; n < e.length; n++) i.push(t.getEngineName(e[n]));
        return i
    }, t.changeEngineOptionAction = function(e) {
        if (n() && e !== t.getCurrentEngineId()) {
            var i = window.gui;
            t.setCurrentEngine(e, function(e) {
                return e ? (i.openSimplePopup(s("tablet.webViewSelector.unableToChangeEngine") + " " + e), void c.getWindow("options")
                    .refreshUi()) : void i.openConfirmPopup({
                    message: s("tablet.webViewSelector.restartNeeded") + " " + s("tablet.webViewSelector.restartQuestion"),
                    cb: function(e) {
                        return e ? void navigator.app.exitApp() : i.openSimplePopup(s("tablet.webViewSelector.delayedRestart"), s("ui.popup.information"))
                    }
                })
            })
        }
    }
}
