function(e, t, i) {
    // MapRenderer
    function n(mapScene, t) {
        a.call(this);
        var i = this;
        this.mapId = null,
        this.map = null,
        this.mapScene = mapScene,
        this.background = t,
        this.grid = new o,
        this._pingHighlight = {},
        A.on("gameContextChanged", this.onGameContextChanged.bind(this)),
        this.graphics = [],
        this.statedElements = [],
        this.interactiveElements = {},
        this.identifiedElements = {},
        this.objects = {},
        this.animatedElements = [],
        this._paddocksInstanceProperties = [],
        this._currentPaddockInstance = -1,
        this.cellHintManager = new m,
        this.isReady = !1,
        _.on("FarmSelectionMessage", function(e) {
            i._currentPaddockInstance = e.farmInstanceId
             window.isoEngine.resetLastTap()
        }), 
        _.on("RealEstatePropertiesMessage", function(e) {
            i._paddocksInstanceProperties = e.farm
        })
    }
    var o = i(1491),
        a = i(36).EventEmitter,
        r = i(56).inherits,
        s = i(913),
        contants = i(13),
        l = i(1492),
        d = i(700),
        u = i(1174),
        p = i(1493),
        h = i(1494),
        f = i(1495),
        b = i(1496),
        m = i(1497),
        M = i(1498),
        g = i(1499),
        _ = i(105),
        A = i(103),
        O = i(1501),
        v = i(60),
        y = i(1001),
        z = i(129),
        w = i(1503),
        Logger = i(34).logger,
        BACKGROUND_PATH = contants.BACKGROUND_PATH,
        FOREGROUND_PATH = contants.FOREGROUND_PATH,
        S = {
            r: 255,
            g: 0,
            b: 0,
            a: .75
        },
        E = {
            r: 0,
            g: 0,
            b: 0,
            a: 1
        },
        L = 1,
        N = 2,
        R = 52,
        q = {
            1: "ui/embedded/square_nothing.png",
            2: "ui/embedded/square_myself.png",
            3: "ui/embedded/square_enemy.png",
            4: "ui/embedded/square_ally.png",
            5: "ui/embedded/square_summoning.png"
        },
        x = -contants.CELL_HEIGHT / 4,
        B = new w(Logger);
    r(n, a),
    e.exports = n,
    n.prototype.initialize = function() {
        b.initialize(), this.cellHintManager.initialize()
    },
    n.prototype.setMap = function(e, t) {
        var i = e.mapData;
        this.map = i, this.mapId = i.id, this.grid.initialize(i.cells, A.isRoleplayMode), this.loadMap(e, t)
    },
    n.prototype.releaseMap = function(e) {
        e !== this.mapId && (window.isoEngine.tacticalMode.hide(), this.mapScene.clean(), this.isReady = !1, this.graphics = [], this.statedElements = [], this.interactiveElements = {}, this.identifiedElements = {}, this.objects = {}, this.animatedElements = [], this._paddocksInstanceProperties = [], this.mapId = null, this.map = null)
    },
    n.prototype.stopAnimatedElements = function() {
        for (var e = this.animatedElements, t = 0; t < e.length; t++) e[t].stop()
    },
    n.prototype.startAnimatedElements = function() {
        for (var e = this.animatedElements, t = 0; t < e.length; t++) e[t].animate()
    }, 
    n.prototype.loadMap = function(e, t) {
        for (var i = e.mapData, n = e.msg, o = {}, a = n.statedElements, r = 0; r < a.length; r++) o[a[r].elementId] = !0;
        this.graphics = [], this.statedElements = [], this.animatedElements = [];
        var s = new O(this, t);
        s.nAssetsToLoad += 1;
        var l = new p({
            id: "mapSceneStaticSprites" + this.mapId,
            scene: this.mapScene,
            holdsStatics: !0
        });
        this.graphics.push(l);
        var h = i.atlasLayout,
            f = h.graphicsPositions;
        s.loadAtlas(h, l);
        for (var b, m = i.midgroundLayer, M = Object.keys(m), g = 0; g < M.length; g++)
            for (var _ = M[g], y = m[_], z = 0; z < y.length; z++) {
                var w = y[z];
                w.position = parseInt(_, 10), w.layer = contants.MAP_LAYER_PLAYGROUND, w.scene = this.mapScene;
                var T = w.hue;
                if (T[0] = 1 + T[0] / 127, T[1] = 1 + T[1] / 127, T[2] = 1 + T[2] / 127, T[3] = 1, w.look)
                    if (w.id && o[w.id]) b = s.loadStatedElement(w), this.statedElements.push(b);
                    else {
                        if (!w.anim) {
                            console.warn("[MapRenderer.loadMap] Animated Graphic skipped", w);
                            continue
                        }
                        b = s.loadAnimatedGraphic(w), this.animatedElements.push(b), this.graphics.push(b)
                    }
                else {
                    if (!w.g) {
                        console.warn("[MapRenderer.loadMap] Element of unidentified type skipped", w);
                        continue
                    }
                    b = l.addSprite(w, f[w.g])
                }
                b.id && (this.identifiedElements[b.id] = b)
            }
        l.finalize(h.width, h.height);
        var S = this,
            E = BACKGROUND_PATH + i.id + ".jpg";
        if (s.nAssetsToLoad += 1, d.loadTexture(E, function(e) {
                S.background.updateMap(e), s.notifyAssetAsLoaded()
            }, this.mapScene.renderer, "linear"), i.foreground) {
            var L = new u({
                x: -contants.HORIZONTAL_OFFSET,
                y: -contants.VERTICAL_OFFSET,
                w: contants.MAP_SCENE_WIDTH,
                h: contants.MAP_SCENE_HEIGHT,
                scene: this.mapScene,
                layer: contants.MAP_LAYER_FOREGROUND,
                position: 0
            });
            this.graphics.push(L);
            var N = FOREGROUND_PATH + i.id + ".png";
            s.nAssetsToLoad += 1, d.loadTexture(N, function(e) {
                if ("empty_texture" === e.id) {
                    L.remove();
                    var t = S.graphics.indexOf(L);
                    t !== -1 && S.graphics.splice(t, 1)
                } else L.texture = e, L.forceRefresh();
                s.notifyAssetAsLoaded()
            }, this.mapScene.renderer, "linear")
        }
        s.notifyAssetAsLoaded();
        var R = v.getValue("tacticModeEngaged", !0);
        this.once("ready", function() {
            R && A.isFightMode && window.isoEngine.tacticalMode.show()
        })
    }, n.prototype.onGameContextChanged = function() {
        this.removeMovementFeedback(), A.isFightMode ? this.switchGameContextFight() : this.switchGameContextRoleplay()
    }, n.prototype.switchGameContextFight = function() {
        this.stopAnimatedElements();
        for (var e = 0; e < this.statedElements.length; e++) {
            var t = this.statedElements[e];
            t.changeState(1, !0)
        }
        for (var i in this.objects) this.objects[i].remove();
        this.objects = {}, this.map && this.grid.initialize(this.map.cells, !1)
    }, n.prototype.switchGameContextRoleplay = function() {
        this.startAnimatedElements(), this.map && this.grid.initialize(this.map.cells, !0)
    }, n.prototype.addObjects = function(e) {
        if (!this.isReady) {
            var t = this,
                i = this.mapId;
            return this.once("ready", function() {
                t.mapId === i && t.addObjects(e)
            })
        }
        for (var n = 0; n < e.length; n++) {
            var o = e[n];
            if (o.img) {
                var a = this.getCellSceneCoordinate(o.cellId);
                o.x = a.x - R / 2, o.y = a.y - R / 2 + x, o.position = o.cellId, o.w = R, o.h = R, o.scene = this.mapScene;
                var r = this.mapScene.createTexture(o.img, "object:" + o.objectGID),
                    s = new u(o, r);
                this.objects[o.cellId] = s
            } else console.error("createObjectGfx: no img for " + JSON.stringify(o))
        }
    }, n.prototype.removeObjects = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t],
                n = this.objects[i];
            n && (n.remove(), delete this.objects[i])
        }
    }, n.prototype.setInteractiveElements = function(e) {
        function t(e) {
            return e.element === i.elementId
        }
        this.interactiveElements = {}, this.calligraphyElements = {};
        for (var i = {}, n = y[this.mapId] ? y[this.mapId] : [], o = 0, a = e.length; o < a; o++) i = e[o], n.some(t) ? this.calligraphyElements[i.elementId] = i : this.interactiveElements[i.elementId] = i
    }, n.prototype.updateInteractiveElements = function(e) {
        function t(e) {
            return e.element === n.elementId
        }
        for (var i = this.interactiveElements, n = {}, o = y[this.mapId] ? y[this.mapId] : [], a = 0; a < e.length; a++)
            if (n = e[a], o.some(t)) this.calligraphyElements[n.elementId] = n;
            else {
                var r = i[n.elementId];
                r ? (r.disabledSkills = n.disabledSkills, r.enabledSkills = n.enabledSkills) : console.warn("Interactive element id " + n.elementId + " does not exist.")
            }
    }, n.prototype.setStatedElements = function(e) {
        for (var t = 0, i = e.length; t < i; t++) {
            var n = e[t],
                o = this.identifiedElements[n.elementId];
            o ? o instanceof l && (A.isFightMode ? (o.state = -1, o.changeState(1)) : o.changeState ? o.changeState(n.elementState) : o.state = n.elementState) : console.warn("stated element not identified:" + n.elementId + ", cellId=" + n.elementCellId)
        }
    }, n.prototype.updateStatedElements = function(e) {
        for (var t = this.identifiedElements, i = 0, n = e.length; i < n; i++) {
            var o = e[i],
                a = t[o.elementId];
            a ? a.changeState ? a.changeState(o.elementState) : (console.warn("Identified element " + o.elementId + " is not a stated element."), a.state = o.elementState) : console.warn("Identified element " + o.elementId + " not found.")
        }
    }, n.prototype.getCurrentPaddockInstanceProperties = function() {
        if (this._currentPaddockInstance < 0) return null;
        for (var e = 0; e < this._paddocksInstanceProperties.length; e++)
            if (this._paddocksInstanceProperties[e].farmId === this._currentPaddockInstance) return this._paddocksInstanceProperties[e];
        return null
    }, n.prototype.isCurrentMapPaddockInstance = function(e) {
        if (this._currentPaddockInstance < 0) return !1;
        for (var t = 0; t < this._paddocksInstanceProperties.length; t++)
            if (this._paddocksInstanceProperties[t].farmId === e) return !0;
        return !1
    }, n.prototype.getPaddocksInstanceProperties = function() {
        return this._paddocksInstanceProperties
    }, n.prototype.isFarmOnMap = function() {
        return this._paddocksInstanceProperties.length > 0
    }, n.prototype.isPaddock = function(e) {
        var t = e.id;
        if (!t) return !1;
        var i = this.interactiveElements[t];
        return !!i && i.elementTypeId === contants.ELEMENT_TYPE_ID.PADDOCK
    }, n.prototype.addArrowsOnCellsOneShot = function(e, t, i, n) {
        for (var o = [], a = 0; a < e.length; a++) o[a] = this.getCellSceneCoordinate(e[a]), o[a].x += t || 0, o[a].y += i || 0;
        h.addArrowsOneShot(o, e, n, this.mapScene)
    }, n.prototype.addTapFeedback = function(e, t) {
        b.addTapFeedback({
            x: e,
            y: t
        })
    }, n.prototype.addMovementFeedback = function(e) {
        var t = this.getCellSceneCoordinate(e);
        b.addMovementFeedback({
            x: t.x,
            y: t.y,
            position: e
        })
    }, n.prototype.removeTapFeedback = function() {
        b.removeTapFeedback()
    }, n.prototype.removeMovementFeedback = function() {
        b.removeMovementFeedback()
    }, n.prototype.addArrowOnCell = function(e, t, i, n, o) {
        var a = this.getCellSceneCoordinate(e);
        a.x += t || 0, a.y += i || 0, h.addArrow(a, e, n, this.mapScene, o)
    }, n.prototype.addArrowOnGraphic = function(e, t, i, n, o) {
        if (!e || !e.bbox) return console.warn("addArrowOnGraphic: invalid graphic entity");
        var a = {
            x: (e.bbox[0] + e.bbox[1]) / 2 + (t || 0),
            y: (e.bbox[2] + e.bbox[3]) / 2 + (i || 0)
        };
        h.addArrow(a, null, n, this.mapScene, o)
    }, n.prototype.addArrowsSequence = function(e, t, i, n) {
        for (var o = [], a = 0; a < e.length; a++) o[a] = this.getCellSceneCoordinate(e[a]), o[a].x += t || 0, o[a].y += i || 0;
        h.addArrowsSequence(o, e, n, this.mapScene)
    }, n.prototype.removeArrows = function() {
        h.removeArrows()
    }, n.prototype.addPingPictoOnCell = function(e, t, i) {
        var n = this.getCellSceneCoordinate(e);
        f.addPingPicto(e, n, e, t, i)
    }, n.prototype.removePingPicto = function(e) {
        f.removePingPicto(e)
    }, n.prototype.removeAllPingPictos = function() {
        f.removeAllPingPictos()
    }, n.prototype.addCellHighlight = function(e, t, i, n) {
        i = i || S, n = n || E;
        for (var o = 0, a = t.length; o < a; o += 1) {
            var r = t[o],
                s = "rgba(" + i.r + "," + i.g + "," + i.b + "," + i.a + ")",
                c = "rgba(" + n.r + "," + n.g + "," + n.b + "," + n.a + ")";
            window.background.addZone(new g([r], {
                color: s,
                outline: c
            }), e)
        }
    }, n.prototype.addPingHighlight = function(e, t, i) {
        function n(n) {
            o._pingHighlight[e] ? (o._pingHighlight[e].texture = n, o._pingHighlight[e].forceRefresh()) : n.release(), i && a.openPingBox(e, t)
        }
        if (e) {
            t = t || 1;
            var o = this,
                a = window.gui.pingSystem;
            this._pingHighlight[e] && this.deletePingHighlight(e);
            var r = window.isoEngine.mapRenderer.getCellSceneCoordinate(e);
            this._pingHighlight[e] = new u({
                layer: contants.MAP_LAYER_BACKGROUND,
                position: e,
                x: r.x - contants.CELL_WIDTH / 2,
                y: r.y - contants.CELL_HEIGHT / 2,
                w: contants.CELL_WIDTH,
                h: contants.CELL_HEIGHT,
                scene: o.mapScene
            });
            var s = q[t];
            d.loadTexture(s, n, this.mapScene.renderer)
        }
    }, n.prototype.deletePingHighlights = function() {
        var e = this;
        Object.keys(this._pingHighlight)
            .forEach(function(t) {
                e._pingHighlight[t].remove(), e._pingHighlight[t] = null
            })
    }, n.prototype.deletePingHighlight = function(e) {
        this._pingHighlight[e] && (this._pingHighlight[e].remove(), this._pingHighlight[e] = null)
    }, n.prototype.deleteCellHighlight = function(e) {
        window.background.deleteZoneById(e)
    }, n.prototype.updateObstacles = function(e) {
        if (!this.isReady) {
            var t = this,
                i = this.mapId;
            return void this.once("ready", function() {
                t.mapId === i && t.updateObstacles(e)
            })
        }
        if (!this.map) return void console.error(new Error("map is null, isReady is " + this.isReady));
        for (var n = this.map.cells, o = 0, a = e.length; o < a; o++) {
            var r = e[o],
                s = r.obstacleCellId,
                c = n[s],
                l = c.l;
            r.state === L ? c.l |= 1 : r.state === N && (c.l &= 254), this.grid.updateCellState(s, c, l), M.updateCellPath(s, c)
        }
    }, n.prototype.isWalkable = function(e) {
        var t = A.isFightMode ? 5 : 1;
        return 1 === (this.map.cells[e].l & t)
    }, n.prototype.isFarmCell = function(e) {
        return 32 === (32 & this.map.cells[e].l)
    }, n.prototype.isVisibleCell = function(e) {
        return 64 === (64 & this.map.cells[e].l)
    }, n.prototype.getChangeMapFlags = function(e) {
        return this.map ? B.getChangeMapFlags(this.map.cells, this.mapId, e) : (console.error(new Error("map is null, isReady is " + this.isReady)), {})
    }, n.prototype.getFirstMapFlag = function(e) {
        var t = window.gui.scenarioManager,
            i = this.getChangeMapFlags(e);
        return i.left && !t.isBehaviourEnabled(z.DISABLE_LEFT_SLIDE_CHANGEMAP) ? "left" : i.right && !t.isBehaviourEnabled(z.DISABLE_RIGHT_SLIDE_CHANGEMAP) ? "right" : i.top && !t.isBehaviourEnabled(z.DISABLE_TOP_SLIDE_CHANGEMAP) ? "top" : i.bottom && !t.isBehaviourEnabled(z.DISABLE_BOTTOM_SLIDE_CHANGEMAP) ? "bottom" : null
    }, n.prototype.getCellId = function(e, t) {
        return this.grid.getCellAtSceneCoordinate({
            x: e,
            y: t
        })
    }, n.prototype.getCellSceneCoordinate = function(e) {
        var t = s.getCellCoord(e);
        if (this.isReady) {
            if (!this.map) return console.error(new Error("map is null, cannot add cell elevation.")), t;
            t.y -= this.map.cells[e].f || 0
        }
        return t
    }, n.prototype.hideStatedElements = function() {
        for (var e = 0; e < this.statedElements.length; e++) this.statedElements[e].hide()
    }, n.prototype.showStatedElements = function() {
        for (var e = 0; e < this.statedElements.length; e++) this.statedElements[e].show()
    }, n.prototype.hideGraphics = function() {
        for (var e = 0; e < this.graphics.length; e++) this.graphics[e].hide()
    }, n.prototype.showGraphics = function() {
        for (var e = 0; e < this.graphics.length; e++) this.graphics[e].show()
    }
}
