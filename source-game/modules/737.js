function(e, t, i) {
    function n() {
        for (var e, t = 0, i = 0, n = 0, o = 0; o < r; o++) {
            for (e = 0; e < a; e++) s[n] = {
                x: t + e,
                y: i + e
            }, n++;
            for (t++, e = 0; e < a; e++) s[n] = {
                x: t + e,
                y: i + e
            }, n++;
            i--
        }
    }
    var o = i(730),
        a = 14,
        r = 20,
        s = {};
    n(), t.fromCellId = function(e) {
        var t = s[e];
        if (void 0 === t) throw new Error("Cell identifier out of bounds");
        return {
            cellId: e,
            x: t.x,
            y: t.y
        }
    }, t.fromMapPoint = function(e) {
        return {
            cellId: e.cellId,
            x: e.x,
            y: e.y
        }
    }, t.fromCoords = function(e, t) {
        var i = (e - t) * a + t + (e - t) / 2;
        return {
            cellId: ~~i,
            x: e,
            y: t
        }
    }, t.getNearestCellInDirection = function(e, i) {
        var n;
        switch (i) {
            case 0:
                n = t.fromCoords(e.x + 1, e.y + 1);
                break;
            case 1:
                n = t.fromCoords(e.x + 1, e.y);
                break;
            case 2:
                n = t.fromCoords(e.x + 1, e.y - 1);
                break;
            case 3:
                n = t.fromCoords(e.x, e.y - 1);
                break;
            case 4:
                n = t.fromCoords(e.x - 1, e.y - 1);
                break;
            case 5:
                n = t.fromCoords(e.x - 1, e.y);
                break;
            case 6:
                n = t.fromCoords(e.x - 1, e.y + 1);
                break;
            case 7:
                n = t.fromCoords(e.x, e.y + 1)
        }
        return t.isInMap(n.x, n.y) ? n : null
    }, t.orientationTo = function(e, t) {
        if (t.x === e.x && t.y === e.y) return 1;
        var i = {
            x: e.x < t.x ? -1 : 0,
            y: e.y < t.y ? -1 : 0
        };
        i.x = e.x > t.x ? 1 : i.x, i.y = e.y > t.y ? 1 : i.y;
        var n;
        return 1 === i.x && 1 === i.y ? n = o.DIRECTION_EAST : 1 === i.x && 0 === i.y ? n = o.DIRECTION_SOUTH_EAST : 1 === i.x && i.y === -1 ? n = o.DIRECTION_SOUTH : 0 === i.x && i.y === -1 ? n = o.DIRECTION_SOUTH_WEST : i.x === -1 && i.y === -1 ? n = o.DIRECTION_WEST : i.x === -1 && 0 === i.y ? n = o.DIRECTION_NORTH_WEST : i.x === -1 && 1 === i.y ? n = o.DIRECTION_NORTH : 0 === i.x && 1 === i.y && (n = o.DIRECTION_NORTH_EAST), n
    }, t.isInDiag = function(e, t) {
        if (!e || !t || e.cellId === t.cellId) return !1;
        var i = e.x - t.x,
            n = t.y - e.y,
            o = 180 * Math.acos(i / Math.sqrt(Math.pow(i, 2) + Math.pow(n, 2))) / Math.PI * (e.y > t.y ? -1 : 1);
        return o = Math.round(Math.abs(o)), 45 === o || 135 === o
    }, t.advancedOrientationTo = function(e, t, i) {
        i = i || {};
        var n = !0;
        if (void 0 !== i.fourDir && null !== i.fourDir && (n = i.fourDir), !e || !t || e.cellId === t.cellId) return 0;
        var o = e.x - t.x,
            a = t.y - e.y,
            r = 180 * Math.acos(o / Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2))) / Math.PI * (e.y > t.y ? -1 : 1);
        return r = n ? 2 * Math.round(r / 90) + 1 : Math.round(r / 45) + 1, r < 0 && (r += 8), r
    }, t.isInMap = function(e, t) {
        return e + t >= 0 && e - t >= 0 && e - t < 2 * r && e + t < 2 * a
    }, t.distanceToCell = function(e, t) {
        return Math.abs(e.x - t.x) + Math.abs(e.y - t.y)
    }
}
