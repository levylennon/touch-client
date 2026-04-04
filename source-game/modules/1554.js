function(e, t, i) {
    function n(e, t) {
        var i = r(e),
            n = r(t),
            o = Math.abs(i.x - n.x) + Math.abs(i.y - n.y);
        return o
    }

    function o(e, t) {
        var i = r(e),
            n = r(t),
            o = i.x - n.x,
            a = i.y - n.y;
        return Math.sqrt(o * o + a * a)
    }
    var a = i(735),
        r = a.getMapPointFromCellId;
    e.exports.getCellDistance = n, e.exports.getDistance = o
}
