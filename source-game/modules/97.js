function(e, t, i) {
    function n(e) {
        if (!e) throw new Error("Need the logger!");
        this._logger = e
    }
    var o = i(13),
        a = {
            1: {
                gainMax: 100,
                distMax: 28,
                distMaxSat: 2
            },
            2: {
                gainMax: 100,
                distMax: 30,
                distMaxSat: 4
            },
            3: {
                gainMax: 100,
                distMax: 33,
                distMaxSat: 8
            },
            4: {
                gainMax: 100,
                distMax: 40,
                distMaxSat: 10
            },
            5: {
                gainMax: 100,
                distMax: 40,
                distMaxSat: 10
            }
        };
    e.exports = n, n.prototype.getDistance = function(e, t) {
        var i;
        i = e.y + 2 * (e.y - t.y);
        var n = Math.abs(t.x - e.x),
            a = Math.abs(t.y - i),
            r = n * n,
            s = a * a;
        return Math.round(Math.sqrt(r + s) / o.CELL_WIDTH)
    }, n.prototype.getVolumeRollOff = function(e, t, i) {
        var n = a[e];
        n || (n = a[1], this._logger.error(new Error("Cannot find the preset " + e + " for " + i)));
        var o = n.distMaxSat,
            r = n.distMax;
        return t <= o ? 1 : t <= r ? (r - t) / (r - o) : 0
    }
}
