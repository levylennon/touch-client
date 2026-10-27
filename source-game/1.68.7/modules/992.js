function(e, t, i) {
    function n() {
        p.call(this, {
            title: b("ui.common.caracteristics"),
            className: "characteristics",
            positionInfo: {
                left: 40,
                top: "c",
                width: 320,
                height: 634
            },
            helpTab: {
                part: 1,
                subPart: 1
            }
        }), d = {
            maxLifePoints: b("ui.help.life"),
            actionPoints: b("ui.help.AP"),
            movementPoints: b("ui.help.MP"),
            initiative: b("ui.help.initiative"),
            prospecting: b("ui.help.prospecting"),
            range: b("ui.help.range"),
            summonableCreaturesBoost: b("ui.help.summonableCreatures"),
            vitality: b("ui.help.vitality"),
            wisdom: b("ui.help.wisdom"),
            strength: b("ui.help.strength"),
            intelligence: b("ui.help.intelligence"),
            chance: b("ui.help.chance"),
            agility: b("ui.help.agility"),
            level: b("ui.help.level"),
            red: b("ui.help.energy"),
            blue: b("ui.help.xp"),
            characteristics: b("ui.help.boostPoints")
        }, this._initialized = !1, this._createDom(), this._setupListeners()
    }

    function o(e, t, i, n) {
        n = n || {};
        var o = this;
        this.current = 0, this.max = 0;
        var a = e.createChild("div", {
                className: "barWrapper"
            }),
            r = a.createChild("div", {
                className: "label",
                text: t
            });
        this.progressBar = a.appendChild(new f({
            className: i
        })), g.addTooltip(r, d[i], {
            longTapExplanation: !0
        }), g.addTooltip(this.progressBar, function() {
            var e = "",
                t = window.gui.playerData.isLevelMax();
            return t && n.isXpProgressBar ? e = "+" + w.intToString(o.max) : (e = w.intToString(o.current) + " / " + w.intToString(o.max), n.isXpProgressBar && (e += "\n" + b("ui.common.nextLevelIn", w.intToString(o.max - o.current)))), new _("div", {
                text: e
            })
        }, {
            longTapExplanation: !0
        })
    }

    function a(e, t, i, n) {
        var o = e.createChild("tr"),
            a = o.createChild("td", {
                className: ["label", n],
                text: t
            });
        this.statLine = o.createChild("td", {
            className: "value"
        }), g.addTooltip(a, d[i], {
            longTapExplanation: !0
        })
    }

    function r(e, t, i, n) {
        this.key = i;
        var o = e.createChild("tr");
        o.createChild("td", {
            className: ["label", n],
            text: t
        }), this.baseLine = o.createChild("td", {
            className: "base"
        }), this.bonusLine = o.createChild("td", {
            className: "bonus"
        }), this.totalLine = o.createChild("td", {
            className: "total"
        })
    }

    function s(e, t, i, n) {
        var o = this;
        this.key = i;
        var a = e.createChild("tr");
        this.labelDom = a.createChild("td", {
            className: ["label", n],
            text: t
        }), this.valueDom = a.createChild("td", {
            className: "value"
        }), this.refundedValueDom = a.createChild("td", {
            className: ["value", "arrowRight"]
        }), this.refundedValueText = this.refundedValueDom.createChild("div", {
            className: "refundedValue"
        });
        var r = a.createChild("td", {
            className: "upgrade"
        });
        this.upgradeButton = r.createChild("div", {
            className: "upgradeButton"
        }), this.resetCheckbox = r.appendChild(new v), g.addTooltip(this.labelDom, d[i], {
            longTapExplanation: !0
        }), g.addTooltip(this.valueDom, function() {
            var e = new _("div", {
                className: "toolTipLabelBlock"
            });
            if (o.stats) {
                var t = o.stats[o.key],
                    i = b("ui.common.base") + "+" + b("tablet.common.additional");
                i += b("ui.common.colon"), i += t.getBaseWithoutAdditionalPts() + "+" + t.getAdditionalPts();
                var n = b("ui.common.equipement") + b("ui.common.colon");
                n += c(t.getEquipmentPts());
                var a = b("ui.common.gifts") + "+" + b("ui.common.boost") + b("ui.common.colon");
                a += c(t.getBonusPts()), e.createChild("div", {
                    className: "toolTipLabel",
                    text: i
                }), e.createChild("div", {
                    className: "toolTipLabel",
                    text: n
                }), e.createChild("div", {
                    className: "toolTipLabel",
                    text: a
                })
            }
            return e
        }, {
            longTapExplanation: !0
        }), m(this.upgradeButton), this.upgradeButton.on("tap", function() {
            if (A("PLUS_BUTTON"), o.stats) {
                var e = "statsPointsFor" + i[0].toUpperCase() + i.substring(1),
                    n = window.gui.playerData.characterBreed[e];
                M.open("characUpdate", {
                    additionalPtsRemaining: o.stats.getRemainingAdditionalPts(),
                    characteristicName: i,
                    costSteps: n,
                    initialLevel: o.stats[i].getBaseWithoutAdditionalPts(),
                    initialAdditionalPts: o.stats[i].getAdditionalPts(),
                    label: t,
                    pointsRemaining: o.stats.statsPoints
                })
            }
        }), this.resetCheckbox.on("change", function(e) {
            o.refundedValueText.toggleClassName("uncheckedStat", !e)
        }), this.displayRefundedPts(!1)
    }

    function c(e) {
        return e || "-"
    }

    function l(e, t) {
        for (var i = "statsPointsFor" + e[0].toUpperCase() + e.substring(1), n = window.gui.playerData.characterBreed[i], o = 0, a = t, r = n.length - 1; r >= 0; r--) {
            var s = n[r][0],
                c = n[r][1],
                l = a - s;
            l > 0 && (o += l * c, a -= l)
        }
        return o
    }
    i(993);
    var d, u = i(56)
        .inherits,
        p = i(70),
        h = i(962),
        f = i(490),
        b = i(17)
        .getText,
        m = i(63),
        M = i(52),
        g = i(88),
        _ = i(72),
        A = i(91)
        .playUiSound,
        O = i(86),
        v = i(594),
        y = i(509),
        z = i(129),
        w = i(16),
        T = 10563,
        C = {
            vitality: 11,
            wisdom: 12,
            strength: 10,
            intelligence: 15,
            chance: 13,
            agility: 14
        };
    u(n, p), e.exports = n,
    n.prototype._setupListeners = function() {
        var e = this,
            t = window.gui.playerData,
            i = t.characters,
            n = window.gui.scenarioManager;
        this.on("open", function() {
            e.alignWithEquipment(), e.checkRights()
        }),
        i.on("characteristicsUpdated", function(i) {
            e.checkRights(),
            t.characterBreed && e.updateStats(i)
        }),
        t.alignment.on("alignmentChanged", function() {
            var i = t.characterBaseInformations,
                n = t.alignment;
            n.getAlignmentImageUrl(function(t) {
                e.logo.setStyle("backgroundImage", t)
            }),
            e.playerName.setText(i.name),
            t.characterBreed && e.infosSup.setText(t.characterBreed.shortNameId + ", " + b("ui.common.level") + " " + i.level),
            g.addTooltip(e.infosSup, d.level, {
                longTapExplanation: !0
            })
        }),
        window.gui.scenarioManager.on("stepChanged", function() {
            var t = n.isBehaviourEnabled(z.DISABLE_CHARACT_MENU),
                i = n.isBehaviourEnabled(z.DISABLE_ADD_CHARACT),
                o = n.isBehaviourEnabled(z.ENABLE_UPGRADE_CHARACT_HIGHLIGHT);
            e.toggleClassName("disabledBehaviour", t),
            e.toggleClassName("disabledAddStats", i),
            e.toggleClassName("highlightedButtons", o)
        })
    },
    n.prototype._createSummaryPanel = function() {
        function e() {
            A.show(),
            f.show(),
            z.hide(),
            v.hide(),
            n.capitalValueDom.show(),
            n.refundedCapitalValueDom.hide(),
            m.delClassNames("arrowDown"),
            n.summary.forEach(function(e) {
                e.displayRefundedPts(!1)
            })
        }

        function t() {
            A.hide(),
            f.hide(),
            z.show(),
            v.show(),
            n.capitalValueDom.hide(),
            n.refundedCapitalValueDom.show(),
            m.setClassNames("arrowDown"),
            n.summary.forEach(function(e) {
                e.displayRefundedPts(!0)
            })
        }

        function i() {
            if (window.gui.playerData.isFighting) return window.gui.openSimplePopup(b("ui.error.cantDoInFight")), !1;
            var e = window.gui.playerData.inventory.getGenericItem(T),
                t = window.gui.playerData.isSubscriberAtMinLevel(y.ELITE);
            return !!t || (e ? (window.gui.openSimplePopup(b("ui.stats.availableMagicalOrb"), b("ui.popup.information")), !1) : (M.open("BonusPackElitePopup"), !1))
        }
        var n = this,
            r = this.panels.createChild("div", { className: "panel" });
        this.energy = new o(r, b("ui.common.energy"), "red");
        var c = { isXpProgressBar: !0 };
        this.experience = new o(r, b("ui.common.experiment"), "blue", c);
        var l = r.createChild("table", { className: "summaryTable" });
        this.lifePoints = new a(l, b("ui.stats.lifePoints"), "maxLifePoints", "iconLifePoints"),
        this.actionPoints = new a(l, b("ui.stats.shortAP"), "actionPoints", "iconActionPoints"),
        this.movementPoints = new a(l, b("ui.stats.shortMP"), "movementPoints", "iconMovementPoints"),
        this.initiative = new a(l, b("ui.stats.initiative"), "initiative", "iconInitiative"),
        this.prospecting = new a(l, b("ui.stats.prospecting"), "prospecting", "iconProspecting"),
        this.range = new a(l, b("ui.stats.range"), "range", "iconRange"),
        this.summonableCreatures = new a(l, b("ui.stats.summonableCreatures"), "summonableCreaturesBoost", "iconSummon");
        var u = r.createChild("table", { className: "characTable" }),
            p = u.createChild("tr");
        p.createChild("td", {
            className: "tableTitle",
            text: b("ui.common.caracteristics"),
            attr: { colspan: 4 }
        }), 
        this.summary = [], 
        this.summary.push(new s(u, b("ui.stats.vitality"), "vitality", "iconVitality")),
        this.summary.push(new s(u, b("ui.stats.wisdom"), "wisdom", "iconWisdom")),
        this.summary.push(new s(u, b("ui.stats.strength"), "strength", "iconStrength")),
        this.summary.push(new s(u, b("ui.stats.intelligence"), "intelligence", "iconIntelligence")),
        this.summary.push(new s(u, b("ui.stats.chance"), "chance", "iconChance")),
        this.summary.push(new s(u, b("ui.stats.agility"), "agility", "iconAgility")),
        this.pointCapital = r.createChild("div", { className: "pointCapital" });
        var h = this.pointCapital.createChild("div", { className: "buttonsList" }),
            f = this.pointCapital.createChild("div", { className: "pointCapitalLabel", text: b("ui.common.pointsWithCap") }),
            m = this.pointCapital.createChild("div");
        this.capitalValueDom = m.createChild("div", { className: "pointCapitalValue" }),
        this.refundedCapitalValueDom = m.createChild("div", { className: "pointCapitalValue" });
        var A = h.appendChild(new O({ className: ["greenButton", "resetButton"], scaleOnPress: !0 }));
        A.createChild("div", { className: "icon", text: b("ui.common.reset") });
        var v = h.appendChild(new O({ className: ["secondaryButton", "cancelButton"], scaleOnPress: !0, text: b("ui.common.cancel") })),
            z = h.appendChild(new O({ className: ["greenButton", "confirmButton"], scaleOnPress: !0, text: b("ui.common.validation") }));
        e(),
        A.on("tap", function() {
            i() && t()
        }),
        v.on("tap", function() {
            e()
        }),
        z.on("tap", function() {
            return i() ? void window.gui.openConfirmPopup({
                title: b("ui.common.confirm"),
                message: b("ui.stats.resetAllStats"),
                cb: function(t) {
                    if (t) {
                        e();
                        var i = [];
                        n.summary.forEach(function(e) {
                            e.resetCheckbox.isActivate() && i.push(C[e.key])
                        }), 
                        window.dofus.sendMessage("StatsResetRequestMessage", {statIds: i })
                    }
                }
            }) : void e()
        }),
        n.summary.forEach(function(e) {
            e.resetCheckbox.on("change", function() {
                n.refreshRefundedPts()
            })
        }),
        g.addTooltip(m, function() {
            var e = "";
            if (n.stats) {
                e = b("ui.stats.statPoints") + " " + String(n.stats.statsPoints);
                var t = n.stats.getRemainingAdditionalPts();
                t > 0 && (e += " + " + String(t)), e += "\n\n" + d.characteristics
            }
            return new _("div", {
                text: e
            })
        }, {
            longTapExplanation: !0
        }), this.additionalPtsLineHelp = r.createChild("div");
        var w = this.additionalPtsLineHelp.createChild("div", {
            className: ["haveAdditionalPts", "additionalPtsLineHelp"]
        });
        w.setHtml(b("tablet.characteristics.help")), this.tabs.addTab(b("ui.stats.summary"), r)
    },
    n.prototype._createAdvancedPanel = function() {
        var e = this.panels.createChild("div", {
                className: "panel"
            }),
            t = e.createChild("table", {
                className: "advancedTable"
            }),
            i = t.createChild("tr");
        i.createChild("td", {
            className: "label",
            text: b("ui.common.caracteristics")
        }), i.createChild("td", {
            className: "base",
            text: b("ui.common.base")
        }), i.createChild("td", {
            className: "bonus",
            text: b("ui.fightend.bonus")
        }), i.createChild("td", {
            className: "total",
            text: b("ui.common.total")
        }), this.advanced = [];
        var n = t.createChild("tr");
        n.createChild("td", {
            className: "tableTitle",
            text: b("ui.charaSheet.primaryStats"),
            attr: {
                colspan: 4
            }
        }),
        this.advanced.push(new r(t, b("ui.stats.vitality"), "vitality", "iconVitality")),
        this.advanced.push(new r(t, b("ui.stats.wisdom"), "wisdom", "iconWisdom")),
        this.advanced.push(new r(t, b("ui.stats.strength"), "strength", "iconStrength")),
        this.advanced.push(new r(t, b("ui.stats.intelligence"), "intelligence", "iconIntelligence")),
        this.advanced.push(new r(t, b("ui.stats.chance"), "chance", "iconChance")),
        this.advanced.push(new r(t, b("ui.stats.agility"), "agility", "iconAgility")),
        this.advanced.push(new r(t, b("ui.stats.shortAP"), "actionPoints", "iconActionPoints")),
        this.advanced.push(new r(t, b("ui.stats.shortMP"), "movementPoints", "iconMovementPoints")),
        this.advanced.push(new r(t, b("ui.stats.initiative"), "initiative", "iconInitiative")),
        this.advanced.push(new r(t, b("ui.stats.prospecting"), "prospecting", "iconProspecting")),
        this.advanced.push(new r(t, b("ui.stats.range"), "range", "iconRange")),
        this.advanced.push(new r(t, b("ui.stats.summonableCreatures"), "summonableCreaturesBoost", "iconSummon"));
        var o = t.createChild("tr");
        o.createChild("td", {
            className: "tableTitle",
            text: b("ui.charaSheet.secondaryStats"),
            attr: {
                colspan: 4
            }
        }), this.advanced.push(new r(t, b("ui.stats.PAAttack"), "PAAttack", "iconAttackAP")), this.advanced.push(new r(t, b("ui.stats.dodgeAP"), "dodgePALostProbability", "iconDodgeAP")), this.advanced.push(new r(t, b("ui.stats.PMAttack"), "PMAttack", "iconAttackMP")), this.advanced.push(new r(t, b("ui.stats.dodgeMP"), "dodgePMLostProbability", "iconDodgeMP")), this.advanced.push(new r(t, b("ui.stats.criticalHit"), "criticalHit", "iconCriticalHit")), this.advanced.push(new r(t, b("ui.stats.healBonus"), "healBonus", "iconHeal")), this.advanced.push(new r(t, b("ui.stats.takleBlock"), "tackleBlock", "iconTackle")), this.advanced.push(new r(t, b("ui.stats.takleEvade"), "tackleEvade", "iconEvade"));
        var a = t.createChild("tr");
        a.createChild("td", {
            className: "tableTitle",
            text: b("ui.stats.damagesBonus"),
            attr: {
                colspan: 4
            }
        }), this.advanced.push(new r(t, b("ui.stats.damagesBonus"), "allDamagesBonus", "iconDamage")), this.advanced.push(new r(t, b("ui.stats.damagesBonusPercent"), "damagesBonusPercent", "iconDamagePercent")), this.advanced.push(new r(t, b("ui.stats.criticalDamageBonus"), "criticalDamageBonus", "iconCriticalDamage")), this.advanced.push(new r(t, b("ui.stats.neutralDamageBonus"), "neutralDamageBonus", "iconYinyang")), this.advanced.push(new r(t, b("ui.stats.earthDamageBonus"), "earthDamageBonus", "iconStrength")), this.advanced.push(new r(t, b("ui.stats.fireDamageBonus"), "fireDamageBonus", "iconIntelligence")), this.advanced.push(new r(t, b("ui.stats.waterDamageBonus"), "waterDamageBonus", "iconChance")), this.advanced.push(new r(t, b("ui.stats.airDamageBonus"), "airDamageBonus", "iconAgility")), this.advanced.push(new r(t, b("ui.stats.pushDamageBonus"), "pushDamageBonus", "iconPushDamage"));
        var s = t.createChild("tr");
        s.createChild("td", {
            className: "tableTitle",
            text: b("ui.common.resistances"),
            attr: {
                colspan: 4
            }
        }), this.advanced.push(new r(t, b("ui.stats.neutralReduction"), "neutralElementReduction", "iconYinyang")), this.advanced.push(new r(t, b("ui.stats.neutralReductionPercent"), "neutralElementResistPercent", "iconYinyang")), this.advanced.push(new r(t, b("ui.stats.earthReduction"), "earthElementReduction", "iconStrength")), this.advanced.push(new r(t, b("ui.stats.earthReductionPercent"), "earthElementResistPercent", "iconStrength")), this.advanced.push(new r(t, b("ui.stats.fireReduction"), "fireElementReduction", "iconIntelligence")), this.advanced.push(new r(t, b("ui.stats.fireReductionPercent"), "fireElementResistPercent", "iconIntelligence")), this.advanced.push(new r(t, b("ui.stats.waterReduction"), "waterElementReduction", "iconChance")), this.advanced.push(new r(t, b("ui.stats.waterReductionPercent"), "waterElementResistPercent", "iconChance")), this.advanced.push(new r(t, b("ui.stats.airReduction"), "airElementReduction", "iconAgility")), this.advanced.push(new r(t, b("ui.stats.airReductionPercent"), "airElementResistPercent", "iconAgility")), this.advanced.push(new r(t, b("ui.stats.criticalDamageReduction"), "criticalDamageReduction", "iconCriticalReduction")), this.advanced.push(new r(t, b("ui.stats.pushDamageReduction"), "pushDamageReduction", "iconPushDamageReduction")), this.tabs.addTab(b("ui.stats.advanced"), e)
    }, n.prototype._createDom = function() {
        this._initialized || (this.infos = this.windowBody.createChild("div", {
            className: "infos"
        }), this.logoWrapper = this.infos.createChild("div", {
            className: "logoWrapper"
        }), this.logo = this.logoWrapper.appendChild(new O({
            className: "logo"
        }, function() {
            M.open("grimoire", {
                tabId: "alignment"
            })
        })), this.playerName = this.infos.createChild("div", {
            className: "playerName"
        }), this.infosSup = this.infos.createChild("div", {
            className: "infosSup"
        }), this.statsDom = this.windowBody.createChild("div", {
            className: "stats"
        }), this.tabs = new h, this.statsDom.appendChild(this.tabs), this.panels = this.statsDom.createChild("div", {
            className: "panels"
        }), this._createSummaryPanel(), this._createAdvancedPanel(), this.tabs.openTab(0), this._initialized = !0)
    }, n.prototype.updateStats = function(e) {
        if (this._initialized) {
            this.stats = e, this.energy.update(e.energyPoints, e.maxEnergyPoints);
            var t = window.gui.playerData.isLevelMax();
            t ? this.experience.full(e.experience - e.experienceLevelFloor) : this.experience.update(e.experience - e.experienceLevelFloor, e.experienceNextLevelFloor - e.experienceLevelFloor), this.lifePoints.update(e.lifePoints + " / " + e.maxLifePoints), this.actionPoints.update(e.actionPoints.getTotalStat()), this.movementPoints.update(e.movementPoints.getTotalStat()), this.summary.forEach(function(t) {
                t.update(e)
            });
            var i = e.initiative.getTotalStat(),
                n = Math.floor(i * e.lifePoints / e.maxLifePoints);
            this.initiative.update(n + " / " + i), this.prospecting.update(e.prospecting.getTotalStat()), this.range.update(e.range.getTotalStat()), this.summonableCreatures.update(e.summonableCreaturesBoost.getTotalStat());
            var o = e.getRemainingAdditionalPts();
            this.capitalValueDom.setText(e.statsPoints + o),
            this.pointCapital.toggleClassName("haveAdditionalPts", o > 0),
            this.additionalPtsLineHelp.toggleDisplay(o > 0),
            this.refreshRefundedPts(),
            this.advanced.forEach(function(t) {
                t.update(e)
            }), this.checkRights()
        }
    }, 
    n.prototype.refreshRefundedPts = function() {
        if (this._initialized) {
            var e = 0;
            this.summary.forEach(function(t) {
                t.resetCheckbox.isActivate() && (e += t.getRefundedPts())
            }),
            this.refundedCapitalValueDom.setText(e)
        }
    },
    n.prototype.alignWithEquipment = function() {
        var e = M.getWindow("equipment");
        e.openState && (this.setStyles({
            top: e.getStyle("top"),
            height: e.getStyle("height")
        }), M.arrangeOpeningWindow(this.id, {
            leftOf: e.id
        }))
    },
    n.prototype.checkRights = function() {
        var e = this,
            t = window.gui.playerData,
            i = t.characterBaseInformations;
        this.statsDom.toggleClassName("isMutant", t.isMutant()), t.isMutant() ? t.getMutantData(function(n, o) {
            return n ? (console.error(n), this.infosSup.setText(t.characterBreed.shortNameId + ", " + b("ui.common.level") + " " + i.level)) : void e.infosSup.setText(o.name + ", " + b("ui.common.level") + " " + o.level)
        }) : t.characterBreed && this.infosSup.setText(t.characterBreed.shortNameId + ", " + b("ui.common.level") + " " + i.level)
    },
    o.prototype.update = function(e, t) {
        this.current = e,
        this.max = t,
        this.progressBar.setValue(e / t),
        this.progressBar.hasClassName(["golden"]) && this.progressBar.replaceClassNames(["golden"], ["blue"])
    },
    o.prototype.full = function(e) {
        0 === e && (e = 1),
        this.current = e,
        this.max = e,
        this.progressBar.setValue(e),
        this.progressBar.replaceClassNames(["blue"], ["golden"])
    },
    a.prototype.update = function(e) {
        this.statLine.setText(c(e))
    },
    r.prototype.update = function(e) {
        var t = e[this.key];
        this.baseLine.setText(c(t.getBasePts())),
        this.bonusLine.setText(c(t.getBonusPts() + t.getEquipmentPts())),
        this.totalLine.setText(c(t.getTotalStat()))
    },
    s.prototype.update = function(e) {
        this.stats = e;
        var t = e[this.key],
            i = this.getRefundedPts();
        this.valueDom.setText(c(t.getTotalStat())), this.refundedValueText.setText(c(i))
    }, s.prototype.getRefundedPts = function() {
        return this.stats && this.stats[this.key] ? l(this.key, this.stats[this.key].getBaseWithoutAdditionalPts()) : 0
    }, s.prototype.displayRefundedPts = function(e) {
        e ? (this.refundedValueDom.show(), this.upgradeButton.hide(), this.resetCheckbox.toggleDisplay(this.getRefundedPts() > 0), this.labelDom.rootElement.setAttribute("colspan", 1)) : (this.refundedValueDom.hide(), this.upgradeButton.show(), this.resetCheckbox.hide(), this.labelDom.rootElement.setAttribute("colspan", 2)), this.resetCheckbox.isVisible() && this.resetCheckbox.activate()
    }
}
