function(e, t, i) {
    function n(e, t, i, n, a, r, c, l, d, u) {
        o.call(this), this.l = n, this.r = a, this.t = r, this.b = c, this.w = a - n, this.h = c - r, this.min = {
            x: 0,
            y: 0
        }, this.max = {
            x: 0,
            y: 0
        }, this.fovWAbsolute = l, this.fovHAbsolute = d, this.setZoomMax(u), this._updateZoomBounds(), this.setZoom(i), this.setPosition(e, t), this.acceleration = s, this.a = this.acceleration, this._frozen = !1, this.emitAtDestination = !1, this.emitOnZoom = !1
    }
    var o = i(59)
        .EventEmitter,
        a = i(56)
        .inherits,
        r = .005,
        s = 1.25,
        c = 3e3,
        l = .008,
        d = .013;
    a(n, o), e.exports = n, n.prototype.setAcceleration = function(e) {
        this.a = e
    }, n.prototype.setDefaultAcceleration = function(e) {
        this.acceleration = e
    }, n.prototype.freeze = function() {
        this._frozen = !0
    }, n.prototype.unfreeze = function() {
        this._frozen = !1
    }, n.prototype.setEmitOnZoom = function(e) {
        this.emitOnZoom = e
    }, n.prototype.stopMoving = function() {
        this.followee = {
            x: this.x,
            y: this.y
        }, this.zoomTarget = this.zoom, this.z = c / this.zoom
    }, n.prototype.setZoom = function(e) {
        e = Math.max(this.minZoom, Math.min(this.maxZoom, e)), this.z = c / e, this.zoom = e, this.zoomTarget = e, this._updatePositionBounds()
    }, n.prototype.setZoomMax = function(e) {
        this.maxZoom = e
    }, n.prototype.setPosition = function(e, t) {
        this.x = Math.min(this.max.x, Math.max(this.min.x, e)), this.y = Math.min(this.max.y, Math.max(this.min.y, t)), this.followee = {
            x: e,
            y: t
        }
    }, n.prototype._updateZoomBounds = function() {
        var e = this.fovWAbsolute / this.w,
            t = this.fovHAbsolute / this.h;
        this.minZoom = Math.max(e, t), this.zoom < this.minZoom && (this.zoom = this.minZoom), this.zoomTarget < this.minZoom && (this.zoomTarget = this.minZoom), this.z = c / this.zoom
    }, n.prototype._updatePositionBounds = function() {
        this.fovW = this.fovWAbsolute / this.zoomTarget, this.fovH = this.fovHAbsolute / this.zoomTarget, this.min.x = this.l + this.fovW / 2, this.min.y = this.t + this.fovH / 2, this.max.x = this.r - this.fovW / 2, this.max.y = this.b - this.fovH / 2, this.min.x > this.max.x && (this.min.x = this.max.x = (this.min.x + this.max.x) / 2), this.min.y > this.max.y && (this.min.y = this.max.y = (this.min.y + this.max.y) / 2)
    }, n.prototype.zoomTo = function(e) {
        this.zoomTarget = Math.min(Math.max(e, this.minZoom), this.maxZoom), this._updatePositionBounds(), this.emitOnZoom && this.emit("zoomed")
    }, n.prototype.moveTo = function(e, t, i) {
        this.followee = {
            x: e,
            y: t
        }, null !== i && void 0 !== i && (this.emitAtDestination = !0)
    }, n.prototype.transform = function(e, t, i, n, o) {
        var a = this.zoomTarget;
        e /= a, t /= a, i /= a, n /= a;
        var r = Math.max(this.minZoom, Math.min(this.maxZoom, a * o)),
            s = 1 - a / r,
            c = Math.min(this.max.x, Math.max(this.min.x, this.followee.x)),
            l = Math.min(this.max.y, Math.max(this.min.y, this.followee.y)),
            d = c + (e - this.fovW / 2) * s + i,
            u = l + (t - this.fovH / 2) * s + n;
        this.zoomTo(r), this.moveTo(d, u)
    }, n.prototype.addInertia = function(e, t, i) {
        e /= this.zoom, t /= this.zoom;
        var n = Math.sqrt(e * e + t * t);
        if (0 !== n) {
            this.a = Math.pow(this.acceleration, 1 - i);
            var o = Math.log(n / r) / Math.log(this.a) - 1,
                a = r * (1 - Math.pow(this.a, o)) / (1 - this.a);
            this.moveTo(this.x + a * e / n, this.y + t * a / n)
        }
    }, n.prototype.setFieldOfView = function(e, t) {
        this.fovWAbsolute = e, this.fovHAbsolute = t, this._updateZoomBounds(), this._updatePositionBounds()
    }, n.prototype.setBounds = function(e, t, i, n) {
        this.l = e, this.r = t, this.t = i, this.b = n, this.w = t - e, this.h = n - i, this._updateZoomBounds(), this._updatePositionBounds()
    }, n.prototype.follow = function(e) {
        this.followee = e
    }, n.prototype.updatePosition = function(e) {
        if (!this._frozen) {
            this.a += (this.acceleration - this.a) * (d * e);
            var t = this.min.x,
                i = this.max.x,
                n = this.min.y,
                o = this.max.y,
                a = Math.min(i, Math.max(t, this.followee.x)),
                r = Math.min(o, Math.max(n, this.followee.y)),
                s = c / this.zoomTarget,
                u = a - this.x,
                p = r - this.y,
                h = s - this.z;
            if (0 === u && 0 === p && 0 === h) return this.emitAtDestination && (this.emitAtDestination = !1, this.emit("atDestination")), !1;
            if (Math.abs(u) < .5 && Math.abs(p) < .5 && Math.abs(h) < .5) return this.x = a, this.y = r, this.z = s, this.zoom = this.zoomTarget, this.a += (1 - this.a) * l, !1;
            var f = 1 - Math.pow(2 - this.a, e);
            this.x += f * u, this.y += f * p, this.z += f * h, this.zoom = c / this.z;
            var b = this.fovWAbsolute / this.zoom,
                m = this.fovHAbsolute / this.zoom;
            return t = this.l + b / 2, n = this.t + m / 2, i = this.r - b / 2, o = this.b - m / 2, this.x < t ? this.x = t : this.x > i && (this.x = i), this.y < n ? this.y = n : this.y > o && (this.y = o), !0
        }
    }
}
