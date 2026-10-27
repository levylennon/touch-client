function(e, t, i) {
    function n() {
        o.call(this), this.playerHouses = []
    }
    var o = i(59),
        a = i(17)
        .getText,
        r = i(16),
        s = i(56)
        .inherits;
    s(n, o), e.exports = n, n.prototype.initialize = function(e) {
        this._setupListeners(e)
    }, n.prototype.getHouseByMapInterior = function(e) {
        var t = {};
        return this.playerHouses.forEach(function(i) {
            i.interiorMaps.forEach(function(n) {
                n === e && (t = i)
            })
        }), t
    }, n.prototype.getHouseByInstanceId = function(e) {
        var t = {};
        return this.playerHouses.forEach(function(i) {
            i.houseId === e && (t = i)
        }), t
    }, n.prototype._setupListeners = function(e) {
        var t = this;
        window.dofus.connectionManager.on("AccountHouseMessage", function(e) {
            e.houses.forEach(function(e) {
                t.playerHouses.push(e)
            })
        }), window.dofus.connectionManager.on("HouseSoldMessage", function(t) {
            e.playerData.identification.uniqueNickname.toString() !== t.buyerName && e.chat.logMsg(a("ui.common.houseSold", r.kamasToString(t.realPrice, "")))
        })
    }
}
