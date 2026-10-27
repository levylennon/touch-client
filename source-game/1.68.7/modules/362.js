function(e, t, i) {
    var n = i(105);
    n.on("GameFightShowFighterMessage", function(e) {
        window.gui.transmitMessage(e), e.informations.alive ? window.actorManager.addActor(e.informations) : window.actorManager.userActor.actorId === e.informations.contextualId && window.actorManager.userActor.loadAndPlayAnimation({
            base: "AnimMort"
        }, {
            loop: !1
        }, function() {
            window.actorManager.userActor.death()
        })
    }), n.on("GameFightRefreshFighterMessage", function(e) {
        window.gui.transmitMessage(e), window.actorManager.refreshFighter(e)
    }), n.on("GameFightShowFighterRandomStaticPoseMessage", function(e) {
        window.gui.transmitMessage(e), window.actorManager.addActor(e.informations)
    })
}
