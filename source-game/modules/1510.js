function(e, t, i) {
    function n(e) {
        s.call(this, e), this.indexText = document.createElement("canvas"), this.indexText.width = e.w, this.indexText.height = e.h, this.indexTextContext = this.indexText.getContext("2d"), this.indexTextContext.font = "20px Verdana", this.indexTextContext.fillStyle = "rgba(0,0,0,0.6)", this.indexTextContext.textAlign = "center"
    }
    var o = i(13),
        a = i(913),
        r = i(56)
        .inherits,
        s = i(1174),
        c = o.CELL_WIDTH,
        l = o.CELL_HEIGHT,
        d = o.GRID_ALTITUDE_OFFSET,
        u = c / 2;
    r(n, s), e.exports = n, n.prototype.generateOverlay = function(e) {
        this._generateOverlay(e)
    }, n.prototype._generateOverlay = function(e, t, i) {
        var n = window.isoEngine.mapRenderer;
        if (n.map && n.map.cells) {
            var r = n.map.cells;
            "string" == typeof e && (this.indexTextContext.fillStyle = e), this.indexTextContext.clearRect(0, 0, this.indexText.width, this.indexText.height);
            for (var s = 0; s < o.NB_CELLS; s++) {
                var c = n.isWalkable(s);
                if (c) {
                    var p = r[s],
                        h = a.cellCoord[s],
                        f = p.f ? p.f + d : d,
                        b = h.x,
                        m = h.y - f;
                    if (t && t.indexOf(s) >= 0) {
                        var M = this.indexTextContext.fillStyle;
                        this.indexTextContext.fillStyle = i, this.indexTextContext.fillText(s, b + u + 10, m + l), this.indexTextContext.fillStyle = M
                    } else this.indexTextContext.fillText(s, b + u + 10, m + l)
                }
            }
            this.texture && this.texture.release(), this.texture = window.isoEngine.mapScene.createTexture(this.indexText), this.show()
        }
    }, n.prototype.clear = function() {
        this.texture ? (this.texture.release(), this.texture = null) : console.warn("[CellIdOverlay.clear] Clearing CellIdOverlay although no texture was ever set"), this.hide()
    }, n.prototype.colorCells = function(e, t) {
        this._generateOverlay(null, e, t)
    }
}
