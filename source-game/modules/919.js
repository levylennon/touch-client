function(e, t, i) {
    function n(e, t, i, n, o, a, r) {
        this._compass = e, this._id = t, this._arrowType = i, this._isVisible = n, this._x = o, this._y = a, this._tooltip = r, this._distance = 0, this._angle = 0, this._markerDom = null
    }
    var o = i(54)
        .dimensions,
        a = i(920),
        r = a.transitions;
    e.exports = n, n.sortFunction = function(e, t) {
        var i = e._angle - t._angle;
        return 0 !== i ? i : e._id > t._id ? 1 : -1
    }, n.prototype.getAngle = function() {
        return this._angle
    }, n.prototype.setCorrectedAngle = function(e) {
        this._angle = e
    }, n.prototype.setVisibility = function(e) {
        e !== this._isVisible && (this._isVisible = e)
    }, n.prototype.getDistance = function() {
        return this._compass.getDistance(this._x, this._y)
    }, n.prototype.getArrowType = function() {
        return this._arrowType
    }, n.prototype.isVisible = function() {
        return this._isVisible
    }, n.prototype.update = function(e, t, i) {
        this._x = e, this._y = t, i && (this._tooltip = i)
    }, n.prototype.remove = function() {
        this._markerDom && (this._markerDom.disappear(), this._markerDom = null)
    }, n.prototype.prepareRendering = function() {
        if (!this._isVisible) return void(this._markerDom && this.remove());
        var e = window.gui.playerData.position.coordinates,
            t = this._x - e.posX,
            i = this._y - e.posY;
        this._distance = this._compass.getDistance(this._x, this._y), 0 === this._distance ? this._angle = Math.atan2(-o.mapWidth, -o.mapHeight) : this._angle = Math.atan2(i, t)
    }, n.prototype.render = function(e) {
        if (this._isVisible) {
            var t = null;
            this._markerDom ? t = r.MOVE : (this._markerDom = new a(this._compass, this._arrowType || this._id, this._tooltip), t = e ? r.APPEAR_CENTER : r.APPEAR), this._markerDom.updateDisplay(this._angle, this._distance, t)
        }
    }
}
