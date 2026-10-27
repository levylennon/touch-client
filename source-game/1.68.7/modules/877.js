function(e, t, i) {
    function n(e, t) {
        p.call(this, "div", e), this.addClassNames("EffectDescription"), t = t || {}, this.alwaysVisible = Boolean(t.alwaysVisible)
    }

    function o(e) {
        return e.requiresGlyphDescription() || e.requiresTrapDescription() || e.requiresBombDescription()
    }

    function a(e) {
        if (!e.requiresInvocationDescription() || !e.subEffectDescription) return null;
        for (var t, i, n = new p("div"), o = Math.ceil(e.subEffectDescription.length / 2), a = 0; a < o; a++) t = n.createChild("div", {
            className: "monsterLine"
        }), i = t.createChild("div", {
            className: "column1"
        }), i.setHtml(m + " " + e.subEffectDescription[a]), e.subEffectDescription[o + a] && (i = t.createChild("div", {
            className: "column2"
        }), i.setHtml(m + " " + e.subEffectDescription[o + a]));
        return n
    }

    function r(e) {
        if (!o(e) || !e.subEffectDescription) return null;
        for (var t = new p("div"), i = 0; i < e.subEffectDescription.length; i++) {
            var n = t.createChild("div", {
                className: "singleTab"
            });
            n.setHtml(m + " " + e.subEffectDescription[i])
        }
        return t
    }

    function s(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i],
                o = e.createChild("div", { className: "singleTab" });
            if (n.dbEffect.bonusType === -1 ? o.addClassNames("malus") : 1 === n.dbEffect.bonusType && o.addClassNames("bonus"),n.isExotic && o.addClassNames("exotic"), n.isLost && o.addClassNames("lost"), n.isOver && o.addClassNames("over"), "string" == typeof n.description) {
                var a = m + " " + n.description,
                    r = o.appendChild(b.process(a));
                if (n.isFromEquipment && 0 !== n.dbEffect.bonusType && !n.isLost) {
                    var s = r.createChild("span", {
                        className: "possibleValues"
                    });
                    if (0 !== n.diceSide && n.diceSide > n.diceNum) {
                        var c = "+" === n.dbEffect.operator ? n.diceNum : -n.diceSide,
                            l = "+" === n.dbEffect.operator ? n.diceSide : -n.diceNum;
                        s.setText(d("ui.tooltip.theoretical", c, l))
                    }
                }
            } else o.appendChild(n.description)
        }
    }

    function c(e, t) {
        var i = e.order || 0,
            n = t.order || 0;
        return i - n
    }
    i(878);
    var l = i(879),
        d = i(17).getText,
        u = i(56).inherits,
        p = i(72),
        h = i(469),
        f = h.Item,
        b = i(502),
        m = "&#149;";
    u(n, p), e.exports = n, n.prototype._renderDamageAndEffects = function(e, t) {
        var i, n;
        t && (i = t.isCritical, n = t.effectFromEquipment);
        for (var c = [], l = [], u = 0, p = e.length; u < p; u++) {
            var h = e[u];
            if (h) {
                var f = h.description;
                if (f && (this.alwaysVisible || !h.hidden)) {
                    var b = h.getDurationString();
                    b && (f += " (" + b + ")");
                    var m = h.isDamageEffect() ? c : l;
                    m.push({
                        dbEffect: h.effect,
                        description: f,
                        isExotic: h.isExotic,
                        diceNum: h.diceNum,
                        diceSide: h.diceSide,
                        isFromEquipment: n,
                        isLost: h.isLost,
                        isOver: h.isOver,
                        value: h.value
                    }), h.requiresInvocationDescription() && h.subEffectDescription && m.push({
                        dbEffect: h.effect,
                        description: a(h)
                    }), o(h) && h.subEffectDescription && m.push({
                        dbEffect: h.effect,
                        description: r(h)
                    })
                }
            }
        }
        var M;
        c.length > 0 && (M = i ? d("ui.common.criticalDamages", 1) : d("ui.stats.damagesBonus", c.length), this.createChild("div", {
            className: "effectTitle",
            text: M + d("ui.common.colon")
        }), s(this, c)), l.length > 0 && (M = i ? d("ui.common.criticalEffects", 1) : d("ui.common.effects", l.length), this.createChild("div", {
            className: "effectTitle",
            text: M + d("ui.common.colon")
        }), s(this, l))
    }, n.prototype.setEffectsFromItem = function(e, t) {
        var i;
        t = t || {}, this.clearContent();
        var n, o = e.getItemInstance();
        n = t.showPossibleEffects || !o ? e.getItem() : o, i = l.getSortedEffectInstances(n);
        var a = e.item && e.item.type.category === h.categories.equipment,
            r = e instanceof f && e.type.category === h.categories.equipment;
        r && e.possibleEffects.forEach(function(e) {
            e.isLost = !1
        }), a && (i = l.addLostStats(i, e.item.possibleEffects, !1)), this._renderDamageAndEffects(i, {
            effectFromEquipment: a
        })
    }, n.prototype.setEffectsFromSpell = function(e, t) {
        this.clearContent();
        var i, n, o, a = e.getSpellLevelId();
        for (i = [], n = 0, o = e.getEffectsIds(t)
            .length; n < o; n++) i.push(e.effectInstances[a + "-effects-" + n]);
        for (i.sort(c), this._renderDamageAndEffects(i), i = [], n = 0, o = e.getCriticalEffectsIds(t)
            .length; n < o; n++) i.push(e.effectInstances[a + "-criticalEffect-" + n]);
        i.sort(c), this._renderDamageAndEffects(i, {
            isCritical: !0
        })
    }, n.prototype.setEffects = function(e) {
        this.clearContent(), this._renderDamageAndEffects(e)
    }
}
