function(e, t, i) {
    function n() {
        this._setDimensions(0, 0, 0, 0), this.clear(), this.lastUpdateTime = 0
    }

    function o(e, t, i, n, o, a) {
        this.x = e, this.y = t, this.width = i, this.height = n, this.boxType = o, this.actorId = a, this.priority = m[o], this.angle = null
    }

    function a(e) {
        var t = e.bbox;
        if (t[0] <= t[1]) return t;
        var i = window.isoEngine.mapRenderer.getCellSceneCoordinate(e.cellId);
        return [i.x - 20, i.x + 20, i.y - 90, i.y + 10]
    }
    var r = i(67),
        s = i(54)
        .dimensions,
        c = 5,
        l = 5,
        d = 0,
        u = 1,
        p = 2,
        h = 3,
        f = 4,
        b = {
            TOP: 0,
            LEFT: 0,
            RIGHT: 0,
            BOTTOM: -100
        },
        m = {};
    m[d] = 1, m[u] = 10, m[p] = 20, m[h] = 30;
    var M = {};
    M[p] = 50, M[h] = 200, M[u] = 400, e.exports = n, n.prototype.initialize = function(e, t, i, n) {
        this._setDimensions(e, t, i, n), this.clear();
        var o = this;
        window.gui.on("resize", function(e) {
            o._setDimensions(e.mapLeft, e.mapTop, e.mapWidth, e.mapHeight)
        }), window.isoEngine.on("mapLoaded", function(e) {
            e && e.isReload || o.clear()
        })
    }, n.prototype.clear = function() {
        this.boxes = []
    }, n.prototype._setDimensions = function(e, t, i, n) {
        this.originX = e, this.originY = t, this.width = i, this.height = n
    }, o.prototype.intersectingSurface = function(e) {
        if (e.x + e.width <= this.x || e.x >= this.x + this.width) return 0;
        if (e.y + e.height <= this.y || e.y >= this.y + this.height) return 0;
        var t = Math.min(this.x + this.width, e.x + e.width) - Math.max(this.x, e.x),
            i = Math.min(this.y + this.height, e.y + e.height) - Math.max(this.y, e.y);
        return t * i
    }, o.prototype.setAsSubboxOf = function(e) {
        this.priority = M[e.boxType];
        var t = this.x + this.width / 2,
            i = this.y + this.height / 2,
            n = e.x + e.width / 2,
            o = e.y + e.height / 2;
        this.angle = Math.atan2(o - i, n - t)
    }, o.prototype.getCenter = function() {
        return [this.x + this.width / 2, this.y + this.height / 2]
    };
    var g = 4,
        _ = 10;
    n.prototype._moveBoxAround = function(e, t, i) {
        var n, o;
        switch (i) {
            case 0:
                n = t.x + t.width - _, o = t.y - e.height;
                break;
            case 1:
                n = t.x - e.width + _, o = t.y - e.height;
                break;
            case 2:
                n = t.x - e.width + _, o = t.y + t.height;
                break;
            case 3:
                n = t.x + t.width - _, o = t.y + t.height;
                break;
            default:
                return console.error(new Error("invalid _moveBoxAround index" + i))
        }
        e.x = Math.round(n), e.y = Math.round(o)
    }, n.prototype._computeWeight = function(e, t, i) {
        if (e.x < this.originX + c || e.y < this.originY + c) return 1 / 0;
        if (e.x + e.width > this.originX + this.width - c || e.y + e.height > this.originY + this.height - c) return 1 / 0;
        for (var n = 0, o = this.boxes.length - 1; o >= 0; o--) {
            var a = this.boxes[o];
            if (a !== t) {
                var r = e.intersectingSurface(a);
                if (r) {
                    if (!a.priority) return 1 / 0;
                    if (n += r / a.priority, n >= i) return n
                }
            }
        }
        return n
    }, n.prototype._recenterBox = function(e) {
        if (0 !== s.mapWidth && 0 !== s.mapHeight) {
            var t = Math.max(s.mapLeft + b.LEFT - e.x, 0),
                i = Math.max(e.x + e.width - (s.mapLeft + s.mapWidth + b.RIGHT), 0),
                n = Math.max(s.mapTop + b.TOP - e.y, 0),
                o = Math.max(e.y + e.height - (s.mapTop + s.mapHeight + b.BOTTOM), 0);
            e.x = e.x - i + t, e.y = e.y + n - o
        }
    }, n.prototype._addBoxNextToTarget = function(e, t, i) {
        for (var n = new o(0, 0, t, i, f), a = 1 / 0, r = 0, s = 0; s < g; s++) {
            this._moveBoxAround(n, e, s);
            var c = this._computeWeight(n, e, a);
            if (c < a && (a = c, r = s, 0 === c)) break
        }
        return 0 !== a && this._moveBoxAround(n, e, r), n.x += 2 * l * (Math.random() - .5), n.y += 2 * l * (Math.random() - .5), this._recenterBox(n), n.setAsSubboxOf(e), this.boxes.push(n), n
    }, n.prototype._newActorBox = function(e, t) {
        var i = window.foreground,
            n = a(e),
            s = i.convertSceneToScreenCoordinate(n[0], n[2]),
            c = i.convertSceneToScreenCoordinate(n[1], n[3]),
            l = c.x - s.x,
            d = c.y - s.y,
            u = r.getCoordinatesRelativeToBody(s.x, s.y),
            p = new o(u.x, u.y, l, d, t, e.actorId);
        return this.boxes.push(p), p
    }, n.prototype.addBoxNextToActor = function(e, t) {
        this._updateActors();
        var i = this._getActorBox(e);
        i || (i = this._newActorBox(e, h));
        var n = t.rootElement;
        return this._addBoxNextToTarget(i, n.clientWidth, n.clientHeight)
    }, n.prototype.addObstacle = function(e, t, i, n) {
        var a = new o(e, t, i, n, d);
        return this.boxes.push(a), a
    }, n.prototype.removeBox = function(e) {
        var t = this.boxes.indexOf(e);
        t < 0 || this.boxes.splice(t, 1)
    }, n.prototype._removeActors = function() {
        for (var e = [], t = this.boxes.length - 1; t >= 0; t--) {
            var i = this.boxes[t];
            i.actorId || e.push(i)
        }
        this.boxes = e
    }, n.prototype._updateActors = function() {
        this.lastUpdateTime = Date.now(), this._removeActors(), this._newActorBox(window.actorManager.userActor, u);
        var e = window.actorManager.actors;
        for (var t in e) {
            var i = e[t],
                n = i.data;
            n && !n.staticInfos && this._newActorBox(i, i.isNPC() ? p : h)
        }
    }, n.prototype._getActorBox = function(e) {
        for (var t = e.actorId, i = this.boxes.length - 1; i >= 0; i--) {
            var n = this.boxes[i];
            if (n.actorId === t) return n
        }
        return null
    }
}
