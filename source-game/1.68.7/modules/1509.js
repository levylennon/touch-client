function(e, t, i) {
    function n(e, t, i) {
        var n = {
            scene: window.isoEngine.mapScene,
            position: 1,
            layer: r.MAP_LAYER_TARGET_INDICATOR,
            id: "lightColumn" + e,
            x: t,
            alpha: 0
        };
        o.call(this, n), this.red = 0, this.green = 0, this.blue = 0, this.stopped = !1, this._defineShape(i);
        var a = this;
        this._tween = new s(this, ["scaleX", "scaleY", "red", "green", "blue", "alpha"]), this._tween.onUpdate(function() {
            var e = a.tint;
            e[0] = a.red, e[1] = a.green, e[2] = a.blue
        })
    }
    var o = i(693),
        a = i(56)
        .inherits,
        r = i(13),
        s = i(430)
        .Tween,
        c = i(430)
        .easing;
    a(n, o), e.exports = n, n.prototype.draw = function() {
        this.renderer.drawBoxBatch(this.id)
    }, n.prototype._defineShape = function(e) {
        this._x0 = 16, this._y0 = e, this._x1 = 23, this._y1 = -r.VERTICAL_OFFSET, this._x2 = -23, this._y2 = -r.VERTICAL_OFFSET, this._x3 = -16, this._y3 = e, this._x4 = 20, this._y4 = -r.VERTICAL_OFFSET, this._x5 = -20, this._y5 = -r.VERTICAL_OFFSET, this._bbox = [this._x2, this._x1, this._y1, this._y0];
        var t = this.renderer.getNbBytesPerVertex(),
            i = new window.ArrayBuffer(12 * t);
        this._vertexBuffer = new window.Float32Array(i), this._colorBuffer = new window.Uint32Array(i);
        var n = 1077952576,
            o = 4210752;
        this._vertexBuffer[0] = this._x0, this._vertexBuffer[1] = this._y0, this._colorBuffer[3] = o, this._vertexBuffer[5] = this._x1, this._vertexBuffer[6] = this._y1, this._colorBuffer[8] = o, this._vertexBuffer[10] = this._x4, this._vertexBuffer[11] = this._y4, this._colorBuffer[13] = n, this._vertexBuffer[15] = this._x0, this._vertexBuffer[16] = this._y0, this._colorBuffer[18] = o, this._vertexBuffer[20] = this._x4, this._vertexBuffer[21] = this._y4, this._colorBuffer[23] = n, this._vertexBuffer[25] = this._x5, this._vertexBuffer[26] = this._y5, this._colorBuffer[28] = n, this._vertexBuffer[30] = this._x0, this._vertexBuffer[31] = this._y0, this._colorBuffer[33] = o, this._vertexBuffer[35] = this._x5, this._vertexBuffer[36] = this._y5, this._colorBuffer[38] = n, this._vertexBuffer[40] = this._x3, this._vertexBuffer[41] = this._y3, this._colorBuffer[43] = o, this._vertexBuffer[45] = this._x2, this._vertexBuffer[46] = this._y2, this._colorBuffer[48] = o, this._vertexBuffer[50] = this._x3, this._vertexBuffer[51] = this._y3, this._colorBuffer[53] = o, this._vertexBuffer[55] = this._x5, this._vertexBuffer[56] = this._y5, this._colorBuffer[58] = n
    }, n.prototype.animate = function(e, t) {
        var i = {
                scaleX: e.sx,
                scaleY: e.sy,
                red: e.r,
                green: e.g,
                blue: e.b,
                alpha: e.a
            },
            n = {
                scaleX: t.sx,
                scaleY: t.sy,
                red: t.r,
                green: t.g,
                blue: t.b,
                alpha: t.a
            },
            o = this;
        this._tween.reset()
            .from({
                scaleX: e.sx / 2,
                scaleY: e.sy,
                red: e.r,
                green: e.g,
                blue: e.b,
                alpha: 0
            }, c.polyOut, 4)
            .to(i, 6)
            .onFinish(function() {
                this.stopped || o._tween.reset()
                    .from(i)
                    .to(n, 20, c.trigo, 1)
                    .start(!0)
            })
            .start()
    }, n.prototype.stop = function() {
        this._tween.stop(), this.stopped = !0
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
    }
}
