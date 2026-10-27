function(e, t, i) {
    function n(e) {
        e.id = "grid9ScaleCount" + r++, a.call(this, e), this._spriteByteSize = this.renderer.getNbBytesPerSprite(), this._bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)], this.controlPoints = e.controlPoints;
        var t = this.controlPoints[0],
            i = this.controlPoints[3];
        this.w = i.x - t.x, this.h = i.y - t.y, this._bbox[0] = t.x, this._bbox[1] = i.x, this._bbox[2] = t.y, this._bbox[3] = i.y, this.texture = e.texture, this._createVertexBuffer()
    }
    var o = i(56)
        .inherits,
        a = i(693),
        r = 0;
    o(n, a), e.exports = n, n.prototype._populateSpriteVertexBuffer = function(e, t, i, n, o, a, r, s, c) {
        var l = this._floatView,
            d = this._longView,
            u = this._longView,
            p = this.texture.element.width,
            h = this.texture.element.height,
            f = e * this._spriteByteSize / 4;
        l[f + 0] = t, l[f + 1] = a, l[f + 5] = t, l[f + 6] = s, l[f + 10] = n, l[f + 11] = s, l[f + 15] = t, l[f + 16] = a, l[f + 20] = n, l[f + 21] = s, l[f + 25] = n, l[f + 26] = a;
        var b = i / p * 65535 & 65535,
            m = o / p * 65535 & 65535,
            M = r / h * 4294901760 & 4294901760,
            g = c / h * 4294901760 & 4294901760;
        d[f + 2] = b + M, d[f + 7] = b + g, d[f + 12] = m + g, d[f + 17] = b + M, d[f + 22] = m + g, d[f + 27] = m + M;
        var _ = 1077952576;
        u[f + 3] = u[f + 8] = u[f + 13] = _, u[f + 18] = u[f + 23] = u[f + 28] = _
    }, n.prototype._createVertexBuffer = function() {
        this._vertexBuffer = new window.ArrayBuffer(9 * this._spriteByteSize), this._floatView = new window.Float32Array(this._vertexBuffer), this._longView = new window.Uint32Array(this._vertexBuffer);
        var e = this.controlPoints[0],
            t = this.controlPoints[1],
            i = this.controlPoints[2],
            n = this.controlPoints[3];
        this._populateSpriteVertexBuffer(0, e.x, e.u, t.x, t.u, e.y, e.v, t.y, t.v), this._populateSpriteVertexBuffer(1, t.x, t.u, i.x, i.u, e.y, e.v, t.y, t.v), this._populateSpriteVertexBuffer(2, i.x, i.u, n.x, n.u, e.y, e.v, t.y, t.v), this._populateSpriteVertexBuffer(3, e.x, e.u, t.x, t.u, t.y, t.v, i.y, i.v), this._populateSpriteVertexBuffer(4, t.x, t.u, i.x, i.u, t.y, t.v, i.y, i.v), this._populateSpriteVertexBuffer(5, i.x, i.u, n.x, n.u, t.y, t.v, i.y, i.v), this._populateSpriteVertexBuffer(6, e.x, e.u, t.x, t.u, i.y, i.v, n.y, n.v), this._populateSpriteVertexBuffer(7, t.x, t.u, i.x, i.u, i.y, i.v, n.y, n.v), this._populateSpriteVertexBuffer(8, i.x, i.u, n.x, n.u, i.y, i.v, n.y, n.v), this.renderer.releaseBuffer(this.id), this.forceRefresh()
    }, n.prototype.draw = function() {
        this.renderer.drawSpriteBatch(this.id)
    }, n.prototype.generateCurrentFrameData = function() {
        var e = this.renderer.getBufferData(this.id);
        if (void 0 === e) {
            var t = this._floatView,
                i = !1;
            this.renderer.loadSpriteBuffer(this.id, t, this.texture, this.bbox, i), this.renderer.lockBuffer(this.id)
        }
        return this._bbox
    }, n.prototype.clear = function() {
        this.renderer.releaseBuffer(this.id)
    }
}
