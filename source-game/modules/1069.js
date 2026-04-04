function(e, t, i) {
    function n(e, t) {
        if (e.isItem) return -1;
        if (t.isItem) return 1;
        var i = e.getProperty("minPlayerLevel", 1),
            n = t.getProperty("minPlayerLevel", 1);
        return i < n ? -1 : i > n ? 1 : e.id > t.id ? 1 : e.id < t.id ? -1 : 0
    }

    function o(e, t) {
        return e.isItem ? -1 : t.isItem ? 1 : e.level > t.level ? 1 : e.level < t.level ? -1 : e.id > t.id ? 1 : e.id < t.id ? -1 : 0
    }

    function a(e, t) {
        return e.id === C || (void 0 === t && (t = e.level), e.getProperty("minPlayerLevel", t) <= window.gui.playerData.characterBaseInformations.level)
    }

    function r() {
        f.call(this, "div", {
            className: "SpellsWindow",
            name: "spells"
        }), this._logic = new T(w), this._spellChangeTemp = {}, this.playerHasDisconnected = !1, this.mustRefreshAll = !0, this.remainingCharacterPts = 0, this.remainingAccountPts = 0, this.once("open", function() {
            this._createDom(), this._setupEvents()
        });
        var e = null,
            t = this,
            i = window.gui;
        this.on("open", function(n) {
            e = n && n.spellId ? n.spellId : t.lastSpellDisplayed ? t.lastSpellDisplayed : null, this.mustRefreshAll && this._refreshAllContent(), this._spellChangeTemp = {}, this.updateRemainingPoints(), i.shortcutBar.openPanel("spell"), this.checkRights()
        }), this.on("focus", function() {
            i.shortcutBar.openPanel("spell")
        }), this.on("opened", function() {
            if (!e) {
                var t = this.table.getFirstDisplayedRow();
                if (!t) return void console.warn(new Error("Table is not loaded"));
                e = t.rowId
            }
            var i = window.gui.playerData.characters.mainCharacter.spellData.spells[e];
            return i ? (this.table.selectRow(i.id), void this.table.scrollToSelectedRow()) : void console.warn(new Error("spell is not loaded"))
        }), window.gui.playerData.characters.on("characteristicsUpdated", function() {
            t.checkRights()
        })
    }
    i(1070);
    var s = i(88)
        .addTooltip,
        c = i(56)
        .inherits,
        l = i(63),
        d = i(17)
        .getText,
        u = i(86),
        p = i(765),
        h = i(945),
        f = i(72),
        b = i(885),
        m = i(418),
        M = i(13),
        g = i(12),
        _ = i(91)
        .playUiSound,
        A = i(746)
        .SpellData.SPELL_STATUS,
        O = i(453),
        v = i(52),
        y = i(509),
        z = i(129),
        w = i(34)
        .logger,
        T = i(1071),
        C = M.WEAPON_SPELL_ID;
    c(r, f), e.exports = r, r.prototype._createDom = function() {
        function e(e) {
            var t = new f("div", {
                    className: "icon"
                }),
                i = e.getIconUrl();
            return i && t.setStyle("backgroundImage", i), t
        }

        function t(e) {
            var t = new f("div", {
                className: "levelCell"
            });
            t.minusBtn = t.appendChild(new u({
                className: "minusSignButton",
                scaleOnPress: !0
            }));
            var i = e.isItem || e.id === C ? "-" : e.level;
            return t.levelTextDom = t.createChild("div", {
                className: "level",
                text: i
            }), t.plusBtn = t.appendChild(new u({
                className: "addSignButton",
                scaleOnPress: !0
            })), t.spell = e, t.levelWanted = e.level, window.gui.playerData.isIncarnation() ? (s(t, d("ui.spell.incarnationSpellWarning")), t.minusBtn.disable(), t.plusBtn.disable()) : (l(t.minusBtn), t.minusBtn.on("tapstart", function() {
                a.table.delClassNames("scaleOnPress")
            }), t.minusBtn.on("tapend", function() {
                a.table.addClassNames("scaleOnPress")
            }), t.minusBtn.on("tap", function() {
                _("PLUS_BUTTON");
                var i = window.gui.playerData.isSubscriberAtMinLevel(y.ELITE);
                return !i && t.levelWanted <= t.spell.level ? void v.open("BonusPackElitePopup") : (t.levelWanted = Math.max(t.levelWanted - 1, 1), a._refreshSpellRow(e.id, {
                    displaySpell: !0
                }), a._spellChangeTemp[e.id] = t.levelWanted, void a.updateRemainingPoints())
            }), l(t.plusBtn), t.plusBtn.on("tapstart", function() {
                a.table.delClassNames("scaleOnPress")
            }), t.plusBtn.on("tapend", function() {
                a.table.addClassNames("scaleOnPress")
            }), t.plusBtn.on("tap", function() {
                _("PLUS_BUTTON"), t.levelWanted = Math.min(t.levelWanted + 1, e.getMaxLevel()), a._refreshSpellRow(e.id, {
                    displaySpell: !0
                }), a._spellChangeTemp[e.id] = t.levelWanted, a.updateRemainingPoints()
            })), t
        }

        function i() {
            var e = new f("div", {
                className: "pointsCell"
            });
            return e.valueDom = e.createChild("div", {
                className: "points",
                text: "-"
            }), e.cost = 0, e
        }
        var a = this,
            r = this.createChild("div", {
                className: "col1"
            });
        this.col2 = this.createChild("div", {
            className: "col2"
        }), this.selector = r.appendChild(new h), this.table = r.appendChild(new p([{
            id: "icon",
            format: e,
            sort: n
        }, {
            id: "name",
            header: d("ui.common.spellName"),
            getContent: function(e) {
                return e.getName()
            },
            sort: !0
        }, {
            id: "rank",
            header: d("ui.common.level"),
            format: t,
            sort: o
        }, {
            id: "pts",
            header: d("ui.common.pointsWithCap"),
            format: i
        }], "id", {
            scaleOnPress: !0
        })), this.table.on("rowTap", function(e, t) {
            a.displaySpell({
                spell: t,
                imageUri: e.icon.content.getStyle("backgroundImage")
            }), _("GEN_BUTTON")
        }), this.noFilter = !0, this.filter = null, this.table.addFilter(function(e) {
            return a.noFilter || e.getProperty("typeId") === a.filter
        }), this.selector.on("change", function(e) {
            a.noFilter = !1, "-" === e ? a.noFilter = !0 : a.filter = parseInt(e, 10), a.table.filter();
            var t = a.table.getFirstDisplayedRow();
            if (!t) return void console.warn(new Error("Table is not loaded"));
            var i = window.gui.playerData.characters.mainCharacter.spellData.spells[t.rowId];
            return i ? void a.table.selectRow(i.id) : void console.warn(new Error("spell is not loaded"))
        });
        var c = r.createChild("div", {
                className: "pointsBox"
            }),
            b = c.createChild("div", {
                className: "buttonsList"
            });
        this.cancelButton = b.appendChild(new u({
            className: ["secondaryButton", "cancelButton"],
            scaleOnPress: !0,
            text: d("ui.common.cancel")
        })), this.confirmButton = b.appendChild(new u({
            className: ["greenButton", "confirmButton"],
            scaleOnPress: !0,
            text: d("ui.common.validation")
        })), c.createChild("div", {
            text: d("ui.grimoire.spellCapital"),
            className: "label"
        });
        var m = c.createChild("div", {
            className: "remainingPointsContainer"
        });
        this.remainingPointsBox = m.createChild("div", {
            className: "remainingPoints"
        }), s(this.remainingPointsBox, function() {
            var e = new f("div", {}),
                t = e.createChild("div", {
                    className: "characterPts"
                });
            t.setText(d("ui.grimoire.spellCharacterCapital", a.remainingCharacterPts));
            var i = e.createChild("div", {
                className: "accountPts"
            });
            return i.setText(d("ui.grimoire.spellServerCapital", a.remainingAccountPts)), e
        }), this.cancelButton.on("tap", function() {
            a._spellChangeTemp = {}, a._cancelAllUpgrades()
        }), this.confirmButton.on("tap", function() {
            return window.gui.playerData.isFighting ? void window.gui.openSimplePopup(d("ui.error.cantDoInFight")) : (a._spellChangeTemp = {}, void window.gui.openConfirmPopup({
                title: d("ui.common.confirm"),
                message: d("ui.common.confirmModification"),
                cb: function(e) {
                    e && a.upgradeSpells()
                }
            }))
        })
    }, r.prototype._setupEvents = function() {
        var e = this,
            t = window.gui;
        t.on("SpellChangeFailureMessage", function() {
            window.gui.openPopup({
                title: d("ui.common.error"),
                message: d("ui.grimoire.popup.upgradeSpellFailMessage")
            })
        }), t.on("CharacterLevelUpMessage", function() {
            e._askForRefresh()
        }), t.on("disconnect", function() {
            e.mustRefreshAll = !0, e.playerHasDisconnected = !0
        }), t.playerData.characters.on("weaponChanged", function() {
            e.updateWeaponSpell()
        });
        var i = t.playerData.characters;
        i.on("spellUpgrade", function(t, i) {
            return e.table.getRow(t) ? void e._updateDisplayedSpellLevel(t, i) : console.error(new Error("spell " + t + " does not exist in spell window"))
        }), i.on("newSpellLearned", function(t) {
            if (!e.table.getRow(t)) {
                var i = window.gui.playerData.characters.mainCharacter.spellData.spells[t];
                if (!i) return console.error(new Error("spell " + t + " is not loaded"));
                var n = {};
                return n[i.id] = i, e.table.addMap(n), e.spellMap[i.id] = i, i.getIconUrl() ? (e.refreshAllSpellState(), void e._refreshAllSpellRows()) : void g.preloadImage(i.getIconUri(), function(t) {
                    i.spell.image = t;
                    var n = e.table.getCell(i.id, "icon");
                    n.setStyle("backgroundImage", t), e.currentSpellId === i.id && e.displaySpell({
                        spell: i,
                        imageUri: t
                    }), e.refreshAllSpellState(), e._refreshAllSpellRows()
                })
            }
        }), t.playerData.characters.on("specificCharacteristicsUpdated", function(t) {
            "accountSpellsPoints" !== t && "spellsPoints" !== t || (e._refreshAllSpellRows(), e.updateRemainingPoints())
        }), i.on("spellList", function() {
            e._askForRefresh()
        }), i.on("switchControlledCharacter", function() {
            m.cancelDragFromSource("spellsWindow");
            var t = window.gui.playerData.characters.controlledCharacterId;
            e.controlledCharacterId !== t && e._askForRefresh()
        }), t.playerData.on("subscriptionChanged", function() {
            e._refreshAllSpellRows()
        })
    }, r.prototype._refreshAllContent = function() {
        this.mustRefreshAll = !1;
        var e = window.gui.playerData.characters,
            t = e.getControlledCharacter();
        if (this.controlledCharacterId = e.controlledCharacterId, this._onMainCharacter = e.isMainCharacterControlled(), this.table.setSorter(n), this._loadAllSpells(t.spellData.getSpells(A.VISIBLE)), this.setupSelectorOptions(), !this.lastSpellDisplayed || this.playerHasDisconnected) {
            var i = this.table.getFirstDisplayedRow();
            if (!i) return void console.warn(new Error("Table is not loaded"));
            this.lastSpellDisplayed = i.rowId
        }
        var o = window.gui.playerData.characters.mainCharacter.spellData.spells[this.lastSpellDisplayed];
        return o ? (this.table.selectRow(o.id), void this.table.scrollToSelectedRow()) : void console.warn(new Error("spell is not loaded"))
    }, r.prototype._askForRefresh = function() {
        this.isVisible() ? this._refreshAllContent() : this.mustRefreshAll = !0
    }, r.prototype.updateRemainingPoints = function() {
        var e = this,
            t = window.gui.playerData.characters.getControlledCharacter() || {},
            i = window.gui.playerData.characterBaseInformations.level,
            n = t.characteristics || {};
        this.costPoints = 0;
        var o = !1;
        for (var a in this.spellMap)
            if (this.table.hasRow(a)) {
                var r = this.table.getCell(a, "pts");
                this.costPoints += r.cost, 0 !== r.cost && (o = !0)
            } var s = t.spellData.getUsedSpellPoints({
                wanted: this._spellChangeTemp
            }),
            c = this._logic.calculateAttribution({
                cost: -this.costPoints,
                usedSpellPoints: s,
                level: i,
                characterPoints: n.spellsPoints,
                accountPoints: n.accountSpellsPoints
            }),
            l = c.characterPoints + c.accountPoints;
        this.remainingCharacterPts = c.characterPoints, this.remainingAccountPts = c.accountPoints, this.remainingPointsBox.setText(l), this.remainingPointsBox.toggleClassName("notEnoughPoints", l < 0), this.cancelButton.toggleDisplay(o), this.confirmButton.toggleDisplay(o), this.confirmButton.enable(), l < 0 && this.confirmButton.disable(), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.SHOW_CONFIRM_BUTTON, {
            canConfirm: e.confirmButton.isVisible()
        })
    }, r.prototype.setupSelectorOptions = function() {
        var e = this;
        this.selector.clearContent(), this.selector.addOption(d("ui.common.allTypes"), "-"), this.selector.setValue("-");
        var t = {},
            i = window.gui.playerData.characters.getControlledCharacter(),
            n = i.spellData.getSpells(A.VISIBLE);
        for (var o in n) {
            var a = n[o],
                r = a.getProperty("typeId");
            t[r] || (e.selector.addOption(a.getHumanReadableSpellType(), r), t[r] = !0)
        }
        e.noFilter = !0, e.table.filter()
    }, r.prototype.updateWeaponSpell = function() {
        var e = this,
            t = window.gui.playerData.characters.mainCharacter.spellData.spells[C];
        g.preloadImage(t.getIconUri(), function(i) {
            e.table.updateRow(t);
            var n = e.table.getCell(t.id, "icon");
            n.setStyle("backgroundImage", i), e.refreshSpellState(t.id), e.currentSpellId === t.id && e.displaySpell({
                spell: t,
                imageUri: i
            }), e._refreshSpellRow(C)
        })
    }, r.prototype._loadAllSpells = function(e) {
        this.spellMap = e, this.table.clearContent(), this.table.addMap(e);
        var t = [],
            i = [];
        for (var n in e) {
            var o = e[n];
            o.getIconUrl() || (i.push(o), t.push(o.getIconUri()))
        }
        this.col2.clearContent();
        var a = this;
        g.preloadImages(t, function(e) {
            for (var t = 0; t < e.length; t++) {
                var n = i[t],
                    o = n.spell.image = e[t],
                    r = a.table.getCell(n.id, "icon");
                r.setStyle("backgroundImage", o), a.currentSpellId === n.id && a.displaySpell({
                    spell: n,
                    imageUri: o
                })
            }
            a.refreshAllSpellState(), a._refreshAllSpellRows()
        })
    }, r.prototype.setSpellDraggable = function(e, t) {
        var i = this.table.getCell(e, "icon");
        if (m.isDraggable(i)) return void(t ? m.enableDrag(i) : m.disableDrag(i));
        if (t) {
            var n = this.spellMap[e].getIconUrl();
            n && m.setDraggable(i, {
                backgroundImage: n
            }, "spellsWindow", {
                spellId: e
            }, {
                dragOnTouchstart: !0
            })
        }
    }, r.prototype.setSpellEnabled = function(e, t) {
        this.table.getRow(e)
            .toggleClassName("grayed", !t)
    }, r.prototype.refreshSpellState = function(e) {
        var t = this.spellMap[e],
            i = t && (t.isItem || a(t)),
            n = i && this._onMainCharacter;
        this.setSpellEnabled(e, i), this.setSpellDraggable(e, n)
    }, r.prototype.refreshAllSpellState = function() {
        for (var e in this.spellMap) this.refreshSpellState(e)
    }, r.prototype._updateDisplayedSpellLevel = function(e, t) {
        if (this.table.hasRow(e)) {
            var i = this.table.getCell(e, "rank");
            i.levelWanted = t, this._refreshSpellRow(e, {
                displaySpell: !0
            }), this.updateRemainingPoints()
        }
    }, r.prototype.upgradeSpells = function() {
        var e = [];
        for (var t in this.spellMap)
            if (this.table.hasRow(t)) {
                var i = this.table.getCell(t, "rank");
                i.spell.level !== i.levelWanted && e.push({
                    spellId: parseInt(t, 10),
                    spellLevel: i.levelWanted
                })
            } window.dofus.sendMessage("SpellChangeRequestMessage", {
            spells: e
        }), window.gui.scenarioManager.checkCondition(window.gui.scenarioManager.conditionTypeEnum.CONFIRM_UPGRADE_SPELL)
    }, r.prototype._cancelAllUpgrades = function() {
        var e = this;
        for (var t in this.spellMap)
            if (this.table.hasRow(t)) {
                var i = this.table.getCell(t, "rank");
                i.levelWanted = i.spell.level, e._refreshSpellRow(t)
            } this.updateRemainingPoints()
    }, r.prototype._refreshAllSpellRows = function() {
        for (var e in this.spellMap) this._refreshSpellRow(e);
        this.updateRemainingPoints()
    }, r.prototype.displayHighlightPlusBtn = function(e) {
        this.toggleClassName("highlighted", e)
    }, r.prototype._refreshSpellRow = function(e, t) {
        if (t = t || {}, this.table.hasRow(e)) {
            var i = this.table.getCell(e, "pts"),
                n = this.table.getCell(e, "rank"),
                o = window.gui.playerData.isSubscriberAtMinLevel(y.ELITE),
                r = n.minusBtn,
                s = n.plusBtn,
                c = n.spell,
                l = c.level,
                d = n.levelWanted,
                u = -c.getUpgradeCost(d);
            d < l && (u = c.getUpgradeCost(d, l));
            var p = d < l ? "+" + u : u;
            if (0 === u && (p = "-"), i.cost = u, i.valueDom.setText(p), i.show(), n.levelTextDom.setText(d), t.displaySpell && this.displaySpell({
                    spell: c,
                    imageUri: c.getIconUrl(),
                    spellLevel: d
                }), window.gui.playerData.isIncarnation()) return r.disable(), void s.disable();
            if (r.enable(), s.enable(), r.show(), s.show(), 0 === l || 1 === c.getMaxLevel()) r.hide(), s.hide(), i.hide();
            else {
                if (1 === d ? r.disable() : r.toggleClassName("locked", !o && d <= l), window.gui.scenarioManager.isBehaviourEnabled(z.DISABLE_NO_LIMIT_SPELL_UPGRADE))
                    for (var h in this.spellMap)
                        if (this.spellMap.hasOwnProperty(h) && this.table.hasRow(h && h !== e)) {
                            var f = this.table.getCell(h, "rank");
                            0 === this.costPoints && a(f.spell, Math.min(f.levelWanted + 1, f.spell.getMaxLevel())) ? f.plusBtn.enable() : f.plusBtn.disable()
                        } a(c, Math.min(d + 1, c.getMaxLevel())) && d !== c.getMaxLevel() || s.disable()
            }
        }
    }, r.prototype.displaySpell = function(e) {
        function t(t, o) {
            var a = Number(o) + 1,
                s = t.createChild("div", {
                    className: "tab",
                    text: a
                });
            s.rankNum = o, i.getSpellLevelId(a) === r && s.addClassNames("on"), l(s), s.on("tapstart", function() {
                n.addClassNames("pressed")
            }), s.on("tapend", function() {
                n.delClassNames("pressed")
            }), s.on("tap", function() {
                n.displaySpell({
                    spell: e.spell,
                    imageUri: e.imageUri,
                    spellLevel: a
                }), _("TAB")
            })
        }
        this.lastSpellDisplayed = e.spell.id;
        var i, n = this,
            o = this.table.getCell(e.spell.id, "rank"),
            a = e.spellLevel || o.levelWanted;
        i = e.spell.clone(), i.setLevel(a);
        var r = i.getSpellLevelId(a),
            s = e.imageUri;
        this.col2.clearContent(), this.currentSpellLevelId = r, this.currentSpellId = i.id;
        for (var c = n.col2.createChild("div", {
                className: "tabs"
            }), u = i.getMaxLevel(), p = 0; p < u; p++) t(c, p.toString());
        var h = n.col2.createChild("div", {
                className: "panel"
            }),
            f = h.createChild("div", {
                className: "header"
            }),
            m = this.tabIcon = f.createChild("div", {
                className: "icon"
            });
        if (m.setStyle("backgroundImage", s), this.currentSpellLevelId === r) {
            if (!this.tabIcon || !this.tabIcon.rootElement) return void console.error(new Error('Cannot set style on empty DOM for "' + r + '" and image ' + s));
            this.tabIcon.setStyle("backgroundImage", s)
        }
        var M = f.createChild("div", {
            className: "panelTop"
        });
        M.createChild("div", {
            className: "spellName",
            text: i.getName()
        });
        var g = i.getProperty("minPlayerLevel", a) || 1,
            A = window.gui.playerData.characterBaseInformations.level,
            v = A < g,
            y = ["minPlayerLevel"],
            z = v ? ["underMinPlayerLevel"] : [],
            w = y.concat(z);
        M.createChild("div", {
            className: w,
            text: d("ui.spell.requiredLevel") + " " + g
        });
        var T = h.appendChild(new O({
            className: "spellDescScroller"
        }));
        T.content.appendChild(new b({
            spell: i,
            level: a
        }, {
            spellTooltipAll: !0
        })), T.refresh()
    }, r.prototype.checkRights = function() {
        this.toggleClassName("isMutant", window.gui.playerData.isMutant())
    }
}
