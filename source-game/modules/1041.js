function(e, t, i) {
    function n() {
        r.call(this, {
            className: "globalWindow",
            title: l("ui.common.mainMenu"),
            positionInfo: {
                left: "c",
                top: "c",
                width: 300,
                height: 235
            }
        }), this.once("open", function() {
            this._createContent()
        }), this.on("open", function() {
            this._buildVersion.setText(window.gui.getBuildVersion()), p("OPTIONS_OPEN"), this._setupCharacterChange()
        }), this.on("close", function() {
            p("OPTIONS_CLOSE")
        })
    }
    i(1042);
    var o = i(56)
        .inherits,
        a = i(141),
        r = i(70),
        s = i(52),
        c = i(86)
        .DofusButton,
        l = i(17)
        .getText,
        d = i(945),
        u = i(563),
        p = i(91)
        .playUiSound;
    o(n, r), e.exports = n, n.prototype._createContent = function() {
        this.buttonOptions = this.windowBody.appendChild(new c(l("ui.common.options"), {
            sound: "SPEC_BUTTON"
        })), this.buttonOptions.on("tap", function() {
            s.close("global"), s.open("options")
        }), this.container = this.windowBody.createChild("div", {
            className: "container"
        }), this.multiCharacterSelector = new d({
            className: "multiCharacterSelector"
        }), this.container.appendChild(this.multiCharacterSelector), this.multiCharacterSelector.on("change", function(e) {
            a.reconnectByCharId(e), s.close("global")
        }), this.buttonChangeCharacter = this.container.appendChild(new c(l("ui.common.changeCharacter"), {
            className: "changeCharacterButton"
        })), this.buttonChangeCharacter.on("tap", function() {
            window.gui.openConfirmPopup({
                title: l("ui.common.confirm"),
                message: l("ui.common.confirmChangeCharacter"),
                cb: function(e) {
                    e && (s.close("global"), a.goBackToSelectionOf("character"))
                }
            })
        }), this.buttonDisconnect = this.windowBody.appendChild(new c(l("ui.common.disconnect"))), this.buttonDisconnect.on("tap", function() {
            window.gui.openConfirmPopup({
                title: l("ui.common.confirm"),
                message: l("ui.common.confirmDisconnect"),
                cb: function(e) {
                    e && (s.close("global"), window.dofus.disconnectAndReload())
                }
            })
        }), this.buttonReturnToGame = this.windowBody.appendChild(new c(l("ui.common.returnToGame"))), this.buttonReturnToGame.on("tap", function() {
            s.close("global")
        }), this._buildVersion = this.windowBody.createChild("div", {
            className: "buildVersion"
        })
    }, n.prototype._setupCharacterChange = function() {
        var e = u.getCharacterList(),
            t = window.gui.playerData.isFighting;
        this.buttonChangeCharacter.setEnable(!t);
        var i = !t && e.length >= 2;
        if (this.multiCharacterSelector.setEnable(i), i) {
            var n = window.gui.databases.Breeds;
            this.multiCharacterSelector.clearContent();
            for (var o = 0; o < e.length; o++) {
                var a = e[o],
                    r = a.name + " (" + n[a.breed].shortNameId + " " + a.level + ")";
                this.multiCharacterSelector.addOption(r, a.id)
            }
            var s = !0;
            this.multiCharacterSelector.select(window.gui.playerData.id, s)
        }
    }
}
