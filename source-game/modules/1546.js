function(e, t, i) {
    function n(e) {
        var t = !window.actorManager.isCreatureModeOn && e.riderEntity || e.animManager;
        t.removeAnimationModifier("AnimStatique"), t.removeAnimationModifier("AnimMarche"), t.removeAnimationModifier("AnimCourse"), t.removeAnimationModifier("AnimHit"), t.removeAnimationModifier("AnimTacle"), t.removeSubentity(e.carriedEntity), 1 === e.look.bonesId && e.look.skins && e.look.skins[0] && t.applyBones1AnimationModifier(e.look.skins[0]), e.carriedActor ? e.carriedActor.parentActor = null : console.warn("attempted to drop actor that did not exist."), e.carriedEntity = null, e.carriedActor = null
    }
    var o = i(715),
        a = i(430)
        .Delay,
        r = 3;
    t.carryCharacter = function(e) {
        var t = window.actorManager,
            i = t.getActor(e.sourceId),
            n = t.getActor(e.targetId);
        if (i && n) {
            var a = {
                    base: "AnimPickup",
                    direction: e._direction
                },
                s = !t.isCreatureModeOn && i.riderEntity || i.animManager,
                c = {
                    animManager: n.animManager,
                    bindingPoint: "carried_3_0",
                    symbolModifier: o[r],
                    bindingPointCategory: r
                };
            n.parentActor = i, i.carriedEntity = c, i.carriedActor = n, window.isoEngine.fightSequence.addAnimSequence(function(e) {
                s.applyCarryAnimationModifier(), s.addSubentity(c), n.setDisposition(i.cellId), n.y = -1e3, i.oneShootAnim(a, {
                    backToStatic: !0
                }, e)
            })
        }
    }, t.removeCarrying = n, t.throwCharacter = function(e) {
        var t = window.actorManager,
            i = t.getActor(e.targetId),
            o = t.getActor(e.sourceId);
        if (o && i) {
            var r = e.cellId,
                s = {
                    base: "AnimThrow",
                    direction: e._direction
                };
            window.isoEngine.fightSequence.addAnimSequence(function(t) {
                function c() {
                    return l < 1 ? void l++ : void t()
                }
                var l = 0;
                o.oneShootAnim(s, {
                    backToStatic: !1
                }, function() {
                    n(o), o.staticAnim(), c()
                });
                var d = new a(7, function() {
                    return r === -1 ? c() : void e._throwingProjectile.launch(r, 13, .3, 70, function() {
                        r !== -1 && i.setDisposition(r), c()
                    })
                });
                d.start(!1)
            })
        }
    }, t.dropCharacter = function(e) {
        var t = window.actorManager,
            i = t.getActor(e.sourceId),
            o = t.getActor(e.targetId);
        if (!i) return void(o && window.isoEngine.fightSequence.addAnimSequence(function(t) {
            return o.setDisposition(e.cellId), t()
        }));
        var a = {
            base: "AnimDrop",
            direction: e._direction
        };
        window.isoEngine.fightSequence.addAnimSequence(function(t) {
            i.oneShootAnim(a, {
                backToStatic: !1
            }, function() {
                return n(i), o && o.setDisposition(e.cellId), i.staticAnim(), t()
            })
        })
    }
}
