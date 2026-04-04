function(e, t, i) {
    function n() {
        function e() {
            var e = Object.keys(z.dailyQuests.all)
                .sort();
            t._updatetMainQuestPart(), t._fakeSlot || t._addFakeDQSlot();
            var i;
            for (i = 0; i < e.length; i += 1) {
                var n = z.dailyQuests.all[e[i]];
                t.slotList[i] || t._addDQSlot(), t._updatetDQSlot(t.slotList[i], n)
            }
            for (i = e.length; i < t.slotList.length; i += 1) t.slotList[i].destroy();
            t.slotList = t.slotList.slice(0, e.length)
        }
        c.call(this, "div", {
            className: "DailyQuestTab",
            name: "dailyQuest"
        });
        var t = this;
        this.slotList = [], this.rewards = {}, this._pendingReroll = !1, this._fakeSlot = null;
        var i = this.createChild("div", {
                className: "mainProgressPart"
            }),
            n = i.createChild("div", {
                className: "col1"
            }),
            o = i.createChild("div", {
                className: "col2"
            });
        this._mainQuestName = n.createChild("div", {
            className: "title"
        }), this._mainQuestText = n.createChild("div", {
            className: "description"
        }), this._questProgressBar = n.appendChild(new h({
            className: "questProgressBar",
            tooltip: !0
        }));
        var a = o.createChild("div", {
            className: "rewardsBg"
        });
        a.createChild("div", {
            className: "rewardsIllus"
        });
        var r = this.createChild("div", {
                className: "dailyPart"
            }),
            s = r.createChild("div", {
                className: "dailyHeader"
            });
        s.createChild("div", {
            className: "title",
            text: b("ui.dailyQuest.yourDQ")
        });
        var l = s.createChild("div", {
            className: "rerollCounter"
        });
        this._freeRerollCount = 0, this._paidRerollCount = 0;
        var d = l.createChild("div", {
            className: ["freeRerollsWrapper", "wrapper"]
        });
        d.createChild("div", {
            className: ["icon", "iconFreeRerolls"]
        });
        var u = d.createChild("div", {
                className: "label",
                text: this._freeRerollCount
            }),
            m = l.createChild("div", {
                className: ["paidRerollsWrapper", "wrapper"]
            });
        m.createChild("div", {
            className: ["icon", "iconPaidRerolls"]
        });
        var M = m.createChild("div", {
                className: ["label"],
                text: this._paidRerollCount
            }),
            g = m.createChild("div", {
                className: "purchaseBtn"
            });
        p(g), g.on("tap", function() {
            f.open("DailyQuestRerollWindow", {
                isPlayerRedirected: !1
            })
        });
        var O = this._scroller = r.appendChild(new y({
                className: "DQScroller"
            })),
            v = O.content.createChild("div", {
                className: "scrollBlock"
            });
        this._dqList = v.createChild("div", {
            className: "dqList"
        }), this._initDQSlots();
        var z = window.gui.playerData.quests;
        z.on("listUpdated", function() {
            e(), t._scroller.refresh()
        }), z.on("mainDQStarted", function() {
            t._updatetMainQuestPart()
        }), z.on("questUpdate", function(e) {
            var i = window.gui.playerData.quests;
            return e === i.dailyQuests.mainQuest.questId ? t._updatetMainQuestPart() : i.dailyQuests.active[e] ? t._updatetDQSlot(t.getDQSlot(e), i.dailyQuests.active[e]) : void 0
        }), z.on("questFinished", function(e) {
            var i = t.getDQSlot(e.questId);
            A(i) || t._updatetDQSlot(i, e)
        }), z.on("rerollDQ", function(e) {
            t._updatetDQSlot(t.getDQSlot(e.oldDQId), z.dailyQuests.all[e.newDQId]), t._pendingReroll = !1
        }), z.on("rerollDQFailed", function() {
            t._pendingReroll = !1
        }), this.on("open", function() {
            e(), window.dofus.sendMessage("DailyQuestsRerollQuantityRequestMessage"), this._scroller.refresh()
        }), _.on("DailyQuestsRerollQuantityMessage", function(e) {
            t._freeRerollCount = e.free, t._paidRerollCount = e.premium, M.setText(t._paidRerollCount), u.setText(t._freeRerollCount)
        }), window.gui.playerData.on("subscriptionChanged", function() {
            t._fakeSlot && t._fakeSlot.toggleDisplay(!window.gui.playerData.isSubscriberAtMinLevel(S.ELITE))
        }), window.gui.on("disconnect", function() {
            t.reset()
        })
    }

    function o(e, t, i) {
        if (!t || !i) return e;
        var n = e + window.gui.playerData.quests.getCurrentCompletion(t, i);
        return window.gui.playerData.isAbleToSeeId() && (n += " [" + i + "]"), n
    }

    function a(e, t) {
        if (t.length) {
            for (var i = {}, n = 0, o = t.length; n < o; n += 1) {
                var a = t[n];
                i[a[0]] = a[1]
            }
            var r = Object.keys(i);
            g.getItems(r, function(t, n) {
                return t ? console.error("Failed to retrieve items", r) : void n.forEach(function(t) {
                    if (t) {
                        var n = e.appendChild(new u);
                        n.addClassNames("rewardSlot"), n.setItem(t), n.setQuantity(i[t.id]), n.on("tap", function() {
                            f.open("itemBox", {
                                itemData: t
                            })
                        })
                    }
                })
            })
        }
    }

    function r(e, t) {
        t.length && w.getDataArray("Emoticons", t, function(t, i) {
            if (t) return console.error("Failed to get emoticons", t);
            var n = [],
                o = [];
            i.forEach(function(t) {
                if (t) {
                    var i = e.appendChild(new l);
                    i.addClassNames("rewardSlot"), o.push(i), i.icon.addClassNames("spinner"), n.push("gfx/emotes/" + t.id + ".png"), i.setTooltip(t.nameId)
                }
            }), d.preloadImages(n, function(e) {
                for (var t = 0, i = e.length; t < i; t += 1) {
                    var n = o[t];
                    n.rootElement && (n.icon.delClassNames("spinner"), n.setImage(e[t]))
                }
            })
        })
    }
    i(1381);
    var s = i(56)
        .inherits,
        c = i(72),
        l = i(873),
        d = i(12),
        u = i(871),
        p = i(63),
        h = i(490),
        f = i(52),
        b = i(17)
        .getText,
        m = i(17)
        .processText,
        M = i(821),
        g = i(469),
        _ = i(105),
        A = i(32)
        .isEmptyObject,
        O = i(21),
        v = i(502),
        y = i(453),
        z = i(1382),
        w = i(130),
        T = i(116),
        C = i(16),
        I = i(86),
        S = i(509),
        E = 5;
    s(n, c), e.exports = n, n.prototype._initDQSlots = function() {
        var e = Object.keys(window.gui.playerData.quests.dailyQuests.all)
            .sort(),
            t = e.length;
        this._addFakeDQSlot();
        for (var i = 0; i < t; i += 1) this._addDQSlot()
    }, n.prototype._addFakeDQSlot = function() {
        this._fakeSlot = this._dqList.createChild("div", {
            className: ["slot", "faked"]
        });
        var e = this._fakeSlot.createChild("div", {
            className: "dqFaked"
        });
        e.createChild("div", {
            className: "bonusPackSlotText",
            text: b("ui.dailyQuest.getBonusPackSlot")
        });
        var t = e.appendChild(new I({
            className: "linkToShop",
            scaleOnPress: !1
        }));
        t.on("tap", function() {
            f.open("market", {
                tabId: "shop",
                tabParams: {
                    category: "bonuspack"
                }
            })
        }), this._fakeSlot.toggleDisplay(!window.gui.playerData.isSubscriberAtMinLevel(S.ELITE))
    }, n.prototype._addDQSlot = function() {
        var e = this,
            t = this._dqList,
            i = t.createChild("div", {
                className: "slot"
            }),
            n = i.createChild("div", {
                className: "dqFinished"
            });
        n.createChild("div", {
            className: "dqFinishedTitle",
            text: b("ui.dailyQuest.dqFinished")
        });
        var o = n.createChild("div", {
            className: "dqFinishedContent"
        });
        o.createChild("div", {
            className: "dqFinishedContent",
            text: b("ui.dailyQuest.countdown")
        });
        var a = new O.DofusDate(O.now())
            .getServerDate(),
            r = new O.DofusDate(Date.UTC(a.year, a.month, a.day + 1));
        i.countdown = o.appendChild(new z({
            endDate: r
        })), i.logoWrapper = i.createChild("div", {
            className: "logoWrapper"
        }), i.logo = i.logoWrapper.createChild("div", {
            className: "logo"
        }), i.left = i.createChild("div", {
            className: "slotLeft"
        }), i.right = i.createChild("div", {
            className: "slotRight"
        }), i.descriptionText = i.left.createChild("div", {
            className: "descriptionText"
        }), i.rerollButton = i.right.appendChild(new I({
            className: ["greenButton", "rerollButton"]
        })), i.rerollButton.createChild("div", {
            className: "iconRerollButton"
        }), i._timesReroll = 0, i._processingRewards = !1, p(i.rerollButton), i.rerollButton.on("tap", function() {
            if (!e._pendingReroll && !window.gui.playerData.isFighting) {
                if (0 === e._freeRerollCount && 0 === e._paidRerollCount) return f.open("DailyQuestRerollWindow", {
                    isPlayerRedirected: !0
                });
                var t = b("ui.dailyQuest.premiumReroll");
                e._freeRerollCount > 0 && (t = b("ui.dailyQuest.freeReroll")), window.gui.openConfirmPopup({
                    title: b("ui.common.confirm"),
                    message: m(b("ui.dailyQuest.confirmReroll"), t),
                    cb: function(t) {
                        t && !e._pendingReroll && (e._pendingReroll = !0, T.log("User_Life_Cycle.daily_quest_reroll", {
                            times_slot_rerolled: i._timesReroll,
                            is_free_reroll: e._freeRerollCount > 0,
                            quest_id: i.id
                        }), i._timesReroll++, window.gui.playerData.quests.rerollDQ(i.id))
                    }
                })
            }
        });
        for (var s = i.left.createChild("div", {
                className: "rewards",
                name: "rewards"
            }), c = i.rewardList = s.createChild("div", {
                className: "rewardList"
            }), l = [], d = 0; d < E; d += 1) l[d] = c.appendChild(new u({
            name: "icon" + d
        }));
        i.numbers = s.createChild("div", {
            className: "slotNumbers"
        }), i.xp = i.numbers.createChild("div", {
            className: "slotXp"
        }), i.kamas = i.numbers.createChild("div", {
            className: "slotKamas"
        }), this.slotList.push(i), this.openState && this._scroller.refresh(!0)
    }, n.prototype.getDQSlot = function(e) {
        for (var t = {}, i = 0; i < this.slotList.length; i += 1)
            if (this.slotList[i].id === e) {
                t = this.slotList[i];
                break
            } return t
    }, n.prototype._updatetMainQuestPart = function() {
        var e = window.gui.playerData.quests.dailyQuests.mainQuest;
        if (!(Object.keys(e)
                .length < 1)) {
            this._mainQuestName.setText(e.dbQuest.nameId), this._mainQuestText.setText(e.dbSteps[e.stepId].descriptionId);
            var t = e.objectives[0].curCompletion,
                i = e.objectives[0].maxCompletion;
            this._questProgressBar.setValue(t, i)
        }
    }, n.prototype._updatetDQSlot = function(e, t) {
        function i(e) {
            return parseInt(e, 10) === t.dbQuest.id
        }
        var n = Object.keys(window.gui.playerData.quests.dailyQuests.finished);
        if (e.logoWrapper.toggleClassName("rare", window.gui.playerData.quests.isRareDQ(t.dbQuest.categoryId)), e.logo.setClassNames(["logo", window.gui.playerData.quests.getDQClassName(t.dbQuest.categoryId)]), t.objectives) {
            var a = t.objectives[0],
                r = a.hypertext || a.text;
            e.descriptionText.clearContent();
            var s = t.questId,
                c = a.objectiveId;
            e.descriptionText.appendChild(v.process(o(r, s, c)))
        }
        if (e.toggleClassName("finished", n.some(i)), n.some(i) && e.countdown.startCountdown(), e.id = t.dbQuest.id, t.stepId) {
            var l = t.dbSteps[t.stepId];
            this._displayRewards(t, e), this._setKamas(l, e), this._setXp(l, e)
        } else e.kamas.clearContent(), e.xp.clearContent()
    }, n.prototype._setKamas = function(e, t) {
        var i = M.calculateStepKamasRatio(e);
        t.kamas.clearContent(), i && t.kamas.setText(C.intToString(i))
    }, n.prototype._setXp = function(e, t) {
        var i = window.gui.playerData,
            n = i.characterBaseInformations.level,
            o = i.experienceFactor,
            a = M.calculateStepXpRatio(e, n, o);
        t.xp.clearContent(), a && t.xp.setText(C.intToString(a))
    }, n.prototype._displayRewards = function(e, t) {
        if (!t._processingRewards) {
            t._processingRewards = !0, t.rewardList.clearContent();
            for (var i = e.dbSteps[e.stepId].rewardsIds, n = window.gui.playerData.characterBaseInformations.level, o = 0, s = i.length; o < s; o += 1) {
                var c = e.dbRewards[i[o]];
                !c || c.levelMin !== -1 && n < c.levelMin || c.levelMax !== -1 && n > c.levelMax || (a(t.rewardList, c.itemsReward), r(t.rewardList, c.emotesReward))
            }
            t._processingRewards = !1
        }
    }, n.prototype.reset = function() {
        this.slotList = [], this.rewards = {}, this._fakeSlot = null, this._pendingReroll = !1, this._dqList.clearContent()
    }
}
