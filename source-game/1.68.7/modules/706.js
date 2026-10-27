function(e, t, i) {
    function n(e) {
        a.call(this, e)
    }

    function o(e, t, i, n) {
        this.color = n, this.texture = e, this.vertexPos = t, this.textureCoord = i
    }
    var a = i(705),
        r = i(56)
        .inherits;
    r(n, a), e.exports = n, n.prototype.merge = function() {
        console.error(new Error("[AtlasAnimationTemplate.merge]It is not possible to merge a template with an atlas template"))
    }, n.prototype.unmerge = function() {
        console.error(new Error("[AtlasAnimationTemplate.merge]It is not impossible to merge a template with an atlas template and therefore to unmerge"))
    }, n.prototype.generateTemplate = function(e, t) {
        this.animationHandle = t, this.texture = e, this.symbols = t.element;
        for (var i = Object.keys(this.symbols), n = 0; n < i.length; n += 1) {
            var o = this.symbols[i[n]];
            o.className && (this.exposedSymbols[o.className] = o)
        }
        this.isEmpty = 0 === i.length
    }, n.prototype.prepareAnimationFrame = function(e, t, i, n, a) {
        var r = this.getSymbol(e);
        if (!r) return console.warn("Symbol " + e + " not registered in character's template"), [];
        if (r.isAnim) {
            var s = r.frames;
            t >= 0 && t <= s.length && (r = s[t])
        }
        var c = r.vertexPos,
            l = c[0] * n,
            d = c[1] * a,
            u = c[2] * n,
            p = c[3] * a,
            h = [1, 1, 1, 1, 0, 0, 0, 0],
            f = [l, d, u, d, l, p, u, p],
            b = new o(r.texture, f, r.textureCoord, h);
        return [b]
    }
}
