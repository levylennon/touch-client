function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: "Timeline",
            hidden: !0
        }), this._createContent(), this.statsDetails = null, this.currentFighter = null, this.selectedFighter = null, this.isCollapsed = !1, this._registerListeners(window.gui), this.timerTimestamp = null, this.timerDuration = null, this.timerTween = null, this._previousFighter = null, this.intervalId = null, this.willDisplayWarning = !1
    }
    i(890);
    var o = i(56)
        .inherits,
        a = i(55),
        r = i(72),
        s = i(570),
        c = i(891),
        l = i(893),
        d = i(88)
        .addTooltip,
        u = i(17)
        .getText,
        p = i(596),
        h = i(453),
        f = i(22),
        b = i(418),
        m = i(684),
        M = i(129),
        g = i(21),
        _ = 55,
        A = 45,
        O = 0;
    o(n, r), e.exports = n, n.prototype._registerListeners = function(e) {
        function t(e, t, i) {
            t || (t = [], e.length > 0 && t.push(e[0]));
            for (var n = r.getAvailableFighters(), o = 0, a = t.length; o < a; o++) {
                var s = t[o],
                    c = n[s];
                c && i(c)
            }
        }

        function i(e, i) {
            t(e, i, function(e) {
                o.unsetTurnOf(e), o.onOrderFightersSwitched(), a.hideDeadFighters && o.refreshTimeline()
            })
        }

        function n(e) {
            e.refreshLife()
        }
        var o = this,
            r = e.fightManager;
        r.on("gameFightTurnEnd", function(e) {
            o._setWillDisplayWarning(!1), o._startTimer(0);
            var t = this.getFighter(e);
            t && t.data.alive && o.unsetTurnOf(t)
        }), r.on("FightersListUpdated", function() {
            o.refreshTimeline()
        }), r.on("UpdatePreFightersList", function() {
            o.refreshTimeline()
        }), r.on("GameFightTurnStart", function(e, t) {
            var i = this.getFighter(e);
            i && i.data.alive && o.setTurnOf(i, t)
        }), e.on("gameOptionChanged", function(e) {
            "showSummonWithoutTurn" !== e.gameOptionId && "displayEndOfTurnRight" !== e.gameOptionId || o.refreshTimeline()
        }), r.on(p.FIGHTER_DEATH, i), r.on(p.FIGHTER_LEAVE, i), r.on("FoldAll", function() {}), r.on("BuffAdd", function(e, t) {
            n(t), o._refreshAfterResize()
        }), r.on("BuffDispell", function(e) {
            n(e)
        }), r.on("BuffRemove", function(e, t) {
            n(t), o._refreshAfterResize()
        }), r.on("BuffUpdate", function(e, t) {
            n(t)
        }), r.on("TurnCountUpdated", function(e) {
            o.turnCountLabel.setText(u("ui.fight.turnNumber", e + 1))
        }), r.on("OrderFightersSwitched", function() {
            o.onOrderFightersSwitched()
        }), r.on("fightEnterPreparation", function(e) {
            o._setWillDisplayWarning(!0), o._startTimer(e.timeMaxBeforeFightStart)
        }), a.on("hideDeadFighters", function() {
            o.refreshTimeline()
        }), a.on("orderFighters", function(e) {
            var t = r.getAvailableFighters();
            for (var i in t) t[i].picto.fighterNumber.toggleDisplay(e);
            o.refreshTimeline(), e || window.actorManager.allTurnNumbersOff()
        }), e.on("resize", function(e) {
            O = Math.floor(.7 * e.mapWidth)
        }), this.on("collapse", function(e) {
            this.isCollapsed = e, this._refreshAfterResize()
        }), this.on("dragEnd", function() {
            this.fighterListScroller.refresh(), this._checkForWarningPosition()
        }), this.on("slideEnd", function() {
            this._checkForWarningPosition()
        })
    }, n.prototype._createContent = function() {
        s(this, {
            isCollapsable: !0,
            title: " "
        });
        var e = this.infoAndFighters = this.createChild("div", {
            className: "infoAndFighters"
        });
        this.fighterListContainer = e.createChild("div", {
            name: "fighterListContainer",
            className: "fighterListContainer"
        }), this.fighterListScroller = this.fighterListContainer.appendChild(new h({
            name: "fighterListScroller",
            className: "fighterList"
        }, {
            isHorizontal: !0
        })), this.fighterList = this.fighterListScroller.content, this.infoContainer = e.createChild("div", {
            className: "infoContainer"
        }), this.timerWarning = this.infoContainer.createChild("div", {
            className: "timerWarning"
        }), this.numberWarning = this.timerWarning.createChild("div", {
            className: "numberWarning"
        }), this.timerWarning.hide(), this.turnCountLabel = this.infoContainer.createChild("div", {
            className: "turnCountLabel"
        }), this.fightControlButtons = this.infoContainer.appendChild(new c), this.fightControlButtons.on("TurnReadyPressed", function() {
            window.gui.fightManager.finishTurn()
        }), this.buffList = this.appendChild(new l), this.toggleClassName("reverse", !a.displayEndOfTurnRight)
    }, n.prototype.close = function() {
        this.currentFighter && this.unsetTurnOf(this.currentFighter), this.selectedFighter = null, this.buffList.close(), this.hide(), this.fighterList.clearContent(), this.turnCountLabel.clearContent(), this.intervalId && this._startTimer(0), this._setWillDisplayWarning(!1)
    }, n.prototype.restoreFighterList = function() {
        this.infoAndFighters.insertAsFirstChild(this.fighterListContainer), this.restartTimerAnimation(), this.refreshTimeline()
    }, n.prototype.appendFighterListTo = function(e) {
        e.appendChild(this.fighterListContainer), this.restartTimerAnimation(), this.refreshTimeline()
    }, n.prototype.refreshTimeline = function() {
        var e, t, i, n = window.gui.fightManager.isInFightPreparation(),
            o = window.gui.fightManager,
            r = o.getFighters(),
            s = o.getDeadFighters(),
            c = o.getAvailableFighters(),
            l = o.getEntitiesWithoutTurn(),
            d = {},
            u = 1;
        if (this.toggleClassName("reverse", !a.displayEndOfTurnRight), n) {
            var p = this.fighterList.getChildren();
            for (i = 0; i < p.length; i++) this.fighterList.removeChild(p[i])
        }
        this.selectedFighter && !this.selectedFighter.data.alive && (this.selectedFighter = null, this.buffList.hide());
        var h = r.length,
            f = 0;
        for (i = 0; i < h; i++)
            if (e = r[i], d[e] = !0, t = c[e]) {
                var b = s.indexOf(e) < 0;
                if (t.setAlive(b, !0), b || !a.hideDeadFighters) {
                    var m = !0,
                        M = l.indexOf(t.id) !== -1;
                    if (M && !a.showSummonWithoutTurn && (m = !1), m) {
                        t.updateNumber(b && u++), f += t.isSummon() ? A : _;
                        var g;
                        if (!this.fighterList.getChild(e)) {
                            g = null;
                            for (var v = i + 1; v < h && !(g = this.fighterList.getChild(r[v])); v++);
                            this.fighterList.insertChildBefore(t.picto, g), t.resizeFighterIllustration()
                        }
                    } else d[e] = !1
                }
            } else console.error(new Error("Fighter " + e + " not found when refreshing timeline during fight state " + o.fightState));
        if (!n)
            for (e in c)
                if (!d[e]) {
                    var y = this.fighterList.getChild(e);
                    y && this.fighterList.removeChild(y)
                } f = Math.min(f, O), this.fighterListContainer.setStyle("width", f + "px"), this._refreshAfterResize()
    }, n.prototype._refreshAfterResize = function() {
        var e = this;
        setTimeout(function() {
            e.emit("resized"), e.fighterListScroller.refresh(), e.isCollapsed && e.currentFighter && e.fighterListScroller.showElement(e.currentFighter.picto)
        }, 0)
    }, n.prototype.onOrderFightersSwitched = function() {
        for (var e = this.fighterList.getChildren(), t = window.gui.fightManager, i = 1, n = 0, o = e.length; n < o; n++) {
            var a = e[n].getWuiName(),
                r = t.getFighter(a);
            if (!r) return console.error("Fighters' order switch failed, fighter does not exist.");
            r.data.alive ? (r.updateNumber(i), i++) : r.updateNumber()
        }
    }, n.prototype.linkToTimeline = function(e) {
        var t = this;
        d(e.picto, function() {
            if (!window.gui.fightManager.isInFightPreparation() || e.data.disposition.cellId !== -1) return t.statsDetails ? e.refreshStatsTooltipContent(t.statsDetails) : t.statsDetails = e.createStatsTooltipContent(), t.statsDetails
        }), e.picto.on("tap", function() {
            t.onFighterSelected(e)
        }), e.picto.on("tooltipOn", function() {
            t.onPressEntity(e, !1), window.isoEngine.displayEnemyMovementZone(e)
        }), e.picto.on("tooltipOut", function() {
            t.onReleaseEntity(), window.isoEngine.removeEnemyMovementZone()
        }), b.setDroppable(e.picto, ["shortcutBar"]), e.picto.on("beforeDragEnd", function() {
            t.onFighterSelected(e)
        })
    }, n.prototype.onFighterSelected = function(e) {
        if (!window.gui.scenarioManager.isBehaviourEnabled(M.DISABLE_TIMELINE_CAST)) {
            var t = window.gui.shortcutBar.getIdOfSelectedSpellIfAny();
            if (t || 0 === t) {
                var i = window.gui,
                    n = i.playerData.characters.controlledCharacterId;
                return void(e.data.alive && i.fightManager.currentFighterId === n && (i.fightManager.castSpellOnTarget(t, e.id, i.playerData.characters.controlledCharacterId), window.isoEngine.clearSpellDisplay(), i.shortcutBar.deselectCurrentSlot()))
            }
            if (this.selectedFighter) {
                window.actorManager.selectionIndicatorOff(this.selectedFighter);
                var o = this.selectedFighter.picto;
                o && o.rootElement && o.delClassNames("selected")
            }
            if (window.gui.pingSystem.isActive()) {
                var a = e.data.disposition.cellId;
                return window.isoEngine.mapRenderer.addPingHighlight(a, window.isoEngine.getContext(a), !0)
            }
            this.selectedFighter === e ? (this.selectedFighter = null, this.buffList.hide()) : (window.actorManager.selectionIndicatorOn(e), e.picto.addClassNames("selected"), this.selectedFighter = e, this.buffList.open(e)), this._refreshAfterResize()
        }
    }, n.prototype.onPressEntity = function(e) {
        e && e.data.disposition.cellId !== -1 && e.data.stats.invisibilityState !== m.INVISIBLE && window.isoEngine.highlightActorOnAction(e.id, 1e3)
    }, n.prototype.onReleaseEntity = function() {
        window.isoEngine.clearHighlights()
    }, n.prototype.restartTimerAnimation = function() {
        if (this.currentFighter && this.timerTween) {
            this.timerTween.cancel();
            var e = Date.now() - this.timerTimestamp;
            if (!(e < 0 || e >= this.timerDuration)) {
                var t = this.timerDuration - e,
                    i = Math.ceil(100 * e / this.timerDuration);
                this.playTimerAnimation(t, i)
            }
        }
    }, n.prototype.startTimerAnimation = function(e) {
        var t = this.currentFighter.id,
            i = this.currentFighter.isCreature && 0 === this.currentFighter.data.teamId;
        if (i) {
            var n = window.gui.fightManager.getSummonerId(t),
                o = window.gui.playerData.characterBaseInformations.id;
            if (n === o && window.gui.fightManager.isInactive) return
        }
        this.timerTimestamp = Date.now(), this.timerDuration = e, this.playTimerAnimation(e, 0)
    }, n.prototype.stopTimerAnimation = function() {
        this.timerTimestamp = null, this.timerDuration = null, this.timerTween && this.timerTween.cancel(), this.timerTween = null;
        var e = this.currentFighter.picto;
        e.delClassNames("current"), e.fighterTimeValue.setStyles({
            webkitTransition: "",
            webkitTransform: "translate3d(0,100%,0)"
        })
    }, n.prototype.playTimerAnimation = function(e, t) {
        var i = this.currentFighter.picto;
        i.fighterTimeValue.setStyle("webkitTransform", "translate3d(0, " + (100 - t) + "%, 0)");
        var n = this;
        window.setTimeout(function() {
            n.timerTween = f.tween(i.fighterTimeValue, {
                webkitTransform: "translate3d(0, 0, 0)"
            }, {
                time: e,
                easing: "linear"
            })
        }, 0), i.addClassNames("current"), this.isCollapsed && this.fighterListScroller.showElement(i)
    }, n.prototype.unsetTurnOf = function(e) {
        this.currentFighter && this.currentFighter === e && (window.actorManager.turnIndicatorOff(e), this.stopTimerAnimation(), this.currentFighter = null)
    }, n.prototype.setTurnOf = function(e, t) {
        this.currentFighter && this.unsetTurnOf(this.currentFighter), this.currentFighter = e, this.startTimerAnimation(t), this.emit("setTurnOf", e, t), this._previousFighter && window.actorManager.turnIndicatorOff(this._previousFighter), window.actorManager.turnIndicatorOn(e), this._previousFighter = e;
        var i = window.gui.playerData.characters.controlledCharacterId,
            n = i === e.id;
        n && !this.intervalId || (this._setWillDisplayWarning(!1), this._startTimer(0)), n && (this._setWillDisplayWarning(!0), this._startTimer(t))
    }, n.prototype._updateTimeLeft = function(e) {
        function t(e) {
            var t = Math.floor(e / 60),
                i = e % 60,
                n = g.leadWithZero(t),
                o = g.leadWithZero(i);
            return r += n + ":" + o
        }
        var i = Math.round(e / 1e3),
            n = this.getChildren()[0],
            o = n.getChildren()[0],
            a = o.getChildren()[2],
            r = "";
        if (0 === e ? a.setStyle("display", "none") : a.setStyles({
                display: "inline-block",
                marginLeft: "10px"
            }), i <= 5 && this.willDisplayWarning) {
            var s = "number" + i;
            this.numberWarning.addClassNames(s), this._checkForWarningPosition(), this.timerWarning.show()
        }
        a.setText(t(i))
    }, n.prototype._startTimer = function(e) {
        var t = this,
            i = e;
        this._updateTimeLeft(i), this.intervalId && window.clearInterval(this.intervalId), 0 === e ? (this.intervalId = null, t._updateTimeLeft(e), window.setTimeout(function() {
            t.timerWarning.hide(), t.numberWarning.delClassNames(["number5", "number4", "number3", "number2", "number1", "number0"])
        }, 500)) : this.intervalId = window.setInterval(function() {
            i -= 1e3, i <= 0 ? t._startTimer(0) : t._updateTimeLeft(i)
        }, 1e3)
    }, n.prototype._setWillDisplayWarning = function(e) {
        this.willDisplayWarning = e
    }, n.prototype._checkForWarningPosition = function() {
        var e = this.rootElement.clientHeight,
            t = 0 + e,
            i = parseInt(this.getStyle("top"), 10) <= t;
        this.timerWarning.toggleClassName("reverse", i)
    }
}
