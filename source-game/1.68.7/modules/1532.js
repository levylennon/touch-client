function(e, t, i) {
    function n() {
        this.animSequence = new s, this._reset()
    }
    var o = i(1533),
        a = i(103),
        r = i(105),
        s = i(1538),
        c = i(504),
        l = i(17)
        .getText;
    e.exports = n, n.prototype._reset = function() {
        this.isReady = !0, this.fightTurnReadyRequested = !1, this.synchronizeFightersSequenceLeftCounter = 0, this.synchronizeFightersRequest = null, this.fightEndRequested = !1, this.fightEndRequest = null, this.sequenceBuffer = [], this.lastEndMsgActionId = null, this.animSequence.clearMarks()
    }, n.prototype._turnReady = function() {
        return this.isReady ? (this._sendToFightManager({
            _messageType: "confirmTurnEnd"
        }), window.dofus.sendMessage("GameFightTurnReadyMessage", {
            isReady: !0
        }), void(this.fightTurnReadyRequested = !1)) : void(this.fightTurnReadyRequested = !0)
    }, n.prototype._fightEnd = function() {
        window.actorManager.removeAllFighterIndicators(), window.actorManager.allTurnNumbersOff(), window.actorManager.removeAllCarryStatus(this.animSequence.getCarry());
        var e = window.actorManager.userActor.getFighter();
        e && e.setShield(0), this._sendToFightManager(this.fightEndRequest), this.fightEndRequested = !1, this.fightEndRequest = null, window.actorManager.userActor.isDead = !1, window.actorManager.resetActors(), this._reset()
    }, n.prototype._sendToGui = function(e) {
        window.gui.transmitMessage(e)
    }, n.prototype._sendToAnimSequence = function(e) {
        this.animSequence.processFightSequenceMessage(e)
    }, n.prototype._sendToFightManager = function(e) {
        window.gui.fightManager.processFightSequenceMessage(e)
    }, n.prototype._transformAndSendToFightSequence = function(e) {
        if (!window.gui.fightManager.isInBattle()) {
            var t = e && e._messageType;
            return void console.error(t + " has been send outside a fightSequence")
        }
        var i = {
            _messageType: "messageSequence",
            isFakeSequence: !0,
            sequence: [{
                _messageType: "SequenceStartMessage"
            }, e, {
                _messageType: "SequenceEndMessage"
            }]
        };
        this._processSequence(i)
    }, n.prototype._processSequence = function(e) {
        function t(e) {
            function t() {
                return i.isReady = !0, i.sequenceBuffer.length ? i._processSequence(i.sequenceBuffer.shift()) : (window.dofus.sendMessage("GameActionAcknowledgementMessage", {
                    valid: !0,
                    actionId: i.lastEndMsgActionId
                }), i.lastEndMsgActionId = null, void(i.fightTurnReadyRequested && i._turnReady()))
            }
            if (!e) try {
                window.gui.fightManager.finishFightSequence(t)
            } catch (n) {
                console.error("fightManager#finishFightSequence", n), t()
            }
        }
        var i = this;
        if (!window.isoEngine.mapRenderer.isReady) return window.isoEngine.once("mapLoaded", function() {
            i._processSequence(e)
        });
        if (!window.gui.fightManager.isInUndefinedState()) {
            if (!this.isReady) return this.sequenceBuffer.push(e);
            this.isReady = !1;
            var n = Boolean(e.isFakeSequence),
                a = e.sequence,
                s = a.shift(),
                c = a.pop();
            if (this.lastEndMsgActionId = n ? this.lastEndMsgActionId : c.actionId, s.sequenceType !== c.sequenceType) return console.error(new Error("Different sequenceType"));
            if (s.authorId !== c.authorId) return console.error(new Error("Different authorId"));
            var l = new o;
            return l.runSequence(a, function(e) {
                return e ? (console.error("sequenceAssetPreload error:", e), t()) : void(window.gui.fightManager.isInUndefinedState() || (i.animSequence.reset(), a.forEach(function(e) {
                    return i.animSequence.canHandleMesage(e) ? (i._sendToAnimSequence(e), void i._sendToFightManager(e)) : r.emit(e._messageType, e)
                }), i.animSequence.launchAnimation(t)))
            })
        }
    }, n.prototype.initialize = function() {
        function e() {
            window.actorManager.removeInvisibilityOfAllActors(), n.fightEndRequest = n.fightEndRequest || {
                _messageType: "GameFightEndMessage"
            }, n._fightEnd()
        }

        function t(e) {
            n.animSequence.syncMarks(e.marks)
        }
        var i = window.isoEngine,
            n = this;
        i.on("messageSequence", this._processSequence.bind(this)), i.on("disconnect", this._reset.bind(this)), i.on("GameFightTurnReadyRequestMessage", this._turnReady.bind(this)), i.on("GameFightSynchronizeMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameFightLeaveMessage", function(e) {
            if (window.gui.fightManager.isInBattle()) {
                var t = window.gui.fightManager.getFighter(e.charId);
                if (t) {
                    var i = t.name,
                        o = t.id;
                    window.gui.chat.logMsg(l("ui.fight.hasQuit", i, o), c.PSEUDO_CHANNEL_FIGHT_LOG), t.data.alive && n._transformAndSendToFightSequence({
                        _messageType: "_GameActionFightLeaveMessage",
                        actionId: 0,
                        sourceId: 0,
                        targetId: e.charId
                    })
                }
            }
        }), r.on("FighterStatsListMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightNoSpellCastMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightSpellCastMessages", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightPointsVariationMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightDeathMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightKillMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightLifePointsGainMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightLifePointsLostMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightLifeAndShieldPointsLostMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightDispellableEffectMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightSlideMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightTeleportOnSameMapMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightExchangePositionsMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameActionFightSummonMessage", function(e) {
            n._transformAndSendToFightSequence(e)
        }), r.on("GameFightEndMessage", function(e) {
            n.fightEndRequest = e
        }), i.on("GameFightSpectateMessage", t), i.on("GameFightResumeMessage", t), i.on("GameFightResumeWithSlavesMessage", t), r.on("GameContextDestroyMessage", function() {
            window.actorManager.resetActors(), a.isRoleplayMode || (window.gui.fightManager.emptyFightMessagesStack(), n.animSequence.abortSequence(), e())
        })
    }, n.prototype.getCellIdsAffectedByMarks = function() {
        return this.animSequence.getMark()
            .getCellIdsAffectedByMarks()
    }, n.prototype.addAnimSequence = function(e, t) {
        this.animSequence.addIntoSequence(e, t)
    }
}
