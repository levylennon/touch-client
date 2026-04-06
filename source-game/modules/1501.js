function(e, t, i) {
    function n(e, t) {
        this.mapRenderer = e,
        this.onLoadedCallback = t,
        this.nAssetsLoaded = 0,
        this.nAssetsToLoad = 0,
        this._atlas = document.createElement("canvas"),
        this._atlasContext = this._atlas.getContext("2d"),
        this.obsolete = !1,
        null !== u && (u.obsolete = !0);
        var i = this;
        u = i
    }
    var o = i(697),
        a = i(1492),
        r = i(103),
        s = i(1502),
        c = i(12),
        l = i(13),
        d = l.IMG_PATH,
        u = null;
    e.exports = n,
    n.prototype.notifyAssetAsLoaded = function() {
        if (this.nAssetsLoaded += 1, window.isoEngine.showLoadingProgress(this.nAssetsLoaded / this.nAssetsToLoad), this.nAssetsLoaded === this.nAssetsToLoad) {
            if (this.onLoadedCallback(), this.onLoadedCallback = null, this.obsolete) return;
            this.mapRenderer.isReady = !0, this.mapRenderer.emit("ready"), this.obsolete = !0
        }
    },
    n.prototype.loadStatedElement = function(e) {
        var t = new a(e),
            i = this;
        return this.nAssetsToLoad += 1, o.loadAnimationManager(t, "bone", e.look + "/state", function() {
            t.changeState(t.state, !0), i.notifyAssetAsLoaded()
        }), t
    },
    n.prototype.loadAnimatedGraphic = function(e) {
        var t = new s(e),
            i = this;
        return this.nAssetsToLoad += 1, o.loadAnimationManager(t, "bone", e.look + "/motion", function() {
            r.isFightMode ? t.stop() : t.animate(), i.notifyAssetAsLoaded()
        }), t
    },
    n.prototype.loadAtlas = function(e, t) {
        function i() {
            if (s += 1, s === r) {
                var e = l.mapRenderer.mapScene,
                    i = l.mapRenderer.mapId,
                    n = e.createTexture(l._atlas, "mapAtlas" + i, "linear");
                l._atlas.width = 1, l._atlas.height = 1, t.setTexture(n)
            }
            l.notifyAssetAsLoaded()
        }

        function n(e, t) {
            c.loadImage(e, function(e) {
                if (!l.obsolete) {
                    var n = t.sx,
                        o = t.sy,
                        a = t.sw,
                        r = t.sh,
                        s = t.cx || 0,
                        c = t.cy || 0,
                        d = t.cw || a,
                        u = t.ch || r;
                    s + d > e.width && (d = e.width - s), c + u > e.height && (u = e.height - c), l._atlasContext.drawImage(e, s, c, d, u, n, o, a, r), i()
                }
            })
        }
        this._atlas.width = e.width, this._atlas.height = e.height;
        var o = e.graphicsPositions,
            a = Object.keys(o),
            r = a.length,
            s = 0;
        this.nAssetsToLoad += r;
        for (var l = this, u = 0; u < a.length; u += 1) {
            var p = a[u],
                h = o[p],
                f = h.jpg ? "jpg" : "png",
                b = f + "/" + p + "." + f,
                m = d + b;
            n(m, h)
        }
    }
}
