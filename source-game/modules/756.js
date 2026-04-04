function(e, t, i) {
    var n = i(36)
        .EventEmitter,
        o = i(56)
        .inherits,
        a = i(60),
        r = function() {
            this.userPrefKey = null, this.followedQuests = {}
        };
    o(r, n), r.prototype.init = function() {
        var e = this,
            t = window.gui;
        t.playerData.on("characterSelectedSuccess", function() {
            e.userPrefKey = t.playerData.id + "-followedQuests", e.followedQuests = a.getValue(e.userPrefKey, {})
        }), t.on("disconnect", this._clear)
    }, r.prototype._clear = function() {
        this.userPrefKey = null, this.followedQuests = {}
    }, r.prototype._save = function() {
        a.setValue(this.userPrefKey, this.followedQuests)
    }, r.prototype.followQuest = function(e, t) {
        var i = window.gui,
            n = i.playerData.quests.active[e];
        return n ? (this.followedQuests[e] = !0, this._save(), n.objectives ? void(t && i.GPS.addQuestNextObjective(e)) : console.warn("followQuest: quest id " + e + " has no objectives")) : console.warn("followQuest: quest id " + e + " is not active")
    }, r.prototype.unfollowQuest = function(e, t) {
        delete this.followedQuests[e], this._save(), t && window.gui.GPS.removeQuestObjectives(e)
    }, r.prototype.unfollowAllQuests = function() {
        var e = window.gui,
            t = e.playerData.quests.active;
        for (var i in t) e.GPS.removeQuestObjectives(i);
        this.followedQuests = {}, this._save()
    }, r.prototype.isQuestFollowed = function(e) {
        return Boolean(this.followedQuests[e])
    }, e.exports = new r
}
