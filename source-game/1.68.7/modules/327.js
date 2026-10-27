function(e, t, i) {
    function n(e, t) {
        this.id = e, this.encodedData = t
    }
    var o = i(318);
    e.exports = n, n.prototype.getId = function() {
        return this.id
    }, n.prototype.getEncodedData = function() {
        return this.encodedData
    }, n.prototype.decode = function(e) {
        var t = this;
        o.getDecodedCertificate(this.encodedData, null, function(i, n) {
            return i ? e(i) : ("" === n && console.error(new Error("Unable to decode the certificate: " + t.encodedData)), e(null, {
                certificate_id: t.id,
                certificate_hash: n
            }))
        })
    }
}
