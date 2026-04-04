function(e, t) {
    function i(e) {
        if (this._logger = e, !this._logger || !this._logger.error) throw new Error("Need the logger.");
        this.definition = {
            country: "",
            currency: "",
            products: {}
        }
    }
    e.exports = i, i.prototype.addProduct = function(e, t) {
        if (t) {
            var i = t.pricing || {};
            if (!i.priceMicros) return void this._logger.error(new Error("Product id: " + t.id + " has no micro prices"));
            if (!i.price) return void this._logger.error(new Error("Product id: " + t.id + " has no prices"));
            var n = {
                productId: t.id,
                description: t.description,
                priceMicros: i.priceMicros.toString(),
                price: i.price
            };
            if (!this.definition.currency && i.currency && (this.definition.currency = i.currency), this.definition.currency && this.definition.currency !== i.currency) {
                var o = "Product id: " + t.id + " has a currency " + i.currency + " but we stored ";
                return o += this.definition.currency, void this._logger.error(new Error(o))
            }
            this.definition.products[n.productId] = n
        }
    }, i.prototype.getProductsRequest = function() {
        return this.definition
    }
}
