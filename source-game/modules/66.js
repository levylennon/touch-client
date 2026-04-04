function(e, t, i) {
    var n = i(67);
    e.exports = function(e) {
        var t = e.getBoundingClientRect(),
            i = n.getCoordinatesRelativeToBody(t.x, t.y);
        return {
            bottom: t.bottom,
            height: t.height,
            left: i.x,
            right: t.right,
            top: i.y,
            width: t.width,
            x: i.x,
            y: i.y
        }
    }
}
