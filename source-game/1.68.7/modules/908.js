function(e, t, i) {
    function n(e, t, i) {
        i = i || !0;
        var o = v.isoEngine.mapRenderer.map.cells[e],
            a = o && 1 !== (5 & (o.l || 0)) || M.getActorOnCell(e);
        if (!a && i) {
            var r = m.fromCellId(t),
                s = m.fromCellId(e),
                c = m.orientationTo(s, r);
            if (c % 2 === 0) {
                var l, d;
                switch (c) {
                    case f.DIRECTION_EAST:
                        l = m.getNearestCellInDirection(s, f.DIRECTION_NORTH_WEST), d = m.getNearestCellInDirection(s, f.DIRECTION_SOUTH_WEST);
                        break;
                    case f.DIRECTION_SOUTH:
                        l = m.getNearestCellInDirection(s, f.DIRECTION_NORTH_WEST), d = m.getNearestCellInDirection(s, f.DIRECTION_NORTH_EAST);
                        break;
                    case f.DIRECTION_WEST:
                        l = m.getNearestCellInDirection(s, f.DIRECTION_NORTH_EAST), d = m.getNearestCellInDirection(s, f.DIRECTION_SOUTH_EAST);
                        break;
                    case f.DIRECTION_NORTH:
                        l = m.getNearestCellInDirection(s, f.DIRECTION_SOUTH_WEST), d = m.getNearestCellInDirection(s, f.DIRECTION_SOUTH_EAST)
                }
                a = l && n(l.cellId, e, !1) || d && n(d.cellId, e, !1)
            }
        }
        return a
    }

    function o(e, t, i, n, o) {
        o = o || {};
        var a = p.getSpellEffectZone(e, t, i, n),
            r = Object.keys(a)
            .map(function(e) {
                return parseInt(e, 10)
            });
        return r.sort(function(e, t) {
            var n = m.fromCellId(e),
                a = m.fromCellId(t),
                r = m.fromCellId(i);
            if (n.cellId === a.cellId) return 0;
            var s = (m.advancedOrientationTo(n, r) + 1) % 8,
                c = (m.advancedOrientationTo(a, r) + 1) % 8,
                l = b.getDistance(a.cellId, i) - b.getDistance(n.cellId, i);
            return l ? o.reverseSort ? -l : l : s - c
        }), r
    }

    function a(e, t, i) {
        for (var o, a = !1, r = m.fromCellId(e); r && !a;) {
            if (o = r, r = m.getNearestCellInDirection(r, i), !r) return !0;
            if (a = n(r.cellId, o.cellId), r.cellId === t) break
        }
        return a
    }

    function r(e, t, i) {
        for (var n = m.fromCellId(e), o = d(i) ? 2 : 1, a = 0; a < t; a += o)
            if (n = m.getNearestCellInDirection(n, i), !n) return -1;
        return n.cellId
    }

    function s(e, t, i) {
        for (var o = m.fromCellId(e), a = o, r = d(i) ? 2 : 1, s = 0; s < t; s += r) {
            o = m.getNearestCellInDirection(o, i);
            var c = n(o.cellId, a.cellId);
            if (!o || c) return a.cellId;
            a = o
        }
        return o.cellId
    }

    function c(e, t, i) {
        for (var n = [], o = m.fromCellId(e), a = m.getNearestCellInDirection(o, i), r = d(i) ? 2 : 1, s = 0; a && s < t;) {
            var c = M.getActorOnCell(a.cellId);
            c && n.push(c), a = m.getNearestCellInDirection(a, i), s += r
        }
        return n
    }

    function l(e) {
        return e === h.C || e === h.X || e === h.Q || e === h.U || e === h.plus || e === h.sharp || e === h.minus || e === h.T
    }

    function d(e) {
        return e % 2 === 0
    }
    var u = i(901),
        p = i(734),
        h = i(742),
        f = i(730),
        b = i(735),
        m = i(737),
        M = i(736),
        g = i(739),
        _ = i(909),
        A = i(476),
        O = i(14),
        v = O();
    u.prototype.getPushedEntities = function(e, t, i, n, o, a) {
        this.oldTransposition = this.transposition, this.transposition = JSON.parse(JSON.stringify(this.transposition));
        var r = [];
        return this._pullPushEffects(e, t, i, n, o, a, r), this.transposition = this.oldTransposition, r
    }, u.prototype._pullPushEffects = function(e, t, i, a, r, u, p) {
        for (var h, f, b, g, O, y, z, w, T, C, I, S, E, L, N, R, q, x, B, D, W = v.isoEngine.mapRenderer.map.cells, P = v.actorManager, k = M.getActorOnCell(r), F = v.actorManager.getActor(i), H = this.getVirtualCellFromRealCell(F.cellId), U = m.fromCellId(H), G = u.isCriticalEffect ? e.getEffectInstances()
                .criticalEffects : e.getEffectInstances()
                .effects, j = t[i].caster.displacementBoostBonus, Y = 0; Y < G.length; Y++) {
            var X = G[Y];
            if (X.isDirectEffect()) {
                X.effectId === A.ACTION_BOOST_DISPLACEMENT_FORCE ? j += X.value : X.effectId === A.ACTION_BOOST_DISPLACEMENT_FORCE && (j -= X.value);
                var V = X.effectId === A.ACTION_CHARACTER_PUSH || X.effectId === A.ACTION_CHARACTER_PUSH_FORCE,
                    Q = X.effectId === A.ACTION_FIGHT_PUSH_NO_DAMAGE,
                    K = X.effectId === A.ACTION_CHARACTER_GET_PUSHED,
                    J = X.effectId === A.ACTION_CHARACTER_PULL || X.effectId === A.ACTION_CHARACTER_PULL_FORCE,
                    Z = X.effectId === A.ACTION_CHARACTER_GET_PULLED,
                    $ = X.diceSide,
                    ee = 1 === $,
                    te = 2 === $,
                    ie = 3 === $,
                    ne = (V || Q || K) && 4 === $,
                    oe = !(V || Q || K) && 4 === $,
                    ae = X.value,
                    re = X.effectId === A.ACTION_CHARACTER_PUSH_FORCE || X.effectId === A.ACTION_CHARACTER_PULL_FORCE,
                    se = X.diceNum + j,
                    ce = X.getZoneEffect(),
                    le = ce.zoneShape;
                if (V || Q || K) {
                    if (0 === se) continue;
                    for (y = K ? a : r, z = o(W, a, y, ce), w = l(le) || K ? r : a, T = k && M.verifySpellEffectMask(X, i, k.actorId, u), C = this.sortFightersByCenterCell(v.gui.fightManager.getAvailableFighterIds(), r), x = 0; x < C.length; x++)
                        if (S = parseInt(C[x], 10), h = v.actorManager.getActor(S), !(!h || h.isDead || h.isInvisibleInFight() || S === i && a === r) && (B = t[S].target.displacementWeaknessBonus, I = this.getVirtualCellFromRealCell(h.cellId), q = m.fromCellId(I), E = this.oldTransposition[h.cellId] || h.cellId, z.indexOf(I) !== -1 || z.indexOf(E) !== -1 && "P" === X.rawZone && "I" === X.triggers)) {
                            if (L = M.verifySpellEffectMask(X, i, h.actorId, u), !K && !L || K && !T) continue;
                            if (f = I !== y || K ? w : a, ee && (f = H), te && I === y) {
                                g = new _(h.actorId, 0, 0, (!1), y), p.push(g);
                                continue
                            }
                            N = I === f ? U : m.fromCellId(f);
                            var de;
                            if (ne || ie ? (D = m.fromCellId(y), ne ? b = ae : (R = m.isInDiag(D, U), b = m.advancedOrientationTo(D, U, {
                                    fourDir: !R
                                })), de = this._retrievePushedEntitiesInLine(h, se + B, b, [I], {
                                    doesDamage: !Q,
                                    bypassNoPush: re
                                })) : (R = m.isInDiag(q, N), b = m.advancedOrientationTo(q, N, {
                                    fourDir: !R
                                }), de = this._retrievePushedEntitiesInLine(h, se + B, b, z, {
                                    doesDamage: !Q,
                                    bypassNoPush: re
                                })), !de.length) continue;
                            this.changePosition(de[0].id, de[0].newCellId), p.push.apply(p, de)
                        }
                }
                if (X.effectId === A.ACTION_CHARACTER_PUSH_UP_TO) {
                    var ue = m.fromCellId(r);
                    f = m.fromCellId(a);
                    var pe = m.distanceToCell(ue, f),
                        he = pe + j - 1;
                    if (he <= 0) continue;
                    R = m.isInDiag(ue, f), b = m.advancedOrientationTo(ue, f, {
                        fourDir: !R
                    });
                    var fe = c(a, 1, b);
                    if (h = fe[0], !M.isMovableEntity(h)) continue;
                    var be = this.getVirtualCellFromRealCell(h.cellId),
                        me = s(be, he, b);
                    if (ue = m.fromCellId(me), g = new _(h.actorId, 0, 0, (!1), me), p.push(g), O = this.hasPathAMark(h, be, me, b, [me]), !O) continue;
                    g.newCellId = O.cellId, g.marks = O.marks
                }
                if (X.effectId === A.ACTION_THROW_CARRIED_CHARACTER) {
                    h = P.getActor(i);
                    var Me = h && h.carriedActor;
                    if (!Me) continue;
                    g = new _(Me.actorId, 0, 0, (!1), r), p.push(g), O = this.getMarksCell(Me.actorId, r), O.length && (g.marks = O)
                }
                if (J || Z) {
                    if (0 === se) continue;
                    for (y = Z ? a : r, z = o(W, a, y, ce, {
                            reverseSort: !0
                        }), w = l(le) || Z ? r : a, T = k && M.verifySpellEffectMask(X, i, k.actorId, u), C = this.sortFightersByCenterCell(v.gui.fightManager.getAvailableFighterIds(), r, {
                            reverseSort: !0
                        }), x = 0; x < C.length; x++)
                        if (S = parseInt(C[x], 10), h = v.actorManager.getActor(S), !(!h || h.isDead || h.isInvisibleInFight() || S === i && a === r) && (B = t[S].target.displacementWeaknessBonus, I = this.getVirtualCellFromRealCell(h.cellId), E = this.oldTransposition[h.cellId] || h.cellId, z.indexOf(I) !== -1 || z.indexOf(E) !== -1 && "P" === X.rawZone && "I" === X.triggers)) {
                            if (L = M.verifySpellEffectMask(X, i, h.actorId, u), !Z && !L || Z && !T) continue;
                            if (!re && !M.isMovableEntity(h)) continue;
                            if (q = m.fromCellId(I), f = I !== y || Z ? w : a, N = m.fromCellId(f), ee && (f = H), (te || oe) && I === y) {
                                g = new _(h.actorId, 0, 0, (!1), y), p.push(g);
                                continue
                            }
                            N = I === f ? U : m.fromCellId(f), ie ? (D = m.fromCellId(y), R = m.isInDiag(U, D), b = m.advancedOrientationTo(U, D, {
                                fourDir: !R
                            })) : (R = m.isInDiag(N, q), b = m.advancedOrientationTo(N, q, {
                                fourDir: !R
                            }));
                            var ge = d(b) ? 2 : 1;
                            g = new _(h.actorId, 0, 0, (!1), I), p.push(g), this.changePosition(h.actorId, I);
                            for (var _e = 0; _e < se + B; _e += ge) {
                                var Ae = q;
                                if (q = m.getNearestCellInDirection(Ae, b), n(q.cellId, Ae.cellId)) break;
                                if (oe && Ae.cellId === y) break;
                                for (var Oe = !1, ve = 0; ve < p.length; ve++) {
                                    var ye = p[ve];
                                    if (ye.id !== h.actorId && ye.newCellId === q.cellId) {
                                        Oe = !0;
                                        break
                                    }
                                }
                                if (!Oe && (g.newCellId = q.cellId, this.changePosition(h.actorId, q.cellId), O = this.getMarksCell(h.actorId, q.cellId), O.length)) {
                                    g.marks = O;
                                    break
                                }
                            }
                        }
                }
            }
        }
    }, u.prototype.isEntityInSpellZone = function(e, t) {
        var i = v.actorManager.getActor(e);
        if (!i) return !1;
        var n = this.getVirtualCellFromRealCell(i.cellId);
        return t && t.indexOf(n) > -1
    }, u.prototype.getMarksCell = function(e, t) {
        for (var i = v.background.zones, n = [], o = 0; o < i.length; o++) {
            var a = i[o],
                r = a.data;
            if (r) {
                var s = r.markCell,
                    c = r.markSize;
                (s === t && r.type === g.MARK.BOMB && !this.hasAlreadyBeenAffectedByMark(r, e) && M.doesBombMarkStillExist(r) || c >= b.getDistance(t, s) && r.type === g.MARK.TRAP && !this.hasAlreadyBeenAffectedByMark(r)) && n.push(r)
            }
        }
        return n
    }, u.prototype._retrievePushedEntitiesInLine = function(e, t, i, o, s) {
        function c(e) {
            for (A = 0; A < u.length; A++)
                if (g = u[A], g.id === e) return g;
            return null
        }
        s = s || {};
        var l = this.getVirtualCellFromRealCell(e.cellId),
            u = [],
            p = s.bypassNoPush || M.isMovableEntity(e);
        if (!p) return u;
        var h, f, b, g, A, O = m.fromCellId(l),
            v = m.getNearestCellInDirection(O, i),
            y = t,
            z = d(i) ? 2 : 1;
        for (A = 0; A < t; A += z)
            if (v) {
                if (n(v.cellId, h ? h.cellId : l)) break;
                y -= z, h = v, v = m.getNearestCellInDirection(v, i)
            } if (y <= 0 && h) return g = new _(e.actorId, 0, 0, s.doesDamage, h.cellId), u.push(g), f = this.hasPathAMark(e, l, h.cellId, i, o), f && (g.marks = f.marks, g.newCellId = f.cellId), u;
        var w, T = [];
        O = m.fromCellId(l);
        var C = new _(e.actorId, 0, t, s.doesDamage, O.cellId);
        u.push(C);
        var I = 1;
        if (b = r(O.cellId, t, i), f = this.hasPathAMark(e, O.cellId, b, i, o)) return C.marks = f.marks, C.newCellId = f.cellId, C.force = 0, u;
        for (var S = 0; S < t && (0 === S ? (h = O, v = m.getNearestCellInDirection(O, i)) : v && (h = v, v = m.getNearestCellInDirection(v, i)), v); S += z) {
            var E = r(O.cellId, t, i);
            if (n(v.cellId, h.cellId)) {
                w = M.getActorOnCell(v.cellId);
                var L = !1;
                if (w) {
                    L = this.isEntityInSpellZone(w.actorId, o);
                    var N = s.bypassNoPush || M.isMovableEntity(w);
                    if (N) {
                        b = r(v.cellId, t, i);
                        var R = a(v.cellId, b, i),
                            q = this.hasPathAMark(w, v.cellId, b, i, o);
                        if (L && !R && !q) {
                            C.newCellId = b, C.force = 0;
                            break
                        }
                    }
                    if (g = c(w.actorId), g ? (g.pushedIndexes.push(I), g.newCellId = v.cellId) : (g = new _(w.actorId, I, t, s.doesDamage, v.cellId), g.pushingEntity = u[0], u.push(g)), I++, !N) break
                } else if (0 === S) {
                    C.newCellId = h.cellId;
                    break
                }
                if (!L) {
                    var x = m.getNearestCellInDirection(v, i);
                    if (x && !n(x.cellId, v.cellId)) break
                }
            } else S === t - 1 || w && w.actorId !== e.actorId || !a(v.cellId, E, i) ? a(O.cellId, E, i) || (C.force = 0) : T && T.indexOf(v.cellId) === -1 && (C.newCellId = v.cellId, T.push(v.cellId));
            if (0 === C.force || C.mark) break
        }
        var B = T.length;
        if (B > 0)
            for (A = 0; A < u.length; A++) u[A].force -= B * z;
        return u
    }, u.prototype.hasPathAMark = function(e, t, i, o, a) {
        for (var r, s = m.fromCellId(t); s.cellId !== i && (r = s, s = m.getNearestCellInDirection(s, o));) {
            var c = M.getActorOnCell(s.cellId),
                l = c && this.isEntityInSpellZone(c.actorId, a) && !this.hasPathAMark(c, s.cellId, i, o, a);
            if (n(s.cellId, r.cellId) && !l) break;
            var d = this.getMarksCell(e.actorId, s.cellId);
            if (d.length) return {
                marks: d,
                cellId: s.cellId
            }
        }
        return null
    }, u.prototype.sortFightersByCenterCell = function(e, t, i) {
        i = i || {};
        var n = this;
        return e.sort(function(e, o) {
            var a = v.actorManager.getActor(e),
                r = v.actorManager.getActor(o);
            if (!a || !r) return 0;
            var s = n.getVirtualCellFromRealCell(a.cellId),
                c = n.getVirtualCellFromRealCell(r.cellId),
                l = m.fromCellId(s),
                d = m.fromCellId(c),
                u = m.fromCellId(t);
            if (l.cellId === d.cellId) return 0;
            var p = (m.advancedOrientationTo(l, u) + 1) % 8,
                h = (m.advancedOrientationTo(d, u) + 1) % 8,
                f = b.getDistance(c, t) - b.getDistance(s, t);
            return f ? i.reverseSort ? -f : f : i.reverseSort ? h - p : p - h
        }), e
    }
}
