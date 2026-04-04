function(e, t, i) {
    function n(e) {
        this.nameId = "";
        for (var t in e) e[t] !== f[t] && null !== e[t] && (this[t] = e[t]);
        this.isWeapon = "Weapon" === e._type, this.averagePrice = -1, this.etheral && (this.descriptionId = r("ui.common.etherealWeaponDescription")), this.type = c.getItemTypeMap()[this.typeId], this.type || u.error("Item #" + this.id + " has invalid typeId #" + this.typeId), this.averagePrice = c.getAveragePrice(this.id)
    }
    var o = i(18),
        a = i(474),
        r = i(17).getText,
        s = i(16),
        c = i(469),
        l = i(130),
        d = i(471),
        u = i(34).logger,
        p = i(470),
        h = i(476),
        f = {
            id: null,
            nameId: null,
            typeId: null,
            descriptionId: null,
            iconId: null,
            level: null,
            realWeight: null,
            cursed: !1,
            useAnimationId: -1,
            usable: !1,
            targetable: !1,
            exchangeable: !1,
            price: null,
            twoHanded: !1,
            etheral: !1,
            itemSetId: -1,
            criteria: "null",
            criteriaTarget: "null",
            enhanceable: !1,
            nonUsableOnAnother: !1,
            appearanceId: null,
            secretRecipe: !1,
            recipeSlots: null,
            recipeIds: null,
            dropMonsterIds: null,
            bonusIsSecret: !1,
            hideEffects: !1,
            possibleEffects: null,
            favoriteSubAreas: null,
            favoriteSubAreasBonus: null,
            multiUseUnabled: !1
        };
    e.exports = n, n.initializeList = function(e, t) {
        o.parallel([function(t) {
            for (var i = [], n = 0; n < e.length; n += 1) {
                var o = e[n];
                if (o.possibleEffects) {
                    var r, s = {};
                    for (r = 0; r < o.upgradeEffects.length; r += 1) {
                        var c = o.upgradeEffects[r];
                        s[c.typeActionId] = !0
                    }
                    for (r = 0; r < o.possibleEffects.length; r += 1) {
                        var l = o.possibleEffects[r];
                        o.isShield && l.effectId === h.ACTION_ID_SHIELD_LEVEL && (l.diceNum = 1),
                        s[l.effectId] && (l.baseValue = l.diceNum),
                        l.effectCaller = "Item id " + o.id,
                        i.push(l)
                    }
                }
            }
            a.createEffectInstances(i, function(i, n) {
                if (i) return t(i);
                for (var o = 0; o < e.length; o++) {
                    var a = e[o];
                    if (a.possibleEffects) {
                        var r = a.possibleEffects.length,
                            s = r > 0 ? n.splice(0, r) : [];
                        s = s.filter(function(e) {
                            return e && e.effect
                        }),
                        a.possibleEffectsMap = {},
                        a.possibleEffects = s;
                        for (var c = 0; c < s.length; c++) a.possibleEffectsMap[s[c].effectId] = s[c]
                    }
                }
                t()
            })
        }, function(t) {
            o.each(e, function(e, t) {
                return e.type.superTypeId !== d.PET ? t() : (
                    e.foodItems = [],
                    e.foodTypes = [],
                    void l.getDataMap("Pets", [e.id], null, function(i, n) {
                    if (i) return t();
                    if (!n || !n[e.id]) return t();
                    var o = n[e.id];
                    return e.foodItems = o.foodItems,
                            e.foodTypes = o.foodTypes,
                            t()
                }))
            }, t)
        }, function(t) {
            for (var i = [], n = [], o = 0; o < e.length; o++) {
                var a = e[o],
                    r = a.itemSetId;
                r && (i.push(r), n.push(a))
            }
            return i.length ? void l.getDataMap("ItemSets", i, null, function(e, i) {
                if (e) return t(e);
                for (var o = 0; o < n.length; o++) {
                    var a = n[o],
                        r = i[a.itemSetId];
                    r ? a.itemSetName = r.nameId : (u.error(new Error("ItemSet id " + a.itemSetId + " for item id " + a.id + " does not exist.")), a.itemSetName = null)
                }
                return t()
            }) : t()
        }], t)
    }, n.prototype.initialize = function(e) {
        n.initializeList([this], e)
    }, n.prototype.getRawName = function() {
        return this.nameId || ""
    }, n.prototype.getName = function() {
        var e = window.gui.playerData.isAbleToSeeId(),
            t = this.getRawName();
        return t && "[!]" !== t.substring(0, 3) || console.error(new Error("No name for Item " + this.id + " for lang " + window.Config.language)), e && (t += " (" + this.id + ")"), t
    }, n.prototype.getNameForSearch = function() {
        return this._simplifiedName ? this._simplifiedName : (this._simplifiedName = s.simplifyString(this.nameId, this.getName()), this._simplifiedName)
    }, n.prototype._getStatsFormatted = function() {
        var e = [];
        if (!this.isWeapon) return u.error(new Error("getProperty(statsFormatted) should never be called on non-weapon Item")), e;
        var t = r("ui.stats.shortAP") + r("ui.common.colon") + this.apCost;
        this.maxCastPerTurn && (t += " (" + r("ui.item.usePerTurn", this.maxCastPerTurn) + ")"), e.push(t);
        var i = r("ui.common.range") + r("ui.common.colon");
        if (i += this.range === this.minRange ? this.range : this.minRange + " - " + this.range, e.push(i), this.criticalFailureProbability || this.criticalHitProbability) {
            var n = "";
            if (this.criticalHitProbability) {
                0 !== this.criticalHitBonus && e.push(r("ui.item.critical.bonus", this.criticalHitBonus)), n += r("ui.common.short.CriticalHit") + r("ui.common.colon") + this.criticalHitProbability + "%";
                var o = window.gui.playerData.characters.mainCharacter.characteristics;
                if (o) {
                    var a = s.totalCriticalHitRate(this.criticalHitProbability, o);
                    e.push(r("ui.itemtooltip.itemCriticalReal", a + "%"))
                }
            }
            this.criticalFailureProbability && (n += (this.criticalHitProbability ? " - " : "") + r("ui.common.short.CriticalFailure") + r("ui.common.colon") + this.criticalFailureProbability + "%"), e.push(n)
        }
        return this.range > 1 && (this.castInLine && e.push(r("ui.spellInfo.castInLine")), this.castInDiagonal && e.push(r("ui.spellInfo.castInDiagonal")), this.castTestLos || e.push(r("ui.spellInfo.castWithoutLos"))), e
    }, n.prototype.getConditionsFormatted = function(e) {
        return window.gui.criterionManager.evaluateAndFormatConditions(this.criteria, null, null, e)
    }, n.prototype.getTargetConditionsFormatted = function(e) {
        var t = "(" + r("ui.item.target") + ") ";
        return window.gui.criterionManager.evaluateAndFormatConditions(this.criteriaTarget, null, t, e)
    }, n.prototype.getSuperTypeId = function() {
        return this.type.superTypeId
    }, n.prototype.isEquippable = function() {
        return c.isEquippable(this.type.superTypeId)
    }, n.prototype.isCosmetic = function() {
        return this.typeId === p.types.cosmeticHat || this.typeId === p.types.cosmeticCape || this.typeId === p.types.cosmeticShield || this.typeId === p.types.cosmeticWeapon || this.typeId === p.types.cosmeticPet || this.typeId === p.types.cosmeticMount
    }, n.prototype.isMount = function() {
        return this.typeId === p.types.mount || this.typeId === p.types.cosmeticMount
    }, n.prototype.isShield = function() {
        return this.typeId === p.types.shield
    }, n.prototype.isShieldManageable = function() {
        return !1
    }, n.prototype.isLegendaryWeapon = function() {
        return this.typeId === p.types.cosmeticLegendaryWeapon
    }, n.prototype.isFullSoulStone = function() {
        return this.typeId === p.types.fullSoulStone
    }, n.prototype.getShieldLevel = function(e, t) {
        for (var i = 0; i < t.length; i += 1)
            if (t[i] < e) return i;
        return t.length
    };
    var b = [d.WEAPON, d.SHIELD, d.HAT, d.CAPE, d.PET, d.FOLLOWER, d.MOUNT, d.LIVING_OBJECT, d.SIDEKICK];
    n.prototype.isChangingCharacterLookWhenEquipped = function() {
        return b.indexOf(this.type.superTypeId) !== -1
    },
    n.prototype.getItem = function() {
        return this
    },
    n.prototype.getItemInstance = function() {
        return null
    },
    n.prototype.getProperty = function(e) {
        return "nameId" === e ? this.getName() : "statsFormatted" === e ? this._getStatsFormatted() : ("weight" === e && (e = "realWeight"), this.hasOwnProperty(e) ? this[e] : f[e])
    }
}
