function(e, t, i) {
    function n(e) {
        var t = Date.now(),
            i = z[e];
        if (i && t < i + w) {
            var n = i + w;
            return z[e] = n, n - t
        }
        return z[e] = t, 0
    }

    function o(e) {
        var t = window.isoEngine.bitmapFonts;
        if (t) {
            var i = e.maxRotation || 0,
                o = new c({
                    position: 0,
                    layer: l.MAP_LAYER_POINT_LABELS,
                    bitmapFont: t.numbers,
                    scene: window.actorManager.scene,
                    text: e.pointVariation,
                    color: e.color || M,
                    x: e.x + 30 * (Math.random() - .5),
                    y: e.y + 30 * (Math.random() - .5),
                    rotation: (Math.random() - .5) * i
                });
            o.hide();
            var a = n(e.targetId) * l.TIME_UNITS_PER_SECOND / 1e3;
            new p(a, function() {
                    new d(o.highlight, ["red", "green", "blue"])
                        .from({
                            red: 1,
                            green: 1,
                            blue: 1
                        })
                        .to({
                            red: 4,
                            green: 4,
                            blue: 4
                        }, 3, u.polyOut, 4)
                        .to({
                            red: 1,
                            green: 1,
                            blue: 1
                        }, 8, u.polyOut, 4)
                        .start(), new d(o, ["scaleX", "scaleY"])
                        .from({
                            scaleX: .2,
                            scaleY: .2
                        })
                        .to({
                            scaleX: 1.8,
                            scaleY: 1.8
                        }, 4, u.polyOut, 4)
                        .to({
                            scaleX: 1,
                            scaleY: 1
                        }, 10, u.polyOut, 4)
                        .start();
                    var e = o.rotation,
                        t = (Math.random() - .5) * e;
                    new d(o, ["y", "rotation"])
                        .from({
                            y: o.y,
                            rotation: e
                        })
                        .to({
                            y: o.y,
                            rotation: e
                        }, 8)
                        .to({
                            y: o.y - 60,
                            rotation: t
                        }, 30, u.polyOut, 7)
                        .start(), new d(o, ["alpha"])
                        .from({
                            alpha: 0
                        })
                        .to({
                            alpha: 1
                        }, 3, u.polyOut, 4)
                        .to({
                            alpha: 0
                        }, 38, u.polyIn, 4)
                        .start()
                        .onFinish(function() {
                            o.remove()
                        }), o.show()
                })
                .start()
        }
    }

    function a(e, t) {
        var i = window.actorManager.getActor(e.targetId);
        if (i) {
            var n = window.gui.fightManager.isFighterOnUsersTeam(e.targetId),
                a = window.actorManager.isActorInvisible(e.targetId),
                r = e.actionId === f.ACTION_CHARACTER_MOVEMENT_POINTS_USE;
            if ((n || !r || !a) && (e.shieldLoss || 0 !== e.delta && 0 !== e.loss)) {
                var s;
                s = e.actionId === f.ACTION_CHARACTER_DEBOOST_MOVEMENT_POINTS || e.actionId === f.ACTION_CHARACTER_DEBOOST_ACTION_POINTS ? "-" + e.delta : e.delta ? e.delta > 0 ? "+" + e.delta : e.delta : e.shieldLoss ? "-" + e.shieldLoss : "-" + e.loss, o({
                    x: i.x,
                    y: i.y - 70,
                    maxRotation: .3,
                    color: t,
                    pointVariation: s,
                    targetId: e.targetId
                })
            }
        }
    }

    function r(e, t) {
        !e._spell && t && (h.showApMpUsed || e.actionId !== f.ACTION_CHARACTER_MOVEMENT_POINTS_USE && e.actionId !== f.ACTION_CHARACTER_ACTION_POINTS_USE) && window.isoEngine.fightSequence.addAnimSequence(function(i) {
            return a(e, t), i()
        })
    }

    function s(e) {
        window.isoEngine.fightSequence.addAnimSequence(function(t) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (h.showApMpUsed || n.actionId !== f.ACTION_CHARACTER_MOVEMENT_POINTS_USE && n.actionId !== f.ACTION_CHARACTER_ACTION_POINTS_USE) && n._labelColor && a(n, n._labelColor)
            }
            return t()
        })
    }
    var c = i(1542),
        l = i(13),
        d = i(430)
        .Tween,
        u = i(430)
        .easing,
        p = i(430)
        .Delay,
        h = i(55),
        f = i(476),
        b = i(685),
        m = i(18),
        M = [0, 0, 0, 0],
        g = [.5, -.3, -.3, 0],
        _ = [.3, .3, -.5, 0],
        A = [-.2, -.3, .5, 0],
        O = [.2, .5, -.2, 0],
        v = [.3, 0, .5, 0],
        y = {};
    y[f.ACTION_CHARACTER_ACTION_POINTS_USE] = A, y[f.ACTION_CHARACTER_MOVEMENT_POINTS_USE] = O, y[f.ACTION_CHARACTER_MOVEMENT_POINTS_LOST] = O, y[f.ACTION_CHARACTER_ACTION_POINTS_LOST] = A, y[f.ACTION_CHARACTER_BOOST_ACTION_POINTS] = A, y[f.ACTION_CHARACTER_DEBOOST_ACTION_POINTS] = A, y[f.ACTION_CHARACTER_BOOST_MOVEMENT_POINTS] = O, y[f.ACTION_CHARACTER_DEBOOST_MOVEMENT_POINTS] = O, y[f.ACTION_CHARACTER_ACTION_POINTS_WIN] = A;
    var z = {},
        w = 500;
    t.createPointVariationLabel = o, t.lifePointVariation = function(e) {
        return e.shieldLoss ? r(e, v) : e._spell && e._spell.critical === b.CRITICAL_HIT ? r(e, _) : r(e, e.criticalHit ? _ : g)
    }, t.actionOrMovementPointVariation = function(e) {
        h.showApMpUsed || e.actionId === f.ACTION_CHARACTER_ACTION_POINTS_LOST || e.actionId === f.ACTION_CHARACTER_MOVEMENT_POINTS_LOST ? r(e, y[e.actionId]) : r(e, null)
    }, t.buffVariation = function(e) {
        "FightTemporaryBoostEffect" === e.effect._type && (e.effect.actionId = e.actionId, r(e.effect, y[e.actionId]))
    }, t.lifePointVariationBatch = function(e, t) {
        m.each(e, function(e, t) {
            return e.shieldLoss ? (e._labelColor = v, t()) : e._spell && e._spell.critical === b.CRITICAL_HIT ? (e._labelColor = _, t()) : (e._labelColor = e.criticalHit ? _ : g, t())
        }, function(i) {
            return s(e), t(i)
        })
    }, t.actionOrMovementPointVariationBatch = function(e) {
        for (var t = 0; t < e.length; t++) {
            var i = e[t];
            i._labelColor = y[i.actionId]
        }
        s(e)
    }
}
