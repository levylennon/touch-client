function(e, t, i) {
    function n(e, t, i, n, r) {
        l.call(this, "div", {
            className: "SplashScreenNews",
            hidden: !0
        }), this._uid = e, this._splashScreenNewsLogic = new h(r, t, e, n, i), this._language = null, this._href = null;
        var s = this,
            c = this.appendChild(new d({
                className: "splashscreen-bg",
                scaleOnPress: !1
            }, function() {
                a(s._language), s.hide()
            }));
        this._interactiveImage = c.appendChild(new d({
            scaleOnPress: !1
        }, function() {
            s._href ? p.openUrlInAppBrowser(s._href) : console.error("SplashScreenNews: url missing for language", s._language), o(s._language), s._close()
        }));
        var f = this._interactiveImage.appendChild(new u({
            className: ["closeButton"],
            scaleOnPress: !0
        }));
        f.on("tap", function() {
            a(s._language), s._close()
        })
    }

    function o(e) {
        r(!0, e)
    }

    function a(e) {
        r(!1, e)
    }

    function r(e, t) {
        s.log("HUD.Click_on_button", {
            interface_id: "SplashScreenNews",
            button_id: e ? "BTN_SPLASHSCREEN_OPEN_LINK" : "BTN_SPLASHSCREEN_CLOSE",
            clic_parameter_key: "language",
            clic_parameter_value: t,
            clic_type: "Simple_court"
        })
    }
    i(1436);
    var s = i(116),
        c = i(56)
        .inherits,
        l = i(72),
        d = i(86),
        u = i(115),
        p = i(16),
        h = i(1437);
    c(n, l), e.exports = n, n.prototype.showSplashScreen = function(e, t) {
        this._language = e;
        var i = this._splashScreenNewsLogic.shouldShowFor(e, t);
        i && (this._interactiveImage.setClassNames(["splashscreen-image", this._uid, "lang-" + e]), this._href = this._splashScreenNewsLogic.getUrlFor(e)), this.toggleDisplay(i)
    }, n.prototype._close = function() {
        this._splashScreenNewsLogic.setShownIn(this._language), this._language = null, this._href = null, this.hide()
    }
}
