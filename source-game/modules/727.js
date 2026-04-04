function(e, t, i) {
    function n(e) {
        return 0 === (e & e - 1)
    }
    var o = i(721);
    o.prototype._setFiltering = function(e, t, i) {
        var o = this.gl,
            a = o.LINEAR,
            r = o.LINEAR;
        switch (t) {
            case "nearest":
                r = o.NEAREST;
                break;
            case "mipmap":
                n(e.width) && n(e.height) ? (a = o.LINEAR_MIPMAP_LINEAR, o.generateMipmap(o.TEXTURE_2D)) : console.warn("[WebGLRenderer._setFiltering]", "Cannot build mipmap from image", i, " because its dimensions are not a power of 2.")
        }
        o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MIN_FILTER, a), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_MAG_FILTER, r), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_S, o.CLAMP_TO_EDGE), o.texParameteri(o.TEXTURE_2D, o.TEXTURE_WRAP_T, o.CLAMP_TO_EDGE)
    },
    o.prototype.holdTexture = function(e) {
        return this.textureCache.holdElement(e)
    },
    o.prototype.useTexture = function(e) {
        return this.textureCache.useElement(e)
    },
    o.prototype.createTexture = function(e, t, i, n) {
        var o = this.textureCache.holdElement(t);
        if (o) return o;
        var a = this.gl,
            r = a.createTexture();
        a.bindTexture(a.TEXTURE_2D, r), a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), a.texImage2D(a.TEXTURE_2D, 0, a.RGBA, a.RGBA, a.UNSIGNED_BYTE, e), this._setFiltering(e, i, t);
        var s = {
            binder: r,
            width: e.width,
            height: e.height
        };
        return this.textureCache.addAndHoldElement(s, 4 * e.width * e.height, t, n)
    },
    o.prototype.getEmptyTexture = function() {
        return this.emptyTexture
    }
}
