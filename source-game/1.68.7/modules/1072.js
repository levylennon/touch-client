function(e, t, i) {
    function n() {
        c.call(this, "div", {
            className: "jobsWindow",
            name: "jobs"
        });
        var e = this;
        this.jobButtons = [], this.jobSelectButtons = [], this.jobSelectSpecialButtons = [], this._expBarTooltip = new c("div"), this.mustRefreshJobs = !0, this.numRefreshTasks = 0, this._setupEvents(), this.on("open", function(t) {
            e.jobListElement || e._createDom();
            var i = t ? t.jobId : null;
            return e.mustRefreshJobs ? e._refreshJobs(i) : void(i && e.selectJob(i))
        }), this.on("close", function() {
            e.mustRefreshJobs = !0, M.getWindow("jobOptions")
                .openState && M.close("jobOptions"), e.recipeList.reset()
        })
    }

    function o(e, t) {
        var i = e.getChild("level");
        i && (t = t ? h("ui.common.short.level") + " " + t : "", i.setText(t))
    }

    function a(e) {
        var t = e.jobId ? C[e.jobId] : null;
        e.getChild("jobIcon")
            .setImage(t)
    }

    function r(e, t) {
        var i, n;
        null === t ? (i = null, n = null) : (i = t.id, n = t.experience ? t.experience.jobLevel : 1), e.jobId = i, a(e), o(e, n)
    }
    i(1073);
    var s = i(56)
        .inherits,
        c = i(72),
        l = i(130),
        d = i(490),
        u = i(86),
        p = i(1052),
        h = i(17)
        .getText,
        f = i(469),
        b = i(873),
        m = i(871),
        M = i(52),
        g = i(1074),
        _ = i(12),
        A = i(88),
        O = i(13),
        v = i(509),
        y = i(1062),
        z = 3,
        w = 3,
        T = 100,
        C = {};
    s(n, c), e.exports = n, n.prototype._reset = function() {
        this.mustRefreshJobs = !0, this.numRefreshTasks = 0
    }, n.prototype._refreshJobs = function(e) {
        this.mustRefreshJobs = !1;
        var t = Math.max(0, window.gui.playerData.jobs.jobXpBonus - 100);
        if (window.gui.playerData.isSubscriberAtMinLevel(v.NORMAL)) {
            var i = t + O.BONUS_PACK_XPJOB;
            this._bonusPackText.setHtml(h("ui.shop.xpBonusPackJobActive", i, O.BONUS_PACK_XPJOB)), this._linkToShop.hide()
        } else t > 0 ? this._bonusPackText.setHtml(h("ui.shop.xpBonusJobOnly", t, O.BONUS_PACK_XPJOB)) : this._bonusPackText.setHtml(h("tablet.shop.xpBonusInactive", O.BONUS_PACK_XPJOB)), this._linkToShop.show();
        var n = window.gui.playerData.jobs;
        this.jobMap = n.list;
        var o = Object.keys(this.jobMap);
        if (o.length) {
            this._updateJobButtons(n.jobOriginalOrder);
            var a = this;
            this._getJobImages(function() {
                a._updateJobIcons()
            }), e = e || n.jobOriginalOrder[0], this.selectJob(e, !0)
        }
    }, n.prototype._getJobImages = function(e) {
        var t = [],
            i = [],
            n = this.jobMap;
        for (var o in n) {
            var a = n[o];
            a.info.iconId === -1 || C[o] || (t.push("gfx/jobs/" + a.info.iconId + ".png"), i.push(o))
        }
        return t.length ? void _.preloadImages(t, function(t) {
            for (var n = 0; n < t.length; n++) C[i[n]] = t[n];
            return e()
        }) : e()
    }, n.prototype._createDom = function() {
        var e = this,
            t = this.createChild("div", {
                className: "col1"
            }),
            i = this.createChild("div", {
                className: "col2"
            });
        this.jobListElement = t.createChild("div", {
            className: "jobsList"
        });
        for (var n = 0; n < z; n++) this._createJobIcon(n);
        var o = this.jobListElement.createChild("div", {
            className: "specialisation"
        });
        for (o.createChild("div", {
                className: "text",
                text: h("ui.common.specializations")
            }); n < z + w; n++) this._createJobIcon(n, o);
        this.jobExpBlock = t.createChild("div", {
            className: "jobExpBlock"
        }), this.jobWrapper = this.jobExpBlock.createChild("div", {
            className: "jobWrapper"
        }), this.jobName = this.jobWrapper.createChild("div", {
            className: "jobName"
        }), this.jobLevel = this.jobWrapper.createChild("div", {
            className: "jobLevel"
        }), this._jobExpBar = this.jobExpBlock.appendChild(new d({
            className: "jobExpBar"
        })), A.addTooltip(this._jobExpBar, this._expBarTooltip, {
            longTapExplanation: !0
        }), this.skillsBlock = t.createChild("div", {
            className: "skillsBlock"
        }), this.skillsTitle = this.skillsBlock.createChild("div", {
            className: "skillsTitle",
            text: h("ui.common.abilities")
        });
        var a = t.appendChild(new u({
            text: h("ui.craft.jobOptions"),
            className: ["greenButton"]
        }));
        a.on("tap", function() {
            M.open("jobOptions", {
                jobId: e.selectedJobId
            })
        }), this.skillsList = this.skillsBlock.appendChild(new p({
            className: "skillsList"
        }, {
            enableOdd: !0
        })), this.recipeList = i.appendChild(new g({
            shouldNotSelect: !0
        }));
        var r = i.createChild("div", {
            className: "bonusPackMessage"
        });
        this._bonusPackText = r.createChild("span"), this._linkToShop = r.appendChild(new u({
            className: "linkToShop",
            scaleOnPress: !1
        })), this._linkToShop.on("tap", function() {
            M.open("market", {
                tabId: "shop",
                tabParams: {
                    category: "bonuspack"
                }
            })
        })
    }, n.prototype._createJobIcon = function(e, t) {
        var i = this,
            n = t || this.jobListElement,
            o = n.createChild("div", {
                className: "job"
            });
        o.itemSlot = o.appendChild(new b({
            name: "jobIcon"
        })), this.jobButtons.push(o), t ? this.jobSelectSpecialButtons.push(o) : (this.jobSelectButtons.push(o), o.createChild("div", {
            className: "level",
            name: "level"
        })), o.itemSlot.on("tap", function() {
            o.jobId && i.selectJob(o.jobId)
        })
    }, n.prototype._updateJobButtons = function(e) {
        for (var t = 0; t < this.jobButtons.length; t++) r(this.jobButtons[t], null);
        var i = 0,
            n = 0;
        for (t = 0; t < e.length; t++) {
            var o = this.jobMap[e[t]],
                a = o.info.specializationOfId ? this.jobSelectSpecialButtons[n++] : this.jobSelectButtons[i++];
            r(a, o)
        }
    }, n.prototype._updateJobIcons = function() {
        for (var e = 0; e < this.jobButtons.length; e++) a(this.jobButtons[e])
    }, n.prototype._getJobButton = function(e) {
        for (var t = this.jobButtons, i = 0; i < t.length; i++)
            if (t[i].jobId === e) return t[i];
        return console.error("_getJobButton: invalid Job ID: " + e), null
    }, n.prototype._setupEvents = function() {
        var e = this,
            t = window.gui.playerData.jobs;
        window.gui.on("disconnect", function() {
            e._reset()
        }), t.on("jobListUpdated", function() {
            var i = 0 !== Object.keys(t.list)
                .length;
            i && (e.mustRefreshJobs = !0, e.isVisible() && e._refreshJobs())
        }), t.on("jobLevelUp", function(t, i) {
            if (!e.mustRefreshJobs) {
                var n = e._getJobButton(t.id);
                if (n) return o(n, i), e.isVisible() && t.id === e.selectedJobId ? e._refreshJobs(t.id) : void 0
            }
        }), t.on("jobExperienceUpdate", function(t) {
            e.isVisible() && t.jobId === e.selectedJobId && e._updateJobInfo(t)
        })
    }, n.prototype._updateJobInfo = function(e) {
        var t = "";
        t = 100 !== e.currentLevel ? e.percentage + "% (" + e.currentExperience + " / " + e.levelExperienceCeil + ")" : e.percentage + "% (" + e.currentExperience + ")", this._expBarTooltip.setText(t), this._jobExpBar.setValue(e.percentage / 100), this.jobName.setText(this.jobMap[e.jobId].info.nameId), this.jobLevel.setText(h("ui.common.level") + " " + e.currentLevel)
    }, n.prototype._selectJobButton = function(e) {
        var t = this._getJobButton(e);
        if (!t) return !1;
        if (this.currentJobBtn) {
            if (this.currentJobBtn.jobId === e) return !1;
            this.currentJobBtn.itemSlot.unselect()
        }
        return t.itemSlot.select(), this.currentJobBtn = t, !0
    }, n.prototype.selectJob = function(e, t) {
        if (this._selectJobButton(e) || t) {
            var i = this;
            window.setTimeout(function() {
                i._refreshCurrentJob(e)
            }, 50)
        }
    }, n.prototype._afterRefreshTask = function() {
        if (this.numRefreshTasks--, this.numRefreshTasks > 0) return !this.lastJobIdRequested;
        if (!this.lastJobIdRequested) return !0;
        var e = this.lastJobIdRequested;
        return this.lastJobIdRequested = null, this._refreshCurrentJob(e), !1
    }, n.prototype._refreshCurrentJob = function(e) {
        if (this.numRefreshTasks) return void(this.lastJobIdRequested = e);
        this.selectedJobId = e;
        var t = window.gui.playerData.jobs,
            i = 2,
            n = [],
            o = this.jobMap[e],
            a = o.description.skills;
        this._updateJobInfo(t.getJobExperience(e)), this.skillsList.clearContent();
        var r = [],
            s = [],
            d = [],
            u = [];
        a.sort(function(e, t) {
            return t._type === e._type ? 0 : "SkillActionDescriptionCraft" === e._type ? 1 : "SkillActionDescriptionCraft" === t._type ? -1 : 0
        });
        for (var p = 0; p < a.length; p++) {
            var b = a[p],
                M = b.skillId,
                g = b.info;
            if (g) {
                var _ = new c("div", {
                    className: "label"
                });
                this.skillsList.addItem({
                    id: M,
                    element: _
                });
                var A = _.createChild("div", {
                    className: "skillLeft"
                });
                A.createChild("div", {
                    className: "skillName",
                    text: g.nameId
                }), d.push(A.createChild("div", {
                    className: "skillDetail"
                })), u.push(g.interactiveId);
                var O = _.createChild("div", {
                        className: "skillRight"
                    }),
                    v = O.createChild("div", {
                        className: "skillStats"
                    });
                if ("SkillActionDescriptionCollect" === b._type) {
                    v.setText(h("ui.jobs.collectSkillInfos", b.time / 10, b.min, b.max)), s.push(g.gatheredRessourceItem);
                    var z = O.appendChild(new m({
                        descriptionOptions: {
                            effects: !1
                        }
                    }));
                    r.push(z), b.info.subAreas && b.info.subAreas.length > 0 && O.appendChild(new y.MapLocationButton({
                        subareaIds: b.info.subAreas,
                        centerOn: "nearest",
                        sameWorld: !0
                    }))
                }
                if ("SkillActionDescriptionCraft" === b._type) {
                    var w = h("ui.jobs.slotPercents", b.maxSlots, b.probability);
                    v.setText(w), n = n.concat(g.recipes), v.addClassNames("bottom")
                }
            }
        }
        this.numRefreshTasks += 3;
        var C = this;
        f.getItems(s, function(e, t) {
            if (e) return C._afterRefreshTask(), console.error("JobsWindow: Failed to get ingredients", e);
            if (C._afterRefreshTask())
                for (var i = 0; i < t.length; i++) {
                    var n = t[i];
                    r[i].setItem(n)
                }
        }), l.getDataMap("Interactives", u, null, function(e, t) {
            if (e) return C._afterRefreshTask(), console.error("JobsWindow: Failed to get interactive data", e);
            if (C._afterRefreshTask())
                for (var i = 0; i < u.length; i++) {
                    var n = u[i],
                        o = t[n];
                    o ? d[i].setText(o.nameId) : console.error(new Error("JobsWindow: no interactive for id " + n))
                }
        }), this.recipeList.reset();
        var I = window.gui.playerData.jobs.getMaxSlotsByJobId(e) || i;
        window.gui.playerData.jobs.getJobExperience(e)
            .currentLevel === T && (I += 1), this.recipeList.addRecipes(n, {
                nbCase: I
            }, function() {
                C._afterRefreshTask()
            })
    }
}
