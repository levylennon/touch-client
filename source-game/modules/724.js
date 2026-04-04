function(e, t, i) {
    function n(e, t) {
        this.program = e, this.data = t || null
    }

    function o(e, t, i, n, o) {
        this.binder = null, this.vertexShaderId = t, this.fragmentShaderId = i, this.uniformIds = n, this.attributeIds = o, this.uniforms = {}, this.attributes = {}, this.lastAttributeIndex = o.length - 1, this.vertexSize = e._vertexSize, this.gl = e.gl
    }

    function a(e, t, i, n, a) {
        o.call(this, e, t, i, n, a)
    }

    function r(e, t, i, n, a) {
        o.call(this, e, t, i, n, a)
    }
    var s = i(721),
        c = {
            uTexture: 0,
            uMask: 1
        };
    o.prototype.setAttributes = function() {
        var e = 4,
            t = 2,
            i = 1;
        this.gl.vertexAttribPointer(this.attributes.aPosition, 2, this.gl.FLOAT, !1, this.vertexSize, 0), this.gl.vertexAttribPointer(this.attributes.aColorMul, 4, this.gl.BYTE, !0, this.vertexSize, 2 * e + 2 * t), this.gl.vertexAttribPointer(this.attributes.aColorAdd, 4, this.gl.BYTE, !0, this.vertexSize, 2 * e + 2 * t + 4 * i)
    }, a.prototype.setAttributes = function() {
        var e = 4,
            t = 2,
            i = 1;
        this.gl.vertexAttribPointer(this.attributes.aPosition, 2, this.gl.FLOAT, !1, this.vertexSize, 0), this.gl.vertexAttribPointer(this.attributes.aTexCoord, 2, this.gl.UNSIGNED_SHORT, !0, this.vertexSize, 2 * e), this.gl.vertexAttribPointer(this.attributes.aColorMul, 4, this.gl.BYTE, !0, this.vertexSize, 2 * e + 2 * t), this.gl.vertexAttribPointer(this.attributes.aColorAdd, 4, this.gl.BYTE, !0, this.vertexSize, 2 * e + 2 * t + 4 * i)
    }, r.prototype.setAttributes = function() {
        var e = 4;
        this.gl.vertexAttribPointer(this.attributes.aPosition, 2, this.gl.FLOAT, !1, this.vertexSize, 0), this.gl.vertexAttribPointer(this.attributes.aNormal, 2, this.gl.FLOAT, !1, this.vertexSize, 2 * e), this.gl.vertexAttribPointer(this.attributes.aColorAdd, 4, this.gl.BYTE, !0, this.vertexSize, 4 * e)
    }, s.prototype._initPrograms = function() {
        this._shaders = {};
        var e = ["uMatrix", "uStrength"],
            t = ["uMatrix"],
            i = ["uMatrix", "uTexture"],
            n = ["uMatrix", "uTexture", "uRatio"],
            s = ["uMatrix", "uTexture", "uMask", "uBbox"],
            c = ["aPosition", "aNormal", "aColorAdd"],
            l = ["aPosition", "aColorMul", "aColorAdd"];
        this._programLine = new r(this, "vertexLine", "fragmentLine", e, c), this._programBox = new o(this, "vertexBox", "fragmentBox", t, l);
        var d = ["aPosition", "aTexCoord", "aColorMul", "aColorAdd"];
        this._programMask = new a(this, "vertexMask", "fragmentMask", s, d), this._programAbsoluteScale = new a(this, "vertexAbsoluteScale", "fragmentRegular", i, d), this._programPixelArt = new a(this, "vertexRegular", "fragmentPixelArt", n, d), this._programFiltering = new a(this, "vertexRegular", "fragmentFiltering", n, d), this._programMapTransition = new a(this, "vertexRegular", "fragmentMapTransition", n, d), this._programRegular = new a(this, "vertexRegular", "fragmentRegular", i, d), this._currentProgram = {
            lastAttributeIndex: -1
        }
    }, s.prototype._getShader = function(e) {
        if (this._shaders[e]) return this._shaders[e];
        var t, i = this.gl,
            n = s.shadersData[e];
        if ("fragment" === n.type) t = i.createShader(i.FRAGMENT_SHADER);
        else {
            if ("vertex" !== n.type) return null;
            t = i.createShader(i.VERTEX_SHADER)
        }
        if (i.shaderSource(t, n.script), i.compileShader(t), !i.getShaderParameter(t, i.COMPILE_STATUS)) throw new Error(i.getShaderInfoLog(t));
        return this._shaders[e] = t, t
    }, s.prototype._buildProgram = function(e) {
        var t = this.gl,
            i = t.createProgram();
        if (t.attachShader(i, this._getShader(e.vertexShaderId)), t.attachShader(i, this._getShader(e.fragmentShaderId)), t.linkProgram(i), !t.getProgramParameter(i, t.LINK_STATUS)) {
            var n = t.getProgramInfoLog(i);
            throw t.deleteProgram(i), new Error("Error linking the program:" + n)
        }
        t.useProgram(i);
        for (var o = e.attributeIds, a = e.attributes, r = 0; r < o.length; r += 1) {
            var s = o[r];
            a[s] = t.getAttribLocation(i, s)
        }
        for (var l = e.uniformIds, d = e.uniforms, u = 0; u < l.length; u += 1) {
            var p = l[u],
                h = t.getUniformLocation(i, p);
            c[p] && t.uniform1i(h, c[p]), d[p] = h
        }
        e.binder = i
    }, s.prototype._useProgram = function(e) {
        var t = e.program;
        if (t !== this._currentProgram) {
            var i, n = this._currentProgram.lastAttributeIndex,
                o = t.lastAttributeIndex;
            if (n > o)
                for (i = n; i > o; i -= 1) this.gl.disableVertexAttribArray(i);
            else if (n < o)
                for (i = n + 1; i <= o; i += 1) this.gl.enableVertexAttribArray(i);
            var a = t.binder;
            null === a ? this._buildProgram(t) : this.gl.useProgram(t.binder), t.setAttributes(), this._currentProgram = t
        }
        var r = e.data;
        if (null !== r) {
            var s = this.gl;
            void 0 !== r.mask && (s.activeTexture(s.TEXTURE1), s.bindTexture(s.TEXTURE_2D, r.mask), s.activeTexture(s.TEXTURE0)), void 0 !== r.ratio && s.uniform1f(this._currentProgram.uniforms.uRatio, r.ratio), void 0 !== r.resolution && s.uniform1f(this._currentProgram.uniforms.uResolution, r.resolution), void 0 !== r.strength && s.uniform1f(this._currentProgram.uniforms.uStrength, r.strength)
        }
    }, s.prototype.useProgram = function(e, t) {
        var i = new n(e, t);
        this._programs.push(i), this._useProgram(i)
    }, s.prototype.stopProgram = function() {
        this._programs.pop(), this._useProgram(this._programs[this._programs.length - 1])
    }
}
