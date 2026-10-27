function(e, t, i) {
    function n(e) {
        return e.nameId + (window.gui.playerData.isAbleToSeeId() ? " (" + e.id + ")" : "")
    }

    function o(e) {
        return window.gui.playerData.characterBaseInformations.sex ? e.nameFemaleId : e.nameMaleId
    }

    function a() {
        M.open("grimoire", {
            tabId: "achievements",
            tabParams: {
                achievementId: this.achievementID
            }
        })
    }

    function r(e, t, i, n, o, a, r) {
        return i.length ? void h.getDataMap(t, i, null, function(s, c) {
            function l(t) {
                if (d.length !== t.length) return r("Achievement: Missing rewards data or images for Achievement " + e);
                var i = d.map(function(e, i) {
                    var n = u[e] || {};
                    return {
                        url: t[i],
                        quantity: n.quantity,
                        data: n.data
                    }
                });
                return r(null, i)
            }
            if (s) return r(s);
            for (var d = [], u = {}, p = 0; p < i.length; p += 1) {
                var h = i[p],
                    f = c[h];
                if (f) {
                    var m = null === o ? n : n + "/" + f[o] + ".png";
                    u[m] = {
                        data: f,
                        quantity: a[p] || null
                    }, d.push(m)
                } else {
                    var M = "Achievement: Unable to find data for id " + h + " in " + t + " DB";
                    M += " for Achievement " + e, console.error(new Error(M))
                }
            }
            return b.preloadImages(d, l)
        }) : r(null, [])
    }

    function s(e, t) {
        c.call(this, "div", {
            name: e.id,
            className: "achievement"
        }), this.achievement = e, this.completedData = window.gui.playerData.achievements.completedData(e.id);
        var i = this;
        this._hasBeenDestroyed = !1, this.on("destroy", function() {
                i._hasBeenDestroyed = !0
            }), window.gui.playerData.achievements.completedData(e.id)
            .isCompleted && this.addClassNames("completed"), this.completedData.isAccountCompleted && this.addClassNames("accountCompleted"), this.icon = new l({
                name: "icon"
            });
        var o = this.createChild("div", {
            className: "infos"
        });
        o.appendChild(this.icon);
        var r = o.createChild("div", {
                className: "infosGroupRight"
            }),
            s = r.createChild("div", {
                className: "cf"
            });
        r.createChild("div", {
            className: "description",
            text: e.descriptionId
        }), s.createChild("div", {
            className: "title",
            text: n(e)
        }), s.createChild("div", {
            className: "points",
            text: e.points
        }), this.moreContent = this.createChild("div", {
            className: "more",
            name: "more"
        }), this.moreContent.hide(), this.progression = this.moreContent.createChild("div", {
            className: "progression",
            name: "progression"
        }), this.progression.hide(), this.objectivesBox = this.moreContent.createChild("div", {
            className: "objectives",
            name: "objectives"
        }), this.objectivesBox.hide(), this.spinner = this.moreContent.createChild("div", {
            className: "spinner",
            name: "spinner"
        }), this.progressionBar = this.progression.appendChild(new d({
            className: "green",
            name: "progressBar",
            tooltip: !0
        })), this.progressionText = this.progression.createChild("div", {
            className: "text",
            name: "text"
        }), e.objectiveIds.sort(function(e, i) {
            var n = 0;
            t[e] && t[e].order && (n = t[e].order);
            var o = 0;
            return t[i] && t[i].order && (o = t[i].order), n - o
        });
        for (var p = 0; p < e.objectiveIds.length; p++) {
            var h = e.objectiveIds[p],
                b = t[h];
            if (b && this.objectivesBox.rootElement) {
                var m = this.objectivesBox.createChild("div", {
                        className: ["objective", b.id],
                        name: b.id
                    }),
                    M = 0 === b.criterion.indexOf("OA"),
                    g = m.createChild("span", {
                        className: "text"
                    });
                if (g.setHtml(n(b) + (M ? " " + u("ui.common.fakeLinkSee") : "")), M) {
                    var A = Number(b.criterion.substr(3, b.criterion.length));
                    isNaN(A) ? console.warn("Failed parsing achievementId of objective.criterion: " + b.criterion) : (m.achievementID = A, f(m), m.on("tap", a))
                }
            }
        }
        var O = this.moreContent.createChild("div", {
                className: "rewards",
                name: "rewards"
            }),
            v = O.createChild("div", {
                className: "rewardTitle"
            });
        v.createChild("span", {
            className: "text",
            text: u("ui.grimoire.quest.rewards")
        });
        var y = v.createChild("div", {
            className: "warning"
        });
        for (_.addTooltip(y, u("ui.achievement.achievedBySomeoneElse"), {
                longTapExplanation: !0
            }), this.rewardList = O.createChild("div", {
                className: "rewardList"
            }), p = 0; p < 6; p++) this.rewardList.appendChild(new l({
            name: "icon" + p
        }));
        var z = O.createChild("div", {
                className: "kamasXP"
            }),
            w = z.createChild("div", {
                className: "line"
            }),
            T = z.createChild("div", {
                className: "line"
            });
        this._xpValue = w.createChild("div", {
            className: "text",
            text: "0"
        }), w.createChild("div", {
            className: ["icon", "xp"]
        }), this._kamaValue = T.createChild("div", {
            className: "text",
            text: "0"
        }), T.createChild("div", {
            className: ["icon", "kamas"]
        })
    }
    var c = i(72),
        l = i(873),
        d = i(490),
        u = i(17)
        .getText,
        p = i(16),
        h = i(130),
        f = i(63),
        b = i(12),
        m = i(56)
        .inherits,
        M = i(52),
        g = i(469),
        _ = i(88);
    m(s, c), e.exports = s, s.prototype.displayDetails = function(e, t) {
        for (var i, n, a = !1, r = 0; r < e.length; r += 1) {
            var s = e[r];
            1 === s.maxValue ? (this.progression.hide(), this.objectivesBox.show(), a = !0) : a ? (i = this.objectivesBox.getChild(s.id), i.addClassNames("progressText"), n = i.getChild("progressTxt"), n ? n.setText(s.value + "/" + s.maxValue) : (n = new c("span", {
                name: "progressTxt",
                text: s.value + "/" + s.maxValue
            }), i.insertAsFirstChild(n))) : (this.progression.show(), this.objectivesBox.hide(), this.progressionText.setText(s.value + "/" + s.maxValue), this.progressionBar.setValue(s.value, s.maxValue))
        }
        for (r = 0; r < t.length; r += 1) s = t[r], i = this.objectivesBox.getChild(s.id), i && i.addClassNames("completed"), 1 === s.maxValue ? (this.progression.hide(), this.objectivesBox.show()) : a ? (i = this.objectivesBox.getChild(s.id), i.addClassNames("progressText"), n = new c("span", {
            name: "progressTxt",
            text: s.maxValue + "/" + s.maxValue
        }), i.insertAsFirstChild(n)) : (this.progression.show(), this.objectivesBox.hide(), this.progressionText.setText(s.maxValue + "/" + s.maxValue), this.progressionBar.setValue(s.maxValue, s.maxValue));
        var l = this;
        this._loadRewards(this.achievement, function(e, t) {
            if (e) {
                if (console.error("Loaded static achievement data error", e), l._hasBeenDestroyed) return;
                return void l.spinner.hide()
            }
            for (var i = [], n = [], a = 0, r = t.length; a < r; a += 1) t[a] && t[a].data && t[a].data._type && (n.push(t[a].data.id), i.push(t[a]));
            for (a = 0, r = t.length; a < r; a += 1) t[a] && t[a].data && !t[a].data._type && (n.push(t[a].data.id), i.push(t[a]));
            g.getItems(n, function(e) {
                if (e) {
                    if (console.error("Failed to get items", e), l._hasBeenDestroyed) return;
                    return void l.spinner.hide()
                }
                if (!l._hasBeenDestroyed) {
                    for (var t = 0, a = n.length; t < a; t += 1) {
                        var r = n[t],
                            s = g.items[r],
                            d = l.rewardList.getChild("icon" + t),
                            h = i[t];
                        if (!d) return l.spinner.hide(), console.warn("Achievement: Missing icon" + t);
                        if (s && "Item" === h.data._type) {
                            var f = u("ui.item.averageprice") + " : ",
                                b = s.getProperty("averagePrice");
                            f += b === -1 ? u("ui.item.averageprice.unavailable") : p.kamasToString(b), d.setContextMenu("item", {
                                item: s
                            })
                        }
                        var m = h.url,
                            M = h.quantity,
                            _ = h.data;
                        d.setImage(m), M && d.setQuantity(M);
                        var A = new c("div");
                        A.createChild("div", {
                            text: _.nameId || o(_)
                        }), f && "Item" === h.data._type && A.createChild("div", {
                            text: f
                        }), _.descriptionId && A.createChild("div", {
                            text: _.descriptionId,
                            className: "details"
                        }), d.setTooltip(A)
                    }
                    l.spinner.hide()
                }
            })
        })
    }, s.prototype._loadRewards = function(e, t) {
        if (!e.rewardIds.length) return t(null, []);
        var i = this,
            n = e.rewardIds,
            o = e.id;
        h.getDataMap("AchievementRewards", n, null, function(a, s) {
            function c(e, i) {
                if (!f) return e ? (f = !0, t(e)) : (b = b.concat(i), u += i.length, h += 1, u === d || h === l.length ? t(null, b) : void 0)
            }
            if (a) return t(a);
            for (var l = ["Ornaments", "Items", "Spells", "Titles", "Emoticons"], d = 0, u = 0, h = 0, f = !1, b = [], m = window.gui.playerData.achievements.completedData(e.id), M = m.finishedlevel || window.gui.playerData.characterBaseInformations.level, g = e.level, _ = 0; _ < n.length; _ += 1) {
                var A = n[_],
                    O = s[A];
                if (O) {
                    var v = O.isLinkedToAccount && m.isAccountCompleted;
                    if (O.experienceRatio) {
                        var y = "0";
                        if (!v) {
                            var z = window.gui.playerData.achievements.getAchievementExperienceReward(O, g, M);
                            y = p.intToString(z)
                        }
                        i._xpValue.setText(y)
                    } else if (O.kamasRatio) {
                        var w = "0";
                        if (!v) {
                            var T = window.gui.playerData.achievements.getAchievementKamasReward(O, g, M);
                            w = p.intToString(T)
                        }
                        i._kamaValue.setText(w)
                    }
                    if (!(v || M && (O.levelMin !== -1 && M < O.levelMin || O.levelMax !== -1 && M > O.levelMax))) {
                        var C = O.itemsReward,
                            I = O.ornamentsReward,
                            S = O.spellsReward,
                            E = O.titlesReward,
                            L = O.emotesReward;
                        d += C.length + I.length + S.length + E.length + L.length, r(o, l[0], I, "gfx/ornaments", "iconId", [], c), r(o, l[1], C, "gfx/items", "iconId", O.itemsQuantityReward, c), r(o, l[2], S, "gfx/spells", "iconId", [], c), r(o, l[3], E, "gfx/illusUi/genericTitleIcon.png", null, [], c), r(o, l[4], L, "gfx/emotes", "id", [], c)
                    }
                } else console.error("Unable to find reward id " + A + " in AchievementRewards DB for Achievement " + o)
            }
            return 0 === d ? t(null, []) : void 0
        })
    }
}
