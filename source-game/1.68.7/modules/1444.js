function(e, t, i) {
    function n(e) {
        a.call(this, "div", { className: ["ContinueGuestForm", "rightColumn"], hidden: !0 }),
        this.loginScreen = e;
        var t = this;
        this.guestAccount = null, this.createChild("div", { className: ["frame", "frame1"] }),
        this.content = this.createChild("div", { className: "content" }),
        this.content.createChild("div", { className: "dofusTouchLogo" });
        var i = this.content.createChild("div", { className: "form" });
        this.betaDiv = this.createChild("div", { className: "betaDiv" });
        var n = this.betaDiv.createChild("div", { className: "bannerContainer" });
        n.createChild("div", { className: "betaBanner" }),
        this._descText = i.createChild("div", { className: "descText" }),
        this._continueBtn = i.createChild("div", { className: "horizontalCenter" })
            .appendChild(new r({ className: ["smallWhiteButton", "continueButton"] }, function() { t.loginScreen.showContinueGuestFollowForm(), c.loginScreenKPI("goToGuestFollow") })),
        this._playOtherBtn = i.createChild("div", { className: "horizontalCenter" })
            .appendChild(new r({ className: ["bigEmptyButton", "playOtherButton"] }, function() { t.loginScreen.showLoginsForm({ hasGuest: !0 }), c.loginScreenKPI("playAnotherAccount") }))
    }
    i(1445);
    var o = i(56).inherits,
        a = i(72),
        r = i(86),
        s = i(17).getText,
        c = i(1317);
    o(n, a),
        e.exports = n,
    n.prototype.refresh = function() {
        this._continueBtn.setText(s("ui.login.continueAsGuest")),
        this._playOtherBtn.setText(s("ui.login.playOnAnotherAccount")),
        this._descText.setText(s("ui.login.continueGuestIntroText"))
        this.delClassNames("columnBeta")
    }, 
    n.prototype.disableButtons = function(e) {
        this._continueBtn.toggleClassName("disabled", e),
        this._playOtherBtn.toggleClassName("disabled", e)
    }
}
