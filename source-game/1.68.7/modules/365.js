function(e, t, i) {
    function n(e) {
        window.gui.transmitMessage(e), r === e.mapId ? window.isoEngine.reloadMap(e) : (o.lockMessages(), window.isoEngine.loadMap(e)), r = e.mapId
    }
    var o = i(105),
        a = i(91),
        r = null;
    o.on("disconnect", function() {
        r = null
    }), o.on("CurrentMapMessage", function(e) {
        o.sendMessage("MapInformationsRequestMessage", {
            mapId: e.mapId
        }), e.mapId !== r && (window.foreground.lock("loadMap"), window.gui.transmitMessage(e), a.release())
    }), o.on("TeleportOnSameMapMessage", function(e) {
        window.actorManager.setActorsDisposition([{
            id: e.targetId,
            cellId: e.cellId
        }])
    }), o.on("MapFightCountMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("MapRunningFightListMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("MapRunningFightDetailsMessage", function(e) {
        window.gui.transmitMessage(e)
    }), o.on("MapObstacleUpdateMessage", function(e) {
        window.isoEngine.updateObstacles(e.obstacles)
    }), o.on("MapComplementaryInformationsDataMessage", n), o.on("MapComplementaryInformationsDataInHouseMessage", n), o.on("MapComplementaryInformationsWithCoordsMessage", n), o.on("MapComplementaryInformationsWithObstacleOverride", n), o.on("GameRolePlayShowActorMessage", function(e) {
        window.actorManager.addActor(e.informations)
    }), o.on("GameRolePlayShowActorListMessage", function(e) {
        e.informations.forEach(function(e) {
            window.actorManager.addActor(e)
        })
    })
}
