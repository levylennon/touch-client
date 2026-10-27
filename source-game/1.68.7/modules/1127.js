function(e, t, i) {
    function n() {
        var e = this;
        r.call(this, {
            title: s("ui.achievement.rewardsWaiting"),
            className: "rewardsPending",
            positionInfo: {
                left: "c",
                top: "c-32px",
                width: 500,
                height: 300
            }
        }), this.rewards = {}, this._rewardItems = [], this.isInFight = !1, this.rewardsList = this.windowBody.createChild("div", {
            className: "rewardsList"
        }), this.counter = this.windowBody.createChild("div", {
            className: "counter"
        }), this.acceptAllButton = this.windowBody.appendChild(new c(s("ui.common.acceptAll"))), this.acceptAllButton.on("tap", function() {
            e.collectAll()
        });
        var t = window.gui;
        t.playerData.achievements.on("achievementFinished", function(t) {
            e.addReward(t.id, t.finishedlevel)
        }), t.playerData.achievements.on("achievementListUpdated", function(t) {
            e.reset();
            for (var i = 0; i < t.rewardableAchievements.length; i += 1) {
                var n = t.rewardableAchievements[i];
                e.addReward(n.id, n.finishedlevel)
            }
        }), t.playerData.achievements.on("achievementRewardSuccess", function(t) {
            e.removeReward(t);
            for (var i = e._rewardItems.length - 1; i >= 0; i--)
                if (e._rewardItems[i].id === t) {
                    for (var n = 0; n < e._rewardItems[i].itemsReward.length; n++) window.gui.chat.logMsg(s("ui.common.newItem", e._rewardItems[i].itemsQuantityReward[n], e._rewardItems[i].itemsReward[n]));
                    e._rewardItems.splice(i, 1)
                }
        }), t.on("disconnect", function() {
            e.reset()
        }), t.fightManager.on("fightStart", function() {
            e.isInFight = !0, e.handleRewardsIndicatorDisplay()
        }), t.fightManager.on(h.FIGHT_END, function() {
            e.isInFight = !1, e.handleRewardsIndicatorDisplay()
        })
    }
    i(1128);
    var o = i(18),
        a = i(56)
        .inherits,
        r = i(70),
        s = i(17)
        .getText,
        c = i(86)
        .DofusButton,
        l = i(873),
        d = i(63),
        u = i(52),
        p = i(130),
        h = i(596),
        f = i(12),
        b = i(16),
        m = i(469),
        M = i(875);
    a(n, r), e.exports = n, n.prototype.addReward = function(e, t) {
        function i(t) {
            p.getDataMap("Achievements", [e], null, function(i, n) {
                if (i) return t(i);
                var o = n[e];
                return T = o.nameId, S = o.categoryId, L = o.rewardIds || [], C = o, t()
            })
        }

        function n(e) {
            p.getDataMap("AchievementCategories", [S], null, function(t, i) {
                if (t) return e(t);
                var n = i[S];
                return I = n.parentId, E = n.nameId, e()
            })
        }

        function a(e) {
            return 0 === I ? e() : void p.getDataMap("AchievementCategories", [I], null, function(t, i) {
                if (t) return e(t);
                var n = i[I];
                return E = n.nameId, e()
            })
        }

        function r(e) {
            return 0 === L.length ? e() : void p.getDataMap("AchievementRewards", L, null, function(i, n) {
                if (i) return e(i);
                if (!A.rootElement) return e();
                for (var o = 0; o < L.length; o += 1) {
                    var a = L[o],
                        r = n[a];
                    if (r) {
                        var s = window.gui.playerData.achievements.completedData(C.id),
                            c = r.isLinkedToAccount && s.isAccountCompleted,
                            l = s.finishedlevel || window.gui.playerData.characterBaseInformations.level;
                        if (r.experienceRatio) {
                            var d = 0;
                            c || (d = window.gui.playerData.achievements.getAchievementExperienceReward(r, C.level, l)), A.xp.setText(b.kamasToString(d, ""))
                        } else if (r.kamasRatio) {
                            var u = 0;
                            c || (u = window.gui.playerData.achievements.getAchievementKamasReward(r, C.level, l)), A.kamas.setText(b.kamasToString(u, ""))
                        }!c && (r.levelMin === -1 || r.levelMin <= t) && (r.levelMax === -1 || r.levelMax >= t) && (r.itemsReward && r.itemsReward.length > 0 && Array.prototype.push.apply(N, r.itemsReward), r.itemsQuantityReward && r.itemsQuantityReward.length > 0 && Array.prototype.push.apply(R, r.itemsQuantityReward), _._rewardItems.push({
                            id: C.id,
                            itemsReward: r.itemsReward,
                            itemsQuantityReward: r.itemsQuantityReward
                        }), r.emotesReward && r.emotesReward.length > 0 && Array.prototype.push.apply(q, r.emotesReward), r.titlesReward && r.titlesReward.length > 0 && Array.prototype.push.apply(x, r.titlesReward), r.ornamentsReward && r.ornamentsReward.length > 0 && Array.prototype.push.apply(B, r.ornamentsReward))
                    }
                }
                return e()
            })
        }

        function s(e) {
            return 0 === N.length ? e() : void m.getItems(N, function(t) {
                if (t) return e(t);
                for (var i = 0; i < N.length; i += 1) {
                    var n = m.items[N[i]];
                    n || (n = m.items[m.FALLBACK_DB_ITEM_ID]), D.push("gfx/items/" + n.iconId + ".png"), W.push(n)
                }
                return e()
            })
        }

        function c(e) {
            for (var t = 0; t < q.length; t += 1) D.push("gfx/emotes/" + q[t] + ".png");
            return e()
        }

        function u(e) {
            for (var t = 0; t < x.length; t += 1) D.push("gfx/illusUi/genericTitleIcon.png");
            return e()
        }

        function h(e) {
            return 0 === B.length ? e() : void p.getDataArray("Ornaments", B, function(t, i) {
                if (t) return e(t);
                for (var n = 0; n < i.length; n += 1) D.push("gfx/ornaments/" + i[n].iconId + ".png");
                return e()
            })
        }

        function g(e) {
            return 0 === D.length ? e() : void f.preloadImages(D, function(t) {
                for (var i = 0; i < t.length; i += 1) {
                    var n = z[i];
                    n && n.rootElement && (n.setImage(t[i]), n.setQuantity(R[i]), n.setTooltip(new M(W[i])))
                }
                return e()
            })
        }
        var _ = this,
            A = this.rewardsList.createChild("div", {
                className: "reward"
            });
        A.id = e, A.left = A.createChild("div", {
            className: "rewardLeft"
        }), A.right = A.createChild("div", {
            className: "rewardRight"
        }), A.nameText = A.left.createChild("div", {
            className: "rewardName"
        }), A.category = A.right.createChild("div", {
            className: "rewardCategory"
        }), A.numbers = A.right.createChild("div", {
            className: "rewardNumbers"
        }), A.xp = A.numbers.createChild("div", {
            className: "rewardXp"
        }), A.kamas = A.numbers.createChild("div", {
            className: "rewardKamas"
        }), A.collectButton = A.right.createChild("div", {
            className: "collectButton"
        }), d(A.collectButton), A.collectButton.on("tap", function() {
            _.collectReward(A.id)
        });
        for (var O = A.left.createChild("div", {
                className: "rewards",
                name: "rewards"
            }), v = O.createChild("div", {
                className: "rewardList"
            }), y = 6, z = [], w = 0; w < y; w += 1) z[w] = v.appendChild(new l({
            name: "icon" + w
        }));
        this.rewards[e] = A, this.updateCounter(), this.handleRewardsIndicatorDisplay();
        var T, C, I, S, E, L = [],
            N = [],
            R = [],
            q = [],
            x = [],
            B = [],
            D = [],
            W = [];
        o.series([i, n, a, r, s, c, u, h, g], function(e) {
            return e ? console.error(e) : void(A.rootElement && (A.nameText.setText(T), A.category.setText(E)))
        })
    }, n.prototype.removeReward = function(e) {
        var t = this.rewards[e];
        t.destroy(), delete this.rewards[e], this.updateCounter(), this.handleRewardsIndicatorDisplay()
    }, n.prototype.collectAll = function() {
        window.dofus.sendMessage("AchievementRewardRequestMessage", {
            achievementId: -1
        })
    }, n.prototype.collectReward = function(e) {
        window.dofus.sendMessage("AchievementRewardRequestMessage", {
            achievementId: e
        })
    }, n.prototype.updateCounter = function() {
        var e = Object.keys(this.rewards)
            .length;
        this.counter.setText(s("ui.achievement.rewardsRemaining", e))
    }, n.prototype.handleRewardsIndicatorDisplay = function() {
        var e = Object.keys(this.rewards)
            .length;
        0 === e && u.close("rewardsPending"), window.gui.rewardsIndicator.toggleDisplay(e > 0 && !this.isInFight)
    }, n.prototype.reset = function() {
        this.rewards = {}, this._rewardItems = [], this.isInFight = !1, this.rewardsList.clearContent()
    }
}
