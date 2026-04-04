function(e, t, i) {
    function n() {
        this._gridOverlay = new o, this._gridOverlay.hide(), this._layers = new r, this._layersBeingRemoved = new r
    }
    var o = i(1506),
        a = i(1508),
        r = i(432),
        s = i(342),
        c = i(343);
    e.exports = n, n.prototype.addGridAnimation = function(e) {
        if (0 === Object.keys(e)
            .length) return console.error(new Error("Trying to add animation with no cells!")), null;
        this._gridOverlay.show();
        var t = new a(e, this._gridOverlay);
        return t.playAnimation(), t._listReference = this._layers.addFront(t), this._resetBoundingBox(), t
    }, n.prototype.removeGridLayer = function(e) {
        if (e) {
            e._listReference ? (this._layers.removeByReference(e._listReference), e._listReference = null) : console.error(new Error("GA: _listReference is missing."));
            for (var t, i, n = e.cellInfos, o = Object.keys(n), r = {}, l = this._layers.first; null !== l; l = l.next)
                for (t = 0; t < o.length; t++) i = o[t], l.object.cellInfos[i] && void 0 === r[i] && (r[i] = l.object.cellInfos[i]);
            for (t = 0; t < o.length; t++) {
                i = o[t];
                var d = n[i];
                void 0 === r[i] && (r[i] = new s(i, d.distanceToPlayer, c.empty))
            }
            e._listReference = this._layersBeingRemoved.add(e);
            var u = this,
                p = new a(r, this._gridOverlay);
            p.playAnimation(function() {
                u._resetBoundingBox(), u._layersBeingRemoved.removeByReference(e._listReference), e._listReference = null
            })
        }
    }, n.prototype._resetBoundingBox = function() {
        this._gridOverlay._bbox = [1 / 0, -(1 / 0), 1 / 0, -(1 / 0)];
        for (var e = this._layersBeingRemoved.first; null !== e; e = e.next) this._expandToFitBox(e.object);
        if (0 === this._layers.length) this._gridOverlay.hide();
        else
            for (this._layers.length > 64 && console.error("layers are likely leaking"), e = this._layers.first; null !== e; e = e.next) this._expandToFitBox(e.object)
    }, n.prototype.clear = function() {
        this._layers.clear()
    }, n.prototype._expandToFitPoint = function(e, t) {
        var i = this._gridOverlay._bbox;
        i[0] > e && (i[0] = e), i[2] > t && (i[2] = t), i[1] < e && (i[1] = e), i[3] < t && (i[3] = t)
    }, n.prototype._expandToFitBox = function(e) {
        var t = this._gridOverlay._bbox,
            i = e.bbox[0] - 43;
        i < t[0] && (t[0] = i);
        var n = e.bbox[1] + 43;
        n > t[1] && (t[1] = n);
        var o = e.bbox[2] - 22;
        o < t[2] && (t[2] = o);
        var a = e.bbox[3] + 22;
        a > t[3] && (t[3] = a)
    }
}
