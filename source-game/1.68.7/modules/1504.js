function(e, t, i) {
    function n(e) {
        var t = this;
        c.call(this, e, e.scene.renderer.getEmptyTexture()), this.zones = [], this.displayGrid = !1, this.tacticalMode = !1, this.gridLines = null, this.tacticalBoxes = null, this.gridAnimator = null, this.isDebugMode = !1, M.on("gameContextChanged", this.onGameContextChanged.bind(this)), m.on("alwaysShowGrid", function(e) {
            M.isFightMode || t.toggleGrid(e)
        }), m.on("fightAlwaysShowGrid", function(e) {
            M.isFightMode && t.toggleGrid(e)
        })
    }

    function o(e, t) {
        var i = window.foreground.convertScreenToCanvasCoordinate(e, t),
            n = window.isoEngine.mapScene.convertCanvasToSceneCoordinate(i.x, i.y);
        return window.isoEngine.mapRenderer.getCellId(n.x, n.y)
    }
    var a = i(13),
        r = i(913),
        s = i(56)
        .inherits,
        c = i(1174),
        l = i(1175),
        d = i(1176),
        u = i(1177),
        p = i(1505),
        h = i(1509),
        f = i(430)
        .Tween,
        b = i(1510),
        m = i(55),
        M = i(103),
        g = a.CELL_WIDTH,
        _ = a.CELL_HEIGHT,
        A = a.GRID_ALTITUDE_OFFSET,
        O = a.MAP_LAYER_BACKGROUND,
        v = g / 2,
        y = _ / 2,
        z = [.8, .8, .8, .8];
    s(n, c), e.exports = n, n.prototype.resetAndClear = function() {
        this.displayGrid = !1
    }, n.prototype.clear = function() {
        this.texture ? (this.texture.release(), this.texture = null) : console.warn("[Background.clear] Clearing background although no texture was ever set")
    }, n.prototype.releaseMap = function() {
        this.deleteAllZones(), this.gridLines && (this.gridLines.remove(), this.gridLines = null)
    }, n.prototype.updateMap = function(e) {
        this._cleared = !1, this.texture = e, this.show(), this.gridLines || this.generateWalkableGrid()
    }, n.prototype.onGameContextChanged = function() {
        var e = M.isFightMode ? m.fightAlwaysShowGrid : m.alwaysShowGrid;
        this.generateWalkableGrid(), this.toggleGrid(e)
    }, n.prototype.toggleGrid = function(e) {
        if (this.displayGrid !== e && (this.displayGrid = e, null !== this.gridLines))
            if (e) this.gridLines.show(), new f(this.gridLines, ["alpha"])
                .to({
                    alpha: 1
                }, 20)
                .start();
            else {
                var t = this;
                new f(this.gridLines, ["alpha"])
                    .to({
                        alpha: 0
                    }, 15)
                    .start()
                    .onFinish(function() {
                        t.gridLines && t.gridLines.hide()
                    })
            }
    }, n.prototype.generateWalkableGrid = function() {
        this.gridAnimator || (this.gridAnimator = new p);
        var e = window.isoEngine.mapRenderer;
        if (e.map && e.map.cells) {
            for (var t = e.map.cells, i = M.isRoleplayMode, n = {}, o = [], s = [], c = 0; c < a.NB_CELLS; c++) {
                var h = e.isWalkable(c);
                if (h) {
                    var b = t[c],
                        m = r.cellCoord[c],
                        g = (i && b.f || 0) + A,
                        w = m.x,
                        T = w - v,
                        C = w + v,
                        I = m.y - g,
                        S = I + y,
                        E = I + _,
                        L = w + "." + I + "-" + C + "." + S,
                        N = w + "." + E + "-" + C + "." + S,
                        R = w + "." + E + "-" + T + "." + S,
                        q = w + "." + I + "-" + T + "." + S;
                    void 0 === n[L] && (n[L] = !0, s.push(new l(w, I, C, S))), void 0 === n[N] && (n[N] = !0, s.push(new l(C, S, w, E))), void 0 === n[R] && (n[R] = !0, s.push(new l(w, E, T, S))), void 0 === n[q] && (n[q] = !0, s.push(new l(T, S, w, I)));
                    var x = new d(w, I, C, S, w, E, T, S);
                    x.cellId = c, o.push(x)
                }
            }
            this.gridLines && this.gridLines.remove(), this.gridLines = new u({
                scene: window.isoEngine.mapScene,
                x: 0,
                y: 0,
                position: 3,
                lines: s,
                lineWidth: 1.2,
                hue: z,
                layer: O,
                id: "combatGrid"
            }), this.gridLines.alpha = 0, this.displayGrid ? (this.gridLines.show(), new f(this.gridLines, ["alpha"])
                .to({
                    alpha: 1
                }, 20)
                .start()) : this.gridLines.hide(), this.isDebugMode && (this.initDebugOverlay(), this.cellIdOverlay.clear(), this.cellIdOverlay.generateOverlay())
        }
    }, n.prototype.setGridColor = function(e) {
        this.gridLines.hue = e
    }, n.prototype.initDebugOverlay = function() {
        if (!this.cellIdOverlay) {
            var e = {
                scene: this.scene,
                layer: a.MAP_LAYER_FOREGROUND,
                position: 3,
                x: -a.HORIZONTAL_OFFSET,
                y: -a.VERTICAL_OFFSET,
                w: a.MAP_SCENE_WIDTH,
                h: a.MAP_SCENE_HEIGHT,
                id: "cellIdOverlay"
            };
            this.cellIdOverlay = new b(e)
        }
    }, n.prototype.toggleDebugMode = function(e) {
        this.isDebugMode = !this.isDebugMode, this.initDebugOverlay(), this.isDebugMode ? this.cellIdOverlay.generateOverlay(e) : this.cellIdOverlay.clear()
    }, n.prototype.highlightDebugCells = function(e, t) {
        this.isDebugMode && this.cellIdOverlay && this.cellIdOverlay.colorCells(e, t)
    }, n.prototype.deleteAllZones = function() {
        for (var e = 0; e < this.zones.length; e++) this.zones[e].destroy();
        this.zones = []
    }, n.prototype.addZone = function(e, t) {
        this.zones.push(e), e.id = t
    }, n.prototype.deleteZone = function(e) {
        e.destroy();
        var t = this.zones.indexOf(e);
        return t === -1 ? console.warn("Removing a non existing zone") : void this.zones.splice(t, 1)
    }, n.prototype.deleteZoneById = function(e, t) {
        for (var i = 0; i < this.zones.length;) this.zones[i].id === e ? (t && t(this.zones[i]), this.zones[i].destroy(), this.zones.splice(i, 1)) : i++
    }, n.prototype.getDataOfZoneId = function(e) {
        for (var t = 0; t < this.zones.length; t++)
            if (this.zones[t].id === e) return this.zones[t].data;
        return null
    };
    var w = 10;
    n.prototype.colorCurrentDragCell = function(e, t, i) {
        if (i.data) {
            var n = window.foreground.convertScreenToCanvasCoordinate(e, t - w),
                o = window.isoEngine.mapScene.convertCanvasToSceneCoordinate(n.x, n.y),
                a = window.isoEngine.mapRenderer.getCellId(o.x, o.y),
                r = a.cell;
            window.isoEngine.cellHover(r, i.data.id)
        }
    }, n.prototype.dragCellRelease = function(e, t, i) {
        if (M.isFightMode) {
            if (!i.data) return;
            var n = o(e, t - w);
            window.isoEngine.cellHoverRelease(n.cell)
        }
    }, n.prototype.addGridAnimation = function(e) {
        return this.gridAnimator.addGridAnimation(e)
    }, n.prototype.removeGridLayer = function(e) {
        this.gridAnimator ? this.gridAnimator.removeGridLayer(e) : this.gridAnimator = new p
    };
    var T = [];
    n.prototype.addTargetHighLights = function(e, t, i, n, o, a) {
        var r = new h(e, t, i);
        T.push(r), r.animate(n, o), a && r.hide()
    }, n.prototype.removeTargetHighlights = function() {
        T.forEach(function(e) {
            e.stopped === !1 && (e.stop(), e.remove())
        }), T = []
    }, n.prototype.hideTargetHighlights = function() {
        T.forEach(function(e) {
            e.hide()
        })
    }, n.prototype.showTargetHighlights = function() {
        T.forEach(function(e) {
            e.show()
        })
    }
}
