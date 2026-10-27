function(e, t, i) {
    function n(e) {
        a.call(this, "div", { className: ["ContinueForm", "rightColumn"], hidden: !0 }),
        this.loginScreen = e;
        var t = this;
        this.createChild("div", { className: ["frame", "frame1"] }),
        this.content = this.createChild("div", { className: "content" }), 
        this.content.createChild("div", { className: "dofusTouchLogo" });
        var i = this.content.createChild("div", { className: "form" });
        this.betaDiv = this.createChild("div", { className: "betaDiv" });
        var n = this.betaDiv.createChild("div", { className: "bannerContainer" });
            n.createChild("div", { className: "betaBanner" });

        this._descText = i.createChild("div", { className: "descText" }),
        this._continueBtn = i.createChild("div", { className: "horizontalCenter" }).appendChild(new r({ className: ["bigWhiteButton", "continueButton"]}, function() { t._continue() })), 
        this._disconnectBtn = i.createChild("div", { className: "horizontalCenter" }).appendChild(new r({ className: ["smallEmptyButton", "playOtherButton"]}, function() { t._disconnect() }))
    }
    i(1441);
    var o = i(56).inherits,
        a = i(72),
        r = i(86),
        s = i(17).getText,
        c = i(1317),
        l = i(61);
    o(n, a), 
    e.exports = n,
    n.prototype._continue = function() {
        this.disableButtons(!0),
        this.loginScreen.continuePlay(),
        c.loginScreenKPI("continuePlay")
    }, 
    n.prototype._disconnect = function() {
        this.loginScreen.disconnectAccount(),
        c.loginScreenKPI("disconnect")
    }, 
    n.prototype.refresh = function() {
        var e = l.getItem("UNIQUE_NICKNAME") || window.gui.playerData.loginName;
        this._continueBtn.setText(s("ui.login.continueAccount", e)),
        this._disconnectBtn.setText(s("ui.login.disconnectAccount")),
        this._descText.setText(s("ui.login.continueAccountIntroText"));
        this.delClassNames("columnBeta")
    }, 
    n.prototype.disableButtons = function(e) {
        this._continueBtn.toggleClassName("disabled", e), this._disconnectBtn.toggleClassName("disabled", e)
    }
}
