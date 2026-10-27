function(e, t, i) {
    function n() {
        function e(e) {
            d.show(), l._isReadyForFight = e, e ? d.addClassNames("readyForFight") : d.delClassNames("readyForFight")
        }

        function t() {
            d.hide(), l.setTurnReadyButtonAvailability(!1), u.show()
        }

        function i(e) {
            e && !window.gui.playerData.characters.canControlCharacterId(e.id) || l.setTurnReadyButtonAvailability(!0)
        }

        function n() {
            l.setTurnReadyButtonAvailability(!1)
        }

        function o() {
            u.hide()
        }
        r.call(this, "div", {
            className: "fightControlButtons"
        });
        var l = this;
        this._isReadyForFight = !1, this._fightReadyBtn = new s({
            text: a("ui.banner.ready"),
            className: "fightBtn",
            hidden: !0,
            scaleOnPress: !0,
            sound: "READY_TO_FIGHT"
        }, function() {
            l.toggleReadyForFight()
        });
        var d = this._fightReadyBtn;
        this.appendChild(d), this._turnReadyBtn = new s({
            text: a("tablet.fight.option.nextTurn"),
            className: "fightBtn",
            hidden: !0,
            scaleOnPress: !0,
            sound: "END_TURN"
        }, function() {
            l.emit("TurnReadyPressed"), n()
        });
        var u = this._turnReadyBtn;
        this.appendChild(u), window.gui.on("GameFightJoinMessage", function(t) {
            e(!1), t.canSayReady ? d.enable() : d.disable()
        }), window.gui.fightManager.on("playerReady", e), window.gui.on("GameFightStartMessage", t), window.gui.on("GameFightResumeMessage", t), window.gui.on("GameFightResumeWithSlavesMessage", t), window.gui.on("GameFightTurnStartPlayingMessage", function() {
            i(null)
        }), window.gui.on("GameFightTurnStartMessage", i), window.gui.on("GameFightTurnStartSlaveMessage", i), window.gui.on("GameFightTurnResumeMessage", i), window.gui.on("GameFightTurnEndMessage", n), window.gui.on("GameFightEndMessage", o), window.gui.on("disconnect", o), window.gui.scenarioManager.on("stepChanged", function() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(c.DISABLE_FIGHT_BTN);
            l.toggleClassName("disabled", e)
        })
    }
    i(892);
    var o = i(56)
        .inherits,
        a = i(17)
        .getText,
        r = i(72),
        s = i(86),
        c = i(129);
    o(n, r), e.exports = n, n.prototype.toggleReadyForFight = function() {
        window.dofus.sendMessage("GameFightReadyMessage", {
            isReady: !this._isReadyForFight
        })
    }, n.prototype.isReadyForFightButtonVisible = function() {
        return window.gui.fightManager.isInFight() && this._fightReadyBtn.isVisible() && !window.gui.scenarioManager.isBehaviourEnabled(c.DISABLE_FIGHT_BTN)
    }, n.prototype.setTurnReadyButtonAvailability = function(e) {
        var t = this._turnReadyBtn;
        e ? t.enable() : t.disable()
    }, n.prototype.getButtonForTuto = function(e) {
        var t;
        switch (e) {
            case "fightReadyBtn":
                t = this._fightReadyBtn;
                break;
            case "turnReadyBtn":
                t = this._turnReadyBtn;
                break;
            default:
                return null
        }
        return t.isVisible() ? t : null
    }
}
