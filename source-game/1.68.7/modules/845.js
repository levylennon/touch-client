function(e, t, i) {
    function n() {
        o.call(this), this._reset()
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = i(846);
    a(n, o),
        e.exports = n, n.prototype.disconnect = function() {
            this._reset()
        }, n.prototype._reset = function() {
            this.zaapList = [], this.shouldListentToZaapListMessage = !0
        }, n.prototype.initialize = function(e) {
            var t = this;
            e.on("ZaapListMessage", function(e) {
                t.createZaapList(e)
            })
        }, n.prototype.setListenToZaapListMessage = function(e) {
            this.shouldListentToZaapListMessage = e
        }, n.prototype.shouldListenToZaapListMessage = function() {
            return this.shouldListentToZaapListMessage
        }, n.prototype.createZaapList = function(e) {
            this.zaapList = [];
            for (var t = e._subAreas.length, i = 0; i < t; i += 1) {
                var n = e._maps[i],
                    o = e.destTeleporterType[i],
                    a = e.costs[i];
                this.zaapList.push({
                    type: o,
                    posX: n.posX,
                    posY: n.posY,
                    mapId: n.id,
                    cost: a
                })
            }
            this.emit("zaapListCreated")
        }, n.prototype.getZaapList = function() {
            return this.zaapList
        }, n.prototype.getTeleporter = function(e, t) {
            for (var i in this.zaapList) {
                var n = this.zaapList[i];
                if (n.posX === e && n.posY === t) return n
            }
            return {}
        }, n.prototype.isZaapOrPrism = function(e, t) {
            var i = this.getTeleporter(e, t);
            return i.type === r.TELEPORTER_ZAAP || i.type === r.TELEPORTER_PRISM
        }, n.prototype.getZaapOrPrismCost = function(e, t) {
            var i = this.getTeleporter(e, t);
            return i.cost || -1
        }
}
