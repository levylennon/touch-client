function(e, t, i) {
    function n(e) {
        o.call(this, e), this._stepName = ""
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(611),
        c = i(130);
    r(n, o), e.exports = n, n.prototype._isRespected = function(e, t) {
        function i() {
            return n.operatorToken === s.inferior ? t(n.getCriterion() <= n.value) : o.prototype._isRespected.call(n, e, t)
        }
        var n = this;
        return c.getDataMap("QuestSteps", [this.value], null, function(e, t) {
            return e ? (console.error("QuestStepCriterion#initialize", e), i()) : (t[n.value] ? n._stepName = t[n.value].nameId : console.error("QuestStepCriterion#initialize: cannot get stepId", n.value), i())
        })
    }, n.prototype.getCriterion = function() {
        var e = window.gui.playerData.quests,
            t = -1;
        for (var i in e.all) {
            var n = e.all[i],
                o = n.dbQuest.stepIds.indexOf(this.value);
            if (o !== -1) {
                if (n.finishedCount >= 1) t = this.value + 1;
                else {
                    var a = n.dbQuest.stepIds.indexOf(n.stepId);
                    t = this.value + (a - o)
                }
                break
            }
        }
        return t
    }, n.prototype._getText = function() {
        switch (this.operatorToken) {
            case s.superior:
                return a("ui.grimoire.steps.done", this._stepName);
            case s.inferior:
                return a("ui.grimoire.steps.notDone", this._stepName);
            case s.different:
                return a("ui.grimoire.steps.notActive", this._stepName);
            default:
                return a("ui.grimoire.steps.active", this._stepName)
        }
    }
}
