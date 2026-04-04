function(e, t) {
    function i(e, t) {
        if (this._logger = t, !this._logger || !this._logger.error) throw new Error("Need the logger.");
        this._store = e, this.definition = {
            country: "",
            currency: "",
            products: {}
        }
    }
    e.exports = i, i.prototype.addProduct = function(e) {
        if (e && e.state !== this._store.REGISTERED && e.state !== this._store.INVALID) {
            if (!e.priceMicros) return void this._logger.error(new Error("Product id: " + e.id + " has no micro prices, state: " + e.state));
            if (!e.price) return void this._logger.error(new Error("Product id: " + e.id + " has no prices, state: " + e.state));
            var t = {
                productId: e.id,
                description: e.description,
                priceMicros: e.priceMicros,
                price: e.price
            };
            this.definition.products[t.productId] = t, !this.definition.currency && e.currency && (this.definition.currency = e.currency), !this.definition.country && e.countryCode && (this.definition.country = e.countryCode), this.definition.currency && this.definition.currency !== e.currency && this._logger.error(new Error("Product id: " + e.id + " has a currency " + e.currency + " but we stored " + this.definition.currency))
        }
    }, i.prototype.getProductsRequest = function() {
        return this.definition
    }
}
