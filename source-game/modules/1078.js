function(e, t, i) {
    function n() {
        l.call(this, {
            title: a("ui.zaap.prism"),
            className: "PrismVulnerabilityDateWindow",
            positionInfo: {
                left: "c",
                top: "c",
                width: 400,
                height: 256
            }
        });
        var e, t, i, n, o, h, f, b, m;
        this.once("open", function() {
            e = this.windowBody.createChild("div", {
                className: "subAreaName"
            }), t = this.windowBody.createChild("div", {
                className: "explanation"
            });
            var s = this.windowBody.createChild("div", {
                className: "selectorBox"
            });
            i = s.appendChild(new r({
                className: "hours"
            })), i.on("change", function(e) {
                b = e
            });
            for (var l = 0; l < 10; l += 1) i.addOption("0" + l, l);
            for (l = 10; l < 24; l += 1) i.addOption(l, l);
            n = s.appendChild(new r({
                className: "minutes"
            })), n.on("change", function(e) {
                m = e
            }), n.addOption("00", p[0]), n.addOption("30", p[30]);
            var M = this,
                g = this.windowBody.createChild("div", {
                    className: "buttonBox"
                });
            o = g.appendChild(new c(a("ui.common.save"))), o.on("tap", function() {
                var e = d.time.timezoneOffset,
                    t = e / 1e3 * 60 % 60,
                    i = e / 36e5 % 24,
                    n = 4 * (b - i) + (m - t);
                n < 0 && (n += 96), window.dofus.sendMessage("PrismSettingsRequestMessage", {
                    subAreaId: f.subAreaId,
                    startDefenseTime: n
                }), u.close(M.id)
            }), h = g.appendChild(new c(a("ui.common.cancel"))), h.on("tap", function() {
                u.close(M.id)
            })
        }), this.on("open", function(o) {
            f = o.prism;
            var r = o.vulnerableTime.getServerDate(),
                c = r.toString(),
                l = f.enrichData;
            e.setText(l.subAreaName + " (" + l.areaName + ")");
            var d = window.gui.serversData.sessionConstants[s.SERVER_CONST_KOH_DURATION];
            t.setText(a("ui.prism.vulnerabilityHourInfos", Math.round(d / 1e3 / 360) / 10, c.hour, c.minute)), i.select(r.hour), n.select(p[r.minute] || p[0])
        })
    }
    i(1079);
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(945),
        s = i(760)
        .serverConstants,
        c = i(86)
        .DofusButton,
        l = i(70),
        d = i(21),
        u = i(52),
        p = {
            0: 0,
            30: 2
        };
    o(n, l), e.exports = n
}
