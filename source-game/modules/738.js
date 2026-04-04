function(e, t, i) {
    function n() {
        this.invulnerableState = !1, this.unhealableState = !1, this.isAccurate = !0, this.effectDamages = [], this._initProperties()
    }

    function o(e) {
        switch (e) {
            case r.NEUTRAL:
                return a.TEXT_COLOR.NEUTRAL;
            case r.EARTH:
                return a.TEXT_COLOR.EARTH;
            case r.FIRE:
                return a.TEXT_COLOR.FIRE;
            case r.WATER:
                return a.TEXT_COLOR.WATER;
            case r.AIR:
                return a.TEXT_COLOR.AIR;
            case r.PUSH:
                return a.TEXT_COLOR.PUSH;
            default:
                return a.TEXT_COLOR.MULTI
        }
    }
    var a = i(739),
        r = i(686),
        s = i(476),
        c = i(740),
        l = i(741);
    e.exports = n, n.prototype._initProperties = function() {
        this.damage = new l, this.lifePointsAdded = new l, this.lifePointsAddedBasedOnLifePercent = new l
    }, n.prototype.updateFromEffectDamage = function(e) {
        this.damage.addFromDamage(e.damage), this.lifePointsAdded.addFromDamage(e.lifePointsAdded), this.lifePointsAddedBasedOnLifePercent.addFromDamage(e.lifePointsAddedBasedOnLifePercent)
    }, n.prototype.updateDamage = function() {
        this._initProperties();
        for (var e = new c((-1), (-1), (-1), (-1)), t = 0; t < this.effectDamages.length; t++) {
            var i = this.effectDamages[t];
            i.random > 0 ? (e.damage.min = e.damage.min > 0 ? Math.min(e.damage.min, i.damage.min) : i.damage.min, e.damage.max = Math.max(e.damage.max, i.damage.max), e.damage.minCritical = e.damage.minCritical > 0 ? Math.min(e.damage.minCritical, i.damage.minCritical) : i.damage.minCritical, e.damage.maxCritical = Math.max(e.damage.maxCritical, i.damage.maxCritical), e.lifePointsAdded.min = e.lifePointsAdded.min > 0 ? Math.min(e.lifePointsAdded.min, i.lifePointsAdded.min) : i.lifePointsAdded.min, e.lifePointsAdded.max = Math.max(e.lifePointsAdded.max, i.lifePointsAdded.max), e.lifePointsAdded.minCritical = e.lifePointsAdded.minCritical > 0 ? Math.min(e.lifePointsAdded.minCritical, i.lifePointsAdded.minCritical) : i.lifePointsAdded.minCritical, e.lifePointsAdded.maxCritical = Math.max(e.lifePointsAdded.maxCritical, i.lifePointsAdded.maxCritical), e.lifePointsAddedBasedOnLifePercent.normal = e.lifePointsAddedBasedOnLifePercent.normal > 0 ? Math.min(e.lifePointsAddedBasedOnLifePercent.normal, i.lifePointsAddedBasedOnLifePercent.normal) : i.lifePointsAddedBasedOnLifePercent.normal) : this.updateFromEffectDamage(i)
        }
        this.updateFromEffectDamage(e)
    }, n.prototype.addEffectDamage = function(e) {
        e && this.effectDamages.push(e)
    }, n.prototype.getEffectDamageByNameId = function(e) {
        for (var t = 0; t < this.effectDamages.length; t++)
            if (this.effectDamages[t].nameId === e) return this.effectDamages[t];
        return null
    }, n.prototype.doesDamageOrHeal = function() {
        return this.damage.min > 0 || this.damage.max > 0 || this.damage.minCritical > 0 || this.damage.maxCritical > 0 || this.lifePointsAdded.min > 0 || this.lifePointsAdded.max > 0 || this.lifePointsAdded.minCritical > 0 || this.lifePointsAdded.maxCritical > 0
    }, n.prototype.toData = function(e, t) {
        for (var i = [], n = new l, c = null, d = !1, u = 0, p = 0; p < this.effectDamages.length; p++) {
            var h = this.effectDamages[p];
            if (!this.invulnerableState && h.random > 0 && h.doesDamage() && (i.push({
                    color: o(h.element),
                    content: this.getEffectString(h.damage, h.random)
                }), u = Math.max(u, h.damage.min), u = Math.max(u, h.damage.max), u = Math.max(u, h.damage.minCritical), u = Math.max(u, h.damage.maxCritical)), h.random <= 0) {
                var f = h.element;
                h.effectId !== s.ACTION_CHARACTER_PUSH && h.effectId !== s.ACTION_CHARACTER_PUSH_FORCE || (f = r.PUSH), f === -1 || f !== c && null !== c ? f !== -1 && f !== c && (c = -1) : c = f, n.min += h.damage.min, n.max += h.damage.max, n.minCritical += h.damage.minCritical, n.maxCritical += h.damage.maxCritical
            }
            h.type !== a.TYPE.HEAL && (d = !0)
        }
        u = Math.max(u, n.min), u = Math.max(u, n.max), u = Math.max(u, n.minCritical), u = Math.max(u, n.maxCritical), !this.invulnerableState && d && i.push({
            color: o(c),
            content: this.getEffectString(n, -1)
        });
        var b = a.TEXT_COLOR.HEAL,
            m = this.lifePointsAdded.clone();
        if (e && (m.min = Math.min(m.min, e.min), m.max = Math.min(m.max, e.max), m.minCritical = Math.min(m.minCritical, e.minCritical), m.maxCritical = Math.min(m.maxCritical, e.maxCritical)), m.min > 0 || m.max > 0 || m.minCritical > 0 || m.maxCritical > 0) {
            var M = this.getEffectString(m, -1);
            i.push({
                color: b,
                content: this.unhealableState ? window.gui.databases.SpellStates[76].nameId : M
            })
        }
        return {
            resultEffects: i,
            canDie: u >= t
        }
    }, n.prototype.getEffectString = function(e, t) {
        var i = e.clone();
        i.truncate();
        var n = "",
            o = String(i.min),
            a = String(i.max),
            r = String(i.minCritical),
            s = String(i.maxCritical);
        return this.isAccurate || (o = "±" + o, r = "±" + r, i.max && (a = "±" + a), i.maxCritical && (s = "±" + s)), n = i.min === i.max ? a : o + (0 !== i.max ? " - " + a : ""), (i.minCritical > 0 && i.min !== i.minCritical || i.maxCritical > 0 && i.max !== i.maxCritical) && (n += i.minCritical === i.maxCritical ? " (<b>" + s + "</b>)" : " (<b>" + r + (0 !== i.maxCritical ? " - " + s : "") + "</b>)"), t > 0 ? t + "% " + n : n
    }
}
