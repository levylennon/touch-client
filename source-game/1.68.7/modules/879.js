function(e, t, i) {
    function n() {
        this.exoticEffects = {}
    }

    function o(e, t) {
        var i, n, o, a, r = [],
            s = e.favoriteSubAreas || [],
            c = window.gui.playerData.position.subAreaId,
            l = t.effects || [];
        if (s.indexOf(c) === -1) return r;
        for (var d = 0; d < l.length; d += 1) i = l[d], n = i.effect.bonusType, 1 === n && (o = Math.floor(i.value * e.favoriteSubAreasBonus / 100), o && (a = i.clone(), a.setParameter(2, o), a.forceDescriptionRefresh(), r.push(a)));
        return r
    }
    var a = i(469)
        .ItemInstance,
        r = i(477),
        s = i(34)
        .logger,
        c = i(476),
        l = [c.ACTION_CHARACTER_BOOST_CRITICAL_HIT, c.ACTION_CHARACTER_BOOST_MAXIMUM_SUMMONED_CREATURES];
    n.prototype.addLostStats = function(e, t, i) {
        var n = this;
        return void 0 === i && (i = !0), e = e.filter(function(e) {
            return !(e.effect && 0 !== e.effect.bonusType && 0 === e.value)
        }), t.forEach(function(t) {
            t.isLost = !1;
            for (var o = {}, a = !0, r = !1, s = 0; s < e.length; s += 1)
                if (t.effectId && t.effectId === e[s].effectId) {
                    a = !1, o = e[s];
                    break
                } a && t.effectId && t.effect && 0 !== t.effect.bonusType ? (t.isLost = !0, i ? t.setDescription([0]) : 0 !== t.diceSide && t.diceSide > t.diceNum && t.setDescription([t.diceNum, t.diceSide]), t.isOver = !1, e.push(t)) : (r = n._checkForOver(o), o.isOver = r)
        }), e
    }, n.prototype._getEffectInstances = function(e, t, i) {
        var n = t && t.effects,
            a = e.possibleEffects,
            r = n && n.length > 0,
            s = a && a.length > 0;
        if (r || s) {
            var c, l;
            if (t) i && (n = this.addLostStats(n, a)), c = n.concat(o(e, t)), l = !t.objectUID;
            else {
                if (!s) return;
                c = a, l = !0
            }
            if (c.forEach(function(e) {
                    for (var t = 0; t < a.length; t += 1)
                        if (e && e.effectId && e.effectId === a[t].effectId) {
                            e.effect && 0 !== e.effect.bonusType && (e.diceNum = a[t].diceNum, e.diceSide = a[t].diceSide);
                            break
                        }
                }), c = c.filter(function(e) {
                    return e && e.effect && !e.isLivingProperty
                }), this.exoticEffects = {}, !l && !e.hideEffects && e.enhanceable)
                for (var d = 0; d < c.length; d += 1) {
                    var u = c[d].effect;
                    if (u && u.showInSet && a) {
                        for (var p = !0, h = 0; h < a.length; h += 1)
                            if (u.id === a[h].effectId) {
                                p = !1;
                                break
                            } this.exoticEffects[u.id] = p
                    }
                }
            return c
        }
    }, n.prototype.sortEffects = function(e) {
        function t(e, t) {
            var i = e.effect,
                n = t.effect;
            return a.exoticEffects[i.id] ? -1 : a.exoticEffects[n.id] ? 1 : i.category === n.category && n.category === r.damage ? 0 : i.effectPriority - n.effectPriority
        }
        var i, n, o, a = this,
            s = e.sort(t),
            c = [r.damage, r.miscellaneous, r.resistance, r.special],
            l = {};
        for (i = 0; i < s.length; i += 1)
            if (o = s[i].effect, o.category !== r.undefined && 812 !== o.id) {
                a.exoticEffects[o.id] && (s[i].isExotic = !0);
                var d = o.showInSet ? o.category : r.special;
                l[d] || (l[d] = []), l[d].push(s[i])
            } var u = [];
        for (i = 0; i < c.length; i += 1) {
            var p = l[c[i]];
            if (p)
                for (n = 0; n < p.length; n += 1) {
                    var h = p[n];
                    u.push(h)
                }
        }
        return u
    }, n.prototype.getSortedEffectInstances = function(e, t) {
        var i = e instanceof a ? e : null,
            n = i && i.item || e,
            o = this._getEffectInstances(n, i, t);
        return o ? this.sortEffects(o) : []
    }, n.prototype._checkForOver = function(e) {
        if (e = e || {}, !e.effect) return !1;
        var t = e.value,
            i = e.diceNum,
            n = e.diceSide,
            o = e.effect.operator,
            a = !1;
        switch (o) {
            case "+":
                var r = l.indexOf(e.effectId) !== -1;
                i < n && (a = t > n), 0 === n && r && (a = t > i);
                break;
            case "-":
                i = -i, t = -t, a = t > i;
                break;
            case "null":
            case "/":
                break;
            default:
                s.error(new Error("Unknown operator " + o + " for effectId " + e.effectId))
        }
        return a
    }, e.exports = new n
}
