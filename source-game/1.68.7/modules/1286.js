function(e, t, i) {
    function n(e) {
        for (var t = 0; t < e.length; t += 1)
            if ("ObjectEffectMinMax" === e[t]._type || "EffectInstanceMinMax" === e[t]._type) return e[t];
        return null
    }

    function o(e) {
        return "ObjectEffectInteger" === e._type || "EffectInstanceInteger" === e._type || "ObjectEffectDice" === e._type || "EffectInstanceDice" === e._type
    }
    var a = i(474)
        .createEffectInstances,
        r = i(17)
        .getText,
        s = i(1287),
        c = i(476);
    t.display = function(e, t, i) {
        var l = window.gui.chat,
            d = e.effects,
            u = t.effects,
            p = n(d),
            h = n(u);
        if (p && h && p.actionId !== h.actionId) return l.logMsg(r("ui.craft.success"));
        var f = {},
            b = {};
        d = d.filter(o), u = u.filter(o), d.forEach(function(e) {
            f[e.actionId] = e
        }), u.forEach(function(e) {
            b[e.actionId] = e
        });
        var m, M, g, _, A, O = !1,
            v = [],
            y = [];
        for (m = 0; m < d.length; m += 1) {
            _ = d[m], M = _.actionId, A = _.value;
            var z = parseInt(_.effect.operator + _.value, 10);
            if (b.hasOwnProperty(M)) {
                var w = parseInt(b[M].effect.operator + b[M].value, 10);
                g = w - z
            } else g = -z;
            if (M === c.ACTION_ITEM_CHANGE_DURABILITY) return g = b[M].diceNum - f[M].diceNum, void l.logMsg(r("ui.craft.success") + " : +" + g + ", " + b[M].description);
            g && (v.push({
                _type: _._type,
                actionId: M,
                value: g,
                effectCaller: "CraftMagus " + e.objectGID
            }), g > 0 && (O = !0)), y.push(M)
        }
        for (m = 0; m < u.length; m += 1) _ = u[m], M = _.actionId, y.indexOf(M) >= 0 || (A = _.value, v.push({
            _type: _._type,
            actionId: M,
            value: A,
            effectCaller: "CraftMagus " + e.objectGID
        }), A > 0 && (O = !0));
        var T = r(O ? "ui.craft.success" : "ui.craft.failure");
        a(v, function(e, t) {
            if (e) return console.error("Craft Magus: craftResultText cannot createItemInstances", e);
            for (var n, o, a = "", c = 0; c < t.length; c += 1) n = t[c], n.effect.bonusType && (o = n.description, o = n.value > 0 ? "+" + o : o, a += " " + o + ",", a = a.replace("--", "-"));
            var d = "";
            i.magicPoolStatus === s.MAGIC_POOL_INCREASE ? d = " +" + r("ui.craft.smithResidualMagic") : i.magicPoolStatus === s.MAGIC_POOL_LOSS ? d = " -" + r("ui.craft.smithResidualMagic") : a = a.substring(0, a.length - 1), a += d, a && (T += r("ui.common.colon")), l.logMsg(T + a)
        })
    }
}
