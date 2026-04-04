function(e, t, i) {
    function n(e, t) {
        this.vertices = [{
            x: -40,
            y: 60,
            r: 1,
            g: 0,
            b: 0,
            a: 1
        }, {
            x: 40,
            y: 60,
            r: 1,
            g: 0,
            b: 0,
            a: 1
        }, {
            x: -30,
            y: 50,
            r: 1,
            g: 1,
            b: 0,
            a: .3
        }, {
            x: 30,
            y: 50,
            r: 1,
            g: 1,
            b: 0,
            a: .3
        }, {
            x: -40,
            y: 40,
            r: 1,
            g: 0,
            b: 0,
            a: 1
        }, {
            x: -30,
            y: 45,
            r: 1,
            g: 1,
            b: 0,
            a: .3
        }, {
            x: 30,
            y: 45,
            r: 1,
            g: 1,
            b: 0,
            a: .3
        }, {
            x: 40,
            y: 40,
            r: 1,
            g: 0,
            b: 0,
            a: 1
        }, {
            x: 0,
            y: 10,
            r: 1,
            g: 1,
            b: 0,
            a: .5
        }, {
            x: 0,
            y: 0,
            r: 1,
            g: 0,
            b: 0,
            a: 1
        }], this.triangles = [
            [1, 0, 2],
            [2, 0, 4],
            [4, 5, 2],
            [8, 5, 4],
            [4, 9, 8],
            [8, 9, 7],
            [7, 6, 8],
            [3, 6, 7],
            [7, 1, 3],
            [2, 3, 1],
            [3, 2, 5],
            [5, 6, 3],
            [5, 8, 6]
        ];
        var i = {
            scene: window.isoEngine.mapScene,
            position: 1,
            layer: c.MAP_LAYER_ICONS,
            x: e,
            y: t,
            id: "FighterIndicator" + u++
        };
        o.call(this, i), this._indicatorByteSize = this.renderer.getNbBytesPerVertex() * this.triangles.length * l, this.updated = !0, this.red = 1, this.green = 1, this.blue = 0, this.alpha = 1, this.sx = .4, this.sy = .4, this.rotation = Math.PI, this._buffer = new window.ArrayBuffer(this._indicatorByteSize), this._vertexBuffer = new window.Float32Array(this._buffer), this._colorBuffer = new window.Uint32Array(this._buffer), this.loadIndicator(), this.renderer.releaseBuffer(i.id), this.forceRefresh();
        var n = this,
            a = this.sx,
            d = this.sy,
            p = this.green,
            h = this.alpha;
        this.tween = new r(this, ["scaleX", "scaleY", "green", "alpha"])
            .from({
                scaleX: a,
                scaleY: d,
                green: p,
                alpha: h
            })
            .to({
                scaleX: .25,
                scaleY: .25,
                green: .8,
                alpha: .7
            }, 7, s.sineIn)
            .to({
                scaleX: a,
                scaleY: d,
                green: p,
                alpha: h
            }, 7, s.sineOut)
            .onUpdate(function() {
                n.loadIndicator()
            })
            .start(!0)
    }
    var o = i(693),
        a = i(56)
        .inherits,
        r = i(430)
        .Tween,
        s = i(430)
        .easing,
        c = i(13),
        l = 3,
        d = 5,
        u = 0;
    a(n, o), e.exports = n, n.prototype.loadIndicator = function() {
        for (var e = 1 / 0, t = -(1 / 0), i = 1 / 0, n = -(1 / 0), o = 0; o < this.triangles.length; o++)
            for (var a = 0; a < l; a++) {
                var r = (o * l + a) * d,
                    s = this.vertices[this.triangles[o][a]],
                    c = s.x,
                    u = s.y,
                    p = Math.max(-128, Math.min(127, 64 * s.r)),
                    h = Math.max(-128, Math.min(127, 64 * this.green)),
                    f = Math.max(-128, Math.min(127, 64 * s.b)),
                    b = Math.max(-128, Math.min(127, 64 * (this.alpha && s.a))),
                    m = (b << 24 & 4278190080) + (f << 16 & 16711680) + (h << 8 & 65280) + (255 & p);
                this._vertexBuffer[r] = c, this._vertexBuffer[r + 1] = u, this._colorBuffer[r + 3] = m, e > c ? e = c : t < c && (t = c), i > u ? i = u : n < u && (n = u)
            }
        this._bbox = [e, t, i, n], this.updated = !0
    }, n.prototype.render = function() {
        this.renderer.save(), this.renderer.translate(this._x, this._y), 0 !== this._rotation && this.renderer.rotate(this._rotation), this.renderer.scale(this._scaleX, this._scaleY), this.updated && (this.renderer.drawBoxBatch(this.id), this.renderer.releaseBuffer(this.id), this.updated = !1, this.forceRefresh()), this.renderer.restore()
    }, n.prototype.generateCurrentFrameData = function() {
        var e = this.renderer.getBufferData(this.id);
        if (void 0 === e) {
            var t = this.id,
                i = !1;
            this.renderer.loadSpriteBuffer(t, this._vertexBuffer, null, this._bbox, i), this.renderer.lockBuffer(this.id)
        }
        return this._bbox
    }, n.prototype.clear = function() {
        this.renderer.releaseBuffer(this.id)
    }, n.prototype.remove = function() {
        this.tween && this.tween.stop(), o.prototype.remove.call(this)
    }
}
