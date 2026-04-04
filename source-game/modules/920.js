function(e, t, i) {
    function n(e, t, i) {
        l.call(this, "div", {
            className: "marker"
        }), this._compass = e, this._sameMapMarker = null, this._type = t, this._tooltipText = i, this._x = 0, this._y = 0, this._arrowAngle = void 0, this._distance = 0, this._scalingDiv = null, this._markerArrow = null, this._markerNumber = null
    }
    var o = i(88)
        .addTooltip,
        a = i(54)
        .dimensions,
        r = i(16),
        s = i(56)
        .inherits,
        c = i(22),
        l = i(72),
        d = i(502),
        u = 50,
        p = 5,
        h = 50,
        f = 300;
    s(n, l), e.exports = n, n.prototype._createDom = function() {
        this._scalingDiv = this.createChild("div"), this._markerArrow = this._scalingDiv.createChild("div", {
            className: ["markerArrow", "arrow_" + this._type]
        }), this._markerNumber = this._scalingDiv.createChild("div", {
            className: "markerNumber"
        }), window.foreground.handleTapAfter(this), o(this, d.process(this._tooltipText))
    }, n.prototype._detachFromDom = function() {
        this._sameMapMarker ? (window.gui.mapCoordinateDisplay.removeMarker(this._sameMapMarker), this._sameMapMarker = null) : this._compass.removeChild(this)
    }, n.prototype._attachToDom = function() {
        0 === this._distance ? this._sameMapMarker = window.gui.mapCoordinateDisplay.addMarker(this._type, this._tooltipText) : this._compass.appendChild(this)
    }, n.prototype.disappear = function() {
        var e = this;
        c.tween(this._scalingDiv, {
            webkitTransform: "scale(0.1)"
        }, {
            time: f,
            easing: "ease-out"
        }, function() {
            e._detachFromDom()
        })
    }, n.prototype._startCenterAppearTransition = function() {
        var e = a.mapLeft + a.mapWidth / 2 - u / 2,
            t = a.mapTop + a.mapHeight / 2 - u / 2,
            i = .6,
            n = (this._x - e) * i + e,
            o = (this._y - t) * i + t;
        this.setStyles({
            zIndex: 2e3,
            webkitTransform: this._getPositionTransform(n, o)
        }), this._scalingDiv.setStyles({
            webkitTransform: "scale(" + p + ")",
            opacity: 0
        }), this._markerArrow.setStyle("webkitTransform", this._getArrowTransform()), this._updateDistanceLabel(), r.forceReflow(this);
        var s = this;
        c.tween(this._scalingDiv, {
            webkitTransform: this._getScalingTransform(),
            opacity: 1
        }, {
            time: f,
            easing: "ease-out"
        }, function() {
            s._scalingDiv.setStyles({
                opacity: null
            }), s.setStyles({
                zIndex: null
            })
        }), this._doMoveTransition()
    }, n.prototype._startAppearTransition = function() {
        this._appearByScalingUp()
    }, n.prototype._startMoveTransition = function() {
        this._scalingDiv.setStyle("webkitTransform", this._getScalingTransform()), this._doMoveTransition(), c.tween(this._markerArrow, {
            webkitTransform: this._getArrowTransform()
        }, {
            time: f,
            easing: "ease-out"
        })
    }, n.prototype._doMoveTransition = function() {
        c.tween(this, {
            webkitTransform: this._getPositionTransform(this._x, this._y)
        }, {
            time: f,
            easing: "ease-out"
        }, function() {
            this._updateDistanceLabel()
        })
    }, n.prototype._startWideMoveTransition = function() {
        this._disappearByScalingDown(this._appearByScalingUp.bind(this))
    }, n.prototype._startAppearSameMapTransition = function(e) {
        this._isOnSameMap = !0, e || this._disappearByScalingDown(this._continueAppearSameMapTransition.bind(this))
    }, n.prototype._continueAppearSameMapTransition = function() {
        this._detachFromDom(), this._attachToDom()
    }, n.prototype._startLeaveSameMapTransition = function() {
        this._isOnSameMap = !1, this._detachFromDom(), this._attachToDom(), this._appearByScalingUp()
    }, n.prototype._disappearByScalingDown = function(e) {
        c.tween(this._scalingDiv, {
            webkitTransform: "scale(0.1)"
        }, {
            time: f,
            easing: "ease-out"
        }, e)
    }, n.prototype._appearByScalingUp = function() {
        this._updateDistanceLabel(), this._markerArrow.setStyle("webkitTransform", this._getArrowTransform()), this.setStyle("webkitTransform", this._getPositionTransform(this._x, this._y)), this._scalingDiv.setStyle("webkitTransform", "scale(0.1)"), r.forceReflow(this._scalingDiv), c.tween(this._scalingDiv, {
            webkitTransform: this._getScalingTransform()
        }, {
            time: f,
            easing: "ease-out"
        })
    }, n.prototype._updateDistanceLabel = function() {
        this._markerNumber.setText(this._distance)
    }, n.prototype._updatePositionAndAngle = function(e) {
        var t = 180 * e / Math.PI,
            i = this._arrowAngle;
        this._arrowAngle = t;
        var n, o, r = a.mapWidth - u,
            s = a.mapHeight - u;
        t <= -34 && t >= -146 ? (n = (r - Math.tan(Math.PI / 2 - e) * s) / 2, o = 0) : t >= 34 && t <= 146 ? (n = (r + Math.tan(Math.PI / 2 - e) * s) / 2, o = s) : t < 34 && t > -34 ? (n = r, o = (s + Math.tan(e) * r) / 2) : (n = 0, o = (s - Math.tan(e) * r) / 2), this._x = a.mapLeft + n, this._y = a.mapTop + o;
        var c = (t - i + 360) % 360;
        return c > 180 && (c -= 360), c
    }, n.prototype._getPositionTransform = function(e, t) {
        return "translate3d(" + e + "px," + t + "px,0)"
    };
    var b = 10,
        m = 50,
        M = .5;
    n.prototype._getScalingTransform = function() {
        var e = m - b,
            t = Math.min(1, Math.max(0, this._distance - b) / e),
            i = Math.round(10 * (1 - t * (1 - M))) / 10;
        return 1 !== i ? "scale(" + i + ")" : ""
    }, n.prototype._getArrowTransform = function() {
        return this._isOnSameMap ? "" : "rotate(" + this._arrowAngle + "deg)"
    };
    var g = n.transitions = {
        APPEAR_CENTER: 1,
        APPEAR: 2,
        MOVE: 6
    };
    n.prototype.updateDisplay = function(e, t, i) {
        var n = this._updatePositionAndAngle(e);
        this._distance = ~~t;
        var o = !this._scalingDiv;
        if (o && (this._createDom(), this._attachToDom()), 0 === this._distance) {
            if (this._isOnSameMap) return;
            return this._startAppearSameMapTransition(o)
        }
        if (this._isOnSameMap) return this._startLeaveSameMapTransition();
        if (Math.abs(n) >= h) return this._startWideMoveTransition();
        switch (i) {
            case g.APPEAR_CENTER:
                this._startCenterAppearTransition();
                break;
            case g.APPEAR:
                this._startAppearTransition();
                break;
            case g.MOVE:
                this._startMoveTransition();
                break;
            default:
                console.error("invalid transition: " + i)
        }
    }
}
