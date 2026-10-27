function(e, t, i) {
    var n = i(105);
    n.on("PaddockSellBuyDialogMessage", function(e) {
        window.gui.transmitMessage(e)
    }), n.on("GameDataPlayFarmObjectAnimationMessage", function(e) {
        for (var t = 0; t < e.cellId.length; t++) {
            var i = "paddockItem:" + e.cellId[t],
                n = window.actorManager.getActor(i);
            n && n.loadAndPlayAnimation({
                base: "AnimHit",
                direction: 1
            }, {
                loop: !1
            })
        }
    })
}
