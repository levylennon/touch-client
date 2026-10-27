function(e, t, i) {
    "use strict";

    function n() {
        this.cells = [], this.bounds = [], this.cellId = void 0
    }

    function o() {
        this.grid = [], this.scenePositions = []
    }

    function a(e, t, i, n, o) {
        for (var a = 0; a < e.length; a += 1) {
            var r = e[a],
                s = t[r],
                c = (s.x - i) * M,
                l = (s.y - n) * g,
                d = c * c + l * l;
            d < o.dist && (o.dist = d, o.cell = r)
        }
    }

    function r(e, t) {
        var i = e.cells.indexOf(t);
        i !== -1 && (e.cells.splice(i, 1), e.bounds.splice(i, 1))
    }
    var s = i(13),
        c = i(735),
        l = s.CELL_WIDTH,
        d = s.CELL_HEIGHT,
        u = s.HORIZONTAL_OFFSET - l,
        p = s.VERTICAL_OFFSET - d / 2,
        h = 19,
        f = h + .225,
        b = Math.sqrt(2),
        m = b / 2,
        M = b / l,
        g = b / d,
        _ = 33,
        A = 34,
        O = 14,
        v = 2 * O;
    e.exports = o, o.prototype.getCoordinateGridFromCellId = function(e) {
        var t = e % O - ~~(e / v),
            i = t + h,
            n = t + ~~(e / O);
        return {
            i: i,
            j: n
        }
    }, o.prototype.getCoordinateCellIdFromGrid = function(e) {
        return this.grid[e.i][e.j].cellId
    }, o.prototype.getCoordinateGridFromScene = function(e) {
        var t = (e.x - u) * M,
            i = (e.y - p) * g,
            n = m * t - m * i + f,
            o = m * t + m * i,
            a = Math.max(0, Math.min(_ - 1, ~~n)),
            r = Math.max(0, Math.min(A - 1, ~~o));
        return {
            i: a,
            j: r,
            dx: n - a,
            dy: o - r
        }
    }, o.prototype.getCoordinateSceneFromGrid = function(e) {
        var t = e.i - f,
            i = e.j;
        return {
            x: (m * t + m * i) / M + l / 2 + u,
            y: (m * i - m * t) / g + p
        }
    }, o.prototype.getSceneCoordinateFromCellId = function(e) {
        return this.getCoordinateSceneFromGrid(this.getCoordinateGridFromCellId(e))
    }, o.prototype.getCellAtSceneCoordinate = function(e) {
        var t = this.getCoordinateGridFromScene(e),
            i = this.grid[t.i][t.j],
            n = i.cells;
        if (0 === n.length) return this.getClosestCell(t, e);
        for (var o = t.dx, a = t.dy, r = i.bounds, s = 0, c = r.length; s < c; s += 1) {
            var l = r[s];
            if (l[0] <= o && o <= l[1] && l[2] <= a && a <= l[3]) return {
                cell: n[s],
                dist: 0
            }
        }
        return this.getClosestCell(t, e)
    }, o.prototype.getClosestCell = function(e, t) {
        for (var i, n, o, r, s = e.i, c = e.j, l = t.x, d = t.y, u = 0, p = {
                cell: -1,
                dist: 1 / 0
            }; p.cell === -1;) {
            for (o = Math.max(c - u, 0), r = Math.min(c + u, A - 1), n = Math.min(s + u, _ - 1), i = Math.max(s - u, 0); i <= n; i += 1) a(this.grid[i][o].cells, this.scenePositions, l, d, p), a(this.grid[i][r].cells, this.scenePositions, l, d, p);
            for (i = Math.max(s - u, 0), n = Math.min(s + u, _ - 1), r = Math.min(c + u - 1, A - 1), o = Math.max(c - u + 1, 0); o <= r; o += 1) a(this.grid[i][o].cells, this.scenePositions, l, d, p), a(this.grid[n][o].cells, this.scenePositions, l, d, p);
            u += 1
        }
        return p
    }, o.prototype.getNearbyCellInZone = function(e, t, i, n) {
        if (!n || 0 === n.length) return console.error(new Error('"zone" is not an array')), null;
        if (void 0 !== n[e]) return e;
        for (var o = null, a = [], r = c.getNeighbourCells(e, !0), s = 0; s < r.length; s++) void 0 !== r[s] && void 0 !== n[r[s]] && a.push(r[s]);
        var l = 1 / 0;
        for (s = 0; s < a.length; s++) {
            var d = a[s],
                u = this.scenePositions[d],
                p = (u.x - t) * M,
                h = (u.y - i) * g,
                f = p * p + h * h;
            f < l && (l = f, o = d)
        }
        return o
    }, o.prototype.updateCellState = function(e, t, i) {
        var n = t.l;
        0 === (1 & n) ? 0 !== (1 & i) && this._removeCell(e, t) : 0 === (1 & i) && this._addCell(e, t)
    }, o.prototype._removeCell = function(e, t) {
        delete this.scenePositions[e];
        var i = this.useAltitude && t.f || 0,
            n = this.getCoordinateGridFromCellId(e);
        if (0 === i) r(this.grid[n.i][n.j], e);
        else {
            var o = i / d,
                a = Math.floor(n.i + o),
                s = Math.floor(n.j - o);
            if (a >= _ || s >= A) return;
            var c = a + 1,
                l = s + 1;
            if (c < 0 || l < 0) return;
            a >= 0 && (s >= 0 && r(this.grid[a][s], e), l < A && r(this.grid[a][l], e)), c < _ && (s >= 0 && r(this.grid[c][s], e), l < A && r(this.grid[c][l], e))
        }
    }, o.prototype._addCell = function(e, t) {
        var i, n = this.getCoordinateGridFromCellId(e);
        this.grid[n.i][n.j].cellId = e;
        var o = this.useAltitude && t.f || 0,
            a = this.getCoordinateSceneFromGrid(n);
        if (a.y -= o, this.scenePositions[e] = a, 0 === o) i = this.grid[n.i][n.j], i.cells.push(e), i.bounds.push([0, 1, 0, 1]);
        else {
            var r = o / d,
                s = n.i + r,
                c = n.j - r,
                l = Math.floor(s),
                u = Math.floor(c);
            if (l >= _ || u >= A) return;
            var p = l + 1,
                h = u + 1;
            if (p < 0 || h < 0) return;
            var f = s - l,
                b = c - u;
            l >= 0 && (u >= 0 && (i = this.grid[l][u], i.cells.push(e), i.bounds.push([f, 1, b, 1])), h < A && (i = this.grid[l][h], i.cells.push(e), i.bounds.push([f, 1, 0, b]))), p < _ && (u >= 0 && (i = this.grid[p][u], i.cells.push(e), i.bounds.push([0, f, b, 1])), h < A && (i = this.grid[p][h], i.cells.push(e), i.bounds.push([0, f, 0, b])))
        }
    }, o.prototype.initialize = function(e, t) {
        this.cellList = e, this.useAltitude = t, this.grid = [], this.scenePositions = [];
        for (var i = 0; i < _; i += 1) {
            var o = new Array(A);
            this.grid[i] = o;
            for (var a = 0; a < A; a += 1) o[a] = new n
        }
        for (var r = e.length - 1; r >= 0; r -= 1) {
            var s = e[r];
            0 !== (1 & s.l) && this._addCell(r, s)
        }
    }
}
