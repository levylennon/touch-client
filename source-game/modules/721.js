function(e, t, i) {
    function n(e, t, i, a, s, c, l) {
        this.canvas = e;
        var d = this.gl = n.getWebGlContext(this.canvas, !1, l);
        d.blendFunc(d.ONE, d.ONE_MINUS_SRC_ALPHA), d.enable(d.BLEND), d.activeTexture(d.TEXTURE0), this.resetClearColor();
        var u = 4,
            p = 2,
            h = 1,
            f = 2,
            b = 2,
            m = 8;
        this._vertexSize = u * f + p * b + h * m, this._spriteSize = 6 * this._vertexSize, this._lineSize = 6 * this._vertexSize, this._boxSize = 6 * this._vertexSize, this._initPrograms(), this.initBuffer(a), this.sFMPartitioner = new r(this._spriteSize, a * this._spriteSize), this._initTextureCache(s), this._programs = [], this.useProgram(this._programRegular);
        var M = d.getParameter(d.FRAMEBUFFER_BINDING);
        this._renderTarget = this._createRenderTarget(null, M, 1, 1), this._renderTargetStack = [this._renderTarget], this._matrixStack = this._renderTarget.matrixStack, this._width = 1, this._height = 1, this.resetDimension(t || 0, i || 0), this._maxTextureSize = d.getParameter(d.MAX_TEXTURE_SIZE), this.prerenderRatio = c, this.maskQuality = .5, this._drawModes = {
            lines: d.LINES,
            triangles: d.TRIANGLES
        }, this.emptyTexture = this.createTexture(o.EMPTY_IMAGE, "empty_texture", "linear", "permanent")
    }
    var o = i(13),
        a = i(699),
        r = i(722),
        s = null,
        c = null;
    e.exports = n, n.prototype.resetClearColor = function() {
        this.gl.clearColor(0, 0, 0, 0)
    }, n.prototype.setClearColor = function(e, t, i, n) {
        this.gl.clearColor(e, t, i, n)
    }, n.prototype._initTextureCache = function(e) {
        function t(e) {
            i.deleteTexture(e.binder)
        }
        var i = this.gl;
        this.textureCache = new a(e, t)
    }, n.prototype.resetDimension = function(e, t) {
        var i = this._width,
            n = this._height;
        this._width = e, this._height = t, this.gl.viewport(0, 0, e, t);
        var o = this._renderTargetStack[0];
        o.width = e, o.height = t;
        for (var a = i / this._width, r = n / this._height, s = o.matrixStack, c = 0; c < s.length; c += 1) {
            var l = s[c];
            l[0] *= a, l[1] *= a, l[2] = (l[2] + 1) * a - 1, l[4] *= r, l[5] *= r, l[6] = (l[6] - 1) * r + 1
        }
    }, n.prototype.getNbBytesPerSprite = function() {
        return this._spriteSize
    }, n.prototype.getNbBytesPerLine = function() {
        return this._lineSize
    }, n.prototype.getNbBytesPerBox = function() {
        return this._boxSize
    }, n.prototype.getNbBytesPerVertex = function() {
        return this._vertexSize
    }, n.prototype.enableBlending = function() {
        var e = this.gl;
        e.enable(e.BLEND)
    }, n.prototype.disableBlending = function() {
        var e = this.gl;
        e.disable(e.BLEND)
    }, n.prototype.drawImage = function(e, t, i, n, o) {
        if (e) {
            var a = this._matrixStack[0],
                r = a[0],
                s = a[4],
                c = a[1],
                l = a[5],
                d = a[2],
                u = a[6];
            a[2] += r * t + c * i, a[6] += s * t + l * i, a[0] *= n, a[4] *= n, a[1] *= o, a[5] *= o, this.gl.uniformMatrix4fv(this._currentProgram.uniforms.uMatrix, !1, a);
            var p = this.textureCache.useElement(e.id)
                .element.binder;
            this.gl.bindTexture(this.gl.TEXTURE_2D, p), this.gl.drawArrays(this.gl.TRIANGLES, 0, 6), a[0] = r, a[4] = s, a[1] = c, a[5] = l, a[2] = d, a[6] = u
        }
    }, n.prototype.clear = function() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT)
    }, n.isWebGlSupported = function() {
        if (null !== s) return s;
        var e = document.createElement("canvas");
        return s = Boolean(n.getWebGlContext(e, !0))
    }, n.getGPUInformation = function() {
        return c
    }, n.getWebGlContext = function(e, t, i) {
        var n = null;
        try {
            var o = {
                alpha: i,
                depth: !1,
                stencil: !1,
                antialias: !1
            };
            if (n = e.getContext("webgl", o) || e.getContext("experimental-webgl", o), !c) {
                c = {
                    textureSize: n.getParameter(n.MAX_TEXTURE_SIZE),
                    rendererBufferSize: n.getParameter(n.MAX_RENDERBUFFER_SIZE),
                    vendor: n.getParameter(n.VENDOR),
                    version: n.getParameter(n.VERSION)
                };
                var a = n.getExtension("WEBGL_debug_renderer_info");
                a && (c.unmaskedVendor = n.getParameter(a.UNMASKED_VENDOR_WEBGL), c.unmaskedRenderer = n.getParameter(a.UNMASKED_RENDERER_WEBGL))
            }
        } catch (r) {
            if (!t) throw new Error("Could not initialise WebGL (" + r.message + ")");
            return null
        }
        if (!n) {
            if (!t) throw new Error("Could not initialise WebGL, sorry :-(");
            return null
        }
        return n
    }
}
