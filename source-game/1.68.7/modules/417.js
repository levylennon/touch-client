function(e, t, i) {
    function n() {
        function e() {
            t.setStyles({
                left: o.mapLeft + "px",
                top: o.mapTop + "px",
                width: o.mapWidth + "px",
                height: o.mapHeight + "px"
            })
        }
        u.call(this, "div", {
            className: "foreground",
            hidden: !0
        }), this.tapOptions = {}, this.fightIsUserTurn = !1, this.locked = !1, this.lockMap = {}, f.on("gameContextChanged", this.onGameContextChanged.bind(this));
        var t = this,
            i = window.gui;
        i.once("connected", function() {
            t._setupInfoBox(), t._createConfirmBox(), t._setupDrop(), t._setupTouchInteraction(), t._setupBorderArrow(), t._setupMonsterGroupTooltips(), e(), i.timeline.setStyles({
                top: o.mapHeight - 150 + "px",
                left: o.mapWidth + "px"
            }), t._initHandlers(this), this.on("disconnect", function() {
                t.tapOptions = {}, t.fightIsUserTurn = !1, t.locked = !1, t.lockMap = {}, t.hideInfobox(), t.confirmBox.close(), t.minMaxSelector.hide(), t.hide(), t.removeAllMonsterGroupAndNpcTooltips()
            })
        }), i.on("resize", e)
    }
    var o = i(54)
        .dimensions,
        a = i(418),
        r = i(55),
        s = i(56)
        .inherits,
        c = i(421),
        l = i(91)
        .playUiSound,
        d = i(425),
        u = i(72),
        p = i(17)
        .getText,
        h = i(17)
        .processText,
        f = i(103),
        b = i(130),
        m = 761;
    s(n, u), e.exports = n, n.prototype._setupDrop = function() {
        function e(e) {
            var i = window.gui.playerData.inventory.objects[t],
                n = i ? i.getName() : t;
            window.gui.openConfirmPopup({
                title: p("ui.common.confirm"),
                message: h(p("ui.common.confirmationDropItem"), e, n),
                cb: function(i) {
                    i && (window.dofus.sendMessage("ObjectDropMessage", {
                        objectUID: t,
                        quantity: e
                    }), l("DROP_ITEM_1"))
                }
            })
        }
        var t, i = this,
            n = this.minMaxSelector = window.gui.windowsContainer.appendChild(new c);
        n.on("confirm", e), a.setDroppable(this, ["itemContextMenu", "equipment"]), this.on("drop", function(o, a, r) {
            if (!window.gui.playerData.isInDialog) switch (a) {
                case "itemContextMenu":
                    var s = i.convertScreenToCanvasCoordinate(r.x, r.y);
                    window.isoEngine.useItem(s.x, s.y, o.item.objectUID);
                    break;
                case "equipment":
                    t = o.itemInstance.objectUID;
                    var c = o.itemInstance.quantity;
                    1 === c ? e(1) : n.open({
                        min: 1,
                        max: c,
                        x: r.x,
                        y: r.y
                    })
            }
        })
    }, n.prototype._initHandlers = function(e) {
        function t() {
            o.tapOptions.mode = "fight", o.tapOptions.possiblePlacements && delete o.tapOptions.possiblePlacements
        }

        function i() {
            o.fightIsUserTurn && (o.fightIsUserTurn = !1, o.confirmBox.hide(), window.gui.damagePreview.hide(), window.isoEngine.clearUserMovementZone())
        }

        function n(t) {
            var i = o.fightIsUserTurn = e.playerData.characters.canControlCharacterId(t.id),
                n = window.isoEngine;
            return n.fightTurnStart(i), n.clearHighlights(), i && r.soundOnPlayerTurnStart && l("PLAYER_TURN"), n.mapRenderer.isReady ? void o._displayUserZones() : n.mapRenderer.once("ready", function() {
                o._displayUserZones()
            })
        }
        var o = this;
        e.on("sendAllFightEvent", function() {
            o._displayUserZones()
        }), e.on("GameFightPlacementPossiblePositionsMessage", function(e) {
            o.tapOptions.mode = "fightPlacement", e.teamNumber === d.TEAM_CHALLENGER ? o.tapOptions.possiblePlacements = e.positionsForChallengers : e.teamNumber === d.TEAM_DEFENDER ? o.tapOptions.possiblePlacements = e.positionsForDefenders : o.tapOptions.possiblePlacements && delete o.tapOptions.possiblePlacements, o.emit("fightPlacementPosition")
        }), e.on("GameFightJoinMessage", function(e) {
            return e.isFightStarted ? t() : void(o.tapOptions.mode = "fightPlacement")
        }), e.on("GameFightStartMessage", t), e.on("GameFightResumeMessage", t), e.on("GameFightResumeWithSlavesMessage", t), e.on("GameFightTurnStartPlayingMessage", function() {
            o.fightIsUserTurn = !0
        }), e.on("GameFightTurnStartMessage", n), e.on("GameFightTurnResumeMessage", n), e.on("GameFightTurnStartSlaveMessage", n), e.on("GameFightTurnEndMessage", i), e.on("GameFightEndMessage", i), e.on("spellSlotSelected", function(e) {
            o.selectSpell(e)
        }), e.on("spellSlotDeselected", function() {
            o.deselectSpell()
        }), e.playerData.characters.on("specificCharacteristicsUpdated", function(t) {
            "movementPointsCurrent" === t && e.playerData.isFighting && o.fightIsUserTurn && (o.isSpellSelected() || window.isoEngine.displayUserMovementZone())
        })
    }, n.prototype._displayUserZones = function() {
        var e = this.isSpellSelected();
        this.fightIsUserTurn ? e ? this._displaySpellRange() : window.isoEngine.displayUserMovementZone() : e && this._displaySpellRange()
    }, n.prototype._displaySpellRange = function() {
        var e = this.tapOptions,
            t = e.spellId,
            i = window.gui.playerData.characters.getControlledCharacter(),
            n = i.spellData.spells[t],
            o = {
                spellId: t,
                castInDiagonal: n.getProperty("castInDiagonal"),
                castInLine: n.getProperty("castInLine"),
                castTestLos: n.getProperty("castTestLos"),
                minRange: n.getProperty("minRange"),
                range: n.getProperty("range"),
                apCost: n.getProperty("apCost", n.level),
                needFreeCell: n.getProperty("needFreeCell"),
                needFreeTrapCell: n.getProperty("needFreeTrapCell"),
                needTakenCell: n.getProperty("needTakenCell"),
                name: n.getName()
            };
        e.spell = n, window.isoEngine.setCurrentSpell(o), window.isoEngine.displaySpellRange()
    }, n.prototype.refreshSpellRange = function() {
        this.isSpellSelected() && this._displaySpellRange()
    }, n.prototype.selectSpell = function(e) {
        this.tapOptions.spellId = e, this.tapOptions.characterId = window.gui.playerData.characters.controlledCharacterId, "fight" === this.tapOptions.mode && this._displayUserZones(), this.emit("spellSelected")
    }, n.prototype.deselectSpell = function() {
        void 0 !== this.tapOptions.spellId && (this.emit("spellCanceled"), this.confirmBox.close(), delete this.tapOptions.spellId), "fight" === this.tapOptions.mode && this._displayUserZones()
    }, n.prototype.isSpellSelected = function() {
        return Boolean(this.tapOptions.spellId) || 0 === this.tapOptions.spellId
    }, n.prototype.lock = function(e) {
        return e ? (this.lockMap[e] = !0, this.locked = !0, void this.cancelTransform()) : console.error(new Error("Foreground.lock: no reason provided"))
    }, n.prototype.unlock = function(e) {
        if (!e) return console.error(new Error("Foreground.unlock: no reason provided"));
        this.lockMap[e] = !1;
        for (var t = Object.keys(this.lockMap), i = 0; i < t.length; i++)
            if (this.lockMap[t[i]]) return;
        this.locked = !1
    }, n.prototype.onGameContextChanged = function() {
        f.isRoleplayMode ? this.tapOptions.mode = "roleplay" : (delete this.tapOptions.mode, this.hideBorderArrow())
    }, n.prototype.isSameSubArea = function(e, t) {
        var i = window.gui.playerData.position.subArea || {},
            n = i.id || -1;
        b.getObject("MapPositions", e, function(e, i) {
            if (e) return t(e, null);
            var o = i.subAreaId || -1,
                a = o === n || o === m;
            t(null, a)
        })
    }
}
