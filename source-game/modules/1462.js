function(e, t, i) {
    function n() {
        function e() {
            M.isActivate() ? A.enable() : A.disable()
        }

        function t() {
            l.openUrlInAppBrowser(this.link)
        }
        a.call(this, {
            className: "LegalAgreementWindow",
            title: "",
            isFullScreen: !0,
            noCloseButton: !0
        }), this._canceled = !0;
        var i = this,
            n = this.windowBody,
            o = function() {},
            p = o,
            h = n.createChild("div", {
                className: "textWrapper"
            }),
            f = n.createChild("div", {
                className: "checkboxWrapper"
            }),
            b = h.createChild("div", {
                className: "readTou"
            }),
            m = h.createChild("div", {
                className: "readGcs"
            }),
            M = f.appendChild(new c);
        M.addClassNames("checkboxV2");
        var g = n.createChild("div", {
                className: "buttonContainer"
            }),
            _ = g.appendChild(new s({
                className: "emptyButton"
            }));
        _.addClassNames("cancel");
        var A = g.appendChild(new s({
            className: "whiteButton"
        }));
        M.on("change", e), b.on("tap", t), m.on("tap", t), A.on("tap", function() {
            _.disable(), A.disable(), i._canceled = !1, i.close()
        }), _.on("tap", function() {
            i.close()
        }), this.on("open", function(e) {
            p = e.onValidate, A.disable(), _.enable(), i.windowTitle.setText(r("ui.connection.legalAgreement")), M.setHtml(r("ui.legal.acceptNoTag")), b.link = r("ui.legal.linktou"), m.link = r("ui.legal.linkgcs"), _.setText(r("ui.common.cancel")), A.setText(r("ui.common.validation")), b.clearContent();
            var t = r("ui.legal.readtou", b.link),
                n = u.process(t);
            b.appendChild(n), m.clearContent();
            var o = r("ui.legal.readgcs", m.link),
                a = u.process(o);
            m.appendChild(a)
        }), this.on("close", function(e) {
            M.deactivate(), i._canceled || (d.setValue("guestAgreement", !0, 1, !0), p(e), p = o)
        })
    }
    i(1463);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(86),
        c = i(594),
        l = i(16),
        d = i(60),
        u = i(502);
    o(n, a), e.exports = n
}
