function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "AchievementsWindow",
            name: "achievements"
        });
        var e = null;
        this.on("open", function(t) {
            e = t && t.achievementId ? t.achievementId : null
        });
        var t = this;
        this.once("open", function() {
            this._createDOM(), window.gui.on("AchievementDetailsMessage", function(e) {
                var i = t.achievementsList.getItem(e.achievement.id);
                i && i.data && (i.data.displayDetails(e.achievement.startedObjectives, e.achievement.finishedObjective), t.achievementsList.refresh(), t.achievementsList.scrollToElement(i, 0))
            });
            var e = window.gui.playerData.achievements;
            e.on("achievementFinished", function(e) {
                t._updateBarsAndPercentages(e.enrichData.categoryID, e.parentCategoryID, e.id)
            }), e.on("achievementListUpdated", function() {
                var i = t._getOrderedCategories(),
                    n = [];
                i.forEach(function(i) {
                    0 === i.parentId ? (e.getCategoryPercentage(i.id), t._updateBarsAndPercentages(i.id, null)) : n.push(i)
                }), n.forEach(function(e) {
                    t._updateBarsAndPercentages(e.id, e.parentId)
                });
                var o = t.summary.getChild("mainProgressBar")
                    .getChild("progressBar");
                o.setValue(window.gui.playerData.achievements.getAchievementPercent() / 100), t.progressBarTooltip.mainProgressBar.setText(window.gui.playerData.achievements.finishedAchievementsIds.length + " / " + window.gui.playerData.achievements.maximumNumberOfAchievements), t.categoriesList.selectItem("mainProgressBar")
            })
        }), this.once("opened", function() {
            this.categoriesList.selectItem("mainProgressBar")
        }), this.on("opened", function() {
            e && this._activateAchievement(e), this.total.setText(window.gui.playerData.achievements.points.toString()), this._resize()
        })
    }
    i(1051);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(130),
        s = i(1052)
        .SingleSelectionList,
        c = i(86),
        l = i(1056),
        d = i(63),
        u = i(594),
        p = i(490),
        h = i(17)
        .getText,
        f = i(12),
        b = i(16),
        m = i(943),
        M = i(88),
        g = i(588),
        _ = 100;
    o(n, a), e.exports = n, n.prototype._updateBarsAndPercentages = function(e, t, i) {
        var n = window.gui.playerData.achievements,
            o = null;
        t ? (o = this.categoriesList.getItem(t), o.sublist && o.sublist.getItem(e)
                .getChild("label")
                .getChild("percentage")
                .setText((100 * n.subCategoriesPercentage[e])
                    .toFixed() + "%")) : (o = this.categoriesList.getItem(e), t = e), o && n.categoriesAchievementCount[t] && o.getChild("label")
            .getChild("percentage")
            .setText((100 * n.categoriesPercentage[t])
                .toFixed() + "%");
        var a = this.summary.getChild(t)
            .getChild("progressBar");
        if (a.setValue(n.categoriesTotalPercentage[t]), this.progressBarTooltip[t].setText(n.categoriesTotalCurrentAchievementCount[t] + " / " + n.categoriesTotalAchievementCount[t]), i) {
            var r = this.achievementsList.getItem(i);
            r && r.getChild(i)
                .addClassNames("completed")
        }
    }, n.prototype._resize = function() {
        var e = this.col2.rootElement.clientWidth,
            t = Math.round(e / 8),
            i = Math.round(e / 12);
        this.total.setStyles({
            height: i + "px",
            fontSize: Math.round(e / 26) + "px",
            lineHeight: i + "px"
        });
        for (var n = 0; n < this.banners.length; n += 1) this.banners[n].setStyles({
            height: t + "px"
        })
    }, n.prototype._displayRightSideContent = function(e) {
        this._cleanRightSideContent(), "mainProgressBar" === e && (this.achievementsScroll.hide(), this.summary.show())
    }, n.prototype._cleanRightSideContent = function() {
        this.achievementsScroll.show(), this.noResult.hide(), this.summary.hide(), this.hideUnlockedCheckbox.hide(), this.achievementsList.clearContent()
    }, n.prototype._getOrderedCategories = function() {
        return window.gui.playerData.achievements.achievementCategories.sort(function(e, t) {
            return e.order - t.order
        })
    }, n.prototype._createDOM = function() {
        var e = this;
        this.col1 = this.createChild("div", {
            className: "col1"
        }), this.col2 = this.createChild("div", {
            className: "col2"
        }), this._createCategoryList(), this._createSearchBlock(), this.noResult = this.col2.createChild("div", {
            className: "noResult",
            text: h("ui.search.noResult")
        }), this.noResult.hide(), this._createSummaryContent(), this.achievementsScroll = this.col2.createChild("div", {
            className: "achievementsScroll"
        }), this.achievementsList = this.achievementsScroll.appendChild(new s), this.achievementsList.addClassNames("achievementsList"), this.achievementsList.on("selected", function(t) {
            window.dofus.sendMessage("AchievementDetailsRequestMessage", {
                achievementId: t.id
            }), t.data.moreContent.show(), e.achievementsList.refresh(), e.achievementsList.scrollToElement(t, 0)
        }), this.achievementsList.on("deselected", function(t) {
            t.data.moreContent.hide(), e.achievementsList.refresh()
        }), this.hideUnlockedChecked = !1, this.hideUnlockedCheckbox = this.col2.appendChild(new u(h("ui.achievement.hideAchieved"))), this.hideUnlockedCheckbox.on("activate", function() {
            e.addClassNames("hideUnlocked"), e.achievementsList.refresh(), e.hideUnlockedChecked = !0;
            var t = !0,
                i = e.achievementsList.getItems();
            i.forEach(function(e) {
                t && !e.data.completedData.isCompleted && (t = !1)
            }), t && (e.noResult.show(), e.noResult.show())
        }), this.hideUnlockedCheckbox.on("deactivate", function() {
            e.delClassNames("hideUnlocked"), e.achievementsList.refresh(), e.hideUnlockedChecked = !1, e.noResult.hide()
        })
    }, n.prototype._createSearchBlock = function() {
        var e = this;
        this.searchBlock = this.col2.createChild("div", {
                className: "searchBlock"
            }), this.searchBox = this.searchBlock.appendChild(new m),
            this.searchBox.on("search", function() {
                e._search()
            }), this.searchName = !0, this.searchDescription = !0, this.searchObjective = !0, this.optionButton = this.searchBox.appendChild(new c({
                className: "optionButton",
                addIcon: !0
            }, function() {
                window.gui.openContextualMenu("generic", {
                    title: h("ui.search.criteria"),
                    actions: [{
                        caption: h("ui.common.name"),
                        cb: function() {
                            e.searchName = !e.searchName, e._search()
                        },
                        ticked: e.searchName
                    }, {
                        caption: h("ui.common.description"),
                        cb: function() {
                            e.searchDescription = !e.searchDescription, e._search()
                        },
                        ticked: e.searchDescription
                    }, {
                        caption: h("ui.grimoire.quest.objectives"),
                        cb: function() {
                            e.searchObjective = !e.searchObjective, e._search()
                        },
                        ticked: e.searchObjective
                    }]
                })
            }))
    }, n.prototype._createCategoryList = function() {
        var e = this,
            t = this.col1.createChild("div", {
                className: "scroll"
            });
        this.categoriesList = t.appendChild(new s), this.categoriesList.addClassNames("tree"), this.categoriesList.on("selected", function(t) {
            e._displayRightSideContent(t.id), t.sublist && t.sublist.show(), t.data && t.data.achievementIds.length > 0 && e._addAchievements(t.data.achievementIds), e.achievementsList.refresh(), e.categoriesList.refresh(), e.categoriesList.scrollToElement(t, 0), e.searchBox.clear()
        }), this.categoriesList.on("deselected", function(t) {
            t.sublist && (t.sublist.deselectAll(), t.sublist.hide()), e.categoriesList.refresh(), t.tappedOnMe ? e.categoriesList.selectItem("mainProgressBar") : e._cleanRightSideContent()
        });
        var i = new a("div", {
            className: ["label", "noPadding"]
        });
        i.createChild("div", {
            className: "icon"
        }), i.createChild("div", {
            className: "text",
            text: h("ui.achievement.synthesis")
        });
        var n = this.categoriesList.addItem({
            id: "mainProgressBar",
            element: i
        }, {
            noRefresh: !0
        });
        n.addClassNames("mainProgressBar");
        var o = [],
            r = this._getOrderedCategories(),
            c = {};
        r.forEach(function(t) {
            if (0 === t.parentId) {
                window.gui.playerData.achievements.getCategoryPercentage(t.id);
                var i = new a("div", {
                    className: ["label", "noPadding"],
                    name: "label"
                });
                i.createChild("div", {
                    className: ["icon", t.icon]
                }), i.createChild("div", {
                    className: "text",
                    text: t.nameId
                }), window.gui.playerData.achievements.categoriesAchievementCount[t.id] && i.createChild("div", {
                    className: "percentage",
                    name: "percentage",
                    text: (100 * window.gui.playerData.achievements.categoriesPercentage[t.id])
                        .toFixed() + "%"
                }), c[t.id] = e.categoriesList.addItem({
                    id: t.id,
                    element: i,
                    data: t
                })
            } else o.push(t)
        }), o.forEach(function(t) {
            var i = new a("div", {
                className: "label",
                name: "label"
            });
            i.createChild("div", {
                className: "text",
                text: t.nameId
            }), i.createChild("div", {
                className: "percentage",
                name: "percentage",
                text: (100 * window.gui.playerData.achievements.subCategoriesPercentage[t.id])
                    .toFixed() + "%"
            });
            var n = c[t.parentId] || {},
                o = n.sublist;
            o || (n.sublist = n.appendChild(new s({
                className: ["tree", "subCategoryList"]
            })), n.sublist.hide(), n.sublist.on("selected", function(t) {
                e.searchBox.clear(), t.data && t.data.achievementIds.length > 0 && e._addAchievements(t.data.achievementIds)
            }), n.sublist.on("deselected", function(i) {
                i.tappedOnMe ? e.categoriesList.selectItem(t.parentId) : e._cleanRightSideContent()
            }), o = n.sublist), o.addItem({
                id: t.id,
                element: i,
                data: t
            })
        })
    }, n.prototype._createSummaryContent = function() {
        var e = this._getOrderedCategories();
        this.summary = this.col2.createChild("div", {
            className: "summary"
        }), this.total = this.summary.createChild("div", {
            className: "total"
        }), this.banners = [], this.progressBarTooltip = {}, this._addSummaryBar({
            id: "mainProgressBar",
            nameId: h("ui.tutorial.progress")
        });
        var t = "gfx/illusUi/illu_",
            i = [t + "cat_0.png"],
            n = this;
        e.forEach(function(e) {
            0 === e.parentId && (i.push(t + e.icon + ".png"), n._addSummaryBar(e))
        }), f.preloadImages(i, function(e) {
            for (var t = 0; t < n.banners.length; t += 1) n.banners[t].setStyle("backgroundImage", e[t])
        })
    }, n.prototype._addSummaryBar = function(e) {
        var t = this.summary.createChild("div", {
                className: "summaryBar",
                name: e.id
            }),
            i = t.createChild("div", {
                className: "banner"
            });
        this.banners.push(i), i.createChild("div", {
            className: "text",
            text: e.nameId
        });
        var n = "yellow";
        switch (e.id) {
            case 15:
                n = "light-orange";
                break;
            case 6:
                n = "green";
                break;
            case 3:
                n = "blue";
                break;
            case 25:
                n = "red";
                break;
            case 8:
                n = "aqua";
                break;
            case 7:
                n = "pink";
                break;
            case 5:
                n = "orange";
                break;
            case 9:
                n = "purple"
        }
        var o = t.appendChild(new p({
            className: n,
            name: "progressBar"
        }));
        if ("mainProgressBar" === e.id) {
            var r = this.progressBarTooltip[e.id] = new a("div", {
                text: window.gui.playerData.achievements.finishedAchievementsIds.length + " / " + window.gui.playerData.achievements.maximumNumberOfAchievements
            });
            return o.setValue(window.gui.playerData.achievements.getAchievementPercent() / 100), M.addTooltip(o, r), t.addClassNames("mainProgressBar")
        }
        r = this.progressBarTooltip[e.id] = new a("div", {
            text: window.gui.playerData.achievements.categoriesTotalCurrentAchievementCount[e.id] + " / " + window.gui.playerData.achievements.categoriesTotalAchievementCount[e.id]
        }), o.setValue(window.gui.playerData.achievements.categoriesTotalPercentage[e.id]), M.addTooltip(o, r), d(i);
        var s = this;
        i.on("tap", function() {
            s.categoriesList.selectItem(e.id)
        })
    }, n.prototype._addAchievements = function(e, t) {
        if (e.length > _ && t) return window.gui.openSimplePopup(h("tablet.ui.search.tooManyResults"));
        var i = this,
            n = [];
        r.getDataArray("Achievements", e, function(e, t) {
            if (e) return console.error("Achievements with achievementIds error", e);
            t.sort(function(e, t) {
                return e.order - t.order
            }), i._cleanRightSideContent(), i.hideUnlockedCheckbox.show();
            for (var o = [], a = 0; a < t.length; a++)
                for (var s = t[a].objectiveIds, c = 0; c < s.length; c++) o.push(s[c]);
            n = t, r.getDataMap("AchievementObjectives", o, null, function(e, t) {
                if (e) return console.error("unable to retrieve data from AchievementObjectives", e);
                for (var o = [], a = [], r = i.hideUnlockedChecked, s = 0, c = n.length; s < c; s++) {
                    o.push("gfx/achievements/" + n[s].iconId + ".png");
                    var l = i._addAchievement(n[s], t);
                    a.push(l), r && !l.hasClassName("completed") && (r = !1)
                }
                r && i.noResult.show(), f.preloadImages(o, function(e) {
                    for (var t = 0, i = e.length; t < i; t += 1) {
                        var n = a[t].icon;
                        n ? n.setImage(e[t]) : console.warn("Missing icon for achievement #" + t, a[t])
                    }
                })
            })
        })
    }, n.prototype._addAchievement = function(e, t) {
        var i = new l(e, t);
        return this.achievementsList.addItem({
            id: e.id,
            element: i,
            data: i
        }), this.openAchievementWithID === e.id && (this.achievementsList.selectItem(this.openAchievementWithID), this.openAchievementWithID = null), i
    }, n.prototype._activateAchievement = function(e) {
        var t = this;
        e = parseInt(e, 10), r.getObject("Achievements", e, function(i, n) {
            if (i || !n) return console.error("Failed getting Achievements #" + e + " error: " + i + " res: " + n);
            var o = !1,
                a = t.categoriesList,
                r = a.getItem(n.categoryId);
            if (r) r.isSelected ? t.achievementsList.selectItem(e) : (t.openAchievementWithID = e, a.selectItem(n.categoryId));
            else {
                var s = a.getItems();
                for (var c in s)
                    if (s.hasOwnProperty(c)) {
                        var l = s[c],
                            d = l.sublist;
                        if (d && (o = d.getItem(n.categoryId))) {
                            o.isSelected ? t.achievementsList.selectItem(e) : (l.isSelected || a.selectItem(l.id), l.sublist.show(), t.openAchievementWithID = e, d.selectItem(n.categoryId));
                            break
                        }
                    }
            }
        })
    }, n.prototype._search = function() {
        var e = this.searchBox.searchInput.getValue();
        if (null !== e && "" !== e) {
            if (e.length < this.searchBox.getSearchMinLen()) return g.showNotification(h("ui.common.searchFilterTooltip", this.searchBox.getSearchMinLen()), this.searchBox);
            e = b.simplifyString(e);
            var t = this;
            this.searchAchievementIds = [];
            var i = function(e, i) {
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var o = e[n],
                            a = i ? o.achievementId : o.id;
                        t.searchAchievementIds.indexOf(a) === -1 && t.searchAchievementIds.push(a)
                    }
            };
            this.searchName ? r.searchDataMap("Achievements", {
                match: e
            }, function(e, n) {
                return t.hasSearchedName = !0, e ? console.error("AchievementsWindow achievements search", e) : (i(n), void t._searchResult())
            }) : this.hasSearchedName = !0, this.searchDescription ? r.searchDataMap("Achievements", {
                match: e,
                matchProp: "descriptionId"
            }, function(e, n) {
                return t.hasSearchedDescription = !0, e ? console.error("AchievementsWindow description search", e) : (i(n), void t._searchResult())
            }) : this.hasSearchedDescription = !0, this.searchObjective ? r.searchDataMap("AchievementObjectives", {
                match: e
            }, function(e, n) {
                return t.hasSearchedObjectives = !0, e ? console.error("AchievementsWindow objectives search", e) : (i(n, !0), void t._searchResult())
            }) : this.hasSearchedObjectives = !0, t._searchResult()
        }
    }, n.prototype._searchResult = function() {
        this.hasSearchedName && this.hasSearchedDescription && this.hasSearchedObjectives && (this.hasSearchedName = this.hasSearchedDescription = this.hasSearchedObjectives = !1, this.categoriesList.deselectAll(), this.searchAchievementIds.length > 0 ? this._addAchievements(this.searchAchievementIds, !0) : (this._cleanRightSideContent(), this.noResult.show()))
    }
}
