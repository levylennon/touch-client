function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "PerformanceOverlay",
            hidden: !0
        }), this._init = !1, this._initDom()
    }
    i(1430);
    var o = i(56)
        .inherits,
        a = i(72);
    o(n, a), e.exports = n, n.prototype._initDom = function() {
        this._init || (this.fps = this.createChild("div", {
            className: "fps"
        }), this.gameMemory = this.createChild("div", {
            className: "gameMemory"
        }), this._init = !0)
    }, n.prototype.refresh = function(e, t) {
        var i = t && t.percentage || 0;
        this.fps.setText("FPS: " + e), this.gameMemory.setText("Engine cache used: " + i + "%")
    }, n.prototype.display = function(e) {
        this.toggleDisplay(e)
    }
}
