function(e, t, i) {
    function n(e) {
        e && console.error(e)
    }

    function o(e) {
        if (!e || "EffectInstanceInteger" !== e._type) return !1;
        switch (e.effectId) {
            case c.ACTION_FIGHT_SET_STATE:
                return !1;
            default:
                return !0
        }
    }

    function a(e, t, i, n, o, a, r) {
        var s = this;
        if (!e) return r && l.ensureAsync(function() {
            return r(new Error("No effect specified"))
        });
        this._disabled = !1, this._removed = !1, this.id = e.uid, this.uid = e.uid, this.actionId = i, this.targetId = e.targetId, this.castingSpell = t, this.visibleInBuffUI = !0, this.visibleInFightLog = !0, this._effectCaller = e.effectCaller, this._effectCaller || console.error(new Error("BB: No caller in the effect!")), this.duration = e.turnDuration, this.dispelable = e.dispelable, this.source = t.casterId, this.stack = [];
        var c = p(),
            d = c.gui.fightManager;
        if (d.isInReconnection || c.gui.playerData.isSpectator || 0 === d.currentFighterId) {
            var u = d.getFighter(this.source);
            u && u.isBomb ? this.aliveSource = this.targetId : this.aliveSource = this.source
        } else this.aliveSource = d.currentFighterId;
        this.parentBoostUid = 0, this.effectUid = e.effectId, this.spellLevelId = -1, this.effectUid === -1 ? this.initParam(n || 0, o || 0, a || 0, r) : f.getDataMap("SpellEffects", [this.effectUid], null, function(e, t) {
            var i = t && t[s.effectUid];
            e ? console.error("Unable to retrieve the effects visibility for " + s.effectUid + ", " + e) : i && (s.visibleInBuffUI = i.visibleInBuffUI, s.visibleInFightLog = i.visibleInFightLog, s.spellLevelId = i.spellLevelId), s.initParam(n || 0, o || 0, a || 0, r)
        })
    }

    function r(e) {
        switch (e) {
            case c.ACTION_CHARACTER_BOOST_WEAPON_DAMAGE_PERCENT:
                return !0;
            case c.ACTION_SUMMON_CREATURE:
                return !0;
            case c.ACTION_CHARACTER_EXECUTE_SPELL:
                return !0;
            case c.ACTION_CHARACTER_EXECUTE_SPELL_WITH_ANIMATION:
                return !0;
            case c.ACTION_FIGHT_SET_STATE:
                return !0;
            case c.ACTION_FIGHT_UNSET_STATE:
                return !0;
            case c.ACTION_FIGHT_DISABLE_STATE:
                return !0;
            case c.ACTION_CHARACTER_EXECUTE_SPELL_ON_SOURCE:
                return !0;
            case c.ACTION_SOURCE_EXECUTE_SPELL_ON_TARGET:
                return !0;
            case c.ACTION_SOURCE_EXECUTE_SPELL_ON_SOURCE:
                return !0;
            case c.ACTION_CASTER_EXECUTE_SPELL:
                return !0;
            case c.ACTION_CASTER_EXECUTE_SPELL_GLOBAL_LIMITATION:
                return !0;
            default:
                return !1
        }
    }
    var s, c = i(476),
        l = i(18),
        d = i(474),
        u = i(677),
        p = i(14),
        h = i(32),
        f = i(130),
        b = [c.ACTION_BOOST_SPELL_RANGE, c.ACTION_BOOST_SPELL_RANGEABLE, c.ACTION_BOOST_SPELL_DMG, c.ACTION_BOOST_SPELL_HEAL, c.ACTION_BOOST_SPELL_AP_COST, c.ACTION_BOOST_SPELL_CAST_INTVL, c.ACTION_BOOST_SPELL_CC, c.ACTION_BOOST_SPELL_CASTOUTLINE, c.ACTION_BOOST_SPELL_NOLINEOFSIGHT, c.ACTION_BOOST_SPELL_MAXPERTURN, c.ACTION_BOOST_SPELL_MAXPERTARGET, c.ACTION_BOOST_SPELL_CAST_INTVL_SET, c.ACTION_BOOST_SPELL_BASE_DMG, c.ACTION_DEBOOST_SPELL_RANGE, c.ACTION_CHARACTER_DISPELL_SPELL, 787, c.ACTION_CHARACTER_EXECUTE_SPELL, c.ACTION_CHARACTER_EXECUTE_SPELL_WITH_ANIMATION, c.ACTION_CHARACTER_EXECUTE_SPELL_ON_SOURCE, c.ACTION_SOURCE_EXECUTE_SPELL_ON_TARGET, c.ACTION_SOURCE_EXECUTE_SPELL_ON_SOURCE, c.ACTION_CHARACTER_ADD_SPELL_COOLDOWN, c.ACTION_CHARACTER_REMOVE_SPELL_COOLDOWN, 1044, 1045];
    e.exports = a, a.prototype.getParam1 = function() {
        return "EffectInstanceDice" === this.effect._type ? this.effect.getParams()[0] : null
    }, a.prototype.getParam2 = function() {
        return "EffectInstanceDice" === this.effect._type ? this.effect.getParams()[1] : null
    }, a.prototype.getParam3 = function() {
        return "EffectInstanceInteger" === this.effect._type ? this.effect.value : "EffectInstanceDice" === this.effect._type ? this.effect.getParams()[2] : null
    }, a.prototype._setParameter = function(e, t) {
        this.effect.setParameter(e, 0 === t ? null : t)
    }, a.prototype.setParam1 = function(e) {
        this._setParameter(0, e)
    }, a.prototype.setParam2 = function(e) {
        this._setParameter(1, e)
    }, a.prototype.setParam3 = function(e) {
        this._setParameter(2, e)
    }, a.prototype._effectEnrichment = function() {
        if (this.castingSpell.spell) {
            var e = this.getParam1() || 0,
                t = this.getParam2() || 0,
                i = this.getParam3() || 0;
            o(this.effect) && (e = i, i = 0);
            var n = this.castingSpell.spell.effectInstances;
            for (var a in n)
                if (n.hasOwnProperty(a)) {
                    var r = n[a];
                    if (this.actionId === r.effectId && e === r.diceNum && t === r.diceSide && i === r.value) {
                        this.effect.targetMask = this.effect.targetMask || r.targetMask,
                        this.effect.triggers = this.effect.triggers || r.triggers,
                        this.effect.rawZone = this.effect.rawZone || r.rawZone;
                        break
                    }
                }
        }
    }, a.prototype.initParam = function(e, t, i, o) {
        o || (o = n);
        var a = {
            effectId: this.actionId,
            duration: this.duration,
            trigger: this.isTrigger(),
            value: i,
            hidden: !1,
            targetMask: this.targetMask,
            triggers: this.triggers,
            rawZone: this.rawZone,
            effectCaller: this._effectCaller
        };
        if (e || t) a.diceNum = e, a.diceSide = t;
        else switch (a.effectId) {
            case c.ACTION_CHARACTER_DISPELL_SPELL:
                a.diceNum = 0, a.diceSide = 0
        }
        var r = this,
            s = d.createEffectInstances([a], function(e) {
                return e ? o(e) : (r._effectEnrichment(), o(null, r))
            });
        this.effect = s[0], this.stack.push(this.clone())
    }, a.prototype.updateParam = function(e, t, i, o) {
        switch (o || (o = n), this.actionId) {
            case c.ACTION_CHARACTER_PUNISHMENT:
                this.setParam1(t);
                break;
            case 169:
            case 107:
            case 220:
            case 265:
            case 950:
            case 951:
                break;
            default:
                this.setParam1(e), this.setParam2(t), this.setParam3(i)
        }
        this.refreshDescription(o)
    }, a.prototype._checkBasicEquality = function(e) {
        var t = this.castingSpell.spellRank && e.castingSpell.spellRank && this.castingSpell.spellRank.id !== e.castingSpell.spellRank.id,
            i = this.isTrigger() && this.duration,
            n = this.targetId !== e.targetId || this.effect.effectId !== e.actionId || this.effectUid !== e.effectUid || this.duration !== e.duration || this.effect.hasOwnProperty("delay") && this.effect.delay !== e.effect.delay || t || this.castingSpell.spell.id !== e.castingSpell.spell.id || this.constructor !== e.constructor || this.source !== e.source || this.isTrigger() && !i;
        return !n
    }, a.prototype.equals = function(e) {
        if (!this._checkBasicEquality(e)) return !1;
        var t = this.actionId;
        return !r(t) && ((t !== c.ACTION_CHARACTER_PUNISHMENT || this.getParam1() === e.getParam1()) && ((b.indexOf(t) === -1 || this.getParam1() === e.getParam1()) && !(t === e.actionId && (t === c.ACTION_FIGHT_DISABLE_STATE || t === c.ACTION_FIGHT_UNSET_STATE || t === c.ACTION_FIGHT_SET_STATE) && this instanceof s && e instanceof s && this.stateId !== e.stateId)))
    }, a.prototype.apply = function() {
        this._disabled = !1, this._removed = !1
    }, a.prototype.remove = function() {
        this._removed = !0, this._disabled || this.disable()
    }, a.prototype.unstack = function(e, t) {
        t || (t = n);
        for (var i = -1, o = 0; o < this.stack.length; o += 1) {
            var a = this.stack[o];
            if (a.uid === e) {
                i = o;
                break
            }
        }
        if (i !== -1) {
            this.stack.splice(i, 1);
            var r = 0,
                s = 0,
                c = 0,
                l = this.stack[0];
            l && (r = l.getParam1(), s = l.getParam2(), c = l.getParam3()), this.setParam1(r), this.setParam2(s), this.setParam3(c);
            for (var d = this.stack.splice(1) || [], u = 0; u < d.length; u += 1) {
                var p = d[u];
                this.addBuff(p)
            }
            return l ? this.refreshDescription(t) : t()
        }
    }, a.prototype.enable = function() {
        this._disabled = !1
    }, a.prototype.disable = function() {
        this._disabled = !0
    }, a.prototype.incrementDuration = function(e, t) {
        return !(t && !this.canBeDispell()) && (!(this.duration >= 63) && (this.duration + e > 0 ? (this.duration += e, this.effect.duration += e, !0) : this.duration > 0 && (this.duration = 0, this.effect.duration = 0, !0)))
    }, a.prototype.isActive = function() {
        return 0 !== this.duration
    }, a.prototype.isTrigger = function() {
        return !1
    }, a.prototype.canBeDispell = function(e, t, i) {
        if (t = void 0 === t ? Number.MIN_VALUE : t, t === this.id) return !0;
        switch (this.dispelable) {
            case u.DISPELLABLE:
                return !0;
            case u.DISPELLABLE_BY_STRONG_DISPEL:
                return e;
            case u.DISPELLABLE_BY_DEATH:
                return i || e;
            case u.REALLY_NOT_DISPELLABLE:
                return t === this.id;
            default:
                return !1
        }
    }, a.prototype.updateBuff = function(e) {
        this.stack.length > 0 ? (this.unstack(e.uid), this.addBuff(e)) : this.remove(), this.updateParam(this.getParam1(), this.getParam2(), this.getParam3()), this.apply()
    }, a.prototype.addBuff = function(e, t) {
        t || (t = n);
        var i = this.castingSpell.spellRank && this.castingSpell.spellRank.maxStack > 0,
            o = i && this.stack && this.stack.length >= this.castingSpell.spellRank.maxStack;
        if (o) return t();
        switch (this.stack.push(e.clone()), this.actionId) {
            case c.ACTION_BOOST_SPELL_RANGE:
            case c.ACTION_BOOST_SPELL_RANGEABLE:
            case c.ACTION_BOOST_SPELL_DMG:
            case c.ACTION_BOOST_SPELL_HEAL:
            case c.ACTION_BOOST_SPELL_AP_COST:
            case c.ACTION_BOOST_SPELL_CAST_INTVL:
            case c.ACTION_BOOST_SPELL_CC:
            case c.ACTION_BOOST_SPELL_NOLINEOFSIGHT:
            case c.ACTION_BOOST_SPELL_MAXPERTURN:
            case c.ACTION_BOOST_SPELL_MAXPERTARGET:
                this.setParam1(e.getParam1()), this.setParam2(e.getParam2()), this.setParam3(this.getParam3() + e.getParam3());
                break;
            case 293:
                this.setParam1(e.getParam1()), this.setParam2(this.getParam2() + e.getParam2()), this.setParam3(this.getParam3() + e.getParam3());
                break;
            case c.ACTION_CHARACTER_PUNISHMENT:
                this.setParam1(this.getParam1() + e.getParam2());
                break;
            case c.ACTION_CHARACTER_MULTIPLY_RECEIVED_DAMAGE:
                var a = this.getParam1(),
                    s = 100 - e.getParam1();
                this.setParam1(a - s);
                break;
            default:
                r(this.actionId) || (this.setParam1(this.getParam1() + e.getParam1()), this.setParam2(this.getParam2() + e.getParam2()), this.setParam3(this.getParam3() + e.getParam3()))
        }
        return this.refreshDescription(t)
    }, a.prototype.isUnusableNextTurn = function() {
        if (this.duration > 1 || this.duration < 0) return !1;
        var e = p(),
            t = e.gui.fightManager,
            i = e.gui.playerData.id,
            n = t.currentFighterId;
        if (n === i || n === this.source) return !1;
        var o = t.turnsList,
            a = o.indexOf(i),
            r = o.indexOf(n),
            s = o.indexOf(this.source);
        return s < r && (s += o.length), a < r && (a += o.length), !(a < s)
    }, a.prototype.refreshDescription = function(e) {
        this.effect.forceDescriptionRefresh(e)
    }, e.exports.setStateBuff = function(e) {
        s = e
    }, a.prototype.getDelta = function() {
        return console.warn("BasicBuff.prototype.getDelta should not be called directly"), 0
    }, a.prototype._copyTo = function(e) {
        var t = h.getOwnProperties(this)
            .filter(function(e) {
                return "effect" !== e
            });
        h.shallowCopyProperties(this, e, t), this.effect && (e.effect = this.effect.clone())
    }, a.prototype.clone = function() {
        var e = new a;
        return this._copyTo(e), e
    }
}
