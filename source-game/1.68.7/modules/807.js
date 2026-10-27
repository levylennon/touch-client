function(e, t, i) {
    function n() {
        this._targetInfo = {}
    }
    var o = i(17)
        .getText,
        a = i(670),
        r = i(808),
        s = i(440);
    e.exports = n, n.prototype.disconnect = function() {
        this._targetInfo = {}
    }, n.prototype.initialize = function(e) {
        function t(e) {
            var t = a.setupNames(i._targetInfo.targetId, e.sourceId);
            t && (a.setupCancelPopupTexts({
                title: o("ui.fight.challenge"),
                message: o("ui.fight.youChallenge", t.targetName)
            }), a.setupConfirmPopupTexts({
                title: o("ui.fight.challenge"),
                message: o("ui.fight.aChallengeYou", t.sourceName)
            }), a.askingChallengePopup(e.fightId))
        }
        var i = this;
        e.on("GameRolePlayPlayerFightFriendlyRequestedMessage", t), e.on("GameRolePlayPlayerFightFriendlyAnsweredMessage", function(e) {
            a.closingChallengePopup(e.sourceId === window.gui.playerData.id)
        }), e.on("ChallengeFightJoinRefusedMessage", function(e) {
            i.alertChallengeRefused(e.reason)
        }), e.on("GameRolePlayAggressionMessage", function(e) {
            i.alertAggression(e)
        })
    }, n.prototype.requestChallenge = function(e) {
        this._targetInfo = e, this.sendRequest(e, !1, !0, !1)
    }, n.prototype.requestAssault = function(e, t) {
        this._targetInfo = e, this.sendRequest(e, t, !1, !0)
    }, n.prototype.sendRequest = function(e, t, i, n) {
        var o = e.targetId,
            a = e.targetCellId;
        if (n) {
            var r = window.isoEngine.actorManager,
                c = r.getActor(o);
            if (!c) return;
            var l = c.data;
            if ("GameRolePlayCharacterInformations" === l.type) {
                if (t) return this.confirmAttackTarget(e, !0, null);
                var d = "GameRolePlayMutantInformations" === r.userActor.data.type;
                if (l.alignmentInfos.alignmentSide === s.ALIGNMENT_NEUTRAL && !d) return this.confirmAttackTarget(e, !1, 2);
                var u = l.alignmentInfos.characterPower - o,
                    p = window.gui.playerData.getLevelDiff(u);
                if (p) return this.confirmAttackTarget(e, !1, p)
            }
        }
        window.dofus.sendMessage("GameRolePlayPlayerFightRequestMessage", {
            targetId: o,
            targetCellId: a,
            friendly: i
        })
    }, n.prototype.confirmAttackTarget = function(e, t, i) {
        var n, a = e.targetName;
        t || 0 === i ? n = o("ui.pvp.doUAttack", a) : 2 === i ? n = o("ui.pvp.doUAttackNeutral") : i === -1 ? n = o("ui.pvp.doUAttackNoGain", a) : 1 === i && (n = o("ui.pvp.doUAttackBonusGain", a));
        var r = this;
        window.gui.openConfirmPopup({
            title: o("ui.popup.warning"),
            message: n,
            cb: function(i) {
                1 === i && r.sendRequest(e, t, !1, !1)
            }
        })
    }, n.prototype.alertAggression = function(e) {
        var t = window.isoEngine.actorManager,
            i = t.getActor(e.attackerId),
            n = t.getActor(e.defenderId);
        if (!i || !n) return console.error("Could not find aggressed actors.");
        var a = o("ui.pvp.aAttackB", i.data.name, n.data.name);
        window.gui.chat.logMsg(a)
    }, n.prototype.alertChallengeRefused = function(e) {
        var t;
        switch (e) {
            case r.CHALLENGE_FULL:
                t = o("ui.fight.challengeFull");
                break;
            case r.TEAM_FULL:
                t = o("ui.fight.teamFull");
                break;
            case r.WRONG_ALIGNMENT:
                t = o("ui.wrongAlignment");
                break;
            case r.WRONG_GUILD:
                t = o("ui.fight.wrongGuild");
                break;
            case r.TOO_LATE:
                t = o("ui.fight.tooLate");
                break;
            case r.MUTANT_REFUSED:
                t = o("ui.fight.mutantRefused");
                break;
            case r.WRONG_MAP:
                t = o("ui.fight.wrongMap");
                break;
            case r.JUST_RESPAWNED:
                t = o("ui.fight.justRespawned");
                break;
            case r.IM_OCCUPIED:
                t = o("ui.fight.imOccupied");
                break;
            case r.OPPONENT_OCCUPIED:
                t = o("ui.fight.opponentOccupied");
                break;
            case r.MULTIACCOUNT_NOT_ALLOWED:
                t = o("ui.fight.onlyOneAllowedAccount");
                break;
            case r.INSUFFICIENT_RIGHTS:
                t = o("ui.fight.insufficientRights");
                break;
            case r.MEMBER_ACCOUNT_NEEDED:
                t = o("ui.fight.MemberAccountNeeded");
                break;
            case r.OPPONENT_NOT_MEMBER:
                t = o("ui.fight.opponentNotMember");
                break;
            case r.TEAM_LIMITED_BY_MAINCHARACTER:
                t = o("ui.fight.teamLimitedByMainCharacter");
                break;
            case r.GHOST_REFUSED:
                t = o("ui.fight.ghostRefused");
                break;
            case r.AVA_ZONE:
                t = o("ui.fight.cantAttackAvAZone");
                break;
            case r.BREED_ALREADY_PRESENT:
                t = o("ui.fight.uniqueBreedInFight");
                break;
            default:
                return
        }
        window.gui.chat.logMsg(t)
    }
}
