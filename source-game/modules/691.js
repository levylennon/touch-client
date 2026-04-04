function(e, t, i) {
    function n(e, t) {
        a.call(this, e, t),
        this.direction = void 0 === e.direction ? 1 : e.direction, 
        this.animSymbol = {
            base: "AnimStatique",
            type: null,
            direction: this.direction
        },
        this.look = null,
        this.fifo = u.createFifo(),
        this.showSubentities = !0
    }
    var o = i(56).inherits,
        a = i(692),
        r = i(475),
        s = i(696),
        c = i(697),
        l = i(715),
        d = i(718),
        u = i(16),
        p = i(32);
    o(n, a), e.exports = n, 
    n.prototype.updateAnimation = function() {
        this.animSymbol.direction = this.direction, this.animManager.assignSymbol(this.animSymbol, !1)
    },
    n.prototype.addSubentity = function(e, t, i) {
        if (!this.showSubentities) return i && i();
        var n = e.subEntityLook;
        if (!n) return console.error(new Error("Sub-entity has no look: " + Object.keys(e)
            .join(";"))), i && i();
        var o = n.bonesId + "/motion",
            a = n.skins,
            s = n.scales[0],
            d = r.parseIndexedColors(n.indexedColors),
            u = this;
        t.addToSprite = !1, c.loadCharacterAnimationManager(this, o, a, d, s, t, function(t) {
            return u.animManager.addSubentity({
                animManager: t,
                bindingPoint: "carried_" + e.bindingPointCategory + "_" + e.bindingPointIndex,
                symbolModifier: l[e.bindingPointCategory],
                bindingPointCategory: e.bindingPointCategory
            }), i && i(t)
        })
    },
    n.prototype.addSubentities = function(e, t, i) {
        function n() {
            if (a += 1, a === o) return i && i()
        }
        if (!e) return i && i();
        for (var o = e.length + 1, a = 0, r = 0; r < e.length; r += 1) this.addSubentity(e[r], t, n);
        n()
    }, 
    n.prototype.setLook = function(e, t, i) {
        var n = this,
            o = new Error("Look missing");
        this.fifo.push(function(a) {
            function l() {
                return a(), i && i()
            }

            function d() {
                return g.clear(), l()
            }

            var u = n.look;
            if (!e) return console.error(o), l();

            for (var p = e.scales[0],h = e.skins, f = u && u.bonesId === e.bonesId && u.skins.length === h.length && u.scales[0] === p, b = 0; f && b < h.length; b += 1) f = f && h[b] === u.skins[b];
            n.look = e;
            var m = r.parseIndexedColors(e.indexedColors);
            if (f && !t.forceRefresh) return n.animManager.setTints(m), n.animManager.cleanupAnimationsAndRemoveSubentities(), void n.addSubentities(e.subentities, t, l);
            if (u && n.isDisplayed && !t.noSmokeAnimation) {
                var M = new s({
                    x: n.x,
                    y: n.y,
                    position: n.position + 1,
                    scene: n.scene
                });
                c.loadAnimationManager(M, "bone", "1165/FX", function(e) {
                    e.assignSymbol({
                        base: "FX",
                        direction: 0
                    }, !1, function() {
                        M.remove()
                    })
                })
            }
            var g = n.animManager;
            c.loadLook(n, e, t, d)
        })
    };
    var h = d.HOOK_POINT_CATEGORY_MOUNT_DRIVER,
        f = {};
    f[2] = 1,
    f[1084] = 44,
    f[1068] = 113,
    f[1202] = 453,
    f[2456] = 1107;
    var b = {};
    b[1450] = 1576,
    b[1449] = 1576,
    b[1448] = 1575,
    b[1443] = 1575, 
    n.getLookWithoutMount = function(e) {
        if (!e) return console.error(new Error("look is missing")), null;
        var t = n.getLookOfRider(e);
        if (!t) return e;
        for (var i = f[t.bonesId] || t.bonesId, o = 0; o < t.skins.length; o++) {
            var a = t.skins[o];
            if (b[a]) {
                i = b[a];
                break
            }
        }
        return {
            _type: "EntityLook",
            bonesId: i,
            indexedColors: t.indexedColors,
            scales: t.scales,
            skins: t.skins,
            subentities: t.subentities
        }
    }, 
    n.getLookWithoutPet = function(e) {
        if (!e) return console.error(new Error("look is missing")), null;
        var t = n.getLookWithoutMount(e);
        return {
            _type: "EntityLook",
            bonesId: t.bonesId,
            indexedColors: t.indexedColors,
            scales: t.scales,
            skins: t.skins,
            subentities: []
        }
    }, 
    n.getLookWithoutStuffAndSub = function(e) {
        if (!e) return console.error(new Error("look is missing")), null;
        var t = n.getLookWithoutPet(e),
            i = t.skins.slice();
        return {
            _type: "EntityLook",
            bonesId: t.bonesId,
            indexedColors: t.indexedColors,
            scales: t.scales,
            skins: i.slice(0, 2),
            subentities: []
        }
    }, 
    n.getLookWithoutStuff = function(e) {
        if (!e) return console.error(new Error("look is missing")), null;
        var t = e.skins.slice(),
            i = {
                _type: "EntityLook",
                bonesId: e.bonesId,
                indexedColors: e.indexedColors,
                scales: e.scales,
                skins: t.slice(0, 2),
                subentities: e.subentities
            },
            o = n.getLookOfRider(e);
        if (o)
            for (var a = e.subentities, r = 0; r < a.length; r += 1) {
                var s = a[r];
                if (s.bindingPointCategory === h && 0 === s.bindingPointIndex) {
                    var c = {},
                        l = {},
                        d = p.getOwnProperties(s)
                        .filter(function(e) {
                            return "subEntityLook" !== e
                        });
                    return p.shallowCopyProperties(s, c, d), d = p.getOwnProperties(s.subEntityLook)
                        .filter(function(e) {
                            return "skins" !== e
                        }), p.shallowCopyProperties(s.subEntityLook, l, d), l.skins = s.subEntityLook.skins.slice(0, 2), c.subEntityLook = l, i = {
                            _type: "EntityLook",
                            bonesId: e.bonesId,
                            indexedColors: e.indexedColors,
                            scales: e.scales,
                            skins: e.skins,
                            subentities: [c]
                        }
                }
            }
        return i
    }, 
    n.getLookOfRider = function(e) {
        if (!e) return console.error(new Error("look is missing")), null;
        for (var t = e.subentities || [], i = 0; i < t.length; i += 1) {
            var n = t[i];
            if (n.bindingPointCategory === h && 0 === n.bindingPointIndex) return n.subEntityLook
        }
        return null
    }
}
