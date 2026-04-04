function(e, t, i) {
    var n = i(13),
        o = i(12),
        a = i(16),
        r = {
            skin: n.SKIN_PATH,
            bone: n.BONE_PATH,
            icon: n.ICON_PATH,
            bitmapFonts: n.BITMAP_FONTS,
            ornaments: n.ORNAMENT_PATH,
            embedded: n.EMBEDDED_PATH
        };
    t.loadModel = function(e, t, i, n, s, c) {
        function l(e) {
            if (p = e, a.jeffVersionDowngrader(p), M += 1, M === g) return i && i(p, u)
        }

        function d(e) {
            if (u = n ? n.createTexture(e, b, s, c) : e, M += 1, M === g) return i && i(p, u)
        }
        var u, p, h, f = r[e] + t,
            b = f + ".png",
            m = f + ".json",
            M = 0,
            g = 1;
        n ? (u = n.holdTexture(b), u ? h = !1 : (h = !0, g += 1)) : (h = !0, g += 1), o.loadJson(m, l), h !== !1 && o.loadImage(b, d)
    }
}
