function(e, t, i) {
    function n(e, t) {
        if (t = t || {}, C.call(this, "div", t), this.addClassNames("SpellDescription"), this._buildDomElements(t), this.visibilityBoundToOptions = !t.visibilityOptions && !t.spellTooltipAll, this.visibilityOptions = t.visibilityOptions || {}, t.spellTooltipAll)
            for (var i in N) this.visibilityOptions[i] = !0;
        this.updateVisibleBlocks(!0), this.updateUI(e)
    }

    function o(e) {
        this._domElements.spellName.setText(e.getName())
    }

    function a(e, t) {
        var i = e.getProperty("apCost", t),
            n = e.getProperty("minRange", t),
            o = e.getProperty("range", t);
        this._domElements.points.ap.setText(w("ui.common.ap") + w("ui.common.colon") + i), this._domElements.points.ra.setText(w("ui.common.ra") + w("ui.common.colon") + n), o !== n ? this._domElements.points.range.setText(" - " + o) : this._domElements.points.range.clearContent()
    }

    function r(e, t) {
        var i = e.getProperty("criticalHitProbability", t);
        i > 0 ? this._domElements.criticalHit.setText(w("ui.common.short.CriticalHit") + w("ui.common.colon") + i + "%") : this._domElements.criticalHit.clearContent()
    }

    function s(e, t) {
        var i = e.getProperty("criticalHitProbability", t),
            n = 0,
            o = window.gui.playerData.characters.getControlledCharacter()
            .characteristics;
        o && (n = S.totalCriticalHitRate(i, o)), i > 0 && n > 0 && this._domElements.criticalHit.isVisible() ? this._domElements.criticalReal.setText(w("ui.itemtooltip.itemCriticalReal", n + "%")) : this._domElements.criticalReal.clearContent()
    }

    function c(e) {
        var t = e.getHumanReadableZoneInfo();
        t.length ? this._domElements.areaOfEffect.setText(w("ui.common.spellArea") + w("ui.common.colon") + t) : this._domElements.areaOfEffect.setText(t)
    }

    function l(e, t) {
        this._domElements.level.setText(w("ui.common.level") + " " + e.getProperty("grade", t))
    }

    function d(e, t) {
        0 !== e.getProperty("typeId", t) ? this._domElements.breed.setText(w("ui.common.breedSpell") + w("ui.common.colon") + e.getHumanReadableSpellType()) : this._domElements.breed.clearContent()
    }

    function u(e, t) {
        e.getProperty("rangeCanBeBoosted", t) ? this._domElements.rangeBoost.setText(w("ui.spell.rangeBoost")) : this._domElements.rangeBoost.clearContent()
    }

    function p(e, t) {
        !e.getProperty("castTestLos", t) && e.getProperty("range", t) ? this._domElements.castWithoutLos.setText(w("ui.spellInfo.castWithoutLos")) : this._domElements.castWithoutLos.clearContent()
    }

    function h(e, t) {
        e.getProperty("castInLine", t) && e.getProperty("castInDiagonal", t) ? this._domElements.castInLine.setHtml(w("ui.spellInfo.castInLine") + "</br>" + w("ui.spellInfo.castInDiagonal")) : e.getProperty("castInLine", t) ? this._domElements.castInLine.setText(w("ui.spellInfo.castInLine")) : e.getProperty("castInDiagonal", t) ? this._domElements.castInLine.setText(w("ui.spellInfo.castInDiagonal")) : this._domElements.castInLine.clearContent()
    }

    function f(e, t) {
        var i = e.getProperty("maxCastPerTurn", t);
        i > 0 ? this._domElements.maxCastPerTurn.setText(w("ui.spellInfo.maxCastPerTurn") + w("ui.common.colon") + i) : this._domElements.maxCastPerTurn.clearContent()
    }

    function b(e, t) {
        var i = e.getProperty("maxCastPerTarget", t);
        i > 0 ? this._domElements.maxCastPerTarget.setText(w("ui.spellInfo.maxCastPerTarget") + w("ui.common.colon") + i) : this._domElements.maxCastPerTarget.clearContent()
    }

    function m(e, t) {
        e.getProperty("maxStack", t) > 0 ? this._domElements.maxStack.setText(w("ui.spellInfo.maxStack") + w("ui.common.colon") + e.getProperty("maxStack", t)) : this._domElements.maxStack.clearContent()
    }

    function M(e, t) {
        var i = e.getProperty("minCastInterval", t);
        if (i > 0) {
            var n = i >= 63 ? E.INFINITE_CHARACTER : i;
            this._domElements.minCastInterval.setText(w("ui.spellInfo.minCastInterval") + w("ui.common.colon") + n)
        } else this._domElements.minCastInterval.clearContent()
    }

    function g(e, t) {
        e.getProperty("globalCooldown", t) === -1 ? this._domElements.globalCooldown.setText(w("ui.spellInfo.globalCastInterval")) : this._domElements.globalCooldown.clearContent()
    }

    function _(e, t) {
        var i = e.getProperty("initialCooldown", t);
        i > 0 ? this._domElements.initialCooldown.setText(w("ui.spellInfo.initialCastInterval") + w("ui.common.colon") + i) : this._domElements.initialCooldown.clearContent()
    }

    function A(e, t) {
        var i = e.getProperty("statesForbidden", t);
        if (i && i.length > 0) {
            this._domElements.forbiddenStates.createChild("span", {
                text: w("ui.spellInfo.stateForbidden") + w("ui.common.colon")
            });
            for (var n = 0; n < i.length; n++) {
                var o = 0 === n ? "" : L;
                this._domElements.forbiddenStates.createChild("span")
                    .setHtml(o + e._tables.spellStates[i[n]].nameId)
            }
        } else this._domElements.forbiddenStates.clearContent()
    }

    function O(e, t) {
        var i = e.getProperty("statesRequired", t);
        if (i && i.length > 0) {
            this._domElements.requiredStates.createChild("span", {
                text: w("ui.spellInfo.stateRequired") + w("ui.common.colon")
            });
            for (var n = 0; n < i.length; n++) {
                var o = 0 === n ? "" : L;
                this._domElements.requiredStates.createChild("span")
                    .setHtml(o + e._tables.spellStates[i[n]].nameId)
            }
        } else this._domElements.requiredStates.clearContent()
    }

    function v(e, t) {
        this._domElements.effectsAndDamage.setEffectsFromSpell(e, t)
    }

    function y(e, t) {
        this._domElements.description.setHtml(e.getProperty("descriptionId", t))
    }
    i(886);
    var z = i(877),
        w = i(17)
        .getText,
        T = i(56)
        .inherits,
        C = i(72),
        I = i(55),
        S = i(16),
        E = i(13),
        L = ", ",
        N = {
            spellTooltipName: ["spellName"],
            spellTooltipApRange: ["pointsLine"],
            spellTooltipCritical: ["criticalHit"],
            spellTooltipEffect: ["areaOfEffect", "level", "breed", "rangeBoost", "castWithoutLos", "castInLine", "maxStack", "maxCastPerTarget", "maxCastPerTurn", "minCastInterval", "globalCooldown", "forbiddenStates", "requiredStates", "effectsAndDamage", "initialCooldown"],
            spellTooltipDescription: ["description"]
        };
    T(n, C), e.exports = n, n.prototype.updateVisibleBlocks = function(e) {
        var t = this._domElements;
        for (var i in N) {
            var n = this.visibilityOptions[i],
                o = this.visibilityBoundToOptions ? I[i] : Boolean(this.visibilityOptions[i]);
            if (e || o !== n) {
                this.visibilityOptions[i] = o;
                for (var a = N[i], r = 0; r < a.length; r++) t[a[r]].toggleDisplay(o)
            }
        }
    }, n.prototype._buildDomElements = function(e, t) {
        var i = this._domElements = {};
        i.spellName = this.createChild("div", {
            className: "spellName"
        }), i.pointsLine = this.createChild("div", {
            className: "pointsLine"
        }), i.points = {
            ap: i.pointsLine.createChild("span", {
                className: "ap"
            }),
            ra: i.pointsLine.createChild("span", {
                className: "ra"
            }),
            range: i.pointsLine.createChild("span")
        }, i.criticalReal = this.createChild("div"), i.criticalHit = this.createChild("div"), i.areaOfEffect = this.createChild("div"), i.level = this.createChild("div"), i.breed = this.createChild("div"), i.rangeBoost = this.createChild("div"), i.castWithoutLos = this.createChild("div"), i.castInLine = this.createChild("div"), i.maxStack = this.createChild("div"), i.maxCastPerTarget = this.createChild("div"), i.maxCastPerTurn = this.createChild("div"), i.initialCooldown = this.createChild("div"), i.minCastInterval = this.createChild("div"), i.globalCooldown = this.createChild("div"), i.forbiddenStates = this.createChild("div"), i.requiredStates = this.createChild("div"), i.effectsAndDamage = this.appendChild(new z(t)), i.description = this.createChild("div", {
            className: "description"
        })
    }, n.prototype.updateUI = function(e) {
        if (e && e.spell && e.spell.isLoaded) {
            this.updateVisibleBlocks();
            var t = e.spell,
                i = void 0 !== e.level ? e.level : t.level;
            o.call(this, t), a.call(this, t, i), r.call(this, t, i), s.call(this, t, i), c.call(this, t), l.call(this, t, i), d.call(this, t, i), u.call(this, t, i), p.call(this, t, i), h.call(this, t, i), f.call(this, t, i), b.call(this, t, i), m.call(this, t, i), _.call(this, t, i), M.call(this, t, i), g.call(this, t, i), O.call(this, t, i), A.call(this, t, i), v.call(this, t, i), y.call(this, t, i)
        }
    }
}
