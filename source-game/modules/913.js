function(e, t, i) {
    function n(e) {
        var t = e % 14,
            i = Math.floor(e / 14);
        return t += i % 2 * .5, {
            x: t * r,
            y: .5 * i * s
        }
    }

    function o() {
        for (var e = 0; e < 560; e += 1) c.push(n(e));
        return Object.freeze(c), c
    }
    var a = i(13),
        r = a.CELL_WIDTH,
        s = a.CELL_HEIGHT;
    t.getCellCoord = n;
    var c = [];
    t.cellCoord = o()
}
