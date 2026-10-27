function(e, t, i) {
    var n = i(721);
    n.prototype.save = function() {
        this._matrixStack.unshift(this._matrixStack[0].slice())
    }, n.prototype.restore = function() {
        this._matrixStack.shift()
    }, n.prototype.setTransform = function(e, t, i, n, o, a, r, s) {
        var c = this._matrixStack[0];
        r = 2 / (r || this._width), s = -2 / (s || this._height), c[0] = e * r, c[4] = t * s, c[1] = i * r, c[5] = n * s, c[2] = o * r - 1, c[6] = a * s + 1
    }, n.prototype.rotate = function(e) {
        if (0 !== e) {
            var t = this._matrixStack[0],
                i = Math.cos(e),
                n = Math.sin(e),
                o = t[0],
                a = t[4],
                r = t[1],
                s = t[5];
            t[0] = o * i + r * n, t[4] = a * i + s * n, t[1] = r * i - o * n, t[5] = s * i - a * n
        }
    }, n.prototype.translate = function(e, t) {
        var i = this._matrixStack[0];
        i[2] += i[0] * e + i[1] * t, i[6] += i[4] * e + i[5] * t
    }, n.prototype.scale = function(e, t) {
        var i = this._matrixStack[0];
        i[0] *= e, i[4] *= e, i[1] *= t, i[5] *= t
    }, n.prototype.transform = function(e, t, i, n, o, a) {
        var r = this._matrixStack[0],
            s = r[0],
            c = r[4],
            l = r[1],
            d = r[5],
            u = r[2],
            p = r[6];
        r[0] = s * e + l * t, r[4] = c * e + d * t, r[1] = s * i + l * n, r[5] = c * i + d * n, r[2] = s * o + l * a + u, r[6] = c * o + d * a + p
    }, n.prototype.getTransform = function() {
        var e = this._matrixStack[0];
        return [e[0], e[4], e[1], e[5], e[2], e[6]]
    }, n.prototype.setTint = function(e, t, i, n, o, a, r, s) {
        var c = this._matrixStack[0];
        c[8] = e, c[9] = t, c[10] = i, c[11] = n, c[12] = o / 255, c[13] = a / 255, c[14] = r / 255, c[15] = s / 255
    }, n.prototype.tint = function(e, t, i, n, o, a, r, s) {
        var c = this._matrixStack[0],
            l = c[8],
            d = c[9],
            u = c[10],
            p = c[11];
        c[8] = e * l, c[9] = t * d, c[10] = i * u, c[11] = n * p, c[12] = o / 255 + c[12] * e, c[13] = a / 255 + c[13] * t, c[14] = r / 255 + c[14] * i, c[15] = s / 255 + c[15] * n
    }, n.prototype.setTintMult = function(e, t, i, n) {
        var o = this._matrixStack[0];
        o[8] = e, o[9] = t, o[10] = i, o[11] = n
    }, n.prototype.setTintAdd = function(e, t, i, n) {
        var o = this._matrixStack[0];
        o[12] = e / 255, o[13] = t / 255, o[14] = i / 255, o[15] = n / 255
    }, n.prototype.multiplyColor = function(e, t, i, n) {
        var o = this._matrixStack[0];
        o[8] *= e, o[9] *= t, o[10] *= i, o[11] *= n
    }, n.prototype.addColor = function(e, t, i, n) {
        var o = this._matrixStack[0];
        o[12] += e * o[8] / 255, o[13] += t * o[9] / 255, o[14] += i * o[10] / 255, o[15] += n * o[11] / 255
    }
}
