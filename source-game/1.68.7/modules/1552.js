function(e, t, i) {
    function n(e, t) {
        var i = e.getFighter(),
            n = t.getFighter();
        return i && n ? i.data.stats.invisibilityState !== g && (i.data.stats.invisibilityState !== _ && (i.data.teamId !== n.data.teamId && (i.data.alive !== !1 && (!i.data.isCarryied && (!i.hasState(m.STATE_CANNOT_TACKLE) && (!i.hasState(m.STATE_CHARACTER_ROOTED) && i.canTackle)))))) : (console.warn("canBeTackler: Corresponding fighters could not be found."), !1)
    }

    function o(e, t, i) {
        var n = e.getFighter();
        return n ? n.data.stats.invisibilityState !== g && (n.data.stats.invisibilityState !== _ && ((!n.data.isCarryied || t !== i) && (!n.hasState(m.STATE_CANNOT_BE_TACKLED) && !n.hasState(m.STATE_CHARACTER_ROOTED)))) : (console.error("Corresponding fighter could not be found."), !1)
    }

    function a(e, t) {
        var i = Math.max(0, e.getFighterData()
                .stats.tackleEvade || 0),
            n = Math.max(0, t.getFighterData()
                .stats.tackleBlock || 0);
        return (i + 2) / (n + 2) / 2
    }

    function r(e, t, i, r, s, c) {
        i = Math.max(0, i), r = Math.max(0, r);
        var l = {
            mp: 0,
            ap: 0
        };
        if (!o(e, s, c)) return l;
        if (0 === t.length) return l;
        for (var d = 0; d < t.length; d++) {
            var u = t[d];
            if (u && n(u, e)) {
                var p = a(e, u);
                p >= 1 || (l.mp += ~~(i * (1 - p) + .5), l.ap += ~~(r * (1 - p) + .5))
            }
        }
        return l
    }

    function s(e, t, i, n, o, a, r, s) {
        this.cellId = e, this.from = t, this.availableMp = i, this.availableAp = n, this.costMP = o, this.costAP = a, this.distance = r, this.damagingMarks = s
    }

    function c(e, t) {
        var i = 0,
            n = 0;
        return e.availableMp > t.availableMp ? (i += 1, t.availableMp < 0 && (i += 4)) : e.availableMp < t.availableMp && (n += 1, e.availableMp < 0 && (n += 4)), e.availableAp > t.availableAp ? i += 1 : e.availableAp < t.availableAp && (n += 1), e.damagingMarks.length < t.damagingMarks.length ? i += 2 : e.damagingMarks.length > t.damagingMarks.length && (n += 2), i === n ? A.SAME : i > n ? A.BETTER : i < n ? A.WORSE : void 0
    }

    function l(e, t) {
        return e.damagingMarks.length < t.damagingMarks.length ? -1 : e.damagingMarks.length === t.damagingMarks.length ? e.availableMp > t.availableMp ? -1 : e.availableMp === t.availableMp ? e.availableAp > t.availableAp ? -1 : e.availableAp === t.availableAp ? 0 : 1 : 1 : 1
    }

    function d(e, t, i, n, o) {
        this.availableMp = e.mp, this.availableAp = e.ap, this.costMP = t.mp, this.costAP = t.ap, this.pathNodes = i, this.reachable = n, this.isTackled = o, this.path = null
    }

    function u(e, t, i, n) {
        var o = window.gui.fightManager,
            a = M(n),
            r = i[t];
        if (!r) return a;
        for (var s = o.getFighter(e), c = s && s.hasState(m.STATE_KABOOM), l = 0; l < r.length; l += 1) {
            var d = r[l],
                u = d.markType,
                p = d.markId,
                h = o.getFighter(d.markAuthorId),
                f = c && h && h.data.teamId === s.data.teamId,
                g = a.indexOf(p) === -1;
            (g && u === b.TRAP || !f && u === b.WALL) && a.push(p)
        }
        return a
    }

    function p(e, t) {
        var i = {},
            n = e.getFighterData(),
            o = n.stats,
            a = o.movementPoints;
        if (a <= 0) return i;
        var c = window.actorManager,
            p = window.isoEngine.mapRenderer,
            f = [],
            b = {},
            m = new s(t, null, o.movementPoints, o.actionPoints, 0, 0, 1, []);
        f.push(m), b[t] = m;
        for (var M = c.getIndexedVisibleActors({
                showAlsoInvisibleInMyTeam: !0
            }), g = window.isoEngine.fightSequence.getCellIdsAffectedByMarks(); f.length;) {
            for (var _, A = f.pop(), O = A.cellId, v = h.getNeighbourCells(O, !1), y = [], z = 0; z < v.length;) {
                _ = v[z];
                var w = M[_];
                void 0 === _ || w ? (v.splice(z, 1), w && y.push(w)) : z++
            }
            var T = r(e, y, A.availableMp, A.availableAp, t, O),
                C = T.ap > 0 || T.mp > 0,
                I = A.availableMp - T.mp - 1,
                S = A.availableAp - T.ap,
                E = o.movementPoints - I,
                L = o.actionPoints - S,
                N = A.distance + 1,
                R = I >= 0;
            for (z = 0; z < v.length; z++)
                if (_ = v[z], p.isWalkable(_)) {
                    var q = u(e.actorId, _, g, A.damagingMarks);
                    m = new s(_, O, I, S, E, L, N, q);
                    var x = i[_];
                    if (x) {
                        var B = x.update(m, R, C);
                        if (!B) continue
                    } else i[_] = new d({
                        ap: S,
                        mp: I
                    }, {
                        ap: L,
                        mp: E
                    }, [m], R, C);
                    A.distance < a && f.push(m)
                }
        }
        for (var D in i) i.hasOwnProperty(D) && i[D].pathNodes.sort(l);
        return i
    }
    var h = i(735),
        f = i(684),
        b = i(1553),
        m = i(743),
        M = i(32)
        .shallowCopyArray,
        g = f.INVISIBLE,
        _ = f.DETECTED,
        A = {
            SAME: 1,
            WORSE: 2,
            BETTER: 3
        };
    d.prototype.update = function(e, t, i) {
        for (var n = 0; n < this.pathNodes.length; n += 1) {
            var o = c(e, this.pathNodes[n]);
            if (o === A.SAME || o === A.WORSE) return !1;
            if (o === A.BETTER) {
                this.pathNodes[n] = e;
                break
            }
        }
        return this.availableAp = e.availableAp, this.availableMp = e.availableMp, this.costMP = e.costMP, this.costAP = e.costAP, this.reachable = t, this.isTackled = i, !0
    }, t.getReachableZone = p
}
