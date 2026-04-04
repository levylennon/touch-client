function(e, t, i) {
    function n(e, t) {
        this.icon = e, this.index = t, this.reference = null
    }

    function o(e) {
        r.call(this, e), this._bbox = [0, e.w, 0, e.h], this._iconsData = e.iconsData, this._texture = this._iconsData.texture, this._textureWidth = this._texture.element.width, this._textureHeight = this._texture.element.height, this._iconByteSize = this.renderer.getNbBytesPerSprite(), this._vertexBufferSlots = new c, this._populateVertexBuffer()
    }
    var a = i(56)
        .inherits,
        r = i(693),
        s = i(430),
        c = i(432),
        l = s.Tween,
        d = 3.3,
        u = .2,
        p = 9;
    a(o, r), e.exports = o, o.prototype._createVertexBuffer = function() {
        this._vertexBuffer = new window.ArrayBuffer(this._vertexBufferSlots.length * this._iconByteSize), this._floatView = new window.Float32Array(this._vertexBuffer), this._longView = new window.Uint32Array(this._vertexBuffer), this._shortView = new window.Uint16Array(this._vertexBuffer), this._byteView = new window.Uint8Array(this._vertexBuffer)
    }, o.prototype._assignVertexBufferSlots = function() {
        for (var e = 0, t = this._iconsData.zIndexedIconClusters, i = 0; i < t.length; i += 1)
            for (var o = t[i], a = o.icons, r = 0; r < a.length; r += 1) {
                var s = a[r],
                    c = new n(s, e);
                c.reference = this._vertexBufferSlots.addBack(c), s.vertexBufferSlot = c, e += 1
            }
    }, o.prototype._populateVertexBuffer = function() {
        this._assignVertexBufferSlots(), this._createVertexBuffer();
        for (var e = this._iconsData.zIndexedIconClusters, t = 0; t < e.length; t++) this._populateClusterVertexBuffer(e[t]);
        this.renderer.releaseBuffer(this.id), this.forceRefresh()
    }, o.prototype._populateClusterVertexBuffer = function(e) {
        for (var t = 0, i = e.icons, n = 0; n < i.length; n += 1) t = this._populateIconVertexBuffer(i[n], t)
    }, o.prototype._populateIconVertexBuffer = function(e, t) {
        var i = this._floatView,
            n = this._longView,
            o = this._longView,
            a = e.cluster.getIconPosition(t),
            r = e.vertexBufferSlot.index * this._iconByteSize / 4;
        i[r + 0] = i[r + 5] = i[r + 10] = a.x, i[r + 15] = i[r + 20] = i[r + 25] = a.x, i[r + 1] = i[r + 6] = i[r + 11] = a.y, i[r + 16] = i[r + 21] = i[r + 26] = a.y;
        var s = e.dimensions,
            c = s.sx / this._textureWidth,
            l = s.sy / this._textureHeight,
            d = (s.sx + s.sw) / this._textureWidth,
            p = (s.sy + s.sh) / this._textureHeight,
            h = 65535 & 65535 * c,
            f = 65535 & 65535 * d,
            b = 4294901760 & 4294901760 * l,
            m = 4294901760 & 4294901760 * p;
        n[r + 2] = h + b, n[r + 7] = h + m, n[r + 12] = f + m, n[r + 17] = h + b, n[r + 22] = f + m, n[r + 27] = f + b;
        var M = e.infoData.color || [1, 1, 1, 1],
            g = Math.max(-128, Math.min(127, 64 * M[0])),
            _ = Math.max(-128, Math.min(127, 64 * M[1])),
            A = Math.max(-128, Math.min(127, 64 * M[2])),
            O = e.visible ? Math.max(-128, Math.min(127, 64 * M[3])) : 0,
            v = (O << 24 & 4278190080) + (A << 16 & 16711680) + (_ << 8 & 65280) + (255 & g);
        n[r + 3] = n[r + 8] = n[r + 13] = v, n[r + 18] = n[r + 23] = n[r + 28] = v;
        var y = s.x,
            z = s.w + y,
            w = s.y,
            T = s.h + w,
            C = 255 & y,
            I = 255 & z,
            S = (255 & w) << 8,
            E = (255 & T) << 8,
            L = 127 * (1 - u) & 255,
            N = (L << 24) + (L << 16);
        return o[r + 4] = C + S + N, o[r + 9] = C + E + N, o[r + 14] = I + E + N, o[r + 19] = C + S + N, o[r + 24] = I + E + N, o[r + 29] = I + S + N, e.visible ? t + 1 : t
    }, o.prototype.setVisibility = function(e, t, i, n) {
        for (var o, a, r = n || {}, s = 0; s < e.length; s += 1) o = e[s], o.visible === t ? (a = o.cluster, void 0 === r[a.id] && (r[a.id] = a)) : console.error(new Error("setVisibility: icon " + o.id + " visibility != " + t));
        for (var c = [], d = {}, h = Object.keys(r), f = 0; f < h.length; f += 1) {
            var b = h[f];
            a = r[b];
            var m = a.icons,
                M = 0;
            for (s = 0; s < m.length; s += 1)
                if (o = m[s], o.visible) {
                    var g = o.vertexBufferSlot.index * this._iconByteSize / 4;
                    c.push(o), d[o.id] = {
                        origin: {
                            x: this._floatView[g],
                            y: this._floatView[g + 1]
                        },
                        destination: a.getIconPosition(M)
                    }, M += 1
                }
        }
        var _ = {
                ease: 0
            },
            A = this,
            O = new l(_, ["ease"]);
        O.onUpdate(function() {
            var i = A._floatView,
                n = A._shortView,
                o = A._byteView,
                a = _.ease,
                r = t ? a : 1 - a,
                s = 64 * r & 255,
                l = r - 1,
                p = 2,
                h = l * l * ((p + 1) * l + p) + 1 - u;
            h = 127 * h & 255, h += h << 8;
            for (var f = 0; f < e.length; f += 1) {
                var b = e[f];
                if (null !== b.vertexBufferSlot) {
                    var m = b.vertexBufferSlot.index * A._iconByteSize,
                        M = m / 2;
                    n[M + 9] = n[M + 19] = n[M + 29] = h, n[M + 39] = n[M + 49] = n[M + 59] = h, o[m + 15] = o[m + 35] = o[m + 55] = s, o[m + 75] = o[m + 95] = o[m + 115] = s
                } else console.warn("setVisibility skipping fading icon " + b.id)
            }
            var g = 1 - Math.pow((1 - a) / 1, 4);
            for (f = 0; f < c.length; f += 1) {
                var O = c[f];
                if (null !== O.vertexBufferSlot) {
                    var v = d[O.id],
                        y = v.origin.x * (1 - g) + v.destination.x * g,
                        z = v.origin.y * (1 - g) + v.destination.y * g,
                        w = O.vertexBufferSlot.index * A._iconByteSize / 4;
                    i[w + 0] = i[w + 5] = i[w + 10] = y, i[w + 15] = i[w + 20] = i[w + 25] = y, i[w + 1] = i[w + 6] = i[w + 11] = z, i[w + 16] = i[w + 21] = i[w + 26] = z
                } else console.warn("setVisibility skipping moving icon " + O.id)
            }
            A.renderer.releaseBuffer(A.id), A.forceRefresh()
        }), O.from({
            ease: 0
        }), O.to({
            ease: 1
        }, p), O.onFinish(i), O.start()
    }, o.prototype.getSlotWhereIconShouldFit = function(e) {
        var t = e.cluster,
            i = this._iconsData.zIndexedIconClusters,
            n = i,
            o = n.indexOf(t);
        if (o === -1) return void console.error(new Error("[IconBatch.addIconToVertexBuffer] Icon cluster not present in ordered list"));
        var a = t.icons,
            r = a.indexOf(e);
        if (r === -1) return void console.error(new Error("[IconBatch.addIconToVertexBuffer] Icon not present in its cluster"));
        var s;
        if (r === a.length - 1)
            if (o === i.length - 1)
                if (0 === o) {
                    if (!this._vertexBufferSlots.first) return null;
                    s = this._vertexBufferSlots.first.object
                } else {
                    var c = i[o - 1].icons;
                    s = c[c.length - 1].vertexBufferSlot
                }
        else s = i[o + 1].icons[0].vertexBufferSlot;
        else s = a[r + 1].vertexBufferSlot;
        var l = e.vertexBufferSlot;
        return null !== e.vertexBufferSlot && l.index < s.index && (s = s.reference.previous.object), s
    }, o.prototype.addIcon = function(e) {
        if (null !== e.vertexBufferSlot) return void console.warn("[IconBatch.addIconToVertexBuffer] Trying to add an icon already present in the vertex buffer");
        var t, i, o = this.getSlotWhereIconShouldFit(e);
        if (null === o) {
            var a = new n(e, 0);
            a.reference = this._vertexBufferSlots.add(a), e.vertexBufferSlot = a, i = null, t = 0
        } else {
            t = o.index;
            var r = new n(e, t);
            for (r.reference = this._vertexBufferSlots.addBefore(o.reference, r), e.vertexBufferSlot = r, i = o.reference; null !== i && null !== i.icon;) i.object.index += 1, i = i.next
        }
        if (null === i) {
            var s = this._floatView;
            this._createVertexBuffer();
            var c = t * this._iconByteSize / 4,
                l = s.subarray(0, c),
                d = s.subarray(c);
            this._floatView.set(l, 0), this._floatView.set(d, c + this._iconByteSize / 4)
        } else {
            var u = t * this._iconByteSize / 4,
                p = i.object.index * this._iconByteSize / 4;
            this._vertexBufferSlots.removeByReference(i);
            var h = this._floatView.subarray(u, p);
            this._floatView.set(h, u + this._iconByteSize / 4)
        }
        this._populateIconVertexBuffer(e, 0), this.setVisibility([e], !0)
    }, o.prototype.updateIconPosition = function(e) {
        var t = e.vertexBufferSlot;
        if (null === t) return void console.error(new Error("[IconBatch.updateIconPosition] Given icon is not present in the vertex buffer"));
        var i = this.getSlotWhereIconShouldFit(e);
        if (t.index !== i.index) {
            var n, o, a, r, s, c = t.index * this._iconByteSize / 4,
                l = c + this._iconByteSize / 4,
                d = new window.Float32Array(this._floatView.subarray(c, l));
            if (t.index < i.index)
                for (n = l, o = i.index * this._iconByteSize / 4 + this._iconByteSize / 4, this._floatView.set(this._floatView.subarray(n, o), c), s = t.reference; null !== s && s.object !== i;) a = s.object, s = s.next, r = s.object.icon, r && (r.vertexBufferSlot = a), a.icon = r;
            else
                for (n = i.index * this._iconByteSize / 4, o = c, this._floatView.set(this._floatView.subarray(n, o), n + this._iconByteSize / 4), s = t.reference; null !== s && s.object !== i;) a = s.object, s = s.previous, r = s.object.icon, r && (r.vertexBufferSlot = a), a.icon = r;
            i.icon = e, e.vertexBufferSlot = i, this._floatView.set(d, i.index * this._iconByteSize / 4)
        }
        var u = {},
            p = e.cluster;
        u[p.id] = p, this.setVisibility([], !0, null, u)
    }, o.prototype.removeIcon = function(e) {
        e.visible && (e.visible = !1, this.setVisibility([e], !1, function() {
            e.visible === !1 && (e.vertexBufferSlot.icon = null, e.vertexBufferSlot = null)
        }))
    }, o.prototype.render = function() {
        this.renderer.drawSpriteBatchAbsoluteScale(this.id, d * this.scene.pixelRatio)
    }, o.prototype.generateCurrentFrameData = function() {
        var e = this.renderer.getBufferData(this.id);
        if (void 0 === e) {
            var t = this.id,
                i = this._floatView,
                n = this._texture,
                o = !1;
            this.renderer.loadSpriteBuffer(t, i, n, this._bbox, o), this.renderer.lockBuffer(this.id)
        }
        return this._bbox
    }, o.prototype.clear = function() {
        this.renderer.releaseBuffer(this.id)
    }
}
