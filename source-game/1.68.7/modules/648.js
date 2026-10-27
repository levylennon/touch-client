function(e, t, i) {
    function n(e) {
        o.call(this, e), this._stepId = null
    }
    var o = i(610),
        a = i(56)
        .inherits,
        r = i(130),
        s = i(649),
        c = i(17)
        .getText,
        l = i(611);
    a(n, o), n.prototype._isRespected = function(e, t) {
        function i() {
            return n.operatorToken === l.inferior ? t(n.getCriterion() <= n.value) : o.prototype._isRespected.call(n, e, t)
        }
        var n = this;
        return r.getDataMap("QuestObjectives", [this.value], null, function(e, t) {
            return e ? (console.error(new Error("QuestObjectiveCriterion#initialize", e)), i()) : (n._stepId = t[n.value] && t[n.value].stepId, i())
        })
    }, n.prototype.getCriterion = function() {
        var e = window.gui.playerData.quests,
            t = -1;
        if (!this._stepId) return t;
        for (var i in e.all) {
            var n = e.all[i];
            if (n.dbObjectives && n.dbObjectives[this.value]) {
                if (n.finishedCount >= 1) {
                    t = this.value + 1;
                    break
                }
                for (var o = 0; o < n.objectives.length; o++) {
                    var a = n.objectives[o];
                    if (a.objectiveId === this.value) {
                        t = a.objectiveStatus === s.FINISHED ? this.value + 1 : this.value;
                        break
                    }
                }
                break
            }
            if (n.dbQuest && n.dbQuest.stepIds && n.dbQuest.stepIds.indexOf(this._stepId) !== -1) {
                t = this.value + 1;
                break
            }
        }
        return t
    }, n.prototype._getText = function() {
        var e = this.stringValue,
            t = window.gui.playerData.quests;
        for (var i in t.all) {
            var n = t.all[i];
            if (n && n.dbObjectives && n.dbObjectives[this.value]) {
                for (var o = 0; o < n.objectives.length; o++) {
                    var a = n.objectives[o];
                    if (a && a.objectiveId === this.value) {
                        e = a.text;
                        break
                    }
                }
                break
            }
        }
        switch (this.operatorToken) {
            case l.superior:
                return c("ui.grimoire.objective.done", e);
            case l.inferior:
                return c("ui.grimoire.objective.notDone", e);
            case l.different:
                return c("ui.grimoire.objective.notActive", e);
            default:
                return c("ui.grimoire.objective.active", e)
        }
    }, e.exports = n
}
