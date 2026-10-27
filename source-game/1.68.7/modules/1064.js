function(e, t, i) {
    function n(e) {
        e = e || {}, e.className = ["targetMonsterButton"];
        var t;
        e.monsterId && this.isAlreadyTargeted(e.monsterId) !== -1 && e.className.push("on"), e.monsterId && (t = function() {
            r.setValue("targetedMonsterList", this.addTargetedMonster(e.monsterId))
        }), a.call(this, e, t)
    }
    var o = i(56)
        .inherits,
        a = i(86),
        r = i(60),
        s = i(588),
        c = i(17)
        .getText,
        l = i(13);
    o(n, a), e.exports = n, n.prototype.addTargetedMonster = function(e) {
        var t = this.isAlreadyTargeted(e),
            i = r.getValue("targetedMonsterList", []);
        return t === -1 ? i.length < l.MAX_MONSTERS_TARGETED ? (i.push(e), this.toggleClassName("on", !0)) : s.showNotification(c("ui.targetMonster.maxReached", l.MAX_MONSTERS_TARGETED), this) : (i.splice(t, 1), this.toggleClassName("on", !1)), i
    }, n.prototype.isAlreadyTargeted = function(e) {
        var t = r.getValue("targetedMonsterList", []);
        return t.length > 0 ? t.indexOf(e) : -1
    }
}
