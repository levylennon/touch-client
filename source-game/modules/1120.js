function(e, t, i) {
    function n() {
        a.call(this, {
            className: "padLockWindow",
            title: c("ui.common.typeCode"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 400,
                height: 360
            }
        });
        var e = this;
        this.padlockInfo = {
            codeSize: 8
        }, this.once("open", function() {
            function t() {
                e.enterCode(this.id)
            }
            var i, n = 9,
                o = {};
            e.currentCodeDigit = 0, e.codeDigitContainer = [], e.codeDigit = [];
            var a = e.windowBody.createChild("div", {
                className: "codeContainer"
            });
            for (i = 0; i < e.padlockInfo.codeSize; i++) e.codeDigitContainer.push(a.createChild("div", {
                className: "codeDigitContainer"
            })), e.codeDigit.push(e.codeDigitContainer[i].createChild("div", {
                className: "codeDigit"
            }));
            var l = e.windowBody.createChild("div", {
                    className: "container"
                }),
                d = l.createChild("div", {
                    className: "leftPanel"
                });
            e.messageText = d.createChild("div", {
                className: "text"
            }), e.resetButton = d.createChild("div", {
                className: "resetButton"
            }), e.resetButton.createChild("div", {
                className: "resetButtonIcon"
            }), e.resetButton.createChild("div", {
                className: "resetButtonText",
                text: c("ui.common.resetCode")
            }), r(e.resetButton);
            var u = l.createChild("div", {
                className: "keypadContainer"
            });
            for (i = n; i >= 0; i--) o[i] = u.appendChild(new s(i, {
                className: ["keypad", "num" + i]
            })), o[i].id = i, o[i].on("tap", t);
            var p = this.windowBody.createChild("div", {
                className: "confirmPanel"
            });
            e.confirmButton = p.appendChild(new s(c("ui.common.validation"), {
                className: "confirmButton"
            })), e.setupButtonEvents()
        }), this.on("open", function(t) {
            t = t || {}, e.fromInside = t.fromInside, e.resetCode();
            var i = e.padlockInfo.changeOrUse || t.fromInside;
            e.messageText.setText(c(i ? "ui.common.lockInfos" : "ui.common.unlockInfos"))
        }), e.setupListeners()
    }
    i(1121);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(63),
        s = i(86)
        .DofusButton,
        c = i(17)
        .getText,
        l = i(52);
    o(n, a), e.exports = n, n.prototype.setupButtonEvents = function() {
        var e = this;
        this.confirmButton.on("tap", function() {
            for (var t = "", i = 0; i < e.padlockInfo.codeSize; i++) t += isNaN(parseInt(e.codeDigit[i].getText(), 10)) ? "_" : e.codeDigit[i].getText();
            var n = {
                code: t
            };
            return e.fromInside ? (window.dofus.sendMessage("HouseLockFromInsideRequestMessage", n), void l.close(e.id)) : void(e.padlockInfo.changeOrUse ? window.dofus.sendMessage("LockableChangeCodeMessage", n) : window.dofus.sendMessage("LockableUseCodeMessage", n))
        }), this.resetButton.on("tap", function() {
            e.resetCode()
        }), this.resetButton.on("tapstart", function() {
            this.addClassNames("pressed")
        }), this.resetButton.on("tapend", function() {
            this.delClassNames("pressed")
        })
    }, n.prototype.setupListeners = function() {
        var e = this,
            t = {
                0: c("ui.house.codeChanged"),
                1: c("ui.error.badCode"),
                2: c("ui.error.unlockForbiddenCode")
            };
        window.gui.on("LockableShowCodeDialogMessage", function(t) {
            window.gui.playerData.setDialogState(!0), e.padlockInfo = t, l.openDialog(e.id, {
                fromInside: !1
            })
        }), window.gui.on("LockableCodeResultMessage", function(e) {
            window.gui.openPopup({
                title: c("ui.common.code"),
                message: t[e.result]
            })
        })
    }, n.prototype.enterCode = function(e) {
        var t = this.currentCodeDigit % this.padlockInfo.codeSize;
        this.codeDigit[t].setText(e), this.codeDigit[t].show(), this.currentCodeDigit++, this.highlightDigit()
    }, n.prototype.resetCode = function() {
        for (var e = 0; e < this.codeDigit.length; e++) this.codeDigit[e].setText(""), this.codeDigit[e].hide();
        this.currentCodeDigit = 0, this.highlightDigit()
    }, n.prototype.highlightDigit = function() {
        for (var e = this.currentCodeDigit % this.padlockInfo.codeSize, t = 0; t < this.codeDigitContainer.length; t++) t === e ? this.codeDigitContainer[t].addClassNames("highlight") : this.codeDigitContainer[t].delClassNames("highlight")
    }
}
