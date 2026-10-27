function(e, t, i) {
    function n() {
        p.call(this, { className: "characUpdateWindow", title: "Characteristic Update", positionInfo: { top: "c",
                                                                                                        left: "c",
                                                                                                        width: 470,
                                                                                                        height: 300 }
        }),
        this.on("open", function(e) {
            var t = h.getWindow("characteristics");
            t.openState && (h.arrangeOpeningWindow(this.id, {
                rightOf: t.id
            }), this.updateContent(e))
        }), 
        this.on("close", function() {
            c.hide()
        }),
        this.closeButton.on("tap", function() {
            d("CANCEL_BUTTON")
        })
    }
    i(1017);
    var o = i(86),
        a = i(1018),
        r = i(17)
        .getText,
        s = i(56)
        .inherits,
        c = i(452),
        l = i(423),
        d = i(91)
        .playUiSound,
        u = i(765),
        p = i(70),
        h = i(52),
        f = {
            vitality: 11,
            wisdom: 12,
            strength: 10,
            intelligence: 15,
            chance: 13,
            agility: 14
        },
        b = 0,
        m = 1;
    s(n, p), e.exports = n, n.prototype.updateContent = function(e) {
        var t = this,
            i = {
                basePtsToAssign: e.pointsRemaining,
                additionalPtsToAssign: e.additionalPtsRemaining,
                initialLevel: e.initialLevel,
                initialAdditionalPts: e.initialAdditionalPts,
                isAdditionalPtsAssignMode: e.isAdditionalPtsAssign,
                costSteps: e.costSteps
            };
        this._charaUpdateModule = new a(i), this._previousCostStep = void 0, this.windowTitle.setText(e.label), this.windowBody.clearContent();
        var n = r("ui.charaSheet.boostPoints") + r("ui.common.colon"),
            s = null,
            c = null,
            u = this._charaUpdateModule.getPtsToAssign();
        if (t._charaUpdateModule.canAssignAdditionalPts()) {
            var p = r("tablet.charaSheet.boostAdditionnalPoints") + r("ui.common.colon"),
                b = this.windowBody.appendChild(new o({
                    scaleOnPress: !1
                }, function() {
                    t.updateContent({
                        label: e.label,
                        characteristicName: e.characteristicName,
                        additionalPtsRemaining: e.additionalPtsRemaining,
                        pointsRemaining: e.pointsRemaining,
                        initialLevel: e.initialLevel,
                        initialAdditionalPts: e.initialAdditionalPts,
                        isAdditionalPtsAssign: !t._charaUpdateModule.isAdditionalPtsAssignMode(),
                        costSteps: e.costSteps
                    })
                }));
            s = b.createChild("div", {
                className: ["points", "pointsRemainingLine"]
            }), s.createChild("span", {
                text: n
            }), c = b.createChild("div", {
                className: ["points", "additionalPtsRemainingLine"]
            }), c.createChild("span", {
                text: p
            });
            var m = this._charaUpdateModule.isAdditionalPtsAssignMode();
            s.toggleClassName("on", !m), c.toggleClassName("on", m)
        } else s = this.windowBody.createChild("div", {
            className: "points"
        }), s.createChild("span", {
            text: n
        });
        s && (this._pointsRemainingElt = s.createChild("span", {
            className: "pointsRemaining",
            text: u.base
        })), c && (this._additionalPtsRemainingElt = c.createChild("span", {
            className: "pointsRemaining",
            text: u.additional
        })), this._container = this.windowBody.createChild("div", {
            className: "containerBlock"
        });
        var M = this._container.createChild("div", {
            className: "additionBlock"
        });
        M.appendChild(new o({
            className: "minButton",
            repeatDelay: 50,
            scaleOnPress: !0
        }, function() {
            t._charaUpdateModule.resetPts(), t.displayValues()
        })), M.appendChild(new o({
            className: "minusButton",
            repeatDelay: 50,
            scaleOnPress: !0
        }, function() {
            t._charaUpdateModule.decrementPts() && t.displayValues()
        })), this._pointsLineAdded = new l({
            className: "pointsInput",
            minValue: 0,
            maxValue: this._charaUpdateModule.getMaxRemainingPts()
        }), this._pointsLineAdded.on("change", function(e) {
            t._charaUpdateModule.spendPointsUntil(e), t.displayValues()
        }), M.appendChild(this._pointsLineAdded), M.appendChild(new o({
            className: "plusButton",
            repeatDelay: 50,
            scaleOnPress: !0
        }, function() {
            t._charaUpdateModule.incrementPts() && t.displayValues()
        })), M.appendChild(new o({
            className: "maxButton",
            repeatDelay: 50,
            scaleOnPress: !0
        }, function() {
            t._charaUpdateModule.incrementToMaxPts(), t.displayValues()
        }));
        var g = M.createChild("div", {
            className: "additionLine"
        });
        g.createChild("span", {
            text: "+ "
        }), this._levelAddedElt = g.createChild("span", {
            text: 0
        }), g.createChild("span", {
            text: " " + e.label
        });
        var _ = M.createChild("div", {
            className: "totalLine"
        });
        this._finalLevelElt = _.createChild("span", {
            text: this._charaUpdateModule.getInitialLevel()
        }), _.createChild("span", {
            text: " " + e.label
        }), this.createCostLevelTable(), this._container.appendChild(new o({
            text: r("ui.common.validation"),
            className: "button"
        }, function() {
            if (t._charaUpdateModule.getSpentPts() <= 0) return d("GEN_BUTTON");
            d("OK_BUTTON");
            var i = f[e.characteristicName];
            window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CHARAC_UPDATE), window.dofus.sendMessage("StatsUpgradeRequestMessage", {
                statId: i,
                boostPoint: t._charaUpdateModule.getSpentPts(),
                useAdditionnal: t._charaUpdateModule.isAdditionalPtsAssignMode()
            }), h.close(t.id)
        })), this.displayValues()
    }, n.prototype.createCostLevelTable = function() {
        for (var e = {
                title: r("ui.common.cost")
            }, t = this._charaUpdateModule.getCostSteps(), i = [{
                id: "title",
                header: r("ui.common.level")
            }], n = 0; n < t.length; n++) e["l" + n] = t[n][m], i.push({
            id: "l" + n,
            header: "> " + t[n][b]
        });
        this._table = this._container.appendChild(new u(i, null, {
            clickable: !1
        })), this._table.addRow(e)
    }, n.prototype.displayValues = function() {
        var e = this._charaUpdateModule,
            t = e.getPtsToAssign(),
            i = e.getSpentPts(),
            n = e.getCurrentCostStep();
        if (this._charaUpdateModule.isAdditionalPtsAssignMode() ? this._additionalPtsRemainingElt.setText(String(t.additional - i)) : this._pointsRemainingElt.setText(String(t.base - i)), this._pointsLineAdded.setValue(i), this._levelAddedElt.setText(String(e.getCharacIncreasePts())), this._finalLevelElt.setText(String(e.getInitialLevel() + e.getCharacIncreasePts())), n !== this._previousCostStep) {
            if (void 0 !== this._previousCostStep) {
                var o = this._table.getColumnHeader("l" + this._previousCostStep),
                    a = this._table.rows.getChildren()[0]["l" + this._previousCostStep];
                o && o.delClassNames("selected"), a && a.delClassNames("selected")
            }
            this._previousCostStep = n;
            var r = this._table.getColumnHeader("l" + n),
                s = this._table.rows.getChildren()[0]["l" + n];
            r && r.addClassNames("selected"), s && s.addClassNames("selected")
        }
    }
}
