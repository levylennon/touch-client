function(e, t, i) {
    function n(e) {
        var t = a[e];
        return void 0 === t ? (l.error(new Error("ankAnalytics.getEventId: " + e + " is missing from the event map")), -1) : t
    }

    function o(e, t) {
        var i = r[e];
        if (!i) return void l.error("ankAnalytics checkModel: " + e + " is missing from the models");
        for (var n = Object.keys(t), o = [], a = 0, s = i.length; a < s; a += 1) {
            var c = i[a];
            if ("relative_soft_currency_gained" !== c && "relative_hard_currency_gained" !== c && "time_spent_on_action" !== c) {
                var d = n.indexOf(c) === -1,
                    u = m.indexOf(c) === -1 && (void 0 === t[c] || null === t[c]);
                (d || u) && o.push(c)
            }
        }
        o.length && l.error("ankAnalytics checkModel: missing params on event", e, o)
    }
    var a = i(119),
        r = i(120),
        s = i(121),
        c = i(21),
        l = null,
        d = null,
        u = !1,
        p = !1,
        h = 18,
        f = -1,
        b = !1,
        m = ["amu_id", "weapon_id", "ringl_id", "belt_id", "ringr_id", "boots_id", "hat_id", "cloack_id", "pet_id", "ride_id", "comp_id", "shield_id"];
    t.init = function(e, t) {
        l = window.dofus.logger, d = t, e && (e.debug && (p = !0), e.analog && (u = !0), b = !0)
    }, t.register = function(e) {
        b && (f = e || -1)
    }, t.unregister = function() {
        f = -1
    }, t.send = function(e, t) {
        if (b) {
            t = t || {}, t.date && l.error(new Error("Do not use the date."));
            var i = n(e);
            window.developmentMode && p && o(e, t);
            var a = s(c.now(), "yyyy-mm-dd'T'HH:MM:ssp");
            t.account_id = window.gui.playerData.accountCapabilities.accountId;
            var r = {
                game_id: h,
                event_id: i,
                session_id: f,
                date: a,
                data: t
            };
            u && l.debug("ankAnalytics.send: " + e, JSON.stringify(r)), d.sendKPIEvent(f, i, a, t)
        }
    }
}
