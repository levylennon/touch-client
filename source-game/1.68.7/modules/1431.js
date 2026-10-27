function(e, t, i) {
    function n() {
        l.call(this, "div", {
            className: ["connectionSplashScreen", "hidding"],
            hidden: !0
        }), this.currentLevel = null, this.autoRemoveTimeout = null, this.state = ""
    }

    function o(e) {
        e.autoRemoveTimeout = null, e.replaceClassNames(["blocking"], ["warning"])
    }
    i(1432);
    var a = i(17)
        .getText,
        r = i(16),
        s = i(56)
        .inherits,
        c = i(106),
        l = i(72),
        d = c.WARNING,
        u = c.BLOCKING,
        p = 15e3;
    s(n, l), e.exports = n, n.prototype._createContent = function() {
        this.lockingDiv = this.createChild("div", {
            className: "lockingDiv"
        });
        var e = this.createChild("div", {
            className: "splashScreenMsg"
        });
        this.message = e.createChild("div", {
            className: "message"
        }), e.createChild("div", {
            className: ["spinner", "splashSpinner"]
        })
    }, n.prototype._appear = function(e) {
        if (e !== this.currentLevel) switch (this.currentLevel = e, this.lockingDiv || this._createContent(), this.autoRemoveTimeout = window.clearTimeout(this.autoRemoveTimeout), this.show(), r.forceReflow(this), e) {
            case u:
                this.replaceClassNames(["hidding", "warning"], ["blocking"]), this.autoRemoveTimeout = window.setTimeout(o, p, this);
                break;
            case d:
                this.replaceClassNames(["hidding", "blocking"], ["warning"])
        }
    }, n.prototype._disappear = function() {
        this.lockingDiv && (this.currentLevel = null, this.replaceClassNames(["warning", "blocking"], ["hidding"]), window.clearTimeout(this.autoRemoveTimeout), this.autoRemoveTimeout = window.setTimeout(function(e) {
            e.hide()
        }, 500, this))
    }, n.prototype.onStateChange = function(e, t) {
        if (e !== this.state) switch (this.state = e, e) {
            case "UNSTABLE":
                this._appear(t || d), this.message.setText(a("tablet.connect.lost"));
                break;
            case "RECONNECTING":
                this._appear(this.currentLevel || d), this.message.setText(a("tablet.connect.retrying", t));
                break;
            case "RELOADING":
                this._appear(u), this.message.setText(a("tablet.connect.reloading"));
                break;
            case "CONNECTED":
            case "DISCONNECTED":
                this._disappear();
                break;
            default:
                console.error("ConnectionSplashScreen#onStateChange: invalid state: " + e)
        }
    }
}
