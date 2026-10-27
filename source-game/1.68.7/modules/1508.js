function(e, t, i) {
    function n(e, t) {
        this.cellInfos = e, this._gridOverlay = t, this.bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)],
            this._listReference = null
    }
    var o = i(430)
        .Delay;
    e.exports = n, n.prototype.playAnimation = function(e) {
        for (var t = -(1 / 0), i = this._gridOverlay.spriteBoxes, n = Object.keys(this.cellInfos), a = 0; a < n.length; a++) {
            var r = n[a],
                s = this.cellInfos[r],
                c = i[r],
                l = s.transformState;
            if (c.transformState !== l) {
                var d = c.animate(l, .6 * s.distanceToPlayer);
                t < d && (t = d), this._expandToFitBox(c)
            }
        }
        if (e) {
            if (t <= 0) return e();
            new o(t, e)
                .start()
        }
    }, n.prototype._expandToFitPoint = function(e, t) {
        this.bbox[0] > e && (this.bbox[0] = e), this.bbox[2] > t && (this.bbox[2] = t), this.bbox[1] < e && (this.bbox[1] = e), this.bbox[3] < t && (this.bbox[3] = t)
    }, n.prototype._expandToFitBox = function(e) {
        this._expandToFitPoint(e._x0, e._y0), this._expandToFitPoint(e._x1, e._y1), this._expandToFitPoint(e._x2, e._y2), this._expandToFitPoint(e._x3, e._y3)
    }
}
