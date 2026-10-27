function(e, t, i) {
    function n(e) {
        a.call(this, "div", { className: ["ContinueGuestFollow", "rightColumn"], hidden: !0 }),
        this.loginScreen = e;
        var t = this;
        this.createChild("div", { className: ["frame", "frame1"] }), 
        this.content = this.createChild("div", { className: "content" }), 
        this.content.createChild("div", { className: "dofusTouchLogo" });
        var i = this.content.createChild("div", { className: "form" });
        this.betaDiv = this.createChild("div", { className: "betaDiv" });
        var n = this.betaDiv.createChild("div", { className: "bannerContainer" });
        n.createChild("div", { className: "betaBanner" }), 
            this._descText = i.createChild("div", { className: "descText" }), 
            this._registerBtn = i.createChild("div", { className: "horizontalCenter" }).appendChild(new r({ className: ["smallWhiteButton", "continueButton"]}, function() { t._registerGuest() })),
            this._playGuestBtn = i.createChild("div", { className: "horizontalCenter" }).appendChild(new r({ className: ["bigEmptyButton", "playOtherButton"] }, function() { t._playGuest() }))
    }
    i(1447);
    var o = i(56).inherits,
        a = i(72),
        r = i(86),
        s = i(17).getText,
        c = i(1317);
    o(n, a),
    e.exports = n,
    n.prototype._registerGuest = function() {
        this.disableButtons(!0),
        this.loginScreen.launchWebAuthValidateGuest(),
        c.loginScreenKPI("registerGuest")
    },
    n.prototype._playGuest = function() {
        this.disableButtons(!0),
        this.loginScreen.playWithGuest(),
        c.loginScreenKPI("playGuest")
    },
    n.prototype.refresh = function() {
        this._registerBtn.setText(s("ui.login.registerAccount")),
        this._playGuestBtn.setText(s("ui.login.continueGuest")),
        this._descText.setText(s("ui.login.continueGuestFollowIntroText"))
        this.delClassNames("columnBeta")
    },
    n.prototype.disableButtons = function(e) {
        this._registerBtn.toggleClassName("disabled", e),
        this._playGuestBtn.toggleClassName("disabled", e)
    }
}
