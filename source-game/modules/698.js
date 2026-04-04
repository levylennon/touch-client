function(e, t, i) {
    // JEFF MODULE
    function n(e, t, i, n) {
        this.symbols = e,
        this.matrices = t,
        this.colors = i,
        this.frameRate = n && n.frameRate
    }

    function o(e, t, i) {
        if (t === r.EMPTY_JSON) return A;
        b.jeffVersionDowngrader(t);
        var o, a, s, c = Boolean(t.symbols),
            l = {};
        c ? (a = new n(l, t.matrices, t.colors, t.meta), s = u, o = t.symbols) : (a = l, s = p, o = t);
        for (var h = Object.keys(o), f = 0; f < h.length; f += 1) {
            var m = h[f],
                M = o[m];
            M.isGraphic && (l[m] = new d(M, a, i)), M.isAnim && (l[m] = new s(M, a, i))
        }
        return _.addAndHoldElement(a, 1, e)
    }

    function a(e, t, i, n) {
        var o = Boolean(n.element.symbols),
            a = o ? new h(t) : new f(t);
        return a.generateTemplate(i, n), a
    }
    var r = i(13),
        s = i(699),
        c = i(12),
        l = i(700),
        d = i(701),
        u = i(702),
        p = i(703),
        h = i(704),
        f = i(706),
        b = i(16),
        m = i(707),
        M = {
            skin: r.SKIN_PATH,
            bone: r.BONE_PATH,
            icon: r.ICON_PATH,
            ornaments: r.ORNAMENT_PATH,
            embedded: r.EMBEDDED_PATH,
            loader: r.LOADER_PATH
        },
        g = {
            skin: "mipmap",
            bone: "mipmap",
            icon: "linear",
            ornaments: "linear",
            embedded: "linear",
            loader: "linear"
        },
        _ = new s(r.MAX_ANIMATIONS),
        A = {
            element: new n({}, [], []),
            release: function() {}
        };
    t.loadTemplate = function(e, t, i, n, r, s) {
        function d(i) {
            if (f = i, y += 1, y === z) {
                w = o(v, f, h);
                var r = a(e, t, h, w);
                return n && n(r)
            }
        }

        function u(i) {
            if (h = i, y += 1, y === z) {
                void 0 === w && (w = o(v, f, h));
                var r = a(e, t, h, w);
                return n && n(r)
            }
        }
        if (m.isMissingTemplates(t)) {
            var p = r.getEmptyTexture();
            return n && n(a(e, t, p, A))
        }
        var h, f, b = M[e] + i + t,
            O = b + ".png",
            v = b + ".json",
            y = 0,
            z = 1,
            w = _.holdElement(v);
        void 0 === w && (z += 1, c.loadJson(v, d)), l.loadTexture(O, u, r, g[e], s)
    },
    t.loadTemplates = function(e, t, i, n) {
        function r(i, n) {
            var r = v[n],
                s = d[r];
            if (void 0 === s) p[r] = i;
            else {
                var c = b[r],
                    l = o(c, i, s);
                u[r] = l;
                var f = e[r];
                h[r] = a(f.type, f.id, s, l)
            }
            if (z += 1, z === w) return t && t(h)
        }

        function s(i, n) {
            d[n] = i;
            var r, s, c = p[n];
            if (void 0 === c) r = u[n], void 0 !== r && (s = e[n], h[n] = a(s.type, s.id, i, r));
            else {
                var l = b[n];
                r = o(l, c, i), s = e[n], h[n] = a(s.type, s.id, i, r)
            }
            if (z += 1, z === w) return t && t(h)
        }
        for (var d = [], u = [], p = [], h = [], f = [], b = [], O = [], v = [], y = e.length, z = 0, w = 0, T = 0; T < y; T += 1) {
            var C = e[T],
                I = C.type,
                S = C.id;
            if (m.isMissingTemplates(S)) {
                var E = i.getEmptyTexture();
                h[T] = a(I, S, E, A)
            } else {
                var L = M[I] + C.usage + S,
                    N = L + ".png",
                    R = L + ".json";
                f.push(N), b.push(R), w += 1;
                var q = _.holdElement(R);
                void 0 === q ? (O.push(R), v.push(T), w += 1) : u[T] = q
            }
        }
        var x = g[e[0].type];
        l.loadTextures(f, s, null, i, x, n), c.loadJsons(O, r, null)
    }
}
