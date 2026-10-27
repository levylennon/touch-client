function(e, t, i) {
    function n(e) {
        r.call(this, e), this._updatedSprites = [], this._atlasTexture = null, this._spriteByteSize = this.renderer.getNbBytesPerSprite(), this._vertexBuffer = null, this._floatView = null, this._longView = null, this._sprites = [], this._vertexBufferCreated = !1, this._vertexBufferIndexPerPosition = new Array(c + 1)
    }

    function o(e, t, i) {
        s.call(this, e), this.batch = i, this.renderer = i.renderer;
        var n = e.cx || 0,
            o = e.cy || 0,
            a = e.x,
            r = e.y,
            c = e.sx || 1,
            l = e.sy || 1,
            d = e.cw,
            u = e.ch,
            p = -n * c,
            h = -o * l,
            f = (d - n) * c,
            b = -o * l,
            m = -n * c,
            M = (u - o) * l,
            g = (d - n) * c,
            _ = (u - o) * l,
            A = e.rotation || 0;
        if (0 !== A) {
            var O = Math.cos(A),
                v = Math.sin(A),
                y = p,
                z = f,
                w = m,
                T = g;
            p = p * O - h * v, h = y * v + h * O, f = f * O - b * v, b = z * v + b * O, m = m * O - M * v, M = w * v + M * O, g = g * O - _ * v, _ = T * v + _ * O
        }
        this.x0 = p + a, this.y0 = h + r, this.x1 = f + a, this.y1 = b + r, this.x2 = m + a, this.y2 = M + r, this.x3 = g + a, this.y3 = _ + r, this.bbox[0] = Math.min(this.x0, this.x1, this.x2, this.x3), this.bbox[1] = Math.max(this.x0, this.x1, this.x2, this.x3), this.bbox[2] = Math.min(this.y0, this.y1, this.y2, this.y3), this.bbox[3] = Math.max(this.y0, this.y1, this.y2, this.y3), this.graphicInAtlas = t, this.spriteIndex = 0
    }
    var a = i(56)
        .inherits,
        r = i(693),
        s = i(694),
        c = i(13)
        .NB_CELLS;
    a(n, r), e.exports = n, n.prototype.holdsStatics = !0, n.prototype.setTexture = function(e) {
        this._atlasTexture = e, this._updatedSprites.push(this), this.forceRefresh()
    }, n.prototype.draw = function(e, t) {
        if (null !== this._atlasTexture && !(e.layer > this.layer || t.layer < this.layer)) {
            var i;
            e.layer < this.layer ? i = 0 : (i = Math.round(e.position), i < 0 ? i = 0 : i > c && (i = c));
            var n;
            t.layer > this.layer ? n = c : (n = Math.round(t.position), n < 0 ? n = 0 : n > c && (n = c));
            var o = this._vertexBufferIndexPerPosition[i],
                a = this._vertexBufferIndexPerPosition[n];
            o !== a && this.renderer.drawSpriteSubBatch(this.id, o, a)
        }
    }, a(o, s), o.prototype.isWithinBounds = function(e, t) {
        return this.bbox[0] <= e && e <= this.bbox[1] && this.bbox[2] <= t && t <= this.bbox[3]
    }, o.prototype.render = function() {
        null !== this.batch._atlasTexture && this.renderer.drawSpriteSubBatch(this.batch.id, 6 * this.spriteIndex, 6 * this.spriteIndex + 6);
    }, o.prototype.forceRefresh = function() {
        this.isOutdated === !1 && (this.isOutdated = !0, this.batch._updatedSprites.push(this), this.batch.forceRefresh())
    }, n.prototype.addSprite = function(e, t) {
        var i = new o(e, t, this);
        return this._sprites.push(i), i
    }, n.prototype.finalize = function(e, t, i) {
        i = i || {}, i.sort && this._sortSprites(), this._createVertexBuffer(e, t), this._updatedSprites.push(this), this.forceRefresh()
    }, n.prototype._sortSprites = function() {
        this._sprites.sort(function(e, t) {
            return e._position - t._position
        })
    }, n.prototype.refreshAnimation = function(e) {
        if (this.isOutdated = !1, 0 !== this._updatedSprites.length) {
            for (var t = 0; t < this._updatedSprites.length; t += 1) {
                var i = this._updatedSprites[t];
                this._updateSpriteHighlight(i), void 0 !== e && e.push(i.bbox.slice()), i.isOutdated = !1
            }
            var n = this.id,
                o = this.renderer.getBufferData(n);
            if (void 0 === o) {
                var a = this._atlasTexture;
                if (null !== a && this._vertexBufferCreated) {
                    var r = this._floatView,
                        s = !1;
                    this.renderer.loadSpriteBuffer(n, r, a, this.bbox, s), this.renderer.lockBuffer(n)
                }
            }
            this._updatedSprites.length = 0
        }
    }, n.prototype._updateSpriteHighlight = function(e) {
        var t = e.spriteIndex * this._spriteByteSize,
            i = t / 4,
            n = this._longView.subarray(i, i + this._spriteByteSize / 4),
            o = e.tint,
            a = Math.max(-128, Math.min(127, 64 * o[0])),
            r = Math.max(-128, Math.min(127, 64 * o[1])),
            s = Math.max(-128, Math.min(127, 64 * o[2])),
            c = Math.max(-128, Math.min(127, 64 * o[3])),
            l = (c << 24 & 4278190080) + (s << 16 & 16711680) + (r << 8 & 65280) + (255 & a);
        n[3] = n[8] = n[13] = l, n[18] = n[23] = n[28] = l, this.renderer.updateVertexBuffer(this.id, n, t)
    }, n.prototype._createVertexBuffer = function(e, t) {
        this._vertexBuffer = new window.ArrayBuffer(this._spriteByteSize * this._sprites.length), this._floatView = new window.Float32Array(this._vertexBuffer), this._longView = new window.Uint32Array(this._vertexBuffer);
        for (var i = this._floatView, n = this._longView, o = this._longView, a = 1 / 0, r = -(1 / 0), s = 1 / 0, l = -(1 / 0), d = 0, u = 0; u < this._sprites.length; u += 1) {
            var p = this._sprites[u],
                h = p.graphicInAtlas,
                f = u * this._spriteByteSize / 4;
            for (p.spriteIndex = u; d < p._position;) this._vertexBufferIndexPerPosition[d] = 6 * u, d += 1;
            this._vertexBufferIndexPerPosition[d] = 6 * u + 6;
            var b = p.bbox;
            b[0] < a && (a = b[0]), b[1] > r && (r = b[1]), b[2] < s && (s = b[2]), b[3] > l && (l = b[3]), i[f + 0] = p.x0, i[f + 1] = p.y0, i[f + 5] = p.x2, i[f + 6] = p.y2, i[f + 10] = p.x3, i[f + 11] = p.y3, i[f + 15] = p.x0, i[f + 16] = p.y0, i[f + 20] = p.x3, i[f + 21] = p.y3, i[f + 25] = p.x1, i[f + 26] = p.y1;
            var m = h.sx / e * 65535 & 65535,
                M = h.sy / t * 4294901760 & 4294901760,
                g = (h.sx + h.sw) / e * 65535 & 65535,
                _ = (h.sy + h.sh) / t * 4294901760 & 4294901760;
            n[f + 2] = m + M, n[f + 7] = m + _, n[f + 12] = g + _, n[f + 17] = m + M, n[f + 22] = g + _, n[f + 27] = g + M;
            var A = p.tint,
                O = Math.max(-128, Math.min(127, 64 * A[0])),
                v = Math.max(-128, Math.min(127, 64 * A[1])),
                y = Math.max(-128, Math.min(127, 64 * A[2])),
                z = Math.max(-128, Math.min(127, 64 * A[3])),
                w = (z << 24 & 4278190080) + (y << 16 & 16711680) + (v << 8 & 65280) + (255 & O);
            o[f + 3] = o[f + 8] = o[f + 13] = w, o[f + 18] = o[f + 23] = o[f + 28] = w, o[f + 4] = o[f + 9] = o[f + 14] = 0, o[f + 19] = o[f + 24] = o[f + 29] = 0
        }
        for (; d <= c;) this._vertexBufferIndexPerPosition[d] = 6 * u, d += 1;
        this.bbox[0] = a, this.bbox[1] = r, this.bbox[2] = s, this.bbox[3] = l, this._vertexBufferCreated = !0
    }, n.prototype.clear = function() {
        this.renderer.releaseBuffer(this.id), this._atlasTexture && this._atlasTexture.release()
    }
}
