function(e, t, i) {
    function n(e) {
        a.call(this, e), this._boxes = e.boxes, this._hueContrast = e.hueContrast, this._boxByteSize = this.renderer.getNbBytesPerBox(), this._bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)], this._createVertexBuffer()
    }
    var o = i(56)
        .inherits,
        a = i(693);
    o(n, a), e.exports = n, n.prototype._createBox = function(e, t) {
        var i = this._boxes[e];
        this._expandToFitBox(i);
        var n = e * this._boxByteSize / 4;
        this._positions[n + 0] = i.x0, this._positions[n + 1] = i.y0, this._colorView[n + 3] = t, this._positions[n + 5] = i.x2, this._positions[n + 6] = i.y2, this._colorView[n + 8] = t, this._positions[n + 10] = i.x3, this._positions[n + 11] = i.y3, this._colorView[n + 13] = t, this._positions[n + 15] = i.x0, this._positions[n + 16] = i.y0, this._colorView[n + 18] = t, this._positions[n + 20] = i.x1, this._positions[n + 21] = i.y1, this._colorView[n + 23] = t, this._positions[n + 25] = i.x2, this._positions[n + 26] = i.y2, this._colorView[n + 28] = t
    }, n.prototype._createVertexBuffer = function() {
        var e = this._boxes.length;
        this._vertexBuffer = new window.ArrayBuffer(e * this._boxByteSize), this._positions = new window.Float32Array(this._vertexBuffer), this._colorView = new window.Uint32Array(this._vertexBuffer);
        var t = 1077952576,
            i = 943734848;
        if (this._hueContrast)
            for (var n = 0, o = !1, a = 0; a < e; a += 1) {
                var r = this._boxes[a];
                r.x0 > n ? (n = r.x0, this._createBox(a, o ? i : t)) : (n = 0, o = !o, this._createBox(a, o ? i : t))
            } else
                for (var s = 0; s < e; s += 1) this._createBox(s, t);
        this._bbox[0] += this._x, this._bbox[1] += this._x, this._bbox[2] += this._y, this._bbox[3] += this._y, this.renderer.releaseBuffer(this.id), this.forceRefresh()
    }, n.prototype.draw = function() {
        this.renderer.drawBoxBatch(this.id)
    }, n.prototype._expandToFitPoint = function(e, t) {
        this._bbox[0] > e && (this._bbox[0] = e), this._bbox[2] > t && (this._bbox[2] = t), this._bbox[1] < e && (this._bbox[1] = e), this._bbox[3] < t && (this._bbox[3] = t)
    }, n.prototype._expandToFitBox = function(e) {
        this._expandToFitPoint(e.x0, e.y0), this._expandToFitPoint(e.x1, e.y1), this._expandToFitPoint(e.x2, e.y2), this._expandToFitPoint(e.x3, e.y3)
    }, n.prototype.generateCurrentFrameData = function() {
        var e = this.renderer.getBufferData(this.id);
        if (void 0 === e) {
            var t = this.id,
                i = this._positions,
                n = !1;
            this.renderer.loadSpriteBuffer(t, i, null, this._bbox, n), this.renderer.lockBuffer(this.id)
        }
        return this._bbox
    }, n.prototype.clear = function() {
        this.renderer.releaseBuffer(this.id)
    }
}
