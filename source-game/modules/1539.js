function(e, t, i) {
    var n = i(1540),
        o = i(1541),
        a = i(430)
        .Delay,
        r = i(55),
        s = 17;
    e.exports = function(e) {
        function t(t) {
            window.isoEngine.fightSequence.addAnimSequence(function(i) {
                return n.playGfx(e._targetGfx, e._targetGfxOrientation, f.targetGfxShowUnder, p, t ? i : null), !t && i()
            })
        }

        function i() {
            window.isoEngine.fightSequence.addAnimSequence(function(t) {
                return n.playGfx(e._targetGfx2, e._targetGfx2Orientation, f.targetGfxShowUnder2, p), t()
            })
        }

        function c() {
            window.isoEngine.fightSequence.addAnimSequence(function(t) {
                return n.playGfx(e._criticalHitGfx, e._criticalHitGfxOrientation, 0, "Critical Hit"), t()
            })
        }
        var l = window.actorManager,
            d = l.getActor(e.sourceId || e.casterId),
            u = l.getActorsIDList()
            .join(", "),
            p = "id: " + e.spellId + " lvl: " + e.spellLevel,
            h = e._casterOrientation;
        h && window.isoEngine.fightSequence.addAnimSequence(function(e) {
            return d ? d.setDisposition(null, h) : console.error(new Error("Cannot setDisposition of source undefined. Before: " + u + " After: " + l.getActorsIDList()
                .join(", "))), e()
        });
        var f = e._scriptParams || {};
        if (r.allowSpellEffects && !e.silentCast) {
            var b = e._spellAnimSymbol;
            b && window.isoEngine.fightSequence.addAnimSequence(function(e) {
                if (d) {
                    d.oneShootAnim(b, {
                        backToStatic: !0
                    });
                    var t = d.animManager.nbFrames;
                    return new a(Math.min(s, t), e)
                        .start()
                }
                return console.error(new Error("Cannot oneShootAnim of source undefined. Before: " + u + " After: " + l.getActorsIDList()
                    .join(", "))), e()
            });
            var m = e._targetCellId || e.destinationCellId !== -1;
            m && (e._targetGfx && f.playTargetGfxFirst && t(), e._targetGfx2 && f.playTargetGfxFirst2 && i()), e._criticalHitGfx && c(), f.casterGfxId && window.isoEngine.fightSequence.addAnimSequence(function(t) {
                return n.playGfx(e._casterGfx, e._casterGfxOrientation, f.casterGfxShowUnder, p), t()
            }), e._missileGfx && e.destinationCellId !== -1 && window.isoEngine.fightSequence.addAnimSequence(function(t) {
                e._missileGfx.launch(e.destinationCellId, void 0 !== f.missileSpeed ? f.missileSpeed + 10 : 10, (f.missileCurvature || 0) / 10, f.missileGfxYOffset || 0, t)
            }), f.trailGfxId && window.isoEngine.fightSequence.addAnimSequence(function(t) {
                n.playGfxTrailAnimation(e._trailGfxs, e._trailGfxsOrientation, f.trailGfxShowUnder, p, t)
            }), m && (e._targetGfx && !f.playTargetGfxFirst && t(), e._targetGfx2 && !f.playTargetGfxFirst2 && i())
        }
        var M = e._lifeVariationMsgs && e._lifeVariationMsgs.length > 0;
        M && o.lifePointVariationBatch(e._lifeVariationMsgs, function(t) {
            return t ? void console.error("Unable to execute lifePointVariationBatch " + t) : void window.isoEngine.fightSequence.addAnimSequence(function(t) {
                for (var i = 0; i < e._lifeVariationMsgs.length; i++) {
                    var n = e._lifeVariationMsgs[i];
                    if (!(n._isDead || n.delta > 0)) {
                        var o = l.getActor(n.targetId);
                        if (o) {
                            var a = {
                                base: n._animSymbol || "AnimHit"
                            };
                            o.oneShootAnim(a, {
                                backToStatic: !0
                            })
                        } else console.error(new Error("Target " + n.targetId + " is missing to play hit animation"))
                    }
                }
                return t()
            })
        });
        var g = e._pointVariationMsgs && e._pointVariationMsgs.length > 0;
        g && o.actionOrMovementPointVariationBatch(e._pointVariationMsgs), (M || g) && window.isoEngine.fightSequence.addAnimSequence(function(e) {
            new a(15, e)
                .start()
        }), window.isoEngine.fightSequence.addAnimSequence(function(e) {
            return e()
        })
    }
}
