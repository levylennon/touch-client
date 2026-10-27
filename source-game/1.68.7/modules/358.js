function(e, t, i) {
    var n = i(105),
        o = i(342),
        a = i(343);
    n.on("GameContextRemoveElementMessage", function(e) {
        window.gui.fightManager.isInBattle() || window.actorManager.removeActor(e.id)
    }), n.on("GameContextRemoveMultipleElementsMessage", function(e) {
        window.actorManager.removeActors(e.id)
    }), n.on("GameContextRemoveElementWithEventMessage", function(e) {
        window.actorManager.removeActor(e.id)
    }), n.on("GameContextRemoveMultipleElementsWithEventsMessage", function(e) {
        window.actorManager.removeActors(e.id)
    }), n.on("GameContextRefreshEntityLookMessage", function(e) {
        window.actorManager.setActorLook(e.id, e.look, {}, null), window.gui.transmitMessage(e)
    }), n.on("GameMapNoMovementMessage", function() {
        window.isoEngine.noMovement()
    }), n.on("GameMapMovementMessage", function(e) {
        window.actorManager.actorMovement(e)
    }), n.on("GameMapRestrictedMovementMessage", function(e) {
        window.actorManager.actorMovement(e)
    }), n.on("GameMapChangeOrientationMessage", function(e) {
        window.actorManager.setActorsDisposition([e.orientation])
    }), n.on("GameMapChangeOrientationsMessage", function(e) {
        window.actorManager.setActorsDisposition(e.orientations)
    }), n.on("GameEntityDispositionMessage", function(e) {
        window.actorManager.setActorsDisposition([e.disposition])
    }), n.on("GameEntitiesDispositionMessage", function(e) {
        window.actorManager.setActorsDisposition(e.dispositions, !0)
    }), n.on("ShowCellMessage", function(e) {
        var t = {},
            i = 0;
        t[e.cellId] = new o(e.cellId, i, a.fullRed);
        var n = window.background.addGridAnimation(t);
        window.setTimeout(function() {
            window.background.removeGridLayer(n)
        }, 5e3)
    }), n.on("ShowCellSpectatorMessage", function(e) {
        for (var t = {}, i = 0, n = 0; n < e.cells.length; n++) {
            var r = e.cells[n];
            t[r] = new o(r, i, a.fullRed)
        }
        var s = window.background.addGridAnimation(t);
        window.setTimeout(function() {
            window.background.removeGridLayer(s)
        }, 5e3)
    })
}
