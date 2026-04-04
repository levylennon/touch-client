function(e, t, i) {
    function n(e, t) {
        o.call(this, "div", {
            className: "TimedBuffSlot"
        });
        var i = this;
        e === r.ANTI_AGGRO && (i.addClassNames("antiAggro"), c.addTooltip(this, l("tablet.buff.nonAggroDesc"))), this._endTime = t, this._createDom(), this.emit("resized"), this.updateInterval = d.setInterval(function() {
            i._update()
        }, 1e3), this.on("tooltipOn", this._removeHoverStyle), this.on("tooltipOut", this._applyHoverStyle)
    }
    i(931);
    var o = i(72),
        a = i(56)
        .inherits,
        r = i(932),
        s = i(21),
        c = i(88),
        l = i(17)
        .getText,
        d = i(30);
    a(n, o), e.exports = n, n.prototype._update = function() {
        var e = this._endTime - s.now();
        if (e < 0) return void this._onFinished();
        var t = Math.floor(e / 6e4),
            i = Math.floor(e / 1e3 - 60 * t);
        this.timedBuffSlotCounter.setText(s.leadWithZero(t) + ":" + s.leadWithZero(i))
    }, n.prototype._onFinished = function() {
        this.emit("onTimerFinished"), d.clearInterval(this.updateInterval)
    }, n.prototype.setEndTime = function(e) {
        this._endTime = e
    }, n.prototype._createDom = function() {
        this.timedBuffSlotCounter = this.createChild("div", {
            className: "timedBuffSlotCounter"
        })
    }, n.prototype._applyHoverStyle = function() {
        this.setStyle("webkitTransform", "scale(1)")
    }, n.prototype._removeHoverStyle = function() {
        this.setStyle("webkitTransform", "scale(1.1)")
    }
}
