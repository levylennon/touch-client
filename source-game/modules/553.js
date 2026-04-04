function(e, t) {
    function i() {
        this._lastPopupTime = 0
    }
    e.exports = i, i.prototype.rememberPopupTime = function() {
        this._lastPopupTime = Date.now()
    }, i.prototype.getLastPopupTime = function() {
        return this._lastPopupTime
    }
}
