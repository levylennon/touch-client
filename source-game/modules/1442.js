function(e, t, i) {
    // #Frame - Login
    function n(e) {
        a.call(this, "div", { className: ["LoginsForm", "rightColumn"], hidden: !0 }), 
        this.loginScreen = e;
        var t = this;
        this.guestAccount = null,
        this.isAlreadyGuest = null,
        this.createChild("div", { className: ["frame", "frame1"] }), 
        this.content = this.createChild("div", { className: "content" }), 
        this.content.createChild("div", { className: "dofusTouchLogo" });
        var mainContentDiv = this.content.createChild("div", { className: "form" });

        this.betaDiv = this.createChild("div", { className: "betaDiv" });
        var n = this.betaDiv.createChild("div", { className: "bannerContainer" });
            n.createChild("div", { className: "betaBanner" });

        this._descText = mainContentDiv.createChild("div", { className: "descText" });
        this._inputAccount = mainContentDiv.createChild("input", { className: "input" });
        this._inputAccount.rootElement.placeholder = s("ui.login.placeholder.account");

        this._inputPassword = mainContentDiv.createChild("input", { className: ["input"] });
        this._inputPassword.rootElement.type = 'password';
        this._inputPassword.rootElement.placeholder = s("ui.login.placeholder.password");

        this._serverDiv = mainContentDiv.createChild("div", { className: "betaButton" }),
        this._serverButton = this._serverDiv.appendChild(new S(s("ui.login.server.test"), { defaultValue: window.developmentMode })),
        this._serverButton.addClassNames("sliderV2"), 
        this._serverButton.on("change", function(value) { window.developmentMode = value; }), 

        this._playBtn = mainContentDiv.createChild("div", { className: "horizontalCenter" })
                        .appendChild(new r({ className: ["smallWhiteButton"], sound: "OK_BUTTON" }));
        this._spanWarning = mainContentDiv.createChild("span");
        if(window.Config.webAuth.shortcuts.length > 0){
            this._separator = mainContentDiv.createChild("div", { className: "separator" });
        }
        this._shortcuts = mainContentDiv.createChild("div", { className: "shortcuts" });

       
        // Config vem do config.json enviado para o client
        var o = window.Config.webAuth.shortcuts;
        o.forEach(function(e) {
            var i = t._shortcuts.createChild("div", { className: "shortcutIcon" });
            c.preloadImage("ui/webAuthIcons/" + e.icon + ".png", function(e) {
                i.setStyle("backgroundImage", e)
            }),
            p(i),
            i.on("tap", function() {
                d("OK_BUTTON"),
                u.loginScreenKPI(e.link + "Play"),
                t._launchWebAuth(e.link)
            })
        });

        this._playBtn.on("tap", () => {
            let account = this._inputAccount.rootElement.value,
                password = this._inputPassword.rootElement.value;

                if(account === "" || account.length < 3) {
                    window.gui.openSimplePopup(s("ui.login.validation.account"), s("ui.login.validation.title"));
                    return;
                }
                else if(password === "" || password.length < 3) {
                    window.gui.openSimplePopup(s("ui.login.validation.password"), s("ui.login.validation.title"));
                    return;
                }

            this.disableButtons(true);
            // POST > http://haapi.localhost:5555/json/Ankama/v5/Api/CreateApiKey
            // Payload > login=levy&password=levy&game_id=18
            this.loginScreen._login({ account, password });
        });
    }
    i(1443);
    var o = i(56).inherits,
        a = i(72),
        r = i(86),
        s = i(17).getText,
        c = i(12),
        l = i(143),
        d = i(91).playUiSound,
        u = i(1317),
        S = i(594),
        p = i(63);
    o(n, a), e.exports = n, 
    n.prototype._launchWebAuth = function(e) {
        l.requestWebAuthKey({ shortcut: e })
    }, 
    n.prototype.refresh = function() {
        if(window.Config.webAuth.shortcuts.length > 0){
            this._separator.setText(s("ui.common.or"));
        }
        this._playBtn.setText(s("ui.login.playAnkama"));
        this._descText.setText(s("ui.login.introText"));
        this._inputPassword.rootElement.placeholder = s("ui.login.placeholder.password");
        this._inputAccount.rootElement.placeholder = s("ui.login.placeholder.account");
        this._inputAccount.rootElement.value = ""
        this._inputPassword.rootElement.value = ""

        this.delClassNames("columnBeta")
    }, 
    n.prototype.disableButtons = function(e) {
        this._shortcuts.toggleClassName("disabled", e);
        this._playBtn.toggleClassName("disabled", e);
        this._inputAccount.toggleClassName("disabled", e);
        this._inputPassword.toggleClassName("disabled", e);
        this._serverButton.toggleClassName("disabled", e);
    }
}
