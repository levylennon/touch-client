function(e, t, i) {
    function n(e, t) {
        return e._layer === t._layer ? e._position - t._position : e._layer - t._layer
    }

    function o() {
        var e = document.createElement("canvas");
        e.width = 128, e.height = 128;
        var t = e.getContext("2d");
        return t.fillStyle = "rgba(200, 100, 30, 0.27)", t.fillRect(0, 0, 128, 128), t.lineWidth = 2, t.strokeStyle = "rgba(200, 100, 30, 0.9)", t.strokeRect(0, 0, 128, 128), e
    }

    function a(e) {
        void 0 === e.name && console.error("[Scene] Parameter `name` required."), void 0 === e.canvas && console.error("[Scene] Parameter `canvas` required."), void 0 === e.pixelRatio && console.error("[Scene] Parameter `pixelRatio` required."), void 0 === e.textureRatio && e.usePrecisionRendering && console.error("[Scene] Parameter `textureRatio` required."), void 0 === e.w && console.error("[Scene] Parameter `w` required."), void 0 === e.h && console.error("[Scene] Parameter `h` required."), void 0 === e.t && console.error("[Scene] Parameter `t` required."), void 0 === e.l && console.error("[Scene] Parameter `l` required."),
            void 0 === e.nbCacheableSprites && console.error("[Scene] Parameter `nbCacheableSprites` required."), void 0 === e.textureMemoryCacheSize && console.error("[Scene] Parameter `textureMemoryCacheSize` required."), void 0 === e.prerenderQualityRatio && console.error("[Scene] Parameter `prerenderQualityRatio` required."), this.name = e.name, this.canvas = e.canvas, this.canvas.id = this.name + "-canvas", this.maxZoom = e.maxZoom || 1, this.pixelRatio = e.pixelRatio, this.sceneTextureRatio = e.textureRatio, this.viewWidth = this.canvas.width, this.viewHeight = this.canvas.height, this.adjustToCanvasRatio = e.adjustToCanvasRatio || !1, this.w = e.w, this.h = e.h, this.l = e.l, this.t = e.t, this.r = this.l + this.w, this.b = this.t + this.h;
        var t = this.w / 2 + this.l,
            i = this.h / 2 + this.t;
        this.camera = new r(t, i, 1, this.l, this.r, this.t, this.b, this.canvas.width, this.canvas.height, this.maxZoom), e.cameraAcceleration && this.camera.setDefaultAcceleration(e.cameraAcceleration), this.cropping = {
            x: -(1 / 0),
            y: -(1 / 0),
            w: 1 / 0,
            h: 1 / 0,
            isActive: !1
        }, this.displayList = new s(n), this.hudDisplayList = new s(n), this.staticElements = {
            sprites: [],
            render: function(e, t) {
                this.sprites.forEach(function(i) {
                    i.draw(e, t)
                })
            },
            add: function(e) {
                return this.sprites.push(e), e
            },
            removeByRef: function(e) {
                var t = this.sprites.indexOf(e);
                return t !== -1 && (this.sprites.splice(t, 1), !0)
            },
            reposition: function(e) {
                return e
            },
            clear: function() {
                this.sprites.forEach(function(e) {
                    e.remove()
                }), this.sprites = []
            }
        }, this.updateList = [], this.renderer = new c(this.canvas, 0, 0, e.nbCacheableSprites, e.textureMemoryCacheSize, e.prerenderQualityRatio, (!1)), this._debug = !1, this._textureDebug = this.createTexture(o(), "mapDebug", "linear", "permanent"), this.usePrecisionRendering = e.usePrecisionRendering || !1, this.usePrecisionRendering ? (this.areasToRefresh = [], this.sceneRendering = this.renderer.startTextureUsage(this.r - this.l, this.b - this.t, this.sceneTextureRatio, this.name), this.sceneTextureRatio = this.sceneRendering.width / (this.r - this.l), this.renderingProgram = this.renderer._programFiltering, this.renderingParams = {
            ratio: .15,
            resolution: 250
        }, this.refresh = this._refreshPrecisionRendering, this.render = this._compositePrecisionRendering, this.clear = this._clearPrecisionRendering) : (this.refresh = this._refresh, this.render = this._composite, this.clear = this._clear), this.setCanvasDimensions(this.canvas.width, this.canvas.height)
    }
    var r = i(1173),
        s = i(93),
        c = i(719);
    e.exports = a, a.prototype.togglePixelArt = function() {
        this.renderingProgram === this.renderer._programPixelArt ? this.renderingProgram = this.renderer._programFiltering : this.renderingProgram = this.renderer._programPixelArt
    }, a.prototype.setShader = function(e) {
        switch (e) {
            case "pixelArt":
                this.renderingProgram = this.renderer._programPixelArt;
                break;
            case "mapTransition":
                this.renderingProgram = this.renderer._programMapTransition;
                break;
            default:
                this.renderingProgram = this.renderer._programFiltering
        }
    }, a.prototype._limitBoundArea = function(e) {
        e[0] = Math.min(this.r, Math.max(this.l, e[0])), e[1] = Math.min(this.r, Math.max(this.l, e[1])), e[2] = Math.min(this.b, Math.max(this.t, e[2])), e[3] = Math.min(this.b, Math.max(this.t, e[3]))
    }, a.prototype._setSceneTransform = function() {
        var e = this.canvas.width / this.w,
            t = this.canvas.height / this.h,
            i = Math.max(e, t),
            n = Math.max(0, this.cropping.x) * this.pixelRatio,
            o = Math.max(0, this.cropping.y) * this.pixelRatio;
        this.renderer.setTransform(i, 0, 0, i, n, o)
    }, a.prototype._setFieldOfView = function() {
        this.viewWidth = Math.min(this.cropping.w, this.canvas.width / this.pixelRatio), this.viewHeight = Math.min(this.cropping.h, this.canvas.height / this.pixelRatio), this.camera.setFieldOfView(this.viewWidth, this.viewHeight), this._setSceneTransform()
    }, a.prototype.setCanvasDimensions = function(e, t, i, n, o) {
        if (void 0 !== o && (this.canvas.style.position = o), this._viewWidth === e && this._viewHeight === t && this._viewLeft === i && this._viewTop === n) return !1;
        this._viewWidth = e, this._viewHeight = t, this._viewLeft = i, this._viewTop = n, this.canvas.style.width = e.toString() + "px", this.canvas.style.height = t.toString() + "px", void 0 !== i && (this.canvas.style.left = i + "px"), void 0 !== n && (this.canvas.style.top = n + "px");
        var a = e * this.pixelRatio,
            r = t * this.pixelRatio;
        if (this.canvas.width = a, this.canvas.height = r, this.renderer.resetDimension(a, r), this.adjustToCanvasRatio) {
            var s = this.h * a / r;
            this.setDimensions(this.l, this.t, s, this.h)
        }
        return this._setFieldOfView(), !0
    }, a.prototype.setDimensions = function(e, t, i, n) {
        this.w = i, this.h = n, this.l = e, this.t = t, this.r = this.l + this.w, this.b = this.t + this.h, this.camera.setBounds(this.l, this.r, this.t, this.b), this._setSceneTransform()
    }, a.prototype.requireCompleteRefresh = function() {
        this.areasToRefresh.push([this.l, this.r, this.t, this.b])
    }, a.prototype._refresh = function(e) {
        var t = this.camera.updatePosition(e);
        if (0 !== this.updateList.length || t !== !1) {
            if (this.renderer.clear(), this.cropping.isActive) {
                var i = this.pixelRatio,
                    n = Math.ceil(i * this.cropping.x),
                    o = Math.ceil(i * this.cropping.y),
                    a = Math.ceil(i * this.cropping.w),
                    r = Math.ceil(i * this.cropping.h);
                o = this.canvas.height - r - o,
                this.renderer.enableScissor(n, o, a, r)
            }
            this._composite(), this.cropping.isActive && this.renderer.disableScissor()
        }
    }, a.prototype._composite = function() {
        for (var e = 0; e < this.updateList.length; e += 1) this.updateList[e].refreshAnimation();
        this.updateList.length = 0;
        var t = this.pixelRatio * this.camera.zoom * Math.min(this.w / this.canvas.width, this.h / this.canvas.height);
        this.renderer.save(),
        this.renderer.translate(t / this.camera.zoom * this.viewWidth / 2, t / this.camera.zoom * this.viewHeight / 2), this.renderer.scale(t, t), this.renderer.translate(-this.camera.x, -this.camera.y);
        for (var i = this.displayList.first; null !== i; i = i.next) i.object.render();
        this._debug && this._renderDebug(), this.renderer.restore()
    }, a.prototype._renderDebug = function() {
        for (var e = this.displayList.first; null !== e; e = e.next) {
            var t = e.object;
            this.renderer.drawImage(this._textureDebug, t.x, t.y, t.w, t.h)
        }
    }, a.prototype._refreshPrecisionRendering = function(e) {
        var t = this.camera.updatePosition(e);
        if (0 !== this.updateList.length) {
            for (var i = 0; i < this.updateList.length; i += 1) this.updateList[i].refreshAnimation(this.areasToRefresh);
            this.updateList.length = 0
        }
        if (0 !== this.areasToRefresh.length) {
            for (var n = 0; n < this.areasToRefresh.length; n += 1) this._limitBoundArea(this.areasToRefresh[n]);
            for (var o = 0; o < this.areasToRefresh.length; o += 1) {
                var a = this.areasToRefresh[o];
                if (a[1] <= a[0] || a[3] <= a[2]) this.areasToRefresh.splice(o, 1), o -= 1;
                else
                    for (var r = 0; r < this.areasToRefresh.length; r += 1)
                        if (o !== r) {
                            var s = this.areasToRefresh[r],
                                c = (a[0] - s[1]) * (s[0] - a[1]) > 0,
                                l = (a[2] - s[3]) * (s[2] - a[3]) > 0;
                            c && l && (a[0] = Math.min(a[0], s[0]), a[1] = Math.max(a[1], s[1]), a[2] = Math.min(a[2], s[2]), a[3] = Math.max(a[3], s[3]), this.areasToRefresh.splice(r, 1), r -= 1, r < o && (o -= 1))
                        }
            }
            this._refreshAreas(), t = !0
        }(t || this.hudDisplayList.count > 0) && (this._compositePrecisionRendering(), this._debug && this._renderDebugPrecisionRendering(this.areasToRefresh), this.areasToRefresh.length = 0), this.areasToRefresh.length > 0 && (this.areasToRefresh.length = 0)
    };
    var l = {
            layer: -(1 / 0)
        },
        d = {
            layer: 1 / 0
        };
    a.prototype._refreshAreas = function() {
        this.renderer.startTextureRendering(this.sceneRendering, this.l, this.r, this.t, this.b);
        for (var e = l, t = 0; t < this.areasToRefresh.length; t += 1) {
            var i = this.areasToRefresh[t];
            this._limitBoundArea(i);
            var n = Math.floor(this.sceneTextureRatio * (i[0] - this.l)) - 1,
                o = Math.floor(this.sceneTextureRatio * (i[2] - this.t)) - 1,
                a = Math.ceil(this.sceneTextureRatio * (i[1] - i[0])) + 2,
                r = Math.ceil(this.sceneTextureRatio * (i[3] - i[2])) + 2;
            this.renderer.enableScissor(n, o, a, r);
            for (var s = this.displayList.first; null !== s; s = s.next) {
                var c = s.object,
                    u = c.bbox;
                if (!(u[0] >= u[1])) {
                    var p = (i[0] - u[1]) * (u[0] - i[1]) >= 0,
                        h = (i[2] - u[3]) * (u[2] - i[3]) >= 0;
                    p && h && (this.staticElements.render(e, c), e = c, c.render())
                }
            }
            this.staticElements.render(e, d)
        }
        this.renderer.stopTextureRendering(), this.renderer.disableScissor()
    }, a.prototype._compositePrecisionRendering = function() {
        var e = this.pixelRatio * this.camera.zoom * Math.min(this.w / this.canvas.width, this.h / this.canvas.height);
        if (this.renderer.disableBlending(), this.renderer.useProgram(this.renderingProgram, this.renderingParams), this.renderer.drawImage(this.sceneRendering.texture, this.w / 2 - (this.camera.x - this.l) * e, this.h / 2 - (this.camera.y - this.t) * e, e * this.w, e * this.h), this.renderer.stopProgram(), this.renderer.enableBlending(), this.hudDisplayList.count > 0) {
            this.renderer.useProgram(this.renderer._programRegular);
            for (var t = this.hudDisplayList.first; null !== t; t = t.next) t.object.render();
            this.renderer.stopProgram()
        }
    }, a.prototype._renderDebugPrecisionRendering = function(e) {
        var t = this.camera.zoom * this.pixelRatio * this.w / this.canvas.width;
        this.renderer.save(), this.renderer.translate(this.w / 2, this.h / 2), this.renderer.scale(t, t), this.renderer.translate(-(this.camera.x - this.l), -(this.camera.y - this.t)), this.renderer.enableBlending();
        for (var i = 0; i < e.length; i += 1) {
            var n = e[i],
                o = n[0] - this.l,
                a = n[2] - this.t,
                r = n[1] - n[0],
                s = n[3] - n[2];
            this.renderer.drawImage(this._textureDebug, o, a, r, s)
        }
        this.renderer.restore()
    }, a.prototype.crop = function(e, t, i, n) {
        this.cropping.isActive = !0, this.cropping.x = e, this.cropping.y = t, this.cropping.w = i, this.cropping.h = n, this._setFieldOfView()
    }, a.prototype.resetCropping = function() {
        this.cropping.isActive = !1, this.cropping.x = -(1 / 0), this.cropping.y = -(1 / 0), this.cropping.w = 1 / 0, this.cropping.h = 1 / 0, this._setFieldOfView()
    }, a.prototype.convertSceneToCanvasCoordinate = function(e, t) {
        var i = Math.max(0, this.cropping.x),
            n = Math.max(0, this.cropping.y);
        return {
            x: (e - this.camera.x + this.camera.fovW / 2) * this.camera.zoom + i,
            y: (t - this.camera.y + this.camera.fovH / 2) * this.camera.zoom + n
        }
    }, a.prototype.convertCanvasToSceneCoordinate = function(e, t) {
        var i = Math.max(0, this.cropping.x),
            n = Math.max(0, this.cropping.y);
        return {
            x: (e - i) / this.camera.zoom + this.camera.x - this.camera.fovW / 2,
            y: (t - n) / this.camera.zoom + this.camera.y - this.camera.fovH / 2
        }
    }, a.prototype.move = function(e, t, i, n, o) {
        e -= Math.max(0, this.cropping.x), t -= Math.max(0, this.cropping.y), this.camera.transform(e, t, i, n, o)
    }, a.prototype.toggleDebugMode = function() {
        this._debug = !this._debug
    }, a.prototype.showSprites = function(e) {
        for (var t = 0; t < e.length; t++) e[t].show()
    }, a.prototype.hideSprites = function(e) {
        for (var t = 0; t < e.length; t++) e[t].hide()
    }, a.prototype.createTexture = function(e, t, i, n) {
        return this.renderer.createTexture(e, t, i, n)
    }, a.prototype.useTexture = function(e) {
        return this.renderer.useTexture(e)
    }, a.prototype.holdTexture = function(e) {
        return this.renderer.holdTexture(e)
    }, a.prototype.clean = function() {
        for (var e = this.displayList.first; null !== e;) {
            var t = e.next;
            e.object.remove(), e = t
        }
        this.staticElements.clear()
    }, a.prototype._clear = function(e, t, i, n) {
        this.renderer.setClearColor(e, t, i, n), this.renderer.clear(), this.renderer.resetClearColor()
    }, a.prototype._clearPrecisionRendering = function(e, t, i, n) {
        this.renderer.startTextureRendering(this.sceneRendering, this.l, this.r, this.t, this.b), this.renderer.setClearColor(e, t, i, n), this.renderer.clear(), this.renderer.stopTextureRendering(), this.renderer.clear(), this.renderer.resetClearColor()
    }, a.prototype.getImage = function(e, t) {
        var i = this.viewWidth,
            n = this.viewHeight;
        this.refresh(200), this.setCanvasDimensions(t * (i / n), t);
        var o = 4;
        this.render(200), this.renderer.clear(), this.renderer.drawImage(this.sceneRendering.texture, this.w / 2 - (e.x - this.l) * o, this.h / 2 - (e.y - 10 - this.t) * o, o * this.w, o * this.h);
        var a = this.canvas.toDataURL("image/png");
        return this.setCanvasDimensions(i, n), this.render(200), a
    }
}
