function(e, t, i) {
    function n(e, t, i, n) {
        this.textureBinder = e, this.frameBufferBinder = t, this.width = i, this.height = n, this.matrixStack = [
            [2, 0, -1, 0, 0, -2, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0]
        ], this.scissor = null, this.texture = null
    }
    var o = i(721);
    o.prototype._createRenderTarget = function(e, t, i, o) {
        return new n(e, t, i, o)
    }, o.prototype._setScissor = function(e) {
        var t = this.gl;
        null === e ? t.disable(t.SCISSOR_TEST) : (t.enable(t.SCISSOR_TEST), t.scissor(e[0], e[1], e[2], e[3]))
    }, o.prototype.enableScissor = function(e, t, i, n) {
        var o = [e, t, i, n];
        this._renderTarget.scissor = o, this._setScissor(o)
    }, o.prototype.disableScissor = function() {
        var e = null;
        this._renderTarget.scissor = e, this._setScissor(e)
    }, o.prototype.startTextureUsage = function(e, t, i, o, a) {
        var r = this.gl;
        i = i || this.prerenderRatio, e * i > this._maxTextureSize && (i = this._maxTextureSize / e), t * i > this._maxTextureSize && (i = this._maxTextureSize / t), e = Math.ceil(e * i), t = Math.ceil(t * i);
        var s = r.createTexture(),
            c = r.createFramebuffer(),
            l = new n(s, c, e, t);
        r.bindTexture(r.TEXTURE_2D, s), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, e, t, 0, r.RGBA, r.UNSIGNED_BYTE, null), this._setFiltering(l, a), r.bindFramebuffer(r.FRAMEBUFFER, c), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, s, 0), r.bindFramebuffer(r.FRAMEBUFFER, this._renderTarget.frameBufferBinder);
        var d = {
            binder: s,
            width: e,
            height: t
        };
        return l.texture = this.textureCache.addAndHoldElement(d, 4 * e * t, o), l
    }, o.prototype._setRenderTarget = function(e, t) {
        var i = this.gl;
        this._renderTarget = e, i.bindFramebuffer(i.FRAMEBUFFER, e.frameBufferBinder), i.viewport(0, 0, e.width, e.height), this._setScissor(e.scissor), t && i.clear(i.COLOR_BUFFER_BIT), this._matrixStack = e.matrixStack
    }, o.prototype.startTextureRendering = function(e, t, i, n, o, a) {
        this._renderTargetStack.push(e), this._setRenderTarget(e, a);
        var r = 2 / Math.max(i - t, 1),
            s = 2 / Math.max(o - n, 1),
            c = this._matrixStack[0];
        c[0] = r, c[4] = 0, c[1] = 0, c[5] = s, c[2] = -t * r - 1, c[6] = -n * s - 1, c[8] = 1, c[9] = 1, c[10] = 1, c[11] = 1, c[12] = 0, c[13] = 0, c[14] = 0, c[15] = 0
    }, o.prototype.stopTextureRendering = function(e) {
        var t = this._renderTargetStack.pop();
        this._setRenderTarget(this._renderTargetStack[this._renderTargetStack.length - 1]), e && this.gl.deleteFramebuffer(t.frameBufferBinder)
    }, o.prototype._debugRenderTarget = function() {
        var e = this._renderTargetStack[this._renderTargetStack.length - 1],
            t = e.width,
            i = e.height,
            n = this.gl,
            o = new window.Uint8Array(t * i * 4);
        n.readPixels(0, 0, t, i, n.RGBA, n.UNSIGNED_BYTE, o);
        var a = o.length,
            r = document.createElement("canvas"),
            s = r.getContext("2d");
        r.width = t, r.height = i, document.body.appendChild(r), r.style.position = "absolute", r.style.left = "100px", r.style.top = "100px";
        for (var c = s.getImageData(0, 0, t, i), l = c.data, d = 3; d < a; d += 4) l[d - 3] = o[d - 3], l[d - 2] = o[d - 2], l[d - 1] = o[d - 1], l[d] = o[d];
        s.putImageData(c, 0, 0), s.fillRect(t / 2 - 5, i / 2 - 5, 10, 10)
    }
}
