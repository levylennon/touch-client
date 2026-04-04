function(e, t, i) {
    function n() {
        u.call(this, {
            className: "SecurityCodeWindow",
            title: "",
            isFullScreen: !0
        }), this.hasDom = !1, this.isUsingOtp = !1, this.customText = null, this.onValidate = function() {}, this.on("open", this._onOpen)
    }

    function o(e) {
        if (!e || !e.message) return r("ui.secureMode.error.default");
        switch (e.message) {
            case "CODENOTFOUND":
                return r("ui.popup.ankamaShield.codeNotFound");
            case "CODEBADCODE":
                return r("ui.popup.ankamaShield.badCode");
            case "CODEEXPIRE":
                return r("ui.popup.ankamaShield.expiredCode");
            default:
                return r("ui.popup.ankamaShield.invalidCode")
        }
    }
    i(1472);
    var a = i(86),
        r = i(17)
        .getText,
        s = i(142),
        c = i(56)
        .inherits,
        l = i(16),
        d = i(452),
        u = i(70),
        p = i(581),
        h = i(52),
        f = "Dofus Touch";
    c(n, u), e.exports = n, n.prototype._onOpen = function(e) {
        e = e || {}, e.onValidate && (this.hasDom || this._createDom(), this.onValidate = e.onValidate, this.customText = e.customText, this._refresh(), this.hide(), e.isOTP ? (this._displayOtpDom(), this.show()) : this.isUsingOtp || this._askSecurityCode({
            isUsingSMS: !1
        }))
    }, n.prototype._createDom = function() {
        var e = this;
        this.hasDom = !0;
        var t = this.windowBody.createChild("div", {
                className: "ankamaShieldWrapper"
            }),
            i = t.createChild("div", {
                className: "securityCodeContainer"
            });
        this.ankamaShieldText = i.createChild("div", {
            className: "ankamaShieldText"
        });
        var n = i.createChild("div", {
            className: "securityCodeWrapper"
        });
        this.securityCodeLabel = n.createChild("div", {
            className: "label"
        }), this.inputCode = n.appendChild(new p({
            className: ["inputText", "whiteStyle"],
            attr: {
                type: "text"
            }
        })), this.inputCode.on("change", function(t) {
            e.validateButton.setEnable(Boolean(t))
        });
        var o = t.createChild("div", {
            className: "codeLinks"
        });
        this.askCodeButton = o.appendChild(new a({
            className: ["link", "askForCodeLink"]
        })), this.askSmsCodeButton = o.appendChild(new a({
            className: ["link", "askForSmsCodeLink"]
        })), this.codeSupport = o.appendChild(new a({
            className: ["link", "supportLink"]
        })), this.codeSupportText = this.codeSupport.createChild("span", {
            className: "linkText"
        }), this.codeSupport.createChild("div", {
            className: "linkLogo"
        }), this.askCodeButton.on("tap", function() {
            e._askSecurityCode({
                isUsingSMS: !1
            })
        }), this.askSmsCodeButton.on("tap", function() {
            e._askSecurityCode({
                isUsingSMS: !0
            })
        }), this.codeSupport.on("tap", function() {
            l.openUrlInAppBrowser(this.link)
        });
        var r = t.createChild("div", {
                className: "certificateContainer"
            }),
            s = r.createChild("div", {
                className: "certificateWrapper"
            });
        this.certificatLabel = s.createChild("div", {
            className: "label"
        }), this.certificateName = s.appendChild(new p({
            className: ["inputText", "whiteStyle", "certificateName"],
            attr: {
                type: "text"
            }
        })), this.certificateName.setValue(f), this.certificateLink = s.appendChild(new a({
            className: ["link"]
        })), this.certificateLinkText = this.certificateLink.createChild("span", {
            className: "linkText"
        }), this.certificateLink.createChild("div", {
            className: "linkLogo"
        }), this.certificateLink.on("tap", function() {
            l.openUrlInAppBrowser(this.link)
        });
        var c = t.createChild("div", {
            className: "buttonWrapper"
        });
        this.closeBtn = c.appendChild(new a({
            className: ["emptyButton"]
        }, function() {
            window.gui.loginScreen.displayAppropriateForm(), h.close(e.id)
        })), this.validateButton = c.appendChild(new a({
            className: ["whiteButton"]
        }, function() {
            e._validateSecurity({
                code: e.inputCode.getValue(),
                isUsingOtp: e.isUsingOtp,
                certificateName: e.certificateName.getValue()
            })
        })), this.validateButton.disable();
        var d = this.windowBody.createChild("div", {
            className: "corners"
        });
        d.createChild("div", {
            className: "corner"
        }), d.createChild("div", {
            className: "corner"
        }), d.createChild("div", {
            className: "corner"
        }), d.createChild("div", {
            className: "corner"
        })
    }, n.prototype._refresh = function() {
        this.hasDom && (this.setTitle(r("ui.ankamaShield.newConnection")), this.isUsingOtp ? (this.ankamaShieldText.setText(r("ui.ankamaShield.otpDescription")), this.codeSupportText.setText(r("ui.ankamaShield.findOtpCode")), this.securityCodeLabel.setText(r("ui.ankamaShield.otpCode")), this.inputCode.getChildren()[0].rootElement.placeholder = r("ui.ankamaShield.otpCode")) : (this.ankamaShieldText.setText(this.customText || r("ui.ankamaShield.description")), this.askCodeButton.setText(r("ui.ankamaShield.askNewEmailCode")), this.askSmsCodeButton.setText(r("ui.ankamaShield.askNewSmsCode")), this.codeSupportText.setText(r("ui.ankamaShield.codeNotReceived")), this.securityCodeLabel.setText(r("ui.modeSecure.secureCode")), this.inputCode.getChildren()[0].rootElement.placeholder = r("ui.modeSecure.secureCode")), this.codeSupport.link = r("ui.link.support.ankamaShield"), this.certificatLabel.setText(r("ui.ankamaShield.deviceName")), this.certificateName.getChildren()[0].rootElement.placeholder = r("ui.ankamaShield.deviceName"), this.certificateLinkText.setText(r("ui.ankamaShield.manageDevices")), this.certificateLink.link = r("ui.ankamaShield.manageDevicesLink"), this.validateButton.setText(r("ui.common.validation")), this.closeBtn.setText(r("ui.common.cancel")))
    }, n.prototype._displayOtpDom = function() {
        this.isUsingOtp || (this.toggleClassName("otp", !0), this.isUsingOtp = !0, this._refresh(), this.askCodeButton.hide(), this.askSmsCodeButton.hide())
    }, n.prototype._hideOtpDom = function() {
        this.isUsingOtp && (this.toggleClassName("otp", !1), this.isUsingOtp = !1, this._refresh(), this.askCodeButton.show(), this.askSmsCodeButton.show())
    }, n.prototype._askSecurityCode = function(e) {
        var t = this,
            i = window.gui;
        this._hideOtpDom(), d.setAutomaticHide(!1), this.askCodeButton.disable(), this.askSmsCodeButton.disable(), s.askSecurityCode(e, function(n, o) {
            if (t.show(), t.askCodeButton.enable(), t.askSmsCodeButton.enable(), n) return 401 === n.status && "ACCOUNTNOCERTIFIEDGSM" === n.message ? i.openPopup({
                title: r("ui.popup.ankamaShield.title"),
                message: r("ui.popup.ankamaShield.noCertifiedPhone"),
                enablePreWrap: !0,
                fullScreen: !0,
                className: ["noCloseBtn", "redPopup"]
            }) : i.openPopup({
                title: r("ui.popup.ankamaShield.title"),
                message: r("ui.popup.ankamaShield.failedSendCode"),
                enablePreWrap: !0,
                fullScreen: !0,
                className: ["noCloseBtn", "redPopup"]
            });
            if (o.askForOtp) return t._displayOtpDom();
            var a = r(e.isUsingSMS ? "ui.popup.ankamaShield.successfulSendSmsCode" : "ui.popup.ankamaShield.successfulSendCode");
            i.openPopup({
                title: r("ui.popup.ankamaShield.title"),
                message: t.customText || a,
                enablePreWrap: !0,
                fullScreen: !0,
                className: ["noCloseBtn"]
            })
        })
    }, n.prototype._validateSecurity = function(e) {
        var t = this,
            i = window.gui;
        e.certificateName = e.certificateName.trim(), "" === e.certificateName && (e.certificateName = f), d.setAutomaticHide(!0), t.validateButton.disable(), t.askCodeButton.disable(), t.askSmsCodeButton.disable(), s.validateSecurity(e, function(e) {
            if (t.validateButton.enable(), t.askCodeButton.enable(), t.askSmsCodeButton.enable(), e) {
                var n;
                return e._statusCode ? n = o(e) : (n = r("ui.secureMode.error.default"), console.error("SecurityCodeWindow._validateSecurity - ", e)), void i.openPopup({
                    title: r("ui.popup.ankamaShield.title"),
                    message: n,
                    enablePreWrap: !0,
                    fullScreen: !0,
                    className: ["noCloseBtn", "redPopup"]
                })
            }
            t.close(), t.onValidate()
        })
    }
}
