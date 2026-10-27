function(e, t) {
    function i(e) {
        var t = this,
            i = window.gui,
            n = i.GPS;
        this._lastWorld = null, this._worldMap = e, n.on("addPOI", function(e) {
            var n = i.playerData.position.worldmapId;
            n === e.worldMapId && (t._worldMap.hasIcon(e.id) || (t._worldMap.isLoading() ? t._worldMap.once("loaded", function() {
                t._worldMap.addIcon(e, e.iconId)
            }) : t._worldMap.addIcon(e, e.iconId)))
        }), n.on("removePOI", function(e) {
            t._worldMap.hasIcon(e.id) && t._worldMap.removeIcon(e.id)
        }), n.on("updatePOI", function(e) {
            t._worldMap.hasIcon(e.id) && (t._worldMap.removeIcon(e.id), t._worldMap.addIcon(e, e.iconId))
        })
    }
    e.exports = i, i.prototype.updatePois = function() {
        var e = window.gui,
            t = e.GPS,
            i = e.playerData.position.worldmapId;
        if (this._lastWorld !== i) {
            var n = t.getPOIs(this._lastWorld);
            for (var o in n) this._worldMap.hasIcon(o) && this._worldMap.removeIcon(o);
            n = t.getPOIs();
            for (o in n)
                if (!this._worldMap.hasIcon(o)) {
                    var a = n[o];
                    this._worldMap.addIcon(a, a.iconId)
                } this._lastWorld = i
        }
    }
}
