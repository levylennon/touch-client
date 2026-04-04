function(e, t, i) {
    var n = i(14);
    e.exports = function(e) {
        var t = n(),
            i = t.actorManager.getActor(e);
        if (!i) return !1;
        var o = i.getTeamId(),
            a = t.actorManager.userActor.getTeamId();
        return o === a || !i.isInvisible
    }
}
