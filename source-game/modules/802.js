function(e, t, i) {
    function n(e) {
        this._inventory = e, this._bankCache = new o("bankCache", o.PER_SERVER, (!0)), this._mountCache = new o("mountCache", o.PER_CHARACTER)
    }
    var o = i(803);
    e.exports = n, n.prototype.connect = function() {
        var e = window.gui.playerData,
            t = e.identification.accountId,
            i = window.gui.serversData.connectedServerId,
            n = e.id;
        this._bankCache.load(t, i, n), this._mountCache.load(t, i, n)
    }, n.prototype.getItemCounts = function(e) {
        return [this._inventory.getQuantityOfAnItem(e) || 0, this._bankCache.getItemCount(e), this._mountCache.getItemCount(e)]
    }, n.prototype.setBankItems = function(e) {
        this._bankCache.setItems(e)
    }, n.prototype.updateBankItems = function(e) {
        this._bankCache.updateItems(e)
    }, n.prototype.removeBankItems = function(e) {
        this._bankCache.removeItems(e)
    }, n.prototype.setMountItems = function(e) {
        this._mountCache.setItems(e)
    }, n.prototype.updateMountItems = function(e) {
        this._mountCache.updateItems(e)
    }, n.prototype.removeMountItems = function(e) {
        this._mountCache.removeItems(e)
    }
}
