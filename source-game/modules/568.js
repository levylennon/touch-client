function(e, t, i) {
    function n() {
        r.call(this, "div", {
            className: "ChallengeIndicator",
            hidden: !0
        }), c(this, {
            isCollapsable: !0,
            title: l("ui.common.challenges"),
            small: !0
        }), this.firstTimeDisplayed = !0, this.rerollButton = this.appendChild(new h({
            className: ["greenButton", "rerollButton"]
        })), this.rerollButton.createChild("div", {
            className: "iconRerollButton"
        }), this.scroller = this.appendChild(new s({
            className: ["challengeSlot"]
        }, {
            showHintArrows: !0
        })), this.challengeSlot = this.scroller.content, this.challengesIconsArray = [], this.challengesData = {}, this.challengesResult = {}, this.rerollPrice = 0, this.isInToa = !1, this.isInBossFight = !1, this.isAskingForReroll = !1, this.fifo = m.createFifo(), this._hookupEvents(window.gui)
    }
    i(569);
    var o = i(54)
        .dimensions,
        a = i(56)
        .inherits,
        r = i(72),
        s = i(453),
        c = i(570),
        l = i(17)
        .getText,
        d = i(572),
        u = i(12),
        p = i(105),
        h = i(86),
        f = i(575),
        b = i(16)
        .intToString,
        m = i(16),
        M = i(34)
        .logger;
    a(n, r), e.exports = n, n.prototype._hookupEvents = function(e) {
        var t = this;
        p.on("ChallengeInfoMessage", function(e) {
            t.fifo.push(function(i) {
                t.setChallenge(e, i)
            })
        }), p.on("ChallengeTargetUpdateMessage", function(e) {
            t.challengesData[e.challengeId] && (t._updateDescription(e.challengeId, e.targetId), t._updateTapBehavior(e.challengeId))
        }), p.on("ChallengeResultMessage", function(e) {
            if (!t.challengesData[e.challengeId]) return void(t.challengesResult[e.challengeId] = e);
            t.challengesData[e.challengeId].success = e.success;
            for (var i = 0; i < t.challengesIconsArray.length; i += 1) {
                var n = t.challengesIconsArray[i];
                if (n.id === e.challengeId) {
                    n.element.updateDisplay();
                    break
                }
            }
        }), p.on("ChallengeTargetsListMessage", function(e) {
            for (var t = 0; t < e.targetCells.length; t += 1) {
                var i = e.targetCells[t];
                window.gui.pingSystem.addPingPicto(i, 1, 3)
            }
        }), p.on("ChallengeRemoveMessage", function(e) {
            t.fifo.push(function(i) {
                return t.removeChallenge(e), i()
            })
        }), p.on("ChallengeRerollPriceMessage", function(e) {
            t.rerollPrice = e.rerollPrice, t.isAskingForReroll = !1
        }), p.on("ChallengeAmountMessage", function(e) {
            t._createChallengeSlots({
                nbSlot: e.challengeAmount,
                isAchievement: !1
            })
        }), p.on("AchievementChallengeAmountMessage", function(e) {
            t._createChallengeSlots({
                nbSlot: e.achievementChallengeAmount,
                isAchievement: !0
            })
        }), e.on("GameFightEndMessage", function() {
            t.hide(), t.reset(), t.isInBossFight = !1, t.isInToa = !1
        }), e.on("GameFightStartingMessage", function(e) {
            t.isInToa = e.fightType === f.FIGHT_TYPE_ToA
        }), e.on("GameFightShowFighterMessage", function(e) {
            "GameFightMonsterInformations" === e.informations._type && (e.informations._isBoss && (t.isInBossFight = !0), t._showReRollButton())
        }), e.fightManager.on("fightLeaderFound", function() {
            t._showReRollButton()
        }), e.on("disconnect", function() {
            t.rerollButton.hide(), t.hide(), t.reset()
        }), e.on("GameFightStartMessage", function() {
            t.rerollButton.hide()
        }), this.rerollButton.on("tap", function() {
            var e = t.rerollPrice,
                i = l("ui.popup.challengeRerollWarning", b(e));
            return 0 === e ? void t.rerollButton.disable() : void window.gui.openConfirmPopup({
                title: l("ui.popup.warning"),
                message: i,
                cb: function(e) {
                    e && !t.isAskingForReroll && (t.isAskingForReroll = !0, window.dofus.sendMessage("ChallengeRerollRequestMessage"))
                }
            })
        }), this.on("collapse", function(e) {
            var i = "fightPlacement" === window.foreground.tapOptions.mode,
                n = window.gui.playerData.isSpectator,
                o = n || !i || t.isInToa || t.isInBossFight;
            t.challengeSlot.toggleDisplay(!e), t.rerollButton.toggleDisplay(!e && !o),
                t.toggleClassName("noChallengeIndicator", e);
            var a = this.getChildren()[0].getChildren()[0];
            a.toggleClassName("small", !e)
        })
    }, n.prototype.getDescriptionWithFighter = function(e, t) {
        var i = window.gui.fightManager.getFighter(e);
        if (i) {
            var n = i.name + " (" + l("ui.common.level") + " " + i.level + ")";
            return t.replace("%1", n)
        }
        return t
    }, n.prototype._updateTapBehavior = function(e) {
        var t = this.challengesData[e];
        if (t)
            for (var i = 0; i < this.challengesIconsArray.length; i += 1) {
                var n = this.challengesIconsArray[i];
                if (n.id === e && n.element && !n.element.hasTapBehaviour()) {
                    n.element.addTapBehaviour(e);
                    break
                }
            }
    }, n.prototype._updateDescription = function(e, t) {
        var i = this.challengesData[e];
        if (i) {
            i.description = this.getDescriptionWithFighter(t, i.rawDescription);
            for (var n = 0; n < this.challengesIconsArray.length; n += 1) {
                var o = this.challengesIconsArray[n];
                if (o.id === e) {
                    o.element.updateDisplay();
                    break
                }
            }
        }
    }, n.prototype.setChallenge = function(e, t) {
        var i = this,
            n = e.challengeId,
            a = window.gui.fightManager.getFighter(e.targetId),
            r = this.getDescriptionWithFighter(e.targetId, e._description),
            s = "none";
        u.preloadImage("gfx/challenges/" + e._gfxId + ".png", function(c) {
            s = c;
            var l = null;
            i.challengesResult[n] && (l = i.challengesResult[n].success), i.challengesData[n] = {
                iconUrl: s,
                success: l,
                name: e._name,
                description: r,
                rawDescription: e._description,
                dropBonus: e.dropBonus,
                xpBonus: e.xpBonus,
                targetFighter: a,
                categoryId: e._categoryId,
                points: e._points,
                gfxId: e._gfxId,
                challengeId: n
            };
            var d, u, p = i._searchForAnEmptySlot(n);
            p || (M.log("Cannot find an available slot... creating one..."), i._createChallengeSlot({
                isAchievement: !1
            }), p = i._searchForAnEmptySlot(n)), d = p.icon, u = p.challenge;
            for (var h = !1, f = 0; f < i.challengesIconsArray.length; f += 1) u = i.challengesIconsArray[f], u.element.isSameAchievement(e._gfxId, e.targetId) && (u.element.addChallengeData(i.challengesData[n]), h = !0, u.element.show());
            return h || (d.addChallengeData(i.challengesData[n]), d.show()), i.firstTimeDisplayed && (i.firstTimeDisplayed = !1, i.setStyle("left", o.mapLeft + "px")), i.show(), i.scroller.refresh(), t()
        })
    }, n.prototype.removeChallenge = function(e) {
        for (var t = 0; t < this.challengesIconsArray.length; t += 1) {
            var i = this.challengesIconsArray[t];
            if (i.id === e.challengeId) {
                i.id = -1, i.element.challengeDatas.pop(), delete this.challengesData[e.challengeId];
                break
            }
        }
        this.challengesResult[e.challengeId] && delete this.challengesResult[e.challengeId]
    }, n.prototype._searchForAnEmptySlot = function(e) {
        for (var t = 0; t < this.challengesIconsArray.length; t += 1) {
            var i = this.challengesIconsArray[t];
            if (i.id === -1) return i.id = e, {
                icon: i.element,
                challenge: i
            }
        }
        return null
    }, n.prototype._showReRollButton = function() {
        var e = "fightPlacement" === window.foreground.tapOptions.mode,
            t = window.gui.playerData.isSpectator;
        return t || !e || this.isInToa || this.isInBossFight ? void this.rerollButton.hide() : void(window.gui.playerData.isFightLeader ? this.rerollButton.show() : this.rerollButton.hide())
    }, n.prototype._createChallengeSlot = function(e) {
        var t = new d;
        e && e.isAchievement && this.challengeSlot.getChildCount() > 0 ? (t.insertBefore(this.challengeSlot.getChildren()[0]), t.hide()) : this.challengeSlot.appendChild(t), this.challengesIconsArray.push({
            element: t,
            id: -1
        })
    }, n.prototype._createChallengeSlots = function(e) {
        for (var t = 0; t < e.nbSlot; t++) this._createChallengeSlot({
            isAchievement: e.isAchievement
        })
    }, n.prototype.reset = function() {
        this.challengeSlot.clearContent(), this.challengesIconsArray = [], this.challengesData = {}, this.challengesResult = {}, this.isAskingForReroll = !1
    }
}
