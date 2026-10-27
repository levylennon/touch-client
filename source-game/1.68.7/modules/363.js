function(e, t, i) {
    function n(e) {
        if (e._bonesId) {
            var t = {
                contextualId: "paddockItem:" + e.cellId,
                look: {
                    bonesId: e._bonesId,
                    scales: [100],
                    skins: []
                },
                disposition: {
                    cellId: e.cellId,
                    direction: 1
                },
                name: e._nameId,
                durability: e.durability,
                _type: "PaddockObject"
            };
            window.actorManager.addActor(t)
        }
    }
    var o = i(105);
    o.on("MountEmoteIconUsedOkMessage", function(e) {
        var t = window.actorManager.getActor(e.mountId);
        if (t) {
            var i, n = e.reactionType;
            switch (n) {
                case 1:
                    i = "AnimEmoteRest_Statique_0";
                    break;
                case 2:
                    i = "AnimAttaque0";
                    break;
                case 3:
                    i = "AnimEmoteCaresse";
                    break;
                case 4:
                    i = "AnimEmoteReproductionF";
                    break;
                case 5:
                    i = "AnimEmoteReproductionM";
                    break;
                default:
                    return
            }
            t.loadAndPlayAnimation({
                base: i
            }, {
                loop: !1
            })
        }
    }), window.connectionManager = o, o.on("GameDataPaddockObjectAddMessage", function(e) {
        n(e.paddockItemDescription)
    }), o.on("GameDataPaddockObjectListAddMessage", function(e) {
        for (var t = e.paddockItemDescription, i = 0; i < t.length; i++) n(t[i])
    }), o.on("GameDataPaddockObjectListRemoveMessage", function(e) {
        e.cellIds.forEach(function(e) {
            window.actorManager.removeActor("paddockItem:" + e)
        })
    })
}
