function(e, t, i) {
    function n(e) {
        this.mapScene = e, this._themeMapId = null, this._mapId = null, this.floorGraphics = [], this.wallGraphics = [], this._canvas = document.createElement("canvas"), this._context = this._canvas.getContext("2d"), this._floorBatch = null, this._wallBatch = null, this._gfx = [], this._background = null, this._backgroundColor = null, this._atlasGraphics = null, this._atlasTexture = null, this._atlasWidth = 1, this._atlasHeight = 1;
        var t = this;
        p.on("gameContextChanged", function() {
            var e = h.getValue("tacticModeEngaged", !0);
            e && p.isFightMode ? t.show() : t.hide()
        })
    }

    function o(e) {
        var t = [];
        return e && e.length >= 3 && (t[0] = 1 + e[0] / 127, t[1] = 1 + e[1] / 127, t[2] = 1 + e[2] / 127, t[3] = 1), t
    }
    var a = i(13),
        r = i(913),
        s = i(18),
        c = i(12),
        l = i(1493),
        d = i(1178),
        u = i(1176),
        p = i(103),
        h = i(60),
        f = i(1531),
        b = a.CELL_WIDTH,
        m = a.CELL_HEIGHT,
        M = a.MAP_SCENE_WIDTH,
        g = a.MAP_SCENE_HEIGHT,
        _ = a.MAP_LAYER_BACKGROUND,
        A = [0, 0, 0, 1],
        O = {
            FLOOR: 2,
            WALL: 0
        };
    e.exports = n, n.prototype._loadAtlas = function(e, t) {
        var i = this;
        this._canvas.width = e.width, this._atlasWidth = this._canvas.width, this._canvas.height = e.height, this._atlasHeight = this._canvas.height, this._atlasGraphics = e.graphicsPositions;
        var n = Object.keys(this._atlasGraphics);
        s.forEach(n, function(t, n) {
            var o = i._atlasGraphics[t],
                r = o.jpg ? "jpg" : "png",
                s = r + "/" + t + "." + r,
                l = a.IMG_PATH + s;
            e.useUiPath && (l = "ui/tactical/" + t + ".png"), c.loadImage(l, function(e) {
                var t = o.sx,
                    a = o.sy,
                    r = o.sw,
                    s = o.sh,
                    c = o.cx || 0,
                    l = o.cy || 0,
                    d = o.cw || r,
                    u = o.ch || s;
                return c + d > e.width && (d = e.width - c), l + u > e.height && (u = e.height - l), i._context.drawImage(e, c, l, d, u, t, a, r, s), n()
            })
        }, function() {
            i._atlasTexture && i._atlasTexture.release(), i._atlasTexture = i.mapScene.createTexture(i._canvas, "tacticalModeMapAtlas" + i._themeMapId, "linear"), i._canvas.width = 1, i._canvas.height = 1, t()
        })
    }, n.prototype._loadThemeMapAssets = function(e, t) {
        var i = this;
        this.floorGraphics = [], this.wallGraphics = [];
        var n = e.midgroundLayer,
            o = e.cells;
        this._backgroundColor = e.backgroundColor, this._loadAtlas(e.atlasLayout, function() {
            return Object.keys(n)
                .forEach(function(e) {
                    if (o[e]) {
                        var t = o[e].l || 0,
                            a = n[e],
                            s = r.cellCoord[e];
                        a.forEach(function(e) {
                            e.x = s.x - e.x, e.y = s.y - e.y
                        }), t === O.FLOOR ? i.floorGraphics.push(a) : t === O.WALL && i.wallGraphics.push(a)
                    }
                }), i.floorGraphics.length <= 1 || i.wallGraphics.length <= 0 ? t(new Error("TacticalMode._loadThemeMapAssets - No wall or floor found")) : void t()
        })
    }, n.prototype._applyThemeToMap = function(e, t, i) {
        var n = this;
        this.clean(), this.mapScene.holdTexture(this._atlasTexture.id), this.mapScene.holdTexture(this._atlasTexture.id), this._floorBatch = new l({
            id: "tacticalModeFloorStaticSprites" + t,
            scene: this.mapScene,
            holdsStatics: !0,
            layer: _
        }), this._wallBatch = new l({
            id: "tacticalModeWallStaticSprites" + t,
            scene: this.mapScene,
            holdsStatics: !0
        }), this._background = new d({
            scene: this.mapScene,
            x: 0,
            y: 0,
            position: -100,
            boxes: [new u((-b), (-m), (-b), g, M, g, M, (-m))],
            hue: n._backgroundColor || A,
            layer: -2,
            id: "tacticalBackground"
        }), this._background.hide(), this._floorBatch.setTexture(n._atlasTexture), this._wallBatch.setTexture(n._atlasTexture);
        for (var s, c, p = 0; p < a.NB_CELLS; p++) {
            var h = r.cellCoord[p];
            if (1 === (5 & e[p].l)) {
                var f = n.floorGraphics[h.x % 2][0];
                c = {
                    position: (p + 1) / 1e3,
                    scene: n.mapScene,
                    id: "tacticGraphicFloorBatchFloor" + p,
                    hue: o(f.hue),
                    x: h.x - f.x,
                    y: h.y - f.y,
                    cw: f.cw,
                    ch: f.ch,
                    cx: f.cx,
                    cy: f.cy,
                    g: f.g
                }, n._gfx.push(n._floorBatch.addSprite(c, n._atlasGraphics[c.g]))
            } else if (!(7 & e[p].l)) {
                var O = Math.floor(Math.random() * n.wallGraphics.length),
                    v = n.wallGraphics[O][0],
                    y = n.wallGraphics[O][1];
                y && (c = {
                    position: (p + 1) / 1e3,
                    scene: n.mapScene,
                    id: "tacticGraphicFloorBatchWall" + p,
                    hue: o(y.hue),
                    x: h.x - y.x,
                    y: h.y - y.y,
                    cw: y.cw,
                    ch: y.ch,
                    cx: y.cx,
                    cy: y.cy,
                    g: y.g
                }, n._gfx.push(n._floorBatch.addSprite(c, n._atlasGraphics[c.g]))), s = {
                    position: p + .1,
                    scene: n.mapScene,
                    id: "tacticGraphicWallBatchWall" + p,
                    hue: o(v.hue),
                    x: h.x - v.x,
                    y: h.y - v.y,
                    cw: v.cw,
                    ch: v.ch,
                    cx: v.cx,
                    cy: v.cy,
                    g: v.g
                }, n._gfx.push(n._wallBatch.addSprite(s, n._atlasGraphics[s.g]))
            }
        }
        return n._floorBatch.finalize(n._atlasWidth, n._atlasHeight, {
            sort: !0
        }), n._floorBatch.hide(), n._wallBatch.finalize(n._atlasWidth, n._atlasHeight, {
            sort: !0
        }), n._wallBatch.hide(), i()
    }, n.prototype.show = function() {
        if (this._floorBatch && this._wallBatch) {
            var e = window.isoEngine.mapRenderer;
            e.hideGraphics(), e.hideStatedElements(), window.background.hide(), this._background.show(), this._floorBatch.show(), this._wallBatch.show(), window.gui.fightManager.tacticGraphicsOn()
        }
    }, n.prototype.hide = function() {
        this._floorBatch && this._floorBatch.hide(), this._wallBatch && this._wallBatch.hide(), this._background && this._background.hide();
        var e = window.isoEngine.mapRenderer;
        window.background.show(), e.showGraphics(), e.showStatedElements()
    }, n.prototype.clean = function() {
        this._gfx = [], this._background && this._background.remove(), this._floorBatch && this._floorBatch.remove(), this._wallBatch && this._wallBatch.remove()
    }, n.prototype._constructMapRawData = function(e) {
        var t = f[e] || f[a.DEFAULT_TACTICAL_THEME_MAP];
        if (!t) return a.EMPTY_JSON;
        var i = {
            cells: [],
            midgroundLayer: {},
            backgroundColor: t.backgroundColor,
            atlasLayout: t.atlasLayout
        };
        return t.pictos.forEach(function(e) {
            for (var t = e.weight || 1, n = 0; n < t; n++) {
                i.cells.push({
                    l: e.type
                });
                for (var o = i.cells.length - 1, a = r.cellCoord[o], s = [], c = 0; c < e.layers.length; c++) {
                    var l = e.layers[c],
                        d = i.atlasLayout.graphicsPositions[l];
                    s.push({
                        g: l,
                        x: a.x - d.sw / 2,
                        y: a.y - d.sh / 2,
                        hue: [0, 0, 0],
                        cw: d.sw,
                        ch: d.sh
                    })
                }
                i.midgroundLayer[o] = s
            }
        }), i
    }, n.prototype.loadThemeMapForMap = function(e, t, i, n) {
        var o = this;
        if (this._mapId === t) return n();
        var r = null;
        s.series([function(t) {
            if (o._themeMapId === e) return t();
            var i = o._constructMapRawData(e);
            return i === a.EMPTY_JSON ? t(new Error("TacticalMode.loadThemeMap - Map JSON is empty")) : (r = i, t())
        }, function(t) {
            return o._themeMapId === e ? t() : r ? (o._themeMapId = e, void o._loadThemeMapAssets(r, t)) : t(new Error("TacticalMode.loadThemeMap - No map data found"))
        }, function(e) {
            return i ? void o._applyThemeToMap(i, t, e) : e(new Error("TacticalMode.loadThemeMap - No grid cells found"))
        }], function(e) {
            e ? console.error(e) : o._mapId = t, n()
        })
    }
}
