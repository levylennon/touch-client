function(e, t, i) {
    function n(e) {
        r.call(this, e), this._lines = e.lines, this._lineWidth = e.lineWidth, this._strength = e.strength || 1, this._lineByteSize = this.renderer.getNbBytesPerLine(), this._bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)], this._createVertexBuffer()
    }

    function o(e, t) {
        var i = e.x1 - e.x0,
            n = e.y1 - e.y0,
            o = Math.sqrt(i * i + n * n);
        return i /= o, n /= o, {
            normal1: {
                x: -n,
                y: i
            },
            normal2: {
                x: n,
                y: -i
            },
            point1: {
                x: e.x0 - n * t,
                y: e.y0 + i * t
            },
            point2: {
                x: e.x1 - n * t,
                y: e.y1 + i * t
            },
            point3: {
                x: e.x0 + n * t,
                y: e.y0 - i * t
            },
            point4: {
                x: e.x1 + n * t,
                y: e.y1 - i * t
            }
        }
    }
    var a = i(56)
        .inherits,
        r = i(693);
    a(n, r), e.exports = n, n.prototype._createVertexBuffer = function() {
        var e = this._lines.length;
        this._vertexBuffer = new window.ArrayBuffer(e * this._lineByteSize), this._positions = new window.Float32Array(this._vertexBuffer), this._normal = new window.Float32Array(this._vertexBuffer), this._colorView = new window.Uint32Array(this._vertexBuffer);
        for (var t = 0; t < e; t += 1) {
            var i = this._lines[t];
            this._expandToFitLine(i);
            var n = t * this._lineByteSize / 4,
                a = o(i, this._lineWidth);
            this._positions[n + 0] = a.point1.x, this._positions[n + 1] = a.point1.y, this._positions[n + 2] = a.normal2.x, this._positions[n + 3] = a.normal2.y, this._positions[n + 5] = a.point2.x, this._positions[n + 6] = a.point2.y, this._positions[n + 7] = a.normal2.x, this._positions[n + 8] = a.normal2.y, this._positions[n + 10] = a.point3.x, this._positions[n + 11] = a.point3.y, this._positions[n + 12] = a.normal1.x, this._positions[n + 13] = a.normal1.y, this._positions[n + 15] = a.point3.x, this._positions[n + 16] = a.point3.y, this._positions[n + 17] = a.normal1.x, this._positions[n + 18] = a.normal1.y, this._positions[n + 20] = a.point2.x, this._positions[n + 21] = a.point2.y, this._positions[n + 22] = a.normal2.x, this._positions[n + 23] = a.normal2.y, this._positions[n + 25] = a.point4.x, this._positions[n + 26] = a.point4.y, this._positions[n + 27] = a.normal1.x, this._positions[n + 28] = a.normal1.y
        }
        this.renderer.releaseBuffer(this.id), this.forceRefresh()
    }, n.prototype.draw = function() {
        this.renderer.drawLineBatch(this.id, this._strength)
    }, n.prototype._expandToFitPoint = function(e, t) {
        this._bbox[0] > e && (this._bbox[0] = e), this._bbox[2] > t && (this._bbox[2] = t), this._bbox[1] < e && (this._bbox[1] = e), this._bbox[3] < t && (this._bbox[3] = t)
    }, n.prototype._expandToFitLine = function(e) {
        this._expandToFitPoint(e.x0, e.y0), this._expandToFitPoint(e.x1, e.y1)
    }, n.prototype.setStrength = function(e) {
        this._strength = e
    }, n.prototype.generateCurrentFrameData = function() {
        var e = this.renderer.getBufferData(this.id);
        if (void 0 === e) {
            var t = this._positions,
                i = !1;
            this.renderer.loadLineBuffer(this.id, t, this._bbox, i), this.renderer.lockBuffer(this.id)
        }
        return this._bbox
    }, n.prototype.clear = function() {
        this.renderer.releaseBuffer(this.id)
    }
}
