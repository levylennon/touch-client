function(e, t, i) {
    function n(e) {
        if (!e) throw new Error("Need the logger!");
        this._logger = e
    }

    function o(e, t) {
        var i = !1,
            n = e <= 2 * c.MAP_WIDTH;
        if (n)
            if (64 & t) i = !0;
            else {
                var o = e < c.MAP_WIDTH;
                o && (32 & t || 128 & t) && (i = !0)
            } return Boolean(i)
    }

    function a(e, t) {
        var i = !1,
            n = e % c.MAP_WIDTH === c.MAP_WIDTH - 1;
        if (n)
            if (1 & t) i = !0;
            else {
                var o = (e + 1) % (2 * c.MAP_WIDTH) === 0;
                o && (2 & t || 128 & t) && (i = !0)
            } return Boolean(i)
    }

    function r(e, t) {
        var i = !1,
            n = e >= c.NB_CELLS - 2 * c.MAP_WIDTH;
        if (n)
            if (4 & t) i = !0;
            else {
                var o = e >= c.NB_CELLS - c.MAP_WIDTH;
                o && (2 & t || 8 & t) && (i = !0)
            } return Boolean(i)
    }

    function s(e, t) {
        var i = !1,
            n = e % c.MAP_WIDTH === 0;
        if (n)
            if (16 & t) i = !0;
            else {
                var o = e % (2 * c.MAP_WIDTH) === 0;
                o && (8 & t || 32 & t) && (i = !0)
            } return Boolean(i)
    }
    var c = i(13);
    e.exports = n, n.prototype.getChangeMapFlags = function(e, t, i) {
        e[i] || this._logger.error(new Error('Cannot find cell data for "' + t + '" on cell "' + i + '"'));
        var n = e[i] || {},
            c = n.c || 0;
        return 0 === c ? {
            left: !1,
            right: !1,
            top: !1,
            bottom: !1
        } : {
            left: s(i, c),
            right: a(i, c),
            top: o(i, c),
            bottom: r(i, c)
        }
    }
}
