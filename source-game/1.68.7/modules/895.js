function(e, t, i) {
    function n(e) {
        var t = window.gui.fightManager.getTurnCount();
        return e.effect.hasOwnProperty("delay") ? t + e.effect.delay : t
    }

    function o(e) {
        c.call(this, "div", {
            className: "BuffItem"
        });
        var t = e.castingSpell.spell.id,
            i = e.castingSpell.casterId,
            o = e.parentBoostUid,
            a = e.effect.hasOwnProperty("delay") && e.effect.delay > 0 ? n(e) : -1;
        a > 0 ? this.key = t + "#" + i + "#" + o + "#" + a : this.key = t + "#" + i + "#" + o, this.parentBoostUid = 0, this.spell = e.castingSpell.spell;
        var r = this;
        this.spell.getIconUri && l.preloadImage(this.spell.getIconUri(), function(e) {
            r && r.rootElement && r.setStyle("backgroundImage", e)
        }), this.buffs = [], this.cooldownLabel = this.createChild("div", {
            className: "cooldown"
        }), this.setCooldown(0)
    }

    function a(e) {
        return e.castingSpell.spell.id + "#" + e.castingSpell.casterId + "#" + e.parentBoostUid + "#" + n(e)
    }

    function r(e) {
        return e.effect.hasOwnProperty("delay") && e.effect.delay > 0 ? a(e) : e.castingSpell.spell.id + "#" + e.castingSpell.casterId + "#" + e.parentBoostUid
    }
    var s = i(56)
        .inherits,
        c = i(72),
        l = i(12),
        d = i(13);
    s(o, c), e.exports = o, e.exports.getDelayKey = a, e.exports.getKey = r, o.prototype.hasUid = function(e) {
        for (var t = 0; t < this.buffs.length; t++)
            if (this.buffs[t].uid === e) return !0;
        return !1
    }, o.prototype.addBuff = function(e) {
        this.buffs.push(e), 0 !== e.parentBoostUid && (this.parentBoostUid = e.parentBoostUid), this.updateCooldown()
    }, o.prototype.isUnusableNextTurn = function() {
        for (var e = 0; e < this.buffs.length; e++)
            if (!this.buffs[e].isUnusableNextTurn()) return !1;
        return !0
    }, o.prototype.updateCooldown = function() {
        for (var e = 0, t = !1, i = 0, n = 0, o = this.buffs.length; n < o; n++) {
            var a = this.buffs[n];
            t && e !== a.duration && this.setCooldown(this.cooldown - 1), (0 === i || a.effect.delay < i) && (i = a.effect.delay), e = a.duration, t = !0
        }
        i > 0 ? this.setCooldown(i) : this.setCooldown(e), this.isUnusableNextTurn() && this.addClassNames("disabled")
    }, o.prototype.setCooldown = function(e) {
        this.cooldown = e, e === -1 ? (this.cooldownLabel.setText("+"), this.cooldownLabel.show()) : 0 === e || e === Number.MAX_VALUE ? (this.cooldownLabel.setText(""), this.cooldownLabel.hide()) : e < -1 ? (this.cooldownLabel.setText(d.INFINITE_CHARACTER), this.cooldownLabel.show()) : (this.cooldownLabel.setText(e), this.cooldownLabel.show())
    }, o.prototype.maxCooldown = function() {
        if (this.cooldown !== -1) return this.cooldown;
        for (var e = 0, t = 0, i = this.buffs.length; t < i; t++) {
            var n = this.buffs[t];
            (n.duration > e || n.duration < -1) && (e = n.duration)
        }
        return e
    }, o.prototype.removeBuff = function(e) {
        for (var t = 0; t < this.buffs.length; t++)
            if (this.buffs[t] === e) {
                this.buffs.splice(t, 1), this.updateCooldown();
                break
            }
    }
}
