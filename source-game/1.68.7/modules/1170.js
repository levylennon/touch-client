function(e, t, i) {
    // WorldMap - Canva
    function n() {
        s.call(this, "div", {
                className: "WorldMap"
            }), this.canvas = this.createChild("canvas", {
                className: ["WorldMap", "canvas"]
            })
            .rootElement, this._scene = new c({
                canvas: this.canvas,
                name: "worldMapScene",
                l: 0,
                t: 0,
                w: 1,
                h: 1,
                pixelRatio: l.PIXEL_RATIO,
                textureRatio: l.PRERENDER_RATIO_WORLDMAP,
                nbCacheableSprites: l.MAX_SPRITES_BUFFER_WORLDMAP,
                textureMemoryCacheSize: l.MAX_TEXTURE_MEMORY_WORLDMAP,
                prerenderQualityRatio: l.PRERENDER_RATIO_WORLDMAP
            }), this._nZonesHorizontally = 0, this._nZonesVertically = 0, this._worldMapWidth = 1, this._worldMapHeight = 1, this.cropPosition = {
                x: 0,
                y: 0,
                width: 1,
                height: 1
            },
            this._topLeftZoneCoordinate = null, this._worldMapId = 0, this._worldMapData = null, this._isLoadingWorldMapData = !1, this._zoomLevels = [], this._chunkSprites = {},
            this._chunkBatchIndexes = {},
            this._chunkBatchCurrent = 0, this._fullMapSprite = null, this._subAreaSprites = {},
            this._subAreaData = {},
            this._subAreaIdPerCoordinate = {},
            this._gridSprite = null, this._zoneHighlight = null, this.dimensions = {
                width: 0,
                height: 0
            },
            this._iconsInfo = {},
            this._iconsImage = null, this._iconBatchData = new I(this), this.isSelecting = !1, this._setupListeners()
    }

    function o(e) {
        for (var t = {},
            i = [], n = 0, o = 0; o < e.length; o += 2)
            if (!t[o]) {
                i[n] = [];
                for (var a = [o]; a.length;)
                    for (var r = a.pop(), s = e[r], c = e[r + 1], l = 0; l < e.length; l += 2) {
                        var d = e[l],
                            u = e[l + 1];
                        if (!t[l]) {
                            var p = Math.abs(d - s) + Math.abs(u - c);
                            p <= U && (t[l] = !0, i[n].push(l), a.push(l))
                        }
                    }
                n++
            } return i
    }
    i(1171);
    var a = i(18),
        r = i(56)
        .inherits,
        s = i(72),
        c = i(1172),
        l = i(13),
        d = i(1174),
        u = i(1175),
        p = i(1176),
        h = i(1177),
        f = i(1178),
        b = i(700),
        m = i(439),
        M = i(130),
        g = i(430),
        _ = i(1179),
        A = i(1180),
        O = i(67),
        v = i(1181),
        y = v.SUBAREA_COLOR,
        z = v.VIEW_MARGIN,
        w = v.CHUNK_WIDTH,
        T = v.CHUNK_HEIGHT,
        C = i(1182),
        I = i(1183),
        S = i(1187),
        E = i(1186),
        L = i(88)
        .addTooltip,
        N = i(524),
        R = i(448),
        q = i(23)
        .getPosition,
        x = i(16),
        B = i(429),
        D = i(63),
        W = i(500),
        P = i(66),
        k = g.Tween,
        F = g.easing,
        H = 30,
        U = 2,
        G = .1,
        j = 6,
        Y = .1,
        X = 8;
    r(n, s), e.exports = n, n.prototype._setupListeners = function() {
        function e() {
            t._iconBatchData && t._iconBatchData.checkIconsCriterions()
        }
        var t = this,
            i = window.gui.playerData,
            n = i.quests;
        i.on("characterLevelUp", e),
        n.on("questStarted", e),
        n.on("questUpdate", e),
        n.on("stepValidated", e),
        n.on("objectiveValidated", e),
        n.on("questFinished", e),
        n.on("listUpdated", e)
    },
    n.prototype.preloadGenericAssets = function(e) {
        var t = this;
        M.getAllDataMap(["SubAreaIdPerCoordinate", "SubAreasWorldMapData", "Hints"], function(i, n) {
            return i ? e(i) : (t._subAreaIdPerCoordinate = n.SubAreaIdPerCoordinate, t._subAreaData = n.SubAreasWorldMapData, t._iconsInfo = n.Hints, void m.loadModel("icon", "assets", function(i, n) {
                var o = 1;
                i.meta && i.symbols && (o = i.meta.scale / v.ICONS_ORIGINAL_EXPORT_SCALE, i = i.symbols), t._iconsImage = n;
                var a = t._scene.createTexture(n, "worldMapIcons", "linear", "permanent");
                t._iconBatchData.createIconModels(i, a, o), e()
            }))
        })
    },
    n.prototype.stopMovingWorldMap = function() {
        this._scene.camera.stopMoving(), this._loadChunksInView()
    },
    n.prototype.centerToPosition = function(e) {
        if (this._worldMapData) {
            if (!e) return void console.error(new Error("centerToPosition no coords"));
            if (void 0 === e.posX || void 0 === e.posY) return void console.error(new Error("centerToPosition no pos: " + e.constructor.name));
            var t = this._convertGridToSceneCoordinate(e.posX, e.posY);
            this._scene.camera.follow(t), this._loadChunksInView()
        }
    },
    n.prototype.centerOnSubArea = function(e) {
        var t = this.getSubAreaBounds(e);
        return !!t && (this.centerToPosition({
            posX: t.x + t.width / 2,
            posY: t.y + t.height / 2
        }), !0)
    },
    n.prototype.getNearestSubarea = function(e) {
        for (var t, i = window.gui.playerData.position.coordinates, n = 1 / 0, o = 0; o < e.length; o++) {
            var a = e[o],
                r = this.getSubAreaBounds(a);
            if (r) {
                var s = r.x + r.width / 2,
                    c = r.y + r.height / 2,
                    l = Math.abs(s - i.posX) + Math.abs(c - i.posY);
                l >= n || (n = l, t = a)
            }
        }
        return t
    },
    n.prototype.centerToMyPosition = function() {
        if (this._worldMapData) {
            var e = window.gui.playerData.position.coordinates;
            this.centerToPosition(e)
        }
    },
    n.prototype.setDimensions = function(e, t) {
        this.dimensions.width = e, this.dimensions.height = t, this.cropPosition.width = e, this.cropPosition.height = t, this.setStyles({
            width: e + "px",
            height: t + "px"
        }), this.setCanvasDimensions(e, t)
    },
    n.prototype.getDisplayedWorldmapId = function() {
        return this._worldMapId
    },
    n.prototype.initialize = function(e, t) {
        var i = window.gui.playerData.position.worldmapId;
        if (this._worldMapId === i) return this._isLoadingWorldMapData ? console.error("[WorldMap.initialize]", "Initialisation already launched") : this._display(), t();
        if (this._isLoadingWorldMapData) return console.error("[WorldMap.initialize]", "Initialisation of a world map of another id is already launched", "Asked ", i, "Loading", this._worldMapId), t();
        null !== this._fullMapSprite && this.clear(), this._worldMapId = i || 1, this._isLoadingWorldMapData = !0;
        var n = window.gui.databases.WorldMaps[this._worldMapId];
        if (window.gui.playerData.position.worldmapId !== this._worldMapId) return this.initialize(e, t);
        this._worldMapData = n, 3 === this._worldMapId ? (this._worldMapWidth = n.totalWidth / 2, this._worldMapHeight = n.totalHeight / 2) : (this._worldMapWidth = n.totalWidth, this._worldMapHeight = n.totalHeight), this._zoneWidth = n.mapWidth, this._zoneHeight = n.mapHeight;
        var o = window.gui.playerData.position.coordinates,
            a = e.posX || o.posX,
            r = e.posY || o.posY,
            s = this._convertGridToSceneCoordinate(a, r),
            c = n.zoom,
            u = parseFloat(c[0]),
            p = parseFloat(c[1]);
        this._zoomLevels = [u];
        for (var h = 2; h < c.length; h += 1) {
            var f = parseFloat(c[h]);
            2 * f < u ? (this._zoomLevels.push(p), u = p, p = f) : p = f
        }
        this._zoomLevels.push(p), this._scene.camera.setZoomMax(this._zoomLevels[0]), this._scene.setDimensions(0, 0, this._worldMapWidth, this._worldMapHeight), this._scene.camera.setZoom(this._zoomLevels[0]), this._scene.camera.setPosition(s.x, s.y), this._topLeftZoneCoordinate = this.convertSceneToGridCoordinate(0, 0);
        var m = this,
            M = l.WORLDMAP_PATH + this._worldMapId + "-full.jpg";
        b.loadTexture(M, function(e) {
            return m._fullMapSprite = new d({
                scene: m._scene,
                x: 0,
                y: 0,
                w: m._worldMapWidth,
                h: m._worldMapHeight,
                layer: -1
            },
            e), m._prepareGrid(), m._prepareIcons(), m._display(), m._isLoadingWorldMapData = !1, m._scene.camera.setEmitOnZoom(!0), m.updateGridLine(), m.emit("loaded"), t()
        },
        this._scene.renderer, "linear")
    },
    n.prototype.isLoading = function() {
        return this._isLoadingWorldMapData
    },
    n.prototype.getScene = function() {
        return this._scene
    },
    n.prototype._display = function() {
        this._loadChunksInView(), _.addScene(this._scene)
    },
    n.prototype._prepareGrid = function() {
        null !== this._gridSprite && this._gridSprite.remove();
        var e = this._zoneWidth,
            t = this._zoneHeight,
            i = 0,
            n = 0;
        this._worldMapData ? (i = this._worldMapData.origineX % e, n = this._worldMapData.origineY % t) : console.error(new Error("worldMapData are not ready yet!"));
        var o = Math.floor((this._worldMapWidth - i) / e),
            a = Math.floor((this._worldMapHeight - n) / t);
        this._nZonesHorizontally = o, this._nZonesVertically = a;
        for (var r = o + 1, s = a + 1, c = r * e, l = s * t, d = [], p = 0; p < r; p += 1) {
            var f = p * e;
            d.push(new u(f, (-n), f, l - n))
        }
        for (var b = 0; b < s; b += 1) {
            var m = b * t;
            d.push(new u((-i), m, c - i, m))
        }
        this._gridSprite = new h({
            scene: this._scene,
            x: i,
            y: n,
            lines: d,
            alpha: 0,
            lineWidth: j,
            strength: G,
            hue: [.85, .85, .85, .8],
            layer: 2,
            id: "worldMapGrid" + this._worldMapId
        }), this._gridSprite.hide(), this._gridTween = new k(this._gridSprite, ["alpha"]);
        var M = window.gui.playerData.position.coordinates,
            g = this._convertGridToSceneCoordinate(M.posX, M.posY),
            _ = [{
                x0: -e / 2,
                y0: -t / 2,
                x1: -e / 2,
                y1: -t / 4
            },
            {
                x0: -e / 2,
                y0: -t / 2,
                x1: -e / 4,
                y1: -t / 2
            },
            {
                x0: e / 2,
                y0: t / 4,
                x1: e / 2,
                y1: t / 2
            },
            {
                x0: e / 4,
                y0: t / 2,
                x1: e / 2,
                y1: t / 2
            },
            {
                x0: e / 2,
                y0: -t / 4,
                x1: e / 2,
                y1: -t / 2
            },
            {
                x0: e / 2,
                y0: -t / 2,
                x1: e / 4,
                y1: -t / 2
            },
            {
                x0: -e / 2,
                y0: t / 4,
                x1: -e / 2,
                y1: t / 2
            },
            {
                x0: -e / 4,
                y0: t / 2,
                x1: -e / 2,
                y1: t / 2
            }];
        this._zoneHighlight = new h({
            scene: this._scene,
            x: g.x,
            y: g.y,
            w: e,
            h: t,
            lines: _,
            lineWidth: X,
            strength: Y,
            hue: [.1, .1, .1, 1],
            layer: 3,
            id: "worldMapHighlight" + this._worldMapId
        }), this._zoneHighlight.hide(), this._zoneHighlightTween = new k(this._zoneHighlight, ["x", "y"])
    },
    n.prototype.setHighlightOn = function(e, t) {
        if (!this._isLoadingWorldMapData) {
            var i = this._convertGridToSceneCoordinate(e, t);
            this._zoneHighlight.isDisplayed ? ((this._zoneHighlightTween.starting || this._zoneHighlightTween.playing) && this._zoneHighlightTween.stop(), this._zoneHighlightTween.reset()
                .from({
                    x: this._zoneHighlight.x,
                    y: this._zoneHighlight.y
                })
                .to({
                    x: i.x,
                    y: i.y
                },
                16, F.polyOut, 9)
                .start()) : (this._zoneHighlight.show(), this._zoneHighlight.x = i.x, this._zoneHighlight.y = i.y)
        }
    },
    n.prototype.hideHighlight = function() {
        this._zoneHighlight && ((this._zoneHighlightTween.starting || this._zoneHighlightTween.playing) && this._zoneHighlightTween.stop(), this._zoneHighlight.hide())
    },
    n.prototype.setGridVisibility = function(e) {
        if (this._gridTween) {
            this._gridTween.playing && this._gridTween.stop(), this._gridTween.removeOnFinish();
            var t = this._gridSprite.isDisplayed ? this._gridSprite.alpha : 0;
            if (e) this._gridSprite.show(), this._gridTween.reset()
                .from({
                    alpha: t
                })
                .to({
                    alpha: 1
                },
                4);
            else {
                this._gridTween.reset()
                    .from({
                        alpha: t
                    })
                    .to({
                        alpha: 0
                    },
                    4);
                var i = this._gridSprite;
                this._gridTween.onFinish(function() {
                    i.hide()
                })
            }
            this._gridTween.start()
        }
    };
    var V = -100;
    n.prototype.getSubAreaAtGridCoordinate = function(e, t) {
        for (var i = this._convertGridCoordinateToCompressedCoordinate(e, t), n = this._subAreaIdPerCoordinate[this._worldMapId][i]; void 0 === n && t >= V;) i -= 1, t--, n = this._subAreaIdPerCoordinate[this._worldMapId][i];
        if (n) return this._subAreaData[n]
    },
    n.prototype.convertGridCoordinateToZoneId = function(e, t) {
        return (t - this._topLeftZoneCoordinate.j) * this._nZonesHorizontally + (e - this._topLeftZoneCoordinate.i)
    },
    n.prototype.convertSceneToGridCoordinate = function(e, t) {
        return this._worldMapData ? {
            i: Math.floor((e - this._worldMapData.origineX) / this._zoneWidth),
            j: Math.floor((t - this._worldMapData.origineY) / this._zoneHeight)
        } : (console.error(new Error("worldMapData are not ready yet!")), {
            i: 0,
            j: 0
        })
    },
    n.prototype.convertCanvasToGridCoordinate = function(e, t) {
        var i = this._scene.convertCanvasToSceneCoordinate(e, t);
        return this.convertSceneToGridCoordinate(i.x, i.y)
    },
    n.prototype.convertGridToCanvasCoordinate = function(e, t) {
        var i = this._convertGridToSceneCoordinate(e, t);
        return this._scene.convertSceneToCanvasCoordinate(i.x, i.y)
    },
    n.prototype._getZoneGridPositions = function(e) {
        var t = this._subAreaData[e];
        if (!t) return console.error("SubareaData not found for " + e);
        var i = t.gridPositions[this._worldMapId];
        if (!i) {
            for (var n in t.gridPositions) {
                i = t.gridPositions[n];
                break
            }
            if (!i) return console.error("Grid positions missing for subarea " + e)
        }
        return i
    },
    n.prototype.getSubAreaBounds = function(e) {
        var t = window.gui.playerData.position.coordinates,
            i = this._getZoneGridPositions(e);
        if (i) {
            for (var n = o(i), a = {
                    xMin: 0,
                    yMin: 0,
                    xMax: 0,
                    yMax: 0
                },
                r = 1 / 0, s = 0; s < n.length; s++) {
                for (var c = n[s], l = {
                        xMin: 1 / 0,
                        yMin: 1 / 0,
                        xMax: -(1 / 0),
                        yMax: -(1 / 0)
                    },
                    d = 0; d < c.length; d++) {
                    var u = c[d],
                        p = i[u],
                        h = i[u + 1];
                    l.xMin = Math.min(p, l.xMin), l.xMax = Math.max(p, l.xMax), l.yMin = Math.min(h, l.yMin), l.yMax = Math.max(h, l.yMax)
                }
                var f = (l.xMin + l.xMax) / 2,
                    b = (l.yMin + l.yMax) / 2,
                    m = Math.abs(f - t.posX, b - t.posY);
                m < r && (r = m, a = l)
            }
            var M = a.xMax - a.xMin,
                g = a.yMax - a.yMin;
            return {
                x: a.xMin,
                y: a.yMin,
                width: M,
                height: g
            }
        }
    },
    n.prototype.addSubAreaHighlight = function(e, t) {
        var i = "subAreaOverlay" + e;
        if (!this._subAreaSprites[e] || this._subAreaSprites[e].id !== i) {
            var n = this._getZoneGridPositions(e);
            if (n) {
                for (var o = [], a = 1 / 0, r = 1 / 0, s = -(1 / 0), c = -(1 / 0), l = {},
                d = 0; d < n.length; d += 2) {
                    var u = n[d],
                        h = n[d + 1],
                        b = u + ":" + h;
                    if (void 0 === l[b]) {
                        l[b] = !0;
                        var m = this._convertGridToSceneCoordinate(u, h),
                            M = m.x - this._zoneWidth / 2,
                            g = m.y - this._zoneHeight / 2;
                        o.push(new p(M, g, M + this._zoneWidth, g, M + this._zoneWidth, g + this._zoneHeight, M, g + this._zoneHeight)), M < a && (a = M), M > s && (s = M), g < r && (r = g), g > c && (c = g)
                    }
                }
                null !== this._subAreaSprites[e] && void 0 !== this._subAreaSprites[e] && this._subAreaSprites[e].remove(), this._subAreaSprites[e] = new f({
                        scene: this._scene,
                        x: 0,
                        y: 0,
                        boxes: o,
                        hue: t || y,
                        layer: 1,
                        id: "subAreaOverlay" + e
                    }), new k(this._subAreaSprites[e], ["alpha"])
                    .from({
                        alpha: .4
                    })
                    .to({
                        alpha: 1
                    },
                    15, F.polyOut, 3)
                    .to({
                        alpha: .4
                    },
                    15, F.polyIn, 2)
                    .start(!0), new k(this._subAreaSprites[e].highlight, ["red", "green", "blue"])
                    .from({
                        red: .3,
                        green: .3,
                        blue: .3
                    })
                    .to({
                        red: 1,
                        green: 1,
                        blue: 1
                    },
                    15, F.polyOut, 3)
                    .to({
                        red: .3,
                        green: .3,
                        blue: .3
                    },
                    15, F.polyIn, 2)
                    .start(!0)
            }
        }
    },
    n.prototype.removeSubAreaHighlight = function(e) {
        if (null !== this._subAreaSprites[e] && void 0 !== this._subAreaSprites[e]) {
            var t = this._subAreaSprites[e];
            delete this._subAreaSprites[e], new k(t, ["alpha"])
                .from({
                    alpha: 1
                })
                .to({
                    alpha: 0
                },
                5)
                .start()
                .onFinish(function() {
                    t.remove()
                })
        }
    },
    n.prototype.clearSubAreaHighlights = function(e) {
        for (var t in this._subAreaSprites) e !== Number(t) && this.removeSubAreaHighlight(t)
    },
n.prototype.move = function(e, t, i, n, o) {
        this._scene.move(e, t, i, n, o), this._loadChunksInView()
    },
    n.prototype.addInertia = function(e, t) {
        this._scene.camera.addInertia(e, t, .8), this._loadChunksInView()
    },
    n.prototype._getZoomLevel = function(e) {
        for (var t, i = this._zoomLevels[0], n = 1; n < this._zoomLevels.length && (t = this._zoomLevels[n], !(e >= 1.2 * t)); n += 1) i = t;
        return i
    },
    n.prototype._loadChunksInView = function() {
        function e(e, t) {
            var i = H._chunkBatchIndexes[e.id];
            return i !== H._chunkBatchCurrent ? (delete H._chunkBatchIndexes[e.id], t()) : void b.loadTexture(e.path, function(i) {
                var n = H._chunkBatchIndexes[e.id];
                return delete H._chunkBatchIndexes[e.id], n !== H._chunkBatchCurrent ? (i.release(), t()) : (e.texture = i, H._createChunkGraphic(e), void t())
            },
            H._scene.renderer, "linear")
        }
        var t = this._scene.camera.zoomTarget;
        if (void 0 !== t) {
            if (0 === this._zoomLevels.length || 1.5 * t <= this._zoomLevels[this._zoomLevels.length - 1]) return void this._clearChunks();
            this._chunkBatchCurrent += 1;
            var i, n, o, r, s = this._getZoomLevel(t),
                c = this._scene.camera,
                d = c.followee.x - c.fovW / 2 * z;
            if (d < 0) i = 0, n = Math.min(c.fovW * z, this._worldMapWidth);
            else {
                var u = c.followee.x + c.fovW / 2 * z;
                u > this._worldMapWidth ? (i = Math.max(this._worldMapWidth - c.fovW * z, 0), n = this._worldMapWidth) : (i = d, n = u)
            }
            var p = c.followee.y - c.fovH / 2 * z;
            if (p < 0) o = 0, r = Math.min(c.fovH * z, this._worldMapHeight);
            else {
                var h = c.followee.y + c.fovH / 2 * z;
                h > this._worldMapHeight ? (o = Math.max(this._worldMapHeight - c.fovH * z, 0), r = this._worldMapHeight) : (o = p, r = h)
            }
            var f = this._convertSceneToChunkCoordinate(s, i, o),
                m = this._convertSceneToChunkCoordinate(s, n, r),
                M = f.k,
                g = m.k,
                _ = f.l,
                O = m.l,
                v = [],
                y = s * this._worldMapWidth / w,
                C = s * this._worldMapHeight / T,
                I = Math.ceil(y),
                S = Math.ceil(C);
            g === y && y === I && (g -= 1), O === C && C === S && (O -= 1);
            var E, L, N, R = Object.keys(this._chunkSprites);
            for (N = 0; N < R.length; N += 1) this._chunkSprites[R[N]].id = null;
            for (var q = _; q <= O; q += 1)
                for (var x = M; x <= g; x += 1)
                    if (E = this._worldMapId + "-" + s + "-" + (q * I + x + 1)
                        .toString(), L = this._chunkSprites[E], void 0 === L)
                        if (void 0 === this._chunkBatchIndexes[E]) {
                            var B = l.WORLDMAP_PATH + E + ".jpg",
                                D = q - (_ + O) / 2,
                                W = x - (M + g) / 2,
                                P = Math.sqrt(D * D + W * W),
                                k = this._scene.holdTexture(E),
                                F = new A(x, q, s, E, B, k, this._scene, P);
                            void 0 === k ? (v.push(F), this._chunkBatchIndexes[E] = this._chunkBatchCurrent) : this._createChunkGraphic(F)
                        } else this._chunkBatchIndexes[E] = this._chunkBatchCurrent;
            else L.id = E;
            for (N = 0; N < R.length; N += 1) E = R[N], L = this._chunkSprites[E], null === L.id && (L.remove(), delete this._chunkSprites[E]);
            v.sort(function(e, t) {
                return e.distToViewCenter - t.distToViewCenter
            });
            var H = this;
            a.eachLimit(v, 5, e, function(e) {
                e && console.error("Chunk textures not loaded correctly", e)
            })
        }
    },
    n.prototype._createChunkGraphic = function(e) {
        e.w *= e.texture.element.width / w, e.h *= e.texture.element.height / T, this._chunkSprites[e.id] = new d(e, e.texture)
    },
    n.prototype._clearChunks = function() {
        for (var e = Object.keys(this._chunkSprites), t = 0; t < e.length; t += 1) {
            var i = this._chunkSprites[e[t]];
            i.remove()
        }
        this._chunkSprites = {}
    },
    n.prototype._convertGridCoordinateToCompressedCoordinate = function(e, t) {
        return ((e < 0 ? 32768 | 32767 & e : 32767 & e) << 16) + (t < 0 ? 32768 | 32767 & t : 32767 & t)
    },
    n.prototype._convertGridToSceneCoordinate = function(e, t) {
        if (!this._worldMapData) return console.error(new Error("worldMapData are not ready yet!")), {
            x: 0,
            y: 0
        };
        var i = this._worldMapData.origineX + e * this._zoneWidth + this._zoneWidth / 2,
            n = this._worldMapData.origineY + t * this._zoneHeight + this._zoneHeight / 2;
        return {
            x: i,
            y: n
        }
    },
    n.prototype._convertSceneToChunkCoordinate = function(e, t, i) {
        var n = Math.floor(e * t / w),
            o = Math.floor(e * i / T);
        return {
            k: n,
            l: o
        }
    },
    n.prototype.setCanvasDimensions = function(e, t) {
        this._scene.setCanvasDimensions(e, t), this._loadChunksInView()
    },
    n.prototype.stopRefreshing = function() {
        _.removeScene(this._scene)
    },
    n.prototype.crop = function(e, t, i, n) {
        this.cropPosition.x = e, this.cropPosition.y = t, this.cropPosition.width = i, this.cropPosition.height = n, this._scene.crop(e, t, i, n), this._loadChunksInView()
    },
    n.prototype.resetCropping = function() {
        this.cropPosition.x = this.cropPosition.y = 0, this.cropPosition.width = this.dimensions.width, this.cropPosition.height = this.dimensions.height, this._scene.resetCropping(), this._loadChunksInView()
    },
    n.prototype.clear = function() {
        this._scene.clean(), this._scene.clear(), this._worldMapId = 0, this._fullMapSprite = null, this._chunkSprites = {},
        this._zoomLevels = [], this._worldMapData = null, this._iconBatchData.clearIconBatch()
    },
    n.prototype._prepareIcons = function() {
        this._iconBatchData.reset(), this._iconBatchData.createIconsFromInfo(this._iconsInfo, this._worldMapId), this._iconBatchData.iconBatch = new S({
            id: "iconWorldMap_" + this._worldMapId,
            x: 0,
            y: 0,
            w: this._worldMapWidth,
            h: this._worldMapHeight,
            layer: 4,
            scene: this._scene,
            iconsData: this._iconBatchData
        });
        var e = window.gui.playerData.position.coordinates,
            t = this._convertGridToSceneCoordinate(e.posX, e.posY),
            i = "userPosition",
            n = new C(i, i, {
                color: [1, 1.1, 2, 1],
                clusterId: i
            },
            this._iconBatchData.iconDimensions.myPosition),
            o = new E(i, t.x, t.y);
        this._iconBatchData.addCluster(o), o.add(n), n.cluster = o, this._iconBatchData.addIcon(n)
    },
    n.prototype.hasIcon = function(e) {
        return this._iconBatchData.hasIcon(e)
    },
    n.prototype.getIcon = function(e) {
        return this._iconBatchData.getIcon(e)
    },
    n.prototype.addIcon = function(e, t) {
        return this._iconBatchData.createIcon(e, t)
    },
    n.prototype.removeIcon = function(e) {
        this._iconBatchData.removeIcon(e)
    },
    n.prototype.setVisibilityOfIconType = function(e, t) {
        this._iconBatchData.setVisibilityOfIconType(e, t)
    },
    n.prototype.setIconPosition = function(e, t, i) {
        this._iconBatchData.setIconPosition(e, t, i)
    },
    n.prototype.convertZoneIdToGridCoordinate = function(e) {
        var t = Math.floor(e / this._nZonesHorizontally),
            i = this._topLeftZoneCoordinate;
        return {
            i: e - t * this._nZonesHorizontally + i.i,
            j: t + i.j
        }
    },
    n.prototype.getSubAreaAtCanvasCoordinate = function(e, t) {
        var i = this.convertCanvasToGridCoordinate(e, t);
        return this.getSubAreaAtGridCoordinate(i.i, i.j)
    },
    n.prototype.getIconsAtCanvasCoordinate = function(e, t) {
        var i = this.convertCanvasToGridCoordinate(e, t),
            n = this.convertGridCoordinateToZoneId(i.i, i.j);
        return this._iconBatchData.getClusterIcons(n)
    },
    n.prototype.setupUI = function(e) {
        this._setupMapTransform(), this._setupMapTooltip(e)
    },
    n.prototype._setupMapTransform = function() {
        var e = this;
        B(this, "HIGH");
        var t, i = 0,
            n = 0;
        this.on("transformStart", function() {
            t = Date.now(), i = 0, n = 0
        }), this.on("transform", function(e, o, a, r, s) {
            t = Date.now(), i = .5 * i + .5 * -a, n = .5 * n + .5 * -r, this.move(e, o, -a, -r, s)
        }), this.on("transformEnd", function() {
            Date.now() - t > 100 || this.addInertia(i, n)
        }), this._scene.camera.on("zoomed", function() {
            e.updateGridLine()
        })
    },
    n.prototype.updateGridLine = function() {
        this._gridSprite.alpha = this._scene.camera.zoomTarget < .1 ? .3 : 1;
        var e = Math.min(1, G + (1 - this._scene.camera.zoomTarget));
        this._gridSprite.setStrength(e), this._gridSprite.alpha = 1 - Math.min(1, Math.pow(e, 5));
        var t = Math.min(1, Y + (1 - this._scene.camera.zoomTarget));
        this._zoneHighlight.setStrength(t)
    },
    n.prototype._setupMapTooltip = function(e) {
        function t(e) {
            if (h = P(m.rootElement), e = O.getCoordinatesRelativeToBody(e.x, e.y), s = e.x, c = e.y, l = s - h.left, d = c - h.top, f) {
                var t = null,
                    i = null,
                    n = l - m.cropPosition.x,
                    o = Math.min(.1 * m.cropPosition.width, 50),
                    a = 0;
                n < o ? (t = 0, a = n) : n > m.cropPosition.width - o && (t = m._worldMapWidth, a = m.cropPosition.width - n);
                var r = d - m.cropPosition.y,
                    u = 0;
                if (r < o ? (i = 0, u = r) : r > m.cropPosition.height - o && (i = m._worldMapHeight, u = m.cropPosition.height - r), null === t && null === i) v.playing && (v.stop(), m._loadChunksInView());
                else {
                    A.x = m._scene.camera.x, A.y = m._scene.camera.y, m._scene.camera.follow(A);
                    var p = {
                            x: A.x,
                            y: A.y
                        },
                        b = {},
                        g = 0,
                        _ = y;
                    null === t ? b.x = A.x : (b.x = t, Math.abs(t - A.x) > g && (g = Math.abs(t - A.x), _ = y * (o - a) / o)), null === i ? b.y = A.y : (b.y = i, Math.abs(i - A.y) > g && (g = Math.abs(i - A.y), _ = y * (o - u) / o)), v.playing || v.start(!1), M.closeTooltip(), v.reset()
                        .from(p)
                        .to(b, g / _), m._loadChunksInView()
                }
            }
        }

        function i() {
            h = P(m.rootElement)
        }

        function n(e, t) {
            var i = m.convertGridToCanvasCoordinate(e, t),
                n = m._scene.camera.zoom;
            return {
                centerX: i.x + h.left,
                centerY: i.y + h.top,
                width: Math.round(m._zoneWidth * n),
                height: Math.round(m._zoneHeight * n)
            }
        }

        function o(e, t, i) {
            var n = e.subAreaData,
                o = m.getSubAreaAtGridCoordinate(t, i);
            if (e.setCoordinates(t, i), o) {
                if (o && o !== n) {
                    n && m.removeSubAreaHighlight(n.id), e.subAreaData = n = o, e.setSubArea(n);
                    var a = N.entities.prism[n.id];
                    if (a && a.prism) {
                        var r = a.getAlliance();
                        e.setAlliance(r);
                        var s = x.hexToRgb(r.allianceEmblem.backgroundColor.toString(16));
                        m.addSubAreaHighlight(n.id, [s[0] / 255, s[1] / 255, s[2] / 255, .25])
                    } else e.unsetAlliance(), m.addSubAreaHighlight(n.id, [1, 0, 0, .25])
                }
            } else n && (m.removeSubAreaHighlight(n.id), n = null), e.unsetSubArea();
            var c = m._iconBatchData.getClusterIcons(m.convertGridCoordinateToZoneId(t, i));
            c ? (e.setIcons(c, m._iconsImage), e.displayIcons()) : n ? e.displaySubArea() : e.displayCoordinates()
        }

        function a() {
            if (!v.playing) {
                var e = m.convertCanvasToGridCoordinate(l, d);
                if ((u !== e.i || p !== e.j) && f) {
                    u = e.i, p = e.j, m.setHighlightOn(u, p), o(g, u, p);
                    var t = n(u, p),
                        i = 2 * H;
                    M.openTooltipAt(t.centerX, t.centerY, t.width + i, t.height + i)
                }
            }
        }

        function r(e) {
            t(q(e)), a()
        }
        D(this);
        var s, c, l, d, u, p, h, f, b = window.gui,
            m = this,
            M = b.tooltipBox,
            g = new W;
        this.on("tap", function() {
            if (m._worldMapData && !m.isSelecting) {
                m.isSelecting = !0;
                var e = m.convertCanvasToGridCoordinate(l, d),
                    t = this.convertGridCoordinateToZoneId(e.i, e.j);
                e.icons = this._iconBatchData.getClusterIcons(t),
                b.openContextualMenu("map", e),
                m.setHighlightOn(e.i, e.j),
                window.setTimeout(function() {
                    m.isSelecting = !1
                }, 500)
            }
        });
        var _ = R.getContextMenu("map");
        _.on("open", function(e) {
            o(_.worldMapTooltip, e.i, e.j)
        }),
        _.on("close", function(e) {
            "reopen" !== e && m.hideHighlight()
        });
        var A = {},
            v = new k(A, ["x", "y"]);
        v.onFinish(function() {
            m._loadChunksInView()
        });
        var y = 50;
        this.on("dom.touchstart", function(e) {
            this.stopMovingWorldMap(), t(q(e))
        }),
        e.on("positioned", i), e.on("resize", function() {
            i(), m.updateGridLine()
        }),
        L(this, g),
        this.on("tooltipOn", function() {
            f = !0, M.closeForRecomputing(), a(), b.wBody.on("dom.touchmove", r)
        }),
        this.on("tooltipOut", function() {
            f = !1, b.wBody.removeListener("dom.touchmove", r);
            var e = g.subAreaData;
            e && m.removeSubAreaHighlight(e.id), m.hideHighlight(), v.playing && v.stop(), e = u = p = null
        })
    }
}
