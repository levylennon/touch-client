function(e, t, i) {
    function n(e) {
        e = e || {}, this._basePtsToAssign = e.basePtsToAssign || 0, this._initialLevel = e.initialLevel || 0, this._additionalPtsToAssign = e.additionalPtsToAssign || 0, this._initialAdditionalPts = e.initialAdditionalPts || 0, this._isAdditionalPtsAssignMode = e.isAdditionalPtsAssignMode || !1, this._costSteps = e.costSteps, this._isAdditionalPtsAssignMode = e.isAdditionalPtsAssignMode || !1, this._canAssignAdditionalPts = !0, (this._additionalPtsToAssign <= 0 || this._initialAdditionalPts >= a.MAX_ADDITIONNAL_PER_CARAC) && (this._canAssignAdditionalPts = !1), this._costSteps || (this._costSteps = [], o.error(new Error("CharaUpdateModule: params costSteps is missing"))), this._currentCostStep = 0, this._pointsSpent = 0, this._addedLevel = 0, this._initializeSteps()
    }
    var o = i(34)
        .logger,
        a = i(112),
        r = 0,
        s = 1;
    e.exports = n, n.prototype._initializeSteps = function() {
        var e = this.getCostSteps();
        this._currentCostStep = 0;
        for (var t = 0; t < e.length; t++) this.getInitialLevel() >= e[t][r] && (this._currentCostStep = t)
    }, n.prototype.getPtsToAssign = function() {
        return {
            base: this._basePtsToAssign,
            additional: this._additionalPtsToAssign
        }
    }, n.prototype.getMaxRemainingPts = function() {
        return this._isAdditionalPtsAssignMode ? this._additionalPtsToAssign : this._basePtsToAssign
    }, n.prototype.canAssignAdditionalPts = function() {
        return this._canAssignAdditionalPts
    }, n.prototype.isAdditionalPtsAssignMode = function() {
        return this._isAdditionalPtsAssignMode
    }, n.prototype.getCostSteps = function() {
        return this._costSteps
    }, n.prototype.getInitialLevel = function() {
        return this._isAdditionalPtsAssignMode ? this._initialAdditionalPts : this._initialLevel
    }, n.prototype.getCurrentCostStep = function() {
        return this._currentCostStep
    }, n.prototype.getSpentPts = function() {
        return this._pointsSpent
    }, n.prototype.getCharacIncreasePts = function() {
        return this._addedLevel
    }, n.prototype.incrementPts = function() {
        return this._updatePoints(1)
    }, n.prototype.incrementToMaxPts = function() {
        return this.spendPointsUntil(this.getMaxRemainingPts())
    }, n.prototype.resetPts = function() {
        return this.spendPointsUntil(0)
    }, n.prototype.decrementPts = function() {
        return this._updatePoints(-1)
    }, n.prototype.spendPointsUntil = function(e) {
        var t = this.getCostSteps();
        if (e - this._pointsSpent > 0)
            for (; this._pointsSpent < e;) {
                var i = t[this._currentCostStep][s];
                if (this._pointsSpent + i > e) break;
                if (!this.incrementPts()) break
            } else
                for (; this._pointsSpent > e && this.decrementPts(););
    }, n.prototype._updatePoints = function(e) {
        var t = this.getCostSteps(),
            i = t[this._currentCostStep],
            n = i[s];
        if (e > 0) {
            if (this._pointsSpent + n > this.getMaxRemainingPts()) return !1;
            if (this._isAdditionalPtsAssignMode && this.getInitialLevel() + this._addedLevel >= a.MAX_ADDITIONNAL_PER_CARAC) return !1;
            this._pointsSpent += n, i.length > 2 ? this._addedLevel += i[2] : this._addedLevel++;
            var o = t[this._currentCostStep + 1];
            o && this.getInitialLevel() + this._addedLevel >= o[r] && this._currentCostStep++
        } else {
            if (!this._pointsSpent) return !1;
            this.getInitialLevel() + this._addedLevel <= i[r] && (this._currentCostStep--, i = t[this._currentCostStep], n = i[s]), this._pointsSpent -= n, i.length > 2 ? this._addedLevel -= i[2] : this._addedLevel--
        }
        return !0
    }
}
