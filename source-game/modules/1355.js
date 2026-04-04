function(e, t, i) {
    function n() {
        o = p.getStepsData();
        var e = window.gui.playerData.ToaData;
        s.call(this, "div", {
            className: ["panel", "compositionTab"],
            name: "composition"
        });
        var t = this;
        this.openedTabId = null, this.once("open", function() {
            t._setupDom()
        }), this.on("open", function() {
            o = p.getStepsData();
            var t = e.getCurrentStage();
            h = t.step, f = t.stage;
            var i = e.current.score;
            if (this._mapLocationButton && this._mapLocationButton.destroy(), o) {
                O || this._createSteps(this._stepList), this._scoreCompo.setText(a("ui.common.score") + a("ui.common.colon") + i);
                var n = e.getStepsScoreRatio();
                this._stepsLabel.forEach(function(e) {
                    var t = n[e.stepNumber - 1];
                    e.element.setText(a("ui.toa.step") + " " + e.stepNumber + " - " + t + "%")
                }), this._selectInitialStage(h, f)
            }
        }), window.gui.on("disconnect", function() {
            O && t._stepList.clearContent(), O = !1
        })
    }
    i(1356);
    var o, a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(72),
        c = i(91)
        .playUiSound,
        l = i(1052)
        .SingleSelectionList,
        d = i(63),
        u = i(12),
        p = i(1353),
        h = 1,
        f = 1,
        b = 1.645,
        m = 7,
        M = 1,
        g = 3,
        _ = 4,
        A = -500,
        O = !1;
    r(n, s), e.exports = n, n.prototype._setupDom = function() {
        var e = this.createChild("div", {
            className: "unscrollableContentBlock"
        });
        this._createContent(e)
    }, n.prototype._createContent = function(e) {
        var t = this,
            i = e.createChild("div", {
                className: "compositionContent"
            });
        if (o) {
            var n = this.col1 = i.createChild("div", {
                    className: "col1"
                }),
                r = i.createChild("div", {
                    className: "col2"
                }),
                s = this._stepList = n.appendChild(new l({
                    className: "tree"
                }));
            s.on("selected", function(e) {
                h = e.id, e.sublist.show(), c("TAB"), s.refresh(), s.scrollToElement(e)
            }), s.on("deselected", function(e) {
                h = null, e.sublist.hide(), s.refresh()
            });
            var d = r.createChild("div", {
                className: "statBlock"
            });
            this._challengeBlock = d.createChild("div", {
                className: "challengeBlock"
            });
            var u = d.createChild("div", {
                    className: "scoreBlock"
                }),
                p = u.createChild("div", {
                    className: "scoreBoxHeaderContentBlock"
                });
            this._scoreCompo = p.createChild("div", {
                className: "playerScore"
            }), this.scoreBox = u.createChild("div", {
                className: "floorScoreBoxHeaderContentBlock"
            }), r.createChild("hr", {
                className: "separator"
            });
            var f = r.createChild("div", {
                    className: "monsterListWrapper"
                }),
                b = this._monsterList = f.appendChild(new l);
            b.on("selected", function(e) {
                e.more ? (e.more.show(), this.refresh()) : (t._createMonsterMoreInfo(e), this.refresh())
            }), b.on("deselected", function(e) {
                e.more.hide(), this.refresh()
            })
        } else i.createChild("div", {
            className: "col2",
            text: a("ui.toa.ascensionClosed")
        })
    }, n.prototype._createSteps = function(e) {
        var t = this,
            i = window.gui.playerData.ToaData,
            n = i.getStepsScoreRatio();
        return this._stepsLabel = [], o ? (o.forEach(function(o) {
            var r = new s("div", {
                className: "label",
                name: o.stepNumber
            });
            r.createChild("div", {
                className: "arrow"
            }), t._stepsLabel.push({
                element: r.createChild("div", {
                    className: "text",
                    text: a("ui.toa.step") + " " + o.stepNumber + " - " + n[o.stepNumber - 1] + "%"
                }),
                stepNumber: o.stepNumber
            });
            var c = e.addItem({
                id: o.stepNumber,
                element: r
            }, {
                noRefresh: !0
            });
            c.sublist = c.appendChild(new s("div", {
                className: "sublist"
            })), o.stages.forEach(function(e) {
                var n = new s("div", {
                    className: "label",
                    name: e.stageLevel
                });
                n.createChild("div", {
                    className: "text",
                    text: a("ui.toa.stage") + " " + e.stageLevel
                }), c.sublist.appendChild(n), d(n), n.on("tap", function() {
                    t._resetSelectedSubElement(), f = e.stageLevel, n.addClassNames("selected"), t.selectedSubAreaElement = n;
                    var o = i.getMonsterIds(f, h),
                        a = i.getChallengeIds(f, h);
                    i.gatheringCompositionData(o, a, function(e, i, n) {
                        return e ? console.error(e) : (t._showMonsters(i), t._showChallenges(n), void t._showScore(n))
                    })
                })
            }), c.sublist.hide()
        }), void(O = !0)) : console.error(new Error("Cannot create steps, list is empty."))
    }, n.prototype._addMonster = function(e, t, i, n) {
        var o = new s("div", {
                className: "infos"
            }),
            r = o.createChild("div", {
                className: "gfx"
            });
        r.setStyle("backgroundImage", t);
        var c = o.createChild("div", {
                className: "infosGroupRight"
            }),
            l = c.createChild("div", {
                className: "cf"
            }),
            d = ["name"],
            u = {};
        e.isBoss && d.push("boss"), e.isMiniBoss && d.push("miniBoss"), e.isQuestMonster && d.push("questMonster");
        var p = window.gui.playerData.isAbleToSeeId(),
            h = e.nameId;
        p && (h += " (" + e.id + ")"), l.createChild("div", {
            className: d,
            text: h
        }), e.grades.forEach(function(e) {
            e.grade === n && (u = e)
        });
        var b = window.gui.playerData.ToaData.getMonsterLevelScaled(f),
            m = a("ui.common.short.level") + " " + b;
        l.createChild("div", {
            className: "level",
            text: m
        });
        var M = this._monsterList.addItem({
            id: i,
            element: o,
            data: e
        }, {
            noRefresh: !0
        });
        M.addClassNames("monster"), M.monsterData = u, M.monsterData.scaledLvl = b, M.monsterData.isBoss = e.isBoss
    }, n.prototype._createMonsterMoreInfo = function(e) {
        function t(e, t) {
            var i = "lifePoints" === t ? l : o[t],
                n = e + ": " + i;
            u.createChild("div", {
                className: "stat",
                text: n
            })
        }

        function i(e) {
            var t = o[e],
                i = t;
            p.createChild("div", {
                className: ["stat", "resistance", e],
                text: i
            })
        }
        e.more = e.createChild("div", {
            className: "more"
        });
        var n = e.more.createChild("div", {
                className: "cf"
            }),
            o = e.monsterData,
            r = o.scaledLvl,
            s = o.lifepointsRatio,
            c = o.isBoss ? g : M,
            l = Math.pow(r, b),
            d = s * m + c * _;
        d /= _ + m, l = Math.trunc(l * d + A);
        var u = n.createChild("div", {
            className: ["col", "colLeft"]
        });
        u.createChild("div", {
            className: "subtitle",
            text: a("ui.common.caracteristics")
        }), t(a("ui.short.lifePoints"), "lifePoints"), t(a("ui.short.actionPoints"), "actionPoints"), t(a("ui.short.movementPoints"), "movementPoints");
        var p = n.createChild("div", {
            className: ["col", "colRight"]
        });
        p.createChild("div", {
            className: "subtitle",
            text: a("ui.common.resistances")
        }), i("neutralResistance"), i("earthResistance"), i("fireResistance"), i("waterResistance"), i("airResistance")
    }, n.prototype._showChallenges = function(e) {
        var t = window.gui.playerData.ToaData;
        this._challengeBlock.clearContent();
        var i = t.getSelectedStageSucceedChallengeIds(f);
        if (t.isSelectedStageDone(f))
            for (var n in e) {
                for (var o = this._challengeBlock.createChild("div", {
                        className: "challengeContent"
                    }), r = !1, s = 0; s < i.length; s++) i[s] === e[n].id && (o.createChild("div", {
                    className: "succeed"
                }), r = !0);
                r || o.createChild("div", {
                    className: "failed"
                }), o.createChild("div", {
                    className: "description",
                    text: e[n].nameId + a("ui.common.colon") + e[n].points
                })
            } else
                for (n in e) o = this._challengeBlock.createChild("div", {
                    className: "challengeContent"
                }), o.createChild("div", {
                    className: "description",
                    text: e[n].nameId + a("ui.common.colon") + e[n].points
                });
        var c = this._challengeBlock.createChild("div", {
            className: "deadContent"
        });
        c.createChild("div", {
            className: "deathIcon"
        }), c.createChild("div", {
            className: "deathContent",
            text: a("ui.alert.event.13") + a("ui.common.colon") + t.getSelectedMalusScore(f)
        })
    }, n.prototype._showScore = function(e) {
        var t = this,
            i = window.gui.playerData.ToaData,
            n = i.calculateMaxStageScore(f, e);
        t.scoreBox.clearContent(), t.scoreBox.createChild("div", {
            className: "floorScore",
            text: a("ui.toa.floorScore") + a("ui.common.colon") + i.getSelectedStageScore(f)
        }), t.scoreBox.createChild("div", {
            className: "floorScore",
            text: a("ui.toa.compoFloorScoreMax") + a("ui.common.colon") + n
        })
    }, n.prototype._selectInitialStage = function(e, t) {
        if (e) {
            var i = this._stepList.getItem(e);
            if (i) {
                this._stepList.selectItem(e);
                var n = i.sublist.getChild(t);
                n.tap(), this._stepList.showElement(n)
            }
        }
    }, n.prototype._showMonsters = function(e) {
        var t = this,
            i = window.gui.playerData.ToaData;
        this._monsterList.clearContent(), this._monsterList.delClassNames("spinner");
        var n = [];
        for (var o in e) n.push("gfx/monsters/" + e[o].id + ".png");
        u.preloadImages(n, function(n) {
            var o = 0,
                a = i.getMonstersData(f, h);
            for (var r in e) {
                for (var s = 0; s < a.length; s++) e[r].id === a[s].creatureGenericId && t._addMonster(e[r], n[o], r + s, a[s].grade);
                o++
            }
            t._monsterList.refresh()
        })
    }, n.prototype._resetSelectedSubElement = function() {
        this.selectedSubAreaElement && this.selectedSubAreaElement.rootElement && this.selectedSubAreaElement.hasClassName("selected") && (this.selectedSubAreaElement.delClassNames("selected"), this.selectedSubAreaElement = null)
    }
}
