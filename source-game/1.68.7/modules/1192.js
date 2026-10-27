function(e, t) {
    function i() {
        this.clear()
    }
    e.exports = i, i.prototype.clear = function() {
        this._prisms = {}, this._emptyPrisms = {}, this._activePrisms = {}, this._changingPrisms = {}
    }, i.prototype.setPrisms = function(e) {
        this._changingPrisms = e;
        for (var t = Object.keys(e), i = 0; i < t.length; i++) {
            var n = e[t[i]];
            this._prisms[n.subAreaId] = n, "PrismGeolocalizedInformation" === n._type ? this._activePrisms[n.subAreaId] = n : this._emptyPrisms[n.subAreaId] = n
        }
    }, i.prototype.updatePrisms = function(e) {
        this._changingPrisms = {};
        for (var t = Object.keys(e), i = 0; i < t.length; i++) {
            var n = e[t[i]],
                o = n.subAreaId,
                a = this._prisms[n.subAreaId];
            "PrismGeolocalizedInformation" === n._type ? ((!a || a.mapId !== n.mapId || a.worldX !== n.worldX || a.worldY !== n.worldY || a.subAreaId !== n.subAreaId || a.prism.state !== n.prism.state || a.prism.alliance && n.prism.alliance && a.prism.alliance.allianceTag !== n.prism.alliance.allianceTag) && (this._changingPrisms[n.subAreaId] = n), this._activePrisms[o] = n, delete this._emptyPrisms[o]) : (this._emptyPrisms[o] = n, delete this._activePrisms[o]), this._prisms[n.subAreaId] = n
        }
    }, i.prototype.forEachChangingActivePrism = function(e) {
        for (var t = Object.keys(this._changingPrisms), i = 0; i < t.length; i++) {
            var n = this._changingPrisms[t[i]];
            this._activePrisms[n.subAreaId] && e(n)
        }
    }, i.prototype.forEachActivePrism = function(e, t) {
        for (var i = Object.keys(this._prisms), n = 0; n < i.length; n++) {
            var o = this._prisms[i[n]];
            o.prism && (null !== t && void 0 !== t && o.prism.state !== t || e(this._prisms[i[n]]))
        }
    }, i.prototype.forEachEmptyPrism = function(e) {
        for (var t = Object.keys(this._emptyPrisms), i = 0; i < t.length; i++) e(this._emptyPrisms[t[i]])
    }, i.prototype.forEachPrism = function(e) {
        for (var t = Object.keys(this._prisms), i = 0; i < t.length; i++) e(this._prisms[t[i]])
    }
}
