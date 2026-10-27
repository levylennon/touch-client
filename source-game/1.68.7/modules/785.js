function(e, t, i) {
    function n() {
        a.call(this, "div"), this._currentServerLag(0);
        var e = this;
        window.gui.on("checkServerLag", function(t, i) {
            e.checkServerLag(t, i)
        })
    }
    i(786);
    var o = i(56)
        .inherits,
        a = i(72),
        r = 1500,
        s = 800;
    o(n, a), e.exports = n, n.prototype._currentServerLag = function(e) {
        e > r ? (this.setClassNames(["networkIndicator", "bad"]), console.debug("Current server lag is bad:", e)) : e > s ? this.setClassNames(["networkIndicator", "slow"]) : this.setClassNames(["networkIndicator", "good"])
    }, n.prototype.checkServerLag = function(e, t) {
        if ("start" === t) this.serverLagEventName = e, this.serverLagStart = Date.now();
        else if ("stop" === t) {
            if (this.serverLagEventName !== e) return;
            this._currentServerLag(Date.now() - this.serverLagStart), this.serverLagEventName = null
        } else console.warn("Invalid action emitted to checkServerLag", e, ":", t)
    }
}
