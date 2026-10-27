function(e, t, i) {
    function n() {
        a.call(this, {
            className: "ContextualMenuFightMonsterSwap"
        }), this.actorId = 0, this.once("open", this._setupDom), this.on("open", this._setContent)
    }
    i(459);
    var o = i(56)
        .inherits,
        a = i(450),
        r = i(17)
        .getText;
    o(n, a), e.exports = n, n.prototype._setupDom = function() {
        var e = this;
        this._addEntry(r("ui.fight.swapPosition"), function() {
            var t = window.actorManager.getActor(e.actorId);
            t && window.dofus.sendMessage("GameFightPlacementSwapPositionsRequestMessage", {
                cellId: t.cellId,
                requestedId: e.actorId
            }), e.emit("close")
        }), this._addCancel()
    }, n.prototype._setContent = function(e, t) {
        this.actorId = e.actorId, t()
    }
}
