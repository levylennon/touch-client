function(e, t) {
    function i(e) {
        e === window.actorManager.userId && window.gui.fightManager.isFightersTurn(e) && window.isoEngine.displayUserMovementZone()
    }

    function n(e) {
        e === window.actorManager.userId && window.isoEngine.clearUserMovementZone()
    }
    var o = 200;
    t.mapMovement = function(e) {
        window.isoEngine.fightSequence.addAnimSequence(function(t) {
            n(e.actorId), window.actorManager.actorMovement(e, function() {
                t()
            })
        }, function() {
            window.actorManager.abortActorMovement(e.actorId)
        })
    }, t.slideMovement = function(e) {
        e.startCellId !== -1 && e.endCellId !== -1 && window.isoEngine.fightSequence.addAnimSequence(function(t) {
            n(e.actorId), window.actorManager.actorMovement({
                actorId: e.targetId,
                keyMovements: [e.startCellId, e.endCellId],
                slide: !0
            }, t)
        }, function() {
            window.actorManager.abortActorMovement(e.targetId)
        })
    }, t.teleport = function(e) {
        if (e.cellId !== -1) {
            var t = window.actorManager.getActor(e.targetId);
            t && window.isoEngine.fightSequence.addAnimSequence(function(n) {
                setTimeout(function() {
                    return t.setDisposition(e.cellId), i(e.targetId), n()
                }, o)
            })
        }
    }, t.exchangePositions = function(e) {
        var t = window.actorManager.getActor(e.sourceId),
            n = window.actorManager.getActor(e.targetId);
        window.isoEngine.fightSequence.addAnimSequence(function(a) {
            setTimeout(function() {
                return t && t.setDisposition(e.casterCellId), n && n.setDisposition(e.targetCellId), i(e.sourceId), i(e.targetId), a()
            }, o)
        })
    }
}
