function(e, t) {
    function i() {
        this.reachable = [], this.unreachable = [], this.costMP = 0, this.costAP = 0, this.reachableMap = {}, this.unreachableMap = {}
    }
    e.exports = i, i.prototype.addNode = function(e, t, i) {
        t.reachable ? (this.reachable.push(e), this.reachableMap[e] = i) : (this.unreachable.push(e), this.unreachableMap[e] = i), this.costMP = t.costMP, this.costAP = t.costAP
    }
}
