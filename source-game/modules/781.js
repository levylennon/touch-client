function(e, t, i) {
    function n() {
        l.call(this, {
            autoClose: !0
        }), this.addClassNames("MainControls"), this._createDom();
        var e = this;
        this._fightCount = 0, this._shouldForceCreature = !1;
        var t = window.gui;
        t.on("connected", function() {
            e._shouldForceCreature = !1, g && this.serversData.isTournamentServer() && (e._shouldForceCreature = !0, g = !1), e._setPreferences(), e._setLayout("roleplay", !0), e._swapMonsterInfoButton(d.monsterInfoFirstPosition)
        }), t.on("disconnect", function() {
            e._fightCount = 0, e.fightLocked = !1, e._shouldForceCreature = !1
        });
        var i = t.fightManager;
        i.on("fightEnterPreparation", function() {
            var t = window.gui.playerData.isSpectator ? "spectator" : "battlePreparation";
            e._setLayout(t)
        }), i.on("fightEnterBattle", function() {
            var t = window.gui.playerData.isSpectator ? "spectator" : "battle";
            e._setLayout(t)
        }), i.on("fightEnd", function() {
            e._setLayout("roleplay")
        }), i.on("fightOptionUpdate", function() {
            e._secretButton.toggleClassName("on", window.gui.fightManager.fightSecretOn), e._helpButton.toggleClassName("on", window.gui.fightManager.fightHelpOn)
        }), d.on("monsterInfoFirstPosition", function(t) {
            e._swapMonsterInfoButton(t)
        }), window.gui.scenarioManager.on("stepChanged", function() {
            var t = window.gui.scenarioManager.isBehaviourEnabled(M.DISABLE_FIGHT_LEAVE_BTN);
            e._leaveButton.toggleClassName("disabledBehaviour", t)
        })
    }
    i(782);
    var o = i(88)
        .addTooltip,
        a = i(86),
        r = i(54)
        .dimensions,
        s = i(17)
        .getText,
        c = i(56)
        .inherits,
        l = i(777),
        d = i(55),
        u = i(783),
        p = i(60),
        h = i(52),
        f = i(787),
        b = i(517),
        m = i(466),
        M = i(129),
        g = !0,
        _ = 2;
    c(n, l), e.exports = n, n.prototype._resize = function() {
        var e;
        window.gui.ipadRatio ? (this.setStyles({
            bottom: 0,
            top: "",
            right: "",
            left: r.posMainControlBar + "px",
            width: r.mainControlBarSize + "px",
            height: r.bottomBarHeight + "px"
        }), e = "top") : (this.setStyles({
            bottom: "",
            top: r.posMainControlBar + "px",
            right: 0,
            left: "",
            width: r.sideBarWidth + "px",
            height: r.mainControlBarSize + "px"
        }), e = "left"), this.setOpeningSide(e)
    }, n.prototype._swapMonsterInfoButton = function(e) {
        e ? this._changeButtonPosition("monsterInfoButton", "showFightsButton") : this._changeButtonPosition("monsterInfoButton", "nicknamesButton")
    }, n.prototype._changeButtonPosition = function(e, t) {
        if (this.buttonBox) {
            for (var i = this.buttonBox.getChildren(), n = null, o = null, a = 0; a < i.length; a++) i[a].getClassNames()
                .indexOf(e) !== -1 ? n = i[a] : i[a].getClassNames()
                .indexOf(t) !== -1 && (o = i[a]);
            n && o && this.buttonBox.insertChildBefore(n, o)
        }
    }, n.prototype._createDom = function() {
        function e(e, t) {
            "function" == typeof e && (t = e), e = e || {};
            var n = e.className || [];
            return n.push("controlsButton"), i.appendChild(new a({
                disable: Boolean(e.disable),
                tooltip: e.tooltip,
                className: n,
                scaleOnPress: !0,
                sound: e.sound
            }, t))
        }
        var t = this,
            i = this.buttonBox = this.content.createChild("div", {
                className: "buttonBox"
            });
        this.playerPoints = i.appendChild(new u), this._fightListBtn = e({
            className: ["showFightsButton", "roleplayButton"],
            disable: !0
        }, function() {
            h.open("fightList")
        }), o(this._fightListBtn, function() {
            return s("ui.fightsOnMap", t._fightCount)
        }), window.gui.playerData.position.on("mapChanged", function(e) {
            var i = e.fights || [];
            t._fightCount = i.length, t._updateFightListButton()
        }), window.gui.on("MapFightCountMessage", function(e) {
            t._fightCount = e.fightCount || 0, t._updateFightListButton()
        }), this._tacticalModeBtn = e({
            className: ["tacticalModeButton", "battleButton", "battlePreparationButton", "spectatorButton"],
            tooltip: s("ui.fight.option.tacticMod")
        }, function() {
            var e = p.getValue("tacticModeEngaged", !0);
            e ? (window.isoEngine.tacticalMode.hide(), t._tacticalModeBtn.delClassNames("on"), p.setValue("tacticModeEngaged", !1)) : (window.isoEngine.tacticalMode.show(), t._tacticalModeBtn.addClassNames("on"), p.setValue("tacticModeEngaged", !0))
        }), this._consoleButton = e({
            className: ["consoleButton", "alwaysShowButton"]
        }, function() {
            h["switch"]("adminConsole")
        }), this._monsterInfoButton = e({
            className: ["monsterInfoButton", "roleplayButton"]
        }), this._monsterInfoButton.on("tapstart", function() {
            t._monsterInfoButton.toggleClassName("on", !0), window.foreground.showAllMonsterGroupAndNpcTooltips()
        }), this._monsterInfoButton.on("tapend", function() {
            t._monsterInfoButton.toggleClassName("on", !1), window.foreground.removeAllMonsterGroupAndNpcTooltips()
        }), this._nicknamesButton = e({
            className: ["nicknamesButton", "roleplayButton", "battleButton", "battlePreparationButton", "spectatorButton"],
            tooltip: s("ui.shortcuts.displayNames")
        }, function() {
            var e = window.actorManager.areNicknamesOn();
            t._nicknamesButton.toggleClassName("on", !e), e ? window.actorManager.turnNicknamesOff() : window.actorManager.turnNicknamesOn()
        }), this._mapInfoButton = e({
            className: ["mapInfoButton", "roleplayButton"],
            tooltip: s("ui.option.mapInfo")
        }, function() {
            var e = t._isMapInfoDisplayed = !t._isMapInfoDisplayed;
            window.gui.mapCoordinateDisplay.setMapInfoVisibility(e), t._mapInfoButton.toggleClassName("on", e), p.setValue("showMapCoordinates", e)
        }), this._fightLockButton = e({
            className: ["fightLockButton", "battlePreparationButton"],
            tooltip: s("ui.fight.option.blockJoiner")
        }, function() {
            t.fightLocked = !t.fightLocked, t._fightLockButton.toggleClassName("on", t.fightLocked), window.dofus.sendMessage("GameFightOptionToggleMessage", {
                option: b.FIGHT_OPTION_SET_CLOSED
            })
        }), this._helpButton = e({
            className: ["helpButton", "battlePreparationButton"],
            tooltip: s("ui.fight.option.help")
        }, function() {
            window.dofus.sendMessage("GameFightOptionToggleMessage", {
                option: b.FIGHT_OPTION_ASK_FOR_HELP
            })
        }), this._secretButton = e({
            className: ["secretButton", "battleButton", "battlePreparationButton"],
            tooltip: s("ui.fight.option.spectator")
        }, function() {
            window.dofus.sendMessage("GameFightOptionToggleMessage", {
                option: b.FIGHT_OPTION_SET_SECRET
            })
        }), this._leaveButton = e({
            className: ["leaveButton", "battleButton", "battlePreparationButton", "spectatorButton"],
            tooltip: s("ui.common.quit")
        }, function() {
            var e = window.gui,
                t = e.fightManager,
                i = e.playerData.id;
            if (e.playerData.isSpectator) return t.contextQuit();
            var n, o = 1 === e.serversData.settings.serverGameType;
            if (n = s(o && t.fightType !== f.FIGHT_TYPE_CHALLENGE ? "ui.popup.hardcoreGiveup" : "ui.popup.giveup"), t.fightType === f.FIGHT_TYPE_PVP_ARENA_1V1 && t.turnCount < _) n += "\n" + s("ui.party.arenaLeaveWarning");
            else if (t.fightType === f.FIGHT_TYPE_PVP_ARENA_3V3 && t.getFighter(i) && t.getFighter(i)
                .data.alive) {
                var a = t.getFighters(),
                    r = !0;
                a.forEach(function(e) {
                    e !== i && e > 0 && t.getFighter(e) && t.getFighter(e)
                        .data.alive && t.isFighterOnUsersTeam(e) && (r = !1)
                }), r || (n += "\n" + s("ui.party.arenaLeaveWarning"))
            }
            e.openConfirmPopup({
                title: s("ui.popup.warning"),
                message: n,
                cb: function(i) {
                    if (i && t.isInFight()) return e.fightManager.contextQuit()
                }
            })
        }), this._creatureModeButton = e({
            className: ["creatureModeButton", "alwaysShowButton"],
            tooltip: s("ui.fight.option.invisible")
        }, function() {
            var e = window.isoEngine.actorManager;
            if (e.canSwitchCreatureMode) {
                var i = !p.getValue("creatureMode", !1);
                t._creatureModeButton.toggleClassName("on", i), p.setValue("creatureMode", i), e.setCreatureMode(i)
            }
        }), window.isoEngine.actorManager.on("creatureModeChangedState", function(e) {
            t._creatureModeButton.toggleClassName("on", e), p.setValue("creatureMode", e)
        }), this._transparentModeButton = e({
            className: ["transparentModeButton", "alwaysShowButton"],
            tooltip: s("ui.option.transparentOverlayMode")
        }, function() {
            var e = window.isoEngine.actorManager,
                i = !e.isTransparentModeOn;
            t._transparentModeButton.toggleClassName("on", i), p.setValue("transparentMode", i), e.setTransparentMode(i)
        }), this._interactiveBlink = e({
            className: ["interactiveBlinkBtn", "roleplayButton"],
            tooltip: s("ui.option.interactivehaloModeButton")
        }, function() {
            var e = !window.isoEngine.interactiveBlink;
            window.isoEngine.setInteractiveBlink(e), e && window.isoEngine.highlightInteractivesWithDifferentType(), t._interactiveBlink.toggleClassName("on", e), p.setValue("interactiveBlink", e)
        }), this._progressBarPref = e({
            className: ["progressBarPrefBtn", "roleplayButton"],
            tooltip: s("ui.banner.customGauge")
        }, function() {
            window.gui.progressGauge.openPrefMenu()
        }), e({
            className: ["globalMenu", "alwaysShowButton"],
            tooltip: s("ui.common.mainMenu")
        }, function() {
            h["switch"]("global")
        })
    }, n.prototype._setLayout = function(e, t) {
        switch (e) {
            case "roleplay":
                this.replaceClassNames(["battlePreparation", "battle", "spectator"], ["roleplay"]), this.playerPoints.actionAndMovement.hide();
                break;
            case "spectator":
                this.replaceClassNames(["roleplay", "battle", "battlePreparation"], ["spectator"]), this.playerPoints.actionAndMovement.hide(), this.buttonBox.getChildren()[2] !== this._leaveButton && this._leaveButton.insertBefore(this._tacticalModeBtn);
                break;
            case "battlePreparation":
                this.replaceClassNames(["roleplay", "battle", "spectator"], ["battlePreparation"]), this.fightHelpOn = !1, this._helpButton.delClassNames("on"), this.fightSpectatorOn = !1, this._secretButton.addClassNames("on"), this.buttonBox.getChildren()[2] !== this._leaveButton && this._leaveButton.insertBefore(this._tacticalModeBtn);
                break;
            case "battle":
                this.replaceClassNames(["roleplay", "battlePreparation", "spectator"], ["battle"]), this.buttonBox.getChildren()[3] !== this._leaveButton && this._leaveButton.insertBefore(this._consoleButton), window.gui.playerData.isSpectator || this.playerPoints.actionAndMovement.show()
        }
        var i = window.gui.playerData,
            n = i.hasRight(m.SHOW_ADMIN_CONSOLE_BUTTON);
        this._consoleButton.toggleDisplay(n), this._nicknamesButton.toggleClassName("on", window.actorManager.areNicknamesOn()), t || (this._resize(), this.refresh())
    }, n.prototype._setPreferences = function() {
        var e = this._isMapInfoDisplayed = p.getValue("showMapCoordinates", !0);
        this._mapInfoButton.toggleClassName("on", e), window.gui.mapCoordinateDisplay.setMapInfoVisibility(e);
        var t = p.getValue("tacticModeEngaged", !0);
        this._tacticalModeBtn.toggleClassName("on", t);
        var i = p.getValue("interactiveBlink", !0);
        this._interactiveBlink.toggleClassName("on", i), window.isoEngine.setInteractiveBlink(i);
        var n = p.getValue("creatureMode", !1);
        this._shouldForceCreature && (n = !0, p.setValue("creatureMode", !0)), this._creatureModeButton.toggleClassName("on", n), window.isoEngine.actorManager.setCreatureMode(n);
        var o = p.getValue("transparentMode", !1);
        this._transparentModeButton.toggleClassName("on", o), window.isoEngine.actorManager.setTransparentMode(o)
    }, n.prototype._updateFightListButton = function() {
        var e = this._fightCount > 0;
        this._fightListBtn.setEnable(e), this._fightListBtn.toggleClassName("on", e)
    }
}
