function(e, t, i) {
    function n() {}

    function o(e) {
        window.dofus.connectionManager.emit(e._messageType, e)
    }

    function a(e) {
        var t = window.actorManager.getActor(e.sourceId);
        t && window.isoEngine.fightSequence.addAnimSequence(function(e) {
            t.oneShootAnim({
                base: "AnimTacle"
            }, {
                backToStatic: !0
            }, e)
        })
    }

    function r(e) {
        var t = window.actorManager,
            i = t.getActor(e.targetId);
        i && window.isoEngine.fightSequence.addAnimSequence(function(e) {
            return window.isoEngine.fightSequence.animSequence.addInParallel(function(e) {
                i.death(e)
            }), e()
        })
    }

    function s(e) {
        window.isoEngine.fightSequence.addAnimSequence(function(t) {
            e._summon.show(), t()
        })
    }

    function c(e) {
        e._doNotProcess || window.isoEngine.fightSequence.addAnimSequence(function(t) {
            var i = window.actorManager.getActor(e.targetId);
            return i ? void window.actorManager.setActorLook(e.targetId, e.entityLook, {
                noSmokeAnimation: !0
            }, function() {
                i.applyLook(e._loadedLook), i.parentActor && i.parentActor.staticAnim(), i.refreshCarried(t)
            }) : (console.warn(new Error("Cannot get the actor: " + e.targetId)), t())
        })
    }

    function l(e) {
        window.isoEngine.fightSequence.addAnimSequence(function(t) {
            window.actorManager.refreshFighter(e), t()
        })
    }

    function d(e) {
        window.isoEngine.fightSequence.addAnimSequence(function(t) {
            for (var i = e.fighters, n = 0; n < i.length; n++) {
                var o = i[n];
                if (o.alive) {
                    var a = o.contextualId,
                        r = window.actorManager.getActor(a);
                    if (r) {
                        var s = o.disposition.cellId,
                            c = o.disposition.direction;
                        s === -1 || r.cellId === s || r.moving || r.setDisposition(s, c)
                    } else window.actorManager.addEmptyActor(o)
                }
            }
            return t()
        })
    }

    function u() {
        this.reset()
    }
    var p = i(18),
        h = i(1539),
        f = i(1541),
        b = i(1543),
        m = i(1544),
        M = i(1545),
        g = i(1546),
        _ = 1e4,
        A = {
            GameFightSynchronizeMessage: d,
            GameMapMovementMessage: b.mapMovement,
            GameActionFightSlideMessage: b.slideMovement,
            GameActionFightTeleportOnSameMapMessage: b.teleport,
            GameActionFightExchangePositionsMessage: b.exchangePositions,
            GameActionFightCloseCombatMessage: h,
            GameActionFightSpellCastMessage: h,
            GameActionFightPointsVariationMessage: f.actionOrMovementPointVariation,
            GameActionFightDispellableEffectMessage: f.buffVariation,
            GameActionFightMarkCellsMessage: m.addMark,
            GameActionFightUnmarkCellsMessage: m.removeMark,
            GameActionFightTriggerGlyphTrapMessage: m.triggerGlyphTrap,
            GameActionFightVanishMessage: M.vanish,
            GameActionFightInvisibilityMessage: M.setVisibility,
            GameActionFightInvisibleDetectedMessage: M.detected,
            GameActionFightInvisibleObstacleMessage: null,
            GameActionFightCarryCharacterMessage: g.carryCharacter,
            GameActionFightThrowCharacterMessage: g.throwCharacter,
            GameActionFightDropCharacterMessage: g.dropCharacter,
            GameActionFightSummonMessage: s,
            GameActionFightChangeLookMessage: c,
            GameActionFightTackledMessage: a,
            _GameActionFightLeaveMessage: r,
            GameActionFightDeathMessage: r,
            GameActionFightKillMessage: r,
            GameActionFightDispellEffectMessage: n,
            GameActionFightDispellSpellMessage: n,
            GameActionFightDispelSpellLevelMessage: n,
            GameActionFightDispellMessage: n,
            GameActionFightSpellCooldownVariationMessage: n,
            GameActionFightSpellImmunityMessage: n,
            GameActionFightReduceDamagesMessage: n,
            GameActionFightReflectDamagesMessage: n,
            GameActionFightReflectSpellMessage: n,
            GameActionFightModifyEffectsDurationMessage: n,
            GameActionFightDodgePointLossMessage: n,
            GameActionFightNoSpellCastMessage: n,
            GameFightTurnListMessage: n,
            GameActionFightStealKamaMessage: null,
            GameActionFightTriggerEffectMessage: null,
            GameFightRefreshFighterMessage: l,
            TextInformationMessage: o,
            FighterStatsListMessage: n,
            SequenceStartMessage: null,
            SequenceEndMessage: null,
            GameActionFightLifePointsGainMessage: f.lifePointVariation,
            GameActionFightLifePointsLostMessage: f.lifePointVariation,
            GameActionFightLifeAndShieldPointsLostMessage: f.lifePointVariation
        };
    e.exports = u, u.prototype.clearMarks = function() {
        m.clearMarks()
    }, u.prototype.syncMarks = function(e) {
        m.syncMarks(e)
    }, u.prototype.getCarry = function() {
        return g
    }, u.prototype.getMark = function() {
        return m
    }, u.prototype.processFightSequenceMessage = function(e) {
        if (e) {
            var t = A[e._messageType];
            return t && t(e)
        }
    }, u.prototype.reset = function() {
        this.sequence = [], this.abort = !1, this.currentAbortFunction = null, this.waitingForParallel = !1, this.parallelSequenceFinished = null, this.parallelSequenceNumber = 0, this.parallelSequenceDone = 0, this.resetParallelTimeout()
    }, u.prototype.resetParallelTimeout = function() {
        this.parallelTimeout && (window.clearTimeout(this.parallelTimeout), this.parallelTimeout = null)
    }, u.prototype.addIntoSequence = function(e, t) {
        this.sequence.push({
            animFunction: e,
            abortFunction: t
        })
    }, u.prototype.addInParallel = function(e) {
        var t = this;
        return this.parallelSequenceNumber++, e(function() {
            t.parallelSequenceDone++, t.verifyParallelSequenceFinished()
        })
    }, u.prototype.verifyParallelSequenceFinished = function() {
        var e = this;
        e.parallelSequenceFinished && e.waitingForParallel && e.parallelSequenceDone === e.parallelSequenceNumber && (e.parallelSequenceFinished(), e.parallelSequenceFinished = null)
    }, u.prototype.launchAnimation = function(e) {
        var t = this,
            i = [];
        this.sequence.forEach(function(e) {
            i.push(function(i) {
                return t.currentAbortFunction = e.abortFunction, t.abort ? i() : e.animFunction(i)
            })
        }), i.push(function(e) {
            t.waitingForParallel = !0, t.currentAbortFunction = null, t.parallelSequenceFinished = e, t.verifyParallelSequenceFinished(), t.resetParallelTimeout(), t.parallelTimeout = setTimeout(function() {
                t.parallelSequenceDone = t.parallelSequenceFinished, t.verifyParallelSequenceFinished()
            }, _)
        });
        try {
            p.series(i, function(i) {
                return i && console.error("sequenceAnimationEnd error:", i), t.reset(), e(t.abort)
            })
        } catch (n) {
            return console.error("sequenceAnimationEnd catch error:", n), t.reset(), e(t.abort)
        }
    }, u.prototype.canHandleMesage = function(e) {
        var t = e && A[e._messageType];
        return void 0 !== t
    }, u.prototype.abortSequence = function() {
        this.abort = !0, this.currentAbortFunction && (this.currentAbortFunction(), this.currentAbortFunction = null)
    }
}
