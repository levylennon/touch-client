function(e, t) {
    t.setVisibility = function(e) {
        var t = window.actorManager,
            i = t.getActor(e.targetId);
        i && window.isoEngine.fightSequence.addAnimSequence(function(t) {
            return i.setInvisibility(e.state, i.getTeamId()), t()
        })
    }, t.vanish = function(e) {
        var t = window.actorManager,
            i = t.getActor(e.targetId);
        return i ? void window.isoEngine.fightSequence.addAnimSequence(function(n) {
            i.oneShootAnim({
                base: "AnimVanish"
            }, {
                backToStatic: !1
            }, function() {
                return t.removeActor(e.targetId), n()
            })
        }) : console.warn("No found actor with id " + e.targetId)
    }, t.detected = function(e) {
        var t = window.actorManager,
            i = t.getActor(e.targetId);
        if (!i) return console.error("No found actor with id " + e.targetId);
        var n = i.getFighterData(),
            o = t.userActor.getFighterData();
        n.teamId !== o.teamId && window.isoEngine.fightSequence.addAnimSequence(function(e) {
            return i.invisibleDetectedAnimation(), e()
        })
    }
}
