function(e, t, i) {
    function n(e, t) {
        for (var i = 0; i < e.length; i += 1) {
            var n = e[i];
            n && Object.keys(n)
                .length && t.push(n)
        }
    }

    function o(e) {
        var t = {};
        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
        return t.diceNum = t.diceNum || 0, t.diceSide = t.diceSide || 0, t.value = t.value || 0, void 0 !== e.min && void 0 !== e.max ? (t._type = "EffectInstanceDice", t.diceNum = t.min, t.diceSide = t.max) : e.diceSide ? e.diceNum && e.diceSide && (t._type = "EffectInstanceDice", t.diceNum += t.value, t.diceSide += t.value, t.value = 0) : (t._type = "ObjectEffectInteger", e.diceNum && (t.value += e.diceNum), t.diceNum = 0, t.diceSide = 0), t
    }

    function a(e) {
        if (!e) throw new Error("Missing deps.")
    }

    function r(e, t, i) {
        this._logger = e,
        a(this._logger),
        this._itemManager = t,
        a(this._itemManager),
        this._effectInstanceFactory = i,
        a(this._effectInstanceFactory)
    }
    var s = i(477),
        c = i(1113);
    e.exports = r,
    r.prototype._mergeEffectInstances = function(e, t) {
        for (var i = [], n = {}, a = [], r = 0; r < e.length; r += 1) {
            var c = e[r];
            c && (c.effect.category === s.special ? a.push(c) : n[c.effectId] ? n[c.effectId].effect.useDice && (n[c.effectId].diceNum += c.diceNum || 0, n[c.effectId].diceSide += c.diceSide || 0, n[c.effectId].value += c.value || 0) : n[c.effectId] = o(c))
        }
        for (var l in n) n.hasOwnProperty(l) && i.push(o(n[l]));
        i = i.concat(a),
        this._effectInstanceFactory.createEffectInstances(i, t)
    },
    r.prototype.constructEffectInstances = function(e, t, i, o, a, r) {
        var l, d = this,
            u = [],
            p = [],
            h = o.bonusIsSecret,
            f = Math.max(e - 1, 0);
        if (o.effects.length && !h) {
            var b = o.effects[f];
            n(b, u)
        }
        var m = o.id,
            M = a.itemSets[m] || {},
            g = M.setEffects || [],
            _ = M.setObjects || [],
            A = e === _.length;
        if (g.length && A && h && n(g, u), t && i.length) {
            var O = [];
            for (l = 0; l < i.length; l += 1) {
                var v = i[l],
                    y = c.getEquippedItemById(a, v),
                    z = {};
                if (y) {
                    for (var w in y.effects)
                        if (y.effects.hasOwnProperty(w)) {
                            var T = y.effects[w],
                                C = T.clone();
                            C.diceNum = 0, C.diceSide = 0, z[w] = C
                        }
                } else {
                    var I = this._itemManager.items[v];
                    I ? z = I.possibleEffects : (this._logger.error("Missing item", v), z = {})
                }
                for (var S in z)
                    if (z.hasOwnProperty(S)) {
                        var E = z[S];
                        E.effect && E.effect.category === s.special ? p.push(E) : E.effect.showInSet && O.push(E)
                    }
            }
            u = u.concat(O)
        }
        for (l = 0; l < u.length; l += 1) {
            var L = u[l];
            L.effectCaller || (L.effectCaller = "itemSet " + m)
        }
        this._effectInstanceFactory.createEffectInstances(u, function(e, t) {
            return e ? r(e) : void d._mergeEffectInstances(t, function(e, t) {
                return e ? r(e) : (t = t.concat(p), r(null, t))
            })
        })
    }
}
