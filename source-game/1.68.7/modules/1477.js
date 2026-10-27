function(e, t, i) {
    function n() {
        a.call(this, {
            className: "RecaptchaWindow",
            positionInfo: {
                left: "c",
                top: 10,
                width: 400,
                height: 175,
                isFullScreen: !0,
                isModal: !0
            },
            noCloseButton: !0
        });
        var e = this;
        this.recaptcha = this.windowBody.createChild("iframe");
        var t = window.dofus.connectionManager;
        this.on("open", function(t) {
            var i = t.callback;
            delete t.callback, e.update(t, i)
        }), t.on("RecaptchaRequestMessage", function(t) {
            function i(e) {
                window.dofus.send("recaptchaResponse", e)
            }
            var n = window.Config,
                o = n.recaptcha.proxyUrl,
                a = {
                    origin: o,
                    sitekey: t.enrichData.sitekey,
                    src: o + s + "?v=" + Date.now(),
                    lang: n.language || "en",
                    callback: i
                };
            r.open(e.id, a)
        })
    }
    i(1478);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(52),
        s = "/recaptcha";
    o(n, a), e.exports = n, n.prototype.update = function(e, t) {
        e.type = "recaptchaLoad";
        var i = this,
            n = this.recaptcha.rootElement;
        n.onload = function() {
            n.contentWindow.postMessage(e, e.origin)
        }, window.addEventListener("message", function o(n) {
            if (n.origin === e.origin) {
                var a = n.data;
                return "recaptchaShow" === a.type ? i.recaptcha.show() : (window.removeEventListener("message", o), r.close("recaptcha"), t(a))
            }
        }), n.src = e.src
    }
}
