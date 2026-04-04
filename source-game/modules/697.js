function(e, t, i) {
    function n(e, t, i) {
        this.type = e, this.id = t, this.usage = i || ""
    }

    function o(e, i, n, o, r, s) {
        var c = i.subEntityLook,
            l = c.bonesId + "/motion",
            u = c.skins,
            p = c.scales[0],
            h = a.parseIndexedColors(c.indexedColors);
        t.loadCharacterAnimationManager(e, l, u, h, p, r, function(t) {
            o[n] = t, i.bindingPointCategory === d && (e.riderEntity = t), s()
        })
    }
    var a = i(475),
        r = i(698),
        s = i(708),
        c = i(715),
        l = i(718),
        d = l.HOOK_POINT_CATEGORY_MOUNT_DRIVER;
    t.loadCharacterAnimationManager = function(e, t, i, o, a, c, l) {
        function d(n) {
            var r = n[0];
            r.isEmpty && (console.warn("boneTemplate isEmpty"), r = n[1]);
            for (var c = n.length - 1, d = 2; d <= c; d += 1) {
                var u = n[d];
                u ? r.merge(u, !0) : console.error("onTemplatesLoaded: skinTemplate is missing on index", d, "of", n.length, "for skinIds", i, "and boneId", t, "stack:", m)
            }
            var p = t.split("/")[0],
                h = new s(e, r, a ? a / 100 : 1, p, o, i);
            return f !== !1 && e.setAnimManager(h), l && l(h)
        }
        c = c || {};
        var u = [];
        u.push(new n("bone", t, c.boneType)), u.push(new n("bone", "666/motion", c.boneType));
        for (var p = i.length, h = 0; h < p; h += 1) u.push(new n("skin", i[h], c.skinType));
        var f = c.addToSprite,
            b = c.textureCache || e.renderer,
            m = new Error("stack");
        r.loadTemplates(u, d, b, "archivable")
    }, t.loadAnimationManager = function(e, t, i, n) {
        function o(t) {
            var o = "string" == typeof i ? i.split("/")
                .shift() : i,
                a = new s(e, t, 1, o);
            return e.setAnimManager(a), n && n(a)
        }
        var a = e.renderer;
        r.loadTemplate(t, i, "", o, a, "archivable")
    }, t.loadLook = function(e, i, n, r) {
        function s() {
            if (f += 1, f === b) {
                for (var e = 0; e < p; e += 1) {
                    var t = u[e],
                        i = d[e];
                    h && i.addSubentity(h), l.addSubentity({
                        animManager: i,
                        bindingPoint: "carried_" + t.bindingPointCategory + "_" + t.bindingPointIndex,
                        symbolModifier: c[t.bindingPointCategory],
                        bindingPointCategory: t.bindingPointCategory
                    })
                }
                return r & r(l)
            }
        }
        n = n || {};
        var l = null,
            d = [],
            u = e.showSubentities ? i.subentities : null,
            p = u ? u.length : 0,
            h = null,
            f = 0,
            b = 2 + p,
            m = i.bonesId + "/motion",
            M = i.skins,
            g = a.parseIndexedColors(i.indexedColors),
            _ = i.scales[0];
        t.loadCharacterAnimationManager(e, m, M, g, _, n, function(t) {
            l = t;
            var i = t.sprite.parentActor;
            i && (i.carriedEntity.animManager = t), e.carriedEntity && (!e.actorManager.isCreatureModeOn && p > 0 ? h = e.carriedEntity : l.addSubentity(e.carriedEntity)), s()
        }), n.addToSprite = !1;
        for (var A = 0; A < p; A += 1) o(e, u[A], A, d, n, s);
        s()
    }
}
