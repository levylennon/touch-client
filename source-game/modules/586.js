function(e, t, i) {
    var n = i(112),
        o = i(17)
        .getText,
        a = i(21),
        r = i(52),
        s = a.DofusDate,
        c = ["/help", "/helper", "/mapid", "/me", "/think", "/time", "/whoami", "/whois", "/tips"],
        l = ["ui.chat.variable.achievement", "ui.chat.variable.area", "ui.chat.variable.experience", "ui.chat.variable.guild", "ui.chat.variable.level", "ui.chat.variable.life", "ui.chat.variable.lifepercent", "ui.chat.variable.maxlife", "ui.chat.variable.myself", "ui.chat.variable.position", "ui.chat.variable.stats", "ui.chat.variable.subarea"];
    e.exports = function(e, t) {
        function i() {
            t = t || [];
            var e = t.join("")
                .trim();
            return !(0 === e.length || e.length > n.MAX_PLAYER_OR_ACCOUNT_NAME_LEN) && (window.dofus.sendMessage("BasicWhoIsRequestMessage", {
                search: e,
                verbose: !0
            }), !0)
        }
        e = e.toLowerCase();
        var d = "";
        if ("help" === e) return c.forEach(function(e) {
            d += e + "\n"
        }), l.forEach(function(e) {
            d += o(e) + "\n"
        }), window.gui.chat.logMsg(d.substring(0, d.length - 1)), !0;
        if ("whois" === e) i();
        else {
            if ("whoami" === e) return window.dofus.sendMessage("BasicWhoAmIRequestMessage", {
                verbose: !0
            }), !0;
            if ("mapid" === e) {
                var u = window.isoEngine.mapRenderer.mapId;
                return d = o("ui.chat.console.currentMap", null, u), window.gui.chat.logMsg(d), !0
            }
            if ("server" === e) return window.gui.chat.logMsg(window.gui.serversData.getMyServerName()), !0
        }
        if ("time" === e || "whois" === e) {
            var p = new s(a.now())
                .getServerDate()
                .toString(!1),
                h = p.date + " - " + p.time;
            return window.gui.chat.logMsg(h), !0
        }
        return "helper" === e ? ("on" === t[0] || "off" === t[0] ? window.dofus.sendMessage("HelpersVisibilityRequestMessage", {
            visibility: "on" === t[0]
        }) : window.dofus.sendMessage("HelpersOnlineRequestMessage"), !0) : "tips" === e && (r.open("help"), !0)
    }
}
