function(e, t, i) {
    function n(e) {
        var t = e.x - _,
            i = e.y;
        return {
            x: (O * t + O * i) / v + f / 2 + m,
            y: (O * i - O * t) / y + M
        }
    }

    function o(e) {
        var t = e % 14 - ~~(e / 28),
            i = t + 19,
            n = t + ~~(e / 14);
        return {
            x: i,
            y: n
        }
    }

    function a() {
        for (var e = 0; e < 560; e++) {
            var t = o(e);
            z[t.x + "_" + t.y] = e
        }
    }

    function r(e, t) {
        var i = z[e + "_" + t];
        return i
    }

    function s(e, t) {
        var i = o(e),
            n = o(t),
            a = i.x - n.x,
            s = i.y - n.y,
            c = r(n.x - a, n.y - s);
        return c
    }

    function c(e, t) {
        t = t || !1;
        var i = o(e),
            n = i.x,
            a = i.y,
            s = [];
        return s.push(r(n, a + 1)), s.push(r(n - 1, a)), s.push(r(n, a - 1)), s.push(r(n + 1, a)), t && (s.push(r(n + 1, a + 1)), s.push(r(n - 1, a + 1)), s.push(r(n - 1, a - 1)), s.push(r(n + 1, a - 1))), s
    }

    function l(e, t, i) {
        i = i || {};
        var n = c(e, i.allowDiagonal),
            o = window.isoEngine.mapRenderer.map.cells;
        return i.useHeightCell ? n.indexOf(t) !== -1 && o[e].f === o[t].f : n.indexOf(t) !== -1
    }

    function d(e, t, i) {
        var n, a = o(e),
            r = o(t),
            s = Math.atan2(a.y - r.y, r.x - a.x);
        return i ? (s = ~~(Math.floor(8 * s / Math.PI) + 8), n = [3, 2, 2, 1, 1, 0, 0, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3][s]) : (s = ~~(Math.floor(4 * s / Math.PI) + 4), n = [3, 1, 1, 7, 7, 5, 5, 3, 3][s]), n
    }

    function u(e, t) {
        return e = o(e), t = o(t), Math.abs(e.x - t.x) + Math.abs(e.y - t.y)
    }

    function p(e, t) {
        return e = o(e), t = o(t), Math.max(Math.abs(e.x - t.x), Math.abs(e.y - t.y))
    }
    var h = i(13),
        f = h.CELL_WIDTH,
        b = h.CELL_HEIGHT,
        m = h.HORIZONTAL_OFFSET - f,
        M = h.VERTICAL_OFFSET - b / 2,
        g = 19,
        _ = g + .225,
        A = Math.sqrt(2),
        O = A / 2,
        v = A / f,
        y = A / b;
    t.getCoordinateSceneFromGrid = n, t.getMapPointFromCellId = o;
    var z = {};
    a(), Object.freeze(z),
    t.getCellIdFromMapPoint = r,
    t.getCellBySymmetry = s,
    t.getNeighbourCells = c,
    t.areCellsNeighbours = l,
    t.getOrientation = d,
    t.getDistance = u,
    t.getSquareDistance = p
}
