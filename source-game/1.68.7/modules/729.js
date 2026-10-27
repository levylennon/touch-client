function(e, t, i) {
    function n(e, t, i, n) {
        var o = n.vertexPos,
            a = n.textureCoord,
            r = n.color;
        e[i + 0] = o[0], e[i + 1] = o[1], t[i + 2] = (65535 * a[0] & 65535) + (4294901760 * a[1] & 4294901760), e[i + 5] = o[4], e[i + 6] = o[5], t[i + 7] = (65535 * a[0] & 65535) + (4294901760 * a[3] & 4294901760), e[i + 10] = o[6], e[i + 11] = o[7], t[i + 12] = (65535 * a[2] & 65535) + (4294901760 * a[3] & 4294901760), e[i + 15] = o[0], e[i + 16] = o[1], t[i + 17] = (65535 * a[0] & 65535) + (4294901760 * a[1] & 4294901760), e[i + 20] = o[6], e[i + 21] = o[7], t[i + 22] = (65535 * a[2] & 65535) + (4294901760 * a[3] & 4294901760), e[i + 25] = o[2], e[i + 26] = o[3], t[i + 27] = (65535 * a[2] & 65535) + (4294901760 * a[1] & 4294901760);
        var s = Math.max(-128, Math.min(127, 64 * r[0])),
            c = Math.max(-128, Math.min(127, 64 * r[1])),
            l = Math.max(-128, Math.min(127, 64 * r[2])),
            d = Math.max(-128, Math.min(127, 64 * r[3])),
            u = Math.max(-128, Math.min(127, 128 * r[4])),
            p = Math.max(-128, Math.min(127, 128 * r[5])),
            h = Math.max(-128, Math.min(127, 128 * r[6])),
            f = Math.max(-128, Math.min(127, 128 * r[7])),
            b = (d << 24 & 4278190080) + (l << 16 & 16711680) + (c << 8 & 65280) + (255 & s),
            m = (f << 24 & 4278190080) + (h << 16 & 16711680) + (p << 8 & 65280) + (255 & u);
        t[i + 3] = t[i + 8] = t[i + 13] = b, t[i + 18] = t[i + 23] = t[i + 28] = b, t[i + 4] = t[i + 9] = t[i + 14] = m, t[i + 19] = t[i + 24] = t[i + 29] = m
    }

    function o(e, t, i, n) {
        this.nBytes = t, this.drawMode = i, this.texture = n || null, this.startingByte = e
    }

    function a(e, t, i) {
        this.bbox = t, this.prerender = i, this.spriteBatches = e
    }
    var r = i(721);
    r.prototype.prepareBatchFromSpriteList = function(e, t, i) {
        i = Boolean(i);
        for (var r = t.spriteBatch, s = r.length - 1, c = t.nbSprites * this._spriteSize, l = this.sFMPartitioner.reserve(e, c), d = l.start, u = d, p = d, h = new window.ArrayBuffer(c), f = new window.Float32Array(h), b = new window.Uint32Array(h), m = this._spriteSize / 4, M = 0, g = [], _ = 0; _ <= s; _ += 1) {
            var A = r[_];
            if (A.isMaskTag) i = !0, g.push(A);
            else {
                n(f, b, M * m, A), p += this._spriteSize, M += 1;
                var O = r[_ + 1];
                (_ === s || A.texture !== O.texture || O.isMaskTag) && (g.push(new o(u, p - u, this._drawModes.triangles, A.texture)), u = p)
            }
        }
        this.updateGPUBuffer(d, f), l.obj = new a(g, t.bbox, i)
    }, r.prototype.loadSpriteBuffer = function(e, t, i, n, o) {
        this._loadVertexBuffer(e, t, i, n, this._drawModes.triangles, o)
    }, r.prototype.loadLineBuffer = function(e, t, i, n) {
        this._loadVertexBuffer(e, t, null, i, this._drawModes.triangles, n)
    }, r.prototype._loadVertexBuffer = function(e, t, i, n, r, s) {
        var c = t.byteLength,
            l = this.sFMPartitioner.reserve(e, c),
            d = l.start,
            u = new o(d, c, r, i);
        l.obj = new a([u], n, s), this.updateGPUBuffer(d, t)
    }, r.prototype.updateVertexBuffer = function(e, t, i, n) {
        var o = this.sFMPartitioner.getChunk(e);
        if (void 0 === o) return void console.warn("[WebGLRenderer.updateVertexBuffer] No buffer loaded for", e);
        var a = o.start;
        this.updateGPUBuffer(a + i, t, n)
    }, r.prototype.drawLineBatch = function(e, t) {
        this.useProgram(this._programLine, {
            strength: t
        });
        var i = this.sFMPartitioner.touch(e);
        return void 0 === i ? (console.warn("[WebGLRenderer.drawLineBatch] No buffer loaded for", e), void this.stopProgram()) : (this._drawBatch(i), void this.stopProgram())
    }, r.prototype.drawBoxBatch = function(e) {
        this.useProgram(this._programBox);
        var t = this.sFMPartitioner.touch(e);
        return void 0 === t ? (console.warn("[WebGLRenderer.drawBoxBatch] No buffer loaded for", e), void this.stopProgram()) : (this._drawBatch(t), void this.stopProgram())
    }, r.prototype.drawSpriteBatchAbsoluteScale = function(e, t) {
        this.useProgram(this._programAbsoluteScale);
        var i = this._matrixStack[0];
        i[3] = t / this._renderTarget.width, i[7] = t / this._renderTarget.height, this.drawSpriteBatch(e), this.stopProgram()
    }, r.prototype.drawSpriteBatch = function(e) {
        var t = this.sFMPartitioner.touch(e);
        if (void 0 === t) return void console.warn("[WebGLRenderer.drawSpriteBatch] No buffer loaded for", e);
        if (t.prerender) {
            var i = this.textureCache.holdElement(e),
                n = t.bbox;
            if (void 0 === i) {
                var o = n[0],
                    a = n[1],
                    r = n[2],
                    s = n[3],
                    c = this._matrixStack[0],
                    l = this._renderTarget.width * c[0] / 2,
                    d = this._renderTarget.width * c[4] / 2,
                    u = this._renderTarget.height * c[1] / 2,
                    p = this._renderTarget.height * c[5] / 2,
                    h = Math.sqrt(Math.max(l * l + d * d, u * u + p * p)) * this.prerenderRatio,
                    f = this.startTextureUsage(a - o, s - r, h, e, "nearest");
                this.startTextureRendering(f, o, a, r, s), this._drawBatch(t), this.stopTextureRendering(!0, !0), i = f.texture
            }
            this.drawImage(i, n[0], n[2], n[1] - n[0], n[3] - n[2]), i.release()
        } else this._drawBatch(t)
    }, r.prototype.handleMaskTag = function(e, t, i) {
        if (e.isMaskDef) {
            var n = t[0],
                o = t[1],
                a = t[2],
                r = t[3],
                s = this.startTextureUsage(o - n, r - a, this.maskQuality);
            return this.startTextureRendering(s, n, o, a, r), void i.push(s)
        }
        var c = this.gl;
        return e.isMaskUse ? (this.useProgram(this._programMask, {
            mask: this._renderTarget.textureBinder
        }), c.uniform4fv(this._currentProgram.uniforms.uBbox, t), void this.stopTextureRendering(!0, !0)) : void(e.isMaskStop && (i.pop()
            .texture.release(), this.stopProgram()))
    }, r.prototype._drawBatch = function(e) {
        for (var t = e.spriteBatches, i = null, n = 0; n < t.length; n += 1) {
            var o = t[n];
            if (o.isMaskTag) null === i && (i = []), this.handleMaskTag(o, e.bbox, i);
            else {
                var a = o.startingByte / this._vertexSize,
                    r = o.nBytes / this._vertexSize;
                this._drawSubBatch(a, r, o.texture, o.drawMode)
            }
        }
    }, r.prototype._drawBatchLine = function(e) {
        for (var t = e.spriteBatches, i = 0; i < t.length; i += 1) {
            var n = t[i],
                o = n.startingByte / this._vertexSize,
                a = n.nBytes / this._vertexSize;
            this._drawSubBatch(o, a, n.texture, n.drawMode)
        }
    }, r.prototype.drawSpriteSubBatch = function(e, t, i) {
        var n = this.sFMPartitioner.touch(e);
        if (void 0 === n) return void console.warn("[WebGLRenderer.drawSpriteSubBatch] No buffer loaded for", e);
        var o = n.spriteBatches[0],
            a = o.startingByte / this._vertexSize + t,
            r = i - t;
        this._drawSubBatch(a, r, o.texture, o.drawMode)
    }, r.prototype._drawSubBatch = function(e, t, i, n) {
        if (!(t <= 0)) {
            var o = this.gl;
            if (null !== i) {
                var a = this.textureCache.useElement(i.id);
                if (void 0 === a) return void console.warn("[WebGLRenderer._drawSubBatch] Texture not loaded:", i.id);
                o.bindTexture(o.TEXTURE_2D, a.element.binder)
            }
            o.uniformMatrix4fv(this._currentProgram.uniforms.uMatrix, !1, this._matrixStack[0]), o.drawArrays(n, e, t)
        }
    }
}
