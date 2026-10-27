function(e, t, i) {
    function n(e) {
        o.call(this, e), this._quest = null
    }
    var o = i(610),
        a = i(17)
        .getText,
        r = i(56)
        .inherits,
        s = i(611),
        c = i(130),
        l = i(34)
        .logger;
    r(n, o), n.prototype._getText = function() {
        return this._quest ? "Qa" === this.key ? this.operatorToken === s.equal ? a("ui.grimoire.quest.active", [this._quest.nameId]) : a("ui.grimoire.quest.notActive", [this._quest.nameId]) : "Qc" === this.key ? this.operatorToken === s.equal ? a("ui.grimoire.quest.startable", [this._quest.nameId]) : a("ui.grimoire.quest.notStartable", [this._quest.nameId]) : "Qf" === this.key ? this.operatorToken === s.equal ? a("ui.grimoire.quest.done", [this._quest.nameId]) : a("ui.grimoire.quest.notDone", [this._quest.nameId]) : "" : ""
    }, n.prototype._isRespected = function(e, t) {
        function i() {
            var e = window.gui.playerData.quests,
                i = !1;
            switch (n.key) {
                case "Qa":
                    i = e.active.hasOwnProperty(n.value);
                    break;
                case "Qc":
                    i = e.startable.hasOwnProperty(n.value) && !e.active.hasOwnProperty(n.value) && !e.finished.hasOwnProperty(n.value);
                    break;
                case "Qf":
                    i = e.finished.hasOwnProperty(n.value)
            }
            return t(n.operatorToken === s.equal ? i : !i)
        }
        var n = this;
        return c.getDataMap("Quests", [this.value], null, function(e, t) {
            return e ? (l.error("QuestItemCriterion#initialize", e), i()) : (t[n.value] ? n._quest = t[n.value] : l.error("QuestItemCriterion#initialize: cannot get questId", n.value), i())
        })
    }, e.exports = n
}
