function(e, t) {
    function i(e, t) {
        this.x = e, this.y = t
    }
    e.exports = i, i.prototype.plus = function(e) {
        return new i(this.x + e.x, this.y + e.y)
    }, i.prototype.copy = function() {
        return new i(this.x, this.y)
    }
}
