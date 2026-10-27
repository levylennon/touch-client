function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: ["loginScreen", "screen"],
            hidden: !0
        }),
        q = m.isWebGlSupported(),
        this._connectMethod = b.getValue("connectMethod", x, !0);
        var e = window.gui,
            t = this;
        this._changeLangMethod = U.UPDATE_DOM,
        this.once("show", function() {
            B = {
                de: d("tablet.language.de"),
                en: d("tablet.language.en"),
                es: d("tablet.language.es"),
                fr: d("tablet.language.fr"),
                it: d("tablet.language.it"),
                pt: d("tablet.language.pt")
            },
            this._createContent(),
            this._updateContent()
        }),
        e.on("NicknameRegistrationMessage", function() {
            M.open("nickname")
        }),
        window.dofus.on("wasAlreadyConnected", function() {
            e.openSimplePopup(d("ui.connection.disconnectAccount"),
            d("ui.popup.warning"))
        }),
        O.setCallback(function(i, n) {
            return i ? (console.error(i), t.displayAppropriateForm(), e.openSimplePopup(d("ui.webauth.errorOnLogin"))) : void(n && (O.isWebAuthValidateGuest() && (b.delValue("guestAccount"), b.saveNow()), t._loginsForm.disableButtons(!0), t._continueGuestForm.disableButtons(!0), t.hidePlayGuest(!0), t.hideContinueGuest(!0), O.requestWebAuthToken(n, function(i, n, o, a) {
                if (i) return console.error(i), t.displayAppropriateForm(), e.openSimplePopup(d("ui.webauth.errorOnTokenValidation"));
                if (a) {
                    var r = {
                        login: a.login,
                        password: a.password
                    };
                    b.setValue("guestAccount", r, 1)
                }
                t._loginWithWebAuth(n, o)
            })))
        })
    }
    i(1439);
    var o = i(56).inherits,
        a = i(72),
        r = i(91),
        s = i(86),
        c = i(448),
        l = i(17),
        d = l.getText,
        u = i(142),
        p = i(16),
        h = i(141),
        f = i(63),
        b = i(60),
        m = i(719),
        M = i(52),
        g = i(1314),
        _ = i(130),
        A = i(34).logger,
        O = i(143),
        v = i(1440),
        y = i(1442),
        z = i(1444),
        w = i(1446),
        T = i(1448),
        C = i(1450),
        I = i(66),
        S = i(594),
        E = i(1316),
        L = i(1453).connectMethod,
        N = i(1454).changeVersion,
        R = i(1317),
        q = !0,
        x = L.lastCharacter,
        B = {},
        D = 2e3,
        W = 1.654,
        P = "changelogRead",
        k = "changelogLast",
        F = "Dofus Touch Beta",
        H = "Beta",
        U = {
            UPDATE_DOM: 0,
            RELOAD_PAGE: 1
        };
    o(n, a),
    e.exports = n,
    n.prototype._createContent = function() {
        function e(e) {
            n.forumOpenend = !e, n._newsBlock.toggleDefaultTapBehaviour(e), n._newsBlock.tabs.forEach(function(t) {
                t.toggleClassName("closed", !e)
            }), n._forumBlock.contentWrapper.toggleClassName("open", !e), n._forumBlock.tab.toggleClassName("open", !e)
        }

        function t() {
            n._newsBlock.resumeCarousel(), n._newsBlock.toggleDefaultTapBehaviour(!1), e(!0), R.loginScreenKPI("openNews")
        }

        function i() {
            n._newsBlock.stopCarousel();
            var t = b.getValue(k, 0);
            b.setValue(P, t), n._forumBlock.trumpet.toggleClassName("new", !1), e(!1)
        }
        var n = this;
        if (!q) return this._webGlUnsupported = this.createChild("div", {
            className: "webGlUnsupported"
        }), this._webGlUnsupported.setText(d("ui.popup.webglError")), void console.error("WebGL is not supported");
        this._createBottomLinks();
        var o = this.createChild("div", {
            className: "verticalPositionerWrapper"
        });
        this._verticalPositioner = o.createChild("div", {
            className: "verticalPositioner"
        }), this._leftColumn = this._verticalPositioner.createChild("div", {
            className: "leftColumn"
        }), this._newsBlock = this._leftColumn.appendChild(new T(this, {
            onTabTap: t,
            heightRatio: W
        })), this._forumBlock = this._leftColumn.appendChild(new C({
            onTabTap: i
        })), this._loginsForm = this._verticalPositioner.appendChild(new y(this)), this._continueGuestForm = this._verticalPositioner.appendChild(new z(this)), this._continueGuestFollowForm = this._verticalPositioner.appendChild(new w(this)), this._continueForm = this._verticalPositioner.appendChild(new v(this)), this.displayAppropriateForm(), this._createTopButtons(), this._createSocialButtons(), this._audioSetup()
    },
    n.prototype._createTopButtons = function() {
        var e = this,
            t = this.createChild("div", {
                className: "topButtons"
            });
        this._betaDiv = t.createChild("div", { className: "betaButton" }), 
        this._betaButton = this._betaDiv.appendChild(new S(F, { defaultValue: !1 })), 
        this._betaButton.addClassNames("sliderV2"), 
        this._betaButton.on("change", function() {
            N(), R.loginScreenKPI("beta")
        }), 
        this._tapListenerCloseLang = this.createChild("div", {
            className: "tapCloseLang"
        }), f(this._tapListenerCloseLang), this._tapListenerCloseLang.on("tap", function() {
            e._langSelector.toggleClassName("open", !1), e._tapListenerCloseLang.toggleClassName("open", !1)
        }), this._langSelector = this.createChild("div", {
            className: "langSelector"
        });
        var i = this._langSelector.appendChild(new s({
            className: ["closeLangs"]
        }));
        i.on("tap", function() {
            e._langSelector.toggleClassName("open", !1), e._tapListenerCloseLang.toggleClassName("open", !1)
        }), this._langSelectorContent = this._langSelector.createChild("div", {
            className: "langSelectorContent"
        }), this._createPreloadMapButton(t), this._createReloadButton(t), this._createLangButton(t)
    },
    n.prototype._createPreloadMapButton = function(e) {
        e.appendChild(new s({
            className: ["settingsButton", "rightButton", "simpleButton"],
            addIcon: !0
        }, function() {
            R.loginScreenKPI("loginSettings"), M.open("loginSettings", {})
        }))
    },
    n.prototype._createReloadButton = function(e) {
        e.appendChild(new s({
            className: ["reloadButton", "rightButton", "simpleButton"],
            addIcon: !0
        }, function() {
            window.location.reload()
        }))
    },
    n.prototype._createLangButton = function(e) {
        function t(e) {
            n._changeLanguage(e, i)
        }
        var i = window.Config,
            n = this;
        this._langButton = e.createChild("div", {
            className: "langButton"
        }), this._langFlag = this._langButton.createChild("div", {
            className: "flagText"
        }), f(this._langButton), this._langButton.on("tap", function() {
            n._langSelectorContent.clearContent();
            for (var e = i.language, o = 0; o < i.serverLanguages.length; o++) {
                var r = i.serverLanguages[o],
                    s = new S(d("ui.social.showOfflinePerson"), {
                        defaultValue: r === e,
                        isRadio: !0
                    });
                s.addClassNames("radioV2"), s.on("change", function(e) {
                    e && (t(this.lang), n._langSelector.toggleClassName("open", !1), n._tapListenerCloseLang.toggleClassName("open", !1))
                });
                var c = new a("div", {
                        className: "langLine"
                    }),
                    l = B[r];
                l || (console.error(new Error("No language label for language " + r)), l = r), c.createChild("div", {
                    className: "caption",
                    text: l
                });
                var u = ["langLineParent"];
                r === e && u.push("current"), s.lang = r, s.appendChild(c), s.addClassNames(u), n._langSelectorContent.appendChild(s)
            }
            n._langSelector.toggleClassName("open", !0), n._tapListenerCloseLang.toggleClassName("open", !0), R.loginScreenKPI("langSelector")
        })
    },
    n.prototype._changeLanguage = function(e, t) {
        var i = this;
        if (e !== t.language) return this._changeLangMethod === U.RELOAD_PAGE ? (b.setValue("lang", e), b.saveNow(), void window.location.reload()) : void l.initialize({
            language: e,
            chaseText: t.chaseText
        }, A, _, function(n) {
            return n ? console.error("LoginScreen getText init", n) : (t.language = e, i.backToLogin(), b.setValue("lang", e, 1), void i._updateContent())
        })
    }, 
    n.prototype._createBottomLinks = function() {
        function e() {
            p.openUrlInAppBrowser(this.link)
        }
        var t = this,
            i = this.createChild("div", { className: "footer" });
        this._versionLabel = i.createChild("div", { className: "globalMenuVersion" });
        var n = i.createChild("div", { className: "divLinks" });
        this._tou = n.appendChild(new s({ className: ["link"] })),
            n.createChild("div", { className: "separator" }).setText("-"),
        this._gcs = n.appendChild(new s({ className: ["link"] })),
        this._playGuestBtn = i.appendChild(new s({ className: "linkGuest" })),
        this._playGuestBtn.on("tap", function() { t._createGuest(), R.loginScreenKPI("createGuest") }),
        this._continueGuestBtn = i.appendChild(new s({ className: "linkGuest" })),
        this._continueGuestBtn.on("tap", function() { t._continueGuest(), R.loginScreenKPI("goToGuestFollowByLink") }),
        this._tou.on("tap", e),
        this._gcs.on("tap", e)
    }, n.prototype._createSocialButtons = function() {
        function e() {
            var e = window.Config.language;
            return E[e] || (e = E.fallbackLanguage), e
        }
        this.socialButtons = new g({
            forumFirst: !0,
            fromLoginScreen: !0
        }), this._discordBetaDiv = this.socialButtons.createChild("div", {
            className: ["discordBetaDiv", "socialNetworkButton"]
        }), this.discordBetaBtn = this._discordBetaDiv.appendChild(new s({
            className: ["discordBeta"]
        })), this.discordBetaBtn.on("tap", function() {
            var t = e();
            p.openUrlInDeviceBrowser("https://discordapp.com/invite/" + E[t].discordBetaGroupId), R.loginScreenKPI("discordBeta")
        }), this.appendChild(this.socialButtons)
    }, n.prototype._audioSetup = function() {
        var e = b.getValue("soundPreferences", r.getDefaultParams(), !0);
        r.setupChannels(e), r.settings.audioPath = window.Config.assetsUrl + "/audio/", r.initialize(), e.ui.muted || r.createUiSound("GEN_BUTTON")
    }, n.prototype.showContinueGuestFollowForm = function() {
        this._loginsForm.hide(), this._continueGuestForm.hide(), this._continueForm.hide(), this._continueGuestFollowForm.show(), this._continueGuestFollowForm.disableButtons(!1), this.hidePlayGuest(!0), this.hideContinueGuest(!0)
    }, n.prototype.showContinueGuestForm = function() {
        this._loginsForm.hide(), this._continueGuestFollowForm.hide(), this._continueForm.hide(), this._continueGuestForm.show(), this._continueGuestForm.disableButtons(!1), this.hidePlayGuest(!0), this.hideContinueGuest(!0)
    }, n.prototype.showLoginsForm = function(e) {
        e = e || {}, this._continueGuestForm.hide(), this._continueGuestFollowForm.hide(), this._continueForm.hide(), this._loginsForm.show(), this._loginsForm.disableButtons(!1), this.hidePlayGuest(e.hasGuest), this.hideContinueGuest(!e.hasGuest)
    }, n.prototype.showContinueForm = function(e) {
        e = e || {}, this._continueForm.refresh(), this._continueGuestForm.hide(), this._continueGuestFollowForm.hide(), this._loginsForm.hide(), this._continueForm.show(), this._continueForm.disableButtons(!1), this.hidePlayGuest(e.hasGuest), this.hideContinueGuest(!e.hasGuest)
    }, n.prototype.showCurrentForm = function() {
        this._loginsForm.disableButtons(!1), this._continueGuestFollowForm.disableButtons(!1), this._continueGuestForm.disableButtons(!1), this._continueForm.disableButtons(!1)
    }, n.prototype.hideMainContent = function() {
        this._verticalPositioner.hide()
    }, n.prototype.showMainContent = function() {
        this._verticalPositioner.show(), this._newsBlock.refresh(), this._forumBlock.refresh()
    }, n.prototype.getGuestAccount = function() {
        var e = b.getValue("guestAccount", null, !0);
        return e
    },
    n.prototype.hasGuestAccount = function() {
        var e = this.getGuestAccount(),
            t = Boolean(e && e.login && e.password);
        return !window.Config.disabledFeatures.guest && t
    },
    n.prototype.hasAccount = function() {
        return u.getHaapiKeyManager()
            .hasKeyFromStorage()
    },
    n.prototype.playWithGuest = function() {
        var e = this.getGuestAccount();
        return e.login && e.password ? this._login({
            account: e.login,
            password: e.password
        }) : console.error(new Error("Can not play with a Guest Account that does not exist"))
    },
    n.prototype.continuePlay = function() {
        return u.getHaapiKeyManager()
            .resetHaapiKey({
                keepInStorage: !0
            }), this._login()
    },
    n.prototype.disconnectAccount = function() {
        u.deleteApiKey(), this.displayAppropriateForm()
    },
    n.prototype._createGuest = function() {
        function e() {
            O.requestWebAuthGuestToken(function(e, i) {
                return e ? (t.displayAppropriateForm(), window.gui.openSimplePopup(d("ui.secureMode.error.default")), void console.error("LoginsScreen#_createGuest error:", e)) : O.requestWebAuthKey({
                    guestToken: i
                })
            })
        }
        var t = this;
        M.open("legalAgreement", {
            onValidate: e,
            isModal: !0
        })
    },
    n.prototype._continueGuest = function() {
        this.showContinueGuestFollowForm()
    },
    n.prototype.hidePlayGuest = function(e) {
        this._playGuestBtn.toggleDisplay(!e && !window.Config.disabledFeatures.guest)
    }, n.prototype.hideContinueGuest = function(e) {
        this._continueGuestBtn.toggleDisplay(!e && !window.Config.disabledFeatures.guest)
    }, n.prototype.displayAppropriateForm = function() {
        this.hasGuestAccount() ? this.hasAccount() ? this.showContinueForm({
            hasGuest: !0
        }) : this.showContinueGuestForm() : this.hasAccount() ? this.showContinueForm({
            hasGuest: !1
        }) : this.showLoginsForm({
            hasGuest: !1
        })
    }, n.prototype.launchWebAuthValidateGuest = function() {
        var e = this,
            t = this.getGuestAccount();
        return t.login && t.password ? void u.createApiKey(t, {}, function(i, n) {
            return setTimeout(function() {
                e.showCurrentForm()
            }, D), i ? (window.gui.openSimplePopup(d("ui.secureMode.error.default")), console.error(i)) : n && n.account_id ? O.requestWebAuthValidateGuestToken(t, n.account_id, function(t, i) {
                return t ? (e.displayAppropriateForm(), window.gui.openSimplePopup(d("ui.secureMode.error.default")), console.error(t)) : O.requestWebAuthKey({
                    validateGuestToken: i
                })
            }) : (window.gui.openSimplePopup(d("ui.secureMode.error.default")), console.error(new Error("ValidateGuest - account_id does not exist")))
        }) : console.error(new Error("Can not register a Guest Account that does not exist"))
    }, n.prototype.backToLogin = function() {
        M.closeAll(), window.gui.splashScreen.hide(), window.gui.backgroundScreen.show(), this.show(), this._updateContent()
    }, n.prototype._loginWithWebAuth = function(e, t) {
        var i = this;
        return O.isWebAuthGuest() ? this._login({
            accessKey: e,
            refreshKey: t
        }) : window.gui.openConfirmPopup({
            title: d("tablet.login.rememberMe"),
            message: d("ui.login.rememberAccountText"),
            buttonNoLabel: d("ui.common.notThisTime"),
            buttonYesLabel: d("ui.common.validation"),
            fullScreen: !0,
            className: ["swapButtons", "bluePopup"],
            cb: function(n) {
                i._login({
                    accessKey: e,
                    refreshKey: t,
                    save: n
                })
            }
        })
    }, n.prototype._login = function(e) {
        function t(e, n) {
            return n && n.askSecurityCode && M.open("securityCode", {
                isOTP: n.isOTP,
                onValidate: function() {
                    window.gui.splashScreen.show(), h.startLoginProcess(i._connectMethod, {
                        account: n.account,
                        password: n.password,
                        save: n.save
                    }, t)
                }
            }), e ? i.displayAppropriateForm() : void window.gui.initializeAfterLogin(function(e) {
                e && (console.error("initializeAfterLogin failed:", e), window.gui.openSimplePopup(d("ui.popup.connectionFailed.text")), i.displayAppropriateForm())
            })
        }
        var i = this;
        this._changeLangMethod = U.RELOAD_PAGE, M.open("cleanAssets", function(n) {
            return n ? t(n) : (window.gui.splashScreen.show(), h.startLoginProcess(i._connectMethod, e, t))
        })
    }, n.prototype.refreshForms = function() {
        this._loginsForm.refresh(),
        this._continueGuestForm.refresh(),
        this._continueGuestFollowForm.refresh(),
        this._continueForm.refresh()
    }, n.prototype._updateContent = function() {
        var e = this;
        this.refreshForms(),
        this._playGuestBtn.setText(d("ui.login.playGuest")),
        this._continueGuestBtn.setText(d("ui.login.continueGuest")),
        this._newsBlock.refresh(),
        this._forumBlock.refresh(),
        this._langFlag.setText(window.Config.language),
        this._tou.setText(d("ui.legal.tou")),
        this._gcs.setText(d("ui.legal.gcs")),
        this._tou.link = d("ui.legal.linktou"),
        this._gcs.link = d("ui.legal.linkgcs"),
        this.socialButtons.updateContent(),
        this._versionLabel.setText(window.gui.getBuildVersion()),
        this.autoProposeRegistration && (this.autoProposeRegistration = !1, window.setTimeout(function() { e.launchWebAuthValidateGuest() }, 0)),
        window.gui.splashScreenNewsManager.show(),
        c.getContextMenu("generic").forceUpdateCancelButton(),
        this._updateForumBlockSize(),
        this.discordBetaBtn.setText(H),
        this._discordBetaDiv.toggleDisplay(!1),
        this._betaDiv.toggleDisplay(!window.Config.disabledFeatures.betaAccess),
        this.displayAppropriateForm()
    }, n.prototype.proposeRegistrationAfterGuestLimit = function() {
        var e = this;
        window.gui.openConfirmPopup({
            message: d("tablet.oldGuest.limitQuestion"),
            cb: function(t) {
                t && (e.autoProposeRegistration = !0, window.gui.disconnect())
            }
        })
    }, n.prototype._updateForumBlockSize = function() {
        var e = I(this._forumBlock.contentWrapper.rootElement),
            t = e.width,
            i = t / W;
        this._forumBlock.contentWrapper.setStyle("height", i + "px")
    }
}
