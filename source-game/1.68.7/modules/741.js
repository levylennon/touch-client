function(e, t) {
    function i(e, t, i, n) {
        this.min = e || 0, this.max = t || 0, this.minCritical = i || 0, this.maxCritical = n || 0, Object.defineProperty(this, "normal", {
            get: function() {
                return this.min
            },
            set: function(e) {
                this.min = e, this.max = e
            }
        }), Object.defineProperty(this, "critical", {
            get: function() {
                return this.minCritical
            },
            set: function(e) {
                this.minCritical = e, this.maxCritical = e
            }
        })
    }
    e.exports = i, i.prototype.applyMultiplier = function(e) {
        this.min *= e, this.max *= e, this.minCritical *= e, this.maxCritical *= e
    }, i.prototype.reset = function() {
        this.min = 0, this.max = 0, this.minCritical = 0, this.maxCritical = 0
    }, i.prototype.resetCritical = function() {
        this.minCritical = 0, this.maxCritical = 0
    }, i.prototype.clone = function() {
        return new i(this.min, this.max, this.minCritical, this.maxCritical)
    }, i.prototype.truncate = function() {
        this.min = ~~this.min, this.max = ~~this.max, this.minCritical = ~~this.minCritical, this.maxCritical = ~~this.maxCritical
    }, i.prototype.addFromDamage = function(e) {
        this.min += e.min, this.max += e.max, this.minCritical += e.minCritical, this.maxCritical += e.maxCritical
    }, i.prototype.substractFromDamage = function(e) {
        this.min -= e.min, this.max -= e.max, this.minCritical -= e.minCritical, this.maxCritical -= e.maxCritical
    }, i.prototype.addFrom = function(e) {
        this.min += e, this.max += e, this.minCritical += e, this.maxCritical += e
    }, i.prototype.unsignedNumber = function() {
        this.min = Math.max(0, this.min), this.max = Math.max(0, this.max), this.minCritical = Math.max(0, this.minCritical), this.maxCritical = Math.max(0, this.maxCritical)
    }, i.prototype.convertToCritical = function() {
        this.minCritical = this.min, this.maxCritical = this.max, this.min = 0, this.max = 0
    }
}
