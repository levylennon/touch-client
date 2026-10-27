function(e, t, i) {
    function n(e) {
        this._id = e, l.call(this, e), this.externalSymbols = {}, this.mergedTemplates = {}, this.mergedSymbols = {}, this.matrices = [], this.colors = [], this.only4Directions = !1
    }

    function o(e, t, i, n) {
        this.color = n, this.texture = e, this.vertexPos = t, this.textureCoord = i
    }

    function a(e) {
        this.id = e
    }

    function r(e) {
        this.id = e
    }

    function s(e) {
        this.id = e
    }
    var c = i(432),
        l = i(705),
        d = i(56)
        .inherits;
    d(n, l), e.exports = n, n.prototype._updateId = function() {
        this.id = this._id;
        for (var e = Object.keys(this.mergedTemplates), t = 0; t < e.length; t += 1) Number.isInteger(this.mergedTemplates[e[t]].id) && (this.id += "#" + this.mergedTemplates[e[t]].id);
        for (e = Object.keys(this.parentTemplates), t = 0; t < e.length; t += 1) this.parentTemplates[e[t]]._updateId()
    }, n.prototype.clear = function() {
        l.prototype.clear.call(this);
        for (var e = Object.keys(this.mergedTemplates), t = 0; t < e.length; t += 1) this.mergedTemplates[e[t]].clear()
    }, n.prototype.merge = function(e, t) {
        var i = e.name,
            n = {};
        this.mergedSymbols[i] = n, this.mergedTemplates[i] = e, e.parentTemplates[this.name] = this;
        var o = e.exposedSymbols;
        for (var a in o) {
            var r = o[a],
                s = this.externalSymbols[r.className];
            s || (s = new c, this.externalSymbols[r.className] = s), n[r.className] = t ? s.addBack(r) : s.addFront(r)
        }
        return this._updateId(), i
    }, n.prototype.unmerge = function(e) {
        var t = e.name,
            i = this.mergedSymbols[t];
        if (i) {
            for (var n in i) {
                var o = this.externalSymbols[n];
                o.removeByReference(i[n]), 0 === o.length && delete this.externalSymbols[n]
            }
            delete e.parentTemplates[this.name], delete this.mergedTemplates[t], delete this.mergedSymbols[t], e.clear(), this._updateId()
        }
    }, n.prototype.generateTemplate = function(e, t) {
        this.animationHandle = t;
        var i = t.element;
        this.texture = e, this.symbols = i.symbols, this.matrices = i.matrices, this.colors = i.colors;
        for (var n = Object.keys(this.symbols), o = 0; o < n.length; o += 1) {
            var a = this.symbols[n[o]];
            a.className && (this.exposedSymbols[a.className] = a)
        }
        this.isEmpty = 0 === n.length
    }, n.prototype.getSymbol = function(e) {
        var t = this.exposedSymbols[e];
        return t ? t : (t = this.externalSymbols[e], t ? t.last.object : null)
    }, a.prototype.isMaskTag = !0, a.prototype.isMaskDef = !0, r.prototype.isMaskTag = !0, r.prototype.isMaskUse = !0, s.prototype.isMaskTag = !0, s.prototype.isMaskStop = !0, n.prototype.createSprites = function(e, t, i, n, c, l, d) {
        if (void 0 === i) return [];
        var u, p, h, f, b, m, M, g, _, A, O, v, y, z = i.animationData,
            w = z.matrices[e.matrices[t]],
            T = z.colors[e.colors[t]],
            C = w[0],
            I = w[1],
            S = w[2],
            E = w[3],
            L = w[4] * c,
            N = w[5] * l,
            R = T[0],
            q = T[1],
            x = T[2],
            B = T[3],
            D = T[4],
            W = T[5],
            P = T[6],
            k = T[7];
        if (i.className) {
            if (d[i.className]) {
                var F = d[i.className];
                F.mirrored && (C = -C, I = -I), b = F.prepareCurrentAnimationFrame();
                var H = [],
                    U = b.length;
                for (h = 0; h < U; h += 1) f = b[h], H.push(f), f.isMaskTag || (p = f.color, f.color = [p[0] * R, p[1] * q, p[2] * x, p[3] * B, p[4] * R + D, p[5] * q + W, p[6] * x + P, p[7] * B + k], u = f.vertexPos, m = u[0], M = u[1], g = u[2], _ = u[3], A = u[4], O = u[5], v = u[6], y = u[7], f.vertexPos = [C * m + S * M + L, I * m + E * M + N, C * g + S * _ + L, I * g + E * _ + N, C * A + S * O + L, I * A + E * O + N, C * v + S * y + L, I * v + E * y + N]);
                return H
            }
            var G = this.externalSymbols[i.className];
            G && G.length > 0 && (i = G.last.object, z = i.animationData)
        }
        if (C *= c, I *= l, S *= c, E *= l, i.isGraphic) {
            if (p = [R, q, x, B, D, W, P, k], void 0 !== i.tint) {
                var j = n[parseInt(i.tint, 10)] || {
                    r: 1,
                    g: 1,
                    b: 1
                };
                p[0] *= j.r, p[1] *= j.g, p[2] *= j.b
            }
            var Y = i.vertexPos;
            return m = Y[0], M = Y[1], g = Y[2], _ = Y[3], u = [C * m + S * M + L, I * m + E * M + N, C * g + S * M + L, I * g + E * M + N, C * m + S * _ + L, I * m + E * _ + N, C * g + S * _ + L, I * g + E * _ + N], [new o(i.texture, u, i.textureCoord, p)]
        }
        if (i.isAnim) {
            t %= i.nbFrames;
            for (var X, V, Q, K, J, Z, $, ee, te = [], ie = i.children, ne = ie.length - 1; ne >= 0; ne -= 1) {
                var oe = ie[ne];
                if (!(t < oe.frames[0] || t > oe.frames[1]))
                    if (oe.maskEnd) te.push(new s(oe.id));
                    else {
                        for (oe.maskStart && te.push(new a(oe.id)), b = this.createSprites(oe, t - oe.frames[0], z.symbols[oe.id], n, 1, 1, d), h = 0; h < b.length; h += 1) f = b[h], te.push(f), f.isMaskTag || (u = f.vertexPos, X = u[0], V = u[1], Q = u[2], K = u[3], J = u[4], Z = u[5], $ = u[6], ee = u[7], u[0] = C * X + S * V + L, u[1] = I * X + E * V + N, u[2] = C * Q + S * K + L, u[3] = I * Q + E * K + N, u[4] = C * J + S * Z + L, u[5] = I * J + E * Z + N, u[6] = C * $ + S * ee + L, u[7] = I * $ + E * ee + N, p = f.color, p[0] *= R, p[1] *= q, p[2] *= x, p[3] *= B, p[4] = p[4] * R + D, p[5] = p[5] * q + W, p[6] = p[6] * x + P, p[7] = p[7] * B + k);
                        oe.maskStart && te.push(new r(oe.id))
                    }
            }
            return te
        }
        return []
    }, n.prototype.prepareAnimationFrame = function(e, t, i, n, c, l) {
        var d = this.getSymbol(e);
        if (!d) return console.warn("Symbol " + e + " not registered in the template of the character"), [];
        var u = d.animationData;
        if (d.isGraphic) {
            var p = d.vertexPos,
                h = [1, 1, 1, 1, 0, 0, 0, 0],
                f = p[0] * n,
                b = p[1] * c,
                m = p[2] * n,
                M = p[3] * c,
                g = [f, b, m, b, f, M, m, M];
            return [new o(d.texture, g, d.textureCoord, h)]
        }
        for (var _ = [], A = d.children, O = A.length - 1; O >= 0; O -= 1) {
            var v = A[O];
            if (v.frames[0] <= t && t <= v.frames[1]) {
                if (v.maskEnd) {
                    _.push(new s(v.id));
                    continue
                }
                var y = this.createSprites(v, t - v.frames[0], u.symbols[v.id], i, n, c, l);
                v.maskStart ? (_.push(new a(v.id)), Array.prototype.push.apply(_, y), _.push(new r(v.id))) : Array.prototype.push.apply(_, y)
            }
        }
        return _
    }
}
