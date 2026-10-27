function(e, t, i) {
    function n(e, t) {
        return function() {
            var i = new c(1e3 * e.prism.nextVulnerabilityDate);
            return t + " " + a(i.getServerDate()
                .date)
        }
    }

    function o(e, t) {
        return function() {
            var i = new Date;
            i.setTime(1e3 * e.prism.nextVulnerabilityDate);
            var n = {
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric"
            };
            return t + " " + i.toLocaleString(window.Config.language, n)
        }
    }

    function a(e) {
        return e.getUTCHours()
            .toString() + ":" + r(e.getUTCMinutes()
                .toString()) + ":" + r(e.getUTCSeconds()
                .toString())
    }

    function r(e) {
        return ("0" + e)
            .slice(-2)
    }
    var s = i(522),
        c = i(21)
        .DofusDate,
        l = i(17)
        .getText,
        d = 436,
        u = 421,
        p = 420;
    t.getIconInfo = function(e) {
        var t, i, a, r = l("ui.prism.prismInState", l("ui.prism.state" + s.PRISM_STATE_INVULNERABLE)),
            c = l("ui.prism.prismInState", l("ui.prism.state" + s.PRISM_STATE_ATTACKED)),
            h = l("ui.prism.prismInState", l("ui.prism.state" + s.PRISM_STATE_FIGHTING)),
            f = l("ui.prism.prismInState", l("ui.prism.state" + s.PRISM_STATE_NORMAL)),
            b = l("ui.prism.prismInState", l("ui.prism.state" + s.PRISM_STATE_WEAKENED)),
            m = l("ui.prism.prismInState", l("ui.prism.state" + s.PRISM_STATE_VULNERABLE)),
            M = l("ui.prism.prismInState", l("ui.prism.state" + s.PRISM_STATE_DEFEATED)),
            g = l("ui.prism.startVulnerability") + l("ui.common.colon"),
            _ = l("ui.prism.vulnerabilityHour");
        switch (e.prism.state) {
            case s.PRISM_STATE_INVULNERABLE:
                t = p, i = r + "\n" + _, a = n(e, i);
                break;
            case s.PRISM_STATE_NORMAL:
                t = p, i = f + "\n" + _, a = n(e, i);
                break;
            case s.PRISM_STATE_ATTACKED:
                t = p, i = c + "\n" + _, a = n(e, i);
                break;
            case s.PRISM_STATE_FIGHTING:
                t = p, i = h + "\n" + _, a = n(e, i);
                break;
            case s.PRISM_STATE_WEAKENED:
                t = u, i = b + "\n" + g, a = o(e, i);
                break;
            case s.PRISM_STATE_VULNERABLE:
                t = d, i = m, a = function(e) {
                    return function() {
                        return e
                    }
                }(i);
                break;
            case s.PRISM_STATE_DEFEATED:
                t = d, i = M, a = function(e) {
                    return function() {
                        return e
                    }
                }(i);
                break;
            default:
                t = d, i = M, a = function(e) {
                    return function() {
                        return e
                    }
                }(i)
        }
        return {
            id: "prisms_" + e.subAreaId,
            x: e.worldX,
            y: e.worldY,
            subAreaId: e.subAreaId,
            categoryId: "prisms",
            gfx: t,
            nameIdOverRideFunc: a
        }
    }
}
