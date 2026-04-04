function(e, t, i) {
    function n() {
        function e(e, i) {
            d.setMount(e, {
                context: i || "equipped"
            }), t.windowTitle.setText(d.getName())
        }
        s.call(this, {
            title: "",
            className: "MountWindow",
            positionInfo: {
                right: 30,
                top: "c",
                width: 280,
                height: 525
            }
        });
        var t = this,
            i = this.windowBody,
            n = window.gui.playerData,
            a = window.dofus.connectionManager,
            d = i.appendChild(new c);
        a.on("ExchangeStartOkMountMessage", function() {
            l.close(t.id)
        }), d.on("freeMount", function() {
            l.close(t.id)
        }), d.on("renameMount", function(e) {
            t.windowTitle.setText(e)
        }), n.on("setMount", this.localizeEvent(function(t) {
            e(t.mountData)
        })), a.on("MountDataMessage", this.localizeEvent(function(n) {
            if (t.isMountInfoExpected) {
                t.isMountInfoExpected = !1;
                var o = n.mountData;
                o.mountLocation = "certificate", e(o, "inventory"), i.delClassNames("spinner"), d.show()
            }
        })), a.on("MountDataErrorMessage", function(e) {
            if (e.reason === r.SOMEONE_ELSE_PRIVATE_FARM) {
                l.close(t.id);
                var i = o("ui.mount.impossibleDataPrivateFarm");
                window.gui.openSimplePopup(i)
            }
        }), this.on("open", function(t) {
            if (t = t || {}, this.isMountInfoExpected) return d.hide(), void i.addClassNames("spinner");
            var o = t.mountData || n.equippedMount;
            e(o)
        }), this.on("close", function() {
            l.close("feed")
        })
    }
    i(1240);
    var o = i(17)
        .getText,
        a = i(56)
        .inherits,
        r = i(1241),
        s = i(70),
        c = i(481),
        l = i(52);
    a(n, s), e.exports = n, n.prototype.showPaddockMount = function(e) {
        this.isMountInfoExpected = !0, l.open(this.id, {
            forceToOpen: !0
        }), window.dofus.sendMessage("MountInformationInPaddockRequestMessage", {
            mapRideId: e
        })
    }, n.prototype.showCertificateMount = function(e) {
        var t = c.getMountInfoFromCertificate(e);
        t && (this.isMountInfoExpected = !0, l.open(this.id, {
            forceToOpen: !0
        }), window.dofus.sendMessage("MountInformationRequestMessage", {
            id: t.mountId,
            time: t.date
        }))
    }
}
