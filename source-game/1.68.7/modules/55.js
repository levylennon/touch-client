function(e, t, i) {
    function n() {
        a.call(this), this.optionDefs = null, this.menubarSizeInFight = null, this.menubarSize = null, this.toolbarThicknessInFight = null, this.isEmitting = null
    }
    var o = i(56)
        .inherits,
        a = i(59)
        .EventEmitter,
        r = i(60),
        s = i(62),
        c = i(13),
        l = i(54),
        d = "option-";
    o(n, a), e.exports = new n, n.prototype.initialize = function() {
        l.updateScreen();
        var e = l.dimensions,
            t = e.screenWidth / e.screenHeight <= c.IPAD_SCREEN_RATIO;
        this.optionDefs = {
            showAllMonsters: {
                init: !1
            },
            maxTitlesOrnaments: {
                init: 1
            },
            maxActorsBeforeCreatureMode: {
                init: 20,
                onChange: window.actorManager.onMaxActorsBeforeCreatureModeChange.bind(window.actorManager)
            },
            hideDeadFighters: {
                init: !0
            },
            showMountsInFight: {
                init: !0
            },
            allowSpellEffects: {
                init: !0
            },
            autoGpsFlags: {
                init: !0
            },
            autoGpsPhoenixes: {
                init: !0
            },
            limitToNotch: {
                init: !0
            },
            monsterInfoFirstPosition: {
                init: !1
            },
            bottomMenuBar: {
                init: t
            },
            menubarSize: {
                init: t ? 6 : 3
            },
            menubarSizeInFight: {
                init: t ? 3 : 2
            },
            toolbarThicknessInFight: {
                init: 1
            },
            censorship: {
                init: !0
            },
            chatTimestamp: {
                init: !1
            },
            topChatBar: {
                init: !0
            },
            tutorialTips: {
                init: !0
            },
            soundOnPlayerTurnStart: {
                init: !0
            },
            alwaysShowGrid: {
                init: !1
            },
            fightAlwaysShowGrid: {
                init: !1
            },
            regroupDamages: {
                init: !0
            },
            allowDamagePreview: {
                init: !0
            },
            showMovementPreview: {
                init: !0
            },
            spellTooltipName: {
                init: !0
            },
            spellTooltipApRange: {
                init: !0
            },
            spellTooltipCritical: {
                init: !1
            },
            spellTooltipEffect: {
                init: !0
            },
            spellTooltipDescription: {
                init: !0
            },
            confirmBoxAllowDoubleTap: {
                init: !1
            },
            confirmBoxWhenDragCasting: {
                init: s.ALWAYS
            },
            confirmBoxWhenClickCasting: {
                init: s.ALWAYS
            },
            confirmBoxWhenWalking: {
                init: !0
            },
            showSpeechBubbleInFight: {
                init: !0
            },
            fullscreen: {
                init: !1
            },
            isPortraitMode: {
                init: !1
            },
            orderFighters: {
                init: !1
            },
            showApMpUsed: {
                init: !1
            },
            offlineOptionTimestamp: {
                init: 0
            },
            systemNotificationsEnabled: {
                init: !1
            },
            wantPromoNotif: {
                init: !1
            },
            wantPrismAttackedNotif: {
                init: !1
            },
            wantPrismVulnerableNotif: {
                init: !1
            },
            petFeedingNotifTime: {
                init: "19:00"
            },
            showAlmanaxEveryday: {
                init: !0
            },
            showFightNotifications: {
                init: !0
            },
            showSummonWithoutTurn: {
                init: !1
            },
            displayFullFightEndWindow: {
                init: !0
            },
            displayEndOfTurnRight: {
                init: !0
            },
            canTapOnChatLink: {
                init: !1
            }
        }, this._loadAllOptions()
    }, n.prototype._loadAllOptions = function() {
        for (var e in this.optionDefs) {
            var t = this.optionDefs[e];
            this[e] = r.getValue(d + e, t.init)
        }
    }, n.prototype.changeValue = function(e, t, i) {
        var n = this[e];
        if (t !== n) {
            this[e] = t, r.setValue(d + e, t);
            var o = this.optionDefs[e];
            o.onChange && o.onChange(t, n), this.isEmitting && console.error("GameOptions: change " + e + " is reentering change " + this.isEmitting), this.isEmitting = e, this.emit(e, t, n, i), this.isEmitting = null
        }
    }
}
