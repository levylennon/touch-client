function(e, t, i) {
    function n(e, t, i, n) {
        if (e) {
            var o = n || 0;
            return t === X && (o = 0), {
                base: "AnimArme",
                type: o
            }
        }
        if (void 0 !== i) {
            var a = i;
            return t === X && (a = 1), 101 === a && t === Y && (a = 1), {
                base: "AnimAttaque",
                type: a
            }
        }
        return null
    }

    function o(e, t) {
        var i = t.actors;
        return i[e] || (i[e] = {}), i[e]
    }

    function a(e, t) {
        var i = k(),
            n = o(e, t);
        if (!n.position && 0 !== n.position) {
            var a = i.actorManager.getActor(e);
            if (!a) return console.warn("No actor " + e), null;
            var r = a.look || {};
            n.position = a.cellId, n.direction = a.direction, n.bonesId = r.bonesId
        }
        return n
    }

    function r(e, t, i, n) {
        if (0 !== t) {
            var o = k(),
                r = o.actorManager.getActor(t);
            if (!r || r.animManager.isTemporary) return console.warn("No actor", t);
            i.direction = a(t, n)
                .direction, e.addAnimation(r, i)
        }
    }

    function s(e, t) {
        var i = S.getMapPointFromCellId(e),
            n = S.getMapPointFromCellId(t),
            o = S.getCoordinateSceneFromGrid(i),
            a = S.getCoordinateSceneFromGrid(n),
            r = a.y - o.y,
            s = a.x - o.x;
        return Math.atan2(r, s)
    }

    function c(e, t, i, n, o, a, r, c, l) {
        o = o || 0;
        var d = E.cellCoord[a];
        if (d) {
            var u = k(),
                p = new x({
                    scene: u.isoEngine.mapScene,
                    position: a,
                    x: d.x,
                    y: d.y - (r || 0)
                });
            if (l) {
                var h;
                h = l === j.TOWARD_POSITION2 ? s(a, c) : s(c, a), p.rotation = H[o] ? h + Math.PI : h
            }
            return t["_" + n + "Orientation"] = o, t["_" + n] = p, e.loadAnimationManager(p, i + "/FX"), p
        }
    }

    function l(e, t, i) {
        var n = window.actorManager,
            o = n.getActor(t);
        if (!o) return void console.warn("Source actor does not exist");
        var a = new q({
            actorId: i + ":" + t,
            position: o.position,
            scene: n.scene
        });
        return e.loadAnimationManager(a, i + "/FX"), a
    }

    function d(e, t, i) {
        t._missileGfx = l(e, t.sourceId || t.casterId, i)
    }

    function u(e, t, i, n, o, a, r, s, l, d) {
        var u = f(s, a),
            p = b(l, s, "casterGfx" === n);
        return c(e, t, i, n, u, o, r, d, p)
    }

    function p(e, t, i, n, o) {
        function a(i, n) {
            var o = r.getCoordinateCellIdFromGrid({
                i: i,
                j: n
            });
            I && A === o && (S = !0, _.stop());
            var a = u(e, t, l, "trailGfx", o, d, y, z, w, p);
            a && (a.scaleX = C, a.scaleY = C, E.push(a))
        }
        var r = window.isoEngine.mapRenderer.grid,
            s = window.actorManager.getActor(t.sourceId || t.casterId),
            c = t._scriptParams,
            l = c.trailGfxId,
            d = i.direction,
            p = s.position,
            h = r.getCoordinateGridFromCellId(p),
            f = h.i,
            b = h.j,
            m = r.getCoordinateGridFromCellId(t.destinationCellId || t.targetCellId),
            M = m.i,
            g = m.j,
            _ = new R;
        _.set(f, b, M, g);
        var A, O = 1 + (c.trailGfxMinScale || 0) / 10,
            v = 1 + (c.trailGfxMaxScale || 0) / 10,
            y = c.targetGfxYOffset2,
            z = c.trailDisplayType,
            w = c.targetGfxOriented2,
            T = t.spellLevel / 6,
            C = v * T + O * (1 - T),
            I = c.endTrailOnTarget,
            S = !1;
        I && (A = n.position);
        var E = [];
        _.exec(a);
        for (var L = Object.keys(o), N = [], q = 0; q < L.length; q++) N.push(o[L[q]]);
        var x = W.createPropertyNameCompareFunc("distanceToPlayer");
        N.sort(x);
        for (var B = 1; B < N.length && !S; B++) {
            var D = N[B],
                P = r.getCoordinateGridFromCellId(D.cellId);
            a(P.i, P.j)
        }
        t._trailGfxs = E, t._trailGfxsOrientation = d
    }

    function h(e, t, i, n) {
        if (t._scriptParams.useSpellZone) {
            e.addWaitingRequest();
            var o = t.sourceId || t.casterId,
                a = t.destinationCellId || t.targetCellId,
                r = t.spellId,
                s = t.spellLevel;
            window.gui.fightManager.getFighterSpell(r, o, function(o, r) {
                var c;
                if (o) console.error(o), c = [];
                else {
                    var l = r;
                    if (l.setLevel(s), !window.isoEngine.mapRenderer.map || !window.isoEngine.mapRenderer.map.cells) return e.removeWaitingRequest();
                    var d = window.isoEngine.mapRenderer.map.cells;
                    c = B(d, i.position, a, l.getZoneEffect())
                }
                p(e, t, i, n, c), e.removeWaitingRequest()
            })
        } else p(e, t, i, n, [])
    }

    function f(e, t) {
        switch (e) {
            case G.RANDOM:
                return Math.floor(8 * Math.random());
            case G.ORIENTED:
                return t;
            default:
                return 0
        }
    }

    function b(e, t, i) {
        return t === G.ORIENTED ? j.NONE : e ? i ? j.TOWARD_POSITION2 : j.TOWARD_POSITION1 : j.NONE
    }

    function m(e, t, i) {
        var o = "GameActionFightCloseCombatMessage" === t._messageType,
            s = "GameRolePlaySpellAnimMessage" === t._messageType,
            l = t.sourceId || t.casterId,
            p = a(l, i);
        if (p) {
            if (t.destinationCellId !== -1 && p.position !== t.destinationCellId) {
                var f = S.getOrientation(p.position, t.destinationCellId, !1);
                p.direction = f, t._casterOrientation = f
            }
            if (!t.silentCast) {
                var b, m;
                if (t.targetId) {
                    if (b = a(t.targetId, i), !b) return;
                    m = W.isActorVisibleToUser(t.targetId) ? b.position : null
                } else b = {
                    direction: 1
                };
                var M = m || t.destinationCellId || t.targetCellId;
                t._targetCellId = M;
                var g = t._scriptParams || {};
                if (g.casterGfxId && u(e, t, g.casterGfxId, "casterGfx", p.position, p.direction, g.casterGfxYOffset, g.casterGfxDisplayType, g.casterGfxOriented, M), g.targetGfxId && u(e, t, g.targetGfxId, "targetGfx", M, p.direction, g.targetGfxYOffset, g.targetGfxDisplayType, g.targetGfxOriented, p.position), g.targetGfxId2 && u(e, t, g.targetGfxId2, "targetGfx2", M, p.direction, g.targetGfxYOffset2, g.targetGfxDisplayType2, g.targetGfxOriented2, p.position), s) {
                    var _ = g.animId;
                    _ && !g.targetGfxId && (g.targetGfxId2 && console.error(new Error("Message contains a targetGfdId2 and ")), c(e, t, _, "targetGfx2", 1, M)), t._spellAnimSymbol = {
                        base: "AnimAttaque",
                        type: 403
                    }
                } else g.missileGfxId && d(e, t, g.missileGfxId), t._spellAnimSymbol = n(o, p && p.bonesId, g.animId, t._weaponTypeId);
                g.trailGfxId && h(e, t, p, b), t._spellAnimSymbol && r(e, l, t._spellAnimSymbol, i), t.critical === F.CRITICAL_HIT && c(e, t, V, "criticalHitGfx", 1, p.position);
                for (var A = t._lifeVariationMsgs || [], O = t._deadIds, v = 0; v < A.length; v++) {
                    var y = A[v],
                        z = y.targetId;
                    O && O.indexOf(z) !== -1 ? y._isDead = !0 : A[v].loss && r(e, z, {
                        base: "AnimHit"
                    }, i)
                }
            }
        }
    }

    function M(e, t, i) {
        var n = window.actorManager.getActor(t.sourceId);
        n && !n.animManager.isVoidAnimManager && (e.addAnimation(n, {
                base: "carrying",
                direction: -1
            }), r(e, t.sourceId, {
                base: "AnimPickup"
            }, i), t._direction = a(t.sourceId, i)
            .direction)
    }

    function g(e, t, i) {
        r(e, t.sourceId, {
                base: "AnimDrop"
            }, i), t._direction = a(t.sourceId, i)
            .direction
    }

    function _(e, t, i) {
        r(e, t.sourceId, {
                base: "AnimThrow"
            }, i), t._throwingProjectile = l(e, t.sourceId, U), t._direction = a(t.sourceId, i)
            .direction
    }

    function A(e, t) {
        window.gui.fightManager.loadFighter(t);
        var i = e.loadActor(t.summon);
        i.hide(), t._summon = i
    }

    function O(e, t, i) {
        var n = o(t.targetId, i);
        if (n.look !== t.entityLook) return void(t._doNotProcess = !0);
        var a = window.actorManager.getActor(t.targetId);
        e.loadLook(t, a, t.entityLook)
    }

    function v(e, t) {
        var i = t.informations,
            n = window.actorManager.getActor(i.contextualId);
        n ? e.loadLook(t, n, i.look) : console.warn(new Error("Cannot find the actor " + i.contextualId + " to refresh the fighter assets"))
    }

    function y(e, t, i) {
        r(e, t.targetId, {
            base: "AnimMort"
        }, i), t._animSymbol = "AnimMort"
    }

    function z(e, t, i) {
        r(e, t.targetId, {
            base: "AnimHit"
        }, i), t._animSymbol = "AnimHit"
    }

    function w(e, t, i) {
        r(e, t.sourceId, {
            base: "AnimTacle"
        }, i)
    }

    function T(e, t, i) {
        r(e, t.targetId, {
            base: "AnimVanish"
        }, i)
    }

    function C(e, t) {
        var i = t.mark;
        i._glyphGfxId && c(e, i, i._glyphGfxId, "glyph", 0, 0)
    }

    function I() {}
    var S = i(735),
        E = i(913),
        L = i(1534),
        N = i(13),
        R = i(1535),
        q = i(1536),
        x = i(696),
        B = i(734)
        .getSpellEffectZone,
        D = i(697),
        W = i(16),
        P = i(691),
        k = i(14),
        F = i(685),
        H = N.ANIM_SYMETRY,
        U = "21209",
        G = {
            NORMAL: 0,
            RANDOM: 1,
            ORIENTED: 2
        },
        j = {
            NONE: 0,
            TOWARD_POSITION1: 1,
            TOWARD_POSITION2: 2
        },
        Y = 44,
        X = 1107,
        V = 1062,
        Q = {
            GameActionFightSpellCastMessage: m,
            GameActionFightCloseCombatMessage: m,
            GameActionFightChangeLookMessage: O,
            GameActionFightSummonMessage: A,
            GameActionFightDeathMessage: y,
            GameActionFightKillMessage: y,
            GameActionFightTackledMessage: w,
            GameActionFightMarkCellsMessage: C,
            GameActionFightCarryCharacterMessage: M,
            GameActionFightThrowCharacterMessage: _,
            GameActionFightDropCharacterMessage: g,
            _GameActionFightLeaveMessage: y,
            GameActionFightVanishMessage: T,
            GameActionFightLifeAndShieldPointsLostMessage: z,
            GameActionFightLifePointsLostMessage: z,
            GameFightRefreshFighterMessage: v,
            GameRolePlaySpellAnimMessage: m
        };
    I.prototype.runSequence = function(e, t) {
        var i = L(e);
        this.nAssetsToLoad = 1, this.nAssetsLoaded = 0;
        var n = this;
        this.onAssetsLoaded = function() {
            if (n.nAssetsLoaded += 1, n.nAssetsLoaded === n.nAssetsToLoad) return t()
        }, this.reduceNumberOfAssetsToLoad = function() {
            if (n.nAssetsToLoad -= 1, n.nAssetsLoaded === n.nAssetsToLoad) return t()
        };
        for (var o = 0; o < e.length; o++) {
            var a = e[o],
                r = Q[a._messageType];
            r && r(this, a, i)
        }
        this.onAssetsLoaded()
    }, I.prototype.addAnimation = function(e, t) {
        this.nAssetsToLoad += 1, e.animManager.addAnimation(t, this.onAssetsLoaded)
    }, I.prototype.loadAnimationManager = function(e, t) {
        this.nAssetsToLoad += 1, D.loadAnimationManager(e, "bone", t, this.onAssetsLoaded)
    }, I.prototype.loadActor = function(e) {
        return this.nAssetsToLoad += 1, window.actorManager.addActor(e, this.onAssetsLoaded)
    }, I.prototype.loadLook = function(e, t, i) {
        this.nAssetsToLoad += 1;
        var n = this.onAssetsLoaded,
            o = {
                addToSprite: !1
            };
        t._isCandidateToHideTheMountInFight(i) && (i = P.getLookWithoutMount(i)), D.loadLook(t, i, o, function(t) {
            e._loadedLook = {
                animationManager: t,
                look: i
            }, n()
        })
    }, I.prototype.addWaitingRequest = function() {
        this.nAssetsToLoad += 1
    }, I.prototype.removeWaitingRequest = function() {
        this.reduceNumberOfAssetsToLoad()
    }, e.exports = I
}
