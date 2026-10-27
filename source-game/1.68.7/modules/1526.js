function(e, t, i) {
    function n(e, t, i) {
        o.call(this, e - l, t - d, i)
    }
    var o = i(1527),
        a = i(13),
        r = i(56)
        .inherits,
        s = a.CELL_WIDTH,
        c = a.CELL_HEIGHT,
        l = s / 2,
        d = c / 4;
    r(n, o), e.exports = n, n.prototype.updatePosition = function(e, t) {
        this._textImage.x = e - l, this._textImage.y = t - d
    }
}
