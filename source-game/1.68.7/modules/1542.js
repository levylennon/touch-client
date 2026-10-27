function(e, t, i) {
    function n(e) {
        e.id = "textSpriteCount" + s++, r.call(this, e);
        var t = e.bitmapFont;
        t || (a.error(new Error("TextSprite: bitmapFont is empty for text ", e.text)), t = {}), this.characterDimensions = t.dimensions, this.texture = t.texture, this._characterByteSize = this.renderer.getNbBytesPerSprite(), this._bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)];
        var i = e.text;
        "number" == typeof i && (i = i.toString());
        for (var n = 0; n < i.length; n += 1) " " === i[n] || this.characterDimensions[i[n]] || (e.fallbackText || 0 === e.fallbackText ? (a.error(new Error("TextSprite: character " + i[n] + " not in bitmap font: using fallback text")), i = e.fallbackText, "number" == typeof i && (i = i.toString()), e.fallbackText = null, n = -1) : (a.error(new Error("TextSprite: character " + i[n] + ' not in bitmap font: replacing with a "."')), i = i.substr(0, n) + "." + i.substr(n + 1)));
        this.textWidth = 0, this.textHeight = 0;
        var o, c, l, d = 30;
        for (o = 0; o < i.length; o += 1) c = i[o], " " === c ? this.textWidth += d : (l = this.characterDimensions[c], this.textWidth += l.w, l.h > this.textHeight && (this.textHeight = l.h));
        var u = -this.textWidth / 2,
            p = -this.textHeight / 2;
        for (this._bbox[0] = u, this._bbox[1] = u + this.textWidth, this._bbox[2] = p, this._bbox[3] = p + this.textHeight, this.characterPositions = [], o = 0; o < i.length; o += 1)
            if (c = i[o], " " === c) u += d;
            else {
                l = this.characterDimensions[c];
                var h = (this.textHeight - l.h) / 2;
                this.characterPositions[o] = {
                    x: u,
                    y: p + h
                }, u += l.w
            } this._createVertexBuffer(i, e.color)
    }
    var o = i(56)
        .inherits,
        a = i(34)
        .logger,
        r = i(693),
        s = 0;
    o(n, r), e.exports = n, n.prototype._createVertexBuffer = function(e, t) {
        var i = e.length;
        this._vertexBuffer = new window.ArrayBuffer(i * this._characterByteSize), this._floatView = new window.Float32Array(this._vertexBuffer), this._longView = new window.Uint32Array(this._vertexBuffer);
        for (var n = this._floatView, o = this._longView, a = this._longView, r = this.texture.element.width, s = this.texture.element.height, c = 0; c < e.length; c += 1) {
            var l = e[c];
            if (" " !== l) {
                var d = this.characterPositions[c],
                    u = this.characterDimensions[l],
                    p = c * this._characterByteSize / 4,
                    h = d.x,
                    f = d.x + u.w,
                    b = d.y,
                    m = d.y + u.h;
                n[p + 0] = h, n[p + 1] = b, n[p + 5] = h, n[p + 6] = m, n[p + 10] = f, n[p + 11] = m, n[p + 15] = h, n[p + 16] = b, n[p + 20] = f, n[p + 21] = m, n[p + 25] = f, n[p + 26] = b;
                var M = u.x / r * 65535 & 65535,
                    g = u.y / s * 4294901760 & 4294901760,
                    _ = (u.x + u.w) / r * 65535 & 65535,
                    A = (u.y + u.h) / s * 4294901760 & 4294901760;
                o[p + 2] = M + g, o[p + 7] = M + A, o[p + 12] = _ + A, o[p + 17] = M + g, o[p + 22] = _ + A, o[p + 27] = _ + g;
                var O = 1077952576;
                a[p + 3] = a[p + 8] = a[p + 13] = O, a[p + 18] = a[p + 23] = a[p + 28] = O;
                var v = Math.max(-128, Math.min(127, 128 * t[0])),
                    y = Math.max(-128, Math.min(127, 128 * t[1])),
                    z = Math.max(-128, Math.min(127, 128 * t[2])),
                    w = Math.max(-128, Math.min(127, 128 * t[3])),
                    T = (w << 24 & 4278190080) + (z << 16 & 16711680) + (y << 8 & 65280) + (255 & v);
                a[p + 4] = a[p + 9] = a[p + 14] = T, a[p + 19] = a[p + 24] = a[p + 29] = T
            }
        }
        this.renderer.releaseBuffer(this.id), this.forceRefresh()
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
