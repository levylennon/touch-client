function(e, t, i) {
    function n() {
        var e = {
            scene: window.isoEngine.mapScene,
            position: 1,
            hue: [0, 0, 0, 0],
            layer: -1,
            id: "gridFeedbackOverlay"
        };
        a.call(this, e), this._bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)], this._boxByteSize = this.renderer.getNbBytesPerBox(), this.createGrid(), this.forceRefresh(), this._updated = !1
    }
    var o = i(1507),
        a = i(693),
        r = i(56)
        .inherits,
        s = i(13),
        c = i(913),
        l = i(1176),
        d = s.CELL_WIDTH,
        u = s.CELL_HEIGHT,
        p = d / 2,
        h = u / 2;
    r(n, a), e.exports = n, n.prototype.createGrid = function() {
        this.spriteBoxes = [], this._vertexBuffer = new window.ArrayBuffer(s.NB_CELLS * this._boxByteSize);
        for (var e = 0; e < s.NB_CELLS; e++) {
            var t = c.cellCoord[e],
                i = t.x,
                n = i - p,
                a = i + p,
                r = t.y - s.GRID_ALTITUDE_OFFSET,
                d = r + h,
                f = r + u,
                b = new l(i, r, a, d, i, f, n, d),
                m = e * this._boxByteSize,
                M = new window.Float32Array(this._vertexBuffer, m, this._boxByteSize / 4),
                g = new window.Uint32Array(this._vertexBuffer, m, this._boxByteSize / 4),
                _ = new o(e, b, M, g, this);
            this.spriteBoxes[_.cellId] = _
        }
    }, n.prototype._expandToFitPoint = function(e, t) {
        this._bbox[0] > e && (this._bbox[0] = e), this._bbox[1] < e && (this._bbox[1] = e), this._bbox[2] > t && (this._bbox[2] = t), this._bbox[3] < t && (this._bbox[3] = t)
    }, n.prototype._expandToFitBox = function(e) {
        this._expandToFitPoint(e.x0, e.y0), this._expandToFitPoint(e.x1, e.y1), this._expandToFitPoint(e.x2, e.y2), this._expandToFitPoint(e.x3, e.y3)
    }, n.prototype.draw = function() {
        this.renderer.drawBoxBatch(this.id)
    }, n.prototype.render = function() {
        this.renderer.save(), this.draw(this.renderer), this.renderer.restore()
    }, n.prototype.remove = function() {}, n.prototype.generateCurrentFrameData = function() {
        this._updated && (this.renderer.releaseBuffer(this.id), this._updated = !1);
        var e = this.renderer.getBufferData(this.id);
        if (void 0 === e) {
            var t = this.id,
                i = !1;
            this.renderer.loadSpriteBuffer(t, this._vertexBuffer, null, this._bbox, i), this.renderer.lockBuffer(this.id)
        }
        return this._bbox
    }, n.prototype.clear = function() {
        this.renderer.releaseBuffer(this.id)
    }
}
