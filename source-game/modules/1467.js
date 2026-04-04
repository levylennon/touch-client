function(e, t, i) {
    function n(e) {
        a.call(this, "div", {
            className: "ConnectionOptions"
        }), this.loginScreen = e, this._title = this.createChild("div", {
            className: "title"
        }), this._connectMethods = this.createChild("div", {
            className: "methods"
        })
    }
    i(1468);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(17)
        .getText,
        s = i(60),
        c = i(1453),
        l = i(594),
        d = c.connectMethod.lastCharacter;
    o(n, a), e.exports = n, n.prototype.refresh = function() {
        var e = this;
        this._title.setText(r("tablet.login.connectionOptions"));
        var t = s.getValue("connectMethod", d, !0);
        this._connectMethods.clearContent();
        for (var i in c.connectMethod) {
            var n = this._connectMethods.appendChild(new l(r("tablet.login.connectionOption." + i), {
                defaultValue: t === i,
                isRadio: !0
            }));
            n.connectMethod = i, n.addClassNames("radioV2"), n.on("change", function(t) {
                t && (e.loginScreen._connectMethod = this.connectMethod, s.setValue("connectMethod", this.connectMethod, null, !0))
            })
        }
    }
}
