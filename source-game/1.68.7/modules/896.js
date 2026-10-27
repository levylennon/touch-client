function(e, t, i) {
    function n(e, t) {
        d.call(this, "div", t), this.addClassNames("BuffDescription"), this._buildDomElements(t), this.updateUI(e)
    }

    function o(e) {
        this._domElements.spellName.setText(e)
    }

    function a(e) {
        this._domElements.casterName.setText(c("ui.fight.caster") + c("ui.common.colon") + e)
    }

    function r(e) {
        this._domElements.effectsAndDamage.setEffects(e)
    }
    i(897);
    var s = i(877),
        c = i(17)
        .getText,
        l = i(56)
        .inherits,
        d = i(72);
    l(n, d), e.exports = n, n.prototype._buildDomElements = function(e, t) {
        var i = this._domElements = {};
        i.spellName = this.createChild("div", {
            className: "spellName"
        }), i.casterName = this.createChild("div", {
            className: "casterName"
        }), i.effectsAndDamage = this.appendChild(new s(t, {
            alwaysVisible: !0
        }))
    }, n.prototype.updateUI = function(e) {
        if (e) {
            var t = e.spellName,
                i = e.casterName,
                n = e.effects;
            o.call(this, t), a.call(this, i), r.call(this, n)
        }
    }
}
