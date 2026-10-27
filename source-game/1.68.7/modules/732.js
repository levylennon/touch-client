function(e, t, i) {
    function n(e) {
        T.preloadImage("ui/SpellPlaceholder.png", function(e) {
            t.placeHolder = e
        }), M([q], null, function(t, i) {
            return t ? e(t) : (A = i, void e())
        })
    }

    function o(e, t) {
        return e ? console.error(e) : void console.log("data:", t)
    }

    function a() {
        return ++x
    }

    function r() {
        this.id = 0, this._uid = a(), this._item = null, this.ownerId = 0
    }

    function s(e, t, i) {
        var n = this;
        this.id = parseInt(e, 10), this.ownerId = 0, this.position = null, this.isItem = !1, this.level = 0, this.isLoaded = !1, this.isDisabled = !1, this.spell = null, this._tables = {}, M(e, t, function(e, t) {
            return e ? i(e) : (n.effectInstances = t.effectInstances, delete t.effectInstances, n._tables = t, n.spell = t.spells[n.id], n.spell ? (n.setLevel(n.level || 1), n.isLoaded = !0, void i()) : i(new Error("missing static data for spell id " + n.id)))
        })
    }

    function c(e, t) {
        this.id = q, this.ownerId = 0, this.position = null, this.isItem = !0, this.level = 1, this.isLoaded = !1, this._item = e, this.effectInstances = {};
        for (var i = 0; i < this._item.effects.length; i++) this.effectInstances[this.getSpellLevelId() + "-effects-" + i] = this._item.effects[i], this.effectInstances[this.getSpellLevelId() + "-effects-" + i].order = i;
        if (!e.isInitialised) {
            var n = this;
            return e.once("initialised", function() {
                c.call(n, e, t)
            })
        }
        if (this.isLoaded = !0, R.gui.shortcutBar.updateSpellAvailability(this.id), t) return t()
    }

    function l(e, t) {
        e = e || {}, t = t || {};
        var i = {};
        return Object.keys(e)
            .forEach(function(t) {
                i[t] = e[t]
            }), Object.keys(t)
            .forEach(function(e) {
                i[e] = t[e]
            }), i
    }

    function d() {
        var e = R.gui.playerData.characters,
            t = e.getSpellModifications(this.ownerId, this.id, y.CRITICAL_HIT_BONUS),
            i = this.spellLevel.criticalHitProbability;
        return i <= 0 ? 0 : t ? Math.max(Math.min(i + t.value.getTotalStat(), 100), 1) : i
    }

    function u() {
        this.castingData = {
            lastCastTurn: 0,
            targetsThisTurn: {},
            castThisTurn: 0,
            lastInitialCooldownReset: 0
        }
    }

    function p(e, t) {
        e instanceof Array || (e = [e]), M(e, function(i, n) {
            if (i) return t(i);
            var o = {};
            O.each(e, function(e, t) {
                if (o[e] = new r, ~~e === q) {
                    var i = R.gui.playerData.inventory.getCurrentWeapon();
                    if (i) return c.call(o[e], i, t)
                }
                s.call(o[e], e, n, t)
            }, function(e) {
                return e ? t(e) : void t(null, o)
            })
        })
    }

    function h(e, t, i) {
        return t && t.spells ? i(null, z.extractElementsFrom(e, t.spells, !0)) : void w.getDataArray("Spells", e, function(t, n) {
            return t ? i(t) : void i(null, z.extractElementsFrom(e, n, !0))
        })
    }

    function f(e, t, i) {
        var n = {};
        for (var o in e.spells)
            for (var a = e.spells[o], r = 0; r < a.spellLevels.length; r++) n[a.spellLevels[r]] = !0;
        return n = Object.keys(n), 0 === n.length ? i(null, {}) : t && t.spellLevels ? i(null, z.extractElementsFrom(n, t.spellLevels, !0)) : void w.getDataArray("SpellLevels", n, function(e, t) {
            return e ? i(e) : void i(null, z.extractElementsFrom(n, t, !0))
        })
    }

    function b(e, t, i) {
        var n = {};
        for (var o in e.spellLevels) {
            var a, r = e.spellLevels[o];
            for (a = 0; a < r.statesRequired.length; a++) n[r.statesRequired[a]] = !0;
            for (a = 0; a < r.statesForbidden.length; a++) n[r.statesForbidden[a]] = !0
        }
        return n = Object.keys(n), 0 === n.length ? i(null, {}) : t && t.spellStates ? i(null, z.extractElementsFrom(n, t.spellStates, !0)) : void w.getDataArray("SpellStates", n, function(e, t) {
            return e ? i(e) : void i(null, z.extractElementsFrom(n, t, !0))
        })
    }

    function m(e, t, i) {
        var n, o, a = {},
            r = {},
            s = ["effects", "criticalEffect"];
        for (var c in e.spellLevels)
            if (e.spellLevels.hasOwnProperty(c))
                for (var l = e.spellLevels[c], d = 0; d < s.length; d++) {
                    var u = s[d];
                    for (o = 0; o < l[u].length; o++)
                        if (n = c + "-" + u + "-" + o, t && t.effectInstances && t.effectInstances[n]) r[n] = t.effectInstances[n];
                        else {
                            var p = l[u][o];
                            p.effectCaller = "SpellFactory spellLevelId: " + n, a[n] = l[u][o]
                        }
                }
        return 0 === Object.keys(a)
            .length ? i(null, r) : void v.createEffectInstancesIndexed(a, function(e, t) {
                if (e) return i(e);
                if (0 === Object.keys(r)
                    .length) return i(null, t);
                for (var n in r) r.hasOwnProperty(n) && (t[n] = r[n]);
                i(null, t)
            })
    }

    function M(e, t, i) {
        if ("function" != typeof t || i || (i = t, t = null), i = i || o, e instanceof Array || (e = [e]), e = e.filter(function(e) {
                return !isNaN(e)
            }), 0 === e.length) return i(new Error("No valid spell id"));
        e.indexOf(q) !== -1 && (t || (t = {}), _(t, A));
        var n = {};
        h(e, t, function(e, o) {
            return e ? i(e) : (n.spells = o, void f(n, t, function(e, o) {
                return e ? i(e) : (n.spellLevels = o, void b(n, t, function(e, o) {
                    return e ? i(e) : (n.spellStates = o, void m(n, t, function(e, t) {
                        return e ? i(e) : (n.effectInstances = t, void i(null, n))
                    }))
                }))
            }))
        })
    }

    function g(e, t, i) {
        function n(e, i) {
            var n = e.getProperty(t),
                o = i.getProperty(t);
            return n > o ? -r : n < o ? r : e.id > i.id ? -r : void 0
        }
        var o = Array.isArray(e) ? e : [];
        if (!o.length)
            for (var a in e) o.push(e[a]);
        var r = i ? 1 : -1;
        return o.sort(n)
    }

    function _(e, t) {
        for (var i in t)
            if (t.hasOwnProperty(i)) {
                e[i] || (e[i] = {});
                for (var n in t[i]) t[i].hasOwnProperty(n) && (e[i][n] = t[i][n])
            }
    }
    var A, O = i(18),
        v = i(474),
        y = i(680),
        z = i(16),
        w = i(130),
        T = i(12),
        C = i(13),
        I = i(733),
        S = i(734),
        E = i(735),
        L = i(736),
        N = i(14),
        R = N(),
        q = C.WEAPON_SPELL_ID;
    t.placeHolder = C.MISSING_TEXTURE_IMAGE_SRC;
    var x = 0;
    r.prototype.setLevel = function(e) {
        if (this.isItem) return void(1 !== e && console.warn("Spell#setLevel called on item with level != 1", e));
        if (this.level = e, !this.spell) return void console.error("Spell#setLevel this.spell is undefined or null #", this.id);
        if (!e || e < 1 || e > this.spell.spellLevels.length) return void console.error(new Error("Spell#setLevel invalid level " + e + " for spell #" + this.id));
        var t = this._getSpellLevelByLevel(this.level);
        t && (this.spellLevel = t)
    }, r.prototype.setPosition = function(e) {
        this.position = e
    }, r.prototype.setIsDisabled = function(e) {
        this.isDisabled = e
    }, r.prototype._getSpellLevelByLevel = function(e) {
        if (this.isItem) return console.error(new Error("Spell#_getSpellLevelByLevel called on item for Spell id " + this.id)), null;
        if (!this.spell) return console.error(new Error("Spell#_getSpellLevelByLevel this.spell is undefined or null # " + this.id)), null;
        var t = this._tables.spellLevels[this.spell.spellLevels[e - 1]];
        if (!t) {
            var i = "Spell#_getSpellLevelByLevel Cannot find spellLevel for spellID " + this.id;
            return i += " for level " + e, console.error(new Error(i)), null
        }
        return t
    }, r.prototype.getSpellLevelId = function(e) {
        if (this.isItem) return "weapon";
        e = void 0 !== e ? e : this.level;
        var t = this._getSpellLevelByLevel(e);
        return t ? t.id.toString() : ""
    }, r.prototype.getZoneEffect = function(e) {
        e = e || {};
        var t, i = Boolean(e.getBiggestZone),
            n = i ? 0 : 63,
            o = [];
        this.isWeapon() && this._item ? o = this._item.effects : this.spellLevel && (o = this.spellLevel.effects);
        for (var a = 0; a < o.length; a++) {
            var r = this.effectInstances[this.getSpellLevelId() + "-effects-" + a],
                s = r.getZoneEffect();
            if ((r.isPreview || "P" !== s.zoneShape && s.zoneSize >= 0 && (s.zoneSize <= n && !i || s.zoneSize >= n && i)) && (n = s.zoneSize, t = s), r.isPreview) break
        }
        return t || v.parseZone("P")
    }, r.prototype.getSpellEffectZone = function(e, t, i) {
        var n = this.getProperty("previewZoneDefault"),
            o = n && "null" !== n ? v.parseZone(n) : this.getZoneEffect({
                getBiggestZone: !0
            }),
            a = S.getSpellEffectZone(e, t, i, o),
            r = this.spellLevel && this.spellLevel.previewZones;
        if (r && r.length > 0) {
            var s = {},
                c = R.gui.playerData.characters.controlledCharacterId,
                d = !0;
            return r.forEach(function(n) {
                    var o = n.casterMask,
                        a = n.targetMask,
                        r = n.activationZone,
                        u = n.previewZone,
                        p = n.zoneDisplacement,
                        h = {},
                        f = L.verifyRawEffectMask(o, r, c, c);
                    if (f) {
                        var b = v.parseZone(r),
                            m = S.getSpellEffectZone(e, t, i, b),
                            M = v.parseZone(u);
                        Object.keys(m)
                            .forEach(function(i) {
                                var o = R.actorManager.getActorsOnCell(i)[0];
                                if ("C" !== a) {
                                    if (!o || o.isInvisibleInFight()) return;
                                    var s = o.actorId,
                                        u = L.verifyRawEffectMask(a, r, c, s);
                                    if (!u) return
                                }
                                n.disableDefaultZone && (d = !1);
                                var f = S.getShapeCenterCells(t, i, p);
                                f.forEach(function(i) {
                                    var n = S.getSpellEffectZone(e, t, i, M);
                                    h = l(h, n)
                                })
                            }), s = l(s, h)
                    }
                }), d && (s = l(s, a)), 0 === Object.keys(s)
                .length ? a : s
        }
        return a
    }, r.prototype.getHumanReadableZoneInfo = function() {
        return v.getHumanReadableZoneInfo(this.getZoneEffect(), "Spell ID " + this.id.toString())
    }, r.prototype.getMaxLevel = function() {
        return this.isItem || this.id === q ? 1 : this.spell.spellLevels.length
    }, r.prototype.getHumanReadableSpellType = function() {
        var e = this.getProperty("typeId"),
            t = R.gui.databases.SpellTypes[e];
        return t ? t.longNameId : (console.error("Spell factory cannot get typeId", e, "for spellId:", this.id), "")
    }, r.prototype.getEffectsIds = function(e) {
        if (this.isItem) return Object.keys(this.effectInstances);
        var t = this._getSpellLevelByLevel(e || this.level);
        return t ? t.effects : []
    }, r.prototype.getCriticalEffectsIds = function(e) {
        if (this.isItem) return [];
        var t = this._getSpellLevelByLevel(e || this.level);
        return t ? t.criticalEffect : []
    }, r.prototype.getUpgradeCost = function(e, t) {
        if (this.isItem) return null;
        void 0 === t && void 0 === e ? (e = this.level, t = e + 1) : void 0 === t && (t = e, e = this.level);
        for (var i = 0, n = 0, o = 1; o <= e; o += 1) n += o - 1, i += o - 1;
        for (; o <= t; o += 1) i += o - 1;
        return i - n
    }, r.prototype.getName = function() {
        var e = this.getProperty("nameId");
        return e || (console.error("Spell#getName: no name for spellId " + this.id), e = ""), R.gui.playerData.isAbleToSeeId() && (e += " (" + this.id + ")"), e
    }, r.prototype.getProperty = function(e, t) {
        t = t || this.level;
        var i = this.isItem ? this._getPropertyFromItem(e) : this._getPropertyFromSpell(e, t);
        if ("range" === e) {
            var n = R.gui.playerData.characters.getControlledCharacter()
                .characteristics;
            if (!n) return i;
            var o, a = n.range;
            if (o = this.isItem ? this._getPropertyFromItem("rangeCanBeBoosted") : this._getPropertyFromSpell("rangeCanBeBoosted", t)) {
                var r;
                r = this.isItem ? this._getPropertyFromItem("minRange") : this._getPropertyFromSpell("minRange", t);
                var s = a.getTotalStat();
                i + s < r ? i = r : i += s
            }
        }
        return i
    }, r.prototype._getPropertyFromSpell = function(e, t) {
        var i, n = this._getSpellLevelByLevel(t),
            o = R.gui.playerData.characters;
        switch (e) {
            case "id":
            case "nameId":
            case "descriptionId":
            case "typeId":
            case "iconId":
            case "scriptParams":
            case "scriptParamsCritical":
            case "scriptId":
            case "scriptIdCritical":
            case "spellLevels":
            case "previewZoneDefault":
            case "useParamCache":
                return this.spell ? this.spell[e] : (console.error("Spell#getPropertyFromSpell this.spell is undefined or null #", this.id), null);
            case "minCastInterval":
                if (i = o.getSpellModifications(this.ownerId, this.id, y.CAST_INTERVAL), !i) return n[e];
                var a = i.value.getTotalStat();
                return n[e] - a;
            case "apCost":
                if (i = o.getSpellModifications(this.ownerId, this.id, y.AP_COST), !i) return n[e];
                var r = i.value.getTotalStat();
                return n[e] - r;
            case "maxCastPerTurn":
                return i = o.getSpellModifications(this.ownerId, this.id, y.MAX_CAST_PER_TURN), i ? (n[e] || 1) + i.value.getEquipmentPts() + i.value.getBonusPts() : n[e];
            case "range":
                return i = o.getSpellModifications(this.ownerId, this.id, y.RANGE), i ? n[e] + i.value.getEquipmentPts() + i.value.getBonusPts() : n[e];
            case "maxCastPerTarget":
                return i = o.getSpellModifications(this.ownerId, this.id, y.MAX_CAST_PER_TARGET), i ? n[e] + i.value.getEquipmentPts() + i.value.getBonusPts() : n[e];
            case "castInLine":
                return i = o.getSpellModifications(this.ownerId, this.id, y.CAST_LINE), i ? !!n[e] && 0 === i.value.getTotalStat() : n[e];
            case "castTestLos":
                return i = o.getSpellModifications(this.ownerId, this.id, y.LOS), i ? !!n[e] && 0 === i.value.getTotalStat() : n[e];
            case "rangeCanBeBoosted":
                return i = o.getSpellModifications(this.ownerId, this.id, y.RANGEABLE), !i || n[e] ? n[e] : i.value.getTotalStat() > 0;
            case "maxStack":
            case "castInDiagonal":
            case "criticalFailureProbability":
            case "spellBreed":
            case "needFreeCell":
            case "needTakenCell":
            case "criticalFailureEndsTurn":
            case "globalCooldown":
            case "statesRequired":
            case "statesForbidden":
            case "minRange":
            case "minPlayerLevel":
            case "canSummon":
            case "canBomb":
            case "castRestrictedOnMaxInvoc":
            case "initialCooldown":
                return n[e];
            case "spellLevel":
                return n;
            case "grade":
                return n[e] || t;
            case "isSpellWeapon":
                return this.id === q;
            case "isDefaultSpellWeapon":
                return this.id === q && !R.gui.playerData.inventory.getCurrentWeapon();
            case "criticalHitProbability":
                return d.call(this);
            default:
                return null
        }
    }, r.prototype._getPropertyFromItem = function(e) {
        var t = this._item.item;
        if (!t) return console.error(new Error("SpellFactory getPropertyFromItem: item is not ready yet")), null;
        switch (e) {
            case "nameId":
            case "descriptionId":
            case "apCost":
            case "criticalFailureProbability":
            case "criticalHitProbability":
            case "range":
            case "castInLine":
            case "castInDiagonal":
            case "castTestLos":
            case "minRange":
            case "maxCastPerTurn":
                return t[e];
            case "iconId":
                return this._item.getProperty("iconId");
            case "id":
            case "minCastInterval":
            case "minPlayerLevel":
            case "maxStack":
            case "maxCastPerTarget":
            case "scriptId":
            case "scriptIdCritical":
            case "spellBreed":
                return 0;
            case "grade":
                return 1;
            case "typeId":
                return 24;
            case "useParamCache":
            case "needTakenCell":
            case "rangeCanBeBoosted":
            case "isDefaultSpellWeapon":
            case "needFreeCell":
                return !1;
            case "criticalFailureEndsTurn":
            case "isSpellWeapon":
                return !0;
            case "scriptParams":
            case "scriptParamsCritical":
            case "spellLevels":
            case "previewZoneDefault":
                return null;
            default:
                return null
        }
    }, r.prototype.getIconUri = function() {
        var e = this.isItem ? C.ITEM_DIR : C.SPELL_DIR + "sort_",
            t = this.getProperty("iconId");
        return t < 0 && (console.error(new Error("iconId < 0 for spellId " + this.id + ": " + t)), t = "noIcon"), e + t + ".png"
    }, r.prototype.getIconUrl = function() {
        return this.isItem ? this._item.item && this._item.getProperty("image") : this.spell && this.spell.image
    }, r.prototype.update = function(e) {
        if (this.id !== q) return e();
        var t = R.gui.playerData.inventory.getCurrentWeapon();
        return t ? c.call(this, t, e) : s.call(this, 0, null, e)
    }, r.prototype.clone = function() {
        var e = new r;
        for (var t in this) this.hasOwnProperty(t) && "_uid" !== t && "castingData" !== t && (e[t] = this[t]);
        return e.setLevel(1), e
    }, r.prototype.cast = function(e, t, i) {
        this.castingData || u.call(this), t = t || [], i = i !== !1, this.castingData.lastCastTurn = e;
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            this.castingData.targetsThisTurn[o] || (this.castingData.targetsThisTurn[o] = 0), this.castingData.targetsThisTurn[o]++
        }
        i && this.castingData.castThisTurn++, R.gui.shortcutBar.updateSpellAvailability(this.id)
    }, r.prototype.newTurn = function(e) {
        return this.castingData ? (this.castingData.castThisTurn = 0, void(this.castingData.targetsThisTurn = {})) : void console.warn('You should not call "newTurn" on a spell that has not been casted', e)
    }, r.prototype.getModifiedInterval = function() {
        if (this.isItem) return 0;
        for (var e = new I, t = R.gui.playerData.characters.mainCharacter.characteristics.spellModifications, i = 0; i < t.length; i++) {
            var n = t[i];
            if (n.spellId === this.id) {
                var o = n.modificationType;
                o === y.CAST_INTERVAL ? e.castInterval.setPts(n.value.getAllValues()) : o === y.CAST_INTERVAL_SET && e.castIntervalSet.setPts(n.value.getAllValues())
            }
        }
        var a, r = e.castInterval.getTotalStat(),
            s = e.castIntervalSet.getTotalStat();
        return a = s ? s - r : this.spellLevel.minCastInterval - r
    }, r.prototype.refreshCellZoneEffect = function(e, t) {
        var i, n, o, a, r = R.isoEngine.mapRenderer.map.cells,
            s = this.isWeapon(),
            c = s ? this._item : this.spellLevel,
            l = [];
        for (i = 0; i < c.effects.length; i++) n = this.effectInstances[this.getSpellLevelId() + "-effects-" + i], o = n.rawZone, o && l[o] ? n.cellZoneEffect = l[o] : (a = n.getZoneEffect(), n.cellZoneEffect = S.getSpellEffectZone(r, e, t, a), o && (l[o] = n.cellZoneEffect));
        if (!this.isWeapon())
            for (i = 0; i < c.criticalEffect.length; i++) n = this.effectInstances[this.getSpellLevelId() + "-criticalEffect-" + i], o = n.rawZone, o && l[o] ? n.cellZoneEffect = l[o] : (a = n.getZoneEffect(), n.cellZoneEffect = S.getSpellEffectZone(r, e, t, a), o && (l[o] = n.cellZoneEffect))
    }, r.prototype.resetCellZoneEffect = function() {
        for (var e in this.effectInstances) this.effectInstances.hasOwnProperty(e) && (this.effectInstances[e].cellZoneEffect = {})
    }, r.prototype.getEffectInstances = function() {
        function e(e, t) {
            return e.order - t.order
        }
        var t, i, n = {
                effects: [],
                criticalEffects: []
            },
            o = this.isWeapon(),
            a = o ? this._item : this.spellLevel;
        for (t = 0; t < a.effects.length; t++) i = this.effectInstances[this.getSpellLevelId() + "-effects-" + t], i && (i.isPreview || (n.effects.push(i), o && a.item && a.item.criticalHitBonus && n.criticalEffects.push(i)));
        if (!o)
            for (t = 0; t < a.criticalEffect.length; t++) i = this.effectInstances[this.getSpellLevelId() + "-criticalEffect-" + t], i && (i.isPreview || n.criticalEffects.push(i));
        return n.effects.sort(e), n.criticalEffects.sort(e), n
    }, r.prototype.isInSpellRange = function(e, t) {
        for (var i = R.isoEngine.mapRenderer.map.cells, n = S.getSpellRange(i, e, {
                castInDiagonal: this.getProperty("castInDiagonal"),
                castInLine: this.getProperty("castInLine"),
                minRange: this.getProperty("minRange"),
                range: this.getProperty("range")
            }), o = 0; o < n.length; o++) {
            var a = E.getCellIdFromMapPoint(n[o][0], n[o][1]);
            if (a === t) return !0
        }
        return !1
    }, r.prototype.isWeapon = function() {
        return this.id === q && R.gui.playerData.inventory.getCurrentWeapon()
    }, r.prototype.getCooldown = function(e) {
        if (!e || !this.castingData || this.isItem) return 0;
        var t, i = this.getModifiedInterval(),
            n = e.getRelativeTurnCount();
        if (0 === this.spellLevel.initialCooldown || this.castingData.lastCastTurn >= this.castingData.lastInitialCooldownReset + this.spellLevel.initialCooldown) {
            if (63 === i) return 63;
            t = i + this.castingData.lastCastTurn - n
        } else t = this.castingData.lastInitialCooldownReset + this.spellLevel.initialCooldown - n;
        return t = Math.max(0, t)
    }, r.prototype.resetInitialCooldown = function(e) {
        this.castingData || u.call(this), this.castingData.lastInitialCooldownReset = e
    }, r.prototype.forceCooldown = function(e) {
        this.castingData || (console.warn('You should not call "forceCooldown" on a spell that has not been casted'), u.call(this));
        var t = this.isItem ? 0 : this.getModifiedInterval();
        this.castingData.lastCastTurn = e + R.gui.fightManager.turnCount - t
    }, r.prototype.forceLastCastTurn = function(e) {
        this.castingData || (console.warn('You should not call "forceLastCastTurn" on a spell that has not been casted'), u.call(this)), this.castingData.lastCastTurn = e
    }, r.prototype.hasBeenCast = function() {
        return Boolean(this.castingData)
    }, r.prototype.forceDescriptionRefresh = function(e) {
        O.each(this.effectInstances, function(e, t) {
            e.forceDescriptionRefresh(t)
        }, function(t) {
            return t ? e(t) : void e()
        })
    }, t.initialize = n, t.createSpells = p, t.sortSpells = g
}
