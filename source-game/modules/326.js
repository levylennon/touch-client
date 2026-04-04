function(e, t) {
    e.exports = function(e) {
        return !(null == e || !e.constructor || "function" != typeof e.constructor.isBuffer || !e.constructor.isBuffer(e))
    }
}
