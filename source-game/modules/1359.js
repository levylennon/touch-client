function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ShieldWindow",
            title: r("ui.shield.interfaceTitle"),
            positionInfo: {
                left: "c",
                top: "c",
                width: "75%",
                height: "90%",
                minWidth: 700,
                maxHeight: 530,
                mustAvoidToolbar: !0
            }
        });
        var e = window.gui.playerData.inventory,
            t = this;
        this._isTutorial = !1, this.feedingBox = new s(this), this.loadedSpells = {}, this._shield = {}, this.once("open", function() {
            this._createDom()
        }), this.on("open", function(e) {
            this._isTutorial = e.itemInstance.item.id === b.fakeShieldId, this._shieldsListButton.toggleClassName("disabled", this._isTutorial);
            var t = e.itemInstance.item.shieldModelId,
                i = e.itemInstance.item.shieldBonuses;
            this._shield = {
                shieldUID: e.itemInstance.objectUID,
                model: t,
                bonusesPerLevel: i,
                itemInstance: e.itemInstance
            }, this._isTutorial ? (this._shield.model = 1, this._shield.bonusesPerLevel = [{
                effectId: 125,
                descriptionId: "#1{~1~2 to }#2 Vitality",
                bonusRatio: 1
            }], this._updateTutorialShieldInformations(e.itemInstance), e.mode = "shieldTutorial") : (this._updateShieldInformations(e.itemInstance), e.mode = "shield"), this.feedingBox.update(e)
        }), this.on("close", function() {
            this._isTutorial || this.feedingBox.removeFilter(), this._resetPreview()
        }), this.on("closed", function() {
            this.feedingBox.unloadContent(), this._shield = {}
        }), this.on("slot-tap", function(e) {
            var t = this._isTutorial && !window.gui.shieldTutorialManager.isSpellSlotStepPassed();
            return 100 === this._shield.level || t ? this.feedingBox.storageViewer.unSelectSlot(e.data.objectUID) : void this.feedingBox.selectItem(e.itemInstance)
        }), this.on("itemQuantity", function() {
            t.feedingBox.reset()
        }), this.on("itemRemoved", function() {
            this.feedingBox.reset(), this._resetPreview()
        }), this.feedingBox.on("quantityUpdated", function(e, i) {
            var n = e * i;
            t._setXpPreview(n)
        }), this.feedingBox.on("quantityReset", function() {
            t._resetPreview()
        }), window.gui.playerData.quests.on("questUpdate", function() {
            window.gui.playerData.isShieldTutorialFortified() && t._isTutorial && (t.feedingBox.reset(), t._resetPreview(), t._updateTutorialShieldInformations(t._shield.itemInstance))
        }), e.on("itemModified", function(e) {
            e.objectUID === t._shield.shieldUID && (t.feedingBox.reset(), t._updateShieldInformations(e))
        })
    }
    i(1360);
    var o = i(56)
        .inherits,
        a = i(70),
        r = i(17)
        .getText,
        s = i(1244),
        c = i(732),
        l = i(883),
        d = i(1036),
        u = i(476),
        p = i(63),
        h = i(17)
        .processText,
        f = i(52),
        b = i(480),
        m = {
            visibilityOptions: {
                spellTooltipName: !0,
                spellTooltipDescription: !0
            }
        },
        M = 5226,
        g = 35,
        _ = [2861];
    o(n, a), e.exports = n, n.prototype._createDom = function() {
        var e = this.windowBody.createChild("div", {
                className: "ShieldBody"
            }),
            t = this,
            i = e.createChild("div", {
                className: "ShieldContent"
            }),
            n = e.createChild("div", {
                className: "FeedingContent"
            }),
            o = i.createChild("div", {
                className: "PreviewContent"
            });
        this._shieldBg = o.createChild("div", {
            className: "ShieldImg"
        }), p(this._shieldBg, {
            repeatDelay: 1,
            doubletapTimeout: 1
        }), this._shieldBg.on("tap", function() {
            t._isTutorial || f.open("ShieldSelectionWindow", t._shield.shieldUID)
        }), this._shieldsListButton = this._shieldBg.createChild("div", {
            className: "shieldsListButton"
        });
        var a = o.createChild("div", {
            className: "ShieldDescription"
        });
        this._shieldName = a.createChild("div", {
            className: "ShieldName"
        });
        var s = a.createChild("div", {
            className: "ShieldDetails"
        });
        this._spellSlot = s.appendChild(new l);
        var c = s.createChild("div", {
            className: "ShieldLvlDescription"
        });
        this._shieldLvl = c.createChild("div", {
            className: "ShieldLvl"
        }), this._shieldLvlPreview = c.createChild("div", {
            className: "ShieldLvlPreview"
        });
        var u = i.createChild("div", {
                className: ["statsContent"]
            }),
            h = u.createChild("div", {
                className: "experienceContent"
            }),
            b = h.createChild("div", {
                className: "experienceLabel"
            });
        b.setText(r("ui.common.experiment") + r("ui.common.colon")), this._xpbar = h.appendChild(new d({
            valueClassNames: ["oldXp", "gainedXp"]
        })), this._xpbar.reached100 = this._xpbar.createChild("div", {
            className: "reached100"
        }), this._xpbar.reached100.addClassNames("off");
        var m = h.createChild("div", {
            className: "xpDescription"
        });
        this._xpDetails = m.createChild("div", {
            className: "xpDetails"
        }), this._xpDetailsPreview = m.createChild("div", {
            className: "xpDetailsPreview"
        }), u.createChild("div", {
            className: "effectsLabel",
            text: r("ui.effects") + r("ui.common.colon")
        }), this._effects = u.createChild("div", {
            className: "effectsList"
        }), this.feedingBox.init(n)
    }, n.prototype._setEffectsList = function(e) {
        if (e) {
            this._effects.clearContent();
            var t = this._effects.createChild("ul", {
                className: "ShieldEffectsList"
            });
            t.effects = {};
            for (var i = window.gui.playerData.isShieldTutorialFortified(), n = this._shield.bonusesPerLevel, o = 0; o < e.length; o += 1) {
                var a = e[o],
                    r = a.effect;
                if (_.indexOf(r.id) === -1) {
                    var s = a.description;
                    if (i && n[0].effectId === a.effectId) {
                        var c = a.value + Math.floor(n[0].bonusRatio * g);
                        s = h(a.effect.descriptionId, c)
                    }
                    s && e[o].actionId !== u.ACTION_CAST_STARTING_SPELL && e[o].actionId !== u.ACTION_SHIELD_EXPERIENCE && (t.effects[r.id] = t.createChild("li"), t.effects[r.id].setText(s), t.effects[r.id].currentStatDescription = s, t.effects[r.id].isPreview = !1, r.bonusType === -1 ? t.effects[r.id].addClassNames("malus") : 1 === r.bonusType && t.effects[r.id].addClassNames("bonus"))
                }
            }
            this._effectsList = t
        }
    }, n.prototype._loadSpellData = function(e, t) {
        if (!e) return t();
        var i = this.loadedSpells;
        c.createSpells(e, function(e, n) {
            if (e) return t(e);
            n = c.sortSpells(n, "minPlayerLevel");
            for (var o = 0; o < n.length; o += 1) {
                var a = n[o];
                i[a.id] = a
            }
            t()
        })
    }, n.prototype._updateSpell = function(e) {
        this._spellSlot.addClassNames("spinner");
        var t = this;
        this._loadSpellData(e, function(i) {
            if (i) return console.error(i);
            var n = t.loadedSpells[e];
            t._spellSlot.setSpell(n, m)
        }), this._spellSlot.delClassNames("spinner")
    }, n.prototype._updateLevel = function() {
        this._shieldLvl.setText(r("ui.common.shieldRank", this._shield.level))
    }, n.prototype._calculateXP = function(e, t) {
        return 1e4 * e + t
    }, n.prototype._updateXP = function() {
        var e = window.gui.databases.ShieldModelsLevels[this._shield.model].requiredXpLevels,
            t = e[Math.min(99, this._shield.level)],
            i = e[Math.min(99, this._shield.level) - 1];
        this._xpDetails.setText(this._shield.currentXP + " / " + t), this._xpbar.setValues([(this._shield.currentXP - i) / (t - i), 0])
    }, n.prototype._setXpPreview = function(e) {
        this._resetPreview();
        for (var t = window.gui.databases.ShieldModelsLevels[this._shield.model].requiredXpLevels, i = t[Math.min(99, this._shield.level)], n = t[Math.min(99, this._shield.level) - 1], o = e + this._shield.currentXP, a = 0, r = (this._shield.currentXP - n) / (i - n), s = (o - n) / (i - n); this._shield.level < 100 && t[this._shield.level + a] <= o;) a++;
        var c = Math.min(e, t[99] - this._shield.currentXP);
        if (a) {
            this._shieldLvlPreview.setText("( + " + a + " )");
            var l = this._shield.bonusesPerLevel;
            if (l)
                for (var d, u = 0, p = 0; p < l.length; p++) {
                    d = Math.floor(l[p].bonusRatio * (a + this._shield.level)), u = Math.floor(l[p].bonusRatio * this._shield.level);
                    var f = d - u;
                    if (f > 1) {
                        var b = this._effectsList.effects[l[p].effectId];
                        if (b) {
                            var m = b.currentStatDescription;
                            b.setText(m + " ( +" + f + " )")
                        } else {
                            var M = this._effectsList.createChild("li");
                            M.isPreview = !0, M.setText("( " + h(l[p].descriptionId, f) + " )")
                        }
                    }
                }
        }
        this._xpbar.reached100.toggleClassName("off", a < 1), this._xpDetailsPreview.setText("( + " + c + " )"), this._xpbar.setValues([r, s])
    }, n.prototype._resetPreview = function() {
        this._shieldLvlPreview.clearContent(), this._xpDetailsPreview.clearContent(), this._xpbar.reached100.addClassNames("off"), this._effectsList.getChildren()
            .forEach(function(e) {
                e.isPreview ? e.destroy() : e.setText(e.currentStatDescription)
            })
    }, n.prototype._updateShieldInformations = function(e) {
        var t = this,
            i = e.effectsMap[u.ACTION_CAST_STARTING_SPELL],
            n = e.effectsMap[u.ACTION_SHIELD_EXPERIENCE];
        i && t._updateSpell(i.diceNum), n && (t._shield.currentXP = t._calculateXP(n.diceSide, n.value), t._shield.level = n.diceNum, t._updateXP(), t._updateLevel()), this._shieldBg.setStyle("backgroundImage", e.item.image), this._shieldName.setText(e.getProperty("nameId")), this._setEffectsList(e.effects)
    }, n.prototype._updateTutorialShieldInformations = function(e) {
        this._updateSpell(M);
        var t = window.gui.playerData.isShieldTutorialFortified();
        this._shield.currentXP = t ? this._calculateXP(0, 2500) : this._calculateXP(0, 0), this._shield.level = t ? 35 : 1, this._updateXP(), this._updateLevel(), this._shieldBg.setStyle("backgroundImage", e.item.image), this._shieldName.setText(e.getProperty("nameId")), this._setEffectsList(e.effects)
    }, n.prototype.setNewShield = function(e) {
        this._shield = {
            shieldUID: e.objectUID,
            model: e.item.shieldModelId,
            bonusesPerLevel: e.item.shieldBonuses
        };
        var t = {
            itemInstance: e,
            mode: "shield"
        };
        this.feedingBox.update(t), this._resetPreview(), this.feedingBox.reset(), this._setEffectsList(e.effects), this._updateShieldInformations(e)
    }, n.prototype.getShieldSpellSlot = function() {
        return this._spellSlot
    }
}
