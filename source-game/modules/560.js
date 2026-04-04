function(e, t, i) {
    function n() {
        if (!window.cordova) return !1;
        var e = window.cordova.plugins;
        return u = e && e.notification && e.notification.local, Boolean(u)
    }

    function o() {
        A = !0;
        var e = window.gui,
            t = e.playerData.inventory,
            i = new f(t, function(e) {
                return e.isStarvingPet()
            });
        i.on("itemsCleared", function() {
            O = 0
        }), i.on("itemAdded", function(e) {
            d(e.quantity)
        }), i.on("itemRemoved", function(e) {
            d(-e.quantity)
        }), i.on("itemQuantityChanged", function(e, t) {
            d(e.quantity - t)
        }), p.on("wantPetFeedingNotif", function(e) {
            e ? l() : c()
        }), p.on("petFeedingNotifTime", function() {
            l()
        }), window.gui.playerData.on("subscriptionChanged", function() {
            r()
        }), u.on("trigger", a)
    }

    function a(e) {
        window.gui.openSimplePopup(e.text, e.title)
    }

    function r() {
        var e = window.gui.playerData;
        if (e.isSubscriberAtMinLevel(m.NORMAL, {
                noForced: !0
            })) {
            var t = e.getSubscriptionMaxExpiration(),
                i = new Date(t - g),
                n = Math.round(g / M * 10) / 10,
                o = n + " " + h("ui.time.days", n);
            u.schedule({
                id: b.subscriptionEnd,
                title: h("tablet.notification.bonusPackEndTitle"),
                text: h("tablet.notification.bonusPackEnd", o),
                at: i
            })
        }
    }

    function s(e) {
        var t = p.petFeedingNotifTime.split(":"),
            i = new Date;
        i.setHours(t[0]), i.setMinutes(t[1]), i.setSeconds(0), i < Date.now() && i.setTime(i.getTime() + M), v = e, u.schedule({
            id: b.petFeeding,
            title: h("tablet.notification.petFeedingTimeTitle"),
            text: h("tablet.notification.petFeedingTime", e),
            every: "day",
            at: i
        })
    }

    function c() {
        v && (v = 0, u.cancel(b.petFeeding))
    }

    function l() {
        c(), p.wantPetFeedingNotif && p.petFeedingNotifTime && 0 !== O && s(O)
    }

    function d(e) {
        O += e, O !== v && (O > 1 && v > 1 || l())
    }
    var u, p = i(55),
        h = i(17)
        .getText,
        f = i(561),
        b = i(562),
        m = i(509),
        M = 864e5,
        g = M,
        _ = !1,
        A = !1,
        O = 0,
        v = 0;
    t.isAvailable = function() {
        return Boolean(u) || n()
    }, t.enable = function(e) {
        return !n() || _ ? e() : (_ = !0, void u.hasPermission(function(t) {
            if (t) {
                A || o();
                var i = null;
                try {
                    l(), console.info("Registered for local notifications")
                } catch (n) {
                    i = n
                }
                return e(i)
            }
            return e("NO_PERMISSION")
        }))
    }, t.disable = function(e) {
        return n() && _ ? (_ = !1, u.cancelAll(), console.info("Unregistered local notifications"), void e()) : e()
    }
}
