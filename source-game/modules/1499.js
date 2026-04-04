function(e, t, i) {
    function n(e, t) {
        if (t = t || {}, this.id = null, this.outline = t.outline || !1, this.color = t.color, this.data = t.data || null, this.gfx = null, this._boxBatch = null, this._lineBatch = null, !this.outline && !this.color) return void console.error("[Zone] It is not possible to create a zone without colors and outline");
        if (this.outline) {
            var i = a.getZoneOutlines(e);
            this._lineBatch = new c({
                scene: window.isoEngine.mapScene,
                x: 0,
                y: 2,
                position: 5,
                lines: i,
                lineWidth: 2,
                hue: s.anyToColorArray(this.outline),
                layer: r.MAP_LAYER_BACKGROUND,
                id: "zoneOutline" + b++
            })
        }
        if (this.color) {
            for (var n = [], u = 0; u < e.length; u++) {
                var m = o.cellCoord[e[u]],
                    M = d,
                    g = m.x,
                    _ = m.y - M;
                n.push({
                    x0: g,
                    y0: _,
                    x1: g + h,
                    y1: _ + f,
                    x2: g,
                    y2: _ + p,
                    x3: g - h,
                    y3: _ + f
                })
            }
            this._boxBatch = new l({
                scene: window.isoEngine.mapScene,
                x: 0,
                y: 0,
                position: 1,
                boxes: n,
                hue: s.anyToColorArray(this.color),
                layer: r.MAP_LAYER_BACKGROUND,
                id: "zoneColor" + b++
            })
        }
    }
    var o = i(913),
        a = i(1500),
        r = i(13),
        s = i(475),
        c = i(1177),
        l = i(1178),
        d = r.GRID_ALTITUDE_OFFSET,
        u = r.CELL_WIDTH,
        p = r.CELL_HEIGHT,
        h = u / 2,
        f = p / 2,
        b = 1;
    e.exports = n, n.prototype.destroy = function() {
        null !== this.gfx && this.gfx.remove(), this._lineBatch && (this._lineBatch.remove(), this._lineBatch = null), this._boxBatch && (this._boxBatch.remove(), this._boxBatch = null)
    }
}
