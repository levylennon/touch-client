function(e, t, i) {
    function n(e) {
        d.call(this),
        this.isItemInstance = !0,
        this.exchangeAllowed = !0,
        this.isInitialised = !1,
        this.effectsMap = {},
        this.shortName = "";
        for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t])
    }

    function o(e) {
        for (var t = 0; t < A.length; t += 1)
            if (A[t] > e) return t;
        return A.length
    }

    function a(e) {
        for (var t = 0; t < e.length; t += 1) {
            var i = e[t],
                n = i.effects;
            if (n.length) {
                var a = 0,
                    r = 0,
                    s = i.item;
                if (s && s.isWeapon) switch (s.typeId) {
                    case 7:
                        a = "X", r = 1;
                        break;
                    case 4:
                        a = "T", r = 1;
                        break;
                    case 8:
                        a = "L", r = 1
                }
                for (var c = 0; c < n.length; c += 1) {
                    var l = n[c];
                    if (l && l.effect) {
                        switch (i.effectsMap[l.effectId] = l, a && l.isDamageEffect() && (l.zoneShape = a, l.zoneSize = r), l.effectId) {
                            case m.ACTION_PETS_LAST_MEAL:
                                i.livingObjectFoodDate = l.description;
                                break;
                            case O:
                                i.livingObjectId = l.value, l.isLivingProperty = !0;
                                break;
                            case m.ACTION_ID_LIVING_OBJECT_MOOD:
                                i.livingObjectMood = l.value, l.isLivingProperty = !0;
                                break;
                            case m.ACTION_ID_LIVING_OBJECT_SKIN:
                                i.livingObjectSkin = l.value, l.isLivingProperty = !0;
                                break;
                            case m.ACTION_ID_LIVING_OBJECT_CATEGORY:
                                i.livingObjectCategory = l.value, l.isLivingProperty = !0;
                                break;
                            case m.ACTION_ID_LIVING_OBJECT_LEVEL:
                                var d = o(l.value),
                                    u = l.value - A[d - 1],
                                    p = A[d] - A[d - 1] || 0;
                                i.livingObjectLevel = d, i.livingObjectXp = u, i.livingObjectMaxXp = p, l.isLivingProperty = !0;
                                break;
                            case m.ACTION_SHIELD_EXPERIENCE:
                                var h = i.item.shieldModelId,
                                    f = 1e4 * l.diceSide + l.value,
                                    b = window.gui.databases.ShieldModelsLevels || {},
                                    M = b[h];
                                M || (console.warn(new Error("shieldModelId " + h + " unknown from DB for item " + i.id)), M = {});
                                for (var g = M.requiredXpLevels || [], _ = 100, v = 0; v < g.length; v++)
                                    if (f < g[v]) {
                                        _ = v;
                                        break
                                    } l.diceNum = _, l.forceDescriptionRefresh()
                        }
                        983 === l.effectId && (i.exchangeAllowed = !1), l.effectId !== w && l.effectId !== T || (i.exchangeable = !1)
                    }
                }
            }
        }
    }

    function r(e, t) {
        var i = [];
        l.series([function(t) {
            for (var n = [], o = {}, a = 0; a < e.length; a++) {
                var r = e[a];
                if (r.livingObjectCategory) {
                    var s = r.livingObjectId || r.objectGID;
                    n.push(s), o[a] = s
                }
            }
            return n.length ? void h.getDataMap("LivingObjectSkinJntMood", n, null, function(n, a) {
                if (n) return t(n);
                for (var r = 0; r < e.length; r++)
                    if (void 0 !== o[r]) {
                        var s = e[r];
                        if (void 0 !== a[o[r]]) {
                            var c = a[o[r]].moods;
                            s.iconId = c[s.livingObjectMood][s.livingObjectSkin - 1], i.push(s)
                        } else console.error("Cannot find the moods for " + s.objectGID)
                    } t()
            }) : t()
        }, function(t) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.effectsMap[m.ACTION_ITEM_MIMICRY_OBJ_GID] && (o.iconId = o.effectsMap[m.ACTION_ITEM_MIMICRY_OBJ_GID].iconId, i.push(o))
            }
            t()
        }, function(e) {
            if (!i.length) return e();
            var t = 5;
            l.eachLimit(i, t, function(e, t) {
                e._loadDifferentImage(t)
            }, e)
        }], t)
    }

    function s(e, t, i) {
        for (var n = t && t.monstersCache, o = {}, a = {}, r = !1, s = 0; s < e.length; s++) {
            var c = e[s];
            switch (c.effectsMap && c.effectsMap[1081] && (c.weight += c.effectsMap[1081].getParams()[0]), c.item.id) {
                case v:
                case z:
                case y:
                    c.shortName = "";
                    break;
                default:
                    c.shortName = c.item.getRawName(), c._initializationDone();
                    continue
            }
            for (var l = [], d = 0; d < c.effects.length; d += 1) {
                var u = c.effects[d].getParams(),
                    p = u[2];
                p && (l.push({
                    monsterId: p,
                    monsterGrade: u[0] - 1
                }), n && n[p] || (o[p] = !0))
            }
            a[s] = l, r = !0
        }
        return r ? (o = Object.keys(o), void h.getDataMap("Monsters", o, null, function(t, o) {
            if (t) return i(t);
            for (var r, s, c = "", l = {
                    regularSoulStone: function(e, t) {
                        var i = e.grades[t];
                        i && i.level > r && (r = i.level, c = e.nameId)
                    },
                    bossAndMiniBoss: function(e) {
                        (e.isBoss || e.isMiniBoss) && (c ? c += ", " + e.nameId : c = e.nameId)
                    }
                }, d = 0; d < e.length; d++)
                if (a[d]) {
                    var u = e[d];
                    switch (r = 0, c = "", s = null, u.item.id) {
                        case v:
                            s = l.regularSoulStone;
                            break;
                        case z:
                        case y:
                            s = l.bossAndMiniBoss
                    }
                    for (var p = 0; p < a[d].length; p++) {
                        var h, f = a[d][p].monsterId,
                            b = a[d][p].monsterGrade;
                        if (n) {
                            if (h = n[f], !h) {
                                if (!o[f]) continue;
                                h = o[f], n[f] = o[f]
                            }
                        } else {
                            if (!o[f]) continue;
                            h = o[f]
                        }
                        s(h, b)
                    }
                    u.shortName = c, u._initializationDone()
                } i()
        })) : i()
    }

    function c(e, t) {
        return t = t || "(The souls are gone...)", b(e) + b("ui.common.colon") + t
    }
    var l = i(18),
        d = i(36)
        .EventEmitter,
        u = i(474),
        p = i(56)
        .inherits,
        h = i(130),
        f = i(12),
        b = i(17)
        .getText,
        m = i(476),
        M = i(480),
        g = i(14),
        _ = i(469),
        A = [0, 10, 21, 33, 46, 60, 75, 91, 108, 126, 145, 165, 186, 208, 231, 255, 280, 306, 333, 361],
        O = 970,
        v = 7010,
        y = 10417,
        z = 10418,
        w = 981,
        T = 982;
    p(n, d), e.exports = n, n.prototype.setItem = function(e) {
        this.exchangeable = e.exchangeable, this.weight = e.realWeight, this.item = e, this.id = e.id
    }, n.prototype.isLinked = function() {
        return !this.exchangeable || !this.exchangeAllowed
    }, n.prototype.isLinkedCharacter = function() {
        return Boolean(this.effectsMap[w])
    }, n.prototype.isMimicryHost = function() {
        return Boolean(this.effectsMap[m.ACTION_ITEM_MIMICRY_OBJ_GID])
    }, n.prototype.isStarvingPet = function() {
        return 18 === this.item.typeId
    }, n.prototype.isCosmetic = function() {
        return !!this.item && this.item.isCosmetic()
    }, n.prototype.isShield = function() {
        return !!this.item && this.item.isShield()
    }, n.prototype.isShieldManageable = function() {
        return !!this.item && (this.isShield() && this.item.shieldModelId > 0 && window.gui.playerData.inventory.objects[this.objectUID] && this.effectsMap[m.ACTION_SHIELD_EXPERIENCE] || this.item.id === M.fakeShieldId && window.gui.playerData.isOnShieldTutorial())
    }, n.prototype.isLegendaryWeapon = function() {
        return !!this.item && this.item.isLegendaryWeapon()
    }, n.prototype.isAsleepLegendaryWeapon = function() {
        return !!this.item && (this.item.isLegendaryWeapon() && this.item.recipeIds.length > 0)
    }, n.prototype.getGrindLevel = function() {
        for (var e = 1, t = 0; t < this.effects.length; t++) {
            var i = this.effects[t];
            if (i.effectId === m.ACTION_GRIND_LEVEL) {
                e = i.value;
                break
            }
        }
        return e
    }, n.prototype.isFullSoulStone = function() {
        return !!this.item && this.item.isFullSoulStone()
    }, n.prototype._loadDifferentImage = function(e) {
        var t = this;
        f.preloadImage("gfx/items/" + this.iconId + ".png", function(i) {
            t.image = i, e()
        })
    }, n.prototype._initializationDone = function() {
        this.isInitialised = !0, this.emit("initialised")
    }, n.prototype.initialize = function(e) {
        console.error("ItemInstance.initialized called"), n.initializeList([this], null, e)
    }, n.initializeList = function(e, t, i) {
        for (var n = [], o = 0; o < e.length; o += 1) {
            var c, l = e[o],
                d = {};
            if (l.item)
                for (c = 0; c < l.item.upgradeEffects.length; c += 1)
                    for (var p = l.item.upgradeEffects[c], h = 0; h < l.item.possibleEffects.length; h += 1) {
                        var f = l.item.possibleEffects[h];
                        if (f.effectId === p.typeActionId) {
                            d[p.typeActionId] = f.diceNum;
                            break
                        }
                    }
            for (c = 0; c < l.effects.length; c += 1) {
                var b = l.effects[c];
                void 0 !== d[b.actionId] && (b.baseValue = d[b.actionId]), b.effectCaller = "ItemInstance id " + l.id, n.push(b)
            }
        }
        u.createEffectInstances(n, function(n, o) {
            if (n) return i(n);
            for (var c = 0; c < e.length; c++) {
                var l = e[c],
                    d = l.effects.length;
                l.effects = d > 0 ? o.splice(0, d) : []
            }
            a(e), r(e, function(n) {
                return n ? i(n) : void s(e, t, i)
            })
        })
    }, n.prototype.getRawName = function() {
        if (!this.isInitialised) return "";
        var e;
        return e = this.objectGID === v ? c("ui.item.soul", this.shortName) : this.objectGID === z ? c("ui.item.miniboss", this.shortName) : this.objectGID === y ? c("ui.item.boss", this.shortName) : this.shortName
    }, n.prototype.doDefaultAction = function() {
        if (this.isInitialised) {
            var e = this.getProperty("objectUID");
            if (this.getProperty("usable")) {
                if (!this.getProperty("type")
                    .needUseConfirm) return void _.useObject(e);
                window.gui.openConfirmPopup({
                    title: b("ui.common.confirm"),
                    message: b("ui.common.confirmationUseItem", this.getProperty("nameId")),
                    cb: function(t) {
                        t && _.useObject(e)
                    }
                })
            } else this.item.isEquippable() && window.gui.playerData.inventory.equipItem(e)
        }
    }, n.prototype.getName = function() {
        if (!this.isInitialised) return "";
        var e = g(),
            t = this.getRawName();
        return t && "[!]" !== t.substring(0, 3) || console.error(new Error("No name for ItemInstance " + this.objectGID + " for lang " + e.Config.language)), e.gui.playerData.isAbleToSeeId() && (t += " (" + this.objectGID + ")"), t
    }, n.prototype.getItem = function() {
        return this.item
    }, n.prototype.getItemInstance = function() {
        return this
    }, n.prototype.getConditionsFormatted = function(e) {
        return this.item ? this.item.getConditionsFormatted(e) : e([])
    }, n.prototype.getTargetConditionsFormatted = function(e) {
        return this.item ? this.item.getTargetConditionsFormatted(e) : e([])
    }, n.prototype.getProperty = function(e) {
        if (!this.isInitialised) return null;
        switch (e) {
            case "nameId":
                return this.getName();
            default:
                return this.hasOwnProperty(e) ? this[e] : this.item.getProperty(e)
        }
    }
}
