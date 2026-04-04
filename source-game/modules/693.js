function(e, t, i) {
    function n(e) {
        r.call(this, e), this._layer = e.layer || 0, this._x = e.x || 0, this._y = e.y || 0, this._scaleX = e.sx || 1, this._scaleY = e.sy || 1, this._rotation = e.rotation || 0, this._spriteRef = null, this.isDisplayed = !1, this.isWhiteListed = !1, this.scene = e.scene, this.renderer = this.scene.renderer, this.updateList = this.scene.updateList, this.displayList = this.scene.displayList, this.holdsStatics && (this.displayList = this.scene.staticElements), e.isHudElement && (this.displayList = this.scene.hudDisplayList), this._cleared = !1, this.show()
    }

    function o(e) {
        var t = document.createElement("canvas");
        t.width = c, t.height = c;
        var i = t.getContext("2d");
        return i.fillStyle = "#FF0000", i.fillRect(0, 0, c, c), s = e.createTexture(t, null, "nearest", "permanent")
    }
    var a = i(56)
        .inherits,
        r = i(694);
    a(n, r), e.exports = n, Object.defineProperty(n.prototype, "x", {
        get: function() {
            return this._x
        },
        set: function(e) {
            this._x = e, this.forceRefresh()
        }
    }), Object.defineProperty(n.prototype, "y", {
        get: function() {
            return this._y
        },
        set: function(e) {
            this._y = e, this.forceRefresh()
        }
    }), Object.defineProperty(n.prototype, "scaleX", {
        get: function() {
            return this._scaleX
        },
        set: function(e) {
            this._scaleX = e, this.forceRefresh()
        }
    }), Object.defineProperty(n.prototype, "scaleY", {
        get: function() {
            return this._scaleY
        },
        set: function(e) {
            this._scaleY = e, this.forceRefresh()
        }
    }), Object.defineProperty(n.prototype, "rotation", {
        get: function() {
            return this._rotation
        },
        set: function(e) {
            this._rotation = e, this.forceRefresh()
        }
    }), Object.defineProperty(n.prototype, "layer", {
        get: function() {
            return this._layer
        },
        set: function(e) {
            e !== this._layer && (this._layer = e, this.isDisplayed && this._show(), this.forceRefresh())
        }
    }), n.prototype.render = function() {
        this.renderer.save(), this.renderer.multiplyColor(this.tint[0], this.tint[1], this.tint[2], this.tint[3]), this.renderer.translate(this._x, this._y), 0 !== this._rotation && this.renderer.rotate(this._rotation), this.renderer.scale(this._scaleX, this._scaleY), this.draw(this.renderer), this.renderer.restore()
    }, n.prototype._show = function() {
        null === this._spriteRef ? this._spriteRef = this.displayList.add(this) : this._spriteRef = this.displayList.reposition(this._spriteRef)
    }, n.prototype._hide = function() {
        null !== this._spriteRef && (this.displayList.removeByRef(this._spriteRef) || console.warn("[Sprite.remove] Sprite not found in display list", this, this.displayList), this._spriteRef = null)
    }, n.prototype.show = function() {
        this._show(), this.isDisplayed = !0, this.forceRefresh()
    }, n.prototype.hide = function() {
        this._hide(), this.isDisplayed = !1, this.forceRefresh()
    }, n.prototype.forceRefresh = function() {
        this.isOutdated === !1 && (this.updateList.push(this), this.isOutdated = !0)
    }, n.prototype.setWhiteListedness = function(e) {
        this.isWhiteListed = e
    }, n.prototype.remove = function() {
        if (this.hide(), this.isWhiteListed === !1) {
            if (this._cleared === !0) return;
            this._cleared = !0, this.clear()
        }
    }, n.prototype.isWithinBounds = function(e, t) {
        return this.bbox[0] <= e && e <= this.bbox[1] && this.bbox[2] <= t && t <= this.bbox[3]
    }, n.prototype.refreshAnimation = function(e) {
        if (this.isOutdated = !1, this.isDisplayed === !1) return void 0 !== e && e.push(this.bbox), void(this.bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)]);
        var t = this.bbox,
            i = this.generateCurrentFrameData();
        if (0 === this._rotation) this.bbox = [this._x + this._scaleX * (this._scaleX > 0 ? i[0] : i[1]), this._x + this._scaleX * (this._scaleX > 0 ? i[1] : i[0]), this._y + this._scaleY * i[2], this._y + this._scaleY * i[3]];
        else {
            var n = Math.cos(this._rotation),
                o = Math.sin(this._rotation),
                a = this._scaleX * i[0],
                r = this._scaleX * i[1],
                s = this._scaleY * i[2],
                c = this._scaleY * i[3],
                l = n * a - o * s,
                d = o * a + n * s,
                u = n * r - o * s,
                p = o * r + n * s,
                h = n * a - o * c,
                f = o * a + n * c,
                b = n * r - o * c,
                m = o * r + n * c;
            this.bbox = [this._x + Math.min(l, u, h, b), this._x + Math.max(l, u, h, b), this._y + Math.min(d, p, f, m), this._y + Math.max(d, p, f, m)]
        }
        t[0] = Math.floor(Math.min(t[0], this.bbox[0])), t[1] = Math.ceil(Math.max(t[1], this.bbox[1])), t[2] = Math.floor(Math.min(t[2], this.bbox[2])), t[3] = Math.ceil(Math.max(t[3], this.bbox[3])), void 0 !== e && e.push(t)
    };
    var s = null,
        c = 32;
    n.prototype.draw = function() {
        window.isoEngine.debug && this.renderer.drawImage(s || o(this.renderer), -c / 2, -c / 2, c, c)
    }, n.prototype.generateCurrentFrameData = function() {
        return [-c / 2, c / 2, -c / 2, c / 2]
    }, n.prototype.clear = n.prototype.releaseBuffer = function() {}
}
