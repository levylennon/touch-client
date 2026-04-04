function(e, t, i) {
    function n(e) {
        var t = e.notification,
            i = t.message;
        if (!i) {
            var n = Object.keys(e),
                o = Object.keys(t);
            return void console.error(new Error("Message is missing, keys " + o + " also event " + n))
        }
        window.gui.openSimplePopup(i, a("ui.common.notification"))
    }
    var o = window.plugins && window.plugins.pushNotification,
        a = i(17)
        .getText,
        r = !1;
    t.isAvailable = function() {
        return Boolean(o)
    }, t.enable = function(e) {
        if (!o || r) return e();
        var t = window.Config.notification;
        if (!t) return e("No notification config");
        r = !0, document.addEventListener("push-notification", n, !1);
        var i = t.push;
        o.onDeviceReady({
            appid: i.appId,
            projectid: i.projectId,
            serviceName: ""
        }), o.setUserId(window.gui.playerData.accountCapabilities.accountId.toString()), o.registerDevice(function(t) {
            console.info("Registered device for push notifications: ", t.pushToken), window.gui.playerData.setPushToken(t.pushToken), e()
        }, function(t) {
            window.gui.playerData.setPushToken(""), e("Error registering push notifications: " + t)
        })
    }, t.disable = function(e) {
        return o && r ? (r = !1, document.removeEventListener("push-notification", n, !1), void o.unregisterDevice(function() {
            console.info("Unregistered push notifications"), window.gui.playerData.setPushToken(""), e()
        }, function(t) {
            window.gui.playerData.setPushToken(""), e("Error unregistering push notifications: " + t.error)
        })) : e()
    }, t.setCustomTags = function(e) {
        o && r && o.setTags(e, function() {
            console.info("setTags success for: ", Object.keys(e))
        }, function(t) {
            console.error("setTags failed for " + Object.keys(e)
                .join(",") + ": " + t)
        })
    }, t.postEvent = function(e, t) {
        o && r && o.postEvent(e, t)
    }
}
