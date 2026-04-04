function(e, t, i) {
    function n(e) {
        a.call(this, e, e.animManager), this.animStatic = Boolean(e.astc), this.delayMin = e.dmin || 0, this.delayMax = e.dmax || 0, this._timeout = null, this._stopped = !0
    }
    var o = i(56)
        .inherits,
        a = i(692),
        r = {
            id: "AnimStatique_0",
            base: "AnimStatique",
            direction: 0
        },
        s = {
            id: "AnimStart_0",
            base: "AnimStart",
            direction: 0
        };
    o(n, a), e.exports = n, n.prototype.animate = function() {
        this._stopped && (this._stopped = !1, this.delayMax ? (this.animStatic && this.animManager.assignSymbol(r, !1), this._animateShoot()) : this._animateLoop())
    }, n.prototype.stop = function() {
        this._stopped = !0, this._timeout && (window.clearTimeout(this._timeout), this._timeout = null), this.delayMax || this.animManager.assignSymbol(r, !1)
    }, n.prototype.remove = function() {
        this.stop(), a.prototype.remove.call(this)
    }, n.prototype._animateLoop = function() {
        this.animManager.assignSymbol(s, !0)
    }, n.prototype._animateShoot = function() {
        var e = this;
        if (!this._stopped) {
            var t = 1e3 * (this.delayMin + (this.delayMax - this.delayMin) * Math.random());
            this._timeout = window.setTimeout(function() {
                e._stopped || e.animManager.assignSymbol(s, !1, function() {
                    e._stopped || (e.animStatic && e.animManager.assignSymbol(r, !1), e._animateShoot())
                })
            }, t)
        }
    }
}
