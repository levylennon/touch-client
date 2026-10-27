function(e, t, i) {
    function n() {
        a.call(this, "div", {
            className: "Compass"
        }), this.markers = {}, this._withFlashyAnim = !0
    }
    i(917);
    var o = i(56)
        .inherits,
        a = i(72),
        r = i(918),
        s = i(55),
        c = i(919),
        l = i(129),
        d = "quest_13900";
    o(n, a), e.exports = n, n.arrowType = {
        QUEST: 4,
        PARTY: 2
    }, n.prototype.setFlashyAnimationEnabled = function(e) {
        this._withFlashyAnim = e
    }, n.prototype.addMarker = function(e) {
        var t = e.type,
            i = !window.gui.playerData.isFighting,
            n = new c(this, t, e.arrowType, i, e.x, e.y, e.tooltip);
        return this.markers[t] = n, this.getDistance(e.x, e.y)
    }, n.prototype.updateMarker = function(e, t, i, n) {
        var o = this.markers[e];
        return o ? void o.update(t, i, n) : console.error("marker not found: " + e)
    }, n.prototype.removeMarker = function(e) {
        var t = this.markers[e];
        return t ? (t.remove(), void delete this.markers[e]) : console.error("marker not found: " + e)
    }, n.prototype.setAllMarkersVisibility = function(e) {
        for (var t in this.markers) {
            var i = this.markers[t];
            i.setVisibility(e)
        }
        var n = this;
        window.gui.scenarioManager.on("stepChanged", function() {
            var e = window.gui.scenarioManager.isBehaviourEnabled(l.DISABLE_QUEST_ARROW),
                t = n.markers[d];
            e && t && t.setVisibility(!e)
        })
    }, n.prototype.renderAllMarkers = function() {
        s.autoGpsPhoenixes && this._updatePhoenixMarkersVisibility();
        var e = [];
        for (var t in this.markers) {
            var i = this.markers[t];
            i.prepareRendering(), i.isVisible() && e.push(i)
        }
        r(e, c.sortFunction);
        for (var n = 0; n < e.length; n++) e[n].render(this._withFlashyAnim)
    }, n.prototype.showOrHidePhoenixMarkers = function() {
        if (!s.autoGpsPhoenixes)
            for (var e in this.markers) {
                var t = this.markers[e];
                "phoenix" === t.getArrowType() && t.setVisibility(!1)
            }
        this.renderAllMarkers()
    }, n.prototype._updatePhoenixMarkersVisibility = function() {
        var e, t, i = [],
            n = 1 / 0;
        for (e in this.markers)
            if (t = this.markers[e], "phoenix" === t.getArrowType()) {
                t.setVisibility(!1);
                var o = t.getDistance();
                o < n ? (n = o, i = [e]) : o === n && i.push(e)
            } for (var a = 0; a < i.length; a++) t = this.markers[i[a]], t.setVisibility(!0)
    }, n.prototype.getDistance = function(e, t) {
        var i = window.gui.playerData.position.coordinates,
            n = e - i.posX,
            o = t - i.posY,
            a = Math.abs(n) + Math.abs(o);
        return a
    }
}
