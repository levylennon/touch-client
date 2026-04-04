function(e, t, i) {
    function n(e, t, i, n) {
        this.nameId = e, this.effectId = t, this.element = i, this.random = n, this.type = a.TYPE.NORMAL, this.origin = a.ORIGIN.NONE, this.efficiencyMultiplier = 0, this.erosionLifePoints = 0, this.damage = new r, this.damageWithoutResist = new r, this.erosionPercent = new r, this.lifePointsAdded = new r, this.lifePointsAddedBasedOnLifePercent = new r
    }
    var o = i(32),
        a = i(739),
        r = i(741);
    e.exports = n, n.prototype.clone = function() {
        var e = new n,
            t = o.getOwnProperties(this);
        return o.shallowCopyProperties(this, e, t), e.damage = this.damage.clone(), e.erosionPercent = this.erosionPercent.clone(), e.lifePointsAdded = this.lifePointsAdded.clone(), e.lifePointsAddedBasedOnLifePercent = this.lifePointsAddedBasedOnLifePercent.clone(), e
    }, n.prototype.doesDamage = function() {
        return this.damage.min > 0 || this.damage.max > 0 || this.damage.minCritical > 0 || this.damage.maxCritical > 0
    }, n.prototype.doesHeal = function() {
        return this.lifePointsAdded.min > 0 || this.lifePointsAdded.max > 0 || this.lifePointsAdded.minCritical > 0 || this.lifePointsAdded.maxCritical > 0
    }, n.prototype.applyHealMultiplier = function(e) {
        this.lifePointsAdded.applyMultiplier(e)
    }, n.prototype.applyDamageMultiplier = function(e) {
        this.damage.applyMultiplier(e), this.damageWithoutResist.applyMultiplier(e)
    }, n.prototype.convertDamageToHeal = function() {
        this.lifePointsAdded.addFromDamage(this.damage), this.damage.reset(), this.damageWithoutResist.reset(), this.type = a.TYPE.HEAL
    }
}
