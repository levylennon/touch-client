function(e, t, i) {
    function n() {
        N.call(this, "div", {
            className: "QuestsWindow",
            name: "quests"
        });
        var e = this,
            t = !1;
        W = window.gui.playerData.quests, this.currentQuest = null, this.selectedQuestElement = null, this.updateRequired = !0, this.questsListUpdated = !1, this.params = {}, this.locateButtonMap = {}, this._previousSearch = "", this.currentSearchQuestsMap = null, W.on("listUpdated", function() {
            e.updateRequired = !0, e.questsListUpdated = !0, e.isVisible() && (e.emit("open", e.params), e.questsListContainer.delClassNames("spinner"), t && (e.questsList || console.error(new Error("questList not defined yet !")), e.questsList.refresh()));
            var i = E.getValue("showCompletedQuest", !1);
            e._toggleShowFinishedQuests(i)
        }), this.once("open", function() {
            this._createDom(), this._getQuestCategoryStaticData(function(i) {
                return i ? console.error(i) : (e._createQuestCategories(), e._setupEvents(), t = !0, void e.emit("initialized"))
            })
        }), this.on("open", function(e) {
            return this.questsListContainer.toggleClassName("spinner", !this.questsListUpdated), t ? void this._onOpen(e) : this.once("initialized", this._onOpen.bind(this, e))
        })
    }

    function o(e, t, i) {
        return window.gui.playerData.isAbleToSeeId() && t && (e += " [" + t + "]"), i && (e += " (" + m("ui.common.level") + " " + i + ")"), e
    }

    function a(e, t, i, n) {
        if (!t || !i) return e;
        var o = e;
        return n || (o += window.gui.playerData.quests.getCurrentCompletion(t, i)), window.gui.playerData.isAbleToSeeId() && (o += " [" + i + "]"), o
    }

    function r(e) {
        var t = this.myWindow;
        return t._sortAllowedQuests(e.info)
    }

    function s(e, t) {
        var i = e.myDrilldownList.myWindow,
            n = i._sortAllowedQuests(e.info),
            o = n[t];
        return !(!o || !o.id) && Boolean(i.currentSearchQuestsMap[o.id])
    }

    function c(e) {
        for (var t = e.myDrilldownList.myWindow, i = t._sortAllowedQuests(e.info), n = 0; n < i.length; n++)
            if (t.currentSearchQuestsMap[i[n].id]) return !0;
        return !1
    }

    function l(e) {
        var t = this.myWindow,
            i = e.data.id;
        return W.active[i] ? (v("GEN_BUTTON"), t.currentQuest = W.all[i], t._updateStepList(), void t._resetSelectedQuestElement()) : v("NO_ACTION")
    }

    function d() {
        var e = window.gui.GPS,
            t = this.id,
            i = this.questsWindow,
            n = this.questId;
        e.isActivePOI(t) ? (e.removePOI(t, void 0, !0), i._updateQuestFollow(n, !1, !1)) : (e.addQuestObjectiveFromObjective({
            objectiveDb: this.objectiveDb,
            objectiveId: this.objective.objectiveId,
            questId: n
        }), e.questFollower.isQuestFollowed(n) || i._updateQuestFollow(n, !0, !1));
        var o = W.all[n];
        o && o.dbQuest && i._questCategoryFollowCheck(o.dbQuest.categoryId)
    }

    function u(e, t) {
        if (t.length) {
            for (var i = {}, n = 0, o = t.length; n < o; n += 1) {
                var a = t[n];
                i[a[0]] = a[1]
            }
            var r = Object.keys(i);
            _.getItems(r, function(t, n) {
                return t ? console.error("Failed to retrieve items", r) : void n.forEach(function(t) {
                    if (t) {
                        var n = e.appendChild(new A);
                        n.addClassNames("rewardSlot"), n.setItem(t), n.setQuantity(i[t.id]), n.on("tap", function() {
                            L.open("itemBox", {
                                itemData: t
                            })
                        })
                    }
                })
            })
        }
    }

    function p(e, t) {
        t.length && I.getDataArray("Emoticons", t, function(t, i) {
            if (t) return console.error(t);
            var n = [],
                o = [];
            i.forEach(function(t) {
                if (t) {
                    var i = e.appendChild(new C);
                    i.addClassNames("rewardSlot"), o.push(i), i.icon.addClassNames("spinner"),
                        n.push("gfx/emotes/" + t.id + ".png"), i.setTooltip(t.nameId)
                }
            }), h.preloadImages(n, function(e) {
                for (var t = 0, i = e.length; t < i; t += 1) {
                    var n = o[t];
                    n.rootElement && (n.icon.delClassNames("spinner"), n.setImage(e[t]))
                }
            })
        })
    }
    i(1068);
    var h = i(12),
        f = i(86),
        b = i(594),
        m = i(17)
        .getText,
        M = i(502),
        g = i(56)
        .inherits,
        _ = i(469),
        A = i(871),
        O = i(1060),
        v = i(91)
        .playUiSound,
        y = i(821),
        z = i(453),
        w = i(943),
        T = i(945),
        C = i(873),
        I = i(130),
        S = i(63),
        E = i(60),
        L = i(52),
        N = i(72),
        R = i(88)
        .addTooltip,
        q = i(16),
        x = i(13),
        B = i(509),
        D = i(649),
        W = {},
        P = [];
    g(n, N), e.exports = n, n.prototype.resetSublist = function(e) {
        this.questsList || console.error(new Error("questList not defined yet !"));
        var t = this._getQuestCategoryElementFromCategoryId(e),
            i = this.questsList.isItemDeployed(t);
        t.subitemList && (this.questsList.deployItem(t, !1), delete t.subitemList), this.questsList.createSubitemList(t), this.questsList.deployItem(t, i)
    }, n.prototype._onOpen = function(e) {
        var t = this;
        this.params = e || {}, this.questsList && this.questsList.refreshFilter(), this.currentQuest && this._updateStepList();
        var i = E.getValue("showCompletedQuest", !1);
        this.showCompletedCheckbox.toggleActivation(i), this.updateRequired && this._updateQuestList();
        var n, o = this.currentQuest && this.currentQuest.dbQuest;
        n = o ? this.currentQuest.dbQuest.categoryId : this.params.categoryId;
        var a = o ? this.currentQuest.questId : this.params.categoryId,
            r = this.params.categoryId ? this.params.categoryId : n,
            s = this.params.questId ? this.params.questId : a;
        setTimeout(function() {
            t._selectQuest(r, s)
        }, 0), this._refreshBonus()
    }, n.prototype._refreshBonus = function() {
        if (window.gui.playerData.isSubscriberAtMinLevel(B.NORMAL)) {
            var e = x.BONUS_PACK_XP;
            this._bonusPackText.setHtml(m("ui.shop.xpBonusPackJobActive", e, x.BONUS_PACK_XP)), this._linkToShop.hide()
        } else this._bonusPackText.setHtml(m("tablet.shop.xpBonusInactive", x.BONUS_PACK_XP)), this._linkToShop.show()
    }, n.prototype._search = function(e) {
        this._previousSearch = e;
        var t = E.getValue("showCompletedQuest", !1);
        if ("" === e) return this._updateQuestList(), void this._toggleShowFinishedQuests(t);
        var i = {},
            n = q.simplifyString(e),
            o = t ? W.all : W.active;
        for (var a in o)
            if (o.hasOwnProperty(a)) {
                var r = o[a];
                if (r)
                    if (r.dbQuest && r.dbQuest.nameId && q.simplifyString(r.dbQuest.nameId)
                        .indexOf(n) > -1) i[r.questId] = !0;
                    else {
                        var s = r.stepId;
                        if (r.dbSteps) {
                            var c = r.dbSteps[s];
                            if (c.descriptionId && q.simplifyString(c.descriptionId)
                                .indexOf(n) > -1 || c.nameId && q.simplifyString(c.nameId)
                                .indexOf(n) > -1) i[r.questId] = !0;
                            else
                                for (var l in r.objectives)
                                    if (r.objectives.hasOwnProperty(l) && r.objectives) {
                                        var d = r.objectives[l];
                                        if (d.text && q.simplifyString(d.text)
                                            .indexOf(n) > -1) {
                                            i[r.questId] = !0;
                                            break
                                        }
                                    }
                        }
                    }
            } this.currentSearchQuestsMap = i, this.questsList || console.error(new Error("questList not defined yet !")), this.questsList.refreshFilter()
    }, n.prototype._toggleShowFinishedQuests = function(e) {
        var t = {};
        if (e) {
            for (var i in W.all) t[i] = !0;
            this.currentSearchQuestsMap = t
        } else {
            for (var n in W.active) t[n] = !0;
            this.currentSearchQuestsMap = t
        }
        this.isVisible() && (this.questsList || console.error(new Error("questList not defined yet !")), this.questsList.refreshFilter())
    }, n.prototype._sortAllowedQuests = function(e) {
        for (var t = window.gui.GPS, i = [], n = 0; n < P.length; n++) {
            var a = P[n].id;
            if (a === e) {
                i = P[n].questIds;
                break
            }
        }
        for (var r = [], s = 0; s < i.length; s++) {
            var c = i[s];
            if (W.all[c] && W.all[c].dbQuest) {
                var l;
                W.active[c] ? (l = new N("div", {
                    className: "icon"
                }), t.questFollower.isQuestFollowed(c) || l.addClassNames("notFollowed"), r.push({
                    text: o(W.all[c].dbQuest.nameId, c),
                    id: c,
                    beforeText: l,
                    finished: !1
                })) : W.finished[c] && (l = new N("div", {
                    className: "icon"
                }), t.questFollower.isQuestFollowed(c) || l.addClassNames("notFollowed"), r.push({
                    text: o(W.all[c].dbQuest.nameId, c),
                    id: c,
                    beforeText: l,
                    finished: !0,
                    unclickable: !0
                }))
            }
        }
        return r.sort(function(e, t) {
            return e.id - t.id
        }), r.sort(function(e, t) {
            return e.finished ? 1 : t.finished ? -1 : 0
        }), r
    }, n.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "col1"
            }),
            i = this.createChild("div", {
                className: "col2"
            }),
            n = i.createChild("div", {
                className: "content"
            }),
            o = i.createChild("div", {
                className: "bonusPackMessage"
            });
        this._bonusPackText = o.createChild("span"), this._linkToShop = o.appendChild(new f({
            className: "linkToShop",
            scaleOnPress: !1
        })), this._linkToShop.on("tap", function() {
            L.open("market", {
                tabId: "shop",
                tabParams: {
                    category: "bonuspack"
                }
            })
        });
        var a = t.createChild("div", {
            className: "searchBlock"
        });
        this.searchBox = a.appendChild(new w), this.searchBox.on("search", function(t) {
            e._search(t)
        }), this.counter = t.createChild("div", {
            className: ["header", "counter"]
        }), this.questsListContainer = t.createChild("div", {
            className: "questsListContainer"
        }), this.questsList = new O({
            allowMultipleOpen: !0,
            emitOnSelectItem: !0,
            noBreadcrumb: !0
        }), this.questsList.myWindow = this, this.questsList.setSubitemsGetter(r), this.questsList.setFilter(c, s), this.showCompletedCheckbox = t.appendChild(new b(m("ui.grimoire.displayFinishedQuests")));
        var l = n.createChild("div", {
                className: ["header", "steps"]
            }),
            d = l.createChild("div", {
                className: "followedQuest"
            });
        R(d, m("tablet.ui.grimoire.followQuest")), S(d), this.questFollowed = d.appendChild(new f({
            className: "followedQuestButton"
        }));
        var u = this._questFollowedToggle.bind(this);
        d.on("tap", u), this.questFollowed.on("tap", u), this.questFollowed.toggleClassName("selected", !0), this.questFollowed.hide(), this.stepTitle = l.createChild("div", {
            className: "stepTitle"
        }), this.stepSelector = l.appendChild(new T({
            className: "stepSelector"
        }));
        var p = n.createChild("div", {
            className: "descWrapper"
        });
        p.createChild("div", {
            className: "image"
        }), this.description = p.createChild("div", {
            className: "description"
        }), n.createChild("div", {
            className: "header",
            text: m("ui.grimoire.quest.objectives")
        }), this.objectivePlaceHolder = new N("div", {
            text: m("ui.grimoire.quest.objectivesNonAvailable"),
            name: "objectivePlaceHolder",
            className: "objectiveRow"
        }), this.objectivesScroller = n.appendChild(new z({
            className: "objectiveList"
        })), this.objectives = this.objectivesScroller.content;
        var h = this.rewardHeader = n.createChild("div", {
            className: "header"
        });
        h.createChild("div", {
            className: "rewardTitle",
            text: m("ui.grimoire.quest.rewards")
        });
        var M = this.xpPoint = h.createChild("div", {
            className: "point"
        });
        this.xp = M.createChild("div", {
            className: "text"
        }), M.createChild("div", {
            className: ["xp", "icon"]
        }), M.hide();
        var g = this.kamasPoint = h.createChild("div", {
            className: "point"
        });
        this.kamas = g.createChild("div", {
            className: "text"
        }), g.createChild("div", {
            className: ["kamas", "icon"]
        }), g.hide(), this.rewardList = n.createChild("div", {
            className: "rewardList"
        }), this.stepSelector.on("change", function(t) {
            e._updateStep(t)
        }), this.questsList.on("itemDeployed", function(e) {
            for (var t = e.subitemList.getChildren(), i = 0; i < t.length; i += 1) t[i].toggleClassName("completed", t[i].data.finished)
        }), this.showCompletedCheckbox.on("change", function(t) {
            return E.setValue("showCompletedQuest", t), "" !== e.searchBox.getValue() ? void e._search(e.searchBox.getValue()) : void e._toggleShowFinishedQuests(t)
        })
    }, n.prototype._updateStep = function(e) {
        var t = this.currentQuest.dbSteps[e],
            i = this.currentQuest.dbQuest.stepIds.indexOf(parseInt(e, 10));
        i <= this.stepSelector.index ? this._displayStepData(t) : this._displayUnknownStep(t)
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui,
            i = t.GPS;
        W.on("questUpdate", function(t) {
            e.isVisible() && e.currentQuest && t === e.currentQuest.questId && (e._updateStepList(), e._resetSelectedQuestElement())
        }), W.on("questFinished", function(t) {
            e.resetSublist(t.dbQuest.categoryId), e._updateQuestCounter(), e.currentQuest && t.questId === e.currentQuest.questId && (e._reset(), e.currentQuest = null)
        }), W.on("questStarted", function(t) {
            var i = W.all[t];
            e.resetSublist(i.dbQuest.categoryId), e._updateQuestCounter();
            var n = E.getValue("showCompletedQuest", !1);
            e._toggleShowFinishedQuests(n), e.currentQuest || (e.currentQuest = W.all[t], e.isVisible() && e._selectQuest(e.currentQuest.dbQuest.categoryId, e.currentQuest.questId))
        }), t.on("disconnect", function() {
            e.currentQuest = null, e.selectedQuestElement = null, e.updateRequired = !0, e.questsListUpdated = !1, e.params = {}, e.locateButtonMap = {}, e._previousSearch = "", e.searchBox.clear()
        }), i.on("addDestination", function(t) {
            var i = e.locateButtonMap[t.id];
            i && i.rootElement && i.addClassNames("selected")
        }), i.on("removeDestination", function(t) {
            var i = e.locateButtonMap[t.id];
            i && i.rootElement && i.delClassNames("selected")
        })
    }, n.prototype._getQuestCategoryStaticData = function(e) {
        I.getAllDataTable("QuestCategory", function(t, i) {
            return t ? e(t) : (P = i || [], P.sort(function(e, t) {
                return e.order - t.order
            }), void e())
        })
    }, n.prototype._createQuestCategories = function() {
        for (var e = 0; e < P.length; e += 1) this.questsList.addItem(P[e].nameId, P[e].id);
        this.questsList.getDom(this.questsListContainer), this.questsList.on("subitemSelected", l);
        for (var t = 0; t < P.length; t += 1) {
            var i = P[t],
                n = this.questsList.getItemElt(t),
                o = n.getChildren()[0].createChild("div", {
                    className: "followedCategoryButton"
                });
            S(o), o.on("tap", this._questCategoryFollowToggle.bind(this, [i.id])), n.followButton = o, this._questCategoryFollowCheck(i.id)
        }
        this.questsList.refreshFilter()
    }, n.prototype._updateQuestList = function() {
        this.updateRequired = !1, this._reset(), this._updateQuestCounter()
    }, n.prototype._reset = function() {
        this._resetSelectedQuestElement(), this.stepTitle.setText(""), this.description.setText(""), this._resetObjectives(), this.rewardList.clearContent(), this.kamas.setText(""), this.kamasPoint.hide(), this.xp.setText(""), this.xpPoint.hide(), this.questsList.deselectSubitem(), this.questsList.refresh(), this.stepSelector.clearContent(), this.stepSelector.hide(), this.questFollowed.hide()
    }, n.prototype._resetSelectedQuestElement = function() {
        this.selectedQuestElement && (this.selectedQuestElement.delClassNames("selected"), this.selectedQuestElement = null)
    }, n.prototype._updateQuestCounter = function() {
        var e = m("ui.grimoire.pendingQuests", Object.keys(W.active)
                .length),
            t = m("ui.grimoire.completedQuests", Object.keys(W.finished)
                .length);
        this.counter.setText(e + " - " + t)
    }, n.prototype._selectQuest = function(e, t) {
        if (e && t) {
            var i = this._getQuestCategoryElementFromCategoryId(e);
            if (i) {
                this.questsList || console.error(new Error("questList not defined yet !")), this.questsList.deployItem(i, !0);
                var n = i.subitemList.getChild(t);
                n && (n.hasClassName("completed") || n.tap(), this.questsList.selectAndShowSubitem(n), this.currentQuest = W.all[t])
            }
        }
    }, n.prototype._resetObjectives = function() {
        this.locateButtonMap = {}, this._removeObjectivePlaceHolder(), this.objectives.clearContent(), this.objectives.appendChild(this.objectivePlaceHolder), this.objectivesScroller.refresh()
    }, n.prototype._removeObjectivePlaceHolder = function() {
        var e = this.objectives.getChild("objectivePlaceHolder");
        e && this.objectives.removeChild(e)
    }, n.prototype._createObjectiveElement = function(e, t, i) {
        var n = new N("div", {
                className: "objectiveRow"
            }),
            o = n.createChild("div", {
                className: "description"
            }),
            r = t.hypertext || t.text,
            s = t.objectiveStatus === D.ACTIVE,
            c = t.objectiveStatus === D.FINISHED,
            l = t.objectiveStatus === D.CAN_BE_FINISHED;
        o.appendChild(M.process(a(r, i, t.objectiveId, !s))), n.toggleClassName("complete", c), n.toggleClassName("disabled", c);
        var d = e.coords;
        return (e.mapId || d && void 0 !== d.x) && (l ? this._createLocateButton(n, o, e, t, i) : s && this._createFakeDisabledLocateButton(n)), n
    }, n.prototype._createFakeDisabledLocateButton = function(e) {
        e.appendChild(new f({
            className: ["locateButton", "disabled"]
        }))
    }, n.prototype._createLocateButton = function(e, t, i, n, o) {
        var a = window.gui.GPS,
            r = a.getQuestObjectivePoiId(n.objectiveId),
            s = e.appendChild(new f({
                className: "locateButton"
            }, d));
        this.locateButtonMap[r] = s, s.toggleClassName("selected", a.isActivePOI(r)), s.questsWindow = this, s.id = r, s.objectiveDb = i, s.objective = n, s.questId = o, S(t), t.on("tap", d.bind(s))
    }, n.prototype._questFollowedToggle = function() {
        var e = window.gui.GPS,
            t = this.currentQuest.questId,
            i = !e.questFollower.isQuestFollowed(t);
        this._updateQuestFollow(t, i, !0), this._questCategoryFollowCheck(this.currentQuest.dbQuest.categoryId)
    }, n.prototype._questCategoryFollowCheck = function(e) {
        var t = window.gui.GPS,
            i = !1;
        for (var n in W.active) {
            var o = W.active[n].dbQuest;
            if (o && o.categoryId === e && (i = !0, !t.questFollower.isQuestFollowed(n))) {
                i = !1;
                break
            }
        }
        var a = this._getQuestCategoryElementFromCategoryId(e);
        return a && a.followButton.toggleClassName("selected", i), i
    }, n.prototype._questCategoryFollowToggle = function(e) {
        e = parseInt(e, 10);
        var t = this._questCategoryFollowCheck(e);
        for (var i in W.active) {
            var n = W.active[i].dbQuest;
            n.categoryId === e && this._updateQuestFollow(i, !t, !0)
        }
        this._questCategoryFollowCheck(e)
    }, n.prototype._displayStepObjectives = function(e) {
        var t = this;
        this._resetObjectives();
        var i = this.currentQuest.objectives;
        if ((!this.currentQuest || this.currentQuest.questId !== e.questId || this.currentQuest.stepId === e.id) && i.length) {
            this._removeObjectivePlaceHolder();
            for (var n, o = 0, a = i.length; o < a; o += 1) n = i[o], this.objectives.appendChild(this._createObjectiveElement(this.currentQuest.dbObjectives[n.objectiveId], n, e.questId));
            window.setTimeout(function() {
                t.objectivesScroller.refresh()
            }, 200)
        }
    }, n.prototype._displayStepRewards = function(e) {
        this.rewardList.clearContent();
        for (var t = window.gui.playerData.characterBaseInformations.level, i = 0, n = e.length; i < n; i += 1) {
            var o = this.currentQuest.dbRewards[e[i]];
            !o || o.levelMin !== -1 && t < o.levelMin || o.levelMax !== -1 && t > o.levelMax || (u(this.rewardList, o.itemsReward), p(this.rewardList, o.emotesReward))
        }
    }, n.prototype._setKamas = function(e) {
        var t = y.calculateStepKamasRatio(e);
        return t ? (this.kamasPoint.show(), void this.kamas.setText(q.intToString(t))) : void this.kamasPoint.hide()
    }, n.prototype._setXp = function(e) {
        var t = window.gui.playerData,
            i = t.characterBaseInformations.level,
            n = t.experienceFactor,
            o = y.calculateStepXpRatio(e, i, n);
        return o ? (this.xpPoint.show(), void this.xp.setText(q.intToString(o))) : void this.xpPoint.hide()
    }, n.prototype._displayStepData = function(e) {
        var t = window.gui.GPS;
        this.stepTitle.setText(o(e.nameId, e.id, e.optimalLevel)), this.description.clearContent(), this.description.appendChild(M.process(e.descriptionId)), this.questFollowed.show(), this.questFollowed.toggleClassName("selected", t.questFollower.isQuestFollowed(this.currentQuest.questId)), this._displayStepObjectives(e), this._displayStepRewards(e.rewardsIds), this._setKamas(e), this._setXp(e)
    }, n.prototype._displayUnknownStep = function(e) {
        this.stepTitle.setText(o(e.nameId, e.id, e.optimalLevel)), this.description.setText(m("ui.grimoire.quest.descriptionNonAvailable")), this._resetObjectives(), this._displayStepRewards(e.rewardsIds), this._setKamas(e), this._setXp(e)
    }, n.prototype._updateStepList = function() {
        var e = this.currentQuest;
        this.stepSelector.clearContent(), this.stepSelector.index = 0;
        for (var t = e.dbQuest.stepIds, i = 0, n = t.length; i < n; i += 1) {
            var o = t[i];
            this.stepSelector.addOption(m("ui.grimoire.quest.step") + " " + (i + 1), o), e.stepId === o && (this.stepSelector.index = i)
        }
        this.stepSelector.select(e.stepId), this.stepSelector.show()
    }, n.prototype._getQuestCategoryElement = function(e) {
        var t = W.all[e];
        return t ? this._getQuestCategoryElementFromCategoryId(t.dbQuest.categoryId) : null
    }, n.prototype._getQuestCategoryElementFromCategoryId = function(e) {
        for (var t, i = this.questsList.list.getItems(), n = 0; n < i.length; n += 1) {
            var o = i[n];
            if (o.info === e) {
                t = o;
                break
            }
        }
        return t
    }, n.prototype._updateQuestFollow = function(e, t, i) {
        var n = window.gui.GPS,
            o = n.questFollower.isQuestFollowed(e);
        t && !o ? n.questFollower.followQuest(e, i) : !t && o && n.questFollower.unfollowQuest(e, i), this.questFollowed.toggleClassName("selected", t), this._updateHourglass(e, t)
    }, n.prototype._updateHourglass = function(e, t) {
        var i = this._getQuestCategoryElement(e);
        if (i) {
            i.subitemList || this.questsList.createSubitemList(i);
            var n = i.subitemList.getChild(e);
            n && n.data.beforeText.toggleClassName("notFollowed", !t)
        }
    }
}
