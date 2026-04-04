function(e, t, i) {
    var n = i(1181)
        .ICON_DIAMETER,
        o = i(1185);
    t.positionOrdering = function(e, t) {
        var i = e.y - t.y;
        return 0 === i ? e.x - t.x : i
    }, t.clusterOrdering = function(e, t) {
        var i = e.position,
            n = t.position,
            o = i.y - n.y;
        return 0 === o ? i.x - n.x : o
    };
    var a = [];
    t.computeRelativePositions = function(e) {
        for (var i = [], r = e <= 1 ? 0 : n / (2 * Math.sin(Math.PI / e)), s = 0; s < e; s += 1) {
            var c = 2 * Math.PI * s / e;
            i[s] = new o(Math.cos(c) * r, Math.sin(c) * r)
        }
        return i.sort(t.positionOrdering), i.push(new o(0, 0)), a[e] = i, i
    }, t.getRelativePositions = function(e) {
        var i = a[e];
        return void 0 === i && (i = t.computeRelativePositions(e)), i
    }
}
