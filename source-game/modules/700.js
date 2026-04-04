function(e, t, i) {
    var n = i(13),
        o = i(12);
    t.loadTexture = function(e, t, i, a, r) {
        var s = i.holdTexture(e);
        return s ? void t(s) : void o.loadImage(e, function(o) {
            var s;
            s = o === n.EMPTY_IMAGE ? i.getEmptyTexture() : i.createTexture(o, e, a, r), t(s)
        })
    }, 
    t.loadTextures = function(e, t, i, a, r, s) {
        for (var c = [], l = [], d = e.length, u = 0; u < d; u += 1) {
            var p = e[u],
                h = a.holdTexture(p);
            h ? t(h, u) : (c.push(p), l.push(u))
        }
        return 0 === c.length ? i && i() : void o.loadImages(c, function(e, i) {
            var o, d = c[i];
            o = e === n.EMPTY_IMAGE ? a.getEmptyTexture() : a.createTexture(e, d, r, s), t(o, l[i])
        }, i)
    }
}
