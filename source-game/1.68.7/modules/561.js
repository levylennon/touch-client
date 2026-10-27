function(e, t, i) {
    function n(e, t) {
        this.inventory = e, this.filterFunc = t, this._startListening()
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits;
    a(n, o), e.exports = n, n.prototype._startListening = function() {
        this.inventory.on("listUpdate", this._onReset.bind(this)), this.inventory.on("itemsAdded", this._onMapOfItemAdded.bind(this)), this.inventory.on("itemAdded", this._onItemAdded.bind(this)), this.inventory.on("itemDeleted", this._onItemRemoved.bind(this)), this.inventory.on("itemsDeleted", this._onMapOfItemRemoved.bind(this)), this.inventory.on("itemQuantity", this._onQuantityChanged.bind(this)), this.inventory.on("itemsQuantity", this._onMapOfQuantityChanged.bind(this)), this.inventory.on("itemModified", this._onItemChanged.bind(this))
    }, n.prototype._onReset = function(e) {
        this.emit("itemsCleared"), this._onMapOfItemAdded(e)
    }, n.prototype._onItemAdded = function(e) {
        this.filterFunc && !this.filterFunc(e) || this.emit("itemAdded", e)
    }, n.prototype._onMapOfItemAdded = function(e) {
        for (var t in e) this._onItemAdded(e[t])
    }, n.prototype._onItemRemoved = function(e, t) {
        this.filterFunc && !this.filterFunc(t) || this.emit("itemRemoved", t)
    }, n.prototype._onMapOfItemRemoved = function(e, t) {
        for (var i in t) this._onItemRemoved(i, t[i])
    }, n.prototype._onQuantityChanged = function(e, t, i) {
        var n = this.inventory.objects[e];
        if (!this.filterFunc || this.filterFunc(n)) return !t || !i || i < 0 ? console.error("invalid quantity change from " + i + " to " + t) : void this.emit("itemQuantityChanged", n, i)
    }, n.prototype._onMapOfQuantityChanged = function(e, t) {
        for (var i in e) this._onQuantityChanged(i, e[i], t[i])
    }, n.prototype._onItemChanged = function(e) {
        this.filterFunc && !this.filterFunc(e) || this.emit("itemChanged", e)
    }
}
